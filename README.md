# 🎓 EXTRU 2026 - Technology Exhibition Website

![EXTRU 2026](public/EXTRU%20LOGO%20white%201.png)

**EXTRU 2026** is the official website for the Technology Exhibition organized by the Faculty of Technology, Rajarata University of Sri Lanka (RUSL). This cutting-edge web platform showcases the annual technology showcase event scheduled for **February 19-21, 2026**.

## 🌟 Overview

EXTRU (Exhibition of Technological Research University) is a premier technology exhibition that brings together innovative projects, industry sponsors, and the tech community. This website serves as the central hub for event information, merchandise sales, project showcases, and administrative management.

## ✨ Key Features

### 🎨 Modern UI/UX Design
- **Dark Theme Interface** with neon accent colors (Cyan Primary `#33E1FF`, Green Accent `#7CFF72`)
- **Responsive Design** optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** with CSS keyframes and transitions
- **Glassmorphism Effects** with backdrop filters and transparency
- **Professional Typography** with custom font integration (Orbitron)

### 📱 Main Sections

#### 1. **Hero Section**
- Dynamic landing page with eye-catching visuals
- Call-to-action buttons for registration and exploration
- Animated logo with pulsing green glow effect
- Countdown timer to the event

#### 2. **About EXTRU**
- Comprehensive information about the exhibition
- Mission and vision statements
- Event highlights and objectives
- Decorative gradient elements

#### 3. **Departments** (7 Departments)
- **Engineering Stream** (3 Departments):
  - Bio Systems Technology (BST)
  - Engineering Technology (ET)
  - Nano Science Technology (NST)
- **ICT Stream** (4 Departments):
  - Information & Communication Technology (ICT)
  - Industrial Information Technology (IIT)
  - Software Technology & Data Science (STDS)
  - Computer Systems & Network Engineering (CSNE)
- Individual department pages with detailed descriptions
- Department logos and visual branding
- 4-3 grid layout for optimal display

#### 4. **Event Recap**
- Highlights from previous EXTRU events
- Photo gallery showcasing past exhibitions
- Success stories and testimonials
- Interactive visual timeline

#### 5. **Merchandise Store**
- T-shirts, mugs, stickers, and other branded items
- Pre-order functionality with payment upload
- Product cards with hover effects
- Shopping cart integration

#### 6. **Event Schedule**
- Interactive timeline design with 3-day breakdown
- Session details with time, location, and description
- Speaker information and topics
- Color-coded event categories

#### 7. **Featured Projects**
- Showcase of innovative student projects
- Modal-based detailed project views
- Project descriptions, technologies used, and team information
- GitHub and live demo links
- Filtering by department/category

#### 8. **Our Sponsors**
- Tiered sponsor display (Platinum, Gold, Silver, Bronze)
- Sponsor logos with hover animations
- Company descriptions and links
- Partnership opportunities

#### 9. **Organizing Committee**
- Team member profiles with photos
- Role-based organization structure
- Social media links for each member
- Professional card layouts

#### 10. **Contact Section**
- Contact form with validation
- Direct email, phone, and address information
- Google Maps integration
- Social media links
- Quick response indicators

### 🔐 Admin Dashboard

A comprehensive admin panel for content management with password protection (`extru2026admin`).

#### Admin Features:
1. **Merchandise Management**
   - Add, edit, delete products
   - Update prices and descriptions
   - Upload product images
   - Stock management

2. **Sponsors Management**
   - Manage sponsor tiers
   - Update sponsor logos and information
   - Website links and descriptions
   - Priority ordering

3. **Projects Management**
   - Add new project showcases
   - Update project details and media
   - Manage team member information
   - Technology tags and categories

4. **Schedule Management**
   - Create and edit event sessions
   - Time slot management
   - Location assignments
   - Speaker information updates

#### Admin UI Features:
- **Popup Modals** for add/edit operations
- **Form Validation** for data integrity
- **Quick Stats Dashboard** with metrics
- **Responsive Tables** for data display
- **Bulk Actions** for efficient management
- **Search and Filter** functionality

