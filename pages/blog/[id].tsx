import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/pages/BlogDetail.module.scss";
type TBlogDetail = {
    id: number;
    meta: {
        type: string;
        detail_url: string;
        html_url: string;
        slug: string;
        show_in_menus: boolean;
        seo_title: string;
        search_description: string;
        first_published_at: string;
        alias_of: string|null;
        parent: {
            id: number;
            meta: {
                type: string;
                detail_url: string;
                html_url: string;
            },
            title: string;
        }
    },
    title: string;
    published_date: string;
    body: string;
    feed_image: {
        id: number;
        meta: {
            type: string;
            detail_url: string;
            download_url: string;
        },
        title: string;
    }
}
const BlogDetail: NextPage = () => {
    const router = useRouter();
    const [postData, setPostData] = React.useState<TBlogDetail | null>(null);
    React.useEffect(() => {
        let blogUrl = "";
        async function fetchPostJSON(url:string) {
            try {
                const response = await fetch(url);
                const post : TBlogDetail = await response.json();
                
                setPostData(post);
            } catch (error) {
                console.error(error);
                console.log("here");
            }
    
          }
        if(router.isReady){
            const {id} = router.query;
            blogUrl = `http://127.0.0.1:8000/api/v2/cms/pages/${id}`;
            fetchPostJSON(blogUrl);
        }
       
          
    }, []) 
    const imgSrc = postData ? `http://127.0.0.1:8000${postData.feed_image.meta.download_url}`: "";
    console.log(imgSrc);
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog - Fernando Eiras</title>
                <meta name="description" content="My first next js page" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <>
                <section className="container">
                    
                    {postData? (
                        <div>
                            <h1>{postData.title}</h1>
                            <div className={styles.BlogImgcont}>
                            <Image
                            src= {imgSrc}
                            className={styles.BlogImg}
                            layout="fill"
                            objectFit="cover"
                            alt="Autumn Sale Banner"
                            objectPosition="center"
                            />
                            </div>
                            <div>
                                <div dangerouslySetInnerHTML={{__html: postData.body}} />
                                <p>{postData.published_date}</p>
                            </div>
                        </div>
                    ) : null}
                    
                </section>
            </>
        </div>
    );
};

export default BlogDetail;
