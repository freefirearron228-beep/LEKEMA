const EMAILJS_CONFIG = {
    ENABLED: false,
    PUBLIC_KEY: "TA_CLE_PUBLIQUE_EMAILJS",
    SERVICE_ID: "TON_SERVICE_ID",
    TEMPLATE_ID: "TON_TEMPLATE_ID"
};

const EMOJI_CATEGORIES = {
    faces: [
        "😀", "😃", "😄", "😁", "😆", "😅", "🤣", "😂", "🙂", "😉", "😊", "😇", "🥰", "😍", "🤩", "😘",
        "😗", "😚", "😋", "😛", "😜", "🤪", "😝", "🤑", "🤗", "🤭", "🤫", "🤔", "🤐", "🤨", "😐", "😑",
        "😶", "😏", "😒", "🙄", "😬", "🤥", "😌", "😔", "😪", "🤤", "😴", "😷", "🤒", "🤕", "🤢", "🤮",
        "🤧", "🥵", "🥶", "🥴", "😵", "🤯", "🤠", "🥳", "😎", "🤓", "🧐", "😕", "😟", "🙁", "☹️", "😮",
        "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓",
        "🥹", "🥲", "🫠", "🫡", "🫥", "😶‍🌫️", "😮‍💨", "😤", "😠", "😡", "🤬", "😈", "👿", "💀", "☠️", "💩",
        "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"
    ],
    hearts: [
        "❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❤️‍🔥", "❤️‍🩹", "💕", "💞", "💓", "💗",
        "💖", "💘", "💝", "💟", "💯", "💢", "💥", "💫", "💦", "💨", "🕳️", "💣", "💬", "👁️‍🗨️", "🗨️", "🗯️",
        "💭", "💤", "✨", "🌟", "⭐", "🔥", "☀️", "🌙", "⚡", "🌈", "🎵", "🎶", "🔔", "🔕", "💎", "👑",
        "💌", "🌹", "🌷", "💐", "🌺", "🌻", "🌼", "🍀", "🕊️", "🦋", "🕯️", "🥂", "🍻", "🎈", "🎀", "🎗️"
    ],
    gestures: [
        "👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆",
        "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️",
        "💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", "👃", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "👩",
        "🫶", "🫰", "🫵", "🫱", "🫲", "🫳", "🫴", "🫷", "🫸", "🙇", "🤦", "🤷", "🙋", "💁", "🙅", "🙆"
    ],
    objects: [
        "🎉", "🎊", "🎈", "🎂", "🎁", "🏆", "🥇", "⚽", "🏀", "🏈", "🎾", "🎮", "🎧", "🎤", "📷", "📹",
        "📱", "💻", "⌚", "🚗", "✈️", "🚀", "🏠", "🌍", "☀️", "🌊", "🌸", "🌹", "🍀", "🍕", "🍔", "☕",
        "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🦁", "🐯", "🐵", "🐔", "🐧", "🐦", "🐤", "🐬",
        "🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🍍", "🥭", "🍗", "🍟", "🍩", "🍪", "🍫", "🥤", "🍺", "⚽"
    ],
    flags: [
        "🇹🇬", "🇫🇷", "🇧🇯", "🇨🇮", "🇸🇳", "🇲🇱", "🇧🇫", "🇨🇲", "🇬🇦", "🇨🇩", "🇨🇬", "🇲🇦", "🇩🇿", "🇹🇳", "🇪🇬", "🇳🇬",
        "🇬🇭", "🇰🇪", "🇿🇦", "🇺🇸", "🇨🇦", "🇧🇷", "🇦🇷", "🇬🇧", "🇩🇪", "🇪🇸", "🇮🇹", "🇵🇹", "🇧🇪", "🇨🇭", "🇯🇵", "🇨🇳",
        "🇮🇳", "🇷🇺", "🇦🇺", "🇲🇽", "🇨🇴", "🇨🇱", "🇵🇪", "🇳🇱", "🇸🇪", "🇳🇴", "🇩🇰", "🇫🇮", "🇵🇱", "🇹🇷", "🇸🇦", "🇦🇪",
        "🇪🇹", "🇺🇬", "🇷🇼", "🇲🇬", "🇸🇳", "🇬🇳", "🇲🇷", "🇳🇪", "🇹🇩", "🇨🇫", "🇦🇴", "🇲🇿", "🇿🇲", "🇧🇼", "🇳🇦", "🏳️"
    ]
};

let currentEmojiCategory = 'faces';
let currentUser = "Moi";
let currentGmail = "";
let currentMediaType = 'image';
let currentVideoUrl = '';
let baseImage = new Image();
let isDrawing = false;
let brushColor = '#000000';
let pendingAuth = null;

let activeMessageAudio = null;
let activeMessageBtn = null;
let activeMessageUrl = '';

function showFieldError(id, message) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerText = message;
    el.classList.remove('hidden');
}

