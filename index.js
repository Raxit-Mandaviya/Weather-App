const apiKey ='60ef2518b4501b0d5f8b30afa976a7c3'; // Replace with your API key
const query ='Vadodara';
const apiUrl =`https://api.weatherstack.com/current?access_key=${apiKey}&query=${query}`;

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json()) // Convert the response to JSON
  .then(data => {
    console.log(data)
    // Check if the API request was successful
    if (data) {
      displayWeatherData(data); // Call function to display data
    } else {
      document.getElementById('weather-data').innerHTML = 
        `<p class="error">Error ${data.error.code}: ${data.error.info}</p>`;
    }
  })
  .catch(error => {
    // Handle any network or other errors
    console.error('Error fetching data:', error);
    document.getElementById('weather-data').innerHTML = 
      `<p class="error">Unable to fetch weather data. Please try again later.</p>`;
  });

  // Function to display weather data on the webpage
function displayWeatherData(data) {
  const weatherContainer = document.getElementById('weather-data');
  weatherContainer.innerHTML = `
    <h2>Weather in ${data.request.query}</h2>
    <p><strong>Weather Description:</strong> ${data.current.weather_descriptions[0]}</p>
    <p><strong>Temperature:</strong> ${data.current.temperature}°C</p>
    <p><strong>Feels Like:</strong> ${data.current.feelslike}°C</p>
    <p><strong>Wind Speed:</strong> ${data.current.wind_speed} km/h (${data.wind_dir})</p>
    <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
    <p><strong>Visibility:</strong> ${data.current.visibility} km</p>
    <p><strong>Pressure:</strong> ${data.current.pressure} mb</p>
    <p><strong>Local Time:</strong> ${data.current.localtime}</p>
    `;
}
