// Selección de elementos
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".close-modal");
const btnSubmit = document.querySelector(".btn-submit");
const emailInput = document.getElementById("email");

// Función para abrir modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  if (emailInput) {
    emailInput.focus();
  }
};

// Función para cerrar modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// --- EVENTOS ---

// Abrir modal
if (btnOpen) {
  btnOpen.addEventListener("click", openModal);
}

// Cerrar modal con botón X
if (btnClose) {
  btnClose.addEventListener("click", closeModal);
}

// Cerrar modal haciendo clic en el overlay
if (overlay) {
  overlay.addEventListener("click", closeModal);
}

// Cerrar modal con Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Validación y envío del correo
if (btnSubmit && emailInput) {
  btnSubmit.addEventListener("click", function () {
    const email = emailInput.value.trim();

    // Validación básica
    if (email === "" || !email.includes("@")) {
      emailInput.focus();
      return;
    }

    // Simulación de envío
    console.log(`Suscripción simulada con éxito para: ${email}`);

    // Limpiar input
    emailInput.value = "";

    // Cerrar modal
    closeModal();
  });
}
