{
    interface Person {
      name: string;
      age: number;
      email: string;
    }
  const validateKeys = <T extends Person>(obj: T, keys: (keyof T)[]): boolean => {
    for(const key of keys) {
      if(key in obj){
        return true
      }
    }
    return false;
  };
  const person : Person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));
}
