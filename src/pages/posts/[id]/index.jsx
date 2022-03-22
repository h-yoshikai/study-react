import { Header } from "src/components";
import { Post } from "src/components/Post";
import styles from "src/styles/Home.module.css";

const PostsId = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Post />
    </div>
  );
};

export default PostsId;
