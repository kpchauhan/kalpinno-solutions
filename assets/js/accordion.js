// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const content = accordion.querySelector('.accordion-content');
        
        // Add click event listener to each accordion header
        header.addEventListener('click', function() {
            const isActive = accordion.classList.contains('active');
            
            // Close all other accordions
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== accordion) {
                    otherAccordion.classList.remove('active');
                }
            });
            
            // Toggle current accordion
            if (isActive) {
                accordion.classList.remove('active');
            } else {
                accordion.classList.add('active');
            }
        });
    });
});
