import cms_api from "@/network/cms_api";
import { getCollection, getCollectionItem } from "@/network/cms_methods";
import RichTextParser from "@/utils/RichTextParser";
import qs from "qs";

interface Props {
  params: {
    blogPost: string;
  };
}

export async function generateStaticParams() {
  const pages: BlogPost[] = await getCollection<BlogPost[]>({collection: 'blog-posts'});

  return pages.map((blog: BlogPost) => ({
    blogPost: blog.slug,
  }));
}
export const dynamicParams = false;

export default async function Page({ params: { blogPost } }: Props) {
  const queryString = qs.stringify(
    {
      where: {
        slug: {
          equals: blogPost,
        },
      },
    },
    // {
    //   addQueryPrefix: false,
    // }
  );

  const post: BlogPost = await getCollectionItem<BlogPost>({collection: 'blog-posts', queryString})
  return (
    <div className="py-10 px-6">
      <h1>{post.title}</h1>
      <RichTextParser body={post.body} />
    </div>
  );
}
