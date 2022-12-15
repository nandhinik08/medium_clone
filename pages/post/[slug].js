import { useRouter } from "next/router";
import { use, useContext, useEffect, useState } from "react";
import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";
import { MediumContext } from "../../context/MediumContext";

const styles = {
  content: `flex`,
};

const Post = () => {
  const { posts, users } = useContext(MediumContext);
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (posts.length === 0) {
      return;
    }
    let tempPost = posts.find((post) => post.id === router.query.slug);
    setPost(posts.find((post) => post.id === router.query.slug));
    if (tempPost.data?.author) {
      setAuthor(users.find((user) => user.id === tempPost.data?.author));
    }
  }, []);
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recommendations />
    </div>
  );
};
export default Post;
