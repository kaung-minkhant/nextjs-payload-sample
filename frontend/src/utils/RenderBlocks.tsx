import Blocks from "@/components/blocks";

interface Props {
  layout: PageLayoutBlock[];
}
export default function RenderBlocks({ layout }: Readonly<Props>) {
  return (
    <>
      {layout.map((layoutBlock: PageLayoutBlock, index: number) => {
        const Block = Blocks[layoutBlock.blockType];
        if (Block) {
          return <Block key={`block-${layoutBlock.id}`} {...layoutBlock} />;
        }
      })}
    </>
  );
}
