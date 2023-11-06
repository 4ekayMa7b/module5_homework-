let recipeMap = new Map([
        ["gas", "oxygen"],
        ["metall", "iron"],
        ["liquid", "water"]
      ]);
      
      recipeMap.forEach((value, key, map) => {
        console.log(`${key} -- ${value}`); 
      });