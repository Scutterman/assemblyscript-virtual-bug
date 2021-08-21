import { Lemming } from "../lemming";
import { Climb } from "./climb";

export abstract class LemmingAction {
  
  abstract update(lemming: Lemming): void
  abstract label(): string
  
  protected handleClimbing(lemming: Lemming): void {
    lemming.action = new Climb()
  }
}