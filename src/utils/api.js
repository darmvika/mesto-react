class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
        this._authorization = options.headers.authorization;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ой! Ошибка: ${res.status}`);
    }

    getProfileInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: { authorization: this._authorization }
        })
            .then(this._checkResponse);
    }


    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: { authorization: this._authorization }
        })
            .then(this._checkResponse);
    }

    setUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.job,
            })
        })
            .then(this._checkResponse);
    }

    setNewAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                avatar: data.avatar
            })
        })
            .then(this._checkResponse)
    }

    addCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                link: data.link,
            })
        })
            .then(this._checkResponse)

    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization,
            }
        })
            .then(this._checkResponse)
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
            }
        })
            .then(this._checkResponse)
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
            }
        })
            .then(this._checkResponse)
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-69',
    headers: {
        authorization: 'a3a28597-c3b7-480a-a7b8-394d6cff5dbd',
        'Content-Type': 'application/json'
    }
});

export default api