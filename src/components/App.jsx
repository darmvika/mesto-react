import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import PopupWithForm from "./PopupWithForm/PopupWithForm.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";
import { useState } from "react";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [isimagePopup, setImagePopup] = useState(false)

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setImagePopup(false)
  }


  function handleRditProfilClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handelEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handelAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }



  // function handleDelete() {

  // }

  function handleCardClick(card) {
    setSelectedCard(card)
    setImagePopup(true)
    // setEvantListenerForDocument()
  }
  return (
    <div className="App">
      <div className="page">

        <Header />

        <Main
          onEditProfile={handleRditProfilClick}
          onAddPlace={handelAddPlaceClick}
          onEditAvatar={handelEditAvatarClick}
          onCardClick= {handleCardClick}
        />

        <Footer />

        <PopupWithForm
          name='edit-profile'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="input-container">
            <input
              name="name"
              id="name"
              type="text"
              placeholder="ФИО"
              minLength={2}
              maxLength={40}
              required=""
              className="popup__input popup__input_type_name"
            />
            <span
              id="name-error"
              className="popup__span-error popup__span-error_type_name"
            />
          </div>
          <div className="input-container">
            <input
              name="job"
              id="job"
              type="text"
              placeholder="Должность"
              minLength={2}
              maxLength={200}
              required=""
              className="popup__input popup__input_type_job"
            />
            <span
              id="job-error"
              className="popup__span-error popup__span-error_type_job"
            />
          </div>

        </PopupWithForm>

        <PopupWithForm
          name='add-card'
          title='Новое место'
          titleButton='Создать'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <div className="input-container">
            <input
              className="popup__input popup__input_type_named"
              id="title"
              placeholder="Название"
              name="title"
              type="text"
              required=""
              minLength={2}
              maxLength={30}
            />
            <span
              id="title-error"
              className="popup__span-error popup__span-error_type_title"
            />
          </div>
          <div className="input-container">
            <input
              className="popup__input popup__input_type_link"
              id="link"
              placeholder="Ссылка на картинку"
              name="link"
              type="url"
              required=""
            />
            <span
              id="link-error"
              className="popup__span-error popup__span-error_type_link"
            />
          </div>

        </PopupWithForm>

        <PopupWithForm
          name='edit-avatar'
          title='Обновить аватар'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <div className="input-container">
            <input
              className="popup__input popup__input_type_avatar"
              id="avatar"
              placeholder="Ссылка на картинку"
              name="avatar"
              type="url"
              required=""
            />
            <span
              id="avatar-error"
              className="popup__span-error popup__span-error_type_avatar"
            />
          </div>

        </PopupWithForm>

        <PopupWithForm
          name='delete'
          title='Вы уверены'
          titleButton='да'
        />

        <ImagePopup 
        card = {selectedCard}
        isOpen = {isimagePopup}
        onClose = {closeAllPopups}
        />










      </div>


    </div>
  );
}

export default App;
