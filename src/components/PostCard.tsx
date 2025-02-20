
"use client";
import { getPosts, } from "@/actions/post.action";


type Posts = Awaited<ReturnType<typeof getPosts>>;
type Post = Posts[number];
function PostCard({ post, dbUserId }: { post: Post; dbUserId: string | null }) {
  return (
    <div>PostCard</div>
  )
}

export default PostCard