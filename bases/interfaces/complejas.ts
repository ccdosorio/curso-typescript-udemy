(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddres(id: string): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Christian",
    age: 24,
    address: {
      id: 125,
      zip: "KYC SUID",
      city: "Ottawa",
    },
    getFullAddres(id: string) {
      return this.address.city;
    },
  };
})();
