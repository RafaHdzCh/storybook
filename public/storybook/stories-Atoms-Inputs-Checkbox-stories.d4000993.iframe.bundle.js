/*! For license information please see stories-Atoms-Inputs-Checkbox-stories.d4000993.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[8363],{"./src/stories/Atoms/Inputs/Checkbox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Checkbox_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=_ref=>{let{label,checked=!1,onClick}=_ref;const[check,setChecked]=(0,react.useState)();return(0,react.useEffect)((()=>{setChecked(checked)}),[checked]),(0,jsx_runtime.jsx)("div",{className:"flex w-full relative",children:(0,jsx_runtime.jsxs)("label",{className:"flex",children:[(0,jsx_runtime.jsx)("input",{onChange:ev=>{onClick&&onClick(ev),setChecked(!check)},type:"checkbox",className:"self-center filled-in mt-2 sm:mt-0",checked:check}),(0,jsx_runtime.jsx)("span",{className:"w-full after:border-2 dark:after:border-2 dark:after:border-darkmode-400 after:border-[#5a5a5a] text-gray-500 dark:text-darkmode-300 cursor-pointer pl-4 self-center grow mt-2 sm:mt-0",children:label})]})})};try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: ChangeEvent<HTMLInputElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Atoms/Inputs/Checkbox.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/components/Atoms/Inputs/Checkbox.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}const Checkbox_stories={title:"Atoms/Inputs/Checkbox",component:Checkbox},Primary=(args=>(0,jsx_runtime.jsx)(Checkbox,{...args})).bind({});Primary.args={label:"Checkbox",checked:!1};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Checkbox {...args} />",...Primary.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);