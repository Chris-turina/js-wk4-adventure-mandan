export class Room {
  constructor(
    public id: number,
    public name: string,
    public text: string,
    public options: Option[]
  ) {}

  getOptions(haveRock: boolean) {
    let output: Option[] = [];
    this.options.forEach((option) => {
      if (!option.requiresRock || option.requiresRock && haveRock) {
        output.push(option);
      }
    });
    return output;
  }
}

export class Option {
  constructor(
    public linkedId: number,
    public description: string,
    public requiresRock: boolean
  ) {}
}
