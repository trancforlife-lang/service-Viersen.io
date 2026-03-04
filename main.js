/**
 * IT Repair Shop - Enhanced JavaScript
 * Professional website functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initSmoothScrolling();
    initMobileMenu();
    initEmergencyBanner();
    initBackToTop();
    initChatWidget();
    initFormValidation();
    initScrollAnimations();
    initCounterAnimation();
});

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.getElementById('hamburger');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
                
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Mobile menu functionality
 */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle aria-expanded for accessibility
        const isExpanded = this.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

/**
 * Emergency banner close functionality
 */
function initEmergencyBanner() {
    const banner = document.querySelector('.emergency-banner');
    const closeBtn = document.querySelector('.banner-close');
    
    if (!banner || !closeBtn) return;
    
    // Check if banner was already closed
    if (localStorage.getItem('bannerClosed')) {
        banner.style.display = 'none';
        return;
    }
    
    closeBtn.addEventListener('click', function() {
        banner.style.display = 'none';
        localStorage.setItem('bannerClosed', 'true');
    });
}

/**
 * Back to top button
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Chat widget functionality
 */
function initChatWidget() {
    const chatToggle = document.getElementById('chatToggle');
    const chatBox = document.getElementById('chatBox');
    const chatClose = document.getElementById('chatClose');
    const chatBadge = document.querySelector('.chat-badge');
    
    if (!chatToggle || !chatBox) return;
    
    chatToggle.addEventListener('click', function() {
        chatBox.classList.toggle('active');
        if (chatBadge) {
            chatBadge.style.display = 'none';
        }
    });
    
    if (chatClose) {
        chatClose.addEventListener('click', function() {
            chatBox.classList.remove('active');
        });
    }
}

/**
 * Contact form validation
 */
function initFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate required fields
        let isValid = true;
        const requiredFields = ['name', 'email', 'service', 'message', 'privacy'];
        
        requiredFields.forEach(field => {
            const input = form.querySelector(`[name="${field}"]`);
            if (!input) return;
            
            if (field === 'privacy') {
                if (!input.checked) {
                    isValid = false;
                    input.parentElement.style.color = 'var(--danger)';
                } else {
                    input.parentElement.style.color = '';
                }
            } else if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--danger)';
            } else {
                input.style.borderColor = '';
            }
        });
        
        // Email validation
        const emailInput = form.querySelector('[name="email"]');
        if (emailInput && emailInput.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                isValid = false;
                emailInput.style.borderColor = 'var(--danger)';
            }
        }
        
        if (isValid) {
            // Show success message
            showNotification('Vielen Dank! Ihre Nachricht wurde gesendet.', 'success');
            form.reset();
        } else {
            showNotification('Bitte füllen Sie alle Pflichtfelder korrekt aus.', 'error');
        }
    });
    
    // Remove error styling on input
    form.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '';
        });
    });
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

/**
 * Scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on index
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.service-card, .pricing-card, .testimonial-card, .faq-item');
    animatedElements.forEach(el => observer.observe(el));
}

/**
 * Counter animation for statistics
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    if (!counters.length) return;
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

/**
 * Animate counter from 0 to target value
 */
function animateCounter(element, target) {
    const duration = 2000; // 2 seconds
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * easeOut);
        
        element.textContent = current.toLocaleString('de-DE');
        element.classList.add('counted');
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString('de-DE');
            // Add + suffix for large numbers
            if (target >= 1000) {
                element.textContent = target.toLocaleString('de-DE') + '+';
            }
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Expose showNotification globally for external use
window.showNotification = showNotification;
