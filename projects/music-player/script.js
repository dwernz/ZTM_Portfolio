const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const music = document.querySelector('audio');
const title = document.getElementById('title');
const image = document.querySelector('img');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

// Music
const songs = [
    {
        name: 'blazing',
        displayName: 'The Blazing Speedster',
        artist: 'Alex'
    },
    {
        name: 'upbeat',
        displayName: 'Upbeat Rock',
        artist: 'Lennon'
    },
    {
        name: 'rock',
        displayName: 'Rock and Roll',
        artist: 'liujian'
    },
    {
        name: 'tech',
        displayName: 'Stunning Tech',
        artist: 'Alex'
    },
];

// Check if playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}


// Current Song
let songIndex = 0;

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    (isPlaying) ? music.play() : music.pause();
}

// Next Song
function nextSong() {
    songIndex++;

    if (songIndex >= songs.length) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    (isPlaying) ? music.play() : music.pause();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
    if (isPlaying) {
        const {duration, currentTime} = e.srcElement;
        
        // Update progress bar width
        const progressPercent = (currentTime / duration) * 100;

        progress.style.width = `${progressPercent}%`;

        // Calculate display for duration
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        let currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);

        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }

        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        }

        // Delay
        if (durationSeconds) {
             durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }
        if (currentSeconds) {
            currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
        }
    }

    
}

function setProgressBar(e) {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const {duration} = music;

    music.currentTime = (clickX / width) * duration;
}

// Event listeners
//Play or pause event listener
playBtn.addEventListener('click', () => {
    (isPlaying ? pauseSong() : playSong()); 
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
progressContainer.addEventListener('click', setProgressBar);
music.addEventListener('timeupdate', updateProgressBar);
music.addEventListener('ended', nextSong);