function clearAuthErrors() {
    ['username-error', 'gmail-error', 'otp-error'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
}

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

function verifyGmailCode() {
    clearAuthErrors();
    if (!pendingAuth) {
        backToCredentials();
        return;
    }
    if (Date.now() > pendingAuth.expiresAt) {
        showFieldError('otp-error', "Code expiré. Demandez un nouveau code.");
        return;
    }
    const enteredCode = document.getElementById('otp-input').value.trim();
    if (enteredCode !== pendingAuth.code) {
        showFieldError('otp-error', "Code incorrect. Vérifiez votre Gmail et réessayez.");
        return;
    }

    const sessionData = {
        username: pendingAuth.username,
        gmail: pendingAuth.gmail,
        verifiedAt: Date.now()
    };

    if (window.LekemaStorage) {
        LekemaStorage.saveUser(sessionData);
        LekemaStorage.setSession(sessionData);
    }
    pendingAuth = null;
    activateMainApp(sessionData);
}

function backToCredentials() {
    clearAuthErrors();
    pendingAuth = null;
    document.getElementById('step-otp').classList.add('hidden');
    document.getElementById('step-credentials').classList.remove('hidden');
}

function activateMainApp(sessionData) {
    currentUser = sessionData.username;
    currentGmail = sessionData.gmail || "";
    const initial = currentUser.charAt(0).toUpperCase() || "M";
    const avatarEl = document.getElementById('header-avatar');
    const modalAvatarEl = document.getElementById('profile-modal-avatar');
    const modalNameEl = document.getElementById('profile-modal-name');
    const modalGmailEl = document.getElementById('profile-modal-gmail');

    if (avatarEl) avatarEl.innerText = initial;
    if (modalAvatarEl) modalAvatarEl.innerText = initial;
    if (modalNameEl) modalNameEl.innerText = currentUser;
    if (modalGmailEl) modalGmailEl.innerText = currentGmail || "Compte connecté";

    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
}

function openProfileModal() {
    const modal = document.getElementById('profile-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeProfileModal() {
    const modal = document.getElementById('profile-modal');
    if (modal) modal.classList.add('hidden');
}

function logoutUser() {
    closeProfileModal();
    if (window.LekemaStorage) {
        LekemaStorage.clearSession();
    }
    document.getElementById('main-app').classList.add('hidden');
    document.getElementById('auth-screen').classList.remove('hidden');
    backToCredentials();
}

function applyMainWallpaperData(dataUrl) {
    const mainApp = document.getElementById('main-app');
    const tabChats = document.getElementById('tab-chats');
    const bgValue = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${dataUrl}')`;
    if (mainApp) {
        mainApp.style.backgroundImage = bgValue;
        mainApp.style.backgroundSize = 'cover';
        mainApp.style.backgroundPosition = 'center';
    }
    if (tabChats) {
        tabChats.style.backgroundImage = bgValue;
        tabChats.style.backgroundSize = 'cover';
        tabChats.style.backgroundPosition = 'center';
    }
}

function handleAndroidBackButton(e) {
    const camModal = document.getElementById('camera-capture-modal');
    if (camModal && !camModal.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        closeCameraCaptureModal();
        return true;
    }

    const viewer = document.getElementById('fullscreen-viewer');
    if (viewer && !viewer.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        closeViewer();
        return true;
    }

    const editor = document.getElementById('media-editor-modal');
    if (editor && !editor.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        closeMediaEditor();
        return true;
    }

    const liveModal = document.getElementById('live-stream-modal');
    if (liveModal && !liveModal.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        stopLiveStream();
        return true;
    }

    const profileModal = document.getElementById('profile-modal');
    if (profileModal && !profileModal.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        closeProfileModal();
        return true;
    }

    const themeModal = document.getElementById('theme-modal');
    if (themeModal && !themeModal.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        closeThemeModal();
        return true;
    }

    const attachMenu = document.getElementById('attach-menu-bar');
    if (attachMenu && !attachMenu.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        attachMenu.classList.add('hidden');
        return true;
    }

    const emojiBar = document.getElementById('emoji-picker-bar');
    if (emojiBar && !emojiBar.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        emojiBar.classList.add('hidden');
        return true;
    }

    const chatRoom = document.getElementById('chat-room');
    if (chatRoom && !chatRoom.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        closeChat();
        return true;
    }

    const tabStatus = document.getElementById('tab-status');
    const tabLive = document.getElementById('tab-live');
    if ((tabStatus && !tabStatus.classList.contains('hidden')) || (tabLive && !tabLive.classList.contains('hidden'))) {
        if (e && e.preventDefault) e.preventDefault();
        switchTab('chats');
        return true;
    }

    return false;
}

window.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-code-btn');
    if (sendBtn) {
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            requestGmailCode();
        });
    }

    document.addEventListener('backbutton', (e) => {
        handleAndroidBackButton(e);
    }, false);

    try {
        window.history.pushState({ lekemaApp: true }, '');
        window.addEventListener('popstate', () => {
            const handled = handleAndroidBackButton(null);
            window.history.pushState({ lekemaApp: true }, '');
            if (!handled && window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
                window.Capacitor.Plugins.App.minimizeApp().catch(() => {});
            }
        });
    } catch (err) {}

    const savedSession = window.LekemaStorage ? LekemaStorage.getSession() : null;
    if (savedSession && savedSession.username && savedSession.gmail) {
        activateMainApp(savedSession);
    }

    const savedTheme = window.LekemaStorage ? LekemaStorage.getTheme() : null;
    if (savedTheme) {
        applyTheme(savedTheme.bgMain, savedTheme.bgCard, savedTheme.accent, savedTheme.accentText, savedTheme.textMain, false);
    }

    try {
        const savedBg = localStorage.getItem('lekema_main_bg_v1');
        if (savedBg) {
            applyMainWallpaperData(savedBg);
        }
    } catch (err) {}

    renderEmojiGrid();
    updateBrushVisualState();
    updateChatActionButton();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
});

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const installBanner = document.getElementById('install-app-banner');
    if (installBanner) installBanner.classList.remove('hidden');
});

async function triggerAppInstall() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
        document.getElementById('install-app-banner').classList.add('hidden');
    }
    deferredPrompt = null;
}

function toggleEmojiPicker() {
    const picker = document.getElementById('emoji-picker-bar');
    const attachMenu = document.getElementById('attach-menu-bar');
    if (attachMenu) attachMenu.classList.add('hidden');
    if (!picker) return;
    picker.classList.toggle('hidden');
    if (!picker.classList.contains('hidden')) {
        renderEmojiGrid();
    }
}

