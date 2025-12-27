# 1BM (1 Bite Matters) - School Food Waste Reduction Platform

A data-driven platform to reduce school cafeteria food waste by 50% through real-time student feedback and AI-powered recommendations.

## 🏗️ Project Structure

```
1BM DIAMOND/
├── landing-page/          # Website 1: Landing page
│   ├── src/
│   ├── public/
│   └── package.json
│
├── admin-demo/            # Website 2: Admin dashboard
│   ├── src/
│   ├── public/
│   └── package.json
│
├── student-demo/          # Website 3: Student interface
│   ├── src/
│   ├── public/
│   └── package.json
│
└── shared/                # Shared data and utilities
    ├── mock-data/         # All mock data in separate files
    │   ├── school-data.js
    │   ├── dishes-data.js
    │   ├── historical-data.js
    │   ├── menu-data.js
    │   ├── recommendations-data.js
    │   ├── student-logs-data.js
    │   ├── environmental-data.js
    │   └── index.js
    ├── constants.js       # Shared constants
    └── utils.js          # Utility functions
```

## 🚀 Quick Start

### Install Dependencies

Each project needs its dependencies installed separately:

```bash
# Landing page
cd landing-page
npm install

# Admin demo
cd ../admin-demo
npm install

# Student demo
cd ../student-demo
npm install
```

### Run Development Servers

Run each project in a separate terminal:

```bash
# Terminal 1 - Landing page (port 5173)
cd landing-page
npm run dev

# Terminal 2 - Admin demo (port 5174)
cd admin-demo
npm run dev -- --port 5174

# Terminal 3 - Student demo (port 5175)
cd student-demo
npm run dev -- --port 5175
```

## 📊 Mock Data Files

All mock data is organized in separate files under `shared/mock-data/`:

### `school-data.js`
- School information (Wellspring International School)
- Student counts, waste rates, budget data

### `dishes-data.js`
- 12 Vietnamese dishes with full details
- Nutrition info, waste rates, ratings
- Helper functions: `getDishById()`, `getTopRatedDishes()`, etc.

### `historical-data.js`
- 3 months of daily waste rate data (Sep-Dec 2024)
- Shows reduction from 32% → 18.5%
- Helper functions: `getLastNDays()`, `getWeeklyAverages()`, etc.

### `menu-data.js`
- Weekly menu schedules
- Maps dates to dish IDs
- Helper functions: `getTodaysMenu()`, `getThisWeeksMenu()`, etc.

### `recommendations-data.js`
- AI-generated recommendations for admin
- Pending, accepted, and implemented suggestions
- Helper functions: `getPendingRecommendations()`, `getHighImpactRecommendations()`, etc.

### `student-logs-data.js`
- Simulated student meal ratings and waste logs
- Demo student data for student interface
- Helper functions: `getStudentStats()`, `getLogsByDate()`, etc.

### `environmental-data.js`
- Environmental impact calculations (CO2, water, land)
- School-wide and per-student impact
- Helper functions: `calculateImpact()`, `calculatePersonalImpact()`, etc.

## 🛠️ Using Mock Data in Components

### Import from shared folder:

```javascript
// In any component
import { dishes, schoolData } from '../../shared/mock-data/index.js';
import { formatVND, formatPercent } from '../../shared/utils.js';
import { COLORS, BRAND } from '../../shared/constants.js';
```

### Example usage:

```javascript
import { getTodaysMenu, getDishById } from '../../shared/mock-data/index.js';

function TodayMenu() {
  const todayMenu = getTodaysMenu();
  const dishes = todayMenu.dishes.map(id => getDishById(id));

  return (
    <div>
      {dishes.map(dish => (
        <div key={dish.id}>
          <h3>{dish.name_en}</h3>
          <p>{dish.name_vi}</p>
        </div>
      ))}
    </div>
  );
}
```

## 🎨 Tech Stack

