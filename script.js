// Cart Array
let cart = [];

// Add Product to Cart
function addCart(product) {
    cart.push(product);

    document.getElementById("cart-count").innerHTML = cart.length;

    displayCart();
}

// Display Cart
function displayCart() {

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {

        cartItems.innerHTML += `
            <li>
                ${cart[i]}
                <button onclick="removeCart(${i})">Remove</button>
            </li>
        `;
    }
}

// Remove Product
function removeCart(index) {

    cart.splice(index, 1);

    document.getElementById("cart-count").innerHTML = cart.length;

    displayCart();
}

// Open Cart
function openCart() {

    document.getElementById("cart").style.right = "0";

}

// Close Cart
function closeCart() {

    document.getElementById("cart").style.right = "-350px";

}

// Search Products
function searchProduct() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        let productName = cards[i]
            .getElementsByTagName("h3")[0]
            .innerHTML
            .toLowerCase();

        if (productName.indexOf(input) > -1) {

            cards[i].style.display = "block";

        } else {

            cards[i].style.display = "none";

        }
    }
}

// Filter Category
function filterProduct(category) {

    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {

        if (category === "All") {

            cards[i].style.display = "block";

        }

        else if (cards[i].classList.contains(category)) {

            cards[i].style.display = "block";

        }

        else {

            cards[i].style.display = "none";

        }

    }

}