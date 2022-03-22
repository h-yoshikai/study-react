import Head from "next/head";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <div>{user?.name ? <div>Posted by {user.name}</div> : null}</div>
    </div>
  );
};
