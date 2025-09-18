import { ReCaptchaProvider } from "next-recaptcha-v3";

const Recaptcha = ({ Component, pageProps }) => (
  <ReCaptchaProvider reCaptchaKey="AIzaSyCNFkkZcO50mnJI8_PqSFcjB_q37ZzX8u0">
    <Component {...pageProps} />
  </ReCaptchaProvider>
);

export default Recaptcha;