import Axios from 'axios';
import { useEffect, useState } from 'react';
import api from '../api';

const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/';
const EMPTY_STICKER = {
    description: '',
};

export default function useStickers() {
    const [stickers, setStickers] = useState([]);

    useEffect(() => {
        api.get().then(({ data }) => setStickers(data));
    }, []);

    function addSticker() {
        api.post('', EMPTY_STICKER).then(({ data }) =>
            setStickers((stickers) => [...stickers, data])
        );
    }

    function updateSticker(sticker) {
        api.put(sticker.id, sticker).then(({ data }) =>
            setStickers((stickers) =>
                stickers.map((sticker) =>
                    stiker.id === data.id ? data : sticker
                )
            )
        );
    }

    function deleteSticker(id) {
        api.delete(id);

        setStickers(stickers.filter((item) => item.id !== id));
    }

    return {
        stickers,
        addSticker,
        deleteSticker,
        updateSticker,
    };
}