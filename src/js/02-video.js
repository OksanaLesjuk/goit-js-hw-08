import Player from '@vimeo/player'


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (evt) {
    const currentTime = evt.seconds;
    console.log(currentTime);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime))
});

// const savedCurrentTime = localStorage.getItem("videoplayer-current-time");
// console.log(savedCurrentTime);

//     player.setCurrentTime(30.456).then(function (seconds) {
//         // seconds = the actual time that the player seeked to
//     }).catch(function (error) {
//         switch (error.name) {
//             case 'RangeError':
//                 // the time was less than 0 or greater than the video’s duration
//                 break;

//             default:
//                 // some other error occurred
//                 break;
//         }
//     });


// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
// });






