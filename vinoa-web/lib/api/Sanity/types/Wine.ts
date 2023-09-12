type Wine = {
  name: string;
  slug: {slug: string};
  image: {asset: {url: string}};
  tastedAt: Date;
  country: {name: string};
  region: {name: string};
  smell: string;
  taste: string;
  color: string;
}