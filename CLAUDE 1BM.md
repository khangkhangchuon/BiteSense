# 1BM (1 BITE MATTERS) - PROJECT BRIEF FOR CLAUDE CODE

## 🎯 PROJECT OVERVIEW

**Project Name:** 1BM (1 Bite Matters) School Food Platform  
**Purpose:** Data-driven platform to reduce school cafeteria food waste by 50%  
**Context:** Building for a competition - need professional-looking demos quickly  
**Target:** International/Private Schools in Vietnam (starting with Wellspring)

---

## 📋 THE PROBLEM

School cafeterias in Vietnam waste **30% of their food** on average:
- **Wasted budget**: Schools throw away huge amounts of food and money (₫30-50M/month budgets)
- **Environmental damage**: Unnecessary CO2, water, and land waste
- **Student dissatisfaction**: Food doesn't match what students want
- **No data**: Schools make menu decisions based on guesswork

**Core Issue:** Schools don't know what students actually like, what portions work, or why food gets wasted.

---

## ✅ THE SOLUTION

A data-driven platform connecting schools and students to reduce food waste through real-time feedback and actionable insights.

### How It Works:
1. **Students** rate meals and log waste (5 seconds per meal)
2. **Platform** analyzes data and finds patterns
3. **Schools** get clear AI recommendations on what to change
4. **Results**: Waste ↓, satisfaction ↑, money saved

### The Waste Reduction Loop:
```
IDENTIFY WASTE → ANALYZE PATTERNS → RECOMMEND ACTION → 
IMPLEMENT CHANGE → MEASURE RESULTS → REPEAT
```

**Example:**
- Students log: 35% of Bún Chả wasted (reason: "portion too large")
- AI suggests: Reduce portion from 350g → 280g
- Projected: Waste drops from 35% → 18%
- School implements change
- Actual result: Waste drops to 19% + satisfaction increases

---

## 🏗️ TECHNICAL ARCHITECTURE

### Competition Strategy: **Option A**
- **Frontend-only** with mock data (no backend/database)
- Fast to build, easy to demo, professional-looking
- After competition, can add real backend

### Tech Stack:
- **Framework:** React + Vite
- **Styling:** Tailwind CSS (clean, modern, professional)
- **Charts:** Recharts (for admin analytics)
- **Data:** Mock data in JavaScript/JSON + LocalStorage for interactivity
- **Deployment:** Vercel/Netlify (free, instant)

### Three Separate Websites:

```
1BM Competition Project/
├── landing-page/          (Website 1)
├── admin-demo/            (Website 2)
└── student-demo/          (Website 3)
```

---

## 🌐 WEBSITE 1: LANDING PAGE

### Purpose:
Professional landing page explaining the problem, solution, and linking to demos

### Structure:
```
Hero Section
├── Headline: "Stop Wasting Food. Start Knowing What Students Want."
├── Subheadline: Problem statement
└── Two CTA Buttons:
    ├── "Admin Demo" → Links to Website 2
    └── "Student Demo" → Links to Website 3

Problem Evidence Section
├── Statistics (30% waste, ₫2.1B wasted annually)
├── Visual data representation
└── Real impacts (environmental, financial)

Solution Overview
├── How 1BM works (3-4 step visual)
├── Benefits for schools
└── Benefits for students

Competitive Advantage (optional)
├── Comparison table
└── Why 1BM vs alternatives

Footer
├── Contact info
└── Social links (optional)
```

### Design Requirements:
- **Clean, modern, professional** (not playful/startup-y)
- **Trust-building** (schools need to take this seriously)
- **Fast-loading** (judges have limited time)
- **Clear CTAs** (obvious where to click)
- **Color scheme:** Green (sustainability) + White/Gray (professional)

---

## 🎓 WEBSITE 2: ADMIN DEMO

### Purpose:
Fully functional admin dashboard showing what school administrators/cafeteria managers see

### Key Features:

#### 1. Dashboard Overview
- **Waste Rate Display** (current: 18.5%, baseline: 32%, target: <15%)
- **Monthly Savings** (₫9,000,000 saved this month)
- **Environmental Impact** (CO2 prevented, water saved, meals rescued)
- **Quick Stats Cards** (total students, active menus, pending recommendations)

#### 2. Analytics & Charts
- **Waste Trend Over Time** (line chart showing 3 months of improvement)
- **Dish Performance Table** (each dish with waste %, rating, cost)
- **Most/Least Wasted Dishes** (bar charts)
- **Day-of-Week Patterns** (Monday vs Friday waste comparison)

