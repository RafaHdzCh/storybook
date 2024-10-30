"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5559],{"./src/stories/Atoms/Navigation/MenuSection.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithLinks:()=>WithLinks,WithoutLinks:()=>WithoutLinks,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_Atoms_Navigation_MenuSection__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Atoms/Navigation/MenuSection.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Navigation/Menu Section",componen:_components_Atoms_Navigation_MenuSection__WEBPACK_IMPORTED_MODULE_1__.H,decorators:[story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{maxWidth:"250px"},children:story()})]},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Atoms_Navigation_MenuSection__WEBPACK_IMPORTED_MODULE_1__.H,{...args}),WithLinks=Template.bind({});WithLinks.args={label:"Profile",links:[{label:"Personal information",link:""},{label:"Balance",link:""},{label:"Settings",link:""}]};const WithoutLinks=Template.bind({});WithoutLinks.args={label:"Home"};const __namedExportsOrder=["WithLinks","WithoutLinks"];WithLinks.parameters={...WithLinks.parameters,docs:{...WithLinks.parameters?.docs,source:{originalSource:"args => <MenuSection {...args} />",...WithLinks.parameters?.docs?.source}}},WithoutLinks.parameters={...WithoutLinks.parameters,docs:{...WithoutLinks.parameters?.docs,source:{originalSource:"args => <MenuSection {...args} />",...WithoutLinks.parameters?.docs?.source}}}},"./src/components/Atoms/Navigation/MenuLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>MenuLink});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuLink=_ref=>{let{children,link}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:link,className:"block antialiased pl-14 pr-6 py-1.5 hover:bg-gray-100 transition-colors",children})};try{MenuLink.displayName="MenuLink",MenuLink.__docgenInfo={description:"",displayName:"MenuLink",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Atoms/Navigation/MenuLink.tsx#MenuLink"]={docgenInfo:MenuLink.__docgenInfo,name:"MenuLink",path:"src/components/Atoms/Navigation/MenuLink.tsx#MenuLink"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Atoms/Navigation/MenuSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>MenuSection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-icons/md/index.mjs"),_MenuLink__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Atoms/Navigation/MenuLink.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuSection=_ref=>{let{label,links,collapsed}=_ref;const[collapse,toggleCollapse]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null!=collapsed&&collapsed),[collapseHeight,changeHeight]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),collapseRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{changeHeight(collapseRef.current.children[0].offsetHeight),toggleCollapse(null!=collapsed&&collapsed)}),[collapsed]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a",{href:"",onClick:()=>toggleCollapse(!collapse),className:"text-lg cursor-pointer hover:bg-gray-100 flex justify-between font-bold px-6 py-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"flex space-x-2",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.AfF,{className:"self-center text-xl"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"antialiased self-center relative top-[1px]",children:label})]}),links&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.mf,{className:`${collapse&&"-rotate-180"} ease-out duration-300 self-center text-xl`})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{ref:collapseRef,style:{height:collapse?collapseHeight+"px":"0px"},className:"h-full ease-out duration-300 transition-[height] overflow-hidden",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:links&&links.map((link=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MenuLink__WEBPACK_IMPORTED_MODULE_1__.w,{link:link.link,children:link.label})))})})]})};try{MenuSection.displayName="MenuSection",MenuSection.__docgenInfo={description:"",displayName:"MenuSection",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!1,type:{name:"MenuLinkInterface[]"}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Atoms/Navigation/MenuSection.tsx#MenuSection"]={docgenInfo:MenuSection.__docgenInfo,name:"MenuSection",path:"src/components/Atoms/Navigation/MenuSection.tsx#MenuSection"})}catch(__react_docgen_typescript_loader_error){}}}]);