# Questions:- The significance of union and intersection types in Typescript.

Union and Intersection types are important features in TypeScript that help ensure type safety in my code.

## Union Types:

In TypeScript, a union type allows a variable to hold one of several specified types or values. It’s like saying, “This variable can be either one type or another.” This can be especially useful when you want a variable to be limited to a specific set of allowed values, which helps improve type safety in your code.

Here's an example of a function that uses a union type:

```sh
## Basic union Types

type PhoneNumberType = number | string;
const phoneNumber: PhoneNumberType = 01927583739; // Valid
const phoneNumber2: PhoneNumberType = '01927583739'; // Valid

## Union with Literal Types

type animal = "dog" | "cat" | "elephant";
const animalType: AnimalType = "dog"; // Valid
const animalType2: AnimalType = "cat"; // Valid
const animalType3: AnimalType = "elephant"; // Valid
const animalType4: AnimalType = "bird"; // Invalid (because Type 'bird' is not assignable to type 'animal')

```
## Significance of Union Types:
- Flexibility: Allows a variable to represent multiple types, enabling broader use cases.
- Type Safety: Enforces type constraints at compile-time, reducing runtime errors by making sure only valid types are used.


## Intersection Types:

Intersection types, on the other hand, enable the combination of multiple types into a single type. This feature is beneficial when we want an object to have the characteristics of multiple types.

Here's an example of intersection types:
```sh

## Basic Intersection Types
interface Person { name: string; age: number };

interface Employee { department: string; salary: number };

type FullPerson = Person & Employee;

const Saiful: FullPerson = { name: 'Md Saiful Islam', age: 22, department: 'Web developer', salary: 5000 }; // Valid

## Intersection with Literal Types

type Animal = { species: "dog" | "cat" | "elephant" };

type Dog = Animal & { barks: true };

type Cat = Animal & { meows: true };

const dog: Dog = { species: 'dog', barks: true }; // Valid

const cat: Cat = { species: 'cat', meows: true }; // Valid

## Intersection with Union Types

type PhoneNumberType = number | string;

type FullNameType = { firstName: string; lastName: string };

type User = FullNameType & { phoneNumber: PhoneNumberType };

const user: User = { firstName: 'Md Saiful', lastName: 'Islam', phoneNumber: 01927583739 }; // Valid
```
## Significance of Intersection Types:
- Combining Multiple Types: Useful for scenarios where an object must conform to multiple type interfaces.
- Enhances Composition: Enables modular type definitions, making it easy to compose complex types from simpler ones.