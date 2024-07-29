/*! For license information please see stories-Atoms-Inputs-TextInput-stories.e6c7211e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[463],{"./src/stories/Atoms/Inputs/TextInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NumberType:()=>NumberType,ReadOnly:()=>ReadOnly,TextType:()=>TextType,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Atoms_Inputs_TextInput__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Atoms/Inputs/TextInput.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Inputs/TextInput",component:_components_Atoms_Inputs_TextInput__WEBPACK_IMPORTED_MODULE_1__.k,decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{maxWidth:"1000px"},children:Story()})]},Template=args=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(args.value);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Atoms_Inputs_TextInput__WEBPACK_IMPORTED_MODULE_1__.k,{...args,value,onChange:event=>{setValue(event.target.value)}})},TextType=Template.bind({});TextType.args={label:"Label",readonly:!1,disabled:!1,placeholder:"Placeholder",type:"text",value:"",maxLength:30};const NumberType=Template.bind({});NumberType.args={label:"Label",readonly:!1,disabled:!1,placeholder:"Placeholder",type:"number",value:"",maxLength:30};const ReadOnly=Template.bind({});ReadOnly.args={label:"ReadOnly:",readonly:!0,disabled:!1,placeholder:"Placeholder",type:"text",value:"",maxLength:30};const __namedExportsOrder=["TextType","NumberType","ReadOnly"];TextType.parameters={...TextType.parameters,docs:{...TextType.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <TextInput {...args} value={value} onChange={handleChange} />;\n}",...TextType.parameters?.docs?.source}}},NumberType.parameters={...NumberType.parameters,docs:{...NumberType.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <TextInput {...args} value={value} onChange={handleChange} />;\n}",...NumberType.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:"args => {\n  const [value, setValue] = useState(args.value);\n  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setValue(event.target.value);\n  };\n  return <TextInput {...args} value={value} onChange={handleChange} />;\n}",...ReadOnly.parameters?.docs?.source}}}},"./src/components/Atoms/Inputs/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>TextInput});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInput=_ref=>{let{label,placeholder,type="text",value:propValue,disabled=!1,readonly=!1,onChange,maxLength}=_ref;const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propValue),input=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"w-full",children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label",{className:"mb-1 block text-lg",onClick:()=>{var _input$current;return null==input||null===(_input$current=input.current)||void 0===_input$current?void 0:_input$current.focus()},children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{ref:input,onChange:event=>{setValue(event.target.value),onChange&&onChange(event)},disabled,readOnly:readonly,type,placeholder,value,maxLength,className:"\n          inputStyle\n          rounded-lg \n          w-full \n          border-[1px] \n          border-gray-400/70\n          py-2 px-3\n          ease-out \n          transition-all \n          duration-100\n          ".concat(disabled?"bg-neutral-200 text-neutral-500 cursor-not-allowed":"","\n        ")})]})};try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:{value:"false"},description:"",name:"readonly",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Atoms/Inputs/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/components/Atoms/Inputs/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);