import { getGlobal } from "@/network/cms_methods";

interface Props extends RecentBlogPostsBlock {}
export default async function RecentBlogPosts({ title }: Props) {
  const recentPosts = await getGlobal<RecentBlogPosts>({
    global: "recent-blog-posts",
  });
  const posts = recentPosts.blogPosts;
  return (
    <div className="mx-auto flex flex-col items-center justify-center flex-1">
      <h2 className="mb-10 text-xl font-bold underline">{title}</h2>
      <div className="grid grid-cols-3 gap-16">
        {posts.map((post) => {
          return (
            <div key={post.blogPost.title} className="bg-slate-500 min-h-[100px] rounded-lg px-6 py-3">
              <h3 className="text-center">{post.blogPost.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