#### 3. Menu Management
- **View Current Week Menu** (all dishes for each day)
- **Dish Details** (nutrition info, portion size, student ratings, waste data)
- **Upload New Menu** (simple form - for demo, just updates UI)

#### 4. AI Recommendations
- **Active Recommendations** (cards showing suggested changes)
- **Example Recommendation:**
  ```
  Dish: Cơm Tấm
  Issue: 25% average waste (reason: "portion too large")
  Suggestion: Reduce portion from 400g → 320g
  Projected Impact: Save ₫45,000/week, reduce waste to 12%
  Actions: [Accept] [Decline] [Modify]
  ```
- **Past Recommendations** (track accepted/declined/results)

#### 5. Student Engagement Metrics
- **Participation Rate** (% of students using platform)
- **Feedback Distribution** (how many ratings/logs per day)
- **Top Contributors** (most active students - anonymized)

### Design Requirements:
- **Professional SaaS Dashboard** (think modern admin panel)
- **Data-rich but not cluttered**
- **Clear visual hierarchy**
- **Actionable insights** (not just data dump)
- **Color-coded metrics** (green = good, red = needs attention)

### Mock Data Strategy:
```javascript
// Use realistic Vietnamese school data
- School: Wellspring International School, HCMC
- Students: 450 (grades 6-12)
- Current waste rate: 18.5% (down from 32% baseline)
- 3 months of historical data
- 10-15 Vietnamese dishes with realistic metrics
- Mix of successful/struggling dishes
```

---

## 📱 WEBSITE 3: STUDENT DEMO

### Purpose:
Student-facing interface showing how students interact with the platform

### Key Features:

#### 1. Today's Menu
- **Meal Cards** for each dish available today
- **Each card shows:**
  - Dish name (Vietnamese + English)
  - Photo (stock image of dish)
  - Nutrition info (calories, protein, carbs, fat)
  - Popularity (⭐ 4.2/5 from other students)
  - Environmental impact preview

#### 2. Quick Meal Rating
- **After eating, student clicks "Rate Today's Lunch"**
- **Simple 1-5 star rating** (large, touch-friendly)
- **Optional quick feedback** ("Too salty", "Portion too large", etc.)
- **Confirmation message** ("Thanks! Your feedback helps improve tomorrow's menu")

#### 3. Waste Logging
- **"How much did you waste?" slider** (0% → 100%)
- **Quick reasons** (checkboxes: portion size, taste, not hungry, etc.)
- **Optional comment box**
- **Visual feedback** (if 0% waste → "🎉 Zero waste hero!")

#### 4. Personal Impact Dashboard
- **Your Stats This Month:**
  - Meals logged: 18
  - Average waste: 8% (better than school average!)
  - Environmental impact:
    - 🌍 CO2 prevented: 2.4kg
    - 💧 Water saved: 180L
    - 🌾 Land saved: 0.8m²
  - Streak: 7 days of <10% waste
- **Comparison Analogies:**
  - "You saved enough water to fill 3 bathtubs!"
  - "Your CO2 savings = planting 0.5 trees"

#### 5. This Week's Menu (Browse Ahead)
- **See upcoming meals** (Monday-Friday)
- **Plan your week** (know when favorite dishes are served)
- **Set preferences** (mark dishes as favorites)

#### 6. AI Nutritionist Chat (Optional - if time permits)
- **Simple chatbot interface**
- **Ask questions** ("Is Phở good for weight loss?")
- **Get personalized advice** based on goals

### Design Requirements:
- **Desktop-friendly** (not mobile for competition - time constraint)
- **Simple, clean interface** (students should understand immediately)
- **Fun but not childish** (targeting grades 6-12)
- **Fast interactions** (5-second logging promise)
- **Positive reinforcement** (celebrate good behavior)
- **Color scheme:** Fresh greens, light blues (healthy, positive)

### Mock Data Strategy:
```javascript
// Pre-populate student dashboard with:
- Student name: "Demo Student" (or let them type name)
- 2-3 weeks of existing data (show history)
- 5 upcoming meal days
- Personal stats that look realistic
- Mix of dishes they've rated/not rated yet
```

---

## 🎨 DESIGN PRINCIPLES (ALL 3 WEBSITES)

### Visual Standards:
- **Professional, not amateurish** (this is the real product vision)
- **Consistent branding** across all 3 sites (same colors, fonts, logo)
- **Clean whitespace** (not cramped)
- **Readable typography** (accessible font sizes)
- **Responsive layouts** (even if desktop-focused)

