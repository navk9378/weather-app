# 🌦️ Weather API Integration

A lightweight and responsive web application that fetches and displays real-time weather information based on user location or search input.  
Built using **ASP.NET Core MVC** and a public weather API.

---

## 🚀 Features

- 🌤️ **Live Weather Data** – Fetch current temperature, humidity, wind speed, etc.  
- 📍 **Search by City/Location** – Users can manually enter a location.  
- ⚙️ **API Consumption** – Integrates with a public weather API using HttpClient.  
- 📱 **Responsive UI** – Works smoothly on desktop and mobile.  
- ❗ **Error Handling** – Handles invalid inputs, API failures, and no-data scenarios.  

---

## 🛠️ Tech Stack

- **ASP.NET Core MVC**
- **ASP.NET Core Web API**
- **C#**
- **JavaScript**
- **HTML5 / CSS3 / Bootstrap**
- **Weather API (OpenWeather or similar)**

---

## 📂 Project Structure
/Controllers
/Views
/wwwroot
/Services
/Models

- **Controllers** → Handle weather requests  
- **Services** → API call logic using HttpClient  
- **Views** → UI for search & weather display  
- **Models** → DTOs for mapping API responses  

---

## 🔗 API Integration Flow

1. User enters location (e.g., “Haryana”).  
2. Controller sends request to `WeatherService`.  
3. Service calls the external weather API.  
4. API response is mapped into model classes.  
5. View displays the formatted weather details.

---

## ▶️ How to Run

1. Clone the repository  
2. Open the project in **Visual Studio**  
3. Add your API key in `appsettings.json`  
4. Run the project (IIS Express)

---


