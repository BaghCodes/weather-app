const API_key = "c113e5d2123009fc55fd310e65736ac7";

async function CheckWeather(loc) {
    const API_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${loc}&appid=${API_key}`;
    const response = await fetch(API_url);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
        document.querySelector(".location").innerHTML = data.name;
        document.getElementById("Temperature").innerHTML = data.main.temp + " °C";
        document.getElementById("Humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("Wind").innerHTML = data.wind.speed + " km/h";
        document.getElementById("Cloud").innerHTML = data.clouds.all + "%";
        document.getElementById("Visibility").innerHTML = (data.visibility / 1000) + " km";
    } else {
        alert("Location not found!");
    }
}

document.getElementById("searchbtn").addEventListener("click", function () {
    const loc = document.getElementById("locationip").value;
    if (loc.trim() !== "") {
        CheckWeather(loc);
    } else {
        alert("Enter a valid location");
    }
});

document.getElementById("locationip").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const loc = document.getElementById("locationip").value;
        if (loc.trim() !== "") {
            CheckWeather(loc);
        } else {
            alert("Enter a valid location");
        }
    }
});
