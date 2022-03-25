import Head from "next/head";
import { useRouter } from "next/router";
import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const User = () => {
  const router = useRouter();
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <h2>詳細</h2>
          <ul>
            <li>{data.email}</li>
            <li>{data.username}</li>
            <li>{data.address.city}</li>
            <li>{data.phone}</li>
            <li>{data.website}</li>
            <li>{data.company.name}</li>
          </ul>
          <h2>投稿</h2>
          <PostsByUserId id={router.query.id} />
          <h2>コメント</h2>
        </div>
      ) : null}
    </div>
  );
};
