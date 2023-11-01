import { Post } from '@/types/entities/Post';
import PostCard from './PostCard';

type PostFeedProps = {
    posts: Post[];
};

const PostFeed = ({ posts }: PostFeedProps) => {
    return (
        <div className="flex flex-col gap-4">
            {posts.map((post, i) => (
                <PostCard key={i} post={post} />
            ))}
        </div>
    );
};

export default PostFeed;
