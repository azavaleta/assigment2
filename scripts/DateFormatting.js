//DateFormatting.js
var DateFormatter = {
//GetShortTime hours,minutes,AM-PM
getShortTime: function(date){
var curr_hour = date.getHours();
var curr_min = date.getMinutes();
var a_p = (curr_hour < 12) ? "AM" : "PM";
   return curr_hour + ":" + curr_min +" " + a_p;
},
//GetLongTime hours,minutes,seconds,AM-PM
getLongTime: function(date){
var curr_hour = date.getHours();
var curr_min = date.getMinutes();
var curr_sec = date.getSeconds();
var a_p = (curr_hour < 12) ? "AM" : "PM";
   return curr_hour + ":" + curr_min + ":" + curr_sec + " " + a_p;
},
//getShortDate - returns the date in the following format month/day/year
getShortDate: function(date){
var curr_month = date.getMonth()+1;
var curr_day = date.getDate();
var curr_year = date.getFullYear();
   return curr_month + "/" + curr_day + "/" + curr_year;
},
//getLongDate - returns the date in the following format Month Day, Year
getLongDate: function(date){
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var full_month = monthNames[date.getMonth()];
var curr_date = date.getDate();
var curr_year = date.getFullYear();
   return full_month + " " + curr_date + ", " + curr_year;
},
//getShortDateTime - returns the date in the following format month/day/year hour:minutes AM|PM 
getShortDateTime: function(date){
var curr_month = date.getMonth()+1;
var curr_day = date.getDate();
var curr_year = date.getFullYear();
var curr_hour = date.getHours();
var curr_min = date.getMinutes();
var a_p = (curr_hour < 12) ? "AM" : "PM";
   return curr_month + "/" + curr_day + "/" + curr_year + " " + curr_hour + ":" + curr_min +" " + a_p;
},
//getLongDateTime - returns the date in the following format- Month Day, Year hour:minutes AM|PM 
getLongDateTime: function(date){
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var full_month = monthNames[date.getMonth()];
var curr_date = date.getDate();
var curr_year = date.getFullYear();
var curr_hour = date.getHours();
var curr_min = date.getMinutes();
var a_p = (curr_hour < 12) ? "AM" : "PM";
   return full_month + " " + curr_date + ", " + curr_year + " " + curr_hour + ":" + curr_min +" " + a_p;
},
//getExtendedDateTime - returns the date in the following format- Day of the week, Month Day, Year hour:minutes AM|PM 
getExtendedDateTime : function(date){
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
const dayNames = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"];  
var full_month = monthNames[date.getMonth()+1];
var full_day = dayNames[date.getDay()-1];
var curr_date = date.getDate();
var curr_year = date.getFullYear();
var curr_hour = date.getHours();
var curr_min = date.getMinutes();
var a_p = (curr_hour < 12) ? "AM" : "PM";
   return full_day + ", " + full_month + " " + curr_date + ", " + curr_year + " " + curr_hour + ":" + curr_min +" " + a_p;
},
//Bottom line console
}
var date = new Date();
console.log(DateFormatter.getShortTime(date));
console.log(DateFormatter.getLongTime(date));
console.log(DateFormatter.getShortDate(date));
console.log(DateFormatter.getLongDate(date));
console.log(DateFormatter.getShortDateTime(date));
console.log(DateFormatter.getLongDateTime(date));
console.log(DateFormatter.getExtendedDateTime(date));

//NOTES

//Short hand for if statement. 
// var a_p = (curr_hour < 12) ? "am" : "pm";
          //Interpretation// (? = if) (: = else)  (if hour<12 is true, a_p=pm, else a_p=am
   