import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/Shop.module.scss";

type TProduct = {
    name: string;
    id: number;
    image: string;
};
type TKart = TProduct[];
type TData = {
    message: string[];
    status: "success" | "pending" | "error";
}
const Shop: NextPage = () => {
    const kart: TKart = [
        {
            name: "Product A",
            id: 0,
            image: "/images/shop/0.jpg"
        },
        {
            name: "Product B",
            id: 1,
            image: "/images/shop/1.jpg"
        },
        {
            name: "Product C",
            id: 2,
            image: "/images/shop/2.jpg"
        },
        {
            name: "Product D",
            id: 3,
            image: "/images/shop/3.jpg"
        }
    ]
    //use effect and state for api call
    const [data,setData] = React.useState<TData>(
        {
            message: [],
            status: "pending"
        }
    )

    const apiUrl = "https://dog.ceo/api/breeds/image/drandom/4";
    React.useEffect(() => {
        async function fetchDogsJSON() {
            try {
                const response = await fetch(apiUrl);
                const dogs = await response.json();
                if(dogs.status === "error"){
                    throw new Error("sorry something happened");
                }
                setData(dogs); 
            } catch (error) {
                console.error(error);
            }
 
          }
          fetchDogsJSON();
    },[])
    console.log(data);
    return (
        <div>
            <Head>
                <title>Shop - Fernando Eiras</title>
                <meta name="description" content="Lets go shoping" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <main>
                <section className="container">
                    <ul className={styles.ProductList}>
                    {data.status === "success" && data.message.map((url:string) => {
                        console.log("render");
                       return (
                           <li className={styles.Product} key={url.slice(-8)}>
                               <Image src={url} width="300" height="200"/>
                           </li>
                       )
                   })}
                    </ul>
                   
                </section>
            </main>
        </div>
    );
};

export default Shop;
