(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {}

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      public name: string,
      public realName: string,
      public isMutant: boolean
    ) {
      super(name, realName);
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      this.name = name;
    }

    getFullNameByXmen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);
  // console.log(wolverine.fullName);
  wolverine.fullName = "Logan";
})();
