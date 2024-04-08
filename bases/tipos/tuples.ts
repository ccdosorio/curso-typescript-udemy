(() => {
  const hero: [string, number, boolean] = ["Dr Strange", 100, true];

  hero[0] = "Iroman";
  hero[1] = 50;

  console.log({ hero });
})();
