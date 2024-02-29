import RichTextParser from "@/utils/RichTextParser";

interface Props extends SimpleRichText {}
export default function SimpleRichText({body}: Props) {
  return <div className="py-10 px-6">
    <RichTextParser body={body} />
  </div>
}