# VetCare Family - Veterinary Clinic Website

A professional, elegant veterinary clinic landing page built with Next.js and Tailwind CSS. Features online appointment booking, service showcase, pricing transparency, and responsive design optimized for conversions.

## 🏥 Features

- **Professional Design**: Clean, modern UI with blue and white color scheme
- **Appointment Booking**: Contact form with Resend email integration
- **Service Showcase**: Comprehensive veterinary services presentation
- **Transparent Pricing**: Clear pricing structure for all services
- **Testimonials**: Customer reviews with real photos
- **Location & Contact**: Interactive map and contact information
- **Responsive Design**: Mobile-first approach for all devices
- **Sticky Contact Bar**: Persistent call-to-action for appointments
- **SEO Optimized**: Proper meta tags and structured data

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Resend account for email functionality

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/themejunky/vetcare-family-website.git
   cd vetcare-family-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📁 Project Structure

```
vetcare-family-website/
├── app/
│   ├── api/
│   │   └── send-appointment/
│   │       └── route.ts          # Resend API endpoint
│   ├── globals.css               # Global styles and Tailwind
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page component
├── components/
│   ├── About.tsx                 # About section
│   ├── AppointmentForm.tsx       # Contact form with validation
│   ├── Footer.tsx                # Footer with links and contact
│   ├── Header.tsx                # Navigation header
│   ├── Hero.tsx                  # Hero section with form
│   ├── Location.tsx              # Location and contact info
│   ├── Pricing.tsx               # Pricing tables
│   ├── Services.tsx              # Services showcase
│   ├── StickyContactBar.tsx      # Bottom sticky contact bar
│   ├── Testimonials.tsx          # Customer testimonials
│   └── TopBar.tsx                # Top bar with contact info
├── public/
│   ├── images/                   # Website images (you need to add these)
│   ├── robots.txt                # SEO robots file
│   └── sitemap.xml               # SEO sitemap
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1E40AF`, `#3B82F6`, `#60A5FA`
- **Secondary**: White and light grays (`#F8FAFC`, `#F1F5F9`)
- **Accent**: Professional blue variations

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, clean hierarchy
- **Body**: Readable, professional

### Components
- Responsive grid layouts
- Card-based design elements
- Smooth animations and transitions
- Consistent spacing and borders

## 📧 Email Configuration

The project uses [Resend](https://resend.com) for email functionality:

1. **Sign up for Resend** at [resend.com](https://resend.com)
2. **Get your API key** from the dashboard
3. **Add to environment variables**:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

### Email Features
- Appointment request notifications to clinic
- Confirmation emails to customers
- Professional HTML email templates
- Error handling and validation

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+
- **Touch Friendly**: Larger touch targets on mobile
- **Performance**: Optimized images and lazy loading

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub** (already done if you're reading this)
2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy automatically

3. **Configure Domain** (Optional)
   - Add custom domain in Vercel settings
   - Update DNS records as instructed

### Other Platforms

The app can be deployed on any Node.js hosting platform:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Customization

### Clinic Information
Update these files with your clinic's details:

1. **Contact Information** (`components/TopBar.tsx`, `components/Footer.tsx`)
   - Phone number: `0720.123.123`
   - Address: `Strada Maria Rosetti 26A, București 020487`
   - Email: `contact@vetcarefamily.com`

2. **Clinic Name** (`app/layout.tsx`, `components/Header.tsx`)
   - Current: "VetCare Family"
   - Update meta title and descriptions

3. **Services and Pricing** (`components/Services.tsx`, `components/Pricing.tsx`)
   - Update service descriptions
   - Modify pricing tables

### Images
Add your veterinary clinic images to the `public/images/` directory:
- Hero section images
- Service showcase photos
- Staff photos for testimonials
- Clinic interior/exterior photos

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Email**: Resend
- **Icons**: Lucide React
- **Smooth Scrolling**: React Scroll

## 📄 License

This project is for educational/commercial use. Feel free to customize it for your veterinary clinic.

## 🤝 Support

If you need help with customization or have questions:
- Create an issue in this repository
- Check the documentation in the `docs/` folder
- Review the code comments for guidance

---

**Built with ❤️ for veterinary professionals who care about their online presence.**