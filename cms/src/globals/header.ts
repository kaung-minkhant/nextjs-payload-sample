import { GlobalConfig } from "payload/types";

const Header: GlobalConfig = {
  slug: "header",
  label: "Header",
  access: {
    read: () => true,
  },
  fields: [
    { name: "logo", type: "upload", relationTo: "media", label: "Logo" },
    {
      name: "navLinks",
      label: "Nav Links",
      type: "array",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
        },
        {
          name: "link",
          label: "Link",
          type: "text",
        },
      ],
    },
  ],
};

export default Header;