function selectEmojiCategory(catKey) {
    currentEmojiCategory = catKey;
    ['faces', 'hearts', 'gestures', 'objects', 'flags'].forEach(k => {
        const btn = document.getElementById('emoji-cat-' + k);
        if (btn) {
            if (k === catKey) btn.classList.add('bg-white/10');
            else btn.classList.remove('bg-white/10');
        }
    });
    renderEmojiGrid();
}

function renderEmojiGrid() {
    const grid = document.getElementById('emoji-list-grid');
    const searchInp = document.getElementById('emoji-search-input');
    if (!grid) return;

    const query = searchInp ? searchInp.value.trim().toLowerCase() : '';
    let list = EMOJI_CATEGORIES[currentEmojiCategory] || EMOJI_CATEGORIES.faces;

    if (query) {
        const allEmojis = Object.values(EMOJI_CATEGORIES).flat();
        list = allEmojis.filter(em => em.includes(query));
        if (list.length === 0) list = allEmojis;
    }

    grid.innerHTML = list.map(em =>
        `<button type="button" onclick="insertEmoji('${em}')" class="hover:bg-white/10 rounded-lg py-1 transition">${em}</button>`
    ).join('');
}

function insertEmoji(emoji) {
    const input = document.getElementById('chat-input');
    if (!input) return;
    input.value = (input.value || '') + emoji;
    input.focus();
    updateChatActionButton();
}

function toggleEditorEmojiBar() {
    const bar = document.getElementById('editor-emoji-bar');
    if (!bar) return;
    bar.classList.toggle('hidden');
}

function insertEditorEmoji(emoji) {
    const inp = document.getElementById('media-caption');
    if (!inp) return;
    inp.value = (inp.value || '') + emoji;
    inp.focus();
}

function toggleAttachMenu() {
    const menu = document.getElementById('attach-menu-bar');
    const picker = document.getElementById('emoji-picker-bar');
    if (picker) picker.classList.add('hidden');
    if (!menu) return;
    menu.classList.toggle('hidden');
}

function triggerGalleryPicker() {
    const menu = document.getElementById('attach-menu-bar');
    if (menu) menu.classList.add('hidden');
    closeCameraCaptureModal();
    const inp = document.getElementById('gallery-media-input');
    if (inp) inp.click();
}

function triggerDocumentPicker() {
    const menu = document.getElementById('attach-menu-bar');
    if (menu) menu.classList.add('hidden');
    const inp = document.getElementById('doc-file-input');
    if (inp) inp.click();
}

async function ensureCameraPermission() {
    if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
        try {
            if (window.Capacitor.Plugins && window.Capacitor.Plugins.Permissions) {
                const status = await window.Capacitor.Plugins.Permissions.query({ name: 'camera' });
                if (status.state !== 'granted') {
                    const req = await window.Capacitor.Plugins.Permissions.request({ name: 'camera' });
                    if (req.state !== 'granted') return false;
                }
            }
        } catch (err) {}
    }
    return true;
}

let camCaptureMode = 'photo';
let camFacingMode = 'environment';
let camCaptureStream = null;
let camMediaRecorder = null;
let camVideoChunks = [];
let isRecordingCamVideo = false;
let isPausedCamVideo = false;
let camRecSeconds = 0;
let camRecTimerInterval = null;
let shouldOpenEditorOnStop = false;

async function openCameraCaptureModal() {
    const menu = document.getElementById('attach-menu-bar');
    const picker = document.getElementById('emoji-picker-bar');
    if (menu) menu.classList.add('hidden');
    if (picker) picker.classList.add('hidden');

    const modal = document.getElementById('camera-capture-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    setCameraCaptureMode(camCaptureMode);
    await startCameraStream();
}

async function startCameraStream() {
    if (camCaptureStream) {
        camCaptureStream.getTracks().forEach(t => t.stop());
        camCaptureStream = null;
    }

    try {
        const permitted = await ensureCameraPermission();
        if (!permitted) {
            alert("Autorisez l'accès à la caméra pour prendre une photo ou filmer.");
            return;
        }

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert("Caméra indisponible sur cet appareil.");
            return;
        }

        const constraints = camCaptureMode === 'video'
            ? { video: { facingMode: camFacingMode }, audio: true }
            : { video: { facingMode: camFacingMode }, audio: false };

        try {
            camCaptureStream = await navigator.mediaDevices.getUserMedia(constraints);
        } catch (firstErr) {
            camCaptureStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        }

        const vid = document.getElementById('capture-video-preview');
        if (vid) {
            vid.srcObject = camCaptureStream;
            vid.play().catch(() => {});
        }
    } catch (err) {
        alert("Autorisez l'accès à la caméra pour prendre une photo ou filmer.");
    }
}

function stopCameraTimersAndStream() {
    if (camRecTimerInterval) {
        clearInterval(camRecTimerInterval);
        camRecTimerInterval = null;
    }
    isRecordingCamVideo = false;
    isPausedCamVideo = false;
    camRecSeconds = 0;

    const hud = document.getElementById('cam-rec-hud');
    const pauseBtn = document.getElementById('pause-video-rec-btn');
    if (hud) hud.classList.add('hidden');
    if (pauseBtn) {
        pauseBtn.classList.add('hidden');
        pauseBtn.innerText = "⏸️ Pause";
    }

    if (camCaptureStream) {
        camCaptureStream.getTracks().forEach(t => t.stop());
        camCaptureStream = null;
    }
}

