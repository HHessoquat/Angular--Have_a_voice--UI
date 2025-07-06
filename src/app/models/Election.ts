import User from './User';
import {Choice} from './Choice';

export default interface Election {
  id:string;
  name:string;
  dateCreated: Date;
  dateStart: Date;
  dateEnd: Date;
  organizer: User;
  choices: Choice[];
}
