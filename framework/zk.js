/* 
 * This framework is for self learning and practice purpose only
 */

/*main*/
var ZK = function() {};

ZK.prototype = {
    extend: function(tar, source) {
        for (var i in source) {
            tar[i] = source[i];
        }
        return tar;
    },
};

var $$ = new ZK();
/*data type*/
$$.extend($$, {

    isNumber: function(val) {
        return typeof val === 'number' && isFinite(val);
    },
    isBoolean: function(val) {
        return typeof val === "boolean";
    },
    isString: function(val) {
        return typeof val === "string";
    },
    isUndefined: function(val) {
        return typeof val === "undefined";
    },
    isObj: function(str) {
        if (str === null || typeof str === 'undefined') {
            return false;
        }
        return typeof str === 'object';
    },
    isNull: function(val) {
        return val === null;
    },
    isArray: function(arr) {
        if (arr === null || typeof arr === 'undefined') {
            return false;
        }
        return arr.constructor === Array;
    },

});
/*string*/
$$.extend($$, {
    //remove left space
    ltrim: function(str) {
        return str.replace(/(^\s*)/g, '');
    },
    //remove right space
    rtrim: function(str) {
        return str.replace(/(\s*$)/g, '');
    },
    //remove all space
    trim: function(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //simple bind data
    formateString: function(str, data) {
        return str.replace(/@\((\w+)\)/g, function(match, key) {
            return typeof data[key] === "undefined" ? '' : data[key]
        });
    },
});

/*general*/
$$.extend($$, {
    /*selector*/
    select: function(selector) {
        return $$.isString(selector) ? document.querySelector(selector) : selector;
    },
});

/*event*/
$$.extend($$, {
    //get event
    getEvent: function(event) {
        return event ? event : window.event;
    },
    //get target
    getTarget: function(event) {
        var e = $$.getEvent(event);
        return e.target || e.srcElement;
    },
    //prevent default event
    preventDefault: function(event) {
        var event = $$.getEvent(event);
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //stop propagation
    stopPropagation: function(event) {
        var event = $$.getEvent(event);
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    // add event listener
    on: function(s, e, fn) {
        const selector = $$.isString(s) ? document.querySelector(s) : s;
        selector.addEventListener(e, fn);
    },
    // remove event listener
    off: function(s, e, fn) {
        const selector = $$.isString(s) ? document.querySelector(s) : s;
        selector.removeEventListener(e, fn);
    },
    // click event
    click: function(s, fn) {
        $$.on(s, 'click', fn);
    },
});

/*css*/

/*property*/

/*dom*/

/*cache cookie*/