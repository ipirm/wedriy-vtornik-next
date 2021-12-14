import axios from "axios";
import {SnackbarProvider} from "notistack";
import '../styles/index.css';
import RouteWatcher from "../components/RouteWatcher";
import {useEffect} from "react";
import {useRouter} from "next/router";

axios.defaults.baseURL = 'https://doroga54321.herokuapp.com/api/v1/public'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    if (window.gtag) {
      window.gtag('config', 'G-5BZL3LHP59', {
        page_path: url,
      });
    }
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events])

  return (
    <SnackbarProvider maxSnack={3}>
      <RouteWatcher/>
      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default MyApp
