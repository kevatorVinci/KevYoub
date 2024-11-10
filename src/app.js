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

    
    if(minute>=15 && minute<20){
      minutesFive[0]='Y';
      minutesFive[1]='Y';
      minutesFive[2]='R';

    };

    if(minute>=20 && minute<25){
      minutesFive[0]='Y';
      minutesFive[1]='Y';
      minutesFive[2]='R';
      minutesFive[3]='Y';

    };

    if(minute>=25 && minute<30){
      minutesFive[0]='Y';
      minutesFive[1]='Y';
      minutesFive[2]='R';
      minutesFive[3]='Y';
      minutesFive[4]='Y';

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

