// import React from "react";
// import { getPostBySlug } from "@/sanity/sanitty-utils"; 
// import ImageComponent from "@/app/components/blog/renderbodycontent";


// const SingleBlogPage = async ({ params }: { params: any }) => {
//   const post = await getPostBySlug(params.slug);

//   return (
//     <article className="my-10  px-10 py-5 md:px-24  max-w-[1000px] mx-auto">
//       <div className="mb-5">
      
//         <h1 className="text-3xl py-2">{post.title}</h1>
//         <p className="pb-1">
//           <span className="font-medium">Published:</span>
//           {new Date(post.publishedAt).toDateString()}
//           <span className="font-medium pl-2">by </span>
//           {post.author.name}

//         </p>

//         <p>{post.metadata}</p>
//       </div>

//       <article className="prose lg:prose-xl">
//         <ImageComponent blog={post}  />
//       </article>
//     </article>
//   );
// };

// export default SingleBlogPage;














import React from "react";
import { getPostBySlug } from "@/sanity/sanitty-utils"; 
import RenderBodyContent from "@/app/components/renderbody";

const SingleBlogPage = async ({ params }: { params: any }) => {
  const post = await getPostBySlug(params.slug);

  return (
    <article className="my-10">
      <div className="mb-5">
        <h1 className="text-3xl py-2">{post.title}</h1>
        <p className="pb-1">
          <span className="font-medium">Published:</span>
          {new Date(post.publishedAt).toDateString()}
          <span className="font-medium pl-2">by </span>
          {post.author.name}
        </p>

        <p>{post.metadata}</p>
      </div>

      <article className="prose lg:prose-xl">
        <RenderBodyContent post={post} />
      </article>
    </article>
  );
};

export default SingleBlogPage;