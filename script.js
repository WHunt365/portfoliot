function handleEmailClick() {
  // You can replace this with actual email functionality
  const email = 'janine.oyod@example.com';
  
  // Option 1: Open default email client
  window.location.href = `mailto:${email}`;
  
  // Option 2: Copy email to clipboard (alternative)
  // navigator.clipboard.writeText(email).then(() => {
  //   alert('Email address copied to clipboard!');
  // });
}

// Add smooth scroll behavior for better UX
document.addEventListener('DOMContentLoaded', function() {
  // Add click handlers for social links
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the platform from aria-label
      const platform = this.getAttribute('aria-label');
      
      // You can replace these with actual social media URLs
      const socialUrls = {
        'Instagram': 'https://instagram.com/janineoyod',
        'Twitter': 'https://twitter.com/janineoyod',
        'Facebook': 'https://facebook.com/janineoyod',
        'LinkedIn': 'https://linkedin.com/in/janineoyod'
      };
      
      if (socialUrls[platform]) {
        window.open(socialUrls[platform], '_blank');
      }
    });
  });
  
  // Add hover effects for better interactivity
  const emailBtn = document.querySelector('.email-btn');
  
  emailBtn.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 4px 12px rgba(139, 115, 85, 0.3)';
  });
  
  emailBtn.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'none';
  });
});

// Add scroll animations (optional enhancement)
function addScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });
  
  const elements = document.querySelectorAll('.profile-section, .about-section');
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', addScrollAnimations);
