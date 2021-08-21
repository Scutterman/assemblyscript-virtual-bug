export abstract class BaseLevel {
  public numberOfLemmings: u8 = 1
  
  public abstract processLemmingSelect(): boolean
  public abstract updateLemmings(): void
  public abstract gameLoop(): boolean
  
}
