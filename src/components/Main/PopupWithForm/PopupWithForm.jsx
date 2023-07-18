import React from "react";

export default function PopupWithForm({name, title, titleButton, children, isOpen, onClose}) {

    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
        <div className="popup__content">
            <button className="popup__close popup__close_profile" type="button" onClick={onClose}/>
            <h2 className="popup__title">{ title }</h2>
            <form className="popup__inputs popup__inputs_profile" noValidate="">
                {children}
                <div className="input-container"></div>
                <div className="input-container"></div>
                <button
                    className="popup__save popup__save_profile button"
                    type="submit"
                > {titleButton || 'Сохранить'}
                </button>
            </form>
        </div>
        </div >
    )
}