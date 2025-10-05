export interface IProductType {
  idType: number;
  nameType: string;
  avt?: string | null;          // đổi thành optional để không bắt buộc
  description?: string | null;  // đổi thành optional để không bắt buộc
}
 