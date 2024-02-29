interface SimpleRichText {
  body: {
    root: {
      children: any[];
    };
  };
  blockType: string;
  id: string;
  [index: string]: string | any;
}
