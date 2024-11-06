{
  const sumArray = (numbers: number[]): number => {
    const sum = numbers.reduce((sum, number) => sum + number, 0);
    return sum;
  };
  console.log(sumArray([1, 2, 3, 4, 5]));
}
