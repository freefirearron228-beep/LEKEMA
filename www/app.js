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

const DEFAULT_PROFILE_PHOTO = "./file_00000000227881f48510b7ce45188ed5.png";
const PROFILE_STORAGE_KEY = "lekema_user_profile_v1";
const PRIVACY_STORAGE_KEY = "lekema_privacy_settings_v1";
const CONTACTS_STORAGE_KEY = "lekema_contacts_list_v1";
const CALLS_STORAGE_KEY = "lekema_call_history_v1";

let currentEmojiCategory = 'faces';
let currentUser = "Moi";
let currentPhone = "";
let currentMediaType = 'image';
let currentVideoUrl = '';
let currentVideoSegments = [];
let baseImage = new Image();
let isDrawing = false;
let brushColor = '#000000';
let pendingAuth = null;

let userProfile = {
    name: "Malik",
    info: "Disponible sur LEKEMA",
    handle: "@malik",
    phone: "",
    links: "",
    photo: DEFAULT_PROFILE_PHOTO
};

let privacySettings = {
    onlinePresence: true,
    readReceipts: true
};

let contactsList = [
    { id: "sarah", name: "Sarah K.", status: "En ligne", note: "Appuie pour discuter..." }
];

let callHistoryList = [
    { id: "call_init_1", contact: "Sarah K.", type: "video", direction: "outgoing", time: "Aujourd'hui, 19:40", duration: "02:15" }
];

let activeCallState = {
    active: false,
    contact: "",
    type: "voice",
    muted: false,
    speaker: false,
    facingMode: "user",
    seconds: 0,
    timerInterval: null,
    connectTimeout: null,
    stream: null
};

let activeMessageAudio = null;
let activeMessageBtn = null;
let activeMessageUrl = '';

let viewerScale = 1;
let viewerTranslateX = 0;
let viewerTranslateY = 0;
let viewerPinchStartDist = 0;
let viewerPinchStartScale = 1;
let viewerPanStartX = 0;
let viewerPanStartY = 0;
let viewerIsPanning = false;
let viewerLastTapTime = 0;

function loadProfileData() {
    try {
        const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            userProfile = Object.assign({}, userProfile, parsed || {});
        }
    } catch (e) {}

    try {
        const rawPriv = localStorage.getItem(PRIVACY_STORAGE_KEY);
        if (rawPriv) {
            const parsedPriv = JSON.parse(rawPriv);
            privacySettings = Object.assign({}, privacySettings, parsedPriv || {});
        }
    } catch (e) {}

    try {
        const rawContacts = localStorage.getItem(CONTACTS_STORAGE_KEY);
        if (rawContacts) {
            const parsedContacts = JSON.parse(rawContacts);
            if (Array.isArray(parsedContacts) && parsedContacts.length > 0) {
                contactsList = parsedContacts;
            }
        }
    } catch (e) {}

    try {
        const rawCalls = localStorage.getItem(CALLS_STORAGE_KEY);
        if (rawCalls) {
            const parsedCalls = JSON.parse(rawCalls);
            if (Array.isArray(parsedCalls)) {
                callHistoryList = parsedCalls;
            }
        }
    } catch (e) {}
}

function persistProfileData() {
    try {
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(userProfile));
    } catch (e) {}
}

function persistPrivacyData() {
    try {
        localStorage.setItem(PRIVACY_STORAGE_KEY, JSON.stringify(privacySettings));
    } catch (e) {}
}

function persistContactsData() {
    try {
        localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contactsList));
    } catch (e) {}
}

function persistCallHistoryData() {
    try {
        localStorage.setItem(CALLS_STORAGE_KEY, JSON.stringify(callHistoryList));
    } catch (e) {}
}

function toggleHeaderMoreMenu() {
    const menu = document.getElementById('header-more-menu');
    if (menu) menu.classList.toggle('hidden');
}

function closeHeaderMoreMenu() {
    const menu = document.getElementById('header-more-menu');
    if (menu) menu.classList.add('hidden');
}

