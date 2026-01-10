# LitBench Poster - EACL 2025

Interactive academic poster for the paper "LitBench: A Benchmark and Dataset for Reliable Evaluation of Creative Writing" (arXiv:2507.00769).

## Features

- **Renderable in code**: Built with React/Next.js - all content is in editable TSX components
- **Interactive**: Click-to-expand figures, animated charts, hover effects
- **Responsive**: Works on desktop, tablet, and mobile
- **Hostable**: Deploys to Vercel with one click
- **Print-ready**: CSS print styles for physical poster output

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the poster.

## Project Structure

```
src/
├── app/
│   ├── page.tsx        # Main poster layout and content
│   ├── layout.tsx      # Page metadata and fonts
│   └── globals.css     # Custom styles and animations
└── components/
    ├── FigureCard.tsx   # Clickable figure with modal expand
    ├── FigureModal.tsx  # Full-screen figure viewer
    ├── StatCard.tsx     # Key statistics display
    ├── ResultsChart.tsx # Animated bar chart for results
    └── index.ts         # Barrel exports
```

## Editing the Poster

### Content
Edit `src/app/page.tsx` to modify:
- Header (title, authors, institution)
- Section content (motivation, dataset, methodology, etc.)
- Figure data and descriptions
- Key findings and qualitative insights

### Styling
Edit `src/app/globals.css` to modify:
- Color scheme (CSS variables)
- Section hover effects
- Animation timing
- Print styles

### Figures
Edit `src/components/ResultsChart.tsx` to update:
- Model accuracy data
- Chart categories and colors
- Legend labels

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

Or use the CLI:
```bash
npx vercel
```

### Other Platforms
Build the static export:
```bash
npm run build
```

## Paper Information

**Title**: LitBench: A Benchmark and Dataset for Reliable Evaluation of Creative Writing

**Authors**: Daniel Fein, Sebastian Russo, Violet Xiang, Kabir Jolly, Rafael Rafailov, Nick Haber

**Institution**: Stanford University

**Links**:
- Paper: https://arxiv.org/abs/2507.00769
- Dataset: https://huggingface.co/collections/SAA-Lab/litbench-68267b5da3aafe58f9e43461
- Demo: https://litbench.vercel.app/

## License

MIT
