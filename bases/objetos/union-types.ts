(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Christian";
  console.log(myCustomVariable);

  myCustomVariable = 20;
  console.log(myCustomVariable);

  myCustomVariable = {
    name: "Spiderman",
    age: 18,
    powers: ["Sentido aragnido"],
  };
})();
