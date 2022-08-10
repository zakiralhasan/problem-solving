/*

*/

/*
    1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and
    apples. Write a program to help Harry calculate how much money the
    shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of
    apples is tk 700
*/
const harrysMomGiveHimMoney = 1000;
const oneKiloOrangePrice = 400;
const oneKiloApplePrice = 300;
const totalPriceofFruits = oneKiloOrangePrice + oneKiloApplePrice;
const theMoneyShopkeeperWillReturn = harrysMomGiveHimMoney - totalPriceofFruits;

// console.log('The shopkeeper will return harry taka:', theMoneyShopkeeperWillReturn);

/*
    2) Write a program to calculate the average marks of Mathematics,
    Biology, Chemistry, Physics, and Bangla of a student.
*/
const marksOfMath = 83;
const marksOfBiology = 87;
const marksOfChemistry = 78;
const marksOfPhysics = 92;
const marksOfBangla = 89;

const totalMarksOftheStudent = marksOfMath + marksOfBiology + marksOfChemistry + marksOfPhysics + marksOfBangla;

const averageMarksOfTheStudent = totalMarksOftheStudent / 5;
// console.log('average marks of the student is:', averageMarksOfTheStudent);

/*
    3) John’s teacher gave him two variables. Each variable contains a string.
    John’s teacher asked him to combine these two strings(‘I am going to
    be’ and ‘an awesome web developer’) and print them in one line. Help
    John write the program.
*/
const variableOne = 'I am going to be';
const variableTwo = 'an awesome web developer';
const concatenationOfTwoVariable = variableOne + ' ' + variableTwo;

// console.log(concatenationOfTwoVariable);


/*
    4) Sarah’s mother is teaching her mathematics. She gave Sarah the number
    119 and asked her what the remainder would be if she divided the number
    by 5. Help Sarah write the program.
*/
const sarahsMotherGiveHerNumber = 119;
const remainderOfSarasMotherGivenNumber = sarahsMotherGiveHerNumber % 5;

// console.log("The remainder of Sarah's mother's given number is:", remainderOfSarasMotherGivenNumber);


/*
    5) নিচের ভেরিয়েবল ডিক্লেয়ার এ কোনটার মধ্যে কি কি সমস্যা আছে, দেখোতো বের করতে পারো কি না। 
    Var price = 33
    var name - Shabana
    var boxName = ‘Cocola;
    var 88_price = 34;
    var enum = -1;
    var _$box’78 = ‘Monika’;
    var home-address = “kochu khet”;
*/

/*
            Answer given below...........

    1. Var price = 33  (The keyword is started with a capital letter and no semicolon is given at the end.)

    2. var name - Shabana  (No equal sign, no string symbol used, no semicolon at the end.)

    3. var boxName = ‘Cocola;  (The string symbol is not used properly.)

    4. var 88_price = 34;   (The variable name has started with a number.)

    5. var enum = -1;   ('enum' is a keyword, that's why it is not declarable as a variable name.)

    6. var _$box’78 = ‘Monika’;  (The 'apostrophe' symbol is not useable in a variable name. The string symbol is not used properly.)

    7. var home-address = “kochu khet”;  (The 'hyphen' symbol is not useable in a variable name. The string symbol is not used properly.)

*/

