interface TwoColumn {
  id: string
  heading: string,
  text: string,
  image: Media,
  direction: string,
  blockType: string,
  [index: string]: string | any;
}