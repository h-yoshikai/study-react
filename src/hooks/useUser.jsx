import { useRouter } from "next/router";
import { API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWRImmutable(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
