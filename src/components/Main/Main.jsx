import { useEffect, useState } from "react"
import api from "../../utils/api.js"
import Card from "../Card/Card.jsx"

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getProfileInfo(), api.getInitialCards()])
            .then(([resDataUser, resDataCard]) => {
                setUserName(resDataUser.name)
                setUserDescription(resDataUser.about)
                setUserAvatar(resDataUser.avatar)
                resDataCard.forEach(data => data.myId = resDataUser._id)
                setCards(resDataCard)
            },
        )
        .catch((error) => console.error(`Ошибка при создании данных ${error}`))

    }, [])
    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-update" onClick={onEditAvatar}>
                    <img src={userAvatar} alt="Фото аватара" className="profile__avatar" />
                </button>
                <div>
                    <div className="profile__info">
                        <h1 className="profile__title">{userName}</h1>
                        <button className="profile__redact" type="button" onClick={onEditProfile} />
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__plus" type="button" onClick={onAddPlace} />
            </section>
            <ul className="group">
                {cards.map(data => {
                    return (<li className="element-template" key={data._id}>
                        <Card card={data} onCardClick={onCardClick}/>
                    </li>)
                })}
            </ul>
        </main>
    )
}