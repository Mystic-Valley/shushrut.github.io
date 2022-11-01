function getAge(fromdate, todate){
    if(todate) todate= new Date(todate);
    else todate= new Date();

    var age= [], fromdate= new Date(fromdate),
    y= [todate.getFullYear(), fromdate.getFullYear()],
    ydiff= y[0]-y[1],
    m= [todate.getMonth(), fromdate.getMonth()],
    mdiff= m[0]-m[1],
    d= [todate.getDate(), fromdate.getDate()],
    ddiff= d[0]-d[1];

    if(mdiff < 0 || (mdiff=== 0 && ddiff<0))--ydiff;
    if(mdiff<0) mdiff+= 12;
    if(ddiff<0){
        fromdate.setMonth(m[1]+1, 0);
        ddiff= fromdate.getDate()-d[1]+d[0];
        --mdiff;
    }
    if(ydiff> 0) age.push(ydiff+ ' year'+(ydiff> 1? 's ':' '));
    if(mdiff> 0) age.push(mdiff+ ' month'+(mdiff> 1? 's':''));
    if(ddiff> 0) age.push(ddiff+ ' day'+(ddiff> 1? 's':''));
    if(age.length>1) age.splice(age.length-1,0,' and ');
    document.write(age.join(''));
    return age.join('');
}
// truncateDecimals = function (number, digits) {
//     var multiplier = Math.pow(10, Math.abs(digits)),
//         adjustedNum = number * multiplier,
//         truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);
//
//     return truncatedNum / multiplier;
// };
var age, daysBetweenDates;
daysBetweenDates = function(d1, d2) {
  var diffDays, oneDay;
  oneDay = 24 * 60 * 60 * 1000;
  diffDays = (d2 - Date.parse(d1)) / oneDay;
  return diffDays;
};

age = function() {
  $('#myAge').text(daysBetweenDates('Jan 7, 2021 00:00:00', new Date()) / 365);
};

setInterval(age, 1000);
