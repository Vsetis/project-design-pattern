import { useEffect, useState } from 'react';

import { posts as dummyPosts } from './api/data/posts';
import { Post } from '@/types/entities/Post';
import PostFeed from '@/components/PostFeed';

const HomePage = () => {
    const [posts, setPosts] = useState<Post[]>(dummyPosts);

    useEffect(() => {
        // fetch data
    }, []);

    return (
        <div className="container mx-auto py-4">
            <h1 className="text-center text-4xl font-bold mb-8">Home Page</h1>
            <div className="w-full md:w-1/2 mx-auto">
                <PostFeed posts={posts} />
            </div>
        </div>
    );
};

export default HomePage;