### 🎯 Navigation System

- **Fixed Top Navigation Bar** with active section highlighting
- **Smooth Scroll** to different sections
- **Mobile-Responsive Menu** with hamburger toggle
- **7 Quick Navigation Buttons**:
  - Home
  - About
  - Merchandise
  - Schedule
  - Projects
  - Contact
  - Departments

### 🎨 Design System

#### Color Palette:
- **Primary**: `#33E1FF` (Cyan) - Main accent color
- **Accent**: `#7CFF72` (Green) - Secondary accent
- **Background**: `#05232e` (Dark Blue) - Main background
- **Card Background**: `rgba(0, 26, 51, 0.7)` - Semi-transparent dark blue
- **Border**: `#001a33` (Deep Blue) - Card borders

#### Visual Effects:
- **Neon Glow**: Drop-shadow effects with cyan and green colors
- **Backdrop Blur**: 10px blur for glassmorphism
- **Hover States**: Scale transforms (1.03x) with smooth transitions
- **Pulsing Animation**: 2-second cycle for logo
- **Gradient Overlays**: Multi-color gradients for depth

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 16.0.3** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type-safe development

### Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Tailwind Animate** - Animation utilities
- **PostCSS 8.5** - CSS processing
- **Custom CSS** - Global styles and animations

### UI Components
- **Radix UI** - Accessible component primitives
  - Accordion, Alert Dialog, Avatar, Checkbox
  - Dialog, Dropdown Menu, Navigation Menu
  - Popover, Progress, Radio Group, Select
  - Slider, Switch, Tabs, Toast, Tooltip
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets

### Forms & Validation
- **React Hook Form 7.60.0** - Form management
- **Zod 3.25.76** - Schema validation
- **@hookform/resolvers 3.10.0** - Validation resolvers

### Additional Libraries
- **Next Themes 0.4.6** - Dark/light mode management
- **Embla Carousel 8.5.1** - Carousel/slider component
- **Recharts 2.15.4** - Data visualization
- **Date-fns 4.1.0** - Date manipulation
- **Sonner 1.7.4** - Toast notifications
- **Vaul 0.9.9** - Drawer component
- **CMDK 1.0.4** - Command menu

### Development Tools
- **ESLint** - Code linting
- **Autoprefixer** - CSS vendor prefixing
- **Class Variance Authority** - Component variants
- **clsx & tailwind-merge** - Conditional class management

### Deployment
- **Vercel Analytics** - Website analytics and performance monitoring

## 📁 Project Structure

```
EXTRU/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and animations
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── departments/             # Department pages
│   │   └── [id]/
│   │       └── page.tsx         # Dynamic department detail page
│   ├── merchandise/             # Merchandise store
│   │   └── page.tsx
│   └── admin/                   # Admin dashboard
│       ├── page.tsx             # Admin login & dashboard
│       ├── merchandise/
│       │   └── page.tsx         # Merchandise management
│       ├── sponsors/
│       │   └── page.tsx         # Sponsors management
│       ├── projects/
│       │   └── page.tsx         # Projects management
│       └── schedule/
│           └── page.tsx         # Schedule management
│
├── components/                   # React components
│   ├── navbar.tsx               # Navigation bar with active highlighting
│   ├── hero.tsx                 # Hero/landing section
│   ├── about.tsx                # About EXTRU section
│   ├── departments.tsx          # Departments overview
│   ├── highlights.tsx           # Event recap section
│   ├── merchandise.tsx          # Merchandise showcase
│   ├── schedule.tsx             # Event schedule timeline
│   ├── projects.tsx             # Featured projects with modals
│   ├── sponsors.tsx             # Sponsors display
│   ├── organizing-committee.tsx # Team member profiles
│   ├── contact.tsx              # Contact form and info
│   ├── footer.tsx               # Footer with links and social media
│   ├── theme-provider.tsx       # Theme context provider
│   └── ui/                      # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── tabs.tsx
│       ├── toast.tsx
│       └── ... (30+ components)
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
│
├── lib/                          # Utility functions
│   └── utils.ts                 # Helper functions
│
├── public/                       # Static assets
│   ├── EXTRU LOGO white 1.png   # Main logo
│   └── ... (images, icons)
│
├── styles/                       # Additional styles
│   └── globals.css
│
├── components.json               # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher) - Package manager
- **Git** - Version control

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/maleecer/EXTRU-Web-Site.git
cd EXTRU-Web-Site
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Run the development server**
```bash
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Linting

