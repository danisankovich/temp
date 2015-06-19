function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
        args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
             timeout = null;
             if (!immediate) {
               func.apply(context, args);
             }
        }, wait);
        if (immediate && !timeout)
            func.apply(context, args);
     };
}

//setTimeout example
//as long as type and not stop for 3000 milliseconds, event should not fire. if you stop typing,
//it should fire.

//if you console.log and you type fast enough, it should only show the end result in the console.
