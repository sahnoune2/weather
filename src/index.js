const field = document.querySelector(".field");
const button = document.querySelector(".button");
const weather = document.querySelector(".weather");
const locationElement = document.querySelector(".location");
const temperature = document.querySelector(".temperature");
const time = document.querySelector(".time");
const toggle = document.querySelector(".change");

async function getApi() {
  try {
    const textElement = field.value;
    console.log(textElement);
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=368c7599fc6f406c969214743232405&q=${textElement}`
    );

    if (!response.ok) {
      throw new Error("fuck u bitches");
    }
    const result = await response.json();
    console.log(result);

    weather.textContent = result.current.condition.text;
    locationElement.textContent = result.location.country;
    temperature.textContent = result.current.temp_c;
    let tempType = false;
    time.textContent = result.current.last_updated;
    toggle.addEventListener("click", () => {
      if (tempType === false) {
        temperature.textContent = result.current.temp_f;
        tempType = true;
      } else if (tempType === true) {
        temperature.textContent = result.current.temp_c;
        tempType = false;
      }
    });
  } catch (error) {
    alert(error);
  }
}
button.addEventListener("click", (event) => {
  event.preventDefault();
  getApi();
});
