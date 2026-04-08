// fetch("navbar.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.getElementById("navbar-import").innerHTML = data;
//   });

// Form valid
function validateForm() {
  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const dest = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const people = document.getElementById("people").value;

  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

  if (name.length < 3) {
    document.getElementById("err-name").textContent = "Invalid name";
    valid = false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("err-email").textContent = "Invalid email";
    valid = false;
  }

  if (!/^\d{10}$/.test(mobile)) {
    document.getElementById("err-mobile").textContent = "Invalid mobile";
    valid = false;
  }

  if (!dest) {
    document.getElementById("err-dest").textContent = "Select destination";
    valid = false;
  }

  if (!date) {
    document.getElementById("err-date").textContent = "Select date";
    valid = false;
  }

  if (people < 1) {
    document.getElementById("err-people").textContent = "Invalid number";
    valid = false;
  }

  if (valid) {
    const bookingId = "DBT" + Date.now().toString().slice(-6);

    const match = dest.match(/₹(\d+)/);
    const price = match ? parseInt(match[1]) : 0;
    const subtotal = price * people;
    const gst = Math.round(subtotal * 0.07);
    const total = subtotal + gst;

    document.getElementById("bookingId").innerText = bookingId;

    document.getElementById("s-name").innerText = name;
    document.getElementById("s-email").innerText = email;
    document.getElementById("s-mobile").innerText = mobile;
    document.getElementById("s-dest").innerText = dest;
    document.getElementById("s-date").innerText = date;
    document.getElementById("s-people").innerText = people;

    document.getElementById("s-price").innerText = "₹" + price;
    document.getElementById("s-subtotal").innerText = "₹" + subtotal;
    document.getElementById("s-gst").innerText = "₹" + gst;
    document.getElementById("s-total").innerText = "₹" + total;

    document.getElementById("successBox").classList.add("show");
  }
}

function closeBox() {
  document.getElementById("successBox").classList.remove("show");
}
