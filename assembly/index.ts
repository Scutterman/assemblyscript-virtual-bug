import { Lemming } from './lemming'
import { Level } from './levels/level'

export let lemmings: Lemming[] = []
class Level1 extends Level {}

export function start(): void {
  lemmings = []
  const currentLevel = new Level1()
  while(true) {
    currentLevel.processLemmingSelect()
    currentLevel.gameLoop()
  }
}

export declare function log(text: string): void
