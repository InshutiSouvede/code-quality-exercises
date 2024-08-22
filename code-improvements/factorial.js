const calculateFactorial = (n)=>{
    return new Array(n).fill(0).reduce((ac,cv,i)=>ac*(i+1),1)
}
