document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.intro').style.display = 'none';
    }, 5000);
});

function addToCart(productName) {
    alert(`${productName} has been added to your cart.`);
}
