Simple Login dApp with Puzzle Wallet
A minimal dApp for login/logout using Puzzle Wallet on the Aleo blockchain, with placeholders for ZKP development.
Setup

Clone the repository.
Install dependencies:npm install


Copy .env template and add your Aleo private key (optional for wallet connection):NETWORK=testnet3
PRIVATE_KEY=YOUR_PRIVATE_KEY_HERE


Run the dApp:npm run dev



Features

Login: Click "Connect Wallet" to trigger the Puzzle Wallet pop-up.
Logout: Click the wallet address in the header to disconnect.
ZKP Placeholder: Includes aleo/zkp_template.aleo and src/components/ZKPComponent.tsx for future ZKP development.

Extending with ZKP

Modify aleo/zkp_template.aleo to implement your ZKP logic (e.g., using Aleo’s zkSNARKs).
Update ZKPComponent.tsx to call the Aleo program via @puzzlehq/sdk.
Deploy the program to Aleo Testnet using the Aleo CLI or SDK.
Test ZKP functionality with Puzzle Wallet.

Dependencies

@puzzlehq/sdk: For wallet integration.
react, react-dom: For frontend.
tailwindcss: For styling.
@tanstack/react-query: For data fetching.

Project Structure
aleo-simple-login/
├── aleo/
│   └── zkp_template.aleo
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── header.tsx
│   │   └── ZKPComponent.tsx
│   ├── hooks/
│   │   └── useDapp.tsx
│   ├── App.tsx
│   ├── Dashboard.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

