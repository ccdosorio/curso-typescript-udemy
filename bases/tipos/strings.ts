(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna verde";
  const volcanNegro: string = `Héroe: Bolcan negro`;

  console.log(`I'm ${batman}`);

  console.log(batman.toLocaleUpperCase());
  console.log(batman[10]?.toLocaleUpperCase() || "No esta batman");
})();
