import {IUser} from '../service/user.service';

export class User implements IUser{
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
}
