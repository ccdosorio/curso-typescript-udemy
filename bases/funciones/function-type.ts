(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo está salvado!`;

  // let myFunction: (y: number, z: number) => number;
  // let myFunction: (y: string) => string;
  // let myFunction: () => string;
  let myFunction: Function;

  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  myFunction = greet;
  console.log(myFunction("Christian"));

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
