import bcryptjs from 'bcryptjs';


interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  colors: ValidColors[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'men' | 'women' | 'unisex';
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin'|'manager'|'user'
}

type ValidSizes =  't35' | 't36' | 't37' | 't38' | 't39' | 't40' | 't41' | 't42' | 't43';
type ValidColors = 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'purple' | 'pink' | 'brown' | 'gray' | 'silver' | 'gold';
type ValidTypes = 'soccer' | 'tennis' | 'casual' | 'sandals' | 'run';


interface SeedData {
  users: SeedUser[];
  categories: string[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'leidytapiasgiraldo@gmail.com',
      name: 'Leidy Tapias',
      password: bcryptjs.hashSync('leidy123'),
      role: 'admin'
    },
    {
      email: 'valentinaaa.ramirezz123@gmail.com',
      name: 'Valentina Ramirez',
      password: bcryptjs.hashSync('valentina123'),
      role: 'user'
    },
     {
      email: 'cristoferfajardozapata@gmail.com',
      name: 'Cristofer Fajardo',
      password: bcryptjs.hashSync('cristofer123'),
      role: 'manager'
    }
  ],
  categories: [
    'Soccer', 'Tennis',  'Casual',  'Sandals',  'run'
  ],
  products: []
};