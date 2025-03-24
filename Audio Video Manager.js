// Audio/Video Manager - DevTools Console Snippets

// 1. **Get Media Elements:**
const videoElement = document.querySelector('video');
const audioElement = document.querySelector('audio');

// 2. **Check Media Source:**
if (videoElement) {
  console.log('Video Source:', videoElement.src);
}
if (audioElement) {
  console.log('Audio Source:', audioElement.src);
}

// 3. **Play/Pause Media:**
if (videoElement) {
  videoElement.play(); // or videoElement.pause();
}
if (audioElement) {
  audioElement.play(); // or audioElement.pause();
}

// 4. **Adjust Volume:**
if (videoElement) {
  videoElement.volume = 0.5; // Set volume to 50%
  console.log('Video Volume:', videoElement.volume);
}
if (audioElement) {
  audioElement.volume = 0.75; // Set volume to 75%
  console.log('Audio Volume:', audioElement.volume);
}

// 5. **Change Playback Rate:**
if (videoElement) {
  videoElement.playbackRate = 1.5; // Play at 1.5x speed
  console.log('Video Playback Rate:', videoElement.playbackRate);
}
if (audioElement) {
  audioElement.playbackRate = 0.8; // Play at 0.8x speed
  console.log('Audio Playback Rate:', audioElement.playbackRate);
}

// 6. **Seek to a Specific Time (seconds):**
if (videoElement) {
  videoElement.currentTime = 60; // Jump to 1 minute
  console.log('Video Current Time:', videoElement.currentTime);
}
if (audioElement) {
  audioElement.currentTime = 30; // Jump to 30 seconds
  console.log('Audio Current Time:', audioElement.currentTime);
}

// 7. **Check Duration (seconds):**
if (videoElement) {
    if(videoElement.duration){
        console.log('Video Duration:', videoElement.duration);
    } else {
        console.log("Video Duration: Not Available yet");
    }

}
if (audioElement) {
    if(audioElement.duration){
        console.log('Audio Duration:', audioElement.duration);
    } else {
        console.log("Audio Duration: Not Available yet");
    }
}

// 8. **Check if Media is Playing:**
if (videoElement) {
  console.log('Video Playing:', !videoElement.paused);
}
if (audioElement) {
  console.log('Audio Playing:', !audioElement.paused);
}

// 9. **Add Event Listener (e.g., 'timeupdate'):**
if (videoElement) {
  videoElement.addEventListener('timeupdate', () => {
    console.log('Video Time Updated:', videoElement.currentTime);
  });
}
if (audioElement) {
  audioElement.addEventListener('timeupdate', () => {
    console.log('Audio Time Updated:', audioElement.currentTime);
  });
}

// 10. **Loop Media:**
if (videoElement) {
  videoElement.loop = true; // or false
  console.log('Video Loop:', videoElement.loop);
}
if (audioElement) {
  audioElement.loop = true; // or false
  console.log('Audio Loop:', audioElement.loop);
}

// 11. **Check Media Ready State:**
if (videoElement) {
  console.log('Video Ready State:', videoElement.readyState);
  // 0: HAVE_NOTHING, 1: HAVE_METADATA, 2: HAVE_CURRENT_DATA, 3: HAVE_FUTURE_DATA, 4: HAVE_ENOUGH_DATA
}
if (audioElement) {
  console.log('Audio Ready State:', audioElement.readyState);
}

// 12. **Get all media elements on the page**
const allMedia = document.querySelectorAll('video, audio');
console.log(allMedia);

//13. **Mute/Unmute**
if(videoElement){
    videoElement.muted = true; // or false
    console.log("Video Muted:", videoElement.muted)
}

if(audioElement){
    audioElement.muted = true; // or false
    console.log("Audio Muted:", audioElement.muted)
}

//14. **Check if media is ended**
if(videoElement){
    console.log("Video Ended:", videoElement.ended);
}
if(audioElement){
    console.log("Audio Ended:", audioElement.ended);
}