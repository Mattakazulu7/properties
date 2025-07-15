// addProperty.js
function createPropertyModal() {
  const modal = document.createElement("div");
  modal.id = "propertyModal";
  modal.className = "modal-overlay hidden";
  modal.innerHTML = `
    <div class="modal-content">
      <button class="close-btn" id="closeModalBtn">&times;</button>
      <h2>Add New Property</h2>
      <form id="propertyForm">
        <input type="text" name="title" placeholder="Title" required />
        <input type="number" name="price" placeholder="Price" required />
        <input type="number" name="beds" placeholder="Beds" required />
        <input type="number" name="baths" placeholder="Baths" required />
        <input type="number" name="sqm" placeholder="Size (sqm)" required />
        <input type="text" name="location" placeholder="Location" required />
        <input type="text" name="image_url" placeholder="Image path (e.g., images/apt4.jpg)" required />
        <label><input type="checkbox" name="available" checked /> Available</label>
        <label><input type="checkbox" name="long_term" /> Long-Term</label>
        <label><input type="checkbox" name="short_term" /> Short-Term</label>
        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

function setupPropertyModalEvents() {
  const openBtn = document.getElementById("addPropertyBtn");
  const modal = document.getElementById("propertyModal");
  const closeBtn = modal.querySelector("#closeModalBtn");
  const form = modal.querySelector("#propertyForm");

  openBtn.addEventListener("click", () => modal.classList.remove("hidden"));
  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    formData.set("available", formData.get("available") ? 1 : 0);
    formData.set("long_term", formData.get("long_term") ? 1 : 0);
    formData.set("short_term", formData.get("short_term") ? 1 : 0);

    fetch("api/add_property.php", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(() => {
      alert("Property added!");
      modal.classList.add("hidden");
      form.reset();
      location.reload(); // Optionally update via React instead
    })
    .catch(err => {
      console.error(err);
      alert("Error submitting property.");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createPropertyModal();
  setupPropertyModalEvents();
});
