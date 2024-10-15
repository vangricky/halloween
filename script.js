const pumpkinimg = document.getElementById('pumpkinImg');
const message = document.getElementById('messageText');
const booSound = document.getElementById('boo-sound');
const candyBucket = document.getElementById('candyBucket');
const candyContainer = document.getElementById('candyContainer');

pumpkinimg.addEventListener('click', function() {
    // Show the BOO! message and play the sound
    setTimeout(function() {
        message.style.visibility = 'visible';
        booSound.play();
    }, 200);

    // Hide the BOO! message automatically after 3 seconds
    setTimeout(function() {
        message.style.visibility = 'hidden';
    }, 1000);  // 200ms delay + 3 seconds = 3200ms
});

const candyImages = [
    './images/candy1.png',
    './images/candy1.png',
    './images/candy1.png'
];

function createCandy() {
    const candy = document.createElement('div');
    candy.classList.add('candy');
    
    // Set a random image for the candy
    const randomCandyImage = candyImages[Math.floor(Math.random() * candyImages.length)];
    candy.style.backgroundImage = `url(${randomCandyImage})`;
    
    // Set random direction for candy to pop out
    const randomX = Math.random() * 2 - 1;  // Random value between -1 and 1
    const randomY = Math.random() * 2 - 1;  // Random value between -1 and 1
    candy.style.setProperty('--x-direction', randomX);
    candy.style.setProperty('--y-direction', randomY);
    
    // Start the candy in the middle (relative to the bucket)
    candy.style.left = '48%';
    candy.style.top = '59%';
    
    candyContainer.appendChild(candy);
    
    // Remove the candy after the animation is done (1 second)
    setTimeout(() => {
        candy.remove();
    }, 5000);
}

// Function to pop a lot of candies
function popCandies() {
    for (let i = 0; i < 30; i++) { // Adjust the number of candies
        setTimeout(createCandy, i * 50); // Stagger the candies popping out
    }
}

// Add event listener for when the candy bucket is clicked
candyBucket.addEventListener('click', popCandies);