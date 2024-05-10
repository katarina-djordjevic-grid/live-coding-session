export interface IProduct {
  id: number;
  price: number;
  name: string;
}

export interface IState {
  products: IProduct[];
  errors?: any;
}
