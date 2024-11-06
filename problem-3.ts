{
    const countWordOccurrences = (params : string , searchParams : string) : number  =>{
        const spiltParams : string[] = params.split(' ');
        const searchValue : string[] = spiltParams.filter(value => value.toLocaleLowerCase().includes(searchParams.toLocaleLowerCase()))
        return searchValue.length;
    }
console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
}