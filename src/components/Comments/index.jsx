import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
    <ul className="space-y-2">
      {data.map((comment) => {
        return (
          <li key={comment.id} className="border-b pb-2">
            {/* 画面にLink要素が入ったタイミングでプリフェッチしないように(ホバーさせた瞬間にフェッチ) */}
            <Link href={`/comments/${comment.id}`} prefetch={false}>
              <a className="block text-sm hover:text-blue-500">
                {comment.body}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
