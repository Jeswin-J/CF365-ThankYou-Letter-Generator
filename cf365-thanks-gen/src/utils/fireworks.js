import { Fireworks } from 'fireworks-js';

export const initFireworks = () => {
    const container = document.getElementById('fireworks-container');

    if (!container) {
        console.error('Container element not found!');
        return null;
    }

    // Remove any existing canvas elements in the container to avoid duplicates
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Manually create a canvas element and set its size to match the container
    const canvas = document.createElement('canvas');
    const resizeCanvas = () => {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
    };
    resizeCanvas();
    container.appendChild(canvas);

    // Initialize Fireworks with the manually created canvas
    const fireworks = new Fireworks(canvas, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        hue: {
          min: 0,
          max: 360
        },
        delay: {
          min: 30,
          max: 60
        },
        rocketsPoint: {
          min: 50,
          max: 50
        },
        lineWidth: {
          explosion: {
            min: 1,
            max: 3
          },
          trace: {
            min: 1,
            max: 2
          }
        },
        brightness: {
          min: 50,
          max: 80
        },
        decay: {
          min: 0.015,
          max: 0.03
        },
        mouse: {
          click: false,
          move: false,
          max: 1
        }
    });

    fireworks.start();

    // Add a resize event listener
    window.addEventListener('resize', resizeCanvas);

    return fireworks;
};
