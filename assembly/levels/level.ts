import { lemmings, log } from ".."
import { Lemming } from "../lemming"
import { BaseLevel } from "./baseLevel"

export class Level extends BaseLevel {
  constructor() {
    super()
    lemmings.push(new Lemming())
  }
  
  public processLemmingSelect(): boolean {
    for (let i = 0; i < lemmings.length; i++) {
      lemmings[i].isClimber = true
      log('About to show label')
      log(lemmings[i].action.label())
    }

    return false
  }
  
  public gameLoop(): boolean {
    this.updateLemmings()
    return true
  }

  public updateLemmings(): void {
    for (let i = 0; i < lemmings.length; i++) {
      lemmings[i].update()
    }
  }
}
