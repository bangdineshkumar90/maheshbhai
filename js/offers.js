import { db } from "./firebase-config.js";
import { collection, query, where, getDocs }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const offerContainer = document.getElementById("offer-products");

async function loadOffers() {

  const q = query(
    collection(db, "products"),
    where("offer", "==", true)
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const product = doc.data();

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${product.image}" style="width:100%;border-radius:10px;">
      <h3>${product.name}</h3>

      <p style="text-decoration:line-through;color:#ccc;">
        ₹${product.price}
      </p>

      <p style="color:#D4AF37;font-size:20px;">
        ₹${product.discountPrice}
      </p>

      <button onclick='addToCart(${JSON.stringify(product)})' 
        style="padding:8px 15px;border:none;background:#D4AF37;border-radius:20px;">
        Add to Cart
      </button>
    `;

    offerContainer.appendChild(div);
  });
}

loadOffers();
