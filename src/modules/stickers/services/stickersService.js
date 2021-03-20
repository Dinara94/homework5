import { STICKERS_URL } from '../constants';

export function getStickers() {
    return fetch(STICKERS_URL).then((res) => res.json());
}

export function updateSticker(newItem) {
    return fetch(STICKERS_URL + newItem.id, {
        method: 'PUT',
        body: JSON.stringify(newItem),
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

export function createSticker(newItem) {
    return fetch(STICKERS_URL, {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}