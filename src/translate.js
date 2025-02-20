const translations = {
    fr: {
        back: "retour",
        up: "monter",
        down: "descendre",
        room: "chambre",
        "common kitchen": "cuisine commune",
    },
};

export function lang() {
    return document.documentElement.lang;
}

export function _(key) {
    return translations[lang()]?.[key] ?? key;
}
