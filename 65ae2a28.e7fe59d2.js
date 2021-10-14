/*! For license information please see 65ae2a28.e7fe59d2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{100:function(e,t,n){"use strict";var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),b=1;b<arguments.length;b++){for(var u in n=Object(arguments[b]))r.call(n,u)&&(c[u]=n[u]);if(a){l=a(n);for(var s=0;s<l.length;s++)o.call(n,l[s])&&(c[l[s]]=n[l[s]])}}return c}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),o=(n(98),n(97)),i={id:"getting_started_on_web",title:"Getting Started on web",sidebar_label:"Web"},l={unversionedId:"getting_started_on_web",id:"getting_started_on_web",isDocsHomePage:!1,title:"Getting Started on web",description:"Try the Demo",source:"@site/../docs/getting_started_on_web.md",slug:"/getting_started_on_web",permalink:"/fbt/docs/getting_started_on_web",version:"current",lastUpdatedBy:"David",lastUpdatedAt:1634169990,sidebar_label:"Web",sidebar:"docs",next:{title:"Getting Started with React Native",permalink:"/fbt/docs/getting_started_react_native"}},c=[{value:"Try the Demo",id:"try-the-demo",children:[]},{value:"NPM module dependencies",id:"npm-module-dependencies",children:[{value:"Babel Plugin ordering (Caveat)",id:"babel-plugin-ordering-caveat",children:[]},{value:"Webpack Example",id:"webpack-example",children:[]}]},{value:"Build-time / offline processes",id:"build-time--offline-processes",children:[{value:"Collection",id:"collection",children:[]},{value:"Translation",id:"translation",children:[]},{value:"How to use these scripts",id:"how-to-use-these-scripts",children:[]}]},{value:"Runtime",id:"runtime",children:[{value:"Initialization",id:"initialization",children:[]},{value:"Changing of translation locale on the fly",id:"changing-of-translation-locale-on-the-fly",children:[]}]}],b={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"try-the-demo"},"Try the Demo"),Object(o.b)("p",null,"Check out our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/fbt"}),"Github")," repository and run the Webpack demo app.\nSee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/tree/main/demo-app#building-and-starting-the-demo-app"}),'"Building and starting the demo app"')),Object(o.b)("h1",{id:"integrating-into-your-app"},"Integrating into your app"),Object(o.b)("h2",{id:"npm-module-dependencies"},"NPM module dependencies"),Object(o.b)("p",null,"The required NPM modules to add to your ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")," in your app are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/fbt"}),Object(o.b)("strong",{parentName:"a"},"fbt"))," - The ",Object(o.b)("inlineCode",{parentName:"li"},"fbt")," runtime module"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/babel-plugin-fbt"}),Object(o.b)("strong",{parentName:"a"},"babel-plugin-fbt"))," - The primary Babel transform"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/babel-plugin-fbt-runtime"}),Object(o.b)("strong",{parentName:"a"},"babel-plugin-fbt-runtime"))," - The secondary Babel transform",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Transforms the raw payloads within ",Object(o.b)("inlineCode",{parentName:"li"},"fbt._(...)")," so they can be used at runtime (by ",Object(o.b)("inlineCode",{parentName:"li"},"fbt._"),")"),Object(o.b)("li",{parentName:"ul"},"NOTE: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/issues/125"}),"This plugin should get merged into ",Object(o.b)("inlineCode",{parentName:"a"},"babel-plugin-fbt"))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@fbtjs/default-collection-transform"}),Object(o.b)("strong",{parentName:"a"},"@fbtjs/default-collection-transform")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Only required if if you elect ",Object(o.b)("em",{parentName:"li"},"not")," to pass a custom ",Object(o.b)("inlineCode",{parentName:"li"},"--transform")," nor ",Object(o.b)("inlineCode",{parentName:"li"},"--custom-collector")," in the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/3fc75eb5b3303db6041df098b5f77a94b5f36309/packages/babel-plugin-fbt/src/bin/collectFbt.js#L116-L152"}),"collection script"))))),Object(o.b)("p",null,"If you're unfamiliar with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/"}),"Babel"),", you can read through ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/"}),"their documentation here")),Object(o.b)("h3",{id:"babel-plugin-ordering-caveat"},"Babel Plugin ordering (Caveat)"),Object(o.b)("p",null,"There is a plugin ordering gotcha to be aware of if you use other Babel plugins.\nFBT expects to be the first plugin to visit its relevant ",Object(o.b)("inlineCode",{parentName:"p"},"<fbt>")," and ",Object(o.b)("inlineCode",{parentName:"p"},"fbt(...)")," nodes\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/issues/40"}),"See this Github issue tracking this")),Object(o.b)("p",null,"You'll hit issues if another transforms beats the ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-fbt"),'\nto the Babel AST, node and transforms it such that the plugin doesn\'t\n"recognize" as an ',Object(o.b)("inlineCode",{parentName:"p"},"fbt")," node anymore.  This is most commonly on JSX nodes.\nTo work around this you can use Babel's ",Object(o.b)("inlineCode",{parentName:"p"},"passPerPreset")," option, and ensure ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-fbt")," is in an earlier preset bundle:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"  babel.transformSync(source, {\n    passPerPreset: true,\n    {presets: [\n      {plugins: [\u2018babel-plugin-fbt\u2019, \u2018babel-plugin-fbt-runtime'...]}\n      {plugins: [\u2018babel-plugin-jsx-foo\u2019, ...]} //\n    ]},\n    ... // your other options\n  })\n")),Object(o.b)("h3",{id:"webpack-example"},"Webpack Example"),Object(o.b)("p",null,"You'll need to add the fbt babel transforms in a manner similar to our demo-app.\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/543e0a9c5b5c74e2094da3b94e3828c1dccacb7a/demo-app/webpack.config.js#L54-L59"}),"See our demo-app's Webpack config")),Object(o.b)("h2",{id:"build-time--offline-processes"},"Build-time / offline processes"),Object(o.b)("h3",{id:"collection"},"Collection"),Object(o.b)("p",null,"There are scripts bundled into the ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-fbt")," package that are designed for collecting source text (and associated metadata) from your application's source.\nThese are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/19531133625dab1d38995dcf578dcfdfa0b09048/packages/babel-plugin-fbt/package.json#L10"}),"fbt-manifest")," -\nScans provided filesystem paths and generates a manifest of the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://facebook.github.io/fbt/docs/enums"}),"enumeration modules"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"NOTE"),": Enum modules must end in ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/3a5441708ca6b71c2c18fe5a952d1058a22306d1/packages/babel-plugin-fbt/bin/manifest.js#L66"}),"$FbtEnum.(js|jsx|ts|tsx)")," (i.e. ",Object(o.b)("inlineCode",{parentName:"li"},"Foo$FbtEnum.js"),")"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/19531133625dab1d38995dcf578dcfdfa0b09048/packages/babel-plugin-fbt/package.json#L9"}),"fbt-collectFbt")," -\nGiven source input, extract any source text and print them to STDOUT as JSON",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@fbtjs/default-collection-transform"}),Object(o.b)("strong",{parentName:"a"},"@fbtjs/default-collection-transform"))," - As mentioned, this optional package provides a default transform for collection")))),Object(o.b)("h3",{id:"translation"},"Translation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/19531133625dab1d38995dcf578dcfdfa0b09048/packages/babel-plugin-fbt/package.json#L11"}),"fbt-translate")," -\nCreates translation payloads for runtime",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Takes extracted source text (from ",Object(o.b)("inlineCode",{parentName:"li"},"collectFbt"),") and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://facebook.github.io/fbt/docs/translating"}),"translations provided in JSON format")," to produce these payloads")))),Object(o.b)("h3",{id:"how-to-use-these-scripts"},"How to use these scripts"),Object(o.b)("p",null,"You can see how the demo-app ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/3a5441708ca6b71c2c18fe5a952d1058a22306d1/demo-app/package.json#L11-L14"}),"calls into these scripts here"),"."),Object(o.b)("p",null,"The demo app ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/3a5441708ca6b71c2c18fe5a952d1058a22306d1/demo-app/run_all.js"}),"runs all these in another script, here")),Object(o.b)("h2",{id:"runtime"},"Runtime"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/fbt"}),"fbt runtime")," is what resolves the translation payload table generated during the translation phase into a singular result base on all the input provided at runtime."),Object(o.b)("h3",{id:"initialization"},"Initialization"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"fbt")," runtime requires that you initialize with your relevant translations via the ",Object(o.b)("inlineCode",{parentName:"p"},"init()")," function.  You can see an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/df2414ab3eb00a94b4a082d8f62e0e39e3053e40/demo-app/src/example/Example.react.js#L22-L27"}),"example of this in the demo-app"),"."),Object(o.b)("h3",{id:"changing-of-translation-locale-on-the-fly"},"Changing of translation locale on the fly"),Object(o.b)("p",null,"Let's assume you've split your translation payloads per locale using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/98d0516290975f614737387748769e235bf61216/packages/babel-plugin-fbt/bin/translate.js#L145-L153"}),Object(o.b)("inlineCode",{parentName:"a"},"--output-dir")," option")," of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/fbt/blob/main/packages/babel-plugin-fbt/src/bin/translate.js"}),Object(o.b)("inlineCode",{parentName:"a"},"translate")," script"),". In this example, your app was initialized with the ",Object(o.b)("inlineCode",{parentName:"p"},"es_ES")," translation payload and, upon user request, you need to load ",Object(o.b)("inlineCode",{parentName:"p"},"fr_FR")," translations and show these in the UI. (We'll assume that your app already has access to the new translation payload)"),Object(o.b)("p",null,"In order to change of translation locale on the fly, you'll need to do all the items below:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Update the translation payload")," by calling ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/f58d7c24e675c925d6d54dc33aa749b1640da200/runtime/nonfb/FbtTranslations.js#L49"}),Object(o.b)("inlineCode",{parentName:"a"},"FbtTranslations.registerTranslations(newTranslationPayload)")),". The translation payload object used there should have the same structure as what was passed to the ",Object(o.b)("inlineCode",{parentName:"li"},"init()")," function."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Expose the current UI translation locale")," by providing a ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/df2414ab3eb00a94b4a082d8f62e0e39e3053e40/runtime/shared/FbtHooks.js#L83"}),Object(o.b)("inlineCode",{parentName:"a"},"getViewerContext()"))," hook to the ",Object(o.b)("inlineCode",{parentName:"li"},"init()")," function. See our our ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/fbt/blob/df2414ab3eb00a94b4a082d8f62e0e39e3053e40/demo-app/src/example/Example.react.js#L17-L27"}),"demo app")," for example.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"NOTE: it's not sufficient to only change the translation payload because we apply various number variation and phonological rules based on the UI locale. I.e. If you forget to change of locale, you might still end up displaying incorrect translations.")))))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=a,d=s["".concat(i,".").concat(f)]||s[f]||p[f]||o;return n?r.a.createElement(d,l(l({ref:t},b),{},{components:n})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";e.exports=n(99)},99:function(e,t,n){"use strict";var a=n(100),r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,b=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}function v(){}function N(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var w=N.prototype=new v;w.constructor=N,a(w,y.prototype),w.isPureReactComponent=!0;var k={current:null},C=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var a,r={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)C.call(t,a)&&!_.hasOwnProperty(a)&&(r[a]=t[a]);var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){for(var b=Array(c),u=0;u<c;u++)b[u]=arguments[u+2];r.children=b}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===r[a]&&(r[a]=c[a]);return{$$typeof:o,type:e,key:i,ref:l,props:r,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g,E=[];function P(e,t,n,a){if(E.length){var r=E.pop();return r.result=e,r.keyPrefix=t,r.func=n,r.context=a,r.count=0,r}return{result:e,keyPrefix:t,func:n,context:a,count:0}}function L(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function $(e,t,n,a){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var l=!1;if(null===e)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return n(a,e,""===t?"."+I(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var b=t+I(r=e[c],c);l+=$(r,b,n,a)}else if(null===e||"object"!=typeof e?b=null:b="function"==typeof(b=h&&e[h]||e["@@iterator"])?b:null,"function"==typeof b)for(e=b.call(e),c=0;!(r=e.next()).done;)l+=$(r=r.value,b=t+I(r,c++),n,a);else if("object"===r)throw n=""+e,Error(j(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return l}function R(e,t,n){return null==e?0:$(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,n){var a=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,a,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(T,"$&/")+"/")+n)),a.push(e))}function B(e,t,n,a,r){var o="";null!=n&&(o=(""+n).replace(T,"$&/")+"/"),R(e,F,t=P(t,o,a,r)),L(t)}var U={current:null};function A(){var e=U.current;if(null===e)throw Error(j(321));return e}var M={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:function(e,t,n){if(null==e)return e;var a=[];return B(e,a,null,t,n),a},forEach:function(e,t,n){if(null==e)return e;R(e,D,t=P(null,null,t,n)),L(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return B(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(j(143));return e}},t.Component=y,t.Fragment=l,t.Profiler=b,t.PureComponent=N,t.StrictMode=c,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error(j(267,e));var r=a({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(u in t)C.call(t,u)&&!_.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==b?b[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){b=Array(u);for(var s=0;s<u;s++)b[s]=arguments[s+2];r.children=b}return{$$typeof:o,type:e.type,key:i,ref:l,props:r,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.14.0"}}]);