/*
    6) You are given an array:
    var fruits = ['Watermelon', 'Apple', 'Banana', 'Orange'];
    a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
    b) Remove ‘Orange’ and add ‘Watermelon’.
*/
var fruits = ['Watermelon', 'Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
const indexOfBanana = fruits.indexOf('Banana');
fruits[indexOfBanana] = 'Mango';
// console.log(fruits);

// b) Remove ‘Orange’ and add ‘Watermelon’.
fruits.shift();
fruits.pop();
// console.log(fruits);


/*
    7) You and your friends Tom, Jane, Peter and John got their final exam
    results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
    95, Peter’s total score is 56 and John’s total score is 40. The grading
    chart is
    80 or above A grade
    60 or above B grade
    50 or above C grade
    40 or above D grade
    39 or less => F grade
    Write a program to find your and your friends’ grades using
    if-else.
*/
const myTotalNumber = 85;
const tomsTotalNumber = 66;
const jenesTotalNumber = 95;
const petersTotalNumber = 56;
const johnsTotalNumber = 40;

const totalNumber = myTotalNumber;

// if(totalNumber <= 100 && totalNumber >= 80){
//     console.log('A grade');
// }else if(totalNumber < 80 && totalNumber >= 60){
//     console.log('B grade');
// }else if(totalNumber < 60 && totalNumber >= 50){
//     console.log('C grade');
// }else if(totalNumber < 50 && totalNumber >= 40){
//     console.log('D grade');
// }else if(totalNumber < 40 && totalNumber >= 0){
//     console.log('F grade');
// }else{
//     console.log('Please enter a valid number.')
// };
    

/*
    8) You are given three numbers 13, 79, and 45. Write a program that will
    print the largest number using if-else.
*/
const num1 = 13;
const num2 = 79;
const num3 = 45;

// if(num1 > num2){
//     if(num1 > num3){
//         console.log('The largest number is:', num1);
//     }else{
//         console.log('The largest number is:', num3);
//     }
// }else{
//     if(num2 > num3){
//         console.log('The largest number is:', num2);
//     }else{
//         console.log('The largest number is:', num3);
//     }
// };


/*
    9) You are given a triangle with the sides 9, 8, 9. Write a program to check
    whether a triangle is Isosceles or not using if-else.
                     Isosceles => two sides are equal
*/
const triangleSideOne = 9;
const triangleSideTwo = 8;
const triangleSideThree = 9;

// if(triangleSideOne == triangleSideTwo || triangleSideOne == triangleSideThree || triangleSideTwo == triangleSideThree){
//     console.log('The given triangle is Isosceles.')
// }else{
//     console.log('The given triangle is not Isosceles.')
// };


/*
    10) ক্লাস সেভেন এর ফাইনাল এক্সাম এ তু িম ফার্স্ট হয়েছ । তোমার বন্ধু আলিয়া, ডালিয়া,
    সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তু িম জানো না। তবে তাদের নম্বর
    জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59,
    লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তু িম JS code দিয়ে তাদের grade বের করে
    দিতে পারবে?
    ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.
    ২) যারা ৫০ বা তার উপের পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.
    ৩) যারা ৬০ বা তার উপের পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.
    ৪) যারা ৭০ বা তার উপের পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.
    ৫) যারা ৮০ বা তার উপের পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.
    ৬) যারা ৯০ বা তার উপের পেয়েছে, তাদের grade A+.
*/
const aliasNumber = 95;
const daliasNumber = 66;
const saliasNumber = 80;
const maliasNumber = 59;
const liliasNumber = 47;
const jalayasNumber = 77;

const testNumber = aliasNumber;

// if(testNumber >= 90 && testNumber <=100){
//     console.log('Grade: A+');
// }else if(testNumber >= 80 && testNumber <90){
//     console.log('Grade: A');
// }else if(testNumber >= 70 && testNumber <80){
//     console.log('Grade: B');
// }else if(testNumber >= 60 && testNumber <70){
//     console.log('Grade: C');
// }else if(testNumber >= 50 && testNumber <60){
//     console.log('Grade: D');
// }else if(testNumber >= 0 && testNumber <50){
//     console.log('Grade: F');
// }else{
//     console.log('Please enter a valid number.');
// };

/*

*/

/*
    11) তাড়াহুড়া করে ইস্কুলের জন্য বের হচ্ছে কিন্তু রাস্তা পার হওয়া দেখলে, ট্রাফিক সিগন্যাল লাল রং. এই অবস্থা যদি তুমি রাস্তা পার হওয়ার চেষ্টা করো, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রীন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো, যেখানে  নামে একটা signal একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে. সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে. তো সেই কোড ফটাফট লিখে ফেলো
*/
const signal1 = 'red';
const signal2 = 'yellow';
const signal3 = 'green';

const signal = signal1;

// if(signal == signal1){
//     console.log('Stop! It is dangerous to cross the road now.');
// }else if(signal == signal2){
//     console.log('Stop! Please wait for the green signal.')
// }else if(signal == signal3){
//     console.log('You can cross the road now.')
// }else{
//     console.log('Unknown signal.');
// };


/*
12) তোমার দৈনন্দিন কাজ কি?
    1) 8 PM এ মডিউল আনলক করো।
    2) ফটাফট ভিডিও দেখে অনুশীলন করো।
    3) ভিডিও দেখার সময় নোট নাও।
    4) মডিউল শেষে, পুরো মডিউলটি নিজেই অনুশীলন করো।
    5) যদি কনো কিছু বুঝতে না পারো (এটি সম্পর্কে চিন্তা করো তবে একটি শর্ত আছে), support সেশনে যোগ দাও।
    এখন তোমার কাজ হল একটি for loop 10 বার চালিয়ে উপরের জিনিসগুলো আউটপুট হিসেবে দেখানো।
*/
const myDailyRoutine1 = [
    '1) Unlock the module at 8 PM.',
    '2) Practice by watching fotafot videos.',
    '3) Take notes while watching the videos.',
    '4) At the end of the module, practice the whole module by myself.',
    "5) If I don't understand anything (I think about it), join the support session.",
];

// for(let i = 0; i < 10; i++){
//     for(let x = 0; x < myDailyRoutine1.length; x++){
//         const singleElementOfArray = myDailyRoutine1[x];
//         console.log(singleElementOfArray);
//     }
//     const breakLine = '';
//     console.log(breakLine);
// };


/*
    13) আবার একই জিনিস while লপু চালিয়ে ১০ বার দেখানো।
*/
const myDailyRoutine2 = [
    '1) Unlock the module at 8 PM.',
    '2) Practice by watching fotafot videos.',
    '3) Take notes while watching the videos.',
    '4) At the end of the module, practice the whole module by myself.',
    "5) If I don't understand anything (I think about it), join the support session.",
];

// let i = 0;
// while(i < 10){
//     let x = 0;
//     while(x < myDailyRoutine2.length){
//         const singleElementOfArray = myDailyRoutine2[x];
//         console.log(singleElementOfArray);
//         x++;
//     }
//     i++;
//     const breakLine = '';
//     console.log(breakLine);
// };



/*
    14) উপেরর প্রব্লেমটাই while লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও।
*/
const myDailyRoutine3 = [
    '1) Unlock the module at 8 PM.',
    '2) Practice by watching fotafot videos.',
    '3) Take notes while watching the videos.',
    '4) At the end of the module, practice the whole module by myself.',
    "5) If I don't understand anything (I think about it), join the support session.",
];

// let i = 10;
// while(i >= 1){
//     let x = myDailyRoutine3.length -1;
//     while(x >= 0 ){
//         const singleElementOfArray = myDailyRoutine3[x];
//         console.log(singleElementOfArray);
//         x--;
//     }
//     i--;
//     const breakLine = '';
//     console.log(breakLine);
// };



/*
    15) উপেরর প্রব্লেমটাই for লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও।
*/
const myDailyRoutine4 = [
    '1) Unlock the module at 8 PM.',
    '2) Practice by watching fotafot videos.',
    '3) Take notes while watching the videos.',
    '4) At the end of the module, practice the whole module by myself.',
    "5) If I don't understand anything (I think about it), join the support session.",
];

// for(let i = 10; i >= 1; i--){
//     for(let x = myDailyRoutine4.length -1; x>=0; x--){
//         const singleElementOfArray = myDailyRoutine4[x];
//         console.log(singleElementOfArray);
//     }
//     const breakLine = '';
//     console.log(breakLine);
// };



