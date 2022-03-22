import Head from "next/head";
import { Header } from "src/components";
import { Posts as PostsComponent } from "src/components/Posts";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
