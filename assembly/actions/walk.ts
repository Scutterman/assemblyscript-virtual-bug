import { Lemming } from "../lemming";
import { LemmingAction } from "./lemmingAction"

export class Walk extends LemmingAction {
  public update(lemming: Lemming): void {
    this.handleClimbing(lemming)
  }
  
  public label(): string {
    return 'Walker'
  }
}