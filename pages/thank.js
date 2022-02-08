import Link from 'next/link'
import axios from "axios";
import {useRef, useState} from "react";
import {useSnackbar} from "notistack";
import Router from 'next/router'
import CustomHeader from "../components/CustomHeader";
import WithScripts from "../components/WithScripts";

export default function Thank() {
  const imageChooserRef = useRef(null)
  const { enqueueSnackbar } = useSnackbar();
  const [imageLoading, setImageLoading] = useState(false)

  const onLoadImageError = (e) => {
    if (e)
      console.error(e)
    enqueueSnackbar('Произошла ошибка при загрузке вашей фотографии, пожалуйста попробуйте еще раз', {
      variant: 'error'
    })
    setImageLoading(false)
  }

  const onFileChange = async e => {
    const file = e.target.files[0];
    if (file && (file.name.includes(".png") || file.name.includes(".jpeg") || file.name.includes(".jpg"))) {
      const formData = new FormData()
      formData.append('image', file)
      setImageLoading(true)
      await axios.post('/image', formData)
        .then(res => {
          if (!res.data.ok) {
            onLoadImageError(e)
            return
          }
          Router.push(`/share?id=${res.data.result.id}`)
          enqueueSnackbar('Ваша фотография успешно загружена!', {
            variant: 'success'
          })
        })
        .catch(e => {
          onLoadImageError(e)
        })
    } else {
      enqueueSnackbar('Пожалуйста, выбирите png или jpeg файл', {
        variant: 'error'
      })
    }
  }

  const onChooseFile = () => {
    imageChooserRef?.current?.click()
  }

  return (
    <WithScripts>
      <input
        placeholder="Загрузить файлы"
        type="file"
        name="file"
        accept="image/png, image/jpeg"
        onChange={onFileChange}
        style={{display: 'none'}}
        ref={imageChooserRef}
      />
      <div className="overlay" />
      <div className="body s-thanks">
        <CustomHeader />
        <section className="thanks">
          <div className="container">
            <div className="thanks__wrap">
              <div className="thanks__content">
                <h1 className="section__title">Спасибо за помощь :)</h1>
                <p>
                  Загрузите своё фото в общую галерею. Вместе мы сделаем мир лучше
                </p>
                <div className="main__btn-wrap">
                  <label htmlFor="input__file" className={`btn ${imageLoading ? 'disabled' : ''}`.trim()} onClick={onChooseFile} style={{marginTop: '30px'}}>
                    <span className="input__file-button-text">Загрузить</span>
                  </label>
                  { !imageLoading ? <Link href="/"><div href="/" className="miss">Пропустить</div></Link> : null }
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer__wrap">
            <a href="/oferta.pdf" target="_blank" className="copyright">
              Публичная оферта о добровольном пожертвовании
              <span>© «Дорога Жизни» 2022 г.</span>
            </a>
          </div>
        </footer>
      </div>
      <div className="hidden">
        <div id="popup" className="popup__wrap">
          <h2>
            Что такое<br/>
            #ЩедрыйВторник?
          </h2>
          <p>
            #ЩедрыйВторник — это Международный
            день благотворительности, который проходит более чем в 100 странах мира с 2012 года.
          </p>
          <p>
            В этот день миллионы людей объединяются для того, чтобы участвовать в благотворительных акциях и
            рассказывать об этом в соцсетях. Потому что важно не только оказывать помощь, но и делиться с
            окружающими информацией о том, какое это хорошее и нужное дело.
          </p>
          <p>
            Давайте делать добрые дела <span>вместе и вслух!</span>
          </p>
        </div>
        <div id="popup__home" className="popup__home">
          <div className="popup__home-wrap">
            <img className="popup__logo" src="img/hous.svg" alt=""/>
            <div className="popup__home-title">
              <h2>Дом для жизни —</h2>
              <p className="color-green">
                это настоящий Дом для тех, у кого никогда не было своего дома. Здесь дети-сироты из
                разных регионов России живут, пока проходят лечение и последующую реабилитацию в Москве.
              </p>
              <p>
                «Дом для жизни» — это проект фонда «Дорога жизни». Здесь всё сделано для удобства детей
                с особенностями здоровья: в нем есть пандусы, большие комнаты для игр, процедурная и
                помещение для лечебного массажа.
              </p>
              <span>
              Но самое главное — этот Дом сделан нами с любовью.
            </span>
            </div>
          </div>
          <div className="popup__home-img">
            <a data-fancybox="gallery" href="img/img.jpg" data-width="260" data-height="280"><img
              src="img/img.jpg"/></a>
            <a data-fancybox="gallery" href="img/img.jpg" data-width="260" data-height="280"><img
              src="img/img.jpg"/></a>
            <a data-fancybox="gallery" href="img/img.jpg" data-width="260" data-height="280"><img
              src="img/img.jpg"/></a>
          </div>
        </div>
      </div>
    </WithScripts>
  );
}
