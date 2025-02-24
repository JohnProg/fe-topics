import { User } from '@/features/users/domain/entities/user.entity';

export class UserModel {
  static fromJson(jsonItem: { [key: string]: string }) {
    return User.new(jsonItem['id'], jsonItem['name'], jsonItem['email'], jsonItem['phone']);
  }
}
