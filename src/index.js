async function getApi() {
  try {
    const response = await fetch(
      "https://api.weatherapi.com/v1/current.json?key=368c7599fc6f406c969214743232405&q=london"
    );
    const result = await response.json();
    if (!response.ok) {
      throw new Error("fuck u bitches");
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getApi();

// location
// temprature
// feels likz
// humidity
// chance of rain
// wind Speeed
