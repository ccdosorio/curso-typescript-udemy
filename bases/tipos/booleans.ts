(() => {
  let isSuperman: boolean = true;
  console.log({ isSuperman }); //true

  isSuperman = true && false;
  console.log({ isSuperman }); //false
})();
