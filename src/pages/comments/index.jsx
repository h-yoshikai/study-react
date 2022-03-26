import Head from "next/head";
import { Header } from "src/components";
import { Comments as CommentsList } from "src/components/Comments";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 1, //1秒たった後の初めてのリクエストで新しいページを生成（この時点では古いページを返す）。その後のリクエストでは新しいページを返す。
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentsList />
      </SWRConfig>
    </div>
  );
};

export default Comments;
