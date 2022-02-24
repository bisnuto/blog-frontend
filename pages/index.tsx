import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/elements/Button";
import styles from "@/styles/pages/Home.module.scss";
import { Animal } from "@/components/modules/Animal";



const Home: NextPage = () => {

  console.log("Home render");
    return (
        <div className={styles.Container}>
            <Head>
                <title>Fernando Blog</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <main className={styles.Main}>
                <h1 className={styles.Title}>
                    Welcome to Fernandos Blog Project
                </h1>
                <div className={styles.Banner}>
                  <Image
                  src="/images/banner.jpg"
                  className={styles.BannerImage}
                  layout="fill"
                  objectFit="cover"
                  alt="Autumn Sale Banner"
                  objectPosition="center"
                  />
                </div>

                <Button />
                <Animal
                  animal="Jaguar"
                />
                <Animal
                  animal="Monkey"
                />


            </main>
        </div>
    );
};

export default Home;
