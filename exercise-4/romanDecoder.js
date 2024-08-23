function romanNumeralDecoder(roman){  
    let thousands = 0
    let hundreds = 0
    let tens = 0
    let ones = 0
    
    let numericNumber = 0
    
    for(let i=0;i<=roman.length;i++){
  //     Thousands or nine hundred
      if(roman[i]=="M"){
         if(roman[i-1]=="C"){
          hundreds = 10 - hundreds
          continue;
        }
        thousands++
        continue;
      }    
      
      //     hundreds or ninety
      if(roman[i] == "C"){
         if(roman[i-1]=="X"){
          tens = 10 - tens
          continue;
        }
        hundreds ++
        continue;
      }
      if(roman[i]=="D"){
        hundreds = 5 - hundreds
        continue;
      }
      
      //     tens or nine
      if(roman[i]=="X"){
        if(roman[i-1]=="I"){
          ones = 10 -ones
          continue;
        }
        tens ++
        continue;
      }
      if(roman[i]== "L"){
        tens = 5 - tens
        continue;
      }
    
      //     ones
      if(roman[i]=="I"){
        ones ++
        continue;
      }
      if(roman[i]== "V"){
        ones = 5 - ones
        continue;
      }
    }
    numericNumber = parseInt(""+thousands+hundreds+tens+ones)
      return numericNumber
  }