function closeCameraCaptureModal() {
    shouldOpenEditorOnStop = false;
    if (camMediaRecorder && camMediaRecorder.state !== 'inactive') {
        try { camMediaRecorder.stop(); } catch (e) {}
    }
    stopCameraTimersAndStream();
    const modal = document.getElementById('camera-capture-modal');
    if (modal) modal.classList.add('hidden');
}

async function setCameraCaptureMode(mode) {
    if (isRecordingCamVideo) return;
    camCaptureMode = mode === 'video' ? 'video' : 'photo';
    const badge = document.getElementById('camera-mode-badge');
    const photoBtn = document.getElementById('mode-photo-btn');
    const videoBtn = document.getElementById('mode-video-btn');
    const shutterBtn = document.getElementById('shutter-action-btn');

    if (badge) badge.innerText = camCaptureMode === 'video' ? 'MODE VIDÉO' : 'MODE PHOTO';
    if (photoBtn && videoBtn) {
        if (camCaptureMode === 'photo') {
            photoBtn.className = "px-4 py-1.5 rounded-full bg-accent text-black";
            videoBtn.className = "px-4 py-1.5 rounded-full bg-gray-800 text-white";
        } else {
            videoBtn.className = "px-4 py-1.5 rounded-full bg-red-600 text-white";
            photoBtn.className = "px-4 py-1.5 rounded-full bg-gray-800 text-white";
        }
    }
    if (shutterBtn) {
        shutterBtn.className = camCaptureMode === 'video'
            ? "w-16 h-16 rounded-full border-4 border-white bg-red-600 flex items-center justify-center shadow-xl active:scale-95 transition"
            : "w-16 h-16 rounded-full border-4 border-white bg-white flex items-center justify-center shadow-xl active:scale-95 transition";
    }

    if (camCaptureStream) {
        await startCameraStream();
    }
}

async function switchCameraFacing() {
    camFacingMode = camFacingMode === 'environment' ? 'user' : 'environment';

    if (isRecordingCamVideo && camMediaRecorder && camMediaRecorder.state === 'recording') {
        try {
            if (typeof camMediaRecorder.pause === 'function') camMediaRecorder.pause();
            isPausedCamVideo = true;
            const pauseBtn = document.getElementById('pause-video-rec-btn');
            if (pauseBtn) pauseBtn.innerText = "▶️ Reprendre";
        } catch (e) {}
    }

    await startCameraStream();

    if (isRecordingCamVideo && camMediaRecorder && camMediaRecorder.state === 'paused' && !isPausedCamVideo) {
        try {
            if (typeof camMediaRecorder.resume === 'function') camMediaRecorder.resume();
        } catch (e) {}
    }
}

function handleCameraShutter() {
    if (camCaptureMode === 'photo') {
        takePhotoFromStream();
    } else {
        toggleVideoCaptureFromStream();
    }
}

function takePhotoFromStream() {
    const vid = document.getElementById('capture-video-preview');
    const snapCanvas = document.getElementById('capture-photo-canvas');
    if (!vid || !snapCanvas || !vid.videoWidth) return;

    snapCanvas.width = vid.videoWidth;
    snapCanvas.height = vid.videoHeight;
    const sctx = snapCanvas.getContext('2d');
    sctx.drawImage(vid, 0, 0, snapCanvas.width, snapCanvas.height);
    const dataUrl = snapCanvas.toDataURL('image/jpeg', 0.88);

    closeCameraCaptureModal();
    openEditorWithImageData(dataUrl);
}

function togglePauseVideoRecording() {
    if (!camMediaRecorder || !isRecordingCamVideo) return;
    const pauseBtn = document.getElementById('pause-video-rec-btn');
    const dot = document.getElementById('cam-rec-dot');

    if (!isPausedCamVideo && camMediaRecorder.state === 'recording') {
        if (typeof camMediaRecorder.pause === 'function') {
            camMediaRecorder.pause();
            isPausedCamVideo = true;
            if (pauseBtn) pauseBtn.innerText = "▶️ Reprendre";
            if (dot) dot.className = "w-2.5 h-2.5 rounded-full bg-yellow-400";
        }
    } else if (isPausedCamVideo && camMediaRecorder.state === 'paused') {
        if (typeof camMediaRecorder.resume === 'function') {
            camMediaRecorder.resume();
            isPausedCamVideo = false;
            if (pauseBtn) pauseBtn.innerText = "⏸️ Pause";
            if (dot) dot.className = "w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse";
        }
    }
}

function toggleVideoCaptureFromStream() {
    const shutterBtn = document.getElementById('shutter-action-btn');
    const hud = document.getElementById('cam-rec-hud');
    const timerEl = document.getElementById('cam-rec-timer');
    const pauseBtn = document.getElementById('pause-video-rec-btn');
    const dot = document.getElementById('cam-rec-dot');

    if (!isRecordingCamVideo) {
        if (!camCaptureStream) return;
        try {
            camMediaRecorder = new MediaRecorder(camCaptureStream);
        } catch (e) {
            alert("Enregistrement vidéo non supporté, utilisez la galerie.");
            return;
        }

        camVideoChunks = [];
        shouldOpenEditorOnStop = true;
        isPausedCamVideo = false;

        camMediaRecorder.ondataavailable = e => {
            if (e.data && e.data.size > 0) camVideoChunks.push(e.data);
        };

        camMediaRecorder.onstop = () => {
            const shouldOpen = shouldOpenEditorOnStop;
            const blob = new Blob(camVideoChunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);

            if (shutterBtn) {
                shutterBtn.className = "w-16 h-16 rounded-full border-4 border-white bg-red-600 flex items-center justify-center shadow-xl active:scale-95 transition";
            }
            stopCameraTimersAndStream();
            const modal = document.getElementById('camera-capture-modal');
            if (modal) modal.classList.add('hidden');

            if (shouldOpen && blob.size > 0) {
                openEditorWithVideoUrl(url);
            }
        };

        camMediaRecorder.start(250);
        isRecordingCamVideo = true;
        camRecSeconds = 0;

        if (hud) hud.classList.remove('hidden');
        if (dot) dot.className = "w-2.5 h-2.5 rounded-full bg-red-500";
        if (timerEl) timerEl.innerText = "00:00";
        if (pauseBtn) {
            pauseBtn.classList.remove('hidden');
            pauseBtn.innerText = "⏸️ Pause";
        }
        if (shutterBtn) {
            shutterBtn.className = "w-16 h-16 rounded-2xl border-4 border-white bg-red-600 flex items-center justify-center shadow-xl transition";
        }

        camRecTimerInterval = setInterval(() => {
            if (isRecordingCamVideo && !isPausedCamVideo) {
                camRecSeconds++;
                if (timerEl) {
                    const m = String(Math.floor(camRecSeconds / 60)).padStart(2, '0');
                    const s = String(camRecSeconds % 60).padStart(2, '0');
                    timerEl.innerText = `${m}:${s}`;
                }
            }
        }, 1000);
    } else {
        shouldOpenEditorOnStop = true;
        if (camMediaRecorder && camMediaRecorder.state !== 'inactive') {
            camMediaRecorder.stop();
        }
    }
}

