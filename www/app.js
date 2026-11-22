function requestGmailCode() {
    clearAuthErrors();
    const usernameInput = document.getElementById('username-input');
    const gmailInput = document.getElementById('gmail-input');
    const username = usernameInput ? usernameInput.value.trim() : '';
    const gmail = gmailInput ? gmailInput.value.trim().toLowerCase() : '';

    const pseudoRegex = /^[a-zA-Z0-9À-ÿ ._-]{3,24}$/;
    if (!pseudoRegex.test(username)) {
        showFieldError('username-error', "Pseudo invalide (3 à 24 caractères requis).");
        return;
    }

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(gmail)) {
        showFieldError('gmail-error', "Veuillez entrer une adresse @gmail.com valide.");
        return;
    }

    if (window.LekemaStorage && typeof LekemaStorage.isPseudoTaken === 'function') {
        if (LekemaStorage.isPseudoTaken(username, gmail)) {
            showFieldError('username-error', "Ce pseudo est déjà pris par un autre utilisateur.");
            return;
        }
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    pendingAuth = {
        username,
        gmail,
        code,
        expiresAt: Date.now() + 5 * 60 * 1000
    };

    const targetEl = document.getElementById('otp-target-gmail');
    const otpInput = document.getElementById('otp-input');
    const stepCred = document.getElementById('step-credentials');
    const stepOtp = document.getElementById('step-otp');

    if (targetEl) targetEl.innerText = `${gmail} (Code test : ${code})`;
    if (otpInput) otpInput.value = '';
    if (stepCred) stepCred.classList.add('hidden');
    if (stepOtp) stepOtp.classList.remove('hidden');

    if (EMAILJS_CONFIG.ENABLED && window.emailjs && typeof emailjs.send === 'function') {
        emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
            to_email: gmail,
            to_name: username,
            otp_code: code
        }, EMAILJS_CONFIG.PUBLIC_KEY).catch(() => {});
    }
}
