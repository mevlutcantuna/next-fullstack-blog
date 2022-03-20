import Layout from "../components/Layout";
import Image from "next/image";
import SmallCard from "../components/SmallPostCard";

export default function Home() {
  return (
    <Layout>
      <div className="home__header">
        <div className="home__header__center">
          <h3>Blog</h3>
          <h1>Good Places</h1>
          <h3>I havent been everywhere, but its on my list.</h3>
        </div>
      </div>
      <div className="home__main">
        <h2>Lasts Posts</h2>
        <div className="home__main__cards">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
    </Layout>
  );
}
