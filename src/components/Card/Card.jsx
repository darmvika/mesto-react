import React from "react";

export default function Card({ card, onCardClick}) {

    return (
            <article className="element">
                <button className="element__remove" />
                <img className="element__img" src={card.link} alt={card.name} onClick={() => onCardClick({link: card.link, name: card.name})}/>
                <div className="element__info">
                    <h2 className="element__title">{card.name}</h2>
                    <div className="element__button-like">
                        <button className="element__like" type="button" />
                        <span className="element__number"></span>
                    </div>
                </div>
            </article>
    )
}