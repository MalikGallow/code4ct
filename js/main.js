// counter jquery

$('.number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 9000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backTop").style.display = "block";
  } else {
    document.getElementById("backTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// cart
'use strict';

let items = document.getElementsByClassName('item');

function myFunction() {
    document.getElementById("item").alert("iteam added to cart");
  };

let cart = [
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
    // { name: name, price: price,},
];

function addCart(name, price) {

    //create item
    let item = {
        name: name,
        price: price,
    };

    //check if array empty
    if (cart.length != 0) {
        //search an item in an array
        let check = false;
        for (let cartItem in cart) {
            if (cart[cartItem].name === item.name) {
                check = true;
            }
        }

        //if check returns false,  item was not found in the array.
        if (!check) { cart.push(item) }

        //else push to array
    } else {
        cart.push(item);
    }

    //get cart div
    let div = document.getElementById('cart');
    //clear cart
    div.innerHTML = "";

    //show cart with updated array
    for (let value in cart) {

        // Create a <li> node
        let node = document.createElement("LI");
        // Create a text node               
        let textnode = document.createTextNode(cart[value].name);

        // Append the text to <li>
        node.appendChild(textnode);

        // Append <li> to <ul> with id="myList"                             
        div.appendChild(node);
    }
}
