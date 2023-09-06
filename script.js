const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
         nav.classList.remove('active');
    })
}

function addToCart(productName, price) {
    // Create the URL with the product details as parameters
    var url = "cart.html?product=" + encodeURIComponent(productName) + "&price=" + encodeURIComponent(price);
    
    // Redirect to the cart page with the URL
    window.location.href = url;
  }
  
  // Get the product details from the URL parameters
  var params = new URLSearchParams(window.location.search);
  var productName = params.get("product");
  var price = params.get("price");

  // Add the product to the cart
  addToCart(productName, price);

  // Function to add a product to the cart
  function addToCart(productName, price) {
    // Create an object to store the product details
    var product = { name: productName, price: price };
    
    // Add the product to the cart
    cartItems.push(product);
    
    // Display a message to confirm that the item has been added to the cart
    alert("Item added to cart!");
  }

  // Function to display the products in the cart on the cart page
  function displayCart() {
    // Get the element where the products will be displayed
    var cartElement = document.getElementById("cart");
    
    // Clear the previous contents of the cart
    cartElement.innerHTML = "";
    
    // Loop through the products in the cart and display them
    for (var i = 0; i < cartItems.length; i++) {
      var product = cartItems[i];
      var productName = product.name;
      var productPrice = product.price;
      
      // Create a new element to display the product
      var productElement = document.createElement("div");
      productElement.innerHTML = productName + " - $" + productPrice;
      
      // Add the product element to the cart element
      cartElement.appendChild(productElement);
    }
  }

  // Call the displayCart() function to display the products in the cart
  displayCart();