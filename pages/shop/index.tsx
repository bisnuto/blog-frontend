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
                    {kart.map((product:TProduct,index:number) => {
                       return (
                           <li className={styles.Product} key={product.id}>
                               <h3>{ product.name } { index }</h3>
                               <Image src={product.image} width="300" height="200"/>
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
