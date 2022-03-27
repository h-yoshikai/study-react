import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const UserList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/users`);

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
    <ul className="grid grid-cols-3 gap-4">
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a className="block p-2 shadow rounded hover:bg-gray-100">
                <h1 className="font-bold">{user.name}</h1>
                <div className="text-sm">{user.email}</div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
