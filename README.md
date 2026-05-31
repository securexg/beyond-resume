# CareerOS

<div align="center">

**AI-Powered Career Intelligence Platform**

[![Live Demo](https://img.shields.io/badge/Live-Demo-0ea5e9?style=for-the-badge)](https://careeros.splabs.space)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

</div>

---

## 🎯 Overview

CareerOS is a modern AI-powered career guidance platform designed to help job seekers in the Indian market. It provides personalized resume analysis, skill-gap insights, role recommendations, and interview preparation tools—all powered by AI.

### Key Features

- **📄 AI Resume Analysis** - Get instant ATS scores, keyword gaps, and actionable rewrite suggestions
- **🎯 Hiring Probability Score** - Know your chances before applying with skills, experience, and education breakdown
- **📊 Market Trends** - Real-time insights on India job market growth by sector
- **💼 Job Listings** - Curated job opportunities from multiple sources
- **🎓 Interview Prep** - Practice with role-specific interview questions and topics
- **🔗 LinkedIn Integration** - Import profile information (manual text input supported)
- **📈 Skill Roadmap** - Personalized learning resources to close skill gaps
- **💰 Salary Insights** - Market-based salary range estimates in LPA

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Pre-built UI components |
| **Framer Motion** | Smooth animations and transitions |
| **Lucide React** | Icon library |
| **PDF.js** | PDF text extraction |
| **DeepSeek API** | AI-powered resume analysis |
| **React Dropzone** | File upload handling |

---

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Clone the Repository

```bash
git clone https://github.com/securexg/beyond-resume.git
cd beyond-resume
```

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
DEEPSEEK_API_KEY=your_deepseek_api_key_here
```

Get your API key from [DeepSeek Console](https://platform.deepseek.com/).

---

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
beyond-resume/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts          # DeepSeek API integration
│   ├── analyze/
│   │   └── page.tsx              # Resume upload & analysis page
│   ├── interview-prep/
│   │   └── page.tsx              # Interview practice page
│   ├── jobs/
│   │   └── page.tsx              # Job listings page
│   ├── onboarding/
│   │   └── page.tsx              # User onboarding flow
│   ├── results/
│   │   └── page.tsx              # Analysis results display
│   ├── trends/
│   │   └── page.tsx              # Market trends page
│   ├── globals.css               # Global styles & theme
│   ├── layout.tsx                # Root layout with fonts
│   └── page.tsx                  # Homepage
├── components/
│   └── ui/                       # shadcn/ui components
├── public/
│   ├── logo.png                  # Brand logo
│   └── favicon.ico              # Site favicon
├── lib/
│   └── utils.ts                  # Utility functions
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

---

## 🎨 Design System

### Colors

- **Primary**: Teal/Cyan (`oklch(0.55 0.18 180)`)
- **Background**: White (`oklch(1 0 0)`)
- **Foreground**: Dark Gray (`oklch(0.15 0 0)`)
- **Accent**: Light Cyan (`oklch(0.65 0.15 200)`)

### Typography

- **Headings**: Manrope (weights: 200, 300, 400, 500, 600)
- **Body**: Inter (weights: 400, 500, 600, 700)

### Components

Built with [shadcn/ui](https://ui.shadcn.com/) for consistent, accessible UI components.

---

## 🔧 Key Features Explained

### Resume Analysis Flow

1. User uploads PDF or pastes resume text
2. System extracts text using PDF.js
3. DeepSeek API analyzes resume against target role
4. Results include:
   - ATS Score (0-100)
   - Keyword gaps
   - Strengths & weaknesses
   - Skill roadmap with learning resources
   - Hiring probability breakdown
   - Salary range estimates
   - Role recommendations
   - Interview prep topics

### LinkedIn Integration

Due to LinkedIn's anti-scraping policies:
- Users provide their LinkedIn URL during onboarding
- System displays the URL with an explanation
- Users manually paste resume text for analysis
- This ensures compliance while providing value

### Market Trends

- Displays sector-wise growth percentages
- Shows top roles in each sector
- Provides salary benchmarks
- Data focused on Indian job market

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables on Vercel

Add `DEEPSEEK_API_KEY` in your Vercel project settings.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React framework
- [shadcn/ui](https://ui.shadcn.com) - Beautiful UI components
- [DeepSeek](https://www.deepseek.com) - AI API for resume analysis
- [PDF.js](https://mozilla.github.io/pdf.js/) - PDF text extraction
- [Lucide](https://lucide.dev) - Icon library

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Email: support@careeros.splabs.space
- Live Demo: [careeros.splabs.space](https://careeros.splabs.space)

---

<div align="center">

**Built with ❤️ for job seekers in India**

</div>
