
import { Blog } from "@/types/blog";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";

import Image from "next/image";

const ImageComponent = ({ value, isInline }: any) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className="my-10 overflow-hidden rounded-[15px]">
      <Image
        src={'/AI.jpg'}
        width={width}
        height={height}
        alt={value.alt || "blog image"}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
      />
    </div>
  );
};

const components = {
  types: {
    image: ImageComponent,
  },
};

const RenderBodyContent = ({ post }: { post: Blog }) => {
  return (
    <>
      <PortableText value={post?.body as any} components={components} />
    </>
  );
};

export default RenderBodyContent;
