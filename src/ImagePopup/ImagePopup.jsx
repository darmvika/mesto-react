import React from "react";

export default function ImagePopup({card, isOpen, onClose}) {

    return (
        <div className={`popup popup_card popup_card_edit ${isOpen && 'popup_opened'}`}>
            <div className="card">
                <button className="popup__close popup__close_card" type="button" onClick={onClose}/>
                <div>
                    <img className="card__image" alt={card.name} src={card.link} />
                    <p className="card__caption">{card.name}</p>
                </div>
            </div>
        </div>

    )

}