function openEditorWithImageData(dataUrl) {
    if (!ctx) return;
    currentMediaType = 'image';
    document.getElementById('media-caption').value = '';
    document.getElementById('editor-emoji-bar').classList.add('hidden');
    document.getElementById('media-editor-modal').classList.remove('hidden');
    const vid = document.getElementById('preview-video');
    if (vid) {
        vid.pause();
        vid.currentTime = 0;
        vid.src = '';
        vid.classList.add('hidden');
    }
    canvas.classList.remove('hidden');
    document.getElementById('brush-tools').classList.remove('hidden');
    updateBrushVisualState();
    baseImage.onload = () => {
        canvas.width = baseImage.width;
        canvas.height = baseImage.height;
        ctx.drawImage(baseImage, 0, 0);
    };
    baseImage.src = dataUrl;
}

function openEditorWithVideoUrl(videoUrl) {
    currentMediaType = 'video';
    currentVideoUrl = videoUrl;
    document.getElementById('media-caption').value = '';
    document.getElementById('editor-emoji-bar').classList.add('hidden');
    document.getElementById('media-editor-modal').classList.remove('hidden');
    if (canvas) canvas.classList.add('hidden');
    document.getElementById('brush-tools').classList.add('hidden');
    const vid = document.getElementById('preview-video');
    if (vid) {
        vid.src = currentVideoUrl;
        vid.currentTime = 0;
        vid.classList.remove('hidden');
    }
}

function updateChatActionButton() {
    const input = document.getElementById('chat-input');
    const micBtn = document.getElementById('mic-circle-btn');
    const sendBtn = document.getElementById('send-text-btn');
    if (!input || !micBtn || !sendBtn) return;

    if (input.value.trim().length > 0) {
        micBtn.classList.add('hidden');
        sendBtn.classList.remove('hidden');
    } else {
        sendBtn.classList.add('hidden');
        micBtn.classList.remove('hidden');
    }
}

let mediaRecorder = null;
let audioStream = null;
let audioChunks = [];
let voiceState = 'idle';
let recSeconds = 0;
let recTimerInterval = null;
let previewAudioObj = null;

async function ensureMicrophonePermission() {
    if (window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()) {
        try {
            if (window.Capacitor.Plugins && window.Capacitor.Plugins.Permissions) {
                const status = await window.Capacitor.Plugins.Permissions.query({ name: 'microphone' });
                if (status.state !== 'granted') {
                    const req = await window.Capacitor.Plugins.Permissions.request({ name: 'microphone' });
                    if (req.state !== 'granted') return false;
                }
            }
        } catch (err) {}
    }
    return true;
}

async function startVoiceStudio() {
    try {
        const permitted = await ensureMicrophonePermission();
        if (!permitted) {
            alert("Autorisez le microphone pour enregistrer.");
            return;
        }

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert("Enregistrement audio non pris en charge sur cet appareil.");
            return;
        }

        audioStream = await navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: true,
                noiseSuppression: true
            }
        });

        mediaRecorder = new MediaRecorder(audioStream);
        audioChunks = [];

        mediaRecorder.ondataavailable = e => { if (e.data && e.data.size > 0) audioChunks.push(e.data); };
        mediaRecorder.start(200);

        voiceState = 'recording';
        recSeconds = 0;
        updateTimerDisplay();
        recTimerInterval = setInterval(() => {
            if (voiceState === 'recording') { recSeconds++; updateTimerDisplay(); }
        }, 1000);

        document.getElementById('emoji-picker-bar').classList.add('hidden');
        document.getElementById('attach-menu-bar').classList.add('hidden');
        document.getElementById('normal-input-bar').classList.add('hidden');
        document.getElementById('voice-studio-bar').classList.remove('hidden');
        setUIStateRecording();
    } catch (err) {
        alert("Autorisez le microphone pour enregistrer.");
    }
}

function setUIStateRecording() {
    document.getElementById('rec-indicator').classList.add('rec-dot', 'bg-red-500');
    document.getElementById('rec-indicator').classList.remove('bg-yellow-500');
    document.getElementById('rec-status-text').innerText = "Enregistrement...";
    document.getElementById('pause-resume-btn').innerText = "⏸️ Pause";
    document.getElementById('preview-voice-btn').classList.add('hidden');
    document.getElementById('rec-badge-global').classList.add('hidden');
}

