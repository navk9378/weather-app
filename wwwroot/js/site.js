$(document).ready(function () {
    $("#getWeather").click(function () {
        var city = $("#city").val();
        var apiKey = "7df39c8e45044496a4155506250610";

        if (!city.toLowerCase().includes("india")) {
            city += ",India";
        }

        if (city === "") {
            $("#weatherResult").html("<p class='error'>⚠️ Please enter a city!</p>");
            return;
        }

        /*var url = "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city + "&aqi=yes";*/
        var url = "https://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&q=" + city + "&days=2&aqi=yes&alerts=no";

        $.get(url, function (data) {
            var location = data.location.name + ", " + data.location.country;
            var temp = data.current.temp_c + " °C";
            var condition = data.current.condition.text;
            var icon = data.current.condition.icon;

            var feels = data.current.feelslike_c + " °C";
            var humidity = data.current.humidity + "%";
            var wind = data.current.wind_kph + " kph";
            var pressure = data.current.pressure_mb + " mb";
            var uv = data.current.uv;
            var cloud = data.current.cloud + "%";
            var aqi = data.current.air_quality.pm2_5 ? data.current.air_quality.pm2_5.toFixed(1) : "N/A";
            var sunrise = data.forecast.forecastday[0].astro.sunrise;
            var sunset = data.forecast.forecastday[0].astro.sunset;


            var html = `
                    <div class="result">
                        🌍 <b>${location}</b><br>
                        🌡 Temperature: ${temp} (Feels like: ${feels})<br>
                        ☁️ Condition: ${condition} <img src="https:${icon}" alt="icon"><br>
                        💧 Humidity: ${humidity} ,💨 Wind: ${wind} , ☁️ Cloud Cover: ${cloud}<br>
                        🌅 Sunrise: ${sunrise} | 🌇 Sunset: ${sunset}
                    </div>
                `;
            // 3-day Forecast
            html += `<div class="forecast"><h5>2-Day Forecast:</h5>`;
            data.forecast.forecastday.forEach(function (day) {
                html += `
                        <div class="forecast-day">
                            <b>📅 ${day.date}</b><br>
                            🌡 Max: ${day.day.maxtemp_c} °C, Min: ${day.day.mintemp_c} °C<br>
                            ☁️ Condition: ${day.day.condition.text} <img src="https:${day.day.condition.icon}" alt="icon"><br>
                        </div>
                    `;
            });
            html += `</div>`;

            $("#weatherResult").html(html);

            // Optional: Change background color based on condition
            if (condition.toLowerCase().includes("sun")) {
                $("body").css("background", "linear-gradient(to bottom, #fbc2eb, #a6c1ee)");
            } else if (condition.toLowerCase().includes("rain")) {
                $("body").css("background", "linear-gradient(to bottom, #74ebd5, #ACB6E5)");
            } else if (condition.toLowerCase().includes("cloud")) {
                $("body").css("background", "linear-gradient(to bottom, #d7dde8, #a0b1c2)");
            } else {
                $("body").css("background", "linear-gradient(to bottom, #74ebd5, #ACB6E5)");
            }

        }).fail(function () {
            $("#weatherResult").html("<p class='error'>❌ City not found!</p>");
        });
    });
});