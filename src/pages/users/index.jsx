import Head from "next/head";
import { Header } from "src/components";
import { Users as UsersList } from "src/components/Users";

const Users = () => {
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UsersList />
    </div>
  );
};

export default Users;
