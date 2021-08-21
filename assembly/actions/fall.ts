import { Lemming } from "../lemming";
import { LemmingAction } from "./lemmingAction"
import { Walk } from "./walk";

export class Fall extends LemmingAction {  
  public update(lemming: Lemming): void {
    lemming.action = new Walk()
  }
  
  public label(): string {
    return 'Falling'
  }
}