import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from 'next/link'
import styles from "@/styles/pages/Ukraine.module.scss";

type TPost = {

    source: {
        id: number;
        name: string;
        },
        author: string;
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
};
type TPostData = {
    articles: TPost;
    status: "ok" | "pending" | "error";
}
type TData = TPostData | null;

const Ukraine: NextPage = () => {
    const [data,setUkData] = React.useState<TData>(null)
    
    
    const apiUkUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=53d1a4b17be545eea1be3b9c8273acc4";
    console.log(apiUkUrl);
    React.useEffect(() => {
        async function fetchUkJSON() {
          try {
              const responseUk = await fetch(apiUkUrl);
              const ukposts = await responseUk.json();
              if(ukposts.status === "error"){
                throw new Error("sorry something happened");
                }              
              setUkData(ukposts);
          } catch (error) {
              console.error(error);
          }
    
        }
        fetchUkJSON();
        //For blog pages
    },[])
    console.log(data);
    // const result = dataUk
    // ? dataUk[22].cases
    // : "";

    return (
        <div className={styles.container}>
        <section className={styles.newsposts}>
            <h1>Latest news</h1>
                    <ul className={styles.posts}>
                    {data && data.articles.map((post:TPost) => {
                       return (
                        <li className={styles.posts__item} key={post.source.id}>
                            <Link href={post.url}>
                               <a target="blank">
                                <div 
                                    className={styles.posts__image} 
                                    style={{ backgroundImage: `url(${post.urlToImage})` }}
                                >
                                </div>
                                
                                <div className={styles.posts__information}>
                                <div className={styles.posts__date}>
                                    {post.publishedAt}
                                </div> 
                                <div className={styles.posts__title}>
                                    {post.title}
                                </div>
                                <div className={styles.posts__author}>
                                    {post.source.name}
                                </div>
                                </div>
                                {/* <h2>{post.title}</h2>
                                <h3>{post.source.name}</h3>
                                <p>{post.description}</p> */}
                               </a>
                              </Link>
                        </li>
                       )
                   })}
                    </ul>
                    
                   
                </section>
                </div>
  
      
    )
}
    


    
export default Ukraine;
