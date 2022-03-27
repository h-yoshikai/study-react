import { fetcher } from "src/utils/fetcher";
import useSWRImmutable from "swr";

export const useFetch = (url) => {
  const { data, error } = useSWRImmutable(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error, //postを入れると、postがエラー出なかったときに一瞬表示される
  };
};
