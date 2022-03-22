import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "src/components";
import { Post } from "src/components/Post";
import { usePost } from "src/hooks/usePost";
import styles from "src/styles/Home.module.css";

const PostId = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Post />
    </div>
  );
};

export default PostId;
