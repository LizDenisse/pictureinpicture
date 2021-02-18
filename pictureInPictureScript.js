const videoElement = document.getElementById('video');
const button= document.getElementById('button'); 

// prompt to select media stream, pass  to video  element, then play 

async function selectMediaStream() {

    try {
const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject= mediaStream;
    videoElement.onloadedmetadata = () => {
        videoElement.play();
        // videoElement.pause();
    }
    }
    catch (error) {
        // catch error here 
            console.log('whoops, error here', error)
    }
}

button.addEventListener('click', async() => {
// disable the button 

button.disabled =true; 
// start picture in picture 
await videoElement.requestPictureInPicture(); 
// reset button 

button.disabled= false; 
});

navigator.mediaSession.setActionHandler('previoustrack', () => {
    // Go to previous track
  });
  
  navigator.mediaSession.setActionHandler('nexttrack', () => {
    // Go to next track
  });
selectMediaStream();


//  TODO:
// puuse in picture and picture 