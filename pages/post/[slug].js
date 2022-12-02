import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../Components/ReadersNav";
import Recommendations from "../../Components/Recommendations";

const styles = {
  content: `flex`,
};

const Post = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain />
      <Recommendations />
    </div>
  );
};
export default Post;
