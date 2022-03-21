{
    "meta": {
        "total_count": 4
    },
    "items": [
        {
            "id": 4,
            "meta": {
                "type": "blog.BlogPage",
                "detail_url": "http://localhost/api/v2/cms/pages/4/",
                "html_url": "http://localhost/blog/",
                "slug": "blog",
                "first_published_at": "2022-03-15T09:09:19.196784Z"
            },
            "title": "Blog"
        },
        {
            "id": 5,
            "meta": {
                "type": "blog.BlogPage",
                "detail_url": "http://localhost/api/v2/cms/pages/5/",
                "html_url": "http://localhost/jacare/",
                "slug": "jacare",
                "first_published_at": "2022-03-16T07:48:39.603494Z"
            },
            "title": "Jacare"
        },
        {
            "id": 6,
            "meta": {
                "type": "blog.BlogPage",
                "detail_url": "http://localhost/api/v2/cms/pages/6/",
                "html_url": "http://localhost/anything/",
                "slug": "anything",
                "first_published_at": "2022-03-16T07:49:40.226736Z"
            },
            "title": "Anything"
        },
        {
            "id": 7,
            "meta": {
                "type": "blog.BlogPage",
                "detail_url": "http://localhost/api/v2/cms/pages/7/",
                "html_url": "http://localhost/extra-extra/",
                "slug": "extra-extra",
                "first_published_at": "2022-03-16T07:51:22.945633Z"
            },
            "title": "Extra Extra!"
        }
    ]
}

type TPost = {
    id: number;
    meta: {
        type: string;
        detail_url: string;
        html_url: string;
        slug: string;
        first_published_at: string;
    },
    title: string;
}
type TPostData = {
    meta: {
        total_count: number;
    },
    items: TPost[];
}