!function e(t,n,i){function o(r,a){if(!n[r]){if(!t[r]){var c="function"==typeof require&&require;if(!a&&c)return c(r,!0);if(s)return s(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var p=n[r]={exports:{}};t[r][0].call(p.exports,function(e){var n=t[r][1][e];return o(n?n:e)},p,p.exports,e,t,n,i)}return n[r].exports}for(var s="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}({"./src/index.js":[function(e){"use strict";var t=e("./app");window.app=new t({el:document.body})},{"./app":"/home/donnees/workspaces/die/src/app/index.js"}],"/home/donnees/workspaces/die/node_modules/browserify/node_modules/browser-resolve/empty.js":[function(){},{}],"/home/donnees/workspaces/die/node_modules/jade/lib/runtime.js":[function(e,t,n){"use strict";function i(e){return null!=e&&""!==e}function o(e){return(Array.isArray(e)?e.map(o):e&&"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}):[e]).filter(i).join(" ")}n.merge=function s(e,t){if(1===arguments.length){for(var n=e[0],o=1;o<e.length;o++)n=s(n,e[o]);return n}var r=e["class"],a=t["class"];(r||a)&&(r=r||[],a=a||[],Array.isArray(r)||(r=[r]),Array.isArray(a)||(a=[a]),e["class"]=r.concat(a).filter(i));for(var c in t)"class"!=c&&(e[c]=t[c]);return e},n.joinClasses=o,n.cls=function(e,t){for(var i=[],s=0;s<e.length;s++)i.push(t&&t[s]?n.escape(o([e[s]])):o(e[s]));var r=o(i);return r.length?' class="'+r+'"':""},n.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(t){return t+":"+e[t]}).join(";"):e},n.attr=function(e,t,i,o){return"style"===e&&(t=n.style(t)),"boolean"==typeof t||null==t?t?" "+(o?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof t?(-1!==JSON.stringify(t).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),t&&"function"==typeof t.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(t).replace(/'/g,"&apos;")+"'"):i?(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n.escape(t)+'"'):(t&&"function"==typeof t.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t+'"')},n.attrs=function(e,t){var i=[],s=Object.keys(e);if(s.length)for(var r=0;r<s.length;++r){var a=s[r],c=e[a];"class"==a?(c=o(c))&&i.push(" "+a+'="'+c+'"'):i.push(n.attr(a,c,!1,t))}return i.join("")},n.escape=function(e){var t=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t===""+e?e:t},n.rethrow=function r(t,n,i,o){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&n||o))throw t.message+=" on line "+i,t;try{o=o||e("fs").readFileSync(n,"utf8")}catch(s){r(t,null,i)}var a=3,c=o.split("\n"),u=Math.max(i-a,0),p=Math.min(c.length,i+a),a=c.slice(u,p).map(function(e,t){var n=t+u+1;return(n==i?"  > ":"    ")+n+"| "+e}).join("\n");throw t.path=n,t.message=(n||"Jade")+":"+i+"\n"+a+"\n\n"+t.message,t}},{fs:"/home/donnees/workspaces/die/node_modules/browserify/node_modules/browser-resolve/empty.js"}],"/home/donnees/workspaces/die/src/app/components/dice/index.js":[function(e,t){"use strict";var n=function(){function e(e,t){for(var n in t){var i=t[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(e,t)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=e("../../modules/view"),r=["⚀","⚁","⚂","⚃","⚄","⚅"],a=function(e){function t(){o(this,t),null!=e&&e.apply(this,arguments)}return i(t,e),n(t,{initialize:{value:function(){this.totals=[],this.$total=$("<div>").addClass("total").appendTo(this.el),"SpeechSynthesisUtterance"in window&&(this.speech=new SpeechSynthesisUtterance)}},render:{value:function(e){e&&(this["throws"]=e),this.numbers=[],this.$(".die").remove(),this.addDice()}},addDice:{value:function(){for(var e=0,t=void 0,n=void 0;e<this["throws"];e++)n=e===this["throws"]-1,t=this.getRandomNumber(),this.addDie(t,e,n?this.showTotal.bind(this):function(){}),this.numbers.push(t)}},addDie:{value:function(e,t,n){function i(u){s||(s=u,r=200+200*t),a=u-s,o.attr("data-die",c.getRandomNumber()),r>a?window.requestAnimationFrame(i):(o.attr("data-die",e),n())}var o=$("<div>").addClass("die").attr("data-die",e).appendTo(this.el);if(!this.parent.options.anim)return void n();var s=null,r=null,a=null,c=this;window.requestAnimationFrame(i)}},showTotal:{value:function(){var e=this.numbers.reduce(function(e,t){return e+t});this.totals.push(e);var t=this.parent.options.totals?this.totals.join(" - "):e;this.$total.text(t),this.say(e);var n=this.numbers.map(function(e){return r[e-1]}).join(" + ");n+=" = "+e,document.title=n}},say:{value:function(e){this.speech&&this.parent.options.talk&&(speechSynthesis.cancel(),this.speech.text=e,speechSynthesis.speak(this.speech))}},getRandomNumber:{value:function(){var e=void 0===arguments[0]?6:arguments[0];return Math.floor(e*Math.random())+1}},setFontSize:{value:function(e){var t=1===this["throws"]?60:100/this["throws"];t+="portrait"===e?"vh":"vw",this.$(".die").css("font-size",t)}}}),t}(s);t.exports=a},{"../../modules/view":"/home/donnees/workspaces/die/src/app/modules/view/index.js"}],"/home/donnees/workspaces/die/src/app/components/help-panel/index.jade":[function(e,t){var n=e("jade/lib/runtime.js");t.exports=function(e){var t=[{lineno:1,filename:"/home/donnees/workspaces/die/src/app/components/help-panel/index.jade"}];try{var i,o=[],s=e||{};return function(e,t){o.push("<p>"),o.push("You can change the number of dice by changing <b>X</b> in"),o.push("\n"),o.push("<a href='http://calvein.github.io/die/'>http://calvein.github.io/die/#<b>X</b></a>."),o.push("</p>"),o.push("<p>"),o.push("You can throw the dice by "+n.escape(null==(i=t?"touching":"clicking")?"":i)+" your screen"),o.push("\n"),o.push("or by shaking your device"+n.escape(null==(i=e?" (your device doesn't support it)":"")?"":i)+"."),o.push("</p>"),o.push('<button data-trigger="help" class="trigger">'),o.push("×"),o.push("</button>")}.call(this,"supportDeviceMotion"in s?s.supportDeviceMotion:"undefined"!=typeof supportDeviceMotion?supportDeviceMotion:void 0,"supportTouch"in s?s.supportTouch:"undefined"!=typeof supportTouch?supportTouch:void 0),o.join("")}catch(r){n.rethrow(r,t[0].filename,t[0].lineno,"p.\n    You can change the number of dice by changing <b>X</b> in\n    <a href='http://calvein.github.io/die/'>http://calvein.github.io/die/#<b>X</b></a>.\np.\n    You can throw the dice by #{supportTouch ? 'touching' : 'clicking'} your screen\n    or by shaking your device#{supportDeviceMotion ? ' (your device doesn\\'t support it)' : ''}.\nbutton.trigger(data-trigger='help') ×")}}},{"jade/lib/runtime.js":"/home/donnees/workspaces/die/node_modules/jade/lib/runtime.js"}],"/home/donnees/workspaces/die/src/app/components/help-panel/index.js":[function(e,t){"use strict";var n=function(){function e(e,t){for(var n in t){var i=t[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(e,t)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=e("../../modules/view"),r=e("./index.jade"),a=function(e){function t(){o(this,t),null!=e&&e.apply(this,arguments)}return i(t,e),n(t,{initialize:{value:function(){this.render()}},render:{value:function(){var e="ontouchstart"in window,t="ondevicemotion"in window;this.$el.html(r({supportTouch:e,supportDeviceMotion:t}))}}}),t}(s);t.exports=a},{"../../modules/view":"/home/donnees/workspaces/die/src/app/modules/view/index.js","./index.jade":"/home/donnees/workspaces/die/src/app/components/help-panel/index.jade"}],"/home/donnees/workspaces/die/src/app/components/options-panel/index.jade":[function(e,t){var n=e("jade/lib/runtime.js");t.exports=function(e){var t=[{lineno:1,filename:"/home/donnees/workspaces/die/src/app/components/options-panel/index.jade"}];try{var i=[],o=e||{};return function(e,t,o){i.push("<label>"),i.push("Say result"),i.push('<input type="checkbox" name="talk"'+n.attr("checked",t,!0,!1)+"/>"),i.push("</label>"),i.push("<label>"),i.push("Dice animation"),i.push('<input type="checkbox" name="anim"'+n.attr("checked",e,!0,!1)+"/>"),i.push("</label>"),i.push("<label>"),i.push("Show previous totals"),i.push('<input type="checkbox" name="totals"'+n.attr("checked",o,!0,!1)+"/>"),i.push("</label>"),i.push('<button data-trigger="options" class="trigger">'),i.push("×"),i.push("</button>")}.call(this,"anim"in o?o.anim:"undefined"!=typeof anim?anim:void 0,"talk"in o?o.talk:"undefined"!=typeof talk?talk:void 0,"totals"in o?o.totals:"undefined"!=typeof totals?totals:void 0),i.join("")}catch(s){n.rethrow(s,t[0].filename,t[0].lineno,"label Say result\n    input(type='checkbox', name='talk', checked=talk)\nlabel Dice animation\n    input(type='checkbox', name='anim', checked=anim)\nlabel Show previous totals\n    input(type='checkbox', name='totals', checked=totals)\nbutton.trigger(data-trigger='options') ×")}}},{"jade/lib/runtime.js":"/home/donnees/workspaces/die/node_modules/jade/lib/runtime.js"}],"/home/donnees/workspaces/die/src/app/components/options-panel/index.js":[function(e,t){"use strict";var n=function(){function e(e,t){for(var n in t){var i=t[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(e,t)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=e("../../modules/view"),r=e("./index.jade"),a=function(e){function t(){o(this,t),null!=e&&e.apply(this,arguments)}return i(t,e),n(t,{initialize:{value:function(){this.render(),this.$el.on("change","input",this.changeInput.bind(this))}},render:{value:function(){var e=this.changeOption("talk",this.getOption("talk")),t=this.changeOption("anim",this.getOption("anim")),n=this.changeOption("totals",this.getOption("totals"));this.$el.html(r({talk:e,anim:t,totals:n}))}},getOption:{value:function(e){return e=localStorage.getItem(e),e="false"===e?!1:!0}},changeOption:{value:function(e,t){return this.parent.options[e]=t,localStorage.setItem(e,t),t}},changeInput:{value:function(e){var t=e.currentTarget;this.changeOption(t.name,t.checked)}}}),t}(s);t.exports=a},{"../../modules/view":"/home/donnees/workspaces/die/src/app/modules/view/index.js","./index.jade":"/home/donnees/workspaces/die/src/app/components/options-panel/index.jade"}],"/home/donnees/workspaces/die/src/app/index.js":[function(e,t){"use strict";var n=function(){function e(e,t){for(var n in t){var i=t[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(e,t)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=e("./modules/view"),r=e("./modules/shake"),a=e("./components/dice"),c=e("./components/help-panel"),u=e("./components/options-panel"),p=function(e){function t(){o(this,t),null!=e&&e.apply(this,arguments)}return i(t,e),n(t,{initialize:{value:function(){this.$panels=this.$(".panel"),this.helpPanel=new c({el:this.$("[data-panel=help]"),parent:this}),this.options={},this.optionsPanel=new u({el:this.$("[data-panel=options]"),parent:this}),this.dice=new a({el:this.$(".dice"),parent:this}),$(window).on("keydown",this.keydown.bind(this)),this.$el.on("click",".trigger",this.clickTrigger.bind(this)),this.$el.on("click",".dice",this.clickDice.bind(this)),this.mq=window.matchMedia("(orientation: portrait)"),this.mq.addListener(this.orientationChange.bind(this)),this.shakeEvent=new r,this.shakeEvent.start(),$(window).on("shake",this.shake.bind(this)),this.renderDice()}},checkOrientation:{value:function(){this.dice.setFontSize(this.mq.matches?"portrait":"landscape")}},renderDice:{value:function(){this.dice.render(+location.hash.slice(1)||1),this.orientationChange()}},keydown:{value:function(e){$("input:focus").length||32===e.keyCode&&(e.preventDefault(),this.renderDice())}},clickTrigger:{value:function(e){var t=$(e.currentTarget),n=t.data("trigger");this.$panels.filter("[data-panel="+n+"]").toggleClass("open")}},clickDice:{value:function(){this.renderDice()}},orientationChange:{value:function(){this.checkOrientation()}},shake:{value:function(){"vibrate"in navigator&&navigator.vibrate(200),this.renderDice()}}}),t}(s);t.exports=p},{"./components/dice":"/home/donnees/workspaces/die/src/app/components/dice/index.js","./components/help-panel":"/home/donnees/workspaces/die/src/app/components/help-panel/index.js","./components/options-panel":"/home/donnees/workspaces/die/src/app/components/options-panel/index.js","./modules/shake":"/home/donnees/workspaces/die/src/app/modules/shake/index.js","./modules/view":"/home/donnees/workspaces/die/src/app/modules/view/index.js"}],"/home/donnees/workspaces/die/src/app/modules/shake/index.js":[function(e,t){"use strict";!function(e,n){"function"==typeof define&&define.amd?define(function(){return n(e,e.document)}):"undefined"!=typeof t&&t.exports?t.exports=n(e,e.document):e.Shake=n(e,e.document)}("undefined"!=typeof window?window:void 0,function(e,t){function n(n){if(this.hasDeviceMotion="ondevicemotion"in e,this.options={threshold:15,timeout:1e3},"object"==typeof n)for(var i in n)n.hasOwnProperty(i)&&(this.options[i]=n[i]);if(this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof t.CustomEvent)this.event=new t.CustomEvent("shake",{bubbles:!0,cancelable:!0});else{if("function"!=typeof t.createEvent)return!1;this.event=t.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}return n.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},n.prototype.start=function(){this.reset(),this.hasDeviceMotion&&e.addEventListener("devicemotion",this,!1)},n.prototype.stop=function(){this.hasDeviceMotion&&e.removeEventListener("devicemotion",this,!1),this.reset()},n.prototype.devicemotion=function(t){var n,i,o=t.accelerationIncludingGravity,s=0,r=0,a=0;return null===this.lastX&&null===this.lastY&&null===this.lastZ?(this.lastX=o.x,this.lastY=o.y,void(this.lastZ=o.z)):(s=Math.abs(this.lastX-o.x),r=Math.abs(this.lastY-o.y),a=Math.abs(this.lastZ-o.z),(s>this.options.threshold&&r>this.options.threshold||s>this.options.threshold&&a>this.options.threshold||r>this.options.threshold&&a>this.options.threshold)&&(n=new Date,i=n.getTime()-this.lastTime.getTime(),i>this.options.timeout&&(e.dispatchEvent(this.event),this.lastTime=new Date)),this.lastX=o.x,this.lastY=o.y,void(this.lastZ=o.z))},n.prototype.handleEvent=function(e){return"function"==typeof this[e.type]?this[e.type](e):void 0},n})},{}],"/home/donnees/workspaces/die/src/app/modules/view/index.js":[function(e,t){"use strict";var n=function(){function e(e,t){for(var n in t){var i=t[n];i.configurable=!0,i.value&&(i.writable=!0)}Object.defineProperties(e,t)}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(t){i(this,e),this.$el=$(t.el),this.el=this.$el.get(0),this.parent=t.parent||this,this.initialize(t)}return n(e,{$:{value:function(e){return this.$el.find(e)}}}),e}();t.exports=o},{}]},{},["./src/index.js"]);