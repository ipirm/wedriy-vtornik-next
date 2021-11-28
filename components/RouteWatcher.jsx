import {useEffect} from "react";
import { useRouter } from 'next/router'

const RouteWatcher = () => {
    const { pathname } = useRouter()

    useEffect(() => {
        onRouteChange()
    }, [pathname])

    useEffect(() => {
        setTimeout(() => {
            onRouteChange()
        }, 3000)
    }, [])

    const onRouteChange = () => {
        if (!window.$) return

        window.$('.header__left').magnificPopup({
            delegate: 'a',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });

        window.$('.main__btn-wrap .details').magnificPopup({
            // delegate: 'a',
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });


        window.$('.nav').on('click', function() {
            window.$('.mob-nav').toggleClass('mob-active');
            window.$('.overlay').toggleClass('over-on');
            window.$('.nav').toggleClass('active');
            window.$('body').toggleClass('over-hidden');
        });
    }

    return (
        <></>
    )
}

export default RouteWatcher
