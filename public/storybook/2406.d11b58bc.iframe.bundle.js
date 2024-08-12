/*! For license information please see 2406.d11b58bc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2406],{"./node_modules/@fluentui/react-select/lib/components/Select/Select.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>Select});var react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2);const FieldContext=react.createContext(void 0);FieldContext.Provider;function useFieldControlProps_unstable(props,options){return function getFieldControlProps(context,props,options){if(!context)return props;props={...props};const{generatedControlId,hintId,labelFor,labelId,required,validationMessageId,validationState}=context;var _props,_id,_props1,_arialabelledby,_,_props2,_ariainvalid,_1,_props5,_size;generatedControlId&&(null!==(_id=(_props=props).id)&&void 0!==_id||(_props.id=generatedControlId));!labelId||(null==options?void 0:options.supportsLabelFor)&&labelFor===props.id||null!==(_=(_props1=props)[_arialabelledby="aria-labelledby"])&&void 0!==_||(_props1[_arialabelledby]=labelId);(validationMessageId||hintId)&&(props["aria-describedby"]=[validationMessageId,hintId,null==props?void 0:props["aria-describedby"]].filter(Boolean).join(" "));"error"===validationState&&(null!==(_1=(_props2=props)[_ariainvalid="aria-invalid"])&&void 0!==_1||(_props2[_ariainvalid]=!0));if(required){var _props3,_required,_props4,_ariarequired,_2;if(null==options?void 0:options.supportsRequired)null!==(_required=(_props3=props).required)&&void 0!==_required||(_props3.required=!0);else null!==(_2=(_props4=props)[_ariarequired="aria-required"])&&void 0!==_2||(_props4[_ariarequired]=!0)}(null==options?void 0:options.supportsSize)&&(null!==(_size=(_props5=props).size)&&void 0!==_size||(_props5.size=context.size));return props}(react.useContext(FieldContext),props,options)}const toObjectMap=(...items)=>{const result={};for(const item of items){const keys=Array.isArray(item)?item:Object.keys(item);for(const key of keys)result[key]=1}return result},baseElementEvents=toObjectMap(["onAuxClick","onAnimationEnd","onAnimationStart","onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onInput","onSubmit","onLoad","onError","onKeyDown","onKeyDownCapture","onKeyPress","onKeyUp","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onClick","onClickCapture","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onMouseUpCapture","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onPointerCancel","onPointerDown","onPointerEnter","onPointerLeave","onPointerMove","onPointerOut","onPointerOver","onPointerUp","onGotPointerCapture","onLostPointerCapture"]),baseElementProperties=toObjectMap(["accessKey","children","className","contentEditable","dir","draggable","hidden","htmlFor","id","lang","ref","role","style","tabIndex","title","translate","spellCheck","name"]),microdataProperties=toObjectMap(["itemID","itemProp","itemRef","itemScope","itemType"]),htmlElementProperties=toObjectMap(baseElementProperties,baseElementEvents,microdataProperties),labelProperties=toObjectMap(htmlElementProperties,["form"]),audioProperties=toObjectMap(htmlElementProperties,["height","loop","muted","preload","src","width"]),videoProperties=toObjectMap(audioProperties,["poster"]),olProperties=toObjectMap(htmlElementProperties,["start"]),liProperties=toObjectMap(htmlElementProperties,["value"]),anchorProperties=toObjectMap(htmlElementProperties,["download","href","hrefLang","media","rel","target","type"]),timeProperties=toObjectMap(htmlElementProperties,["dateTime"]),buttonProperties=toObjectMap(htmlElementProperties,["autoFocus","disabled","form","formAction","formEncType","formMethod","formNoValidate","formTarget","type","value"]);const nativeElementMap={label:labelProperties,audio:audioProperties,video:videoProperties,ol:olProperties,li:liProperties,a:anchorProperties,button:buttonProperties,input:toObjectMap(buttonProperties,["accept","alt","autoCapitalize","autoComplete","checked","dirname","form","height","inputMode","list","max","maxLength","min","multiple","pattern","placeholder","readOnly","required","src","step","size","type","value","width"]),textarea:toObjectMap(buttonProperties,["autoCapitalize","cols","dirname","form","maxLength","placeholder","readOnly","required","rows","wrap"]),select:toObjectMap(buttonProperties,["form","multiple","required"]),option:toObjectMap(htmlElementProperties,["selected","value"]),table:toObjectMap(htmlElementProperties,["cellPadding","cellSpacing"]),tr:htmlElementProperties,th:toObjectMap(htmlElementProperties,["colSpan","rowSpan","scope"]),td:toObjectMap(htmlElementProperties,["colSpan","headers","rowSpan","scope"]),colGroup:toObjectMap(htmlElementProperties,["span"]),col:toObjectMap(htmlElementProperties,["span"]),fieldset:toObjectMap(htmlElementProperties,["disabled","form"]),form:toObjectMap(htmlElementProperties,["acceptCharset","action","encType","encType","method","noValidate","target"]),iframe:toObjectMap(htmlElementProperties,["allow","allowFullScreen","allowPaymentRequest","allowTransparency","csp","height","importance","referrerPolicy","sandbox","src","srcDoc","width"]),img:toObjectMap(htmlElementProperties,["alt","crossOrigin","height","src","srcSet","useMap","width"]),time:timeProperties,dialog:toObjectMap(htmlElementProperties,["open","onCancel","onClose"])};function getNativeElementProps(tagName,props,excludedPropNames){const allowedPropNames=tagName&&nativeElementMap[tagName]||htmlElementProperties;return allowedPropNames.as=1,function getNativeProps(props,allowedPropNames,excludedPropNames){const isArray=Array.isArray(allowedPropNames),result={},keys=Object.keys(props);for(const key of keys)!(!isArray&&allowedPropNames[key]||isArray&&allowedPropNames.indexOf(key)>=0||0===key.indexOf("data-")||0===key.indexOf("aria-"))||excludedPropNames&&-1!==(null==excludedPropNames?void 0:excludedPropNames.indexOf(key))||(result[key]=props[key]);return result}(props,allowedPropNames,excludedPropNames)}const SLOT_RENDER_FUNCTION_SYMBOL=Symbol.for("fui.slotRenderFunction"),SLOT_ELEMENT_TYPE_SYMBOL=Symbol.for("fui.slotElementType");function always(value,options){const{defaultProps,elementType}=options,props=function resolveShorthand(value){if("string"==typeof value||"number"==typeof value||Array.isArray(value)||react.isValidElement(value))return{children:value};0;return value}(value),propsWithMetadata={...defaultProps,...props,[SLOT_ELEMENT_TYPE_SYMBOL]:elementType};return props&&"function"==typeof props.children&&(propsWithMetadata[SLOT_RENDER_FUNCTION_SYMBOL]=props.children,propsWithMetadata.children=null==defaultProps?void 0:defaultProps.children),propsWithMetadata}function optional(value,options){if(null!==value&&(void 0!==value||options.renderByDefault))return always(value,options)}const useIsomorphicLayoutEffect=function canUseDOM_canUseDOM(){return"undefined"!=typeof window&&!(!window.document||!window.document.createElement)}()?react.useLayoutEffect:react.useEffect,IconDirectionContext=react.createContext(void 0),IconDirectionContextDefaultValue={},insertionFactory=(IconDirectionContext.Provider,()=>{const insertionCache={};return function insertStyles(renderer,cssRules){void 0===insertionCache[renderer.id]&&(renderer.insertCSSRules(cssRules),insertionCache[renderer.id]=!0)}}),__GLOBAL__="undefined"==typeof window?__webpack_require__.g:window;function getGlobalVar(name,defaultValue){return __GLOBAL__[Symbol.for("@griffel/"+name)]||(__GLOBAL__[Symbol.for("@griffel/"+name)]=defaultValue),__GLOBAL__[Symbol.for("@griffel/"+name)]}const DEFINITION_LOOKUP_TABLE=getGlobalVar("DEFINITION_LOOKUP_TABLE",{}),constants_esm_DATA_BUCKET_ATTR="data-make-styles-bucket",constants_esm_DATA_PRIORITY_ATTR="data-priority",SEQUENCE_HASH_LENGTH=7,SEQUENCE_PREFIX="___",SEQUENCE_SIZE=SEQUENCE_PREFIX.length+SEQUENCE_HASH_LENGTH;function murmur2(str){for(var k,h=0,i=0,len=str.length;len>=4;++i,len-=4)k=1540483477*(65535&(k=255&str.charCodeAt(i)|(255&str.charCodeAt(++i))<<8|(255&str.charCodeAt(++i))<<16|(255&str.charCodeAt(++i))<<24))+(59797*(k>>>16)<<16),h=1540483477*(65535&(k^=k>>>24))+(59797*(k>>>16)<<16)^1540483477*(65535&h)+(59797*(h>>>16)<<16);switch(len){case 3:h^=(255&str.charCodeAt(i+2))<<16;case 2:h^=(255&str.charCodeAt(i+1))<<8;case 1:h=1540483477*(65535&(h^=255&str.charCodeAt(i)))+(59797*(h>>>16)<<16)}return(((h=1540483477*(65535&(h^=h>>>13))+(59797*(h>>>16)<<16))^h>>>15)>>>0).toString(36)}function padEndHash(value){const hashLength=value.length;if(hashLength===SEQUENCE_HASH_LENGTH)return value;for(let i=hashLength;i<SEQUENCE_HASH_LENGTH;i++)value+="0";return value}function hashSequence(classes,dir,sequenceIds=[]){return SEQUENCE_PREFIX+padEndHash(murmur2(classes+dir))}function reduceToClassName(classMap,dir){let classString="",hashString="";for(const propertyHash in classMap){const classNameMapping=classMap[propertyHash];if(0===classNameMapping){hashString+=propertyHash+" ";continue}const hasRTLClassName=Array.isArray(classNameMapping),className="rtl"===dir?(hasRTLClassName?classNameMapping[1]:classNameMapping)+" ":(hasRTLClassName?classNameMapping[0]:classNameMapping)+" ";classString+=className,hashString+=className}return[classString.slice(0,-1),hashString.slice(0,-1)]}function reduceToClassNameForSlots(classesMapBySlot,dir){const classNamesForSlots={};for(const slotName in classesMapBySlot){const[slotClasses,slotClassesHash]=reduceToClassName(classesMapBySlot[slotName],dir);if(""===slotClassesHash){classNamesForSlots[slotName]="";continue}const sequenceHash=hashSequence(slotClassesHash,dir),resultSlotClasses=sequenceHash+(""===slotClasses?"":" "+slotClasses);DEFINITION_LOOKUP_TABLE[sequenceHash]=[classesMapBySlot[slotName],dir],classNamesForSlots[slotName]=resultSlotClasses}return classNamesForSlots}const useInsertionEffect=react_namespaceObject.useInsertionEffect?react_namespaceObject.useInsertionEffect:void 0,insertionFactory_esm_insertionFactory=()=>{const insertionCache={};return function insert(renderer,cssRules){useInsertionEffect&&function canUseDOM_esm_canUseDOM(){return"undefined"!=typeof window&&!(!window.document||!window.document.createElement)}()?useInsertionEffect((()=>{renderer.insertCSSRules(cssRules)}),[renderer,cssRules]):void 0===insertionCache[renderer.id]&&(renderer.insertCSSRules(cssRules),insertionCache[renderer.id]=!0)}};function createIsomorphicStyleSheet(styleElement,bucketName,priority,elementAttributes){const __cssRulesForSSR=[];if(elementAttributes[constants_esm_DATA_BUCKET_ATTR]=bucketName,elementAttributes[constants_esm_DATA_PRIORITY_ATTR]=String(priority),styleElement)for(const attrName in elementAttributes)styleElement.setAttribute(attrName,elementAttributes[attrName]);return{elementAttributes,insertRule:function insertRule(rule){return(null==styleElement?void 0:styleElement.sheet)?styleElement.sheet.insertRule(rule,styleElement.sheet.cssRules.length):__cssRulesForSSR.push(rule)},element:styleElement,bucketName,cssRules:()=>(null==styleElement?void 0:styleElement.sheet)?Array.from(styleElement.sheet.cssRules).map((cssRule=>cssRule.cssText)):__cssRulesForSSR}}const styleBucketOrderingMap=["r","d","l","v","w","f","i","h","a","s","k","t","m","c"].reduce(((acc,cur,j)=>(acc[cur]=j,acc)),{});function getStyleSheetKey(bucketName,media,priority){return("m"===bucketName?bucketName+media:bucketName)+priority}function getStyleSheetForBucket(bucketName,targetDocument,insertionPoint,renderer,metadata={}){var _a,_b;const isMediaBucket="m"===bucketName,media=null!==(_a=metadata.m)&&void 0!==_a?_a:"0",priority=null!==(_b=metadata.p)&&void 0!==_b?_b:0,stylesheetKey=getStyleSheetKey(bucketName,media,priority);if(!renderer.stylesheets[stylesheetKey]){const tag=targetDocument&&targetDocument.createElement("style"),stylesheet=createIsomorphicStyleSheet(tag,bucketName,priority,Object.assign({},renderer.styleElementAttributes,isMediaBucket&&{media}));renderer.stylesheets[stylesheetKey]=stylesheet,targetDocument&&tag&&targetDocument.head.insertBefore(tag,function findInsertionPoint(targetDocument,insertionPoint,targetBucket,renderer,metadata={}){var _a,_b;const targetOrder=styleBucketOrderingMap[targetBucket],media=null!==(_a=metadata.m)&&void 0!==_a?_a:"",priority=null!==(_b=metadata.p)&&void 0!==_b?_b:0;let comparer=el=>targetOrder-styleBucketOrderingMap[el.getAttribute(constants_esm_DATA_BUCKET_ATTR)],styleElements=targetDocument.head.querySelectorAll(`[${constants_esm_DATA_BUCKET_ATTR}]`);if("m"===targetBucket){const mediaElements=targetDocument.head.querySelectorAll(`[${constants_esm_DATA_BUCKET_ATTR}="${targetBucket}"]`);mediaElements.length&&(styleElements=mediaElements,comparer=el=>renderer.compareMediaQueries(media,el.media))}const comparerWithPriority=el=>function isSameInsertionKey(element,bucketName,metadata){var _a,_b;const targetKey=bucketName+(null!==(_a=metadata.m)&&void 0!==_a?_a:""),elementKey=element.getAttribute(constants_esm_DATA_BUCKET_ATTR)+(null!==(_b=element.media)&&void 0!==_b?_b:"");return targetKey===elementKey}(el,targetBucket,metadata)?priority-Number(el.getAttribute("data-priority")):comparer(el),length=styleElements.length;let index=length-1;for(;index>=0;){const styleElement=styleElements.item(index);if(comparerWithPriority(styleElement)>0)return styleElement.nextSibling;index--}if(length>0)return styleElements.item(0);return insertionPoint?insertionPoint.nextSibling:null}(targetDocument,insertionPoint,bucketName,renderer,metadata))}return renderer.stylesheets[stylesheetKey]}function safeInsertRule(sheet,ruleCSS){try{sheet.insertRule(ruleCSS)}catch(e){0}}let lastIndex=0;const defaultCompareMediaQueries=(a,b)=>a<b?-1:a>b?1:0;function createDOMRenderer(targetDocument=("undefined"==typeof document?void 0:document),options={}){const{classNameHashSalt,unstable_filterCSSRule,insertionPoint,styleElementAttributes,compareMediaQueries=defaultCompareMediaQueries}=options,renderer={classNameHashSalt,insertionCache:{},stylesheets:{},styleElementAttributes:Object.freeze(styleElementAttributes),compareMediaQueries,id:"d"+lastIndex++,insertCSSRules(cssRules){for(const styleBucketName in cssRules){const cssRulesForBucket=cssRules[styleBucketName];for(let i=0,l=cssRulesForBucket.length;i<l;i++){const[ruleCSS,metadata]=(entry=cssRulesForBucket[i],Array.isArray(entry)?entry:[entry]),sheet=getStyleSheetForBucket(styleBucketName,targetDocument,insertionPoint||null,renderer,metadata);renderer.insertionCache[ruleCSS]||(renderer.insertionCache[ruleCSS]=styleBucketName,unstable_filterCSSRule?unstable_filterCSSRule(ruleCSS)&&safeInsertRule(sheet,ruleCSS):safeInsertRule(sheet,ruleCSS))}}var entry}};return renderer}const RendererContext=react.createContext(createDOMRenderer());const TextDirectionContext=react.createContext("ltr");function _styles_esm_styles(classesMapBySlot,cssRules){const getStyles=function __styles(classesMapBySlot,cssRules,factory=insertionFactory){const insertStyles=factory();let ltrClassNamesForSlots=null,rtlClassNamesForSlots=null;return function computeClasses(options){const{dir,renderer}=options,isLTR="ltr"===dir;return isLTR?null===ltrClassNamesForSlots&&(ltrClassNamesForSlots=reduceToClassNameForSlots(classesMapBySlot,dir)):null===rtlClassNamesForSlots&&(rtlClassNamesForSlots=reduceToClassNameForSlots(classesMapBySlot,dir)),insertStyles(renderer,cssRules),isLTR?ltrClassNamesForSlots:rtlClassNamesForSlots}}(classesMapBySlot,cssRules,insertionFactory_esm_insertionFactory);return function useClasses(){const dir=function useTextDirection(){return react.useContext(TextDirectionContext)}(),renderer=function useRenderer(){return react.useContext(RendererContext)}();return getStyles({dir,renderer})}}const mergeClassesCachedResults={};function mergeClasses(){let dir=null,resultClassName="",sequenceMatch="";const sequencesIds=new Array(arguments.length);for(let i=0;i<arguments.length;i++){const className=arguments[i];if("string"==typeof className&&""!==className){const sequenceIndex=className.indexOf(SEQUENCE_PREFIX);if(-1===sequenceIndex)resultClassName+=className+" ";else{const sequenceId=className.substr(sequenceIndex,SEQUENCE_SIZE);sequenceIndex>0&&(resultClassName+=className.slice(0,sequenceIndex)),sequenceMatch+=sequenceId,sequencesIds[i]=sequenceId}0}}if(""===sequenceMatch)return resultClassName.slice(0,-1);const mergeClassesResult=mergeClassesCachedResults[sequenceMatch];if(void 0!==mergeClassesResult)return resultClassName+mergeClassesResult;const sequenceMappings=[];for(let i=0;i<arguments.length;i++){const sequenceId=sequencesIds[i];if(sequenceId){const sequenceMapping=DEFINITION_LOOKUP_TABLE[sequenceId];sequenceMapping&&(sequenceMappings.push(sequenceMapping[0]),dir=sequenceMapping[1])}}const resultClassesMap=Object.assign.apply(Object,[{}].concat(sequenceMappings)),[atomicClasses,classesMapHash]=reduceToClassName(resultClassesMap,dir),newSequenceHash=hashSequence(classesMapHash,dir,sequencesIds),newClassName=newSequenceHash+" "+atomicClasses;return mergeClassesCachedResults[sequenceMatch]=newClassName,DEFINITION_LOOKUP_TABLE[newSequenceHash]=[resultClassesMap,dir],resultClassName+newClassName}const useRootStyles=_styles_esm_styles({root:{mc9l5x:"f1w7gpdv",Bg96gwp:"fez10in",ycbfsm:"fg4l7m0"},rtl:{Bz10aip:"f13rod7r"}},{d:[".f1w7gpdv{display:inline;}",".fez10in{line-height:0;}",".f13rod7r{-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}"],t:["@media (forced-colors: active){.fg4l7m0{forced-color-adjust:auto;}}"]}),useIconState=(props,options)=>{const{title,primaryFill="currentColor",...rest}=props,state={...rest,title:void 0,fill:primaryFill},styles=useRootStyles(),iconContext=react.useContext(IconDirectionContext)?react.useContext(IconDirectionContext):IconDirectionContextDefaultValue;return state.className=mergeClasses(styles.root,(null==options?void 0:options.flipInRtl)&&"rtl"===(null==iconContext?void 0:iconContext.textDirection)&&styles.rtl,state.className),title&&(state["aria-label"]=title),state["aria-label"]||state["aria-labelledby"]?state.role="img":state["aria-hidden"]=!0,state},createFluentIcon_createFluentIcon=(displayName,width,paths,options)=>{const viewBoxWidth="1em"===width?"20":width,Icon=react.forwardRef(((props,ref)=>{const state={...useIconState(props,{flipInRtl:null==options?void 0:options.flipInRtl}),ref,width,height:width,viewBox:`0 0 ${viewBoxWidth} ${viewBoxWidth}`,xmlns:"http://www.w3.org/2000/svg"};return react.createElement("svg",state,...paths.map((d=>react.createElement("path",{d,fill:state.fill}))))}));return Icon.displayName=displayName,Icon},ChevronDownRegular=createFluentIcon_createFluentIcon("ChevronDownRegular","1em",["M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z"]),OverridesContext=react.createContext(void 0);OverridesContext.Provider;const useSelect_unstable=(props,ref)=>{props=useFieldControlProps_unstable(props,{supportsLabelFor:!0,supportsRequired:!0,supportsSize:!0});const overrides=function useOverrides(){var _React_useContext;return null!==(_React_useContext=react.useContext(OverridesContext))&&void 0!==_React_useContext?_React_useContext:{}}();var _overrides_inputDefaultAppearance;const{defaultValue,value,select,icon,root,appearance=null!==(_overrides_inputDefaultAppearance=overrides.inputDefaultAppearance)&&void 0!==_overrides_inputDefaultAppearance?_overrides_inputDefaultAppearance:"outline",onChange,size="medium"}=props,nativeProps=(({primarySlotTagName,props,excludedPropNames})=>({root:{style:props.style,className:props.className},primary:getNativeElementProps(primarySlotTagName,props,[...excludedPropNames||[],"style","className"])}))({props,primarySlotTagName:"select",excludedPropNames:["appearance","defaultValue","onChange","size","value"]}),state={size,appearance,components:{root:"span",select:"select",icon:"span"},select:always(select,{defaultProps:{defaultValue,value,ref,...nativeProps.primary},elementType:"select"}),icon:optional(icon,{renderByDefault:!0,defaultProps:{children:react.createElement(ChevronDownRegular,null)},elementType:"span"}),root:always(root,{defaultProps:nativeProps.root,elementType:"span"})};return state.select.onChange=(fn=>{const callbackRef=react.useRef((()=>{throw new Error("Cannot call an event handler while rendering")}));return useIsomorphicLayoutEffect((()=>{callbackRef.current=fn}),[fn]),react.useCallback(((...args)=>(0,callbackRef.current)(...args)),[callbackRef])})((event=>{null==onChange||onChange(event,{value:event.target.value})})),state};function isSlot(element){return Boolean(null==element?void 0:element.hasOwnProperty(SLOT_ELEMENT_TYPE_SYMBOL))}__webpack_require__("./node_modules/react-is/index.js");function createJSX(runtime,slotRuntime){return function jsx(type,overrideProps,key,source,self){return isSlot(overrideProps)?slotRuntime(function createCompatSlotComponent(type,props){return{...props,[SLOT_ELEMENT_TYPE_SYMBOL]:type}}(type,overrideProps),null,key,source,self):isSlot(type)?slotRuntime(type,overrideProps,key,source,self):runtime(type,overrideProps,key,source,self)}}function getMetadataFromSlotComponent(type){const{as,[SLOT_ELEMENT_TYPE_SYMBOL]:baseElementType,[SLOT_RENDER_FUNCTION_SYMBOL]:renderFunction,...propsWithoutMetadata}=type,props=propsWithoutMetadata,elementType="string"==typeof baseElementType&&null!=as?as:baseElementType;return"string"!=typeof elementType&&as&&(props.as=as),{elementType,props,renderFunction}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Runtime=__webpack_require__.t(jsx_runtime,2),jsx=createJSX(Runtime.jsx,((type,overrideProps,key)=>{const{elementType,renderFunction,props:slotProps}=getMetadataFromSlotComponent(type),props={...slotProps,...overrideProps};return renderFunction?Runtime.jsx(react.Fragment,{children:renderFunction(elementType,props)},key):Runtime.jsx(elementType,props,key)})),jsxs=createJSX(Runtime.jsxs,((type,overrideProps,key)=>{const{elementType,renderFunction,props:slotProps}=getMetadataFromSlotComponent(type),props={...slotProps,...overrideProps};return renderFunction?Runtime.jsx(react.Fragment,{children:renderFunction(elementType,{...props,children:Runtime.jsxs(react.Fragment,{children:props.children},void 0)})},key):Runtime.jsxs(elementType,props,key)}));const selectClassNames_root="fui-Select",selectClassNames_select="fui-Select__select",selectClassNames_icon="fui-Select__icon",useSelectStyles_styles_useRootStyles=_styles_esm_styles({base:{Bt984gj:"f122n59",B7ck84d:"f1ewtqcl",mc9l5x:"f22iagw",Eh141a:"flvyvdh",Bahqtrf:"fk6fouc",qhf8xq:"f10pi13n",h62rwi:"f7ll8cq",d9w3h3:0,B3778ie:0,B4j8arr:0,Bl18szs:0,Blrzh8d:"fe5s0lv",li1rpt:"f1gw3sf2",Bsft5z2:"f13zj6fq",Dlnsje:"fhwjr99",E3zdtr:"f1mdlcz9",By385i5:"fo72kxq",Eqx8gd:["f1n6gb5g","f15yvnhg"],B1piin3:["f15yvnhg","f1n6gb5g"],b1kco5:"f1yk9hq",Ba2ppi3:"fhwpy7i",F2fol1:"f14ee0xe",lck23g:"f1xhbsuh",df92cz:"fv8e3ye",I188md:"ftb5wc6",umuwi5:"fjw5xc1",Blcqepd:"f1xdyd5c",nplu4u:"fatpbeo",Bioka5o:"fb7uyps",H713fs:"f1cmft4k",B9ooomg:"f1x58t8o"}},{d:[".f122n59{align-items:center;}",".f1ewtqcl{box-sizing:border-box;}",".f22iagw{display:flex;}",".flvyvdh{flex-wrap:nowrap;}",".fk6fouc{font-family:var(--fontFamilyBase);}",".f10pi13n{position:relative;}",".f7ll8cq::after{background-image:linear-gradient(\n        0deg,\n        var(--colorCompoundBrandStroke) 0%,\n        var(--colorCompoundBrandStroke) 50%,\n        transparent 50%,\n        transparent 100%\n      );}",[".fe5s0lv::after{border-radius:0 0 var(--borderRadiusMedium) var(--borderRadiusMedium);}",{p:-1}],".f1gw3sf2::after{box-sizing:border-box;}",'.f13zj6fq::after{content:"";}',".fhwjr99::after{height:var(--borderRadiusMedium);}",".f1mdlcz9::after{position:absolute;}",".fo72kxq::after{bottom:0;}",".f1n6gb5g::after{left:0;}",".f15yvnhg::after{right:0;}",".f1yk9hq::after{transform:scaleX(0);}",".fhwpy7i::after{transition-property:transform;}",".f14ee0xe::after{transition-duration:var(--durationUltraFast);}",".f1xhbsuh::after{transition-delay:var(--curveAccelerateMid);}"],m:[["@media screen and (prefers-reduced-motion: reduce){.fv8e3ye::after{transition-duration:0.01ms;}}",{m:"screen and (prefers-reduced-motion: reduce)"}],["@media screen and (prefers-reduced-motion: reduce){.ftb5wc6::after{transition-delay:0.01ms;}}",{m:"screen and (prefers-reduced-motion: reduce)"}],["@media screen and (prefers-reduced-motion: reduce){.f1cmft4k:focus-within::after{transition-duration:0.01ms;}}",{m:"screen and (prefers-reduced-motion: reduce)"}],["@media screen and (prefers-reduced-motion: reduce){.f1x58t8o:focus-within::after{transition-delay:0.01ms;}}",{m:"screen and (prefers-reduced-motion: reduce)"}]],w:[".fjw5xc1:focus-within::after{transform:scaleX(1);}",".f1xdyd5c:focus-within::after{transition-property:transform;}",".fatpbeo:focus-within::after{transition-duration:var(--durationNormal);}",".fb7uyps:focus-within::after{transition-delay:var(--curveDecelerateMid);}"]}),useSelectStyles=_styles_esm_styles({base:{Bowrso0:"fqrijq1",Bgfg5da:0,B9xav0g:0,oivjwe:0,Bn0qgzm:0,B4g9neb:0,zhjwy3:0,wvpqe5:0,ibv6hh:0,u1mtju:0,h3c5rm:0,vrafjx:0,Bekrc4i:0,i8vvqc:0,g2u3we:0,icvyot:0,B4j52fo:0,irswps:"faev5xe",Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:"ft85np5",E5pizo:"f1couhl3",B7ck84d:"f1ewtqcl",sj55zd:"f19n0e5",Bceei9c:"f1k6fduh",Bh6795r:"fqerorx",B2u0y6b:"f6dzj5z",Byoj8tv:"f1qch9an",z8tnut:"f1g0x7ka",B3aqqti:"fatbyko",Brovlpu:"f1grzc83",Bxa1mx5:"f19shzzi"},disabled:{De3pzq:"f1c21dwh",g2u3we:"f1jj8ep1",h3c5rm:["f15xbau","fy0fskl"],B9xav0g:"f4ikngz",zhjwy3:["fy0fskl","f15xbau"],sj55zd:"f1s2aq7o",Bceei9c:"fdrzuqr",Bjwas2f:"fg455y9",Bn1d65q:["f1rvyvqg","f14g86mu"],Bxeuatn:"f1cwzwz",n51gp8:["f14g86mu","f1rvyvqg"]},disabledUnderline:{g2u3we:"fgig46g",h3c5rm:["f1mxt3zg","fziff3p"],B9xav0g:"f4ikngz",zhjwy3:["fziff3p","f1mxt3zg"]},small:{Bqenvij:"frvgh55",uwmqm3:["f1xile11","fqznh8f"],z189sj:["fiqd4sw","f11fkzut"],Bahqtrf:"fk6fouc",Be2twd7:"fy9rknc",Bhrd7zp:"figsok6",Bg96gwp:"fwrc4pm"},medium:{Bqenvij:"f1d2rq10",uwmqm3:["f1e60jzv","f135dnwl"],z189sj:["f154vowv","flqamny"],Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bhrd7zp:"figsok6",Bg96gwp:"f1i3iumi"},large:{Bqenvij:"fbhnoac",uwmqm3:["fnphzt9","flt1dlf"],z189sj:["f1xi5ia2","f1xi1l47"],Bahqtrf:"fk6fouc",Be2twd7:"fod5ikn",Bhrd7zp:"figsok6",Bg96gwp:"faaz57k"},outline:{De3pzq:"fxugw4r",Bgfg5da:0,B9xav0g:"f1c1zstj",oivjwe:0,Bn0qgzm:0,B4g9neb:0,zhjwy3:0,wvpqe5:0,ibv6hh:0,u1mtju:0,h3c5rm:0,vrafjx:0,Bekrc4i:0,i8vvqc:0,g2u3we:0,icvyot:0,B4j52fo:0,irswps:"fm9niy"},outlineInteractive:{Bgoe8wy:"fvcxoqz",Bwzppfd:["f1ub3y4t","f1m52nbi"],oetu4i:"flmw63s",gg5e9n:["f1m52nbi","f1ub3y4t"],B6oc9vd:"fvs00aa",ak43y8:["f1assf6x","f4ruux4"],wmxk5l:"fqhmt4z",B50zh58:["f4ruux4","f1assf6x"]},underline:{De3pzq:"f1c21dwh",B9xav0g:0,oivjwe:0,Bn0qgzm:0,Bgfg5da:"fd91s9p",Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:"fokr779",C8i20h:"fb77jct"},"filled-lighter":{De3pzq:"fxugw4r"},"filled-darker":{De3pzq:"f16xq7d1"},invalid:{tvckwq:"fs4k3qj",gk2u95:["fcee079","fmyw78r"],hhx65j:"f1fgmyf4",Bxowmz0:["fmyw78r","fcee079"]},invalidUnderline:{hhx65j:"f1fgmyf4"}},{d:[".fqrijq1{-webkit-appearance:none;-moz-appearance:none;appearance:none;}",[".faev5xe{border:1px solid transparent;}",{p:-2}],[".ft85np5{border-radius:var(--borderRadiusMedium);}",{p:-1}],".f1couhl3{box-shadow:none;}",".f1ewtqcl{box-sizing:border-box;}",".f19n0e5{color:var(--colorNeutralForeground1);}",".f1k6fduh{cursor:pointer;}",".fqerorx{flex-grow:1;}",".f6dzj5z{max-width:100%;}",".f1qch9an{padding-bottom:0;}",".f1g0x7ka{padding-top:0;}",".f1c21dwh{background-color:var(--colorTransparentBackground);}",".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}",".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}",".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}",".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}",".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}",".fdrzuqr{cursor:not-allowed;}",".fgig46g{border-top-color:var(--colorTransparentStrokeDisabled);}",".f1mxt3zg{border-right-color:var(--colorTransparentStrokeDisabled);}",".fziff3p{border-left-color:var(--colorTransparentStrokeDisabled);}",".frvgh55{height:24px;}",".f1xile11{padding-left:calc(var(--spacingHorizontalSNudge) + var(--spacingHorizontalXXS));}",".fqznh8f{padding-right:calc(var(--spacingHorizontalSNudge) + var(--spacingHorizontalXXS));}",".fiqd4sw{padding-right:calc(var(--spacingHorizontalSNudge)\n    + 16px\n    + var(--spacingHorizontalXXS)\n    + var(--spacingHorizontalXXS));}",".f11fkzut{padding-left:calc(var(--spacingHorizontalSNudge)\n    + 16px\n    + var(--spacingHorizontalXXS)\n    + var(--spacingHorizontalXXS));}",".fk6fouc{font-family:var(--fontFamilyBase);}",".fy9rknc{font-size:var(--fontSizeBase200);}",".figsok6{font-weight:var(--fontWeightRegular);}",".fwrc4pm{line-height:var(--lineHeightBase200);}",".f1d2rq10{height:32px;}",".f1e60jzv{padding-left:calc(var(--spacingHorizontalMNudge) + var(--spacingHorizontalXXS));}",".f135dnwl{padding-right:calc(var(--spacingHorizontalMNudge) + var(--spacingHorizontalXXS));}",".f154vowv{padding-right:calc(var(--spacingHorizontalMNudge)\n    + 20px\n    + var(--spacingHorizontalXXS)\n    + var(--spacingHorizontalXXS));}",".flqamny{padding-left:calc(var(--spacingHorizontalMNudge)\n    + 20px\n    + var(--spacingHorizontalXXS)\n    + var(--spacingHorizontalXXS));}",".fkhj508{font-size:var(--fontSizeBase300);}",".f1i3iumi{line-height:var(--lineHeightBase300);}",".fbhnoac{height:40px;}",".fnphzt9{padding-left:calc(var(--spacingHorizontalM) + var(--spacingHorizontalSNudge));}",".flt1dlf{padding-right:calc(var(--spacingHorizontalM) + var(--spacingHorizontalSNudge));}",".f1xi5ia2{padding-right:calc(var(--spacingHorizontalM)\n    + 24px\n    + var(--spacingHorizontalSNudge)\n    + var(--spacingHorizontalSNudge));}",".f1xi1l47{padding-left:calc(var(--spacingHorizontalM)\n    + 24px\n    + var(--spacingHorizontalSNudge)\n    + var(--spacingHorizontalSNudge));}",".fod5ikn{font-size:var(--fontSizeBase400);}",".faaz57k{line-height:var(--lineHeightBase400);}",".fxugw4r{background-color:var(--colorNeutralBackground1);}",[".fm9niy{border:1px solid var(--colorNeutralStroke1);}",{p:-2}],".f1c1zstj{border-bottom-color:var(--colorNeutralStrokeAccessible);}",[".fd91s9p{border-bottom:1px solid var(--colorNeutralStrokeAccessible);}",{p:-1}],[".fokr779{border-radius:0;}",{p:-1}],".fb77jct option{background-color:var(--colorNeutralBackground1);}",".f16xq7d1{background-color:var(--colorNeutralBackground3);}",".fs4k3qj:not(:focus-within),.fs4k3qj:hover:not(:focus-within){border-top-color:var(--colorPaletteRedBorder2);}",".fcee079:not(:focus-within),.fcee079:hover:not(:focus-within){border-right-color:var(--colorPaletteRedBorder2);}",".fmyw78r:not(:focus-within),.fmyw78r:hover:not(:focus-within){border-left-color:var(--colorPaletteRedBorder2);}",".f1fgmyf4:not(:focus-within),.f1fgmyf4:hover:not(:focus-within){border-bottom-color:var(--colorPaletteRedBorder2);}"],f:[".fatbyko:focus{outline-width:2px;}",".f1grzc83:focus{outline-style:solid;}",".f19shzzi:focus{outline-color:transparent;}"],m:[["@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}",{m:"(forced-colors: active)"}]],h:[".fvcxoqz:hover{border-top-color:var(--colorNeutralStroke1Hover);}",".f1ub3y4t:hover{border-right-color:var(--colorNeutralStroke1Hover);}",".f1m52nbi:hover{border-left-color:var(--colorNeutralStroke1Hover);}",".flmw63s:hover{border-bottom-color:var(--colorNeutralStrokeAccessible);}"],a:[".fvs00aa:active{border-top-color:var(--colorNeutralStroke1Pressed);}",".f1assf6x:active{border-right-color:var(--colorNeutralStroke1Pressed);}",".f4ruux4:active{border-left-color:var(--colorNeutralStroke1Pressed);}",".fqhmt4z:active{border-bottom-color:var(--colorNeutralStrokeAccessible);}"]}),useIconStyles=_styles_esm_styles({icon:{B7ck84d:"f1ewtqcl",sj55zd:"fxkbij4",mc9l5x:"ftgm304",qhf8xq:"f1euv43f",Bkecrkj:"f1aehjj5",Bo70h7d:"fvc9v3g"},disabled:{sj55zd:"f1s2aq7o",Bbusuzp:"f1dcs8yz"},small:{Be2twd7:"f4ybsrx",Bqenvij:"fd461yt",j35jbq:["f13lnp83","f1i5nn0v"],a9b677:"fjw5fx7"},medium:{Be2twd7:"fe5j1ua",Bqenvij:"fjamq6b",j35jbq:["fnyteob","f1enpzzf"],a9b677:"f64fuq3"},large:{Be2twd7:"f1rt2boy",Bqenvij:"frvgh55",j35jbq:["f8b87gs","fedtrts"],a9b677:"fq4mcun"}},{d:[".f1ewtqcl{box-sizing:border-box;}",".fxkbij4{color:var(--colorNeutralStrokeAccessible);}",".ftgm304{display:block;}",".f1euv43f{position:absolute;}",".f1aehjj5{pointer-events:none;}",".fvc9v3g svg{display:block;}",".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}",".f4ybsrx{font-size:16px;}",".fd461yt{height:16px;}",".f13lnp83{right:var(--spacingHorizontalSNudge);}",".f1i5nn0v{left:var(--spacingHorizontalSNudge);}",".fjw5fx7{width:16px;}",".fe5j1ua{font-size:20px;}",".fjamq6b{height:20px;}",".fnyteob{right:var(--spacingHorizontalMNudge);}",".f1enpzzf{left:var(--spacingHorizontalMNudge);}",".f64fuq3{width:20px;}",".f1rt2boy{font-size:24px;}",".frvgh55{height:24px;}",".f8b87gs{right:var(--spacingHorizontalM);}",".fedtrts{left:var(--spacingHorizontalM);}",".fq4mcun{width:24px;}"],m:[["@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}",{m:"(forced-colors: active)"}]]}),CustomStyleHooksContext=react.createContext(void 0),noop=()=>{},Select=(CustomStyleHooksContext.Provider,react.forwardRef(((props,ref)=>{const state=useSelect_unstable(props,ref);var hook,_React_useContext,_React_useContext_hook;return(state=>{const{size,appearance}=state,disabled=state.select.disabled,invalid="true"==`${state.select["aria-invalid"]}`,iconStyles=useIconStyles(),rootStyles=useSelectStyles_styles_useRootStyles(),selectStyles=useSelectStyles();state.root.className=mergeClasses(selectClassNames_root,rootStyles.base,state.root.className),state.select.className=mergeClasses(selectClassNames_select,selectStyles.base,selectStyles[size],selectStyles[appearance],!disabled&&"outline"===appearance&&selectStyles.outlineInteractive,!disabled&&invalid&&"underline"!==appearance&&selectStyles.invalid,!disabled&&invalid&&"underline"===appearance&&selectStyles.invalidUnderline,disabled&&selectStyles.disabled,disabled&&"underline"===appearance&&selectStyles.disabledUnderline,state.select.className),state.icon&&(state.icon.className=mergeClasses(selectClassNames_icon,iconStyles.icon,disabled&&iconStyles.disabled,iconStyles[size],state.icon.className))})(state),(hook="useSelectStyles_unstable",null!==(_React_useContext_hook=null===(_React_useContext=react.useContext(CustomStyleHooksContext))||void 0===_React_useContext?void 0:_React_useContext[hook])&&void 0!==_React_useContext_hook?_React_useContext_hook:noop)(state),(state=>jsxs(state.root,{children:[jsx(state.select,{children:state.select.children}),jsx(state.icon,{})]}))(state)})));Select.displayName="Select"},"./node_modules/@fluentui/react-utilities/lib/hooks/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Bi:()=>useId});var react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2);const SSRContext_defaultSSRContextValue={current:0},SSRContext=react.createContext(void 0);function useSSRContext(){var _React_useContext;return null!==(_React_useContext=react.useContext(SSRContext))&&void 0!==_React_useContext?_React_useContext:SSRContext_defaultSSRContextValue}const IdPrefixContext=react.createContext(void 0);IdPrefixContext.Provider;function useId(prefix="fui-",providedId){const contextValue=useSSRContext(),idPrefix=function useIdPrefix(){return react.useContext(IdPrefixContext)||""}(),_useId=react_namespaceObject.useId;if(_useId){const generatedId=_useId(),escapedId=react.useMemo((()=>generatedId.replace(/:/g,"")),[generatedId]);return providedId||`${idPrefix}${prefix}${escapedId}`}return react.useMemo((()=>providedId||`${idPrefix}${prefix}${++contextValue.current}`),[idPrefix,prefix,providedId,contextValue])}},"./node_modules/react-is/cjs/react-is.production.min.js":(__unused_webpack_module,exports)=>{var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;if("function"==typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element"),c=x("react.portal"),d=x("react.fragment"),e=x("react.strict_mode"),f=x("react.profiler"),g=x("react.provider"),h=x("react.context"),k=x("react.forward_ref"),l=x("react.suspense"),m=x("react.suspense_list"),n=x("react.memo"),p=x("react.lazy"),q=x("react.block"),r=x("react.server.block"),u=x("react.fundamental"),v=x("react.debug_trace_mode"),w=x("react.legacy_hidden")}function y(a){if("object"==typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);