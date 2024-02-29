import { GlobalConfig } from "payload/types";

const RecentBlogPosts: GlobalConfig = {
  slug: 'recent-blog-posts',
  label: 'Recent Blog Posts',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'blogPosts',
      label: 'Blog Posts',
      type: 'array',
      fields: [
        {
          name: 'blogPost',
          label: 'Blog Post',
          type: 'relationship',
          relationTo: 'blog-posts',
        }
      ]
    }
  ]
}

export default RecentBlogPosts;