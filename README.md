# **🚀 Restaurant React Native App**

A sleek and functional mobile application built with React Native to browse restaurants, explore menus, and place orders on the go. Built for both Android and iOS with an intuitive and modern user interface. 📱✨

## **🌟 Features:**
- 📍 Browse Restaurants – Explore nearby and featured restaurants.
- 📋 View Menus – See dishes, prices, and detailed descriptions.
- 🔍 Search Functionality – Quickly find restaurants or dishes.
- 📱 Responsive Design – Smooth and adaptive UI for all devices.

## **🛠 Technologies Used:**
**React Native (Expo)** – Cross-platform mobile framework
**React Navigation** – Navigation and routing
**Redux / Context API** – State management (based on your setup)
**Axios / Fetch API** – For fetching restaurant data
**Styled Components / NativeWind / CSS-in-JS** – App styling
**AsyncStorage / Firebase / Backend API** – (Optional) For data persistence and auth

## **📂 Project Structure:**
restaurant-react-native/  
├── assets/                # Images, fonts, icons  
├── src/  
│   ├── components/        # Reusable UI components (e.g., RestaurantCard, MenuItem)  
│   ├── screens/           # App screens (Home, Details, Cart, Checkout)  
│   ├── navigation/        # Stack and tab navigators  
│   ├── context/           # Global state (e.g., CartContext)  
│   ├── services/          # API calls and helpers  
│   └── App.js             # Main App entry  
├── app.json / package.json # Configuration and dependencies  
└── README.md              # This file  


## **🏁 Installation:**

1. Clone the repository:
   git clone https://github.com/yourusername/restaurant-react-native.git

2. Navigate into the project directory:
   cd restaurant-react-native

3. Install dependencies:
   npm install

4. Run the app (Expo):
   npx expo start
   Scan the QR code with Expo Go on your device or run on Android/iOS emulator.

## **🚀 Deployment:**
To Publish you app:

1. For Expo:
   npx expo publish

2. For APK / IPA builds:
   npx expo build:android or npx expo build:ios

Deploy to Google Play or App Store following respective guidelines.

## **🤝 Contributing:**
Created with passion by Prerna Gattani.
Contributions, suggestions, and feedback are always welcome! 🙌

Feel free to fork the repo, submit issues, or open PRs! 💬
