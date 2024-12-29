 
'use client'
import config from "@/sanity/config/client-config";

import { PortableText } from "@portabletext/react";
 import { getImageDimensions } from "@sanity/asset-utils";
 import urlBuilder from "@sanity/image-url";
 import Image from "next/image";

// // lazy-loaded image component
// const ImageComponent = ({ value, isInline }: any) => {
//   const { width, height } = getImageDimensions(value);
//   return (
//     <div className="my-10 overflow-hidden rounded-[15px]">
//       <Image
//         src={
//           urlBuilder(config)
//             .image(value)
//             .fit("max")
//             .auto("format")
//             .url() as string
//         }
//         width={width}
//         height={height}
//         alt={value.alt || "blog image"}
//         loading="lazy"
//          style={{
//          display: isInline ? "inline-block" : "block",
//          aspectRatio: width / height,
//          }}
//       />
//     </div>
//   );
// };

// const components = {
//   types: {
//     image: ImageComponent,
//   },
// };

// const RenderBodyContent = ({ post }: { post: Blog }) => {
//   return (
//     <>
//       <PortableText value={post?.body as any} components={components} />
//     </>
//   );
// };

// export default RenderBodyContent;







// // 

// import config from "@/sanity/config/client-config";
// import { Blog } from "@/types/blog"; 
// import { PortableText } from "@portabletext/react";
// import { tryGetImageDimensions } from "@sanity/asset-utils"; 
// import urlBuilder from "@sanity/image-url";
// import Image from "next/image";

// // lazy-loaded image component
// const ImageComponent = ({ value, isInline }: any) => {
//   const { width, height } = tryGetImageDimensions(value);
//   return (
//     <div className="my-10 overflow-hidden rounded-[15px]">
//       <Image
//         src={
//           urlBuilder(config)
//             .image(value)
//             .fit("max")
//             .auto("format")
//             .url() as string
//         }
//         width={width}
//         height={height}
//         alt={value.alt || "blog image"}
//         loading="lazy"
//         style={{
//           display: isInline ? "inline-block" : "block",
//           aspectRatio: width / height,
//         }}
//       />
//     </div>
//   );
// };

// const components = {
//   types: {
//     image: ImageComponent,
//   },
// };

// const RenderBodyContent = ({ post }: { post: Blog }) => {
//   return (
//     <>
//       <PortableText value={post?.body as any} components={components} />
//     </>
//   );
// };

// export default RenderBodyContent;



// import { createImageUrlBuilder } from '@sanity/image-url';
// import Image from 'next/image';

// // Configure Sanity image URL builder
// const config = {
//   projectId: 'sux6r3zq', 
//   dataset: 'production', 
// };

// const urlBuilder = createImageUrlBuilder(config);

// const ImageComponent = ({ value }: { value: any }) => {
//   if (!value?.asset?._ref) {
//     console.error('Invalid image value', value);
//     return <p>Image not available</p>;
//   }

//   const imageUrl = urlBuilder.image(value).fit('max').auto('format').url();
//   const { width = 400, height = 300 } = getImageDimensions(value);

//   return (
//     <Image
//       src={imageUrl}
//       alt={value.alt || 'Image description'}
//       width={width}
//       height={height}
//       loading="lazy"
//     />
//   );
// };

// export default ImageComponent























//  const ImageComponent = ({ value }: { value: any }) => {
//   if (!value?.asset?._ref) {
//     console.error("Invalid image value", value);
//     return <p>Image could not be loaded.</p>;
//   }

//   const imageUrl = urlBuilder(config)
//     .image(value)
//     .fit("max")
//     .auto("format")
//     .url();

//   const { width, height } = getImageDimensions(value);

//   return (
//     <Image
//       src={imageUrl}
//       alt={value.alt || "Image description"}
//       width={width}
//       height={height}
//       loading="lazy"
//     />
//   );
// };
// export default ImageComponent;


















import { Blog } from "@/types/blog";
import Link from "next/link";
import React from "react";

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={`/blog/${blog.slug.current}`}
      className="block p-5 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 my-8"
    >
      <article>
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-700">
          {blog.title}
        </h3>
        <p className="mb-3 font-normal text-sm text-gray-600">
          {new Date(blog.publishedAt).toDateString()}
        </p>

        <p className="mb-3 font-normal text-gray-600">
          {blog.metadata.slice(0, 140)}...
        </p>
      </article>
    </Link>
  );
};

export default BlogItem;