function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(t,e,r){var a,i=n[t];return a="string"==typeof i?i:1===e?i.one:i.other.replace("{{count}}",e.toString()),null!=r&&r.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a};function a(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var i={date:a({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:a({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function s(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(s)?d(s,(function(t){return t.test(u)})):c(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(l):l,o=n.valueCallback?n.valueCallback(o):o;var f=e.slice(u.length);return{value:o,rest:f}}}function c(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function d(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var l,f={code:"en-US",formatDistance:r,formatLong:i,formatRelative:function(t,e,n,r){return o[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(l.matchPattern);if(!n)return null;var r=n[0],a=t.match(l.parsePattern);if(!a)return null;var i=l.valueCallback?l.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:s({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function h(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function m(n,r){t(2,arguments);var a=e(n).getTime(),i=h(r);return new Date(a+i)}function w(e,n){t(2,arguments);var r=h(n);return m(e,-r)}function g(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function y(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function p(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var b={p:p,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return y(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",y(a,e)).replace("{{time}}",p(i,e))}};function v(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var T=["D","DD"],C=["YY","YYYY"];function k(t){return-1!==T.indexOf(t)}function x(t){return-1!==C.indexOf(t)}function D(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}function M(n,r){t(1,arguments);var a=r||{},i=a.locale,o=i&&i.options&&i.options.weekStartsOn,u=null==o?0:h(o),s=null==a.weekStartsOn?u:h(a.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=e(n),d=c.getUTCDay(),l=(d<s?7:0)+d-s;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function U(n,r){t(1,arguments);var a=e(n),i=a.getUTCFullYear(),o=r||{},u=o.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:h(s),d=null==o.firstWeekContainsDate?c:h(o.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,d),l.setUTCHours(0,0,0,0);var f=M(l,r),m=new Date(0);m.setUTCFullYear(i,0,d),m.setUTCHours(0,0,0,0);var w=M(m,r);return a.getTime()>=f.getTime()?i+1:a.getTime()>=w.getTime()?i:i-1}function P(n,r,a){t(2,arguments);var i=a||{},o=i.locale,u=o&&o.options&&o.options.weekStartsOn,s=null==u?0:h(u),c=null==i.weekStartsOn?s:h(i.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=e(n),l=h(r),f=d.getUTCDay(),m=l%7,w=(m+7)%7,g=(w<c?7:0)+l-f;return d.setUTCDate(d.getUTCDate()+g),d}function Y(n){t(1,arguments);var r=1,a=e(n),i=a.getUTCDay(),o=(i<r?7:0)+i-r;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}function H(n){t(1,arguments);var r=e(n),a=r.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=Y(i),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=Y(u);return r.getTime()>=o.getTime()?a+1:r.getTime()>=s.getTime()?a:a-1}function E(e){t(1,arguments);var n=H(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=Y(r);return a}function N(n){t(1,arguments);var r=e(n),a=Y(r).getTime()-E(r).getTime();return Math.round(a/6048e5)+1}function S(e,n){t(1,arguments);var r=n||{},a=r.locale,i=a&&a.options&&a.options.firstWeekContainsDate,o=null==i?1:h(i),u=null==r.firstWeekContainsDate?o:h(r.firstWeekContainsDate),s=U(e,n),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var d=M(c,n);return d}function W(n,r){t(1,arguments);var a=e(n),i=M(a,r).getTime()-S(a,r).getTime();return Math.round(i/6048e5)+1}var q=/^(1[0-2]|0?\d)/,L=/^(3[0-1]|[0-2]?\d)/,I=/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,F=/^(5[0-3]|[0-4]?\d)/,R=/^(2[0-3]|[0-1]?\d)/,O=/^(2[0-4]|[0-1]?\d)/,B=/^(1[0-1]|0?\d)/,Q=/^(1[0-2]|0?\d)/,j=/^[0-5]?\d/,A=/^[0-5]?\d/,X=/^\d/,G=/^\d{1,2}/,J=/^\d{1,3}/,K=/^\d{1,4}/,z=/^-?\d+/,Z=/^-?\d/,V=/^-?\d{1,2}/,$=/^-?\d{1,3}/,_=/^-?\d{1,4}/,tt=/^([+-])(\d{2})(\d{2})?|Z/,et=/^([+-])(\d{2})(\d{2})|Z/,nt=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,rt=/^([+-])(\d{2}):(\d{2})|Z/,at=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function it(t,e,n){var r=e.match(t);if(!r)return null;var a=parseInt(r[0],10);return{value:n?n(a):a,rest:e.slice(r[0].length)}}function ot(t,e){var n=e.match(t);return n?"Z"===n[0]?{value:0,rest:e.slice(1)}:{value:("+"===n[1]?1:-1)*(36e5*(n[2]?parseInt(n[2],10):0)+6e4*(n[3]?parseInt(n[3],10):0)+1e3*(n[5]?parseInt(n[5],10):0)),rest:e.slice(n[0].length)}:null}function ut(t,e){return it(z,t,e)}function st(t,e,n){switch(t){case 1:return it(X,e,n);case 2:return it(G,e,n);case 3:return it(J,e,n);case 4:return it(K,e,n);default:return it(new RegExp("^\\d{1,"+t+"}"),e,n)}}function ct(t,e,n){switch(t){case 1:return it(Z,e,n);case 2:return it(V,e,n);case 3:return it($,e,n);case 4:return it(_,e,n);default:return it(new RegExp("^-?\\d{1,"+t+"}"),e,n)}}function dt(t){switch(t){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;default:return 0}}function lt(t,e){var n,r=e>0,a=r?e:1-e;if(a<=50)n=t||100;else{var i=a+50;n=t+100*Math.floor(i/100)-(t>=i%100?100:0)}return r?n:1-n}var ft=[31,28,31,30,31,30,31,31,30,31,30,31],ht=[31,29,31,30,31,30,31,31,30,31,30,31];function mt(t){return t%400==0||t%4==0&&t%100!=0}var wt={G:{priority:140,parse:function(t,e,n,r){switch(e){case"G":case"GG":case"GGG":return n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"});case"GGGGG":return n.era(t,{width:"narrow"});default:return n.era(t,{width:"wide"})||n.era(t,{width:"abbreviated"})||n.era(t,{width:"narrow"})}},set:function(t,e,n,r){return e.era=n,t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(t,e,n,r){var a=function(t){return{year:t,isTwoDigitYear:"yy"===e}};switch(e){case"y":return st(4,t,a);case"yo":return n.ordinalNumber(t,{unit:"year",valueCallback:a});default:return st(e.length,t,a)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var a=t.getUTCFullYear();if(n.isTwoDigitYear){var i=lt(n.year,a);return t.setUTCFullYear(i,0,1),t.setUTCHours(0,0,0,0),t}var o="era"in e&&1!==e.era?1-n.year:n.year;return t.setUTCFullYear(o,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(t,e,n,r){var a=function(t){return{year:t,isTwoDigitYear:"YY"===e}};switch(e){case"Y":return st(4,t,a);case"Yo":return n.ordinalNumber(t,{unit:"year",valueCallback:a});default:return st(e.length,t,a)}},validate:function(t,e,n){return e.isTwoDigitYear||e.year>0},set:function(t,e,n,r){var a=U(t,r);if(n.isTwoDigitYear){var i=lt(n.year,a);return t.setUTCFullYear(i,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),M(t,r)}var o="era"in e&&1!==e.era?1-n.year:n.year;return t.setUTCFullYear(o,0,r.firstWeekContainsDate),t.setUTCHours(0,0,0,0),M(t,r)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(t,e,n,r){return ct("R"===e?4:e.length,t)},set:function(t,e,n,r){var a=new Date(0);return a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0),Y(a)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(t,e,n,r){return ct("u"===e?4:e.length,t)},set:function(t,e,n,r){return t.setUTCFullYear(n,0,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(t,e,n,r){switch(e){case"Q":case"QQ":return st(e.length,t);case"Qo":return n.ordinalNumber(t,{unit:"quarter"});case"QQQ":return n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(t,{width:"narrow",context:"formatting"});default:return n.quarter(t,{width:"wide",context:"formatting"})||n.quarter(t,{width:"abbreviated",context:"formatting"})||n.quarter(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(t,e,n,r){switch(e){case"q":case"qq":return st(e.length,t);case"qo":return n.ordinalNumber(t,{unit:"quarter"});case"qqq":return n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(t,{width:"narrow",context:"standalone"});default:return n.quarter(t,{width:"wide",context:"standalone"})||n.quarter(t,{width:"abbreviated",context:"standalone"})||n.quarter(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=1&&e<=4},set:function(t,e,n,r){return t.setUTCMonth(3*(n-1),1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(t,e,n,r){var a=function(t){return t-1};switch(e){case"M":return it(q,t,a);case"MM":return st(2,t,a);case"Mo":return n.ordinalNumber(t,{unit:"month",valueCallback:a});case"MMM":return n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(t,{width:"narrow",context:"formatting"});default:return n.month(t,{width:"wide",context:"formatting"})||n.month(t,{width:"abbreviated",context:"formatting"})||n.month(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(t,e,n,r){var a=function(t){return t-1};switch(e){case"L":return it(q,t,a);case"LL":return st(2,t,a);case"Lo":return n.ordinalNumber(t,{unit:"month",valueCallback:a});case"LLL":return n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(t,{width:"narrow",context:"standalone"});default:return n.month(t,{width:"wide",context:"standalone"})||n.month(t,{width:"abbreviated",context:"standalone"})||n.month(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.setUTCMonth(n,1),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(t,e,n,r){switch(e){case"w":return it(F,t);case"wo":return n.ordinalNumber(t,{unit:"week"});default:return st(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(n,r,a,i){return M(function(n,r,a){t(2,arguments);var i=e(n),o=h(r),u=W(i,a)-o;return i.setUTCDate(i.getUTCDate()-7*u),i}(n,a,i),i)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(t,e,n,r){switch(e){case"I":return it(F,t);case"Io":return n.ordinalNumber(t,{unit:"week"});default:return st(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=53},set:function(n,r,a,i){return Y(function(n,r){t(2,arguments);var a=e(n),i=h(r),o=N(a)-i;return a.setUTCDate(a.getUTCDate()-7*o),a}(n,a,i),i)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,subPriority:1,parse:function(t,e,n,r){switch(e){case"d":return it(L,t);case"do":return n.ordinalNumber(t,{unit:"date"});default:return st(e.length,t)}},validate:function(t,e,n){var r=mt(t.getUTCFullYear()),a=t.getUTCMonth();return r?e>=1&&e<=ht[a]:e>=1&&e<=ft[a]},set:function(t,e,n,r){return t.setUTCDate(n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,subPriority:1,parse:function(t,e,n,r){switch(e){case"D":case"DD":return it(I,t);case"Do":return n.ordinalNumber(t,{unit:"date"});default:return st(e.length,t)}},validate:function(t,e,n){return mt(t.getUTCFullYear())?e>=1&&e<=366:e>=1&&e<=365},set:function(t,e,n,r){return t.setUTCMonth(0,n),t.setUTCHours(0,0,0,0),t},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(t,e,n,r){switch(e){case"E":case"EE":case"EEE":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(t,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=P(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(t,e,n,r){var a=function(t){var e=7*Math.floor((t-1)/7);return(t+r.weekStartsOn+6)%7+e};switch(e){case"e":case"ee":return st(e.length,t,a);case"eo":return n.ordinalNumber(t,{unit:"day",valueCallback:a});case"eee":return n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});case"eeeee":return n.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"});default:return n.day(t,{width:"wide",context:"formatting"})||n.day(t,{width:"abbreviated",context:"formatting"})||n.day(t,{width:"short",context:"formatting"})||n.day(t,{width:"narrow",context:"formatting"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=P(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(t,e,n,r){var a=function(t){var e=7*Math.floor((t-1)/7);return(t+r.weekStartsOn+6)%7+e};switch(e){case"c":case"cc":return st(e.length,t,a);case"co":return n.ordinalNumber(t,{unit:"day",valueCallback:a});case"ccc":return n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});case"ccccc":return n.day(t,{width:"narrow",context:"standalone"});case"cccccc":return n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"});default:return n.day(t,{width:"wide",context:"standalone"})||n.day(t,{width:"abbreviated",context:"standalone"})||n.day(t,{width:"short",context:"standalone"})||n.day(t,{width:"narrow",context:"standalone"})}},validate:function(t,e,n){return e>=0&&e<=6},set:function(t,e,n,r){return(t=P(t,n,r)).setUTCHours(0,0,0,0),t},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(t,e,n,r){var a=function(t){return 0===t?7:t};switch(e){case"i":case"ii":return st(e.length,t);case"io":return n.ordinalNumber(t,{unit:"day"});case"iii":return n.day(t,{width:"abbreviated",context:"formatting",valueCallback:a})||n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiiii":return n.day(t,{width:"narrow",context:"formatting",valueCallback:a});case"iiiiii":return n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a});default:return n.day(t,{width:"wide",context:"formatting",valueCallback:a})||n.day(t,{width:"abbreviated",context:"formatting",valueCallback:a})||n.day(t,{width:"short",context:"formatting",valueCallback:a})||n.day(t,{width:"narrow",context:"formatting",valueCallback:a})}},validate:function(t,e,n){return e>=1&&e<=7},set:function(n,r,a,i){return n=function(n,r){t(2,arguments);var a=h(r);a%7==0&&(a-=7);var i=1,o=e(n),u=o.getUTCDay(),s=((a%7+7)%7<i?7:0)+a-u;return o.setUTCDate(o.getUTCDate()+s),o}(n,a,i),n.setUTCHours(0,0,0,0),n},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(t,e,n,r){switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(t,{width:"narrow",context:"formatting"});default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(dt(n),0,0,0),t},incompatibleTokens:["b","B","H","K","k","t","T"]},b:{priority:80,parse:function(t,e,n,r){switch(e){case"b":case"bb":case"bbb":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(t,{width:"narrow",context:"formatting"});default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(dt(n),0,0,0),t},incompatibleTokens:["a","B","H","K","k","t","T"]},B:{priority:80,parse:function(t,e,n,r){switch(e){case"B":case"BB":case"BBB":return n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(t,{width:"narrow",context:"formatting"});default:return n.dayPeriod(t,{width:"wide",context:"formatting"})||n.dayPeriod(t,{width:"abbreviated",context:"formatting"})||n.dayPeriod(t,{width:"narrow",context:"formatting"})}},set:function(t,e,n,r){return t.setUTCHours(dt(n),0,0,0),t},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(t,e,n,r){switch(e){case"h":return it(Q,t);case"ho":return n.ordinalNumber(t,{unit:"hour"});default:return st(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=12},set:function(t,e,n,r){var a=t.getUTCHours()>=12;return a&&n<12?t.setUTCHours(n+12,0,0,0):a||12!==n?t.setUTCHours(n,0,0,0):t.setUTCHours(0,0,0,0),t},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(t,e,n,r){switch(e){case"H":return it(R,t);case"Ho":return n.ordinalNumber(t,{unit:"hour"});default:return st(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=23},set:function(t,e,n,r){return t.setUTCHours(n,0,0,0),t},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(t,e,n,r){switch(e){case"K":return it(B,t);case"Ko":return n.ordinalNumber(t,{unit:"hour"});default:return st(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=11},set:function(t,e,n,r){return t.getUTCHours()>=12&&n<12?t.setUTCHours(n+12,0,0,0):t.setUTCHours(n,0,0,0),t},incompatibleTokens:["a","b","h","H","k","t","T"]},k:{priority:70,parse:function(t,e,n,r){switch(e){case"k":return it(O,t);case"ko":return n.ordinalNumber(t,{unit:"hour"});default:return st(e.length,t)}},validate:function(t,e,n){return e>=1&&e<=24},set:function(t,e,n,r){var a=n<=24?n%24:n;return t.setUTCHours(a,0,0,0),t},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(t,e,n,r){switch(e){case"m":return it(j,t);case"mo":return n.ordinalNumber(t,{unit:"minute"});default:return st(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCMinutes(n,0,0),t},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(t,e,n,r){switch(e){case"s":return it(A,t);case"so":return n.ordinalNumber(t,{unit:"second"});default:return st(e.length,t)}},validate:function(t,e,n){return e>=0&&e<=59},set:function(t,e,n,r){return t.setUTCSeconds(n,0),t},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(t,e,n,r){return st(e.length,t,(function(t){return Math.floor(t*Math.pow(10,3-e.length))}))},set:function(t,e,n,r){return t.setUTCMilliseconds(n),t},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(t,e,n,r){switch(e){case"X":return ot(tt,t);case"XX":return ot(et,t);case"XXXX":return ot(nt,t);case"XXXXX":return ot(at,t);default:return ot(rt,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(t,e,n,r){switch(e){case"x":return ot(tt,t);case"xx":return ot(et,t);case"xxxx":return ot(nt,t);case"xxxxx":return ot(at,t);default:return ot(rt,t)}},set:function(t,e,n,r){return e.timestampIsSet?t:new Date(t.getTime()-n)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(t,e,n,r){return ut(t)},set:function(t,e,n,r){return[new Date(1e3*n),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(t,e,n,r){return ut(t)},set:function(t,e,n,r){return[new Date(n),{timestampIsSet:!0}]},incompatibleTokens:"*"}},gt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,yt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pt=/^'([^]*?)'?$/,bt=/''/g,vt=/\S/,Tt=/[a-zA-Z]/;function Ct(t,e){if(e.timestampIsSet)return t;var n=new Date(0);return n.setFullYear(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),n.setHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),n}function kt(t){return t.match(pt)[1].replace(bt,"'")}const xt=(Dt="txtArea",document.getElementById(Dt));var Dt;xt.focus(),xt.select(),xt.oninput=function(t){St(t.target.value)};let Mt=[],Ut=[],Pt=[],Yt=[],Ht=[],Et=[];const Nt=function(t){return document.getElementById(t).value}("txtArea");function St(t){if(Mt=function(t){const e=/\d{1,2}:+\d{1,2}\s?[aApP][mM]\s*[-—~–]\s*\d{1,2}:+\d{1,2}\s?[aApP][mM]/gm;return t.match(e)}(t),null===Mt)document.getElementById("resultsDivTitle").getElementsByTagName("span")[0].innerHTML="0 Range Found",document.getElementById("result").innerText="Please paste time in the left box.",document.getElementById("timeList").innerHTML="";else{Ut=Mt.map((t=>function(t){const e=t.split(/[-—~–]/),n=new Object;return n.start=e[0],n.end=e[1],n}(t))),Pt=Ut.map((t=>{const e={};return e.start=Wt(t.start),e.end=Wt(t.end),e})),Yt=Pt.map((t=>{const e={};return e.start=qt(t.start),e.end=qt(t.end),e})),Ht=Yt.map((t=>function(t){return t.end-t.start}(t)));for(let t=0;t<Ht.length;t++)Ht[t]<0&&(Ht[t]+=864e5);Et=Ht,Et.includes(NaN)&&(Et=Et.filter((function(t){return!isNaN(t)}))),document.getElementById("resultsDivTitle").getElementsByTagName("span")[0].innerHTML=Et.length>1?Et.length+" Ranges Found":Et.length+" Range Found";let t=Lt(Et.reduce((function(t,e){return t+e}),0));document.getElementById("result").innerText=t;let e="";for(let t=0;t<Ht.length;t++)e+=Pt[t].start+" - "+Pt[t].end,document.getElementById("timeList").innerHTML=e,isNaN(Ht[t])||(e+=" <mark>("+Lt(Ht[t])+")</mark>",document.getElementById("timeList").innerHTML=e),isNaN(Ht[t])&&(e+=" <mark id='invalidMark'>(invalid range)</mark>",document.getElementById("timeList").innerHTML=e),e+="<br>",document.getElementById("timeList").innerHTML=e}}function Wt(t){return t=(t=(t=(t=(t=t.toUpperCase()).replace(/\s/g,"")).split("").reverse().join("")).slice(0,2)+" "+t.slice(2)).split("").reverse().join("")}function qt(n){return function(n){return t(1,arguments),e(n).getTime()}(function(n,r,a,i){t(3,arguments);var o=String(n),u=String(r),s=i||{},c=s.locale||f;if(!c.match)throw new RangeError("locale must contain match property");var d=c.options&&c.options.firstWeekContainsDate,l=null==d?1:h(d),m=null==s.firstWeekContainsDate?l:h(s.firstWeekContainsDate);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=c.options&&c.options.weekStartsOn,p=null==y?0:h(y),T=null==s.weekStartsOn?p:h(s.weekStartsOn);if(!(T>=0&&T<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(""===u)return""===o?e(a):new Date(NaN);var C,M={firstWeekContainsDate:m,weekStartsOn:T,locale:c},U=[{priority:10,subPriority:-1,set:Ct,index:0}],P=u.match(yt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,b[e])(t,c.formatLong,M):t})).join("").match(gt),Y=[];for(C=0;C<P.length;C++){var H=P[C];!s.useAdditionalWeekYearTokens&&x(H)&&D(H,u,n),!s.useAdditionalDayOfYearTokens&&k(H)&&D(H,u,n);var E=H[0],N=wt[E];if(N){var S=N.incompatibleTokens;if(Array.isArray(S)){for(var W=void 0,q=0;q<Y.length;q++){var L=Y[q].token;if(-1!==S.indexOf(L)||L===E){W=Y[q];break}}if(W)throw new RangeError("The format string mustn't contain `".concat(W.fullToken,"` and `").concat(H,"` at the same time"))}else if("*"===N.incompatibleTokens&&Y.length)throw new RangeError("The format string mustn't contain `".concat(H,"` and any other token at the same time"));Y.push({token:E,fullToken:H});var I=N.parse(o,H,c.match,M);if(!I)return new Date(NaN);U.push({priority:N.priority,subPriority:N.subPriority||0,set:N.set,validate:N.validate,value:I.value,index:U.length}),o=I.rest}else{if(E.match(Tt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");if("''"===H?H="'":"'"===E&&(H=kt(H)),0!==o.indexOf(H))return new Date(NaN);o=o.slice(H.length)}}if(o.length>0&&vt.test(o))return new Date(NaN);var F=U.map((function(t){return t.priority})).sort((function(t,e){return e-t})).filter((function(t,e,n){return n.indexOf(t)===e})).map((function(t){return U.filter((function(e){return e.priority===t})).sort((function(t,e){return e.subPriority-t.subPriority}))})).map((function(t){return t[0]})),R=e(a);if(isNaN(R))return new Date(NaN);var O=w(R,v(R)),B={};for(C=0;C<F.length;C++){var Q=F[C];if(Q.validate&&!Q.validate(O,Q.value,M))return new Date(NaN);var j=Q.set(O,B,Q.value,M);j[0]?(O=j[0],g(B,j[1])):O=j}return O}(n,"p",new Date))}function Lt(t){let e=Math.floor(t/36e5),n=t%36e5,r=Math.floor(n/6e4);return e=e<10?"0"+e:e,r=r<10?"0"+r:r,e+" "+(e<2?"hr":"hrs")+" "+r+" "+(r<2?"min":"mins")}St(Nt);
//# sourceMappingURL=index.4df596c7.js.map
