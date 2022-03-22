import Link from "next/link";
import { usePosts } from "src/hooks/usePosts";

// const initialState = {
//   data: [],
//   loading: true,
//   error: null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "end": {
//       return {
//         ...state,
//         data: action.data,
//         loading: false,
//       };
//     }
//     case "error": {
//       return {
//         ...state,
//         loading: false,
//         error: action.error,
//       };
//     }
//     default: {
//       throw new Error("no such action type");
//     }
//   }
// };

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();
  console.log({ data, error });
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const getPosts = useCallback(async () => {
  //   try {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     if (!res.ok) {
  //       throw new Error("error occurred");
  //     }
  //     const json = await res.json();
  //     dispatch({ type: "end", data: json });
  //   } catch (error) {
  //     dispatch({ type: "error", error: error });
  //   }
  // }, []);

  // useEffect(() => {
  //   getPosts();
  // }, [getPosts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
