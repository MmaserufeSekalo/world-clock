function citiesTimezone() {
  let cities = {
    Johannesburg: "Africa/Johannesburg",
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
            .format("MMMM Do YYYY")} </p>
        </div>
        <div>
          <span class="time">${moment()
            .tz(timezoneEntry[1])
            .format("HH:mm:ss")}</span>
        </div>
      </li>`;
  });

  timezoneList.innerHTML = timezoneListHtml;
}

setInterval(citiesTimezone, 1000);
