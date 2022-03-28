export interface IUserWallet {
  currencyLogo: string;
  id: number;
  price: string;
  currencyType: string;
}

export interface IPayment {
  id: number;
  bank: string;
  urlImage: string;
  typeBank?: string;
}

export interface IPaymentWallet {
  id: number;
  urlImage: string;
  walletType: string;
  description: string;
}
