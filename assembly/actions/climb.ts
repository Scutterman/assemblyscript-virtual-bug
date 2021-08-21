import { Lemming } from "../lemming";
import { LemmingAction } from "./lemmingAction";

export class Climb extends LemmingAction {  
  public label(): string {
    return 'Climber'
  }
  
  update(lemming: Lemming): void { }
}
