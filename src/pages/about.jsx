import Head from "next/head";
import { Footer, Header, Main } from "src/components";
import styles from "src/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main page="about" />

      <Footer />
    </div>
  );
}
