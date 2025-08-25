const products = [
    { name: 'T-Shirt', category: 'clothing' },
    { name: 'Jeans', category: 'clothing' },
    { name: 'Headphones', category: 'electronics' },
    { name: 'Smartphone', category: 'electronics' },
    { name: 'Novel', category: 'books' },
    { name: 'Cookbook', category: 'books' }
];

const productListContainer = document.getElementById('product-list');
const categoryFilter = document.getElementById('category-filter');

function displayProducts() {
    productListContainer.innerHTML = '';
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.textContent = product.name;
        productItem.dataset.category = product.category;
        productListContainer.appendChild(productItem);
    });
}

function handleFilterChange() {
    const selectedCategory = categoryFilter.value;
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const itemCategory = item.dataset.category;
        
        if (selectedCategory === 'all' || itemCategory === selectedCategory) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

categoryFilter.addEventListener('change', handleFilterChange);

displayProducts();
