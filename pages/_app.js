import "../styles/globals.css";
import "../styles/login.scss";
import "../styles/signup.scss";
import "../styles/header.scss";
import "../styles/home.scss";
import "../styles/small-card.scss";
import "../styles/header-menu.scss";
import "../styles/account.scss";
import "../styles/profile.scss";
import "../styles/posts.scss";
import "../styles/main-post-card.scss";
import "../styles/new-post.scss";
import "../styles/image-uploader.scss";
import "../styles/post-details.scss";
import "../styles/comment.scss";


import "antd/dist/antd.css";

import store from "../store";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
