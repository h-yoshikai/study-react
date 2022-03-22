import Head from "next/head";
import { Header } from "src/components";
import { Posts as PostsComponent } from "src/components/Posts";
import styles from "src/styles/Home.module.css";

const Posts = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
