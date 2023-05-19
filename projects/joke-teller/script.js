const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
const caption = document.getElementById('caption');



// Disable/Enable Button
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellMe(joke, jokeText) {
    VoiceRSS.speech({
        key: '39ebc8c149b941da9ce25c0e4f26911a',
        src: joke,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });

    caption.textContent = jokeText;
}

// Get jokes from Joke API
async function getJokes() {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Any';
    let joke = '';
    let jokeText = '';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.type === 'twopart') {
            joke = ` ${data.setup} ... ${data.delivery}`;
            jokeText = `${data.setup}\n${data.delivery}`;
        }
        else if (data.type === 'single') {
            joke = `${data.joke}`;
            jokeText = `${data.joke}`;
        }

    } catch (err) {
        console.log('whoops', err);

        // Todo - Add an array of jokes
    } finally {
        // Text-to-speech
        tellMe(joke, jokeText);
        // disable button
        toggleButton();
    }
}

button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);