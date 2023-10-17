type Wine = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  tag: string;
  price : number;
  imageUrl: string;
  dateOfTasting: Date;
  country: string;
  region: string;
  smell: string;
  taste: string;
  colour: string;
  users: User[];
};
