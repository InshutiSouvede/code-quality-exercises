const calculateMatrixSum = (matrix)=> {
    return matrix.reduce((sum,row)=>{
        return sum + row.reduce((acc,cv)=>acc+cv)
    },0)    
}
