# 🌤️ Weather App

A modern, responsive weather application built with React that provides real-time weather information and forecasts for any location worldwide.

## ✨ Features

- *🌍 Global Weather Data*: Get weather information for any city worldwide
- *📍 Auto-Location Detection*: Automatically fetches weather for your current location on app load
- *🔍 Smart City Search*: Intelligent search with autocomplete suggestions
- *🌡️ Current Weather*: Real-time temperature, weather conditions, and atmospheric data
- *📅 7-Day Forecast*: Detailed daily weather predictions with expandable details
- *📱 Responsive Design*: Works seamlessly on desktop and mobile devices
- *🎨 Modern UI*: Clean, intuitive interface with weather icons

## 🖥️ Screenshots

The app displays:
- Current weather conditions with temperature and weather description
- Detailed information including feels-like temperature, wind speed, humidity, and pressure
- 7-day forecast with expandable daily details
- Search functionality with city suggestions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. *Clone the repository*
bash
git clone <your-repository-url>
cd weather-app


2. *Install dependencies*
bash
npm install


3. *Install required packages*
bash
npm install react-select-async-paginate react-accessible-accordion


4. *Start the development server*
bash
npm start


5. *Open your browser*
Navigate to http://localhost:3000 to view the app

## 🛠️ Built With

- *React* - Frontend framework
- *React Hooks* - State management (useState, useEffect)
- *OpenWeatherMap API* - Weather data provider
- *GeoDB Cities API* - City search and geocoding
- *React Select Async Paginate* - Advanced search component
- *React Accessible Accordion* - Expandable forecast details
- *CSS3* - Styling and responsive design

## 📁 Project Structure

```
src/
├── components/
│   ├── search/
│   │   └── Search.js              # City search component
│   ├── current-weather/
│   │   ├── CurrentWeather.js      # Current weather display
│   │   └── current-weather.css    # Current weather styles
│   └── forecast/
│       ├── ForeCast.js           # 7-day forecast component
│       └── foreCast.css          # Forecast styles
├── App.js                        # Main app component
├── App.css                       # App styles
├── api.js
