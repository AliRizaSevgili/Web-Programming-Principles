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
 *      Date:       /03/29/2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.

const { artists, songs } = window;

let artistMenu = document.querySelector("#menu");
let songsTable = document.querySelector("#songs");
let artistInfo = document.querySelector("#selected-artist");

const defaultArtist = artists.find((artist) => artist.name === "Shakira");

function displaySongs(artistId) {
  const artistSongs = songs.filter((song) => song.artistId === artistId);

  songsTable.innerHTML = "";

  artistSongs.forEach((song) => {
    const row = songsTable.insertRow();
    const songNameCell = row.insertCell(0);
    const songUrl = document.createElement("a");
    songUrl.href = song.url;
    songUrl.target = "_blank";
    songUrl.textContent = song.title;
    songNameCell.appendChild(songUrl);
    row.insertCell(1).textContent = song.year;

    const minutes = Math.floor(song.duration / 60);
    const seconds = song.duration % 60;
    row.insertCell(2).textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  });
}

function updateSelectedArtist(artist) {
  artistInfo.innerHTML = `${artist.name} &nbsp;( `;
  artist.urls.forEach((url, urlIndex) => {
    artistInfo.innerHTML += `<a href="${url.url}" target="_blank">${url.name}</a>`;
    if (urlIndex < artist.urls.length - 1) {
      artistInfo.innerHTML += ", ";
    }
  });
  artistInfo.innerHTML += ` )`;
}

function selectArtist(artist) {
  updateSelectedArtist(artist);
  displaySongs(artist.artistId);
}

selectArtist(defaultArtist);

artists.forEach((artist, index) => {
  let artistElement = document.createElement("p");
  artistElement.innerHTML = artist.name;
  artistElement.style.cursor = "pointer";
  artistElement.style.fontWeight = "bold";
  artistElement.style.color = "#00a4fc";
  if (index < artists.length - 1) {
    artistElement.style.marginRight = "40px";
  }
  artistElement.addEventListener("click", function (e) {
    selectArtist(artist);
  });

  artistElement.addEventListener("mouseover", function (e) {
    artistElement.style.textDecoration = "underline";
  });

  artistElement.addEventListener("mouseout", function (e) {
    artistElement.style.textDecoration = "none";
  });

  artistMenu.appendChild(artistElement);
});

artistMenu.style.display = "flex";

console.log({ artists, songs }, "App Data");
