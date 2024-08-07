/*! For license information please see stories-Atoms-Inputs-Slider-stories.c2454194.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1631],{"./src/stories/Atoms/Inputs/Slider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultSlider:()=>DefaultSlider,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Slider_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Slider=_ref=>{let{min,max,step=1,value,handleColor,trackColor,trackActiveColor,onChange,sizeInPixels=200}=_ref;const[internalValue,setInternalValue]=(0,react.useState)(value);return(0,jsx_runtime.jsxs)("div",{style:{width:`${sizeInPixels}px`,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,jsx_runtime.jsx)("input",{type:"range",min,max,step,value:internalValue,onChange:event=>{const newValue=Number(event.target.value);setInternalValue(newValue),"function"==typeof onChange?onChange(newValue):console.error("onChange prop is not a function")},style:{width:"100%",background:`linear-gradient(to right, ${trackActiveColor} 0%, ${trackActiveColor} ${(internalValue-min)/(max-min)*100}%, ${trackColor} ${(internalValue-min)/(max-min)*100}%, ${trackColor} 100%)`,appearance:"none",height:"8px",borderRadius:"5px",outline:"none"},className:"custom-slider"}),(0,jsx_runtime.jsx)("div",{children:internalValue}),(0,jsx_runtime.jsx)("style",{children:`\n        .custom-slider::-webkit-slider-thumb \n        {\n          -webkit-appearance: none;\n          appearance: none;\n          background: ${handleColor};\n          width: 20px;\n          height: 20px;\n          border-radius: 50%;\n          cursor: pointer;\n        }\n\n        .custom-slider::-moz-range-thumb \n        {\n          background: ${handleColor};\n          width: 20px;\n          height: 20px;\n          border-radius: 50%;\n          cursor: pointer;\n        }\n\n        .custom-slider::-ms-thumb \n        {\n          background: ${handleColor};\n          width: 20px;\n          height: 20px;\n          border-radius: 50%;\n          cursor: pointer;\n        }\n\n        .custom-slider:active::-webkit-slider-thumb {\n          cursor: grabbing;\n        }\n      `})]})};try{Slider.displayName="Slider",Slider.__docgenInfo={description:"",displayName:"Slider",props:{min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},handleColor:{defaultValue:null,description:"",name:"handleColor",required:!0,type:{name:"string"}},trackColor:{defaultValue:null,description:"",name:"trackColor",required:!0,type:{name:"string"}},trackActiveColor:{defaultValue:null,description:"",name:"trackActiveColor",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}},sizeInPixels:{defaultValue:{value:"200"},description:"",name:"sizeInPixels",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Atoms/Inputs/Slider.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"src/components/Atoms/Inputs/Slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}const Slider_stories={title:"Atoms/Inputs/Slider",component:Slider},DefaultSlider=(args=>(0,jsx_runtime.jsx)(Slider,{...args})).bind({});DefaultSlider.args={min:0,max:100,value:50,sizeInPixels:200,step:1,handleColor:"#84cc16",trackColor:"#e5e5e5",trackActiveColor:"#d9f99d"};const __namedExportsOrder=["DefaultSlider"];DefaultSlider.parameters={...DefaultSlider.parameters,docs:{...DefaultSlider.parameters?.docs,source:{originalSource:"args => <Slider {...args} />",...DefaultSlider.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);