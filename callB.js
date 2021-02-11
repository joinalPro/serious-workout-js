function explain_callback(name, age, task){
    task()
    console.log('Hello ', name);
    console.log('your age ', age);
}
function washHand(){
    console.log('wash hand with soap');
}
function takeShower(){
    console.log('take shower');
}
function readingBook(){
    console.log('Reading book is must!')
}
explain_callback('Abdul Aziz ', 17, washHand);
explain_callback('Abdullah', 11, takeShower);
explain_callback('Abdul', 13, readingBook )