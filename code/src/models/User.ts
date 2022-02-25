export interface IUser {
  name: string;
  age: number;
  photo_url: string;
  review: string;
}

export interface IUserValidation {
  name: boolean;
  age: boolean;
  photo_url: boolean;
  review: boolean;
}
