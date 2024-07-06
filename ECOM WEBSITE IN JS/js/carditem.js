let items = [
  {
      id: 1,
      title: "Optical Mouse",
      description: "Keep your workspace clean and clutter-free with reliable, plug & play wireless connectivity.",
      price: "₹645",
      images: "img/grid/mouse.jpg",
      button: `<button class="button-55" role="button" onclick="addtocart(1)">Add to cart</button>`
  },
  { 
      id: 2,
      title: "iQOO Z9 5G",
      description: "Dimensity 7200 5G Processor | Sony IMX882 OIS Camera | 120Hz AMOLED with 1800 nits Local Peak Brightness | 44W Charger in The Box",
      price: "₹21,998",
      images: "img/grid/phone.jpg",
      button: `<button class="button-55" role="button" onclick="addtocart(2)">Add to cart</button>`
  },
  {
      id: 3,
      title: "LG 7 KG",
      description: "Inverter Touch panel Fully-Automatic Front Load Washing Machine with In-Built Heater (FHM1207SDM, Middle Black, Steam for Hygiene Wash)",
      price: "₹43,990",
      images: "img/grid/ws.jpg",
      button: `<button class="button-55" role="button" onclick="addtocart(3)">Add to cart</button>`
  },
  {
      id: 4,
      title: "BoAt Rockerz 450",
      description: "Playback- It provides a massive battery backup of upto 15 hours for a superior playback time.",
      price: "₹21,998",
      images: "img/grid/boat.jpg",
      button: `<button class="button-55" role="button" onclick="addtocart(4)">Add to cart</button>`
  }
];

document.addEventListener('DOMContentLoaded', (event) => {
  let itemContainer = document.getElementById("additems");
  if (itemContainer) {
      itemContainer.innerHTML = "";

      items.forEach(val => {
          let div = document.createElement("div");
          div.classList.add("grid-item", "align-center", "padding-10");

          let grid_img = document.createElement("div");
          grid_img.classList.add("grid-img");
          let img = document.createElement("img");
          img.src = val.images;
          img.classList.add("grid-img");

          let grid_text = document.createElement("div");
          grid_text.classList.add("grid-text");
          let title = document.createElement("h4");
          title.textContent = val.title;
          title.classList.add("cart-h4");

          let des = document.createElement("p");
          des.textContent = val.description;
          des.classList.add("grid-p");

          let per = document.createElement("h3");
          per.textContent = val.price;
          per.classList.add("cart-h3");

          let buttonContainer = document.createElement("div");
          buttonContainer.innerHTML = val.button;

          grid_img.appendChild(img);
          grid_text.appendChild(title);
          grid_text.appendChild(des);
          grid_text.appendChild(per);
          grid_text.appendChild(buttonContainer);
          div.appendChild(grid_img);
          div.appendChild(grid_text);
          itemContainer.appendChild(div);
      });
  } else {
      console.log();('Element with ID "additems" not found');
  }
});


// add
let quantity = 1;
function updateQuantity() {
  document.getElementById("quantity").innerText = quantity;
}

function addtocart(id) {
  let addData = JSON.parse(localStorage.getItem("cart_items")) || [];
  const itemToAdd = items.find(item => item.id === id);
  if (itemToAdd && !addData.some(item => item.id === id)) {
      addData.push(itemToAdd);
      localStorage.setItem("cart_items", JSON.stringify(addData));
      updateCart();
  } else {
      alert("Item is already in the cart");
  }
}

function updateCart() {
  let addData = JSON.parse(localStorage.getItem("cart_items")) || [];
  let addContainer = document.getElementById("add");
  if (addContainer) {
      addContainer.innerHTML = ""; 

      addData.forEach(item => {
          let div = document.createElement("div");
          div.classList.add("grid-item", "align-center", "padding-10");

          let img = document.createElement("img");
          img.src = item.images;
          img.classList.add("grid-img");

          let title = document.createElement("h4");
          title.textContent = item.title;
          title.classList.add("cart-h4");

          let per = document.createElement("h3");
          per.textContent = item.price;
          per.classList.add("cart-h3");


          let quantityDiv = document.createElement("div");
        quantityDiv.innerHTML = `
                    <button class="btn " id="decrease">-</button>
                    <span id="quantity">${quantity}</span>
                    <button class="btn " id="increase">+</button>
                `;

          div.appendChild(img);
          div.appendChild(title);
          div.appendChild(per);
          div.appendChild(quantityDiv);
          addContainer.appendChild(div);


          document.getElementById("decrease").addEventListener("click", () => {
            if (quantity >= 1) {
                quantity--;
                updateQuantity();
            }
            else if (quantity == 0) {
              window.localStorage.removeItem("quantity");
              window.location.href = "cart.html";
            }
            else {
                localStorage.removeItem("cartItem");
            }
        });

        document.getElementById("increase").addEventListener("click", () => {
            quantity++;
            updateQuantity();
        });
      });
  } else {
      console.log();('Element with ID "add" not found');
  }
}
document.addEventListener('DOMContentLoaded', updateCart);