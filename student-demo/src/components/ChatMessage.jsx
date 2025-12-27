function ChatMessage({ message, isBot }) {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Simple markdown-like formatting for bot messages
  const formatText = (text) => {
    if (!isBot) return text;

    // Split into lines and process
    return text.split('\n').map((line, i) => {
      // Bold text with **
      let formattedLine = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

      // Bullet points
      if (line.startsWith('• ') || line.startsWith('- ')) {
        return (
          <div key={i} className="ml-2">
            <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
          </div>
        );
      }

      // Numbered items
      if (/^\d+\.\s/.test(line)) {
        return (
          <div key={i} className="ml-2">
            <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
          </div>
        );
      }

      // Empty lines become breaks
      if (line.trim() === '') {
        return <br key={i} />;
      }

      return (
        <div key={i}>
          <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
        </div>
      );
    });
  };

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      <div className={`flex items-end gap-2 max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
          isBot ? 'bg-primary/20' : 'bg-secondary/20'
        }`}>
          {isBot ? '🤖' : '👤'}
        </div>

        {/* Message Bubble */}
        <div className={`rounded-2xl px-4 py-3 ${
          isBot
            ? 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm'
            : 'bg-primary text-white rounded-br-sm'
        }`}>
          <div className={`text-sm leading-relaxed ${isBot ? 'text-gray-800' : 'text-white'}`}>
            {formatText(message.text)}
          </div>
          <div className={`text-xs mt-1 ${isBot ? 'text-gray-400' : 'text-white/70'}`}>
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
