import ReadersNav from "../../Components/ReadersNav";
import Recommendations from "../../Components/Recommendations";

const styles = {
  content: `flex`,
};

const Post = () => {
  return (
    <div className={styles.content}>
      <ReadersNav />
      <div>hi</div>
      <Recommendations />
    </div>
  );
};
export default Post;
