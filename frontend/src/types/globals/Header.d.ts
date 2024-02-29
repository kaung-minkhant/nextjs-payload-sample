interface Header {
  logo: Media;
  navLinks: {
    label: string;
    link: string;
  }[];
  globalType: string;
  [index: string]: any;
}