function syncProfileAndPrivacyUI() {
    const photoSrc = userProfile.photo || DEFAULT_PROFILE_PHOTO;
    const centerTitle = document.getElementById('header-center-title');
    if (centerTitle) centerTitle.innerText = "LEKEMA";

    const pAvatarImg = document.getElementById('profile-page-avatar-img');
    const pName = document.getElementById('profile-name-input');
    const pInfo = document.getElementById('profile-info-input');
    const pHandle = document.getElementById('profile-handle-input');
    const pPhone = document.getElementById('profile-phone-input');
    const pLinks = document.getElementById('profile-links-input');

    if (pAvatarImg) pAvatarImg.src = photoSrc;
    if (pName) pName.value = userProfile.name || "";
    if (pInfo) pInfo.value = userProfile.info || "";
    if (pHandle) pHandle.value = userProfile.handle || "";
    if (pPhone) pPhone.value = userProfile.phone || currentPhone || "";
    if (pLinks) pLinks.value = userProfile.links || "";

    const onlineCheck = document.getElementById('setting-online-presence');
    const receiptsCheck = document.getElementById('setting-read-receipts');
    if (onlineCheck) onlineCheck.checked = Boolean(privacySettings.onlinePresence);
    if (receiptsCheck) receiptsCheck.checked = Boolean(privacySettings.readReceipts);

    renderContactsLists();
    renderCallHistoryList();
}

function openProfilePage() {
    closeHeaderMoreMenu();
    syncProfileAndPrivacyUI();
    const page = document.getElementById('profile-page');
    if (page) page.classList.remove('hidden');
}

function closeProfilePage() {
    const page = document.getElementById('profile-page');
    if (page) page.classList.add('hidden');
}

function changeProfilePhoto(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        userProfile.photo = e.target.result;
        persistProfileData();
        syncProfileAndPrivacyUI();
    };
    reader.readAsDataURL(file);
    event.target.value = '';
}

function saveProfileDetails() {
    const pName = document.getElementById('profile-name-input');
    const pInfo = document.getElementById('profile-info-input');
    const pHandle = document.getElementById('profile-handle-input');
    const pPhone = document.getElementById('profile-phone-input');
    const pLinks = document.getElementById('profile-links-input');

    if (pName && pName.value.trim()) {
        userProfile.name = pName.value.trim();
        currentUser = userProfile.name;
    }
    if (pInfo) userProfile.info = pInfo.value.trim();
    if (pHandle) {
        const rawHandle = pHandle.value.trim();
        userProfile.handle = rawHandle ? (rawHandle.startsWith('@') ? rawHandle : '@' + rawHandle) : "";
    }
    if (pPhone) {
        userProfile.phone = pPhone.value.trim();
        if (userProfile.phone) currentPhone = userProfile.phone;
    }
    if (pLinks) userProfile.links = pLinks.value.trim();

    persistProfileData();
    syncProfileAndPrivacyUI();

    const feedback = document.getElementById('profile-save-feedback');
    if (feedback) {
        feedback.classList.remove('hidden');
        setTimeout(() => feedback.classList.add('hidden'), 1800);
    }
}

function openSettingsPage() {
    closeHeaderMoreMenu();
    syncProfileAndPrivacyUI();
    const page = document.getElementById('settings-page');
    if (page) page.classList.remove('hidden');
}

function closeSettingsPage() {
    const page = document.getElementById('settings-page');
    if (page) page.classList.add('hidden');
}

function savePrivacySettings() {
    const onlineCheck = document.getElementById('setting-online-presence');
    const receiptsCheck = document.getElementById('setting-read-receipts');
    privacySettings.onlinePresence = onlineCheck ? Boolean(onlineCheck.checked) : true;
    privacySettings.readReceipts = receiptsCheck ? Boolean(receiptsCheck.checked) : true;
    persistPrivacyData();
    syncProfileAndPrivacyUI();
}

