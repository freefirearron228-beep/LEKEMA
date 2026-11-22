const LekemaStorage = {
    SESSION_KEY: 'lekema_active_session_v1',
    USERS_DB_KEY: 'lekema_registered_users_v1',
    THEME_KEY: 'lekema_theme_v1',

    getUsers() {
        try {
            return JSON.parse(localStorage.getItem(this.USERS_DB_KEY) || '[]');
        } catch {
            return [];
        }
    },

    isPseudoTaken(username, currentGmail) {
        const users = this.getUsers();
        return users.some(
            (u) =>
                u.username.toLowerCase() === username.toLowerCase() &&
                u.gmail.toLowerCase() !== currentGmail.toLowerCase()
        );
    },

    saveUser(user) {
        const users = this.getUsers();
        const idx = users.findIndex((u) => u.gmail.toLowerCase() === user.gmail.toLowerCase());
        if (idx >= 0) {
            users[idx] = user;
        } else {
            users.push(user);
        }
        localStorage.setItem(this.USERS_DB_KEY, JSON.stringify(users));
    },

    setSession(sessionData) {
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(sessionData));
    },

    getSession() {
        try {
            return JSON.parse(localStorage.getItem(this.SESSION_KEY) || 'null');
        } catch {
            return null;
        }
    },

    clearSession() {
        localStorage.removeItem(this.SESSION_KEY);
    },

    saveTheme(themeObj) {
        localStorage.setItem(this.THEME_KEY, JSON.stringify(themeObj));
    },

    getTheme() {
        try {
            return JSON.parse(localStorage.getItem(this.THEME_KEY) || 'null');
        } catch {
            return null;
        }
    }
};
