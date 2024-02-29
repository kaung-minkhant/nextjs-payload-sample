import cms_api from "@/network/cms_api";
import { getCollection } from "@/network/cms_methods";
import RenderBlocks from "@/utils/RenderBlocks";
import qs from "qs";

interface Props {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams() {
  // get normal pages
  const pages: Page[] = await getCollection<Page[]>({ collection: "pages" });

  // get templates
  const templates: PageTemplate[] = await getCollection<PageTemplate[]>({
    collection: "page-templates",
  });

  // for each template
  for (const template of templates) {
    // get the list of data pages, that template needs to render
    const templateCollectionsData = await getCollection<any[]>({
      collection: template.templateCollection,
    });

    // for each data page
    for (const templateCollectionData of templateCollectionsData) {
      // go through the template layout blocks, for each layout blocks defined in the template
      const layout = template.layout.map((layoutBlock: PageLayoutBlock) => {
        // stringify the layout block to scan for template strings
        let layoutBlockString = JSON.stringify(layoutBlock);
        const regex = /<%=(.*?)%>/g;
        const matches = layoutBlockString.match(regex);
        // if template strings are found
        if (matches) {
          for (const match of matches) {
            // get the key, this key also exists in data page
            const key = match.replace("<%=", "").replace("%>", "").trim();
            // get the value using key
            const value = templateCollectionData[key];
            // If it's a rich Text, replace the entire field
            if (value?.root?.children?.length) {
              layoutBlock[key] = value;
              return layoutBlock;
            } else {
              // Else just replace the specific parts
              layoutBlockString = layoutBlockString.replace(match, value);
            }
          }
        }
        return JSON.parse(layoutBlockString);
      });
      // push the generate page from template to pages to render
      pages.push({
        ...template,
        id: templateCollectionData.id,
        slug: `${template.slug}/${templateCollectionData.slug}`,
        layout: layout,
      });
    }
  }

  // save to file
  const fs = await import("fs");
  fs.writeFileSync("./src/pages.json", JSON.stringify(pages, null, 2));

  return pages.map((page: Page) => ({
    slug: page.slug === "index" ? [] : page.slug.split("/"),
  }));
}

export const dynamicParams = false;

export default async function Page({ params: { slug } }: Readonly<Props>) {
  const fs = await import("fs");
  const pages = JSON.parse(fs.readFileSync("./src/pages.json", "utf-8"));
  const page = pages.find((page: Page) => page.slug === slug.join("/"));
  // const query = {
  //   slug: {
  //     equals: slug ? slug[0] : "index",
  //   },
  // };
  // const queryString = qs.stringify(
  //   {
  //     where: query,
  //   },
  //   {
  //     addQueryPrefix: true,
  //   }
  // );
  // const page: Page = (await cms_api.get(`/api/pages${queryString}`)).data
  //   .docs[0];
  if (!page) {
    return <p>Empty Page</p>;
  }
  return (
      <RenderBlocks layout={page.layout} />
  );
}
