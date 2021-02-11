function explain_callback(name, age, task){
    task()    
    console.log('Hello', name);
    console.log('your age', age)
        
}
function washHand(){
    console.log('wash hand with soap')
}
function takeShower(){
    console.log('Take Shower')
}
function readingBook(){
    console.log('Reading lots of book and feeling well');
}
explain_callback ('Joinal', 33, washHand);
explain_callback ('Abdul', 34, takeShower);
explain_callback ('Aziz', 35, readingBook);
