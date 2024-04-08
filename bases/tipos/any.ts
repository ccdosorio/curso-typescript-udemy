(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = "Doctor Strange";
  // console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(0));

  avenger = 150.323242342;
  console.log(avenger.toFixed(2));

  console.log(power);
})();
