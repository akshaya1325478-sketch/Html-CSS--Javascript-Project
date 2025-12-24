// const CART_KEY = "spiceDelightCart";
// let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

// /* ================= HAMBURGER ================= */
// function toggleMenu() {
//   const nav = document.querySelector("nav");
//   if (nav) nav.classList.toggle("active");
// }

// /* ================= ADD TO CART ================= */
// function addToCart(name, price, category) {

//   const existingItem = cart.find(
//     item => item.name === name && item.category === category
//   );

//   if (existingItem) {
//     existingItem.quantity += 1;
//   } else {
//     cart.push({
//       name,
//       price,
//       category,
//       quantity: 1
//     });
//   }

//   saveCart();
//   updateUI();

//   if (
//     typeof CURRENT_PAGE_CATEGORY !== "undefined" &&
//     CURRENT_PAGE_CATEGORY === category
//   ) {
//     toggleSideCart(true);
//   }
// }

// /* ================= SAVE CART ================= */
// function saveCart() {
//   localStorage.setItem(CART_KEY, JSON.stringify(cart));
// }

// /* ================= REMOVE ITEM ================= */
// function removeItem(name, category) {
//   cart = cart.filter(
//     item => !(item.name === name && item.category === category)
//   );
//   saveCart();
//   updateUI();
// }

// /* ================= CHANGE QTY ================= */
// function changeQty(name, category, change) {
//   const item = cart.find(
//     i => i.name === name && i.category === category
//   );

//   if (!item) return;

//   item.quantity += change;

//   if (item.quantity <= 0) {
//     removeItem(name, category);
//   } else {
//     saveCart();
//     updateUI();
//   }
// }

// /* ================= CLEAR CART ================= */
// function clearCart() {
//   cart = [];
//   saveCart();
//   updateUI();
// }

// /* ================= SIDE CART TOGGLE ================= */
// function toggleSideCart(show) {
//   const sideCart = document.querySelector(".side-cart-container");
//   if (!sideCart) return;

//   if (show) sideCart.classList.remove("hidden");
//   else sideCart.classList.add("hidden");
// }

// /* ================= UPDATE UI ================= */
// function updateUI() {

//   /* ----- MAIN CART PAGE ----- */
//   const cartItems = document.getElementById("cart-items");
//   if (cartItems) renderMainCart(cartItems);

//   /* ----- SIDE CART ----- */
//   const sideCartItems = document.getElementById("side-cart-items");
//   const sideCartBox = document.querySelector(".side-cart-container");

//   if (
//     sideCartItems &&
//     sideCartBox &&
//     typeof CURRENT_PAGE_CATEGORY !== "undefined"
//   ) {
//     const pageItems = cart.filter(
//       i => i.category === CURRENT_PAGE_CATEGORY
//     );

//     if (pageItems.length === 0) {
//       sideCartBox.classList.add("hidden");
//     } else {
//       renderSideCart(sideCartItems, CURRENT_PAGE_CATEGORY);
//     }
//   }
// }

// /* ================= MAIN CART RENDER ================= */
// function renderMainCart(container) {
//   container.innerHTML = "";
//   let total = 0;

//   cart.forEach(item => {
//     const itemTotal = item.price * item.quantity;
//     total += itemTotal;

//     container.innerHTML += `
//       <tr>
//         <td>${item.name}<br><small>(${item.category})</small></td>
//         <td>₹${item.price}</td>
//         <td>
//           <button onclick="changeQty('${item.name}','${item.category}',-1)">-</button>
//           ${item.quantity}
//           <button onclick="changeQty('${item.name}','${item.category}',1)">+</button>
//         </td>
//         <td>₹${itemTotal}</td>
//         <td>
//           <button onclick="removeItem('${item.name}','${item.category}')">❌</button>
//         </td>
//       </tr>
//     `;
//   });

//   const totalEl = document.getElementById("cart-total");
//   if (totalEl) totalEl.innerText = total;
// }

// /* ================= SIDE CART RENDER ================= */
// function renderSideCart(container, category) {
//   const items = cart.filter(i => i.category === category);
//   container.innerHTML = "";
//   let total = 0;

//   items.forEach(item => {
//     const itemTotal = item.price * item.quantity;
//     total += itemTotal;

//     container.innerHTML += `
//       <div class="side-cart-item">
//         <div>
//           <strong>${item.name}</strong><br>
//           <small>₹${item.price}</small>
//         </div>
//         <div>
//           <button onclick="changeQty('${item.name}','${item.category}',-1)">-</button>
//           ${item.quantity}
//           <button onclick="changeQty('${item.name}','${item.category}',1)">+</button>
//         </div>
//         <div class="item-price">₹${itemTotal}</div>
//         <button onclick="removeItem('${item.name}','${item.category}')">×</button>
//       </div>
//     `;
//   });

//   const totalEl = document.getElementById("side-cart-total");
//   if (totalEl) totalEl.innerText = total;
// }

// /* ================= BUY NOW ================= */
// function buyNow(name, price, img) {
//   const modal = document.getElementById("buyNowModal");
//   const box = document.getElementById("modal-product-details");

//   box.innerHTML = `
//     <img src="${img}" style="width:100%;border-radius:8px;margin-bottom:10px;">
//     <h3>${name}</h3>
//     <p><b>₹${price}</b></p>
//   `;

