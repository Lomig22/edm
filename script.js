/**
 * ÉTOILE DU MATIN RECYCLE - JAVASCRIPT
 * Interactions et animations
 */

// ============================================
// Utility Functions
// ============================================

/**
 * Throttle function to limit execution rate
 */
function throttle(func, wait) {
    let timeout;
    let lastRan;
    
    return function executedFunction(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                if ((Date.now() - lastRan) >= wait) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, wait - (Date.now() - lastRan));
        }
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element, offset = 100) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
        rect.bottom >= 0
    );
}

// ============================================
// Navigation
// ============================================

/**
 * Sticky Navigation
 */
function initStickyNav() {
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', throttle(function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            nav.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
        
        lastScrollY = currentScrollY;
    }, 100));
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Create mobile menu if it doesn't exist
            if (!document.querySelector('.mobile-menu')) {
                const mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                mobileMenu.innerHTML = navLinks.innerHTML;
                document.querySelector('.nav').appendChild(mobileMenu);
                
                // Add styles dynamically
                const style = document.createElement('style');
                style.textContent = `
                    .mobile-menu {
                        display: none;
                        position: fixed;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background: white;
                        padding: 2rem;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                        z-index: 999;
                    }
                    .mobile-menu.active {
                        display: block;
                        animation: slideDown 0.3s ease;
                    }
                    @keyframes slideDown {
                        from {
                            opacity: 0;
                            transform: translateY(-10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    .mobile-menu .nav-link {
                        display: block;
                        padding: 1rem 0;
                        text-align: center;
                        border-bottom: 1px solid #E8E8E8;
                    }
                    .mobile-menu .nav-link:last-child {
                        border-bottom: none;
                    }
                    .mobile-menu-toggle.active span:nth-child(1) {
                        transform: rotate(45deg) translate(5px, 5px);
                    }
                    .mobile-menu-toggle.active span:nth-child(2) {
                        opacity: 0;
                    }
                    .mobile-menu-toggle.active span:nth-child(3) {
                        transform: rotate(-45deg) translate(7px, -6px);
                    }
                `;
                document.head.appendChild(style);
            }
            
            const mobileMenu = document.querySelector('.mobile-menu');
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.addEventListener('click', function(e) {
            if (e.target.matches('.mobile-menu .nav-link')) {
                const mobileMenu = document.querySelector('.mobile-menu');
                const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
                if (mobileMenu) mobileMenu.classList.remove('active');
                if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            }
        });
    }
}

/**
 * Smooth Scroll for Navigation Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty href
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Scroll Animations
// ============================================

/**
 * Initialize scroll animations for elements
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    
    function checkElements() {
        elements.forEach(element => {
            if (isInViewport(element, 100)) {
                element.classList.add('visible');
            }
        });
    }
    
    // Check on load
    checkElements();
    
    // Check on scroll
    window.addEventListener('scroll', throttle(checkElements, 100));
}

/**
 * Parallax effect for hero section
 */
function initParallax() {
    const hero = document.querySelector('.hero');
    
    if (!hero) return;
    
    window.addEventListener('scroll', throttle(function() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    }, 50));
}

// ============================================
// Product Cards Interaction
// ============================================

/**
 * Add hover effects to product cards
 */
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ============================================
// Instagram Section
// ============================================

/**
 * Add animation to Instagram items
 */
function initInstagramGrid() {
    const instagramItems = document.querySelectorAll('.instagram-item');
    
    instagramItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
}

// ============================================
// Performance Optimization
// ============================================

/**
 * Lazy load images
 */
function initLazyLoad() {
    const lazyImages = document.querySelectorAll('.lazy-load');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => img.classList.add('loaded'));
    }
}

/**
 * Preload critical resources
 */
function preloadResources() {
    // Preload hero images if needed
    // This can be expanded based on actual image assets
}

// ============================================
// Analytics & Tracking
// ============================================

/**
 * Track button clicks
 */
function initAnalytics() {
    const trackableButtons = document.querySelectorAll('.btn');
    
    trackableButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            const buttonHref = this.getAttribute('href');
            
            // Log to console (replace with actual analytics)
            console.log('Button clicked:', {
                text: buttonText,
                href: buttonHref,
                timestamp: new Date().toISOString()
            });
            
            // Here you would send to Google Analytics, Meta Pixel, etc.
            // Example: gtag('event', 'button_click', { button_name: buttonText });
        });
    });
}

/**
 * Track scroll depth
 */
function initScrollTracking() {
    let scrollDepths = [25, 50, 75, 100];
    let trackedDepths = [];
    
    window.addEventListener('scroll', throttle(function() {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
        
        scrollDepths.forEach(depth => {
            if (scrollPercent >= depth && !trackedDepths.includes(depth)) {
                trackedDepths.push(depth);
                console.log(`Scroll depth reached: ${depth}%`);
                // Send to analytics
                // gtag('event', 'scroll_depth', { depth: depth });
            }
        });
    }, 500));
}

// ============================================
// Instagram Link Handling
// ============================================

/**
 * Handle Instagram links and add UTM parameters
 */
function initInstagramLinks() {
    const instagramLinks = document.querySelectorAll('a[href*="instagram.com"]');
    
    instagramLinks.forEach(link => {
        const originalHref = link.getAttribute('href');
        const separator = originalHref.includes('?') ? '&' : '?';
        const utmParams = 'utm_source=website&utm_medium=button&utm_campaign=edm_recycle';
        
        // Don't override if UTM already exists
        if (!originalHref.includes('utm_')) {
            // Note: Instagram doesn't use UTM in the same way, but this is for tracking on your side
            link.addEventListener('click', function() {
                console.log('Instagram link clicked from:', window.location.href);
            });
        }
    });
}

// ============================================
// Accessibility
// ============================================

/**
 * Enhance accessibility
 */
function initAccessibility() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#concept';
    skipLink.className = 'sr-only';
    skipLink.textContent = 'Aller au contenu principal';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--color-primary);
        color: white;
        padding: 8px;
        z-index: 100;
    `;
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('.product-card, .instagram-item, .benefit-item');
    interactiveElements.forEach(element => {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
    });
}

// ============================================
// Form Validation (if contact form is added)
// ============================================

/**
 * Validate and handle form submissions
 */
function initFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation and submission logic here
            console.log('Form submitted');
        });
    });
}

// ============================================
// Easter Eggs & Engagement
// ============================================

/**
 * Add subtle engagement features
 */
function initEasterEggs() {
    // Confetti effect on logo click
    const logo = document.querySelector('.logo');
    let clickCount = 0;
    
    if (logo) {
        logo.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 5) {
                console.log('🎉 Merci de votre intérêt pour Étoile du Matin Recycle!');
                clickCount = 0;
            }
        });
    }
}

// ============================================
// Initialize All Features
// ============================================

/**
 * Main initialization function
 */
function init() {
    console.log('🌟 Étoile du Matin Recycle - Site initialized');
    
    // Core features
    initStickyNav();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    
    // Visual enhancements
    initParallax();
    initProductCards();
    initInstagramGrid();
    initLazyLoad();
    
    // Performance
    preloadResources();
    
    // Analytics
    initAnalytics();
    initScrollTracking();
    initInstagramLinks();
    
    // Accessibility
    initAccessibility();
    
    // Forms
    initFormHandling();
    
    // Fun features
    initEasterEggs();
    
    console.log('✅ All features initialized successfully');
}

// ============================================
// Run on DOM Ready
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// Export for module usage (optional)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        init,
        initSmoothScroll,
        initScrollAnimations,
        isInViewport,
        throttle
    };
}
