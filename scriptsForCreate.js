import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
    import {
        getFirestore,
        addDoc,
        doc,
        collection,
    } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
    const firebaseConfig = {
      apiKey: "AIzaSyDtVw1ltQmqFv-Hw2NsvQnmpM7HHA9t0V8",
      authDomain: "flames----a-social-media.firebaseapp.com",
      projectId: "flames----a-social-media",
      storageBucket: "flames----a-social-media.appspot.com",
      messagingSenderId: "756225538146",
      appId: "1:756225538146:web:7aab03eecef8727d5c793b",
      measurementId: "G-3J47N33NH9"
    };
    const app = initializeApp(firebaseConfig);

    const db = getFirestore();
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const form = document.getElementById("form");
      const spark = document.getElementById("spark");
      addDoc(collection(db, "sparks"), {
        spark: spark.value
      });
      alert("Successfully submitted post!");
      window.location.href = "index.html"
    });
