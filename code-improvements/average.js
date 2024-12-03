const calculateAverage = (numbers)=> {
    if(!numbers.length) return 0
    const sum = numbers.reduce((acc,cv) => acc + cv)    
    return sum / numbers.length;
}