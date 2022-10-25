import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function stopTime({ seconds }) {
    const time = Number.parseInt(seconds);
    localStorage.setItem("videoplayer-current-time", time);
};

player.on('timeupdate', throttle(stopTime, 1000));

const savedData = localStorage.getItem("videoplayer-current-time");

if (savedData) {
    player.setCurrentTime(savedData);
};