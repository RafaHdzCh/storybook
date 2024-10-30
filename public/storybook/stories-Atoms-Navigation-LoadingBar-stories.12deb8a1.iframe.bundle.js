/*! For license information please see stories-Atoms-Navigation-LoadingBar-stories.12deb8a1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3100],{"./src/stories/Atoms/Navigation/LoadingBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Bar:()=>Bar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LoadingBar_stories});var react=__webpack_require__("./node_modules/react/index.js"),cssUnit={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function cssValue(value){var lengthWithunit=function parseLengthAndUnit(size){if("number"==typeof size)return{value:size,unit:"px"};var value,valueString=(size.match(/^[0-9.]*/)||"").toString();value=valueString.includes(".")?parseFloat(valueString):parseInt(valueString,10);var unit=(size.match(/[^0-9]*$/)||"").toString();return cssUnit[unit]?{value,unit}:(console.warn("React Spinners: ".concat(size," is not a valid css value. Defaulting to ").concat(value,"px.")),{value,unit:"px"})}(value);return"".concat(lengthWithunit.value).concat(lengthWithunit.unit)}var BasicColors,createAnimation=function(loaderName,frames,suffix){var animationName="react-spinners-".concat(loaderName,"-").concat(suffix);if("undefined"==typeof window||!window.document)return animationName;var styleEl=document.createElement("style");document.head.appendChild(styleEl);var styleSheet=styleEl.sheet,keyFrames="\n    @keyframes ".concat(animationName," {\n      ").concat(frames,"\n    }\n  ");return styleSheet&&styleSheet.insertRule(keyFrames,0),animationName};!function(BasicColors){BasicColors.maroon="#800000",BasicColors.red="#FF0000",BasicColors.orange="#FFA500",BasicColors.yellow="#FFFF00",BasicColors.olive="#808000",BasicColors.green="#008000",BasicColors.purple="#800080",BasicColors.fuchsia="#FF00FF",BasicColors.lime="#00FF00",BasicColors.teal="#008080",BasicColors.aqua="#00FFFF",BasicColors.blue="#0000FF",BasicColors.navy="#000080",BasicColors.black="#000000",BasicColors.gray="#808080",BasicColors.silver="#C0C0C0",BasicColors.white="#FFFFFF"}(BasicColors||(BasicColors={}));var calculateRgba=function(color,opacity){if(color.startsWith("rgb"))return function(color,opacity){if(color.includes("/"))return color.replace("rgb(","rgba(");var rgbValues=color.substring(color.startsWith("rgba(")?5:4,color.length-1).trim(),splittedByCommas=rgbValues.split(",");return 4===splittedByCommas.length?color.replace("rgb(","rgba("):3===splittedByCommas.length?"rgba(".concat(rgbValues,", ").concat(opacity,")"):"rgba(".concat(rgbValues," / ").concat(opacity,")")}(color,opacity);if(Object.keys(BasicColors).includes(color)&&(color=BasicColors[color]),"#"===color[0]&&(color=color.slice(1)),3===color.length){var res_1="";color.split("").forEach((function(c){res_1+=c,res_1+=c})),color=res_1}var rgbValues=(color.match(/.{2}/g)||[]).map((function(hex){return parseInt(hex,16)})).join(", ");return"rgba(".concat(rgbValues,", ").concat(opacity,")")},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},BarLoader_long=createAnimation("BarLoader","0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}","long"),BarLoader_short=createAnimation("BarLoader","0% {left: -200%;right: 100%} 60% {left: 107%;right: -8%} 100% {left: 107%;right: -8%}","short");const esm_BarLoader=function BarLoader(_a){var _b=_a.loading,loading=void 0===_b||_b,_c=_a.color,color=void 0===_c?"#000000":_c,_d=_a.speedMultiplier,speedMultiplier=void 0===_d?1:_d,_e=_a.cssOverride,cssOverride=void 0===_e?{}:_e,_f=_a.height,height=void 0===_f?4:_f,_g=_a.width,width=void 0===_g?100:_g,additionalprops=__rest(_a,["loading","color","speedMultiplier","cssOverride","height","width"]),wrapper=__assign({display:"inherit",position:"relative",width:cssValue(width),height:cssValue(height),overflow:"hidden",backgroundColor:calculateRgba(color,.2),backgroundClip:"padding-box"},cssOverride),style=function(i){return{position:"absolute",height:cssValue(height),overflow:"hidden",backgroundColor:color,backgroundClip:"padding-box",display:"block",borderRadius:2,willChange:"left, right",animationFillMode:"forwards",animation:"".concat(1===i?BarLoader_long:BarLoader_short," ").concat(2.1/speedMultiplier,"s ").concat(2===i?"".concat(1.15/speedMultiplier,"s"):""," ").concat(1===i?"cubic-bezier(0.65, 0.815, 0.735, 0.395)":"cubic-bezier(0.165, 0.84, 0.44, 1)"," infinite")}};return loading?react.createElement("span",__assign({style:wrapper},additionalprops),react.createElement("span",{style:style(1)}),react.createElement("span",{style:style(2)})):null};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const LoadingBar=_ref=>{let{color="#36d7b7",width=100,height=4,rounded=!1}=_ref;return(0,jsx_runtime.jsx)(esm_BarLoader,{className:rounded?"rounded-full":"",color,width,height})};try{LoadingBar.displayName="LoadingBar",LoadingBar.__docgenInfo={description:"",displayName:"LoadingBar",props:{rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Atoms/Navigation/LoadingBar.tsx#LoadingBar"]={docgenInfo:LoadingBar.__docgenInfo,name:"LoadingBar",path:"src/components/Atoms/Navigation/LoadingBar.tsx#LoadingBar"})}catch(__react_docgen_typescript_loader_error){}const LoadingBar_stories={title:"Atoms/Navigation/LoadingBar",component:LoadingBar,argTypes:{color:{control:"color"},width:{control:"number"},height:{control:"number"}}},Bar=(args=>(0,jsx_runtime.jsx)(LoadingBar,{...args})).bind({});Bar.args={color:"#075985",width:200,height:8,rounded:!0};const __namedExportsOrder=["Bar"];Bar.parameters={...Bar.parameters,docs:{...Bar.parameters?.docs,source:{originalSource:"args => <LoadingBar {...args} />",...Bar.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);