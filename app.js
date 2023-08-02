
const apiKey = "abed9c28677b475992280043230208";
const city = "london"
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

const checkWeather = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data.current);
    console.log(data.current.temp_c);
    console.log();
    console.log();
    console.log();
}
checkWeather();
