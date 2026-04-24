// Get elements from the DOM
const myButton = document.getElementById('myButton');
const message = document.getElementById('message');
const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');

// Initialize counter
let count = 0;

// Button click event
myButton.addEventListener('click', () => {
    message.classList.toggle('show');
    myButton.textContent = message.classList.contains('show') ? 'Hide Message' : 'Click Me';
});

// Counter functionality
increaseBtn.addEventListener('click', () => {
    count++;
    updateCount();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateCount();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCount();
});

// Update counter display
function updateCount() {
    countDisplay.textContent = count;
    // Add a brief animation effect
    countDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        countDisplay.style.transform = 'scale(1)';
    }, 100);
}

// Log initialization
console.log('Mini Project loaded successfully!');
