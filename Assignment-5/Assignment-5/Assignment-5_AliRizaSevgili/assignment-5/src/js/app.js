/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Ali Riza Sevgili
 *      Student ID: 135200228
 *      Date:       04/14/2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.

const { artists, songs } = window;

let nav = document.querySelector("#menu");
artists.forEach((artist) => {
  let button = document.createElement("button");
  button.innerHTML = artist.name;
  button.addEventListener("click", function () {
    let h2 = document.querySelector("#selected-artist");
    h2.innerHTML = `${artist.name} (`;
    artist.urls.forEach((element) => {
      h2.innerHTML += `<a href="${element.url}">${element.name}${
        element.name === artist.urls[artist.urls.length - 1].name ? "</a>)" : ", </a>"
      }`;
      displaySongs(artist);
    });
    function displaySongs(artist) {
      const container = document.querySelector("#container");
      container.innerHTML = "";
      songs
        .filter((song) => song.artistId === artist.artistId && song.explicit === true)
        .forEach((song) => {
          const card = document.createElement("div");
          card.className = "card";
          const img = document.createElement("div");
          img.innerHTML = `<img src = "${song.UrlImage}" alt="${song.title}">`;
          card.appendChild(img);

          const title = document.createElement("div");
          title.className = "title";
          title.innerHTML = `<h2>${song.title}</h2>`;
          card.appendChild(title);

          const yearDuration = document.createElement("div");
          yearDuration.className = "year-duration";

          const year = document.createElement("div");
          year.innerHTML = `${song.year}`;
          yearDuration.appendChild(year);

          const duration = document.createElement("div");
          duration.className = "duration";
          duration.innerHTML = `${Math.floor(song.duration / 60)}:${(song.duration % 60)
            .toString()
            .padStart(2, "0")}`;
          yearDuration.appendChild(duration);
          card.appendChild(yearDuration);
          const name = document.createElement("h3");
          name.innerHTML = `<h3>${artist.name}</h3>`;
          card.appendChild(name);
          card.addEventListener("click", () => window.open(song.url, "_blank"));
          container.appendChild(card);
        });
    }
  });

  nav.appendChild(button);
});
