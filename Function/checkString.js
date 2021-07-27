function stringInString(needle, haystack){
    var flag = false;
    // console.log(typeof(needle), typeof(needle))
    if (typeof(needle) == 'string' && typeof(haystack) =='string') {
        var array = haystack.split(' ');
        // console.log('check')
        for (var element of array){
            if (element == needle) {
                // console.log('check1')
                flag = true;
            }
        }
    }
    return flag;
}
 console.log(stringInString('js','study js'));
