import Link from "next/link";

const CustomHeader = () => {
  return (
    <header className="header">
      <div className="header__wrap">
        <nav className="nav">
        </nav>
        <div className="mob-nav">
          <div className="header__logo-wrap">
            <a target="_blank" href="https://givingtuesday.ru/" rel="noreferrer">
              <img src="/img/heart.svg" alt=""/>
            </a>

            <a href="https://doroga-zhizni.org/" target="_blank" rel="noreferrer">
              <img src="/img/logo.svg" alt=""/>
            </a>

            <div className="logo-house">
              <Link href="/" passHref={true}>
                <img src="/img/hous.svg" alt=""/>
              </Link>
            </div>
          </div>

          <div className="header__left">
            <a href="#popup">
              Что такое
              <span>#ЩедрыйВторник?</span>
            </a>
          </div>

          <div className="header__right">
            <a href="tel:+74993817975" className="header__phone">+7 499 381 79 75</a>

            <a href="mailto:fond@doroga-zhizni.org" className="header__mail">fond@doroga-zhizni.org</a>
          </div>
        </div>

        <div className="header__left">
          <a href="#popup">
            Что такое
            <span>#ЩедрыйВторник?</span>
          </a>
        </div>

        <div className="header__logo-wrap">
          <a target="_blank" href="https://givingtuesday.ru/" rel="noreferrer">
            <img src="/img/heart.svg" alt=""/>
          </a>

          <a href="https://doroga-zhizni.org/" target="_blank" rel="noreferrer">
            <img src="/img/logo.svg" alt=""/>
          </a>

          <div className="logo-house">
            <Link href="/" passHref={true}>
              <img src="/img/hous.svg" alt=""/>
            </Link>
          </div>
        </div>

        <div className="header__right">
          <a href="tel:+74993817975" className="header__phone">+7 499 381 79 75</a>

          <a href="mailto:fond@doroga-zhizni.org" className="header__mail">fond@doroga-zhizni.org</a>
        </div>

      </div>
    </header>
  )
}

export default CustomHeader
