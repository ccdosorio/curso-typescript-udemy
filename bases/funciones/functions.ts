(() => {
  const hero: string = "Flash";
  function returnName(): string {
    return hero;
  }

  const activateBatisignal = (): string => {
    return "Batiseñal activdad!";
  };

  console.log(typeof activateBatisignal);

  const heroName = returnName();
})();
