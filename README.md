# Vitrine - Isolated Astro Application

This is an isolated version of the Vitrine Astro application, extracted from a complex monorepo to work independently.

## 🚀 Project Overview

Vitrine is a modern website built with Astro, featuring:
- **Static Site Generation** with Astro 5.x
- **React Components** for interactive elements
- **Internationalization** (i18n) support for French and English
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Cookie Consent Management**
- **SEO Optimization** with sitemap generation

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0 (recommended package manager)

## 🛠️ Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd vitrine-isolated
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

## 🧞 Development Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server at `http://localhost:4321` |
| `pnpm build` | Build production site to `./vitrine/dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run Astro diagnostics |
| `pnpm sync` | Sync Astro types |
| `pnpm lint` | Lint the codebase |
| `pnpm format` | Format code with Prettier |
| `pnpm type-check` | Run TypeScript type checking |
| `pnpm clean` | Clean all build artifacts and node_modules |

## 📁 Project Structure

```
vitrine-isolated/
├── vitrine/                    # Main Astro application
│   ├── src/
│   │   ├── components/         # Astro & React components
│   │   ├── layouts/           # Page layouts
│   │   ├── pages/             # Astro pages (file-based routing)
│   │   ├── i18n/              # Internationalization files
│   │   └── assets/            # Static assets
│   ├── public/                # Public static files
│   ├── astro.config.ts        # Astro configuration
│   └── package.json
├── libs/                      # Shared libraries
│   ├── i18n/                  # i18n utilities
│   └── ui/
│       ├── common/            # Common UI components
│       └── shadcn/            # Shadcn/ui components
├── package.json               # Root workspace configuration
└── pnpm-workspace.yaml        # PNPM workspace config
```

## 🌍 Internationalization

The application supports multiple languages:
- **French (fr)** - Default language
- **English (en)**

Language files are located in `vitrine/src/i18n/` and the routing follows the pattern:
- `/` - French (default)
- `/en/` - English

## 🎨 Styling

The project uses **Tailwind CSS** for styling with:
- Custom configuration in `vitrine/tailwind.config.js`
- PostCSS processing
- Tailwind merge utilities for conditional classes

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the vitrine directory with:

```env
VITE_SITE_URL=https://www.spicaro.com
VITE_SITE_TRAILING_SLASH=false
```

### Key Configuration Files

- **`vitrine/astro.config.ts`** - Astro configuration with integrations
- **`vitrine/tsconfig.json`** - TypeScript configuration with path mappings
- **`vitrine/tailwind.config.js`** - Tailwind CSS configuration
- **`pnpm-workspace.yaml`** - PNPM workspace configuration

## 📦 Shared Libraries

The project includes internal libraries:

### @simplified/i18n
Internationalization utilities for translations and locale handling.

### @spicaro/common
Common UI components shared across applications.

### @spicaro/shadcn
Shadcn/ui components adapted for the project.

## 🚀 Building for Production

1. **Build the application:**
   ```bash
   pnpm build
   ```

2. **Preview the build:**
   ```bash
   pnpm preview
   ```

The build output will be in `vitrine/dist/` and is ready for deployment to any static hosting service.

## 🔍 Key Features

- **Cookie Consent Management** - GDPR compliant cookie consent
- **SEO Optimized** - Meta tags, structured data, sitemap
- **Performance Focused** - Static generation, optimized assets
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant components

## 📝 Migration Notes

This project was isolated from a larger monorepo with the following changes:

1. **Dependencies**: Extracted only necessary dependencies from the parent monorepo
2. **TypeScript**: Updated path mappings to work with the new structure
3. **Astro Config**: Removed NX workspace dependencies
4. **Libraries**: Copied and configured shared libraries as local packages
5. **Workspaces**: Set up PNPM workspaces for library management

## 🐛 Troubleshooting

### Common Issues

1. **Path Resolution Errors**: Ensure all `@spicaro/*` and `@simplified/*` imports are correctly mapped in `tsconfig.json`

2. **Missing Dependencies**: Run `pnpm install` in the root directory to install all workspace dependencies

3. **Build Errors**: Check that all environment variables are properly set

### Getting Help

If you encounter issues:
1. Check the Astro documentation: https://docs.astro.build
2. Verify all dependencies are installed: `pnpm install`
3. Clear cache and rebuild: `pnpm clean && pnpm install && pnpm build`

## 📄 License

This project is part of the SPICARO application suite.