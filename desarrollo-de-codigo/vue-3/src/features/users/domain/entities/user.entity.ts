export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export class User implements IUser {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
  ) {}

  static new(id: string, name: string, email: string, phone: string) {
    return new User(id, name, email, phone);
  }
}
