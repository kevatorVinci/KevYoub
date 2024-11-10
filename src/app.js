export class Main {
  minuteSimple(minute) {
    let bottomRow = this.loopBottomRow(minute);
    return bottomRow.join('');
  };

  minuteFiveSimple(minute) {
    let minutesFive = Array(11).fill("O");

    if(minute>=5 && minute<10){
      minutesFive[0]='Y';
    };

    if(minute>=10 && minute<15){
      minutesFive[0]='Y';
      minutesFive[1]='Y';

    };
      
    return minutesFive.join('');
    };

  
    loopBottomRow(minute) {
        let bottomRow = ["O", "O", "O", "O"];
        for (let i = 0; i < minute % 5; i++) {
            bottomRow[i] = 'Y';
        };
        return bottomRow;
    };
};

