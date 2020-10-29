import { Product } from './types'
import { User } from "./types";

export type CardProps = {
    product: Product
}

export type TbodyProps = {
  data: Product;
  handleProductUpdate: (id:string, values:any)=>void
  handleProductDelete: (id: string) => void
  error:string|null
  
};

export type ProductEditProps = {
  closeIt:React.Dispatch<React.SetStateAction<boolean>>;
  data: Product;
  handleProductUpdate: (id:string, values:any)=>void
  error:string|null  
};
export type ProductAddProps = {
  closeIt:React.Dispatch<React.SetStateAction<boolean>>;
  handleProductCreate: (values:any)=>void
  error:string|null  
};

export type UserTbodyProps = {
  data: User;
  handleUpdate: (id:string, values:any)=>void
  handleDelete: (id: string) => void
  error:string
};
export type UserEditProps = {
  closeIt:React.Dispatch<React.SetStateAction<boolean>>
  data: User;
  handleUpdate: (id:string, values:any)=>void
  error:string
};

export type CartProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  token:string|undefined
}

export type NavProps = {
  style: any
  handleDisplay:(event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>void
  handleSearch:(e:any)=>void
  handleSort:(category: string, minPrice: number, maxPrice: number)=>void
}

export type CartItemsProps = {
  product: Product
  updateCount:(id:string, value:any)=>void
}

export type DrawerProps = {
  style: any
  handleSort:(category: string, minPrice: number, maxPrice: number)=>void
}

export type Order = {
  productId: string
  price: number | string
  count: string
  date:string
}
export type CheckoutData = {
  token: string|undefined
  products:Order
}

export type Credintials = {
  email: string
  password:string
}

export type Transactions = {
  checkout:Order[]
}

export type OrderItemsProps = {
  data:Order[]
}

export type LoggedUser = {
  name: string;
  email: string;
  token: string;
  admin: boolean
  banned:boolean
};
export type ParamTypes= {
  token: string;
}

export type RouterParams = {
  id:string
}

export type ThemeContextProps = {
  theme: string;
  info:   any;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setInfo: React.Dispatch<React.SetStateAction<any>>;
};

export type UpdatedUser = {
  firstName: string
  lastName: string
  email: string
  admin: string
  banned:string
}

