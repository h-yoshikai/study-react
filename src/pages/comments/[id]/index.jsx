import { Header } from "src/components";
import { Comment } from "src/components/Comment";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: {
      id: comment.id.toString(),
    },
  }));
  return {
    paths: paths,
    fallback: "blocking", //falseだと、11件目以降は404。trueにするとリクエストのタイミングでSG
  };
};

// 一度しか走らないので、notFound: trueになるとそのままになる
export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  // 存在しないコメントのURLにいこうとしたとき
  if (!comment.ok) {
    return {
      notFound: true,
      revalidate: 1,
    };
  }

  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
    revalidate: 1,
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
  // const router = useRouter();

  // // アクセスタイミングでは用意されていないが、その間に表示する
  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Header />
        <Comment />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
