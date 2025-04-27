# Kokoemon

AI-Powered UI Development Platform for web3

## Overview

Kokoemon is a modern web3 UI development platform that leverages AI to streamline the development process. Built with Next.js, TypeScript, and Tailwind CSS, it provides a powerful and intuitive interface for creating web3 applications.

## Features

- 🎨 Modern UI inspired by Horizon UI
- 🤖 AI-powered development assistance
- ⚡️ Built with Next.js 15.3.1
- 🎯 TypeScript 5 for type safety
- 💅 Tailwind CSS 3.4.17 for styling
- 🔐 Supabase integration for backend services
- 📦 Package management with pnpm

## Tech Stack

- **Framework**: Next.js 15.3.1
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **Database**: Supabase (@supabase/supabase-js 2.49.4, @supabase/ssr 0.6.1)
- **Package Manager**: pnpm

## Getting Started

1. Clone the repository:
   ```bash
   git clone git@github.com:butcher73/koko-e4.git
   cd koko-e4
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
koko-e4/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utility functions and configurations
├── public/          # Static assets
└── styles/          # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE) 