```bash
# Run ESLint
pnpm lint
```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on port 3000 |
| `pnpm build` | Build production-ready application |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint for code quality checks |

## 🔑 Admin Access

To access the admin dashboard:

1. Navigate to `/admin`
2. Enter password: **`extru2026admin`**
3. Access management modules:
   - **Merchandise** - `/admin/merchandise`
   - **Sponsors** - `/admin/sponsors`
   - **Projects** - `/admin/projects`
   - **Schedule** - `/admin/schedule`

## 🎨 Customization

### Colors
Edit the color scheme in `app/globals.css`:
```css
:root {
  --primary: #33E1FF;      /* Cyan */
  --accent: #7CFF72;        /* Green */
  --background: #05232e;    /* Dark Blue */
  --card-bg: rgba(0, 26, 51, 0.7);
}
```

### Fonts
Import custom fonts in `app/layout.tsx`:
```typescript
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })
```

### Components
All UI components are modular and can be customized in the `components/` directory.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Mobile-first approach using Tailwind CSS responsive utilities:
```tsx
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
  Responsive Text
</div>
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Deploy automatically

### Other Platforms

The application can be deployed to:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Docker Container**

## 🔒 Security Features

- **Password-Protected Admin Panel**
- **Form Validation** with Zod schemas
- **XSS Protection** with React's built-in sanitization
- **Environment Variables** for sensitive data
- **HTTPS Enforcement** in production

## 🐛 Known Issues & Troubleshooting

### Issue: Build fails with TypeScript errors
**Solution**: Run `pnpm build` and fix type errors, or use `// @ts-ignore` for temporary fixes.

### Issue: Images not loading
**Solution**: Ensure images are in the `public/` directory and use Next.js `<Image>` component.

### Issue: Admin password not working
**Solution**: Password is `extru2026admin` (case-sensitive, no spaces).

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Code Style Guidelines
- Use **TypeScript** for type safety
- Follow **ESLint** rules
- Use **Tailwind CSS** for styling
- Write **meaningful commit messages**
- Add comments for complex logic

## 📝 License

This project is part of EXTRU 2026 by the Faculty of Technology, Rajarata University of Sri Lanka.

**Copyright © 2026 EXTRU. All rights reserved.**

## 👥 Team

**Developed by the EXTRU 2026 Tech Team**

Faculty of Technology  
Rajarata University of Sri Lanka  
Mihintale, Sri Lanka

## 📞 Contact & Support

- **Email**: [info@extru2026.lk](mailto:info@extru2026.lk)
- **Phone**: +94 25 226 1000
- **Address**: Technology Faculty Premises, Mihintale, Sri Lanka

### Social Media
- Facebook: [EXTRU 2026](https://facebook.com/extru2026)
- Instagram: [@extru2026](https://instagram.com/extru2026)
- LinkedIn: [EXTRU 2026](https://linkedin.com/company/extru2026)

## 🙏 Acknowledgments

- **Faculty of Technology, RUSL** - For organizing EXTRU 2026
- **Students & Organizers** - For their dedication and hard work
- **Sponsors & Partners** - For their generous support
- **Open Source Community** - For the amazing tools and libraries

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/primitives)
- [React Hook Form](https://react-hook-form.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Built with ❤️ by the EXTRU 2026 Tech Team**

*Making technology accessible and inspiring the next generation of innovators.*

🚀 **Event Date: February 19-21, 2026** 🚀
