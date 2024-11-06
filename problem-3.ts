{
    const countWordOccurrences = (params : string , searchParams : string)  =>{
        const spiltParams = params.split(' ');
        const searchValue = spiltParams.filter(value => value.toLocaleLowerCase().includes(searchParams.toLocaleLowerCase()))
        return searchValue.length;
    }
console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
}