function setUIStatePaused() {
    document.getElementById('rec-indicator').classList.remove('rec-dot', 'bg-red-500');
    document.getElementById('rec-indicator').classList.add('bg-yellow-500');
    document.getElementById('rec-status-text').innerText = "En pause";
    document.getElementById('pause-resume-btn').innerText = "🎤 Reprendre";
    document.getElementById('preview-voice-btn').classList.remove('hidden');
}

function togglePauseResumeVoice() {
    if (!mediaRecorder) return;
    if (voiceState === 'recording') {
        if (typeof mediaRecorder.pause === 'function') mediaRecorder.pause();
        voiceState = 'paused';
        setUIStatePaused();
    } else if (voiceState === 'paused') {
        if (previewAudioObj) previewAudioObj.pause();
        if (typeof mediaRecorder.resume === 'function') mediaRecorder.resume();
        voiceState = 'recording';
        setUIStateRecording();
    }
}

function previewRecordedVoice() {
    if (audioChunks.length === 0) return;
    const blob = new Blob(audioChunks, { type: 'audio/webm' });
    const url = URL.createObjectURL(blob);
    if (previewAudioObj) previewAudioObj.pause();
    previewAudioObj = new Audio(url);
    previewAudioObj.play();
    const btn = document.getElementById('preview-voice-btn');
    btn.innerText = "🔊 Lecture...";
    previewAudioObj.onended = () => { btn.innerText = "▶️ Écouter"; };
}

function cancelVoiceStudio() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
    if (audioStream) audioStream.getTracks().forEach(t => t.stop());
    clearInterval(recTimerInterval);
    voiceState = 'idle';
    audioChunks = [];
    document.getElementById('voice-studio-bar').classList.add('hidden');
    document.getElementById('normal-input-bar').classList.remove('hidden');
    document.getElementById('rec-badge-global').classList.add('hidden');
    updateChatActionButton();
}

function sendFinalVoice() {
    if (!mediaRecorder) return;
    mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        appendVoiceMessage(url, document.getElementById('rec-timer').innerText);
        if (audioStream) audioStream.getTracks().forEach(t => t.stop());
    };
    if (mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
    } else if (audioChunks.length > 0) {
        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        appendVoiceMessage(url, document.getElementById('rec-timer').innerText);
        if (audioStream) audioStream.getTracks().forEach(t => t.stop());
    }
    clearInterval(recTimerInterval);
    voiceState = 'idle';
    document.getElementById('voice-studio-bar').classList.add('hidden');
    document.getElementById('normal-input-bar').classList.remove('hidden');
    document.getElementById('rec-badge-global').classList.add('hidden');
    updateChatActionButton();
}

function updateTimerDisplay() {
    const mins = String(Math.floor(recSeconds / 60)).padStart(2, '0');
    const secs = String(recSeconds % 60).padStart(2, '0');
    document.getElementById('rec-timer').innerText = `${mins}:${secs}`;
}

function appendVoiceMessage(audioUrl, duration) {
    const area = document.getElementById('messages-area');
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const div = document.createElement('div');
    div.className = 'flex justify-end';
    div.innerHTML = `
        <div class="bg-accent p-3 rounded-2xl max-w-[75%] shadow flex items-center space-x-3">
            <button type="button" data-audio-url="${audioUrl}" onclick="playAudio(this)" class="w-10 h-10 bg-black text-accent rounded-full flex items-center justify-center font-bold text-lg">▶️</button>
            <div>
                <div class="text-xs font-bold flex items-center space-x-2">
                    <span>Vocal 🎤</span>
                    <span class="opacity-75 font-mono">(${duration})</span>
                </div>
                <span class="text-[9px] opacity-75 block mt-1">${timeStr}</span>
            </div>
        </div>
    `;
    area.appendChild(div);
    area.scrollTop = area.scrollHeight;
}

function playAudio(btn, fallbackUrl) {
    const url = (btn && btn.dataset && btn.dataset.audioUrl) ? btn.dataset.audioUrl : fallbackUrl;
    if (!url) return;

    if (activeMessageAudio && activeMessageBtn === btn && activeMessageUrl === url) {
        if (!activeMessageAudio.paused) {
            activeMessageAudio.pause();
            btn.innerText = '▶️';
        } else {
            activeMessageAudio.play().catch(() => {});
            btn.innerText = '⏸️';
        }
        return;
    }

    if (activeMessageAudio) {
        activeMessageAudio.pause();
        activeMessageAudio.currentTime = 0;
    }
    if (activeMessageBtn && activeMessageBtn !== btn) {
        activeMessageBtn.innerText = '▶️';
    }

    const audio = new Audio(url);
    activeMessageAudio = audio;
    activeMessageBtn = btn;
    activeMessageUrl = url;

    btn.innerText = '⏸️';
    audio.onended = () => {
        btn.innerText = '▶️';
        if (activeMessageAudio === audio) {
            activeMessageAudio = null;
            activeMessageBtn = null;
            activeMessageUrl = '';
        }
    };
    audio.onerror = () => {
        btn.innerText = '▶️';
    };
    audio.play().catch(() => {
        btn.innerText = '▶️';
    });
}

function closeChat() {
    if (activeMessageAudio && !activeMessageAudio.paused) {
        activeMessageAudio.pause();
        if (activeMessageBtn) activeMessageBtn.innerText = '▶️';
    }
    if (voiceState === 'recording' && mediaRecorder && typeof mediaRecorder.pause === 'function') {
        mediaRecorder.pause();
        voiceState = 'paused';
        setUIStatePaused();
        document.getElementById('rec-badge-global').classList.remove('hidden');
    }
    document.getElementById('emoji-picker-bar').classList.add('hidden');
    document.getElementById('attach-menu-bar').classList.add('hidden');
    document.getElementById('chat-room').classList.add('hidden');
}

