import Player from '@vimeo/player'


const iframe = document.querySelector(".vimeo-player");
const player = new Player(iframe);


player.on('timeupdate', onTimeupdate);

function onTimeupdate(evt) {
    const currentTime = evt.seconds;
    console.log(currentTime);
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime))
}


const savedCurrentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));
console.log(typeof savedCurrentTime);

if (savedCurrentTime) {
    player.setCurrentTime(parseFloat(savedCurrentTime)).then(function (seconds) {
        player.play();
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':

                break;

            default:
                player.play()
                break;
        }
    });
}




// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
// });






