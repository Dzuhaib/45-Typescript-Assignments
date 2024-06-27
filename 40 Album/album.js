"use strict";
let make_album = (artistName, albumTile, track = 0) => {
    const album = {
        artist: artistName,
        title: albumTile,
        trackNumber: track,
    };
    return album;
};
const album1 = make_album("Roopa Panesar", "Stornoway", 4);
console.log(album1);
const album2 = make_album("Ravi Shankar", "Ragas");
console.log(album2);
const album3 = make_album("Anushka Shankar", "Forever", 9);
console.log(album3);
