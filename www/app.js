const EMAILJS_CONFIG = {
    ENABLED: false,
    PUBLIC_KEY: "TA_CLE_PUBLIQUE_EMAILJS",
    SERVICE_ID: "TON_SERVICE_ID",
    TEMPLATE_ID: "TON_TEMPLATE_ID"
};

let currentUser = "Moi";
let currentMediaType = 'image';
let currentVideoUrl = '';
let baseImage = new Image();
let isDrawing = false;
let brushColor = '#000000';
let pendingAuth = null;

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
    document.getElementById('header-avatar').innerText = currentUser.charAt(0).toUpperCase();
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
}

function logoutUser() {
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

    const themeModal = document.getElementById('theme-modal');
    if (themeModal && !themeModal.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        closeThemeModal();
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

let mediaRecorder = null;
let audioStream = null;
let audioChunks = [];
let voiceState = 'idle';
let recSeconds = 0;
let recTimerInterval = null;
let previewAudioObj = null;

async function startVoiceStudio() {
    try {
        audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(audioStream);
        audioChunks = [];

        mediaRecorder.ondataavailable = e => { if (e.data.size > 0) audioChunks.push(e.data); };
        mediaRecorder.start(200);

        voiceState = 'recording';
        recSeconds = 0;
        updateTimerDisplay();
        recTimerInterval = setInterval(() => {
            if (voiceState === 'recording') { recSeconds++; updateTimerDisplay(); }
        }, 1000);

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
        mediaRecorder.pause();
        voiceState = 'paused';
        setUIStatePaused();
    } else if (voiceState === 'paused') {
        if (previewAudioObj) previewAudioObj.pause();
        mediaRecorder.resume();
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
}

function sendFinalVoice() {
    if (!mediaRecorder) return;
    mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        appendVoiceMessage(url, document.getElementById('rec-timer').innerText);
        if (audioStream) audioStream.getTracks().forEach(t => t.stop());
    };
    mediaRecorder.stop();
    clearInterval(recTimerInterval);
    voiceState = 'idle';
    document.getElementById('voice-studio-bar').classList.add('hidden');
    document.getElementById('normal-input-bar').classList.remove('hidden');
    document.getElementById('rec-badge-global').classList.add('hidden');
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
            <button type="button" onclick="playAudio(this, '${audioUrl}')" class="w-10 h-10 bg-black text-accent rounded-full flex items-center justify-center font-bold text-lg">▶️</button>
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

function playAudio(btn, url) {
    const audio = new Audio(url);
    audio.play();
    btn.innerText = '⏸️';
    audio.onended = () => { btn.innerText = '▶️'; };
}

function closeChat() {
    if (voiceState === 'recording' && mediaRecorder) {
        mediaRecorder.pause();
        voiceState = 'paused';
        setUIStatePaused();
        document.getElementById('rec-badge-global').classList.remove('hidden');
    }
    document.getElementById('chat-room').classList.add('hidden');
}

function openChat(name, status) {
    document.getElementById('chat-contact-name').innerText = name;
    document.getElementById('chat-contact-status').innerText = status;
    document.getElementById('chat-contact-avatar').innerText = name.charAt(0).toUpperCase();
    document.getElementById('chat-room').classList.remove('hidden');
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
    area.scrollTop = area.scrollHeight;
}

function addMyStatus(event) {
    const file = event.target.files[0];
    if (!file) return;
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
    if (!file || !ctx) return;
    document.getElementById('media-caption').value = '';
    document.getElementById('media-editor-modal').classList.remove('hidden');
    if (file.type.startsWith('video/')) {
        currentMediaType = 'video';
        currentVideoUrl = URL.createObjectURL(file);
        canvas.classList.add('hidden');
        document.getElementById('brush-tools').classList.add('hidden');
        const vid = document.getElementById('preview-video');
        vid.src = currentVideoUrl;
        vid.classList.remove('hidden');
    } else {
        currentMediaType = 'image';
        document.getElementById('preview-video').classList.add('hidden');
        canvas.classList.remove('hidden');
        document.getElementById('brush-tools').classList.remove('hidden');
        const reader = new FileReader();
        reader.onload = e => {
            baseImage.onload = () => {
                canvas.width = baseImage.width;
                canvas.height = baseImage.height;
                ctx.drawImage(baseImage, 0, 0);
            };
            baseImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
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

function setBrushColor(c) { brushColor = c; }
function clearCanvas() { if (ctx) ctx.drawImage(baseImage, 0, 0); }
function closeMediaEditor() { document.getElementById('media-editor-modal').classList.add('hidden'); }

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
        div.innerHTML = `<div onclick="openViewer('video', '${currentVideoUrl}', '${caption.replace(/'/g, "\\'")}')" class="bg-accent p-1.5 rounded-2xl max-w-[70%] shadow cursor-pointer relative"><video src="${currentVideoUrl}" class="rounded-xl max-h-60 object-cover"></video><div class="absolute inset-0 flex items-center justify-center"><span class="bg-black/60 text-white rounded-full p-3 text-xl">▶️</span></div>${caption ? `<p class="text-xs font-semibold px-1.5 pt-1.5">${caption}</p>` : ''}<span class="text-[9px] opacity-80 block text-right mt-1 px-1">${timeStr}</span></div>`;
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
        vid.classList.add('hidden'); vid.pause();
        img.src = src; img.classList.remove('hidden');
    } else {
        img.classList.add('hidden');
        vid.src = src; vid.classList.remove('hidden'); vid.play();
    }
    document.getElementById('fullscreen-viewer').classList.remove('hidden');
}

function closeViewer() {
    document.getElementById('viewer-vid').pause();
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
