(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman = {
    name: "Tony Stark",
    weapon: "Armorsuit",
  };

  const captanAmerica = {
    name: "Cap. America",
    weapon: "Escudo",
  };

  const thor = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  const avengers: Avenger[] = [ironman, captanAmerica, thor];

  for (const avenger of avengers) {
    // console.log(avengers);
  }
})();
