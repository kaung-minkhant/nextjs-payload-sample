interface BlogPost {
  title: string;
  slug: string;
  body: {
    root: {
      children: any[];
    };
  }
}