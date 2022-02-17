export interface IUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUserValidation {
  name: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
}
