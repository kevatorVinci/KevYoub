export class Main {
  minuteSimple(minute) {
    let bottomRow = ["O", "O", "O", "O"];
    for (let i = 0; i < minute % 5; i++) {
        bottomRow[i] = 'Y';
    }
    return bottomRow.join('');
  };
};

