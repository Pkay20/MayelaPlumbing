// Form validation
document.addEventListener('DOMContentLoaded', function () {
    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });

            if (isValid) {
                // Show success message
                alert('Thank you for your inquiry! We will contact you shortly.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Remove invalid class when typing
    document.querySelectorAll('input, textarea, select').forEach(field => {
        field.addEventListener('input', function () {
            this.classList.remove('is-invalid');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }

                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Enhanced form with AI suggestions
function enhanceFormWithAI() {
    const descriptionField = document.querySelector('textarea');
    if (descriptionField) {
        descriptionField.addEventListener('input', async (e) => {
            if (e.target.value.length > 50) {
                // Simulate AI suggestions
                const suggestions = [
                    "Consider adding pipe diameter requirements",
                    "Include electrical load specifications",
                    "Mention any existing system issues",
                    "Specify preferred materials",
                    "Include project timeline expectations"
                ];

                // Show AI suggestion tooltip
                const suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
                showAITooltip(descriptionField, suggestion);
            }
        });
    }
}

function showAITooltip(element, text) {
    let tooltip = element.parentNode.querySelector('.ai-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'ai-tooltip alert alert-info mt-2';
        element.parentNode.appendChild(tooltip);
    }
    tooltip.innerHTML = `<i class="fas fa-robot me-2"></i> AI Suggestion: ${text}`;

    setTimeout(() => {
        tooltip.remove();
    }, 5000);
}

// Blockchain verification simulation
async function verifyBlockchain() {
    const verificationBadges = document.querySelectorAll('.blockchain-badge');
    verificationBadges.forEach(badge => {
        badge.addEventListener('click', async () => {
            badge.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';

            // Simulate blockchain verification
            await new Promise(resolve => setTimeout(resolve, 2000));

            badge.innerHTML = `
                <i class="fas fa-check-circle"></i> 
                <span>Verified on Blockchain</span>
                <small class="d-block">Tx: 0x${Math.random().toString(16).substr(2, 8)}</small>
            `;
            badge.style.background = 'linear-gradient(135deg, #4CAF50, #2E7D32)';
        });
    });
}