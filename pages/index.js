import { useInput } from "../hooks/useInput";
import Link from "next/link";
import { getMostPopularPosts } from "../api/post";
import { Layout } from "../components";
import { SmallPostCard } from "../components";
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions/post";
import { useRouter } from "next/router";

export default function Home({ popularPosts }) {
  const [inputs, setInputs] = useInput({ search: "" });
  const dispatch = useDispatch();
  const router = useRouter();

  const searchPosts = () => {
    dispatch(getPosts(inputs.search, "All"));
    return router.push("/posts");
  };

  const goToPage = () => {
    dispatch(getPosts("", "All"));
    return router.push("/posts");
  };

  return (
    <Layout>
      <div className="home__header">
        <div className="home__header__center">
          <h3>Blog</h3>
          <h1>Good Places</h1>
          <h3>I havent been everywhere, but its on my list.</h3>
          <button onClick={goToPage}>Blogs</button>
        </div>
      </div>
      <div className="home__main">
        <div className="home__main__search">
          <h1>Search new blogs</h1>
          <div className="home__main__search__form">
            <input
              name="search"
              value={inputs.search}
              onChange={setInputs}
              placeholder="Search post name..."
            />
            <button onClick={searchPosts} type="submit">
              Search
            </button>
          </div>
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