function openChat(name, status) {
    document.getElementById('chat-contact-name').innerText = name;
    document.getElementById('chat-contact-status').innerText = status;
    document.getElementById('chat-contact-avatar').innerText = name.charAt(0).toUpperCase();
    document.getElementById('chat-room').classList.remove('hidden');
    updateChatActionButton();
}

function switchTab(tabName) {
    ['chats', 'status', 'live'].forEach(t => {
        document.getElementById('tab-' + t).classList.add('hidden');
        document.getElementById('nav-' + t).classList.remove('text-accent');
        document.getElementById('nav-' + t).classList.add('text-gray-500');
    });
    document.getElementById('tab-' + tabName).classList.remove('hidden');
    document.getElementById('nav-' + tabName).classList.remove('text-gray-500');
    document.getElementById('nav-' + tabName).classList.add('text-accent');
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const area = document.getElementById('messages-area');
    if (!input.value.trim()) return;
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const div = document.createElement('div');
    div.className = 'flex justify-end';
    div.innerHTML = `<div class="bg-accent p-3 rounded-2xl max-w-[75%] text-sm font-semibold shadow"><p>${input.value}</p><span class="text-[9px] opacity-75 block text-right mt-1">${timeStr}</span></div>`;
    area.appendChild(div);
    input.value = '';
    updateChatActionButton();
    area.scrollTop = area.scrollHeight;
}

function addMyStatus(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (file.type && file.type.startsWith('video/')) {
        const vidUrl = URL.createObjectURL(file);
        const grid = document.getElementById('status-grid');
        const card = document.createElement('div');
        card.className = "h-44 rounded-2xl bg-gray-900 border-2 border-accent p-3 flex flex-col justify-between cursor-pointer overflow-hidden relative";
        card.onclick = () => openViewer('video', vidUrl, `${currentUser} (Statut Vidéo) • À l'instant`);
        card.innerHTML = `<video src="${vidUrl}" muted class="absolute inset-0 w-full h-full object-cover opacity-70"></video><div class="relative z-10 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold">${currentUser.charAt(0).toUpperCase()}</div><div class="relative z-10"><p class="text-xs font-bold text-white">Statut Vidéo ▶️</p><span class="text-[10px] text-accent">À l'instant</span></div>`;
        grid.prepend(card);
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const grid = document.getElementById('status-grid');
        const card = document.createElement('div');
        card.className = "h-44 rounded-2xl bg-cover bg-center border-2 border-accent p-3 flex flex-col justify-between cursor-pointer";
        card.style.backgroundImage = `linear-gradient(transparent, rgba(0,0,0,0.8)), url('${e.target.result}')`;
        card.onclick = () => openViewer('image', e.target.result, `${currentUser} (Mon Statut) • À l'instant`);
        card.innerHTML = `<div class="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-xs font-bold">${currentUser.charAt(0).toUpperCase()}</div><div><p class="text-xs font-bold text-white">Mon Statut</p><span class="text-[10px] text-accent">À l'instant</span></div>`;
        grid.prepend(card);
    };
    reader.readAsDataURL(file);
}

let liveStreamObj = null;
async function startLiveStream(isHost) {
    document.getElementById('live-stream-modal').classList.remove('hidden');
    if (isHost) {
        try {
            liveStreamObj = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: true });
            document.getElementById('live-camera-feed').srcObject = liveStreamObj;
        } catch (e) {
            alert("Autorisez la caméra pour lancer le Live.");
        }
    }
}

function stopLiveStream() {
    if (liveStreamObj) liveStreamObj.getTracks().forEach(t => t.stop());
    document.getElementById('live-stream-modal').classList.add('hidden');
}

function sendLiveComment() {
    const inp = document.getElementById('live-chat-input');
    if (!inp.value.trim()) return;
    const box = document.getElementById('live-comments');
    box.innerHTML += `<p class="bg-black/40 px-3 py-1.5 rounded-full inline-block"><span class="text-accent font-bold">${currentUser} :</span> ${inp.value}</p><br>`;
    inp.value = '';
    box.scrollTop = box.scrollHeight;
}

function changeMainWallpaper(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = e => {
            applyMainWallpaperData(e.target.result);
            try {
                localStorage.setItem('lekema_main_bg_v1', e.target.result);
            } catch (err) {}
        };
        reader.readAsDataURL(file);
    }
}

