import { CollectionConfig } from "payload/types";
import getCollectionSchemaHandler from "./handlers/getCollectionSchemaHandler";
import AttributesHelper from "./ui/attributeHelper";
import Blocks from "../../blocks";

const PageTemplates: CollectionConfig = {
  slug: "page-templates",
  labels: {
    singular: "Page Template",
    plural: "Page Templates",
  },
  access: {
    read: () => true,
  },
  endpoints: [
    {
      path: "/getCollectionSchema/:collection",
      method: "get",
      handler: getCollectionSchemaHandler,
    },
  ],
  fields: [
    {
      name: "attributeHelper",
      type: "ui",
      admin: {
        components: {
          Field: AttributesHelper,
        },
      },
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "templateCollection",
      label: "Collection",
      type: "select",
      defaultValue: "blog-posts",
      options: [{ label: "Blog Posts", value: "blog-posts" }],
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: Blocks,
    },
  ],
};

export default PageTemplates;
