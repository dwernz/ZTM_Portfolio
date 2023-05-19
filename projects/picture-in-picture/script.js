const button = document.getElementById('button');
const videoElement = document.getElementById('video');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log(error);
    }
}

// Event Listeners
button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;

    // start picture in picture
    await videoElement.requestPictureInPicture();

    // Reset Button
    button.disabled = false;
});

// On Load
selectMediaStream();