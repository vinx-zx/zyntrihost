
firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.location.href = 'login.html';
  } else {
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userUID").textContent = user.uid;

    const db = firebase.firestore();
    const userRef = db.collection("users").doc(user.uid);

    userRef.get().then(doc => {
      if (doc.exists) {
        const data = doc.data();
        document.getElementById("userPlan").textContent = data.plan || "Not set";
        document.getElementById("userSubdomain").textContent = data.subdomain || "Not set";
      } else {
        userRef.set({ plan: "Free", subdomain: "" });
        document.getElementById("userPlan").textContent = "Free";
        document.getElementById("userSubdomain").textContent = "Not set";
      }
    });
  }
});

function updatePlan() {
  const plan = document.getElementById("planSelect").value;
  const user = firebase.auth().currentUser;
  if (user) {
    const db = firebase.firestore();
    db.collection("users").doc(user.uid).update({ plan: plan })
      .then(() => {
        alert("Plan updated to " + plan);
        document.getElementById("userPlan").textContent = plan;
      });
  }
}

function saveSubdomain() {
  const sub = document.getElementById("subdomainInput").value.trim().toLowerCase();
  if (!sub) return alert("Please enter a subdomain");
  const user = firebase.auth().currentUser;
  if (user) {
    const db = firebase.firestore();
    db.collection("users").doc(user.uid).update({ subdomain: sub })
      .then(() => {
        alert("Subdomain saved: " + sub);
        document.getElementById("userSubdomain").textContent = sub;
      });
  }
}

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = 'login.html';
  });
}
