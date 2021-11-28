import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {useSnackbar} from "notistack";
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

import {FacebookShareButton, OKShareButton, TwitterShareButton, VKShareButton,} from "react-share";
import CustomHeader from "../components/CustomHeader";
import WithScripts from "../components/WithScripts";

export async function getServerSideProps({query}) {
  let imageUrl = null

  // Fetch data from external API
  await axios.get(`/image/${query.id}`).then(res => {
    imageUrl = res.data.result.url
  })

  // Pass data to the page via props
  return {props: {imageUrl}}
}

export default function Share ({imageUrl}) {
  const [disableSocials, setDisableSocials] = useState(true)
  const {enqueueSnackbar} = useSnackbar()

  const onLoadImageError = (e) => {
    if (e)
      console.error(e)

    enqueueSnackbar('Такого победителя не существует :(', {
      variant: 'error'
    })
    Router.push('/')
  }

  useEffect(() => {
    if (!imageUrl) {
      onLoadImageError()
    } else {
      setDisableSocials(false)
    }

    setLocation(window.location)
  }, [])

  const [location, setLocation] = useState(null)

  const imageRef = useRef(null)
  const imageMobRef = useRef(null)

  return (
    <WithScripts>
      <Head>
        <title>Щедрый вторник</title>
        <meta property="og:image" content={imageUrl}/>
        <meta property="twitter:image" content={imageUrl}/>
      </Head>

      <div className="overlay"/>

      <div className="body">
        <CustomHeader/>
        <section className="share">
          <div className="container">

            <div className="container">

              <div className="share__wrap">

                <div className="share__img share__img-pc" ref={imageRef}>
                  <div className="share__img-container">
                    <img className="share__img-el" src={imageUrl} alt=""/>
                    <img className="share__mask" src="/img/mask.png" alt="#"/>
                  </div>
                </div>
                <div className="share__title">
                  <h1 className="section__title">
                    Расскажите друзьям о Щедром вторнике
                  </h1>
                  <p>
                    Поделитесь ссылкой на сайт в социальных сетях, чтобы больше людей узнали об акции
                  </p>
                  <div className="share__img share__img-mob" ref={imageMobRef}>
                    <div className="share__img-container">
                      <img className="share__img-el" src={imageUrl} alt=""/>
                      <img className="share__mask" src="/img/mask.png" alt="#"/>
                    </div>
                  </div>
                  <div className={disableSocials ? 'disabledSoc share__social' : 'share__social'}>
                    <FacebookShareButton
                      media={imageUrl}
                      url={location}
                      className="socials-button"
                      qoute="Щедрый вторник"
                    >
                      <img src="/img/fa.svg" alt=""/>
                    </FacebookShareButton>
                    <VKShareButton
                      qoute="Щедрый вторник"
                      media={imageUrl}
                      url={location}
                      className="socials-button"
                    >
                      <img src="/img/vk.svg" alt=""/>
                    </VKShareButton>
                    <OKShareButton
                      qoute="Щедрый вторник"
                      media={imageUrl}
                      url={location}
                      className="socials-button"
                    >
                      <img src="/img/ok.svg" alt=""/>
                    </OKShareButton>
                    <TwitterShareButton
                      qoute="Щедрый вторник"
                      media={imageUrl}
                      url={location}
                      className="socials-button"
                    >
                      <img src="/img/twit.svg" alt=""/>
                    </TwitterShareButton>
                  </div>
                  <div className="main__btn-wrap">
                    <a className="btn" download="wedriy.png" href={imageUrl}>Скачать</a>
                    <Link href="/"><div className="miss" href='/'>Пропустить</div></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer__wrap">

            <a href="/oferta.pdf" target="_blank" className="copyright">
              Публичная оферта о добровольном пожертвовании
              <span>© «Дорога Жизни» 2021 г.</span>
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
            <img className="popup__logo" src="/img/hous.svg" alt=""/>

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

            <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280"><img
              src="/img/img.jpg"/></a>

            <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280"><img
              src="/img/img.jpg"/></a>

            <a data-fancybox="gallery" href="/img/img.jpg" data-width="260" data-height="280"><img
              src="/img/img.jpg"/></a>

          </div>

        </div>

      </div>
    </WithScripts>
  );
}
