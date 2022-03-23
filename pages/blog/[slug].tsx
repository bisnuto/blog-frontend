import * as React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
// Project imports
import styles from "@/styles/pages/BlogDetail.module.scss";
import { type } from "os";

// Types

type TBlogDetail = {
    id: number;
    meta: {
        type: string;
        detail_url: string;
        html_url: string;
        slug: string;
        first_published_at: string;
    };
    title: string;
    published_date: string;
    body: string;
    feed_image: {
        id: number;
        meta: {
            type: string;
            detail_url: string;
            download_url: string;
        };
        title: string;
    };
};

type TResponse = {
    meta: {
        total_count: number
    };
    items: TBlogDetail[];
}
const NotFound = () => {
    return <h2>404 Page not found</h2>
}
// Page component
const BlogDetail: NextPage = () => {
    const router = useRouter();
    const [postData, setPostData] = React.useState<TBlogDetail | null>(null);

    React.useEffect(() => {
        let blogUrl = "";
        async function fetchPostJSON(url: string) {
            try {
                const response = await fetch(url);
                const post: TResponse = await response.json();
                if(post.items.length){
                    setPostData(post.items[0]);
                }
                
            } catch (error) {
                console.error(error);
                console.log("here");
            }
        }
        if (router.isReady) {
            const { slug } = router.query;
            blogUrl = `http://127.0.0.1:8000/api/v2/cms/pages/?slug=${slug}&type=blog.BlogPage&fields=body,published_date,feed_image`;
            fetchPostJSON(blogUrl);
        }
    }, [router]);

    // State derived variables using JS ternary operator, JS6 template strings and new Date constructor
    const imgSrc = postData
        ? `http://127.0.0.1:8000${postData.feed_image.meta.download_url}`
        : "";
    const blogDate = postData ? new Date(postData.published_date) : null;

    // returned JSX
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog - Fernando Eiras</title>
                <meta name="description" content="My first next js page" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <>
                <section className="container">
                    {postData ? (
                        <div>
                            <div className={styles.BlogImgcont}>
                                <Image
                                    src={imgSrc}
                                    className={styles.BlogImg}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Autumn Sale Banner"
                                    objectPosition="center"
                                />
                            </div>
                            <h1>{postData.title}</h1>
                            <div>
                                {blogDate ? (
                                    <p>{`${blogDate.getFullYear()}年${blogDate.getMonth()}月${blogDate.getDate()}日`}</p>
                                ) : null}
                            </div>
                            <div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: postData.body,
                                    }}
                                />
                            </div>
                        </div>
                    ) : <NotFound/>}
                </section>
            </>
        </div>
    );
};

export default BlogDetail;
