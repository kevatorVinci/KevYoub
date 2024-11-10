export class Main {
  minuteSimple(minute) {
    let bottomRow = ["O", "O", "O", "O"];

    if (minute === 0) {
      return bottomRow.join("");
    };

    if (minute === 1) {
      bottomRow[0] = "Y";
      return bottomRow.join("");
    };
    if (minute === 2) {
      bottomRow[0] = "Y";
      bottomRow[1] = "Y";
      return bottomRow.join("");
    };

    if (minute === 3) {
      bottomRow[0] = "Y";
      bottomRow[1] = "Y";
      bottomRow[2] = "Y";
      return bottomRow.join("");
    };

    if (minute === 4) {
      bottomRow[0] = "Y";
      bottomRow[1] = "Y";
      bottomRow[2] = "Y";
      bottomRow[3] = "Y";
      return bottomRow.join("");
    };

    if (minute === 5) {
      return bottomRow.join("");
      };

    
  };
};
