import Link from "next/link";
import { getMostPopularPosts } from "../api/blog";
import { Layout } from "../components";
import { SmallPostCard } from "../components";

export default function Home({ popularPosts }) {
  return (
    <Layout>
      <div className="home__header">
        <div className="home__header__center">
          <h3>Blog</h3>
          <h1>Good Places</h1>
          <h3>I havent been everywhere, but its on my list.</h3>
          <Link href="/blogs">
            <a>Blogs</a>
          </Link>
        </div>
      </div>
      <div className="home__main">
        <div className="home__main__search">
          <h1>Search new blogs</h1>
          <form>
            <input placeholder="Search post name..." />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="home__main__posts">
          <h2>Related Posts</h2>
          <div className="home__main__posts__cards">
            {popularPosts?.map((post) => (
              <SmallPostCard key={post?._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { data } = await getMostPopularPosts();

  return {
    props: { popularPosts: data.posts }, // will be passed to the page component as props
  };
}
