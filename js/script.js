// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play-video-button');
    const modal = document.getElementById('videoModal');
    const closeButton = document.querySelector('.close-modal');

    if (playButton && modal && closeButton) {
        playButton.addEventListener('click', function() {
            modal.style.display = 'block';
            // Add Vidyard embed code here
            const videoContainer = modal.querySelector('.video-container');
            videoContainer.innerHTML = '<iframe src="https://play.vidyard.com/YOUR_VIDEO_ID" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
        });

        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
            const videoContainer = modal.querySelector('.video-container');
            videoContainer.innerHTML = ''; // Remove the video when closing the modal
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                const videoContainer = modal.querySelector('.video-container');
                videoContainer.innerHTML = '';
            }
        });
    }
});