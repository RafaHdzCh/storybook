/*! For license information please see stories-Atoms-Inputs-Toggle-stories.d43c1ede.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[9784],{"./src/stories/Atoms/Inputs/Toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultToggle:()=>DefaultToggle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toggle=_ref=>{let{onToggle,defaultChecked=!1,size="medium",handleColor,bgColor,bgActiveColor}=_ref;const[isChecked,setIsChecked]=(0,react.useState)(defaultChecked),bgStyle={backgroundColor:isChecked?bgActiveColor:bgColor},handleStyle={backgroundColor:handleColor,transform:isChecked?"translateX(calc(100% - 2px))":"translateX(2px)"};return(0,jsx_runtime.jsxs)("div",{className:`relative inline-flex items-center cursor-pointer ${{small:"w-8 h-4",medium:"w-12 h-6",large:"w-16 h-8"}[size]}`,onClick:()=>{setIsChecked(!isChecked),onToggle&&onToggle(!isChecked)},children:[(0,jsx_runtime.jsx)("span",{style:bgStyle,className:"block w-full h-full rounded-full transition-all duration-300"}),(0,jsx_runtime.jsx)("span",{style:handleStyle,className:"absolute top-0 left-0 flex items-center justify-center w-1/2 h-full rounded-full transition-transform duration-300"})]})};try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{onToggle:{defaultValue:null,description:"",name:"onToggle",required:!1,type:{name:"((isChecked: boolean) => void)"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},handleColor:{defaultValue:null,description:"",name:"handleColor",required:!0,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!0,type:{name:"string"}},bgActiveColor:{defaultValue:null,description:"",name:"bgActiveColor",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Atoms/Inputs/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/Atoms/Inputs/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}const Toggle_stories={title:"Atoms/Inputs/Toggle",component:Toggle},DefaultToggle=(args=>(0,jsx_runtime.jsx)(Toggle,{...args})).bind({});DefaultToggle.args={size:"medium",handleColor:"#84cc16",bgColor:"#e5e5e5",bgActiveColor:"#d9f99d",defaultChecked:!1};const __namedExportsOrder=["DefaultToggle"];DefaultToggle.parameters={...DefaultToggle.parameters,docs:{...DefaultToggle.parameters?.docs,source:{originalSource:"args => <Toggle {...args} />",...DefaultToggle.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);