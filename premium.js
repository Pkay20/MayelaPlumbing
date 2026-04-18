// Ultra-Premium Interactive Features

// Particle System
function createParticles() {
    const container = document.createElement('div');
    container.className = 'particle-container';
    document.querySelector('.premium-hero').appendChild(container);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.opacity = Math.random() * 0.5 + 0.2;

        container.appendChild(particle);
    }
}

// Neural Network Visualization
function createNeuralNetwork() {
    const container = document.querySelector('.neural-network');
    if (!container) return;

    // Create nodes
    const layers = [3, 4, 4, 3];
    const nodePositions = [];

    layers.forEach((nodeCount, layerIndex) => {
        for (let i = 0; i < nodeCount; i++) {
            const node = document.createElement('div');
            node.className = 'node';

            const x = (layerIndex + 1) * (100 / (layers.length + 1));
            const y = (i + 1) * (100 / (nodeCount + 1));

            node.style.left = `${x}%`;
            node.style.top = `${y}%`;
            node.style.animationDelay = `${Math.random() * 2}s`;

            container.appendChild(node);
            nodePositions.push({ x, y, layer: layerIndex });
        }
    });

    // Create connections
    setTimeout(() => {
        nodePositions.forEach((startNode, i) => {
            nodePositions.forEach((endNode, j) => {
                if (startNode.layer < endNode.layer) {
                    const connection = document.createElement('div');
                    connection.className = 'connection';

                    const dx = endNode.x - startNode.x;
                    const dy = endNode.y - startNode.y;
                    const length = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

                    connection.style.width = `${length}%`;
                    connection.style.left = `${startNode.x}%`;
                    connection.style.top = `${startNode.y}%`;
                    connection.style.transform = `rotate(${angle}deg)`;
                    connection.style.opacity = Math.random() * 0.3 + 0.1;

                    container.appendChild(connection);
                }
            });
        });
    }, 1000);
}
// 3D Parallax Effect
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-layer');

        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Real-time Dashboard Updates
function updateDashboard() {
    setInterval(() => {
        const metrics = document.querySelectorAll('.dashboard-metric');
        metrics.forEach(metric => {
            const currentValue = parseInt(metric.textContent);
            if (!isNaN(currentValue)) {
                const newValue = currentValue + Math.floor(Math.random() * 3 - 1);
                metric.textContent = Math.max(99, newValue);
            }
        });
    }, 5000);
}

// Quantum Animation
function initQuantumAnimation() {
    const quantumElements = document.querySelectorAll('.quantum-state, .node');
    quantumElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.1)';
            element.style.transition = 'transform 0.3s';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createNeuralNetwork();
    initVoiceRecognition();
    initParallax();
    updateDashboard();
    initQuantumAnimation();

    // Chat input enter key support
    document.getElementById('chatInput')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});