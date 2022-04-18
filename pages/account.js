import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Layout, MainPostCard } from "../components";
import { Profile } from "../components";
import { deletePostByID, getLikedPosts, getMyPosts } from "../api/post";
import { Empty, Tabs } from "antd";


const { TabPane } = Tabs;

const Account = () => {
  const [myPosts, setMyPosts] = useState(null);
  const [likedPosts, setLikedPosts] = useState(null);
  const { user } = useSelector((state) => state.user);

  const _getMyPosts = async () => {
    const { data } = await getMyPosts(user._id);
    setMyPosts(data.posts);
  };

  const _getLikedPosts = async () => {
    const { data } = await getLikedPosts(user._id);
    setLikedPosts(data.posts);
  };

  const _deletePost = async (post_id) => {
    const { data } = await deletePostByID(post_id);
    const newPosts = likedPosts.filter((post) => post._id !== data.post._id);
    setLikedPosts(newPosts);
  };

  useEffect(() => {
    if (user) {
      _getMyPosts();
      _getLikedPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Layout>
      <div className="account">
        <div className="account__container">
          <h1>Account</h1>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Profile" key="1">
              <Profile />
            </TabPane>
            <TabPane tab="My Posts" key="2">
              {myPosts && myPosts.length === 0 ? (
                <>
                  <Empty />
                </>
              ) : (
                myPosts?.map((post) => (
                  <MainPostCard post={post} key={post._id} />
                ))
              )}
            </TabPane>
            <TabPane tab="Liked Posts" key="3">
              {likedPosts && likedPosts.length === 0 ? (
                <>
                  <Empty />
                </>
              ) : (
                likedPosts?.map((post) => (
                  <MainPostCard
                    post={post}
                    key={post._id}
                    deletePost={_deletePost}
                  />
                ))
              )}
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
