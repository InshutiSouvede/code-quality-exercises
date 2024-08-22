const isPrime = (number)=>{
    if(number<2) return false
    if(Math.sqrt(number)== Math.floor(Math.sqrt(number))) return false
    let limit = number>10? 10:number
    for(let i = 2;i<limit;i++){
        if(number%i===0){
            return false
        }
    }
    return true
}