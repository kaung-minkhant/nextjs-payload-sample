import { GlobalConfig } from "payload/types";

const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "bottomNavLinks",
      label: "Bottom Nav Links",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          label: "Label",
        },
        {
          name: "link",
          type: "text",
          label: "Link",
        },
      ],
    },
  ],
};

export default Footer;