function openContactsModal() {
    renderContactsLists();
    const modal = document.getElementById('contacts-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeContactsModal() {
    const modal = document.getElementById('contacts-modal');
    if (modal) modal.classList.add('hidden');
}

function addNewContact() {
    const inp = document.getElementById('new-contact-name');
    if (!inp) return;
    const val = inp.value.trim();
    if (!val) return;
    contactsList.unshift({
        id: "c_" + Date.now(),
        name: val,
        status: "En ligne",
        note: "Appuie pour discuter..."
    });
    persistContactsData();
    inp.value = '';
    renderContactsLists();
}

function renderContactsLists() {
    const chatListEl = document.getElementById('contacts-chat-list');
    const pickerListEl = document.getElementById('contacts-picker-list');

    if (chatListEl) {
        chatListEl.innerHTML = contactsList.map(c => {
            const safeName = c.name.replace(/'/g, "\\'");
            const initial = (c.name.replace(/^@/, '').charAt(0) || 'C').toUpperCase();
            return `
                <div onclick="openChat('${safeName}', '${c.status || 'En ligne'}')" class="bg-card border border-gray-800 rounded-2xl p-3.5 flex items-center space-x-3 cursor-pointer">
                    <div class="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white shrink-0">${initial}</div>
                    <div class="flex-1 min-w-0">
                        <div class="flex justify-between items-center">
                            <p class="font-bold text-sm truncate">${c.name}</p>
                            <span class="text-[10px] text-gray-400">Maintenant</span>
                        </div>
                        <p class="text-xs text-gray-400 truncate">${c.note || 'Appuie pour discuter...'}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    if (pickerListEl) {
        pickerListEl.innerHTML = contactsList.map(c => {
            const safeName = c.name.replace(/'/g, "\\'");
            const initial = (c.name.replace(/^@/, '').charAt(0) || 'C').toUpperCase();
            return `
                <div class="w-full bg-card border border-gray-800 rounded-2xl p-3 flex items-center justify-between space-x-2">
                    <button type="button" onclick="closeContactsModal(); openChat('${safeName}', '${c.status || 'En ligne'}');" class="flex items-center space-x-3 text-left flex-1 min-w-0">
                        <div class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white shrink-0">${initial}</div>
                        <div class="flex-1 min-w-0">
                            <p class="font-bold text-sm text-white truncate">${c.name}</p>
                            <p class="text-xs text-gray-400">${c.status || 'En ligne'}</p>
                        </div>
                    </button>
                    <div class="flex items-center space-x-1.5 shrink-0">
                        <button type="button" onclick="closeContactsModal(); startCall('${safeName}', 'voice');" class="w-9 h-9 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center text-sm" aria-label="Appel vocal">📞</button>
                        <button type="button" onclick="closeContactsModal(); startCall('${safeName}', 'video');" class="w-9 h-9 rounded-full bg-black/50 border border-gray-700 flex items-center justify-center text-sm" aria-label="Appel vidéo">📹</button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function renderCallHistoryList() {
    const listEl = document.getElementById('call-history-list');
    if (!listEl) return;

    if (!callHistoryList || callHistoryList.length === 0) {
        listEl.innerHTML = `<p class="text-xs text-gray-400 text-center py-8">Aucun appel récent. Appuie sur 📞 ou 📹 dans une discussion.</p>`;
        return;
    }

    listEl.innerHTML = callHistoryList.map(item => {
        const safeName = (item.contact || 'Contact').replace(/'/g, "\\'");
        const initial = ((item.contact || 'C').replace(/^@/, '').charAt(0) || 'C').toUpperCase();
        const isVideo = item.type === 'video';
        const callIcon = isVideo ? '📹' : '📞';
        const typeLabel = isVideo ? 'Appel vidéo' : 'Appel vocal';
        return `
            <div class="bg-card border border-gray-800 rounded-2xl p-3.5 flex items-center justify-between space-x-3">
                <div class="flex items-center space-x-3 min-w-0">
                    <div class="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white shrink-0">${initial}</div>
                    <div class="min-w-0">
                        <p class="font-bold text-sm truncate">${item.contact}</p>
                        <p class="text-xs text-gray-400 truncate">↗️ ${typeLabel} • ${item.time}${item.duration ? ' (' + item.duration + ')' : ''}</p>
                    </div>
                </div>
                <button type="button" onclick="startCall('${safeName}', '${isVideo ? 'video' : 'voice'}')" class="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-base shrink-0 active:scale-95 transition" aria-label="Rappeler">
                    ${callIcon}
                </button>
            </div>
        `;
    }).join('');
}

function formatCallDuration(secs) {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
}

function startCallWithCurrentChat(type) {
    const nameEl = document.getElementById('chat-contact-name');
    const contactName = nameEl ? nameEl.innerText.trim() : 'Contact';
    startCall(contactName, type);
}

async function startCall(contactName, type) {
    if (activeCallState.active) return;

    const callType = type === 'video' ? 'video' : 'voice';
    activeCallState.active = true;
    activeCallState.contact = contactName || 'Contact';
    activeCallState.type = callType;
    activeCallState.muted = false;
    activeCallState.speaker = callType === 'video';
    activeCallState.facingMode = 'user';
    activeCallState.seconds = 0;

    const modal = document.getElementById('call-screen-modal');
    const badge = document.getElementById('call-type-badge');
    const timerEl = document.getElementById('call-timer-display');
    const avatarEl = document.getElementById('call-contact-avatar');
    const nameEl = document.getElementById('call-contact-name');
    const subEl = document.getElementById('call-status-subtitle');
    const vidEl = document.getElementById('call-video-preview');
    const vidOverlay = document.getElementById('call-video-overlay');
    const switchCamBtn = document.getElementById('call-switch-cam-btn');

    if (badge) badge.innerText = callType === 'video' ? 'APPEL VIDÉO' : 'APPEL VOCAL';
    if (timerEl) timerEl.innerText = 'Appel en cours...';
    if (avatarEl) avatarEl.innerText = (activeCallState.contact.replace(/^@/, '').charAt(0) || 'C').toUpperCase();
    if (nameEl) nameEl.innerText = activeCallState.contact;
    if (subEl) subEl.innerText = 'Sonnerie...';

    updateCallControlsUI();

    if (callType === 'video') {
        if (switchCamBtn) switchCamBtn.classList.remove('hidden');
        if (vidOverlay) vidOverlay.classList.remove('hidden');
        await startCallMediaStream();
    } else {
        if (switchCamBtn) switchCamBtn.classList.add('hidden');
        if (vidEl) vidEl.classList.add('hidden');
        if (vidOverlay) vidOverlay.classList.add('hidden');
        try {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                activeCallState.stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
            }
        } catch (e) {}
    }

    if (modal) modal.classList.remove('hidden');

    activeCallState.connectTimeout = setTimeout(() => {
        if (!activeCallState.active) return;
        if (subEl) subEl.innerText = 'Connecté';
        if (timerEl) timerEl.innerText = '00:00';
        activeCallState.timerInterval = setInterval(() => {
            if (!activeCallState.active) return;
            activeCallState.seconds++;
            if (timerEl) timerEl.innerText = formatCallDuration(activeCallState.seconds);
        }, 1000);
    }, 1500);
}

async function startCallMediaStream() {
    if (activeCallState.stream) {
        activeCallState.stream.getTracks().forEach(t => t.stop());
        activeCallState.stream = null;
    }
    const vidEl = document.getElementById('call-video-preview');
    try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            activeCallState.stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: { ideal: activeCallState.facingMode } },
                audio: true
            });
            if (vidEl) {
                vidEl.srcObject = activeCallState.stream;
                vidEl.style.transform = activeCallState.facingMode === 'user' ? 'scaleX(-1)' : 'scaleX(1)';
                vidEl.classList.remove('hidden');
                vidEl.play().catch(() => {});
            }
        }
    } catch (e) {
        if (vidEl) vidEl.classList.add('hidden');
    }
}

async function switchCallCamera() {
    if (!activeCallState.active || activeCallState.type !== 'video') return;
    activeCallState.facingMode = activeCallState.facingMode === 'user' ? 'environment' : 'user';
    await startCallMediaStream();
    if (activeCallState.stream) {
        activeCallState.stream.getAudioTracks().forEach(t => { t.enabled = !activeCallState.muted; });
    }
}

function toggleCallMute() {
    if (!activeCallState.active) return;
    activeCallState.muted = !activeCallState.muted;
    if (activeCallState.stream) {
        activeCallState.stream.getAudioTracks().forEach(t => { t.enabled = !activeCallState.muted; });
    }
    updateCallControlsUI();
}

function toggleCallSpeaker() {
    if (!activeCallState.active) return;
    activeCallState.speaker = !activeCallState.speaker;
    updateCallControlsUI();
}

function updateCallControlsUI() {
    const muteIcon = document.getElementById('call-mute-icon');
    const speakerIcon = document.getElementById('call-speaker-icon');

    if (muteIcon) {
        muteIcon.className = activeCallState.muted
            ? "w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl"
            : "w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-xl";
        muteIcon.innerText = activeCallState.muted ? '🔇' : '🎙️';
    }
    if (speakerIcon) {
        speakerIcon.className = activeCallState.speaker
            ? "w-12 h-12 rounded-full bg-accent flex items-center justify-center text-xl"
            : "w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-xl";
    }
}

function endActiveCall() {
    if (!activeCallState.active) return;

    if (activeCallState.connectTimeout) {
        clearTimeout(activeCallState.connectTimeout);
        activeCallState.connectTimeout = null;
    }
    if (activeCallState.timerInterval) {
        clearInterval(activeCallState.timerInterval);
        activeCallState.timerInterval = null;
    }
    if (activeCallState.stream) {
        activeCallState.stream.getTracks().forEach(t => t.stop());
        activeCallState.stream = null;
    }

    const vidEl = document.getElementById('call-video-preview');
    if (vidEl) {
        vidEl.pause();
        vidEl.srcObject = null;
        vidEl.classList.add('hidden');
    }

    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const durText = activeCallState.seconds > 0 ? formatCallDuration(activeCallState.seconds) : 'Sans réponse';

    callHistoryList.unshift({
        id: "call_" + Date.now(),
        contact: activeCallState.contact,
        type: activeCallState.type,
        direction: "outgoing",
        time: `Aujourd'hui, ${nowTime}`,
        duration: durText
    });
    persistCallHistoryData();
    renderCallHistoryList();

    const chatRoom = document.getElementById('chat-room');
    if (chatRoom && !chatRoom.classList.contains('hidden')) {
        const area = document.getElementById('messages-area');
        if (area) {
            const label = activeCallState.type === 'video' ? '📹 Appel vidéo' : '📞 Appel vocal';
            const div = document.createElement('div');
            div.className = 'flex justify-center';
            div.innerHTML = `<span class="bg-black/60 border border-gray-800 text-gray-300 text-[11px] px-3 py-1 rounded-full">${label} • ${durText}</span>`;
            area.appendChild(div);
            area.scrollTop = area.scrollHeight;
        }
    }

    activeCallState.active = false;
    activeCallState.seconds = 0;

    const modal = document.getElementById('call-screen-modal');
    if (modal) modal.classList.add('hidden');
}

function getReceiptBadgeHtml(receiptId) {
    if (!privacySettings.readReceipts) {
        return `<span id="${receiptId}" class="text-[10px] font-bold text-black/75">✓</span>`;
    }
    return `<span id="${receiptId}" class="text-[10px] font-bold text-black/65">✓</span>`;
}

function scheduleMessageReceipts(receiptId) {
    if (!privacySettings.readReceipts) return;
    setTimeout(() => {
        const el = document.getElementById(receiptId);
        if (el) {
            el.innerText = "✓✓";
            el.className = "text-[10px] font-bold text-black/85";
        }
    }, 600);
    setTimeout(() => {
        const el = document.getElementById(receiptId);
        if (el) {
            el.innerText = "✓✓";
            el.className = "text-[10px] font-extrabold text-sky-900";
        }
    }, 1600);
}

function showFieldError(id, message) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerText = message;
    el.classList.remove('hidden');
}

