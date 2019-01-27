!function(){return function e(t,o,i){function n(s,a){if(!o[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=o[s]={exports:{}};t[s][0].call(d.exports,function(e){return n(t[s][1][e]||e)},d,d.exports,e,t,o,i)}return o[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)n(i[s]);return n}}()({1:[function(e,t,o){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},o=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,n){var r=e.slides[e.slide()],s=n-e.slide(),a=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(o.bind(null,i)),i!==r&&["inactive",a,a+"-"+Math.abs(s)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(n){e.slides.map(i),t(n.slide,"active"),o(n.slide,"inactive")})}}},{}],2:[function(e,t,o){t.exports=function(t){return e("insert-css")(".bespoke-cursor-idle,.bespoke-cursor-idle *{cursor:none!important}"),function(e){var o,i="number"==typeof t&&t>=0?t:1e3,n=function(){e.parent.classList.add("bespoke-cursor-idle"),o=void 0},r=function(){e.parent.classList.remove("bespoke-cursor-idle"),o&&clearTimeout(o),o=setTimeout(n,i)};e.on("destroy",function(){removeEventListener("mousemove",r,!1),o&&clearTimeout(o)}),r(),document.addEventListener("mousemove",r,!1)}}},{"insert-css":14}],3:[function(e,t,o){t.exports=function(e){return function(t){var o=(e=e&&(e.object||e.name||e.scope)?e:{object:e}).object,i=e.name||"bespoke",n=e.scope||window;o?n[i]=o:o=n[i]?n[i]:n[i]={},(Array.isArray(o.decks)?o.decks:o.decks=[]).push(o.deck=t),t.on("destroy",function(){var e=o.decks.indexOf(t);e>=0&&o.decks.splice(e,1),delete o.deck})}}},{}],4:[function(e,t,o){t.exports=function(){return function(e){var t=function(t){var o=-1<t&&t<e.slides.length?t:0;o!==e.slide()&&e.slide(o)},o=function(){var o=window.location.hash.slice(1),i=parseInt(o,10);o&&(i?t(i-1):e.slides.forEach(function(e,i){e.getAttribute("data-bespoke-hash")!==o&&e.id!==o||t(i)}))};setTimeout(function(){o(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash")||e.slide.id;window.location.hash=t||e.index+1}),window.addEventListener("hashchange",o)},0)}}},{}],5:[function(e,t,o){t.exports=function(){return function(e){var t=/\/\/player\.vimeo\.com\//,o=/\/\/www\.youtube\.com\/embed\//,i="command",n="file:"===location.protocol,r=function(e,t,o,i){for(var n=-1,r=t.querySelectorAll(e+(i||"")),s=r.length;++n<s;o(r[n]));},s=function(e,t){e.contentWindow.postMessage(JSON.stringify(t),"*")},a=function(e){var r=e.hasAttribute("data-rewind"),a=Math.min(Math.max(parseFloat(e.getAttribute("data-volume")),0),10);if(e.play)r&&e.readyState&&(e.currentTime=0),a>=0&&(e.volume=a/10),e.play();else if(o.test(e.src))r&&s(e,{event:i,func:"seekTo",args:[0]}),a>=0&&s(e,{event:i,func:"setVolume",args:[10*a]}),s(e,{event:i,func:"playVideo"});else if(t.test(e.src)){if(n)return console.warn("WARNING: Cannot play Vimeo video when deck is loaded via file://.");r&&s(e,{method:"seekTo",value:0}),a>=0&&s(e,{method:"setVolume",value:a/10}),s(e,{method:"play"})}},l=function(e){e.pause?e.pause():o.test(e.src)?s(e,{event:i,func:"pauseVideo"}):!n&&t.test(e.src)&&s(e,{method:"pause"})},c=function(e,t){e[t||"src"]=e.getAttribute(t||"src")},d=function(e){try{return e.contentDocument.rootElement}catch(e){}},p=function(e,t){(d(e)||e).classList[t||"add"]("active")},u=function(t){t.hasAttribute("data-reload")?c(t,"data"):d(t)?p(t):t.onload=function(){e.slides[e.slide()].contains(t)&&p(t)}},b=function(e){p(e,"remove")},f=r.bind(null,"audio,video,iframe"),g=r.bind(null,'object[type="image/svg+xml"]'),h=function(e){f(e,l)};e.on("activate",function(e){if(e.preview)return h(e.slide);var t;t=e.slide,f(t,a),function(e){g(e,u)}(e.slide),r('img[data-reload][src$=".gif"]',e.slide,c)}),e.on("deactivate",function(e){var t;h(e.slide),t=e.slide,g(t,b,":not([data-reload])")})}}},{}],6:[function(e,t,o){t.exports=function(){return function(e){var t="keydown",o=function(t){if(!function(e,t){return e.ctrlKey||e.shiftKey&&(36===t||35===t)||e.altKey||e.metaKey}(t,t.which))switch(t.which){case 32:return(t.shiftKey?e.prev:e.next)();case 39:case 34:case 76:return e.next();case 37:case 33:case 72:return e.prev();case 36:return e.slide(0);case 35:return e.slide(e.slides.length-1)}};e.on("destroy",function(){document.removeEventListener(t,o)}),document.addEventListener(t,o)}}},{}],7:[function(e,t,o){t.exports=function(e){return function(t){var o=e||{},i="touchstart",n="touchmove",r="addEventListener",s="removeEventListener",a=t.parent,l=null,c=null,d="page"+("y"===o.axis?"Y":"X"),p="number"==typeof o.threshold?o.threshold:50/window.devicePixelRatio,u=function(e){l=1===e.touches.length?e.touches[0][d]:null},b=function(e){if(null!==l)return void 0===l?e.preventDefault():void(Math.abs(c=e.touches[0][d]-l)>p&&((c>0?t.prev:t.next)(),l=e.preventDefault()))};t.on("destroy",function(){a[s](i,u),a[s](n,b)}),a[r](i,u),a[r](n,b)}}},{}],8:[function(e,t,o){t.exports=function(t){t=t||{};var o=e("bespoke-nav-kbd")(t.kbd),i=e("bespoke-nav-touch")(t.touch);return function(e){o(e),i(e)}}},{"bespoke-nav-kbd":6,"bespoke-nav-touch":7}],9:[function(e,t,o){var i=0;t.exports=function(e){var t,o;return 0==i++&&(t=document.head,(o=document.createElement("style")).textContent=".bespoke-parent.bespoke-overview{pointer-events:auto}\n.bespoke-overview *{pointer-events:none}\n.bespoke-overview img{-moz-user-select:none}\n.bespoke-overview .bespoke-slide{opacity:1;visibility:visible;cursor:pointer;overflow:hidden;pointer-events:auto}\n.bespoke-overview .bespoke-active{outline:6px solid #cfd8dc;outline-offset:-3px;-moz-outline-radius:3px}\n.bespoke-overview .bespoke-bullet{opacity:1;visibility:visible}\n.bespoke-overview-counter{counter-reset:overview}\n.bespoke-overview-counter .bespoke-slide::after{counter-increment:overview;content:counter(overview);position:absolute;right:.75em;bottom:.5em;font-size:1.25rem;line-height:1.25}\n.bespoke-title{visibility:hidden;position:absolute;top:0;left:0;width:100%;pointer-events:auto}\n.bespoke-title h1{margin:0;font-size:1.6em;line-height:1.2;text-align:center}\n.bespoke-overview:not(.bespoke-overview-to) .bespoke-title{visibility:visible}\n.bespoke-overview-to .bespoke-active,.bespoke-overview-from .bespoke-active{z-index:1}",t.insertBefore(o,t.firstChild)),function(t){e="object"==typeof e?e:{};var o,i=/, */,n=/^none(?:, ?none)*$/,r=/^translate\((.+?)px, ?(.+?)px\) scale\((.+?)\)$/,s=/(^\?|&)overview(?=$|&)/,a=!("transition"in document.body.style)&&"webkitTransition"in document.body.style?"webkitTransitionEnd":"transitionend",l=["webkit","Moz"],c="number"==typeof e.columns?parseInt(e.columns):3,d="number"==typeof e.margin?parseFloat(e.margin):15,p=null,u=function(e,t){if(!(t in e.style))for(var o=t.charAt(0).toUpperCase()+t.substr(1),i=0,n=l.length;i<n;i++)if(l[i]+o in e.style)return l[i]+o;return t},b=function(e,t){return parseFloat(e.style[t].slice(6,-1))},f=function(e){if("zoom"in e.style)return parseFloat(e.style.zoom)||void 0},g=function(e){var t=[],o=getComputedStyle(e),r=o[u(e,"transitionProperty")];if(!r||n.test(r))return t;r=r.split(i);var s=o[u(e,"transitionDuration")].split(i),a=o[u(e,"transitionDelay")].split(i);return r.forEach(function(e,o){"0s"===s[o]&&"0s"===a[o]||t.push(e)}),t},h=function(e,t,o,i){t&&(e.style[t]=o);e.offsetHeight;t&&(e.style[t]=i)},m=function(){t.on("activate",m)(),t.parent.scrollLeft=t.parent.scrollTop=0,(e.autostart||s.test(location.search))&&setTimeout(E,100)},v=function(){L(t.slides.indexOf(this))},k=function(e,o){var i=o.index+e;return i>=0&&i<t.slides.length&&t.slide(i,{preview:!0}),!1},w=function(e){!1!==e.scrollIntoView&&y(e.slide,e.index,f(e.slide))},x=function(e){var t=location.search.replace(s,"").replace(/^[^?]/,"?$&");e?history.replaceState(null,null,location.pathname+(t.length>0?t+"&":"?")+"overview"+location.hash):history.replaceState(null,null,location.pathname+t+location.hash)},y=function(e,o,i){t.parent.scrollTop=o<c?0:t.parent.scrollTop+e.getBoundingClientRect().top*(i||1)},z=function(e,t,i,n){i.removeEventListener(a,o,!1),n&&n!==i&&n.removeEventListener(a,o,!1),o=void 0,t.remove("bespoke-overview-"+e)},E=function(){var i,n,r=t.slides,s=t.parent,l=s.classList,m=r.length-1,L=t.slide(),N=L>0?r[0]:r[m],T=u(N,"transform"),j=s.querySelector(".bespoke-scale-parent"),_=1,A=0,C=p,S="webkitAppearance"in s.style;j?_=b(j,T):(i=f(N))&&(_=i),o&&z("from",l,r[0],r[m]),e.title&&(n=function(e){var t=e.firstElementChild;if(t.classList.contains("bespoke-title"))return t.style.width="",t;var o=document.createElement("header");o.className="bespoke-title",o.style[u(o,"transformOrigin")]="0 0";var i=document.createElement("h1");return i.appendChild(document.createTextNode(e.getAttribute("data-title")||document.title)),o.appendChild(i),h(e.insertBefore(o,t)),o}(s)),C||(t.slide(L,{preview:!0}),l.add("bespoke-overview"),addEventListener("resize",E,!1),p=[t.on("activate",w),t.on("prev",k.bind(null,-1)),t.on("next",k.bind(null,1))],e.counter&&l.add("bespoke-overview-counter"),e.location&&x(!0),l.add("bespoke-overview-to"),A=m>0?g(N).length:g(N).join(" ").indexOf("transform")<0?0:1,s.style.overflowY="scroll",s.style.scrollBehavior="smooth",S&&r.forEach(function(e){h(e,"marginBottom","0%","")}));var q=s.clientWidth/_,B=s.clientHeight/_,M=(j||s).offsetWidth-s.clientWidth,O=j?M/2/_:0,K=N.offsetWidth,W=N.offsetHeight,H=q/(c*K+(c+1)*d),$=_*H,I=K*H,D=W*H,F=(q-I)/2,V=(B-D)/2,R=d*H,Y=0,P=0,U=0;n&&(!1!==e.scaleTitle?(n.style[i?"zoom":T]=i?$:"scale("+$+")",n.style.width=s.clientWidth/$+"px",Y=n.offsetHeight*H):(M>0&&(n.style.width=s.clientWidth+"px"),Y=n.offsetHeight/_)),r.forEach(function(e){var t=U*I+(U+1)*R-O-F,o=P*D+(P+1)*R+Y-V;e.style[T]="translate("+(t.toString().indexOf("e-")<0?t:0)+"px, "+(o.toString().indexOf("e-")<0?o:0)+"px) scale("+H+")",P*c+U===m&&(e.style.marginBottom=d+"px"),e.addEventListener("click",v,!1),U===c-1?(P+=1,U=0):U+=1}),C?y(r[L],L,i):A>0?N.addEventListener(a,o=function(e){e.target===this&&0==(A-=1)&&(z("to",l,this),S&&s.scrollHeight>s.clientHeight&&h(s,"overflowY","auto","scroll"),y(r[L],L,i))},!1):(r.forEach(function(e){h(e)}),l.remove("bespoke-overview-to"),y(r[L],L,i))},L=function(i){t.slide("number"==typeof i?i:t.slide(),{scrollIntoView:!1});var n,s=t.slides,l=t.parent,c=l.classList,d=s.length-1,m=t.slide()>0?s[0]:s[d],k=u(m,"transform"),w=u(m,"transition"),y=l.querySelector(".bespoke-scale-parent"),L="webkitAppearance"in l.style;y?n=b(y,k):(n=f(m))||(n=1),o&&z("to",c,s[0],s[d]);var N=l.scrollTop/n,T=(l.offsetWidth-(y||l).clientWidth)/2/n;l.style.scrollBehavior=l.style.overflowY="",s.forEach(function(e){L&&h(e,"marginBottom","0%",""),e.removeEventListener("click",v,!1)}),(N||T)&&s.forEach(function(e){var t=e.style[k].match(r);e.style[k]="translate("+(parseFloat(t[1])-T)+"px, "+(parseFloat(t[2])-N)+"px) scale("+t[3]+")",h(e,w,"none","")}),l.scrollTop=0,c.remove("bespoke-overview"),removeEventListener("resize",E,!1),(p||[]).forEach(function(e){e()}),p=null,e.counter&&c.remove("bespoke-overview-counter"),e.location&&x(!1),c.add("bespoke-overview-from");var j=d>0?g(m).length:g(m).join(" ").indexOf("transform")<0?0:1;s.forEach(function(e){e.style[k]=""}),j>0?m.addEventListener(a,o=function(e){e.target===this&&0==(j-=1)&&z("from",c,this)},!1):(s.forEach(function(e){h(e)}),c.remove("bespoke-overview-from"))},N=function(){(p?L:E)()},T=function(e){if(79===e.which)e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||N();else if(p)switch(e.which){case 13:e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||L();break;case 38:return k(-c,{index:t.slide()});case 40:return k(c,{index:t.slide()})}};t.on("activate",m),t.on("destroy",function(){removeEventListener("resize",E,!1),document.removeEventListener("keydown",T,!1)}),t.on("overview",N),document.addEventListener("keydown",T,!1)}}},{}],10:[function(e,t,o){t.exports=function(e){return function(t){var o=document.createElement("div"),i=document.createElement("div"),n="vertical"===e?"height":"width";o.className="bespoke-progress-parent",i.className="bespoke-progress-bar",o.appendChild(i),t.parent.appendChild(o),t.on("activate",function(e){i.style[n]=100*e.index/(t.slides.length-1)+"%"})}}},{}],11:[function(e,t,o){t.exports=function(e){return function(t){var o=t.parent,i=t.slides[0],n=i.offsetHeight,r=i.offsetWidth,s="zoom"===e||"zoom"in o.style&&"transform"!==e,a=s?t.slides:t.slides.map(function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t}),l="Moz Webkit O ms".split(" ").reduce(function(e,t){return t+"Transform"in o.style?t+"Transform":e},"Transform".toLowerCase()),c=s?function(e,t){t.style.zoom=e}:function(e,t){t.style[l]="scale("+e+")"},d=function(){var e=o.offsetWidth/r,t=o.offsetHeight/n;a.forEach(c.bind(null,Math.min(e,t)))};window.addEventListener("resize",d),d()}}},{}],12:[function(e,t,o){(function(i){!function(e){if("object"==typeof o)t.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n;"undefined"!=typeof window?n=window:void 0!==i?n=i:"undefined"!=typeof self&&(n=self);var r=n;(r=(r=r.bespoke||(r.bespoke={})).themes||(r.themes={})).sfeirschool=e()}}(function(){return function t(o,i,n){function r(a,l){if(!i[a]){if(!o[a]){var c="function"==typeof e&&e;if(!l&&c)return c(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var d=i[a]={exports:{}};o[a][0].call(d.exports,function(e){var t=o[a][1][e];return r(t||e)},d,d.exports,t,o,i,n)}return i[a].exports}for(var s="function"==typeof e&&e,a=0;a<n.length;a++)r(n[a]);return r}({1:[function(e,t,o){var i=e("bespoke-classes"),n=e("insert-css");t.exports=function(){return n('@import url(https://fonts.googleapis.com/css?family=Montserrat:200,300,400,600,700|Nunito:200,300,400,600,700|Inconsolata:400,700);html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress{display:inline-block;vertical-align:baseline}video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}hr{box-sizing:content-box;height:0}code{font-size:1em}kbd{font-family:monospace,monospace}kbd,samp{font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}*,::before,::after{box-sizing:inherit}html{box-sizing:border-box;font-size:16px}figure{margin:0}img,video{vertical-align:middle}.deck{overflow:hidden;-webkit-font-feature-settings:"kern" 1;-moz-font-feature-settings:"kern" 1;font-feature-settings:"kern" 1;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.deck:not(.bespoke-parent),.deck section:not(.bespoke-slide){display:none}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;right:0;bottom:0;left:0}.bespoke-scale-parent,.bespoke-slide{pointer-events:none}.bespoke-slide{overflow:hidden;opacity:0;background-color:#fff;position:absolute;top:50%;left:50%;width:2000px;margin-left:-1000px;height:1125px;margin-top:-562.5px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}aside[role=note],aside[role=notes]{display:none}.deck{font-family:Montserrat,Nunito,sans-serif;font-size:3rem;color:#094369}h1,h2,h3,h4,h5,h6{line-height:1;margin:0}.icon{display:inline-block}h2 .icon:not(.whole){font-size:.85em}.icon.accent{color:#ed124b}.icon.ruby{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}p,ul{margin:.5em 0 0}ul{padding:0;list-style:none}ul ul{margin:0 0 0 1em}pre,code,samp{font-family:Inconsolata,monospace;-webkit-text-fill-color:currentColor;-webkit-text-stroke-width:.005em}pre{font-size:2rem;margin:0;line-height:1.4;overflow:hidden}figcaption{color:#9e9e9e;text-align:center;font-size:1rem;margin-top:.5rem}.line{display:block}.underline{background:linear-gradient(to bottom,currentColor 0%,currentColor 100%)repeat-x left 1.15em/100% .0625em}.insert .bespoke-bullet-inactive{position:absolute!important}.bespoke-overview .insert .bespoke-bullet-inactive{position:static!important}.reveal .bespoke-bullet-inactive{position:absolute!important;opacity:0}.bespoke-overview .reveal .bespoke-bullet-inactive{position:static!important;opacity:1}.reveal .bespoke-bullet-active:not(:first-child){transition:opacity 1.5s ease-in-out .5s}.call p{margin:0;line-height:.85;text-transform:uppercase;text-align:center;font-weight:600}.call .line{display:block}.call .line.l1{font-size:5.2rem}.call .line.l2{font-size:9rem;font-weight:700}.call .line.l3{font-size:2.475rem}.bespoke-overview .bespoke-active{outline:10px solid #fdd835;outline-offset:0}th,td{margin:0;padding:0;direction:ltr}table{background:#fff;margin-bottom:1.25em;border:solid 1px #dedede}table thead,table tfoot{background:#f7f8f7;font-weight:700}table thead tr th,table thead tr td,table tfoot tr th,table tfoot tr td{padding:.5em .625em .625em;font-size:inherit;color:rgba(0,0,0,.8);text-align:left}table tr th,table tr td{padding:.5625em .625em;font-size:inherit;color:rgba(0,0,0,.8)}table tr.even,table tr.alt,table tr:nth-of-type(even){background:#f8f8f7}table thead tr th,table tfoot tr th,table tbody tr td,table tr td,table tfoot tr td{display:table-cell;line-height:1.6}table.tableblock>caption.title{white-space:nowrap;overflow:visible;max-width:0}table.tableblock{max-width:100%;border-collapse:separate}table.tableblock td>.paragraph:last-child p>p:last-child,table.tableblock th>p:last-child,table.tableblock td>p:last-child{margin-bottom:0}table.tableblock,th.tableblock,td.tableblock{border:0 solid #dedede}table.grid-all th.tableblock,table.grid-all td.tableblock{border-width:0 1px 1px 0}table.grid-all tfoot>tr>th.tableblock,table.grid-all tfoot>tr>td.tableblock{border-width:1px 1px 0 0}table.grid-cols th.tableblock,table.grid-cols td.tableblock{border-width:0 1px 0 0}table.grid-all *>tr>.tableblock:last-child,table.grid-cols *>tr>.tableblock:last-child{border-right-width:0}table.grid-rows th.tableblock,table.grid-rows td.tableblock{border-width:0 0 1px 0}table.grid-all tbody>tr:last-child>th.tableblock,table.grid-all tbody>tr:last-child>td.tableblock,table.grid-all thead:last-child>tr>th.tableblock,table.grid-rows tbody>tr:last-child>th.tableblock,table.grid-rows tbody>tr:last-child>td.tableblock,table.grid-rows thead:last-child>tr>th.tableblock{border-bottom-width:0}table.grid-rows tfoot>tr>th.tableblock,table.grid-rows tfoot>tr>td.tableblock{border-width:1px 0 0 0}table.frame-all{border-width:1px}table.frame-sides{border-width:0 1px}table.frame-topbot{border-width:1px 0}th.halign-left,td.halign-left{text-align:left}th.halign-right,td.halign-right{text-align:right}th.halign-center,td.halign-center{text-align:center}th.valign-top,td.valign-top{vertical-align:top}th.valign-bottom,td.valign-bottom{vertical-align:bottom}th.valign-middle,td.valign-middle{vertical-align:middle}table thead th,table tfoot th{font-weight:700}tbody tr th{display:table-cell;line-height:1.6;background:#f7f8f7}tbody tr th,tbody tr th p,tfoot tr th,tfoot tr th p{color:rgba(0,0,0,.8);font-weight:700}figure.cover,figure.grow{width:90%}figure.cover img,figure.grow img,figure.cover object,figure.grow object{width:100%}figure.grow{-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}figure.grow,figure.grow-y{display:-ms-flexbox;display:flex}figure.grow-y{width:90%;-ms-flex-pack:center;justify-content:center}figure.grow-y img{height:1125px}figure.cover figcaption{position:absolute;left:0;bottom:0;right:0;height:5rem;font-size:2.5rem;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-family:Inconsolata,monospace;background:rgba(25,25,25,.95);color:#fafafa}p code{background:#e15514;color:#fff}.lead{font-weight:800;font-size:3.75rem}.lead,.focus{color:#e15514}.minor{font-size:2rem;color:#666}pre.source code.hljs{background:0 0;color:inherit;display:inline;overflow:initial;padding:0}pre.source .hljs-comment,pre.source .hljs-quote,pre.source .hljs-meta{color:#9e9e9e}pre.source .hljs-comment,pre.source .hljs-quote{font-style:italic}pre.source .hljs-regexp{color:#757575}pre.source .hljs-string,pre.source .hljs-symbol{color:#ed124b}.bespoke-bullet-inactive{visibility:hidden}.spotlight .bespoke-bullet-inactive{visibility:visible}.spotlight .bespoke-bullet:not(.bespoke-bullet-current){opacity:.25}blockquote{font-size:3rem;border-left:.15em solid #4d4d4d;padding-left:1em}blockquote,blockquote+figcaption{font-family:Montserrat,Nunito,sans-serif;font-weight:400}blockquote+figcaption{font-size:2rem;color:#a0a0a0;text-align:right;margin-top:-30px;margin-right:48px}table{font-size:2rem;width:60%}.level100{background:url("images/star.png") center no-repeat;width:45px;height:44px}.level200{background:url("images/star.png") right no-repeat,url("images/star.png") left no-repeat;width:100px;height:44px}.level300{background:url("images/star.png") right no-repeat,url("images/star.png") center no-repeat,url("images/star.png") left no-repeat;width:155px;height:44px}.deck{background-color:#000}.bespoke-active{pointer-events:auto;opacity:1;z-index:1}.bespoke-inactive{transition-delay:0}.bespoke-overview .bespoke-progress-parent{display:none}.bespoke-progress-parent{position:absolute;bottom:0;left:0;right:0;height:3px}.bespoke-progress-parent .bespoke-progress-bar{transition:width .6s ease;position:absolute;z-index:1;height:100%;background-color:#e15514}.bespoke-slide{background:#141414 url("images/background_white_1.png") no-repeat;background-position:50% 50%;background-size:cover}.bespoke-slide.nobg{background:#fff}.bespoke-slide.bg1{background:#141414 url("images/background_white_1.png") no-repeat}.bespoke-slide.bg2{background:#141414 url("images/background_white_2.png") no-repeat}.bespoke-slide.bg3{background:#141414 url("images/background_white_3.png") no-repeat}.bespoke-slide.bg4{background:#141414 url("images/background_white_4.png") no-repeat}.bespoke-slide.bg5{background:#141414 url("images/background_white_5.png") no-repeat}.bespoke-slide.bg6{background:#141414 url("images/background_white_6.png") no-repeat}.bespoke-slide.bg7{background:#141414 url("images/background_white_7.png") no-repeat}.bespoke-slide.bg8{background:#141414 url("images/background_white_8.png") no-repeat}.bespoke-slide.bg-blue{background:#141414 url("images/background_blue.png") no-repeat}.bespoke-slide.bg-red{background:#141414 url("images/background_red.png") no-repeat}.bespoke-slide.bg-pink{background:#141414 url("images/background_pink.png") no-repeat}.bespoke-slide.bg-school{background:#141414 url("images/background_school.png") no-repeat}section:not(.title):not(.topic):not(.tweet):not(.wifi):not(.schoollogo):not(.banner):not(.banner-bottom) header{position:absolute;top:0}section:not(.title):not(.topic):not(.tweet):not(.wifi):not(.schoollogo):not(.banner):not(.banner-bottom) header h2{position:relative;margin:20px 0 0;text-align:center;color:#e15514;font-size:3.75rem}section:not(.title):not(.topic):not(.tweet):not(.wifi):not(.schoollogo):not(.banner):not(.banner-bottom) header h3{position:relative;margin:10px 0 0;text-align:center;color:$color;font-size:1.875rem}section:not(.title):not(.topic):not(.tweet):not(.wifi):not(.schoollogo):not(.banner):not(.banner-bottom) h2{position:absolute;top:0;margin:20px 0 0;text-align:center;color:#e15514;font-size:3.75rem}section.banner h2,section.banner-bottom h2{position:absolute;background:rgba(102,102,102,.6);padding:1.25rem 0;width:100%;text-align:center;color:#fff;font-size:6.25rem}section.banner h2{top:5%}section.banner-bottom h2{bottom:5%}section .area,section .area-bottom,section .area-right,section .area-bottom-right{position:absolute;background:rgba(102,102,102,.6);padding:1.25rem;text-align:left;color:#fff;font-size:5rem}section .area{top:10%;left:0}section .area-bottom{bottom:10%;left:0}section .area-right{top:10%;right:0}section .area-bottom-right{bottom:10%;right:0}section.axis.center>ul>li{text-align:center}section.axis>ul{-ms-flex-direction:row;flex-direction:row;-ms-flex-align:stretch;align-items:stretch;margin:0;position:absolute;top:0;right:0;bottom:0;left:0}section.axis>ul,section.axis>ul>li{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;text-align:left}section.axis>ul>li{font-size:3rem;font-weight:600;-ms-flex-direction:column;flex-direction:column;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;line-height:1.1}section.axis>ul>li figure,section.axis>ul>li pre{font-weight:400}section.axis>ul ul{font-weight:400;font-size:1.5rem;text-align:center}section.axis figure.listing{width:90%}section.axis figure.listing pre,section.axis figure.listing code{width:100%}section figure.listing{width:60%}section figure.listing pre,section figure.listing code{width:100%}section.axis figure.image{width:90%}section.axis figure.image img{width:100%}section.with-background-image figure.image{position:absolute;z-index:-1;width:100%}section figure.image{width:70%}section figure.image img{width:100%}.bespoke-slide.title h1{position:relative;margin:20px 0 0;color:#fff;text-align:center;font-size:5rem}.bespoke-slide.title h2{position:relative;margin:20px 0 0;color:#fff;font-size:6.875rem;line-height:.75;white-space:nowrap}.bespoke-slide.schoollogo::before{content:\' \';position:absolute;top:10%;height:100%;width:100%;background:url("images/logo_empty.png") no-repeat;background-position:50% 0%}.bespoke-slide.schoollogo header{position:relative;top:20%}.bespoke-slide.schoollogo .schoolcode{position:absolute;top:26%;color:#e15514;text-align:center;font-weight:700;font-size:6rem}.bespoke-slide.schoollogo .schoollevel{position:absolute;-webkit-transform:scale(1.7);transform:scale(1.7);top:45%}.bespoke-slide.tweet header{position:relative;top:20%;margin:20px 0 0}.bespoke-slide.tweet header h2{margin:20px 0 0;color:#fff;text-align:center;white-space:nowrap;font-size:2.8125rem}.bespoke-slide.tweet header p{margin:20px 0 0;color:#fff;text-align:center;white-space:nowrap;font-size:3.75rem;font-weight:700}.bespoke-slide.wifi .wifi-sid{position:absolute;top:10%;left:5%}.bespoke-slide.wifi .wifi-password{position:absolute;top:15%;left:5%}.bespoke-slide.wifi .wifi-sid,.bespoke-slide.wifi .wifi-password{margin:10px 0 0;color:#094369;font-size:3.125rem;font-weight:700}.bespoke-slide.wifi .wifi-sid span,.bespoke-slide.wifi .wifi-password span{color:#e15514}.bespoke-slide.topic:not(.bg-red):not(.bg-pink){background:#141414 url("images/background_blue.png") no-repeat}.bespoke-slide.topic.bg-red h3{color:#094369}.bespoke-slide.topic.bg-pink h3{color:#14aae1}.bespoke-slide.topic h2{position:relative;margin:0;color:#fff;text-align:left;font-size:5rem}.bespoke-slide.topic h3{color:#e15514;font-size:6.875rem;line-height:.75}.bespoke-slide.speaker::before{content:\'\';background:url("images/logo_sfeir.png") no-repeat;height:431px;width:924px;-webkit-transform:scale(.5);transform:scale(.5);position:absolute;top:11%;left:36%}.bespoke-slide.speaker .bio{position:absolute;top:35%;left:50%}.bespoke-slide.speaker .bio .name{color:#094369;font-size:4.0625rem;font-weight:700}.bespoke-slide.speaker .bio .position,.bespoke-slide.speaker .bio .twitter{color:#666;font-size:2.8125rem}.bespoke-slide.speaker .avatar-wrapper1{position:absolute;top:22%;left:16%}.bespoke-slide.speaker .avatar-wrapper1 .avatar-wrapper2{overflow:hidden;visibility:hidden;-webkit-transform:rotate(120deg);transform:rotate(120deg);width:400px;height:800px;margin:-160px 0 0 40px}.bespoke-slide.speaker .avatar-wrapper1 .avatar-wrapper2 .avatar-wrapper3{-webkit-backface-visibility:hidden;overflow:hidden;width:100%;height:100%;-webkit-transform:rotate(-60deg);transform:rotate(-60deg)}.bespoke-slide.speaker .avatar-wrapper1 .avatar-wrapper2 .avatar-wrapper3 .avatar-content{-webkit-backface-visibility:hidden;width:100%;height:100%;background-repeat:no-repeat;background-position:50%;visibility:visible;-webkit-transform:rotate(-60deg);transform:rotate(-60deg)}@page{size:2000px 1125px;margin:0}@media print{pre,code,samp{-webkit-text-stroke-width:0}.bespoke-parent,.bespoke-scale-parent,.bespoke-slide{margin:unset;position:relative;top:unset;right:unset;bottom:unset;left:unset}.bespoke-parent{overflow:visible}.bespoke-scale-parent{-webkit-transform:unset!important;transform:unset!important}.bespoke-slide{opacity:1;page-break-after:always}.bespoke-bullet-inactive{opacity:1;visibility:visible}.bespoke-slide.curtain::after{display:none}.insert .bespoke-bullet-inactive{position:static!important}.reveal .bespoke-bullet-inactive{position:static!important;opacity:1}}',{prepend:!0}),function(e){i()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,o){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},o=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,n){var r=e.slides[e.slide()],s=n-e.slide(),a=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(o.bind(null,i)),i!==r&&["inactive",a,a+"-"+Math.abs(s)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(n){e.slides.map(i),t(n.slide,"active"),o(n.slide,"inactive")})}}},{}],3:[function(e,t,o){var i={};t.exports=function(e,t){if(!i[e]){i[e]=!0;var o=document.createElement("style");o.setAttribute("type","text/css"),"textContent"in o?o.textContent=e:o.styleSheet.cssText=e;var n=document.getElementsByTagName("head")[0];t&&t.prepend?n.insertBefore(o,n.childNodes[0]):n.appendChild(o)}}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],13:[function(e,t,o){t.exports={from:function(e,t){var o=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),i=[].filter.call("string"==typeof e.slides?o.querySelectorAll(e.slides):e.slides||o.children,function(e){return"SCRIPT"!==e.nodeName}),n=i[0],r={},s=function(e,t){i[e]&&(c("deactivate",d(n,t)),n=i[e],c("activate",d(n,t)))},a=function(e,t){var o=i.indexOf(n)+e;c(e>0?"next":"prev",d(n,t))&&s(o,t)},l=function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},c=function(e,t){return(r[e]||[]).reduce(function(e,o){return e&&!1!==o(t)},!0)},d=function(e,t){return(t=t||{}).index=i.indexOf(e),t.slide=e,t},p={on:function(e,t){return(r[e]||(r[e]=[])).push(t),l.bind(null,e,t)},off:l,fire:c,slide:function(e,t){if(!arguments.length)return i.indexOf(n);c("slide",d(i[e],t))&&s(e,t)},next:a.bind(null,1),prev:a.bind(null,-1),parent:o,slides:i};return(t||[]).forEach(function(e){e(p)}),s(0),p}}},{}],14:[function(e,t,o){var i={};t.exports=function(e,t){if(!i[e]){i[e]=!0;var o=document.createElement("style");o.setAttribute("type","text/css"),"textContent"in o?o.textContent=e:o.styleSheet.cssText=e;var n=document.getElementsByTagName("head")[0];t&&t.prepend?n.insertBefore(o,n.childNodes[0]):n.appendChild(o)}}},{}],15:[function(e,t,o){t.exports=function(e){return function(t){var o,i,n=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(e,t){o=e,i=t,n.forEach(function(o,i){o.forEach(function(o,n){o.classList.add("bespoke-bullet"),i<e||i===e&&n<=t?(o.classList.add("bespoke-bullet-active"),o.classList.remove("bespoke-bullet-inactive")):(o.classList.add("bespoke-bullet-inactive"),o.classList.remove("bespoke-bullet-active")),i===e&&n===t?o.classList.add("bespoke-bullet-current"):o.classList.remove("bespoke-bullet-current")})})},s=function(e){return void 0!==n[o][i+e]};t.on("next",function(){var e=o+1;if(s(1))return r(o,i+1),!1;n[e]&&r(e,0)}),t.on("prev",function(){var e=o-1;if(s(-1))return r(o,i-1),!1;n[e]&&r(e,n[e].length-1)}),t.on("slide",function(e){r(e.index,0)}),r(0,0),t.activateBullet=r,t.slides.forEach((e,t)=>{e.bullets=n[t]})}}},{}],16:[function(e,t,o){t.exports=(()=>{const e=Array.from(document.querySelectorAll("head meta[name]")).reduce((e,t)=>(e[t.getAttribute("name")]=t.getAttribute("content"),e),{});return t=>{const o=t.slides.map((e,t)=>{const o=Array.from(e.querySelectorAll('aside[role="note"] p, aside[role="note"] li')).map(e=>e.innerHTML).join("\n");return e.bullets&&e.bullets.length>0?e.bullets.map((e,i)=>({cursor:String(t)+"."+String(i),states:[],notes:o})):{cursor:String(t),states:[],notes:o,slideLineno:Number(e.dataset.slideLineno),notesLineno:Number(e.dataset.notesLineno)}}),i={title:document.title||"",authors:e.author||"",description:e.description||"",vendor:"bespoke.js",steps:o,ratios:["16/9"],themes:["default"]};window.addEventListener("message",({source:e,data:{command:o,commandArgs:n}})=>{switch(o){case"get-slide-deck-details":e.postMessage({event:"slide-deck-details",eventData:{details:i}},"*");break;case"go-to-step":const{cursor:r}=n,[s,a]=r.split(".");t.slide(Number(s)),t.activateBullet(Number(s),Number(a));break;case"toggle-slide-deck-state":const{enabled:l}=n;document.body.classList.toggle("toggle-state",l),l&&t.playSound&&t.playSound(),!l&&t.stopSound&&t.stopSound();break;default:console.debug(`unknown protocol command ${o} with args`,n)}})}})},{}],17:[function(e,t,o){var i=e("bespoke"),n=e("bespoke-theme-sfeirschool"),r=e("./bespoke-bullets-patched"),s=e("bespoke-classes"),a=e("bespoke-cursor"),l=e("./ensuite-protocol-bespoke"),c=e("bespoke-extern"),d=e("bespoke-hash"),p=e("bespoke-multimedia"),u=e("bespoke-progress"),b=e("bespoke-nav"),f=e("bespoke-overview"),g=e("bespoke-scale");i.from({parent:"article.deck",slides:"section"},[n(),s(),g("transform"),b(),f(),r(".build, .build-items > *:not(.build-items)"),d(),p(),a(3e3),/(^\?|&)ensuite(?=$|&)/.test(window.location.search)?l():()=>{},c(i),u()])},{"./bespoke-bullets-patched":15,"./ensuite-protocol-bespoke":16,bespoke:13,"bespoke-classes":1,"bespoke-cursor":2,"bespoke-extern":3,"bespoke-hash":4,"bespoke-multimedia":5,"bespoke-nav":8,"bespoke-overview":9,"bespoke-progress":10,"bespoke-scale":11,"bespoke-theme-sfeirschool":12}]},{},[17]);