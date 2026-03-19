import {useMemo} from "react";

export const usePagedPost = (totalPages) => {
    return useMemo(() => {
        let pagesArray = [];

        for (let i = 0; i < totalPages; i++) {
            pagesArray.push(i + 1);
        }

        return pagesArray;
    }, [totalPages]);
}

export const useSortedPost = (posts, sort) => {
    return useMemo(() => {
        return sort ?
            [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
            : posts;
    }, [sort, posts]);
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPost(posts, sort);
    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    },[query, posts]);
}