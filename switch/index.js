let testscore= 100;
let lettergrade;

 switch (true)
{
    case testscore >=90: 
    lettergrade = "A"; 
    break; 

    case testscore >=80: 
    lettergrade = "B"; 
    break; 

    case testscore >=70: 
    lettergrade = "C"; 
    break; 

    case testscore >=60: 
    lettergrade = "D"; 
    break; 

    default : lettergrade = "Fail";
}
  console.log (window.prompt(lettergrade));