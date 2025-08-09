# Vitrine Setup

**Vitrine** requires specific environment variables and configuration for successful setup and operation.

## Environment Variables for Vitrine

Set the following variables in your environment before running the application:

```sh
VITE_SITE_URL=<Your site URL>
VITE_SITE_TRAILING_SLASH=<true|false>
VITE_BASE_PATHNAME=<Base path for the application>
VITE_FRONT_URL=<Frontend URL>
```

### Cookie Consent

Vitrine uses [cookie consent](https://github.com/jop-software/astro-cookieconsent) for managing cookies. This allows users to accept or reject cookies based on their preferences. Please refer to the documentation for more details.

## Running Vitrine

After setting the environment variables, you can start the Vitrine app by running the following command:

```bash
pnpm nx run vitrine:dev
```

> **Important:** The following environment variables are required during build:

- `VITE_SITE_URL`: The URL of the site.
- `VITE_BASE_PATHNAME`: Base path for the application.
- `VITE_SITE_TRAILING_SLASH`: Set to `true` if trailing slashes are used in URLs.
- `VITE_FRONT_URL`: The frontend URL for routing and links.

## Custom I18n Integration

Vitrine uses a custom i18n implementation on top of [astro-i18n-aut/integration](https://github.com/astro-i18n/astro-i18n-aut), allowing for language-based translation management. Configure locales and default language.

For more information on translation functionality, refer to the relevant files and utility functions (`translator.ts`, `linksUtils.ts`, etc.) in the `libs/i18n` directory.
