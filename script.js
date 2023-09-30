// Simulate fetching data from an API
function fetchData(page) {
    // Simulate an API request
    setTimeout(() => {
        const content = document.getElementById('content');
        if (page === 'main') {
            content.innerHTML = '<h1 class="text-3xl font-semibold">Main Page</h1>';
        } else if (page === 'product') {
            content.innerHTML = '<h1 class="text-3xl font-semibold">Product Page</h1>';
        }
    }, 500); // Simulated delay
}

document.addEventListener('DOMContentLoaded', () => {
    // Load the main page by default
    fetchData('main');

    // Handle navigation clicks
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.getAttribute('href').substring(1);
            fetchData(page);
        });
    });
});
