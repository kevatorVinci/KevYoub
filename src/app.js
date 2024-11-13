export class Main {
  minuteSimple(minute) {
    let bottomRow = this.loopBottomRow(minute);
    return bottomRow.join('');
  };

  minuteFiveSimple(minute) {
    
      let minutesFive = this.loopMinutesFive(minute);
  
    
      return minutesFive.join('');
  }

  hourSimple(hour) {
    let hourSimpleRow = Array(4).fill("O");

    if(hour ==1){
        hourSimpleRow[0] = 'R';
    } 
  

    return hourSimpleRow.join('');


    

  };
  
  
  loopMinutesFive(minute) {
    let minutesFive = Array(11).fill("O");


    const blocksOfFive = Math.floor(minute / 5);


    for (let i = 0; i < blocksOfFive; i++) {
      minutesFive[i] = (i % 3 === 2) ? 'R' : 'Y';
    }
    return minutesFive;
  }

    loopBottomRow(minute) {
        let bottomRow = ["O", "O", "O", "O"];
        for (let i = 0; i < minute % 5; i++) {
            bottomRow[i] = 'Y';
        };
        return bottomRow;
    };
};

