function isLeapYear (year){
        // const year = 1996;
    // console.log (year % 4); // modulas / bag shesh.
    const remainder = year % 4;
    // console.log (remainder == 0 );
    if (remainder == 0){
        return true;
    }
     else {
            return false;
    }
}
const check2000 = isLeapYear(1700);
console.log(check2000);