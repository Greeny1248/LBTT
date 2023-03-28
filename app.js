function taxCalc(housePrice) {
    taxToPay = 0;
  if (housePrice >= 145001 && housePrice <= 250000) {
    return (housePrice/100)*2
  }
  if (housePrice >= 250001 && housePrice <= 325000) {
    return (housePrice/100)*5
  }
  if (housePrice >= 325001 && housePrice <= 750000) {
    return (housePrice/100)*10
  }
  if (housePrice >= 750001) {
    return (housePrice/100)*12
  }


  return taxToPay;
}
module.exports = { taxCalc };
