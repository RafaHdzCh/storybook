"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[3840],{"./src/stories/Molecules/Toast.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Mobile:()=>Mobile,Success:()=>Success,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toast_stories});var react=__webpack_require__("./node_modules/react/index.js"),md=__webpack_require__("./node_modules/react-icons/md/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toast=_ref=>{let{responsive="desktop",type,text,timeout}=_ref;const[toast,toggleToast]=(0,react.useState)(!1),toastRef=(0,react.useRef)();let styles,icon;switch((0,react.useEffect)((()=>{setTimeout((()=>{toggleToast(!0)}),100),setTimeout((()=>{toggleToast(!1)}),timeout)}),[timeout]),type){case"success":styles="bg-emerald-500",icon=(0,jsx_runtime.jsx)(md.VD8,{className:"self-center text-2xl"});break;case"warning":styles="bg-orange-500",icon=(0,jsx_runtime.jsx)(md.ItP,{className:"self-center text-2xl"});break;case"danger":styles="bg-rose-500",icon=(0,jsx_runtime.jsx)(md.qiG,{className:"self-center text-2xl"})}return(0,jsx_runtime.jsxs)("div",{children:["desktop"===responsive&&(0,jsx_runtime.jsx)("div",{style:{visibility:toast?"visible":"hidden"},className:"transition-all ease-out duration-500 fixed top-[20%] right-[10%]",children:(0,jsx_runtime.jsxs)("div",{style:{opacity:toast?"100%":"0%",transform:toast?"translateY(0px)":"translateY(150px)"},className:styles+" sticky transition-all ease-out duration-300 max-w-[400px] flex space-x-4 p-5 z-depth-2 rounded-[2px] text-white",children:[icon,(0,jsx_runtime.jsx)("p",{className:"montserrat self-center max-w-[300px]",children:text})]})}),"mobile"===responsive&&(0,jsx_runtime.jsx)("div",{style:{visibility:toast?"visible":"hidden"},className:"transition-all ease-out duration-500 w-screen -ml-4 z-10 bottom-0 fixed",children:(0,jsx_runtime.jsxs)("div",{ref:toastRef,style:{transform:toast?"translateY(0px)":"translateY(400px)"},className:styles+" z-depth-2 p-5 rounded-[2px] flex space-x-4 text-white sticky transition-all ease-out duration-300",children:[icon,(0,jsx_runtime.jsx)("p",{className:"montserrat self-center max-w-screen",children:text})]})})]})};try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},timeout:{defaultValue:null,description:"",name:"timeout",required:!0,type:{name:"number"}},responsive:{defaultValue:{value:"desktop"},description:"",name:"responsive",required:!1,type:{name:"enum",value:[{value:'"desktop"'},{value:'"mobile"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Molecules/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"src/components/Molecules/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}const Toast_stories={title:"Molecules/Toast",component:Toast},Template=args=>(0,jsx_runtime.jsx)(Toast,{...args}),Success=Template.bind({});Success.args={type:"success",text:"Changes saved successfully!",timeout:6e3};const Warning=Template.bind({});Warning.args={type:"warning",text:"Please complete all the fields!",timeout:6e3};const Danger=Template.bind({});Danger.args={type:"danger",text:"Oops... An error was occurred",timeout:6e3};const Mobile=Template.bind({});Mobile.args={type:"success",text:"Changes saved successfully!",timeout:6e3,responsive:"mobile"};const __namedExportsOrder=["Success","Warning","Danger","Mobile"];Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => <Toast {...args} />",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"args => <Toast {...args} />",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"args => <Toast {...args} />",...Danger.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"args => <Toast {...args} />",...Mobile.parameters?.docs?.source}}}}}]);