import { API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePosts = () => {
  const { data, error } = useSWR(`${API_URL}/posts`, fetcher);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length <= 0,
  };
};
