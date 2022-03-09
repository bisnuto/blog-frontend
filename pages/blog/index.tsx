import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Blog.module.scss";

const Blog: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog - Fernando Eiras</title>
                <meta name="description" content="My first next js page" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <>
                <section className={styles.Intro}>
                    <p>Veraspera add astra.</p>
                </section>
            </>
        </div>
    );
};

export default Blog;
