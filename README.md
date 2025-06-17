# **Simple Login dApp with Puzzle Wallet**

A minimal decentralized application (dApp) for login/logout using **Puzzle Wallet** on the **Aleo blockchain**, with placeholders for future **Zero-Knowledge Proof (ZKP)** development.

---

## 🚀 **Setup**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aleo-simple-login.git
   cd aleo-simple-login

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**
   Copy the `.env` template and add your Aleo private key (optional for wallet connection):

   ```
   NETWORK=testnet3
   PRIVATE_KEY=YOUR_PRIVATE_KEY_HERE
   ```

4. **Run the dApp**

   ```bash
   npm run dev
   ```

---

## ✨ **Features**

* **Login**: Click **"Connect Wallet"** to trigger the Puzzle Wallet pop-up.
* **Logout**: Click the wallet address in the header to disconnect.
* **ZKP Placeholder**: Includes `aleo/zkp_template.aleo` and `src/components/ZKPComponent.tsx` for future ZKP development.

---

## 🧠 **Extending with ZKP**

* Modify `aleo/zkp_template.aleo` to implement your ZKP logic (e.g., using **Aleo’s zkSNARKs**).
* Update `ZKPComponent.tsx` to call the Aleo program via `@puzzlehq/sdk`.
* Deploy the program to **Aleo Testnet** using the **Aleo CLI** or **SDK**.
* Test ZKP functionality with **Puzzle Wallet**.

---

## 📦 **Dependencies**

* [`@puzzlehq/sdk`](https://github.com/puzzlehq/sdk) — for wallet integration
* `react`, `react-dom` — for frontend
* `tailwindcss` — for styling
* `@tanstack/react-query` — for data fetching and caching

---

## 📂 **Project Structure**

```
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
```

---

## 📖 **License**

MIT License — feel free to use, modify, and share.

---

## 🙌 **Credits**

Built by (https://github.com/barnazaka)
Powered by **Aleo**, **Puzzle Wallet**, and **Zero-Knowledge Proof technology**.

---

## 🔗 **Links**

* [Aleo Official Docs](https://developer.aleo.org/)
* [Puzzle Wallet SDK](https://github.com/puzzlehq/sdk)
* [React Query](https://tanstack.com/query/v4)


---

### ✅ How to use it:
1. Copy that markdown.
2. In VS Code, **create a new file named `README.md` in your project root**.
3. Paste it.
4. Save, commit, and push — it’ll render cleanly on GitHub with headings, code blocks, and formatting.
