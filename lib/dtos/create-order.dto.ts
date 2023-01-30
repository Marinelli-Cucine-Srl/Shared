export interface ICreateOrderDto {
  lang: string;
  resellerId: string;

  configId: string;
  configPrice: string;
  configResellerCode: string;

  chosenHobId?: string;
  chosenHobPrice?: string;

  chosenAccessories: Array<{
    id: string;
    internalResellerCode: string;
    price: string;
  }>;
}
