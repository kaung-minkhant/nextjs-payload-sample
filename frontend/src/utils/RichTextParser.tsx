import serializeLexicalRichText from "./serializeLexicalRichText";

interface Props {
  body: any;
  className?: string;
  customClassName?: string;
}
export default function RichTextParser({body, className, customClassName}: Props) {
  if (!body?.root?.children) return ''
  return (
    <div className="rich-text">
      {
        serializeLexicalRichText({
          children: body.root.children,
          customClassNames: customClassName,
        })
      }
    </div>
  )
}