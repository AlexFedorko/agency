let cart = {};

const prices = {
    apple: 5,
    banana: 5,
};

function getPrice(item) {
    if (item in prices) {
        return prices[item];
    }
    return 0;
}
function addItem(item, price) {
    if (item in cart) {
        cart[item].quantity += 1;
        cart[item].totalPrice += price;
    } else {
        cart[item] = { quantity: 1, totalPrice: price };
    }
}

function removeItem(item) {
    if (item in cart) {
        const price = getPrice(item);
        cart[item].quantity -= 1;
        cart[item].totalPrice -= price;
        if (cart[item].quantity === 0) {
            delete cart[item];
        }
    }
}

    function calculateTotal() {
    let total = 0;
    for (let item in cart) {
        total += cart[item].totalPrice;
    }
    return total;
}