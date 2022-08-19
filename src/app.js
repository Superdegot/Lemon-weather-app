function displayTemperature(response) {
  console.log(response.data.main.temp);
}

let apiKey = "a7f68d2ec2f69660b714e7d26727f615";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
