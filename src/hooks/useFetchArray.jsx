import useSWRImmutable from "swr/immutable";

export const useFetchArray = (url) => {
  const { data, error } = useSWRImmutable(url);
  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length <= 0,
  };
};

// export const usePosts = () => {
//   return useFetchArray(`${API_URL}/posts`);
// };

// export const usePostsByUserId = (id) => {
//   return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
// };

// export const useUsers = () => {
//   return useFetchArray(`${API_URL}/users`);
// };

// export const useComments = () => {
//   return useFetchArray(`${API_URL}/comments`);
// };

// export const useCommentByPostsId = (id) => {
//   return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
// };
