import { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { generateResponse, getGreeting, resetContext } from '../utils/chatEngine';

function NutritionistChat({ studentName, logs, favorites }) {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('bitesense_chat_messages');
    if (saved) {
      return JSON.parse(saved);
    }
    // Initial greeting
    return [{
      id: 1,
      text: getGreeting(studentName),
      isBot: true,
      timestamp: Date.now()
    }];
  });

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Student data for context
  const studentData = {
    name: studentName,
    logs,
    favorites
  };

  // Save messages to localStorage
  useEffect(() => {
    localStorage.setItem('bitesense_chat_messages', JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isTyping) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: trimmedInput,
      isBot: false,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking delay (500-1500ms)
    const thinkingTime = 500 + Math.random() * 1000;

    setTimeout(() => {
      const response = generateResponse(trimmedInput, studentData);

      const botMessage = {
        id: Date.now(),
        text: response,
        isBot: true,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, thinkingTime);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    resetContext();
    setMessages([{
      id: Date.now(),
      text: getGreeting(studentName),
      isBot: true,
      timestamp: Date.now()
    }]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-w-3xl mx-auto">
      {/* Chat Header */}
      <div className="bg-white rounded-t-2xl border border-gray-200 border-b-0 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
            🤖
          </div>
          <div>
            <h2 className="font-bold text-gray-800">AI Nutritionist</h2>
            <p className="text-sm text-success flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-success inline-block"></span>
              Online - Ask me anything!
            </p>
          </div>
        </div>
        <button
          onClick={handleClearChat}
          className="text-gray-400 hover:text-gray-600 text-sm flex items-center gap-1 transition-colors"
        >
          <span>🗑️</span>
          Clear Chat
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 bg-gray-50 border-x border-gray-200 p-4 overflow-y-auto">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isBot={message.isBot}
          />
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="flex items-end gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                🤖
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white rounded-b-2xl border border-gray-200 border-t-0 p-4">
        <div className="flex gap-3">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about nutrition, meals, or reducing waste..."
            disabled={isTyping}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isTyping}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          Try: "Is phở healthy?" • "How am I doing?" • "Tips to reduce waste" • "High protein options"
        </p>
      </div>
    </div>
  );
}

export default NutritionistChat;
