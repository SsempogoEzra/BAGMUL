document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.createElement('div');
    mobileToggle.className = 'mobile-toggle';
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    // Only add mobile toggle for smaller screens
    const addMobileMenuIfNeeded = () => {
        if (window.innerWidth <= 767) {
            if (!document.querySelector('.mobile-toggle')) {
                header.insertBefore(mobileToggle, nav);
            }
        } else {
            const toggle = document.querySelector('.mobile-toggle');
            if (toggle) {
                toggle.remove();
            }
            nav.classList.remove('active');
        }
    };
    
    // Run on page load
    addMobileMenuIfNeeded();
    
    // Run when window is resized
    window.addEventListener('resize', addMobileMenuIfNeeded);
    
    // Toggle menu when clicking the mobile toggle
    document.addEventListener('click', function(e) {
        if (e.target.closest('.mobile-toggle')) {
            nav.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = mobileToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && 
            !e.target.closest('nav') && 
            !e.target.closest('.mobile-toggle')) {
            nav.classList.remove('active');
            
            // Reset icon
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});