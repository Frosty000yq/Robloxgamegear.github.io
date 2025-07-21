document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product'); // Selector for product cards

    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase(); // Get product title
        if (title.includes(query)) {
            product.style.display = 'block'; // Show matching product
        } else {
            product.style.display = 'none'; // Hide non-matching product
        }
    });
});