import { Layout, MainPostCard } from "../../components";
import { useInput } from "../../hooks/useInput";
import tags from "../../constants/tags.json";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/actions/search";
import { Empty, Spin } from "antd";

const Blogs = () => {
  const [inputs, setInputs] = useInput({ search: "", tag: "All" });
  const { posts, loading } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const getFilteredPosts = () => {
    dispatch(getPosts(inputs.search, inputs.tag));
  };

  useEffect(() => {
    // when components initiliaze, get all posts
    if (!posts) {
      dispatch(getPosts("", "All"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="blogs">
        <div className="blogs__container">
          <div className="blogs__container__search">
            <input
              name="search"
              value={inputs.search}
              onChange={setInputs}
              placeholder="Search post name..."
            />
            <select name="tag" value={inputs.tag} onChange={setInputs}>
              {[{ id: "0", name: "All" }, ...tags].map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
            <button onClick={getFilteredPosts} type="submit">
              Search
            </button>
          </div>
          {loading ? (
            <Spin />
          ) : (
            <div className="blogs__container__cards">
              {posts ? (
                posts.length === 0 ? (
                  <Empty />
                ) : (
                  posts.map((post) => (
                    <MainPostCard key={post._id} post={post} />
                  ))
                )
              ) : (
                <Empty />
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
