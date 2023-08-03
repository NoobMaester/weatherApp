const inputText = document.querySelector(".inputTxt");
const submit = document.querySelector(".btn");

const apiKey = "abed9c28677b475992280043230208";

const displayLoading = () => {
  document.querySelector(".loading").style.display = "block";
  setTimeout(() => {
    document.querySelector(".loading");
  }, 3000);
};
const hideLoading = () => {
  document.querySelector(".loading").style.display = "none";
};

const checkWeather = async (city) => {
  displayLoading();
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
  );
  const data = await response.json();
  hideLoading();

  // console.log(data.current.condition.icon);
  // console.log(data.current.temp_c);
  // console.log(data);
  // console.log(data.location.name);

  document.getElementById("city").innerHTML = data.location.name;
  document.getElementById("temp").innerHTML = data.current.temp_c + "ºC";
  document.getElementById("icon").src = data.current.condition.icon;
  document.getElementById("condition").innerHTML = data.current.condition.text;

  document.querySelector(".output").style.display = "block";
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  checkWeather(inputText.value);
  inputText.value = "";
});
