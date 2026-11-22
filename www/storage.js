const LekemaStorage = {
    KEYS: {
        USERS: 'lekema_users_v1',
        SESSION: 'lekema_session_v1',
        THEME: 'lekema_theme_v1'
    },

    _readJSON(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (e) {
            return fallback;
        }
    },

    _writeJSON(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {}
    },

    getUsers() {
        return this._readJSON(this.KEYS.USERS, []);
    },

    isPseudoTaken(username, gmail) {
        const users = this.getUsers();
        const targetPseudo = (username || '').trim().toLowerCase();
        const targetGmail = (gmail || '').trim().toLowerCase();
        return users.some(u =>
            (u.username || '').trim().toLowerCase() === targetPseudo &&
            (u.gmail || '').trim().toLowerCase() !== targetGmail
        );
    },

    saveUser(userObj) {
        const users = this.getUsers();
        const gmail = (userObj.gmail || '').trim().toLowerCase();
        const idx = users.findIndex(u => (u.gmail || '').trim().toLowerCase() === gmail);
        if (idx >= 0) {
            users[idx] = Object.assign({}, users[idx], userObj, { gmail });
        } else {
            users.push(Object.assign({}, userObj, { gmail }));
        }
        this._writeJSON(this.KEYS.USERS, users);
    },

    setSession(sessionData) {
        this._writeJSON(this.KEYS.SESSION, sessionData);
    },

    getSession() {
        return this._readJSON(this.KEYS.SESSION, null);
    },

    clearSession() {
        try {
            localStorage.removeItem(this.KEYS.SESSION);
        } catch (e) {}
    },

    saveTheme(themeObj) {
        this._writeJSON(this.KEYS.THEME, themeObj);
    },

    getTheme() {
        return this._readJSON(this.KEYS.THEME, null);
    }
};

window.LekemaStorage = LekemaStorage;
