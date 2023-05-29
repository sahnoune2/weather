async function getApi() {
  const result = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=368c7599fc6f406c969214743232405&q=london"
  );
  console.log(result.json());
}

getApi();

// location
// temprature
// feels likz
// humidity
// chance of rain
// wind Speeed
