const numberFormat = function (num) {

    const isNegative = num != Math.abs(num)
    num = Math.abs(num)
    const numArr = num.toString().split("").reverse()
    const partArr =[]
    
    for(let i=0;i<numArr.length; i+=3){
      partArr.push(numArr.slice(i,i+3).reverse('').join(''))
    }
    
    return isNegative?'-'+partArr.reverse('').join(','):partArr.reverse('').join(',')
  };