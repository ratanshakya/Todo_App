// Select the floating cubes container
const floatingCubesContainer = document.getElementById('floating-cubes');

// Random color generator
function randomColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#FF33FF', '#33FFFF'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Random number generator
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Create floating cubes
function createFloatingCubes() {
    const totalCubes = 50; // Number of cubes

    for (let i = 0; i < totalCubes; i++) {
        const cube = document.createElement('div');
        cube.classList.add('cube');
        cube.style.backgroundColor = randomColor();

        // Randomize position and animation duration
        cube.style.top = `${randomRange(0, 100)}vh`;
        cube.style.left = `${randomRange(0, 100)}vw`;
        cube.style.animationDuration = `${randomRange(3, 10)}s`;
        cube.style.animationDelay = `${randomRange(0, 5)}s`;

        floatingCubesContainer.appendChild(cube);
    }
}

// Initialize cubes
createFloatingCubes();
