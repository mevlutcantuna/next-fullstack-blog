import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Layout>{id}</Layout>;
};

export default PostDetail;
