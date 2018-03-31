//Short Time Test

var FormatterTester = {
    shortTimeTest: function (date){
    var correct = "14:40 PM" === date;
    e = console.log(DateFormatter.getShortTime(new Date())+ " " + correct);
    try{
        if (e !== correct)throw "Error!! Time don't match";
        }
    catch (err){
    console.log(err)
        }
    }
 }  
FormatterTester.shortTimeTest(DateFormatter.getShortTime(date))

//Log Time Test

var FormatterTester = {
    longTimeTest: function (date){
    var correct = "14:40:30 PM" === date;
    e = console.log(DateFormatter.getLongTime(new Date())+ " " + correct);
    try{
        if (e !== correct)throw "Error!! Time don't match";
        }
    catch (err){
    console.log(err)
        }
    }
 }  
FormatterTester.longTimeTest(DateFormatter.getLongTime(date))

//Short Date Test

var FormatterTester = {
    shortDateTest: function (date){
    var correct = "3/30/2018" === date;
    e = console.log(DateFormatter.getShortDate(new Date())+ " " + correct);
    try{
        if (e !== correct)throw "Error!! Dates don't match";
        }
    catch (err){
    console.log(err)
        }
    }
 }  
FormatterTester.shortDateTest(DateFormatter.getShortDate(date))

//Long Date Test

var FormatterTester = {
    longDateTest: function (date){
    var correct = "March 30, 2018 14:52 PM" === date;
    e = console.log(DateFormatter.getLongDate(new Date())+ " " + correct);
    try{
        if (e !== correct)throw "Error!! Dates don't match";
        }
    catch (err){
    console.log(err)
        }
    }
 }  
FormatterTester.longDateTest(DateFormatter.getLongDate(date))

//Extended Date-Time Test

var FormatterTester = {
    extendedDateTimeTest: function (date){
    var correct = "Saturday, April 30, 2018 14:52 PM" === date;
    e = console.log(DateFormatter.getExtendedDateTime(new Date())+ " " + correct);
    try{
        if (e !== correct)throw "Error!! Dates don't match";
        }
    catch (err){
    console.log(err)
        }
    }
 }  
FormatterTester.extendedDateTimeTest(DateFormatter.getExtendedDateTime(date))


