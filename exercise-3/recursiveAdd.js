function add(array,i=0,sum = 0){
    sum += array[i]
    if(i==array.length-1){
        return sum
    }
    return add(array,i+1,sum)
}