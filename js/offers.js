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
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
    `;

    offerContainer.appendChild(div);
  });
}

loadOffers();
