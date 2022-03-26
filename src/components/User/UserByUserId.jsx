import { API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const UserByUserId = (props) => {
  const { data: user, error: userError } = useSWR(
    props?.id ? `${API_URL}/users/${props.id}` : null,
    fetcher
  );

  if (!user && !userError) {
    return <div>Loading...</div>;
  }

  if (userError) {
    return <div>{error.message}</div>;
  }

  return <div>Posted by {user.name}</div>;
};
