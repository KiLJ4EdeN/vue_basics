switch (new Date().getDay()) {      // input is current day
    case 6:                         // if (day == 6)
        text = "Saturday";          
        break;
    case 5:                         
        text = "Friday";          
        break;  
    case 4:                         
        text = "Thursday";          
        break;   
    case 3:                         
        text = "Wednesday";          
        break; 
    case 2:                         
        text = "Tuesday";          
        break;  
    case 1:                         
        text = "Monday";          
        break;               
    case 0:                         // if (day == 0)
        text = "Sunday";
        break;
    default:                        // else...
        text = "Whatever";
    } 

console.log(text);
console.log(new Date().getDay());