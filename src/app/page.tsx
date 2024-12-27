
import { getPosts } from "@/sanity/sanitty-utils"; 
import BlogItem from "./components/blog";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="py-5">
      {posts?.length > 0 ? (
        posts.map((post: any, i) => <BlogItem key={i} blog={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}