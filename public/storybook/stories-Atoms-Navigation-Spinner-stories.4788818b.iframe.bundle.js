/*! For license information please see stories-Atoms-Navigation-Spinner-stories.4788818b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6854],{"./src/stories/Atoms/Navigation/Spinner.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SpinnerDefault:()=>SpinnerDefault,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Spinner_stories});__webpack_require__("./node_modules/react/index.js");var MoonLoader=__webpack_require__("./node_modules/react-spinners/MoonLoader.js"),MoonLoader_default=__webpack_require__.n(MoonLoader),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const sizeClasses={xs:15,sm:20,md:35,lg:50,xl:65,xxl:80},Spinner=_ref=>{let{size="md",color="#36d7b7",speedMultiplier=1,...props}=_ref;const actualSize="string"==typeof size?sizeClasses[size]:size;return(0,jsx_runtime.jsx)(MoonLoader_default(),{size:actualSize,color,speedMultiplier,...props})};try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Atoms/Navigation/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/Atoms/Navigation/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}const Spinner_stories={title:"Atoms/Navigation/Spinner",component:Spinner,argTypes:{color:{control:"color"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","xxl"]},speedMultiplier:{control:"number"}}},SpinnerDefault=(args=>(0,jsx_runtime.jsx)(Spinner,{...args})).bind({});SpinnerDefault.args={color:"#36d7b7",size:"md",speedMultiplier:1};const __namedExportsOrder=["SpinnerDefault"];SpinnerDefault.parameters={...SpinnerDefault.parameters,docs:{...SpinnerDefault.parameters?.docs,source:{originalSource:"args => <Spinner {...args} />",...SpinnerDefault.parameters?.docs?.source}}}},"./node_modules/react-spinners/MoonLoader.js":function(__unused_webpack_module,exports,__webpack_require__){var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__("./node_modules/react/index.js")),unitConverter_1=__webpack_require__("./node_modules/react-spinners/helpers/unitConverter.js"),moon=(0,__webpack_require__("./node_modules/react-spinners/helpers/animation.js").createAnimation)("MoonLoader","100% {transform: rotate(360deg)}","moon");exports.default=function MoonLoader(_a){var _b=_a.loading,loading=void 0===_b||_b,_c=_a.color,color=void 0===_c?"#000000":_c,_d=_a.speedMultiplier,speedMultiplier=void 0===_d?1:_d,_e=_a.cssOverride,cssOverride=void 0===_e?{}:_e,_f=_a.size,size=void 0===_f?60:_f,additionalprops=__rest(_a,["loading","color","speedMultiplier","cssOverride","size"]),_g=(0,unitConverter_1.parseLengthAndUnit)(size),value=_g.value,unit=_g.unit,moonSize=Math.round(value/7),wrapper=__assign({display:"inherit",position:"relative",width:"".concat("".concat(value+2*moonSize).concat(unit)),height:"".concat("".concat(value+2*moonSize).concat(unit)),animation:"".concat(moon," ").concat(.6/speedMultiplier,"s 0s infinite linear"),animationFillMode:"forwards"},cssOverride),ballStyle=function(size){return{width:(0,unitConverter_1.cssValue)(size),height:(0,unitConverter_1.cssValue)(size),borderRadius:"100%"}},ball=__assign(__assign({},ballStyle(moonSize)),{backgroundColor:"".concat(color),opacity:"0.8",position:"absolute",top:"".concat("".concat(value/2-moonSize/2).concat(unit)),animation:"".concat(moon," ").concat(.6/speedMultiplier,"s 0s infinite linear"),animationFillMode:"forwards"}),circle=__assign(__assign({},ballStyle(value)),{border:"".concat(moonSize,"px solid ").concat(color),opacity:"0.1",boxSizing:"content-box",position:"absolute"});return loading?React.createElement("span",__assign({style:wrapper},additionalprops),React.createElement("span",{style:ball}),React.createElement("span",{style:circle})):null}},"./node_modules/react-spinners/helpers/animation.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.createAnimation=void 0;exports.createAnimation=function(loaderName,frames,suffix){var animationName="react-spinners-".concat(loaderName,"-").concat(suffix);if("undefined"==typeof window||!window.document)return animationName;var styleEl=document.createElement("style");document.head.appendChild(styleEl);var styleSheet=styleEl.sheet,keyFrames="\n    @keyframes ".concat(animationName," {\n      ").concat(frames,"\n    }\n  ");return styleSheet&&styleSheet.insertRule(keyFrames,0),animationName}},"./node_modules/react-spinners/helpers/unitConverter.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.cssValue=exports.parseLengthAndUnit=void 0;var cssUnit={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function parseLengthAndUnit(size){if("number"==typeof size)return{value:size,unit:"px"};var value,valueString=(size.match(/^[0-9.]*/)||"").toString();value=valueString.includes(".")?parseFloat(valueString):parseInt(valueString,10);var unit=(size.match(/[^0-9]*$/)||"").toString();return cssUnit[unit]?{value,unit}:(console.warn("React Spinners: ".concat(size," is not a valid css value. Defaulting to ").concat(value,"px.")),{value,unit:"px"})}exports.parseLengthAndUnit=parseLengthAndUnit,exports.cssValue=function cssValue(value){var lengthWithunit=parseLengthAndUnit(value);return"".concat(lengthWithunit.value).concat(lengthWithunit.unit)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);