interface RecentBlogPosts {
  globalType: string;
  blogPosts: {
    blogPost: BlogPost;
  }[];
  [index: string]: any;
}