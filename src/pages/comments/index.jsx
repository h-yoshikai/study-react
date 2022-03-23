import Head from "next/head";
import { Header } from "src/components";
import { Comments as CommentsList } from "src/components/Comments";

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <CommentsList />
    </div>
  );
};

export default Comments;
