import { Header } from "src/components";
import { Comment } from "src/components/Comment";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: {
      id: comment.id.toString(),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);
  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
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
