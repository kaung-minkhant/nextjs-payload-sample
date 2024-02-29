import axios from "axios";
import { CollectionAfterChangeHook, CollectionConfig } from "payload/types";

const afterChange: CollectionAfterChangeHook = async ({
  doc,
  req,
  operation,
}) => {
  const payload = req.payload;
  if (operation === "update" || operation === "create") {
    // get the recent collection doc
    const recentPostsGlobal = await payload.findGlobal({
      slug: "recent-blog-posts",
      depth: 0,
    });

    // get the blogPosts array from that doc
    let blogPosts: any = recentPostsGlobal.blogPosts;

    // check duplicate blog
    const exist: boolean = blogPosts.some((blogPost) => {
      return blogPost.blogPost === doc.id;
    });
    // if exist remove it
    if (exist) {
      blogPosts = blogPosts.filter((blogPost) => blogPost.blogPost !== doc.id);
    }
    // if blogPosts length is less than 4
    if (blogPosts.length < 3) {
      // if not, add the new doc to it
      blogPosts.push({
        blogPost: doc.id,
      });
      // if lenght is greater than 4
    } else {
      blogPosts.shift();
      blogPosts.push({
        blogPost: doc.id,
      });
    }

    // write to database
    await payload.updateGlobal({
      slug: "recent-blog-posts",
      data: {
        blogPosts: [...blogPosts],
      },
    });
  }
};

const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  labels: {
    singular: "Blog Post",
    plural: "Blog Posts",
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [afterChange],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Title",
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
    },
    {
      name: "body",
      label: "Body",
      type: "richText",
    },
  ],
};

export default BlogPosts;
