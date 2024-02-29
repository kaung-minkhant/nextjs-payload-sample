import { Block } from "payload/types";

const RecentBlogPostsBlock: Block = {
  slug: 'recent-blog-posts-block',
  labels: {
    singular: 'Recent Blog Post',
    plural: 'Recent Blog Posts',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    }
  ]
}

export default RecentBlogPostsBlock