import Hero from "./Hero";
import RecentBlogPosts from "./RecentBlogPosts";
import SimpleRichText from "./SimpleRichText";
import TwoColumn from "./TwoColumn";

const Blocks: { [key: string]: any } = {
  hero: Hero,
  twoColumn: TwoColumn,
  simplerichtext: SimpleRichText,
  'recent-blog-posts-block': RecentBlogPosts
};

export default Blocks;
