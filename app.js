// Selección de elementos
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpen = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".close-modal"); 
const btnSubmit = document.querySelector(".btn-submit"); 
// Asegúrate de que tu input de email en HTML tenga el ID "email"
const emailInput = document.getElementById("email"); 

// Función para cerrar modal (centralizada)
const closeModal = function () {
    if (modal && overlay) {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }
};

// Función para abrir modal
const openModal = function () {
    if (modal && overlay) {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        // Opcional: enfocar el input al abrir el modal para que el usuario pueda escribir inmediatamente
        if (emailInput) {
            emailInput.focus(); 
        }
    }
};

// --- Manejadores de Eventos ---

// 1. Abrir con el botón
if (btnOpen) {
    btnOpen.addEventListener("click", openModal);
}

// 2. Cerrar con el botón X
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
}

// 3. Cerrar al hacer clic en el overlay
if (overlay) {
    overlay.addEventListener("click", closeModal);
}

// 4. LÓGICA DEL BOTÓN "SUSCRIBIRSE" (Ahora sin alertas)
if (btnSubmit && emailInput) {
    btnSubmit.addEventListener("click", function () {
        const email = emailInput.value.trim();

        // 🚨 Validación: Verifica que el campo no esté vacío y contenga un @
        if (email === "" || !email.includes("@")) {
            // Si falla la validación, solo enfoca el input para que el usuario sepa dónde corregir
            emailInput.focus(); 
            // Opcional: Podrías añadir una clase CSS roja al input aquí para un feedback visual
            return; // Detiene la función si falla la validación
        }

        // Si la validación es exitosa:
        
        // 1. Simula el envío de datos (aquí iría el código real para enviar el correo al servidor)
        console.log(`Suscripción simulada con éxito para: ${email}`);
        
        // 2. Limpia el input
        emailInput.value = ""; 
        
        // 3. Cierra el modal
        closeModal();
    });
}

// 5. CERRAR CON TECLA ESCAPE
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
        closeModal();
    }
});