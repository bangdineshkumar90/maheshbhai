import { db } from "./firebase-config.js";
import { collection, addDoc }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

document.getElementById("addProduct").addEventListener("click", async () => {

  const name = document.getElementById("name").value;
  const price = Number(document.getElementById("price").value);
  const category = document.getElementById("category").value;
  const image = document.getElementById("image").value;
  const stock = Number(document.getElementById("stock").value);

  await addDoc(collection(db, "products"), {
    name,
    price,
    category,
    image,
    stock,
    createdAt: new Date()
  });

  alert("Product Added Successfully 🔥");
});
