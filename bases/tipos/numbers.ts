(() => {
  let avengers = 10;
  console.log(avengers);
  const villians: number = 20;

  if (avengers < villians) {
    console.log("Estamos en problemas");
  } else {
    console.log("nos salvamos");
  }

  avengers = 20;
  avengers = Number("55A");

  console.log({ villians, avengers });
})();
