function printToConsole(constructor: Function) {
  // console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

// Ejemplo para bloquear un prototipo: Prevenir que alguien haga una expansion de metodo o propieades de una clase
const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // console.log({ target, propertyKey, descriptor });
    // descriptor.value = () => console.log("Hola mundo");
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < id || id > 800) {
        return console.error(" El id del pokemon debe estar entre 1 y 800");
      } else {
        return originalMethod(id);
      }
    };
  };
}

function Readonly(isWritable: boolean = true) {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return "Christian";
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    Object.defineProperty(target, propertyKey, descriptor);
  };
}

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  @Readonly(true)
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToBD(id: number) {
    console.log(`Pokemon guardado en base de datos ${id}`);
  }
}