- **Framework:** React 19.2.0 + Vite 7.2.4
- **Styling:** Tailwind CSS 4.1.18
- **Charts:** Recharts (admin-demo only)
- **Data:** Mock data in JavaScript files
- **State:** LocalStorage for demo interactivity
- **AI Chatbot:** Pre-programmed responses with intent detection

## 🎯 Build Phases

### Phase 1: Landing Page
- Hero section with CTAs
- Problem evidence
- Solution overview
- Links to demos

### Phase 2: Admin Demo
- Dashboard with key metrics
- Waste trend charts
- Dish performance table
- AI recommendations

### Phase 3: Student Demo ✅ COMPLETE
- Today's menu
- Rating system
- Waste logging
- Personal impact dashboard
- Weekly menu browser
- **AI Nutritionist Chatbot** 🤖

### Phase 4: Polish & Deploy
- Cross-site consistency ✅
- Bug fixes ✅
- Deploy to Vercel/Netlify ⏳

## 🌐 Demo URLs

After deployment, update these in `shared/constants.js`:

- Landing: TBD
- Admin: TBD
- Student: TBD

## 📝 Design Guidelines

### Color Palette
- Primary: `#10B981` (Green - sustainability)
- Secondary: `#3B82F6` (Blue - trust)
- Accent: `#F59E0B` (Amber - alerts)
- Success: `#22C55E`
- Warning: `#EF4444`

### Typography
- Headings: Inter or Poppins
- Body: Inter or System UI
- Use `font-sans` Tailwind class

### Principles
- Professional, not playful
- Clean whitespace
- Clear visual hierarchy
- Data-rich but not cluttered

## 🔧 Utilities Available

### From `utils.js`:
- `formatVND(amount)` - Format Vietnamese Dong
- `formatPercent(value)` - Format percentages
- `formatDate(dateString)` - Format dates
- `getWasteRateColor(rate)` - Get color based on waste rate
- `storage.get/set()` - LocalStorage helpers

### From `constants.js`:
- `COLORS` - Color palette
- `BRAND` - Brand information
- `WASTE_REASONS` - Waste reason options
- `CHART_COLORS` - Colors for charts
- `DAYS_OF_WEEK` - Day names

## 📦 Deployment

Each project can be deployed separately:

```bash
# Build each project
cd landing-page && npm run build
cd ../admin-demo && npm run build
cd ../student-demo && npm run build
```

Deploy `dist/` folders to Vercel, Netlify, or similar.

## 🎓 Competition Focus

- **Target:** International schools in Vietnam
- **Goal:** Reduce waste from 32% → <15%
- **Audience:** School administrators, students, competition judges
- **Timeline:** Fast iteration, professional quality

## 🤖 NEW: AI Nutritionist Chatbot

The student demo now includes a fully functional AI chatbot:

**Features:**
- Multi-turn conversations with context memory
- Personalized responses using student's meal history
- 15+ intent categories (nutrition, waste tips, meal planning)
- Dish-specific information (e.g., "Is phở healthy?")
- Typing indicator for natural interaction
- Chat history persistence

**Try it:**
```bash
cd student-demo
npm run dev
# Click "AI Chat" tab
```

**Example queries:**
- "Is phở healthy?"
- "High protein options"
- "How am I doing?"
- "Tips to reduce waste"

---

## 📊 Current Status

**Overall Completion:** ~85%
**Competition Ready:** ✅ Yes

All three demos are fully functional:
- ✅ Landing Page - Complete
- ✅ Admin Demo - Complete (5 pages, all features)
- ✅ Student Demo - Complete (includes AI chatbot)

See `PROGRESS.md` for detailed status.

---

## 📞 Contact

For questions about this project, refer to:
- `CLAUDE 1BM.md` - Original project brief
- `PROGRESS.md` - Detailed progress report

---

**Built for competition success: Speed + Quality + Clear Storytelling**

**Last Updated:** December 27, 2024