//   modal.classList.remove("hidden");
// }

// function closeModal() {
//   document.getElementById("buyNowModal").classList.add("hidden");
// }

// /* ================= PLACE ORDER (OLD LOGIC RESTORED) ================= */
// function placeOrder() {
//   alert("Order Placed Successfully! Thank you for your purchase.");
//   closeModal();
// }

// /* ================= INIT ================= */
// document.addEventListener("DOMContentLoaded", updateUI);




const CART_KEY = "spiceDelightCart";
let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

/* ================= HAMBURGER ================= */
function toggleMenu() {
  const nav = document.querySelector("nav");
  if (nav) nav.classList.toggle("active");
}

/* ================= ADD TO CART ================= */
function addToCart(name, price, category) {
  const existingItem = cart.find(
    item => item.name === name && item.category === category
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name,
      price,
      category,
      quantity: 1
    });
  }

  saveCart();
  updateUI();

  if (
    typeof CURRENT_PAGE_CATEGORY !== "undefined" &&
    CURRENT_PAGE_CATEGORY === category
  ) {
    toggleSideCart(true);
  }
}

/* ================= SAVE CART ================= */
function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/* ================= REMOVE ITEM ================= */
function removeItem(name, category) {
  cart = cart.filter(
    item => !(item.name === name && item.category === category)
  );
  saveCart();
  updateUI();
}

/* ================= CHANGE QTY ================= */
function changeQty(name, category, change) {
  const item = cart.find(
    i => i.name === name && i.category === category
  );

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeItem(name, category);
  } else {
    saveCart();
    updateUI();
  }
}

/* ================= CLEAR CART ================= */
function clearCart() {
  cart = [];
  saveCart();
  updateUI();
}

/* ================= SIDE CART TOGGLE ================= */
function toggleSideCart(show) {
  const sideCart = document.querySelector(".side-cart-container");
  if (!sideCart) return;

  if (show) sideCart.classList.remove("hidden");
  else sideCart.classList.add("hidden");
}

/* ================= UPDATE UI ================= */
function updateUI() {
  /* ----- MAIN CART PAGE ----- */
  const cartItems = document.getElementById("cart-items");
  if (cartItems) renderMainCart(cartItems);

  /* ----- SIDE CART ----- */
  const sideCartItems = document.getElementById("side-cart-items");
  const sideCartBox = document.querySelector(".side-cart-container");

  if (
    sideCartItems &&
    sideCartBox &&
    typeof CURRENT_PAGE_CATEGORY !== "undefined"
  ) {
    const pageItems = cart.filter(
      i => i.category === CURRENT_PAGE_CATEGORY
    );

    if (pageItems.length === 0) {
      sideCartBox.classList.add("hidden");
    } else {
      renderSideCart(sideCartItems, CURRENT_PAGE_CATEGORY);
    }
  }
}

/* ================= MAIN CART RENDER ================= */
function renderMainCart(container) {
  container.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    container.innerHTML += `
      <tr>
        <td>${item.name}<br><small>(${item.category})</small></td>
        <td>₹${item.price}</td>
        <td>
          <button onclick="changeQty('${item.name}','${item.category}',-1)">-</button>
          ${item.quantity}
          <button onclick="changeQty('${item.name}','${item.category}',1)">+</button>
        </td>
        <td>₹${itemTotal}</td>
        <td>
          <button onclick="removeItem('${item.name}','${item.category}')">❌</button>
        </td>
      </tr>
    `;
  });

  const totalEl = document.getElementById("cart-total");
  if (totalEl) totalEl.innerText = total;
}

/* ================= SIDE CART RENDER (HORIZONTAL QTY & PRICE) ================= */
function renderSideCart(container, category) {
  const items = cart.filter(i => i.category === category);
  container.innerHTML = "";
  let total = 0;

  items.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    container.innerHTML += `
      <div class="side-cart-item">
        <div class="item-details">
          <span class="item-name"><strong>${item.name}</strong></span>
          <span class="item-unit-price">₹${item.price}</span>
          <span class="item-qty">
            <button onclick="changeQty('${item.name}','${item.category}',-1)">-</button>
            ${item.quantity}
            <button onclick="changeQty('${item.name}','${item.category}',1)">+</button>
          </span>
          <span class="item-total">₹${itemTotal}</span>
          <button class="remove-btn" onclick="removeItem('${item.name}','${item.category}')">×</button>
        </div>
      </div>
    `;
  });

  const totalEl = document.getElementById("side-cart-total");
  if (totalEl) totalEl.innerText = total;
}

/* ================= BUY NOW ================= */
function buyNow(name, price, img) {
  const modal = document.getElementById("buyNowModal");
  const box = document.getElementById("modal-product-details");

  box.innerHTML = `
    <img src="${img}" style="width:100%;border-radius:8px;margin-bottom:10px;">
    <h3>${name}</h3>
    <p><b>₹${price}</b></p>
  `;

  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("buyNowModal").classList.add("hidden");
}

/* ================= PLACE ORDER ================= */
function placeOrder() {
  alert("Order Placed Successfully! Thank you for your purchase.");
  closeModal();
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", updateUI);
