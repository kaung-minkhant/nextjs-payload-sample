interface Hero {
  id: string,
  heading: string,
  text: string,
  backgroundImage: Media,
  blockType: string,
  [index: string]: string | any;
}