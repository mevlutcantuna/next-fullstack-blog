import Layout from "../components/Layout";
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
        <div className="home__main__search">
          <h1>Search new blogs</h1>
          <form>
            <input placeholder="Search post name..."/>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="home__main__posts">
          <h2>Related Posts</h2>
          <div className="home__main__posts__cards">
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}
