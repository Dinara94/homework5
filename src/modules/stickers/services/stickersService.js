import { STICKERS_URL } from '../constants';
const EMPTY_STICKER = {
    description: '',
};

export function getStickers() {
    return fetch(STICKERS_URL).then((res) => res.json());
}

export function createSticker() {
    return fetch(STICKERS_URL, {
        method: 'POST',
        body: JSON.stringify(EMPTY_STICKER),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function updateSticker(sticker) {
    return fetch(STICKERS_URL + sticker.id, {
        method: 'PUT',
        body: JSON.stringify(sticker),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}

export function deleteSticker(id) {
    return fetch(STICKERS_URL + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}
