/*! For license information please see stories-Molecules-ColorPalette-stories.f838f98e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7361],{"./src/stories/Molecules/ColorPalette.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DarkMode:()=>DarkMode,Normal:()=>Normal,Pastel:()=>Pastel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ColorPalette_stories});__webpack_require__("./node_modules/react/index.js");var ColorPalette=__webpack_require__("./src/components/Molecules/ColorPalette.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ColorPalette_stories={title:"Molecules/Color Palette",component:ColorPalette.r,argTypes:{primary:{control:{type:"color"}},secondary:{control:{type:"color"}},complementary:{control:{type:"color"}},secondaryText:{control:{type:"color"}},primaryText:{control:{type:"color"}}},decorators:[story=>(0,jsx_runtime.jsx)("div",{style:{maxWidth:"900px"},children:story()})]},Template=args=>(0,jsx_runtime.jsx)(ColorPalette.r,{...args}),Normal=Template.bind({});Normal.args={primary:"#f39200",background:"#f1e4de",secondary:"#ffffff",complementary:"#e58a02",primaryText:"#ffffff",secondaryText:"#333333"};const DarkMode=Template.bind({});DarkMode.args={primary:"#242424",background:"#323232",secondary:"#242424",complementary:"#e66902",primaryText:"#ffffff",secondaryText:"#e8e8e8"};const Pastel=Template.bind({});Pastel.args={primary:"#fce3ff",background:"#dfe7f2",secondary:"#ffffff",complementary:"#7c1bc9",primaryText:"#e600b3",secondaryText:"#3b1ec4"};const __namedExportsOrder=["Normal","DarkMode","Pastel"];Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"args => <ColorPalette {...args} />",...Normal.parameters?.docs?.source}}},DarkMode.parameters={...DarkMode.parameters,docs:{...DarkMode.parameters?.docs,source:{originalSource:"args => <ColorPalette {...args} />",...DarkMode.parameters?.docs?.source}}},Pastel.parameters={...Pastel.parameters,docs:{...Pastel.parameters?.docs,source:{originalSource:"args => <ColorPalette {...args} />",...Pastel.parameters?.docs?.source}}}},"./src/components/Molecules/ColorPalette.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>ColorPalette});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ColorPalette=_ref=>{let{primary,secondary,primaryText,complementary,background,secondaryText}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{backgroundColor:background},className:"relative h-[200px] w-[150px] overflow-hidden rounded-md shadow-md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:secondary},className:"w-full shadow",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{style:{color:secondaryText},className:"pl-2 py-0.5 font-medium text-xs text-white",children:"Logo"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"h-[125px] overflow-hidden",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"px-2.5 mx-auto mt-2.5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{borderColor:complementary,backgroundColor:primary},className:"px-2 py-1 border-l-[3px] shadow w-full rounded-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:primaryText,opacity:"40%"},className:"w-11/12 h-1 my-1 rounded-full"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:primaryText,opacity:"40%"},className:"w-7/12 h-1 my-1 rounded-full"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:primaryText,opacity:"40%"},className:"w-4/12 h-1 my-1 rounded-full"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:primaryText,opacity:"40%"},className:"w-8/12 h-1 my-1 rounded-full"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"px-2.5 mx-auto mt-2.5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{borderColor:complementary,backgroundColor:primary},className:"px-2 py-1 border-l-[3px] shadow w-full rounded-sm",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:primaryText,opacity:"40%"},className:"w-10/12 h-1 my-1 rounded-full"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:primaryText,opacity:"40%"},className:"w-5/12 h-1 my-1 rounded-full"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:primaryText,opacity:"40%"},className:"w-8/12 h-1 my-1 rounded-full"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:primaryText,opacity:"40%"},className:"w-3/12 h-1 my-1 rounded-full"})]})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{color:secondaryText,backgroundColor:secondary},className:"h-4 text-[8px] flex justify-end z-10 absolute bottom-0 w-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"self-center px-2 pt-0.5",children:"©Copyright 2022"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:secondary,opacity:"80%"},className:"shadow container mx-auto h-12 w-full",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"grid grid-cols-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"mt-1.5 ml-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:secondaryText,opacity:"60%"},className:"w-9/12 h-1 my-1 rounded-full"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:secondaryText,opacity:"60%"},className:"w-5/12 h-1 my-1 rounded-full"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:secondaryText,opacity:"60%"},className:"w-8/12 h-1 my-1 rounded-full"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:"mt-2.5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:secondaryText,opacity:"60%"},className:"w-8/12 h-1 my-1 rounded-full"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:secondaryText,opacity:"60%"},className:"w-6/12 h-1 my-1 rounded-full"})]})]})})]})};try{ColorPalette.displayName="ColorPalette",ColorPalette.__docgenInfo={description:"",displayName:"ColorPalette",props:{primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"string"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!0,type:{name:"string"}},background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"string"}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!0,type:{name:"string"}},complementary:{defaultValue:null,description:"",name:"complementary",required:!0,type:{name:"string"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Molecules/ColorPalette.tsx#ColorPalette"]={docgenInfo:ColorPalette.__docgenInfo,name:"ColorPalette",path:"src/components/Molecules/ColorPalette.tsx#ColorPalette"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);