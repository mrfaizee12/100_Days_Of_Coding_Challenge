"use strict";
// Question 40: Album: Create objects for music albums.
function makeAlbum(artist, title) {
    let pictures = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + artist.slice(1)
    };
    return pictures;
}
let album = makeAlbum("Hamza", "city of lights");
console.log(album);
album = makeAlbum("Faisal", "Love");
console.log(album);
album = makeAlbum("Aslam", "lonely");
console.log(album);
