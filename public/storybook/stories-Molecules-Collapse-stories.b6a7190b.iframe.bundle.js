"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[6034],{"./src/stories/Molecules/Collapse.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sample:()=>Sample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Collapse_stories});var react=__webpack_require__("./node_modules/react/index.js"),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Collapse=_ref=>{let{label,children,titleColor,childrenColor}=_ref;const[collapseState,toggleCollapse]=(0,react.useState)(!1),[collapseHeight,changeHeight]=(0,react.useState)(),collapse=(0,react.useRef)();return(0,react.useEffect)((()=>{changeHeight(collapse.current.children[0].offsetHeight)}),[]),(0,jsx_runtime.jsxs)("div",{className:"shadow-md rounded-b",children:[(0,jsx_runtime.jsxs)("div",{onClick:()=>toggleCollapse(!collapseState),style:{backgroundColor:titleColor},className:"flex cursor-pointer justify-between rounded relative z-10 shadow px-4 py-3",children:[(0,jsx_runtime.jsx)("h1",{className:"text-xl text-gray-800",children:label}),(0,jsx_runtime.jsx)(md.ree,{className:(collapseState?"-rotate-90":"rotate-90")+" ease-out text-gray-800 duration-100 self-center text-xl"})]}),(0,jsx_runtime.jsx)("div",{ref:collapse,style:{height:collapseState?collapseHeight+"px":"0px"},className:"h-full ease-out duration-200 transition-[height] overflow-hidden",children:(0,jsx_runtime.jsx)("div",{className:"p-4",style:{backgroundColor:childrenColor},children})})]})};try{Collapse.displayName="Collapse",Collapse.__docgenInfo={description:"",displayName:"Collapse",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},titleColor:{defaultValue:null,description:"",name:"titleColor",required:!0,type:{name:"string"}},childrenColor:{defaultValue:null,description:"",name:"childrenColor",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Molecules/Collapse.tsx#Collapse"]={docgenInfo:Collapse.__docgenInfo,name:"Collapse",path:"src/components/Molecules/Collapse.tsx#Collapse"})}catch(__react_docgen_typescript_loader_error){}const Collapse_stories={title:"Molecules/Collapse",component:Collapse,argTypes:{children:{table:{disable:!0}}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{maxWidth:"600px"},children:Story()})]},Sample=(args=>(0,jsx_runtime.jsx)(Collapse,{...args})).bind({});Sample.args={label:"Collapse sample",titleColor:"#14b8a6",childrenColor:"#99f6e4",children:(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("h1",{className:"text-xl mb-2",children:"Title"}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa eligendi tempore dolore laudantium recusandae beatae laboriosam, earum excepturi nam consequatur dolor voluptatem ea perferendis dolores dolorum! Asperiores repellat illo quia."})]})};const __namedExportsOrder=["Sample"];Sample.parameters={...Sample.parameters,docs:{...Sample.parameters?.docs,source:{originalSource:"args => <Collapse {...args} />",...Sample.parameters?.docs?.source}}}}}]);