### Color Palette:
```
Primary: #10B981 (Green - sustainability, growth, positive)
Secondary: #3B82F6 (Blue - trust, technology)
Accent: #F59E0B (Amber - alerts, highlights)
Success: #22C55E (Bright green)
Warning: #EF4444 (Red for high waste)
Neutral: #F3F4F6, #E5E7EB, #6B7280 (grays for backgrounds/text)
```

### Typography:
- **Headings:** Inter or Poppins (modern, clean)
- **Body:** Inter or System UI (readable)
- **Data/Numbers:** Tabular numbers, monospace for alignment

### Components to Reuse:
- Buttons (primary, secondary, ghost)
- Cards (for dishes, stats, recommendations)
- Charts (line, bar, pie)
- Forms (inputs, selects, textareas)
- Modals/Dialogs (for confirmations)

---

## 📊 MOCK DATA STRUCTURE

### Global Demo Database (LocalStorage)
```javascript
DEMO_DATA = {
  school: {
    id: "wellspring-hcm",
    name: "Wellspring International School",
    location: "Ho Chi Minh City, Vietnam",
    total_students: 450,
    active_students: 387,
    baseline_waste_rate: 32.0,
    current_waste_rate: 18.5,
    target_waste_rate: 15.0,
    monthly_food_budget: 48000000, // VND
    monthly_savings: 9000000, // VND
  },
  
  historical_data: [
    // 3 months of daily waste rates
    { date: "2024-09-15", waste_rate: 31.2, cost: 1580000 },
    { date: "2024-09-16", waste_rate: 29.8, cost: 1520000 },
    // ... 90 days
  ],
  
  dishes: [
    {
      id: 1,
      name_vi: "Phở Bò",
      name_en: "Beef Noodle Soup",
      category: "main",
      portion_size: 350, // grams
      cost_per_serving: 35000, // VND
      nutrition: { calories: 450, protein: 25, carbs: 60, fat: 12 },
      waste_rate: 12.3, // %
      rating: 4.5,
      total_ratings: 234,
      reasons_for_waste: {
        "portion_large": 15,
        "too_hot": 8,
        "not_hungry": 5
      }
    },
    {
      id: 2,
      name_vi: "Cơm Tấm",
      name_en: "Broken Rice with Grilled Pork",
      category: "main",
      portion_size: 400,
      cost_per_serving: 30000,
      nutrition: { calories: 620, protein: 28, carbs: 75, fat: 22 },
      waste_rate: 25.6,
      rating: 3.8,
      total_ratings: 198,
      reasons_for_waste: {
        "portion_large": 78,
        "too_oily": 24,
        "not_hungry": 12
      }
    },
    // ... 10-15 more Vietnamese dishes
  ],
  
  weekly_menu: {
    "2024-12-26": { dishes: [1, 2, 5] }, // dish IDs
    "2024-12-27": { dishes: [3, 4, 6] },
    // ... 5 days
  },
  
  recommendations: [
    {
      id: 1,
      dish_id: 2, // Cơm Tấm
      issue: "High waste rate (25.6%) due to oversized portions",
      suggestion: "Reduce portion from 400g to 320g",
      projected_waste_reduction: "25.6% → 12%",
      projected_savings: 45000, // VND per week
      status: "pending", // pending, accepted, declined
      confidence: 0.89
    },
    {
      id: 2,
      dish_id: 7,
      issue: "Low rating (3.2/5) - students report 'too bland'",
      suggestion: "Increase seasoning or add condiment options",
      projected_satisfaction_increase: "+0.8 stars",
      status: "accepted",
      result: "Rating improved to 4.1/5 after implementation"
    }
  ],
  
  student_logs: [
    {
      student_id: "demo-student",
      date: "2024-12-26",
      dish_id: 1,
      rating: 5,
      waste_percent: 0,
      reason: null,
      comment: "Delicious!"
    },
    // ... hundreds of logs from 387 students
  ],
  
  environmental_impact: {
    total_co2_prevented: 1240, // kg since start
    total_water_saved: 8500, // liters
    total_land_saved: 35, // m²
    meals_rescued: 2890
  }
}
```

---

## 🚀 BUILD PRIORITIES

### Phase 1: Landing Page (Build First)
- **Why first:** Sets the context, quick win
- **Time estimate:** 1-2 days
- **Must-haves:**
  - Hero with clear CTAs
  - Problem evidence section
  - Solution overview
  - Links to demo sites