function changeChatWallpaper(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = e => { document.getElementById('messages-area').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('${e.target.result}')`; };
        reader.readAsDataURL(file);
    }
}

const canvas = document.getElementById('edit-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

function prepareMediaSend(event) {
    const file = event.target.files[0];
    if (!file) return;

    const isVideo = (file.type && file.type.startsWith('video/')) || /\.(mp4|mov|webm|mkv|3gp)$/i.test(file.name || '');
    const isImage = (file.type && file.type.startsWith('image/')) || /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name || '');

    if (!isVideo && !isImage) {
        const area = document.getElementById('messages-area');
        const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const div = document.createElement('div');
        div.className = 'flex justify-end';
        div.innerHTML = `<div class="bg-accent p-3 rounded-2xl max-w-[75%] text-sm font-semibold shadow"><p>📄 Fichier : ${file.name}</p><span class="text-[9px] opacity-75 block text-right mt-1">${timeStr}</span></div>`;
        area.appendChild(div);
        area.scrollTop = area.scrollHeight;
        event.target.value = '';
        return;
    }

    if (isVideo) {
        const vidUrl = URL.createObjectURL(file);
        openEditorWithVideoUrl(vidUrl);
        event.target.value = '';
        return;
    }

    if (!ctx) return;
    const reader = new FileReader();
    reader.onload = e => {
        openEditorWithImageData(e.target.result);
    };
    reader.readAsDataURL(file);
    event.target.value = '';
}

function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
        x: (clientX - rect.left) * (canvas.width / rect.width),
        y: (clientY - rect.top) * (canvas.height / rect.height)
    };
}

if (canvas && ctx) {
    canvas.addEventListener('touchstart', e => { isDrawing = true; const pos = getPos(e); ctx.beginPath(); ctx.moveTo(pos.x, pos.y); });
    canvas.addEventListener('touchmove', e => {
        if (!isDrawing) return;
        e.preventDefault();
        const pos = getPos(e);
        ctx.lineWidth = Math.max(12, canvas.width / 35);
        ctx.lineCap = 'round';
        ctx.strokeStyle = brushColor;
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    });
    canvas.addEventListener('touchend', () => { isDrawing = false; });
}

function updateBrushVisualState() {
    const map = [
        { color: '#000000', id: 'color-btn-black' },
        { color: '#ef4444', id: 'color-btn-red' },
        { color: '#facc15', id: 'color-btn-yellow' }
    ];
    map.forEach(item => {
        const btn = document.getElementById(item.id);
        if (!btn) return;
        if (brushColor.toLowerCase() === item.color.toLowerCase()) {
            btn.classList.add('ring-2', 'ring-white', 'scale-125', 'opacity-100');
            btn.classList.remove('opacity-80');
        } else {
            btn.classList.remove('ring-2', 'ring-white', 'scale-125', 'opacity-100');
            btn.classList.add('opacity-80');
        }
    });
}

function setBrushColor(c) {
    brushColor = c;
    updateBrushVisualState();
}

function clearCanvas() {
    if (ctx && baseImage.complete && baseImage.naturalWidth > 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseImage, 0, 0);
    }
}

function stopAndResetEditorVideo() {
    const vid = document.getElementById('preview-video');
    if (vid) {
        vid.pause();
        vid.currentTime = 0;
        vid.removeAttribute('src');
        vid.load();
        vid.classList.add('hidden');
    }
}

function closeMediaEditor() {
    stopAndResetEditorVideo();
    const emojiBar = document.getElementById('editor-emoji-bar');
    if (emojiBar) emojiBar.classList.add('hidden');
    document.getElementById('media-editor-modal').classList.add('hidden');
}

function confirmMediaSend() {
    const caption = document.getElementById('media-caption').value.trim();
    const area = document.getElementById('messages-area');
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const div = document.createElement('div');
    div.className = 'flex justify-end';
    if (currentMediaType === 'image' && canvas) {
        const url = canvas.toDataURL('image/jpeg', 0.85);
        div.innerHTML = `<div onclick="openViewer('image', '${url}', '${caption.replace(/'/g, "\\'")}')" class="bg-accent p-1.5 rounded-2xl max-w-[70%] shadow cursor-pointer"><img src="${url}" class="rounded-xl max-h-60 object-cover">${caption ? `<p class="text-xs font-semibold px-1.5 pt-1.5">${caption}</p>` : ''}<span class="text-[9px] opacity-80 block text-right mt-1 px-1">${timeStr}</span></div>`;
    } else {
        const videoToSend = currentVideoUrl;
        div.innerHTML = `<div onclick="openViewer('video', '${videoToSend}', '${caption.replace(/'/g, "\\'")}')" class="bg-accent p-1.5 rounded-2xl max-w-[70%] shadow cursor-pointer relative"><video src="${videoToSend}" class="rounded-xl max-h-60 object-cover"></video><div class="absolute inset-0 flex items-center justify-center"><span class="bg-black/60 text-white rounded-full p-3 text-xl">▶️</span></div>${caption ? `<p class="text-xs font-semibold px-1.5 pt-1.5">${caption}</p>` : ''}<span class="text-[9px] opacity-80 block text-right mt-1 px-1">${timeStr}</span></div>`;
    }
    area.appendChild(div);
    area.scrollTop = area.scrollHeight;
    closeMediaEditor();
}

function openViewer(type, src, caption) {
    const img = document.getElementById('viewer-img');
    const vid = document.getElementById('viewer-vid');
    document.getElementById('viewer-caption').innerText = caption || '';
    if (type === 'image') {
        vid.classList.add('hidden');
        vid.pause();
        vid.currentTime = 0;
        img.src = src;
        img.classList.remove('hidden');
    } else {
        img.classList.add('hidden');
        vid.src = src;
        vid.currentTime = 0;
        vid.classList.remove('hidden');
        vid.play().catch(() => {});
    }
    document.getElementById('fullscreen-viewer').classList.remove('hidden');
}

function closeViewer() {
    const vid = document.getElementById('viewer-vid');
    if (vid) {
        vid.pause();
        vid.currentTime = 0;
        vid.removeAttribute('src');
        vid.load();
    }
    document.getElementById('fullscreen-viewer').classList.add('hidden');
}

function openThemeModal() { document.getElementById('theme-modal').classList.remove('hidden'); }
function closeThemeModal() { document.getElementById('theme-modal').classList.add('hidden'); }

function applyTheme(bgMain, bgCard, accent, accentText, textMain, persist = true) {
    document.documentElement.style.setProperty('--bg-main', bgMain);
    document.documentElement.style.setProperty('--bg-card', bgCard);
    document.documentElement.style.setProperty('--accent-color', accent);
    document.documentElement.style.setProperty('--accent-text', accentText);
    document.documentElement.style.setProperty('--text-main', textMain);
    if (persist && window.LekemaStorage) {
        LekemaStorage.saveTheme({ bgMain, bgCard, accent, accentText, textMain });
    }
    closeThemeModal();
}
