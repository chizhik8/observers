const card = document.querySelectorAll('.io-card');

const options = {
    root: null,
    // rootMargin: '-200px', // Trigger before the element enters the viewport
    threshold: 1, // 0 to 1, 1 means when 100% of the element is visible
};

const handleIntersect = (entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('shown', entry.isIntersecting);
        // if (entry.isIntersecting) {
        //     observer.unobserve(entry.target);
        // } // Optional: Stop observing after it has come into view (lazy load)
    });
};

const observer = new IntersectionObserver(handleIntersect, options);

card.forEach((card) => {
    observer.observe(card);
});

