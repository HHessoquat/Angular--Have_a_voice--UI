import User from './User';
import {Choice} from './Choice';

export default interface Election {
  id:string;
  name:string;
  organizer: User;
  choices: Choice[];
}
