import { Fall } from "./actions/fall";
import { LemmingAction } from "./actions/lemmingAction";

export class Lemming {
  action: LemmingAction = new Fall()
  isClimber: boolean = false
  
  public update(): void {
    this.action.update(this)
  }
}
