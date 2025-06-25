import User from './User';
import {Choice} from './Choice';

export default interface Vote {
  id:number;
  date:Date;
  voter: User;
  choice: Choice;
}
