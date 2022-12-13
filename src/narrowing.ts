function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    }
    return padding + input;
  }



  function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }

  console.log(printAll(['a', 'b', 'c']))

  function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
  }

 const hello = Boolean("hello"); // type: boolean, value: true

 console.log(hello)
console.log(!!"world")

function multiplyAll(
    values: number[] | undefined,
    factor: number
  ): number[] | undefined {
    if (!values) {
      return values;
    } else {
      return values.map((x) => x * factor);
    }
  }

  function example(x: string | number, y: string | boolean) {
    if (x === y) {
      x.toUpperCase();    
      y.toLowerCase();       
    } else {
      console.log(x);        
      console.log(y);       
    }
  }