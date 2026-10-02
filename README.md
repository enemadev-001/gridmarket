# GRIDMARKET Seller Waitlist Landing Page

A polished pre-launch landing page for GRIDMARKET, a future marketplace connecting African businesses with global buyers.

## Features

- Modern, premium dark theme design with GRIDMARKET brand colors
- Responsive layout (mobile, tablet, desktop)
- Smooth animations using Framer Motion
- Seller waitlist form with Supabase integration
- Navigation with mobile hamburger menu
- Multiple sections: Hero, Value Proposition, How It Works, Waitlist Form, Early Seller, Final CTA, Footer

## Tech Stack

- Vite
- React
- JavaScript
- Tailwind CSS
- Lucide React (icons)
- Framer Motion (animations)
- Supabase (database)

## Getting Started

### Prerequisites

- Node.js installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up Supabase (optional for demo):

   - Create a new project at [supabase.com](https://supabase.com)
   - Run the SQL from `supabase-schema.sql` in your Supabase SQL editor
   - Copy your project URL and anon key
   - Create a `.env` file in the root directory:
     ```
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Database Schema

The `seller_waitlist` table includes:
- `id` (UUID, primary key)
- `full_name`
- `business_name`
- `whatsapp_number`
- `email`
- `product_category`
- `business_location`
- `sells_internationally` (boolean)
- `created_at` (timestamp)

Row Level Security (RLS) is enabled to:
- Allow public inserts (anyone can join the waitlist)
- Prevent public reads (seller data is private)
- Allow authenticated reads (for future admin dashboard)

## Design System

### Colors
- Background: `#050505`
- Primary Yellow: `#FFD21F`
- White: `#FFFFFF`
- Secondary Text: `#A1A1AA`
- Card Background: `#111111`
- Border: `#242424`

### Typography
- System fonts for clean, modern look
- Large, bold headlines
- Clear hierarchy with proper spacing

### Components
- Navbar with responsive mobile menu
- Hero section with animated grid visual
- Feature cards with hover effects
- Multi-step "How It Works" section
- Comprehensive waitlist form
- Success state after form submission
- Footer with navigation links

## Building for Production

```bash
npm run build
```

The optimized build will be in the `dist` directory.

## Future Enhancements

- Authentication for seller dashboard
- Admin dashboard to manage waitlist
- Email notifications for waitlist updates
- PWA support for offline access
- Analytics integration