### Phase 2: Admin Demo (Build Second)
- **Why second:** Shows the main value prop (waste reduction)
- **Time estimate:** 2-3 days
- **Must-haves:**
  - Dashboard with key metrics
  - Waste trend chart
  - Dish performance table
  - At least 2-3 AI recommendations

### Phase 3: Student Demo (Build Third)
- **Why third:** Completes the story (how data is collected)
- **Time estimate:** 1-2 days
- **Must-haves:**
  - Today's menu display
  - Rating system
  - Waste logging
  - Personal impact dashboard

### Phase 4: Polish & Deploy
- **Time estimate:** 1 day
- Cross-site consistency
- Bug fixes
- Deploy all 3 to Vercel/Netlify
- Test on competition judges' likely browsers

---

## ⚡ DEVELOPMENT GUIDELINES

### For Claude Code:

1. **Focus on professional UI/UX**
   - Use Tailwind CSS for consistent styling
   - Follow modern SaaS design patterns
   - Make data visualizations clear and impactful

2. **Make it interactive**
   - Use LocalStorage for demo interactivity
   - Student actions should update admin view (shared state)
   - Buttons should feel responsive

3. **Use realistic Vietnamese context**
   - Dish names in Vietnamese + English
   - VND currency formatting (₫45,000)
   - Vietnamese school culture (no phone during school, etc.)

4. **Keep it simple but polished**
   - Don't over-engineer
   - Focus on core features that demonstrate value
   - Quality over quantity

5. **Mobile-friendly (but desktop priority)**
   - Should work on mobile
   - But optimize for desktop demo (competition judges)

### What NOT to Build (Save Time):
- ❌ User authentication (just "Demo Student" / "Demo Admin")
- ❌ Backend API calls (all mock data)
- ❌ Database migrations
- ❌ Complex animations (simple transitions OK)
- ❌ Multi-language switching (English default, Vietnamese where contextual)
- ❌ Email notifications
- ❌ File upload functionality (just UI mockup)
- ❌ Advanced AI features (just show recommendations, don't generate them)

---

## 🎯 SUCCESS CRITERIA

### Landing Page Success:
✅ Judges understand the problem in 30 seconds
✅ Obvious where to click for demos
✅ Professional, trustworthy appearance
✅ Loads in <2 seconds

### Admin Demo Success:
✅ Looks like a real SaaS product
✅ Clear waste reduction story (32% → 18.5%)
✅ AI recommendations feel actionable
✅ Charts/data are easy to understand
✅ Judges can imagine using this

### Student Demo Success:
✅ 5-second rating flow is intuitive
✅ Personal impact is motivating
✅ Interface feels student-friendly
✅ Clear how data connects to admin view

### Overall Success:
✅ All 3 sites deployed and accessible
✅ Consistent branding across sites
✅ No bugs during demo
✅ Tells a complete story: Problem → Solution → Impact
✅ Judges can interact with live demos
✅ Professional enough to win competition

---

## 📝 IMPORTANT NOTES

- **Timeline:** Competition deadline approaching - prioritize speed + quality balance
- **No backend:** All data is mock/frontend - this is intentional for competition
- **Post-competition:** Will add FastAPI backend, PostgreSQL, real auth later
- **Target users:** International school administrators (English-speaking, tech-comfortable)
- **Competition judges:** Looking for impact, innovation, feasibility
- **Unique value:** Only platform combining AI + School Food Waste + Vietnamese context

---

## 🔗 USEFUL REFERENCES

### Vietnamese Dishes to Include:
- Phở (Bò, Gà)
- Cơm Tấm (Broken Rice)
- Bún Chả (Grilled Pork with Noodles)
- Bánh Mì (Vietnamese Sandwich)
- Gỏi Cuốn (Spring Rolls)
- Cơm Chiên (Fried Rice)
- Bún Bò Huế (Spicy Beef Noodle)
- Xôi (Sticky Rice)
- Chả Giò (Fried Spring Rolls)
- Canh Chua (Sour Soup)

### Vietnamese School Context:
- No phones during school hours (platform accessed before/after school or via kiosks)
- Cafeteria meals often fixed menu (everyone gets same dish each day)
- Typical school day: 7am-4pm
- Lunch break: 11:30am-12:30pm
- International schools: ₫30-50M monthly food budgets
- Students: Grades 6-12 (ages 11-18)

---

**END OF BRIEF**

Claude Code: Use this document as the source of truth for the 1BM project. Build professional, polished interfaces that demonstrate real impact on school food waste reduction. Focus on competition success: speed + quality + clear storytelling.
