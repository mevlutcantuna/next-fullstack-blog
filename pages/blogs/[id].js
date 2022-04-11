import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="post-detail"></div>
    </Layout>
  );
};

export default PostDetail;
