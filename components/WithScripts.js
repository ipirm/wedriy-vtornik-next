import Script from 'next/script';

const WithScripts = ({ children }) => {
  return (
    <>
      { children }
      <Script src="https://widget.cloudpayments.ru/bundles/cloudpayments" />
      <Script src="/script.js" />
    </>
  )
}

export default WithScripts
