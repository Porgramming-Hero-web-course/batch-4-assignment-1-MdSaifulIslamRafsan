{
    const removeDuplicates  = (numbers : number[]) : number[] => {
        const removeDuplicateNumbers : number[] = [];
        for (const number of numbers) {
            if(!removeDuplicateNumbers.includes(number)){
                removeDuplicateNumbers.push(number);
            }
        }
        return removeDuplicateNumbers;
    }
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
}