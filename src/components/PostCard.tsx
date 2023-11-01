import { Post } from '@/types/entities/Post';
import Card from './ui/Card';

type PostCardProps = {
    post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
    return (
        <Card>
            <h2 className="mb-4 text-xl font-semibold">{post.title}</h2>
            <p>{post.content}</p>
        </Card>
    );
};

export default PostCard;
