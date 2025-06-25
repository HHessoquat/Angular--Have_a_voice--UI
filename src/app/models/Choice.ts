import Election from './Election';
import Vote from './Vote';

export declare interface Choice {
  id:number;
  name:String;
  picture:String;
  description:String;
  election:Election;
  votes:Vote[];
}
