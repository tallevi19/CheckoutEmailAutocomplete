# Checkout Email Autocomplete

A Shopify checkout UI extension that provides smart email domain autocomplete suggestions during checkout.

## How it works

When a customer types their email address at checkout and enters the `@` symbol, the extension displays clickable suggestions for popular email domains (Gmail, Yahoo, Outlook, etc.). Clicking a suggestion auto-completes the email field.

## Features

- Displays suggestions only after `@` is typed
- Filters suggestions as the customer types the domain
- Hides suggestions once a valid domain is entered
- Shows up to 4 matching suggestions at a time
- Supports 10 popular email providers

## Supported Domains

- gmail.com
- yahoo.com
- outlook.com
- hotmail.com
- icloud.com
- aol.com
- protonmail.com
- mail.com
- zoho.com
- yandex.com

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Deploy to Shopify
npm run deploy
```

## Project Structure

```
├── app/                          # Remix app (admin interface)
│   ├── root.jsx
│   ├── entry.server.jsx
│   └── routes/
│       └── _index.jsx
├── extensions/
│   └── email-autocomplete/       # Checkout UI extension
│       ├── shopify.extension.toml
│       └── src/
│           └── Checkout.jsx      # Main extension component
├── shopify.app.toml
├── package.json
└── vite.config.js
```
