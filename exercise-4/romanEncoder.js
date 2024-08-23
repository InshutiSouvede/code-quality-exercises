function romanNumeralencoder(number){
    const thousands = Math.floor(number/1000)%10
    const hundreds = Math.floor(number/100)%10
    const tens = Math.floor(number/10)%10
    const ones = number%10
    
    let romanNumber = ''
    
    if(thousands>0 && thousands<4){
      romanNumber += "M".repeat(thousands)
    }
    
    if(hundreds>0 && hundreds<4){
      romanNumber +="C".repeat(hundreds)
    }
    if(hundreds>3 && hundreds<6){
      romanNumber +="C".repeat(5-hundreds)+"D"
    }
    if(hundreds>5 && hundreds <9){
      romanNumber += "D"+ "C".repeat(hundreds-5)
    }
    if(hundreds === 9){
      romanNumber +="CM"
    }
    
    if(tens>0 && tens<4){
      romanNumber += "X".repeat(tens)
    }
    if(tens>3 && tens<6){
      romanNumber +="X".repeat(5-tens)+"L"
    }
    if(tens>5 && tens<9){
      romanNumber += "L"+ "X".repeat(tens-5)
    }
    if(tens ==9){
      romanNumber += "XC"
    }
    
    if(ones>0 && ones<4){
      romanNumber += "I".repeat(ones)
    }
    if(ones>3 && ones<6){
      romanNumber +="I".repeat(5-ones)+"V"
    }
    if(ones>5 && ones<9){
      romanNumber += "V"+ "I".repeat(ones-5)
    }
    if(ones == 9){
      romanNumber += "IX"
    }
  
    return romanNumber
  }