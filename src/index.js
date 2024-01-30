let citiesTimezoneActive = false;

function citiesTimezone(event) {
  if (citiesTimezoneActive) {
    return; // Do not run if citiesTimezone is already active
  }

  citiesTimezoneActive = true;

  let cities = {
    Sydney: "Australia/Sydney",
    London: "Europe/London",
    Dubai: "Asia/Dubai",
  };

  let timezoneListHtml = "";
  let timezoneList = document.querySelector("#timezone-list");

  let timezoneEntries = Object.entries(cities);

  timezoneEntries.forEach(function (timezoneEntry) {
    timezoneListHtml += `<li>
        <div class="city-date">
        <p class= "timezone-offset">Today, <span>
        ${moment().tz(timezoneEntry[1]).format("Z")}</span></p>
          <p class="city">${timezoneEntry[0]}</p>
          <p class="date">${moment()
            .tz(timezoneEntry[1])
            .format("MMMM Do")} </p>
        </div>
        <div>
          <span class="time">${moment()
            .tz(timezoneEntry[1])
            .format("HH:mm:ss")}</span>
        </div>
      </li>`;
  });

  timezoneList.innerHTML = timezoneListHtml;

  citiesTimezoneActive = true;
}
function activateCities() {
  
}
function singleCity(event) {
  let newTimezoneName = event.target.value;
  let oneLocation = newTimezoneName.replace("_", "").split("/")[1];
  let singleTimezone = document.querySelector("#timezone-list");
  let newTimezone = moment().tz(newTimezoneName);

  if (newTimezone === "current") {
    newTimezone = moment().tz.guess();
  }

  singleTimezone.innerHTML = `<li>
        <div class="city-date">
        <p class= "timezone-offset">Today, <span>
        ${newTimezone.format("Z")}</span></p>
          <p class="city">${oneLocation}</p>
          <p class="date">${newTimezone.format("MMMM Do")} </p>
        </div>
        <div>
          <span class="time">${newTimezone.format("HH:mm:ss")}</span>
        </div>
      </li>`;
  
let citiesButton = document.querySelector(".cta");
citiesButton.innerHTML = `<button class="all-cities">All cities </button>`;


  
}


// all the button things
 function showAllCities(event){
 event.preventDefault()
  citiesTimezoneActive = false;
 
 
 }
 
let citiesButton = document.querySelector(".cta");
citiesButton.addEventListener("click", showAllCities)





let selectedCity = document.querySelector("#cities");
selectedCity.addEventListener("change", singleCity);

setInterval(citiesTimezone, 1000);
