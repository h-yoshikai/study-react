import Head from "next/head";
import { useEffect, useState, useCallback } from "react";
import { Footer, Header, Main } from "src/components";
import { Posts } from "src/components/Posts";
import styles from "src/styles/Home.module.css";

const APITest = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default APITest;
