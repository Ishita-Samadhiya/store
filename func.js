//get all needed elements from document 
var sub = document.getElementById("sub");
var page = document.getElementById("page");
var barcode = document.getElementById("code");
var quan = document.getElementById("quan");
//copy over objects
var products = {
    "689145740844": {
        name: "JavaScript Textbook",
        price: 34.95
    },
    "4549292070248": {
        name: "Xerox Paper",
        price: 10.99
    },
    "092265222983": {
        name: "First Aid Kit",
        price: 20.99
    },
    "X002ELVL3J": {
        name: "Box of Pencils (50ct.)",
        price: 15.99
    },
    "686024002468": {
        name: "Sanitizing Wipes",
        price: 10.99
    },
    "860004186236": {
        name: "N95 Face Masks",
        price: 15.99
    },
    "036000214000": {
        name: "Kleenex",
        price: 3.99
    },
    "8809693254156": {
        name: "Hand Sanitizer",
        price: 7.99
    },
    "036500060480": {
        name: "Printer Paper",
        price: 9.99
    },
    "085014561877": {
        name: "Brush Pens",
        price: 10.99
    },
    "X0032YGP2T": {
        name: "Multiport Adapter",
        price: 25.99
    },
    "B07G6JT1XS": {
        name: "Scissors (20ct.)",
        price: 23.99
    },
    "9780134682334": {
        name: "iOS Programming Textbook",
        price: 119.99
    },
    "718103230759": {
        name: "Spiral Notebook",
        price: 1.99
    }
};

function getProduct(code) {
    let product = products[code];
    if (product) {
        return product;
    } else {
        return { name: "Product not found", price: 0.0 };
    }
}

//initialize add and total to create display details the first time and keep track of total
var add = 0;
var total = 0;

function addItem(){
    if(add === 0){//initial display(all titles)
        var hr = document.createElement("hr");
        page.appendChild(hr);
        head = document.createElement("h3");
        head.innerText = "Cart";
        page.appendChild(head); // added line + cart title
        //add headings
        cart = document.createElement("div");
        item = document.createElement("h4");
        price = document.createElement("h4");
        quantity = document.createElement("h4");
        item.innerText = "Item";
        price.innerText = "Price";
        quantity.innerText = "Quantity";
        cart.appendChild(item);
        cart.appendChild(price);
        cart.appendChild(quantity);
        cart.classList.add("cart");
        page.appendChild(cart);
    }
    
    add++;
}
sub.addEventListener("click", addItem);
