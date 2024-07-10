# Crypto Link App

## Description

Crypto Link App is a simple frontend application built with Next.js designed to connect to web3 and monitor the top 5 cryptocurrencies by market capitalization in real-time. The app leverages various modern tools and practices to ensure code quality, consistency, and a seamless developer experience.

## Features

- **Semantic Versioning:** Automatically creates tags for versioning.
- **Husky Integration:** Ensures commit messages follow a consistent format.
- **ESLint and Prettier:** Maintains consistent code style.
- **Next.js (App Router Version):** Utilizes the latest features of Next.js.
- **shadcn/ui:** Used for styling components.
- **RainbowKit:** Facilitates wallet connection to web3.
- **CoinMarketCap API:** Provides real-time updates of cryptocurrency prices.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
$ git clone https://github.com/tianbuyung/crypto-link.git
$ cd crypto-link-app
$ yarn install
```

## Running the App

### Development Mode

Run the application in development mode:

```bash
$ yarn dev
```

### Build Mode

Build the application for production:

```bash
$ yarn build
```

### Production Mode

Start the application in production mode:

```bash
$ yarn start
```

### Linting

Lint the codebase to ensure code quality and consistency:

```bash
$ yarn lint
```

## Deployment

The application is continuously deployed to Vercel. You can access the live version [here](https://crypto-link-zeta.vercel.app/).

## Stay in Touch

- Author - [Septian Maulana](https://www.tianweb.dev)

## Additional Information

### Semantic Versioning

Semantic versioning is used to automatically create tags for versioning. This helps in tracking the history of changes and maintaining compatibility.

### Husky Integration

Husky is used to enforce commit message standards. Before a commit is finalized, Husky runs checks to ensure that the commit message follows a specified format.

### ESLint and Prettier

ESLint and Prettier are configured to maintain a consistent code style across the project. This ensures readability and reduces potential errors.

### shadcn for Styling

The shadcn library is used for styling components in a modular and maintainable manner.

### RainbowKit for Wallet Connection

RainbowKit is integrated into the application to facilitate connecting to various web3 wallets, enhancing the user experience.

### CoinMarketCap API

The CoinMarketCap API is used to fetch real-time cryptocurrency prices, keeping the data updated and accurate.
