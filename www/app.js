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
    if (pPhone) pPhone.value = userProfile.phone || "";
    if (pLinks) pLinks.value = userProfile.links || "";

    const onlineCheck = document.getElementById('setting-online-presence');
    const receiptsCheck = document.getElementById('setting-read-receipts');
    if (onlineCheck) onlineCheck.checked = Boolean(privacySettings.onlinePresence);
    if (receiptsCheck) receiptsCheck.checked = Boolean(privacySettings.readReceipts);

    renderContactsLists();
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
    if (pPhone) userProfile.phone = pPhone.value.trim();
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