function clearAuthErrors() {
    ['username-error', 'phone-error', 'otp-error'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
}

function normalizePhone(rawPhone) {
    return String(rawPhone || '').replace(/\s+/g, '').trim();
}

function requestPhoneCode() {
    clearAuthErrors();
    const usernameInput = document.getElementById('username-input');
    const phoneInput = document.getElementById('phone-input');
    const username = usernameInput ? usernameInput.value.trim() : '';
    const phone = normalizePhone(phoneInput ? phoneInput.value : '');

    const pseudoRegex = /^[a-zA-Z0-9À-ÿ ._-]{3,24}$/;
    if (!pseudoRegex.test(username)) {
        showFieldError('username-error', "Pseudo invalide (3 à 24 caractères requis).");
        return;
    }

    const phoneRegex = /^\+?[0-9]{7,16}$/;
    if (!phoneRegex.test(phone)) {
        showFieldError('phone-error', "Entrez un numéro de téléphone valide (ex: +228 90 00 00 00).");
        return;
    }

    if (window.LekemaStorage && typeof LekemaStorage.isPseudoTaken === 'function') {
        if (LekemaStorage.isPseudoTaken(username, phone)) {
            showFieldError('username-error', "Ce pseudo est déjà pris par un autre numéro.");
            return;
        }
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    pendingAuth = {
        username,
        phone,
        code,
        expiresAt: Date.now() + 5 * 60 * 1000
    };

    const targetEl = document.getElementById('otp-target-phone');
    const otpInput = document.getElementById('otp-input');
    const stepCred = document.getElementById('step-credentials');
    const stepOtp = document.getElementById('step-otp');

    if (targetEl) targetEl.innerText = `${phone} (Code : ${code})`;
    if (otpInput) otpInput.value = '';
    if (stepCred) stepCred.classList.add('hidden');
    if (stepOtp) stepOtp.classList.remove('hidden');
}

function verifyPhoneCode() {
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
        showFieldError('otp-error', "Code incorrect. Réessayez.");
        return;
    }

    const sessionData = {
        username: pendingAuth.username,
        phone: pendingAuth.phone,
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
    currentPhone = sessionData.phone || "";
    if (!userProfile.name || userProfile.name === "Malik") {
        userProfile.name = currentUser;
    }
    if (currentPhone) {
        userProfile.phone = currentPhone;
    }
    persistProfileData();
    syncProfileAndPrivacyUI();

    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
}

function logoutUser() {
    closeProfilePage();
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

window.handleAndroidBackButton = function handleAndroidBackButton(e) {
    if (activeCallState.active) {
        if (e && e.preventDefault) e.preventDefault();
        endActiveCall();
        return true;
    }

    const moreMenu = document.getElementById('header-more-menu');
    if (moreMenu && !moreMenu.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        closeHeaderMoreMenu();
        return true;
    }

    const stepOtp = document.getElementById('step-otp');
    const authScreen = document.getElementById('auth-screen');
    if (authScreen && !authScreen.classList.contains('hidden')) {
        if (stepOtp && !stepOtp.classList.contains('hidden')) {
            if (e && e.preventDefault) e.preventDefault();
            backToCredentials();
            return true;
        }
        return false;
    }

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

    const profilePage = document.getElementById('profile-page');
    if (profilePage && !profilePage.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        closeProfilePage();
        return true;
    }

    const settingsPage = document.getElementById('settings-page');
    if (settingsPage && !settingsPage.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        closeSettingsPage();
        return true;
    }

    const contactsModal = document.getElementById('contacts-modal');
    if (contactsModal && !contactsModal.classList.contains('hidden')) {
        if (e && e.preventDefault) e.preventDefault();
        closeContactsModal();
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
    const tabCalls = document.getElementById('tab-calls');
    const tabLive = document.getElementById('tab-live');
    if ((tabStatus && !tabStatus.classList.contains('hidden')) ||
        (tabCalls && !tabCalls.classList.contains('hidden')) ||
        (tabLive && !tabLive.classList.contains('hidden'))) {
        if (e && e.preventDefault) e.preventDefault();
        switchTab('chats');
        return true;
    }

    return false;
};

window.addEventListener('DOMContentLoaded', () => {
    loadProfileData();
    syncProfileAndPrivacyUI();

    const sendBtn = document.getElementById('send-code-btn');
    if (sendBtn) {
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            requestPhoneCode();
        });
    }

    document.addEventListener('backbutton', (e) => {
        window.handleAndroidBackButton(e);
    }, false);

    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App && typeof window.Capacitor.Plugins.App.addListener === 'function') {
        window.Capacitor.Plugins.App.addListener('backButton', () => {
            const handled = window.handleAndroidBackButton(null);
            if (!handled) {
                window.Capacitor.Plugins.App.exitApp().catch(() => {});
            }
        });
    }

    try {
        window.history.pushState({ lekemaApp: true }, '');
        window.addEventListener('popstate', () => {
            const handled = window.handleAndroidBackButton(null);
            if (handled) {
                window.history.pushState({ lekemaApp: true }, '');
            }
        });
    } catch (err) {}

    const savedSession = window.LekemaStorage ? LekemaStorage.getSession() : null;
    if (savedSession && savedSession.username && savedSession.phone) {
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
    initViewerZoomGestures();

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
let recordedSegmentUrls = [];
let isRecordingCamVideo = false;
let isPausedCamVideo = false;
let isSwitchingCameraDuringRec = false;
let camRecSeconds = 0;
let camRecTimerInterval = null;
let shouldOpenEditorOnStop = false;

function applyCameraPreviewMirror() {
    const vid = document.getElementById('capture-video-preview');
    if (!vid) return;
    if (camFacingMode === 'user') {
        vid.style.transform = 'scaleX(-1)';
    } else {
        vid.style.transform = 'scaleX(1)';
    }
}

async function openCameraCaptureModal() {
    const menu = document.getElementById('attach-menu-bar');
    const picker = document.getElementById('emoji-picker-bar');
    if (menu) menu.classList.add('hidden');
    if (picker) picker.classList.add('hidden');

    const modal = document.getElementById('camera-capture-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    recordedSegmentUrls = [];
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
            ? { video: { facingMode: { ideal: camFacingMode } }, audio: true }
            : { video: { facingMode: { ideal: camFacingMode } }, audio: false };

        try {
            camCaptureStream = await navigator.mediaDevices.getUserMedia(constraints);
        } catch (firstErr) {
            camCaptureStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        }

        const vid = document.getElementById('capture-video-preview');
        if (vid) {
            vid.srcObject = camCaptureStream;
            applyCameraPreviewMirror();
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
    isSwitchingCameraDuringRec = false;
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
    isSwitchingCameraDuringRec = false;
    recordedSegmentUrls = [];
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

    applyCameraPreviewMirror();

    if (camCaptureStream) {
        await startCameraStream();
    }
}

function createAndStartVideoSegmentRecorder() {
    if (!camCaptureStream) return false;
    try {
        camMediaRecorder = new MediaRecorder(camCaptureStream);
    } catch (e) {
        alert("Enregistrement vidéo non supporté, utilisez la galerie.");
        return false;
    }

    camVideoChunks = [];
    camMediaRecorder.ondataavailable = e => {
        if (e.data && e.data.size > 0) camVideoChunks.push(e.data);
    };

    camMediaRecorder.onstop = async () => {
        if (camVideoChunks.length > 0) {
            const blob = new Blob(camVideoChunks, { type: 'video/webm' });
            if (blob.size > 0) {
                recordedSegmentUrls.push(URL.createObjectURL(blob));
            }
        }
        camVideoChunks = [];

        if (isSwitchingCameraDuringRec) {
            isSwitchingCameraDuringRec = false;
            await startCameraStream();
            if (isRecordingCamVideo && camCaptureStream) {
                const started = createAndStartVideoSegmentRecorder();
                if (started && isPausedCamVideo && camMediaRecorder && typeof camMediaRecorder.pause === 'function') {
                    try { camMediaRecorder.pause(); } catch (err) {}
                }
            }
            return;
        }

        const shouldOpen = shouldOpenEditorOnStop;
        const shutterBtn = document.getElementById('shutter-action-btn');
        if (shutterBtn) {
            shutterBtn.className = "w-16 h-16 rounded-full border-4 border-white bg-red-600 flex items-center justify-center shadow-xl active:scale-95 transition";
        }

        const finalSegments = [...recordedSegmentUrls];
        recordedSegmentUrls = [];
        stopCameraTimersAndStream();

        const modal = document.getElementById('camera-capture-modal');
        if (modal) modal.classList.add('hidden');

        if (shouldOpen && finalSegments.length > 0) {
            openEditorWithVideoSegments(finalSegments);
        }
    };

    camMediaRecorder.start(250);
    return true;
}

async function switchCameraFacing() {
    camFacingMode = camFacingMode === 'environment' ? 'user' : 'environment';
    applyCameraPreviewMirror();

    if (isRecordingCamVideo && camMediaRecorder && camMediaRecorder.state !== 'inactive') {
        isSwitchingCameraDuringRec = true;
        try {
            camMediaRecorder.stop();
        } catch (e) {
            isSwitchingCameraDuringRec = false;
            await startCameraStream();
        }
        return;
    }

    await startCameraStream();
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

    sctx.save();
    if (camFacingMode === 'user') {
        sctx.translate(snapCanvas.width, 0);
        sctx.scale(-1, 1);
    }
    sctx.drawImage(vid, 0, 0, snapCanvas.width, snapCanvas.height);
    sctx.restore();

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
        recordedSegmentUrls = [];
        shouldOpenEditorOnStop = true;
        isPausedCamVideo = false;
        isSwitchingCameraDuringRec = false;

        const ok = createAndStartVideoSegmentRecorder();
        if (!ok) return;

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
                    const s = String(cam
