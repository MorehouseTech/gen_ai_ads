# StreamSense - AI-Powered Ad Generation Platform  

## 🚀 Live Demo  
Experience StreamSense in action:   
https://streamsenseai.com

## 📌 About  
StreamSense is an AI-powered advertisement generation platform that allows users to create dynamic, customized ads based on selected streaming content, sponsors, and products. Built with **React and TypeScript**, StreamSense provides an intuitive and engaging experience with a modern **Material-UI (MUI) design**.  

## 🛠️ Technology Stack  
- **Frontend:** React 19, TypeScript, Vite, Material-UI (MUI), React Router DOM  
- **Backend:** Flask, Ngrok  
- **AI Model:** Flux.1 from Hugging Face for image generation  
- **Deployment:** GitHub Pages (Frontend), Ngrok (Backend API)  

## 🎯 How to Use StreamSense  
The judges can explore the live deployment and generate AI-powered advertisements with the following steps:  

1️⃣ **Visit the Live Application:**  
👉 [StreamSense Live Demo](https://morehousetech.github.io/gen_ai_ads/)  

2️⃣ **Interact with the App:**  
- Select a **streaming platform** (e.g., Netflix, Hulu, YouTube).  
- Choose a **video or show**.  
- Pick a **sponsor and product** for the ad.  

3️⃣ **Generate Your AI-Powered Ad:**  
- On the **generation screen**, locate the **text box**.  
- Enter the following URL exactly as shown:  
  ```
  https://4f57-34-124-170-132.ngrok-free.app/generate
  ```
- Click **"Generate Ad"** and wait up to **2 minutes** for the AI to process and display the finished product.  

📢 **Note:** The AI model runs exclusively on our backend and utilizes the **Flux.1 model from Hugging Face** for ad generation.  

---

## 📂 Project Structure  
```
streamsense/
├── src/              # Source code
├── public/           # Static assets
├── dist/             # Build output
├── node_modules/     # Dependencies
├── vite.config.ts    # Vite configuration
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project dependencies and scripts
└── index.html        # Entry HTML file
```  

## 🚀 Getting Started (For Developers)  

### ✅ Prerequisites  
Ensure you have the following installed:  
- **Node.js** (Latest LTS version recommended)  
- **npm** or **yarn** package manager  

### 📥 Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/morehousetech/gen_ai_ads.git
   cd gen_ai_ads
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```  

### ⚙️ Running Locally  
To start the development server:  
```bash
npm run dev
```  
The app will be available at `http://localhost:5173`.  

### 📦 Building for Production  
To create a production build:  
```bash
npm run build
```  

### 🚀 Deployment (GitHub Pages)  
Deploy the frontend using:  
```bash
npm run deploy
```  

---

## 📜 Available Scripts  
- `npm run dev` - Start the development server  
- `npm run build` - Create a production build  
- `npm run preview` - Preview production build locally  
- `npm run lint` - Run ESLint  
- `npm run deploy` - Deploy to GitHub Pages  

---

## 🤝 Contributing  
1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

---

## 📄 License  
This project is licensed under the **MIT License**.  
