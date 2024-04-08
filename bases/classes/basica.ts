(() => {
  class Avenger {
    public static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
  // console.log(antman);
  // console.log(Avenger.avgAge); // property static
  // console.log(antman.bio());
})();
