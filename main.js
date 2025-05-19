const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

passwordInput.addEventListener("input", (e) => {
	if (e.target.value !== confirmPasswordInput.value) {
		confirmPasswordInput.classList.add("check-input");
	}
});

confirmPasswordInput.addEventListener("input", (e) => {
	if (e.target.value !== passwordInput.value) {
		passwordInput.classList.add("check-input");
	}
});
