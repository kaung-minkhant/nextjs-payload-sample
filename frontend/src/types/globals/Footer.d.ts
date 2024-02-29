interface Footer {
  globalType: string;
  bottomNavLinks: {
    label: string;
    link: string;
  }[];
  [index: string]: any;
}