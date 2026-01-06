import{g as _l,j as x,R as Ce,r as en,m as At,A as Mu}from"./vendor-framer-Dt7LSxLG.js";import{E as Pu,R as Fu,$ as Bu,ah as Uu,i as Gu,F as Hu,ax as $u,A as zu,N as Wu,T as Vu,B as Nl,k as ju,U as qu,a5 as Yu,u as Ku,j as Xu,y as Zu}from"./vendor-icons-D8Fpi2sL.js";const Ls=[{id:1,title:"Phase 1: Core Essentials",subtitle:"Max impact foundations for starting strong",color:"#3b82f6",items:[{id:"troubleshooting",title:"Troubleshooting & Debugging",desc:"Master the art of fixing broken circuits and firmware errors.",icon:Pu,level:"Essential"},{id:"mini-projects",title:"Mini Projects / Quick Builds",desc:"Hands-on simple builds to build muscle memory.",icon:Fu,level:"Beginner"},{id:"protocols",title:"Protocols Explained",desc:"UART, I2C, SPI - simplified for real-world use.",icon:Bu,level:"Core"}]},{id:2,title:"Phase 2: Hardware Mastery",subtitle:"Designing reliable and efficient hardware",color:"#10b981",items:[{id:"common-mistakes",title:"Common Mistakes in IoT",desc:"Learn from others' failures to save your hardware.",icon:Uu,level:"Survival"},{id:"pin-selection",title:"Pin Selection Guide",desc:"Which pins to use and which to avoid for stability.",icon:Gu,level:"Technical"},{id:"power-guide",title:"Power & Battery Guide",desc:"Powering your projects for days, months, or years.",icon:Hu,level:"Design"}]},{id:3,title:"Phase 3: Systems & Logic",subtitle:"Advanced software and component understanding",color:"#8b5cf6",items:[{id:"sensor-principles",title:"Sensor Working Principles",desc:"The physics and logic behind how sensors perceive the world.",icon:$u,level:"Deep Dive"},{id:"board-comparison",title:"Board Comparison Guide",desc:"Choosing the perfect MCU for your specific needs.",icon:zu,level:"Architect"},{id:"code-hub",title:"Code Explanation Hub",desc:"Breaking down complex firmware patterns into plain English.",icon:Wu,level:"Professional"}]},{id:4,title:"Phase 4: Career & Future",subtitle:"Professional readiness and career scaling",color:"#f43f5e",items:[{id:"project-selection",title:"Project Selection Guide",desc:"Which projects actually impress employers.",icon:Vu,level:"Career"},{id:"mini-project-ideas",title:"Mini Project Ideas",desc:"Quick portfolio builders for resumes.",icon:Nl,level:"Portfolio"},{id:"fyp-ideas",title:"Final Year Project Ideas",desc:"Complex, high-impact projects for graduation.",icon:ju,level:"Academic"},{id:"interview-prep",title:"Interview Preparation",desc:"Top technical questions asked in IoT companies.",icon:qu,level:"Success"}]}];function Ms(e){const t=[],n=String(e||"");let r=n.indexOf(","),a=0,i=!1;for(;!i;){r===-1&&(r=n.length,i=!0);const o=n.slice(a,r).trim();(o||!i)&&t.push(o),a=r+1,r=n.indexOf(",",a)}return t}function Qu(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Ju=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ec=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,tc={};function Ps(e,t){return(tc.jsx?ec:Ju).test(e)}const nc=/[ \t\n\f\r]/g;function rc(e){return typeof e=="object"?e.type==="text"?Fs(e.value):!1:Fs(e)}function Fs(e){return e.replace(nc,"")===""}class ut{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ut.prototype.normal={};ut.prototype.property={};ut.prototype.space=void 0;function Ol(e,t){const n={},r={};for(const a of e)Object.assign(n,a.property),Object.assign(r,a.normal);return new ut(n,r,t)}function it(e){return e.toLowerCase()}class ue{constructor(t,n){this.attribute=n,this.property=t}}ue.prototype.attribute="";ue.prototype.booleanish=!1;ue.prototype.boolean=!1;ue.prototype.commaOrSpaceSeparated=!1;ue.prototype.commaSeparated=!1;ue.prototype.defined=!1;ue.prototype.mustUseProperty=!1;ue.prototype.number=!1;ue.prototype.overloadedBoolean=!1;ue.prototype.property="";ue.prototype.spaceSeparated=!1;ue.prototype.space=void 0;let ac=0;const H=xe(),te=xe(),tn=xe(),v=xe(),K=xe(),Ue=xe(),pe=xe();function xe(){return 2**++ac}const nn=Object.freeze(Object.defineProperty({__proto__:null,boolean:H,booleanish:te,commaOrSpaceSeparated:pe,commaSeparated:Ue,number:v,overloadedBoolean:tn,spaceSeparated:K},Symbol.toStringTag,{value:"Module"})),Gt=Object.keys(nn);class bn extends ue{constructor(t,n,r,a){let i=-1;if(super(t,n),Bs(this,"space",a),typeof r=="number")for(;++i<Gt.length;){const o=Gt[i];Bs(this,Gt[i],(r&nn[o])===nn[o])}}}bn.prototype.defined=!0;function Bs(e,t,n){n&&(e[t]=n)}function He(e){const t={},n={};for(const[r,a]of Object.entries(e.properties)){const i=new bn(r,e.transform(e.attributes||{},r),a,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[it(r)]=r,n[it(i.attribute)]=r}return new ut(t,n,e.space)}const xl=He({properties:{ariaActiveDescendant:null,ariaAtomic:te,ariaAutoComplete:null,ariaBusy:te,ariaChecked:te,ariaColCount:v,ariaColIndex:v,ariaColSpan:v,ariaControls:K,ariaCurrent:null,ariaDescribedBy:K,ariaDetails:null,ariaDisabled:te,ariaDropEffect:K,ariaErrorMessage:null,ariaExpanded:te,ariaFlowTo:K,ariaGrabbed:te,ariaHasPopup:null,ariaHidden:te,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:K,ariaLevel:v,ariaLive:null,ariaModal:te,ariaMultiLine:te,ariaMultiSelectable:te,ariaOrientation:null,ariaOwns:K,ariaPlaceholder:null,ariaPosInSet:v,ariaPressed:te,ariaReadOnly:te,ariaRelevant:null,ariaRequired:te,ariaRoleDescription:K,ariaRowCount:v,ariaRowIndex:v,ariaRowSpan:v,ariaSelected:te,ariaSetSize:v,ariaSort:null,ariaValueMax:v,ariaValueMin:v,ariaValueNow:v,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Dl(e,t){return t in e?e[t]:t}function Ll(e,t){return Dl(e,t.toLowerCase())}const ic=He({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Ue,acceptCharset:K,accessKey:K,action:null,allow:null,allowFullScreen:H,allowPaymentRequest:H,allowUserMedia:H,alt:null,as:null,async:H,autoCapitalize:null,autoComplete:K,autoFocus:H,autoPlay:H,blocking:K,capture:null,charSet:null,checked:H,cite:null,className:K,cols:v,colSpan:null,content:null,contentEditable:te,controls:H,controlsList:K,coords:v|Ue,crossOrigin:null,data:null,dateTime:null,decoding:null,default:H,defer:H,dir:null,dirName:null,disabled:H,download:tn,draggable:te,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:H,formTarget:null,headers:K,height:v,hidden:tn,high:v,href:null,hrefLang:null,htmlFor:K,httpEquiv:K,id:null,imageSizes:null,imageSrcSet:null,inert:H,inputMode:null,integrity:null,is:null,isMap:H,itemId:null,itemProp:K,itemRef:K,itemScope:H,itemType:K,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:H,low:v,manifest:null,max:null,maxLength:v,media:null,method:null,min:null,minLength:v,multiple:H,muted:H,name:null,nonce:null,noModule:H,noValidate:H,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:H,optimum:v,pattern:null,ping:K,placeholder:null,playsInline:H,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:H,referrerPolicy:null,rel:K,required:H,reversed:H,rows:v,rowSpan:v,sandbox:K,scope:null,scoped:H,seamless:H,selected:H,shadowRootClonable:H,shadowRootDelegatesFocus:H,shadowRootMode:null,shape:null,size:v,sizes:null,slot:null,span:v,spellCheck:te,src:null,srcDoc:null,srcLang:null,srcSet:null,start:v,step:null,style:null,tabIndex:v,target:null,title:null,translate:null,type:null,typeMustMatch:H,useMap:null,value:te,width:v,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:K,axis:null,background:null,bgColor:null,border:v,borderColor:null,bottomMargin:v,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:H,declare:H,event:null,face:null,frame:null,frameBorder:null,hSpace:v,leftMargin:v,link:null,longDesc:null,lowSrc:null,marginHeight:v,marginWidth:v,noResize:H,noHref:H,noShade:H,noWrap:H,object:null,profile:null,prompt:null,rev:null,rightMargin:v,rules:null,scheme:null,scrolling:te,standby:null,summary:null,text:null,topMargin:v,valueType:null,version:null,vAlign:null,vLink:null,vSpace:v,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:H,disableRemotePlayback:H,prefix:null,property:null,results:v,security:null,unselectable:null},space:"html",transform:Ll}),oc=He({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:pe,accentHeight:v,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:v,amplitude:v,arabicForm:null,ascent:v,attributeName:null,attributeType:null,azimuth:v,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:v,by:null,calcMode:null,capHeight:v,className:K,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:v,diffuseConstant:v,direction:null,display:null,dur:null,divisor:v,dominantBaseline:null,download:H,dx:null,dy:null,edgeMode:null,editable:null,elevation:v,enableBackground:null,end:null,event:null,exponent:v,externalResourcesRequired:null,fill:null,fillOpacity:v,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Ue,g2:Ue,glyphName:Ue,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:v,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:v,horizOriginX:v,horizOriginY:v,id:null,ideographic:v,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:v,k:v,k1:v,k2:v,k3:v,k4:v,kernelMatrix:pe,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:v,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:v,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:v,overlineThickness:v,paintOrder:null,panose1:null,path:null,pathLength:v,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:K,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:v,pointsAtY:v,pointsAtZ:v,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:pe,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:pe,rev:pe,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:pe,requiredFeatures:pe,requiredFonts:pe,requiredFormats:pe,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:v,specularExponent:v,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:v,strikethroughThickness:v,string:null,stroke:null,strokeDashArray:pe,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:v,strokeOpacity:v,strokeWidth:null,style:null,surfaceScale:v,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:pe,tabIndex:v,tableValues:null,target:null,targetX:v,targetY:v,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:pe,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:v,underlineThickness:v,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:v,values:null,vAlphabetic:v,vMathematical:v,vectorEffect:null,vHanging:v,vIdeographic:v,version:null,vertAdvY:v,vertOriginX:v,vertOriginY:v,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:v,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Dl}),Ml=He({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Pl=He({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Ll}),Fl=He({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),sc={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},lc=/[A-Z]/g,Us=/-[a-z]/g,uc=/^data[-\w.:]+$/i;function Bl(e,t){const n=it(t);let r=t,a=ue;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&uc.test(t)){if(t.charAt(4)==="-"){const i=t.slice(5).replace(Us,dc);r="data"+i.charAt(0).toUpperCase()+i.slice(1)}else{const i=t.slice(4);if(!Us.test(i)){let o=i.replace(lc,cc);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}a=bn}return new a(r,t)}function cc(e){return"-"+e.toLowerCase()}function dc(e){return e.charAt(1).toUpperCase()}const Ul=Ol([xl,ic,Ml,Pl,Fl],"html"),Rt=Ol([xl,oc,Ml,Pl,Fl],"svg");function Gs(e){const t=String(e||"").trim();return t?t.split(/[ \t\n\r\f]+/g):[]}function pc(e){return e.join(" ").trim()}var Pe={},Ht,Hs;function gc(){if(Hs)return Ht;Hs=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,n=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a=/^:\s*/,i=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,o=/^[;\s]*/,s=/^\s+|\s+$/g,u=`
`,l="/",c="*",d="",m="comment",p="declaration";function h(S,y){if(typeof S!="string")throw new TypeError("First argument must be a string");if(!S)return[];y=y||{};var I=1,T=1;function k(L){var R=L.match(t);R&&(I+=R.length);var $=L.lastIndexOf(u);T=~$?L.length-$:T+L.length}function O(){var L={line:I,column:T};return function(R){return R.position=new A(L),B(),R}}function A(L){this.start=L,this.end={line:I,column:T},this.source=y.source}A.prototype.content=S;function M(L){var R=new Error(y.source+":"+I+":"+T+": "+L);if(R.reason=L,R.filename=y.source,R.line=I,R.column=T,R.source=S,!y.silent)throw R}function P(L){var R=L.exec(S);if(R){var $=R[0];return k($),S=S.slice($.length),R}}function B(){P(n)}function F(L){var R;for(L=L||[];R=C();)R!==!1&&L.push(R);return L}function C(){var L=O();if(!(l!=S.charAt(0)||c!=S.charAt(1))){for(var R=2;d!=S.charAt(R)&&(c!=S.charAt(R)||l!=S.charAt(R+1));)++R;if(R+=2,d===S.charAt(R-1))return M("End of comment missing");var $=S.slice(2,R-2);return T+=2,k($),S=S.slice(R),T+=2,L({type:m,comment:$})}}function _(){var L=O(),R=P(r);if(R){if(C(),!P(a))return M("property missing ':'");var $=P(i),z=L({type:p,property:E(R[0].replace(e,d)),value:$?E($[0].replace(e,d)):d});return P(o),z}}function D(){var L=[];F(L);for(var R;R=_();)R!==!1&&(L.push(R),F(L));return L}return B(),D()}function E(S){return S?S.replace(s,d):d}return Ht=h,Ht}var $s;function mc(){if($s)return Pe;$s=1;var e=Pe&&Pe.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Pe,"__esModule",{value:!0}),Pe.default=n;const t=e(gc());function n(r,a){let i=null;if(!r||typeof r!="string")return i;const o=(0,t.default)(r),s=typeof a=="function";return o.forEach(u=>{if(u.type!=="declaration")return;const{property:l,value:c}=u;s?a(l,c,u):c&&(i=i||{},i[l]=c)}),i}return Pe}var Ze={},zs;function fc(){if(zs)return Ze;zs=1,Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,n=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,i=function(l){return!l||n.test(l)||e.test(l)},o=function(l,c){return c.toUpperCase()},s=function(l,c){return"".concat(c,"-")},u=function(l,c){return c===void 0&&(c={}),i(l)?l:(l=l.toLowerCase(),c.reactCompat?l=l.replace(a,s):l=l.replace(r,s),l.replace(t,o))};return Ze.camelCase=u,Ze}var Qe,Ws;function bc(){if(Ws)return Qe;Ws=1;var e=Qe&&Qe.__importDefault||function(a){return a&&a.__esModule?a:{default:a}},t=e(mc()),n=fc();function r(a,i){var o={};return!a||typeof a!="string"||(0,t.default)(a,function(s,u){s&&u&&(o[(0,n.camelCase)(s,i)]=u)}),o}return r.default=r,Qe=r,Qe}var hc=bc();const yc=_l(hc),Gl=Hl("end"),hn=Hl("start");function Hl(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Sc(e){const t=hn(e),n=Gl(e);if(t&&n)return{start:t,end:n}}function tt(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Vs(e.position):"start"in e||"end"in e?Vs(e):"line"in e||"column"in e?rn(e):""}function rn(e){return js(e&&e.line)+":"+js(e&&e.column)}function Vs(e){return rn(e&&e.start)+"-"+rn(e&&e.end)}function js(e){return e&&typeof e=="number"?e:1}class ae extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let a="",i={},o=!1;if(n&&("line"in n&&"column"in n?i={place:n}:"start"in n&&"end"in n?i={place:n}:"type"in n?i={ancestors:[n],place:n.position}:i={...n}),typeof t=="string"?a=t:!i.cause&&t&&(o=!0,a=t.message,i.cause=t),!i.ruleId&&!i.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?i.ruleId=r:(i.source=r.slice(0,u),i.ruleId=r.slice(u+1))}if(!i.place&&i.ancestors&&i.ancestors){const u=i.ancestors[i.ancestors.length-1];u&&(i.place=u.position)}const s=i.place&&"start"in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=a,this.line=s?s.line:void 0,this.name=tt(i.place)||"1:1",this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=o&&i.cause&&typeof i.cause.stack=="string"?i.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ae.prototype.file="";ae.prototype.name="";ae.prototype.reason="";ae.prototype.message="";ae.prototype.stack="";ae.prototype.column=void 0;ae.prototype.line=void 0;ae.prototype.ancestors=void 0;ae.prototype.cause=void 0;ae.prototype.fatal=void 0;ae.prototype.place=void 0;ae.prototype.ruleId=void 0;ae.prototype.source=void 0;const yn={}.hasOwnProperty,Ec=new Map,Ac=/[A-Z]/g,Tc=new Set(["table","tbody","thead","tfoot","tr"]),wc=new Set(["td","th"]),$l="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Ic(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=xc(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Oc(n,t.jsx,t.jsxs)}const a={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Rt:Ul,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},i=zl(a,e,void 0);return i&&typeof i!="string"?i:a.create(e,a.Fragment,{children:i||void 0},void 0)}function zl(e,t,n){if(t.type==="element")return vc(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return kc(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Cc(e,t,n);if(t.type==="mdxjsEsm")return Rc(e,t);if(t.type==="root")return _c(e,t,n);if(t.type==="text")return Nc(e,t)}function vc(e,t,n){const r=e.schema;let a=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(a=Rt,e.schema=a),e.ancestors.push(t);const i=Vl(e,t.tagName,!1),o=Dc(e,t);let s=En(e,t);return Tc.has(t.tagName)&&(s=s.filter(function(u){return typeof u=="string"?!rc(u):!0})),Wl(e,o,i,t),Sn(o,s),e.ancestors.pop(),e.schema=r,e.create(t,i,o,n)}function kc(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}ot(e,t.position)}function Rc(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ot(e,t.position)}function Cc(e,t,n){const r=e.schema;let a=r;t.name==="svg"&&r.space==="html"&&(a=Rt,e.schema=a),e.ancestors.push(t);const i=t.name===null?e.Fragment:Vl(e,t.name,!0),o=Lc(e,t),s=En(e,t);return Wl(e,o,i,t),Sn(o,s),e.ancestors.pop(),e.schema=r,e.create(t,i,o,n)}function _c(e,t,n){const r={};return Sn(r,En(e,t)),e.create(t,e.Fragment,r,n)}function Nc(e,t){return t.value}function Wl(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Sn(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Oc(e,t,n){return r;function r(a,i,o,s){const l=Array.isArray(o.children)?n:t;return s?l(i,o,s):l(i,o)}}function xc(e,t){return n;function n(r,a,i,o){const s=Array.isArray(i.children),u=hn(r);return t(a,i,o,s,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function Dc(e,t){const n={};let r,a;for(a in t.properties)if(a!=="children"&&yn.call(t.properties,a)){const i=Mc(e,a,t.properties[a]);if(i){const[o,s]=i;e.tableCellAlignToStyle&&o==="align"&&typeof s=="string"&&wc.has(t.tagName)?r=s:n[o]=s}}if(r){const i=n.style||(n.style={});i[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Lc(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const i=r.data.estree.body[0];i.type;const o=i.expression;o.type;const s=o.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else ot(e,t.position);else{const a=r.name;let i;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,i=e.evaluater.evaluateExpression(s.expression)}else ot(e,t.position);else i=r.value===null?!0:r.value;n[a]=i}return n}function En(e,t){const n=[];let r=-1;const a=e.passKeys?new Map:Ec;for(;++r<t.children.length;){const i=t.children[r];let o;if(e.passKeys){const u=i.type==="element"?i.tagName:i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement"?i.name:void 0;if(u){const l=a.get(u)||0;o=u+"-"+l,a.set(u,l+1)}}const s=zl(e,i,o);s!==void 0&&n.push(s)}return n}function Mc(e,t,n){const r=Bl(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Qu(n):pc(n)),r.property==="style"){let a=typeof n=="object"?n:Pc(e,String(n));return e.stylePropertyNameCase==="css"&&(a=Fc(a)),["style",a]}return[e.elementAttributeNameCase==="react"&&r.space?sc[r.property]||r.property:r.attribute,n]}}function Pc(e,t){try{return yc(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,a=new ae("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw a.file=e.filePath||void 0,a.url=$l+"#cannot-parse-style-attribute",a}}function Vl(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const a=t.split(".");let i=-1,o;for(;++i<a.length;){const s=Ps(a[i])?{type:"Identifier",name:a[i]}:{type:"Literal",value:a[i]};o=o?{type:"MemberExpression",object:o,property:s,computed:!!(i&&s.type==="Literal"),optional:!1}:s}r=o}else r=Ps(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const a=r.value;return yn.call(e.components,a)?e.components[a]:a}if(e.evaluater)return e.evaluater.evaluateExpression(r);ot(e)}function ot(e,t){const n=new ae("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=$l+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Fc(e){const t={};let n;for(n in e)yn.call(e,n)&&(t[Bc(n)]=e[n]);return t}function Bc(e){let t=e.replace(Ac,Uc);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Uc(e){return"-"+e.toLowerCase()}const $t={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Gc={};function Hc(e,t){const n=Gc,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,a=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return jl(e,r,a)}function jl(e,t,n){if($c(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return qs(e.children,t,n)}return Array.isArray(e)?qs(e,t,n):""}function qs(e,t,n){const r=[];let a=-1;for(;++a<e.length;)r[a]=jl(e[a],t,n);return r.join("")}function $c(e){return!!(e&&typeof e=="object")}const Ys=document.createElement("i");function st(e){const t="&"+e+";";Ys.innerHTML=t;const n=Ys.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Ee(e,t,n,r){const a=e.length;let i=0,o;if(t<0?t=-t>a?0:a+t:t=t>a?a:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);i<r.length;)o=r.slice(i,i+1e4),o.unshift(t,0),e.splice(...o),i+=1e4,t+=1e4}function fe(e,t){return e.length>0?(Ee(e,e.length,0,t),e):t}const Ks={}.hasOwnProperty;function zc(e){const t={};let n=-1;for(;++n<e.length;)Wc(t,e[n]);return t}function Wc(e,t){let n;for(n in t){const a=(Ks.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n];let o;if(i)for(o in i){Ks.call(a,o)||(a[o]=[]);const s=i[o];Vc(a[o],Array.isArray(s)?s:s?[s]:[])}}}function Vc(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Ee(e,0,0,r)}function ql(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Ge(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Se=Ne(/[A-Za-z]/),ge=Ne(/[\dA-Za-z]/),jc=Ne(/[#-'*+\--9=?A-Z^-~]/);function an(e){return e!==null&&(e<32||e===127)}const on=Ne(/\d/),qc=Ne(/[\dA-Fa-f]/),Yc=Ne(/[!-/:-@[-`{-~]/);function U(e){return e!==null&&e<-2}function le(e){return e!==null&&(e<0||e===32)}function j(e){return e===-2||e===-1||e===32}const Kc=Ne(new RegExp("\\p{P}|\\p{S}","u")),Xc=Ne(/\s/);function Ne(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function $e(e){const t=[];let n=-1,r=0,a=0;for(;++n<e.length;){const i=e.charCodeAt(n);let o="";if(i===37&&ge(e.charCodeAt(n+1))&&ge(e.charCodeAt(n+2)))a=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(o=String.fromCharCode(i));else if(i>55295&&i<57344){const s=e.charCodeAt(n+1);i<56320&&s>56319&&s<57344?(o=String.fromCharCode(i,s),a=1):o="�"}else o=String.fromCharCode(i);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+a+1,o=""),a&&(n+=a,a=0)}return t.join("")+e.slice(r)}function X(e,t,n,r){const a=r?r-1:Number.POSITIVE_INFINITY;let i=0;return o;function o(u){return j(u)?(e.enter(n),s(u)):t(u)}function s(u){return j(u)&&i++<a?(e.consume(u),s):(e.exit(n),t(u))}}const Zc={tokenize:Qc};function Qc(e){const t=e.attempt(this.parser.constructs.contentInitial,r,a);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),X(e,t,"linePrefix")}function a(s){return e.enter("paragraph"),i(s)}function i(s){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,o(s)}function o(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return U(s)?(e.consume(s),e.exit("chunkText"),i):(e.consume(s),o)}}const Jc={tokenize:ed},Xs={tokenize:td};function ed(e){const t=this,n=[];let r=0,a,i,o;return s;function s(T){if(r<n.length){const k=n[r];return t.containerState=k[1],e.attempt(k[0].continuation,u,l)(T)}return l(T)}function u(T){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,a&&I();const k=t.events.length;let O=k,A;for(;O--;)if(t.events[O][0]==="exit"&&t.events[O][1].type==="chunkFlow"){A=t.events[O][1].end;break}y(r);let M=k;for(;M<t.events.length;)t.events[M][1].end={...A},M++;return Ee(t.events,O+1,0,t.events.slice(k)),t.events.length=M,l(T)}return s(T)}function l(T){if(r===n.length){if(!a)return m(T);if(a.currentConstruct&&a.currentConstruct.concrete)return h(T);t.interrupt=!!(a.currentConstruct&&!a._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Xs,c,d)(T)}function c(T){return a&&I(),y(r),m(T)}function d(T){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,h(T)}function m(T){return t.containerState={},e.attempt(Xs,p,h)(T)}function p(T){return r++,n.push([t.currentConstruct,t.containerState]),m(T)}function h(T){if(T===null){a&&I(),y(0),e.consume(T);return}return a=a||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:a,contentType:"flow",previous:i}),E(T)}function E(T){if(T===null){S(e.exit("chunkFlow"),!0),y(0),e.consume(T);return}return U(T)?(e.consume(T),S(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(T),E)}function S(T,k){const O=t.sliceStream(T);if(k&&O.push(null),T.previous=i,i&&(i.next=T),i=T,a.defineSkip(T.start),a.write(O),t.parser.lazy[T.start.line]){let A=a.events.length;for(;A--;)if(a.events[A][1].start.offset<o&&(!a.events[A][1].end||a.events[A][1].end.offset>o))return;const M=t.events.length;let P=M,B,F;for(;P--;)if(t.events[P][0]==="exit"&&t.events[P][1].type==="chunkFlow"){if(B){F=t.events[P][1].end;break}B=!0}for(y(r),A=M;A<t.events.length;)t.events[A][1].end={...F},A++;Ee(t.events,P+1,0,t.events.slice(M)),t.events.length=A}}function y(T){let k=n.length;for(;k-- >T;){const O=n[k];t.containerState=O[1],O[0].exit.call(t,e)}n.length=T}function I(){a.write([null]),i=void 0,a=void 0,t.containerState._closeFlow=void 0}}function td(e,t,n){return X(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Zs(e){if(e===null||le(e)||Xc(e))return 1;if(Kc(e))return 2}function An(e,t,n){const r=[];let a=-1;for(;++a<e.length;){const i=e[a].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}const sn={name:"attention",resolveAll:nd,tokenize:rd};function nd(e,t){let n=-1,r,a,i,o,s,u,l,c;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d={...e[r][1].end},m={...e[n][1].start};Qs(d,-u),Qs(m,u),o={type:u>1?"strongSequence":"emphasisSequence",start:d,end:{...e[r][1].end}},s={type:u>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:m},i={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},a={type:u>1?"strong":"emphasis",start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=fe(l,[["enter",e[r][1],t],["exit",e[r][1],t]])),l=fe(l,[["enter",a,t],["enter",o,t],["exit",o,t],["enter",i,t]]),l=fe(l,An(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=fe(l,[["exit",i,t],["enter",s,t],["exit",s,t],["exit",a,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,l=fe(l,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,Ee(e,r-1,n-r+3,l),n=r+l.length-c-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function rd(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,a=Zs(r);let i;return o;function o(u){return i=u,e.enter("attentionSequence"),s(u)}function s(u){if(u===i)return e.consume(u),s;const l=e.exit("attentionSequence"),c=Zs(u),d=!c||c===2&&a||n.includes(u),m=!a||a===2&&c||n.includes(r);return l._open=!!(i===42?d:d&&(a||!m)),l._close=!!(i===42?m:m&&(c||!d)),t(u)}}function Qs(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const ad={name:"autolink",tokenize:id};function id(e,t,n){let r=0;return a;function a(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),i}function i(p){return Se(p)?(e.consume(p),o):p===64?n(p):l(p)}function o(p){return p===43||p===45||p===46||ge(p)?(r=1,s(p)):l(p)}function s(p){return p===58?(e.consume(p),r=0,u):(p===43||p===45||p===46||ge(p))&&r++<32?(e.consume(p),s):(r=0,l(p))}function u(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||an(p)?n(p):(e.consume(p),u)}function l(p){return p===64?(e.consume(p),c):jc(p)?(e.consume(p),l):n(p)}function c(p){return ge(p)?d(p):n(p)}function d(p){return p===46?(e.consume(p),r=0,c):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):m(p)}function m(p){if((p===45||ge(p))&&r++<63){const h=p===45?m:d;return e.consume(p),h}return n(p)}}const Ct={partial:!0,tokenize:od};function od(e,t,n){return r;function r(i){return j(i)?X(e,a,"linePrefix")(i):a(i)}function a(i){return i===null||U(i)?t(i):n(i)}}const Yl={continuation:{tokenize:ld},exit:ud,name:"blockQuote",tokenize:sd};function sd(e,t,n){const r=this;return a;function a(o){if(o===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),i}return n(o)}function i(o){return j(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function ld(e,t,n){const r=this;return a;function a(o){return j(o)?X(e,i,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):i(o)}function i(o){return e.attempt(Yl,t,n)(o)}}function ud(e){e.exit("blockQuote")}const Kl={name:"characterEscape",tokenize:cd};function cd(e,t,n){return r;function r(i){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(i),e.exit("escapeMarker"),a}function a(i){return Yc(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(i)}}const Xl={name:"characterReference",tokenize:dd};function dd(e,t,n){const r=this;let a=0,i,o;return s;function s(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),u}function u(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),l):(e.enter("characterReferenceValue"),i=31,o=ge,c(d))}function l(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,o=qc,c):(e.enter("characterReferenceValue"),i=7,o=on,c(d))}function c(d){if(d===59&&a){const m=e.exit("characterReferenceValue");return o===ge&&!st(r.sliceSerialize(m))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(d)&&a++<i?(e.consume(d),c):n(d)}}const Js={partial:!0,tokenize:gd},el={concrete:!0,name:"codeFenced",tokenize:pd};function pd(e,t,n){const r=this,a={partial:!0,tokenize:O};let i=0,o=0,s;return u;function u(A){return l(A)}function l(A){const M=r.events[r.events.length-1];return i=M&&M[1].type==="linePrefix"?M[2].sliceSerialize(M[1],!0).length:0,s=A,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(A)}function c(A){return A===s?(o++,e.consume(A),c):o<3?n(A):(e.exit("codeFencedFenceSequence"),j(A)?X(e,d,"whitespace")(A):d(A))}function d(A){return A===null||U(A)?(e.exit("codeFencedFence"),r.interrupt?t(A):e.check(Js,E,k)(A)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),m(A))}function m(A){return A===null||U(A)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(A)):j(A)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),X(e,p,"whitespace")(A)):A===96&&A===s?n(A):(e.consume(A),m)}function p(A){return A===null||U(A)?d(A):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),h(A))}function h(A){return A===null||U(A)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(A)):A===96&&A===s?n(A):(e.consume(A),h)}function E(A){return e.attempt(a,k,S)(A)}function S(A){return e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),y}function y(A){return i>0&&j(A)?X(e,I,"linePrefix",i+1)(A):I(A)}function I(A){return A===null||U(A)?e.check(Js,E,k)(A):(e.enter("codeFlowValue"),T(A))}function T(A){return A===null||U(A)?(e.exit("codeFlowValue"),I(A)):(e.consume(A),T)}function k(A){return e.exit("codeFenced"),t(A)}function O(A,M,P){let B=0;return F;function F(R){return A.enter("lineEnding"),A.consume(R),A.exit("lineEnding"),C}function C(R){return A.enter("codeFencedFence"),j(R)?X(A,_,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(R):_(R)}function _(R){return R===s?(A.enter("codeFencedFenceSequence"),D(R)):P(R)}function D(R){return R===s?(B++,A.consume(R),D):B>=o?(A.exit("codeFencedFenceSequence"),j(R)?X(A,L,"whitespace")(R):L(R)):P(R)}function L(R){return R===null||U(R)?(A.exit("codeFencedFence"),M(R)):P(R)}}}function gd(e,t,n){const r=this;return a;function a(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i)}function i(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}const zt={name:"codeIndented",tokenize:fd},md={partial:!0,tokenize:bd};function fd(e,t,n){const r=this;return a;function a(l){return e.enter("codeIndented"),X(e,i,"linePrefix",5)(l)}function i(l){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?o(l):n(l)}function o(l){return l===null?u(l):U(l)?e.attempt(md,o,u)(l):(e.enter("codeFlowValue"),s(l))}function s(l){return l===null||U(l)?(e.exit("codeFlowValue"),o(l)):(e.consume(l),s)}function u(l){return e.exit("codeIndented"),t(l)}}function bd(e,t,n){const r=this;return a;function a(o){return r.parser.lazy[r.now().line]?n(o):U(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):X(e,i,"linePrefix",5)(o)}function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(o):U(o)?a(o):n(o)}}const hd={name:"codeText",previous:Sd,resolve:yd,tokenize:Ed};function yd(e){let t=e.length-4,n=3,r,a;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)a===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(a=r):(r===t||e[r][1].type==="lineEnding")&&(e[a][1].type="codeTextData",r!==a+2&&(e[a][1].end=e[r-1][1].end,e.splice(a+2,r-a-2),t-=r-a-2,r=a+2),a=void 0);return e}function Sd(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Ed(e,t,n){let r=0,a,i;return o;function o(d){return e.enter("codeText"),e.enter("codeTextSequence"),s(d)}function s(d){return d===96?(e.consume(d),r++,s):(e.exit("codeTextSequence"),u(d))}function u(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),u):d===96?(i=e.enter("codeTextSequence"),a=0,c(d)):U(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),u):(e.enter("codeTextData"),l(d))}function l(d){return d===null||d===32||d===96||U(d)?(e.exit("codeTextData"),u(d)):(e.consume(d),l)}function c(d){return d===96?(e.consume(d),a++,c):a===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(i.type="codeTextData",l(d))}}class Ad{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const a=n||0;this.setCursor(Math.trunc(t));const i=this.right.splice(this.right.length-a,Number.POSITIVE_INFINITY);return r&&Je(this.left,r),i.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Je(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Je(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Je(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Je(this.left,n.reverse())}}}function Je(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Zl(e){const t={};let n=-1,r,a,i,o,s,u,l;const c=new Ad(e);for(;++n<c.length;){for(;n in t;)n=t[n];if(r=c.get(n),n&&r[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,i=0,i<u.length&&u[i][1].type==="lineEndingBlank"&&(i+=2),i<u.length&&u[i][1].type==="content"))for(;++i<u.length&&u[i][1].type!=="content";)u[i][1].type==="chunkText"&&(u[i][1]._isInFirstContentOfListItem=!0,i++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Td(c,n)),n=t[n],l=!0);else if(r[1]._container){for(i=n,a=void 0;i--;)if(o=c.get(i),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(a&&(c.get(a)[1].type="lineEndingBlank"),o[1].type="lineEnding",a=i);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;a&&(r[1].end={...c.get(a)[1].start},s=c.slice(a,n),s.unshift(r),c.splice(a,n-a+1,s))}}return Ee(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!l}function Td(e,t){const n=e.get(t)[1],r=e.get(t)[2];let a=t-1;const i=[];let o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const s=o.events,u=[],l={};let c,d,m=-1,p=n,h=0,E=0;const S=[E];for(;p;){for(;e.get(++a)[1]!==p;);i.push(a),p._tokenizer||(c=r.sliceStream(p),p.next||c.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(c),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++m<s.length;)s[m][0]==="exit"&&s[m-1][0]==="enter"&&s[m][1].type===s[m-1][1].type&&s[m][1].start.line!==s[m][1].end.line&&(E=m+1,S.push(E),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):S.pop(),m=S.length;m--;){const y=s.slice(S[m],S[m+1]),I=i.pop();u.push([I,I+y.length-1]),e.splice(I,2,y)}for(u.reverse(),m=-1;++m<u.length;)l[h+u[m][0]]=h+u[m][1],h+=u[m][1]-u[m][0]-1;return l}const wd={resolve:vd,tokenize:kd},Id={partial:!0,tokenize:Rd};function vd(e){return Zl(e),e}function kd(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),a(s)}function a(s){return s===null?i(s):U(s)?e.check(Id,o,i)(s):(e.consume(s),a)}function i(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function o(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,a}}function Rd(e,t,n){const r=this;return a;function a(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),X(e,i,"linePrefix")}function i(o){if(o===null||U(o))return n(o);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(o):e.interrupt(r.parser.constructs.flow,n,t)(o)}}function Ql(e,t,n,r,a,i,o,s,u){const l=u||Number.POSITIVE_INFINITY;let c=0;return d;function d(y){return y===60?(e.enter(r),e.enter(a),e.enter(i),e.consume(y),e.exit(i),m):y===null||y===32||y===41||an(y)?n(y):(e.enter(r),e.enter(o),e.enter(s),e.enter("chunkString",{contentType:"string"}),E(y))}function m(y){return y===62?(e.enter(i),e.consume(y),e.exit(i),e.exit(a),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),p(y))}function p(y){return y===62?(e.exit("chunkString"),e.exit(s),m(y)):y===null||y===60||U(y)?n(y):(e.consume(y),y===92?h:p)}function h(y){return y===60||y===62||y===92?(e.consume(y),p):p(y)}function E(y){return!c&&(y===null||y===41||le(y))?(e.exit("chunkString"),e.exit(s),e.exit(o),e.exit(r),t(y)):c<l&&y===40?(e.consume(y),c++,E):y===41?(e.consume(y),c--,E):y===null||y===32||y===40||an(y)?n(y):(e.consume(y),y===92?S:E)}function S(y){return y===40||y===41||y===92?(e.consume(y),E):E(y)}}function Jl(e,t,n,r,a,i){const o=this;let s=0,u;return l;function l(p){return e.enter(r),e.enter(a),e.consume(p),e.exit(a),e.enter(i),c}function c(p){return s>999||p===null||p===91||p===93&&!u||p===94&&!s&&"_hiddenFootnoteSupport"in o.parser.constructs?n(p):p===93?(e.exit(i),e.enter(a),e.consume(p),e.exit(a),e.exit(r),t):U(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||U(p)||s++>999?(e.exit("chunkString"),c(p)):(e.consume(p),u||(u=!j(p)),p===92?m:d)}function m(p){return p===91||p===92||p===93?(e.consume(p),s++,d):d(p)}}function eu(e,t,n,r,a,i){let o;return s;function s(m){return m===34||m===39||m===40?(e.enter(r),e.enter(a),e.consume(m),e.exit(a),o=m===40?41:m,u):n(m)}function u(m){return m===o?(e.enter(a),e.consume(m),e.exit(a),e.exit(r),t):(e.enter(i),l(m))}function l(m){return m===o?(e.exit(i),u(o)):m===null?n(m):U(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),X(e,l,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(m))}function c(m){return m===o||m===null||U(m)?(e.exit("chunkString"),l(m)):(e.consume(m),m===92?d:c)}function d(m){return m===o||m===92?(e.consume(m),c):c(m)}}function nt(e,t){let n;return r;function r(a){return U(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n=!0,r):j(a)?X(e,r,n?"linePrefix":"lineSuffix")(a):t(a)}}const Cd={name:"definition",tokenize:Nd},_d={partial:!0,tokenize:Od};function Nd(e,t,n){const r=this;let a;return i;function i(p){return e.enter("definition"),o(p)}function o(p){return Jl.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function s(p){return a=Ge(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),u):n(p)}function u(p){return le(p)?nt(e,l)(p):l(p)}function l(p){return Ql(e,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function c(p){return e.attempt(_d,d,d)(p)}function d(p){return j(p)?X(e,m,"whitespace")(p):m(p)}function m(p){return p===null||U(p)?(e.exit("definition"),r.parser.defined.push(a),t(p)):n(p)}}function Od(e,t,n){return r;function r(s){return le(s)?nt(e,a)(s):n(s)}function a(s){return eu(e,i,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function i(s){return j(s)?X(e,o,"whitespace")(s):o(s)}function o(s){return s===null||U(s)?t(s):n(s)}}const xd={name:"hardBreakEscape",tokenize:Dd};function Dd(e,t,n){return r;function r(i){return e.enter("hardBreakEscape"),e.consume(i),a}function a(i){return U(i)?(e.exit("hardBreakEscape"),t(i)):n(i)}}const Ld={name:"headingAtx",resolve:Md,tokenize:Pd};function Md(e,t){let n=e.length-2,r=3,a,i;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(a={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},i={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Ee(e,r,n-r+1,[["enter",a,t],["enter",i,t],["exit",i,t],["exit",a,t]])),e}function Pd(e,t,n){let r=0;return a;function a(c){return e.enter("atxHeading"),i(c)}function i(c){return e.enter("atxHeadingSequence"),o(c)}function o(c){return c===35&&r++<6?(e.consume(c),o):c===null||le(c)?(e.exit("atxHeadingSequence"),s(c)):n(c)}function s(c){return c===35?(e.enter("atxHeadingSequence"),u(c)):c===null||U(c)?(e.exit("atxHeading"),t(c)):j(c)?X(e,s,"whitespace")(c):(e.enter("atxHeadingText"),l(c))}function u(c){return c===35?(e.consume(c),u):(e.exit("atxHeadingSequence"),s(c))}function l(c){return c===null||c===35||le(c)?(e.exit("atxHeadingText"),s(c)):(e.consume(c),l)}}const Fd=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],tl=["pre","script","style","textarea"],Bd={concrete:!0,name:"htmlFlow",resolveTo:Hd,tokenize:$d},Ud={partial:!0,tokenize:Wd},Gd={partial:!0,tokenize:zd};function Hd(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function $d(e,t,n){const r=this;let a,i,o,s,u;return l;function l(b){return c(b)}function c(b){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(b),d}function d(b){return b===33?(e.consume(b),m):b===47?(e.consume(b),i=!0,E):b===63?(e.consume(b),a=3,r.interrupt?t:f):Se(b)?(e.consume(b),o=String.fromCharCode(b),S):n(b)}function m(b){return b===45?(e.consume(b),a=2,p):b===91?(e.consume(b),a=5,s=0,h):Se(b)?(e.consume(b),a=4,r.interrupt?t:f):n(b)}function p(b){return b===45?(e.consume(b),r.interrupt?t:f):n(b)}function h(b){const ce="CDATA[";return b===ce.charCodeAt(s++)?(e.consume(b),s===ce.length?r.interrupt?t:_:h):n(b)}function E(b){return Se(b)?(e.consume(b),o=String.fromCharCode(b),S):n(b)}function S(b){if(b===null||b===47||b===62||le(b)){const ce=b===47,he=o.toLowerCase();return!ce&&!i&&tl.includes(he)?(a=1,r.interrupt?t(b):_(b)):Fd.includes(o.toLowerCase())?(a=6,ce?(e.consume(b),y):r.interrupt?t(b):_(b)):(a=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(b):i?I(b):T(b))}return b===45||ge(b)?(e.consume(b),o+=String.fromCharCode(b),S):n(b)}function y(b){return b===62?(e.consume(b),r.interrupt?t:_):n(b)}function I(b){return j(b)?(e.consume(b),I):F(b)}function T(b){return b===47?(e.consume(b),F):b===58||b===95||Se(b)?(e.consume(b),k):j(b)?(e.consume(b),T):F(b)}function k(b){return b===45||b===46||b===58||b===95||ge(b)?(e.consume(b),k):O(b)}function O(b){return b===61?(e.consume(b),A):j(b)?(e.consume(b),O):T(b)}function A(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),u=b,M):j(b)?(e.consume(b),A):P(b)}function M(b){return b===u?(e.consume(b),u=null,B):b===null||U(b)?n(b):(e.consume(b),M)}function P(b){return b===null||b===34||b===39||b===47||b===60||b===61||b===62||b===96||le(b)?O(b):(e.consume(b),P)}function B(b){return b===47||b===62||j(b)?T(b):n(b)}function F(b){return b===62?(e.consume(b),C):n(b)}function C(b){return b===null||U(b)?_(b):j(b)?(e.consume(b),C):n(b)}function _(b){return b===45&&a===2?(e.consume(b),$):b===60&&a===1?(e.consume(b),z):b===62&&a===4?(e.consume(b),q):b===63&&a===3?(e.consume(b),f):b===93&&a===5?(e.consume(b),Q):U(b)&&(a===6||a===7)?(e.exit("htmlFlowData"),e.check(Ud,J,D)(b)):b===null||U(b)?(e.exit("htmlFlowData"),D(b)):(e.consume(b),_)}function D(b){return e.check(Gd,L,J)(b)}function L(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),R}function R(b){return b===null||U(b)?D(b):(e.enter("htmlFlowData"),_(b))}function $(b){return b===45?(e.consume(b),f):_(b)}function z(b){return b===47?(e.consume(b),o="",Z):_(b)}function Z(b){if(b===62){const ce=o.toLowerCase();return tl.includes(ce)?(e.consume(b),q):_(b)}return Se(b)&&o.length<8?(e.consume(b),o+=String.fromCharCode(b),Z):_(b)}function Q(b){return b===93?(e.consume(b),f):_(b)}function f(b){return b===62?(e.consume(b),q):b===45&&a===2?(e.consume(b),f):_(b)}function q(b){return b===null||U(b)?(e.exit("htmlFlowData"),J(b)):(e.consume(b),q)}function J(b){return e.exit("htmlFlow"),t(b)}}function zd(e,t,n){const r=this;return a;function a(o){return U(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):n(o)}function i(o){return r.parser.lazy[r.now().line]?n(o):t(o)}}function Wd(e,t,n){return r;function r(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),e.attempt(Ct,t,n)}}const Vd={name:"htmlText",tokenize:jd};function jd(e,t,n){const r=this;let a,i,o;return s;function s(f){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(f),u}function u(f){return f===33?(e.consume(f),l):f===47?(e.consume(f),O):f===63?(e.consume(f),T):Se(f)?(e.consume(f),P):n(f)}function l(f){return f===45?(e.consume(f),c):f===91?(e.consume(f),i=0,h):Se(f)?(e.consume(f),I):n(f)}function c(f){return f===45?(e.consume(f),p):n(f)}function d(f){return f===null?n(f):f===45?(e.consume(f),m):U(f)?(o=d,z(f)):(e.consume(f),d)}function m(f){return f===45?(e.consume(f),p):d(f)}function p(f){return f===62?$(f):f===45?m(f):d(f)}function h(f){const q="CDATA[";return f===q.charCodeAt(i++)?(e.consume(f),i===q.length?E:h):n(f)}function E(f){return f===null?n(f):f===93?(e.consume(f),S):U(f)?(o=E,z(f)):(e.consume(f),E)}function S(f){return f===93?(e.consume(f),y):E(f)}function y(f){return f===62?$(f):f===93?(e.consume(f),y):E(f)}function I(f){return f===null||f===62?$(f):U(f)?(o=I,z(f)):(e.consume(f),I)}function T(f){return f===null?n(f):f===63?(e.consume(f),k):U(f)?(o=T,z(f)):(e.consume(f),T)}function k(f){return f===62?$(f):T(f)}function O(f){return Se(f)?(e.consume(f),A):n(f)}function A(f){return f===45||ge(f)?(e.consume(f),A):M(f)}function M(f){return U(f)?(o=M,z(f)):j(f)?(e.consume(f),M):$(f)}function P(f){return f===45||ge(f)?(e.consume(f),P):f===47||f===62||le(f)?B(f):n(f)}function B(f){return f===47?(e.consume(f),$):f===58||f===95||Se(f)?(e.consume(f),F):U(f)?(o=B,z(f)):j(f)?(e.consume(f),B):$(f)}function F(f){return f===45||f===46||f===58||f===95||ge(f)?(e.consume(f),F):C(f)}function C(f){return f===61?(e.consume(f),_):U(f)?(o=C,z(f)):j(f)?(e.consume(f),C):B(f)}function _(f){return f===null||f===60||f===61||f===62||f===96?n(f):f===34||f===39?(e.consume(f),a=f,D):U(f)?(o=_,z(f)):j(f)?(e.consume(f),_):(e.consume(f),L)}function D(f){return f===a?(e.consume(f),a=void 0,R):f===null?n(f):U(f)?(o=D,z(f)):(e.consume(f),D)}function L(f){return f===null||f===34||f===39||f===60||f===61||f===96?n(f):f===47||f===62||le(f)?B(f):(e.consume(f),L)}function R(f){return f===47||f===62||le(f)?B(f):n(f)}function $(f){return f===62?(e.consume(f),e.exit("htmlTextData"),e.exit("htmlText"),t):n(f)}function z(f){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Z}function Z(f){return j(f)?X(e,Q,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):Q(f)}function Q(f){return e.enter("htmlTextData"),o(f)}}const Tn={name:"labelEnd",resolveAll:Xd,resolveTo:Zd,tokenize:Qd},qd={tokenize:Jd},Yd={tokenize:ep},Kd={tokenize:tp};function Xd(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const a=r.type==="labelImage"?4:2;r.type="data",t+=a}}return e.length!==n.length&&Ee(e,0,e.length,n),e}function Zd(e,t){let n=e.length,r=0,a,i,o,s;for(;n--;)if(a=e[n][1],i){if(a.type==="link"||a.type==="labelLink"&&a._inactive)break;e[n][0]==="enter"&&a.type==="labelLink"&&(a._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(a.type==="labelImage"||a.type==="labelLink")&&!a._balanced&&(i=n,a.type!=="labelLink")){r=2;break}}else a.type==="labelEnd"&&(o=n);const u={type:e[i][1].type==="labelLink"?"link":"image",start:{...e[i][1].start},end:{...e[e.length-1][1].end}},l={type:"label",start:{...e[i][1].start},end:{...e[o][1].end}},c={type:"labelText",start:{...e[i+r+2][1].end},end:{...e[o-2][1].start}};return s=[["enter",u,t],["enter",l,t]],s=fe(s,e.slice(i+1,i+r+3)),s=fe(s,[["enter",c,t]]),s=fe(s,An(t.parser.constructs.insideSpan.null,e.slice(i+r+4,o-3),t)),s=fe(s,[["exit",c,t],e[o-2],e[o-1],["exit",l,t]]),s=fe(s,e.slice(o+1)),s=fe(s,[["exit",u,t]]),Ee(e,i,e.length,s),e}function Qd(e,t,n){const r=this;let a=r.events.length,i,o;for(;a--;)if((r.events[a][1].type==="labelImage"||r.events[a][1].type==="labelLink")&&!r.events[a][1]._balanced){i=r.events[a][1];break}return s;function s(m){return i?i._inactive?d(m):(o=r.parser.defined.includes(Ge(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(m),e.exit("labelMarker"),e.exit("labelEnd"),u):n(m)}function u(m){return m===40?e.attempt(qd,c,o?c:d)(m):m===91?e.attempt(Yd,c,o?l:d)(m):o?c(m):d(m)}function l(m){return e.attempt(Kd,c,d)(m)}function c(m){return t(m)}function d(m){return i._balanced=!0,n(m)}}function Jd(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),a}function a(d){return le(d)?nt(e,i)(d):i(d)}function i(d){return d===41?c(d):Ql(e,o,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function o(d){return le(d)?nt(e,u)(d):c(d)}function s(d){return n(d)}function u(d){return d===34||d===39||d===40?eu(e,l,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):c(d)}function l(d){return le(d)?nt(e,c)(d):c(d)}function c(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function ep(e,t,n){const r=this;return a;function a(s){return Jl.call(r,e,i,o,"reference","referenceMarker","referenceString")(s)}function i(s){return r.parser.defined.includes(Ge(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function o(s){return n(s)}}function tp(e,t,n){return r;function r(i){return e.enter("reference"),e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),a}function a(i){return i===93?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),t):n(i)}}const np={name:"labelStartImage",resolveAll:Tn.resolveAll,tokenize:rp};function rp(e,t,n){const r=this;return a;function a(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),i}function i(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),o):n(s)}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const ap={name:"labelStartLink",resolveAll:Tn.resolveAll,tokenize:ip};function ip(e,t,n){const r=this;return a;function a(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),i}function i(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(o):t(o)}}const Wt={name:"lineEnding",tokenize:op};function op(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),X(e,t,"linePrefix")}}const Tt={name:"thematicBreak",tokenize:sp};function sp(e,t,n){let r=0,a;return i;function i(l){return e.enter("thematicBreak"),o(l)}function o(l){return a=l,s(l)}function s(l){return l===a?(e.enter("thematicBreakSequence"),u(l)):r>=3&&(l===null||U(l))?(e.exit("thematicBreak"),t(l)):n(l)}function u(l){return l===a?(e.consume(l),r++,u):(e.exit("thematicBreakSequence"),j(l)?X(e,s,"whitespace")(l):s(l))}}const se={continuation:{tokenize:dp},exit:gp,name:"list",tokenize:cp},lp={partial:!0,tokenize:mp},up={partial:!0,tokenize:pp};function cp(e,t,n){const r=this,a=r.events[r.events.length-1];let i=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0,o=0;return s;function s(p){const h=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(h==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:on(p)){if(r.containerState.type||(r.containerState.type=h,e.enter(h,{_container:!0})),h==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Tt,n,l)(p):l(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(p)}return n(p)}function u(p){return on(p)&&++o<10?(e.consume(p),u):(!r.interrupt||o<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),l(p)):n(p)}function l(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Ct,r.interrupt?n:c,e.attempt(lp,m,d))}function c(p){return r.containerState.initialBlankLine=!0,i++,m(p)}function d(p){return j(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),m):n(p)}function m(p){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function dp(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ct,a,i);function a(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,X(e,t,"listItemIndent",r.containerState.size+1)(s)}function i(s){return r.containerState.furtherBlankLines||!j(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(up,t,o)(s))}function o(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,X(e,e.attempt(se,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function pp(e,t,n){const r=this;return X(e,a,"listItemIndent",r.containerState.size+1);function a(i){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?t(i):n(i)}}function gp(e){e.exit(this.containerState.type)}function mp(e,t,n){const r=this;return X(e,a,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function a(i){const o=r.events[r.events.length-1];return!j(i)&&o&&o[1].type==="listItemPrefixWhitespace"?t(i):n(i)}}const nl={name:"setextUnderline",resolveTo:fp,tokenize:bp};function fp(e,t){let n=e.length,r,a,i;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(a=n)}else e[n][1].type==="content"&&e.splice(n,1),!i&&e[n][1].type==="definition"&&(i=n);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[a][1].type="setextHeadingText",i?(e.splice(a,0,["enter",o,t]),e.splice(i+1,0,["exit",e[r][1],t]),e[r][1].end={...e[i][1].end}):e[r][1]=o,e.push(["exit",o,t]),e}function bp(e,t,n){const r=this;let a;return i;function i(l){let c=r.events.length,d;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){d=r.events[c][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),a=l,o(l)):n(l)}function o(l){return e.enter("setextHeadingLineSequence"),s(l)}function s(l){return l===a?(e.consume(l),s):(e.exit("setextHeadingLineSequence"),j(l)?X(e,u,"lineSuffix")(l):u(l))}function u(l){return l===null||U(l)?(e.exit("setextHeadingLine"),t(l)):n(l)}}const hp={tokenize:yp};function yp(e){const t=this,n=e.attempt(Ct,r,e.attempt(this.parser.constructs.flowInitial,a,X(e,e.attempt(this.parser.constructs.flow,a,e.attempt(wd,a)),"linePrefix")));return n;function r(i){if(i===null){e.consume(i);return}return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function a(i){if(i===null){e.consume(i);return}return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Sp={resolveAll:nu()},Ep=tu("string"),Ap=tu("text");function tu(e){return{resolveAll:nu(e==="text"?Tp:void 0),tokenize:t};function t(n){const r=this,a=this.parser.constructs[e],i=n.attempt(a,o,s);return o;function o(c){return l(c)?i(c):s(c)}function s(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),u}function u(c){return l(c)?(n.exit("data"),i(c)):(n.consume(c),u)}function l(c){if(c===null)return!0;const d=a[c];let m=-1;if(d)for(;++m<d.length;){const p=d[m];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function nu(e){return t;function t(n,r){let a=-1,i;for(;++a<=n.length;)i===void 0?n[a]&&n[a][1].type==="data"&&(i=a,a++):(!n[a]||n[a][1].type!=="data")&&(a!==i+2&&(n[i][1].end=n[a-1][1].end,n.splice(i+2,a-i-2),a=i+2),i=void 0);return e?e(n,r):n}}function Tp(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],a=t.sliceStream(r);let i=a.length,o=-1,s=0,u;for(;i--;){const l=a[i];if(typeof l=="string"){for(o=l.length;l.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(l===-2)u=!0,s++;else if(l!==-1){i++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const l={type:n===e.length||u||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:i?o:r.start._bufferIndex+o,_index:r.start._index+i,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...l.start},r.start.offset===r.end.offset?Object.assign(r,l):(e.splice(n,0,["enter",l,t],["exit",l,t]),n+=2)}n++}return e}const wp={42:se,43:se,45:se,48:se,49:se,50:se,51:se,52:se,53:se,54:se,55:se,56:se,57:se,62:Yl},Ip={91:Cd},vp={[-2]:zt,[-1]:zt,32:zt},kp={35:Ld,42:Tt,45:[nl,Tt],60:Bd,61:nl,95:Tt,96:el,126:el},Rp={38:Xl,92:Kl},Cp={[-5]:Wt,[-4]:Wt,[-3]:Wt,33:np,38:Xl,42:sn,60:[ad,Vd],91:ap,92:[xd,Kl],93:Tn,95:sn,96:hd},_p={null:[sn,Sp]},Np={null:[42,95]},Op={null:[]},xp=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Np,contentInitial:Ip,disable:Op,document:wp,flow:kp,flowInitial:vp,insideSpan:_p,string:Rp,text:Cp},Symbol.toStringTag,{value:"Module"}));function Dp(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const a={},i=[];let o=[],s=[];const u={attempt:M(O),check:M(A),consume:I,enter:T,exit:k,interrupt:M(A,{interrupt:!0})},l={code:null,containerState:{},defineSkip:E,events:[],now:h,parser:e,previous:null,sliceSerialize:m,sliceStream:p,write:d};let c=t.tokenize.call(l,u);return t.resolveAll&&i.push(t),l;function d(C){return o=fe(o,C),S(),o[o.length-1]!==null?[]:(P(t,0),l.events=An(i,l.events,l),l.events)}function m(C,_){return Mp(p(C),_)}function p(C){return Lp(o,C)}function h(){const{_bufferIndex:C,_index:_,line:D,column:L,offset:R}=r;return{_bufferIndex:C,_index:_,line:D,column:L,offset:R}}function E(C){a[C.line]=C.column,F()}function S(){let C;for(;r._index<o.length;){const _=o[r._index];if(typeof _=="string")for(C=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===C&&r._bufferIndex<_.length;)y(_.charCodeAt(r._bufferIndex));else y(_)}}function y(C){c=c(C)}function I(C){U(C)?(r.line++,r.column=1,r.offset+=C===-3?2:1,F()):C!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=C}function T(C,_){const D=_||{};return D.type=C,D.start=h(),l.events.push(["enter",D,l]),s.push(D),D}function k(C){const _=s.pop();return _.end=h(),l.events.push(["exit",_,l]),_}function O(C,_){P(C,_.from)}function A(C,_){_.restore()}function M(C,_){return D;function D(L,R,$){let z,Z,Q,f;return Array.isArray(L)?J(L):"tokenize"in L?J([L]):q(L);function q(ee){return Ie;function Ie(me){const ve=me!==null&&ee[me],ke=me!==null&&ee.null,Le=[...Array.isArray(ve)?ve:ve?[ve]:[],...Array.isArray(ke)?ke:ke?[ke]:[]];return J(Le)(me)}}function J(ee){return z=ee,Z=0,ee.length===0?$:b(ee[Z])}function b(ee){return Ie;function Ie(me){return f=B(),Q=ee,ee.partial||(l.currentConstruct=ee),ee.name&&l.parser.constructs.disable.null.includes(ee.name)?he():ee.tokenize.call(_?Object.assign(Object.create(l),_):l,u,ce,he)(me)}}function ce(ee){return C(Q,f),R}function he(ee){return f.restore(),++Z<z.length?b(z[Z]):$}}}function P(C,_){C.resolveAll&&!i.includes(C)&&i.push(C),C.resolve&&Ee(l.events,_,l.events.length-_,C.resolve(l.events.slice(_),l)),C.resolveTo&&(l.events=C.resolveTo(l.events,l))}function B(){const C=h(),_=l.previous,D=l.currentConstruct,L=l.events.length,R=Array.from(s);return{from:L,restore:$};function $(){r=C,l.previous=_,l.currentConstruct=D,l.events.length=L,s=R,F()}}function F(){r.line in a&&r.column<2&&(r.column=a[r.line],r.offset+=a[r.line]-1)}}function Lp(e,t){const n=t.start._index,r=t.start._bufferIndex,a=t.end._index,i=t.end._bufferIndex;let o;if(n===a)o=[e[n].slice(r,i)];else{if(o=e.slice(n,a),r>-1){const s=o[0];typeof s=="string"?o[0]=s.slice(r):o.shift()}i>0&&o.push(e[a].slice(0,i))}return o}function Mp(e,t){let n=-1;const r=[];let a;for(;++n<e.length;){const i=e[n];let o;if(typeof i=="string")o=i;else switch(i){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&a)continue;o=" ";break}default:o=String.fromCharCode(i)}a=i===-2,r.push(o)}return r.join("")}function Pp(e){const r={constructs:zc([xp,...(e||{}).extensions||[]]),content:a(Zc),defined:[],document:a(Jc),flow:a(hp),lazy:{},string:a(Ep),text:a(Ap)};return r;function a(i){return o;function o(s){return Dp(r,i,s)}}}function Fp(e){for(;!Zl(e););return e}const rl=/[\0\t\n\r]/g;function Bp(){let e=1,t="",n=!0,r;return a;function a(i,o,s){const u=[];let l,c,d,m,p;for(i=t+(typeof i=="string"?i.toString():new TextDecoder(o||void 0).decode(i)),d=0,t="",n&&(i.charCodeAt(0)===65279&&d++,n=void 0);d<i.length;){if(rl.lastIndex=d,l=rl.exec(i),m=l&&l.index!==void 0?l.index:i.length,p=i.charCodeAt(m),!l){t=i.slice(d);break}if(p===10&&d===m&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),d<m&&(u.push(i.slice(d,m)),e+=m-d),p){case 0:{u.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,u.push(-2);e++<c;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}d=m+1}return s&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const Up=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Gp(e){return e.replace(Up,Hp)}function Hp(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const a=n.charCodeAt(1),i=a===120||a===88;return ql(n.slice(i?2:1),i?16:10)}return st(n)||e}const ru={}.hasOwnProperty;function $p(e,t,n){return typeof t!="string"&&(n=t,t=void 0),zp(n)(Fp(Pp(n).document().write(Bp()(e,t,!0))))}function zp(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(xs),autolinkProtocol:B,autolinkEmail:B,atxHeading:i(_s),blockQuote:i(ke),characterEscape:B,characterReference:B,codeFenced:i(Le),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:i(Le,o),codeText:i(ku,o),codeTextData:B,data:B,codeFlowValue:B,definition:i(Ru),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:i(Cu),hardBreakEscape:i(Ns),hardBreakTrailing:i(Ns),htmlFlow:i(Os,o),htmlFlowData:B,htmlText:i(Os,o),htmlTextData:B,image:i(_u),label:o,link:i(xs),listItem:i(Nu),listItemValue:m,listOrdered:i(Ds,d),listUnordered:i(Ds),paragraph:i(Ou),reference:b,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:i(_s),strong:i(xu),thematicBreak:i(Lu)},exit:{atxHeading:u(),atxHeadingSequence:O,autolink:u(),autolinkEmail:ve,autolinkProtocol:me,blockQuote:u(),characterEscapeValue:F,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:ee,characterReference:Ie,codeFenced:u(S),codeFencedFence:E,codeFencedFenceInfo:p,codeFencedFenceMeta:h,codeFlowValue:F,codeIndented:u(y),codeText:u(R),codeTextData:F,data:F,definition:u(),definitionDestinationString:k,definitionLabelString:I,definitionTitleString:T,emphasis:u(),hardBreakEscape:u(_),hardBreakTrailing:u(_),htmlFlow:u(D),htmlFlowData:F,htmlText:u(L),htmlTextData:F,image:u(z),label:Q,labelText:Z,lineEnding:C,link:u($),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:ce,resourceDestinationString:f,resourceTitleString:q,resource:J,setextHeading:u(P),setextHeadingLineSequence:M,setextHeadingText:A,strong:u(),thematicBreak:u()}};au(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(w){let N={type:"root",children:[]};const G={stack:[N],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:c,data:n},V=[];let Y=-1;for(;++Y<w.length;)if(w[Y][1].type==="listOrdered"||w[Y][1].type==="listUnordered")if(w[Y][0]==="enter")V.push(Y);else{const be=V.pop();Y=a(w,be,Y)}for(Y=-1;++Y<w.length;){const be=t[w[Y][0]];ru.call(be,w[Y][1].type)&&be[w[Y][1].type].call(Object.assign({sliceSerialize:w[Y][2].sliceSerialize},G),w[Y][1])}if(G.tokenStack.length>0){const be=G.tokenStack[G.tokenStack.length-1];(be[1]||al).call(G,void 0,be[0])}for(N.position={start:Re(w.length>0?w[0][1].start:{line:1,column:1,offset:0}),end:Re(w.length>0?w[w.length-2][1].end:{line:1,column:1,offset:0})},Y=-1;++Y<t.transforms.length;)N=t.transforms[Y](N)||N;return N}function a(w,N,G){let V=N-1,Y=-1,be=!1,Oe,Te,Ke,Xe;for(;++V<=G;){const de=w[V];switch(de[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{de[0]==="enter"?Y++:Y--,Xe=void 0;break}case"lineEndingBlank":{de[0]==="enter"&&(Oe&&!Xe&&!Y&&!Ke&&(Ke=V),Xe=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Xe=void 0}if(!Y&&de[0]==="enter"&&de[1].type==="listItemPrefix"||Y===-1&&de[0]==="exit"&&(de[1].type==="listUnordered"||de[1].type==="listOrdered")){if(Oe){let Me=V;for(Te=void 0;Me--;){const we=w[Me];if(we[1].type==="lineEnding"||we[1].type==="lineEndingBlank"){if(we[0]==="exit")continue;Te&&(w[Te][1].type="lineEndingBlank",be=!0),we[1].type="lineEnding",Te=Me}else if(!(we[1].type==="linePrefix"||we[1].type==="blockQuotePrefix"||we[1].type==="blockQuotePrefixWhitespace"||we[1].type==="blockQuoteMarker"||we[1].type==="listItemIndent"))break}Ke&&(!Te||Ke<Te)&&(Oe._spread=!0),Oe.end=Object.assign({},Te?w[Te][1].start:de[1].end),w.splice(Te||V,0,["exit",Oe,de[2]]),V++,G++}if(de[1].type==="listItemPrefix"){const Me={type:"listItem",_spread:!1,start:Object.assign({},de[1].start),end:void 0};Oe=Me,w.splice(V,0,["enter",Me,de[2]]),V++,G++,Ke=void 0,Xe=!0}}}return w[N][1]._spread=be,G}function i(w,N){return G;function G(V){s.call(this,w(V),V),N&&N.call(this,V)}}function o(){this.stack.push({type:"fragment",children:[]})}function s(w,N,G){this.stack[this.stack.length-1].children.push(w),this.stack.push(w),this.tokenStack.push([N,G||void 0]),w.position={start:Re(N.start),end:void 0}}function u(w){return N;function N(G){w&&w.call(this,G),l.call(this,G)}}function l(w,N){const G=this.stack.pop(),V=this.tokenStack.pop();if(V)V[0].type!==w.type&&(N?N.call(this,w,V[0]):(V[1]||al).call(this,w,V[0]));else throw new Error("Cannot close `"+w.type+"` ("+tt({start:w.start,end:w.end})+"): it’s not open");G.position.end=Re(w.end)}function c(){return Hc(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function m(w){if(this.data.expectingFirstListItemValue){const N=this.stack[this.stack.length-2];N.start=Number.parseInt(this.sliceSerialize(w),10),this.data.expectingFirstListItemValue=void 0}}function p(){const w=this.resume(),N=this.stack[this.stack.length-1];N.lang=w}function h(){const w=this.resume(),N=this.stack[this.stack.length-1];N.meta=w}function E(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const w=this.resume(),N=this.stack[this.stack.length-1];N.value=w.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const w=this.resume(),N=this.stack[this.stack.length-1];N.value=w.replace(/(\r?\n|\r)$/g,"")}function I(w){const N=this.resume(),G=this.stack[this.stack.length-1];G.label=N,G.identifier=Ge(this.sliceSerialize(w)).toLowerCase()}function T(){const w=this.resume(),N=this.stack[this.stack.length-1];N.title=w}function k(){const w=this.resume(),N=this.stack[this.stack.length-1];N.url=w}function O(w){const N=this.stack[this.stack.length-1];if(!N.depth){const G=this.sliceSerialize(w).length;N.depth=G}}function A(){this.data.setextHeadingSlurpLineEnding=!0}function M(w){const N=this.stack[this.stack.length-1];N.depth=this.sliceSerialize(w).codePointAt(0)===61?1:2}function P(){this.data.setextHeadingSlurpLineEnding=void 0}function B(w){const G=this.stack[this.stack.length-1].children;let V=G[G.length-1];(!V||V.type!=="text")&&(V=Du(),V.position={start:Re(w.start),end:void 0},G.push(V)),this.stack.push(V)}function F(w){const N=this.stack.pop();N.value+=this.sliceSerialize(w),N.position.end=Re(w.end)}function C(w){const N=this.stack[this.stack.length-1];if(this.data.atHardBreak){const G=N.children[N.children.length-1];G.position.end=Re(w.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(N.type)&&(B.call(this,w),F.call(this,w))}function _(){this.data.atHardBreak=!0}function D(){const w=this.resume(),N=this.stack[this.stack.length-1];N.value=w}function L(){const w=this.resume(),N=this.stack[this.stack.length-1];N.value=w}function R(){const w=this.resume(),N=this.stack[this.stack.length-1];N.value=w}function $(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const N=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=N,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function z(){const w=this.stack[this.stack.length-1];if(this.data.inReference){const N=this.data.referenceType||"shortcut";w.type+="Reference",w.referenceType=N,delete w.url,delete w.title}else delete w.identifier,delete w.label;this.data.referenceType=void 0}function Z(w){const N=this.sliceSerialize(w),G=this.stack[this.stack.length-2];G.label=Gp(N),G.identifier=Ge(N).toLowerCase()}function Q(){const w=this.stack[this.stack.length-1],N=this.resume(),G=this.stack[this.stack.length-1];if(this.data.inReference=!0,G.type==="link"){const V=w.children;G.children=V}else G.alt=N}function f(){const w=this.resume(),N=this.stack[this.stack.length-1];N.url=w}function q(){const w=this.resume(),N=this.stack[this.stack.length-1];N.title=w}function J(){this.data.inReference=void 0}function b(){this.data.referenceType="collapsed"}function ce(w){const N=this.resume(),G=this.stack[this.stack.length-1];G.label=N,G.identifier=Ge(this.sliceSerialize(w)).toLowerCase(),this.data.referenceType="full"}function he(w){this.data.characterReferenceType=w.type}function ee(w){const N=this.sliceSerialize(w),G=this.data.characterReferenceType;let V;G?(V=ql(N,G==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):V=st(N);const Y=this.stack[this.stack.length-1];Y.value+=V}function Ie(w){const N=this.stack.pop();N.position.end=Re(w.end)}function me(w){F.call(this,w);const N=this.stack[this.stack.length-1];N.url=this.sliceSerialize(w)}function ve(w){F.call(this,w);const N=this.stack[this.stack.length-1];N.url="mailto:"+this.sliceSerialize(w)}function ke(){return{type:"blockquote",children:[]}}function Le(){return{type:"code",lang:null,meta:null,value:""}}function ku(){return{type:"inlineCode",value:""}}function Ru(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Cu(){return{type:"emphasis",children:[]}}function _s(){return{type:"heading",depth:0,children:[]}}function Ns(){return{type:"break"}}function Os(){return{type:"html",value:""}}function _u(){return{type:"image",title:null,url:"",alt:null}}function xs(){return{type:"link",title:null,url:"",children:[]}}function Ds(w){return{type:"list",ordered:w.type==="listOrdered",start:null,spread:w._spread,children:[]}}function Nu(w){return{type:"listItem",spread:w._spread,checked:null,children:[]}}function Ou(){return{type:"paragraph",children:[]}}function xu(){return{type:"strong",children:[]}}function Du(){return{type:"text",value:""}}function Lu(){return{type:"thematicBreak"}}}function Re(e){return{line:e.line,column:e.column,offset:e.offset}}function au(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?au(e,r):Wp(e,r)}}function Wp(e,t){let n;for(n in t)if(ru.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function al(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+tt({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+tt({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+tt({start:t.start,end:t.end})+") is still open")}function Vp(e){const t=this;t.parser=n;function n(r){return $p(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function jp(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function qp(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function Yp(e,t){const n=t.value?t.value+`
`:"",r={},a=t.lang?t.lang.split(/\s+/):[];a.length>0&&(r.className=["language-"+a[0]]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i}function Kp(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Xp(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Zp(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),a=$e(r.toLowerCase()),i=e.footnoteOrder.indexOf(r);let o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=i+1,s+=1,e.footnoteCounts.set(r,s);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+a,id:n+"fnref-"+a+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,u);const l={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,l),e.applyData(t,l)}function Qp(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Jp(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function iu(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const a=e.all(t),i=a[0];i&&i.type==="text"?i.value="["+i.value:a.unshift({type:"text",value:"["});const o=a[a.length-1];return o&&o.type==="text"?o.value+=r:a.push({type:"text",value:r}),a}function eg(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return iu(e,t);const a={src:$e(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(a.title=r.title);const i={type:"element",tagName:"img",properties:a,children:[]};return e.patch(t,i),e.applyData(t,i)}function tg(e,t){const n={src:$e(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function ng(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function rg(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return iu(e,t);const a={href:$e(r.url||"")};r.title!==null&&r.title!==void 0&&(a.title=r.title);const i={type:"element",tagName:"a",properties:a,children:e.all(t)};return e.patch(t,i),e.applyData(t,i)}function ag(e,t){const n={href:$e(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function ig(e,t,n){const r=e.all(t),a=n?og(n):ou(t),i={},o=[];if(typeof t.checked=="boolean"){const c=r[0];let d;c&&c.type==="element"&&c.tagName==="p"?d=c:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const c=r[s];(a||s!==0||c.type!=="element"||c.tagName!=="p")&&o.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!a?o.push(...c.children):o.push(c)}const u=r[r.length-1];u&&(a||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`});const l={type:"element",tagName:"li",properties:i,children:o};return e.patch(t,l),e.applyData(t,l)}function og(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=ou(n[r])}return t}function ou(e){const t=e.spread;return t??e.children.length>1}function sg(e,t){const n={},r=e.all(t);let a=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++a<r.length;){const o=r[a];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)}function lg(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ug(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function cg(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function dg(e,t){const n=e.all(t),r=n.shift(),a=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],o),a.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=hn(t.children[1]),u=Gl(t.children[t.children.length-1]);s&&u&&(o.position={start:s,end:u}),a.push(o)}const i={type:"element",tagName:"table",properties:{},children:e.wrap(a,!0)};return e.patch(t,i),e.applyData(t,i)}function pg(e,t,n){const r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,s=o?o.length:t.children.length;let u=-1;const l=[];for(;++u<s;){const d=t.children[u],m={},p=o?o[u]:void 0;p&&(m.align=p);let h={type:"element",tagName:i,properties:m,children:[]};d&&(h.children=e.all(d),e.patch(d,h),h=e.applyData(d,h)),l.push(h)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(l,!0)};return e.patch(t,c),e.applyData(t,c)}function gg(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const il=9,ol=32;function mg(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),a=0;const i=[];for(;r;)i.push(sl(t.slice(a,r.index),a>0,!0),r[0]),a=r.index+r[0].length,r=n.exec(t);return i.push(sl(t.slice(a),a>0,!1)),i.join("")}function sl(e,t,n){let r=0,a=e.length;if(t){let i=e.codePointAt(r);for(;i===il||i===ol;)r++,i=e.codePointAt(r)}if(n){let i=e.codePointAt(a-1);for(;i===il||i===ol;)a--,i=e.codePointAt(a-1)}return a>r?e.slice(r,a):""}function fg(e,t){const n={type:"text",value:mg(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function bg(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const hg={blockquote:jp,break:qp,code:Yp,delete:Kp,emphasis:Xp,footnoteReference:Zp,heading:Qp,html:Jp,imageReference:eg,image:tg,inlineCode:ng,linkReference:rg,link:ag,listItem:ig,list:sg,paragraph:lg,root:ug,strong:cg,table:dg,tableCell:gg,tableRow:pg,text:fg,thematicBreak:bg,toml:ht,yaml:ht,definition:ht,footnoteDefinition:ht};function ht(){}const su=-1,_t=0,rt=1,vt=2,wn=3,In=4,vn=5,kn=6,lu=7,uu=8,ll=typeof self=="object"?self:globalThis,yg=(e,t)=>{const n=(a,i)=>(e.set(i,a),a),r=a=>{if(e.has(a))return e.get(a);const[i,o]=t[a];switch(i){case _t:case su:return n(o,a);case rt:{const s=n([],a);for(const u of o)s.push(r(u));return s}case vt:{const s=n({},a);for(const[u,l]of o)s[r(u)]=r(l);return s}case wn:return n(new Date(o),a);case In:{const{source:s,flags:u}=o;return n(new RegExp(s,u),a)}case vn:{const s=n(new Map,a);for(const[u,l]of o)s.set(r(u),r(l));return s}case kn:{const s=n(new Set,a);for(const u of o)s.add(r(u));return s}case lu:{const{name:s,message:u}=o;return n(new ll[s](u),a)}case uu:return n(BigInt(o),a);case"BigInt":return n(Object(BigInt(o)),a);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:s}=new Uint8Array(o);return n(new DataView(s),o)}}return n(new ll[i](o),a)};return r},ul=e=>yg(new Map,e)(0),Fe="",{toString:Sg}={},{keys:Eg}=Object,et=e=>{const t=typeof e;if(t!=="object"||!e)return[_t,t];const n=Sg.call(e).slice(8,-1);switch(n){case"Array":return[rt,Fe];case"Object":return[vt,Fe];case"Date":return[wn,Fe];case"RegExp":return[In,Fe];case"Map":return[vn,Fe];case"Set":return[kn,Fe];case"DataView":return[rt,n]}return n.includes("Array")?[rt,n]:n.includes("Error")?[lu,n]:[vt,n]},yt=([e,t])=>e===_t&&(t==="function"||t==="symbol"),Ag=(e,t,n,r)=>{const a=(o,s)=>{const u=r.push(o)-1;return n.set(s,u),u},i=o=>{if(n.has(o))return n.get(o);let[s,u]=et(o);switch(s){case _t:{let c=o;switch(u){case"bigint":s=uu,c=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);c=null;break;case"undefined":return a([su],o)}return a([s,c],o)}case rt:{if(u){let m=o;return u==="DataView"?m=new Uint8Array(o.buffer):u==="ArrayBuffer"&&(m=new Uint8Array(o)),a([u,[...m]],o)}const c=[],d=a([s,c],o);for(const m of o)c.push(i(m));return d}case vt:{if(u)switch(u){case"BigInt":return a([u,o.toString()],o);case"Boolean":case"Number":case"String":return a([u,o.valueOf()],o)}if(t&&"toJSON"in o)return i(o.toJSON());const c=[],d=a([s,c],o);for(const m of Eg(o))(e||!yt(et(o[m])))&&c.push([i(m),i(o[m])]);return d}case wn:return a([s,o.toISOString()],o);case In:{const{source:c,flags:d}=o;return a([s,{source:c,flags:d}],o)}case vn:{const c=[],d=a([s,c],o);for(const[m,p]of o)(e||!(yt(et(m))||yt(et(p))))&&c.push([i(m),i(p)]);return d}case kn:{const c=[],d=a([s,c],o);for(const m of o)(e||!yt(et(m)))&&c.push(i(m));return d}}const{message:l}=o;return a([s,{name:u,message:l}],o)};return i},cl=(e,{json:t,lossy:n}={})=>{const r=[];return Ag(!(t||n),!!t,new Map,r)(e),r},kt=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?ul(cl(e,t)):structuredClone(e):(e,t)=>ul(cl(e,t));function Tg(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function wg(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Ig(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Tg,r=e.options.footnoteBackLabel||wg,a=e.options.footnoteLabel||"Footnotes",i=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let u=-1;for(;++u<e.footnoteOrder.length;){const l=e.footnoteById.get(e.footnoteOrder[u]);if(!l)continue;const c=e.all(l),d=String(l.identifier).toUpperCase(),m=$e(d.toLowerCase());let p=0;const h=[],E=e.footnoteCounts.get(d);for(;E!==void 0&&++p<=E;){h.length>0&&h.push({type:"text",value:" "});let I=typeof n=="string"?n:n(u,p);typeof I=="string"&&(I={type:"text",value:I}),h.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+m+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,p),className:["data-footnote-backref"]},children:Array.isArray(I)?I:[I]})}const S=c[c.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const I=S.children[S.children.length-1];I&&I.type==="text"?I.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...h)}else c.push(...h);const y={type:"element",tagName:"li",properties:{id:t+"fn-"+m},children:e.wrap(c,!0)};e.patch(l,y),s.push(y)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:i,properties:{...kt(o),id:"footnote-label"},children:[{type:"text",value:a}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const cu=(function(e){if(e==null)return Cg;if(typeof e=="function")return Nt(e);if(typeof e=="object")return Array.isArray(e)?vg(e):kg(e);if(typeof e=="string")return Rg(e);throw new Error("Expected function, string, or object as test")});function vg(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=cu(e[n]);return Nt(r);function r(...a){let i=-1;for(;++i<t.length;)if(t[i].apply(this,a))return!0;return!1}}function kg(e){const t=e;return Nt(n);function n(r){const a=r;let i;for(i in e)if(a[i]!==t[i])return!1;return!0}}function Rg(e){return Nt(t);function t(n){return n&&n.type===e}}function Nt(e){return t;function t(n,r,a){return!!(_g(n)&&e.call(this,n,typeof r=="number"?r:void 0,a||void 0))}}function Cg(){return!0}function _g(e){return e!==null&&typeof e=="object"&&"type"in e}const du=[],Ng=!0,dl=!1,Og="skip";function xg(e,t,n,r){let a;typeof t=="function"&&typeof n!="function"?(r=n,n=t):a=t;const i=cu(a),o=r?-1:1;s(e,void 0,[])();function s(u,l,c){const d=u&&typeof u=="object"?u:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(m,"name",{value:"node ("+(u.type+(p?"<"+p+">":""))+")"})}return m;function m(){let p=du,h,E,S;if((!t||i(u,l,c[c.length-1]||void 0))&&(p=Dg(n(u,c)),p[0]===dl))return p;if("children"in u&&u.children){const y=u;if(y.children&&p[0]!==Og)for(E=(r?y.children.length:-1)+o,S=c.concat(y);E>-1&&E<y.children.length;){const I=y.children[E];if(h=s(I,E,S)(),h[0]===dl)return h;E=typeof h[1]=="number"?h[1]:E+o}}return p}}}function Dg(e){return Array.isArray(e)?e:typeof e=="number"?[Ng,e]:e==null?du:[e]}function pu(e,t,n,r){let a,i,o;typeof t=="function"&&typeof n!="function"?(i=void 0,o=t,a=n):(i=t,o=n,a=r),xg(e,i,s,a);function s(u,l){const c=l[l.length-1],d=c?c.children.indexOf(u):void 0;return o(u,d,c)}}const ln={}.hasOwnProperty,Lg={};function Mg(e,t){const n=t||Lg,r=new Map,a=new Map,i=new Map,o={...hg,...n.handlers},s={all:l,applyData:Fg,definitionById:r,footnoteById:a,footnoteCounts:i,footnoteOrder:[],handlers:o,one:u,options:n,patch:Pg,wrap:Ug};return pu(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const d=c.type==="definition"?r:a,m=String(c.identifier).toUpperCase();d.has(m)||d.set(m,c)}}),s;function u(c,d){const m=c.type,p=s.handlers[m];if(ln.call(s.handlers,m)&&p)return p(s,c,d);if(s.options.passThrough&&s.options.passThrough.includes(m)){if("children"in c){const{children:E,...S}=c,y=kt(S);return y.children=s.all(c),y}return kt(c)}return(s.options.unknownHandler||Bg)(s,c,d)}function l(c){const d=[];if("children"in c){const m=c.children;let p=-1;for(;++p<m.length;){const h=s.one(m[p],c);if(h){if(p&&m[p-1].type==="break"&&(!Array.isArray(h)&&h.type==="text"&&(h.value=pl(h.value)),!Array.isArray(h)&&h.type==="element")){const E=h.children[0];E&&E.type==="text"&&(E.value=pl(E.value))}Array.isArray(h)?d.push(...h):d.push(h)}}}return d}}function Pg(e,t){e.position&&(t.position=Sc(e))}function Fg(e,t){let n=t;if(e&&e.data){const r=e.data.hName,a=e.data.hChildren,i=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const o="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:o}}n.type==="element"&&i&&Object.assign(n.properties,kt(i)),"children"in n&&n.children&&a!==null&&a!==void 0&&(n.children=a)}return n}function Bg(e,t){const n=t.data||{},r="value"in t&&!(ln.call(n,"hProperties")||ln.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ug(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function pl(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function gl(e,t){const n=Mg(e,t),r=n.one(e,void 0),a=Ig(n),i=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return a&&i.children.push({type:"text",value:`
`},a),i}function Gg(e,t){return e&&"run"in e?async function(n,r){const a=gl(n,{file:r,...t});await e.run(a,r)}:function(n,r){return gl(n,{file:r,...e||t})}}function ml(e){if(e)throw e}var Vt,fl;function Hg(){if(fl)return Vt;fl=1;var e=Object.prototype.hasOwnProperty,t=Object.prototype.toString,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=function(l){return typeof Array.isArray=="function"?Array.isArray(l):t.call(l)==="[object Array]"},i=function(l){if(!l||t.call(l)!=="[object Object]")return!1;var c=e.call(l,"constructor"),d=l.constructor&&l.constructor.prototype&&e.call(l.constructor.prototype,"isPrototypeOf");if(l.constructor&&!c&&!d)return!1;var m;for(m in l);return typeof m>"u"||e.call(l,m)},o=function(l,c){n&&c.name==="__proto__"?n(l,c.name,{enumerable:!0,configurable:!0,value:c.newValue,writable:!0}):l[c.name]=c.newValue},s=function(l,c){if(c==="__proto__")if(e.call(l,c)){if(r)return r(l,c).value}else return;return l[c]};return Vt=function u(){var l,c,d,m,p,h,E=arguments[0],S=1,y=arguments.length,I=!1;for(typeof E=="boolean"&&(I=E,E=arguments[1]||{},S=2),(E==null||typeof E!="object"&&typeof E!="function")&&(E={});S<y;++S)if(l=arguments[S],l!=null)for(c in l)d=s(E,c),m=s(l,c),E!==m&&(I&&m&&(i(m)||(p=a(m)))?(p?(p=!1,h=d&&a(d)?d:[]):h=d&&i(d)?d:{},o(E,{name:c,newValue:u(I,h,m)})):typeof m<"u"&&o(E,{name:c,newValue:m}));return E},Vt}var $g=Hg();const jt=_l($g);function un(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function zg(){const e=[],t={run:n,use:r};return t;function n(...a){let i=-1;const o=a.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);s(null,...a);function s(u,...l){const c=e[++i];let d=-1;if(u){o(u);return}for(;++d<a.length;)(l[d]===null||l[d]===void 0)&&(l[d]=a[d]);a=l,c?Wg(c,s)(...l):o(null,...l)}}function r(a){if(typeof a!="function")throw new TypeError("Expected `middelware` to be a function, not "+a);return e.push(a),t}}function Wg(e,t){let n;return r;function r(...o){const s=e.length>o.length;let u;s&&o.push(a);try{u=e.apply(this,o)}catch(l){const c=l;if(s&&n)throw c;return a(c)}s||(u&&u.then&&typeof u.then=="function"?u.then(i,a):u instanceof Error?a(u):i(u))}function a(o,...s){n||(n=!0,t(o,...s))}function i(o){a(null,o)}}const ye={basename:Vg,dirname:jg,extname:qg,join:Yg,sep:"/"};function Vg(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ct(e);let n=0,r=-1,a=e.length,i;if(t===void 0||t.length===0||t.length>e.length){for(;a--;)if(e.codePointAt(a)===47){if(i){n=a+1;break}}else r<0&&(i=!0,r=a+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,s=t.length-1;for(;a--;)if(e.codePointAt(a)===47){if(i){n=a+1;break}}else o<0&&(i=!0,o=a+1),s>-1&&(e.codePointAt(a)===t.codePointAt(s--)?s<0&&(r=a):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function jg(e){if(ct(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function qg(e){ct(e);let t=e.length,n=-1,r=0,a=-1,i=0,o;for(;t--;){const s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?a<0?a=t:i!==1&&(i=1):a>-1&&(i=-1)}return a<0||n<0||i===0||i===1&&a===n-1&&a===r+1?"":e.slice(a,n)}function Yg(...e){let t=-1,n;for(;++t<e.length;)ct(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Kg(n)}function Kg(e){ct(e);const t=e.codePointAt(0)===47;let n=Xg(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Xg(e,t){let n="",r=0,a=-1,i=0,o=-1,s,u;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else{if(s===47)break;s=47}if(s===47){if(!(a===o-1||i===1))if(a!==o-1&&i===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),a=o,i=0;continue}}else if(n.length>0){n="",r=0,a=o,i=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(a+1,o):n=e.slice(a+1,o),r=o-a-1;a=o,i=0}else s===46&&i>-1?i++:i=-1}return n}function ct(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Zg={cwd:Qg};function Qg(){return"/"}function cn(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Jg(e){if(typeof e=="string")e=new URL(e);else if(!cn(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return em(e)}function em(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const a=new TypeError("File URL path must not include encoded / characters");throw a.code="ERR_INVALID_FILE_URL_PATH",a}}return decodeURIComponent(t)}const qt=["history","path","basename","stem","extname","dirname"];class gu{constructor(t){let n;t?cn(t)?n={path:t}:typeof t=="string"||tm(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Zg.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<qt.length;){const i=qt[r];i in n&&n[i]!==void 0&&n[i]!==null&&(this[i]=i==="history"?[...n[i]]:n[i])}let a;for(a in n)qt.includes(a)||(this[a]=n[a])}get basename(){return typeof this.path=="string"?ye.basename(this.path):void 0}set basename(t){Kt(t,"basename"),Yt(t,"basename"),this.path=ye.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?ye.dirname(this.path):void 0}set dirname(t){bl(this.basename,"dirname"),this.path=ye.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?ye.extname(this.path):void 0}set extname(t){if(Yt(t,"extname"),bl(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ye.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){cn(t)&&(t=Jg(t)),Kt(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?ye.basename(this.path,this.extname):void 0}set stem(t){Kt(t,"stem"),Yt(t,"stem"),this.path=ye.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const a=this.message(t,n,r);throw a.fatal=!0,a}info(t,n,r){const a=this.message(t,n,r);return a.fatal=void 0,a}message(t,n,r){const a=new ae(t,n,r);return this.path&&(a.name=this.path+":"+a.name,a.file=this.path),a.fatal=!1,this.messages.push(a),a}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Yt(e,t){if(e&&e.includes(ye.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+ye.sep+"`")}function Kt(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function bl(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function tm(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const nm=(function(e){const r=this.constructor.prototype,a=r[e],i=function(){return a.apply(i,arguments)};return Object.setPrototypeOf(i,r),i}),rm={}.hasOwnProperty;class Rn extends nm{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=zg()}copy(){const t=new Rn;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(jt(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Qt("data",this.frozen),this.namespace[t]=n,this):rm.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Qt("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const a=n.call(t,...r);typeof a=="function"&&this.transformers.use(a)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=St(t),r=this.parser||this.Parser;return Xt("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Xt("process",this.parser||this.Parser),Zt("process",this.compiler||this.Compiler),n?a(void 0,n):new Promise(a);function a(i,o){const s=St(t),u=r.parse(s);r.run(u,s,function(c,d,m){if(c||!d||!m)return l(c);const p=d,h=r.stringify(p,m);om(h)?m.value=h:m.result=h,l(c,m)});function l(c,d){c||!d?o(c):i?i(d):n(void 0,d)}}}processSync(t){let n=!1,r;return this.freeze(),Xt("processSync",this.parser||this.Parser),Zt("processSync",this.compiler||this.Compiler),this.process(t,a),yl("processSync","process",n),r;function a(i,o){n=!0,ml(i),r=o}}run(t,n,r){hl(t),this.freeze();const a=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?i(void 0,r):new Promise(i);function i(o,s){const u=St(n);a.run(t,u,l);function l(c,d,m){const p=d||t;c?s(c):o?o(p):r(void 0,p,m)}}}runSync(t,n){let r=!1,a;return this.run(t,n,i),yl("runSync","run",r),a;function i(o,s){ml(o),a=s,r=!0}}stringify(t,n){this.freeze();const r=St(n),a=this.compiler||this.Compiler;return Zt("stringify",a),hl(t),a(t,r)}use(t,...n){const r=this.attachers,a=this.namespace;if(Qt("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function i(l){if(typeof l=="function")u(l,[]);else if(typeof l=="object")if(Array.isArray(l)){const[c,...d]=l;u(c,d)}else o(l);else throw new TypeError("Expected usable value, not `"+l+"`")}function o(l){if(!("plugins"in l)&&!("settings"in l))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(l.plugins),l.settings&&(a.settings=jt(!0,a.settings,l.settings))}function s(l){let c=-1;if(l!=null)if(Array.isArray(l))for(;++c<l.length;){const d=l[c];i(d)}else throw new TypeError("Expected a list of plugins, not `"+l+"`")}function u(l,c){let d=-1,m=-1;for(;++d<r.length;)if(r[d][0]===l){m=d;break}if(m===-1)r.push([l,...c]);else if(c.length>0){let[p,...h]=c;const E=r[m][1];un(E)&&un(p)&&(p=jt(!0,E,p)),r[m]=[l,p,...h]}}}}const am=new Rn().freeze();function Xt(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Zt(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Qt(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function hl(e){if(!un(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function yl(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function St(e){return im(e)?e:new gu(e)}function im(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function om(e){return typeof e=="string"||sm(e)}function sm(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const lm="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Sl=[],El={allowDangerousHtml:!0},um=/^(https?|ircs?|mailto|xmpp)$/i,cm=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function dm(e){const t=pm(e),n=gm(e);return mm(t.runSync(t.parse(n),n),e)}function pm(e){const t=e.rehypePlugins||Sl,n=e.remarkPlugins||Sl,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...El}:El;return am().use(Vp).use(n).use(Gg,r).use(t)}function gm(e){const t=e.children||"",n=new gu;return typeof t=="string"&&(n.value=t),n}function mm(e,t){const n=t.allowedElements,r=t.allowElement,a=t.components,i=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,u=t.urlTransform||fm;for(const c of cm)Object.hasOwn(t,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+lm+c.id,void 0);return pu(e,l),Ic(e,{Fragment:x.Fragment,components:a,ignoreInvalidStyle:!0,jsx:x.jsx,jsxs:x.jsxs,passKeys:!0,passNode:!0});function l(c,d,m){if(c.type==="raw"&&m&&typeof d=="number")return o?m.children.splice(d,1):m.children[d]={type:"text",value:c.value},d;if(c.type==="element"){let p;for(p in $t)if(Object.hasOwn($t,p)&&Object.hasOwn(c.properties,p)){const h=c.properties[p],E=$t[p];(E===null||E.includes(c.tagName))&&(c.properties[p]=u(String(h||""),p,c))}}if(c.type==="element"){let p=n?!n.includes(c.tagName):i?i.includes(c.tagName):!1;if(!p&&r&&typeof d=="number"&&(p=!r(c,d,m)),p&&m&&typeof d=="number")return s&&c.children?m.children.splice(d,1,...c.children):m.children.splice(d,1),d}}}function fm(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),a=e.indexOf("/");return t===-1||a!==-1&&t>a||n!==-1&&t>n||r!==-1&&t>r||um.test(e.slice(0,t))?e:""}function bm(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function hm(e,t){if(e==null)return{};var n,r,a=bm(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function dn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ym(e){if(Array.isArray(e))return dn(e)}function Sm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Em(e,t){if(e){if(typeof e=="string")return dn(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dn(e,t):void 0}}function Am(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pn(e){return ym(e)||Sm(e)||Em(e)||Am()}function lt(e){"@babel/helpers - typeof";return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lt(e)}function Tm(e,t){if(lt(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(lt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wm(e){var t=Tm(e,"string");return lt(t)=="symbol"?t:t+""}function mu(e,t,n){return(t=wm(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gn(){return gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gn.apply(null,arguments)}function Al(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Al(Object(n),!0).forEach(function(r){mu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Al(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Im(e){var t=e.length;if(t===0||t===1)return e;if(t===2)return[e[0],e[1],"".concat(e[0],".").concat(e[1]),"".concat(e[1],".").concat(e[0])];if(t===3)return[e[0],e[1],e[2],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0])];if(t>=4)return[e[0],e[1],e[2],e[3],"".concat(e[0],".").concat(e[1]),"".concat(e[0],".").concat(e[2]),"".concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[0]),"".concat(e[1],".").concat(e[2]),"".concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[1]),"".concat(e[2],".").concat(e[3]),"".concat(e[3],".").concat(e[0]),"".concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[0]),"".concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[0],".").concat(e[1],".").concat(e[2],".").concat(e[3]),"".concat(e[0],".").concat(e[1],".").concat(e[3],".").concat(e[2]),"".concat(e[0],".").concat(e[2],".").concat(e[1],".").concat(e[3]),"".concat(e[0],".").concat(e[2],".").concat(e[3],".").concat(e[1]),"".concat(e[0],".").concat(e[3],".").concat(e[1],".").concat(e[2]),"".concat(e[0],".").concat(e[3],".").concat(e[2],".").concat(e[1]),"".concat(e[1],".").concat(e[0],".").concat(e[2],".").concat(e[3]),"".concat(e[1],".").concat(e[0],".").concat(e[3],".").concat(e[2]),"".concat(e[1],".").concat(e[2],".").concat(e[0],".").concat(e[3]),"".concat(e[1],".").concat(e[2],".").concat(e[3],".").concat(e[0]),"".concat(e[1],".").concat(e[3],".").concat(e[0],".").concat(e[2]),"".concat(e[1],".").concat(e[3],".").concat(e[2],".").concat(e[0]),"".concat(e[2],".").concat(e[0],".").concat(e[1],".").concat(e[3]),"".concat(e[2],".").concat(e[0],".").concat(e[3],".").concat(e[1]),"".concat(e[2],".").concat(e[1],".").concat(e[0],".").concat(e[3]),"".concat(e[2],".").concat(e[1],".").concat(e[3],".").concat(e[0]),"".concat(e[2],".").concat(e[3],".").concat(e[0],".").concat(e[1]),"".concat(e[2],".").concat(e[3],".").concat(e[1],".").concat(e[0]),"".concat(e[3],".").concat(e[0],".").concat(e[1],".").concat(e[2]),"".concat(e[3],".").concat(e[0],".").concat(e[2],".").concat(e[1]),"".concat(e[3],".").concat(e[1],".").concat(e[0],".").concat(e[2]),"".concat(e[3],".").concat(e[1],".").concat(e[2],".").concat(e[0]),"".concat(e[3],".").concat(e[2],".").concat(e[0],".").concat(e[1]),"".concat(e[3],".").concat(e[2],".").concat(e[1],".").concat(e[0])]}var Jt={};function vm(e){if(e.length===0||e.length===1)return e;var t=e.join(".");return Jt[t]||(Jt[t]=Im(e)),Jt[t]}function km(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=e.filter(function(i){return i!=="token"}),a=vm(r);return a.reduce(function(i,o){return Be(Be({},i),n[o])},t)}function Tl(e){return e.join(" ")}function Rm(e,t){var n=0;return function(r){return n+=1,r.map(function(a,i){return fu({node:a,stylesheet:e,useInlineStyles:t,key:"code-segment-".concat(n,"-").concat(i)})})}}function fu(e){var t=e.node,n=e.stylesheet,r=e.style,a=r===void 0?{}:r,i=e.useInlineStyles,o=e.key,s=t.properties,u=t.type,l=t.tagName,c=t.value;if(u==="text")return c;if(l){var d=Rm(n,i),m;if(!i)m=Be(Be({},s),{},{className:Tl(s.className)});else{var p=Object.keys(n).reduce(function(y,I){return I.split(".").forEach(function(T){y.includes(T)||y.push(T)}),y},[]),h=s.className&&s.className.includes("token")?["token"]:[],E=s.className&&h.concat(s.className.filter(function(y){return!p.includes(y)}));m=Be(Be({},s),{},{className:Tl(E)||void 0,style:km(s.className,Object.assign({},s.style,a),n)})}var S=d(t.children);return Ce.createElement(l,gn({key:o},m),S)}}const Cm=(function(e,t){var n=e.listLanguages();return n.indexOf(t)!==-1});var _m=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function wl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wl(Object(n),!0).forEach(function(r){mu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Nm=/\n/g;function Om(e){return e.match(Nm)}function xm(e){var t=e.lines,n=e.startingLineNumber,r=e.style;return t.map(function(a,i){var o=i+n;return Ce.createElement("span",{key:"line-".concat(i),className:"react-syntax-highlighter-line-number",style:typeof r=="function"?r(o):r},"".concat(o,`
`))})}function Dm(e){var t=e.codeString,n=e.codeStyle,r=e.containerStyle,a=r===void 0?{float:"left",paddingRight:"10px"}:r,i=e.numberStyle,o=i===void 0?{}:i,s=e.startingLineNumber;return Ce.createElement("code",{style:Object.assign({},n,a)},xm({lines:t.replace(/\n$/,"").split(`
`),style:o,startingLineNumber:s}))}function Lm(e){return"".concat(e.toString().length,".25em")}function bu(e,t){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(e),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:t},children:[{type:"text",value:e}]}}function hu(e,t,n){var r={display:"inline-block",minWidth:Lm(n),paddingRight:"1em",textAlign:"right",userSelect:"none"},a=typeof e=="function"?e(t):e,i=_e(_e({},r),a);return i}function wt(e){var t=e.children,n=e.lineNumber,r=e.lineNumberStyle,a=e.largestLineNumber,i=e.showInlineLineNumbers,o=e.lineProps,s=o===void 0?{}:o,u=e.className,l=u===void 0?[]:u,c=e.showLineNumbers,d=e.wrapLongLines,m=e.wrapLines,p=m===void 0?!1:m,h=p?_e({},typeof s=="function"?s(n):s):{};if(h.className=h.className?[].concat(pn(h.className.trim().split(/\s+/)),pn(l)):l,n&&i){var E=hu(r,n,a);t.unshift(bu(n,E))}return d&c&&(h.style=_e({display:"flex"},h.style)),{type:"element",tagName:"span",properties:h,children:t}}function yu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];e.length===void 0&&(e=[e]);for(var r=0;r<e.length;r++){var a=e[r];if(a.type==="text")n.push(wt({children:[a],className:pn(new Set(t))}));else if(a.children){var i,o=t.concat(((i=a.properties)===null||i===void 0?void 0:i.className)||[]);yu(a.children,o).forEach(function(s){return n.push(s)})}}return n}function Mm(e,t,n,r,a,i,o,s,u){var l,c=yu(e.value),d=[],m=-1,p=0;function h(O,A){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return wt({children:O,lineNumber:A,lineNumberStyle:s,largestLineNumber:o,showInlineLineNumbers:a,lineProps:n,className:M,showLineNumbers:r,wrapLongLines:u,wrapLines:t})}function E(O,A){if(r&&A&&a){var M=hu(s,A,o);O.unshift(bu(A,M))}return O}function S(O,A){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return t||M.length>0?h(O,A,M):E(O,A)}for(var y=function(){var A=c[p],M=A.children[0].value,P=Om(M);if(P){var B=M.split(`
`);B.forEach(function(F,C){var _=r&&d.length+i,D={type:"text",value:"".concat(F,`
`)};if(C===0){var L=c.slice(m+1,p).concat(wt({children:[D],className:A.properties.className})),R=S(L,_);d.push(R)}else if(C===B.length-1){var $=c[p+1]&&c[p+1].children&&c[p+1].children[0],z={type:"text",value:"".concat(F)};if($){var Z=wt({children:[z],className:A.properties.className});c.splice(p+1,0,Z)}else{var Q=[z],f=S(Q,_,A.properties.className);d.push(f)}}else{var q=[D],J=S(q,_,A.properties.className);d.push(J)}}),m=p}p++};p<c.length;)y();if(m!==c.length-1){var I=c.slice(m+1,c.length);if(I&&I.length){var T=r&&d.length+i,k=S(I,T);d.push(k)}}return t?d:(l=[]).concat.apply(l,d)}function Pm(e){var t=e.rows,n=e.stylesheet,r=e.useInlineStyles;return t.map(function(a,i){return fu({node:a,stylesheet:n,useInlineStyles:r,key:"code-segment-".concat(i)})})}function Su(e){return e&&typeof e.highlightAuto<"u"}function Fm(e){var t=e.astGenerator,n=e.language,r=e.code,a=e.defaultCodeValue;if(Su(t)){var i=Cm(t,n);return n==="text"?{value:a,language:"text"}:i?t.highlight(n,r):t.highlightAuto(r)}try{return n&&n!=="text"?{value:t.highlight(r,n)}:{value:a}}catch{return{value:a}}}function Bm(e,t){return function(r){var a,i,o=r.language,s=r.children,u=r.style,l=u===void 0?t:u,c=r.customStyle,d=c===void 0?{}:c,m=r.codeTagProps,p=m===void 0?{className:o?"language-".concat(o):void 0,style:_e(_e({},l['code[class*="language-"]']),l['code[class*="language-'.concat(o,'"]')])}:m,h=r.useInlineStyles,E=h===void 0?!0:h,S=r.showLineNumbers,y=S===void 0?!1:S,I=r.showInlineLineNumbers,T=I===void 0?!0:I,k=r.startingLineNumber,O=k===void 0?1:k,A=r.lineNumberContainerStyle,M=r.lineNumberStyle,P=M===void 0?{}:M,B=r.wrapLines,F=r.wrapLongLines,C=F===void 0?!1:F,_=r.lineProps,D=_===void 0?{}:_,L=r.renderer,R=r.PreTag,$=R===void 0?"pre":R,z=r.CodeTag,Z=z===void 0?"code":z,Q=r.code,f=Q===void 0?(Array.isArray(s)?s[0]:s)||"":Q,q=r.astGenerator,J=hm(r,_m);q=q||e;var b=y?Ce.createElement(Dm,{containerStyle:A,codeStyle:p.style||{},numberStyle:P,startingLineNumber:O,codeString:f}):null,ce=l.hljs||l['pre[class*="language-"]']||{backgroundColor:"#fff"},he=Su(q)?"hljs":"prismjs",ee=E?Object.assign({},J,{style:Object.assign({},ce,d)}):Object.assign({},J,{className:J.className?"".concat(he," ").concat(J.className):he,style:Object.assign({},d)});if(C?p.style=_e({whiteSpace:"pre-wrap"},p.style):p.style=_e({whiteSpace:"pre"},p.style),!q)return Ce.createElement($,ee,b,Ce.createElement(Z,p,f));(B===void 0&&L||C)&&(B=!0),L=L||Pm;var Ie=[{type:"text",value:f}],me=Fm({astGenerator:q,language:o,code:f,defaultCodeValue:Ie});me.language===null&&(me.value=Ie);var ve=(a=(i=f.match(/\n/g))===null||i===void 0?void 0:i.length)!==null&&a!==void 0?a:0,ke=O+ve,Le=Mm(me,B,D,y,T,O,ke,P,C);return Ce.createElement($,ee,Ce.createElement(Z,p,!T&&b,L({rows:Le,stylesheet:l,useInlineStyles:E})))}}const Um=["abap","abnf","actionscript","ada","agda","al","antlr4","apacheconf","apex","apl","applescript","aql","arduino","arff","armasm","arturo","asciidoc","asm6502","asmatmel","aspnet","autohotkey","autoit","avisynth","avro-idl","awk","bash","basic","batch","bbcode","bbj","bicep","birb","bison","bnf","bqn","brainfuck","brightscript","bro","bsl","c","cfscript","chaiscript","cil","cilkc","cilkcpp","clike","clojure","cmake","cobol","coffeescript","concurnas","cooklang","coq","cpp","crystal","csharp","cshtml","csp","css-extras","css","csv","cue","cypher","d","dart","dataweave","dax","dhall","diff","django","dns-zone-file","docker","dot","ebnf","editorconfig","eiffel","ejs","elixir","elm","erb","erlang","etlua","excel-formula","factor","false","firestore-security-rules","flow","fortran","fsharp","ftl","gap","gcode","gdscript","gedcom","gettext","gherkin","git","glsl","gml","gn","go-module","go","gradle","graphql","groovy","haml","handlebars","haskell","haxe","hcl","hlsl","hoon","hpkp","hsts","http","ichigojam","icon","icu-message-format","idris","iecst","ignore","inform7","ini","io","j","java","javadoc","javadoclike","javascript","javastacktrace","jexl","jolie","jq","js-extras","js-templates","jsdoc","json","json5","jsonp","jsstacktrace","jsx","julia","keepalived","keyman","kotlin","kumir","kusto","latex","latte","less","lilypond","linker-script","liquid","lisp","livescript","llvm","log","lolcode","lua","magma","makefile","markdown","markup-templating","markup","mata","matlab","maxscript","mel","mermaid","metafont","mizar","mongodb","monkey","moonscript","n1ql","n4js","nand2tetris-hdl","naniscript","nasm","neon","nevod","nginx","nim","nix","nsis","objectivec","ocaml","odin","opencl","openqasm","oz","parigp","parser","pascal","pascaligo","pcaxis","peoplecode","perl","php-extras","php","phpdoc","plant-uml","plsql","powerquery","powershell","processing","prolog","promql","properties","protobuf","psl","pug","puppet","pure","purebasic","purescript","python","q","qml","qore","qsharp","r","racket","reason","regex","rego","renpy","rescript","rest","rip","roboconf","robotframework","ruby","rust","sas","sass","scala","scheme","scss","shell-session","smali","smalltalk","smarty","sml","solidity","solution-file","soy","sparql","splunk-spl","sqf","sql","squirrel","stan","stata","stylus","supercollider","swift","systemd","t4-cs","t4-templating","t4-vb","tap","tcl","textile","toml","tremor","tsx","tt2","turtle","twig","typescript","typoscript","unrealscript","uorazor","uri","v","vala","vbnet","velocity","verilog","vhdl","vim","visual-basic","warpscript","wasm","web-idl","wgsl","wiki","wolfram","wren","xeora","xml-doc","xojo","xquery","yaml","yang","zig"],Il=/[#.]/g;function Gm(e,t){const n=e||"",r={};let a=0,i,o;for(;a<n.length;){Il.lastIndex=a;const s=Il.exec(n),u=n.slice(a,s?s.index:n.length);u&&(i?i==="#"?r.id=u:Array.isArray(r.className)?r.className.push(u):r.className=[u]:o=u,a+=u.length),s&&(i=s[0],a++)}return{type:"element",tagName:o||t||"div",properties:r,children:[]}}function Eu(e,t,n){const r=n?Wm(n):void 0;function a(i,o,...s){let u;if(i==null){u={type:"root",children:[]};const l=o;s.unshift(l)}else{u=Gm(i,t);const l=u.tagName.toLowerCase(),c=r?r.get(l):void 0;if(u.tagName=c||l,Hm(o))s.unshift(o);else for(const[d,m]of Object.entries(o))$m(e,u.properties,d,m)}for(const l of s)mn(u.children,l);return u.type==="element"&&u.tagName==="template"&&(u.content={type:"root",children:u.children},u.children=[]),u}return a}function Hm(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const t=e,n=Object.keys(e);for(const r of n){const a=t[r];if(a&&typeof a=="object"){if(!Array.isArray(a))return!0;const i=a;for(const o of i)if(typeof o!="number"&&typeof o!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function $m(e,t,n,r){const a=Bl(e,n);let i;if(r!=null){if(typeof r=="number"){if(Number.isNaN(r))return;i=r}else typeof r=="boolean"?i=r:typeof r=="string"?a.spaceSeparated?i=Gs(r):a.commaSeparated?i=Ms(r):a.commaOrSpaceSeparated?i=Gs(Ms(r).join(" ")):i=vl(a,a.property,r):Array.isArray(r)?i=[...r]:i=a.property==="style"?zm(r):String(r);if(Array.isArray(i)){const o=[];for(const s of i)o.push(vl(a,a.property,s));i=o}a.property==="className"&&Array.isArray(t.className)&&(i=t.className.concat(i)),t[a.property]=i}}function mn(e,t){if(t!=null)if(typeof t=="number"||typeof t=="string")e.push({type:"text",value:String(t)});else if(Array.isArray(t))for(const n of t)mn(e,n);else if(typeof t=="object"&&"type"in t)t.type==="root"?mn(e,t.children):e.push(t);else throw new Error("Expected node, nodes, or string, got `"+t+"`")}function vl(e,t,n){if(typeof n=="string"){if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n);if((e.boolean||e.overloadedBoolean)&&(n===""||it(n)===it(t)))return!0}return n}function zm(e){const t=[];for(const[n,r]of Object.entries(e))t.push([n,r].join(": "));return t.join("; ")}function Wm(e){const t=new Map;for(const n of e)t.set(n.toLowerCase(),n);return t}const Vm=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],jm=Eu(Ul,"div");Eu(Rt,"g",Vm);const qm=["AElig","AMP","Aacute","Acirc","Agrave","Aring","Atilde","Auml","COPY","Ccedil","ETH","Eacute","Ecirc","Egrave","Euml","GT","Iacute","Icirc","Igrave","Iuml","LT","Ntilde","Oacute","Ocirc","Ograve","Oslash","Otilde","Ouml","QUOT","REG","THORN","Uacute","Ucirc","Ugrave","Uuml","Yacute","aacute","acirc","acute","aelig","agrave","amp","aring","atilde","auml","brvbar","ccedil","cedil","cent","copy","curren","deg","divide","eacute","ecirc","egrave","eth","euml","frac12","frac14","frac34","gt","iacute","icirc","iexcl","igrave","iquest","iuml","laquo","lt","macr","micro","middot","nbsp","not","ntilde","oacute","ocirc","ograve","ordf","ordm","oslash","otilde","ouml","para","plusmn","pound","quot","raquo","reg","sect","shy","sup1","sup2","sup3","szlig","thorn","times","uacute","ucirc","ugrave","uml","uuml","yacute","yen","yuml"],kl={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};function Au(e){const t=typeof e=="string"?e.charCodeAt(0):e;return t>=48&&t<=57}function Ym(e){const t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=102||t>=65&&t<=70||t>=48&&t<=57}function Km(e){const t=typeof e=="string"?e.charCodeAt(0):e;return t>=97&&t<=122||t>=65&&t<=90}function Rl(e){return Km(e)||Au(e)}const Xm=["","Named character references must be terminated by a semicolon","Numeric character references must be terminated by a semicolon","Named character references cannot be empty","Numeric character references cannot be empty","Named character references must be known","Numeric character references cannot be disallowed","Numeric character references cannot be outside the permissible Unicode range"];function Zm(e,t){const n={},r=typeof n.additional=="string"?n.additional.charCodeAt(0):n.additional,a=[];let i=0,o=-1,s="",u,l;n.position&&("start"in n.position||"indent"in n.position?(l=n.position.indent,u=n.position.start):u=n.position);let c=(u?u.line:0)||1,d=(u?u.column:0)||1,m=h(),p;for(i--;++i<=e.length;)if(p===10&&(d=(l?l[o]:0)||1),p=e.charCodeAt(i),p===38){const y=e.charCodeAt(i+1);if(y===9||y===10||y===12||y===32||y===38||y===60||Number.isNaN(y)||r&&y===r){s+=String.fromCharCode(p),d++;continue}const I=i+1;let T=I,k=I,O;if(y===35){k=++T;const D=e.charCodeAt(k);D===88||D===120?(O="hexadecimal",k=++T):O="decimal"}else O="named";let A="",M="",P="";const B=O==="named"?Rl:O==="decimal"?Au:Ym;for(k--;++k<=e.length;){const D=e.charCodeAt(k);if(!B(D))break;P+=String.fromCharCode(D),O==="named"&&qm.includes(P)&&(A=P,M=st(P))}let F=e.charCodeAt(k)===59;if(F){k++;const D=O==="named"?st(P):!1;D&&(A=P,M=D)}let C=1+k-I,_="";if(!(!F&&n.nonTerminated===!1))if(!P)O!=="named"&&E(4,C);else if(O==="named"){if(F&&!M)E(5,1);else if(A!==P&&(k=T+A.length,C=1+k-T,F=!1),!F){const D=A?1:3;if(n.attribute){const L=e.charCodeAt(k);L===61?(E(D,C),M=""):Rl(L)?M="":E(D,C)}else E(D,C)}_=M}else{F||E(2,C);let D=Number.parseInt(P,O==="hexadecimal"?16:10);if(Qm(D))E(7,C),_="�";else if(D in kl)E(6,C),_=kl[D];else{let L="";Jm(D)&&E(6,C),D>65535&&(D-=65536,L+=String.fromCharCode(D>>>10|55296),D=56320|D&1023),_=L+String.fromCharCode(D)}}if(_){S(),m=h(),i=k-1,d+=k-I+1,a.push(_);const D=h();D.offset++,n.reference&&n.reference.call(n.referenceContext||void 0,_,{start:m,end:D},e.slice(I-1,k)),m=D}else P=e.slice(I-1,k),s+=P,d+=P.length,i=k-1}else p===10&&(c++,o++,d=0),Number.isNaN(p)?S():(s+=String.fromCharCode(p),d++);return a.join("");function h(){return{line:c,column:d,offset:i+((u?u.offset:0)||0)}}function E(y,I){let T;n.warning&&(T=h(),T.column+=I,T.offset+=I,n.warning.call(n.warningContext||void 0,Xm[y],T,y))}function S(){s&&(a.push(s),n.text&&n.text.call(n.textContext||void 0,s,{start:m,end:h()}),s="")}}function Qm(e){return e>=55296&&e<=57343||e>1114111}function Jm(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var ef=0,Et={},ne={util:{type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++ef}),e.__id},clone:function e(t,n){n=n||{};var r,a;switch(ne.util.type(t)){case"Object":if(a=ne.util.objId(t),n[a])return n[a];r={},n[a]=r;for(var i in t)t.hasOwnProperty(i)&&(r[i]=e(t[i],n));return r;case"Array":return a=ne.util.objId(t),n[a]?n[a]:(r=[],n[a]=r,t.forEach(function(o,s){r[s]=e(o,n)}),r);default:return t}}},languages:{plain:Et,plaintext:Et,text:Et,txt:Et,extend:function(e,t){var n=ne.util.clone(ne.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){r=r||ne.languages;var a=r[e],i={};for(var o in a)if(a.hasOwnProperty(o)){if(o==t)for(var s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);n.hasOwnProperty(o)||(i[o]=a[o])}var u=r[e];return r[e]=i,ne.languages.DFS(ne.languages,function(l,c){c===u&&l!=e&&(this[l]=i)}),i},DFS:function e(t,n,r,a){a=a||{};var i=ne.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var s=t[o],u=ne.util.type(s);u==="Object"&&!a[i(s)]?(a[i(s)]=!0,e(s,n,null,a)):u==="Array"&&!a[i(s)]&&(a[i(s)]=!0,e(s,n,o,a))}}},plugins:{},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};if(ne.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=ne.tokenize(r.code,r.grammar),ne.hooks.run("after-tokenize",r),at.stringify(ne.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var a=new tf;return It(a,a.head,e),Tu(e,a,t,a.head,0),rf(a)},hooks:{all:{},add:function(e,t){var n=ne.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=ne.hooks.all[e];if(!(!n||!n.length))for(var r=0,a;a=n[r++];)a(t)}},Token:at};function at(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=(r||"").length|0}function Cl(e,t,n,r){e.lastIndex=t;var a=e.exec(n);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function Tu(e,t,n,r,a,i){for(var o in n)if(!(!n.hasOwnProperty(o)||!n[o])){var s=n[o];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(i&&i.cause==o+","+u)return;var l=s[u],c=l.inside,d=!!l.lookbehind,m=!!l.greedy,p=l.alias;if(m&&!l.pattern.global){var h=l.pattern.toString().match(/[imsuy]*$/)[0];l.pattern=RegExp(l.pattern.source,h+"g")}for(var E=l.pattern||l,S=r.next,y=a;S!==t.tail&&!(i&&y>=i.reach);y+=S.value.length,S=S.next){var I=S.value;if(t.length>e.length)return;if(!(I instanceof at)){var T=1,k;if(m){if(k=Cl(E,y,e,d),!k||k.index>=e.length)break;var P=k.index,O=k.index+k[0].length,A=y;for(A+=S.value.length;P>=A;)S=S.next,A+=S.value.length;if(A-=S.value.length,y=A,S.value instanceof at)continue;for(var M=S;M!==t.tail&&(A<O||typeof M.value=="string");M=M.next)T++,A+=M.value.length;T--,I=e.slice(y,A),k.index-=y}else if(k=Cl(E,0,I,d),!k)continue;var P=k.index,B=k[0],F=I.slice(0,P),C=I.slice(P+B.length),_=y+I.length;i&&_>i.reach&&(i.reach=_);var D=S.prev;F&&(D=It(t,D,F),y+=F.length),nf(t,D,T);var L=new at(o,c?ne.tokenize(B,c):B,p,B);if(S=It(t,D,L),C&&It(t,S,C),T>1){var R={cause:o+","+u,reach:_};Tu(e,t,n,S.prev,y,R),i&&R.reach>i.reach&&(i.reach=R.reach)}}}}}}function tf(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function It(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function nf(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}function rf(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}const wu=ne;function Iu(){}Iu.prototype=wu;const g=new Iu;g.highlight=af;g.register=of;g.alias=sf;g.registered=lf;g.listLanguages=uf;g.util.encode=cf;g.Token.stringify=fn;function af(e,t){if(typeof e!="string")throw new TypeError("Expected `string` for `value`, got `"+e+"`");let n,r;if(t&&typeof t=="object")n=t;else{if(r=t,typeof r!="string")throw new TypeError("Expected `string` for `name`, got `"+r+"`");if(Object.hasOwn(g.languages,r))n=g.languages[r];else throw new Error("Unknown language: `"+r+"` is not registered")}return{type:"root",children:wu.highlight.call(g,e,n,r)}}function of(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `syntax`, got `"+e+"`");Object.hasOwn(g.languages,e.displayName)||e(g)}function sf(e,t){const n=g.languages;let r={};typeof e=="string"?t&&(r[e]=t):r=e;let a;for(a in r)if(Object.hasOwn(r,a)){const i=r[a],o=typeof i=="string"?[i]:i;let s=-1;for(;++s<o.length;)n[o[s]]=n[a]}}function lf(e){if(typeof e!="string")throw new TypeError("Expected `string` for `aliasOrLanguage`, got `"+e+"`");return Object.hasOwn(g.languages,e)}function uf(){const e=g.languages,t=[];let n;for(n in e)Object.hasOwn(e,n)&&typeof e[n]=="object"&&t.push(n);return t}function fn(e,t){if(typeof e=="string")return{type:"text",value:e};if(Array.isArray(e)){const r=[];let a=-1;for(;++a<e.length;)e[a]!==null&&e[a]!==void 0&&e[a]!==""&&r.push(fn(e[a],t));return r}const n={attributes:{},classes:["token",e.type],content:fn(e.content,t),language:t,tag:"span",type:e.type};return e.alias&&n.classes.push(...typeof e.alias=="string"?[e.alias]:e.alias),g.hooks.run("wrap",n),jm(n.tag+"."+n.classes.join("."),df(n.attributes),n.content)}function cf(e){return e}function df(e){let t;for(t in e)Object.hasOwn(e,t)&&(e[t]=Zm(e[t]));return e}const pf={'code[class*="language-"]':{color:"black",background:"none",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"#f5f2f0",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{background:"#f5f2f0",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"slategray"},prolog:{color:"slategray"},doctype:{color:"slategray"},cdata:{color:"slategray"},punctuation:{color:"#999"},namespace:{Opacity:".7"},property:{color:"#905"},tag:{color:"#905"},boolean:{color:"#905"},number:{color:"#905"},constant:{color:"#905"},symbol:{color:"#905"},deleted:{color:"#905"},selector:{color:"#690"},"attr-name":{color:"#690"},string:{color:"#690"},char:{color:"#690"},builtin:{color:"#690"},inserted:{color:"#690"},operator:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},entity:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)",cursor:"help"},url:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".language-css .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".style .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},atrule:{color:"#07a"},"attr-value":{color:"#07a"},keyword:{color:"#07a"},function:{color:"#DD4A68"},"class-name":{color:"#DD4A68"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},variable:{color:"#e90"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};re.displayName="markup";re.aliases=["atom","html","mathml","rss","ssml","svg","xml"];function re(e){e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.value.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,r){var a={};a["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};i["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var o={};o[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:i},e.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml}De.displayName="css";De.aliases=[];function De(e){(function(t){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var r=t.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))})(e)}W.displayName="clike";W.aliases=[];function W(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}}Cn.displayName="regex";Cn.aliases=[];function Cn(e){(function(t){var n={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},r=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,a={pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},i={pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},o="(?:[^\\\\-]|"+r.source+")",s=RegExp(o+"-"+o),u={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};t.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:s,inside:{escape:r,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":n,"char-set":i,escape:r}},"special-escape":n,"char-set":a,backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":u}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:r,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":u}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(e)}ie.displayName="javascript";ie.aliases=["js"];function ie(e){e.register(W),e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript}_n.displayName="abap";_n.aliases=[];function _n(e){e.languages.abap={comment:/^\*.*/m,string:/(`|')(?:\\.|(?!\1)[^\\\r\n])*\1/,"string-template":{pattern:/([|}])(?:\\.|[^\\|{\r\n])*(?=[|{])/,lookbehind:!0,alias:"string"},"eol-comment":{pattern:/(^|\s)".*/m,lookbehind:!0,alias:"comment"},keyword:{pattern:/(\s|\.|^)(?:\*-INPUT|\?TO|ABAP-SOURCE|ABBREVIATED|ABS|ABSTRACT|ACCEPT|ACCEPTING|ACCESSPOLICY|ACCORDING|ACOS|ACTIVATION|ACTUAL|ADD|ADD-CORRESPONDING|ADJACENT|AFTER|ALIAS|ALIASES|ALIGN|ALL|ALLOCATE|ALPHA|ANALYSIS|ANALYZER|AND|ANY|APPEND|APPENDAGE|APPENDING|APPLICATION|ARCHIVE|AREA|ARITHMETIC|AS|ASCENDING|ASIN|ASPECT|ASSERT|ASSIGN|ASSIGNED|ASSIGNING|ASSOCIATION|ASYNCHRONOUS|AT|ATAN|ATTRIBUTES|AUTHORITY|AUTHORITY-CHECK|AVG|BACK|BACKGROUND|BACKUP|BACKWARD|BADI|BASE|BEFORE|BEGIN|BETWEEN|BIG|BINARY|BINDING|BIT|BIT-AND|BIT-NOT|BIT-OR|BIT-XOR|BLACK|BLANK|BLANKS|BLOB|BLOCK|BLOCKS|BLUE|BOUND|BOUNDARIES|BOUNDS|BOXED|BREAK-POINT|BT|BUFFER|BY|BYPASSING|BYTE|BYTE-CA|BYTE-CN|BYTE-CO|BYTE-CS|BYTE-NA|BYTE-NS|BYTE-ORDER|C|CA|CALL|CALLING|CASE|CAST|CASTING|CATCH|CEIL|CENTER|CENTERED|CHAIN|CHAIN-INPUT|CHAIN-REQUEST|CHANGE|CHANGING|CHANNELS|CHAR-TO-HEX|CHARACTER|CHARLEN|CHECK|CHECKBOX|CIRCULAR|CI_|CLASS|CLASS-CODING|CLASS-DATA|CLASS-EVENTS|CLASS-METHODS|CLASS-POOL|CLEANUP|CLEAR|CLIENT|CLOB|CLOCK|CLOSE|CN|CNT|CO|COALESCE|CODE|CODING|COLLECT|COLOR|COLUMN|COLUMNS|COL_BACKGROUND|COL_GROUP|COL_HEADING|COL_KEY|COL_NEGATIVE|COL_NORMAL|COL_POSITIVE|COL_TOTAL|COMMENT|COMMENTS|COMMIT|COMMON|COMMUNICATION|COMPARING|COMPONENT|COMPONENTS|COMPRESSION|COMPUTE|CONCAT|CONCATENATE|COND|CONDENSE|CONDITION|CONNECT|CONNECTION|CONSTANTS|CONTEXT|CONTEXTS|CONTINUE|CONTROL|CONTROLS|CONV|CONVERSION|CONVERT|COPIES|COPY|CORRESPONDING|COS|COSH|COUNT|COUNTRY|COVER|CP|CPI|CREATE|CREATING|CRITICAL|CS|CURRENCY|CURRENCY_CONVERSION|CURRENT|CURSOR|CURSOR-SELECTION|CUSTOMER|CUSTOMER-FUNCTION|DANGEROUS|DATA|DATABASE|DATAINFO|DATASET|DATE|DAYLIGHT|DBMAXLEN|DD\/MM\/YY|DD\/MM\/YYYY|DDMMYY|DEALLOCATE|DECIMALS|DECIMAL_SHIFT|DECLARATIONS|DEEP|DEFAULT|DEFERRED|DEFINE|DEFINING|DEFINITION|DELETE|DELETING|DEMAND|DEPARTMENT|DESCENDING|DESCRIBE|DESTINATION|DETAIL|DIALOG|DIRECTORY|DISCONNECT|DISPLAY|DISPLAY-MODE|DISTANCE|DISTINCT|DIV|DIVIDE|DIVIDE-CORRESPONDING|DIVISION|DO|DUMMY|DUPLICATE|DUPLICATES|DURATION|DURING|DYNAMIC|DYNPRO|E|EACH|EDIT|EDITOR-CALL|ELSE|ELSEIF|EMPTY|ENABLED|ENABLING|ENCODING|END|END-ENHANCEMENT-SECTION|END-LINES|END-OF-DEFINITION|END-OF-FILE|END-OF-PAGE|END-OF-SELECTION|ENDAT|ENDCASE|ENDCATCH|ENDCHAIN|ENDCLASS|ENDDO|ENDENHANCEMENT|ENDEXEC|ENDFOR|ENDFORM|ENDFUNCTION|ENDIAN|ENDIF|ENDING|ENDINTERFACE|ENDLOOP|ENDMETHOD|ENDMODULE|ENDON|ENDPROVIDE|ENDSELECT|ENDTRY|ENDWHILE|ENGINEERING|ENHANCEMENT|ENHANCEMENT-POINT|ENHANCEMENT-SECTION|ENHANCEMENTS|ENTRIES|ENTRY|ENVIRONMENT|EQ|EQUAL|EQUIV|ERRORMESSAGE|ERRORS|ESCAPE|ESCAPING|EVENT|EVENTS|EXACT|EXCEPT|EXCEPTION|EXCEPTION-TABLE|EXCEPTIONS|EXCLUDE|EXCLUDING|EXEC|EXECUTE|EXISTS|EXIT|EXIT-COMMAND|EXP|EXPAND|EXPANDING|EXPIRATION|EXPLICIT|EXPONENT|EXPORT|EXPORTING|EXTEND|EXTENDED|EXTENSION|EXTRACT|FAIL|FETCH|FIELD|FIELD-GROUPS|FIELD-SYMBOL|FIELD-SYMBOLS|FIELDS|FILE|FILTER|FILTER-TABLE|FILTERS|FINAL|FIND|FIRST|FIRST-LINE|FIXED-POINT|FKEQ|FKGE|FLOOR|FLUSH|FONT|FOR|FORM|FORMAT|FORWARD|FOUND|FRAC|FRAME|FRAMES|FREE|FRIENDS|FROM|FUNCTION|FUNCTION-POOL|FUNCTIONALITY|FURTHER|GAPS|GE|GENERATE|GET|GIVING|GKEQ|GKGE|GLOBAL|GRANT|GREATER|GREEN|GROUP|GROUPS|GT|HANDLE|HANDLER|HARMLESS|HASHED|HAVING|HDB|HEAD-LINES|HEADER|HEADERS|HEADING|HELP-ID|HELP-REQUEST|HIDE|HIGH|HINT|HOLD|HOTSPOT|I|ICON|ID|IDENTIFICATION|IDENTIFIER|IDS|IF|IGNORE|IGNORING|IMMEDIATELY|IMPLEMENTATION|IMPLEMENTATIONS|IMPLEMENTED|IMPLICIT|IMPORT|IMPORTING|IN|INACTIVE|INCL|INCLUDE|INCLUDES|INCLUDING|INCREMENT|INDEX|INDEX-LINE|INFOTYPES|INHERITING|INIT|INITIAL|INITIALIZATION|INNER|INOUT|INPUT|INSERT|INSTANCES|INTENSIFIED|INTERFACE|INTERFACE-POOL|INTERFACES|INTERNAL|INTERVALS|INTO|INVERSE|INVERTED-DATE|IS|ISO|ITERATOR|ITNO|JOB|JOIN|KEEP|KEEPING|KERNEL|KEY|KEYS|KEYWORDS|KIND|LANGUAGE|LAST|LATE|LAYOUT|LE|LEADING|LEAVE|LEFT|LEFT-JUSTIFIED|LEFTPLUS|LEFTSPACE|LEGACY|LENGTH|LESS|LET|LEVEL|LEVELS|LIKE|LINE|LINE-COUNT|LINE-SELECTION|LINE-SIZE|LINEFEED|LINES|LIST|LIST-PROCESSING|LISTBOX|LITTLE|LLANG|LOAD|LOAD-OF-PROGRAM|LOB|LOCAL|LOCALE|LOCATOR|LOG|LOG-POINT|LOG10|LOGFILE|LOGICAL|LONG|LOOP|LOW|LOWER|LPAD|LPI|LT|M|MAIL|MAIN|MAJOR-ID|MAPPING|MARGIN|MARK|MASK|MATCH|MATCHCODE|MAX|MAXIMUM|MEDIUM|MEMBERS|MEMORY|MESH|MESSAGE|MESSAGE-ID|MESSAGES|MESSAGING|METHOD|METHODS|MIN|MINIMUM|MINOR-ID|MM\/DD\/YY|MM\/DD\/YYYY|MMDDYY|MOD|MODE|MODIF|MODIFIER|MODIFY|MODULE|MOVE|MOVE-CORRESPONDING|MULTIPLY|MULTIPLY-CORRESPONDING|NA|NAME|NAMETAB|NATIVE|NB|NE|NESTED|NESTING|NEW|NEW-LINE|NEW-PAGE|NEW-SECTION|NEXT|NO|NO-DISPLAY|NO-EXTENSION|NO-GAP|NO-GAPS|NO-GROUPING|NO-HEADING|NO-SCROLLING|NO-SIGN|NO-TITLE|NO-TOPOFPAGE|NO-ZERO|NODE|NODES|NON-UNICODE|NON-UNIQUE|NOT|NP|NS|NULL|NUMBER|NUMOFCHAR|O|OBJECT|OBJECTS|OBLIGATORY|OCCURRENCE|OCCURRENCES|OCCURS|OF|OFF|OFFSET|OLE|ON|ONLY|OPEN|OPTION|OPTIONAL|OPTIONS|OR|ORDER|OTHER|OTHERS|OUT|OUTER|OUTPUT|OUTPUT-LENGTH|OVERFLOW|OVERLAY|PACK|PACKAGE|PAD|PADDING|PAGE|PAGES|PARAMETER|PARAMETER-TABLE|PARAMETERS|PART|PARTIALLY|PATTERN|PERCENTAGE|PERFORM|PERFORMING|PERSON|PF|PF-STATUS|PINK|PLACES|POOL|POSITION|POS_HIGH|POS_LOW|PRAGMAS|PRECOMPILED|PREFERRED|PRESERVING|PRIMARY|PRINT|PRINT-CONTROL|PRIORITY|PRIVATE|PROCEDURE|PROCESS|PROGRAM|PROPERTY|PROTECTED|PROVIDE|PUBLIC|PUSHBUTTON|PUT|QUEUE-ONLY|QUICKINFO|RADIOBUTTON|RAISE|RAISING|RANGE|RANGES|RAW|READ|READ-ONLY|READER|RECEIVE|RECEIVED|RECEIVER|RECEIVING|RED|REDEFINITION|REDUCE|REDUCED|REF|REFERENCE|REFRESH|REGEX|REJECT|REMOTE|RENAMING|REPLACE|REPLACEMENT|REPLACING|REPORT|REQUEST|REQUESTED|RESERVE|RESET|RESOLUTION|RESPECTING|RESPONSIBLE|RESULT|RESULTS|RESUMABLE|RESUME|RETRY|RETURN|RETURNCODE|RETURNING|RIGHT|RIGHT-JUSTIFIED|RIGHTPLUS|RIGHTSPACE|RISK|RMC_COMMUNICATION_FAILURE|RMC_INVALID_STATUS|RMC_SYSTEM_FAILURE|ROLE|ROLLBACK|ROUND|ROWS|RTTI|RUN|SAP|SAP-SPOOL|SAVING|SCALE_PRESERVING|SCALE_PRESERVING_SCIENTIFIC|SCAN|SCIENTIFIC|SCIENTIFIC_WITH_LEADING_ZERO|SCREEN|SCROLL|SCROLL-BOUNDARY|SCROLLING|SEARCH|SECONDARY|SECONDS|SECTION|SELECT|SELECT-OPTIONS|SELECTION|SELECTION-SCREEN|SELECTION-SET|SELECTION-SETS|SELECTION-TABLE|SELECTIONS|SELECTOR|SEND|SEPARATE|SEPARATED|SET|SHARED|SHIFT|SHORT|SHORTDUMP-ID|SIGN|SIGN_AS_POSTFIX|SIMPLE|SIN|SINGLE|SINH|SIZE|SKIP|SKIPPING|SMART|SOME|SORT|SORTABLE|SORTED|SOURCE|SPACE|SPECIFIED|SPLIT|SPOOL|SPOTS|SQL|SQLSCRIPT|SQRT|STABLE|STAMP|STANDARD|START-OF-SELECTION|STARTING|STATE|STATEMENT|STATEMENTS|STATIC|STATICS|STATUSINFO|STEP-LOOP|STOP|STRLEN|STRUCTURE|STRUCTURES|STYLE|SUBKEY|SUBMATCHES|SUBMIT|SUBROUTINE|SUBSCREEN|SUBSTRING|SUBTRACT|SUBTRACT-CORRESPONDING|SUFFIX|SUM|SUMMARY|SUMMING|SUPPLIED|SUPPLY|SUPPRESS|SWITCH|SWITCHSTATES|SYMBOL|SYNCPOINTS|SYNTAX|SYNTAX-CHECK|SYNTAX-TRACE|SYSTEM-CALL|SYSTEM-EXCEPTIONS|SYSTEM-EXIT|TAB|TABBED|TABLE|TABLES|TABLEVIEW|TABSTRIP|TAN|TANH|TARGET|TASK|TASKS|TEST|TESTING|TEXT|TEXTPOOL|THEN|THROW|TIME|TIMES|TIMESTAMP|TIMEZONE|TITLE|TITLE-LINES|TITLEBAR|TO|TOKENIZATION|TOKENS|TOP-LINES|TOP-OF-PAGE|TRACE-FILE|TRACE-TABLE|TRAILING|TRANSACTION|TRANSFER|TRANSFORMATION|TRANSLATE|TRANSPORTING|TRMAC|TRUNC|TRUNCATE|TRUNCATION|TRY|TYPE|TYPE-POOL|TYPE-POOLS|TYPES|ULINE|UNASSIGN|UNDER|UNICODE|UNION|UNIQUE|UNIT|UNIT_CONVERSION|UNIX|UNPACK|UNTIL|UNWIND|UP|UPDATE|UPPER|USER|USER-COMMAND|USING|UTF-8|VALID|VALUE|VALUE-REQUEST|VALUES|VARY|VARYING|VERIFICATION-MESSAGE|VERSION|VIA|VIEW|VISIBLE|WAIT|WARNING|WHEN|WHENEVER|WHERE|WHILE|WIDTH|WINDOW|WINDOWS|WITH|WITH-HEADING|WITH-TITLE|WITHOUT|WORD|WORK|WRITE|WRITER|X|XML|XOR|XSD|XSTRLEN|YELLOW|YES|YYMMDD|Z|ZERO|ZONE)(?![\w-])/i,lookbehind:!0},number:/\b\d+\b/,operator:{pattern:/(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,lookbehind:!0},"string-operator":{pattern:/(\s)&&?(?=\s)/,lookbehind:!0,alias:"keyword"},"token-operator":[{pattern:/(\w)(?:->?|=>|[~|{}])(?=\w)/,lookbehind:!0,alias:"punctuation"},{pattern:/[|{}]/,alias:"punctuation"}],punctuation:/[,.:()]/}}Nn.displayName="abnf";Nn.aliases=[];function Nn(e){(function(t){var n="(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";t.languages.abnf={comment:/;.*/,string:{pattern:/(?:%[is])?"[^"\n\r]*"/,greedy:!0,inside:{punctuation:/^%[is]/}},range:{pattern:/%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,alias:"number"},terminal:{pattern:/%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,alias:"number"},repetition:{pattern:/(^|[^\w-])(?:\d*\*\d*|\d+)/,lookbehind:!0,alias:"operator"},definition:{pattern:/(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m,lookbehind:!0,alias:"keyword",inside:{punctuation:/<|>/}},"core-rule":{pattern:RegExp("(?:(^|[^<\\w-])"+n+"|<"+n+">)(?![\\w-])","i"),lookbehind:!0,alias:["rule","constant"],inside:{punctuation:/<|>/}},rule:{pattern:/(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i,lookbehind:!0,inside:{punctuation:/<|>/}},operator:/=\/?|\//,punctuation:/[()\[\]]/}})(e)}On.displayName="actionscript";On.aliases=[];function On(e){e.register(ie),e.languages.actionscript=e.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),e.languages.actionscript["class-name"].alias="function",delete e.languages.actionscript.parameter,delete e.languages.actionscript["literal-property"],e.languages.markup&&e.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:e.languages.markup}})}xn.displayName="ada";xn.aliases=[];function xn(e){e.languages.ada={comment:/--.*/,string:/"(?:""|[^"\r\f\n])*"/,number:[{pattern:/\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i},{pattern:/\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i}],attribute:{pattern:/\b'\w+/,alias:"attr-name"},keyword:/\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|new|not|null|of|or|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|return|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,boolean:/\b(?:false|true)\b/i,operator:/<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,punctuation:/\.\.?|[,;():]/,char:/'.'/,variable:/\b[a-z](?:\w)*\b/i}}Dn.displayName="agda";Dn.aliases=[];function Dn(e){(function(t){t.languages.agda={comment:/\{-[\s\S]*?(?:-\}|$)|--.*/,string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},punctuation:/[(){}⦃⦄.;@]/,"class-name":{pattern:/((?:data|record) +)\S+/,lookbehind:!0},function:{pattern:/(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m,lookbehind:!0},operator:{pattern:/(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/,lookbehind:!0},keyword:/\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/}})(e)}Ln.displayName="al";Ln.aliases=[];function Ln(e){e.languages.al={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,greedy:!0},function:{pattern:/(\b(?:event|procedure|trigger)\s+|(?:^|[^.])\.\s*)[a-z_]\w*(?=\s*\()/i,lookbehind:!0},keyword:[/\b(?:array|asserterror|begin|break|case|do|downto|else|end|event|exit|for|foreach|function|if|implements|in|indataset|interface|internal|local|of|procedure|program|protected|repeat|runonclient|securityfiltering|suppressdispose|temporary|then|to|trigger|until|var|while|with|withevents)\b/i,/\b(?:action|actions|addafter|addbefore|addfirst|addlast|area|assembly|chartpart|codeunit|column|controladdin|cuegroup|customizes|dataitem|dataset|dotnet|elements|enum|enumextension|extends|field|fieldattribute|fieldelement|fieldgroup|fieldgroups|fields|filter|fixed|grid|group|key|keys|label|labels|layout|modify|moveafter|movebefore|movefirst|movelast|page|pagecustomization|pageextension|part|profile|query|repeater|report|requestpage|schema|separator|systempart|table|tableelement|tableextension|textattribute|textelement|type|usercontrol|value|xmlport)\b/i],number:/\b(?:0x[\da-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)(?:F|LL?|U(?:LL?)?)?\b/i,boolean:/\b(?:false|true)\b/i,variable:/\b(?:Curr(?:FieldNo|Page|Report)|x?Rec|RequestOptionsPage)\b/,"class-name":/\b(?:automation|biginteger|bigtext|blob|boolean|byte|char|clienttype|code|completiontriggererrorlevel|connectiontype|database|dataclassification|datascope|date|dateformula|datetime|decimal|defaultlayout|dialog|dictionary|dotnetassembly|dotnettypedeclaration|duration|errorinfo|errortype|executioncontext|executionmode|fieldclass|fieldref|fieldtype|file|filterpagebuilder|guid|httpclient|httpcontent|httpheaders|httprequestmessage|httpresponsemessage|instream|integer|joker|jsonarray|jsonobject|jsontoken|jsonvalue|keyref|list|moduledependencyinfo|moduleinfo|none|notification|notificationscope|objecttype|option|outstream|pageresult|record|recordid|recordref|reportformat|securityfilter|sessionsettings|tableconnectiontype|tablefilter|testaction|testfield|testfilterfield|testpage|testpermissions|testrequestpage|text|textbuilder|textconst|textencoding|time|transactionmodel|transactiontype|variant|verbosity|version|view|views|webserviceactioncontext|webserviceactionresultcode|xmlattribute|xmlattributecollection|xmlcdata|xmlcomment|xmldeclaration|xmldocument|xmldocumenttype|xmlelement|xmlnamespacemanager|xmlnametable|xmlnode|xmlnodelist|xmlprocessinginstruction|xmlreadoptions|xmltext|xmlwriteoptions)\b/i,operator:/\.\.|:[=:]|[-+*/]=?|<>|[<>]=?|=|\b(?:and|div|mod|not|or|xor)\b/i,punctuation:/[()\[\]{}:.;,]/}}Mn.displayName="antlr4";Mn.aliases=["g4"];function Mn(e){e.languages.antlr4={comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,string:{pattern:/'(?:\\.|[^\\'\r\n])*'/,greedy:!0},"character-class":{pattern:/\[(?:\\.|[^\\\]\r\n])*\]/,greedy:!0,alias:"regex",inside:{range:{pattern:/([^[]|(?:^|[^\\])(?:\\\\)*\\\[)-(?!\])/,lookbehind:!0,alias:"punctuation"},escape:/\\(?:u(?:[a-fA-F\d]{4}|\{[a-fA-F\d]+\})|[pP]\{[=\w-]+\}|[^\r\nupP])/,punctuation:/[\[\]]/}},action:{pattern:/\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/,greedy:!0,inside:{content:{pattern:/(\{)[\s\S]+(?=\})/,lookbehind:!0},punctuation:/[{}]/}},command:{pattern:/(->\s*(?!\s))(?:\s*(?:,\s*)?\b[a-z]\w*(?:\s*\([^()\r\n]*\))?)+(?=\s*;)/i,lookbehind:!0,inside:{function:/\b\w+(?=\s*(?:[,(]|$))/,punctuation:/[,()]/}},annotation:{pattern:/@\w+(?:::\w+)*/,alias:"keyword"},label:{pattern:/#[ \t]*\w+/,alias:"punctuation"},keyword:/\b(?:catch|channels|finally|fragment|grammar|import|lexer|locals|mode|options|parser|returns|throws|tokens)\b/,definition:[{pattern:/\b[a-z]\w*(?=\s*:)/,alias:["rule","class-name"]},{pattern:/\b[A-Z]\w*(?=\s*:)/,alias:["token","constant"]}],constant:/\b[A-Z][A-Z_]*\b/,operator:/\.\.|->|[|~]|[*+?]\??/,punctuation:/[;:()=]/},e.languages.g4=e.languages.antlr4}Pn.displayName="apacheconf";Pn.aliases=[];function Pn(e){e.languages.apacheconf={comment:/#.*/,"directive-inline":{pattern:/(^[\t ]*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|Type|UserFile|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferedLogs|BufferSize|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CGIDScriptTimeout|CGIMapExtension|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DTracePrivileges|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtendedStatus|ExtFilterDefine|ExtFilterOptions|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|KeepAlive|KeepAliveTimeout|KeptBodySize|LanguagePriority|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|Limit(?:InternalRecursion|Request(?:Body|Fields|FieldSize|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|MMapFile|ModemStandard|ModMimeUsePathInfo|MultiviewsMatch|Mutex|NameVirtualHost|NoProxy|NWSSLTrustedCerts|NWSSLUpgradeable|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|RLimitCPU|RLimitMEM|RLimitNPROC|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|SSIEndTag|SSIErrorMsg|SSIETag|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|SRPUnknownUserSeed|SRPVerifierFile|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UserName|UseStapling|VerifyClient|VerifyDepth)|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadsPerChild|ThreadStackSize|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,lookbehind:!0,alias:"property"},"directive-block":{pattern:/<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b.*>/i,inside:{"directive-block":{pattern:/^<\/?\w+/,inside:{punctuation:/^<\/?/},alias:"tag"},"directive-block-parameter":{pattern:/.*[^>]/,inside:{punctuation:/:/,string:{pattern:/("|').*\1/,inside:{variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/}}},alias:"attr-value"},punctuation:/>/},alias:"tag"},"directive-flags":{pattern:/\[(?:[\w=],?)+\]/,alias:"keyword"},string:{pattern:/("|').*\1/,inside:{variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/}},variable:/[$%]\{?(?:\w\.?[-+:]?)+\}?/,regex:/\^?.*\$|\^.*\$?/}}dt.displayName="sql";dt.aliases=[];function dt(e){e.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/}}Fn.displayName="apex";Fn.aliases=[];function Fn(e){e.register(W),e.register(dt),(function(t){var n=/\b(?:(?:after|before)(?=\s+[a-z])|abstract|activate|and|any|array|as|asc|autonomous|begin|bigdecimal|blob|boolean|break|bulk|by|byte|case|cast|catch|char|class|collect|commit|const|continue|currency|date|datetime|decimal|default|delete|desc|do|double|else|end|enum|exception|exit|export|extends|final|finally|float|for|from|get(?=\s*[{};])|global|goto|group|having|hint|if|implements|import|in|inner|insert|instanceof|int|integer|interface|into|join|like|limit|list|long|loop|map|merge|new|not|null|nulls|number|object|of|on|or|outer|override|package|parallel|pragma|private|protected|public|retrieve|return|rollback|select|set|short|sObject|sort|static|string|super|switch|synchronized|system|testmethod|then|this|throw|time|transaction|transient|trigger|try|undelete|update|upsert|using|virtual|void|webservice|when|where|while|(?:inherited|with|without)\s+sharing)\b/i,r=/\b(?:(?=[a-z_]\w*\s*[<\[])|(?!<keyword>))[A-Z_]\w*(?:\s*\.\s*[A-Z_]\w*)*\b(?:\s*(?:\[\s*\]|<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>))*/.source.replace(/<keyword>/g,function(){return n.source});function a(o){return RegExp(o.replace(/<CLASS-NAME>/g,function(){return r}),"i")}var i={keyword:n,punctuation:/[()\[\]{};,:.<>]/};t.languages.apex={comment:t.languages.clike.comment,string:t.languages.clike.string,sql:{pattern:/((?:[=,({:]|\breturn)\s*)\[[^\[\]]*\]/i,lookbehind:!0,greedy:!0,alias:"language-sql",inside:t.languages.sql},annotation:{pattern:/@\w+\b/,alias:"punctuation"},"class-name":[{pattern:a(/(\b(?:class|enum|extends|implements|instanceof|interface|new|trigger\s+\w+\s+on)\s+)<CLASS-NAME>/.source),lookbehind:!0,inside:i},{pattern:a(/(\(\s*)<CLASS-NAME>(?=\s*\)\s*[\w(])/.source),lookbehind:!0,inside:i},{pattern:a(/<CLASS-NAME>(?=\s*\w+\s*[;=,(){:])/.source),inside:i}],trigger:{pattern:/(\btrigger\s+)\w+\b/i,lookbehind:!0,alias:"class-name"},keyword:n,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/i,number:/(?:\B\.\d+|\b\d+(?:\.\d+|L)?)\b/i,operator:/[!=](?:==?)?|\?\.?|&&|\|\||--|\+\+|[-+*/^&|]=?|:|<<?=?|>{1,3}=?/,punctuation:/[()\[\]{};,.]/}})(e)}Bn.displayName="apl";Bn.aliases=[];function Bn(e){e.languages.apl={comment:/(?:⍝|#[! ]).*$/m,string:{pattern:/'(?:[^'\r\n]|'')*'/,greedy:!0},number:/¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+)?|¯|∞))?/i,statement:/:[A-Z][a-z][A-Za-z]*\b/,"system-function":{pattern:/⎕[A-Z]+/i,alias:"function"},constant:/[⍬⌾#⎕⍞]/,function:/[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,"monadic-operator":{pattern:/[\\\/⌿⍀¨⍨⌶&∥]/,alias:"operator"},"dyadic-operator":{pattern:/[.⍣⍠⍤∘⌸@⌺⍥]/,alias:"operator"},assignment:{pattern:/←/,alias:"keyword"},punctuation:/[\[;\]()◇⋄]/,dfn:{pattern:/[{}⍺⍵⍶⍹∇⍫:]/,alias:"builtin"}}}Un.displayName="applescript";Un.aliases=[];function Un(e){e.languages.applescript={comment:[/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,/--.+/,/#.+/],string:/"(?:\\.|[^"\\\r\n])*"/,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e-?\d+)?\b/i,operator:[/[&=≠≤≥*+\-\/÷^]|[<>]=?/,/\b(?:(?:begin|end|start)s? with|(?:contains?|(?:does not|doesn't) contain)|(?:is|isn't|is not) (?:contained by|in)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:comes|(?:does not|doesn't) come) (?:after|before)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equal to|equals|is not|isn't)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|as|div|mod|not|or))\b/],keyword:/\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,"class-name":/\b(?:POSIX file|RGB color|alias|application|boolean|centimeters|centimetres|class|constant|cubic centimeters|cubic centimetres|cubic feet|cubic inches|cubic meters|cubic metres|cubic yards|date|degrees Celsius|degrees Fahrenheit|degrees Kelvin|feet|file|gallons|grams|inches|integer|kilograms|kilometers|kilometres|list|liters|litres|meters|metres|miles|number|ounces|pounds|quarts|real|record|reference|script|square feet|square kilometers|square kilometres|square meters|square metres|square miles|square yards|text|yards)\b/,punctuation:/[{}():,¬«»《》]/}}Gn.displayName="aql";Gn.aliases=[];function Gn(e){e.languages.aql={comment:/\/\/.*|\/\*[\s\S]*?\*\//,property:{pattern:/([{,]\s*)(?:(?!\d)\w+|(["'´`])(?:(?!\2)[^\\\r\n]|\\.)*\2)(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\.)*\1/,greedy:!0},identifier:{pattern:/([´`])(?:(?!\1)[^\\\r\n]|\\.)*\1/,greedy:!0},variable:/@@?\w+/,keyword:[{pattern:/(\bWITH\s+)COUNT(?=\s+INTO\b)/i,lookbehind:!0},/\b(?:AGGREGATE|ALL|AND|ANY|ASC|COLLECT|DESC|DISTINCT|FILTER|FOR|GRAPH|IN|INBOUND|INSERT|INTO|K_PATHS|K_SHORTEST_PATHS|LET|LIKE|LIMIT|NONE|NOT|NULL|OR|OUTBOUND|REMOVE|REPLACE|RETURN|SHORTEST_PATH|SORT|UPDATE|UPSERT|WINDOW|WITH)\b/i,{pattern:/(^|[^\w.[])(?:KEEP|PRUNE|SEARCH|TO)\b/i,lookbehind:!0},{pattern:/(^|[^\w.[])(?:CURRENT|NEW|OLD)\b/,lookbehind:!0},{pattern:/\bOPTIONS(?=\s*\{)/i}],function:/\b(?!\d)\w+(?=\s*\()/,boolean:/\b(?:false|true)\b/i,range:{pattern:/\.\./,alias:"operator"},number:[/\b0b[01]+/i,/\b0x[0-9a-f]+/i,/(?:\B\.\d+|\b(?:0|[1-9]\d*)(?:\.\d+)?)(?:e[+-]?\d+)?/i],operator:/\*{2,}|[=!]~|[!=<>]=?|&&|\|\||[-+*/%]/,punctuation:/::|[?.:,;()[\]{}]/}}Ae.displayName="c";Ae.aliases=[];function Ae(e){e.register(W),e.languages.c=e.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),e.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),e.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},e.languages.c.string],char:e.languages.c.char,comment:e.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:e.languages.c}}}}),e.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete e.languages.c.boolean}ze.displayName="cpp";ze.aliases=[];function ze(e){e.register(Ae),(function(t){var n=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,r=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return n.source});t.languages.cpp=t.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return n.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:n,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),t.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return r})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),t.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t.languages.cpp}}}}),t.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),t.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:t.languages.extend("cpp",{})}}),t.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},t.languages.cpp["base-clause"])})(e)}Hn.displayName="arduino";Hn.aliases=["ino"];function Hn(e){e.register(ze),e.languages.arduino=e.languages.extend("cpp",{keyword:/\b(?:String|array|bool|boolean|break|byte|case|catch|continue|default|do|double|else|finally|for|function|goto|if|in|instanceof|int|integer|long|loop|new|null|return|setup|string|switch|throw|try|void|while|word)\b/,constant:/\b(?:ANALOG_MESSAGE|DEFAULT|DIGITAL_MESSAGE|EXTERNAL|FIRMATA_STRING|HIGH|INPUT|INPUT_PULLUP|INTERNAL|INTERNAL1V1|INTERNAL2V56|LED_BUILTIN|LOW|OUTPUT|REPORT_ANALOG|REPORT_DIGITAL|SET_PIN_MODE|SYSEX_START|SYSTEM_RESET)\b/,builtin:/\b(?:Audio|BSSID|Bridge|Client|Console|EEPROM|Esplora|EsploraTFT|Ethernet|EthernetClient|EthernetServer|EthernetUDP|File|FileIO|FileSystem|Firmata|GPRS|GSM|GSMBand|GSMClient|GSMModem|GSMPIN|GSMScanner|GSMServer|GSMVoiceCall|GSM_SMS|HttpClient|IPAddress|IRread|Keyboard|KeyboardController|LiquidCrystal|LiquidCrystal_I2C|Mailbox|Mouse|MouseController|PImage|Process|RSSI|RobotControl|RobotMotor|SD|SPI|SSID|Scheduler|Serial|Server|Servo|SoftwareSerial|Stepper|Stream|TFT|Task|USBHost|WiFi|WiFiClient|WiFiServer|WiFiUDP|Wire|YunClient|YunServer|abs|addParameter|analogRead|analogReadResolution|analogReference|analogWrite|analogWriteResolution|answerCall|attach|attachGPRS|attachInterrupt|attached|autoscroll|available|background|beep|begin|beginPacket|beginSD|beginSMS|beginSpeaker|beginTFT|beginTransmission|beginWrite|bit|bitClear|bitRead|bitSet|bitWrite|blink|blinkVersion|buffer|changePIN|checkPIN|checkPUK|checkReg|circle|cityNameRead|cityNameWrite|clear|clearScreen|click|close|compassRead|config|connect|connected|constrain|cos|countryNameRead|countryNameWrite|createChar|cursor|debugPrint|delay|delayMicroseconds|detach|detachInterrupt|digitalRead|digitalWrite|disconnect|display|displayLogos|drawBMP|drawCompass|encryptionType|end|endPacket|endSMS|endTransmission|endWrite|exists|exitValue|fill|find|findUntil|flush|gatewayIP|get|getAsynchronously|getBand|getButton|getCurrentCarrier|getIMEI|getKey|getModifiers|getOemKey|getPINUsed|getResult|getSignalStrength|getSocket|getVoiceCallStatus|getXChange|getYChange|hangCall|height|highByte|home|image|interrupts|isActionDone|isDirectory|isListening|isPIN|isPressed|isValid|keyPressed|keyReleased|keyboardRead|knobRead|leftToRight|line|lineFollowConfig|listen|listenOnLocalhost|loadImage|localIP|lowByte|macAddress|maintain|map|max|messageAvailable|micros|millis|min|mkdir|motorsStop|motorsWrite|mouseDragged|mouseMoved|mousePressed|mouseReleased|move|noAutoscroll|noBlink|noBuffer|noCursor|noDisplay|noFill|noInterrupts|noListenOnLocalhost|noStroke|noTone|onReceive|onRequest|open|openNextFile|overflow|parseCommand|parseFloat|parseInt|parsePacket|pauseMode|peek|pinMode|playFile|playMelody|point|pointTo|position|pow|prepare|press|print|printFirmwareVersion|printVersion|println|process|processInput|pulseIn|put|random|randomSeed|read|readAccelerometer|readBlue|readButton|readBytes|readBytesUntil|readGreen|readJoystickButton|readJoystickSwitch|readJoystickX|readJoystickY|readLightSensor|readMessage|readMicrophone|readNetworks|readRed|readSlider|readString|readStringUntil|readTemperature|ready|rect|release|releaseAll|remoteIP|remoteNumber|remotePort|remove|requestFrom|retrieveCallingNumber|rewindDirectory|rightToLeft|rmdir|robotNameRead|robotNameWrite|run|runAsynchronously|runShellCommand|runShellCommandAsynchronously|running|scanNetworks|scrollDisplayLeft|scrollDisplayRight|seek|sendAnalog|sendDigitalPortPair|sendDigitalPorts|sendString|sendSysex|serialEvent|setBand|setBitOrder|setClockDivider|setCursor|setDNS|setDataMode|setFirmwareVersion|setMode|setPINUsed|setSpeed|setTextSize|setTimeout|shiftIn|shiftOut|shutdown|sin|size|sqrt|startLoop|step|stop|stroke|subnetMask|switchPIN|tan|tempoWrite|text|tone|transfer|tuneWrite|turn|updateIR|userNameRead|userNameWrite|voiceCall|waitContinue|width|write|writeBlue|writeGreen|writeJSON|writeMessage|writeMicroseconds|writeRGB|writeRed|yield)\b/}),e.languages.ino=e.languages.arduino}$n.displayName="arff";$n.aliases=[];function $n(e){e.languages.arff={comment:/%.*/,string:{pattern:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/@(?:attribute|data|end|relation)\b/i,number:/\b\d+(?:\.\d+)?\b/,punctuation:/[{},]/}}zn.displayName="armasm";zn.aliases=["arm-asm"];function zn(e){e.languages.armasm={comment:{pattern:/;.*/,greedy:!0},string:{pattern:/"(?:[^"\r\n]|"")*"/,greedy:!0,inside:{variable:{pattern:/((?:^|[^$])(?:\${2})*)\$\w+/,lookbehind:!0}}},char:{pattern:/'(?:[^'\r\n]{0,4}|'')'/,greedy:!0},"version-symbol":{pattern:/\|[\w@]+\|/,greedy:!0,alias:"property"},boolean:/\b(?:FALSE|TRUE)\b/,directive:{pattern:/\b(?:ALIAS|ALIGN|AREA|ARM|ASSERT|ATTR|CN|CODE|CODE16|CODE32|COMMON|CP|DATA|DCB|DCD|DCDO|DCDU|DCFD|DCFDU|DCI|DCQ|DCQU|DCW|DCWU|DN|ELIF|ELSE|END|ENDFUNC|ENDIF|ENDP|ENTRY|EQU|EXPORT|EXPORTAS|EXTERN|FIELD|FILL|FN|FUNCTION|GBLA|GBLL|GBLS|GET|GLOBAL|IF|IMPORT|INCBIN|INCLUDE|INFO|KEEP|LCLA|LCLL|LCLS|LTORG|MACRO|MAP|MEND|MEXIT|NOFP|OPT|PRESERVE8|PROC|QN|READONLY|RELOC|REQUIRE|REQUIRE8|RLIST|ROUT|SETA|SETL|SETS|SN|SPACE|SUBT|THUMB|THUMBX|TTL|WEND|WHILE)\b/,alias:"property"},instruction:{pattern:/((?:^|(?:^|[^\\])(?:\r\n?|\n))[ \t]*(?:(?:[A-Z][A-Z0-9_]*[a-z]\w*|[a-z]\w*|\d+)[ \t]+)?)\b[A-Z.]+\b/,lookbehind:!0,alias:"keyword"},variable:/\$\w+/,number:/(?:\b[2-9]_\d+|(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e-?\d+)?|\b0(?:[fd]_|x)[0-9a-f]+|&[0-9a-f]+)\b/i,register:{pattern:/\b(?:r\d|lr)\b/,alias:"symbol"},operator:/<>|<<|>>|&&|\|\||[=!<>/]=?|[+\-*%#?&|^]|:[A-Z]+:/,punctuation:/[()[\],]/},e.languages["arm-asm"]=e.languages.armasm}Ot.displayName="bash";Ot.aliases=["sh","shell"];function Ot(e){(function(t){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",r={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:r,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:r}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},r.inside=t.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=a.variable[1].inside,s=0;s<i.length;s++)o[i[s]]=t.languages.bash[i[s]];t.languages.sh=t.languages.bash,t.languages.shell=t.languages.bash})(e)}xt.displayName="yaml";xt.aliases=["yml"];function xt(e){(function(t){var n=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+r.source+"(?:[ 	]+"+n.source+")?|"+n.source+"(?:[ 	]+"+r.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),o=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(u,l){l=(l||"").replace(/m/g,"")+"m";var c=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<value>>/g,function(){return u});return RegExp(c,l)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return a})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return a}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+o+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(o),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml})(e)}Wn.displayName="markdown";Wn.aliases=["md"];function Wn(e){e.register(re),(function(t){var n=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function r(s){return s=s.replace(/<inner>/g,function(){return n}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+s+")")}var a=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return a}),o=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;t.languages.markdown=t.languages.extend("markup",{}),t.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:t.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+o+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+o+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(a),inside:t.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+o+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(a),alias:"important",inside:t.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:r(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:r(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:r(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:r(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(s){["url","bold","italic","strike","code-snippet"].forEach(function(u){s!==u&&(t.languages.markdown[s].inside.content.inside[u]=t.languages.markdown[u])})}),t.hooks.add("after-tokenize",function(s){if(s.language!=="markdown"&&s.language!=="md")return;function u(l){if(!(!l||typeof l=="string"))for(var c=0,d=l.length;c<d;c++){var m=l[c];if(m.type!=="code"){u(m.content);continue}var p=m.content[1],h=m.content[3];if(p&&h&&p.type==="code-language"&&h.type==="code-block"&&typeof p.content=="string"){var E=p.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");E=(/[a-z][\w-]*/i.exec(E)||[""])[0].toLowerCase();var S="language-"+E;h.alias?typeof h.alias=="string"?h.alias=[h.alias,S]:h.alias.push(S):h.alias=[S]}}}u(s.tokens)}),t.hooks.add("wrap",function(s){if(s.type==="code-block"){for(var u="",l=0,c=s.classes.length;l<c;l++){var d=s.classes[l],m=/language-(.+)/.exec(d);if(m){u=m[1];break}}var p=t.languages[u];if(p)s.content=t.highlight(s.content.value,p,u);else if(u&&u!=="none"&&t.plugins.autoloader){var h="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);s.attributes.id=h,t.plugins.autoloader.loadLanguages(u,function(){var E=document.getElementById(h);E&&(E.innerHTML=t.highlight(E.textContent,t.languages[u],u))})}}}),RegExp(t.languages.markup.tag.pattern.source,"gi"),t.languages.md=t.languages.markdown})(e)}Vn.displayName="arturo";Vn.aliases=["art"];function Vn(e){(function(t){var n=function(r,a){return{pattern:RegExp(/\{!/.source+"(?:"+(a||r)+")"+/$[\s\S]*\}/.source,"m"),greedy:!0,inside:{embedded:{pattern:/(^\{!\w+\b)[\s\S]+(?=\}$)/,lookbehind:!0,alias:"language-"+r,inside:t.languages[r]},string:/[\s\S]+/}}};t.languages.arturo={comment:{pattern:/;.*/,greedy:!0},character:{pattern:/`.`/,alias:"char",greedy:!0},number:{pattern:/\b\d+(?:\.\d+(?:\.\d+(?:-[\w+-]+)?)?)?\b/},string:{pattern:/"(?:[^"\\\r\n]|\\.)*"/,greedy:!0},regex:{pattern:/\{\/.*?\/\}/,greedy:!0},"html-string":n("html"),"css-string":n("css"),"js-string":n("js"),"md-string":n("md"),"sql-string":n("sql"),"sh-string":n("shell","sh"),multistring:{pattern:/».*|\{:[\s\S]*?:\}|\{[\s\S]*?\}|^-{6}$[\s\S]*/m,alias:"string",greedy:!0},label:{pattern:/\w+\b\??:/,alias:"property"},literal:{pattern:/'(?:\w+\b\??:?)/,alias:"constant"},type:{pattern:/:(?:\w+\b\??:?)/,alias:"class-name"},color:/#\w+/,predicate:{pattern:/\b(?:all|and|any|ascii|attr|attribute|attributeLabel|binary|block|char|contains|database|date|dictionary|empty|equal|even|every|exists|false|floating|function|greater|greaterOrEqual|if|in|inline|integer|is|key|label|leap|less|lessOrEqual|literal|logical|lower|nand|negative|nor|not|notEqual|null|numeric|odd|or|path|pathLabel|positive|prefix|prime|regex|same|set|some|sorted|standalone|string|subset|suffix|superset|symbol|symbolLiteral|true|try|type|unless|upper|when|whitespace|word|xnor|xor|zero)\?/,alias:"keyword"},"builtin-function":{pattern:/\b(?:abs|acos|acosh|acsec|acsech|actan|actanh|add|after|alert|alias|and|angle|append|arg|args|arity|array|as|asec|asech|asin|asinh|atan|atan2|atanh|attr|attrs|average|before|benchmark|blend|break|call|capitalize|case|ceil|chop|clear|clip|close|color|combine|conj|continue|copy|cos|cosh|crc|csec|csech|ctan|ctanh|cursor|darken|dec|decode|define|delete|desaturate|deviation|dialog|dictionary|difference|digest|digits|div|do|download|drop|dup|e|else|empty|encode|ensure|env|escape|execute|exit|exp|extend|extract|factors|fdiv|filter|first|flatten|floor|fold|from|function|gamma|gcd|get|goto|hash|hypot|if|inc|indent|index|infinity|info|input|insert|inspect|intersection|invert|jaro|join|keys|kurtosis|last|let|levenshtein|lighten|list|ln|log|loop|lower|mail|map|match|max|median|min|mod|module|mul|nand|neg|new|nor|normalize|not|now|null|open|or|outdent|pad|palette|panic|path|pause|permissions|permutate|pi|pop|popup|pow|powerset|powmod|prefix|print|prints|process|product|query|random|range|read|relative|remove|rename|render|repeat|replace|request|return|reverse|round|sample|saturate|script|sec|sech|select|serve|set|shl|shr|shuffle|sin|sinh|size|skewness|slice|sort|spin|split|sqrt|squeeze|stack|strip|sub|suffix|sum|switch|symbols|symlink|sys|take|tan|tanh|terminal|terminate|to|truncate|try|type|unclip|union|unique|unless|until|unzip|upper|values|var|variance|volume|webview|while|with|wordwrap|write|xnor|xor|zip)\b/,alias:"keyword"},sugar:{pattern:/->|=>|\||::/,alias:"operator"},punctuation:/[()[\],]/,symbol:{pattern:/<:|-:|ø|@|#|\+|\||\*|\$|---|-|%|\/|\.\.|\^|~|=|<|>|\\/},boolean:{pattern:/\b(?:false|maybe|true)\b/}},t.languages.art=t.languages.arturo})(e)}jn.displayName="asciidoc";jn.aliases=["adoc"];function jn(e){(function(t){var n={pattern:/(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\[\]\\]|\\.)*\]|[^\[\]\\"'$`]|\\.)*\]/m,lookbehind:!0,inside:{quoted:{pattern:/([$`])(?:(?!\1)[^\\]|\\.)*\1/,inside:{punctuation:/^[$`]|[$`]$/}},interpreted:{pattern:/'(?:[^'\\]|\\.)*'/,inside:{punctuation:/^'|'$/}},string:/"(?:[^"\\]|\\.)*"/,variable:/\w+(?==)/,punctuation:/^\[|\]$|,/,operator:/=/,"attr-value":/(?!^\s+$).+/}},r=t.languages.asciidoc={"comment-block":{pattern:/^(\/{4,})$[\s\S]*?^\1/m,alias:"comment"},table:{pattern:/^\|={3,}(?:(?:\r?\n|\r(?!\n)).*)*?(?:\r?\n|\r)\|={3,}$/m,inside:{specifiers:{pattern:/(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*](?:[<^>](?:\.[<^>])?|\.[<^>])?|[<^>](?:\.[<^>])?|\.[<^>])[a-z]*|[a-z]+)(?=\|)/,alias:"attr-value"},punctuation:{pattern:/(^|[^\\])[|!]=*/,lookbehind:!0}}},"passthrough-block":{pattern:/^(\+{4,})$[\s\S]*?^\1$/m,inside:{punctuation:/^\++|\++$/}},"literal-block":{pattern:/^(-{4,}|\.{4,})$[\s\S]*?^\1$/m,inside:{punctuation:/^(?:-+|\.+)|(?:-+|\.+)$/}},"other-block":{pattern:/^(--|\*{4,}|_{4,}|={4,})$[\s\S]*?^\1$/m,inside:{punctuation:/^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/}},"list-punctuation":{pattern:/(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,lookbehind:!0,alias:"punctuation"},"list-label":{pattern:/(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,lookbehind:!0,alias:"symbol"},"indented-block":{pattern:/((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,lookbehind:!0},comment:/^\/\/.*/m,title:{pattern:/^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} .+|^\.(?![\s.]).*/m,alias:"important",inside:{punctuation:/^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/}},"attribute-entry":{pattern:/^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,alias:"tag"},attributes:n,hr:{pattern:/^'{3,}$/m,alias:"punctuation"},"page-break":{pattern:/^<{3,}$/m,alias:"punctuation"},admonition:{pattern:/^(?:CAUTION|IMPORTANT|NOTE|TIP|WARNING):/m,alias:"keyword"},callout:[{pattern:/(^[ \t]*)<?\d*>/m,lookbehind:!0,alias:"symbol"},{pattern:/<\d+>/,alias:"symbol"}],macro:{pattern:/\b[a-z\d][a-z\d-]*::?(?:[^\s\[\]]*\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:{function:/^[a-z\d-]+(?=:)/,punctuation:/^::?/,attributes:{pattern:/(?:\[(?:[^\]\\"']|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,inside:n.inside}}},inline:{pattern:/(^|[^\\])(?:(?:\B\[(?:[^\]\\"']|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?:[^`'\s]|\s+\S)+['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"']|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,lookbehind:!0,inside:{attributes:n,url:{pattern:/^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,inside:{punctuation:/^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/}},"attribute-ref":{pattern:/^\{.+\}$/,inside:{variable:{pattern:/(^\{)[a-z\d,+_-]+/,lookbehind:!0},operator:/^[=?!#%@$]|!(?=[:}])/,punctuation:/^\{|\}$|::?/}},italic:{pattern:/^(['_])[\s\S]+\1$/,inside:{punctuation:/^(?:''?|__?)|(?:''?|__?)$/}},bold:{pattern:/^\*[\s\S]+\*$/,inside:{punctuation:/^\*\*?|\*\*?$/}},punctuation:/^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/}},replacement:{pattern:/\((?:C|R|TM)\)/,alias:"builtin"},entity:/&#?[\da-z]{1,8};/i,"line-continuation":{pattern:/(^| )\+$/m,lookbehind:!0,alias:"punctuation"}};function a(i){i=i.split(" ");for(var o={},s=0,u=i.length;s<u;s++)o[i[s]]=r[i[s]];return o}n.inside.interpreted.inside.rest=a("macro inline replacement entity"),r["passthrough-block"].inside.rest=a("macro"),r["literal-block"].inside.rest=a("callout"),r.table.inside.rest=a("comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation"),r["other-block"].inside.rest=a("table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation"),r.title.inside.rest=a("macro inline replacement entity"),t.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.value.replace(/&amp;/,"&"))}),t.languages.adoc=t.languages.asciidoc})(e)}We.displayName="csharp";We.aliases=["cs","dotnet"];function We(e){e.register(W),(function(t){function n(f,q){return f.replace(/<<(\d+)>>/g,function(J,b){return"(?:"+q[+b]+")"})}function r(f,q,J){return RegExp(n(f,q),"")}function a(f,q){for(var J=0;J<q;J++)f=f.replace(/<<self>>/g,function(){return"(?:"+f+")"});return f.replace(/<<self>>/g,"[^\\s\\S]")}var i={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function o(f){return"\\b(?:"+f.trim().replace(/ /g,"|")+")\\b"}var s=o(i.typeDeclaration),u=RegExp(o(i.type+" "+i.typeDeclaration+" "+i.contextual+" "+i.other)),l=o(i.typeDeclaration+" "+i.contextual+" "+i.other),c=o(i.type+" "+i.typeDeclaration+" "+i.other),d=a(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),m=a(/\((?:[^()]|<<self>>)*\)/.source,2),p=/@?\b[A-Za-z_]\w*\b/.source,h=n(/<<0>>(?:\s*<<1>>)?/.source,[p,d]),E=n(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[l,h]),S=/\[\s*(?:,\s*)*\]/.source,y=n(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[E,S]),I=n(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[d,m,S]),T=n(/\(<<0>>+(?:,<<0>>+)+\)/.source,[I]),k=n(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[T,E,S]),O={keyword:u,punctuation:/[<>()?,.:[\]]/},A=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,M=/"(?:\\.|[^\\"\r\n])*"/.source,P=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;t.languages.csharp=t.languages.extend("clike",{string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[P]),lookbehind:!0,greedy:!0},{pattern:r(/(^|[^@$\\])<<0>>/.source,[M]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[E]),lookbehind:!0,inside:O},{pattern:r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[p,k]),lookbehind:!0,inside:O},{pattern:r(/(\busing\s+)<<0>>(?=\s*=)/.source,[p]),lookbehind:!0},{pattern:r(/(\b<<0>>\s+)<<1>>/.source,[s,h]),lookbehind:!0,inside:O},{pattern:r(/(\bcatch\s*\(\s*)<<0>>/.source,[E]),lookbehind:!0,inside:O},{pattern:r(/(\bwhere\s+)<<0>>/.source,[p]),lookbehind:!0},{pattern:r(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[y]),lookbehind:!0,inside:O},{pattern:r(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[k,c,p]),inside:O}],keyword:u,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),t.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),t.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:r(/([(,]\s*)<<0>>(?=\s*:)/.source,[p]),lookbehind:!0,alias:"punctuation"}}),t.languages.insertBefore("csharp","class-name",{namespace:{pattern:r(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[p]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:r(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[m]),lookbehind:!0,alias:"class-name",inside:O},"return-type":{pattern:r(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[k,E]),inside:O,alias:"class-name"},"constructor-invocation":{pattern:r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[k]),lookbehind:!0,inside:O,alias:"class-name"},"generic-method":{pattern:r(/<<0>>\s*<<1>>(?=\s*\()/.source,[p,d]),inside:{function:r(/^<<0>>/.source,[p]),generic:{pattern:RegExp(d),alias:"class-name",inside:O}}},"type-list":{pattern:r(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[s,h,p,k,u.source,m,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:r(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[h,m]),lookbehind:!0,greedy:!0,inside:t.languages.csharp},keyword:u,"class-name":{pattern:RegExp(k),greedy:!0,inside:O},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var B=M+"|"+A,F=n(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[B]),C=a(n(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[F]),2),_=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,D=n(/<<0>>(?:\s*\(<<1>>*\))?/.source,[E,C]);t.languages.insertBefore("csharp","class-name",{attribute:{pattern:r(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[_,D]),lookbehind:!0,greedy:!0,inside:{target:{pattern:r(/^<<0>>(?=\s*:)/.source,[_]),alias:"keyword"},"attribute-arguments":{pattern:r(/\(<<0>>*\)/.source,[C]),inside:t.languages.csharp},"class-name":{pattern:RegExp(E),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var L=/:[^}\r\n]+/.source,R=a(n(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[F]),2),$=n(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[R,L]),z=a(n(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[B]),2),Z=n(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[z,L]);function Q(f,q){return{interpolation:{pattern:r(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[f]),lookbehind:!0,inside:{"format-string":{pattern:r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[q,L]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:t.languages.csharp}}},string:/[\s\S]+/}}t.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:r(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[$]),lookbehind:!0,greedy:!0,inside:Q($,R)},{pattern:r(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[Z]),lookbehind:!0,greedy:!0,inside:Q(Z,z)}],char:{pattern:RegExp(A),greedy:!0}}),t.languages.dotnet=t.languages.cs=t.languages.csharp})(e)}qn.displayName="aspnet";qn.aliases=[];function qn(e){e.register(We),e.register(re),e.languages.aspnet=e.languages.extend("markup",{"page-directive":{pattern:/<%\s*@.*%>/,alias:"tag",inside:{"page-directive":{pattern:/<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,alias:"tag"},rest:e.languages.markup.tag.inside}},directive:{pattern:/<%.*%>/,alias:"tag",inside:{directive:{pattern:/<%\s*?[$=%#:]{0,2}|%>/,alias:"tag"},rest:e.languages.csharp}}}),e.languages.aspnet.tag.pattern=/<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,e.languages.insertBefore("inside","punctuation",{directive:e.languages.aspnet.directive},e.languages.aspnet.tag.inside["attr-value"]),e.languages.insertBefore("aspnet","comment",{"asp-comment":{pattern:/<%--[\s\S]*?--%>/,alias:["asp","comment"]}}),e.languages.insertBefore("aspnet",e.languages.javascript?"script":"tag",{"asp-script":{pattern:/(<script(?=.*runat=['"]?server\b)[^>]*>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,alias:["asp","script"],inside:e.languages.csharp||{}}})}Yn.displayName="asm6502";Yn.aliases=[];function Yn(e){e.languages.asm6502={comment:/;.*/,directive:{pattern:/\.\w+(?= )/,alias:"property"},string:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,"op-code":{pattern:/\b(?:ADC|AND|ASL|BCC|BCS|BEQ|BIT|BMI|BNE|BPL|BRK|BVC|BVS|CLC|CLD|CLI|CLV|CMP|CPX|CPY|DEC|DEX|DEY|EOR|INC|INX|INY|JMP|JSR|LDA|LDX|LDY|LSR|NOP|ORA|PHA|PHP|PLA|PLP|ROL|ROR|RTI|RTS|SBC|SEC|SED|SEI|STA|STX|STY|TAX|TAY|TSX|TXA|TXS|TYA|adc|and|asl|bcc|bcs|beq|bit|bmi|bne|bpl|brk|bvc|bvs|clc|cld|cli|clv|cmp|cpx|cpy|dec|dex|dey|eor|inc|inx|iny|jmp|jsr|lda|ldx|ldy|lsr|nop|ora|pha|php|pla|plp|rol|ror|rti|rts|sbc|sec|sed|sei|sta|stx|sty|tax|tay|tsx|txa|txs|tya)\b/,alias:"keyword"},"hex-number":{pattern:/#?\$[\da-f]{1,4}\b/i,alias:"number"},"binary-number":{pattern:/#?%[01]+\b/,alias:"number"},"decimal-number":{pattern:/#?\b\d+\b/,alias:"number"},register:{pattern:/\b[xya]\b/i,alias:"variable"},punctuation:/[(),:]/}}Kn.displayName="asmatmel";Kn.aliases=[];function Kn(e){e.languages.asmatmel={comment:{pattern:/;.*/,greedy:!0},string:{pattern:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},constant:/\b(?:PORT[A-Z]|DDR[A-Z]|(?:DD|P)[A-Z](?:\d|[0-2]\d|3[01]))\b/,directive:{pattern:/\.\w+(?= )/,alias:"property"},"r-register":{pattern:/\br(?:\d|[12]\d|3[01])\b/,alias:"variable"},"op-code":{pattern:/\b(?:ADC|ADD|ADIW|AND|ANDI|ASR|BCLR|BLD|BRBC|BRBS|BRCC|BRCS|BREAK|BREQ|BRGE|BRHC|BRHS|BRID|BRIE|BRLO|BRLT|BRMI|BRNE|BRPL|BRSH|BRTC|BRTS|BRVC|BRVS|BSET|BST|CALL|CBI|CBR|CLC|CLH|CLI|CLN|CLR|CLS|CLT|CLV|CLZ|COM|CP|CPC|CPI|CPSE|DEC|DES|EICALL|EIJMP|ELPM|EOR|FMUL|FMULS|FMULSU|ICALL|IJMP|IN|INC|JMP|LAC|LAS|LAT|LD|LD[A-Za-z0-9]|LPM|LSL|LSR|MOV|MOVW|MUL|MULS|MULSU|NEG|NOP|OR|ORI|OUT|POP|PUSH|RCALL|RET|RETI|RJMP|ROL|ROR|SBC|SBCI|SBI|SBIC|SBIS|SBIW|SBR|SBRC|SBRS|SEC|SEH|SEI|SEN|SER|SES|SET|SEV|SEZ|SLEEP|SPM|ST|ST[A-Z0-9]|SUB|SUBI|SWAP|TST|WDR|XCH|adc|add|adiw|and|andi|asr|bclr|bld|brbc|brbs|brcc|brcs|break|breq|brge|brhc|brhs|brid|brie|brlo|brlt|brmi|brne|brpl|brsh|brtc|brts|brvc|brvs|bset|bst|call|cbi|cbr|clc|clh|cli|cln|clr|cls|clt|clv|clz|com|cp|cpc|cpi|cpse|dec|des|eicall|eijmp|elpm|eor|fmul|fmuls|fmulsu|icall|ijmp|in|inc|jmp|lac|las|lat|ld|ld[a-z0-9]|lpm|lsl|lsr|mov|movw|mul|muls|mulsu|neg|nop|or|ori|out|pop|push|rcall|ret|reti|rjmp|rol|ror|sbc|sbci|sbi|sbic|sbis|sbiw|sbr|sbrc|sbrs|sec|seh|sei|sen|ser|ses|set|sev|sez|sleep|spm|st|st[a-zA-Z0-9]|sub|subi|swap|tst|wdr|xch)\b/,alias:"keyword"},"hex-number":{pattern:/#?\$[\da-f]{2,4}\b/i,alias:"number"},"binary-number":{pattern:/#?%[01]+\b/,alias:"number"},"decimal-number":{pattern:/#?\b\d+\b/,alias:"number"},register:{pattern:/\b[acznvshtixy]\b/i,alias:"variable"},operator:/>>=?|<<=?|&[&=]?|\|[\|=]?|[-+*/%^!=<>?]=?/,punctuation:/[(),:]/}}Xn.displayName="autohotkey";Xn.aliases=[];function Xn(e){e.languages.autohotkey={comment:[{pattern:/(^|\s);.*/,lookbehind:!0},{pattern:/(^[\t ]*)\/\*(?:[\r\n](?![ \t]*\*\/)|[^\r\n])*(?:[\r\n][ \t]*\*\/)?/m,lookbehind:!0,greedy:!0}],tag:{pattern:/^([ \t]*)[^\s,`":]+(?=:[ \t]*$)/m,lookbehind:!0},string:/"(?:[^"\n\r]|"")*"/,variable:/%\w+%/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/\?|\/\/?=?|:=|\|[=|]?|&[=&]?|\+[=+]?|-[=-]?|\*[=*]?|<(?:<=?|>|=)?|>>?=?|[.^!=~]=?|\b(?:AND|NOT|OR)\b/,boolean:/\b(?:false|true)\b/,command:{pattern:/\b(?:AutoTrim|BlockInput|Break|Click|ClipWait|Continue|Control|ControlClick|ControlFocus|ControlGet|ControlGetFocus|ControlGetPos|ControlGetText|ControlMove|ControlSend|ControlSendRaw|ControlSetText|CoordMode|Critical|DetectHiddenText|DetectHiddenWindows|Drive|DriveGet|DriveSpaceFree|EnvAdd|EnvDiv|EnvGet|EnvMult|EnvSet|EnvSub|EnvUpdate|Exit|ExitApp|FileAppend|FileCopy|FileCopyDir|FileCreateDir|FileCreateShortcut|FileDelete|FileEncoding|FileGetAttrib|FileGetShortcut|FileGetSize|FileGetTime|FileGetVersion|FileInstall|FileMove|FileMoveDir|FileRead|FileReadLine|FileRecycle|FileRecycleEmpty|FileRemoveDir|FileSelectFile|FileSelectFolder|FileSetAttrib|FileSetTime|FormatTime|GetKeyState|Gosub|Goto|GroupActivate|GroupAdd|GroupClose|GroupDeactivate|Gui|GuiControl|GuiControlGet|Hotkey|ImageSearch|IniDelete|IniRead|IniWrite|Input|InputBox|KeyWait|ListHotkeys|ListLines|ListVars|Loop|Menu|MouseClick|MouseClickDrag|MouseGetPos|MouseMove|MsgBox|OnExit|OutputDebug|Pause|PixelGetColor|PixelSearch|PostMessage|Process|Progress|Random|RegDelete|RegRead|RegWrite|Reload|Repeat|Return|Run|RunAs|RunWait|Send|SendEvent|SendInput|SendMessage|SendMode|SendPlay|SendRaw|SetBatchLines|SetCapslockState|SetControlDelay|SetDefaultMouseSpeed|SetEnv|SetFormat|SetKeyDelay|SetMouseDelay|SetNumlockState|SetRegView|SetScrollLockState|SetStoreCapslockMode|SetTimer|SetTitleMatchMode|SetWinDelay|SetWorkingDir|Shutdown|Sleep|Sort|SoundBeep|SoundGet|SoundGetWaveVolume|SoundPlay|SoundSet|SoundSetWaveVolume|SplashImage|SplashTextOff|SplashTextOn|SplitPath|StatusBarGetText|StatusBarWait|StringCaseSense|StringGetPos|StringLeft|StringLen|StringLower|StringMid|StringReplace|StringRight|StringSplit|StringTrimLeft|StringTrimRight|StringUpper|Suspend|SysGet|Thread|ToolTip|Transform|TrayTip|URLDownloadToFile|WinActivate|WinActivateBottom|WinClose|WinGet|WinGetActiveStats|WinGetActiveTitle|WinGetClass|WinGetPos|WinGetText|WinGetTitle|WinHide|WinKill|WinMaximize|WinMenuSelectItem|WinMinimize|WinMinimizeAll|WinMinimizeAllUndo|WinMove|WinRestore|WinSet|WinSetTitle|WinShow|WinWait|WinWaitActive|WinWaitClose|WinWaitNotActive)\b/i,alias:"selector"},constant:/\b(?:a_ahkpath|a_ahkversion|a_appdata|a_appdatacommon|a_autotrim|a_batchlines|a_caretx|a_carety|a_computername|a_controldelay|a_cursor|a_dd|a_ddd|a_dddd|a_defaultmousespeed|a_desktop|a_desktopcommon|a_detecthiddentext|a_detecthiddenwindows|a_endchar|a_eventinfo|a_exitreason|a_fileencoding|a_formatfloat|a_formatinteger|a_gui|a_guicontrol|a_guicontrolevent|a_guievent|a_guiheight|a_guiwidth|a_guix|a_guiy|a_hour|a_iconfile|a_iconhidden|a_iconnumber|a_icontip|a_index|a_ipaddress1|a_ipaddress2|a_ipaddress3|a_ipaddress4|a_is64bitos|a_isadmin|a_iscompiled|a_iscritical|a_ispaused|a_issuspended|a_isunicode|a_keydelay|a_language|a_lasterror|a_linefile|a_linenumber|a_loopfield|a_loopfileattrib|a_loopfiledir|a_loopfileext|a_loopfilefullpath|a_loopfilelongpath|a_loopfilename|a_loopfileshortname|a_loopfileshortpath|a_loopfilesize|a_loopfilesizekb|a_loopfilesizemb|a_loopfiletimeaccessed|a_loopfiletimecreated|a_loopfiletimemodified|a_loopreadline|a_loopregkey|a_loopregname|a_loopregsubkey|a_loopregtimemodified|a_loopregtype|a_mday|a_min|a_mm|a_mmm|a_mmmm|a_mon|a_mousedelay|a_msec|a_mydocuments|a_now|a_nowutc|a_numbatchlines|a_ostype|a_osversion|a_priorhotkey|a_priorkey|a_programfiles|a_programs|a_programscommon|a_ptrsize|a_regview|a_screendpi|a_screenheight|a_screenwidth|a_scriptdir|a_scriptfullpath|a_scripthwnd|a_scriptname|a_sec|a_space|a_startmenu|a_startmenucommon|a_startup|a_startupcommon|a_stringcasesense|a_tab|a_temp|a_thisfunc|a_thishotkey|a_thislabel|a_thismenu|a_thismenuitem|a_thismenuitempos|a_tickcount|a_timeidle|a_timeidlephysical|a_timesincepriorhotkey|a_timesincethishotkey|a_titlematchmode|a_titlematchmodespeed|a_username|a_wday|a_windelay|a_windir|a_workingdir|a_yday|a_year|a_yweek|a_yyyy|clipboard|clipboardall|comspec|errorlevel|programfiles)\b/i,builtin:/\b(?:abs|acos|asc|asin|atan|ceil|chr|class|comobjactive|comobjarray|comobjconnect|comobjcreate|comobjerror|comobjflags|comobjget|comobjquery|comobjtype|comobjvalue|cos|dllcall|exp|fileexist|Fileopen|floor|format|il_add|il_create|il_destroy|instr|isfunc|islabel|IsObject|ln|log|ltrim|lv_add|lv_delete|lv_deletecol|lv_getcount|lv_getnext|lv_gettext|lv_insert|lv_insertcol|lv_modify|lv_modifycol|lv_setimagelist|mod|numget|numput|onmessage|regexmatch|regexreplace|registercallback|round|rtrim|sb_seticon|sb_setparts|sb_settext|sin|sqrt|strlen|strreplace|strsplit|substr|tan|tv_add|tv_delete|tv_get|tv_getchild|tv_getcount|tv_getnext|tv_getparent|tv_getprev|tv_getselection|tv_gettext|tv_modify|varsetcapacity|winactive|winexist|__Call|__Get|__New|__Set)\b/i,symbol:/\b(?:alt|altdown|altup|appskey|backspace|browser_back|browser_favorites|browser_forward|browser_home|browser_refresh|browser_search|browser_stop|bs|capslock|ctrl|ctrlbreak|ctrldown|ctrlup|del|delete|down|end|enter|esc|escape|f1|f10|f11|f12|f13|f14|f15|f16|f17|f18|f19|f2|f20|f21|f22|f23|f24|f3|f4|f5|f6|f7|f8|f9|home|ins|insert|joy1|joy10|joy11|joy12|joy13|joy14|joy15|joy16|joy17|joy18|joy19|joy2|joy20|joy21|joy22|joy23|joy24|joy25|joy26|joy27|joy28|joy29|joy3|joy30|joy31|joy32|joy4|joy5|joy6|joy7|joy8|joy9|joyaxes|joybuttons|joyinfo|joyname|joypov|joyr|joyu|joyv|joyx|joyy|joyz|lalt|launch_app1|launch_app2|launch_mail|launch_media|lbutton|lcontrol|lctrl|left|lshift|lwin|lwindown|lwinup|mbutton|media_next|media_play_pause|media_prev|media_stop|numlock|numpad0|numpad1|numpad2|numpad3|numpad4|numpad5|numpad6|numpad7|numpad8|numpad9|numpadadd|numpadclear|numpaddel|numpaddiv|numpaddot|numpaddown|numpadend|numpadenter|numpadhome|numpadins|numpadleft|numpadmult|numpadpgdn|numpadpgup|numpadright|numpadsub|numpadup|pgdn|pgup|printscreen|ralt|rbutton|rcontrol|rctrl|right|rshift|rwin|rwindown|rwinup|scrolllock|shift|shiftdown|shiftup|space|tab|up|volume_down|volume_mute|volume_up|wheeldown|wheelleft|wheelright|wheelup|xbutton1|xbutton2)\b/i,directive:{pattern:/#[a-z]+\b/i,alias:"important"},keyword:/\b(?:Abort|AboveNormal|Add|ahk_class|ahk_exe|ahk_group|ahk_id|ahk_pid|All|Alnum|Alpha|AltSubmit|AltTab|AltTabAndMenu|AltTabMenu|AltTabMenuDismiss|AlwaysOnTop|AutoSize|Background|BackgroundTrans|BelowNormal|between|BitAnd|BitNot|BitOr|BitShiftLeft|BitShiftRight|BitXOr|Bold|Border|Button|ByRef|Catch|Checkbox|Checked|CheckedGray|Choose|ChooseString|Close|Color|ComboBox|Contains|ControlList|Count|Date|DateTime|Days|DDL|Default|DeleteAll|Delimiter|Deref|Destroy|Digit|Disable|Disabled|DropDownList|Edit|Eject|Else|Enable|Enabled|Error|Exist|Expand|ExStyle|FileSystem|Finally|First|Flash|Float|FloatFast|Focus|Font|for|global|Grid|Group|GroupBox|GuiClose|GuiContextMenu|GuiDropFiles|GuiEscape|GuiSize|Hdr|Hidden|Hide|High|HKCC|HKCR|HKCU|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_LOCAL_MACHINE|HKEY_USERS|HKLM|HKU|Hours|HScroll|Icon|IconSmall|ID|IDLast|If|IfEqual|IfExist|IfGreater|IfGreaterOrEqual|IfInString|IfLess|IfLessOrEqual|IfMsgBox|IfNotEqual|IfNotExist|IfNotInString|IfWinActive|IfWinExist|IfWinNotActive|IfWinNotExist|Ignore|ImageList|in|Integer|IntegerFast|Interrupt|is|italic|Join|Label|LastFound|LastFoundExist|Limit|Lines|List|ListBox|ListView|local|Lock|Logoff|Low|Lower|Lowercase|MainWindow|Margin|Maximize|MaximizeBox|MaxSize|Minimize|MinimizeBox|MinMax|MinSize|Minutes|MonthCal|Mouse|Move|Multi|NA|No|NoActivate|NoDefault|NoHide|NoIcon|NoMainWindow|norm|Normal|NoSort|NoSortHdr|NoStandard|Not|NoTab|NoTimers|Number|Off|Ok|On|OwnDialogs|Owner|Parse|Password|Picture|Pixel|Pos|Pow|Priority|ProcessName|Radio|Range|Read|ReadOnly|Realtime|Redraw|Region|REG_BINARY|REG_DWORD|REG_EXPAND_SZ|REG_MULTI_SZ|REG_SZ|Relative|Rename|Report|Resize|Restore|Retry|RGB|Screen|Seconds|Section|Serial|SetLabel|ShiftAltTab|Show|Single|Slider|SortDesc|Standard|static|Status|StatusBar|StatusCD|strike|Style|Submit|SysMenu|Tab2|TabStop|Text|Theme|Throw|Tile|ToggleCheck|ToggleEnable|ToolWindow|Top|Topmost|TransColor|Transparent|Tray|TreeView|Try|TryAgain|Type|UnCheck|underline|Unicode|Unlock|Until|UpDown|Upper|Uppercase|UseErrorLevel|Vis|VisFirst|Visible|VScroll|Wait|WaitClose|WantCtrlA|WantF2|WantReturn|While|Wrap|Xdigit|xm|xp|xs|Yes|ym|yp|ys)\b/i,function:/[^(); \t,\n+*\-=?>:\\\/<&%\[\]]+(?=\()/,punctuation:/[{}[\]():,]/}}Zn.displayName="autoit";Zn.aliases=[];function Zn(e){e.languages.autoit={comment:[/;.*/,{pattern:/(^[\t ]*)#(?:comments-start|cs)[\s\S]*?^[ \t]*#(?:ce|comments-end)/m,lookbehind:!0}],url:{pattern:/(^[\t ]*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,lookbehind:!0},string:{pattern:/(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,greedy:!0,inside:{variable:/([%$@])\w+\1/}},directive:{pattern:/(^[\t ]*)#[\w-]+/m,lookbehind:!0,alias:"keyword"},function:/\b\w+(?=\()/,variable:/[$@]\w+/,keyword:/\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,boolean:/\b(?:False|True)\b/i,operator:/<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Not|Or)\b/i,punctuation:/[\[\]().,:]/}}Qn.displayName="avisynth";Qn.aliases=["avs"];function Qn(e){(function(t){function n(l,c){return l.replace(/<<(\d+)>>/g,function(d,m){return c[+m]})}function r(l,c,d){return RegExp(n(l,c),d)}var a=/bool|clip|float|int|string|val/.source,i=[/is(?:bool|clip|float|int|string)|defined|(?:(?:internal)?function|var)?exists?/.source,/apply|assert|default|eval|import|nop|select|undefined/.source,/opt_(?:allowfloataudio|avipadscanlines|dwchannelmask|enable_(?:b64a|planartopackedrgb|v210|y3_10_10|y3_10_16)|usewaveextensible|vdubplanarhack)|set(?:cachemode|maxcpu|memorymax|planarlegacyalignment|workingdir)/.source,/hex(?:value)?|value/.source,/abs|ceil|continued(?:denominator|numerator)?|exp|floor|fmod|frac|log(?:10)?|max|min|muldiv|pi|pow|rand|round|sign|spline|sqrt/.source,/a?sinh?|a?cosh?|a?tan[2h]?/.source,/(?:bit(?:and|not|x?or|[lr]?shift[aslu]?|sh[lr]|sa[lr]|[lr]rotatel?|ro[rl]|te?st|set(?:count)?|cl(?:ea)?r|ch(?:an)?ge?))/.source,/average(?:[bgr]|chroma[uv]|luma)|(?:[rgb]|chroma[uv]|luma|rgb|[yuv](?=difference(?:fromprevious|tonext)))difference(?:fromprevious|tonext)?|[yuvrgb]plane(?:median|min|max|minmaxdifference)/.source,/getprocessinfo|logmsg|script(?:dir(?:utf8)?|file(?:utf8)?|name(?:utf8)?)|setlogparams/.source,/chr|(?:fill|find|left|mid|replace|rev|right)str|format|[lu]case|ord|str(?:cmpi?|fromutf8|len|toutf8)|time|trim(?:all|left|right)/.source,/isversionorgreater|version(?:number|string)/.source,/buildpixeltype|colorspacenametopixeltype/.source,/addautoloaddir|on(?:cpu|cuda)|prefetch|setfiltermtmode/.source].join("|"),o=[/has(?:audio|video)/.source,/height|width/.source,/frame(?:count|rate)|framerate(?:denominator|numerator)/.source,/getparity|is(?:field|frame)based/.source,/bitspercomponent|componentsize|hasalpha|is(?:planar(?:rgba?)?|interleaved|rgb(?:24|32|48|64)?|y(?:8|u(?:va?|y2))?|yv(?:12|16|24|411)|420|422|444|packedrgb)|numcomponents|pixeltype/.source,/audio(?:bits|channels|duration|length(?:[fs]|hi|lo)?|rate)|isaudio(?:float|int)/.source].join("|"),s=[/avi(?:file)?source|directshowsource|image(?:reader|source|sourceanim)|opendmlsource|segmented(?:avisource|directshowsource)|wavsource/.source,/coloryuv|convertbacktoyuy2|convertto(?:RGB(?:24|32|48|64)|(?:planar)?RGBA?|Y8?|YV(?:12|16|24|411)|YUVA?(?:411|420|422|444)|YUY2)|fixluminance|gr[ae]yscale|invert|levels|limiter|mergea?rgb|merge(?:chroma|luma)|rgbadjust|show(?:alpha|blue|green|red)|swapuv|tweak|[uv]toy8?|ytouv/.source,/(?:colorkey|reset)mask|layer|mask(?:hs)?|merge|overlay|subtract/.source,/addborders|(?:bicubic|bilinear|blackman|gauss|lanczos4|lanczos|point|sinc|spline(?:16|36|64))resize|crop(?:bottom)?|flip(?:horizontal|vertical)|(?:horizontal|vertical)?reduceby2|letterbox|skewrows|turn(?:180|left|right)/.source,/blur|fixbrokenchromaupsampling|generalconvolution|(?:spatial|temporal)soften|sharpen/.source,/trim|(?:un)?alignedsplice|(?:assume|assumescaled|change|convert)FPS|(?:delete|duplicate)frame|dissolve|fade(?:in|io|out)[02]?|freezeframe|interleave|loop|reverse|select(?:even|odd|(?:range)?every)/.source,/assume[bt]ff|assume(?:field|frame)based|bob|complementparity|doubleweave|peculiarblend|pulldown|separate(?:columns|fields|rows)|swapfields|weave(?:columns|rows)?/.source,/amplify(?:db)?|assumesamplerate|audiodub(?:ex)?|audiotrim|convertaudioto(?:(?:8|16|24|32)bit|float)|converttomono|delayaudio|ensurevbrmp3sync|get(?:left|right)?channel|kill(?:audio|video)|mergechannels|mixaudio|monotostereo|normalize|resampleaudio|ssrc|supereq|timestretch/.source,/animate|applyrange|conditional(?:filter|reader|select)|frameevaluate|scriptclip|tcp(?:server|source)|writefile(?:end|if|start)?/.source,/imagewriter/.source,/blackness|blankclip|colorbars(?:hd)?|compare|dumpfiltergraph|echo|histogram|info|messageclip|preroll|setgraphanalysis|show(?:framenumber|smpte|time)|showfiveversions|stack(?:horizontal|vertical)|subtitle|tone|version/.source].join("|"),u=[i,o,s].join("|");t.languages.avisynth={comment:[{pattern:/(^|[^\\])\[\*(?:[^\[*]|\[(?!\*)|\*(?!\])|\[\*(?:[^\[*]|\[(?!\*)|\*(?!\]))*\*\])*\*\]/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0,greedy:!0}],argument:{pattern:r(/\b(?:<<0>>)\s+("?)\w+\1/.source,[a],"i"),inside:{keyword:/^\w+/}},"argument-label":{pattern:/([,(][\s\\]*)\w+\s*=(?!=)/,lookbehind:!0,inside:{"argument-name":{pattern:/^\w+/,alias:"punctuation"},punctuation:/=$/}},string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0,inside:{constant:{pattern:/\b(?:DEFAULT_MT_MODE|(?:MAINSCRIPT|PROGRAM|SCRIPT)DIR|(?:MACHINE|USER)_(?:CLASSIC|PLUS)_PLUGINS)\b/}}}],variable:/\b(?:last)\b/i,boolean:/\b(?:false|no|true|yes)\b/i,keyword:/\b(?:catch|else|for|function|global|if|return|try|while|__END__)\b/i,constant:/\bMT_(?:MULTI_INSTANCE|NICE_FILTER|SERIALIZED|SPECIAL_MT)\b/,"builtin-function":{pattern:r(/\b(?:<<0>>)\b/.source,[u],"i"),alias:"function"},"type-cast":{pattern:r(/\b(?:<<0>>)(?=\s*\()/.source,[a],"i"),alias:"keyword"},function:{pattern:/\b[a-z_]\w*(?=\s*\()|(\.)[a-z_]\w*\b/i,lookbehind:!0},"line-continuation":{pattern:/(^[ \t]*)\\|\\(?=[ \t]*$)/m,lookbehind:!0,alias:"punctuation"},number:/\B\$(?:[\da-f]{6}|[\da-f]{8})\b|(?:(?:\b|\B-)\d+(?:\.\d*)?\b|\B\.\d+\b)/i,operator:/\+\+?|[!=<>]=?|&&|\|\||[?:*/%-]/,punctuation:/[{}\[\]();,.]/},t.languages.avs=t.languages.avisynth})(e)}Jn.displayName="avro-idl";Jn.aliases=["avdl"];function Jn(e){e.languages["avro-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/(^|[^\\])"(?:[^\r\n"\\]|\\.)*"/,lookbehind:!0,greedy:!0},annotation:{pattern:/@(?:[$\w.-]|`[^\r\n`]+`)+/,greedy:!0,alias:"function"},"function-identifier":{pattern:/`[^\r\n`]+`(?=\s*\()/,greedy:!0,alias:"function"},identifier:{pattern:/`[^\r\n`]+`/,greedy:!0},"class-name":{pattern:/(\b(?:enum|error|protocol|record|throws)\b\s+)[$\w]+/,lookbehind:!0,greedy:!0},keyword:/\b(?:array|boolean|bytes|date|decimal|double|enum|error|false|fixed|float|idl|import|int|local_timestamp_ms|long|map|null|oneway|protocol|record|schema|string|throws|time_ms|timestamp_ms|true|union|uuid|void)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:[{pattern:/(^|[^\w.])-?(?:(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|0x(?:[a-f0-9]+(?:\.[a-f0-9]*)?|\.[a-f0-9]+)(?:p[+-]?\d+)?)[dfl]?(?![\w.])/i,lookbehind:!0},/-?\b(?:Infinity|NaN)\b/],operator:/=/,punctuation:/[()\[\]{}<>.:,;-]/},e.languages.avdl=e.languages["avro-idl"]}er.displayName="awk";er.aliases=["gawk"];function er(e){e.languages.awk={hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},comment:{pattern:/#.*/,greedy:!0},string:{pattern:/(^|[^\\])"(?:[^\\"\r\n]|\\.)*"/,lookbehind:!0,greedy:!0},regex:{pattern:/((?:^|[^\w\s)])\s*)\/(?:[^\/\\\r\n]|\\.)*\//,lookbehind:!0,greedy:!0},variable:/\$\w+/,keyword:/\b(?:BEGIN|BEGINFILE|END|ENDFILE|break|case|continue|default|delete|do|else|exit|for|function|getline|if|in|next|nextfile|printf?|return|switch|while)\b|@(?:include|load)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[a-fA-F0-9]+)\b/,operator:/--|\+\+|!?~|>&|>>|<<|(?:\*\*|[<>!=+\-*/%^])=?|&&|\|[|&]|[?:]/,punctuation:/[()[\]{},;]/},e.languages.gawk=e.languages.awk}Dt.displayName="basic";Dt.aliases=[];function Dt(e){e.languages.basic={comment:{pattern:/(?:!|REM\b).+/i,inside:{keyword:/^REM/i}},string:{pattern:/"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,greedy:!0},number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,keyword:/\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SELECT CASE|SHARED|SHELL|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,function:/\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,operator:/<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,punctuation:/[,;:()]/}}tr.displayName="batch";tr.aliases=[];function tr(e){(function(t){var n=/%%?[~:\w]+%?|!\S+!/,r={pattern:/\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,alias:"attr-name",inside:{punctuation:/:/}},a=/"(?:[\\"]"|[^"])*"(?!")/,i=/(?:\b|-)\d+\b/;t.languages.batch={comment:[/^::.*/m,{pattern:/((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0}],label:{pattern:/^:.*/m,alias:"property"},command:[{pattern:/((?:^|[&(])[ \t]*)for(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* \S+ in \([^)]+\) do/im,lookbehind:!0,inside:{keyword:/\b(?:do|in)\b|^for\b/i,string:a,parameter:r,variable:n,number:i,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*)if(?: \/[a-z?](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|(?!")(?:(?!==)\S)+)?(?:==| (?:equ|geq|gtr|leq|lss|neq) )(?:"[^"]*"|[^\s"]\S*))/im,lookbehind:!0,inside:{keyword:/\b(?:cmdextversion|defined|errorlevel|exist|not)\b|^if\b/i,string:a,parameter:r,variable:n,number:i,operator:/\^|==|\b(?:equ|geq|gtr|leq|lss|neq)\b/i}},{pattern:/((?:^|[&()])[ \t]*)else\b/im,lookbehind:!0,inside:{keyword:/^else\b/i}},{pattern:/((?:^|[&(])[ \t]*)set(?: \/[a-z](?:[ :](?:"[^"]*"|[^\s"/]\S*))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,lookbehind:!0,inside:{keyword:/^set\b/i,string:a,parameter:r,variable:[n,/\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],number:i,operator:/[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,punctuation:/[()',]/}},{pattern:/((?:^|[&(])[ \t]*@?)\w+\b(?:"(?:[\\"]"|[^"])*"(?!")|[^"^&)\r\n]|\^(?:\r\n|[\s\S]))*/m,lookbehind:!0,inside:{keyword:/^\w+\b/,string:a,parameter:r,label:{pattern:/(^\s*):\S+/m,lookbehind:!0,alias:"property"},variable:n,number:i,operator:/\^/}}],operator:/[&@]/,punctuation:/[()']/}})(e)}nr.displayName="bbcode";nr.aliases=["shortcode"];function nr(e){e.languages.bbcode={tag:{pattern:/\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,inside:{tag:{pattern:/^\[\/?[^\s=\]]+/,inside:{punctuation:/^\[\/?/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\]/,"attr-name":/[^\s=\]]+/}}},e.languages.shortcode=e.languages.bbcode}rr.displayName="bbj";rr.aliases=[];function rr(e){(function(t){t.languages.bbj={comment:{pattern:/(^|[^\\:])rem\s+.*/i,lookbehind:!0,greedy:!0},string:{pattern:/(['"])(?:(?!\1|\\).|\\.)*\1/,greedy:!0},number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,keyword:/\b(?:abstract|all|argc|begin|bye|callback|case|chn|class|classend|ctl|day|declare|delete|dim|dom|dread|dsz|else|end|endif|err|exitto|extends|fi|field|for|from|gosub|goto|if|implements|interface|interfaceend|iol|iolist|let|list|load|method|methodend|methodret|on|opts|pfx|print|private|process_events|protected|psz|public|read|read_resource|release|remove_callback|repeat|restore|return|rev|seterr|setesc|sqlchn|sqlunt|ssn|start|static|swend|switch|sys|then|tim|unt|until|use|void|wend|where|while)\b/i,function:/\b\w+(?=\()/,boolean:/\b(?:BBjAPI\.TRUE|BBjAPI\.FALSE)\b/i,operator:/<[=>]?|>=?|[+\-*\/^=&]|\b(?:and|not|or|xor)\b/i,punctuation:/[.,;:()]/}})(e)}ar.displayName="bicep";ar.aliases=[];function ar(e){e.languages.bicep={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],property:[{pattern:/([\r\n][ \t]*)[a-z_]\w*(?=[ \t]*:)/i,lookbehind:!0},{pattern:/([\r\n][ \t]*)'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'(?=[ \t]*:)/,lookbehind:!0,greedy:!0}],string:[{pattern:/'''[^'][\s\S]*?'''/,greedy:!0},{pattern:/(^|[^\\'])'(?:\\.|\$(?!\{)|[^'\\\r\n$])*'/,lookbehind:!0,greedy:!0}],"interpolated-string":{pattern:/(^|[^\\'])'(?:\\.|\$(?:(?!\{)|\{[^{}\r\n]*\})|[^'\\\r\n$])*'/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/\$\{[^{}\r\n]*\}/,inside:{expression:{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0},punctuation:/^\$\{|\}$/}},string:/[\s\S]+/}},datatype:{pattern:/(\b(?:output|param)\b[ \t]+\w+[ \t]+)\w+\b/,lookbehind:!0,alias:"class-name"},boolean:/\b(?:false|true)\b/,keyword:/\b(?:existing|for|if|in|module|null|output|param|resource|targetScope|var)\b/,decorator:/@\w+\b/,function:/\b[a-z_]\w*(?=[ \t]*\()/i,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,punctuation:/[{}[\];(),.:]/},e.languages.bicep["interpolated-string"].inside.interpolation.inside.expression.inside=e.languages.bicep}ir.displayName="birb";ir.aliases=[];function ir(e){e.register(W),e.languages.birb=e.languages.extend("clike",{string:{pattern:/r?("|')(?:\\.|(?!\1)[^\\])*\1/,greedy:!0},"class-name":[/\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,/\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/],keyword:/\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,operator:/\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,variable:/\b[a-z_]\w*\b/}),e.languages.insertBefore("birb","function",{metadata:{pattern:/<\w+>/,greedy:!0,alias:"symbol"}})}or.displayName="bison";or.aliases=[];function or(e){e.register(Ae),e.languages.bison=e.languages.extend("c",{}),e.languages.insertBefore("bison","comment",{bison:{pattern:/^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,inside:{c:{pattern:/%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,inside:{delimiter:{pattern:/^%?\{|%?\}$/,alias:"punctuation"},"bison-variable":{pattern:/[$@](?:<[^\s>]+>)?[\w$]+/,alias:"variable",inside:{punctuation:/<|>/}},rest:e.languages.c}},comment:e.languages.c.comment,string:e.languages.c.string,property:/\S+(?=:)/,keyword:/%\w+/,number:{pattern:/(^|[^@])\b(?:0x[\da-f]+|\d+)/i,lookbehind:!0},punctuation:/%[%?]|[|:;\[\]<>]/}}})}sr.displayName="bnf";sr.aliases=["rbnf"];function sr(e){e.languages.bnf={string:{pattern:/"[^\r\n"]*"|'[^\r\n']*'/},definition:{pattern:/<[^<>\r\n\t]+>(?=\s*::=)/,alias:["rule","keyword"],inside:{punctuation:/^<|>$/}},rule:{pattern:/<[^<>\r\n\t]+>/,inside:{punctuation:/^<|>$/}},operator:/::=|[|()[\]{}*+?]|\.{3}/},e.languages.rbnf=e.languages.bnf}lr.displayName="bqn";lr.aliases=[];function lr(e){e.languages.bqn={shebang:{pattern:/^#![ \t]*\/.*/,alias:"important",greedy:!0},comment:{pattern:/#.*/,greedy:!0},"string-literal":{pattern:/"(?:[^"]|"")*"/,greedy:!0,alias:"string"},"character-literal":{pattern:/'(?:[\s\S]|[\uD800-\uDBFF][\uDC00-\uDFFF])'/,greedy:!0,alias:"char"},function:/•[\w¯.∞π]+[\w¯.∞π]*/,"dot-notation-on-brackets":{pattern:/\{(?=.*\}\.)|\}\./,alias:"namespace"},"special-name":{pattern:/(?:𝕨|𝕩|𝕗|𝕘|𝕤|𝕣|𝕎|𝕏|𝔽|𝔾|𝕊|_𝕣_|_𝕣)/,alias:"keyword"},"dot-notation-on-name":{pattern:/[A-Za-z_][\w¯∞π]*\./,alias:"namespace"},"word-number-scientific":{pattern:/\d+(?:\.\d+)?[eE]¯?\d+/,alias:"number"},"word-name":{pattern:/[A-Za-z_][\w¯∞π]*/,alias:"symbol"},"word-number":{pattern:/[¯∞π]?(?:\d*\.?\b\d+(?:e[+¯]?\d+|E[+¯]?\d+)?|¯|∞|π)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+|E[+¯]?\d+)?|¯|∞|π))?/,alias:"number"},"null-literal":{pattern:/@/,alias:"char"},"primitive-functions":{pattern:/[-+×÷⋆√⌊⌈|¬∧∨<>≠=≤≥≡≢⊣⊢⥊∾≍⋈↑↓↕«»⌽⍉/⍋⍒⊏⊑⊐⊒∊⍷⊔!]/,alias:"operator"},"primitive-1-operators":{pattern:/[`˜˘¨⁼⌜´˝˙]/,alias:"operator"},"primitive-2-operators":{pattern:/[∘⊸⟜○⌾⎉⚇⍟⊘◶⎊]/,alias:"operator"},punctuation:/[←⇐↩(){}⟨⟩[\]‿·⋄,.;:?]/}}ur.displayName="brainfuck";ur.aliases=[];function ur(e){e.languages.brainfuck={pointer:{pattern:/<|>/,alias:"keyword"},increment:{pattern:/\+/,alias:"inserted"},decrement:{pattern:/-/,alias:"deleted"},branching:{pattern:/\[|\]/,alias:"important"},operator:/[.,]/,comment:/\S+/}}cr.displayName="brightscript";cr.aliases=[];function cr(e){e.languages.brightscript={comment:/(?:\brem|').*/i,"directive-statement":{pattern:/(^[\t ]*)#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if).*/im,lookbehind:!0,alias:"property",inside:{"error-message":{pattern:/(^#error).+/,lookbehind:!0},directive:{pattern:/^#(?:const|else(?:[\t ]+if)?|end[\t ]+if|error|if)/,alias:"keyword"},expression:{pattern:/[\s\S]+/,inside:null}}},property:{pattern:/([\r\n{,][\t ]*)(?:(?!\d)\w+|"(?:[^"\r\n]|"")*"(?!"))(?=[ \t]*:)/,lookbehind:!0,greedy:!0},string:{pattern:/"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},"class-name":{pattern:/(\bAs[\t ]+)\w+/i,lookbehind:!0},keyword:/\b(?:As|Dim|Each|Else|Elseif|End|Exit|For|Function|Goto|If|In|Print|Return|Step|Stop|Sub|Then|To|While)\b/i,boolean:/\b(?:false|true)\b/i,function:/\b(?!\d)\w+(?=[\t ]*\()/,number:/(?:\b\d+(?:\.\d+)?(?:[ed][+-]\d+)?|&h[a-f\d]+)\b[%&!#]?/i,operator:/--|\+\+|>>=?|<<=?|<>|[-+*/\\<>]=?|[:^=?]|\b(?:and|mod|not|or)\b/i,punctuation:/[.,;()[\]{}]/,constant:/\b(?:LINE_NUM)\b/i},e.languages.brightscript["directive-statement"].inside.expression.inside=e.languages.brightscript}dr.displayName="bro";dr.aliases=[];function dr(e){e.languages.bro={comment:{pattern:/(^|[^\\$])#.*/,lookbehind:!0,inside:{italic:/\b(?:FIXME|TODO|XXX)\b/}},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},boolean:/\b[TF]\b/,function:{pattern:/(\b(?:event|function|hook)[ \t]+)\w+(?:::\w+)?/,lookbehind:!0},builtin:/(?:@(?:load(?:-(?:plugin|sigs))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:add_func|create_expire|default|delete_func|encrypt|error_handler|expire_func|group|log|mergeable|optional|persistent|priority|raw_output|read_expire|redef|rotate_interval|rotate_size|synchronized|type_column|write_expire))/,constant:{pattern:/(\bconst[ \t]+)\w+/i,lookbehind:!0},keyword:/\b(?:add|addr|alarm|any|bool|break|const|continue|count|delete|double|else|enum|event|export|file|for|function|global|hook|if|in|int|interval|local|module|next|of|opaque|pattern|port|print|record|return|schedule|set|string|subnet|table|time|timeout|using|vector|when)\b/,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,punctuation:/[{}[\];(),.:]/}}pr.displayName="bsl";pr.aliases=["oscript"];function pr(e){e.languages.bsl={comment:/\/\/.*/,string:[{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},{pattern:/'(?:[^'\r\n\\]|\\.)*'/}],keyword:[{pattern:/(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:пока|для|новый|прервать|попытка|исключение|вызватьисключение|иначе|конецпопытки|неопределено|функция|перем|возврат|конецфункции|если|иначеесли|процедура|конецпроцедуры|тогда|знач|экспорт|конецесли|из|каждого|истина|ложь|по|цикл|конеццикла|выполнить)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,lookbehind:!0},{pattern:/\b(?:break|do|each|else|elseif|enddo|endfunction|endif|endprocedure|endtry|except|execute|export|false|for|function|if|in|new|null|procedure|raise|return|then|to|true|try|undefined|val|var|while)\b/i}],number:{pattern:/(^(?=\d)|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:\d+(?:\.\d*)?|\.\d+)(?:E[+-]?\d+)?/i,lookbehind:!0},operator:[/[<>+\-*/]=?|[%=]/,{pattern:/(^|[^\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])(?:и|или|не)(?![\w\u0400-\u0484\u0487-\u052f\u1d2b\u1d78\u2de0-\u2dff\ua640-\ua69f\ufe2e\ufe2f])/i,lookbehind:!0},{pattern:/\b(?:and|not|or)\b/i}],punctuation:/\(\.|\.\)|[()\[\]:;,.]/,directive:[{pattern:/^([ \t]*)&.*/m,lookbehind:!0,greedy:!0,alias:"important"},{pattern:/^([ \t]*)#.*/gm,lookbehind:!0,greedy:!0,alias:"important"}]},e.languages.oscript=e.languages.bsl}gr.displayName="cfscript";gr.aliases=["cfc"];function gr(e){e.register(W),e.languages.cfscript=e.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,inside:{annotation:{pattern:/(?:^|[^.])@[\w\.]+/,alias:"punctuation"}}},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],keyword:/\b(?:abstract|break|catch|component|continue|default|do|else|extends|final|finally|for|function|if|in|include|package|private|property|public|remote|required|rethrow|return|static|switch|throw|try|var|while|xml)\b(?!\s*=)/,operator:[/\+\+|--|&&|\|\||::|=>|[!=]==|[-+*/%&|^!=<>]=?|\?(?:\.|:)?|:/,/\b(?:and|contains|eq|equal|eqv|gt|gte|imp|is|lt|lte|mod|not|or|xor)\b/],scope:{pattern:/\b(?:application|arguments|cgi|client|cookie|local|session|super|this|variables)\b/,alias:"global"},type:{pattern:/\b(?:any|array|binary|boolean|date|guid|numeric|query|string|struct|uuid|void|xml)\b/,alias:"builtin"}}),e.languages.insertBefore("cfscript","keyword",{"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"}}),delete e.languages.cfscript["class-name"],e.languages.cfc=e.languages.cfscript}mr.displayName="chaiscript";mr.aliases=[];function mr(e){e.register(W),e.register(ze),e.languages.chaiscript=e.languages.extend("clike",{string:{pattern:/(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,lookbehind:!0,greedy:!0},"class-name":[{pattern:/(\bclass\s+)\w+/,lookbehind:!0},{pattern:/(\b(?:attr|def)\s+)\w+(?=\s*::)/,lookbehind:!0}],keyword:/\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,number:[e.languages.cpp.number,/\b(?:Infinity|NaN)\b/],operator:/>>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/}),e.languages.insertBefore("chaiscript","operator",{"parameter-type":{pattern:/([,(]\s*)\w+(?=\s+\w)/,lookbehind:!0,alias:"class-name"}}),e.languages.insertBefore("chaiscript","string",{"string-interpolation":{pattern:/(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,lookbehind:!0,inside:{"interpolation-expression":{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:e.languages.chaiscript},"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"}}},string:/[\s\S]+/}}})}fr.displayName="cil";fr.aliases=[];function fr(e){e.languages.cil={comment:/\/\/.*/,string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},directive:{pattern:/(^|\W)\.[a-z]+(?=\s)/,lookbehind:!0,alias:"class-name"},variable:/\[[\w\.]+\]/,keyword:/\b(?:abstract|ansi|assembly|auto|autochar|beforefieldinit|bool|bstr|byvalstr|catch|char|cil|class|currency|date|decimal|default|enum|error|explicit|extends|extern|famandassem|family|famorassem|final(?:ly)?|float32|float64|hidebysig|u?int(?:8|16|32|64)?|iant|idispatch|implements|import|initonly|instance|interface|iunknown|literal|lpstr|lpstruct|lptstr|lpwstr|managed|method|native(?:Type)?|nested|newslot|object(?:ref)?|pinvokeimpl|private|privatescope|public|reqsecobj|rtspecialname|runtime|sealed|sequential|serializable|specialname|static|string|struct|syschar|tbstr|unicode|unmanagedexp|unsigned|value(?:type)?|variant|virtual|void)\b/,function:/\b(?:(?:constrained|no|readonly|tail|unaligned|volatile)\.)?(?:conv\.(?:[iu][1248]?|ovf\.[iu][1248]?(?:\.un)?|r\.un|r4|r8)|ldc\.(?:i4(?:\.\d+|\.[mM]1|\.s)?|i8|r4|r8)|ldelem(?:\.[iu][1248]?|\.r[48]|\.ref|a)?|ldind\.(?:[iu][1248]?|r[48]|ref)|stelem\.?(?:i[1248]?|r[48]|ref)?|stind\.(?:i[1248]?|r[48]|ref)?|end(?:fault|filter|finally)|ldarg(?:\.[0-3s]|a(?:\.s)?)?|ldloc(?:\.\d+|\.s)?|sub(?:\.ovf(?:\.un)?)?|mul(?:\.ovf(?:\.un)?)?|add(?:\.ovf(?:\.un)?)?|stloc(?:\.[0-3s])?|refany(?:type|val)|blt(?:\.un)?(?:\.s)?|ble(?:\.un)?(?:\.s)?|bgt(?:\.un)?(?:\.s)?|bge(?:\.un)?(?:\.s)?|unbox(?:\.any)?|init(?:blk|obj)|call(?:i|virt)?|brfalse(?:\.s)?|bne\.un(?:\.s)?|ldloca(?:\.s)?|brzero(?:\.s)?|brtrue(?:\.s)?|brnull(?:\.s)?|brinst(?:\.s)?|starg(?:\.s)?|leave(?:\.s)?|shr(?:\.un)?|rem(?:\.un)?|div(?:\.un)?|clt(?:\.un)?|alignment|castclass|ldvirtftn|beq(?:\.s)?|ckfinite|ldsflda|ldtoken|localloc|mkrefany|rethrow|cgt\.un|arglist|switch|stsfld|sizeof|newobj|newarr|ldsfld|ldnull|ldflda|isinst|throw|stobj|stfld|ldstr|ldobj|ldlen|ldftn|ldfld|cpobj|cpblk|break|br\.s|xor|shl|ret|pop|not|nop|neg|jmp|dup|cgt|ceq|box|and|or|br)\b/,boolean:/\b(?:false|true)\b/,number:/\b-?(?:0x[0-9a-f]+|\d+)(?:\.[0-9a-f]+)?\b/i,punctuation:/[{}[\];(),:=]|IL_[0-9A-Za-z]+/}}br.displayName="cilkc";br.aliases=["cilk-c"];function br(e){e.register(Ae),e.languages.cilkc=e.languages.insertBefore("c","function",{"parallel-keyword":{pattern:/\bcilk_(?:for|reducer|s(?:cope|pawn|ync))\b/,alias:"keyword"}}),e.languages["cilk-c"]=e.languages.cilkc}hr.displayName="cilkcpp";hr.aliases=["cilk","cilk-cpp"];function hr(e){e.register(ze),e.languages.cilkcpp=e.languages.insertBefore("cpp","function",{"parallel-keyword":{pattern:/\bcilk_(?:for|reducer|s(?:cope|pawn|ync))\b/,alias:"keyword"}}),e.languages["cilk-cpp"]=e.languages.cilkcpp,e.languages.cilk=e.languages.cilkcpp}yr.displayName="clojure";yr.aliases=[];function yr(e){e.languages.clojure={comment:{pattern:/;.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},char:/\\\w+/,symbol:{pattern:/(^|[\s()\[\]{},])::?[\w*+!?'<>=/.-]+/,lookbehind:!0},keyword:{pattern:/(\()(?:-|->|->>|\.|\.\.|\*|\/|\+|<|<=|=|==|>|>=|accessor|agent|agent-errors|aget|alength|all-ns|alter|and|append-child|apply|array-map|aset|aset-boolean|aset-byte|aset-char|aset-double|aset-float|aset-int|aset-long|aset-short|assert|assoc|await|await-for|bean|binding|bit-and|bit-not|bit-or|bit-shift-left|bit-shift-right|bit-xor|boolean|branch\?|butlast|byte|cast|char|children|class|clear-agent-errors|comment|commute|comp|comparator|complement|concat|cond|conj|cons|constantly|construct-proxy|contains\?|count|create-ns|create-struct|cycle|dec|declare|def|def-|definline|definterface|defmacro|defmethod|defmulti|defn|defn-|defonce|defproject|defprotocol|defrecord|defstruct|deftype|deref|difference|disj|dissoc|distinct|do|doall|doc|dorun|doseq|dosync|dotimes|doto|double|down|drop|drop-while|edit|end\?|ensure|eval|every\?|false\?|ffirst|file-seq|filter|find|find-doc|find-ns|find-var|first|float|flush|fn|fnseq|for|frest|gensym|get|get-proxy-class|hash-map|hash-set|identical\?|identity|if|if-let|if-not|import|in-ns|inc|index|insert-child|insert-left|insert-right|inspect-table|inspect-tree|instance\?|int|interleave|intersection|into|into-array|iterate|join|key|keys|keyword|keyword\?|last|lazy-cat|lazy-cons|left|lefts|let|line-seq|list|list\*|load|load-file|locking|long|loop|macroexpand|macroexpand-1|make-array|make-node|map|map-invert|map\?|mapcat|max|max-key|memfn|merge|merge-with|meta|min|min-key|monitor-enter|name|namespace|neg\?|new|newline|next|nil\?|node|not|not-any\?|not-every\?|not=|ns|ns-imports|ns-interns|ns-map|ns-name|ns-publics|ns-refers|ns-resolve|ns-unmap|nth|nthrest|or|parse|partial|path|peek|pop|pos\?|pr|pr-str|print|print-str|println|println-str|prn|prn-str|project|proxy|proxy-mappings|quot|quote|rand|rand-int|range|re-find|re-groups|re-matcher|re-matches|re-pattern|re-seq|read|read-line|recur|reduce|ref|ref-set|refer|rem|remove|remove-method|remove-ns|rename|rename-keys|repeat|replace|replicate|resolve|rest|resultset-seq|reverse|rfirst|right|rights|root|rrest|rseq|second|select|select-keys|send|send-off|seq|seq-zip|seq\?|set|set!|short|slurp|some|sort|sort-by|sorted-map|sorted-map-by|sorted-set|special-symbol\?|split-at|split-with|str|string\?|struct|struct-map|subs|subvec|symbol|symbol\?|sync|take|take-nth|take-while|test|throw|time|to-array|to-array-2d|tree-seq|true\?|try|union|up|update-proxy|val|vals|var|var-get|var-set|var\?|vector|vector-zip|vector\?|when|when-first|when-let|when-not|with-local-vars|with-meta|with-open|with-out-str|xml-seq|xml-zip|zero\?|zipmap|zipper)(?=[\s)]|$)/,lookbehind:!0},boolean:/\b(?:false|nil|true)\b/,number:{pattern:/(^|[^\w$@])(?:\d+(?:[/.]\d+)?(?:e[+-]?\d+)?|0x[a-f0-9]+|[1-9]\d?r[a-z0-9]+)[lmn]?(?![\w$@])/i,lookbehind:!0},function:{pattern:/((?:^|[^'])\()[\w*+!?'<>=/.-]+(?=[\s)]|$)/,lookbehind:!0},operator:/[#@^`~]/,punctuation:/[{}\[\](),]/}}Sr.displayName="cmake";Sr.aliases=[];function Sr(e){e.languages.cmake={comment:/#.*/,string:{pattern:/"(?:[^\\"]|\\.)*"/,greedy:!0,inside:{interpolation:{pattern:/\$\{(?:[^{}$]|\$\{[^{}$]*\})*\}/,inside:{punctuation:/\$\{|\}/,variable:/\w+/}}}},variable:/\b(?:CMAKE_\w+|\w+_(?:(?:BINARY|SOURCE)_DIR|DESCRIPTION|HOMEPAGE_URL|ROOT|VERSION(?:_MAJOR|_MINOR|_PATCH|_TWEAK)?)|(?:ANDROID|APPLE|BORLAND|BUILD_SHARED_LIBS|CACHE|CPACK_(?:ABSOLUTE_DESTINATION_FILES|COMPONENT_INCLUDE_TOPLEVEL_DIRECTORY|ERROR_ON_ABSOLUTE_INSTALL_DESTINATION|INCLUDE_TOPLEVEL_DIRECTORY|INSTALL_DEFAULT_DIRECTORY_PERMISSIONS|INSTALL_SCRIPT|PACKAGING_INSTALL_PREFIX|SET_DESTDIR|WARN_ON_ABSOLUTE_INSTALL_DESTINATION)|CTEST_(?:BINARY_DIRECTORY|BUILD_COMMAND|BUILD_NAME|BZR_COMMAND|BZR_UPDATE_OPTIONS|CHANGE_ID|CHECKOUT_COMMAND|CONFIGURATION_TYPE|CONFIGURE_COMMAND|COVERAGE_COMMAND|COVERAGE_EXTRA_FLAGS|CURL_OPTIONS|CUSTOM_(?:COVERAGE_EXCLUDE|ERROR_EXCEPTION|ERROR_MATCH|ERROR_POST_CONTEXT|ERROR_PRE_CONTEXT|MAXIMUM_FAILED_TEST_OUTPUT_SIZE|MAXIMUM_NUMBER_OF_(?:ERRORS|WARNINGS)|MAXIMUM_PASSED_TEST_OUTPUT_SIZE|MEMCHECK_IGNORE|POST_MEMCHECK|POST_TEST|PRE_MEMCHECK|PRE_TEST|TESTS_IGNORE|WARNING_EXCEPTION|WARNING_MATCH)|CVS_CHECKOUT|CVS_COMMAND|CVS_UPDATE_OPTIONS|DROP_LOCATION|DROP_METHOD|DROP_SITE|DROP_SITE_CDASH|DROP_SITE_PASSWORD|DROP_SITE_USER|EXTRA_COVERAGE_GLOB|GIT_COMMAND|GIT_INIT_SUBMODULES|GIT_UPDATE_CUSTOM|GIT_UPDATE_OPTIONS|HG_COMMAND|HG_UPDATE_OPTIONS|LABELS_FOR_SUBPROJECTS|MEMORYCHECK_(?:COMMAND|COMMAND_OPTIONS|SANITIZER_OPTIONS|SUPPRESSIONS_FILE|TYPE)|NIGHTLY_START_TIME|P4_CLIENT|P4_COMMAND|P4_OPTIONS|P4_UPDATE_OPTIONS|RUN_CURRENT_SCRIPT|SCP_COMMAND|SITE|SOURCE_DIRECTORY|SUBMIT_URL|SVN_COMMAND|SVN_OPTIONS|SVN_UPDATE_OPTIONS|TEST_LOAD|TEST_TIMEOUT|TRIGGER_SITE|UPDATE_COMMAND|UPDATE_OPTIONS|UPDATE_VERSION_ONLY|USE_LAUNCHERS)|CYGWIN|ENV|EXECUTABLE_OUTPUT_PATH|GHS-MULTI|IOS|LIBRARY_OUTPUT_PATH|MINGW|MSVC(?:10|11|12|14|60|70|71|80|90|_IDE|_TOOLSET_VERSION|_VERSION)?|MSYS|PROJECT_NAME|UNIX|WIN32|WINCE|WINDOWS_PHONE|WINDOWS_STORE|XCODE))\b/,property:/\b(?:cxx_\w+|(?:ARCHIVE_OUTPUT_(?:DIRECTORY|NAME)|COMPILE_DEFINITIONS|COMPILE_PDB_NAME|COMPILE_PDB_OUTPUT_DIRECTORY|EXCLUDE_FROM_DEFAULT_BUILD|IMPORTED_(?:IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_LANGUAGES|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|NO_SONAME|OBJECTS|SONAME)|INTERPROCEDURAL_OPTIMIZATION|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_OUTPUT_NAME|LINK_FLAGS|LINK_INTERFACE_LIBRARIES|LINK_INTERFACE_MULTIPLICITY|LOCATION|MAP_IMPORTED_CONFIG|OSX_ARCHITECTURES|OUTPUT_NAME|PDB_NAME|PDB_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_DIRECTORY|RUNTIME_OUTPUT_NAME|STATIC_LIBRARY_FLAGS|VS_CSHARP|VS_DOTNET_REFERENCEPROP|VS_DOTNET_REFERENCE|VS_GLOBAL_SECTION_POST|VS_GLOBAL_SECTION_PRE|VS_GLOBAL|XCODE_ATTRIBUTE)_\w+|\w+_(?:CLANG_TIDY|COMPILER_LAUNCHER|CPPCHECK|CPPLINT|INCLUDE_WHAT_YOU_USE|OUTPUT_NAME|POSTFIX|VISIBILITY_PRESET)|ABSTRACT|ADDITIONAL_MAKE_CLEAN_FILES|ADVANCED|ALIASED_TARGET|ALLOW_DUPLICATE_CUSTOM_TARGETS|ANDROID_(?:ANT_ADDITIONAL_OPTIONS|API|API_MIN|ARCH|ASSETS_DIRECTORIES|GUI|JAR_DEPENDENCIES|NATIVE_LIB_DEPENDENCIES|NATIVE_LIB_DIRECTORIES|PROCESS_MAX|PROGUARD|PROGUARD_CONFIG_PATH|SECURE_PROPS_PATH|SKIP_ANT_STEP|STL_TYPE)|ARCHIVE_OUTPUT_DIRECTORY|ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|AUTOGEN_(?:BUILD_DIR|ORIGIN_DEPENDS|PARALLEL|SOURCE_GROUP|TARGETS_FOLDER|TARGET_DEPENDS)|AUTOMOC|AUTOMOC_(?:COMPILER_PREDEFINES|DEPEND_FILTERS|EXECUTABLE|MACRO_NAMES|MOC_OPTIONS|SOURCE_GROUP|TARGETS_FOLDER)|AUTORCC|AUTORCC_EXECUTABLE|AUTORCC_OPTIONS|AUTORCC_SOURCE_GROUP|AUTOUIC|AUTOUIC_EXECUTABLE|AUTOUIC_OPTIONS|AUTOUIC_SEARCH_PATHS|BINARY_DIR|BUILDSYSTEM_TARGETS|BUILD_RPATH|BUILD_RPATH_USE_ORIGIN|BUILD_WITH_INSTALL_NAME_DIR|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE_EXTENSION|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMMON_LANGUAGE_RUNTIME|COMPATIBLE_INTERFACE_(?:BOOL|NUMBER_MAX|NUMBER_MIN|STRING)|COMPILE_(?:DEFINITIONS|FEATURES|FLAGS|OPTIONS|PDB_NAME|PDB_OUTPUT_DIRECTORY)|COST|CPACK_DESKTOP_SHORTCUTS|CPACK_NEVER_OVERWRITE|CPACK_PERMANENT|CPACK_STARTUP_SHORTCUTS|CPACK_START_MENU_SHORTCUTS|CPACK_WIX_ACL|CROSSCOMPILING_EMULATOR|CUDA_EXTENSIONS|CUDA_PTX_COMPILATION|CUDA_RESOLVE_DEVICE_SYMBOLS|CUDA_SEPARABLE_COMPILATION|CUDA_STANDARD|CUDA_STANDARD_REQUIRED|CXX_EXTENSIONS|CXX_STANDARD|CXX_STANDARD_REQUIRED|C_EXTENSIONS|C_STANDARD|C_STANDARD_REQUIRED|DEBUG_CONFIGURATIONS|DEFINE_SYMBOL|DEFINITIONS|DEPENDS|DEPLOYMENT_ADDITIONAL_FILES|DEPLOYMENT_REMOTE_DIRECTORY|DISABLED|DISABLED_FEATURES|ECLIPSE_EXTRA_CPROJECT_CONTENTS|ECLIPSE_EXTRA_NATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|ENABLE_EXPORTS|ENVIRONMENT|EXCLUDE_FROM_ALL|EXCLUDE_FROM_DEFAULT_BUILD|EXPORT_NAME|EXPORT_PROPERTIES|EXTERNAL_OBJECT|EchoString|FAIL_REGULAR_EXPRESSION|FIND_LIBRARY_USE_LIB32_PATHS|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_LIBX32_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|FIXTURES_CLEANUP|FIXTURES_REQUIRED|FIXTURES_SETUP|FOLDER|FRAMEWORK|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GENERATED|GENERATOR_FILE_NAME|GENERATOR_IS_MULTI_CONFIG|GHS_INTEGRITY_APP|GHS_NO_SOURCE_GROUP_FILE|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|GNUtoMS|HAS_CXX|HEADER_FILE_ONLY|HELPSTRING|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(?:COMMON_LANGUAGE_RUNTIME|CONFIGURATIONS|GLOBAL|IMPLIB|LIBNAME|LINK_DEPENDENT_LIBRARIES|LINK_INTERFACE_(?:LANGUAGES|LIBRARIES|MULTIPLICITY)|LOCATION|NO_SONAME|OBJECTS|SONAME)|IMPORT_PREFIX|IMPORT_SUFFIX|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE_(?:AUTOUIC_OPTIONS|COMPILE_DEFINITIONS|COMPILE_FEATURES|COMPILE_OPTIONS|INCLUDE_DIRECTORIES|LINK_DEPENDS|LINK_DIRECTORIES|LINK_LIBRARIES|LINK_OPTIONS|POSITION_INDEPENDENT_CODE|SOURCES|SYSTEM_INCLUDE_DIRECTORIES)|INTERPROCEDURAL_OPTIMIZATION|IN_TRY_COMPILE|IOS_INSTALL_COMBINED|JOB_POOLS|JOB_POOL_COMPILE|JOB_POOL_LINK|KEEP_EXTENSION|LABELS|LANGUAGE|LIBRARY_OUTPUT_DIRECTORY|LINKER_LANGUAGE|LINK_(?:DEPENDS|DEPENDS_NO_SHARED|DIRECTORIES|FLAGS|INTERFACE_LIBRARIES|INTERFACE_MULTIPLICITY|LIBRARIES|OPTIONS|SEARCH_END_STATIC|SEARCH_START_STATIC|WHAT_YOU_USE)|LISTFILE_STACK|LOCATION|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MACOSX_PACKAGE_LOCATION|MACOSX_RPATH|MACROS|MANUALLY_ADDED_DEPENDENCIES|MEASUREMENT|MODIFIED|NAME|NO_SONAME|NO_SYSTEM_FROM_IMPORTED|OBJECT_DEPENDS|OBJECT_OUTPUTS|OSX_ARCHITECTURES|OUTPUT_NAME|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PARENT_DIRECTORY|PASS_REGULAR_EXPRESSION|PDB_NAME|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|POST_INSTALL_SCRIPT|PREDEFINED_TARGETS_FOLDER|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE_HEADER|PROCESSORS|PROCESSOR_AFFINITY|PROJECT_LABEL|PUBLIC_HEADER|REPORT_UNDEFINED_PROPERTIES|REQUIRED_FILES|RESOURCE|RESOURCE_LOCK|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|RUNTIME_OUTPUT_DIRECTORY|RUN_SERIAL|SKIP_AUTOGEN|SKIP_AUTOMOC|SKIP_AUTORCC|SKIP_AUTOUIC|SKIP_BUILD_RPATH|SKIP_RETURN_CODE|SOURCES|SOURCE_DIR|SOVERSION|STATIC_LIBRARY_FLAGS|STATIC_LIBRARY_OPTIONS|STRINGS|SUBDIRECTORIES|SUFFIX|SYMBOLIC|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_MESSAGES|TARGET_SUPPORTS_SHARED_LIBS|TESTS|TEST_INCLUDE_FILE|TEST_INCLUDE_FILES|TIMEOUT|TIMEOUT_AFTER_MATCH|TYPE|USE_FOLDERS|VALUE|VARIABLES|VERSION|VISIBILITY_INLINES_HIDDEN|VS_(?:CONFIGURATION_TYPE|COPY_TO_OUT_DIR|DEBUGGER_(?:COMMAND|COMMAND_ARGUMENTS|ENVIRONMENT|WORKING_DIRECTORY)|DEPLOYMENT_CONTENT|DEPLOYMENT_LOCATION|DOTNET_REFERENCES|DOTNET_REFERENCES_COPY_LOCAL|INCLUDE_IN_VSIX|IOT_STARTUP_TASK|KEYWORD|RESOURCE_GENERATOR|SCC_AUXPATH|SCC_LOCALPATH|SCC_PROJECTNAME|SCC_PROVIDER|SDK_REFERENCES|SHADER_(?:DISABLE_OPTIMIZATIONS|ENABLE_DEBUG|ENTRYPOINT|FLAGS|MODEL|OBJECT_FILE_NAME|OUTPUT_HEADER_FILE|TYPE|VARIABLE_NAME)|STARTUP_PROJECT|TOOL_OVERRIDE|USER_PROPS|WINRT_COMPONENT|WINRT_EXTENSIONS|WINRT_REFERENCES|XAML_TYPE)|WILL_FAIL|WIN32_EXECUTABLE|WINDOWS_EXPORT_ALL_SYMBOLS|WORKING_DIRECTORY|WRAP_EXCLUDE|XCODE_(?:EMIT_EFFECTIVE_PLATFORM_NAME|EXPLICIT_FILE_TYPE|FILE_ATTRIBUTES|LAST_KNOWN_FILE_TYPE|PRODUCT_TYPE|SCHEME_(?:ADDRESS_SANITIZER|ADDRESS_SANITIZER_USE_AFTER_RETURN|ARGUMENTS|DISABLE_MAIN_THREAD_CHECKER|DYNAMIC_LIBRARY_LOADS|DYNAMIC_LINKER_API_USAGE|ENVIRONMENT|EXECUTABLE|GUARD_MALLOC|MAIN_THREAD_CHECKER_STOP|MALLOC_GUARD_EDGES|MALLOC_SCRIBBLE|MALLOC_STACK|THREAD_SANITIZER(?:_STOP)?|UNDEFINED_BEHAVIOUR_SANITIZER(?:_STOP)?|ZOMBIE_OBJECTS))|XCTEST)\b/,keyword:/\b(?:add_compile_definitions|add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_link_options|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_parse_arguments|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_guard|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_directories|target_link_libraries|target_link_options|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)(?=\s*\()\b/,boolean:/\b(?:FALSE|OFF|ON|TRUE)\b/,namespace:/\b(?:INTERFACE|PRIVATE|PROPERTIES|PUBLIC|SHARED|STATIC|TARGET_OBJECTS)\b/,operator:/\b(?:AND|DEFINED|EQUAL|GREATER|LESS|MATCHES|NOT|OR|STREQUAL|STRGREATER|STRLESS|VERSION_EQUAL|VERSION_GREATER|VERSION_LESS)\b/,inserted:{pattern:/\b\w+::\w+\b/,alias:"class-name"},number:/\b\d+(?:\.\d+)*\b/,function:/\b[a-z_]\w*(?=\s*\()\b/i,punctuation:/[()>}]|\$[<{]/}}Er.displayName="cobol";Er.aliases=[];function Er(e){e.languages.cobol={comment:{pattern:/\*>.*|(^[ \t]*)\*.*/m,lookbehind:!0,greedy:!0},string:{pattern:/[xzgn]?(?:"(?:[^\r\n"]|"")*"(?!")|'(?:[^\r\n']|'')*'(?!'))/i,greedy:!0},level:{pattern:/(^[ \t]*)\d+\b/m,lookbehind:!0,greedy:!0,alias:"number"},"class-name":{pattern:/(\bpic(?:ture)?\s+)(?:(?:[-\w$/,:*+<>]|\.(?!\s|$))(?:\(\d+\))?)+/i,lookbehind:!0,inside:{number:{pattern:/(\()\d+/,lookbehind:!0},punctuation:/[()]/}},keyword:{pattern:/(^|[^\w-])(?:ABORT|ACCEPT|ACCESS|ADD|ADDRESS|ADVANCING|AFTER|ALIGNED|ALL|ALPHABET|ALPHABETIC|ALPHABETIC-LOWER|ALPHABETIC-UPPER|ALPHANUMERIC|ALPHANUMERIC-EDITED|ALSO|ALTER|ALTERNATE|ANY|ARE|AREA|AREAS|AS|ASCENDING|ASCII|ASSIGN|ASSOCIATED-DATA|ASSOCIATED-DATA-LENGTH|AT|ATTRIBUTE|AUTHOR|AUTO|AUTO-SKIP|BACKGROUND-COLOR|BACKGROUND-COLOUR|BASIS|BEEP|BEFORE|BEGINNING|BELL|BINARY|BIT|BLANK|BLINK|BLOCK|BOTTOM|BOUNDS|BY|BYFUNCTION|BYTITLE|CALL|CANCEL|CAPABLE|CCSVERSION|CD|CF|CH|CHAINING|CHANGED|CHANNEL|CHARACTER|CHARACTERS|CLASS|CLASS-ID|CLOCK-UNITS|CLOSE|CLOSE-DISPOSITION|COBOL|CODE|CODE-SET|COL|COLLATING|COLUMN|COM-REG|COMMA|COMMITMENT|COMMON|COMMUNICATION|COMP|COMP-1|COMP-2|COMP-3|COMP-4|COMP-5|COMPUTATIONAL|COMPUTATIONAL-1|COMPUTATIONAL-2|COMPUTATIONAL-3|COMPUTATIONAL-4|COMPUTATIONAL-5|COMPUTE|CONFIGURATION|CONTAINS|CONTENT|CONTINUE|CONTROL|CONTROL-POINT|CONTROLS|CONVENTION|CONVERTING|COPY|CORR|CORRESPONDING|COUNT|CRUNCH|CURRENCY|CURSOR|DATA|DATA-BASE|DATE|DATE-COMPILED|DATE-WRITTEN|DAY|DAY-OF-WEEK|DBCS|DE|DEBUG-CONTENTS|DEBUG-ITEM|DEBUG-LINE|DEBUG-NAME|DEBUG-SUB-1|DEBUG-SUB-2|DEBUG-SUB-3|DEBUGGING|DECIMAL-POINT|DECLARATIVES|DEFAULT|DEFAULT-DISPLAY|DEFINITION|DELETE|DELIMITED|DELIMITER|DEPENDING|DESCENDING|DESTINATION|DETAIL|DFHRESP|DFHVALUE|DISABLE|DISK|DISPLAY|DISPLAY-1|DIVIDE|DIVISION|DONTCARE|DOUBLE|DOWN|DUPLICATES|DYNAMIC|EBCDIC|EGCS|EGI|ELSE|EMI|EMPTY-CHECK|ENABLE|END|END-ACCEPT|END-ADD|END-CALL|END-COMPUTE|END-DELETE|END-DIVIDE|END-EVALUATE|END-IF|END-MULTIPLY|END-OF-PAGE|END-PERFORM|END-READ|END-RECEIVE|END-RETURN|END-REWRITE|END-SEARCH|END-START|END-STRING|END-SUBTRACT|END-UNSTRING|END-WRITE|ENDING|ENTER|ENTRY|ENTRY-PROCEDURE|ENVIRONMENT|EOL|EOP|EOS|ERASE|ERROR|ESCAPE|ESI|EVALUATE|EVENT|EVERY|EXCEPTION|EXCLUSIVE|EXHIBIT|EXIT|EXPORT|EXTEND|EXTENDED|EXTERNAL|FD|FILE|FILE-CONTROL|FILLER|FINAL|FIRST|FOOTING|FOR|FOREGROUND-COLOR|FOREGROUND-COLOUR|FROM|FULL|FUNCTION|FUNCTION-POINTER|FUNCTIONNAME|GENERATE|GIVING|GLOBAL|GO|GOBACK|GRID|GROUP|HEADING|HIGH-VALUE|HIGH-VALUES|HIGHLIGHT|I-O|I-O-CONTROL|ID|IDENTIFICATION|IF|IMPLICIT|IMPORT|IN|INDEX|INDEXED|INDICATE|INITIAL|INITIALIZE|INITIATE|INPUT|INPUT-OUTPUT|INSPECT|INSTALLATION|INTEGER|INTO|INVALID|INVOKE|IS|JUST|JUSTIFIED|KANJI|KEPT|KEY|KEYBOARD|LABEL|LANGUAGE|LAST|LB|LD|LEADING|LEFT|LEFTLINE|LENGTH|LENGTH-CHECK|LIBACCESS|LIBPARAMETER|LIBRARY|LIMIT|LIMITS|LINAGE|LINAGE-COUNTER|LINE|LINE-COUNTER|LINES|LINKAGE|LIST|LOCAL|LOCAL-STORAGE|LOCK|LONG-DATE|LONG-TIME|LOW-VALUE|LOW-VALUES|LOWER|LOWLIGHT|MEMORY|MERGE|MESSAGE|MMDDYYYY|MODE|MODULES|MORE-LABELS|MOVE|MULTIPLE|MULTIPLY|NAMED|NATIONAL|NATIONAL-EDITED|NATIVE|NEGATIVE|NETWORK|NEXT|NO|NO-ECHO|NULL|NULLS|NUMBER|NUMERIC|NUMERIC-DATE|NUMERIC-EDITED|NUMERIC-TIME|OBJECT-COMPUTER|OCCURS|ODT|OF|OFF|OMITTED|ON|OPEN|OPTIONAL|ORDER|ORDERLY|ORGANIZATION|OTHER|OUTPUT|OVERFLOW|OVERLINE|OWN|PACKED-DECIMAL|PADDING|PAGE|PAGE-COUNTER|PASSWORD|PERFORM|PF|PH|PIC|PICTURE|PLUS|POINTER|PORT|POSITION|POSITIVE|PRINTER|PRINTING|PRIVATE|PROCEDURE|PROCEDURE-POINTER|PROCEDURES|PROCEED|PROCESS|PROGRAM|PROGRAM-ID|PROGRAM-LIBRARY|PROMPT|PURGE|QUEUE|QUOTE|QUOTES|RANDOM|RD|READ|READER|REAL|RECEIVE|RECEIVED|RECORD|RECORDING|RECORDS|RECURSIVE|REDEFINES|REEL|REF|REFERENCE|REFERENCES|RELATIVE|RELEASE|REMAINDER|REMARKS|REMOTE|REMOVAL|REMOVE|RENAMES|REPLACE|REPLACING|REPORT|REPORTING|REPORTS|REQUIRED|RERUN|RESERVE|RESET|RETURN|RETURN-CODE|RETURNING|REVERSE-VIDEO|REVERSED|REWIND|REWRITE|RF|RH|RIGHT|ROUNDED|RUN|SAME|SAVE|SCREEN|SD|SEARCH|SECTION|SECURE|SECURITY|SEGMENT|SEGMENT-LIMIT|SELECT|SEND|SENTENCE|SEPARATE|SEQUENCE|SEQUENTIAL|SET|SHARED|SHAREDBYALL|SHAREDBYRUNUNIT|SHARING|SHIFT-IN|SHIFT-OUT|SHORT-DATE|SIGN|SIZE|SORT|SORT-CONTROL|SORT-CORE-SIZE|SORT-FILE-SIZE|SORT-MERGE|SORT-MESSAGE|SORT-MODE-SIZE|SORT-RETURN|SOURCE|SOURCE-COMPUTER|SPACE|SPACES|SPECIAL-NAMES|STANDARD|STANDARD-1|STANDARD-2|START|STATUS|STOP|STRING|SUB-QUEUE-1|SUB-QUEUE-2|SUB-QUEUE-3|SUBTRACT|SUM|SUPPRESS|SYMBOL|SYMBOLIC|SYNC|SYNCHRONIZED|TABLE|TALLY|TALLYING|TAPE|TASK|TERMINAL|TERMINATE|TEST|TEXT|THEN|THREAD|THREAD-LOCAL|THROUGH|THRU|TIME|TIMER|TIMES|TITLE|TO|TODAYS-DATE|TODAYS-NAME|TOP|TRAILING|TRUNCATED|TYPE|TYPEDEF|UNDERLINE|UNIT|UNSTRING|UNTIL|UP|UPON|USAGE|USE|USING|VALUE|VALUES|VARYING|VIRTUAL|WAIT|WHEN|WHEN-COMPILED|WITH|WORDS|WORKING-STORAGE|WRITE|YEAR|YYYYDDD|YYYYMMDD|ZERO-FILL|ZEROES|ZEROS)(?![\w-])/i,lookbehind:!0},boolean:{pattern:/(^|[^\w-])(?:false|true)(?![\w-])/i,lookbehind:!0},number:{pattern:/(^|[^\w-])(?:[+-]?(?:(?:\d+(?:[.,]\d+)?|[.,]\d+)(?:e[+-]?\d+)?|zero))(?![\w-])/i,lookbehind:!0},operator:[/<>|[<>]=?|[=+*/&]/,{pattern:/(^|[^\w-])(?:-|and|equal|greater|less|not|or|than)(?![\w-])/i,lookbehind:!0}],punctuation:/[.:,()]/}}Ar.displayName="coffeescript";Ar.aliases=["coffee"];function Ar(e){e.register(ie),(function(t){var n=/#(?!\{).+/,r={pattern:/#\{[^}]+\}/,alias:"variable"};t.languages.coffeescript=t.languages.extend("javascript",{comment:n,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:r}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),t.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:n,interpolation:r}}}),t.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:t.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:r}}]}),t.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete t.languages.coffeescript["template-string"],t.languages.coffee=t.languages.coffeescript})(e)}Tr.displayName="concurnas";Tr.aliases=["conc"];function Tr(e){e.languages.concurnas={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\/\/.*)/,lookbehind:!0,greedy:!0},langext:{pattern:/\b\w+\s*\|\|[\s\S]+?\|\|/,greedy:!0,inside:{"class-name":/^\w+/,string:{pattern:/(^\s*\|\|)[\s\S]+(?=\|\|$)/,lookbehind:!0},punctuation:/\|\|/}},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/,lookbehind:!0},keyword:/\b(?:abstract|actor|also|annotation|assert|async|await|bool|boolean|break|byte|case|catch|changed|char|class|closed|constant|continue|def|default|del|double|elif|else|enum|every|extends|false|finally|float|for|from|global|gpudef|gpukernel|if|import|in|init|inject|int|lambda|local|long|loop|match|new|nodefault|null|of|onchange|open|out|override|package|parfor|parforsync|post|pre|private|protected|provide|provider|public|return|shared|short|single|size_t|sizeof|super|sync|this|throw|trait|trans|transient|true|try|typedef|unchecked|using|val|var|void|while|with)\b/,boolean:/\b(?:false|true)\b/,number:/\b0b[01][01_]*L?\b|\b0x(?:[\da-f_]*\.)?[\da-f_p+-]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfls]?/i,punctuation:/[{}[\];(),.:]/,operator:/<==|>==|=>|->|<-|<>|&==|&<>|\?:?|\.\?|\+\+|--|[-+*/=<>]=?|[!^~]|\b(?:and|as|band|bor|bxor|comp|is|isnot|mod|or)\b=?/,annotation:{pattern:/@(?:\w+:)?(?:\w+|\[[^\]]+\])?/,alias:"builtin"}},e.languages.insertBefore("concurnas","langext",{"regex-literal":{pattern:/\br("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:e.languages.concurnas},regex:/[\s\S]+/}},"string-literal":{pattern:/(?:\B|\bs)("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:e.languages.concurnas},string:/[\s\S]+/}}}),e.languages.conc=e.languages.concurnas}wr.displayName="csp";wr.aliases=[];function wr(e){(function(t){function n(r){return RegExp(/([ \t])/.source+"(?:"+r+")"+/(?=[\s;]|$)/.source,"i")}t.languages.csp={directive:{pattern:/(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i,lookbehind:!0,alias:"property"},scheme:{pattern:n(/[a-z][a-z0-9.+-]*:/.source),lookbehind:!0},none:{pattern:n(/'none'/.source),lookbehind:!0,alias:"keyword"},nonce:{pattern:n(/'nonce-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},hash:{pattern:n(/'sha(?:256|384|512)-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},host:{pattern:n(/[a-z][a-z0-9.+-]*:\/\/[^\s;,']*/.source+"|"+/\*[^\s;,']*/.source+"|"+/[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::[\d*]+)?(?:\/[^\s;,']*)?/.source),lookbehind:!0,alias:"url",inside:{important:/\*/}},keyword:[{pattern:n(/'unsafe-[a-z-]+'/.source),lookbehind:!0,alias:"unsafe"},{pattern:n(/'[a-z-]+'/.source),lookbehind:!0,alias:"safe"}],punctuation:/;/}})(e)}Ir.displayName="cooklang";Ir.aliases=[];function Ir(e){(function(t){var n=/(?:(?!\s)[\d$+<=a-zA-Z\x80-\uFFFF])+/.source,r=/[^{}@#]+/.source,a=/\{[^}#@]*\}/.source,i=r+a,o=/(?:h|hours|hrs|m|min|minutes)/.source,s={pattern:/\{[^{}]*\}/,inside:{amount:{pattern:/([\{|])[^{}|*%]+/,lookbehind:!0,alias:"number"},unit:{pattern:/(%)[^}]+/,lookbehind:!0,alias:"symbol"},"servings-scaler":{pattern:/\*/,alias:"operator"},"servings-alternative-separator":{pattern:/\|/,alias:"operator"},"unit-separator":{pattern:/(?:%|(\*)%)/,lookbehind:!0,alias:"operator"},punctuation:/[{}]/}};t.languages.cooklang={comment:{pattern:/\[-[\s\S]*?-\]|--.*/,greedy:!0},meta:{pattern:/>>.*:.*/,inside:{property:{pattern:/(>>\s*)[^\s:](?:[^:]*[^\s:])?/,lookbehind:!0}}},"cookware-group":{pattern:new RegExp("#(?:"+i+"|"+n+")"),inside:{cookware:{pattern:new RegExp("(^#)(?:"+r+")"),lookbehind:!0,alias:"variable"},"cookware-keyword":{pattern:/^#/,alias:"keyword"},"quantity-group":{pattern:new RegExp(/\{[^{}@#]*\}/),inside:{quantity:{pattern:new RegExp(/(^\{)/.source+r),lookbehind:!0,alias:"number"},punctuation:/[{}]/}}}},"ingredient-group":{pattern:new RegExp("@(?:"+i+"|"+n+")"),inside:{ingredient:{pattern:new RegExp("(^@)(?:"+r+")"),lookbehind:!0,alias:"variable"},"ingredient-keyword":{pattern:/^@/,alias:"keyword"},"amount-group":s}},"timer-group":{pattern:/~(?!\s)[^@#~{}]*\{[^{}]*\}/,inside:{timer:{pattern:/(^~)[^{]+/,lookbehind:!0,alias:"variable"},"duration-group":{pattern:/\{[^{}]*\}/,inside:{punctuation:/[{}]/,unit:{pattern:new RegExp(/(%\s*)/.source+o+/\b/.source),lookbehind:!0,alias:"symbol"},operator:/%/,duration:{pattern:/\d+/,alias:"number"}}},"timer-keyword":{pattern:/^~/,alias:"keyword"}}}}})(e)}vr.displayName="coq";vr.aliases=[];function vr(e){(function(t){for(var n=/\(\*(?:[^(*]|\((?!\*)|\*(?!\))|<self>)*\*\)/.source,r=0;r<2;r++)n=n.replace(/<self>/g,function(){return n});n=n.replace(/<self>/g,"[]"),t.languages.coq={comment:RegExp(n),string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},attribute:[{pattern:RegExp(/#\[(?:[^\[\]("]|"(?:[^"]|"")*"(?!")|\((?!\*)|<comment>)*\]/.source.replace(/<comment>/g,function(){return n})),greedy:!0,alias:"attr-name",inside:{comment:RegExp(n),string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},operator:/=/,punctuation:/^#\[|\]$|[,()]/}},{pattern:/\b(?:Cumulative|Global|Local|Monomorphic|NonCumulative|Polymorphic|Private|Program)\b/,alias:"attr-name"}],keyword:/\b(?:Abort|About|Add|Admit|Admitted|All|Arguments|As|Assumptions|Axiom|Axioms|Back|BackTo|Backtrace|BinOp|BinOpSpec|BinRel|Bind|Blacklist|Canonical|Case|Cd|Check|Class|Classes|Close|CoFixpoint|CoInductive|Coercion|Coercions|Collection|Combined|Compute|Conjecture|Conjectures|Constant|Constants|Constraint|Constructors|Context|Corollary|Create|CstOp|Custom|Cut|Debug|Declare|Defined|Definition|Delimit|Dependencies|Dependent|Derive|Diffs|Drop|Elimination|End|Entry|Equality|Eval|Example|Existential|Existentials|Existing|Export|Extern|Extraction|Fact|Fail|Field|File|Firstorder|Fixpoint|Flags|Focus|From|Funclass|Function|Functional|GC|Generalizable|Goal|Grab|Grammar|Graph|Guarded|Haskell|Heap|Hide|Hint|HintDb|Hints|Hypotheses|Hypothesis|IF|Identity|Immediate|Implicit|Implicits|Import|Include|Induction|Inductive|Infix|Info|Initial|InjTyp|Inline|Inspect|Instance|Instances|Intro|Intros|Inversion|Inversion_clear|JSON|Language|Left|Lemma|Let|Lia|Libraries|Library|Load|LoadPath|Locate|Ltac|Ltac2|ML|Match|Method|Minimality|Module|Modules|Morphism|Next|NoInline|Notation|Number|OCaml|Obligation|Obligations|Opaque|Open|Optimize|Parameter|Parameters|Parametric|Path|Paths|Prenex|Preterm|Primitive|Print|Profile|Projections|Proof|Prop|PropBinOp|PropOp|PropUOp|Property|Proposition|Pwd|Qed|Quit|Rec|Record|Recursive|Redirect|Reduction|Register|Relation|Remark|Remove|Require|Reserved|Reset|Resolve|Restart|Rewrite|Right|Ring|Rings|SProp|Saturate|Save|Scheme|Scope|Scopes|Search|SearchHead|SearchPattern|SearchRewrite|Section|Separate|Set|Setoid|Show|Signatures|Solve|Solver|Sort|Sortclass|Sorted|Spec|Step|Strategies|Strategy|String|Structure|SubClass|Subgraph|SuchThat|Tactic|Term|TestCompile|Theorem|Time|Timeout|To|Transparent|Type|Typeclasses|Types|Typing|UnOp|UnOpSpec|Undelimit|Undo|Unfocus|Unfocused|Unfold|Universe|Universes|Unshelve|Variable|Variables|Variant|Verbose|View|Visibility|Zify|_|apply|as|at|by|cofix|else|end|exists|exists2|fix|for|forall|fun|if|in|let|match|measure|move|removed|return|struct|then|using|wf|where|with)\b/,number:/\b(?:0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]+)?(?:p[+-]?\d[\d_]*)?|\d[\d_]*(?:\.[\d_]+)?(?:e[+-]?\d[\d_]*)?)\b/i,punct:{pattern:/@\{|\{\||\[=|:>/,alias:"punctuation"},operator:/\/\\|\\\/|\.{2,3}|:{1,2}=|\*\*|[-=]>|<(?:->?|[+:=>]|<:)|>(?:=|->)|\|[-|]?|[-!%&*+/<=>?@^~']/,punctuation:/\.\(|`\(|@\{|`\{|\{\||\[=|:>|[:.,;(){}\[\]]/}})(e)}Ve.displayName="ruby";Ve.aliases=["rb"];function Ve(e){e.register(W),(function(t){t.languages.ruby=t.languages.extend("clike",{comment:{pattern:/#.*|^=begin\s[\s\S]*?^=end/m,greedy:!0},"class-name":{pattern:/(\b(?:class|module)\s+|\bcatch\s+\()[\w.\\]+|\b[A-Z_]\w*(?=\s*\.\s*new\b)/,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/,operator:/\.{2,3}|&\.|===|<?=>|[!=]?~|(?:&&|\|\||<<|>>|\*\*|[+\-*/%<>!^&|=])=?|[?:]/,punctuation:/[(){}[\].,;]/}),t.languages.insertBefore("ruby","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}});var n={pattern:/((?:^|[^\\])(?:\\{2})*)#\{(?:[^{}]|\{[^{}]*\})*\}/,lookbehind:!0,inside:{content:{pattern:/^(#\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:t.languages.ruby},delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"}}};delete t.languages.ruby.function;var r="(?:"+[/([^a-zA-Z0-9\s{(\[<=])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,/\((?:[^()\\]|\\[\s\S]|\((?:[^()\\]|\\[\s\S])*\))*\)/.source,/\{(?:[^{}\\]|\\[\s\S]|\{(?:[^{}\\]|\\[\s\S])*\})*\}/.source,/\[(?:[^\[\]\\]|\\[\s\S]|\[(?:[^\[\]\\]|\\[\s\S])*\])*\]/.source,/<(?:[^<>\\]|\\[\s\S]|<(?:[^<>\\]|\\[\s\S])*>)*>/.source].join("|")+")",a=/(?:"(?:\\.|[^"\\\r\n])*"|(?:\b[a-zA-Z_]\w*|[^\s\0-\x7F]+)[?!]?|\$.)/.source;t.languages.insertBefore("ruby","keyword",{"regex-literal":[{pattern:RegExp(/%r/.source+r+/[egimnosux]{0,6}/.source),greedy:!0,inside:{interpolation:n,regex:/[\s\S]+/}},{pattern:/(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,lookbehind:!0,greedy:!0,inside:{interpolation:n,regex:/[\s\S]+/}}],variable:/[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,symbol:[{pattern:RegExp(/(^|[^:]):/.source+a),lookbehind:!0,greedy:!0},{pattern:RegExp(/([\r\n{(,][ \t]*)/.source+a+/(?=:(?!:))/.source),lookbehind:!0,greedy:!0}],"method-definition":{pattern:/(\bdef\s+)\w+(?:\s*\.\s*\w+)?/,lookbehind:!0,inside:{function:/\b\w+$/,keyword:/^self\b/,"class-name":/^\w+/,punctuation:/\./}}}),t.languages.insertBefore("ruby","string",{"string-literal":[{pattern:RegExp(/%[qQiIwWs]?/.source+r),greedy:!0,inside:{interpolation:n,string:/[\s\S]+/}},{pattern:/("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,greedy:!0,inside:{interpolation:n,string:/[\s\S]+/}},{pattern:/<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?[a-z_]\w*|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?/}},interpolation:n,string:/[\s\S]+/}},{pattern:/<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?'[a-z_]\w*'|\b[a-z_]\w*$/i,inside:{symbol:/\b\w+/,punctuation:/^<<[-~]?'|'$/}},string:/[\s\S]+/}}],"command-literal":[{pattern:RegExp(/%x/.source+r),greedy:!0,inside:{interpolation:n,command:{pattern:/[\s\S]+/,alias:"string"}}},{pattern:/`(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|[^\\`#\r\n])*`/,greedy:!0,inside:{interpolation:n,command:{pattern:/[\s\S]+/,alias:"string"}}}]}),delete t.languages.ruby.string,t.languages.insertBefore("ruby","number",{builtin:/\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,constant:/\b[A-Z][A-Z0-9_]*(?:[?!]|\b)/}),t.languages.rb=t.languages.ruby})(e)}kr.displayName="crystal";kr.aliases=[];function kr(e){e.register(Ve),(function(t){t.languages.crystal=t.languages.extend("ruby",{keyword:[/\b(?:__DIR__|__END_LINE__|__FILE__|__LINE__|abstract|alias|annotation|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|ptr|require|rescue|return|select|self|sizeof|struct|super|then|type|typeof|undef|uninitialized|union|unless|until|when|while|with|yield)\b/,{pattern:/(\.\s*)(?:is_a|responds_to)\?/,lookbehind:!0}],number:/\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/,operator:[/->/,t.languages.ruby.operator],punctuation:/[(){}[\].,;\\]/}),t.languages.insertBefore("crystal","string-literal",{attribute:{pattern:/@\[.*?\]/,inside:{delimiter:{pattern:/^@\[|\]$/,alias:"punctuation"},attribute:{pattern:/^(\s*)\w+/,lookbehind:!0,alias:"class-name"},args:{pattern:/\S(?:[\s\S]*\S)?/,inside:t.languages.crystal}}},expansion:{pattern:/\{(?:\{.*?\}|%.*?%)\}/,inside:{content:{pattern:/^(\{.)[\s\S]+(?=.\}$)/,lookbehind:!0,inside:t.languages.crystal},delimiter:{pattern:/^\{[\{%]|[\}%]\}$/,alias:"operator"}}},char:{pattern:/'(?:[^\\\r\n]{1,2}|\\(?:.|u(?:[A-Fa-f0-9]{1,4}|\{[A-Fa-f0-9]{1,6}\})))'/,greedy:!0}})})(e)}Rr.displayName="css-extras";Rr.aliases=[];function Rr(e){e.register(De),(function(t){var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r;t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=r,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var a={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},i={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:a,number:i,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:a,number:i})})(e)}Cr.displayName="csv";Cr.aliases=[];function Cr(e){e.languages.csv={value:/[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,punctuation:/,/}}_r.displayName="cue";_r.aliases=[];function _r(e){(function(t){var n=/\\(?:(?!\2)|\2(?:[^()\r\n]|\([^()]*\)))/.source,r=/"""(?:[^\\"]|"(?!""\2)|<esc>)*"""/.source+"|"+/'''(?:[^\\']|'(?!''\2)|<esc>)*'''/.source+"|"+/"(?:[^\\\r\n"]|"(?!\2)|<esc>)*"/.source+"|"+/'(?:[^\\\r\n']|'(?!\2)|<esc>)*'/.source,a="(?:"+r.replace(/<esc>/g,n)+")";t.languages.cue={comment:{pattern:/\/\/.*/,greedy:!0},"string-literal":{pattern:RegExp(/(^|[^#"'\\])(#*)/.source+a+/(?!["'])\2/.source),lookbehind:!0,greedy:!0,inside:{escape:{pattern:/(?=[\s\S]*["'](#*)$)\\\1(?:U[a-fA-F0-9]{1,8}|u[a-fA-F0-9]{1,4}|x[a-fA-F0-9]{1,2}|\d{2,3}|[^(])/,greedy:!0,alias:"string"},interpolation:{pattern:/(?=[\s\S]*["'](#*)$)\\\1\([^()]*\)/,greedy:!0,inside:{punctuation:/^\\#*\(|\)$/,expression:{pattern:/[\s\S]+/,inside:null}}},string:/[\s\S]+/}},keyword:{pattern:/(^|[^\w$])(?:for|if|import|in|let|null|package)(?![\w$])/,lookbehind:!0},boolean:{pattern:/(^|[^\w$])(?:false|true)(?![\w$])/,lookbehind:!0},builtin:{pattern:/(^|[^\w$])(?:bool|bytes|float|float(?:32|64)|u?int(?:8|16|32|64|128)?|number|rune|string)(?![\w$])/,lookbehind:!0},attribute:{pattern:/@[\w$]+(?=\s*\()/,alias:"function"},function:{pattern:/(^|[^\w$])[a-z_$][\w$]*(?=\s*\()/i,lookbehind:!0},number:{pattern:/(^|[^\w$.])(?:0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|0[xX][0-9A-Fa-f]+(?:_[0-9A-Fa-f]+)*|(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[eE][+-]?\d+(?:_\d+)*)?(?:[KMGTP]i?)?)(?![\w$])/,lookbehind:!0},operator:/\.{3}|_\|_|&&?|\|\|?|[=!]~|[<>=!]=?|[+\-*/?]/,punctuation:/[()[\]{},.:]/},t.languages.cue["string-literal"].inside.interpolation.inside.expression.inside=t.languages.cue})(e)}Nr.displayName="cypher";Nr.aliases=[];function Nr(e){e.languages.cypher={comment:/\/\/.*/,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/,greedy:!0},"class-name":{pattern:/(:\s*)(?:\w+|`(?:[^`\\\r\n])*`)(?=\s*[{):])/,lookbehind:!0,greedy:!0},relationship:{pattern:/(-\[\s*(?:\w+\s*|`(?:[^`\\\r\n])*`\s*)?:\s*|\|\s*:\s*)(?:\w+|`(?:[^`\\\r\n])*`)/,lookbehind:!0,greedy:!0,alias:"property"},identifier:{pattern:/`(?:[^`\\\r\n])*`/,greedy:!0},variable:/\$\w+/,keyword:/\b(?:ADD|ALL|AND|AS|ASC|ASCENDING|ASSERT|BY|CALL|CASE|COMMIT|CONSTRAINT|CONTAINS|CREATE|CSV|DELETE|DESC|DESCENDING|DETACH|DISTINCT|DO|DROP|ELSE|END|ENDS|EXISTS|FOR|FOREACH|IN|INDEX|IS|JOIN|KEY|LIMIT|LOAD|MANDATORY|MATCH|MERGE|NODE|NOT|OF|ON|OPTIONAL|OR|ORDER(?=\s+BY)|PERIODIC|REMOVE|REQUIRE|RETURN|SCALAR|SCAN|SET|SKIP|START|STARTS|THEN|UNION|UNIQUE|UNWIND|USING|WHEN|WHERE|WITH|XOR|YIELD)\b/i,function:/\b\w+\b(?=\s*\()/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/,operator:/:|<--?|--?>?|<>|=~?|[<>]=?|[+*/%^|]|\.\.\.?/,punctuation:/[()[\]{},;.]/}}Or.displayName="d";Or.aliases=[];function Or(e){e.register(W),e.languages.d=e.languages.extend("clike",{comment:[{pattern:/^\s*#!.+/,greedy:!0},{pattern:RegExp(/(^|[^\\])/.source+"(?:"+[/\/\+(?:\/\+(?:[^+]|\+(?!\/))*\+\/|(?!\/\+)[\s\S])*?\+\//.source,/\/\/.*/.source,/\/\*[\s\S]*?\*\//.source].join("|")+")"),lookbehind:!0,greedy:!0}],string:[{pattern:RegExp([/\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source,/\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source,/\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source,/\bq"(.)[\s\S]*?\2"/.source,/(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source].join("|"),"m"),greedy:!0},{pattern:/\bq\{(?:\{[^{}]*\}|[^{}])*\}/,greedy:!0,alias:"token-string"}],keyword:/\$|\b(?:__(?:(?:DATE|EOF|FILE|FUNCTION|LINE|MODULE|PRETTY_FUNCTION|TIMESTAMP|TIME|VENDOR|VERSION)__|gshared|parameters|traits|vector)|abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|dstring|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|ptrdiff_t|public|pure|real|ref|return|scope|shared|short|size_t|static|string|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|wstring)\b/,number:[/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i,{pattern:/((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i,lookbehind:!0}],operator:/\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/}),e.languages.insertBefore("d","string",{char:/'(?:\\(?:\W|\w+)|[^\\])'/}),e.languages.insertBefore("d","keyword",{property:/\B@\w*/}),e.languages.insertBefore("d","function",{register:{pattern:/\b(?:[ABCD][LHX]|E?(?:BP|DI|SI|SP)|[BS]PL|[ECSDGF]S|CR[0234]|[DS]IL|DR[012367]|E[ABCD]X|X?MM[0-7]|R(?:1[0-5]|[89])[BWD]?|R[ABCD]X|R[BS]P|R[DS]I|TR[3-7]|XMM(?:1[0-5]|[89])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,alias:"variable"}})}xr.displayName="dart";xr.aliases=[];function xr(e){e.register(W),(function(t){var n=[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extends|extension|external|factory|final|finally|for|get|hide|if|implements|import|in|interface|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],r=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,a={pattern:RegExp(r+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}}}};t.languages.dart=t.languages.extend("clike",{"class-name":[a,{pattern:RegExp(r+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:a.inside}],keyword:n,operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),t.languages.insertBefore("dart","string",{"string-literal":{pattern:/r?(?:("""|''')[\s\S]*?\1|(["'])(?:\\.|(?!\2)[^\\\r\n])*\2(?!\2))/,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,lookbehind:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:t.languages.dart}}},string:/[\s\S]+/}},string:void 0}),t.languages.insertBefore("dart","class-name",{metadata:{pattern:/@\w+/,alias:"function"}}),t.languages.insertBefore("dart","class-name",{generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":a,keyword:n,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})})(e)}Dr.displayName="dataweave";Dr.aliases=[];function Dr(e){(function(t){t.languages.dataweave={url:/\b[A-Za-z]+:\/\/[\w/:.?=&-]+|\burn:[\w:.?=&-]+/,property:{pattern:/(?:\b\w+#)?(?:"(?:\\.|[^\\"\r\n])*"|\b\w+)(?=\s*[:@])/,greedy:!0},string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},"mime-type":/\b(?:application|audio|image|multipart|text|video)\/[\w+-]+/,date:{pattern:/\|[\w:+-]+\|/,greedy:!0},comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],regex:{pattern:/\/(?:[^\\\/\r\n]|\\[^\r\n])+\//,greedy:!0},keyword:/\b(?:and|as|at|case|do|else|fun|if|input|is|match|not|ns|null|or|output|type|unless|update|using|var)\b/,function:/\b[A-Z_]\w*(?=\s*\()/i,number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\];(),.:@]/,operator:/<<|>>|->|[<>~=]=?|!=|--?-?|\+\+?|!|\?/,boolean:/\b(?:false|true)\b/}})(e)}Lr.displayName="dax";Lr.aliases=[];function Lr(e){e.languages.dax={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/).*)/,lookbehind:!0},"data-field":{pattern:/'(?:[^']|'')*'(?!')(?:\[[ \w\xA0-\uFFFF]+\])?|\w+\[[ \w\xA0-\uFFFF]+\]/,alias:"symbol"},measure:{pattern:/\[[ \w\xA0-\uFFFF]+\]/,alias:"constant"},string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},function:/\b(?:ABS|ACOS|ACOSH|ACOT|ACOTH|ADDCOLUMNS|ADDMISSINGITEMS|ALL|ALLCROSSFILTERED|ALLEXCEPT|ALLNOBLANKROW|ALLSELECTED|AND|APPROXIMATEDISTINCTCOUNT|ASIN|ASINH|ATAN|ATANH|AVERAGE|AVERAGEA|AVERAGEX|BETA\.DIST|BETA\.INV|BLANK|CALCULATE|CALCULATETABLE|CALENDAR|CALENDARAUTO|CEILING|CHISQ\.DIST|CHISQ\.DIST\.RT|CHISQ\.INV|CHISQ\.INV\.RT|CLOSINGBALANCEMONTH|CLOSINGBALANCEQUARTER|CLOSINGBALANCEYEAR|COALESCE|COMBIN|COMBINA|COMBINEVALUES|CONCATENATE|CONCATENATEX|CONFIDENCE\.NORM|CONFIDENCE\.T|CONTAINS|CONTAINSROW|CONTAINSSTRING|CONTAINSSTRINGEXACT|CONVERT|COS|COSH|COT|COTH|COUNT|COUNTA|COUNTAX|COUNTBLANK|COUNTROWS|COUNTX|CROSSFILTER|CROSSJOIN|CURRENCY|CURRENTGROUP|CUSTOMDATA|DATATABLE|DATE|DATEADD|DATEDIFF|DATESBETWEEN|DATESINPERIOD|DATESMTD|DATESQTD|DATESYTD|DATEVALUE|DAY|DEGREES|DETAILROWS|DISTINCT|DISTINCTCOUNT|DISTINCTCOUNTNOBLANK|DIVIDE|EARLIER|EARLIEST|EDATE|ENDOFMONTH|ENDOFQUARTER|ENDOFYEAR|EOMONTH|ERROR|EVEN|EXACT|EXCEPT|EXP|EXPON\.DIST|FACT|FALSE|FILTER|FILTERS|FIND|FIRSTDATE|FIRSTNONBLANK|FIRSTNONBLANKVALUE|FIXED|FLOOR|FORMAT|GCD|GENERATE|GENERATEALL|GENERATESERIES|GEOMEAN|GEOMEANX|GROUPBY|HASONEFILTER|HASONEVALUE|HOUR|IF|IF\.EAGER|IFERROR|IGNORE|INT|INTERSECT|ISBLANK|ISCROSSFILTERED|ISEMPTY|ISERROR|ISEVEN|ISFILTERED|ISINSCOPE|ISLOGICAL|ISNONTEXT|ISNUMBER|ISO\.CEILING|ISODD|ISONORAFTER|ISSELECTEDMEASURE|ISSUBTOTAL|ISTEXT|KEEPFILTERS|KEYWORDMATCH|LASTDATE|LASTNONBLANK|LASTNONBLANKVALUE|LCM|LEFT|LEN|LN|LOG|LOG10|LOOKUPVALUE|LOWER|MAX|MAXA|MAXX|MEDIAN|MEDIANX|MID|MIN|MINA|MINUTE|MINX|MOD|MONTH|MROUND|NATURALINNERJOIN|NATURALLEFTOUTERJOIN|NEXTDAY|NEXTMONTH|NEXTQUARTER|NEXTYEAR|NONVISUAL|NORM\.DIST|NORM\.INV|NORM\.S\.DIST|NORM\.S\.INV|NOT|NOW|ODD|OPENINGBALANCEMONTH|OPENINGBALANCEQUARTER|OPENINGBALANCEYEAR|OR|PARALLELPERIOD|PATH|PATHCONTAINS|PATHITEM|PATHITEMREVERSE|PATHLENGTH|PERCENTILE\.EXC|PERCENTILE\.INC|PERCENTILEX\.EXC|PERCENTILEX\.INC|PERMUT|PI|POISSON\.DIST|POWER|PREVIOUSDAY|PREVIOUSMONTH|PREVIOUSQUARTER|PREVIOUSYEAR|PRODUCT|PRODUCTX|QUARTER|QUOTIENT|RADIANS|RAND|RANDBETWEEN|RANK\.EQ|RANKX|RELATED|RELATEDTABLE|REMOVEFILTERS|REPLACE|REPT|RIGHT|ROLLUP|ROLLUPADDISSUBTOTAL|ROLLUPGROUP|ROLLUPISSUBTOTAL|ROUND|ROUNDDOWN|ROUNDUP|ROW|SAMEPERIODLASTYEAR|SAMPLE|SEARCH|SECOND|SELECTCOLUMNS|SELECTEDMEASURE|SELECTEDMEASUREFORMATSTRING|SELECTEDMEASURENAME|SELECTEDVALUE|SIGN|SIN|SINH|SQRT|SQRTPI|STARTOFMONTH|STARTOFQUARTER|STARTOFYEAR|STDEV\.P|STDEV\.S|STDEVX\.P|STDEVX\.S|SUBSTITUTE|SUBSTITUTEWITHINDEX|SUM|SUMMARIZE|SUMMARIZECOLUMNS|SUMX|SWITCH|T\.DIST|T\.DIST\.2T|T\.DIST\.RT|T\.INV|T\.INV\.2T|TAN|TANH|TIME|TIMEVALUE|TODAY|TOPN|TOPNPERLEVEL|TOPNSKIP|TOTALMTD|TOTALQTD|TOTALYTD|TREATAS|TRIM|TRUE|TRUNC|UNICHAR|UNICODE|UNION|UPPER|USERELATIONSHIP|USERNAME|USEROBJECTID|USERPRINCIPALNAME|UTCNOW|UTCTODAY|VALUE|VALUES|VAR\.P|VAR\.S|VARX\.P|VARX\.S|WEEKDAY|WEEKNUM|XIRR|XNPV|YEAR|YEARFRAC)(?=\s*\()/i,keyword:/\b(?:DEFINE|EVALUATE|MEASURE|ORDER\s+BY|RETURN|VAR|START\s+AT|ASC|DESC)\b/i,boolean:{pattern:/\b(?:FALSE|NULL|TRUE)\b/i,alias:"constant"},number:/\b\d+(?:\.\d*)?|\B\.\d+\b/,operator:/:=|[-+*\/=^]|&&?|\|\||<(?:=>?|<|>)?|>[>=]?|\b(?:IN|NOT)\b/i,punctuation:/[;\[\](){}`,.]/}}Mr.displayName="dhall";Mr.aliases=[];function Mr(e){e.languages.dhall={comment:/--.*|\{-(?:[^-{]|-(?!\})|\{(?!-)|\{-(?:[^-{]|-(?!\})|\{(?!-))*-\})*-\}/,string:{pattern:/"(?:[^"\\]|\\.)*"|''(?:[^']|'(?!')|'''|''\$\{)*''(?!'|\$)/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^{}]*\}/,inside:{expression:{pattern:/(^\$\{)[\s\S]+(?=\}$)/,lookbehind:!0,alias:"language-dhall",inside:null},punctuation:/\$\{|\}/}}}},label:{pattern:/`[^`]*`/,greedy:!0},url:{pattern:/\bhttps?:\/\/[\w.:%!$&'*+;=@~-]+(?:\/[\w.:%!$&'*+;=@~-]*)*(?:\?[/?\w.:%!$&'*+;=@~-]*)?/,greedy:!0},env:{pattern:/\benv:(?:(?!\d)\w+|"(?:[^"\\=]|\\.)*")/,greedy:!0,inside:{function:/^env/,operator:/^:/,variable:/[\s\S]+/}},hash:{pattern:/\bsha256:[\da-fA-F]{64}\b/,inside:{function:/sha256/,operator:/:/,number:/[\da-fA-F]{64}/}},keyword:/\b(?:as|assert|else|forall|if|in|let|merge|missing|then|toMap|using|with)\b|\u2200/,builtin:/\b(?:None|Some)\b/,boolean:/\b(?:False|True)\b/,number:/\bNaN\b|-?\bInfinity\b|[+-]?\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/,operator:/\/\\|\/\/\\\\|&&|\|\||===|[!=]=|\/\/|->|\+\+|::|[+*#@=:?<>|\\\u2227\u2a53\u2261\u2afd\u03bb\u2192]/,punctuation:/\.\.|[{}\[\](),./]/,"class-name":/\b[A-Z]\w*\b/},e.languages.dhall.string.inside.interpolation.inside.expression.inside=e.languages.dhall}Pr.displayName="diff";Pr.aliases=[];function Pr(e){(function(t){t.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach(function(r){var a=n[r],i=[];/^\w+$/.test(r)||i.push(/\w+/.exec(r)[0]),r==="diff"&&i.push("bold"),t.languages.diff[r]={pattern:RegExp("^(?:["+a+`].*(?:\r
?|
|(?![\\s\\S])))+`,"m"),alias:i,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(r)[0]}}}}),Object.defineProperty(t.languages.diff,"PREFIXES",{value:n})})(e)}oe.displayName="markup-templating";oe.aliases=[];function oe(e){e.register(re),(function(t){function n(r,a){return"___"+r.toUpperCase()+a+"___"}Object.defineProperties(t.languages["markup-templating"]={},{buildPlaceholders:{value:function(r,a,i,o){if(r.language===a){var s=r.tokenStack=[];r.code=r.code.replace(i,function(u){if(typeof o=="function"&&!o(u))return u;for(var l=s.length,c;r.code.indexOf(c=n(a,l))!==-1;)++l;return s[l]=u,c}),r.grammar=t.languages.markup}}},tokenizePlaceholders:{value:function(r,a){if(r.language!==a||!r.tokenStack)return;r.grammar=t.languages[a];var i=0,o=Object.keys(r.tokenStack);function s(u){for(var l=0;l<u.length&&!(i>=o.length);l++){var c=u[l];if(typeof c=="string"||c.content&&typeof c.content=="string"){var d=o[i],m=r.tokenStack[d],p=typeof c=="string"?c:c.content,h=n(a,d),E=p.indexOf(h);if(E>-1){++i;var S=p.substring(0,E),y=new t.Token(a,t.tokenize(m,r.grammar),"language-"+a,m),I=p.substring(E+h.length),T=[];S&&T.push.apply(T,s([S])),T.push(y),I&&T.push.apply(T,s([I])),typeof c=="string"?u.splice.apply(u,[l,1].concat(T)):c.content=T}}else c.content&&s(c.content)}return u}s(r.tokens)}}})})(e)}Fr.displayName="django";Fr.aliases=["jinja2"];function Fr(e){e.register(oe),(function(t){t.languages.django={comment:/^\{#[\s\S]*?#\}$/,tag:{pattern:/(^\{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%][+-]?|[+-]?[}%]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Ff]alse|[Nn]one|[Tt]rue/,variable:/\b\w+\b/,punctuation:/[{}[\](),.:;]/};var n=/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,r=t.languages["markup-templating"];t.hooks.add("before-tokenize",function(a){r.buildPlaceholders(a,"django",n)}),t.hooks.add("after-tokenize",function(a){r.tokenizePlaceholders(a,"django")}),t.languages.jinja2=t.languages.django,t.hooks.add("before-tokenize",function(a){r.buildPlaceholders(a,"jinja2",n)}),t.hooks.add("after-tokenize",function(a){r.tokenizePlaceholders(a,"jinja2")})})(e)}Br.displayName="dns-zone-file";Br.aliases=["dns-zone"];function Br(e){e.languages["dns-zone-file"]={comment:/;.*/,string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},variable:[{pattern:/(^\$ORIGIN[ \t]+)\S+/m,lookbehind:!0},{pattern:/(^|\s)@(?=\s|$)/,lookbehind:!0}],keyword:/^\$(?:INCLUDE|ORIGIN|TTL)(?=\s|$)/m,class:{pattern:/(^|\s)(?:CH|CS|HS|IN)(?=\s|$)/,lookbehind:!0,alias:"keyword"},type:{pattern:/(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,lookbehind:!0,alias:"keyword"},punctuation:/[()]/},e.languages["dns-zone"]=e.languages["dns-zone-file"]}Ur.displayName="docker";Ur.aliases=["dockerfile"];function Ur(e){(function(t){var n=/\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source,r=/(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g,function(){return n}),a=/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source,i=/--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g,function(){return a}),o={pattern:RegExp(a),greedy:!0},s={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function u(l,c){return l=l.replace(/<OPT>/g,function(){return i}).replace(/<SP>/g,function(){return r}),RegExp(l,c)}t.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:u(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source,"i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[o,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:u(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source,"i"),lookbehind:!0,greedy:!0},{pattern:u(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source,"i"),lookbehind:!0,greedy:!0},{pattern:u(/(^ONBUILD<SP>)\w+/.source,"i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:s,string:o,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:s},t.languages.dockerfile=t.languages.docker})(e)}Gr.displayName="dot";Gr.aliases=["gv"];function Gr(e){(function(t){var n="(?:"+[/[a-zA-Z_\x80-\uFFFF][\w\x80-\uFFFF]*/.source,/-?(?:\.\d+|\d+(?:\.\d*)?)/.source,/"[^"\\]*(?:\\[\s\S][^"\\]*)*"/.source,/<(?:[^<>]|(?!<!--)<(?:[^<>"']|"[^"]*"|'[^']*')+>|<!--(?:[^-]|-(?!->))*-->)*>/.source].join("|")+")",r={markup:{pattern:/(^<)[\s\S]+(?=>$)/,lookbehind:!0,alias:["language-markup","language-html","language-xml"],inside:t.languages.markup}};function a(i,o){return RegExp(i.replace(/<ID>/g,function(){return n}),o)}t.languages.dot={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,greedy:!0},"graph-name":{pattern:a(/(\b(?:digraph|graph|subgraph)[ \t\r\n]+)<ID>/.source,"i"),lookbehind:!0,greedy:!0,alias:"class-name",inside:r},"attr-value":{pattern:a(/(=[ \t\r\n]*)<ID>/.source),lookbehind:!0,greedy:!0,inside:r},"attr-name":{pattern:a(/([\[;, \t\r\n])<ID>(?=[ \t\r\n]*=)/.source),lookbehind:!0,greedy:!0,inside:r},keyword:/\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,"compass-point":{pattern:/(:[ \t\r\n]*)(?:[ewc_]|[ns][ew]?)(?![\w\x80-\uFFFF])/,lookbehind:!0,alias:"builtin"},node:{pattern:a(/(^|[^-.\w\x80-\uFFFF\\])<ID>/.source),lookbehind:!0,greedy:!0,inside:r},operator:/[=:]|-[->]/,punctuation:/[\[\]{};,]/},t.languages.gv=t.languages.dot})(e)}Hr.displayName="ebnf";Hr.aliases=[];function Hr(e){e.languages.ebnf={comment:/\(\*[\s\S]*?\*\)/,string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,greedy:!0},special:{pattern:/\?[^?\r\n]*\?/,greedy:!0,alias:"class-name"},definition:{pattern:/^([\t ]*)[a-z]\w*(?:[ \t]+[a-z]\w*)*(?=\s*=)/im,lookbehind:!0,alias:["rule","keyword"]},rule:/\b[a-z]\w*(?:[ \t]+[a-z]\w*)*\b/i,punctuation:/\([:/]|[:/]\)|[.,;()[\]{}]/,operator:/[-=|*/!]/}}$r.displayName="editorconfig";$r.aliases=[];function $r(e){e.languages.editorconfig={comment:/[;#].*/,section:{pattern:/(^[ \t]*)\[.+\]/m,lookbehind:!0,alias:"selector",inside:{regex:/\\\\[\[\]{},!?.*]/,operator:/[!?]|\.\.|\*{1,2}/,punctuation:/[\[\]{},]/}},key:{pattern:/(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,lookbehind:!0,alias:"attr-name"},value:{pattern:/=.*/,alias:"attr-value",inside:{punctuation:/^=/}}}}zr.displayName="eiffel";zr.aliases=[];function zr(e){e.languages.eiffel={comment:/--.*/,string:[{pattern:/"([^[]*)\[[\s\S]*?\]\1"/,greedy:!0},{pattern:/"([^{]*)\{[\s\S]*?\}\1"/,greedy:!0},{pattern:/"(?:%(?:(?!\n)\s)*\n\s*%|%\S|[^%"\r\n])*"/,greedy:!0}],char:/'(?:%.|[^%'\r\n])+'/,keyword:/\b(?:across|agent|alias|all|and|as|assign|attached|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,boolean:/\b(?:False|True)\b/i,"class-name":/\b[A-Z][\dA-Z_]*\b/,number:[/\b0[xcb][\da-f](?:_*[\da-f])*\b/i,/(?:\b\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*\b|\b\d(?:_*\d)*\b\.?/i],punctuation:/:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,operator:/\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/}}Wr.displayName="ejs";Wr.aliases=["eta"];function Wr(e){e.register(ie),e.register(oe),(function(t){t.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:t.languages.javascript}},t.hooks.add("before-tokenize",function(n){var r=/<%(?!%)[\s\S]+?%>/g;t.languages["markup-templating"].buildPlaceholders(n,"ejs",r)}),t.hooks.add("after-tokenize",function(n){t.languages["markup-templating"].tokenizePlaceholders(n,"ejs")}),t.languages.eta=t.languages.ejs})(e)}Vr.displayName="elixir";Vr.aliases=[];function Vr(e){e.languages.elixir={doc:{pattern:/@(?:doc|moduledoc)\s+(?:("""|''')[\s\S]*?\1|("|')(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2)/,inside:{attribute:/^@\w+/,string:/['"][\s\S]+/}},comment:{pattern:/#.*/,greedy:!0},regex:{pattern:/~[rR](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|[^\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[uismxfr]*/,greedy:!0},string:[{pattern:/~[cCsSwW](?:("""|''')(?:\\[\s\S]|(?!\1)[^\\])+\1|([\/|"'])(?:\\.|(?!\2)[^\\\r\n])+\2|\((?:\\.|[^\\)\r\n])+\)|\[(?:\\.|[^\\\]\r\n])+\]|\{(?:\\.|#\{[^}]+\}|#(?!\{)|[^#\\}\r\n])+\}|<(?:\\.|[^\\>\r\n])+>)[csa]?/,greedy:!0,inside:{}},{pattern:/("""|''')[\s\S]*?\1/,greedy:!0,inside:{}},{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0,inside:{}}],atom:{pattern:/(^|[^:]):\w+/,lookbehind:!0,alias:"symbol"},module:{pattern:/\b[A-Z]\w*\b/,alias:"class-name"},"attr-name":/\b\w+\??:(?!:)/,argument:{pattern:/(^|[^&])&\d+/,lookbehind:!0,alias:"variable"},attribute:{pattern:/@\w+/,alias:"variable"},function:/\b[_a-zA-Z]\w*[?!]?(?:(?=\s*(?:\.\s*)?\()|(?=\/\d))/,number:/\b(?:0[box][a-f\d_]+|\d[\d_]*)(?:\.[\d_]+)?(?:e[+-]?[\d_]+)?\b/i,keyword:/\b(?:after|alias|and|case|catch|cond|def(?:callback|delegate|exception|impl|macro|module|n|np|p|protocol|struct)?|do|else|end|fn|for|if|import|not|or|quote|raise|require|rescue|try|unless|unquote|use|when)\b/,boolean:/\b(?:false|nil|true)\b/,operator:[/\bin\b|&&?|\|[|>]?|\\\\|::|\.\.\.?|\+\+?|-[->]?|<[-=>]|>=|!==?|\B!|=(?:==?|[>~])?|[*\/^]/,{pattern:/([^<])<(?!<)/,lookbehind:!0},{pattern:/([^>])>(?!>)/,lookbehind:!0}],punctuation:/<<|>>|[.,%\[\]{}()]/},e.languages.elixir.string.forEach(function(t){t.inside={interpolation:{pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"},rest:e.languages.elixir}}}})}jr.displayName="elm";jr.aliases=[];function jr(e){e.languages.elm={comment:/--.*|\{-[\s\S]*?-\}/,char:{pattern:/'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+|u\{[0-9a-fA-F]+\}))'/,greedy:!0},string:[{pattern:/"""[\s\S]*?"""/,greedy:!0},{pattern:/"(?:[^\\"\r\n]|\\.)*"/,greedy:!0}],"import-statement":{pattern:/(^[\t ]*)import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,lookbehind:!0,inside:{keyword:/\b(?:as|exposing|import)\b/}},keyword:/\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,builtin:/\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,number:/\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,operator:/\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,hvariable:/\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,constant:/\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,punctuation:/[{}[\]|(),.:]/}}Lt.displayName="lua";Lt.aliases=[];function Lt(e){e.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}}qr.displayName="etlua";qr.aliases=[];function qr(e){e.register(Lt),e.register(oe),(function(t){t.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:t.languages.lua}},t.hooks.add("before-tokenize",function(n){var r=/<%[\s\S]+?%>/g;t.languages["markup-templating"].buildPlaceholders(n,"etlua",r)}),t.hooks.add("after-tokenize",function(n){t.languages["markup-templating"].tokenizePlaceholders(n,"etlua")})})(e)}Yr.displayName="erb";Yr.aliases=[];function Yr(e){e.register(oe),e.register(Ve),(function(t){t.languages.erb={delimiter:{pattern:/^(\s*)<%=?|%>(?=\s*$)/,lookbehind:!0,alias:"punctuation"},ruby:{pattern:/\s*\S[\s\S]*/,alias:"language-ruby",inside:t.languages.ruby}},t.hooks.add("before-tokenize",function(n){var r=/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g;t.languages["markup-templating"].buildPlaceholders(n,"erb",r)}),t.hooks.add("after-tokenize",function(n){t.languages["markup-templating"].tokenizePlaceholders(n,"erb")})})(e)}Kr.displayName="erlang";Kr.aliases=[];function Kr(e){e.languages.erlang={comment:/%.+/,string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},"quoted-function":{pattern:/'(?:\\.|[^\\'\r\n])+'(?=\()/,alias:"function"},"quoted-atom":{pattern:/'(?:\\.|[^\\'\r\n])+'/,alias:"atom"},boolean:/\b(?:false|true)\b/,keyword:/\b(?:after|begin|case|catch|end|fun|if|of|receive|try|when)\b/,number:[/\$\\?./,/\b\d+#[a-z0-9]+/i,/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i],function:/\b[a-z][\w@]*(?=\()/,variable:{pattern:/(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,lookbehind:!0},operator:[/[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:and|andalso|band|bnot|bor|bsl|bsr|bxor|div|not|or|orelse|rem|xor)\b/,{pattern:/(^|[^<])<(?!<)/,lookbehind:!0},{pattern:/(^|[^>])>(?!>)/,lookbehind:!0}],atom:/\b[a-z][\w@]*/,punctuation:/[()[\]{}:;,.#|]|<<|>>/}}Xr.displayName="excel-formula";Xr.aliases=["xls","xlsx"];function Xr(e){e.languages["excel-formula"]={comment:{pattern:/(\bN\(\s*)"(?:[^"]|"")*"(?=\s*\))/i,lookbehind:!0,greedy:!0},string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},reference:{pattern:/(?:'[^']*'|(?:[^\s()[\]{}<>*?"';,$&]*\[[^^\s()[\]{}<>*?"']+\])?\w+)!/,greedy:!0,alias:"string",inside:{operator:/!$/,punctuation:/'/,sheet:{pattern:/[^[\]]+$/,alias:"function"},file:{pattern:/\[[^[\]]+\]$/,inside:{punctuation:/[[\]]/}},path:/[\s\S]+/}},"function-name":{pattern:/\b[A-Z]\w*(?=\()/i,alias:"builtin"},range:{pattern:/\$?\b(?:[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+|[A-Z]+:\$?[A-Z]+|\d+:\$?\d+)\b/i,alias:"selector",inside:{operator:/:/,cell:/\$?[A-Z]+\$?\d+/i,column:/\$?[A-Z]+/i,row:/\$?\d+/}},cell:{pattern:/\b[A-Z]+\d+\b|\$[A-Za-z]+\$?\d+\b|\b[A-Za-z]+\$\d+\b/,alias:"selector"},number:/(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?\b/i,boolean:/\b(?:FALSE|TRUE)\b/i,operator:/[-+*/^%=&,]|<[=>]?|>=?/,punctuation:/[[\]();{}|]/},e.languages.xlsx=e.languages.xls=e.languages["excel-formula"]}Zr.displayName="fsharp";Zr.aliases=[];function Zr(e){e.register(W),e.languages.fsharp=e.languages.extend("clike",{comment:[{pattern:/(^|[^\\])\(\*(?!\))[\s\S]*?\*\)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?/,greedy:!0},"class-name":{pattern:/(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,lookbehind:!0,inside:{operator:/->|\*/,punctuation:/\./}},keyword:/\b(?:let|return|use|yield)(?:!\B|\b)|\b(?:abstract|and|as|asr|assert|atomic|base|begin|break|checked|class|component|const|constraint|constructor|continue|default|delegate|do|done|downcast|downto|eager|elif|else|end|event|exception|extern|external|false|finally|fixed|for|fun|function|functor|global|if|in|include|inherit|inline|interface|internal|land|lazy|lor|lsl|lsr|lxor|match|member|method|mixin|mod|module|mutable|namespace|new|not|null|object|of|open|or|override|parallel|private|process|protected|public|pure|rec|sealed|select|sig|static|struct|tailcall|then|to|trait|true|try|type|upcast|val|virtual|void|volatile|when|while|with)\b/,number:[/\b0x[\da-fA-F]+(?:LF|lf|un)?\b/,/\b0b[01]+(?:uy|y)?\b/,/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,/\b\d+(?:[IlLsy]|UL|u[lsy]?)?\b/],operator:/([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/}),e.languages.insertBefore("fsharp","keyword",{preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(^#)\b(?:else|endif|if|light|line|nowarn)\b/,lookbehind:!0,alias:"keyword"}}}}),e.languages.insertBefore("fsharp","punctuation",{"computation-expression":{pattern:/\b[_a-z]\w*(?=\s*\{)/i,alias:"keyword"}}),e.languages.insertBefore("fsharp","string",{annotation:{pattern:/\[<.+?>\]/,greedy:!0,inside:{punctuation:/^\[<|>\]$/,"class-name":{pattern:/^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,lookbehind:!0},"annotation-content":{pattern:/[\s\S]+/,inside:e.languages.fsharp}}},char:{pattern:/'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,greedy:!0}})}Qr.displayName="factor";Qr.aliases=[];function Qr(e){(function(t){var n={function:/\b(?:BUGS?|FIX(?:MES?)?|NOTES?|TODOS?|XX+|HACKS?|WARN(?:ING)?|\?{2,}|!{2,})\b/},r={number:/\\[^\s']|%\w/},a={comment:[{pattern:/(^|\s)(?:! .*|!$)/,lookbehind:!0,inside:n},{pattern:/(^|\s)\/\*\s[\s\S]*?\*\/(?=\s|$)/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|\s)!\[(={0,6})\[\s[\s\S]*?\]\2\](?=\s|$)/,lookbehind:!0,greedy:!0,inside:n}],number:[{pattern:/(^|\s)[+-]?\d+(?=\s|$)/,lookbehind:!0},{pattern:/(^|\s)[+-]?0(?:b[01]+|o[0-7]+|d\d+|x[\dA-F]+)(?=\s|$)/i,lookbehind:!0},{pattern:/(^|\s)[+-]?\d+\/\d+\.?(?=\s|$)/,lookbehind:!0},{pattern:/(^|\s)\+?\d+\+\d+\/\d+(?=\s|$)/,lookbehind:!0},{pattern:/(^|\s)-\d+-\d+\/\d+(?=\s|$)/,lookbehind:!0},{pattern:/(^|\s)[+-]?(?:\d*\.\d+|\d+\.\d*|\d+)(?:e[+-]?\d+)?(?=\s|$)/i,lookbehind:!0},{pattern:/(^|\s)NAN:\s+[\da-fA-F]+(?=\s|$)/,lookbehind:!0},{pattern:/(^|\s)[+-]?0(?:b1\.[01]*|o1\.[0-7]*|d1\.\d*|x1\.[\dA-F]*)p\d+(?=\s|$)/i,lookbehind:!0}],regexp:{pattern:/(^|\s)R\/\s(?:\\\S|[^\\/])*\/(?:[idmsr]*|[idmsr]+-[idmsr]+)(?=\s|$)/,lookbehind:!0,alias:"number",inside:{variable:/\\\S/,keyword:/[+?*\[\]^$(){}.|]/,operator:{pattern:/(\/)[idmsr]+(?:-[idmsr]+)?/,lookbehind:!0}}},boolean:{pattern:/(^|\s)[tf](?=\s|$)/,lookbehind:!0},"custom-string":{pattern:/(^|\s)[A-Z0-9\-]+"\s(?:\\\S|[^"\\])*"/,lookbehind:!0,greedy:!0,alias:"string",inside:{number:/\\\S|%\w|\//}},"multiline-string":[{pattern:/(^|\s)STRING:\s+\S+(?:\n|\r\n).*(?:\n|\r\n)\s*;(?=\s|$)/,lookbehind:!0,greedy:!0,alias:"string",inside:{number:r.number,"semicolon-or-setlocal":{pattern:/([\r\n][ \t]*);(?=\s|$)/,lookbehind:!0,alias:"function"}}},{pattern:/(^|\s)HEREDOC:\s+\S+(?:\n|\r\n).*(?:\n|\r\n)\s*\S+(?=\s|$)/,lookbehind:!0,greedy:!0,alias:"string",inside:r},{pattern:/(^|\s)\[(={0,6})\[\s[\s\S]*?\]\2\](?=\s|$)/,lookbehind:!0,greedy:!0,alias:"string",inside:r}],"special-using":{pattern:/(^|\s)USING:(?:\s\S+)*(?=\s+;(?:\s|$))/,lookbehind:!0,alias:"function",inside:{string:{pattern:/(\s)[^:\s]+/,lookbehind:!0}}},"stack-effect-delimiter":[{pattern:/(^|\s)(?:call|eval|execute)?\((?=\s)/,lookbehind:!0,alias:"operator"},{pattern:/(\s)--(?=\s)/,lookbehind:!0,alias:"operator"},{pattern:/(\s)\)(?=\s|$)/,lookbehind:!0,alias:"operator"}],combinators:{pattern:null,lookbehind:!0,alias:"keyword"},"kernel-builtin":{pattern:null,lookbehind:!0,alias:"variable"},"sequences-builtin":{pattern:null,lookbehind:!0,alias:"variable"},"math-builtin":{pattern:null,lookbehind:!0,alias:"variable"},"constructor-word":{pattern:/(^|\s)<(?!=+>|-+>)\S+>(?=\s|$)/,lookbehind:!0,alias:"keyword"},"other-builtin-syntax":{pattern:null,lookbehind:!0,alias:"operator"},"conventionally-named-word":{pattern:/(^|\s)(?!")(?:(?:change|new|set|with)-\S+|\$\S+|>[^>\s]+|[^:>\s]+>|[^>\s]+>[^>\s]+|\+[^+\s]+\+|[^?\s]+\?|\?[^?\s]+|[^>\s]+>>|>>[^>\s]+|[^<\s]+<<|\([^()\s]+\)|[^!\s]+!|[^*\s]\S*\*|[^.\s]\S*\.)(?=\s|$)/,lookbehind:!0,alias:"keyword"},"colon-syntax":{pattern:/(^|\s)(?:[A-Z0-9\-]+#?)?:{1,2}\s+(?:;\S+|(?!;)\S+)(?=\s|$)/,lookbehind:!0,greedy:!0,alias:"function"},"semicolon-or-setlocal":{pattern:/(\s)(?:;|:>)(?=\s|$)/,lookbehind:!0,alias:"function"},"curly-brace-literal-delimiter":[{pattern:/(^|\s)[a-z]*\{(?=\s)/i,lookbehind:!0,alias:"operator"},{pattern:/(\s)\}(?=\s|$)/,lookbehind:!0,alias:"operator"}],"quotation-delimiter":[{pattern:/(^|\s)\[(?=\s)/,lookbehind:!0,alias:"operator"},{pattern:/(\s)\](?=\s|$)/,lookbehind:!0,alias:"operator"}],"normal-word":{pattern:/(^|\s)[^"\s]\S*(?=\s|$)/,lookbehind:!0},string:{pattern:/"(?:\\\S|[^"\\])*"/,greedy:!0,inside:r}},i=function(l){return(l+"").replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1")},o=function(l){return new RegExp("(^|\\s)(?:"+l.map(i).join("|")+")(?=\\s|$)")},s={"kernel-builtin":["or","2nipd","4drop","tuck","wrapper","nip","wrapper?","callstack>array","die","dupd","callstack","callstack?","3dup","hashcode","pick","4nip","build",">boolean","nipd","clone","5nip","eq?","?","=","swapd","2over","clear","2dup","get-retainstack","not","tuple?","dup","3nipd","call","-rotd","object","drop","assert=","assert?","-rot","execute","boa","get-callstack","curried?","3drop","pickd","overd","over","roll","3nip","swap","and","2nip","rotd","throw","(clone)","hashcode*","spin","reach","4dup","equal?","get-datastack","assert","2drop","<wrapper>","boolean?","identity-hashcode","identity-tuple?","null","composed?","new","5drop","rot","-roll","xor","identity-tuple","boolean"],"other-builtin-syntax":["=======","recursive","flushable",">>","<<<<<<","M\\","B","PRIVATE>","\\","======","final","inline","delimiter","deprecated","<PRIVATE",">>>>>>","<<<<<<<","parse-complex","malformed-complex","read-only",">>>>>>>","call-next-method","<<","foldable","$","$[","${"],"sequences-builtin":["member-eq?","mismatch","append","assert-sequence=","longer","repetition","clone-like","3sequence","assert-sequence?","last-index-from","reversed","index-from","cut*","pad-tail","join-as","remove-eq!","concat-as","but-last","snip","nths","nth","sequence","longest","slice?","<slice>","remove-nth","tail-slice","empty?","tail*","member?","virtual-sequence?","set-length","drop-prefix","iota","unclip","bounds-error?","unclip-last-slice","non-negative-integer-expected","non-negative-integer-expected?","midpoint@","longer?","?set-nth","?first","rest-slice","prepend-as","prepend","fourth","sift","subseq-start","new-sequence","?last","like","first4","1sequence","reverse","slice","virtual@","repetition?","set-last","index","4sequence","max-length","set-second","immutable-sequence","first2","first3","supremum","unclip-slice","suffix!","insert-nth","tail","3append","short","suffix","concat","flip","immutable?","reverse!","2sequence","sum","delete-all","indices","snip-slice","<iota>","check-slice","sequence?","head","append-as","halves","sequence=","collapse-slice","?second","slice-error?","product","bounds-check?","bounds-check","immutable","virtual-exemplar","harvest","remove","pad-head","last","set-fourth","cartesian-product","remove-eq","shorten","shorter","reversed?","shorter?","shortest","head-slice","pop*","tail-slice*","but-last-slice","iota?","append!","cut-slice","new-resizable","head-slice*","sequence-hashcode","pop","set-nth","?nth","second","join","immutable-sequence?","<reversed>","3append-as","virtual-sequence","subseq?","remove-nth!","length","last-index","lengthen","assert-sequence","copy","move","third","first","tail?","set-first","prefix","bounds-error","<repetition>","exchange","surround","cut","min-length","set-third","push-all","head?","subseq-start-from","delete-slice","rest","sum-lengths","head*","infimum","remove!","glue","slice-error","subseq","push","replace-slice","subseq-as","unclip-last"],"math-builtin":["number=","next-power-of-2","?1+","fp-special?","imaginary-part","float>bits","number?","fp-infinity?","bignum?","fp-snan?","denominator","gcd","*","+","fp-bitwise=","-","u>=","/",">=","bitand","power-of-2?","log2-expects-positive","neg?","<","log2",">","integer?","number","bits>double","2/","zero?","bits>float","float?","shift","ratio?","rect>","even?","ratio","fp-sign","bitnot",">fixnum","complex?","/i","integer>fixnum","/f","sgn",">bignum","next-float","u<","u>","mod","recip","rational",">float","2^","integer","fixnum?","neg","fixnum","sq","bignum",">rect","bit?","fp-qnan?","simple-gcd","complex","<fp-nan>","real",">fraction","double>bits","bitor","rem","fp-nan-payload","real-part","log2-expects-positive?","prev-float","align","unordered?","float","fp-nan?","abs","bitxor","integer>fixnum-strict","u<=","odd?","<=","/mod",">integer","real?","rational?","numerator"]};Object.keys(s).forEach(function(l){a[l].pattern=o(s[l])});var u=["2bi","while","2tri","bi*","4dip","both?","same?","tri@","curry","prepose","3bi","?if","tri*","2keep","3keep","curried","2keepd","when","2bi*","2tri*","4keep","bi@","keepdd","do","unless*","tri-curry","if*","loop","bi-curry*","when*","2bi@","2tri@","with","2with","either?","bi","until","3dip","3curry","tri-curry*","tri-curry@","bi-curry","keepd","compose","2dip","if","3tri","unless","tuple","keep","2curry","tri","most","while*","dip","composed","bi-curry@","find-last-from","trim-head-slice","map-as","each-from","none?","trim-tail","partition","if-empty","accumulate*","reject!","find-from","accumulate-as","collector-for-as","reject","map","map-sum","accumulate!","2each-from","follow","supremum-by","map!","unless-empty","collector","padding","reduce-index","replicate-as","infimum-by","trim-tail-slice","count","find-index","filter","accumulate*!","reject-as","map-integers","map-find","reduce","selector","interleave","2map","filter-as","binary-reduce","map-index-as","find","produce","filter!","replicate","cartesian-map","cartesian-each","find-index-from","map-find-last","3map-as","3map","find-last","selector-as","2map-as","2map-reduce","accumulate","each","each-index","accumulate*-as","when-empty","all?","collector-as","push-either","new-like","collector-for","2selector","push-if","2all?","map-reduce","3each","any?","trim-slice","2reduce","change-nth","produce-as","2each","trim","trim-head","cartesian-find","map-index","if-zero","each-integer","unless-zero","(find-integer)","when-zero","find-last-integer","(all-integers?)","times","(each-integer)","find-integer","all-integers?","unless-negative","if-positive","when-positive","when-negative","unless-positive","if-negative","case","2cleave","cond>quot","case>quot","3cleave","wrong-values","to-fixed-point","alist>quot","cond","cleave","call-effect","recursive-hashcode","spread","deep-spread>quot","2||","0||","n||","0&&","2&&","3||","1||","1&&","n&&","3&&","smart-unless*","keep-inputs","reduce-outputs","smart-when*","cleave>array","smart-with","smart-apply","smart-if","inputs/outputs","output>sequence-n","map-outputs","map-reduce-outputs","dropping","output>array","smart-map-reduce","smart-2map-reduce","output>array-n","nullary","input<sequence","append-outputs","drop-inputs","inputs","smart-2reduce","drop-outputs","smart-reduce","preserving","smart-when","outputs","append-outputs-as","smart-unless","smart-if*","sum-outputs","input<sequence-unsafe","output>sequence"];a.combinators.pattern=o(u),t.languages.factor=a})(e)}Jr.displayName="false";Jr.aliases=[];function Jr(e){(function(t){t.languages.false={comment:{pattern:/\{[^}]*\}/},string:{pattern:/"[^"]*"/,greedy:!0},"character-code":{pattern:/'(?:[^\r]|\r\n?)/,alias:"number"},"assembler-code":{pattern:/\d+`/,alias:"important"},number:/\d+/,operator:/[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,punctuation:/\[|\]/,variable:/[a-z]/,"non-standard":{pattern:/[()<BDO®]/,alias:"bold"}}})(e)}ea.displayName="firestore-security-rules";ea.aliases=[];function ea(e){e.register(W),e.languages["firestore-security-rules"]=e.languages.extend("clike",{comment:/\/\/.*/,keyword:/\b(?:allow|function|if|match|null|return|rules_version|service)\b/,operator:/&&|\|\||[<>!=]=?|[-+*/%]|\b(?:in|is)\b/}),delete e.languages["firestore-security-rules"]["class-name"],e.languages.insertBefore("firestore-security-rules","keyword",{path:{pattern:/(^|[\s(),])(?:\/(?:[\w\xA0-\uFFFF]+|\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)))+/,lookbehind:!0,greedy:!0,inside:{variable:{pattern:/\{[\w\xA0-\uFFFF]+(?:=\*\*)?\}|\$\([\w\xA0-\uFFFF.]+\)/,inside:{operator:/=/,keyword:/\*\*/,punctuation:/[.$(){}]/}},punctuation:/\//}},method:{pattern:/(\ballow\s+)[a-z]+(?:\s*,\s*[a-z]+)*(?=\s*[:;])/,lookbehind:!0,alias:"builtin",inside:{punctuation:/,/}}})}ta.displayName="flow";ta.aliases=[];function ta(e){e.register(ie),(function(t){t.languages.flow=t.languages.extend("javascript",{}),t.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),t.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete t.languages.flow.parameter,t.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(t.languages.flow.keyword)||(t.languages.flow.keyword=[t.languages.flow.keyword]),t.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})})(e)}na.displayName="fortran";na.aliases=[];function na(e){e.languages.fortran={"quoted-number":{pattern:/[BOZ](['"])[A-F0-9]+\1/i,alias:"number"},string:{pattern:/(?:\b\w+_)?(['"])(?:\1\1|&(?:\r\n?|\n)(?:[ \t]*!.*(?:\r\n?|\n)|(?![ \t]*!))|(?!\1).)*(?:\1|&)/,inside:{comment:{pattern:/(&(?:\r\n?|\n)\s*)!.*/,lookbehind:!0}}},comment:{pattern:/!.*/,greedy:!0},boolean:/\.(?:FALSE|TRUE)\.(?:_\w+)?/i,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[ED][+-]?\d+)?(?:_\w+)?/i,keyword:[/\b(?:CHARACTER|COMPLEX|DOUBLE ?PRECISION|INTEGER|LOGICAL|REAL)\b/i,/\b(?:END ?)?(?:BLOCK ?DATA|DO|FILE|FORALL|FUNCTION|IF|INTERFACE|MODULE(?! PROCEDURE)|PROGRAM|SELECT|SUBROUTINE|TYPE|WHERE)\b/i,/\b(?:ALLOCATABLE|ALLOCATE|BACKSPACE|CALL|CASE|CLOSE|COMMON|CONTAINS|CONTINUE|CYCLE|DATA|DEALLOCATE|DIMENSION|DO|END|EQUIVALENCE|EXIT|EXTERNAL|FORMAT|GO ?TO|IMPLICIT(?: NONE)?|INQUIRE|INTENT|INTRINSIC|MODULE PROCEDURE|NAMELIST|NULLIFY|OPEN|OPTIONAL|PARAMETER|POINTER|PRINT|PRIVATE|PUBLIC|READ|RETURN|REWIND|SAVE|SELECT|STOP|TARGET|WHILE|WRITE)\b/i,/\b(?:ASSIGNMENT|DEFAULT|ELEMENTAL|ELSE|ELSEIF|ELSEWHERE|ENTRY|IN|INCLUDE|INOUT|KIND|NULL|ONLY|OPERATOR|OUT|PURE|RECURSIVE|RESULT|SEQUENCE|STAT|THEN|USE)\b/i],operator:[/\*\*|\/\/|=>|[=\/]=|[<>]=?|::|[+\-*=%]|\.[A-Z]+\./i,{pattern:/(^|(?!\().)\/(?!\))/,lookbehind:!0}],punctuation:/\(\/|\/\)|[(),;:&]/}}ra.displayName="ftl";ra.aliases=[];function ra(e){e.register(oe),(function(t){for(var n=/[^<()"']|\((?:<expr>)*\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/.source,r=0;r<2;r++)n=n.replace(/<expr>/g,function(){return n});n=n.replace(/<expr>/g,/[^\s\S]/.source);var a={comment:/<#--[\s\S]*?-->/,string:[{pattern:/\br("|')(?:(?!\1)[^\\]|\\.)*\1/,greedy:!0},{pattern:RegExp(/("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:(?!\})(?:<expr>))*\})*\1/.source.replace(/<expr>/g,function(){return n})),greedy:!0,inside:{interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\\\)*)\$\{(?:(?!\})(?:<expr>))*\}/.source.replace(/<expr>/g,function(){return n})),lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:null}}}}],keyword:/\b(?:as)\b/,boolean:/\b(?:false|true)\b/,"builtin-function":{pattern:/((?:^|[^?])\?\s*)\w+/,lookbehind:!0,alias:"function"},function:/\b\w+(?=\s*\()/,number:/\b\d+(?:\.\d+)?\b/,operator:/\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,punctuation:/[,;.:()[\]{}]/};a.string[1].inside.interpolation.inside.rest=a,t.languages.ftl={"ftl-comment":{pattern:/^<#--[\s\S]*/,alias:"comment"},"ftl-directive":{pattern:/^<[\s\S]+>$/,inside:{directive:{pattern:/(^<\/?)[#@][a-z]\w*/i,lookbehind:!0,alias:"keyword"},punctuation:/^<\/?|\/?>$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:a}}},"ftl-interpolation":{pattern:/^\$\{[\s\S]*\}$/,inside:{punctuation:/^\$\{|\}$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:a}}}},t.hooks.add("before-tokenize",function(i){var o=RegExp(/<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g,function(){return n}),"gi");t.languages["markup-templating"].buildPlaceholders(i,"ftl",o)}),t.hooks.add("after-tokenize",function(i){t.languages["markup-templating"].tokenizePlaceholders(i,"ftl")})})(e)}aa.displayName="gml";aa.aliases=["gamemakerlanguage"];function aa(e){e.register(W),e.languages.gamemakerlanguage=e.languages.gml=e.languages.extend("clike",{keyword:/\b(?:break|case|continue|default|do|else|enum|exit|for|globalvar|if|repeat|return|switch|until|var|while)\b/,number:/(?:\b0x[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ulf]{0,4}/i,operator:/--|\+\+|[-+%/=]=?|!=|\*\*?=?|<[<=>]?|>[=>]?|&&?|\^\^?|\|\|?|~|\b(?:and|at|not|or|with|xor)\b/,constant:/\b(?:GM_build_date|GM_version|action_(?:continue|restart|reverse|stop)|all|gamespeed_(?:fps|microseconds)|global|local|noone|other|pi|pointer_(?:invalid|null)|self|timezone_(?:local|utc)|undefined|ev_(?:create|destroy|step|alarm|keyboard|mouse|collision|other|draw|draw_(?:begin|end|post|pre)|keypress|keyrelease|trigger|(?:left|middle|no|right)_button|(?:left|middle|right)_press|(?:left|middle|right)_release|mouse_(?:enter|leave|wheel_down|wheel_up)|global_(?:left|middle|right)_button|global_(?:left|middle|right)_press|global_(?:left|middle|right)_release|joystick(?:1|2)_(?:button1|button2|button3|button4|button5|button6|button7|button8|down|left|right|up)|outside|boundary|game_start|game_end|room_start|room_end|no_more_lives|animation_end|end_of_path|no_more_health|user\d|gui|gui_begin|gui_end|step_(?:begin|end|normal))|vk_(?:alt|anykey|backspace|control|delete|down|end|enter|escape|home|insert|left|nokey|pagedown|pageup|pause|printscreen|return|right|shift|space|tab|up|f\d|numpad\d|add|decimal|divide|lalt|lcontrol|lshift|multiply|ralt|rcontrol|rshift|subtract)|achievement_(?:filter_(?:all_players|favorites_only|friends_only)|friends_info|info|leaderboard_info|our_info|pic_loaded|show_(?:achievement|bank|friend_picker|leaderboard|profile|purchase_prompt|ui)|type_challenge|type_score_challenge)|asset_(?:font|object|path|room|script|shader|sound|sprite|tiles|timeline|unknown)|audio_(?:3d|falloff_(?:exponent_distance|exponent_distance_clamped|inverse_distance|inverse_distance_clamped|linear_distance|linear_distance_clamped|none)|mono|new_system|old_system|stereo)|bm_(?:add|complex|dest_alpha|dest_color|dest_colour|inv_dest_alpha|inv_dest_color|inv_dest_colour|inv_src_alpha|inv_src_color|inv_src_colour|max|normal|one|src_alpha|src_alpha_sat|src_color|src_colour|subtract|zero)|browser_(?:chrome|firefox|ie|ie_mobile|not_a_browser|opera|safari|safari_mobile|tizen|unknown|windows_store)|buffer_(?:bool|f16|f32|f64|fast|fixed|generalerror|grow|invalidtype|network|outofbounds|outofspace|s16|s32|s8|seek_end|seek_relative|seek_start|string|text|u16|u32|u64|u8|vbuffer|wrap)|c_(?:aqua|black|blue|dkgray|fuchsia|gray|green|lime|ltgray|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)|cmpfunc_(?:always|equal|greater|greaterequal|less|lessequal|never|notequal)|cr_(?:appstart|arrow|beam|cross|default|drag|handpoint|hourglass|none|size_all|size_nesw|size_ns|size_nwse|size_we|uparrow)|cull_(?:clockwise|counterclockwise|noculling)|device_(?:emulator|tablet)|device_ios_(?:ipad|ipad_retina|iphone|iphone5|iphone6|iphone6plus|iphone_retina|unknown)|display_(?:landscape|landscape_flipped|portrait|portrait_flipped)|dll_(?:cdecl|cdel|stdcall)|ds_type_(?:grid|list|map|priority|queue|stack)|ef_(?:cloud|ellipse|explosion|firework|flare|rain|ring|smoke|smokeup|snow|spark|star)|fa_(?:archive|bottom|center|directory|hidden|left|middle|readonly|right|sysfile|top|volumeid)|fb_login_(?:default|fallback_to_webview|forcing_safari|forcing_webview|no_fallback_to_webview|use_system_account)|iap_(?:available|canceled|ev_consume|ev_product|ev_purchase|ev_restore|ev_storeload|failed|purchased|refunded|status_available|status_loading|status_processing|status_restoring|status_unavailable|status_uninitialised|storeload_failed|storeload_ok|unavailable)|leaderboard_type_(?:number|time_mins_secs)|lighttype_(?:dir|point)|matrix_(?:projection|view|world)|mb_(?:any|left|middle|none|right)|network_(?:config_(?:connect_timeout|disable_reliable_udp|enable_reliable_udp|use_non_blocking_socket)|socket_(?:bluetooth|tcp|udp)|type_(?:connect|data|disconnect|non_blocking_connect))|of_challenge_(?:lose|tie|win)|os_(?:android|ios|linux|macosx|ps3|ps4|psvita|unknown|uwp|win32|win8native|windows|winphone|xboxone)|phy_debug_render_(?:aabb|collision_pairs|coms|core_shapes|joints|obb|shapes)|phy_joint_(?:anchor_1_x|anchor_1_y|anchor_2_x|anchor_2_y|angle|angle_limits|damping_ratio|frequency|length_1|length_2|lower_angle_limit|max_force|max_length|max_motor_force|max_motor_torque|max_torque|motor_force|motor_speed|motor_torque|reaction_force_x|reaction_force_y|reaction_torque|speed|translation|upper_angle_limit)|phy_particle_data_flag_(?:category|color|colour|position|typeflags|velocity)|phy_particle_flag_(?:colormixing|colourmixing|elastic|powder|spring|tensile|viscous|wall|water|zombie)|phy_particle_group_flag_(?:rigid|solid)|pr_(?:linelist|linestrip|pointlist|trianglefan|trianglelist|trianglestrip)|ps_(?:distr|shape)_(?:diamond|ellipse|gaussian|invgaussian|line|linear|rectangle)|pt_shape_(?:circle|cloud|disk|explosion|flare|line|pixel|ring|smoke|snow|spark|sphere|square|star)|ty_(?:real|string)|gp_(?:face\d|axislh|axislv|axisrh|axisrv|padd|padl|padr|padu|select|shoulderl|shoulderlb|shoulderr|shoulderrb|start|stickl|stickr)|lb_disp_(?:none|numeric|time_ms|time_sec)|lb_sort_(?:ascending|descending|none)|ov_(?:achievements|community|friends|gamegroup|players|settings)|ugc_(?:filetype_(?:community|microtrans)|list_(?:Favorited|Followed|Published|Subscribed|UsedOrPlayed|VotedDown|VotedOn|VotedUp|WillVoteLater)|match_(?:AllGuides|Artwork|Collections|ControllerBindings|IntegratedGuides|Items|Items_Mtx|Items_ReadyToUse|Screenshots|UsableInGame|Videos|WebGuides)|query_(?:AcceptedForGameRankedByAcceptanceDate|CreatedByFriendsRankedByPublicationDate|FavoritedByFriendsRankedByPublicationDate|NotYetRated)|query_RankedBy(?:NumTimesReported|PublicationDate|TextSearch|TotalVotesAsc|Trend|Vote|VotesUp)|result_success|sortorder_CreationOrder(?:Asc|Desc)|sortorder_(?:ForModeration|LastUpdatedDesc|SubscriptionDateDesc|TitleAsc|VoteScoreDesc)|visibility_(?:friends_only|private|public))|vertex_usage_(?:binormal|blendindices|blendweight|color|colour|depth|fog|normal|position|psize|sample|tangent|texcoord|textcoord)|vertex_type_(?:float\d|color|colour|ubyte4)|input_type|layerelementtype_(?:background|instance|oldtilemap|particlesystem|sprite|tile|tilemap|undefined)|se_(?:chorus|compressor|echo|equalizer|flanger|gargle|none|reverb)|text_type|tile_(?:flip|index_mask|mirror|rotate)|(?:obj|rm|scr|spr)\w+)\b/,variable:/\b(?:alarm|application_surface|async_load|background_(?:alpha|blend|color|colour|foreground|height|hspeed|htiled|index|showcolor|showcolour|visible|vspeed|vtiled|width|x|xscale|y|yscale)|bbox_(?:bottom|left|right|top)|browser_(?:height|width)|caption_(?:health|lives|score)|current_(?:day|hour|minute|month|second|time|weekday|year)|cursor_sprite|debug_mode|delta_time|direction|display_aa|error_(?:last|occurred)|event_(?:action|number|object|type)|fps|fps_real|friction|game_(?:display|project|save)_(?:id|name)|gamemaker_(?:pro|registered|version)|gravity|gravity_direction|(?:h|v)speed|health|iap_data|id|image_(?:alpha|angle|blend|depth|index|number|speed|xscale|yscale)|instance_(?:count|id)|keyboard_(?:key|lastchar|lastkey|string)|layer|lives|mask_index|mouse_(?:button|lastbutton|x|y)|object_index|os_(?:browser|device|type|version)|path_(?:endaction|index|orientation|position|positionprevious|scale|speed)|persistent|phy_(?:rotation|(?:col_normal|collision|com|linear_velocity|position|speed)_(?:x|y)|angular_(?:damping|velocity)|position_(?:x|y)previous|speed|linear_damping|bullet|fixed_rotation|active|mass|inertia|dynamic|kinematic|sleeping|collision_points)|pointer_(?:invalid|null)|room|room_(?:caption|first|height|last|persistent|speed|width)|score|secure_mode|show_(?:health|lives|score)|solid|speed|sprite_(?:height|index|width|xoffset|yoffset)|temp_directory|timeline_(?:index|loop|position|running|speed)|transition_(?:color|kind|steps)|undefined|view_(?:angle|current|enabled|(?:h|v)(?:border|speed)|(?:h|w|x|y)port|(?:h|w|x|y)view|object|surface_id|visible)|visible|webgl_enabled|working_directory|(?:x|y)(?:previous|start)|x|y|argument(?:_relitive|_count|\d)|argument|global|local|other|self)\b/})}ia.displayName="gap";ia.aliases=[];function ia(e){e.languages.gap={shell:{pattern:/^gap>[\s\S]*?(?=^gap>|$(?![\s\S]))/m,greedy:!0,inside:{gap:{pattern:/^(gap>).+(?:(?:\r(?:\n|(?!\n))|\n)>.*)*/,lookbehind:!0,inside:null},punctuation:/^gap>/}},comment:{pattern:/#.*/,greedy:!0},string:{pattern:/(^|[^\\'"])(?:'(?:[^\r\n\\']|\\.){1,10}'|"(?:[^\r\n\\"]|\\.)*"(?!")|"""[\s\S]*?""")/,lookbehind:!0,greedy:!0,inside:{continuation:{pattern:/([\r\n])>/,lookbehind:!0,alias:"punctuation"}}},keyword:/\b(?:Assert|Info|IsBound|QUIT|TryNextMethod|Unbind|and|atomic|break|continue|do|elif|else|end|fi|for|function|if|in|local|mod|not|od|or|quit|readonly|readwrite|rec|repeat|return|then|until|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:{pattern:/(^|[^\w.]|\.\.)(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?:_[a-z]?)?(?=$|[^\w.]|\.\.)/,lookbehind:!0},continuation:{pattern:/([\r\n])>/,lookbehind:!0,alias:"punctuation"},operator:/->|[-+*/^~=!]|<>|[<>]=?|:=|\.\./,punctuation:/[()[\]{},;.:]/},e.languages.gap.shell.inside.gap.inside=e.languages.gap}oa.displayName="gcode";oa.aliases=[];function oa(e){e.languages.gcode={comment:/;.*|\B\(.*?\)\B/,string:{pattern:/"(?:""|[^"])*"/,greedy:!0},keyword:/\b[GM]\d+(?:\.\d+)?\b/,property:/\b[A-Z]/,checksum:{pattern:/(\*)\d+/,lookbehind:!0,alias:"number"},punctuation:/[:*]/}}sa.displayName="gdscript";sa.aliases=[];function sa(e){e.languages.gdscript={comment:/#.*/,string:{pattern:/@?(?:("|')(?:(?!\1)[^\n\\]|\\[\s\S])*\1(?!"|')|"""(?:[^\\]|\\[\s\S])*?""")/,greedy:!0},"class-name":{pattern:/(^(?:class|class_name|extends)[ \t]+|^export\([ \t]*|\bas[ \t]+|(?:\b(?:const|var)[ \t]|[,(])[ \t]*\w+[ \t]*:[ \t]*|->[ \t]*)[a-zA-Z_]\w*/m,lookbehind:!0},keyword:/\b(?:and|as|assert|break|breakpoint|class|class_name|const|continue|elif|else|enum|export|extends|for|func|if|in|is|master|mastersync|match|not|null|onready|or|pass|preload|puppet|puppetsync|remote|remotesync|return|self|setget|signal|static|tool|var|while|yield)\b/,function:/\b[a-z_]\w*(?=[ \t]*\()/i,variable:/\$\w+/,number:[/\b0b[01_]+\b|\b0x[\da-fA-F_]+\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.[\d_]+)(?:e[+-]?[\d_]+)?\b/,/\b(?:INF|NAN|PI|TAU)\b/],constant:/\b[A-Z][A-Z_\d]*\b/,boolean:/\b(?:false|true)\b/,operator:/->|:=|&&|\|\||<<|>>|[-+*/%&|!<>=]=?|[~^]/,punctuation:/[.:,;()[\]{}]/}}la.displayName="gedcom";la.aliases=[];function la(e){e.languages.gedcom={"line-value":{pattern:/(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,lookbehind:!0,inside:{pointer:{pattern:/^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,alias:"variable"}}},record:{pattern:/(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,lookbehind:!0,alias:"tag"},level:{pattern:/(^[\t ]*)\d+/m,lookbehind:!0,alias:"number"},pointer:{pattern:/@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,alias:"variable"}}}ua.displayName="gettext";ua.aliases=["po"];function ua(e){e.languages.gettext={comment:[{pattern:/# .*/,greedy:!0,alias:"translator-comment"},{pattern:/#\..*/,greedy:!0,alias:"extracted-comment"},{pattern:/#:.*/,greedy:!0,alias:"reference-comment"},{pattern:/#,.*/,greedy:!0,alias:"flag-comment"},{pattern:/#\|.*/,greedy:!0,alias:"previously-untranslated-comment"},{pattern:/#.*/,greedy:!0}],string:{pattern:/(^|[^\\])"(?:[^"\\]|\\.)*"/,lookbehind:!0,greedy:!0},keyword:/^msg(?:ctxt|id|id_plural|str)\b/m,number:/\b\d+\b/,punctuation:/[\[\]]/},e.languages.po=e.languages.gettext}ca.displayName="gherkin";ca.aliases=[];function ca(e){(function(t){var n=/(?:\r?\n|\r)[ \t]*\|.+\|(?:(?!\|).)*/.source;t.languages.gherkin={pystring:{pattern:/("""|''')[\s\S]+?\1/,alias:"string"},comment:{pattern:/(^[ \t]*)#.*/m,lookbehind:!0},tag:{pattern:/(^[ \t]*)@\S*/m,lookbehind:!0},feature:{pattern:/((?:^|\r?\n|\r)[ \t]*)(?:Ability|Ahoy matey!|Arwedd|Aspekt|Besigheid Behoefte|Business Need|Caracteristica|Característica|Egenskab|Egenskap|Eiginleiki|Feature|Fīča|Fitur|Fonctionnalité|Fonksyonalite|Funcionalidade|Funcionalitat|Functionalitate|Funcţionalitate|Funcționalitate|Functionaliteit|Fungsi|Funkcia|Funkcija|Funkcionalitāte|Funkcionalnost|Funkcja|Funksie|Funktionalität|Funktionalitéit|Funzionalità|Hwaet|Hwæt|Jellemző|Karakteristik|Lastnost|Mak|Mogucnost|laH|Mogućnost|Moznosti|Možnosti|OH HAI|Omadus|Ominaisuus|Osobina|Özellik|Potrzeba biznesowa|perbogh|poQbogh malja'|Požadavek|Požiadavka|Pretty much|Qap|Qu'meH 'ut|Savybė|Tính năng|Trajto|Vermoë|Vlastnosť|Właściwość|Značilnost|Δυνατότητα|Λειτουργία|Могућност|Мөмкинлек|Особина|Свойство|Үзенчәлеклелек|Функционал|Функционалност|Функция|Функціонал|תכונה|خاصية|خصوصیت|صلاحیت|کاروبار کی ضرورت|وِیژگی|रूप लेख|ਖਾਸੀਅਤ|ਨਕਸ਼ ਨੁਹਾਰ|ਮੁਹਾਂਦਰਾ|గుణము|ಹೆಚ್ಚಳ|ความต้องการทางธุรกิจ|ความสามารถ|โครงหลัก|기능|フィーチャ|功能|機能):(?:[^:\r\n]+(?:\r?\n|\r|$))*/,lookbehind:!0,inside:{important:{pattern:/(:)[^\r\n]+/,lookbehind:!0},keyword:/[^:\r\n]+:/}},scenario:{pattern:/(^[ \t]*)(?:Abstract Scenario|Abstrakt Scenario|Achtergrond|Aer|Ær|Agtergrond|All y'all|Antecedentes|Antecedents|Atburðarás|Atburðarásir|Awww, look mate|B4|Background|Baggrund|Bakgrund|Bakgrunn|Bakgrunnur|Beispiele|Beispiller|Bối cảnh|Cefndir|Cenario|Cenário|Cenario de Fundo|Cenário de Fundo|Cenarios|Cenários|Contesto|Context|Contexte|Contexto|Conto|Contoh|Contone|Dæmi|Dasar|Dead men tell no tales|Delineacao do Cenario|Delineação do Cenário|Dis is what went down|Dữ liệu|Dyagram Senaryo|Dyagram senaryo|Egzanp|Ejemplos|Eksempler|Ekzemploj|Enghreifftiau|Esbozo do escenario|Escenari|Escenario|Esempi|Esquema de l'escenari|Esquema del escenario|Esquema do Cenario|Esquema do Cenário|EXAMPLZ|Examples|Exempel|Exemple|Exemples|Exemplos|First off|Fono|Forgatókönyv|Forgatókönyv vázlat|Fundo|Geçmiş|Grundlage|Hannergrond|ghantoH|Háttér|Heave to|Istorik|Juhtumid|Keadaan|Khung kịch bản|Khung tình huống|Kịch bản|Koncept|Konsep skenario|Kontèks|Kontekst|Kontekstas|Konteksts|Kontext|Konturo de la scenaro|Latar Belakang|lut chovnatlh|lut|lutmey|Lýsing Atburðarásar|Lýsing Dæma|MISHUN SRSLY|MISHUN|Menggariskan Senario|mo'|Náčrt Scenára|Náčrt Scénáře|Náčrt Scenáru|Oris scenarija|Örnekler|Osnova|Osnova Scenára|Osnova scénáře|Osnutek|Ozadje|Paraugs|Pavyzdžiai|Példák|Piemēri|Plan du scénario|Plan du Scénario|Plan Senaryo|Plan senaryo|Plang vum Szenario|Pozadí|Pozadie|Pozadina|Príklady|Příklady|Primer|Primeri|Primjeri|Przykłady|Raamstsenaarium|Reckon it's like|Rerefons|Scenár|Scénář|Scenarie|Scenarij|Scenarijai|Scenarijaus šablonas|Scenariji|Scenārijs|Scenārijs pēc parauga|Scenarijus|Scenario|Scénario|Scenario Amlinellol|Scenario Outline|Scenario Template|Scenariomal|Scenariomall|Scenarios|Scenariu|Scenariusz|Scenaro|Schema dello scenario|Se ðe|Se the|Se þe|Senario|Senaryo Deskripsyon|Senaryo deskripsyon|Senaryo|Senaryo taslağı|Shiver me timbers|Situācija|Situai|Situasie Uiteensetting|Situasie|Skenario konsep|Skenario|Skica|Structura scenariu|Structură scenariu|Struktura scenarija|Stsenaarium|Swa hwaer swa|Swa|Swa hwær swa|Szablon scenariusza|Szenario|Szenariogrundriss|Tapaukset|Tapaus|Tapausaihio|Taust|Tausta|Template Keadaan|Template Senario|Template Situai|The thing of it is|Tình huống|Variantai|Voorbeelde|Voorbeelden|Wharrimean is|Yo-ho-ho|You'll wanna|Założenia|Παραδείγματα|Περιγραφή Σεναρίου|Σενάρια|Σενάριο|Υπόβαθρο|Кереш|Контекст|Концепт|Мисаллар|Мисоллар|Основа|Передумова|Позадина|Предистория|Предыстория|Приклади|Пример|Примери|Примеры|Рамка на сценарий|Скица|Структура сценарија|Структура сценария|Структура сценарію|Сценарий|Сценарий структураси|Сценарийның төзелеше|Сценарији|Сценарио|Сценарій|Тарих|Үрнәкләр|דוגמאות|רקע|תבנית תרחיש|תרחיש|الخلفية|الگوی سناریو|امثلة|پس منظر|زمینه|سناریو|سيناريو|سيناريو مخطط|مثالیں|منظر نامے کا خاکہ|منظرنامہ|نمونه ها|उदाहरण|परिदृश्य|परिदृश्य रूपरेखा|पृष्ठभूमि|ਉਦਾਹਰਨਾਂ|ਪਟਕਥਾ|ਪਟਕਥਾ ਢਾਂਚਾ|ਪਟਕਥਾ ਰੂਪ ਰੇਖਾ|ਪਿਛੋਕੜ|ఉదాహరణలు|కథనం|నేపథ్యం|సన్నివేశం|ಉದಾಹರಣೆಗಳು|ಕಥಾಸಾರಾಂಶ|ವಿವರಣೆ|ಹಿನ್ನೆಲೆ|โครงสร้างของเหตุการณ์|ชุดของตัวอย่าง|ชุดของเหตุการณ์|แนวคิด|สรุปเหตุการณ์|เหตุการณ์|배경|시나리오|시나리오 개요|예|サンプル|シナリオ|シナリオアウトライン|シナリオテンプレ|シナリオテンプレート|テンプレ|例|例子|剧本|剧本大纲|劇本|劇本大綱|场景|场景大纲|場景|場景大綱|背景):[^:\r\n]*/m,lookbehind:!0,inside:{important:{pattern:/(:)[^\r\n]*/,lookbehind:!0},keyword:/[^:\r\n]+:/}},"table-body":{pattern:RegExp("("+n+")(?:"+n+")+"),lookbehind:!0,inside:{outline:{pattern:/<[^>]+>/,alias:"variable"},td:{pattern:/\s*[^\s|][^|]*/,alias:"string"},punctuation:/\|/}},"table-head":{pattern:RegExp(n),inside:{th:{pattern:/\s*[^\s|][^|]*/,alias:"variable"},punctuation:/\|/}},atrule:{pattern:/(^[ \t]+)(?:'a|'ach|'ej|7|a|A také|A taktiež|A tiež|A zároveň|Aber|Ac|Adott|Akkor|Ak|Aleshores|Ale|Ali|Allora|Alors|Als|Ama|Amennyiben|Amikor|Ampak|an|AN|Ananging|And y'all|And|Angenommen|Anrhegedig a|An|Apabila|Atès|Atesa|Atunci|Avast!|Aye|A|awer|Bagi|Banjur|Bet|Biết|Blimey!|Buh|But at the end of the day I reckon|But y'all|But|BUT|Cal|Când|Cand|Cando|Ce|Cuando|Če|Ða ðe|Ða|Dadas|Dada|Dados|Dado|DaH ghu' bejlu'|dann|Dann|Dano|Dan|Dar|Dat fiind|Data|Date fiind|Date|Dati fiind|Dati|Daţi fiind|Dați fiind|DEN|Dato|De|Den youse gotta|Dengan|Diberi|Diyelim ki|Donada|Donat|Donitaĵo|Do|Dun|Duota|Ðurh|Eeldades|Ef|Eğer ki|Entao|Então|Entón|E|En|Entonces|Epi|És|Etant donnée|Etant donné|Et|Étant données|Étant donnée|Étant donné|Etant données|Etant donnés|Étant donnés|Fakat|Gangway!|Gdy|Gegeben seien|Gegeben sei|Gegeven|Gegewe|ghu' noblu'|Gitt|Given y'all|Given|Givet|Givun|Ha|Cho|I CAN HAZ|In|Ir|It's just unbelievable|I|Ja|Jeśli|Jeżeli|Kad|Kada|Kadar|Kai|Kaj|Když|Keď|Kemudian|Ketika|Khi|Kiedy|Ko|Kuid|Kui|Kun|Lan|latlh|Le sa a|Let go and haul|Le|Lè sa a|Lè|Logo|Lorsqu'<|Lorsque|mä|Maar|Mais|Mając|Ma|Majd|Maka|Manawa|Mas|Men|Menawa|Mutta|Nalika|Nalikaning|Nanging|Når|När|Nato|Nhưng|Niin|Njuk|O zaman|Och|Og|Oletetaan|Ond|Onda|Oraz|Pak|Pero|Però|Podano|Pokiaľ|Pokud|Potem|Potom|Privzeto|Pryd|Quan|Quand|Quando|qaSDI'|Så|Sed|Se|Siis|Sipoze ke|Sipoze Ke|Sipoze|Si|Şi|Și|Soit|Stel|Tada|Tad|Takrat|Tak|Tapi|Ter|Tetapi|Tha the|Tha|Then y'all|Then|Thì|Thurh|Toda|Too right|Un|Und|ugeholl|Và|vaj|Vendar|Ve|wann|Wanneer|WEN|Wenn|When y'all|When|Wtedy|Wun|Y'know|Yeah nah|Yna|Youse know like when|Youse know when youse got|Y|Za predpokladu|Za předpokladu|Zadan|Zadani|Zadano|Zadate|Zadato|Zakładając|Zaradi|Zatati|Þa þe|Þa|Þá|Þegar|Þurh|Αλλά|Δεδομένου|Και|Όταν|Τότε|А також|Агар|Але|Али|Аммо|А|Әгәр|Әйтик|Әмма|Бирок|Ва|Вә|Дадено|Дано|Допустим|Если|Задате|Задати|Задато|И|І|К тому же|Када|Кад|Когато|Когда|Коли|Ләкин|Лекин|Нәтиҗәдә|Нехай|Но|Онда|Припустимо, що|Припустимо|Пусть|Также|Та|Тогда|Тоді|То|Унда|Һәм|Якщо|אבל|אזי|אז|בהינתן|וגם|כאשר|آنگاه|اذاً|اگر|اما|اور|با فرض|بالفرض|بفرض|پھر|تب|ثم|جب|عندما|فرض کیا|لكن|لیکن|متى|هنگامی|و|अगर|और|कदा|किन्तु|चूंकि|जब|तथा|तदा|तब|परन्तु|पर|यदि|ਅਤੇ|ਜਦੋਂ|ਜਿਵੇਂ ਕਿ|ਜੇਕਰ|ਤਦ|ਪਰ|అప్పుడు|ఈ పరిస్థితిలో|కాని|చెప్పబడినది|మరియు|ಆದರೆ|ನಂತರ|ನೀಡಿದ|ಮತ್ತು|ಸ್ಥಿತಿಯನ್ನು|กำหนดให้|ดังนั้น|แต่|เมื่อ|และ|그러면<|그리고<|단<|만약<|만일<|먼저<|조건<|하지만<|かつ<|しかし<|ただし<|ならば<|もし<|並且<|但し<|但是<|假如<|假定<|假設<|假设<|前提<|同时<|同時<|并且<|当<|當<|而且<|那么<|那麼<)(?=[ \t])/m,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,inside:{outline:{pattern:/<[^>]+>/,alias:"variable"}}},outline:{pattern:/<[^>]+>/,alias:"variable"}}})(e)}da.displayName="git";da.aliases=[];function da(e){e.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s--?\w+/}},coord:/^@@.*@@$/m,"commit-sha1":/^commit \w{40}$/m}}pa.displayName="glsl";pa.aliases=[];function pa(e){e.register(Ae),e.languages.glsl=e.languages.extend("c",{keyword:/\b(?:active|asm|atomic_uint|attribute|[ibdu]?vec[234]|bool|break|buffer|case|cast|centroid|class|coherent|common|const|continue|d?mat[234](?:x[234])?|default|discard|do|double|else|enum|extern|external|false|filter|fixed|flat|float|for|fvec[234]|goto|half|highp|hvec[234]|[iu]?sampler2DMS(?:Array)?|[iu]?sampler2DRect|[iu]?samplerBuffer|[iu]?samplerCube|[iu]?samplerCubeArray|[iu]?sampler[123]D|[iu]?sampler[12]DArray|[iu]?image2DMS(?:Array)?|[iu]?image2DRect|[iu]?imageBuffer|[iu]?imageCube|[iu]?imageCubeArray|[iu]?image[123]D|[iu]?image[12]DArray|if|in|inline|inout|input|int|interface|invariant|layout|long|lowp|mediump|namespace|noinline|noperspective|out|output|partition|patch|precise|precision|public|readonly|resource|restrict|return|sample|sampler[12]DArrayShadow|sampler[12]DShadow|sampler2DRectShadow|sampler3DRect|samplerCubeArrayShadow|samplerCubeShadow|shared|short|sizeof|smooth|static|struct|subroutine|superp|switch|template|this|true|typedef|uint|uniform|union|unsigned|using|varying|void|volatile|while|writeonly)\b/})}ga.displayName="gn";ga.aliases=["gni"];function ga(e){e.languages.gn={comment:{pattern:/#.*/,greedy:!0},"string-literal":{pattern:/(^|[^\\"])"(?:[^\r\n"\\]|\\.)*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\{[\s\S]*?\}|[a-zA-Z_]\w*|0x[a-fA-F0-9]{2})/,lookbehind:!0,inside:{number:/^\$0x[\s\S]{2}$/,variable:/^\$\w+$/,"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}},string:/[\s\S]+/}},keyword:/\b(?:else|if)\b/,boolean:/\b(?:false|true)\b/,"builtin-function":{pattern:/\b(?:assert|defined|foreach|import|pool|print|template|tool|toolchain)(?=\s*\()/i,alias:"keyword"},function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:current_cpu|current_os|current_toolchain|default_toolchain|host_cpu|host_os|root_build_dir|root_gen_dir|root_out_dir|target_cpu|target_gen_dir|target_os|target_out_dir)\b/,number:/-?\b\d+\b/,operator:/[-+!=<>]=?|&&|\|\|/,punctuation:/[(){}[\],.]/},e.languages.gn["string-literal"].inside.interpolation.inside.expression.inside=e.languages.gn,e.languages.gni=e.languages.gn}ma.displayName="linker-script";ma.aliases=["ld"];function ma(e){e.languages["linker-script"]={comment:{pattern:/(^|\s)\/\*[\s\S]*?(?:$|\*\/)/,lookbehind:!0,greedy:!0},identifier:{pattern:/"[^"\r\n]*"/,greedy:!0},"location-counter":{pattern:/\B\.\B/,alias:"important"},section:{pattern:/(^|[^\w*])\.\w+\b/,lookbehind:!0,alias:"keyword"},function:/\b[A-Z][A-Z_]*(?=\s*\()/,number:/\b(?:0[xX][a-fA-F0-9]+|\d+)[KM]?\b/,operator:/>>=?|<<=?|->|\+\+|--|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?/,punctuation:/[(){},;]/},e.languages.ld=e.languages["linker-script"]}fa.displayName="go";fa.aliases=[];function fa(e){e.register(W),e.languages.go=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),e.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete e.languages.go["class-name"]}ba.displayName="go-module";ba.aliases=["go-mod"];function ba(e){e.languages["go-mod"]=e.languages["go-module"]={comment:{pattern:/\/\/.*/,greedy:!0},version:{pattern:/(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,lookbehind:!0,alias:"number"},"go-version":{pattern:/((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,lookbehind:!0,alias:"number"},keyword:{pattern:/^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,lookbehind:!0},operator:/=>/,punctuation:/[()[\],]/}}ha.displayName="gradle";ha.aliases=[];function ha(e){e.register(W),(function(t){var n={pattern:/((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}};t.languages.gradle=t.languages.extend("clike",{string:{pattern:/'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/,greedy:!0},keyword:/\b(?:apply|def|dependencies|else|if|implementation|import|plugin|plugins|project|repositories|repository|sourceSets|tasks|val)\b/,number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),t.languages.insertBefore("gradle","string",{shebang:{pattern:/#!.+/,alias:"comment",greedy:!0},"interpolation-string":{pattern:/"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,greedy:!0,inside:{interpolation:n,string:/[\s\S]+/}}}),t.languages.insertBefore("gradle","punctuation",{"spock-block":/\b(?:and|cleanup|expect|given|setup|then|when|where):/}),t.languages.insertBefore("gradle","function",{annotation:{pattern:/(^|[^.])@\w+/,lookbehind:!0,alias:"punctuation"}}),n.inside.expression.inside=t.languages.gradle})(e)}ya.displayName="graphql";ya.aliases=[];function ya(e){e.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:e.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},e.hooks.add("after-tokenize",function(n){if(n.language!=="graphql")return;var r=n.tokens.filter(function(S){return typeof S!="string"&&S.type!=="comment"&&S.type!=="scalar"}),a=0;function i(S){return r[a+S]}function o(S,y){y=y||0;for(var I=0;I<S.length;I++){var T=i(I+y);if(!T||T.type!==S[I])return!1}return!0}function s(S,y){for(var I=1,T=a;T<r.length;T++){var k=r[T],O=k.content;if(k.type==="punctuation"&&typeof O=="string"){if(S.test(O))I++;else if(y.test(O)&&(I--,I===0))return T}}return-1}function u(S,y){var I=S.alias;I?Array.isArray(I)||(S.alias=I=[I]):S.alias=I=[],I.push(y)}for(;a<r.length;){var l=r[a++];if(l.type==="keyword"&&l.content==="mutation"){var c=[];if(o(["definition-mutation","punctuation"])&&i(1).content==="("){a+=2;var d=s(/^\($/,/^\)$/);if(d===-1)continue;for(;a<d;a++){var m=i(0);m.type==="variable"&&(u(m,"variable-input"),c.push(m.content))}a=d+1}if(o(["punctuation","property-query"])&&i(0).content==="{"&&(a++,u(i(0),"property-mutation"),c.length>0)){var p=s(/^\{$/,/^\}$/);if(p===-1)continue;for(var h=a;h<p;h++){var E=r[h];E.type==="variable"&&c.indexOf(E.content)>=0&&u(E,"variable-input")}}}}})}Sa.displayName="groovy";Sa.aliases=[];function Sa(e){e.register(W),(function(t){var n={pattern:/((?:^|[^\\$])(?:\\{2})*)\$(?:\w+|\{[^{}]*\})/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}};t.languages.groovy=t.languages.extend("clike",{string:{pattern:/'''(?:[^\\]|\\[\s\S])*?'''|'(?:\\.|[^\\'\r\n])*'/,greedy:!0},keyword:/\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),t.languages.insertBefore("groovy","string",{shebang:{pattern:/#!.+/,alias:"comment",greedy:!0},"interpolation-string":{pattern:/"""(?:[^\\]|\\[\s\S])*?"""|(["/])(?:\\.|(?!\1)[^\\\r\n])*\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,greedy:!0,inside:{interpolation:n,string:/[\s\S]+/}}}),t.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(?:and|cleanup|expect|given|setup|then|when|where):/}),t.languages.insertBefore("groovy","function",{annotation:{pattern:/(^|[^.])@\w+/,lookbehind:!0,alias:"punctuation"}}),n.inside.expression.inside=t.languages.groovy})(e)}Ea.displayName="less";Ea.aliases=[];function Ea(e){e.register(De),e.languages.less=e.languages.extend("css",{comment:[/\/\*[\s\S]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,operator:/[+\-*\/]/}),e.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,lookbehind:!0,alias:"function"}})}Aa.displayName="scss";Aa.aliases=[];function Aa(e){e.register(De),e.languages.scss=e.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),e.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]}),e.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),e.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}}),e.languages.scss.atrule.inside.rest=e.languages.scss}Ta.displayName="textile";Ta.aliases=[];function Ta(e){e.register(re),(function(t){var n=/\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source,r=/\)|\((?![^|()\n]+\))/.source;function a(d,m){return RegExp(d.replace(/<MOD>/g,function(){return"(?:"+n+")"}).replace(/<PAR>/g,function(){return"(?:"+r+")"}),m||"")}var i={css:{pattern:/\{[^{}]+\}/,inside:{rest:t.languages.css}},"class-id":{pattern:/(\()[^()]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\[\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},o=t.languages.textile=t.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:a(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),inside:{modifier:{pattern:a(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source),lookbehind:!0,inside:i},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:a(/^[*#]+<MOD>*\s+\S.*/.source,"m"),inside:{modifier:{pattern:a(/(^[*#]+)<MOD>+/.source),lookbehind:!0,inside:i},punctuation:/^[*#]+/}},table:{pattern:a(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source,"m"),inside:{modifier:{pattern:a(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source),lookbehind:!0,inside:i},punctuation:/\||^\./}},inline:{pattern:a(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source),lookbehind:!0,inside:{bold:{pattern:a(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},italic:{pattern:a(/(^(__?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},cite:{pattern:a(/(^\?\?<MOD>*).+?(?=\?\?)/.source),lookbehind:!0,alias:"string"},code:{pattern:a(/(^@<MOD>*).+?(?=@)/.source),lookbehind:!0,alias:"keyword"},inserted:{pattern:a(/(^\+<MOD>*).+?(?=\+)/.source),lookbehind:!0},deleted:{pattern:a(/(^-<MOD>*).+?(?=-)/.source),lookbehind:!0},span:{pattern:a(/(^%<MOD>*).+?(?=%)/.source),lookbehind:!0},modifier:{pattern:a(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source),lookbehind:!0,inside:i},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(^\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:a(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source),inside:{text:{pattern:a(/(^"<MOD>*)[^"]+(?=")/.source),lookbehind:!0},modifier:{pattern:a(/(^")<MOD>+/.source),lookbehind:!0,inside:i},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:a(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source),inside:{source:{pattern:a(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source),lookbehind:!0,alias:"url"},modifier:{pattern:a(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),lookbehind:!0,inside:i},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^()]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:C|R|TM)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),s=o.phrase.inside,u={inline:s.inline,link:s.link,image:s.image,footnote:s.footnote,acronym:s.acronym,mark:s.mark};o.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var l=s.inline.inside;l.bold.inside=u,l.italic.inside=u,l.inserted.inside=u,l.deleted.inside=u,l.span.inside=u;var c=s.table.inside;c.inline=u.inline,c.link=u.link,c.image=u.image,c.footnote=u.footnote,c.acronym=u.acronym,c.mark=u.mark})(e)}wa.displayName="haml";wa.aliases=[];function wa(e){e.register(Ve),(function(t){t.languages.haml={"multiline-comment":{pattern:/((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ].+)*/,lookbehind:!0,alias:"comment"},"multiline-code":[{pattern:/((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ].*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ].+)/,lookbehind:!0,inside:t.languages.ruby},{pattern:/((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ].*\|[\t ]*)*/,lookbehind:!0,inside:t.languages.ruby}],filter:{pattern:/((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"symbol"}}},markup:{pattern:/((?:^|\r?\n|\r)[\t ]*)<.+/,lookbehind:!0,inside:t.languages.markup},doctype:{pattern:/((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,lookbehind:!0},tag:{pattern:/((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^{}])+\}|\[[^\]]+\])*[\/<>]*/,lookbehind:!0,inside:{attributes:[{pattern:/(^|[^#])\{(?:\{[^}]+\}|[^{}])+\}/,lookbehind:!0,inside:t.languages.ruby},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,lookbehind:!0},"attr-name":/[\w:-]+(?=\s*!?=|\s*[,)])/,punctuation:/[=(),]/}},{pattern:/\[[^\]]+\]/,inside:t.languages.ruby}],punctuation:/[<>]/}},code:{pattern:/((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,lookbehind:!0,inside:t.languages.ruby},interpolation:{pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"},ruby:{pattern:/[\s\S]+/,inside:t.languages.ruby}}},punctuation:{pattern:/((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,lookbehind:!0}};for(var n="((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ].+|\\s*?(?=\\r?\\n|\\r)))+",r=["css",{filter:"coffee",language:"coffeescript"},"erb","javascript","less","markdown","ruby","scss","textile"],a={},i=0,o=r.length;i<o;i++){var s=r[i];s=typeof s=="string"?{filter:s,language:s}:s,t.languages[s.language]&&(a["filter-"+s.filter]={pattern:RegExp(n.replace("{{filter_name}}",function(){return s.filter})),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"symbol"},text:{pattern:/[\s\S]+/,alias:[s.language,"language-"+s.language],inside:t.languages[s.language]}}})}t.languages.insertBefore("haml","filter",a)})(e)}Ia.displayName="handlebars";Ia.aliases=["hbs","mustache"];function Ia(e){e.register(oe),(function(t){t.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},t.hooks.add("before-tokenize",function(n){var r=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;t.languages["markup-templating"].buildPlaceholders(n,"handlebars",r)}),t.hooks.add("after-tokenize",function(n){t.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}),t.languages.hbs=t.languages.handlebars,t.languages.mustache=t.languages.handlebars})(e)}pt.displayName="haskell";pt.aliases=["hs"];function pt(e){e.languages.haskell={comment:{pattern:/(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--(?:(?=.)[^-!#$%*+=?&@|~.:<>^\\\/].*|$)|\{-[\s\S]*?-\})/m,lookbehind:!0},char:{pattern:/'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|ACK|BEL|BS|CAN|CR|DC1|DC2|DC3|DC4|DEL|DLE|EM|ENQ|EOT|ESC|ETB|ETX|FF|FS|GS|HT|LF|NAK|NUL|RS|SI|SO|SOH|SP|STX|SUB|SYN|US|VT|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,alias:"string"},string:{pattern:/"(?:[^\\"]|\\(?:\S|\s+\\))*"/,greedy:!0},keyword:/\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,"import-statement":{pattern:/(^[\t ]*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,lookbehind:!0,inside:{keyword:/\b(?:as|hiding|import|qualified)\b/,punctuation:/\./}},builtin:/\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,number:/\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,operator:[{pattern:/`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/,greedy:!0},{pattern:/(\s)\.(?=\s)/,lookbehind:!0},/[-!#$%*+=?&@|~:<>^\\\/][-!#$%*+=?&@|~.:<>^\\\/]*|\.[-!#$%*+=?&@|~.:<>^\\\/]+/],hvariable:{pattern:/\b(?:[A-Z][\w']*\.)*[_a-z][\w']*/,inside:{punctuation:/\./}},constant:{pattern:/\b(?:[A-Z][\w']*\.)*[A-Z][\w']*/,inside:{punctuation:/\./}},punctuation:/[{}[\];(),.:]/},e.languages.hs=e.languages.haskell}va.displayName="haxe";va.aliases=[];function va(e){e.register(W),e.languages.haxe=e.languages.extend("clike",{string:{pattern:/"(?:[^"\\]|\\[\s\S])*"/,greedy:!0},"class-name":[{pattern:/(\b(?:abstract|class|enum|extends|implements|interface|new|typedef)\s+)[A-Z_]\w*/,lookbehind:!0},/\b[A-Z]\w*/],keyword:/\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|final|for|from|function|if|implements|import|in|inline|interface|macro|new|null|operator|overload|override|package|private|public|return|static|super|switch|throw|to|try|typedef|untyped|using|var|while)(?!\.)\b/,function:{pattern:/\b[a-z_]\w*(?=\s*(?:<[^<>]*>\s*)?\()/i,greedy:!0},operator:/\.{3}|\+\+|--|&&|\|\||->|=>|(?:<<?|>{1,3}|[-+*/%!=&|^])=?|[?:~]/}),e.languages.insertBefore("haxe","string",{"string-interpolation":{pattern:/'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{interpolation:{pattern:/(^|[^\\])\$(?:\w+|\{[^{}]+\})/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:e.languages.haxe}}},string:/[\s\S]+/}}}),e.languages.insertBefore("haxe","class-name",{regex:{pattern:/~\/(?:[^\/\\\r\n]|\\.)+\/[a-z]*/,greedy:!0,inside:{"regex-flags":/\b[a-z]+$/,"regex-source":{pattern:/^(~\/)[\s\S]+(?=\/$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^~\/|\/$/}}}),e.languages.insertBefore("haxe","keyword",{preprocessor:{pattern:/#(?:else|elseif|end|if)\b.*/,alias:"property"},metadata:{pattern:/@:?[\w.]+/,alias:"symbol"},reification:{pattern:/\$(?:\w+|(?=\{))/,alias:"important"}})}ka.displayName="hcl";ka.aliases=[];function ka(e){e.languages.hcl={comment:/(?:\/\/|#).*|\/\*[\s\S]*?(?:\*\/|$)/,heredoc:{pattern:/<<-?(\w+\b)[\s\S]*?^[ \t]*\1/m,greedy:!0,alias:"string"},keyword:[{pattern:/(?:data|resource)\s+(?:"(?:\\[\s\S]|[^\\"])*")(?=\s+"[\w-]+"\s+\{)/i,inside:{type:{pattern:/(resource|data|\s+)(?:"(?:\\[\s\S]|[^\\"])*")/i,lookbehind:!0,alias:"variable"}}},{pattern:/(?:backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+(?=\{)/i,inside:{type:{pattern:/(backend|module|output|provider|provisioner|variable)\s+(?:[\w-]+|"(?:\\[\s\S]|[^\\"])*")\s+/i,lookbehind:!0,alias:"variable"}}},/[\w-]+(?=\s+\{)/],property:[/[-\w\.]+(?=\s*=(?!=))/,/"(?:\\[\s\S]|[^\\"])+"(?=\s*[:=])/],string:{pattern:/"(?:[^\\$"]|\\[\s\S]|\$(?:(?=")|\$+(?!\$)|[^"${])|\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\})*"/,greedy:!0,inside:{interpolation:{pattern:/(^|[^$])\$\{(?:[^{}"]|"(?:[^\\"]|\\[\s\S])*")*\}/,lookbehind:!0,inside:{type:{pattern:/(\b(?:count|data|local|module|path|self|terraform|var)\b\.)[\w\*]+/i,lookbehind:!0,alias:"variable"},keyword:/\b(?:count|data|local|module|path|self|terraform|var)\b/i,function:/\w+(?=\()/,string:{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0},number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,punctuation:/[!\$#%&'()*+,.\/;<=>@\[\\\]^`{|}~?:]/}}}},number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,boolean:/\b(?:false|true)\b/i,punctuation:/[=\[\]{}]/}}Ra.displayName="hlsl";Ra.aliases=[];function Ra(e){e.register(Ae),e.languages.hlsl=e.languages.extend("c",{"class-name":[e.languages.c["class-name"],/\b(?:AppendStructuredBuffer|BlendState|Buffer|ByteAddressBuffer|CompileShader|ComputeShader|ConsumeStructuredBuffer|DepthStencilState|DepthStencilView|DomainShader|GeometryShader|Hullshader|InputPatch|LineStream|OutputPatch|PixelShader|PointStream|RWBuffer|RWByteAddressBuffer|RWStructuredBuffer|RWTexture(?:1D|1DArray|2D|2DArray|3D)|RasterizerState|RenderTargetView|SamplerComparisonState|SamplerState|StructuredBuffer|Texture(?:1D|1DArray|2D|2DArray|2DMS|2DMSArray|3D|Cube|CubeArray)|TriangleStream|VertexShader)\b/],keyword:[/\b(?:asm|asm_fragment|auto|break|case|catch|cbuffer|centroid|char|class|column_major|compile|compile_fragment|const|const_cast|continue|default|delete|discard|do|dynamic_cast|else|enum|explicit|export|extern|for|friend|fxgroup|goto|groupshared|if|in|inline|inout|interface|line|lineadj|linear|long|matrix|mutable|namespace|new|nointerpolation|noperspective|operator|out|packoffset|pass|pixelfragment|point|precise|private|protected|public|register|reinterpret_cast|return|row_major|sample|sampler|shared|short|signed|sizeof|snorm|stateblock|stateblock_state|static|static_cast|string|struct|switch|tbuffer|technique|technique10|technique11|template|texture|this|throw|triangle|triangleadj|try|typedef|typename|uniform|union|unorm|unsigned|using|vector|vertexfragment|virtual|void|volatile|while)\b/,/\b(?:bool|double|dword|float|half|int|min(?:10float|12int|16(?:float|int|uint))|uint)(?:[1-4](?:x[1-4])?)?\b/],number:/(?:(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?|\b0x[\da-fA-F]+)[fFhHlLuU]?\b/,boolean:/\b(?:false|true)\b/})}Ca.displayName="hoon";Ca.aliases=[];function Ca(e){e.languages.hoon={comment:{pattern:/::.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/,greedy:!0},constant:/%(?:\.[ny]|[\w-]+)/,"class-name":/@(?:[a-z0-9-]*[a-z0-9])?|\*/i,function:/(?:\+[-+] {2})?(?:[a-z](?:[a-z0-9-]*[a-z0-9])?)/,keyword:/\.[\^\+\*=\?]|![><:\.=\?!]|=[>|:,\.\-\^<+;/~\*\?]|\?[>|:\.\-\^<\+&~=@!]|\|[\$_%:\.\-\^~\*=@\?]|\+[|\$\+\*]|:[_\-\^\+~\*]|%[_:\.\-\^\+~\*=]|\^[|:\.\-\+&~\*=\?]|\$[|_%:<>\-\^&~@=\?]|;[:<\+;\/~\*=]|~[>|\$_%<\+\/&=\?!]|--|==/}}_a.displayName="hpkp";_a.aliases=[];function _a(e){e.languages.hpkp={directive:{pattern:/\b(?:includeSubDomains|max-age|pin-sha256|preload|report-to|report-uri|strict)(?=[\s;=]|$)/i,alias:"property"},operator:/=/,punctuation:/;/}}Na.displayName="hsts";Na.aliases=[];function Na(e){e.languages.hsts={directive:{pattern:/\b(?:includeSubDomains|max-age|preload)(?=[\s;=]|$)/i,alias:"property"},operator:/=/,punctuation:/;/}}gt.displayName="json";gt.aliases=["webmanifest"];function gt(e){e.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},e.languages.webmanifest=e.languages.json}Oa.displayName="uri";Oa.aliases=["url"];function Oa(e){e.languages.uri={scheme:{pattern:/^[a-z][a-z0-9+.-]*:/im,greedy:!0,inside:{"scheme-delimiter":/:$/}},fragment:{pattern:/#[\w\-.~!$&'()*+,;=%:@/?]*/,inside:{"fragment-delimiter":/^#/}},query:{pattern:/\?[\w\-.~!$&'()*+,;=%:@/?]*/,inside:{"query-delimiter":{pattern:/^\?/,greedy:!0},"pair-delimiter":/[&;]/,pair:{pattern:/^[^=][\s\S]*/,inside:{key:/^[^=]+/,value:{pattern:/(^=)[\s\S]+/,lookbehind:!0}}}}},authority:{pattern:RegExp(/^\/\//.source+/(?:[\w\-.~!$&'()*+,;=%:]*@)?/.source+("(?:"+/\[(?:[0-9a-fA-F:.]{2,48}|v[0-9a-fA-F]+\.[\w\-.~!$&'()*+,;=]+)\]/.source+"|"+/[\w\-.~!$&'()*+,;=%]*/.source+")")+/(?::\d*)?/.source,"m"),inside:{"authority-delimiter":/^\/\//,"user-info-segment":{pattern:/^[\w\-.~!$&'()*+,;=%:]*@/,inside:{"user-info-delimiter":/@$/,"user-info":/^[\w\-.~!$&'()*+,;=%:]+/}},"port-segment":{pattern:/:\d*$/,inside:{"port-delimiter":/^:/,port:/^\d+/}},host:{pattern:/[\s\S]+/,inside:{"ip-literal":{pattern:/^\[[\s\S]+\]$/,inside:{"ip-literal-delimiter":/^\[|\]$/,"ipv-future":/^v[\s\S]+/,"ipv6-address":/^[\s\S]+/}},"ipv4-address":/^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]\d{0,2})$/}}}},path:{pattern:/^[\w\-.~!$&'()*+,;=%:@/]+/m,inside:{"path-separator":/\//}}},e.languages.url=e.languages.uri}xa.displayName="http";xa.aliases=[];function xa(e){(function(t){function n(c){return RegExp("(^(?:"+c+"):[ 	]*(?![ 	]))[^]+","i")}t.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:t.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:n(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:t.languages.csp},{pattern:n(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:t.languages.hpkp},{pattern:n(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:t.languages.hsts},{pattern:n(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var r=t.languages,a={"application/javascript":r.javascript,"application/json":r.json||r.javascript,"application/xml":r.xml,"text/xml":r.xml,"text/html":r.html,"text/css":r.css,"text/plain":r.plain},i={"application/json":!0,"application/xml":!0};function o(c){var d=c.replace(/^[a-z]+\//,""),m="\\w+/(?:[\\w.-]+\\+)+"+d+"(?![+\\w.-])";return"(?:"+c+"|"+m+")"}var s;for(var u in a)if(a[u]){s=s||{};var l=i[u]?o(u):u;s[u.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+l+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:a[u]}}s&&t.languages.insertBefore("http","header",s)})(e)}Da.displayName="ichigojam";Da.aliases=[];function Da(e){e.languages.ichigojam={comment:/(?:\B'|REM)(?:[^\n\r]*)/i,string:{pattern:/"(?:""|[!#$%&'()*,\/:;<=>?^\w +\-.])*"/,greedy:!0},number:/\B#[0-9A-F]+|\B`[01]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,keyword:/\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GOTO|GSB|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RIGHT|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,function:/\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,label:/(?:\B@\S+)/,operator:/<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,punctuation:/[\[,;:()\]]/}}La.displayName="icon";La.aliases=[];function La(e){e.languages.icon={comment:/#.*/,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/,greedy:!0},number:/\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,"builtin-keyword":{pattern:/&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,alias:"variable"},directive:{pattern:/\$\w+/,alias:"builtin"},keyword:/\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,function:/\b(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,operator:/[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,punctuation:/[\[\](){},;]/}}Ma.displayName="icu-message-format";Ma.aliases=[];function Ma(e){(function(t){function n(u,l){return l<=0?/[]/.source:u.replace(/<SELF>/g,function(){return n(u,l-1)})}var r=/'[{}:=,](?:[^']|'')*'(?!')/,a={pattern:/''/,greedy:!0,alias:"operator"},i={pattern:r,greedy:!0,inside:{escape:a}},o=n(/\{(?:[^{}']|'(?![{},'])|''|<STR>|<SELF>)*\}/.source.replace(/<STR>/g,function(){return r.source}),8),s={pattern:RegExp(o),inside:{message:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:null},"message-delimiter":{pattern:/./,alias:"punctuation"}}};t.languages["icu-message-format"]={argument:{pattern:RegExp(o),greedy:!0,inside:{content:{pattern:/^(\{)[\s\S]+(?=\}$)/,lookbehind:!0,inside:{"argument-name":{pattern:/^(\s*)[^{}:=,\s]+/,lookbehind:!0},"choice-style":{pattern:/^(\s*,\s*choice\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{punctuation:/\|/,range:{pattern:/^(\s*)[+-]?(?:\d+(?:\.\d*)?|\u221e)\s*[<#\u2264]/,lookbehind:!0,inside:{operator:/[<#\u2264]/,number:/\S+/}},rest:null}},"plural-style":{pattern:/^(\s*,\s*(?:plural|selectordinal)\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{offset:/^offset:\s*\d+/,"nested-message":s,selector:{pattern:/=\d+|[^{}:=,\s]+/,inside:{keyword:/^(?:few|many|one|other|two|zero)$/}}}},"select-style":{pattern:/^(\s*,\s*select\s*,\s*)\S(?:[\s\S]*\S)?/,lookbehind:!0,inside:{"nested-message":s,selector:{pattern:/[^{}:=,\s]+/,inside:{keyword:/^other$/}}}},keyword:/\b(?:choice|plural|select|selectordinal)\b/,"arg-type":{pattern:/\b(?:date|duration|number|ordinal|spellout|time)\b/,alias:"keyword"},"arg-skeleton":{pattern:/(,\s*)::[^{}:=,\s]+/,lookbehind:!0},"arg-style":{pattern:/(,\s*)(?:currency|full|integer|long|medium|percent|short)(?=\s*$)/,lookbehind:!0},"arg-style-text":{pattern:RegExp(/(^\s*,\s*(?=\S))/.source+n(/(?:[^{}']|'[^']*'|\{(?:<SELF>)?\})+/.source,8)+"$"),lookbehind:!0,alias:"string"},punctuation:/,/}},"argument-delimiter":{pattern:/./,alias:"operator"}}},escape:a,string:i},s.inside.message.inside=t.languages["icu-message-format"],t.languages["icu-message-format"].argument.inside.content.inside["choice-style"].inside.rest=t.languages["icu-message-format"]})(e)}Pa.displayName="idris";Pa.aliases=["idr"];function Pa(e){e.register(pt),e.languages.idris=e.languages.extend("haskell",{comment:{pattern:/(?:(?:--|\|\|\|).*$|\{-[\s\S]*?-\})/m},keyword:/\b(?:Type|case|class|codata|constructor|corecord|data|do|dsl|else|export|if|implementation|implicit|import|impossible|in|infix|infixl|infixr|instance|interface|let|module|mutual|namespace|of|parameters|partial|postulate|private|proof|public|quoteGoal|record|rewrite|syntax|then|total|using|where|with)\b/,builtin:void 0}),e.languages.insertBefore("idris","keyword",{"import-statement":{pattern:/(^\s*import\s+)(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*/m,lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.idr=e.languages.idris}Fa.displayName="ignore";Fa.aliases=["gitignore","hgignore","npmignore"];function Fa(e){(function(t){t.languages.ignore={comment:/^#.*/m,entry:{pattern:/\S(?:.*(?:(?:\\ )|\S))?/,alias:"string",inside:{operator:/^!|\*\*?|\?/,regex:{pattern:/(^|[^\\])\[[^\[\]]*\]/,lookbehind:!0},punctuation:/\//}}},t.languages.gitignore=t.languages.ignore,t.languages.hgignore=t.languages.ignore,t.languages.npmignore=t.languages.ignore})(e)}Ba.displayName="inform7";Ba.aliases=[];function Ba(e){e.languages.inform7={string:{pattern:/"[^"]*"/,inside:{substitution:{pattern:/\[[^\[\]]+\]/,inside:{delimiter:{pattern:/\[|\]/,alias:"punctuation"}}}}},comment:{pattern:/\[[^\[\]]+\]/,greedy:!0},title:{pattern:/^[ \t]*(?:book|chapter|part(?! of)|section|table|volume)\b.+/im,alias:"important"},number:{pattern:/(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?(?:(?!\d)\w+)?|\b(?:eight|eleven|five|four|nine|one|seven|six|ten|three|twelve|two))\b(?!-)/i,lookbehind:!0},verb:{pattern:/(^|[^-])\b(?:answering|applying to|are|asking|attacking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:ing|s)?|consulting|contain(?:ing|s)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:s|ve|ving)|hold(?:ing|s)?|impl(?:ies|y)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:ing|s)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:ing|s)?|setting|showing|singing|sleeping|smelling|squeezing|support(?:ing|s)?|swearing|switching|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:ing|s)?|var(?:ies|y|ying)|waiting|waking|waving|wear(?:ing|s)?)\b(?!-)/i,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|the story|unless)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,lookbehind:!0},property:{pattern:/(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: off| on)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,lookbehind:!0,alias:"symbol"},position:{pattern:/(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,lookbehind:!0,alias:"keyword"},type:{pattern:/(^|[^-])\b(?:actions?|activit(?:ies|y)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,lookbehind:!0,alias:"variable"},punctuation:/[.,:;(){}]/},e.languages.inform7.string.inside.substitution.inside.rest=e.languages.inform7,e.languages.inform7.string.inside.substitution.inside.rest.text={pattern:/\S(?:\s*\S)*/,alias:"comment"}}Ua.displayName="ini";Ua.aliases=[];function Ua(e){e.languages.ini={comment:{pattern:/(^[ \f\t\v]*)[#;][^\n\r]*/m,lookbehind:!0},section:{pattern:/(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,lookbehind:!0,inside:{"section-name":{pattern:/(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,lookbehind:!0,alias:"selector"},punctuation:/\[|\]/}},key:{pattern:/(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,lookbehind:!0,alias:"attr-name"},value:{pattern:/(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,lookbehind:!0,alias:"attr-value",inside:{"inner-value":{pattern:/^("|').+(?=\1$)/,lookbehind:!0}}},punctuation:/=/}}Ga.displayName="io";Ga.aliases=[];function Ga(e){e.languages.io={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\/\/.*|#.*)/,lookbehind:!0,greedy:!0},"triple-quoted-string":{pattern:/"""(?:\\[\s\S]|(?!""")[^\\])*"""/,greedy:!0,alias:"string"},string:{pattern:/"(?:\\.|[^\\\r\n"])*"/,greedy:!0},keyword:/\b(?:activate|activeCoroCount|asString|block|break|call|catch|clone|collectGarbage|compileString|continue|do|doFile|doMessage|doString|else|elseif|exit|for|foreach|forward|getEnvironmentVariable|getSlot|hasSlot|if|ifFalse|ifNil|ifNilEval|ifTrue|isActive|isNil|isResumable|list|message|method|parent|pass|pause|perform|performWithArgList|print|println|proto|raise|raiseResumable|removeSlot|resend|resume|schedulerSleepSeconds|self|sender|setSchedulerSleepSeconds|setSlot|shallowCopy|slotNames|super|system|then|thisBlock|thisContext|try|type|uniqueId|updateSlot|wait|while|write|yield)\b/,builtin:/\b(?:Array|AudioDevice|AudioMixer|BigNum|Block|Box|Buffer|CFunction|CGI|Color|Curses|DBM|DNSResolver|DOConnection|DOProxy|DOServer|Date|Directory|Duration|DynLib|Error|Exception|FFT|File|Fnmatch|Font|Future|GL|GLE|GLScissor|GLU|GLUCylinder|GLUQuadric|GLUSphere|GLUT|Host|Image|Importer|LinkList|List|Lobby|Locals|MD5|MP3Decoder|MP3Encoder|Map|Message|Movie|Notification|Number|Object|OpenGL|Point|Protos|Random|Regex|SGML|SGMLElement|SGMLParser|SQLite|Sequence|Server|ShowMessage|SleepyCat|SleepyCatCursor|Socket|SocketManager|Sound|Soup|Store|String|Tree|UDPSender|UPDReceiver|URL|User|Warning|WeakLink)\b/,boolean:/\b(?:false|nil|true)\b/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e-?\d+)?/i,operator:/[=!*/%+\-^&|]=|>>?=?|<<?=?|:?:?=|\+\+?|--?|\*\*?|\/\/?|%|\|\|?|&&?|\b(?:and|not|or|return)\b|@@?|\?\??|\.\./,punctuation:/[{}[\];(),.:]/}}Ha.displayName="j";Ha.aliases=[];function Ha(e){e.languages.j={comment:{pattern:/\bNB\..*/,greedy:!0},string:{pattern:/'(?:''|[^'\r\n])*'/,greedy:!0},keyword:/\b(?:(?:CR|LF|adverb|conjunction|def|define|dyad|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,verb:{pattern:/(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,alias:"keyword"},number:/\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:ad|ar|[ejpx])_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_\b(?!\.))/,adverb:{pattern:/[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,alias:"builtin"},operator:/[=a][.:]|_\./,conjunction:{pattern:/&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,alias:"variable"},punctuation:/[()]/}}je.displayName="java";je.aliases=[];function je(e){e.register(W),(function(t){var n=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,r=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,a={pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};t.languages.java=t.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[a,{pattern:RegExp(/(^|[^\w.])/.source+r+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:a.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+r+/[A-Z]\w*\b/.source),lookbehind:!0,inside:a.inside}],keyword:n,function:[t.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),t.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),t.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":a,keyword:n,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+r+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:a.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+r+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:a.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return n.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(e)}qe.displayName="php";qe.aliases=[];function qe(e){e.register(oe),(function(t){var n=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,r=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],a=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,i=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,o=/[{}\[\](),:;]/;t.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:n,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|never|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|never|new|or|parent|print|private|protected|public|readonly|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s*)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:r,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:a,operator:i,punctuation:o};var s={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:t.languages.php},u=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:s}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:s}}];t.languages.insertBefore("php","variable",{string:u,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:n,string:u,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:r,number:a,operator:i,punctuation:o}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),t.hooks.add("before-tokenize",function(l){if(/<\?/.test(l.code)){var c=/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;t.languages["markup-templating"].buildPlaceholders(l,"php",c)}}),t.hooks.add("after-tokenize",function(l){t.languages["markup-templating"].tokenizePlaceholders(l,"php")})})(e)}Ye.displayName="javadoclike";Ye.aliases=[];function Ye(e){(function(t){var n=t.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};function r(i,o){var s="doc-comment",u=t.languages[i];if(u){var l=u[s];if(!l){var c={};c[s]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},u=t.languages.insertBefore(i,"comment",c),l=u[s]}if(l instanceof RegExp&&(l=u[s]={pattern:l}),Array.isArray(l))for(var d=0,m=l.length;d<m;d++)l[d]instanceof RegExp&&(l[d]={pattern:l[d]}),o(l[d]);else o(l)}}function a(i,o){typeof i=="string"&&(i=[i]),i.forEach(function(s){r(s,function(u){u.inside||(u.inside={}),u.inside.rest=o})})}Object.defineProperty(n,"addSupport",{value:a}),n.addSupport(["java","javascript","php"],n)})(e)}$a.displayName="scala";$a.aliases=[];function $a(e){e.register(je),e.languages.scala=e.languages.extend("java",{"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/<-|=>|\b(?:abstract|case|catch|class|def|derives|do|else|enum|extends|extension|final|finally|for|forSome|given|if|implicit|import|infix|inline|lazy|match|new|null|object|opaque|open|override|package|private|protected|return|sealed|self|super|this|throw|trait|transparent|try|type|using|val|var|while|with|yield)\b/,number:/\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,builtin:/\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,symbol:/'[^\d\s\\]\w*/}),e.languages.insertBefore("scala","triple-quoted-string",{"string-interpolation":{pattern:/\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,greedy:!0,inside:{id:{pattern:/^\w+/,greedy:!0,alias:"function"},escape:{pattern:/\\\$"|\$[$"]/,greedy:!0,alias:"symbol"},interpolation:{pattern:/\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,greedy:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:e.languages.scala}}},string:/[\s\S]+/}}}),delete e.languages.scala["class-name"],delete e.languages.scala.function,delete e.languages.scala.constant}za.displayName="javadoc";za.aliases=[];function za(e){e.register(je),e.register(Ye),e.register(re),(function(t){var n=/(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,r=/#\s*\w+(?:\s*\([^()]*\))?/.source,a=/(?:\b[a-zA-Z]\w+\s*\.\s*)*\b[A-Z]\w*(?:\s*<mem>)?|<mem>/.source.replace(/<mem>/g,function(){return r});t.languages.javadoc=t.languages.extend("javadoclike",{}),t.languages.insertBefore("javadoc","keyword",{reference:{pattern:RegExp(/(@(?:exception|link|linkplain|see|throws|value)\s+(?:\*\s*)?)/.source+"(?:"+a+")"),lookbehind:!0,inside:{function:{pattern:/(#\s*)\w+(?=\s*\()/,lookbehind:!0},field:{pattern:/(#\s*)\w+/,lookbehind:!0},namespace:{pattern:/\b(?:[a-z]\w*\s*\.\s*)+/,inside:{punctuation:/\./}},"class-name":/\b[A-Z]\w*/,keyword:t.languages.java.keyword,punctuation:/[#()[\],.]/}},"class-name":{pattern:/(@param\s+)<[A-Z]\w*>/,lookbehind:!0,inside:{punctuation:/[.<>]/}},"code-section":[{pattern:/(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,lookbehind:!0,inside:{code:{pattern:n,lookbehind:!0,inside:t.languages.java,alias:"language-java"}}},{pattern:/(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,lookbehind:!0,inside:{line:{pattern:n,lookbehind:!0,inside:{tag:t.languages.markup.tag,entity:t.languages.markup.entity,code:{pattern:/.+/,inside:t.languages.java,alias:"language-java"}}}}}],tag:t.languages.markup.tag,entity:t.languages.markup.entity}),t.languages.javadoclike.addSupport("java",t.languages.javadoc)})(e)}Wa.displayName="javastacktrace";Wa.aliases=[];function Wa(e){e.languages.javastacktrace={summary:{pattern:/^([\t ]*)(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m,lookbehind:!0,inside:{keyword:{pattern:/^([\t ]*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,lookbehind:!0},string:{pattern:/^(\s*)"[^"]*"/,lookbehind:!0},exceptions:{pattern:/^(:?\s*)[\w$.]+(?=:|$)/,lookbehind:!0,inside:{"class-name":/[\w$]+$/,namespace:/\b[a-z]\w*\b/,punctuation:/\./}},message:{pattern:/(:\s*)\S.*/,lookbehind:!0,alias:"string"},punctuation:/:/}},"stack-frame":{pattern:/^([\t ]*)at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,lookbehind:!0,inside:{keyword:{pattern:/^(\s*)at(?= )/,lookbehind:!0},source:[{pattern:/(\()\w+\.\w+:\d+(?=\))/,lookbehind:!0,inside:{file:/^\w+\.\w+/,punctuation:/:/,"line-number":{pattern:/\b\d+\b/,alias:"number"}}},{pattern:/(\()[^()]*(?=\))/,lookbehind:!0,inside:{keyword:/^(?:Native Method|Unknown Source)$/}}],"class-name":/[\w$]+(?=\.(?:<init>|[\w$]+)\()/,function:/(?:<init>|[\w$]+)(?=\()/,"class-loader":{pattern:/(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/,lookbehind:!0,alias:"namespace",inside:{punctuation:/\./}},module:{pattern:/([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/,lookbehind:!0,inside:{version:{pattern:/(@)[\s\S]+/,lookbehind:!0,alias:"number"},punctuation:/[@.]/}},namespace:{pattern:/(?:\b[a-z]\w*\.)+/,inside:{punctuation:/\./}},punctuation:/[()/.]/}},more:{pattern:/^([\t ]*)\.{3} \d+ [a-z]+(?: [a-z]+)*/m,lookbehind:!0,inside:{punctuation:/\.{3}/,number:/\d+/,keyword:/\b[a-z]+(?: [a-z]+)*\b/}}}}Va.displayName="jexl";Va.aliases=[];function Va(e){e.languages.jexl={string:/(["'])(?:\\[\s\S]|(?!\1)[^\\])*\1/,transform:{pattern:/(\|\s*)[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*/,alias:"function",lookbehind:!0},function:/[a-zA-Zа-яА-Я_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$][\wа-яА-Я\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF$]*\s*(?=\()/,number:/\b\d+(?:\.\d+)?\b|\B\.\d+\b/,operator:/[<>!]=?|-|\+|&&|==|\|\|?|\/\/?|[?:*^%]/,boolean:/\b(?:false|true)\b/,keyword:/\bin\b/,punctuation:/[{}[\](),.]/}}ja.displayName="jolie";ja.aliases=[];function ja(e){e.register(W),e.languages.jolie=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\[\s\S]|[^"\\])*"/,lookbehind:!0,greedy:!0},"class-name":{pattern:/((?:\b(?:as|courier|embed|in|inputPort|outputPort|service)\b|@)[ \t]*)\w+/,lookbehind:!0},keyword:/\b(?:as|cH|comp|concurrent|constants|courier|cset|csets|default|define|else|embed|embedded|execution|exit|extender|for|foreach|forward|from|global|if|import|in|include|init|inputPort|install|instanceof|interface|is_defined|linkIn|linkOut|main|new|nullProcess|outputPort|over|private|provide|public|scope|sequential|service|single|spawn|synchronized|this|throw|throws|type|undef|until|while|with)\b/,function:/\b[a-z_]\w*(?=[ \t]*[@(])/i,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?l?/i,operator:/-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[?\/%^@|]/,punctuation:/[()[\]{},;.:]/,builtin:/\b(?:Byte|any|bool|char|double|enum|float|int|length|long|ranges|regex|string|undefined|void)\b/}),e.languages.insertBefore("jolie","keyword",{aggregates:{pattern:/(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,lookbehind:!0,inside:{keyword:/\bwith\b/,"class-name":/\w+/,punctuation:/,/}},redirects:{pattern:/(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,lookbehind:!0,inside:{punctuation:/,/,"class-name":/\w+/,operator:/=>/}},property:{pattern:/\b(?:Aggregates|[Ii]nterfaces|Java|Javascript|Jolie|[Ll]ocation|OneWay|[Pp]rotocol|Redirects|RequestResponse)\b(?=[ \t]*:)/}})}qa.displayName="jq";qa.aliases=[];function qa(e){(function(t){var n=/\\\((?:[^()]|\([^()]*\))*\)/.source,r=RegExp(/(^|[^\\])"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g,function(){return n})),a={interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+n),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},i=t.languages.jq={comment:/#.*/,property:{pattern:RegExp(r.source+/(?=\s*:(?!:))/.source),lookbehind:!0,greedy:!0,inside:a},string:{pattern:r,lookbehind:!0,greedy:!0,inside:a},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/\b[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}};a.interpolation.inside.content.inside=i})(e)}Ya.displayName="js-templates";Ya.aliases=[];function Ya(e){e.register(ie),(function(t){var n=t.languages.javascript["template-string"],r=n.pattern.source,a=n.inside.interpolation,i=a.inside["interpolation-punctuation"],o=a.pattern.source;function s(h,E){if(t.languages[h])return{pattern:RegExp("((?:"+E+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:h}}}}t.languages.javascript["template-string"]=[s("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),s("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),s("svg",/\bsvg/.source),s("markdown",/\b(?:markdown|md)/.source),s("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),s("sql",/\bsql/.source),n].filter(Boolean);function u(h,E){return"___"+E.toUpperCase()+"_"+h+"___"}function l(h,E,S){var y={code:h,grammar:E,language:S};return t.hooks.run("before-tokenize",y),y.tokens=t.tokenize(y.code,y.grammar),t.hooks.run("after-tokenize",y),y.tokens}function c(h){var E={};E["interpolation-punctuation"]=i;var S=t.tokenize(h,E);if(S.length===3){var y=[1,1];y.push.apply(y,l(S[1],t.languages.javascript,"javascript")),S.splice.apply(S,y)}return new t.Token("interpolation",S,a.alias,h)}function d(h,E,S){var y=t.tokenize(h,{interpolation:{pattern:RegExp(o),lookbehind:!0}}),I=0,T={},k=y.map(function(P){if(typeof P=="string")return P;for(var B=P.content,F;h.indexOf(F=u(I++,S))!==-1;);return T[F]=B,F}).join(""),O=l(k,E,S),A=Object.keys(T);I=0;function M(P){for(var B=0;B<P.length;B++){if(I>=A.length)return;var F=P[B];if(typeof F=="string"||typeof F.content=="string"){var C=A[I],_=typeof F=="string"?F:F.content,D=_.indexOf(C);if(D!==-1){++I;var L=_.substring(0,D),R=c(T[C]),$=_.substring(D+C.length),z=[];if(L&&z.push(L),z.push(R),$){var Z=[$];M(Z),z.push.apply(z,Z)}typeof F=="string"?(P.splice.apply(P,[B,1].concat(z)),B+=z.length-1):F.content=z}}else{var Q=F.content;Array.isArray(Q)?M(Q):M([Q])}}}return M(O),new t.Token(S,O,"language-"+S,h)}var m={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};t.hooks.add("after-tokenize",function(h){if(!(h.language in m))return;function E(S){for(var y=0,I=S.length;y<I;y++){var T=S[y];if(typeof T!="string"){var k=T.content;if(!Array.isArray(k)){typeof k!="string"&&E([k]);continue}if(T.type==="template-string"){var O=k[1];if(k.length===3&&typeof O!="string"&&O.type==="embedded-code"){var A=p(O),M=O.alias,P=Array.isArray(M)?M[0]:M,B=t.languages[P];if(!B)continue;k[1]=d(A,B,P)}}else E(k)}}}E(h.tokens)});function p(h){return typeof h=="string"?h:Array.isArray(h)?h.map(p).join(""):p(h.content)}})(e)}mt.displayName="typescript";mt.aliases=["ts"];function mt(e){e.register(ie),(function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var n=t.languages.extend("typescript",{});delete n["class-name"],t.languages.typescript["class-name"].inside=n,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),t.languages.ts=t.languages.typescript})(e)}Ka.displayName="jsdoc";Ka.aliases=[];function Ka(e){e.register(Ye),e.register(ie),e.register(mt),(function(t){var n=t.languages.javascript,r=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,a="(@(?:arg|argument|param|property)\\s+(?:"+r+"\\s+)?)";t.languages.jsdoc=t.languages.extend("javadoclike",{parameter:{pattern:RegExp(a+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),t.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(a+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:n,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return r})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+r),lookbehind:!0,inside:{string:n.string,number:n.number,boolean:n.boolean,keyword:t.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:n,alias:"language-javascript"}}}}),t.languages.javadoclike.addSupport("javascript",t.languages.jsdoc)})(e)}Xa.displayName="n4js";Xa.aliases=["n4jsd"];function Xa(e){e.register(ie),e.languages.n4js=e.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),e.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),e.languages.n4jsd=e.languages.n4js}Za.displayName="js-extras";Za.aliases=[];function Za(e){e.register(ie),(function(t){t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function n(u,l){return RegExp(u.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),l)}t.languages.insertBefore("javascript","keyword",{imports:{pattern:n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:n(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],a=0;a<r.length;a++){var i=r[a],o=t.languages.javascript[i];t.util.type(o)==="RegExp"&&(o=t.languages.javascript[i]={pattern:o});var s=o.inside||{};o.inside=s,s["maybe-class-name"]=/^[A-Z][\s\S]*/}})(e)}Qa.displayName="json5";Qa.aliases=[];function Qa(e){e.register(gt),(function(t){var n=/("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;t.languages.json5=t.languages.extend("json",{property:[{pattern:RegExp(n.source+"(?=\\s*:)"),greedy:!0},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,alias:"unquoted"}],string:{pattern:n,greedy:!0},number:/[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/})})(e)}Ja.displayName="jsonp";Ja.aliases=[];function Ja(e){e.register(gt),e.languages.jsonp=e.languages.extend("json",{punctuation:/[{}[\]();,.]/}),e.languages.insertBefore("jsonp","punctuation",{function:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/})}ei.displayName="jsstacktrace";ei.aliases=[];function ei(e){e.languages.jsstacktrace={"error-message":{pattern:/^\S.*/m,alias:"string"},"stack-frame":{pattern:/(^[ \t]+)at[ \t].*/m,lookbehind:!0,inside:{"not-my-code":{pattern:/^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,alias:"comment"},filename:{pattern:/(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,lookbehind:!0,alias:"url"},function:{pattern:/(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,lookbehind:!0,inside:{punctuation:/\./}},punctuation:/[()]/,keyword:/\b(?:at|new)\b/,alias:{pattern:/\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,alias:"variable"},"line-number":{pattern:/:\d+(?::\d+)?\b/,alias:"number",inside:{punctuation:/:/}}}}}}ti.displayName="julia";ti.aliases=[];function ti(e){e.languages.julia={comment:{pattern:/(^|[^\\])(?:#=(?:[^#=]|=(?!#)|#(?!=)|#=(?:[^#=]|=(?!#)|#(?!=))*=#)*=#|#.*)/,lookbehind:!0},regex:{pattern:/r"(?:\\.|[^"\\\r\n])*"[imsx]{0,4}/,greedy:!0},string:{pattern:/"""[\s\S]+?"""|(?:\b\w+)?"(?:\\.|[^"\\\r\n])*"|`(?:[^\\`\r\n]|\\.)*`/,greedy:!0},char:{pattern:/(^|[^\w'])'(?:\\[^\r\n][^'\r\n]*|[^\\\r\n])'/,lookbehind:!0,greedy:!0},keyword:/\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+(?:_[\da-f]+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[efp][+-]?\d+(?:_\d+)*)?j?/i,operator:/&&|\|\||[-+*^%÷⊻&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:|])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥'√∛]/,punctuation:/::?|[{}[\]();,.?]/,constant:/\b(?:(?:Inf|NaN)(?:16|32|64)?|im|pi)\b|[πℯ]/}}ni.displayName="keepalived";ni.aliases=[];function ni(e){e.languages.keepalived={comment:{pattern:/[#!].*/,greedy:!0},string:{pattern:/(^|[^\\])(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,lookbehind:!0,greedy:!0},ip:{pattern:RegExp(/\b(?:(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){5}:(?:[\da-f]{1,4}:)?[\da-f]{1,4}|(?:[\da-f]{1,4}:){4}:(?:[\da-f]{1,4}:){0,2}[\da-f]{1,4}|(?:[\da-f]{1,4}:){3}:(?:[\da-f]{1,4}:){0,3}[\da-f]{1,4}|(?:[\da-f]{1,4}:){2}:(?:[\da-f]{1,4}:){0,4}[\da-f]{1,4}|(?:[\da-f]{1,4}:){6}<ipv4>|(?:[\da-f]{1,4}:){0,5}:<ipv4>|::(?:[\da-f]{1,4}:){0,5}<ipv4>|[\da-f]{1,4}::(?:[\da-f]{1,4}:){0,5}[\da-f]{1,4}|::(?:[\da-f]{1,4}:){0,6}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:)(?:\/\d{1,3})?|<ipv4>(?:\/\d{1,2})?)\b/.source.replace(/<ipv4>/g,function(){return/(?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d))/.source}),"i"),alias:"number"},path:{pattern:/(\s)\/(?:[^\/\s]+\/)*[^\/\s]*|\b[a-zA-Z]:\\(?:[^\\\s]+\\)*[^\\\s]*/,lookbehind:!0,alias:"string"},variable:/\$\{?\w+\}?/,email:{pattern:/[\w-]+@[\w-]+(?:\.[\w-]{2,3}){1,2}/,alias:"string"},"conditional-configuration":{pattern:/@\^?[\w-]+/,alias:"variable"},operator:/=/,property:/\b(?:BFD_CHECK|DNS_CHECK|FILE_CHECK|HTTP_GET|MISC_CHECK|NAME|PING_CHECK|SCRIPTS|SMTP_CHECK|SSL|SSL_GET|TCP_CHECK|UDP_CHECK|accept|advert_int|alpha|auth_pass|auth_type|authentication|bfd_cpu_affinity|bfd_instance|bfd_no_swap|bfd_priority|bfd_process_name|bfd_rlimit_rttime|bfd_rt_priority|bind_if|bind_port|bindto|ca|certificate|check_unicast_src|checker|checker_cpu_affinity|checker_log_all_failures|checker_no_swap|checker_priority|checker_rlimit_rttime|checker_rt_priority|child_wait_time|connect_ip|connect_port|connect_timeout|dbus_service_name|debug|default_interface|delay|delay_before_retry|delay_loop|digest|dont_track_primary|dynamic|dynamic_interfaces|enable_(?:dbus|script_security|sni|snmp_checker|snmp_rfc|snmp_rfcv2|snmp_rfcv3|snmp_vrrp|traps)|end|fall|fast_recovery|file|flag-[123]|fork_delay|full_command|fwmark|garp_group|garp_interval|garp_lower_prio_delay|garp_lower_prio_repeat|garp_master_delay|garp_master_refresh|garp_master_refresh_repeat|garp_master_repeat|global_defs|global_tracking|gna_interval|group|ha_suspend|hashed|helo_name|higher_prio_send_advert|hoplimit|http_protocol|hysteresis|idle_tx|include|inhibit_on_failure|init_fail|init_file|instance|interface|interfaces|interval|ip_family|ipvs_process_name|keepalived.conf|kernel_rx_buf_size|key|linkbeat_interfaces|linkbeat_use_polling|log_all_failures|log_unknown_vrids|lower_prio_no_advert|lthreshold|lvs_flush|lvs_flush_onstop|lvs_method|lvs_netlink_cmd_rcv_bufs|lvs_netlink_cmd_rcv_bufs_force|lvs_netlink_monitor_rcv_bufs|lvs_netlink_monitor_rcv_bufs_force|lvs_notify_fifo|lvs_notify_fifo_script|lvs_sched|lvs_sync_daemon|max_auto_priority|max_hops|mcast_src_ip|mh-fallback|mh-port|min_auto_priority_delay|min_rx|min_tx|misc_dynamic|misc_path|misc_timeout|multiplier|name|namespace_with_ipsets|native_ipv6|neighbor_ip|net_namespace|net_namespace_ipvs|nftables|nftables_counters|nftables_ifindex|nftables_priority|no_accept|no_checker_emails|no_email_faults|nopreempt|notification_email|notification_email_from|notify|notify_backup|notify_deleted|notify_down|notify_fault|notify_fifo|notify_fifo_script|notify_master|notify_master_rx_lower_pri|notify_priority_changes|notify_stop|notify_up|old_unicast_checksum|omega|ops|param_match|passive|password|path|persistence_engine|persistence_granularity|persistence_timeout|preempt|preempt_delay|priority|process|process_monitor_rcv_bufs|process_monitor_rcv_bufs_force|process_name|process_names|promote_secondaries|protocol|proxy_arp|proxy_arp_pvlan|quorum|quorum_down|quorum_max|quorum_up|random_seed|real_server|regex|regex_max_offset|regex_min_offset|regex_no_match|regex_options|regex_stack|reload_repeat|reload_time_file|require_reply|retry|rise|router_id|rs_init_notifies|script|script_user|sh-fallback|sh-port|shutdown_script|shutdown_script_timeout|skip_check_adv_addr|smtp_alert|smtp_alert_checker|smtp_alert_vrrp|smtp_connect_timeout|smtp_helo_name|smtp_server|snmp_socket|sorry_server|sorry_server_inhibit|sorry_server_lvs_method|source_ip|start|startup_script|startup_script_timeout|state|static_ipaddress|static_routes|static_rules|status_code|step|strict_mode|sync_group_tracking_weight|terminate_delay|timeout|track_bfd|track_file|track_group|track_interface|track_process|track_script|track_src_ip|ttl|type|umask|unicast_peer|unicast_src_ip|unicast_ttl|url|use_ipvlan|use_pid_dir|use_vmac|user|uthreshold|val[123]|version|virtual_ipaddress|virtual_ipaddress_excluded|virtual_router_id|virtual_routes|virtual_rules|virtual_server|virtual_server_group|virtualhost|vmac_xmit_base|vrrp|vrrp_(?:check_unicast_src|cpu_affinity|garp_interval|garp_lower_prio_delay|garp_lower_prio_repeat|garp_master_delay|garp_master_refresh|garp_master_refresh_repeat|garp_master_repeat|gna_interval|higher_prio_send_advert|instance|ipsets|iptables|lower_prio_no_advert|mcast_group4|mcast_group6|min_garp|netlink_cmd_rcv_bufs|netlink_cmd_rcv_bufs_force|netlink_monitor_rcv_bufs|netlink_monitor_rcv_bufs_force|no_swap|notify_fifo|notify_fifo_script|notify_priority_changes|priority|process_name|rlimit_rttime|rt_priority|rx_bufs_multiplier|rx_bufs_policy|script|skip_check_adv_addr|startup_delay|strict|sync_group|track_process|version)|warmup|weight)\b/,constant:/\b(?:A|AAAA|AH|BACKUP|CNAME|DR|MASTER|MX|NAT|NS|PASS|SCTP|SOA|TCP|TUN|TXT|UDP|dh|fo|lblc|lblcr|lc|mh|nq|ovf|rr|sed|sh|wlc|wrr)\b/,number:{pattern:/(^|[^\w.-])-?\d+(?:\.\d+)?/,lookbehind:!0},boolean:/\b(?:false|no|off|on|true|yes)\b/,punctuation:/[\{\}]/}}ri.displayName="keyman";ri.aliases=[];function ri(e){e.languages.keyman={comment:{pattern:/\bc .*/i,greedy:!0},string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,greedy:!0},"virtual-key":{pattern:/\[\s*(?:(?:ALT|CAPS|CTRL|LALT|LCTRL|NCAPS|RALT|RCTRL|SHIFT)\s+)*(?:[TKU]_[\w?]+|[A-E]\d\d?|"[^"\r\n]*"|'[^'\r\n]*')\s*\]/i,greedy:!0,alias:"function"},"header-keyword":{pattern:/&\w+/,alias:"bold"},"header-statement":{pattern:/\b(?:bitmap|bitmaps|caps always off|caps on only|copyright|hotkey|language|layout|message|name|shift frees caps|version)\b/i,alias:"bold"},"rule-keyword":{pattern:/\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|reset|return|save|set|store|use)\b/i,alias:"keyword"},"structural-keyword":{pattern:/\b(?:ansi|begin|group|match|newcontext|nomatch|postkeystroke|readonly|unicode|using keys)\b/i,alias:"keyword"},"compile-target":{pattern:/\$(?:keyman|keymanonly|keymanweb|kmfl|weaver):/i,alias:"property"},number:/\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,operator:/[+>\\$]|\.\./,punctuation:/[()=,]/}}ai.displayName="kotlin";ai.aliases=["kt","kts"];function ai(e){e.register(W),(function(t){t.languages.kotlin=t.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete t.languages.kotlin["class-name"];var n={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:t.languages.kotlin}};t.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:n},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:n},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete t.languages.kotlin.string,t.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),t.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),t.languages.kt=t.languages.kotlin,t.languages.kts=t.languages.kotlin})(e)}ii.displayName="kumir";ii.aliases=["kum"];function ii(e){(function(t){var n=/\s\x00-\x1f\x22-\x2f\x3a-\x3f\x5b-\x5e\x60\x7b-\x7e/.source;function r(a,i){return RegExp(a.replace(/<nonId>/g,n),i)}t.languages.kumir={comment:{pattern:/\|.*/},prolog:{pattern:/#.*/,greedy:!0},string:{pattern:/"[^\n\r"]*"|'[^\n\r']*'/,greedy:!0},boolean:{pattern:r(/(^|[<nonId>])(?:да|нет)(?=[<nonId>]|$)/.source),lookbehind:!0},"operator-word":{pattern:r(/(^|[<nonId>])(?:и|или|не)(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"keyword"},"system-variable":{pattern:r(/(^|[<nonId>])знач(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"keyword"},type:[{pattern:r(/(^|[<nonId>])(?:вещ|лит|лог|сим|цел)(?:\x20*таб)?(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"builtin"},{pattern:r(/(^|[<nonId>])(?:компл|сканкод|файл|цвет)(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"important"}],keyword:{pattern:r(/(^|[<nonId>])(?:алг|арг(?:\x20*рез)?|ввод|ВКЛЮЧИТЬ|вс[её]|выбор|вывод|выход|дано|для|до|дс|если|иначе|исп|использовать|кон(?:(?:\x20+|_)исп)?|кц(?:(?:\x20+|_)при)?|надо|нач|нс|нц|от|пауза|пока|при|раза?|рез|стоп|таб|то|утв|шаг)(?=[<nonId>]|$)/.source),lookbehind:!0},name:{pattern:r(/(^|[<nonId>])[^\d<nonId>][^<nonId>]*(?:\x20+[^<nonId>]+)*(?=[<nonId>]|$)/.source),lookbehind:!0},number:{pattern:r(/(^|[<nonId>])(?:\B\$[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?=[<nonId>]|$)/.source,"i"),lookbehind:!0},punctuation:/:=|[(),:;\[\]]/,"operator-char":{pattern:/\*\*?|<[=>]?|>=?|[-+/=]/,alias:"operator"}},t.languages.kum=t.languages.kumir})(e)}oi.displayName="kusto";oi.aliases=[];function oi(e){e.languages.kusto={comment:{pattern:/\/\/.*/,greedy:!0},string:{pattern:/```[\s\S]*?```|[hH]?(?:"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\.)*'|@(?:"[^\r\n"]*"|'[^\r\n']*'))/,greedy:!0},verb:{pattern:/(\|\s*)[a-z][\w-]*/i,lookbehind:!0,alias:"keyword"},command:{pattern:/\.[a-z][a-z\d-]*\b/,alias:"keyword"},"class-name":/\b(?:bool|datetime|decimal|dynamic|guid|int|long|real|string|timespan)\b/,keyword:/\b(?:access|alias|and|anti|as|asc|auto|between|by|(?:contains|(?:ends|starts)with|has(?:perfix|suffix)?)(?:_cs)?|database|declare|desc|external|from|fullouter|has_all|in|ingestion|inline|inner|innerunique|into|(?:left|right)(?:anti(?:semi)?|inner|outer|semi)?|let|like|local|not|of|on|or|pattern|print|query_parameters|range|restrict|schema|set|step|table|tables|to|view|where|with|matches\s+regex|nulls\s+(?:first|last))(?![\w-])/,boolean:/\b(?:false|null|true)\b/,function:/\b[a-z_]\w*(?=\s*\()/,datetime:[{pattern:/\b(?:(?:Fri|Friday|Mon|Monday|Sat|Saturday|Sun|Sunday|Thu|Thursday|Tue|Tuesday|Wed|Wednesday)\s*,\s*)?\d{1,2}(?:\s+|-)(?:Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)(?:\s+|-)\d{2}\s+\d{2}:\d{2}(?::\d{2})?(?:\s*(?:\b(?:[A-Z]|(?:[ECMT][DS]|GM|U)T)|[+-]\d{4}))?\b/,alias:"number"},{pattern:/[+-]?\b(?:\d{4}-\d{2}-\d{2}(?:[ T]\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)?|\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)Z?/,alias:"number"}],number:/\b(?:0x[0-9A-Fa-f]+|\d+(?:\.\d+)?(?:[Ee][+-]?\d+)?)(?:(?:min|sec|[mnµ]s|[dhms]|microsecond|tick)\b)?|[+-]?\binf\b/,operator:/=>|[!=]~|[!=<>]=?|[-+*/%|]|\.\./,punctuation:/[()\[\]{},;.:]/}}si.displayName="latex";si.aliases=["context","tex"];function si(e){(function(t){var n=/\\(?:[^a-z()[\]]|[a-z*]+)/i,r={"equation-command":{pattern:n,alias:"regex"}};t.languages.latex={comment:/%.*/,cdata:{pattern:/(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,inside:r,alias:"string"},{pattern:/(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0,inside:r,alias:"string"}],keyword:{pattern:/(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0,alias:"class-name"},function:{pattern:n,alias:"selector"},punctuation:/[[\]{}&]/},t.languages.tex=t.languages.latex,t.languages.context=t.languages.latex})(e)}li.displayName="latte";li.aliases=[];function li(e){e.register(W),e.register(oe),e.register(qe),(function(t){t.languages.latte={comment:/^\{\*[\s\S]*/,"latte-tag":{pattern:/(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,lookbehind:!0,alias:"important"},delimiter:{pattern:/^\{\/?|\}$/,alias:"punctuation"},php:{pattern:/\S(?:[\s\S]*\S)?/,alias:"language-php",inside:t.languages.php}};var n=t.languages.extend("markup",{});t.languages.insertBefore("inside","attr-value",{"n-attr":{pattern:/n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,inside:{"attr-name":{pattern:/^[^\s=]+/,alias:"important"},"attr-value":{pattern:/=[\s\S]+/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],php:{pattern:/\S(?:[\s\S]*\S)?/,inside:t.languages.php}}}}}},n.tag),t.hooks.add("before-tokenize",function(r){if(r.language==="latte"){var a=/\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g;t.languages["markup-templating"].buildPlaceholders(r,"latte",a),r.grammar=n}}),t.hooks.add("after-tokenize",function(r){t.languages["markup-templating"].tokenizePlaceholders(r,"latte")})})(e)}ft.displayName="scheme";ft.aliases=[];function ft(e){(function(t){t.languages.scheme={comment:/;.*|#;\s*(?:\((?:[^()]|\([^()]*\))*\)|\[(?:[^\[\]]|\[[^\[\]]*\])*\])|#\|(?:[^#|]|#(?!\|)|\|(?!#)|#\|(?:[^#|]|#(?!\|)|\|(?!#))*\|#)*\|#/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},symbol:{pattern:/'[^()\[\]#'\s]+/,greedy:!0},char:{pattern:/#\\(?:[ux][a-fA-F\d]+\b|[-a-zA-Z]+\b|[\uD800-\uDBFF][\uDC00-\uDFFF]|\S)/,greedy:!0},"lambda-parameter":[{pattern:/((?:^|[^'`#])[(\[]lambda\s+)(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)/,lookbehind:!0},{pattern:/((?:^|[^'`#])[(\[]lambda\s+[(\[])[^()\[\]']+/,lookbehind:!0}],keyword:{pattern:/((?:^|[^'`#])[(\[])(?:begin|case(?:-lambda)?|cond(?:-expand)?|define(?:-library|-macro|-record-type|-syntax|-values)?|defmacro|delay(?:-force)?|do|else|except|export|guard|if|import|include(?:-ci|-library-declarations)?|lambda|let(?:rec)?(?:-syntax|-values|\*)?|let\*-values|only|parameterize|prefix|(?:quasi-?)?quote|rename|set!|syntax-(?:case|rules)|unless|unquote(?:-splicing)?|when)(?=[()\[\]\s]|$)/,lookbehind:!0},builtin:{pattern:/((?:^|[^'`#])[(\[])(?:abs|and|append|apply|assoc|ass[qv]|binary-port\?|boolean=?\?|bytevector(?:-append|-copy|-copy!|-length|-u8-ref|-u8-set!|\?)?|caar|cadr|call-with-(?:current-continuation|port|values)|call\/cc|car|cdar|cddr|cdr|ceiling|char(?:->integer|-ready\?|\?|<\?|<=\?|=\?|>\?|>=\?)|close-(?:input-port|output-port|port)|complex\?|cons|current-(?:error|input|output)-port|denominator|dynamic-wind|eof-object\??|eq\?|equal\?|eqv\?|error|error-object(?:-irritants|-message|\?)|eval|even\?|exact(?:-integer-sqrt|-integer\?|\?)?|expt|features|file-error\?|floor(?:-quotient|-remainder|\/)?|flush-output-port|for-each|gcd|get-output-(?:bytevector|string)|inexact\??|input-port(?:-open\?|\?)|integer(?:->char|\?)|lcm|length|list(?:->string|->vector|-copy|-ref|-set!|-tail|\?)?|make-(?:bytevector|list|parameter|string|vector)|map|max|member|memq|memv|min|modulo|negative\?|newline|not|null\?|number(?:->string|\?)|numerator|odd\?|open-(?:input|output)-(?:bytevector|string)|or|output-port(?:-open\?|\?)|pair\?|peek-char|peek-u8|port\?|positive\?|procedure\?|quotient|raise|raise-continuable|rational\?|rationalize|read-(?:bytevector|bytevector!|char|error\?|line|string|u8)|real\?|remainder|reverse|round|set-c[ad]r!|square|string(?:->list|->number|->symbol|->utf8|->vector|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?|<\?|<=\?|=\?|>\?|>=\?)?|substring|symbol(?:->string|\?|=\?)|syntax-error|textual-port\?|truncate(?:-quotient|-remainder|\/)?|u8-ready\?|utf8->string|values|vector(?:->list|->string|-append|-copy|-copy!|-fill!|-for-each|-length|-map|-ref|-set!|\?)?|with-exception-handler|write-(?:bytevector|char|string|u8)|zero\?)(?=[()\[\]\s]|$)/,lookbehind:!0},operator:{pattern:/((?:^|[^'`#])[(\[])(?:[-+*%/]|[<>]=?|=>?)(?=[()\[\]\s]|$)/,lookbehind:!0},number:{pattern:RegExp(n({"<ureal dec>":/\d+(?:\/\d+)|(?:\d+(?:\.\d*)?|\.\d+)(?:[esfdl][+-]?\d+)?/.source,"<real dec>":/[+-]?<ureal dec>|[+-](?:inf|nan)\.0/.source,"<imaginary dec>":/[+-](?:<ureal dec>|(?:inf|nan)\.0)?i/.source,"<complex dec>":/<real dec>(?:@<real dec>|<imaginary dec>)?|<imaginary dec>/.source,"<num dec>":/(?:#d(?:#[ei])?|#[ei](?:#d)?)?<complex dec>/.source,"<ureal box>":/[0-9a-f]+(?:\/[0-9a-f]+)?/.source,"<real box>":/[+-]?<ureal box>|[+-](?:inf|nan)\.0/.source,"<imaginary box>":/[+-](?:<ureal box>|(?:inf|nan)\.0)?i/.source,"<complex box>":/<real box>(?:@<real box>|<imaginary box>)?|<imaginary box>/.source,"<num box>":/#[box](?:#[ei])?|(?:#[ei])?#[box]<complex box>/.source,"<number>":/(^|[()\[\]\s])(?:<num dec>|<num box>)(?=[()\[\]\s]|$)/.source}),"i"),lookbehind:!0},boolean:{pattern:/(^|[()\[\]\s])#(?:[ft]|false|true)(?=[()\[\]\s]|$)/,lookbehind:!0},function:{pattern:/((?:^|[^'`#])[(\[])(?:[^|()\[\]'\s]+|\|(?:[^\\|]|\\.)*\|)(?=[()\[\]\s]|$)/,lookbehind:!0},identifier:{pattern:/(^|[()\[\]\s])\|(?:[^\\|]|\\.)*\|(?=[()\[\]\s]|$)/,lookbehind:!0,greedy:!0},punctuation:/[()\[\]']/};function n(r){for(var a in r)r[a]=r[a].replace(/<[\w\s]+>/g,function(i){return"(?:"+r[i].trim()+")"});return r[a]}})(e)}ui.displayName="lilypond";ui.aliases=["ly"];function ui(e){e.register(ft),(function(t){for(var n=/\((?:[^();"#\\]|\\[\s\S]|;.*(?!.)|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/.source,r=5,a=0;a<r;a++)n=n.replace(/<expr>/g,function(){return n});n=n.replace(/<expr>/g,/[^\s\S]/.source);var i=t.languages.lilypond={comment:/%(?:(?!\{).*|\{[\s\S]*?%\})/,"embedded-scheme":{pattern:RegExp(/(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(/<expr>/g,function(){return n}),"m"),lookbehind:!0,greedy:!0,inside:{scheme:{pattern:/^(#)[\s\S]+$/,lookbehind:!0,alias:"language-scheme",inside:{"embedded-lilypond":{pattern:/#\{[\s\S]*?#\}/,greedy:!0,inside:{punctuation:/^#\{|#\}$/,lilypond:{pattern:/[\s\S]+/,alias:"language-lilypond",inside:null}}},rest:t.languages.scheme}},punctuation:/#/}},string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},"class-name":{pattern:/(\\new\s+)[\w-]+/,lookbehind:!0},keyword:{pattern:/\\[a-z][-\w]*/i,inside:{punctuation:/^\\/}},operator:/[=|]|<<|>>/,punctuation:{pattern:/(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,lookbehind:!0},number:/\b\d+(?:\/\d+)?\b/};i["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside=i,t.languages.ly=i})(e)}ci.displayName="liquid";ci.aliases=[];function ci(e){e.register(oe),e.languages.liquid={comment:{pattern:/(^\{%\s*comment\s*%\})[\s\S]+(?=\{%\s*endcomment\s*%\}$)/,lookbehind:!0},delimiter:{pattern:/^\{(?:\{\{|[%\{])-?|-?(?:\}\}|[%\}])\}$/,alias:"punctuation"},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},keyword:/\b(?:as|assign|break|(?:end)?(?:capture|case|comment|for|form|if|paginate|raw|style|tablerow|unless)|continue|cycle|decrement|echo|else|elsif|in|include|increment|limit|liquid|offset|range|render|reversed|section|when|with)\b/,object:/\b(?:address|all_country_option_tags|article|block|blog|cart|checkout|collection|color|country|country_option_tags|currency|current_page|current_tags|customer|customer_address|date|discount_allocation|discount_application|external_video|filter|filter_value|font|forloop|fulfillment|generic_file|gift_card|group|handle|image|line_item|link|linklist|localization|location|measurement|media|metafield|model|model_source|order|page|page_description|page_image|page_title|part|policy|product|product_option|recommendations|request|robots|routes|rule|script|search|selling_plan|selling_plan_allocation|selling_plan_group|shipping_method|shop|shop_locale|sitemap|store_availability|tax_line|template|theme|transaction|unit_price_measurement|user_agent|variant|video|video_source)\b/,function:[{pattern:/(\|\s*)\w+/,lookbehind:!0,alias:"filter"},{pattern:/(\.\s*)(?:first|last|size)/,lookbehind:!0}],boolean:/\b(?:false|nil|true)\b/,range:{pattern:/\.\./,alias:"operator"},number:/\b\d+(?:\.\d+)?\b/,operator:/[!=]=|<>|[<>]=?|[|?:=-]|\b(?:and|contains(?=\s)|or)\b/,punctuation:/[.,\[\]()]/,empty:{pattern:/\bempty\b/,alias:"keyword"}},e.hooks.add("before-tokenize",function(t){var n=/\{%\s*comment\s*%\}[\s\S]*?\{%\s*endcomment\s*%\}|\{(?:%[\s\S]*?%|\{\{[\s\S]*?\}\}|\{[\s\S]*?\})\}/g,r=!1;e.languages["markup-templating"].buildPlaceholders(t,"liquid",n,function(a){var i=/^\{%-?\s*(\w+)/.exec(a);if(i){var o=i[1];if(o==="raw"&&!r)return r=!0,!0;if(o==="endraw")return r=!1,!0}return!r})}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"liquid")})}di.displayName="lisp";di.aliases=["elisp","emacs","emacs-lisp"];function di(e){(function(t){function n(h){return RegExp(/(\()/.source+"(?:"+h+")"+/(?=[\s\)])/.source)}function r(h){return RegExp(/([\s([])/.source+"(?:"+h+")"+/(?=[\s)])/.source)}var a=/(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,i="&"+a,o="(\\()",s="(?=\\))",u="(?=\\s)",l=/(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,c={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+a+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+a),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+a),alias:"property"},splice:{pattern:RegExp(",@?"+a),alias:["symbol","variable"]},keyword:[{pattern:RegExp(o+"(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)"+u),lookbehind:!0},{pattern:RegExp(o+"(?:append|by|collect|concat|do|finally|for|in|return)"+u),lookbehind:!0}],declare:{pattern:n(/declare/.source),lookbehind:!0,alias:"keyword"},interactive:{pattern:n(/interactive/.source),lookbehind:!0,alias:"keyword"},boolean:{pattern:r(/nil|t/.source),lookbehind:!0},number:{pattern:r(/[-+]?\d+(?:\.\d*)?/.source),lookbehind:!0},defvar:{pattern:RegExp(o+"def(?:const|custom|group|var)\\s+"+a),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(a)}},defun:{pattern:RegExp(o+/(?:cl-)?(?:defmacro|defun\*?)\s+/.source+a+/\s+\(/.source+l+/\)/.source),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+a),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(o+"lambda\\s+\\(\\s*(?:&?"+a+"(?:\\s+&?"+a+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(o+a),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},d={"lisp-marker":RegExp(i),varform:{pattern:RegExp(/\(/.source+a+/\s+(?=\S)/.source+l+/\)/.source),inside:c},argument:{pattern:RegExp(/(^|[\s(])/.source+a),lookbehind:!0,alias:"variable"},rest:c},m="\\S+(?:\\s+\\S+)*",p={pattern:RegExp(o+l+s),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+m),inside:d},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+m),inside:d},keys:{pattern:RegExp("&key\\s+"+m+"(?:\\s+&allow-other-keys)?"),inside:d},argument:{pattern:RegExp(a),alias:"variable"},punctuation:/[()]/}};c.lambda.inside.arguments=p,c.defun.inside.arguments=t.util.clone(p),c.defun.inside.arguments.inside.sublist=p,t.languages.lisp=c,t.languages.elisp=c,t.languages.emacs=c,t.languages["emacs-lisp"]=c})(e)}pi.displayName="livescript";pi.aliases=[];function pi(e){e.languages.livescript={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\])#.*/,lookbehind:!0}],"interpolated-string":{pattern:/(^|[^"])("""|")(?:\\[\s\S]|(?!\2)[^\\])*\2(?!")/,lookbehind:!0,greedy:!0,inside:{variable:{pattern:/(^|[^\\])#[a-z_](?:-?[a-z]|[\d_])*/m,lookbehind:!0},interpolation:{pattern:/(^|[^\\])#\{[^}]+\}/m,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^#\{|\}$/,alias:"variable"}}},string:/[\s\S]+/}},string:[{pattern:/('''|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},{pattern:/<\[[\s\S]*?\]>/,greedy:!0},/\\[^\s,;\])}]+/],regex:[{pattern:/\/\/(?:\[[^\r\n\]]*\]|\\.|(?!\/\/)[^\\\[])+\/\/[gimyu]{0,5}/,greedy:!0,inside:{comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0}}},{pattern:/\/(?:\[[^\r\n\]]*\]|\\.|[^/\\\r\n\[])+\/[gimyu]{0,5}/,greedy:!0}],keyword:{pattern:/(^|(?!-).)\b(?:break|case|catch|class|const|continue|default|do|else|extends|fallthrough|finally|for(?: ever)?|function|if|implements|it|let|loop|new|null|otherwise|own|return|super|switch|that|then|this|throw|try|unless|until|var|void|when|while|yield)(?!-)\b/m,lookbehind:!0},"keyword-operator":{pattern:/(^|[^-])\b(?:(?:delete|require|typeof)!|(?:and|by|delete|export|from|import(?: all)?|in|instanceof|is(?: not|nt)?|not|of|or|til|to|typeof|with|xor)(?!-)\b)/m,lookbehind:!0,alias:"operator"},boolean:{pattern:/(^|[^-])\b(?:false|no|off|on|true|yes)(?!-)\b/m,lookbehind:!0},argument:{pattern:/(^|(?!\.&\.)[^&])&(?!&)\d*/m,lookbehind:!0,alias:"variable"},number:/\b(?:\d+~[\da-z]+|\d[\d_]*(?:\.\d[\d_]*)?(?:[a-z]\w*)?)/i,identifier:/[a-z_](?:-?[a-z]|[\d_])*/i,operator:[{pattern:/( )\.(?= )/,lookbehind:!0},/\.(?:[=~]|\.\.?)|\.(?:[&|^]|<<|>>>?)\.|:(?:=|:=?)|&&|\|[|>]|<(?:<<?<?|--?!?|~~?!?|[|=?])?|>[>=?]?|-(?:->?|>)?|\+\+?|@@?|%%?|\*\*?|!(?:~?=|--?>|~?~>)?|~(?:~?>|=)?|==?|\^\^?|[\/?]/],punctuation:/[(){}\[\]|.,:;`]/},e.languages.livescript["interpolated-string"].inside.interpolation.inside.rest=e.languages.livescript}gi.displayName="llvm";gi.aliases=[];function gi(e){(function(t){t.languages.llvm={comment:/;.*/,string:{pattern:/"[^"]*"/,greedy:!0},boolean:/\b(?:false|true)\b/,variable:/[%@!#](?:(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+|\d+)/i,label:/(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+:/i,type:{pattern:/\b(?:double|float|fp128|half|i[1-9]\d*|label|metadata|ppc_fp128|token|void|x86_fp80|x86_mmx)\b/,alias:"class-name"},keyword:/\b[a-z_][a-z_0-9]*\b/,number:/[+-]?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-Fa-f]+\b|\b0xK[\dA-Fa-f]{20}\b|\b0x[ML][\dA-Fa-f]{32}\b|\b0xH[\dA-Fa-f]{4}\b/,punctuation:/[{}[\];(),.!*=<>]/}})(e)}mi.displayName="log";mi.aliases=[];function mi(e){e.languages.log={string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?![st] | \w)(?:[^'\\\r\n]|\\.)*'/,greedy:!0},exception:{pattern:/(^|[^\w.])[a-z][\w.]*(?:Error|Exception):.*(?:(?:\r\n?|\n)[ \t]*(?:at[ \t].+|\.{3}.*|Caused by:.*))+(?:(?:\r\n?|\n)[ \t]*\.\.\. .*)?/,lookbehind:!0,greedy:!0,alias:["javastacktrace","language-javastacktrace"],inside:e.languages.javastacktrace||{keyword:/\bat\b/,function:/[a-z_][\w$]*(?=\()/,punctuation:/[.:()]/}},level:[{pattern:/\b(?:ALERT|CRIT|CRITICAL|EMERG|EMERGENCY|ERR|ERROR|FAILURE|FATAL|SEVERE)\b/,alias:["error","important"]},{pattern:/\b(?:WARN|WARNING|WRN)\b/,alias:["warning","important"]},{pattern:/\b(?:DISPLAY|INF|INFO|NOTICE|STATUS)\b/,alias:["info","keyword"]},{pattern:/\b(?:DBG|DEBUG|FINE)\b/,alias:["debug","keyword"]},{pattern:/\b(?:FINER|FINEST|TRACE|TRC|VERBOSE|VRB)\b/,alias:["trace","comment"]}],property:{pattern:/((?:^|[\]|])[ \t]*)[a-z_](?:[\w-]|\b\/\b)*(?:[. ]\(?\w(?:[\w-]|\b\/\b)*\)?)*:(?=\s)/im,lookbehind:!0},separator:{pattern:/(^|[^-+])-{3,}|={3,}|\*{3,}|- - /m,lookbehind:!0,alias:"comment"},url:/\b(?:file|ftp|https?):\/\/[^\s|,;'"]*[^\s|,;'">.]/,email:{pattern:/(^|\s)[-\w+.]+@[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)+(?=\s)/,lookbehind:!0,alias:"url"},"ip-address":{pattern:/\b(?:\d{1,3}(?:\.\d{1,3}){3})\b/,alias:"constant"},"mac-address":{pattern:/\b[a-f0-9]{2}(?::[a-f0-9]{2}){5}\b/i,alias:"constant"},domain:{pattern:/(^|\s)[a-z][a-z0-9-]*(?:\.[a-z][a-z0-9-]*)*\.[a-z][a-z0-9-]+(?=\s)/,lookbehind:!0,alias:"constant"},uuid:{pattern:/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/i,alias:"constant"},hash:{pattern:/\b(?:[a-f0-9]{32}){1,2}\b/i,alias:"constant"},"file-path":{pattern:/\b[a-z]:[\\/][^\s|,;:(){}\[\]"']+|(^|[\s:\[\](>|])\.{0,2}\/\w[^\s|,;:(){}\[\]"']*/i,lookbehind:!0,greedy:!0,alias:"string"},date:{pattern:RegExp(/\b\d{4}[-/]\d{2}[-/]\d{2}(?:T(?=\d{1,2}:)|(?=\s\d{1,2}:))/.source+"|"+/\b\d{1,4}[-/ ](?:\d{1,2}|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)[-/ ]\d{2,4}T?\b/.source+"|"+/\b(?:(?:Fri|Mon|Sat|Sun|Thu|Tue|Wed)(?:\s{1,2}(?:Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep))?|Apr|Aug|Dec|Feb|Jan|Jul|Jun|Mar|May|Nov|Oct|Sep)\s{1,2}\d{1,2}\b/.source,"i"),alias:"number"},time:{pattern:/\b\d{1,2}:\d{1,2}:\d{1,2}(?:[.,:]\d+)?(?:\s?[+-]\d{2}:?\d{2}|Z)?\b/,alias:"number"},boolean:/\b(?:false|null|true)\b/i,number:{pattern:/(^|[^.\w])(?:0x[a-f0-9]+|0o[0-7]+|0b[01]+|v?\d[\da-f]*(?:\.\d+)*(?:e[+-]?\d+)?[a-z]{0,3}\b)\b(?!\.\w)/i,lookbehind:!0},operator:/[;:?<=>~/@!$%&+\-|^(){}*#]/,punctuation:/[\[\].,]/}}fi.displayName="lolcode";fi.aliases=[];function fi(e){e.languages.lolcode={comment:[/\bOBTW\s[\s\S]*?\sTLDR\b/,/\bBTW.+/],string:{pattern:/"(?::.|[^":])*"/,inside:{variable:/:\{[^}]+\}/,symbol:[/:\([a-f\d]+\)/i,/:\[[^\]]+\]/,/:[)>o":]/]},greedy:!0},number:/(?:\B-)?(?:\b\d+(?:\.\d*)?|\B\.\d+)/,symbol:{pattern:/(^|\s)(?:A )?(?:BUKKIT|NOOB|NUMBAR|NUMBR|TROOF|YARN)(?=\s|,|$)/,lookbehind:!0,inside:{keyword:/A(?=\s)/}},label:{pattern:/((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,lookbehind:!0,alias:"string"},function:{pattern:/((?:^|\s)(?:HOW IZ I|I IZ|IZ) )[a-zA-Z]\w*/,lookbehind:!0},keyword:[{pattern:/(^|\s)(?:AN|FOUND YR|GIMMEH|GTFO|HAI|HAS A|HOW IZ I|I HAS A|I IZ|IF U SAY SO|IM IN YR|IM OUTTA YR|IS NOW(?: A)?|ITZ(?: A)?|IZ|KTHX|KTHXBYE|LIEK(?: A)?|MAEK|MEBBE|MKAY|NERFIN|NO WAI|O HAI IM|O RLY\?|OIC|OMG|OMGWTF|R|SMOOSH|SRS|TIL|UPPIN|VISIBLE|WILE|WTF\?|YA RLY|YR)(?=\s|,|$)/,lookbehind:!0},/'Z(?=\s|,|$)/],boolean:{pattern:/(^|\s)(?:FAIL|WIN)(?=\s|,|$)/,lookbehind:!0},variable:{pattern:/(^|\s)IT(?=\s|,|$)/,lookbehind:!0},operator:{pattern:/(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:ALL|ANY|BIGGR|BOTH|DIFF|EITHER|MOD|PRODUKT|QUOSHUNT|SMALLR|SUM|WON) OF)(?=\s|,|$)/,lookbehind:!0},punctuation:/\.{3}|…|,|!/}}bi.displayName="magma";bi.aliases=[];function bi(e){e.languages.magma={output:{pattern:/^(>.*(?:\r(?:\n|(?!\n))|\n))(?!>)(?:.+|(?:\r(?:\n|(?!\n))|\n)(?!>).*)(?:(?:\r(?:\n|(?!\n))|\n)(?!>).*)*/m,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/(^|[^\\"])"(?:[^\r\n\\"]|\\.)*"/,lookbehind:!0,greedy:!0},keyword:/\b(?:_|adj|and|assert|assert2|assert3|assigned|break|by|case|cat|catch|clear|cmpeq|cmpne|continue|declare|default|delete|diff|div|do|elif|else|end|eq|error|eval|exists|exit|for|forall|forward|fprintf|freeze|function|ge|gt|if|iload|import|in|intrinsic|is|join|le|load|local|lt|meet|mod|ne|not|notadj|notin|notsubset|or|print|printf|procedure|quit|random|read|readi|repeat|require|requirege|requirerange|restore|return|save|sdiff|select|subset|then|time|to|try|until|vprint|vprintf|vtime|when|where|while|xor)\b/,boolean:/\b(?:false|true)\b/,generator:{pattern:/\b[a-z_]\w*(?=\s*<)/i,alias:"class-name"},function:/\b[a-z_]\w*(?=\s*\()/i,number:{pattern:/(^|[^\w.]|\.\.)(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?:_[a-z]?)?(?=$|[^\w.]|\.\.)/,lookbehind:!0},operator:/->|[-+*/^~!|#=]|:=|\.\./,punctuation:/[()[\]{}<>,;.:]/}}hi.displayName="makefile";hi.aliases=[];function hi(e){e.languages.makefile={comment:{pattern:/(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,lookbehind:!0},string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"builtin-target":{pattern:/\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,alias:"builtin"},target:{pattern:/^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,alias:"symbol",inside:{variable:/\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/}},variable:/\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,keyword:/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,function:{pattern:/(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,lookbehind:!0},operator:/(?:::|[?:+!])?=|[|@]/,punctuation:/[:;(){}]/}}Mt.displayName="mata";Mt.aliases=[];function Mt(e){(function(t){var n=/\b(?:(?:col|row)?vector|matrix|scalar)\b/.source,r=/\bvoid\b|<org>|\b(?:complex|numeric|pointer(?:\s*\([^()]*\))?|real|string|(?:class|struct)\s+\w+|transmorphic)(?:\s*<org>)?/.source.replace(/<org>/g,n);t.languages.mata={comment:{pattern:/\/\/.*|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//,greedy:!0},string:{pattern:/"[^"\r\n]*"|[‘`']".*?"[’`']/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|struct)\s+)\w+(?=\s*(?:\{|\bextends\b))/,lookbehind:!0},type:{pattern:RegExp(r),alias:"class-name",inside:{punctuation:/[()]/,keyword:/\b(?:class|function|struct|void)\b/}},keyword:/\b(?:break|class|continue|do|else|end|extends|external|final|for|function|goto|if|pragma|private|protected|public|return|static|struct|unset|unused|version|virtual|while)\b/,constant:/\bNULL\b/,number:{pattern:/(^|[^\w.])(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|\d[a-f0-9]*(?:\.[a-f0-9]+)?x[+-]?\d+)i?(?![\w.])/i,lookbehind:!0},missing:{pattern:/(^|[^\w.])(?:\.[a-z]?)(?![\w.])/,lookbehind:!0,alias:"symbol"},function:/\b[a-z_]\w*(?=\s*\()/i,operator:/\.\.|\+\+|--|&&|\|\||:?(?:[!=<>]=|[+\-*/^<>&|:])|[!?=\\#’`']/,punctuation:/[()[\]{},;.]/}})(e)}yi.displayName="matlab";yi.aliases=[];function yi(e){e.languages.matlab={comment:[/%\{[\s\S]*?\}%/,/%.+/],string:{pattern:/\B'(?:''|[^'\r\n])*'/,greedy:!0},number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,keyword:/\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,function:/\b(?!\d)\w+(?=\s*\()/,operator:/\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,punctuation:/\.{3}|[.,;\[\](){}!]/}}Si.displayName="maxscript";Si.aliases=[];function Si(e){(function(t){var n=/\b(?:about|and|animate|as|at|attributes|by|case|catch|collect|continue|coordsys|do|else|exit|fn|for|from|function|global|if|in|local|macroscript|mapped|max|not|of|off|on|or|parameters|persistent|plugin|rcmenu|return|rollout|set|struct|then|throw|to|tool|try|undo|utility|when|where|while|with)\b/i;t.languages.maxscript={comment:{pattern:/\/\*[\s\S]*?(?:\*\/|$)|--.*/,greedy:!0},string:{pattern:/(^|[^"\\@])(?:"(?:[^"\\]|\\[\s\S])*"|@"[^"]*")/,lookbehind:!0,greedy:!0},path:{pattern:/\$(?:[\w/\\.*?]|'[^']*')*/,greedy:!0,alias:"string"},"function-call":{pattern:RegExp("((?:"+(/^/.source+"|"+/[;=<>+\-*/^({\[]/.source+"|"+/\b(?:and|by|case|catch|collect|do|else|if|in|not|or|return|then|to|try|where|while|with)\b/.source)+")[ 	]*)(?!"+n.source+")"+/[a-z_]\w*\b/.source+"(?=[ 	]*(?:"+("(?!"+n.source+")"+/[a-z_]/.source+"|"+/\d|-\.?\d/.source+"|"+/[({'"$@#?]/.source)+"))","im"),lookbehind:!0,greedy:!0,alias:"function"},"function-definition":{pattern:/(\b(?:fn|function)\s+)\w+\b/i,lookbehind:!0,alias:"function"},argument:{pattern:/\b[a-z_]\w*(?=:)/i,alias:"attr-name"},keyword:n,boolean:/\b(?:false|true)\b/,time:{pattern:/(^|[^\w.])(?:(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?[msft])+|\d+:\d+(?:\.\d*)?)(?![\w.:])/,lookbehind:!0,alias:"number"},number:[{pattern:/(^|[^\w.])(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?|0x[a-fA-F0-9]+)(?![\w.:])/,lookbehind:!0},/\b(?:e|pi)\b/],constant:/\b(?:dontcollect|ok|silentValue|undefined|unsupplied)\b/,color:{pattern:/\b(?:black|blue|brown|gray|green|orange|red|white|yellow)\b/i,alias:"constant"},operator:/[-+*/<>=!]=?|[&^?]|#(?!\()/,punctuation:/[()\[\]{}.:,;]|#(?=\()|\\$/m}})(e)}Ei.displayName="mel";Ei.aliases=[];function Ei(e){e.languages.mel={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},code:{pattern:/`(?:\\.|[^\\`])*`/,greedy:!0,alias:"italic",inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},statement:{pattern:/[\s\S]+/,inside:null}}},string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},variable:/\$\w+/,number:/\b0x[\da-fA-F]+\b|\b\d+(?:\.\d*)?|\B\.\d+/,flag:{pattern:/-[^\d\W]\w*/,alias:"operator"},keyword:/\b(?:break|case|continue|default|do|else|float|for|global|if|in|int|matrix|proc|return|string|switch|vector|while)\b/,function:{pattern:/((?:^|[{;])[ \t]*)[a-z_]\w*\b(?!\s*(?:\.(?!\.)|[[{=]))|\b[a-z_]\w*(?=[ \t]*\()/im,lookbehind:!0,greedy:!0},"tensor-punctuation":{pattern:/<<|>>/,alias:"punctuation"},operator:/\+[+=]?|-[-=]?|&&|\|\||[<>]=?|[*\/!=]=?|[%^]/,punctuation:/[.,:;?\[\](){}]/},e.languages.mel.code.inside.statement.inside=e.languages.mel}Ai.displayName="mermaid";Ai.aliases=[];function Ai(e){e.languages.mermaid={comment:{pattern:/%%.*/,greedy:!0},style:{pattern:/^([ \t]*(?:classDef|linkStyle|style)[ \t]+[\w$-]+[ \t]+)\w.*[^\s;]/m,lookbehind:!0,inside:{property:/\b\w[\w-]*(?=[ \t]*:)/,operator:/:/,punctuation:/,/}},"inter-arrow-label":{pattern:/([^<>ox.=-])(?:-[-.]|==)(?![<>ox.=-])[ \t]*(?:"[^"\r\n]*"|[^\s".=-](?:[^\r\n.=-]*[^\s.=-])?)[ \t]*(?:\.+->?|--+[->]|==+[=>])(?![<>ox.=-])/,lookbehind:!0,greedy:!0,inside:{arrow:{pattern:/(?:\.+->?|--+[->]|==+[=>])$/,alias:"operator"},label:{pattern:/^([\s\S]{2}[ \t]*)\S(?:[\s\S]*\S)?/,lookbehind:!0,alias:"property"},"arrow-head":{pattern:/^\S+/,alias:["arrow","operator"]}}},arrow:[{pattern:/(^|[^{}|o.-])[|}][|o](?:--|\.\.)[|o][|{](?![{}|o.-])/,lookbehind:!0,alias:"operator"},{pattern:/(^|[^<>ox.=-])(?:[<ox](?:==+|--+|-\.*-)[>ox]?|(?:==+|--+|-\.*-)[>ox]|===+|---+|-\.+-)(?![<>ox.=-])/,lookbehind:!0,alias:"operator"},{pattern:/(^|[^<>()x-])(?:--?(?:>>|[x>)])(?![<>()x])|(?:<<|[x<(])--?(?!-))/,lookbehind:!0,alias:"operator"},{pattern:/(^|[^<>|*o.-])(?:[*o]--|--[*o]|<\|?(?:--|\.\.)|(?:--|\.\.)\|?>|--|\.\.)(?![<>|*o.-])/,lookbehind:!0,alias:"operator"}],label:{pattern:/(^|[^|<])\|(?:[^\r\n"|]|"[^"\r\n]*")+\|/,lookbehind:!0,greedy:!0,alias:"property"},text:{pattern:/(?:[(\[{]+|\b>)(?:[^\r\n"()\[\]{}]|"[^"\r\n]*")+(?:[)\]}]+|>)/,alias:"string"},string:{pattern:/"[^"\r\n]*"/,greedy:!0},annotation:{pattern:/<<(?:abstract|choice|enumeration|fork|interface|join|service)>>|\[\[(?:choice|fork|join)\]\]/i,alias:"important"},keyword:[{pattern:/(^[ \t]*)(?:action|callback|class|classDef|classDiagram|click|direction|erDiagram|flowchart|gantt|gitGraph|graph|journey|link|linkStyle|pie|requirementDiagram|sequenceDiagram|stateDiagram|stateDiagram-v2|style|subgraph)(?![\w$-])/m,lookbehind:!0,greedy:!0},{pattern:/(^[ \t]*)(?:activate|alt|and|as|autonumber|deactivate|else|end(?:[ \t]+note)?|loop|opt|par|participant|rect|state|note[ \t]+(?:over|(?:left|right)[ \t]+of))(?![\w$-])/im,lookbehind:!0,greedy:!0}],entity:/#[a-z0-9]+;/,operator:{pattern:/(\w[ \t]*)&(?=[ \t]*\w)|:::|:/,lookbehind:!0},punctuation:/[(){};]/}}Ti.displayName="metafont";Ti.aliases=[];function Ti(e){e.languages.metafont={comment:{pattern:/%.*/,greedy:!0},string:{pattern:/"[^\r\n"]*"/,greedy:!0},number:/\d*\.?\d+/,boolean:/\b(?:false|true)\b/,punctuation:[/[,;()]/,{pattern:/(^|[^{}])(?:\{|\})(?![{}])/,lookbehind:!0},{pattern:/(^|[^[])\[(?!\[)/,lookbehind:!0},{pattern:/(^|[^\]])\](?!\])/,lookbehind:!0}],constant:[{pattern:/(^|[^!?])\?\?\?(?![!?])/,lookbehind:!0},{pattern:/(^|[^/*\\])(?:\\|\\\\)(?![/*\\])/,lookbehind:!0},/\b(?:_|blankpicture|bp|cc|cm|dd|ditto|down|eps|epsilon|fullcircle|halfcircle|identity|in|infinity|left|mm|nullpen|nullpicture|origin|pc|penrazor|penspeck|pensquare|penstroke|proof|pt|quartercircle|relax|right|smoke|unitpixel|unitsquare|up)\b/],quantity:{pattern:/\b(?:autorounding|blacker|boundarychar|charcode|chardp|chardx|chardy|charext|charht|charic|charwd|currentwindow|day|designsize|displaying|fillin|fontmaking|granularity|hppp|join_radius|month|o_correction|pausing|pen_(?:bot|lft|rt|top)|pixels_per_inch|proofing|showstopping|smoothing|time|tolerance|tracingcapsules|tracingchoices|tracingcommands|tracingedges|tracingequations|tracingmacros|tracingonline|tracingoutput|tracingpens|tracingrestores|tracingspecs|tracingstats|tracingtitles|turningcheck|vppp|warningcheck|xoffset|year|yoffset)\b/,alias:"keyword"},command:{pattern:/\b(?:addto|batchmode|charlist|cull|display|errhelp|errmessage|errorstopmode|everyjob|extensible|fontdimen|headerbyte|inner|interim|let|ligtable|message|newinternal|nonstopmode|numspecial|openwindow|outer|randomseed|save|scrollmode|shipout|show|showdependencies|showstats|showtoken|showvariable|special)\b/,alias:"builtin"},operator:[{pattern:/(^|[^>=<:|])(?:<|<=|=|=:|\|=:|\|=:>|=:\|>|=:\||\|=:\||\|=:\|>|\|=:\|>>|>|>=|:|:=|<>|::|\|\|:)(?![>=<:|])/,lookbehind:!0},{pattern:/(^|[^+-])(?:\+|\+\+|-{1,3}|\+-\+)(?![+-])/,lookbehind:!0},{pattern:/(^|[^/*\\])(?:\*|\*\*|\/)(?![/*\\])/,lookbehind:!0},{pattern:/(^|[^.])(?:\.{2,3})(?!\.)/,lookbehind:!0},{pattern:/(^|[^@#&$])&(?![@#&$])/,lookbehind:!0},/\b(?:and|not|or)\b/],macro:{pattern:/\b(?:abs|beginchar|bot|byte|capsule_def|ceiling|change_width|clear_pen_memory|clearit|clearpen|clearxy|counterclockwise|cullit|cutdraw|cutoff|decr|define_blacker_pixels|define_corrected_pixels|define_good_x_pixels|define_good_y_pixels|define_horizontal_corrected_pixels|define_pixels|define_whole_blacker_pixels|define_whole_pixels|define_whole_vertical_blacker_pixels|define_whole_vertical_pixels|dir|direction|directionpoint|div|dotprod|downto|draw|drawdot|endchar|erase|fill|filldraw|fix_units|flex|font_coding_scheme|font_extra_space|font_identifier|font_normal_shrink|font_normal_space|font_normal_stretch|font_quad|font_size|font_slant|font_x_height|gfcorners|gobble|gobbled|good\.(?:bot|lft|rt|top|x|y)|grayfont|hide|hround|imagerules|incr|interact|interpath|intersectionpoint|inverse|italcorr|killtext|labelfont|labels|lft|loggingall|lowres_fix|makegrid|makelabel(?:\.(?:bot|lft|rt|top)(?:\.nodot)?)?|max|min|mod|mode_def|mode_setup|nodisplays|notransforms|numtok|openit|penlabels|penpos|pickup|proofoffset|proofrule|proofrulethickness|range|reflectedabout|rotatedabout|rotatedaround|round|rt|savepen|screenchars|screenrule|screenstrokes|shipit|showit|slantfont|softjoin|solve|stop|superellipse|tensepath|thru|titlefont|top|tracingall|tracingnone|undraw|undrawdot|unfill|unfilldraw|upto|vround)\b/,alias:"function"},builtin:/\b(?:ASCII|angle|char|cosd|decimal|directiontime|floor|hex|intersectiontimes|jobname|known|length|makepath|makepen|mexp|mlog|normaldeviate|oct|odd|pencircle|penoffset|point|postcontrol|precontrol|reverse|rotated|sind|sqrt|str|subpath|substring|totalweight|turningnumber|uniformdeviate|unknown|xpart|xxpart|xypart|ypart|yxpart|yypart)\b/,keyword:/\b(?:also|at|atleast|begingroup|charexists|contour|controls|curl|cycle|def|delimiters|doublepath|dropping|dump|else|elseif|end|enddef|endfor|endgroup|endinput|exitif|exitunless|expandafter|fi|for|forever|forsuffixes|from|if|input|inwindow|keeping|kern|of|primarydef|quote|readstring|scaled|scantokens|secondarydef|shifted|skipto|slanted|step|tension|tertiarydef|to|transformed|until|vardef|withpen|withweight|xscaled|yscaled|zscaled)\b/,type:{pattern:/\b(?:boolean|expr|numeric|pair|path|pen|picture|primary|secondary|string|suffix|tertiary|text|transform)\b/,alias:"property"},variable:{pattern:/(^|[^@#&$])(?:@#|#@|#|@)(?![@#&$])|\b(?:aspect_ratio|currentpen|currentpicture|currenttransform|d|extra_beginchar|extra_endchar|extra_setup|h|localfont|mag|mode|screen_cols|screen_rows|w|whatever|x|y|z)\b/,lookbehind:!0}}}wi.displayName="mizar";wi.aliases=[];function wi(e){e.languages.mizar={comment:/::.+/,keyword:/@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|end|environ|equals|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:ies|y)|when|where|with|wrt)\b/,parameter:{pattern:/\$(?:10|\d)/,alias:"variable"},variable:/\b\w+(?=:)/,number:/(?:\b|-)\d+\b/,operator:/\.\.\.|->|&|\.?=/,punctuation:/\(#|#\)|[,:;\[\](){}]/}}Ii.displayName="mongodb";Ii.aliases=[];function Ii(e){e.register(ie),(function(t){var n=["$eq","$gt","$gte","$in","$lt","$lte","$ne","$nin","$and","$not","$nor","$or","$exists","$type","$expr","$jsonSchema","$mod","$regex","$text","$where","$geoIntersects","$geoWithin","$near","$nearSphere","$all","$elemMatch","$size","$bitsAllClear","$bitsAllSet","$bitsAnyClear","$bitsAnySet","$comment","$elemMatch","$meta","$slice","$currentDate","$inc","$min","$max","$mul","$rename","$set","$setOnInsert","$unset","$addToSet","$pop","$pull","$push","$pullAll","$each","$position","$slice","$sort","$bit","$addFields","$bucket","$bucketAuto","$collStats","$count","$currentOp","$facet","$geoNear","$graphLookup","$group","$indexStats","$limit","$listLocalSessions","$listSessions","$lookup","$match","$merge","$out","$planCacheStats","$project","$redact","$replaceRoot","$replaceWith","$sample","$set","$skip","$sort","$sortByCount","$unionWith","$unset","$unwind","$setWindowFields","$abs","$accumulator","$acos","$acosh","$add","$addToSet","$allElementsTrue","$and","$anyElementTrue","$arrayElemAt","$arrayToObject","$asin","$asinh","$atan","$atan2","$atanh","$avg","$binarySize","$bsonSize","$ceil","$cmp","$concat","$concatArrays","$cond","$convert","$cos","$dateFromParts","$dateToParts","$dateFromString","$dateToString","$dayOfMonth","$dayOfWeek","$dayOfYear","$degreesToRadians","$divide","$eq","$exp","$filter","$first","$floor","$function","$gt","$gte","$hour","$ifNull","$in","$indexOfArray","$indexOfBytes","$indexOfCP","$isArray","$isNumber","$isoDayOfWeek","$isoWeek","$isoWeekYear","$last","$last","$let","$literal","$ln","$log","$log10","$lt","$lte","$ltrim","$map","$max","$mergeObjects","$meta","$min","$millisecond","$minute","$mod","$month","$multiply","$ne","$not","$objectToArray","$or","$pow","$push","$radiansToDegrees","$range","$reduce","$regexFind","$regexFindAll","$regexMatch","$replaceOne","$replaceAll","$reverseArray","$round","$rtrim","$second","$setDifference","$setEquals","$setIntersection","$setIsSubset","$setUnion","$size","$sin","$slice","$split","$sqrt","$stdDevPop","$stdDevSamp","$strcasecmp","$strLenBytes","$strLenCP","$substr","$substrBytes","$substrCP","$subtract","$sum","$switch","$tan","$toBool","$toDate","$toDecimal","$toDouble","$toInt","$toLong","$toObjectId","$toString","$toLower","$toUpper","$trim","$trunc","$type","$week","$year","$zip","$count","$dateAdd","$dateDiff","$dateSubtract","$dateTrunc","$getField","$rand","$sampleRate","$setField","$unsetField","$comment","$explain","$hint","$max","$maxTimeMS","$min","$orderby","$query","$returnKey","$showDiskLoc","$natural"],r=["ObjectId","Code","BinData","DBRef","Timestamp","NumberLong","NumberDecimal","MaxKey","MinKey","RegExp","ISODate","UUID"];n=n.map(function(i){return i.replace("$","\\$")});var a="(?:"+n.join("|")+")\\b";t.languages.mongodb=t.languages.extend("javascript",{}),t.languages.insertBefore("mongodb","string",{property:{pattern:/(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,greedy:!0,inside:{keyword:RegExp(`^(['"])?`+a+"(?:\\1)?$")}}}),t.languages.mongodb.string.inside={url:{pattern:/https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,greedy:!0},entity:{pattern:/\b(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])\b/,greedy:!0}},t.languages.insertBefore("mongodb","constant",{builtin:{pattern:RegExp("\\b(?:"+r.join("|")+")\\b"),alias:"keyword"}})})(e)}vi.displayName="monkey";vi.aliases=[];function vi(e){e.languages.monkey={comment:{pattern:/^#Rem\s[\s\S]*?^#End|'.+/im,greedy:!0},string:{pattern:/"[^"\r\n]*"/,greedy:!0},preprocessor:{pattern:/(^[ \t]*)#.+/m,lookbehind:!0,greedy:!0,alias:"property"},function:/\b\w+(?=\()/,"type-char":{pattern:/\b[?%#$]/,alias:"class-name"},number:{pattern:/((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,lookbehind:!0},keyword:/\b(?:Abstract|Array|Bool|Case|Catch|Class|Const|Continue|Default|Eachin|Else|ElseIf|End|EndIf|Exit|Extends|Extern|False|Field|Final|Float|For|Forever|Function|Global|If|Implements|Import|Inline|Int|Interface|Local|Method|Module|New|Next|Null|Object|Private|Property|Public|Repeat|Return|Select|Self|Step|Strict|String|Super|Then|Throw|To|True|Try|Until|Void|Wend|While)\b/i,operator:/\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,punctuation:/[.,:;()\[\]]/}}ki.displayName="moonscript";ki.aliases=["moon"];function ki(e){e.languages.moonscript={comment:/--.*/,string:[{pattern:/'[^']*'|\[(=*)\[[\s\S]*?\]\1\]/,greedy:!0},{pattern:/"[^"]*"/,greedy:!0,inside:{interpolation:{pattern:/#\{[^{}]*\}/,inside:{moonscript:{pattern:/(^#\{)[\s\S]+(?=\})/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/#\{|\}/,alias:"punctuation"}}}}}],"class-name":[{pattern:/(\b(?:class|extends)[ \t]+)\w+/,lookbehind:!0},/\b[A-Z]\w*/],keyword:/\b(?:class|continue|do|else|elseif|export|extends|for|from|if|import|in|local|nil|return|self|super|switch|then|unless|using|when|while|with)\b/,variable:/@@?\w*/,property:{pattern:/\b(?!\d)\w+(?=:)|(:)(?!\d)\w+/,lookbehind:!0},function:{pattern:/\b(?:_G|_VERSION|assert|collectgarbage|coroutine\.(?:create|resume|running|status|wrap|yield)|debug\.(?:debug|getfenv|gethook|getinfo|getlocal|getmetatable|getregistry|getupvalue|setfenv|sethook|setlocal|setmetatable|setupvalue|traceback)|dofile|error|getfenv|getmetatable|io\.(?:close|flush|input|lines|open|output|popen|read|stderr|stdin|stdout|tmpfile|type|write)|ipairs|load|loadfile|loadstring|math\.(?:abs|acos|asin|atan|atan2|ceil|cos|cosh|deg|exp|floor|fmod|frexp|ldexp|log|log10|max|min|modf|pi|pow|rad|random|randomseed|sin|sinh|sqrt|tan|tanh)|module|next|os\.(?:clock|date|difftime|execute|exit|getenv|remove|rename|setlocale|time|tmpname)|package\.(?:cpath|loaded|loadlib|path|preload|seeall)|pairs|pcall|print|rawequal|rawget|rawset|require|select|setfenv|setmetatable|string\.(?:byte|char|dump|find|format|gmatch|gsub|len|lower|match|rep|reverse|sub|upper)|table\.(?:concat|insert|maxn|remove|sort)|tonumber|tostring|type|unpack|xpcall)\b/,inside:{punctuation:/\./}},boolean:/\b(?:false|true)\b/,number:/(?:\B\.\d+|\b\d+\.\d+|\b\d+(?=[eE]))(?:[eE][-+]?\d+)?\b|\b(?:0x[a-fA-F\d]+|\d+)(?:U?LL)?\b/,operator:/\.{3}|[-=]>|~=|(?:[-+*/%<>!=]|\.\.)=?|[:#^]|\b(?:and|or)\b=?|\b(?:not)\b/,punctuation:/[.,()[\]{}\\]/},e.languages.moonscript.string[1].inside.interpolation.inside.moonscript.inside=e.languages.moonscript,e.languages.moon=e.languages.moonscript}Ri.displayName="n1ql";Ri.aliases=[];function Ri(e){e.languages.n1ql={comment:{pattern:/\/\*[\s\S]*?(?:$|\*\/)|--.*/,greedy:!0},string:{pattern:/(["'])(?:\\[\s\S]|(?!\1)[^\\]|\1\1)*\1/,greedy:!0},identifier:{pattern:/`(?:\\[\s\S]|[^\\`]|``)*`/,greedy:!0},parameter:/\$[\w.]+/,keyword:/\b(?:ADVISE|ALL|ALTER|ANALYZE|AS|ASC|AT|BEGIN|BINARY|BOOLEAN|BREAK|BUCKET|BUILD|BY|CALL|CAST|CLUSTER|COLLATE|COLLECTION|COMMIT|COMMITTED|CONNECT|CONTINUE|CORRELATE|CORRELATED|COVER|CREATE|CURRENT|DATABASE|DATASET|DATASTORE|DECLARE|DECREMENT|DELETE|DERIVED|DESC|DESCRIBE|DISTINCT|DO|DROP|EACH|ELEMENT|EXCEPT|EXCLUDE|EXECUTE|EXPLAIN|FETCH|FILTER|FLATTEN|FLUSH|FOLLOWING|FOR|FORCE|FROM|FTS|FUNCTION|GOLANG|GRANT|GROUP|GROUPS|GSI|HASH|HAVING|IF|IGNORE|ILIKE|INCLUDE|INCREMENT|INDEX|INFER|INLINE|INNER|INSERT|INTERSECT|INTO|IS|ISOLATION|JAVASCRIPT|JOIN|KEY|KEYS|KEYSPACE|KNOWN|LANGUAGE|LAST|LEFT|LET|LETTING|LEVEL|LIMIT|LSM|MAP|MAPPING|MATCHED|MATERIALIZED|MERGE|MINUS|MISSING|NAMESPACE|NEST|NL|NO|NTH_VALUE|NULL|NULLS|NUMBER|OBJECT|OFFSET|ON|OPTION|OPTIONS|ORDER|OTHERS|OUTER|OVER|PARSE|PARTITION|PASSWORD|PATH|POOL|PRECEDING|PREPARE|PRIMARY|PRIVATE|PRIVILEGE|PROBE|PROCEDURE|PUBLIC|RANGE|RAW|REALM|REDUCE|RENAME|RESPECT|RETURN|RETURNING|REVOKE|RIGHT|ROLE|ROLLBACK|ROW|ROWS|SATISFIES|SAVEPOINT|SCHEMA|SCOPE|SELECT|SELF|SEMI|SET|SHOW|SOME|START|STATISTICS|STRING|SYSTEM|TIES|TO|TRAN|TRANSACTION|TRIGGER|TRUNCATE|UNBOUNDED|UNDER|UNION|UNIQUE|UNKNOWN|UNNEST|UNSET|UPDATE|UPSERT|USE|USER|USING|VALIDATE|VALUE|VALUES|VIA|VIEW|WHERE|WHILE|WINDOW|WITH|WORK|XOR)\b/i,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:FALSE|TRUE)\b/i,number:/(?:\b\d+\.|\B\.)\d+e[+\-]?\d+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/%]|!=|==?|\|\||<[>=]?|>=?|\b(?:AND|ANY|ARRAY|BETWEEN|CASE|ELSE|END|EVERY|EXISTS|FIRST|IN|LIKE|NOT|OR|THEN|VALUED|WHEN|WITHIN)\b/i,punctuation:/[;[\](),.{}:]/}}Ci.displayName="nand2tetris-hdl";Ci.aliases=[];function Ci(e){e.languages["nand2tetris-hdl"]={comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,keyword:/\b(?:BUILTIN|CHIP|CLOCKED|IN|OUT|PARTS)\b/,boolean:/\b(?:false|true)\b/,function:/\b[A-Za-z][A-Za-z0-9]*(?=\()/,number:/\b\d+\b/,operator:/=|\.\./,punctuation:/[{}[\];(),:]/}}_i.displayName="naniscript";_i.aliases=["nani"];function _i(e){(function(t){var n=/\{[^\r\n\[\]{}]*\}/,r={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:n,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};t.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:n,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:r}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:n,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:r},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},t.languages.nani=t.languages.naniscript,t.hooks.add("after-tokenize",function(o){var s=o.tokens;s.forEach(function(u){if(typeof u!="string"&&u.type==="generic-text"){var l=i(u);a(l)||(u.type="bad-line",u.content=l)}})});function a(o){for(var s="[]{}",u=[],l=0;l<o.length;l++){var c=o[l],d=s.indexOf(c);if(d!==-1){if(d%2===0)u.push(d+1);else if(u.pop()!==d)return!1}}return u.length===0}function i(o){return typeof o=="string"?o:Array.isArray(o)?o.map(i).join(""):i(o.content)}})(e)}Ni.displayName="nasm";Ni.aliases=[];function Ni(e){e.languages.nasm={comment:/;.*$/m,string:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,label:{pattern:/(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,lookbehind:!0,alias:"function"},keyword:[/\[?BITS (?:16|32|64)\]?/,{pattern:/(^\s*)section\s*[a-z.]+:?/im,lookbehind:!0},/(?:extern|global)[^;\r\n]*/i,/(?:CPU|DEFAULT|FLOAT).*$/m],register:{pattern:/\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s)\b/i,alias:"variable"},number:/(?:\b|(?=\$))(?:0[hx](?:\.[\da-f]+|[\da-f]+(?:\.[\da-f]+)?)(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,operator:/[\[\]*+\-\/%<>=&|$!]/}}Oi.displayName="neon";Oi.aliases=[];function Oi(e){e.languages.neon={comment:{pattern:/#.*/,greedy:!0},datetime:{pattern:/(^|[[{(=:,\s])\d\d\d\d-\d\d?-\d\d?(?:(?:[Tt]| +)\d\d?:\d\d:\d\d(?:\.\d*)? *(?:Z|[-+]\d\d?(?::?\d\d)?)?)?(?=$|[\]}),\s])/,lookbehind:!0,alias:"number"},key:{pattern:/(^|[[{(,\s])[^,:=[\]{}()'"\s]+(?=\s*:(?:$|[\]}),\s])|\s*=)/,lookbehind:!0,alias:"property"},number:{pattern:/(^|[[{(=:,\s])[+-]?(?:0x[\da-fA-F]+|0o[0-7]+|0b[01]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:[eE][+-]?\d+)?)(?=$|[\]}),:=\s])/,lookbehind:!0},boolean:{pattern:/(^|[[{(=:,\s])(?:false|no|true|yes)(?=$|[\]}),:=\s])/i,lookbehind:!0},null:{pattern:/(^|[[{(=:,\s])(?:null)(?=$|[\]}),:=\s])/i,lookbehind:!0,alias:"keyword"},string:{pattern:/(^|[[{(=:,\s])(?:('''|""")\r?\n(?:(?:[^\r\n]|\r?\n(?![\t ]*\2))*\r?\n)?[\t ]*\2|'[^'\r\n]*'|"(?:\\.|[^\\"\r\n])*")/,lookbehind:!0,greedy:!0},literal:{pattern:/(^|[[{(=:,\s])(?:[^#"',:=[\]{}()\s`-]|[:-][^"',=[\]{}()\s])(?:[^,:=\]})(\s]|:(?![\s,\]})]|$)|[ \t]+[^#,:=\]})(\s])*/,lookbehind:!0,alias:"string"},punctuation:/[,:=[\]{}()-]/}}xi.displayName="nevod";xi.aliases=[];function xi(e){e.languages.nevod={comment:/\/\/.*|(?:\/\*[\s\S]*?(?:\*\/|$))/,string:{pattern:/(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))!?\*?/,greedy:!0,inside:{"string-attrs":/!$|!\*$|\*$/}},namespace:{pattern:/(@namespace\s+)[a-zA-Z0-9\-.]+(?=\s*\{)/,lookbehind:!0},pattern:{pattern:/(@pattern\s+)?#?[a-zA-Z0-9\-.]+(?:\s*\(\s*(?:~\s*)?[a-zA-Z0-9\-.]+\s*(?:,\s*(?:~\s*)?[a-zA-Z0-9\-.]*)*\))?(?=\s*=)/,lookbehind:!0,inside:{"pattern-name":{pattern:/^#?[a-zA-Z0-9\-.]+/,alias:"class-name"},fields:{pattern:/\(.*\)/,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},punctuation:/[,()]/,operator:{pattern:/~/,alias:"field-hidden-mark"}}}}},search:{pattern:/(@search\s+|#)[a-zA-Z0-9\-.]+(?:\.\*)?(?=\s*;)/,alias:"function",lookbehind:!0},keyword:/@(?:having|inside|namespace|outside|pattern|require|search|where)\b/,"standard-pattern":{pattern:/\b(?:Alpha|AlphaNum|Any|Blank|End|LineBreak|Num|NumAlpha|Punct|Space|Start|Symbol|Word|WordBreak)\b(?:\([a-zA-Z0-9\-.,\s+]*\))?/,inside:{"standard-pattern-name":{pattern:/^[a-zA-Z0-9\-.]+/,alias:"builtin"},quantifier:{pattern:/\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,alias:"number"},"standard-pattern-attr":{pattern:/[a-zA-Z0-9\-.]+/,alias:"builtin"},punctuation:/[,()]/}},quantifier:{pattern:/\b\d+(?:\s*\+|\s*-\s*\d+)?(?!\w)/,alias:"number"},operator:[{pattern:/=/,alias:"pattern-def"},{pattern:/&/,alias:"conjunction"},{pattern:/~/,alias:"exception"},{pattern:/\?/,alias:"optionality"},{pattern:/[[\]]/,alias:"repetition"},{pattern:/[{}]/,alias:"variation"},{pattern:/[+_]/,alias:"sequence"},{pattern:/\.{2,3}/,alias:"span"}],"field-capture":[{pattern:/([a-zA-Z0-9\-.]+\s*\()\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+(?:\s*,\s*[a-zA-Z0-9\-.]+\s*:\s*[a-zA-Z0-9\-.]+)*(?=\s*\))/,lookbehind:!0,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},colon:/:/}},{pattern:/[a-zA-Z0-9\-.]+\s*:/,inside:{"field-name":{pattern:/[a-zA-Z0-9\-.]+/,alias:"variable"},colon:/:/}}],punctuation:/[:;,()]/,name:/[a-zA-Z0-9\-.]+/}}Di.displayName="nginx";Di.aliases=[];function Di(e){(function(t){var n=/\$(?:\w[a-z\d]*(?:_[^\x00-\x1F\s"'\\()$]*)?|\{[^}\s"'\\]+\})/i;t.languages.nginx={comment:{pattern:/(^|[\s{};])#.*/,lookbehind:!0,greedy:!0},directive:{pattern:/(^|\s)\w(?:[^;{}"'\\\s]|\\.|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\s+(?:#.*(?!.)|(?![#\s])))*?(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:{string:{pattern:/((?:^|[^\\])(?:\\\\)*)(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/,lookbehind:!0,greedy:!0,inside:{escape:{pattern:/\\["'\\nrt]/,alias:"entity"},variable:n}},comment:{pattern:/(\s)#.*/,lookbehind:!0,greedy:!0},keyword:{pattern:/^\S+/,greedy:!0},boolean:{pattern:/(\s)(?:off|on)(?!\S)/,lookbehind:!0},number:{pattern:/(\s)\d+[a-z]*(?!\S)/i,lookbehind:!0},variable:n}},punctuation:/[{};]/}})(e)}Li.displayName="nim";Li.aliases=[];function Li(e){e.languages.nim={comment:{pattern:/#.*/,greedy:!0},string:{pattern:/(?:\b(?!\d)(?:\w|\\x[89a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")/,greedy:!0},char:{pattern:/'(?:\\(?:\d+|x[\da-fA-F]{0,2}|.)|[^'])'/,greedy:!0},function:{pattern:/(?:(?!\d)(?:\w|\\x[89a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,greedy:!0,inside:{operator:/\*$/}},identifier:{pattern:/`[^`\r\n]+`/,greedy:!0,inside:{punctuation:/`/}},number:/\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,keyword:/\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,operator:{pattern:/(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|in|is|isnot|mod|not|notin|of|or|shl|shr|xor)\b)/m,lookbehind:!0},punctuation:/[({\[]\.|\.[)}\]]|[`(){}\[\],:]/}}Mi.displayName="nix";Mi.aliases=[];function Mi(e){e.languages.nix={comment:{pattern:/\/\*[\s\S]*?\*\/|#.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,greedy:!0,inside:{interpolation:{pattern:/(^|(?:^|(?!'').)[^\\])\$\{(?:[^{}]|\{[^}]*\})*\}/,lookbehind:!0,inside:null}}},url:[/\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,{pattern:/([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,lookbehind:!0}],antiquotation:{pattern:/\$(?=\{)/,alias:"important"},number:/\b\d+\b/,keyword:/\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,function:/\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:Tarball|url)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,boolean:/\b(?:false|true)\b/,operator:/[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,punctuation:/[{}()[\].,:;]/},e.languages.nix.string.inside.interpolation.inside=e.languages.nix}Pi.displayName="nsis";Pi.aliases=[];function Pi(e){e.languages.nsis={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|[#;].*)/,lookbehind:!0,greedy:!0},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:{pattern:/(^[\t ]*)(?:Abort|Add(?:BrandingImage|Size)|AdvSplash|Allow(?:RootDirInstall|SkipFiles)|AutoCloseWindow|BG(?:Font|Gradient|Image)|Banner|BrandingText|BringToFront|CRCCheck|Call(?:InstDLL)?|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|Create(?:Directory|Font|ShortCut)|Delete(?:INISec|INIStr|RegKey|RegValue)?|Detail(?:Print|sButtonText)|Dialer|Dir(?:Text|Var|Verify)|EnableWindow|Enum(?:RegKey|RegValue)|Exch|Exec(?:Shell(?:Wait)?|Wait)?|ExpandEnvStrings|File(?:BufSize|Close|ErrorText|Open|Read|ReadByte|ReadUTF16LE|ReadWord|Seek|Write|WriteByte|WriteUTF16LE|WriteWord)?|Find(?:Close|First|Next|Window)|FlushINI|Get(?:CurInstType|CurrentAddress|DLLVersion(?:Local)?|DlgItem|ErrorLevel|FileTime(?:Local)?|FullPathName|Function(?:Address|End)?|InstDirError|KnownFolderPath|LabelAddress|TempFileName|WinVer)|Goto|HideWindow|Icon|If(?:Abort|Errors|FileExists|RebootFlag|RtlLanguage|ShellVarContextAll|Silent)|InitPluginsDir|InstProgressFlags|Inst(?:Type(?:GetText|SetText)?)|Install(?:ButtonText|Colors|Dir(?:RegKey)?)|Int(?:64|Ptr)?CmpU?|Int(?:64)?Fmt|Int(?:Ptr)?Op|IsWindow|Lang(?:DLL|String)|License(?:BkColor|Data|ForceSelection|LangString|Text)|LoadLanguageFile|LockWindow|Log(?:Set|Text)|Manifest(?:DPIAware|SupportedOS)|Math|MessageBox|MiscButtonText|NSISdl|Name|Nop|OutFile|PE(?:DllCharacteristics|SubsysVer)|Page(?:Callbacks)?|Pop|Push|Quit|RMDir|Read(?:EnvStr|INIStr|RegDWORD|RegStr)|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|SearchPath|Section(?:End|GetFlags|GetInstTypes|GetSize|GetText|Group|In|SetFlags|SetInstTypes|SetSize|SetText)?|SendMessage|Set(?:AutoClose|BrandingImage|Compress|Compressor(?:DictSize)?|CtlColors|CurInstType|DatablockOptimize|DateSave|Details(?:Print|View)|ErrorLevel|Errors|FileAttributes|Font|OutPath|Overwrite|PluginUnload|RebootFlag|RegView|ShellVarContext|Silent)|Show(?:InstDetails|UninstDetails|Window)|Silent(?:Install|UnInstall)|Sleep|SpaceTexts|Splash|StartMenu|Str(?:CmpS?|Cpy|Len)|SubCaption|System|Target|UnRegDLL|Unicode|UninstPage|Uninstall(?:ButtonText|Caption|Icon|SubCaption|Text)|UserInfo|VI(?:AddVersionKey|FileVersion|ProductVersion)|VPatch|Var|WindowIcon|Write(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller)|XPStyle|ns(?:Dialogs|Exec))\b/m,lookbehind:!0},property:/\b(?:ARCHIVE|FILE_(?:ATTRIBUTE_ARCHIVE|ATTRIBUTE_NORMAL|ATTRIBUTE_OFFLINE|ATTRIBUTE_READONLY|ATTRIBUTE_SYSTEM|ATTRIBUTE_TEMPORARY)|HK(?:(?:CR|CU|LM)(?:32|64)?|DD|PD|U)|HKEY_(?:CLASSES_ROOT|CURRENT_CONFIG|CURRENT_USER|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|ID(?:ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(?:ABORTRETRYIGNORE|DEFBUTTON1|DEFBUTTON2|DEFBUTTON3|DEFBUTTON4|ICONEXCLAMATION|ICONINFORMATION|ICONQUESTION|ICONSTOP|OK|OKCANCEL|RETRYCANCEL|RIGHT|RTLREADING|SETFOREGROUND|TOPMOST|USERICON|YESNO)|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY|admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user)\b/,constant:/\$\{[!\w\.:\^-]+\}|\$\([!\w\.:\^-]+\)/,variable:/\$\w[\w\.]*/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--?|\+\+?|<=?|>=?|==?=?|&&?|\|\|?|[?*\/~^%]/,punctuation:/[{}[\];(),.:]/,important:{pattern:/(^[\t ]*)!(?:addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversion|gettlbversion|if|ifdef|ifmacrodef|ifmacrondef|ifndef|include|insertmacro|macro|macroend|makensis|packhdr|pragma|searchparse|searchreplace|system|tempfile|undef|verbose|warning)\b/im,lookbehind:!0}}}Fi.displayName="objectivec";Fi.aliases=["objc"];function Fi(e){e.register(Ae),e.languages.objectivec=e.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete e.languages.objectivec["class-name"],e.languages.objc=e.languages.objectivec}Bi.displayName="ocaml";Bi.aliases=[];function Bi(e){e.languages.ocaml={comment:{pattern:/\(\*[\s\S]*?\*\)/,greedy:!0},char:{pattern:/'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,greedy:!0},string:[{pattern:/"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,greedy:!0},{pattern:/\{([a-z_]*)\|[\s\S]*?\|\1\}/,greedy:!0}],number:[/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,/\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,/\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],directive:{pattern:/\B#\w+/,alias:"property"},label:{pattern:/\B~\w+/,alias:"property"},"type-variable":{pattern:/\B'\w+/,alias:"function"},variant:{pattern:/`\w+/,alias:"symbol"},keyword:/\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,boolean:/\b(?:false|true)\b/,"operator-like-punctuation":{pattern:/\[[<>|]|[>|]\]|\{<|>\}/,alias:"punctuation"},operator:/\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,punctuation:/;;|::|[(){}\[\].,:;#]|\b_\b/}}Ui.displayName="odin";Ui.aliases=[];function Ui(e){(function(t){var n=/\\(?:["'\\abefnrtv]|0[0-7]{2}|U[\dA-Fa-f]{6}|u[\dA-Fa-f]{4}|x[\dA-Fa-f]{2})/;t.languages.odin={comment:[{pattern:/\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:\*(?!\/)|[^*])*(?:\*\/|$))*(?:\*\/|$)/,greedy:!0},{pattern:/#![^\n\r]*/,greedy:!0},{pattern:/\/\/[^\n\r]*/,greedy:!0}],char:{pattern:/'(?:\\(?:.|[0Uux][0-9A-Fa-f]{1,6})|[^\n\r'\\])'/,greedy:!0,inside:{symbol:n}},string:[{pattern:/`[^`]*`/,greedy:!0},{pattern:/"(?:\\.|[^\n\r"\\])*"/,greedy:!0,inside:{symbol:n}}],directive:{pattern:/#\w+/,alias:"property"},number:/\b0(?:b[01_]+|d[\d_]+|h_*(?:(?:(?:[\dA-Fa-f]_*){8}){1,2}|(?:[\dA-Fa-f]_*){4})|o[0-7_]+|x[\dA-F_a-f]+|z[\dAB_ab]+)\b|(?:\b\d+(?:\.(?!\.)\d*)?|\B\.\d+)(?:[Ee][+-]?\d*)?[ijk]?(?!\w)/,discard:{pattern:/\b_\b/,alias:"keyword"},"procedure-definition":{pattern:/\b\w+(?=[ \t]*(?::\s*){2}proc\b)/,alias:"function"},keyword:/\b(?:asm|auto_cast|bit_set|break|case|cast|context|continue|defer|distinct|do|dynamic|else|enum|fallthrough|for|foreign|if|import|in|map|matrix|not_in|or_else|or_return|package|proc|return|struct|switch|transmute|typeid|union|using|when|where)\b/,"procedure-name":{pattern:/\b\w+(?=[ \t]*\()/,alias:"function"},boolean:/\b(?:false|nil|true)\b/,"constant-parameter-sign":{pattern:/\$/,alias:"important"},undefined:{pattern:/---/,alias:"operator"},arrow:{pattern:/->/,alias:"punctuation"},operator:/\+\+|--|\.\.[<=]?|(?:&~|[-!*+/=~]|[%&<>|]{1,2})=?|[?^]/,punctuation:/[(),.:;@\[\]{}]/}})(e)}Gi.displayName="opencl";Gi.aliases=[];function Gi(e){e.register(Ae),(function(t){t.languages.opencl=t.languages.extend("c",{keyword:/\b(?:(?:__)?(?:constant|global|kernel|local|private|read_only|read_write|write_only)|__attribute__|auto|(?:bool|u?(?:char|int|long|short)|half|quad)(?:2|3|4|8|16)?|break|case|complex|const|continue|(?:double|float)(?:16(?:x(?:1|2|4|8|16))?|1x(?:1|2|4|8|16)|2(?:x(?:1|2|4|8|16))?|3|4(?:x(?:1|2|4|8|16))?|8(?:x(?:1|2|4|8|16))?)?|default|do|else|enum|extern|for|goto|if|imaginary|inline|packed|pipe|register|restrict|return|signed|sizeof|static|struct|switch|typedef|uniform|union|unsigned|void|volatile|while)\b/,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[fuhl]{0,4}/i,boolean:/\b(?:false|true)\b/,"constant-opencl-kernel":{pattern:/\b(?:CHAR_(?:BIT|MAX|MIN)|CLK_(?:ADDRESS_(?:CLAMP(?:_TO_EDGE)?|NONE|REPEAT)|FILTER_(?:LINEAR|NEAREST)|(?:GLOBAL|LOCAL)_MEM_FENCE|NORMALIZED_COORDS_(?:FALSE|TRUE))|CL_(?:BGRA|(?:HALF_)?FLOAT|INTENSITY|LUMINANCE|A?R?G?B?[Ax]?|(?:(?:UN)?SIGNED|[US]NORM)_(?:INT(?:8|16|32))|UNORM_(?:INT_101010|SHORT_(?:555|565)))|(?:DBL|FLT|HALF)_(?:DIG|EPSILON|(?:MAX|MIN)(?:(?:_10)?_EXP)?|MANT_DIG)|FLT_RADIX|HUGE_VALF?|(?:INT|LONG|SCHAR|SHRT)_(?:MAX|MIN)|INFINITY|MAXFLOAT|M_(?:[12]_PI|2_SQRTPI|E|LN(?:2|10)|LOG(?:2|10)E?|PI(?:_[24])?|SQRT(?:1_2|2))(?:_F|_H)?|NAN|(?:UCHAR|UINT|ULONG|USHRT)_MAX)\b/,alias:"constant"}}),t.languages.insertBefore("opencl","class-name",{"builtin-type":{pattern:/\b(?:_cl_(?:command_queue|context|device_id|event|kernel|mem|platform_id|program|sampler)|cl_(?:image_format|mem_fence_flags)|clk_event_t|event_t|image(?:1d_(?:array_|buffer_)?t|2d_(?:array_(?:depth_|msaa_depth_|msaa_)?|depth_|msaa_depth_|msaa_)?t|3d_t)|intptr_t|ndrange_t|ptrdiff_t|queue_t|reserve_id_t|sampler_t|size_t|uintptr_t)\b/,alias:"keyword"}});var n={"type-opencl-host":{pattern:/\b(?:cl_(?:GLenum|GLint|GLuin|addressing_mode|bitfield|bool|buffer_create_type|build_status|channel_(?:order|type)|(?:u?(?:char|int|long|short)|double|float)(?:2|3|4|8|16)?|command_(?:queue(?:_info|_properties)?|type)|context(?:_info|_properties)?|device_(?:exec_capabilities|fp_config|id|info|local_mem_type|mem_cache_type|type)|(?:event|sampler)(?:_info)?|filter_mode|half|image_info|kernel(?:_info|_work_group_info)?|map_flags|mem(?:_flags|_info|_object_type)?|platform_(?:id|info)|profiling_info|program(?:_build_info|_info)?))\b/,alias:"keyword"},"boolean-opencl-host":{pattern:/\bCL_(?:FALSE|TRUE)\b/,alias:"boolean"},"constant-opencl-host":{pattern:/\bCL_(?:A|ABGR|ADDRESS_(?:CLAMP(?:_TO_EDGE)?|MIRRORED_REPEAT|NONE|REPEAT)|ARGB|BGRA|BLOCKING|BUFFER_CREATE_TYPE_REGION|BUILD_(?:ERROR|IN_PROGRESS|NONE|PROGRAM_FAILURE|SUCCESS)|COMMAND_(?:ACQUIRE_GL_OBJECTS|BARRIER|COPY_(?:BUFFER(?:_RECT|_TO_IMAGE)?|IMAGE(?:_TO_BUFFER)?)|FILL_(?:BUFFER|IMAGE)|MAP(?:_BUFFER|_IMAGE)|MARKER|MIGRATE(?:_SVM)?_MEM_OBJECTS|NATIVE_KERNEL|NDRANGE_KERNEL|READ_(?:BUFFER(?:_RECT)?|IMAGE)|RELEASE_GL_OBJECTS|SVM_(?:FREE|MAP|MEMCPY|MEMFILL|UNMAP)|TASK|UNMAP_MEM_OBJECT|USER|WRITE_(?:BUFFER(?:_RECT)?|IMAGE))|COMPILER_NOT_AVAILABLE|COMPILE_PROGRAM_FAILURE|COMPLETE|CONTEXT_(?:DEVICES|INTEROP_USER_SYNC|NUM_DEVICES|PLATFORM|PROPERTIES|REFERENCE_COUNT)|DEPTH(?:_STENCIL)?|DEVICE_(?:ADDRESS_BITS|AFFINITY_DOMAIN_(?:L[1-4]_CACHE|NEXT_PARTITIONABLE|NUMA)|AVAILABLE|BUILT_IN_KERNELS|COMPILER_AVAILABLE|DOUBLE_FP_CONFIG|ENDIAN_LITTLE|ERROR_CORRECTION_SUPPORT|EXECUTION_CAPABILITIES|EXTENSIONS|GLOBAL_(?:MEM_(?:CACHELINE_SIZE|CACHE_SIZE|CACHE_TYPE|SIZE)|VARIABLE_PREFERRED_TOTAL_SIZE)|HOST_UNIFIED_MEMORY|IL_VERSION|IMAGE(?:2D_MAX_(?:HEIGHT|WIDTH)|3D_MAX_(?:DEPTH|HEIGHT|WIDTH)|_BASE_ADDRESS_ALIGNMENT|_MAX_ARRAY_SIZE|_MAX_BUFFER_SIZE|_PITCH_ALIGNMENT|_SUPPORT)|LINKER_AVAILABLE|LOCAL_MEM_SIZE|LOCAL_MEM_TYPE|MAX_(?:CLOCK_FREQUENCY|COMPUTE_UNITS|CONSTANT_ARGS|CONSTANT_BUFFER_SIZE|GLOBAL_VARIABLE_SIZE|MEM_ALLOC_SIZE|NUM_SUB_GROUPS|ON_DEVICE_(?:EVENTS|QUEUES)|PARAMETER_SIZE|PIPE_ARGS|READ_IMAGE_ARGS|READ_WRITE_IMAGE_ARGS|SAMPLERS|WORK_GROUP_SIZE|WORK_ITEM_DIMENSIONS|WORK_ITEM_SIZES|WRITE_IMAGE_ARGS)|MEM_BASE_ADDR_ALIGN|MIN_DATA_TYPE_ALIGN_SIZE|NAME|NATIVE_VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT)|NOT_(?:AVAILABLE|FOUND)|OPENCL_C_VERSION|PARENT_DEVICE|PARTITION_(?:AFFINITY_DOMAIN|BY_AFFINITY_DOMAIN|BY_COUNTS|BY_COUNTS_LIST_END|EQUALLY|FAILED|MAX_SUB_DEVICES|PROPERTIES|TYPE)|PIPE_MAX_(?:ACTIVE_RESERVATIONS|PACKET_SIZE)|PLATFORM|PREFERRED_(?:GLOBAL_ATOMIC_ALIGNMENT|INTEROP_USER_SYNC|LOCAL_ATOMIC_ALIGNMENT|PLATFORM_ATOMIC_ALIGNMENT|VECTOR_WIDTH_(?:CHAR|DOUBLE|FLOAT|HALF|INT|LONG|SHORT))|PRINTF_BUFFER_SIZE|PROFILE|PROFILING_TIMER_RESOLUTION|QUEUE_(?:ON_(?:DEVICE_(?:MAX_SIZE|PREFERRED_SIZE|PROPERTIES)|HOST_PROPERTIES)|PROPERTIES)|REFERENCE_COUNT|SINGLE_FP_CONFIG|SUB_GROUP_INDEPENDENT_FORWARD_PROGRESS|SVM_(?:ATOMICS|CAPABILITIES|COARSE_GRAIN_BUFFER|FINE_GRAIN_BUFFER|FINE_GRAIN_SYSTEM)|TYPE(?:_ACCELERATOR|_ALL|_CPU|_CUSTOM|_DEFAULT|_GPU)?|VENDOR(?:_ID)?|VERSION)|DRIVER_VERSION|EVENT_(?:COMMAND_(?:EXECUTION_STATUS|QUEUE|TYPE)|CONTEXT|REFERENCE_COUNT)|EXEC_(?:KERNEL|NATIVE_KERNEL|STATUS_ERROR_FOR_EVENTS_IN_WAIT_LIST)|FILTER_(?:LINEAR|NEAREST)|FLOAT|FP_(?:CORRECTLY_ROUNDED_DIVIDE_SQRT|DENORM|FMA|INF_NAN|ROUND_TO_INF|ROUND_TO_NEAREST|ROUND_TO_ZERO|SOFT_FLOAT)|GLOBAL|HALF_FLOAT|IMAGE_(?:ARRAY_SIZE|BUFFER|DEPTH|ELEMENT_SIZE|FORMAT|FORMAT_MISMATCH|FORMAT_NOT_SUPPORTED|HEIGHT|NUM_MIP_LEVELS|NUM_SAMPLES|ROW_PITCH|SLICE_PITCH|WIDTH)|INTENSITY|INVALID_(?:ARG_INDEX|ARG_SIZE|ARG_VALUE|BINARY|BUFFER_SIZE|BUILD_OPTIONS|COMMAND_QUEUE|COMPILER_OPTIONS|CONTEXT|DEVICE|DEVICE_PARTITION_COUNT|DEVICE_QUEUE|DEVICE_TYPE|EVENT|EVENT_WAIT_LIST|GLOBAL_OFFSET|GLOBAL_WORK_SIZE|GL_OBJECT|HOST_PTR|IMAGE_DESCRIPTOR|IMAGE_FORMAT_DESCRIPTOR|IMAGE_SIZE|KERNEL|KERNEL_ARGS|KERNEL_DEFINITION|KERNEL_NAME|LINKER_OPTIONS|MEM_OBJECT|MIP_LEVEL|OPERATION|PIPE_SIZE|PLATFORM|PROGRAM|PROGRAM_EXECUTABLE|PROPERTY|QUEUE_PROPERTIES|SAMPLER|VALUE|WORK_DIMENSION|WORK_GROUP_SIZE|WORK_ITEM_SIZE)|KERNEL_(?:ARG_(?:ACCESS_(?:NONE|QUALIFIER|READ_ONLY|READ_WRITE|WRITE_ONLY)|ADDRESS_(?:CONSTANT|GLOBAL|LOCAL|PRIVATE|QUALIFIER)|INFO_NOT_AVAILABLE|NAME|TYPE_(?:CONST|NAME|NONE|PIPE|QUALIFIER|RESTRICT|VOLATILE))|ATTRIBUTES|COMPILE_NUM_SUB_GROUPS|COMPILE_WORK_GROUP_SIZE|CONTEXT|EXEC_INFO_SVM_FINE_GRAIN_SYSTEM|EXEC_INFO_SVM_PTRS|FUNCTION_NAME|GLOBAL_WORK_SIZE|LOCAL_MEM_SIZE|LOCAL_SIZE_FOR_SUB_GROUP_COUNT|MAX_NUM_SUB_GROUPS|MAX_SUB_GROUP_SIZE_FOR_NDRANGE|NUM_ARGS|PREFERRED_WORK_GROUP_SIZE_MULTIPLE|PRIVATE_MEM_SIZE|PROGRAM|REFERENCE_COUNT|SUB_GROUP_COUNT_FOR_NDRANGE|WORK_GROUP_SIZE)|LINKER_NOT_AVAILABLE|LINK_PROGRAM_FAILURE|LOCAL|LUMINANCE|MAP_(?:FAILURE|READ|WRITE|WRITE_INVALIDATE_REGION)|MEM_(?:ALLOC_HOST_PTR|ASSOCIATED_MEMOBJECT|CONTEXT|COPY_HOST_PTR|COPY_OVERLAP|FLAGS|HOST_NO_ACCESS|HOST_PTR|HOST_READ_ONLY|HOST_WRITE_ONLY|KERNEL_READ_AND_WRITE|MAP_COUNT|OBJECT_(?:ALLOCATION_FAILURE|BUFFER|IMAGE1D|IMAGE1D_ARRAY|IMAGE1D_BUFFER|IMAGE2D|IMAGE2D_ARRAY|IMAGE3D|PIPE)|OFFSET|READ_ONLY|READ_WRITE|REFERENCE_COUNT|SIZE|SVM_ATOMICS|SVM_FINE_GRAIN_BUFFER|TYPE|USES_SVM_POINTER|USE_HOST_PTR|WRITE_ONLY)|MIGRATE_MEM_OBJECT_(?:CONTENT_UNDEFINED|HOST)|MISALIGNED_SUB_BUFFER_OFFSET|NONE|NON_BLOCKING|OUT_OF_(?:HOST_MEMORY|RESOURCES)|PIPE_(?:MAX_PACKETS|PACKET_SIZE)|PLATFORM_(?:EXTENSIONS|HOST_TIMER_RESOLUTION|NAME|PROFILE|VENDOR|VERSION)|PROFILING_(?:COMMAND_(?:COMPLETE|END|QUEUED|START|SUBMIT)|INFO_NOT_AVAILABLE)|PROGRAM_(?:BINARIES|BINARY_SIZES|BINARY_TYPE(?:_COMPILED_OBJECT|_EXECUTABLE|_LIBRARY|_NONE)?|BUILD_(?:GLOBAL_VARIABLE_TOTAL_SIZE|LOG|OPTIONS|STATUS)|CONTEXT|DEVICES|IL|KERNEL_NAMES|NUM_DEVICES|NUM_KERNELS|REFERENCE_COUNT|SOURCE)|QUEUED|QUEUE_(?:CONTEXT|DEVICE|DEVICE_DEFAULT|ON_DEVICE|ON_DEVICE_DEFAULT|OUT_OF_ORDER_EXEC_MODE_ENABLE|PROFILING_ENABLE|PROPERTIES|REFERENCE_COUNT|SIZE)|R|RA|READ_(?:ONLY|WRITE)_CACHE|RG|RGB|RGBA|RGBx|RGx|RUNNING|Rx|SAMPLER_(?:ADDRESSING_MODE|CONTEXT|FILTER_MODE|LOD_MAX|LOD_MIN|MIP_FILTER_MODE|NORMALIZED_COORDS|REFERENCE_COUNT)|(?:UN)?SIGNED_INT(?:8|16|32)|SNORM_INT(?:8|16)|SUBMITTED|SUCCESS|UNORM_INT(?:8|16|24|_101010|_101010_2)|UNORM_SHORT_(?:555|565)|VERSION_(?:1_0|1_1|1_2|2_0|2_1)|sBGRA|sRGB|sRGBA|sRGBx)\b/,alias:"constant"},"function-opencl-host":{pattern:/\bcl(?:BuildProgram|CloneKernel|CompileProgram|Create(?:Buffer|CommandQueue(?:WithProperties)?|Context|ContextFromType|Image|Image2D|Image3D|Kernel|KernelsInProgram|Pipe|ProgramWith(?:Binary|BuiltInKernels|IL|Source)|Sampler|SamplerWithProperties|SubBuffer|SubDevices|UserEvent)|Enqueue(?:(?:Barrier|Marker)(?:WithWaitList)?|Copy(?:Buffer(?:Rect|ToImage)?|Image(?:ToBuffer)?)|(?:Fill|Map)(?:Buffer|Image)|MigrateMemObjects|NDRangeKernel|NativeKernel|(?:Read|Write)(?:Buffer(?:Rect)?|Image)|SVM(?:Free|Map|MemFill|Memcpy|MigrateMem|Unmap)|Task|UnmapMemObject|WaitForEvents)|Finish|Flush|Get(?:CommandQueueInfo|ContextInfo|Device(?:AndHostTimer|IDs|Info)|Event(?:Profiling)?Info|ExtensionFunctionAddress(?:ForPlatform)?|HostTimer|ImageInfo|Kernel(?:ArgInfo|Info|SubGroupInfo|WorkGroupInfo)|MemObjectInfo|PipeInfo|Platform(?:IDs|Info)|Program(?:Build)?Info|SamplerInfo|SupportedImageFormats)|LinkProgram|(?:Release|Retain)(?:CommandQueue|Context|Device|Event|Kernel|MemObject|Program|Sampler)|SVM(?:Alloc|Free)|Set(?:CommandQueueProperty|DefaultDeviceCommandQueue|EventCallback|Kernel|Kernel(?:Arg(?:SVMPointer)?|ExecInfo)|MemObjectDestructorCallback|UserEventStatus)|Unload(?:Platform)?Compiler|WaitForEvents)\b/,alias:"function"}};t.languages.insertBefore("c","keyword",n),t.languages.cpp&&(n["type-opencl-host-cpp"]={pattern:/\b(?:Buffer|BufferGL|BufferRenderGL|CommandQueue|Context|Device|DeviceCommandQueue|EnqueueArgs|Event|Image|Image1D|Image1DArray|Image1DBuffer|Image2D|Image2DArray|Image2DGL|Image3D|Image3DGL|ImageFormat|ImageGL|Kernel|KernelFunctor|LocalSpaceArg|Memory|NDRange|Pipe|Platform|Program|SVMAllocator|SVMTraitAtomic|SVMTraitCoarse|SVMTraitFine|SVMTraitReadOnly|SVMTraitReadWrite|SVMTraitWriteOnly|Sampler|UserEvent)\b/,alias:"keyword"},t.languages.insertBefore("cpp","keyword",n))})(e)}Hi.displayName="openqasm";Hi.aliases=["qasm"];function Hi(e){e.languages.openqasm={comment:/\/\*[\s\S]*?\*\/|\/\/.*/,string:{pattern:/"[^"\r\n\t]*"|'[^'\r\n\t]*'/,greedy:!0},keyword:/\b(?:CX|OPENQASM|U|barrier|boxas|boxto|break|const|continue|ctrl|def|defcal|defcalgrammar|delay|else|end|for|gate|gphase|if|in|include|inv|kernel|lengthof|let|measure|pow|reset|return|rotary|stretchinf|while)\b|#pragma\b/,"class-name":/\b(?:angle|bit|bool|creg|fixed|float|int|length|qreg|qubit|stretch|uint)\b/,function:/\b(?:cos|exp|ln|popcount|rotl|rotr|sin|sqrt|tan)\b(?=\s*\()/,constant:/\b(?:euler|pi|tau)\b|π|𝜏|ℇ/,number:{pattern:/(^|[^.\w$])(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?(?:dt|ns|us|µs|ms|s)?/i,lookbehind:!0},operator:/->|>>=?|<<=?|&&|\|\||\+\+|--|[!=<>&|~^+\-*/%]=?|@/,punctuation:/[(){}\[\];,:.]/},e.languages.qasm=e.languages.openqasm}$i.displayName="oz";$i.aliases=[];function $i(e){e.languages.oz={comment:{pattern:/\/\*[\s\S]*?\*\/|%.*/,greedy:!0},string:{pattern:/"(?:[^"\\]|\\[\s\S])*"/,greedy:!0},atom:{pattern:/'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,alias:"builtin"},keyword:/\$|\[\]|\b(?:_|at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,function:[/\b[a-z][A-Za-z\d]*(?=\()/,{pattern:/(\{)[A-Z][A-Za-z\d]*\b/,lookbehind:!0}],number:/\b(?:0[bx][\da-f]+|\d+(?:\.\d*)?(?:e~?\d+)?)\b|&(?:[^\\]|\\(?:\d{3}|.))/i,variable:/`(?:[^`\\]|\\.)+`/,"attr-name":/\b\w+(?=[ \t]*:(?![:=]))/,operator:/:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,punctuation:/[\[\](){}.:;?]/}}zi.displayName="parigp";zi.aliases=[];function zi(e){e.languages.parigp={comment:/\/\*[\s\S]*?\*\/|\\\\.*/,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"/,greedy:!0},keyword:(function(){var t=["breakpoint","break","dbg_down","dbg_err","dbg_up","dbg_x","forcomposite","fordiv","forell","forpart","forprime","forstep","forsubgroup","forvec","for","iferr","if","local","my","next","return","until","while"];return t=t.map(function(n){return n.split("").join(" *")}).join("|"),RegExp("\\b(?:"+t+")\\b")})(),function:/\b\w(?:[\w ]*\w)?(?= *\()/,number:{pattern:/((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i,lookbehind:!0},operator:/\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,punctuation:/[\[\]{}().,:;|]/}}Wi.displayName="parser";Wi.aliases=[];function Wi(e){e.register(re),(function(t){var n=t.languages.parser=t.languages.extend("markup",{keyword:{pattern:/(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,lookbehind:!0},variable:{pattern:/(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{punctuation:/\.|:+/}},function:{pattern:/(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,lookbehind:!0,inside:{keyword:{pattern:/(^@)(?:GET_|SET_)/,lookbehind:!0},punctuation:/\.|:+/}},escape:{pattern:/\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,alias:"builtin"},punctuation:/[\[\](){};]/});n=t.languages.insertBefore("parser","keyword",{"parser-comment":{pattern:/(\s)#.*/,lookbehind:!0,alias:"comment"},expression:{pattern:/(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,greedy:!0,lookbehind:!0,inside:{string:{pattern:/(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,lookbehind:!0},keyword:n.keyword,variable:n.variable,function:n.function,boolean:/\b(?:false|true)\b/,number:/\b(?:0x[a-f\d]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?)\b/i,escape:n.escape,operator:/[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,punctuation:n.punctuation}}}),t.languages.insertBefore("inside","punctuation",{expression:n.expression,keyword:n.keyword,variable:n.variable,function:n.function,escape:n.escape,"parser-punctuation":{pattern:n.punctuation,alias:"punctuation"}},n.tag.inside["attr-value"])})(e)}Vi.displayName="pascal";Vi.aliases=["objectpascal"];function Vi(e){e.languages.pascal={directive:{pattern:/\{\$[\s\S]*?\}/,greedy:!0,alias:["marco","property"]},comment:{pattern:/\(\*[\s\S]*?\*\)|\{[\s\S]*?\}|\/\/.*/,greedy:!0},string:{pattern:/(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i,greedy:!0},asm:{pattern:/(\basm\b)[\s\S]+?(?=\bend\s*[;[])/i,lookbehind:!0,greedy:!0,inside:null},keyword:[{pattern:/(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,lookbehind:!0}],number:[/(?:[&%]\d+|\$[a-f\d]+)/i,/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],operator:[/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/,{pattern:/(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,lookbehind:!0}],punctuation:/\(\.|\.\)|[()\[\]:;,.]/},e.languages.pascal.asm.inside=e.languages.extend("pascal",{asm:void 0,keyword:void 0,operator:void 0}),e.languages.objectpascal=e.languages.pascal}ji.displayName="pascaligo";ji.aliases=[];function ji(e){(function(t){var n=/\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source,r=/(?:\b\w+(?:<braces>)?|<braces>)/.source.replace(/<braces>/g,function(){return n}),a=t.languages.pascaligo={comment:/\(\*[\s\S]+?\*\)|\/\/.*/,string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,greedy:!0},"class-name":[{pattern:RegExp(/(\btype\s+\w+\s+is\s+)<type>/.source.replace(/<type>/g,function(){return r}),"i"),lookbehind:!0,inside:null},{pattern:RegExp(/<type>(?=\s+is\b)/.source.replace(/<type>/g,function(){return r}),"i"),inside:null},{pattern:RegExp(/(:\s*)<type>/.source.replace(/<type>/g,function(){return r})),lookbehind:!0,inside:null}],keyword:{pattern:/(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,lookbehind:!0},boolean:{pattern:/(^|[^&])\b(?:False|True)\b/i,lookbehind:!0},builtin:{pattern:/(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,lookbehind:!0},function:/\b\w+(?=\s*\()/,number:[/%[01]+|&[0-7]+|\$[a-f\d]+/i,/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i],operator:/->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,punctuation:/\(\.|\.\)|[()\[\]:;,.{}]/},i=["comment","keyword","builtin","operator","punctuation"].reduce(function(o,s){return o[s]=a[s],o},{});a["class-name"].forEach(function(o){o.inside=i})})(e)}qi.displayName="psl";qi.aliases=[];function qi(e){e.languages.psl={comment:{pattern:/#.*/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0,inside:{symbol:/\\[ntrbA-Z"\\]/}},"heredoc-string":{pattern:/<<<([a-zA-Z_]\w*)[\r\n](?:.*[\r\n])*?\1\b/,alias:"string",greedy:!0},keyword:/\b(?:__multi|__single|case|default|do|else|elsif|exit|export|for|foreach|function|if|last|line|local|next|requires|return|switch|until|while|word)\b/,constant:/\b(?:ALARM|CHART_ADD_GRAPH|CHART_DELETE_GRAPH|CHART_DESTROY|CHART_LOAD|CHART_PRINT|EOF|OFFLINE|OK|PSL_PROF_LOG|R_CHECK_HORIZ|R_CHECK_VERT|R_CLICKER|R_COLUMN|R_FRAME|R_ICON|R_LABEL|R_LABEL_CENTER|R_LIST_MULTIPLE|R_LIST_MULTIPLE_ND|R_LIST_SINGLE|R_LIST_SINGLE_ND|R_MENU|R_POPUP|R_POPUP_SCROLLED|R_RADIO_HORIZ|R_RADIO_VERT|R_ROW|R_SCALE_HORIZ|R_SCALE_VERT|R_SEP_HORIZ|R_SEP_VERT|R_SPINNER|R_TEXT_FIELD|R_TEXT_FIELD_LABEL|R_TOGGLE|TRIM_LEADING|TRIM_LEADING_AND_TRAILING|TRIM_REDUNDANT|TRIM_TRAILING|VOID|WARN)\b/,boolean:/\b(?:FALSE|False|NO|No|TRUE|True|YES|Yes|false|no|true|yes)\b/,variable:/\b(?:PslDebug|errno|exit_status)\b/,builtin:{pattern:/\b(?:PslExecute|PslFunctionCall|PslFunctionExists|PslSetOptions|_snmp_debug|acos|add_diary|annotate|annotate_get|ascii_to_ebcdic|asctime|asin|atan|atexit|batch_set|blackout|cat|ceil|chan_exists|change_state|close|code_cvt|cond_signal|cond_wait|console_type|convert_base|convert_date|convert_locale_date|cos|cosh|create|date|dcget_text|destroy|destroy_lock|dget_text|difference|dump_hist|ebcdic_to_ascii|encrypt|event_archive|event_catalog_get|event_check|event_query|event_range_manage|event_range_query|event_report|event_schedule|event_trigger|event_trigger2|execute|exists|exp|fabs|file|floor|fmod|fopen|fseek|ftell|full_discovery|get|get_chan_info|get_ranges|get_text|get_vars|getenv|gethostinfo|getpid|getpname|grep|history|history_get_retention|in_transition|index|int|internal|intersection|is_var|isnumber|join|kill|length|lines|lock|lock_info|log|log10|loge|matchline|msg_check|msg_get_format|msg_get_severity|msg_printf|msg_sprintf|ntharg|nthargf|nthline|nthlinef|num_bytes|num_consoles|pconfig|popen|poplines|pow|print|printf|proc_exists|process|random|read|readln|refresh_parameters|remote_check|remote_close|remote_event_query|remote_event_trigger|remote_file_send|remote_open|remove|replace|rindex|sec_check_priv|sec_store_get|sec_store_set|set|set_alarm_ranges|set_locale|share|sin|sinh|sleep|snmp_agent_config|snmp_agent_start|snmp_agent_stop|snmp_close|snmp_config|snmp_get|snmp_get_next|snmp_h_get|snmp_h_get_next|snmp_h_set|snmp_open|snmp_set|snmp_trap_ignore|snmp_trap_listen|snmp_trap_raise_std_trap|snmp_trap_receive|snmp_trap_register_im|snmp_trap_send|snmp_walk|sopen|sort|splitline|sprintf|sqrt|srandom|str_repeat|strcasecmp|subset|substr|system|tail|tan|tanh|text_domain|time|tmpnam|tolower|toupper|trace_psl_process|trim|union|unique|unlock|unset|va_arg|va_start|write)\b/,alias:"builtin-function"},"foreach-variable":{pattern:/(\bforeach\s+(?:(?:\w+\b|"(?:\\.|[^\\"])*")\s+){0,2})[_a-zA-Z]\w*(?=\s*\()/,lookbehind:!0,greedy:!0},function:/\b[_a-z]\w*\b(?=\s*\()/i,number:/\b(?:0x[0-9a-f]+|\d+(?:\.\d+)?)\b/i,operator:/--|\+\+|&&=?|\|\|=?|<<=?|>>=?|[=!]~|[-+*/%&|^!=<>]=?|\.|[:?]/,punctuation:/[(){}\[\];,]/}}Yi.displayName="pcaxis";Yi.aliases=["px"];function Yi(e){e.languages.pcaxis={string:/"[^"]*"/,keyword:{pattern:/((?:^|;)\s*)[-A-Z\d]+(?:\s*\[[-\w]+\])?(?:\s*\("[^"]*"(?:,\s*"[^"]*")*\))?(?=\s*=)/,lookbehind:!0,greedy:!0,inside:{keyword:/^[-A-Z\d]+/,language:{pattern:/^(\s*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/^\[|\]$/,property:/[-\w]+/}},"sub-key":{pattern:/^(\s*)\S[\s\S]*/,lookbehind:!0,inside:{parameter:{pattern:/"[^"]*"/,alias:"property"},punctuation:/^\(|\)$|,/}}}},operator:/=/,tlist:{pattern:/TLIST\s*\(\s*\w+(?:(?:\s*,\s*"[^"]*")+|\s*,\s*"[^"]*"-"[^"]*")?\s*\)/,greedy:!0,inside:{function:/^TLIST/,property:{pattern:/^(\s*\(\s*)\w+/,lookbehind:!0},string:/"[^"]*"/,punctuation:/[(),]/,operator:/-/}},punctuation:/[;,]/,number:{pattern:/(^|\s)\d+(?:\.\d+)?(?!\S)/,lookbehind:!0},boolean:/NO|YES/},e.languages.px=e.languages.pcaxis}Ki.displayName="peoplecode";Ki.aliases=["pcode"];function Ki(e){e.languages.peoplecode={comment:RegExp([/\/\*[\s\S]*?\*\//.source,/\bREM[^;]*;/.source,/<\*(?:[^<*]|\*(?!>)|<(?!\*)|<\*(?:(?!\*>)[\s\S])*\*>)*\*>/.source,/\/\+[\s\S]*?\+\//.source].join("|")),string:{pattern:/'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,greedy:!0},variable:/%\w+/,"function-definition":{pattern:/((?:^|[^\w-])(?:function|method)\s+)\w+/i,lookbehind:!0,alias:"function"},"class-name":{pattern:/((?:^|[^-\w])(?:as|catch|class|component|create|extends|global|implements|instance|local|of|property|returns)\s+)\w+(?::\w+)*/i,lookbehind:!0,inside:{punctuation:/:/}},keyword:/\b(?:abstract|alias|as|catch|class|component|constant|create|declare|else|end-(?:class|evaluate|for|function|get|if|method|set|try|while)|evaluate|extends|for|function|get|global|if|implements|import|instance|library|local|method|null|of|out|peopleCode|private|program|property|protected|readonly|ref|repeat|returns?|set|step|then|throw|to|try|until|value|when(?:-other)?|while)\b/i,"operator-keyword":{pattern:/\b(?:and|not|or)\b/i,alias:"operator"},function:/[_a-z]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/i,number:/\b\d+(?:\.\d+)?\b/,operator:/<>|[<>]=?|!=|\*\*|[-+*/|=@]/,punctuation:/[:.;,()[\]]/},e.languages.pcode=e.languages.peoplecode}Xi.displayName="perl";Xi.aliases=[];function Xi(e){(function(t){var n=/(?:\((?:[^()\\]|\\[\s\S])*\)|\{(?:[^{}\\]|\\[\s\S])*\}|\[(?:[^[\]\\]|\\[\s\S])*\]|<(?:[^<>\\]|\\[\s\S])*>)/.source;t.languages.perl={comment:[{pattern:/(^\s*)=\w[\s\S]*?=cut.*/m,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\$])#.*/,lookbehind:!0,greedy:!0}],string:[{pattern:RegExp(/\b(?:q|qq|qw|qx)(?![a-zA-Z0-9])\s*/.source+"(?:"+[/([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,/([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,n].join("|")+")"),greedy:!0},{pattern:/("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,greedy:!0},{pattern:/'(?:[^'\\\r\n]|\\.)*'/,greedy:!0}],regex:[{pattern:RegExp(/\b(?:m|qr)(?![a-zA-Z0-9])\s*/.source+"(?:"+[/([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/.source,/([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,n].join("|")+")"+/[msixpodualngc]*/.source),greedy:!0},{pattern:RegExp(/(^|[^-])\b(?:s|tr|y)(?![a-zA-Z0-9])\s*/.source+"(?:"+[/([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2/.source,/([a-zA-Z0-9])(?:(?!\3)[^\\]|\\[\s\S])*\3(?:(?!\3)[^\\]|\\[\s\S])*\3/.source,n+/\s*/.source+n].join("|")+")"+/[msixpodualngcer]*/.source),lookbehind:!0,greedy:!0},{pattern:/\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|x|xor)\b))/,greedy:!0}],variable:[/[&*$@%]\{\^[A-Z]+\}/,/[&*$@%]\^[A-Z_]/,/[&*$@%]#?(?=\{)/,/[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+(?![\w$]))+(?:::)*/,/[&*$@%]\d+/,/(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],filehandle:{pattern:/<(?![<=])\S*?>|\b_\b/,alias:"symbol"},"v-string":{pattern:/v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,alias:"string"},function:{pattern:/(\bsub[ \t]+)\w+/,lookbehind:!0},keyword:/\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,operator:/-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)\b/,punctuation:/[{}[\];(),:]/}})(e)}Zi.displayName="phpdoc";Zi.aliases=[];function Zi(e){e.register(Ye),e.register(qe),(function(t){var n=/(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;t.languages.phpdoc=t.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+n+"\\s+)?)\\$\\w+"),lookbehind:!0}}),t.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+n),lookbehind:!0,inside:{keyword:/\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,punctuation:/[|\\[\]()]/}}]}),t.languages.javadoclike.addSupport("php",t.languages.phpdoc)})(e)}Qi.displayName="php-extras";Qi.aliases=[];function Qi(e){e.register(qe),e.languages.insertBefore("php","variable",{this:{pattern:/\$this\b/,alias:"keyword"},global:/\$(?:GLOBALS|HTTP_RAW_POST_DATA|_(?:COOKIE|ENV|FILES|GET|POST|REQUEST|SERVER|SESSION)|argc|argv|http_response_header|php_errormsg)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/\b(?:parent|self|static)\b/,punctuation:/::|\\/}}})}Ji.displayName="plant-uml";Ji.aliases=["plantuml"];function Ji(e){(function(t){var n=/\$\w+|%[a-z]+%/,r=/\[[^[\]]*\]/.source,a=/(?:[drlu]|do|down|le|left|ri|right|up)/.source,i="(?:-+"+a+"-+|\\.+"+a+"\\.+|-+(?:"+r+"-*)?|"+r+"-+|\\.+(?:"+r+"\\.*)?|"+r+"\\.+)",o=/(?:<{1,2}|\/{1,2}|\\{1,2}|<\||[#*^+}xo])/.source,s=/(?:>{1,2}|\/{1,2}|\\{1,2}|\|>|[#*^+{xo])/.source,u=/[[?]?[ox]?/.source,l=/[ox]?[\]?]?/.source,c=u+"(?:"+i+s+"|"+o+i+"(?:"+s+")?)"+l;t.languages["plant-uml"]={comment:{pattern:/(^[ \t]*)(?:'.*|\/'[\s\S]*?'\/)/m,lookbehind:!0,greedy:!0},preprocessor:{pattern:/(^[ \t]*)!.*/m,lookbehind:!0,greedy:!0,alias:"property",inside:{variable:n}},delimiter:{pattern:/(^[ \t]*)@(?:end|start)uml\b/m,lookbehind:!0,greedy:!0,alias:"punctuation"},arrow:{pattern:RegExp(/(^|[^-.<>?|\\[\]ox])/.source+c+/(?![-.<>?|\\\]ox])/.source),lookbehind:!0,greedy:!0,alias:"operator",inside:{expression:{pattern:/(\[)[^[\]]+(?=\])/,lookbehind:!0,inside:null},punctuation:/\[(?=$|\])|^\]/}},string:{pattern:/"[^"]*"/,greedy:!0},text:{pattern:/(\[[ \t]*[\r\n]+(?![\r\n]))[^\]]*(?=\])/,lookbehind:!0,greedy:!0,alias:"string"},keyword:[{pattern:/^([ \t]*)(?:abstract\s+class|end\s+(?:box|fork|group|merge|note|ref|split|title)|(?:fork|split)(?:\s+again)?|activate|actor|agent|alt|annotation|artifact|autoactivate|autonumber|backward|binary|boundary|box|break|caption|card|case|circle|class|clock|cloud|collections|component|concise|control|create|critical|database|deactivate|destroy|detach|diamond|else|elseif|end|end[hr]note|endif|endswitch|endwhile|entity|enum|file|folder|footer|frame|group|[hr]?note|header|hexagon|hide|if|interface|label|legend|loop|map|namespace|network|newpage|node|nwdiag|object|opt|package|page|par|participant|person|queue|rectangle|ref|remove|repeat|restore|return|robust|scale|set|show|skinparam|stack|start|state|stop|storage|switch|title|together|usecase|usecase\/|while)(?=\s|$)/m,lookbehind:!0,greedy:!0},/\b(?:elseif|equals|not|while)(?=\s*\()/,/\b(?:as|is|then)\b/],divider:{pattern:/^==.+==$/m,greedy:!0,alias:"important"},time:{pattern:/@(?:\d+(?:[:/]\d+){2}|[+-]?\d+|:[a-z]\w*(?:[+-]\d+)?)\b/i,greedy:!0,alias:"number"},color:{pattern:/#(?:[a-z_]+|[a-fA-F0-9]+)\b/,alias:"symbol"},variable:n,punctuation:/[:,;()[\]{}]|\.{3}/},t.languages["plant-uml"].arrow.inside.expression.inside=t.languages["plant-uml"],t.languages.plantuml=t.languages["plant-uml"]})(e)}eo.displayName="plsql";eo.aliases=[];function eo(e){e.register(dt),e.languages.plsql=e.languages.extend("sql",{comment:{pattern:/\/\*[\s\S]*?\*\/|--.*/,greedy:!0},keyword:/\b(?:A|ACCESSIBLE|ADD|AGENT|AGGREGATE|ALL|ALTER|AND|ANY|ARRAY|AS|ASC|AT|ATTRIBUTE|AUTHID|AVG|BEGIN|BETWEEN|BFILE_BASE|BINARY|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BULK|BY|BYTE|C|CALL|CALLING|CASCADE|CASE|CHAR|CHARACTER|CHARSET|CHARSETFORM|CHARSETID|CHAR_BASE|CHECK|CLOB_BASE|CLONE|CLOSE|CLUSTER|CLUSTERS|COLAUTH|COLLECT|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPILED|COMPRESS|CONNECT|CONSTANT|CONSTRUCTOR|CONTEXT|CONTINUE|CONVERT|COUNT|CRASH|CREATE|CREDENTIAL|CURRENT|CURSOR|CUSTOMDATUM|DANGLING|DATA|DATE|DATE_BASE|DAY|DECLARE|DEFAULT|DEFINE|DELETE|DESC|DETERMINISTIC|DIRECTORY|DISTINCT|DOUBLE|DROP|DURATION|ELEMENT|ELSE|ELSIF|EMPTY|END|ESCAPE|EXCEPT|EXCEPTION|EXCEPTIONS|EXCLUSIVE|EXECUTE|EXISTS|EXIT|EXTERNAL|FETCH|FINAL|FIRST|FIXED|FLOAT|FOR|FORALL|FORCE|FROM|FUNCTION|GENERAL|GOTO|GRANT|GROUP|HASH|HAVING|HEAP|HIDDEN|HOUR|IDENTIFIED|IF|IMMEDIATE|IMMUTABLE|IN|INCLUDING|INDEX|INDEXES|INDICATOR|INDICES|INFINITE|INSERT|INSTANTIABLE|INT|INTERFACE|INTERSECT|INTERVAL|INTO|INVALIDATE|IS|ISOLATION|JAVA|LANGUAGE|LARGE|LEADING|LENGTH|LEVEL|LIBRARY|LIKE|LIKE2|LIKE4|LIKEC|LIMIT|LIMITED|LOCAL|LOCK|LONG|LOOP|MAP|MAX|MAXLEN|MEMBER|MERGE|MIN|MINUS|MINUTE|MOD|MODE|MODIFY|MONTH|MULTISET|MUTABLE|NAME|NAN|NATIONAL|NATIVE|NCHAR|NEW|NOCOMPRESS|NOCOPY|NOT|NOWAIT|NULL|NUMBER_BASE|OBJECT|OCICOLL|OCIDATE|OCIDATETIME|OCIDURATION|OCIINTERVAL|OCILOBLOCATOR|OCINUMBER|OCIRAW|OCIREF|OCIREFCURSOR|OCIROWID|OCISTRING|OCITYPE|OF|OLD|ON|ONLY|OPAQUE|OPEN|OPERATOR|OPTION|OR|ORACLE|ORADATA|ORDER|ORGANIZATION|ORLANY|ORLVARY|OTHERS|OUT|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETER|PARAMETERS|PARENT|PARTITION|PASCAL|PERSISTABLE|PIPE|PIPELINED|PLUGGABLE|POLYMORPHIC|PRAGMA|PRECISION|PRIOR|PRIVATE|PROCEDURE|PUBLIC|RAISE|RANGE|RAW|READ|RECORD|REF|REFERENCE|RELIES_ON|REM|REMAINDER|RENAME|RESOURCE|RESULT|RESULT_CACHE|RETURN|RETURNING|REVERSE|REVOKE|ROLLBACK|ROW|SAMPLE|SAVE|SAVEPOINT|SB1|SB2|SB4|SECOND|SEGMENT|SELECT|SELF|SEPARATE|SEQUENCE|SERIALIZABLE|SET|SHARE|SHORT|SIZE|SIZE_T|SOME|SPARSE|SQL|SQLCODE|SQLDATA|SQLNAME|SQLSTATE|STANDARD|START|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUM|SYNONYM|TABAUTH|TABLE|TDO|THE|THEN|TIME|TIMESTAMP|TIMEZONE_ABBR|TIMEZONE_HOUR|TIMEZONE_MINUTE|TIMEZONE_REGION|TO|TRAILING|TRANSACTION|TRANSACTIONAL|TRUSTED|TYPE|UB1|UB2|UB4|UNDER|UNION|UNIQUE|UNPLUG|UNSIGNED|UNTRUSTED|UPDATE|USE|USING|VALIST|VALUE|VALUES|VARIABLE|VARIANCE|VARRAY|VARYING|VIEW|VIEWS|VOID|WHEN|WHERE|WHILE|WITH|WORK|WRAPPED|WRITE|YEAR|ZONE)\b/i,operator:/:=?|=>|[<>^~!]=|\.\.|\|\||\*\*|[-+*/%<>=@]/}),e.languages.insertBefore("plsql","operator",{label:{pattern:/<<\s*\w+\s*>>/,alias:"symbol"}})}to.displayName="powerquery";to.aliases=["mscript","pq"];function to(e){e.languages.powerquery={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0},"quoted-identifier":{pattern:/#"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},string:{pattern:/(?:#!)?"(?:[^"\r\n]|"")*"(?!")/,greedy:!0},constant:[/\bDay\.(?:Friday|Monday|Saturday|Sunday|Thursday|Tuesday|Wednesday)\b/,/\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/,/\bOccurrence\.(?:All|First|Last)\b/,/\bOrder\.(?:Ascending|Descending)\b/,/\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/,/\bMissingField\.(?:Error|Ignore|UseNull)\b/,/\bQuoteStyle\.(?:Csv|None)\b/,/\bJoinKind\.(?:FullOuter|Inner|LeftAnti|LeftOuter|RightAnti|RightOuter)\b/,/\bGroupKind\.(?:Global|Local)\b/,/\bExtraValues\.(?:Error|Ignore|List)\b/,/\bJoinAlgorithm\.(?:Dynamic|LeftHash|LeftIndex|PairwiseHash|RightHash|RightIndex|SortMerge)\b/,/\bJoinSide\.(?:Left|Right)\b/,/\bPrecision\.(?:Decimal|Double)\b/,/\bRelativePosition\.From(?:End|Start)\b/,/\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf16|Utf8|Windows)\b/,/\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Function|Int16|Int32|Int64|Int8|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/,/\bnull\b/],boolean:/\b(?:false|true)\b/,keyword:/\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,function:{pattern:/(^|[^#\w.])[a-z_][\w.]*(?=\s*\()/i,lookbehind:!0},"data-type":{pattern:/\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time)\b/,alias:"class-name"},number:{pattern:/\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i,lookbehind:!0},operator:/[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/,punctuation:/[,;\[\](){}]/},e.languages.pq=e.languages.powerquery,e.languages.mscript=e.languages.powerquery}no.displayName="powershell";no.aliases=[];function no(e){(function(t){var n=t.languages.powershell={comment:[{pattern:/(^|[^`])<#[\s\S]*?#>/,lookbehind:!0},{pattern:/(^|[^`])#.*/,lookbehind:!0}],string:[{pattern:/"(?:`[\s\S]|[^`"])*"/,greedy:!0,inside:null},{pattern:/'(?:[^']|'')*'/,greedy:!0}],namespace:/\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,boolean:/\$(?:false|true)\b/i,variable:/\$\w+\b/,function:[/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],keyword:/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,operator:{pattern:/(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,lookbehind:!0},punctuation:/[|{}[\];(),.]/};n.string[0].inside={function:{pattern:/(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,lookbehind:!0,inside:n},boolean:n.boolean,variable:n.variable}})(e)}ro.displayName="processing";ro.aliases=[];function ro(e){e.register(W),e.languages.processing=e.languages.extend("clike",{keyword:/\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,function:/\b\w+(?=\s*\()/,operator:/<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/}),e.languages.insertBefore("processing","number",{constant:/\b(?!XML\b)[A-Z][A-Z\d_]+\b/,type:{pattern:/\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,alias:"class-name"}})}ao.displayName="prolog";ao.aliases=[];function ao(e){e.languages.prolog={comment:{pattern:/\/\*[\s\S]*?\*\/|%.*/,greedy:!0},string:{pattern:/(["'])(?:\1\1|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1(?!\1)/,greedy:!0},builtin:/\b(?:fx|fy|xf[xy]?|yfx?)\b/,function:/\b[a-z]\w*(?:(?=\()|\/\d+)/,number:/\b\d+(?:\.\d*)?/,operator:/[:\\=><\-?*@\/;+^|!$.]+|\b(?:is|mod|not|xor)\b/,punctuation:/[(){}\[\],]/}}io.displayName="promql";io.aliases=[];function io(e){(function(t){var n=["sum","min","max","avg","group","stddev","stdvar","count","count_values","bottomk","topk","quantile"],r=["on","ignoring","group_right","group_left","by","without"],a=["offset"],i=n.concat(r,a);t.languages.promql={comment:{pattern:/(^[ \t]*)#.*/m,lookbehind:!0},"vector-match":{pattern:new RegExp("((?:"+r.join("|")+")\\s*)\\([^)]*\\)"),lookbehind:!0,inside:{"label-key":{pattern:/\b[^,]+\b/,alias:"attr-name"},punctuation:/[(),]/}},"context-labels":{pattern:/\{[^{}]*\}/,inside:{"label-key":{pattern:/\b[a-z_]\w*(?=\s*(?:=|![=~]))/,alias:"attr-name"},"label-value":{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0,alias:"attr-value"},punctuation:/\{|\}|=~?|![=~]|,/}},"context-range":[{pattern:/\[[\w\s:]+\]/,inside:{punctuation:/\[|\]|:/,"range-duration":{pattern:/\b(?:\d+(?:[smhdwy]|ms))+\b/i,alias:"number"}}},{pattern:/(\boffset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b(?:\d+(?:[smhdwy]|ms))+\b/i,alias:"number"}}}],keyword:new RegExp("\\b(?:"+i.join("|")+")\\b","i"),function:/\b[a-z_]\w*(?=\s*\()/i,number:/[-+]?(?:(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[-+]?\d+)?\b|\b(?:0x[0-9a-f]+|nan|inf)\b)/i,operator:/[\^*/%+-]|==|!=|<=|<|>=|>|\b(?:and|or|unless)\b/i,punctuation:/[{};()`,.[\]]/}})(e)}oo.displayName="properties";oo.aliases=[];function oo(e){e.languages.properties={comment:/^[ \t]*[#!].*$/m,value:{pattern:/(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?: *[=:] *(?! )| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,lookbehind:!0,alias:"attr-value"},key:{pattern:/^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+(?= *[=:]| )/m,alias:"attr-name"},punctuation:/[=:]/}}so.displayName="protobuf";so.aliases=[];function so(e){e.register(W),(function(t){var n=/\b(?:bool|bytes|double|s?fixed(?:32|64)|float|[su]?int(?:32|64)|string)\b/;t.languages.protobuf=t.languages.extend("clike",{"class-name":[{pattern:/(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,lookbehind:!0},{pattern:/(\b(?:rpc\s+\w+|returns)\s*\(\s*(?:stream\s+)?)\.?[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s*\))/,lookbehind:!0}],keyword:/\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|returns|rpc(?=\s+\w)|service|stream|syntax|to)\b(?!\s*=\s*\d)/,function:/\b[a-z_]\w*(?=\s*\()/i}),t.languages.insertBefore("protobuf","operator",{map:{pattern:/\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[a-z_]\w*\s*[=;])/i,alias:"class-name",inside:{punctuation:/[<>.,]/,builtin:n}},builtin:n,"positional-class-name":{pattern:/(?:\b|\B\.)[a-z_]\w*(?:\.[a-z_]\w*)*(?=\s+[a-z_]\w*\s*[=;])/i,alias:"class-name",inside:{punctuation:/\./}},annotation:{pattern:/(\[\s*)[a-z_]\w*(?=\s*=)/i,lookbehind:!0}})})(e)}lo.displayName="stylus";lo.aliases=[];function lo(e){(function(t){var n={pattern:/(\b\d+)(?:%|[a-z]+)/,lookbehind:!0},r={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0},a={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},url:{pattern:/\burl\((["']?).*?\1\)/i,greedy:!0},string:{pattern:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,greedy:!0},interpolation:null,func:null,important:/\B!(?:important|optional)\b/i,keyword:{pattern:/(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,lookbehind:!0},hexcode:/#[\da-f]{3,6}/i,color:[/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:n,number:r,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:n,boolean:/\b(?:false|true)\b/,operator:[/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],number:r,punctuation:/[{}()\[\];:,]/};a.interpolation={pattern:/\{[^\r\n}:]+\}/,alias:"variable",inside:{delimiter:{pattern:/^\{|\}$/,alias:"punctuation"},rest:a}},a.func={pattern:/[\w-]+\([^)]*\).*/,inside:{function:/^[^(]+/,rest:a}},t.languages.stylus={"atrule-declaration":{pattern:/(^[ \t]*)@.+/m,lookbehind:!0,inside:{atrule:/^@[\w-]+/,rest:a}},"variable-declaration":{pattern:/(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,lookbehind:!0,inside:{variable:/^\S+/,rest:a}},statement:{pattern:/(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,lookbehind:!0,inside:{keyword:/^\S+/,rest:a}},"property-declaration":{pattern:/((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,lookbehind:!0,inside:{property:{pattern:/^[^\s:]+/,inside:{interpolation:a.interpolation}},rest:a}},selector:{pattern:/(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,lookbehind:!0,inside:{interpolation:a.interpolation,comment:a.comment,punctuation:/[{},]/}},func:a.func,string:a.string,comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0,greedy:!0},interpolation:a.interpolation,punctuation:/[{}()\[\];:.]/}})(e)}uo.displayName="twig";uo.aliases=[];function uo(e){e.register(oe),e.languages.twig={comment:/^\{#[\s\S]*?#\}$/,"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/},e.hooks.add("before-tokenize",function(t){if(t.language==="twig"){var n=/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g;e.languages["markup-templating"].buildPlaceholders(t,"twig",n)}}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"twig")})}co.displayName="pug";co.aliases=[];function co(e){e.register(ie),e.register(re),(function(t){t.languages.pug={comment:{pattern:/(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,lookbehind:!0},"multiline-script":{pattern:/(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:t.languages.javascript},filter:{pattern:/(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"},text:/\S[\s\S]*/}},"multiline-plain-text":{pattern:/(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m,lookbehind:!0},markup:{pattern:/(^[\t ]*)<.+/m,lookbehind:!0,inside:t.languages.markup},doctype:{pattern:/((?:^|\n)[\t ]*)doctype(?: .+)?/,lookbehind:!0},"flow-control":{pattern:/(^[\t ]*)(?:case|default|each|else|if|unless|when|while)\b(?: .+)?/m,lookbehind:!0,inside:{each:{pattern:/^each .+? in\b/,inside:{keyword:/\b(?:each|in)\b/,punctuation:/,/}},branch:{pattern:/^(?:case|default|else|if|unless|when|while)\b/,alias:"keyword"},rest:t.languages.javascript}},keyword:{pattern:/(^[\t ]*)(?:append|block|extends|include|prepend)\b.+/m,lookbehind:!0},mixin:[{pattern:/(^[\t ]*)mixin .+/m,lookbehind:!0,inside:{keyword:/^mixin/,function:/\w+(?=\s*\(|\s*$)/,punctuation:/[(),.]/}},{pattern:/(^[\t ]*)\+.+/m,lookbehind:!0,inside:{name:{pattern:/^\+\w+/,alias:"function"},rest:t.languages.javascript}}],script:{pattern:/(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m,lookbehind:!0,inside:t.languages.javascript},"plain-text":{pattern:/(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,lookbehind:!0},tag:{pattern:/(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,lookbehind:!0,inside:{attributes:[{pattern:/&[^(]+\([^)]+\)/,inside:t.languages.javascript},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/,lookbehind:!0,inside:t.languages.javascript},"attr-name":/[\w-]+(?=\s*!?=|\s*[,)])/,punctuation:/[!=(),]+/}}],punctuation:/:/,"attr-id":/#[\w\-]+/,"attr-class":/\.[\w\-]+/}},code:[{pattern:/(^[\t ]*(?:-|!?=)).+/m,lookbehind:!0,inside:t.languages.javascript}],punctuation:/[.\-!=|]+/};for(var n=/(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/.source,r=[{filter:"atpl",language:"twig"},{filter:"coffee",language:"coffeescript"},"ejs","handlebars","less","livescript","markdown",{filter:"sass",language:"scss"},"stylus"],a={},i=0,o=r.length;i<o;i++){var s=r[i];s=typeof s=="string"?{filter:s,language:s}:s,t.languages[s.language]&&(a["filter-"+s.filter]={pattern:RegExp(n.replace("<filter_name>",function(){return s.filter}),"m"),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"variable"},text:{pattern:/\S[\s\S]*/,alias:[s.language,"language-"+s.language],inside:t.languages[s.language]}}})}t.languages.insertBefore("pug","filter",a)})(e)}po.displayName="puppet";po.aliases=[];function po(e){(function(t){t.languages.puppet={heredoc:[{pattern:/(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,lookbehind:!0,alias:"string",inside:{punctuation:/(?=\S).*\S(?= *$)/}},{pattern:/(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,lookbehind:!0,greedy:!0,alias:"string",inside:{punctuation:/(?=\S).*\S(?= *$)/}},{pattern:/@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,alias:"string",inside:{punctuation:{pattern:/(\().+?(?=\))/,lookbehind:!0}}}],"multiline-comment":{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0,greedy:!0,alias:"comment"},regex:{pattern:/((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,lookbehind:!0,greedy:!0,inside:{"extended-regex":{pattern:/^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,inside:{comment:/#.*/}}}},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},string:{pattern:/(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/,greedy:!0,inside:{"double-quoted":{pattern:/^"[\s\S]*"$/,inside:{}}}},variable:{pattern:/\$(?:::)?\w+(?:::\w+)*/,inside:{punctuation:/::/}},"attr-name":/(?:\b\w+|\*)(?=\s*=>)/,function:[{pattern:/(\.)(?!\d)\w+/,lookbehind:!0},/\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/],number:/\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,boolean:/\b(?:false|true)\b/,keyword:/\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,datatype:{pattern:/\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,alias:"symbol"},operator:/=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,punctuation:/[\[\]{}().,;]|:+/};var n=[{pattern:/(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,lookbehind:!0,inside:{"short-variable":{pattern:/(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,lookbehind:!0,alias:"variable",inside:{punctuation:/::/}},delimiter:{pattern:/^\$/,alias:"variable"},rest:t.languages.puppet}},{pattern:/(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,lookbehind:!0,alias:"variable",inside:{punctuation:/::/}}];t.languages.puppet.heredoc[0].inside.interpolation=n,t.languages.puppet.string.inside["double-quoted"].inside.interpolation=n})(e)}go.displayName="pure";go.aliases=[];function go(e){(function(t){t.languages.pure={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0},/#!.+/],"inline-lang":{pattern:/%<[\s\S]+?%>/,greedy:!0,inside:{lang:{pattern:/(^%< *)-\*-.+?-\*-/,lookbehind:!0,alias:"comment"},delimiter:{pattern:/^%<.*|%>$/,alias:"punctuation"}}},string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},number:{pattern:/((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?L?)/i,lookbehind:!0},keyword:/\b(?:NULL|ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,function:/\b(?:abs|add_(?:addr|constdef|(?:fundef|interface|macdef|typedef)(?:_at)?|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_c?string(?:_pointer)?|byte_(?:matrix|pointer)|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|sentry|short|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,special:{pattern:/\b__[a-z]+__\b/i,alias:"builtin"},operator:/(?:[!"#$%&'*+,\-.\/:<=>?@\\^`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]|\b_+\b)+|\b(?:and|div|mod|not|or)\b/,punctuation:/[(){}\[\];,|]/};var n=["c",{lang:"c++",alias:"cpp"},"fortran"],r=/%< *-\*- *<lang>\d* *-\*-[\s\S]+?%>/.source;n.forEach(function(a){var i=a;if(typeof a!="string"&&(i=a.alias,a=a.lang),t.languages[i]){var o={};o["inline-lang-"+i]={pattern:RegExp(r.replace("<lang>",a.replace(/([.+*?\/\\(){}\[\]])/g,"\\$1")),"i"),inside:t.util.clone(t.languages.pure["inline-lang"].inside)},o["inline-lang-"+i].inside.rest=t.util.clone(t.languages[i]),t.languages.insertBefore("pure","inline-lang",o)}}),t.languages.c&&(t.languages.pure["inline-lang"].inside.rest=t.util.clone(t.languages.c))})(e)}mo.displayName="purebasic";mo.aliases=["pbfasm"];function mo(e){e.register(W),e.languages.purebasic=e.languages.extend("clike",{comment:/;.*/,keyword:/\b(?:align|and|as|break|calldebugger|case|compilercase|compilerdefault|compilerelse|compilerelseif|compilerendif|compilerendselect|compilererror|compilerif|compilerselect|continue|data|datasection|debug|debuglevel|declare|declarec|declarecdll|declaredll|declaremodule|default|define|dim|disableasm|disabledebugger|disableexplicit|else|elseif|enableasm|enabledebugger|enableexplicit|end|enddatasection|enddeclaremodule|endenumeration|endif|endimport|endinterface|endmacro|endmodule|endprocedure|endselect|endstructure|endstructureunion|endwith|enumeration|extends|fakereturn|for|foreach|forever|global|gosub|goto|if|import|importc|includebinary|includefile|includepath|interface|macro|module|newlist|newmap|next|not|or|procedure|procedurec|procedurecdll|proceduredll|procedurereturn|protected|prototype|prototypec|read|redim|repeat|restore|return|runtime|select|shared|static|step|structure|structureunion|swap|threaded|to|until|wend|while|with|xincludefile|xor)\b/i,function:/\b\w+(?:\.\w+)?\s*(?=\()/,number:/(?:\$[\da-f]+|\b-?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)\b/i,operator:/(?:@\*?|\?|\*)\w+\$?|-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*/@]/}),e.languages.insertBefore("purebasic","keyword",{tag:/#\w+\$?/,asm:{pattern:/(^[\t ]*)!.*/m,lookbehind:!0,alias:"tag",inside:{comment:/;.*/,string:{pattern:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},"label-reference-anonymous":{pattern:/(!\s*j[a-z]+\s+)@[fb]/i,lookbehind:!0,alias:"fasm-label"},"label-reference-addressed":{pattern:/(!\s*j[a-z]+\s+)[A-Z._?$@][\w.?$@~#]*/i,lookbehind:!0,alias:"fasm-label"},keyword:[/\b(?:extern|global)\b[^;\r\n]*/i,/\b(?:CPU|DEFAULT|FLOAT)\b.*/],function:{pattern:/^([\t ]*!\s*)[\da-z]+(?=\s|$)/im,lookbehind:!0},"function-inline":{pattern:/(:\s*)[\da-z]+(?=\s)/i,lookbehind:!0,alias:"function"},label:{pattern:/^([\t ]*!\s*)[A-Za-z._?$@][\w.?$@~#]*(?=:)/m,lookbehind:!0,alias:"fasm-label"},register:/\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s|mm\d+)\b/i,number:/(?:\b|-|(?=\$))(?:0[hx](?:[\da-f]*\.)?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,operator:/[\[\]*+\-/%<>=&|$!,.:]/}}}),delete e.languages.purebasic["class-name"],delete e.languages.purebasic.boolean,e.languages.pbfasm=e.languages.purebasic}fo.displayName="purescript";fo.aliases=["purs"];function fo(e){e.register(pt),e.languages.purescript=e.languages.extend("haskell",{keyword:/\b(?:ado|case|class|data|derive|do|else|forall|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b|∀/,"import-statement":{pattern:/(^[\t ]*)import\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*(?:\s+as\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,lookbehind:!0,inside:{keyword:/\b(?:as|hiding|import)\b/,punctuation:/\./}},builtin:/\b(?:absurd|add|ap|append|apply|between|bind|bottom|clamp|compare|comparing|compose|conj|const|degree|discard|disj|div|eq|flap|flip|gcd|identity|ifM|join|lcm|liftA1|liftM1|map|max|mempty|min|mod|mul|negate|not|notEq|one|otherwise|recip|show|sub|top|unit|unless|unlessM|void|when|whenM|zero)\b/,operator:[e.languages.haskell.operator[0],e.languages.haskell.operator[2],/[\xa2-\xa6\xa8\xa9\xac\xae-\xb1\xb4\xb8\xd7\xf7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u0482\u058d-\u058f\u0606-\u0608\u060b\u060e\u060f\u06de\u06e9\u06fd\u06fe\u07f6\u07fe\u07ff\u09f2\u09f3\u09fa\u09fb\u0af1\u0b70\u0bf3-\u0bfa\u0c7f\u0d4f\u0d79\u0e3f\u0f01-\u0f03\u0f13\u0f15-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce\u0fcf\u0fd5-\u0fd8\u109e\u109f\u1390-\u1399\u166d\u17db\u1940\u19de-\u19ff\u1b61-\u1b6a\u1b74-\u1b7c\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20bf\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211e-\u2123\u2125\u2127\u2129\u212e\u213a\u213b\u2140-\u2144\u214a-\u214d\u214f\u218a\u218b\u2190-\u2307\u230c-\u2328\u232b-\u2426\u2440-\u244a\u249c-\u24e9\u2500-\u2767\u2794-\u27c4\u27c7-\u27e5\u27f0-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2b73\u2b76-\u2b95\u2b97-\u2bff\u2ce5-\u2cea\u2e50\u2e51\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3004\u3012\u3013\u3020\u3036\u3037\u303e\u303f\u309b\u309c\u3190\u3191\u3196-\u319f\u31c0-\u31e3\u3200-\u321e\u322a-\u3247\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua700-\ua716\ua720\ua721\ua789\ua78a\ua828-\ua82b\ua836-\ua839\uaa77-\uaa79\uab5b\uab6a\uab6b\ufb29\ufbb2-\ufbc1\ufdfc\ufdfd\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe6\uffe8-\uffee\ufffc\ufffd]/]}),e.languages.purs=e.languages.purescript}Pt.displayName="python";Pt.aliases=["py"];function Pt(e){e.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},e.languages.python["string-interpolation"].inside.interpolation.inside.rest=e.languages.python,e.languages.py=e.languages.python}bo.displayName="qsharp";bo.aliases=["qs"];function bo(e){e.register(W),(function(t){function n(p,h){return p.replace(/<<(\d+)>>/g,function(E,S){return"(?:"+h[+S]+")"})}function r(p,h,E){return RegExp(n(p,h),"")}function a(p,h){for(var E=0;E<h;E++)p=p.replace(/<<self>>/g,function(){return"(?:"+p+")"});return p.replace(/<<self>>/g,"[^\\s\\S]")}var i={type:"Adj BigInt Bool Ctl Double false Int One Pauli PauliI PauliX PauliY PauliZ Qubit Range Result String true Unit Zero",other:"Adjoint adjoint apply as auto body borrow borrowing Controlled controlled distribute elif else fail fixup for function if in internal intrinsic invert is let mutable namespace new newtype open operation repeat return self set until use using while within"};function o(p){return"\\b(?:"+p.trim().replace(/ /g,"|")+")\\b"}var s=RegExp(o(i.type+" "+i.other)),u=/\b[A-Za-z_]\w*\b/.source,l=n(/<<0>>(?:\s*\.\s*<<0>>)*/.source,[u]),c={keyword:s,punctuation:/[<>()?,.:[\]]/},d=/"(?:\\.|[^\\"])*"/.source;t.languages.qsharp=t.languages.extend("clike",{comment:/\/\/.*/,string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[d]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:r(/(\b(?:as|open)\s+)<<0>>(?=\s*(?:;|as\b))/.source,[l]),lookbehind:!0,inside:c},{pattern:r(/(\bnamespace\s+)<<0>>(?=\s*\{)/.source,[l]),lookbehind:!0,inside:c}],keyword:s,number:/(?:\b0(?:x[\da-f]+|b[01]+|o[0-7]+)|(?:\B\.\d+|\b\d+(?:\.\d*)?)(?:e[-+]?\d+)?)l?\b/i,operator:/\band=|\bor=|\band\b|\bnot\b|\bor\b|<[-=]|[-=]>|>>>=?|<<<=?|\^\^\^=?|\|\|\|=?|&&&=?|w\/=?|~~~|[*\/+\-^=!%]=?/,punctuation:/::|[{}[\];(),.:]/}),t.languages.insertBefore("qsharp","number",{range:{pattern:/\.\./,alias:"operator"}});var m=a(n(/\{(?:[^"{}]|<<0>>|<<self>>)*\}/.source,[d]),2);t.languages.insertBefore("qsharp","string",{"interpolation-string":{pattern:r(/\$"(?:\\.|<<0>>|[^\\"{])*"/.source,[m]),greedy:!0,inside:{interpolation:{pattern:r(/((?:^|[^\\])(?:\\\\)*)<<0>>/.source,[m]),lookbehind:!0,inside:{punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-qsharp",inside:t.languages.qsharp}}},string:/[\s\S]+/}}})})(e),e.languages.qs=e.languages.qsharp}ho.displayName="q";ho.aliases=[];function ho(e){e.languages.q={string:/"(?:\\.|[^"\\\r\n])*"/,comment:[{pattern:/([\t )\]}])\/.*/,lookbehind:!0,greedy:!0},{pattern:/(^|\r?\n|\r)\/[\t ]*(?:(?:\r?\n|\r)(?:.*(?:\r?\n|\r(?!\n)))*?(?:\\(?=[\t ]*(?:\r?\n|\r))|$)|\S.*)/,lookbehind:!0,greedy:!0},{pattern:/^\\[\t ]*(?:\r?\n|\r)[\s\S]+/m,greedy:!0},{pattern:/^#!.+/m,greedy:!0}],symbol:/`(?::\S+|[\w.]*)/,datetime:{pattern:/0N[mdzuvt]|0W[dtz]|\d{4}\.\d\d(?:m|\.\d\d(?:T(?:\d\d(?::\d\d(?::\d\d(?:[.:]\d\d\d)?)?)?)?)?[dz]?)|\d\d:\d\d(?::\d\d(?:[.:]\d\d\d)?)?[uvt]?/,alias:"number"},number:/\b(?![01]:)(?:0N[hje]?|0W[hj]?|0[wn]|0x[\da-fA-F]+|\d+(?:\.\d*)?(?:e[+-]?\d+)?[hjfeb]?)/,keyword:/\\\w+\b|\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\b/,adverb:{pattern:/['\/\\]:?|\beach\b/,alias:"function"},verb:{pattern:/(?:\B\.\B|\b[01]:|<[=>]?|>=?|[:+\-*%,!?~=|$&#@^]):?|\b_\b:?/,alias:"operator"},punctuation:/[(){}\[\];.]/}}yo.displayName="qml";yo.aliases=[];function yo(e){e.register(ie),(function(t){for(var n=/"(?:\\.|[^\\"\r\n])*"|'(?:\\.|[^\\'\r\n])*'/.source,r=/\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))*\*\//.source,a=/(?:[^\\()[\]{}"'/]|<string>|\/(?![*/])|<comment>|\(<expr>*\)|\[<expr>*\]|\{<expr>*\}|\\[\s\S])/.source.replace(/<string>/g,function(){return n}).replace(/<comment>/g,function(){return r}),i=0;i<2;i++)a=a.replace(/<expr>/g,function(){return a});a=a.replace(/<expr>/g,"[^\\s\\S]"),t.languages.qml={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},"javascript-function":{pattern:RegExp(/((?:^|;)[ \t]*)function\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*\(<js>*\)\s*\{<js>*\}/.source.replace(/<js>/g,function(){return a}),"m"),lookbehind:!0,greedy:!0,alias:"language-javascript",inside:t.languages.javascript},"class-name":{pattern:/((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,lookbehind:!0},property:[{pattern:/((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,lookbehind:!0},{pattern:/((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,lookbehind:!0,inside:{keyword:/^property/,property:/\w+(?:\.\w+)*/}}],"javascript-expression":{pattern:RegExp(/(:[ \t]*)(?![\s;}[])(?:(?!$|[;}])<js>)+/.source.replace(/<js>/g,function(){return a}),"m"),lookbehind:!0,greedy:!0,alias:"language-javascript",inside:t.languages.javascript},string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},keyword:/\b(?:as|import|on)\b/,punctuation:/[{}[\]:;,]/}})(e)}So.displayName="qore";So.aliases=[];function So(e){e.register(W),e.languages.qore=e.languages.extend("clike",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,lookbehind:!0},string:{pattern:/("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},keyword:/\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:bool|date|float|int|list|number|string)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,boolean:/\b(?:false|true)\b/i,function:/\$?\b(?!\d)\w+(?=\()/,number:/\b(?:0b[01]+|0x(?:[\da-f]*\.)?[\da-fp\-]+|(?:\d+(?:\.\d+)?|\.\d+)(?:e\d+)?[df]|(?:\d+(?:\.\d+)?|\.\d+))\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,lookbehind:!0},variable:/\$(?!\d)\w+\b/})}Eo.displayName="r";Eo.aliases=[];function Eo(e){e.languages.r={comment:/#.*/,string:{pattern:/(['"])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},"percent-operator":{pattern:/%[^%\s]*%/,alias:"operator"},boolean:/\b(?:FALSE|TRUE)\b/,ellipsis:/\.\.(?:\.|\d+)/,number:[/\b(?:Inf|NaN)\b/,/(?:\b0x[\dA-Fa-f]+(?:\.\d*)?|\b\d+(?:\.\d*)?|\B\.\d+)(?:[EePp][+-]?\d+)?[iL]?/],keyword:/\b(?:NA|NA_character_|NA_complex_|NA_integer_|NA_real_|NULL|break|else|for|function|if|in|next|repeat|while)\b/,operator:/->?>?|<(?:=|<?-)?|[>=!]=?|::?|&&?|\|\|?|[+*\/^$@~]/,punctuation:/[(){}\[\],;]/}}Ao.displayName="racket";Ao.aliases=["rkt"];function Ao(e){e.register(ft),e.languages.racket=e.languages.extend("scheme",{"lambda-parameter":{pattern:/([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,lookbehind:!0}}),e.languages.insertBefore("racket","string",{lang:{pattern:/^#lang.+/m,greedy:!0,alias:"keyword"}}),e.languages.rkt=e.languages.racket}To.displayName="cshtml";To.aliases=["razor"];function To(e){e.register(We),e.register(re),(function(t){var n=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,r=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function a(I,T){for(var k=0;k<T;k++)I=I.replace(/<self>/g,function(){return"(?:"+I+")"});return I.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+r+")").replace(/<comment>/g,"(?:"+n+")")}var i=a(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),o=a(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,1),s=a(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),u=a(/<(?:[^<>'"@/]|<comment>|<self>)*>/.source,1),l=/@/.source+/(?:await\b\s*)?/.source+"(?:"+/(?!await\b)\w+\b/.source+"|"+i+")(?:"+/[?!]?\.\w+\b/.source+"|(?:"+u+")?"+i+"|"+o+")*"+/(?![?!\.(\[]|<(?!\/))/.source,c=/@(?![\w()])/.source+"|"+l,d="(?:"+/"[^"@]*"|'[^'@]*'|[^\s'"@>=]+(?=[\s>])/.source+`|["'][^"'@]*(?:(?:`+c+`)[^"'@]*)+["'])`,m=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*<tagAttrValue>|(?=[\s/>])))+)?/.source.replace(/<tagAttrValue>/,d),p=/(?!\d)[^\s>\/=$<%]+/.source+m+/\s*\/?>/.source,h=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+m+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+p+"|"+a(/<\1/.source+m+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+p+"|<self>")+")*"+/<\/\1\s*>/.source,2))+")*"+/<\/\1\s*>/.source+"|"+/</.source+p+")";t.languages.cshtml=t.languages.extend("markup",{});var E=t.languages.insertBefore("csharp","string",{html:{pattern:RegExp(h),greedy:!0,inside:t.languages.cshtml}},{csharp:t.languages.extend("csharp",{})}),S={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:E},y={pattern:RegExp(/(^|[^@])/.source+l),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:S}};t.languages.cshtml.tag.pattern=RegExp(/<\/?/.source+p),t.languages.cshtml.tag.inside["attr-value"].pattern=RegExp(/=\s*/.source+d),t.languages.insertBefore("inside","punctuation",{value:y},t.languages.cshtml.tag.inside["attr-value"]),t.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[s,/(?:code|functions)\s*/.source+s,/(?:for|foreach|lock|switch|using|while)\s*/.source+i+/\s*/.source+s,/do\s*/.source+s+/\s*while\s*/.source+i+/(?:\s*;)?/.source,/try\s*/.source+s+/\s*catch\s*/.source+i+/\s*/.source+s+/\s*finally\s*/.source+s,/if\s*/.source+i+/\s*/.source+s+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+i+")?"+/\s*/.source+s+")*",/helper\s+\w+\s*/.source+i+/\s*/.source+s].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:S}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:S}},value:y,"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),t.languages.razor=t.languages.cshtml})(e)}Ft.displayName="jsx";Ft.aliases=[];function Ft(e){e.register(ie),e.register(re),(function(t){var n=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(l,c){return l=l.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return i}),RegExp(l,c)}i=o(i).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);var s=function(l){return l?typeof l=="string"?l:typeof l.content=="string"?l.content:l.content.map(s).join(""):""},u=function(l){for(var c=[],d=0;d<l.length;d++){var m=l[d],p=!1;if(typeof m!="string"&&(m.type==="tag"&&m.content[0]&&m.content[0].type==="tag"?m.content[0].content[0].content==="</"?c.length>0&&c[c.length-1].tagName===s(m.content[0].content[1])&&c.pop():m.content[m.content.length-1].content==="/>"||c.push({tagName:s(m.content[0].content[1]),openedBraces:0}):c.length>0&&m.type==="punctuation"&&m.content==="{"?c[c.length-1].openedBraces++:c.length>0&&c[c.length-1].openedBraces>0&&m.type==="punctuation"&&m.content==="}"?c[c.length-1].openedBraces--:p=!0),(p||typeof m=="string")&&c.length>0&&c[c.length-1].openedBraces===0){var h=s(m);d<l.length-1&&(typeof l[d+1]=="string"||l[d+1].type==="plain-text")&&(h+=s(l[d+1]),l.splice(d+1,1)),d>0&&(typeof l[d-1]=="string"||l[d-1].type==="plain-text")&&(h=s(l[d-1])+h,l.splice(d-1,1),d--),l[d]=new t.Token("plain-text",h,null,h)}m.content&&typeof m.content!="string"&&u(m.content)}};t.hooks.add("after-tokenize",function(l){l.language!=="jsx"&&l.language!=="tsx"||u(l.tokens)})})(e)}wo.displayName="tsx";wo.aliases=[];function wo(e){e.register(Ft),e.register(mt),(function(t){var n=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",n),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"];var r=t.languages.tsx.tag;r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0})(e)}Io.displayName="reason";Io.aliases=[];function Io(e){e.register(W),e.languages.reason=e.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),e.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete e.languages.reason.function}vo.displayName="rego";vo.aliases=[];function vo(e){e.languages.rego={comment:/#.*/,property:{pattern:/(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/,boolean:/\b(?:false|true)\b/,function:{pattern:/\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i,inside:{namespace:/\b\w+\b(?=\s*\.)/,punctuation:/\./}},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,operator:/[-+*/%|&]|[<>:=]=?|!=|\b_\b/,punctuation:/[,;.\[\]{}()]/}}ko.displayName="renpy";ko.aliases=["rpy"];function ko(e){e.languages.renpy={comment:{pattern:/(^|[^\\])#.+/,lookbehind:!0},string:{pattern:/("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\])*\2|(?:^#?(?:(?:[0-9a-fA-F]){3}|[0-9a-fA-F]{6})$)/m,greedy:!0},function:/\b[a-z_]\w*(?=\()/i,property:/\b(?:Update|UpdateVersion|action|activate_sound|adv_nvl_transition|after_load_transition|align|alpha|alt|anchor|antialias|area|auto|background|bar_invert|bar_resizing|bar_vertical|black_color|bold|bottom_bar|bottom_gutter|bottom_margin|bottom_padding|box_reverse|box_wrap|can_update|caret|child|color|crop|default_afm_enable|default_afm_time|default_fullscreen|default_text_cps|developer|directory_name|drag_handle|drag_joined|drag_name|drag_raise|draggable|dragged|drop_shadow|drop_shadow_color|droppable|dropped|easein|easeout|edgescroll|end_game_transition|end_splash_transition|enter_replay_transition|enter_sound|enter_transition|enter_yesno_transition|executable_name|exit_replay_transition|exit_sound|exit_transition|exit_yesno_transition|fadein|fadeout|first_indent|first_spacing|fit_first|focus|focus_mask|font|foreground|game_main_transition|get_installed_packages|google_play_key|google_play_salt|ground|has_music|has_sound|has_voice|height|help|hinting|hover|hover_background|hover_color|hover_sound|hovered|hyperlink_functions|idle|idle_color|image_style|include_update|insensitive|insensitive_background|insensitive_color|inside|intra_transition|italic|justify|kerning|keyboard_focus|language|layer_clipping|layers|layout|left_bar|left_gutter|left_margin|left_padding|length|line_leading|line_overlap_split|line_spacing|linear|main_game_transition|main_menu_music|maximum|min_width|minimum|minwidth|modal|mouse|mousewheel|name|narrator_menu|newline_indent|nvl_adv_transition|offset|order_reverse|outlines|overlay_functions|pos|position|prefix|radius|range|rest_indent|right_bar|right_gutter|right_margin|right_padding|rotate|rotate_pad|ruby_style|sample_sound|save_directory|say_attribute_transition|screen_height|screen_width|scrollbars|selected_hover|selected_hover_color|selected_idle|selected_idle_color|selected_insensitive|show_side_image|show_two_window|side_spacing|side_xpos|side_ypos|size|size_group|slow_cps|slow_cps_multiplier|spacing|strikethrough|subpixel|text_align|text_style|text_xpos|text_y_fudge|text_ypos|thumb|thumb_offset|thumb_shadow|thumbnail_height|thumbnail_width|time|top_bar|top_gutter|top_margin|top_padding|translations|underline|unscrollable|update|value|version|version_name|version_tuple|vertical|width|window_hide_transition|window_icon|window_left_padding|window_show_transition|window_title|windows_icon|xadjustment|xalign|xanchor|xanchoraround|xaround|xcenter|xfill|xinitial|xmargin|xmaximum|xminimum|xoffset|xofsset|xpadding|xpos|xsize|xzoom|yadjustment|yalign|yanchor|yanchoraround|yaround|ycenter|yfill|yinitial|ymargin|ymaximum|yminimum|yoffset|ypadding|ypos|ysize|ysizexysize|yzoom|zoom|zorder)\b/,tag:/\b(?:bar|block|button|buttoscreenn|drag|draggroup|fixed|frame|grid|[hv]box|hotbar|hotspot|image|imagebutton|imagemap|input|key|label|menu|mm_menu_frame|mousearea|nvl|parallel|screen|self|side|tag|text|textbutton|timer|vbar|viewport|window)\b|\$/,keyword:/\b(?:None|add|adjustment|alignaround|allow|angle|animation|around|as|assert|behind|box_layout|break|build|cache|call|center|changed|child_size|choice|circles|class|clear|clicked|clipping|clockwise|config|contains|continue|corner1|corner2|counterclockwise|def|default|define|del|delay|disabled|disabled_text|dissolve|elif|else|event|except|exclude|exec|expression|fade|finally|for|from|function|global|gm_root|has|hide|id|if|import|in|init|is|jump|knot|lambda|left|less_rounded|mm_root|movie|music|null|on|onlayer|pass|pause|persistent|play|print|python|queue|raise|random|renpy|repeat|return|right|rounded_window|scene|scope|set|show|slow|slow_abortable|slow_done|sound|stop|store|style|style_group|substitute|suffix|theme|transform|transform_anchor|transpose|try|ui|unhovered|updater|use|voice|while|widget|widget_hover|widget_selected|widget_text|yield)\b/,boolean:/\b(?:[Ff]alse|[Tt]rue)\b/,number:/(?:\b(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?)|\B\.\d+)(?:e[+-]?\d+)?j?/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:and|at|not|or|with)\b/,punctuation:/[{}[\];(),.:]/},e.languages.rpy=e.languages.renpy}Ro.displayName="rescript";Ro.aliases=["res"];function Ro(e){e.languages.rescript={comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},char:{pattern:/'(?:[^\r\n\\]|\\(?:.|\w+))'/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*|@[a-z.]*|#[A-Za-z]\w*|#\d/,function:{pattern:/[a-zA-Z]\w*(?=\()|(\.)[a-z]\w*/,lookbehind:!0},number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,boolean:/\b(?:false|true)\b/,"attr-value":/[A-Za-z]\w*(?==)/,constant:{pattern:/(\btype\s+)[a-z]\w*/,lookbehind:!0},tag:{pattern:/(<)[a-z]\w*|(?:<\/)[a-z]\w*/,lookbehind:!0,inside:{operator:/<|>|\//}},keyword:/\b(?:and|as|assert|begin|bool|class|constraint|do|done|downto|else|end|exception|external|float|for|fun|function|if|in|include|inherit|initializer|int|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|string|switch|then|to|try|type|when|while|with)\b/,operator:/\.{3}|:[:=]?|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,punctuation:/[(){}[\],;.]/},e.languages.insertBefore("rescript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"tag"},rest:e.languages.rescript}},string:/[\s\S]+/}}}),e.languages.res=e.languages.rescript}Co.displayName="rest";Co.aliases=[];function Co(e){e.languages.rest={table:[{pattern:/(^[\t ]*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1[+|].+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/m,lookbehind:!0,inside:{punctuation:/\||(?:\+[=-]+)+\+/}},{pattern:/(^[\t ]*)=+ [ =]*=(?:(?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1=+ [ =]*=(?=(?:\r?\n|\r){2}|\s*$)/m,lookbehind:!0,inside:{punctuation:/[=-]+/}}],"substitution-def":{pattern:/(^[\t ]*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,lookbehind:!0,inside:{substitution:{pattern:/^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,alias:"attr-value",inside:{punctuation:/^\||\|$/}},directive:{pattern:/( )(?! )[^:]+::/,lookbehind:!0,alias:"function",inside:{punctuation:/::$/}}}},"link-target":[{pattern:/(^[\t ]*\.\. )\[[^\]]+\]/m,lookbehind:!0,alias:"string",inside:{punctuation:/^\[|\]$/}},{pattern:/(^[\t ]*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,lookbehind:!0,alias:"string",inside:{punctuation:/^_|:$/}}],directive:{pattern:/(^[\t ]*\.\. )[^:]+::/m,lookbehind:!0,alias:"function",inside:{punctuation:/::$/}},comment:{pattern:/(^[\t ]*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,lookbehind:!0},title:[{pattern:/^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,inside:{punctuation:/^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,important:/.+/}},{pattern:/(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,lookbehind:!0,inside:{punctuation:/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,important:/.+/}}],hr:{pattern:/((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,lookbehind:!0,alias:"punctuation"},field:{pattern:/(^[\t ]*):[^:\r\n]+:(?= )/m,lookbehind:!0,alias:"attr-name"},"command-line-option":{pattern:/(^[\t ]*)(?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,lookbehind:!0,alias:"symbol"},"literal-block":{pattern:/::(?:\r?\n|\r){2}([ \t]+)(?![ \t]).+(?:(?:\r?\n|\r)\1.+)*/,inside:{"literal-block-punctuation":{pattern:/^::/,alias:"punctuation"}}},"quoted-literal-block":{pattern:/::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,inside:{"literal-block-punctuation":{pattern:/^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,alias:"punctuation"}}},"list-bullet":{pattern:/(^[\t ]*)(?:[*+\-•‣⁃]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,lookbehind:!0,alias:"punctuation"},"doctest-block":{pattern:/(^[\t ]*)>>> .+(?:(?:\r?\n|\r).+)*/m,lookbehind:!0,inside:{punctuation:/^>>>/}},inline:[{pattern:/(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s)(?:(?!\2).)*\S\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,lookbehind:!0,inside:{bold:{pattern:/(^\*\*).+(?=\*\*$)/,lookbehind:!0},italic:{pattern:/(^\*).+(?=\*$)/,lookbehind:!0},"inline-literal":{pattern:/(^``).+(?=``$)/,lookbehind:!0,alias:"symbol"},role:{pattern:/^:[^:]+:|:[^:]+:$/,alias:"function",inside:{punctuation:/^:|:$/}},"interpreted-text":{pattern:/(^`).+(?=`$)/,lookbehind:!0,alias:"attr-value"},substitution:{pattern:/(^\|).+(?=\|$)/,lookbehind:!0,alias:"attr-value"},punctuation:/\*\*?|``?|\|/}}],link:[{pattern:/\[[^\[\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,alias:"string",inside:{punctuation:/^\[|\]_$/}},{pattern:/(?:\b[a-z\d]+(?:[_.:+][a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,alias:"string",inside:{punctuation:/^_?`|`$|`?_?_$/}}],punctuation:{pattern:/(^[\t ]*)(?:\|(?= |$)|(?:---?|—|\.\.|__)(?= )|\.\.$)/m,lookbehind:!0}}}_o.displayName="rip";_o.aliases=[];function _o(e){e.languages.rip={comment:{pattern:/#.*/,greedy:!0},char:{pattern:/\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,greedy:!0},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},regex:{pattern:/(^|[^/])\/(?!\/)(?:\[[^\n\r\]]*\]|\\.|[^/\\\r\n\[])+\/(?=\s*(?:$|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},keyword:/(?:=>|->)|\b(?:case|catch|class|else|exit|finally|if|raise|return|switch|try)\b/,builtin:/@|\bSystem\b/,boolean:/\b(?:false|true)\b/,date:/\b\d{4}-\d{2}-\d{2}\b/,time:/\b\d{2}:\d{2}:\d{2}\b/,datetime:/\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,symbol:/:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,number:/[+-]?\b(?:\d+\.\d+|\d+)\b/,punctuation:/(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,reference:/[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/}}No.displayName="roboconf";No.aliases=[];function No(e){e.languages.roboconf={comment:/#.*/,keyword:{pattern:/(^|\s)(?:(?:external|import)\b|(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{))/,lookbehind:!0},component:{pattern:/[\w-]+(?=[ \t]*\{)/,alias:"variable"},property:/[\w.-]+(?=[ \t]*:)/,value:{pattern:/(=[ \t]*(?![ \t]))[^,;]+/,lookbehind:!0,alias:"attr-value"},optional:{pattern:/\(optional\)/,alias:"builtin"},wildcard:{pattern:/(\.)\*/,lookbehind:!0,alias:"operator"},punctuation:/[{},.;:=]/}}Oo.displayName="robotframework";Oo.aliases=["robot"];function Oo(e){(function(t){var n={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},r={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function a(u,l){var c={};c["section-header"]={pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"};for(var d in l)c[d]=l[d];return c.tag={pattern:/([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},c.variable=r,c.comment=n,{pattern:RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g,function(){return u}),"im"),alias:"section",inside:c}}var i={pattern:/(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},o={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:r}},s={pattern:/([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:r}};t.languages.robotframework={settings:a("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:a("Variables"),"test-cases":a("Test Cases",{"test-name":o,documentation:i,property:s}),keywords:a("Keywords",{"keyword-name":o,documentation:i,property:s}),tasks:a("Tasks",{"task-name":o,documentation:i,property:s}),comment:n},t.languages.robot=t.languages.robotframework})(e)}xo.displayName="rust";xo.aliases=[];function xo(e){(function(t){for(var n=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,r=0;r<2;r++)n=n.replace(/<self>/g,function(){return n});n=n.replace(/<self>/g,function(){return/[^\s\S]/.source}),t.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+n),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},t.languages.rust["closure-params"].inside.rest=t.languages.rust,t.languages.rust.attribute.inside.string=t.languages.rust.string})(e)}Do.displayName="sas";Do.aliases=[];function Do(e){(function(t){var n=/(?:"(?:""|[^"])*"(?!")|'(?:''|[^'])*'(?!'))/.source,r=/\b(?:\d[\da-f]*x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,a={pattern:RegExp(n+"[bx]"),alias:"number"},i={pattern:/&[a-z_]\w*/i},o={pattern:/((?:^|\s|=|\())%(?:ABORT|BY|CMS|COPY|DISPLAY|DO|ELSE|END|EVAL|GLOBAL|GO|GOTO|IF|INC|INCLUDE|INDEX|INPUT|KTRIM|LENGTH|LET|LIST|LOCAL|PUT|QKTRIM|QSCAN|QSUBSTR|QSYSFUNC|QUPCASE|RETURN|RUN|SCAN|SUBSTR|SUPERQ|SYMDEL|SYMEXIST|SYMGLOBL|SYMLOCAL|SYSCALL|SYSEVALF|SYSEXEC|SYSFUNC|SYSGET|SYSRPUT|THEN|TO|TSO|UNQUOTE|UNTIL|UPCASE|WHILE|WINDOW)\b/i,lookbehind:!0,alias:"keyword"},s={pattern:/(^|\s)(?:proc\s+\w+|data(?!=)|quit|run)\b/i,alias:"keyword",lookbehind:!0},u=[/\/\*[\s\S]*?\*\//,{pattern:/(^[ \t]*|;\s*)\*[^;]*;/m,lookbehind:!0}],l={pattern:RegExp(n),greedy:!0},c=/[$%@.(){}\[\];,\\]/,d={pattern:/%?\b\w+(?=\()/,alias:"keyword"},m={function:d,"arg-value":{pattern:/(=\s*)[A-Z\.]+/i,lookbehind:!0},operator:/=/,"macro-variable":i,arg:{pattern:/[A-Z]+/i,alias:"keyword"},number:r,"numeric-constant":a,punctuation:c,string:l},p={pattern:/\b(?:format|put)\b=?[\w'$.]+/i,inside:{keyword:/^(?:format|put)(?==)/i,equals:/=/,format:{pattern:/(?:\w|\$\d)+\.\d?/,alias:"number"}}},h={pattern:/\b(?:format|put)\s+[\w']+(?:\s+[$.\w]+)+(?=;)/i,inside:{keyword:/^(?:format|put)/i,format:{pattern:/[\w$]+\.\d?/,alias:"number"}}},E={pattern:/((?:^|\s)=?)(?:catname|checkpoint execute_always|dm|endsas|filename|footnote|%include|libname|%list|lock|missing|options|page|resetline|%run|sasfile|skip|sysecho|title\d?)\b/i,lookbehind:!0,alias:"keyword"},S={pattern:/(^|\s)(?:submit(?:\s+(?:load|norun|parseonly))?|endsubmit)\b/i,lookbehind:!0,alias:"keyword"},y=/aStore|accessControl|aggregation|audio|autotune|bayesianNetClassifier|bioMedImage|boolRule|builtins|cardinality|cdm|clustering|conditionalRandomFields|configuration|copula|countreg|dataDiscovery|dataPreprocess|dataSciencePilot|dataStep|decisionTree|deduplication|deepLearn|deepNeural|deepRnn|ds2|ecm|entityRes|espCluster|explainModel|factmac|fastKnn|fcmpact|fedSql|freqTab|gVarCluster|gam|gleam|graphSemiSupLearn|hiddenMarkovModel|hyperGroup|ica|image|iml|kernalPca|langModel|ldaTopic|loadStreams|mbc|mixed|mlTools|modelPublishing|network|neuralNet|nmf|nonParametricBayes|nonlinear|optNetwork|optimization|panel|pca|percentile|phreg|pls|qkb|qlim|quantreg|recommend|regression|reinforcementLearn|robustPca|ruleMining|sampling|sandwich|sccasl|search(?:Analytics)?|sentimentAnalysis|sequence|session(?:Prop)?|severity|simSystem|simple|smartData|sparkEmbeddedProcess|sparseML|spatialreg|spc|stabilityMonitoring|svDataDescription|svm|table|text(?:Filters|Frequency|Mining|Parse|Rule(?:Develop|Score)|Topic|Util)|timeData|transpose|tsInfo|tsReconcile|uniTimeSeries|varReduce/.source,I={pattern:RegExp(/(^|\s)(?:action\s+)?(?:<act>)\.[a-z]+\b[^;]+/.source.replace(/<act>/g,function(){return y}),"i"),lookbehind:!0,inside:{keyword:RegExp(/(?:<act>)\.[a-z]+\b/.source.replace(/<act>/g,function(){return y}),"i"),action:{pattern:/(?:action)/i,alias:"keyword"},comment:u,function:d,"arg-value":m["arg-value"],operator:m.operator,argument:m.arg,number:r,"numeric-constant":a,punctuation:c,string:l}},T={pattern:/((?:^|\s)=?)(?:after|analysis|and|array|barchart|barwidth|begingraph|by|call|cas|cbarline|cfill|class(?:lev)?|close|column|computed?|contains|continue|data(?==)|define|delete|describe|document|do\s+over|do|dol|drop|dul|else|end(?:comp|source)?|entryTitle|eval(?:uate)?|exec(?:ute)?|exit|file(?:name)?|fill(?:attrs)?|flist|fnc|function(?:list)?|global|goto|group(?:by)?|headline|headskip|histogram|if|infile|keep|keylabel|keyword|label|layout|leave|legendlabel|length|libname|loadactionset|merge|midpoints|_?null_|name|noobs|nowd|ods|options|or|otherwise|out(?:put)?|over(?:lay)?|plot|print|put|raise|ranexp|rannor|rbreak|retain|return|select|session|sessref|set|source|statgraph|sum|summarize|table|temp|terminate|then\s+do|then|title\d?|to|var|when|where|xaxisopts|y2axisopts|yaxisopts)\b/i,lookbehind:!0};t.languages.sas={datalines:{pattern:/^([ \t]*)(?:cards|(?:data)?lines);[\s\S]+?^[ \t]*;/im,lookbehind:!0,alias:"string",inside:{keyword:{pattern:/^(?:cards|(?:data)?lines)/i},punctuation:/;/}},"proc-sql":{pattern:/(^proc\s+(?:fed)?sql(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{sql:{pattern:RegExp(/^[ \t]*(?:select|alter\s+table|(?:create|describe|drop)\s+(?:index|table(?:\s+constraints)?|view)|create\s+unique\s+index|insert\s+into|update)(?:<str>|[^;"'])+;/.source.replace(/<str>/g,function(){return n}),"im"),alias:"language-sql",inside:t.languages.sql},"global-statements":E,"sql-statements":{pattern:/(^|\s)(?:disconnect\s+from|begin|commit|exec(?:ute)?|reset|rollback|validate)\b/i,lookbehind:!0,alias:"keyword"},number:r,"numeric-constant":a,punctuation:c,string:l}},"proc-groovy":{pattern:/(^proc\s+groovy(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:u,groovy:{pattern:RegExp(/(^[ \t]*submit(?:\s+(?:load|norun|parseonly))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g,function(){return n}),"im"),lookbehind:!0,alias:"language-groovy",inside:t.languages.groovy},keyword:T,"submit-statement":S,"global-statements":E,number:r,"numeric-constant":a,punctuation:c,string:l}},"proc-lua":{pattern:/(^proc\s+lua(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|data|quit|run);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:u,lua:{pattern:RegExp(/(^[ \t]*submit(?:\s+(?:load|norun|parseonly))?)(?:<str>|[^"'])+?(?=endsubmit;)/.source.replace(/<str>/g,function(){return n}),"im"),lookbehind:!0,alias:"language-lua",inside:t.languages.lua},keyword:T,"submit-statement":S,"global-statements":E,number:r,"numeric-constant":a,punctuation:c,string:l}},"proc-cas":{pattern:/(^proc\s+cas(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|data);|(?![\s\S]))/im,lookbehind:!0,inside:{comment:u,"statement-var":{pattern:/((?:^|\s)=?)saveresult\s[^;]+/im,lookbehind:!0,inside:{statement:{pattern:/^saveresult\s+\S+/i,inside:{keyword:/^(?:saveresult)/i}},rest:m}},"cas-actions":I,statement:{pattern:/((?:^|\s)=?)(?:default|(?:un)?set|on|output|upload)[^;]+/im,lookbehind:!0,inside:m},step:s,keyword:T,function:d,format:p,altformat:h,"global-statements":E,number:r,"numeric-constant":a,punctuation:c,string:l}},"proc-args":{pattern:RegExp(/(^proc\s+\w+\s+)(?!\s)(?:[^;"']|<str>)+;/.source.replace(/<str>/g,function(){return n}),"im"),lookbehind:!0,inside:m},"macro-keyword":o,"macro-variable":i,"macro-string-functions":{pattern:/((?:^|\s|=))%(?:BQUOTE|NRBQUOTE|NRQUOTE|NRSTR|QUOTE|STR)\(.*?(?:[^%]\))/i,lookbehind:!0,inside:{function:{pattern:/%(?:BQUOTE|NRBQUOTE|NRQUOTE|NRSTR|QUOTE|STR)/i,alias:"keyword"},"macro-keyword":o,"macro-variable":i,"escaped-char":{pattern:/%['"()<>=¬^~;,#]/},punctuation:c}},"macro-declaration":{pattern:/^%macro[^;]+(?=;)/im,inside:{keyword:/%macro/i}},"macro-end":{pattern:/^%mend[^;]+(?=;)/im,inside:{keyword:/%mend/i}},macro:{pattern:/%_\w+(?=\()/,alias:"keyword"},input:{pattern:/\binput\s[-\w\s/*.$&]+;/i,inside:{input:{alias:"keyword",pattern:/^input/i},comment:u,number:r,"numeric-constant":a}},"options-args":{pattern:/(^options)[-'"|/\\<>*+=:()\w\s]*(?=;)/im,lookbehind:!0,inside:m},"cas-actions":I,comment:u,function:d,format:p,altformat:h,"numeric-constant":a,datetime:{pattern:RegExp(n+"(?:dt?|t)"),alias:"number"},string:l,step:s,keyword:T,"operator-keyword":{pattern:/\b(?:eq|ge|gt|in|le|lt|ne|not)\b/i,alias:"operator"},number:r,operator:/\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?/,punctuation:c}})(e)}Lo.displayName="sass";Lo.aliases=[];function Lo(e){e.register(De),(function(t){t.languages.sass=t.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),t.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete t.languages.sass.atrule;var n=/\$[-\w]+|#\{\$[-\w]+\}/,r=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];t.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:n,operator:r}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:n,operator:r,important:t.languages.sass.important}}}),delete t.languages.sass.property,delete t.languages.sass.important,t.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})})(e)}Mo.displayName="shell-session";Mo.aliases=["sh-session","shellsession"];function Mo(e){e.register(Ot),(function(t){var n=[/"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/.source,/'[^']*'/.source,/\$'(?:[^'\\]|\\[\s\S])*'/.source,/<<-?\s*(["']?)(\w+)\1\s[\s\S]*?[\r\n]\2/.source].join("|");t.languages["shell-session"]={command:{pattern:RegExp(/^/.source+"(?:"+(/[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+(?::[^\0-\x1F$#%*?"<>:;|]+)?/.source+"|"+/[/~.][^\0-\x1F$#%*?"<>@:;|]*/.source)+")?"+/[$#%](?=\s)/.source+/(?:[^\\\r\n \t'"<$]|[ \t](?:(?!#)|#.*$)|\\(?:[^\r]|\r\n?)|\$(?!')|<(?!<)|<<str>>)+/.source.replace(/<<str>>/g,function(){return n}),"m"),greedy:!0,inside:{info:{pattern:/^[^#$%]+/,alias:"punctuation",inside:{user:/^[^\s@:$#%*!/\\]+@[^\r\n@:$#%*!/\\]+/,punctuation:/:/,path:/[\s\S]+/}},bash:{pattern:/(^[$#%]\s*)\S[\s\S]*/,lookbehind:!0,alias:"language-bash",inside:t.languages.bash},"shell-symbol":{pattern:/^[$#%]/,alias:"important"}}},output:/.(?:.*(?:[\r\n]|.$))*/},t.languages["sh-session"]=t.languages.shellsession=t.languages["shell-session"]})(e)}Po.displayName="smali";Po.aliases=[];function Po(e){e.languages.smali={comment:/#.*/,string:{pattern:/"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\(?:.|u[\da-fA-F]{4}))'/,greedy:!0},"class-name":{pattern:/(^|[^L])L(?:(?:\w+|`[^`\r\n]*`)\/)*(?:[\w$]+|`[^`\r\n]*`)(?=\s*;)/,lookbehind:!0,inside:{"class-name":{pattern:/(^L|\/)(?:[\w$]+|`[^`\r\n]*`)$/,lookbehind:!0},namespace:{pattern:/^(L)(?:(?:\w+|`[^`\r\n]*`)\/)+/,lookbehind:!0,inside:{punctuation:/\//}},builtin:/^L/}},builtin:[{pattern:/([();\[])[BCDFIJSVZ]+/,lookbehind:!0},{pattern:/([\w$>]:)[BCDFIJSVZ]/,lookbehind:!0}],keyword:[{pattern:/(\.end\s+)[\w-]+/,lookbehind:!0},{pattern:/(^|[^\w.-])\.(?!\d)[\w-]+/,lookbehind:!0},{pattern:/(^|[^\w.-])(?:abstract|annotation|bridge|constructor|enum|final|interface|private|protected|public|runtime|static|synthetic|system|transient)(?![\w.-])/,lookbehind:!0}],function:{pattern:/(^|[^\w.-])(?:\w+|<[\w$-]+>)(?=\()/,lookbehind:!0},field:{pattern:/[\w$]+(?=:)/,alias:"variable"},register:{pattern:/(^|[^\w.-])[vp]\d(?![\w.-])/,lookbehind:!0,alias:"variable"},boolean:{pattern:/(^|[^\w.-])(?:false|true)(?![\w.-])/,lookbehind:!0},number:{pattern:/(^|[^/\w.-])-?(?:NAN|INFINITY|0x(?:[\dA-F]+(?:\.[\dA-F]*)?|\.[\dA-F]+)(?:p[+-]?[\dA-F]+)?|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)[dflst]?(?![\w.-])/i,lookbehind:!0},label:{pattern:/(:)\w+/,lookbehind:!0,alias:"property"},operator:/->|\.\.|[\[=]/,punctuation:/[{}(),;:]/}}Fo.displayName="smalltalk";Fo.aliases=[];function Fo(e){e.languages.smalltalk={comment:{pattern:/"(?:""|[^"])*"/,greedy:!0},char:{pattern:/\$./,greedy:!0},string:{pattern:/'(?:''|[^'])*'/,greedy:!0},symbol:/#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,"block-arguments":{pattern:/(\[\s*):[^\[|]*\|/,lookbehind:!0,inside:{variable:/:[\da-z]+/i,punctuation:/\|/}},"temporary-variables":{pattern:/\|[^|]+\|/,inside:{variable:/[\da-z]+/i,punctuation:/\|/}},keyword:/\b(?:new|nil|self|super)\b/,boolean:/\b(?:false|true)\b/,number:[/\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,/\b\d+(?:\.\d+)?(?:e-?\d+)?/],operator:/[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,punctuation:/[.;:?\[\](){}]/}}Bo.displayName="smarty";Bo.aliases=[];function Bo(e){e.register(oe),(function(t){t.languages.smarty={comment:{pattern:/^\{\*[\s\S]*?\*\}/,greedy:!0},"embedded-php":{pattern:/^\{php\}[\s\S]*?\{\/php\}/,greedy:!0,inside:{smarty:{pattern:/^\{php\}|\{\/php\}$/,inside:null},php:{pattern:/[\s\S]+/,alias:"language-php",inside:t.languages.php}}},string:[{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0,inside:{interpolation:{pattern:/\{[^{}]*\}|`[^`]*`/,inside:{"interpolation-punctuation":{pattern:/^[{`]|[`}]$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:null}}},variable:/\$\w+/}},{pattern:/'(?:\\.|[^'\\\r\n])*'/,greedy:!0}],keyword:{pattern:/(^\{\/?)[a-z_]\w*\b(?!\()/i,lookbehind:!0,greedy:!0},delimiter:{pattern:/^\{\/?|\}$/,greedy:!0,alias:"punctuation"},number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->|\w\s*=)(?!\d)\w+\b(?!\()/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],function:{pattern:/(\|\s*)@?[a-z_]\w*|\b[a-z_]\w*(?=\()/i,lookbehind:!0},"attr-name":/\b[a-z_]\w*(?=\s*=)/i,boolean:/\b(?:false|no|off|on|true|yes)\b/,punctuation:/[\[\](){}.,:`]|->/,operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:and|eq|gt?e|gt|lt?e|lt|mod|neq?|not|or)\b/]},t.languages.smarty["embedded-php"].inside.smarty.inside=t.languages.smarty,t.languages.smarty.string[0].inside.interpolation.inside.expression.inside=t.languages.smarty;var n=/"(?:\\.|[^"\\\r\n])*"|'(?:\\.|[^'\\\r\n])*'/,r=RegExp(/\{\*[\s\S]*?\*\}/.source+"|"+/\{php\}[\s\S]*?\{\/php\}/.source+"|"+/\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>|\{(?:[^{}"']|<str>)*\})*\})*\}/.source.replace(/<str>/g,function(){return n.source}),"g");t.hooks.add("before-tokenize",function(a){var i="{literal}",o="{/literal}",s=!1;t.languages["markup-templating"].buildPlaceholders(a,"smarty",r,function(u){return u===o&&(s=!1),s?!1:(u===i&&(s=!0),!0)})}),t.hooks.add("after-tokenize",function(a){t.languages["markup-templating"].tokenizePlaceholders(a,"smarty")})})(e)}Uo.displayName="sml";Uo.aliases=["smlnj"];function Uo(e){(function(t){var n=/\b(?:abstype|and|andalso|as|case|datatype|do|else|end|eqtype|exception|fn|fun|functor|handle|if|in|include|infix|infixr|let|local|nonfix|of|op|open|orelse|raise|rec|sharing|sig|signature|struct|structure|then|type|val|where|while|with|withtype)\b/i;t.languages.sml={comment:/\(\*(?:[^*(]|\*(?!\))|\((?!\*)|\(\*(?:[^*(]|\*(?!\))|\((?!\*))*\*\))*\*\)/,string:{pattern:/#?"(?:[^"\\]|\\.)*"/,greedy:!0},"class-name":[{pattern:RegExp(/((?:^|[^:]):\s*)<TERMINAL>(?:\s*(?:(?:\*|->)\s*<TERMINAL>|,\s*<TERMINAL>(?:(?=<NOT-LAST>)|(?!<NOT-LAST>)\s+<LONG-ID>)))*/.source.replace(/<NOT-LAST>/g,function(){return/\s*(?:[*,]|->)/.source}).replace(/<TERMINAL>/g,function(){return/(?:'[\w']*|<LONG-ID>|\((?:[^()]|\([^()]*\))*\)|\{(?:[^{}]|\{[^{}]*\})*\})(?:\s+<LONG-ID>)*/.source}).replace(/<LONG-ID>/g,function(){return/(?!<KEYWORD>)[a-z\d_][\w'.]*/.source}).replace(/<KEYWORD>/g,function(){return n.source}),"i"),lookbehind:!0,greedy:!0,inside:null},{pattern:/((?:^|[^\w'])(?:datatype|exception|functor|signature|structure|type)\s+)[a-z_][\w'.]*/i,lookbehind:!0}],function:{pattern:/((?:^|[^\w'])fun\s+)[a-z_][\w'.]*/i,lookbehind:!0},keyword:n,variable:{pattern:/(^|[^\w'])'[\w']*/,lookbehind:!0},number:/~?\b(?:\d+(?:\.\d+)?(?:e~?\d+)?|0x[\da-f]+)\b/i,word:{pattern:/\b0w(?:\d+|x[\da-f]+)\b/i,alias:"constant"},boolean:/\b(?:false|true)\b/i,operator:/\.\.\.|:[>=:]|=>?|->|[<>]=?|[!+\-*/^#|@~]/,punctuation:/[(){}\[\].:,;]/},t.languages.sml["class-name"][0].inside=t.languages.sml,t.languages.smlnj=t.languages.sml})(e)}Go.displayName="solidity";Go.aliases=["sol"];function Go(e){e.register(W),e.languages.solidity=e.languages.extend("clike",{"class-name":{pattern:/(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,lookbehind:!0},keyword:/\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,operator:/=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/}),e.languages.insertBefore("solidity","keyword",{builtin:/\b(?:address|bool|byte|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|string|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/}),e.languages.insertBefore("solidity","number",{version:{pattern:/([<>]=?|\^)\d+\.\d+\.\d+\b/,lookbehind:!0,alias:"number"}}),e.languages.sol=e.languages.solidity}Ho.displayName="solution-file";Ho.aliases=["sln"];function Ho(e){(function(t){var n={pattern:/\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i,alias:"constant",inside:{punctuation:/[{}]/}};t.languages["solution-file"]={comment:{pattern:/#.*/,greedy:!0},string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,greedy:!0,inside:{guid:n}},object:{pattern:/^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m,lookbehind:!0,greedy:!0,alias:"keyword"},property:{pattern:/^([ \t]*)(?!\s)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m,lookbehind:!0,inside:{guid:n}},guid:n,number:/\b\d+(?:\.\d+)*\b/,boolean:/\b(?:FALSE|TRUE)\b/,operator:/=/,punctuation:/[(),]/},t.languages.sln=t.languages["solution-file"]})(e)}$o.displayName="soy";$o.aliases=[];function $o(e){e.register(oe),(function(t){var n=/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r=/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;t.languages.soy={comment:[/\/\*[\s\S]*?\*\//,{pattern:/(\s)\/\/.*/,lookbehind:!0,greedy:!0}],"command-arg":{pattern:/(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,lookbehind:!0,alias:"string",inside:{punctuation:/\./}},parameter:{pattern:/(\{+\/?\s*@?param\??\s+)\.?[\w.]+/,lookbehind:!0,alias:"variable"},keyword:[{pattern:/(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,lookbehind:!0},/\b(?:any|as|attributes|bool|css|float|html|in|int|js|list|map|null|number|string|uri)\b/],delimiter:{pattern:/^\{+\/?|\/?\}+$/,alias:"punctuation"},property:/\w+(?==)/,variable:{pattern:/\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/,inside:{string:{pattern:n,greedy:!0},number:r,punctuation:/[\[\].?]/}},string:{pattern:n,greedy:!0},function:[/\w+(?=\()/,{pattern:/(\|[^\S\r\n]*)\w+/,lookbehind:!0}],boolean:/\b(?:false|true)\b/,number:r,operator:/\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,punctuation:/[{}()\[\]|.,:]/},t.hooks.add("before-tokenize",function(a){var i=/\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g,o="{literal}",s="{/literal}",u=!1;t.languages["markup-templating"].buildPlaceholders(a,"soy",i,function(l){return l===s&&(u=!1),u?!1:(l===o&&(u=!0),!0)})}),t.hooks.add("after-tokenize",function(a){t.languages["markup-templating"].tokenizePlaceholders(a,"soy")})})(e)}Bt.displayName="turtle";Bt.aliases=["trig"];function Bt(e){e.languages.turtle={comment:{pattern:/#.*/,greedy:!0},"multiline-string":{pattern:/"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/,greedy:!0,alias:"string",inside:{comment:/#.*/}},string:{pattern:/"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/,greedy:!0},url:{pattern:/<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/,greedy:!0,inside:{punctuation:/[<>]/}},function:{pattern:/(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,inside:{"local-name":{pattern:/([^:]*:)[\s\S]+/,lookbehind:!0},prefix:{pattern:/[\s\S]+/,inside:{punctuation:/:/}}}},number:/[+-]?\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,punctuation:/[{}.,;()[\]]|\^\^/,boolean:/\b(?:false|true)\b/,keyword:[/(?:\ba|@prefix|@base)\b|=/,/\b(?:base|graph|prefix)\b/i],tag:{pattern:/@[a-z]+(?:-[a-z\d]+)*/i,inside:{punctuation:/@/}}},e.languages.trig=e.languages.turtle}zo.displayName="sparql";zo.aliases=["rq"];function zo(e){e.register(Bt),e.languages.sparql=e.languages.extend("turtle",{boolean:/\b(?:false|true)\b/i,variable:{pattern:/[?$]\w+/,greedy:!0}}),e.languages.insertBefore("sparql","punctuation",{keyword:[/\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i,/\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|REGEX|REPLACE|ROUND|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i,/\b(?:BASE|GRAPH|PREFIX)\b/i]}),e.languages.rq=e.languages.sparql}Wo.displayName="splunk-spl";Wo.aliases=[];function Wo(e){e.languages["splunk-spl"]={comment:/`comment\("(?:\\.|[^\\"])*"\)`/,string:{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0},keyword:/\b(?:abstract|accum|addcoltotals|addinfo|addtotals|analyzefields|anomalies|anomalousvalue|anomalydetection|append|appendcols|appendcsv|appendlookup|appendpipe|arules|associate|audit|autoregress|bin|bucket|bucketdir|chart|cluster|cofilter|collect|concurrency|contingency|convert|correlate|datamodel|dbinspect|dedup|delete|delta|diff|erex|eval|eventcount|eventstats|extract|fieldformat|fields|fieldsummary|filldown|fillnull|findtypes|folderize|foreach|format|from|gauge|gentimes|geom|geomfilter|geostats|head|highlight|history|iconify|input|inputcsv|inputlookup|iplocation|join|kmeans|kv|kvform|loadjob|localize|localop|lookup|makecontinuous|makemv|makeresults|map|mcollect|metadata|metasearch|meventcollect|mstats|multikv|multisearch|mvcombine|mvexpand|nomv|outlier|outputcsv|outputlookup|outputtext|overlap|pivot|predict|rangemap|rare|regex|relevancy|reltime|rename|replace|rest|return|reverse|rex|rtorder|run|savedsearch|script|scrub|search|searchtxn|selfjoin|sendemail|set|setfields|sichart|sirare|sistats|sitimechart|sitop|sort|spath|stats|strcat|streamstats|table|tags|tail|timechart|timewrap|top|transaction|transpose|trendline|tscollect|tstats|typeahead|typelearner|typer|union|uniq|untable|where|x11|xmlkv|xmlunescape|xpath|xyseries)\b/i,"operator-word":{pattern:/\b(?:and|as|by|not|or|xor)\b/i,alias:"operator"},function:/\b\w+(?=\s*\()/,property:/\b\w+(?=\s*=(?!=))/,date:{pattern:/\b\d{1,2}\/\d{1,2}\/\d{1,4}(?:(?::\d{1,2}){3})?\b/,alias:"number"},number:/\b\d+(?:\.\d+)?\b/,boolean:/\b(?:f|false|t|true)\b/i,operator:/[<>=]=?|[-+*/%|]/,punctuation:/[()[\],]/}}Vo.displayName="sqf";Vo.aliases=[];function Vo(e){e.register(W),e.languages.sqf=e.languages.extend("clike",{string:{pattern:/"(?:(?:"")?[^"])*"(?!")|'(?:[^'])*'/,greedy:!0},keyword:/\b(?:breakOut|breakTo|call|case|catch|default|do|echo|else|execFSM|execVM|exitWith|for|forEach|forEachMember|forEachMemberAgent|forEachMemberTeam|from|goto|if|nil|preprocessFile|preprocessFileLineNumbers|private|scopeName|spawn|step|switch|then|throw|to|try|while|with)\b/i,boolean:/\b(?:false|true)\b/i,function:/\b(?:abs|accTime|acos|action|actionIDs|actionKeys|actionKeysImages|actionKeysNames|actionKeysNamesArray|actionName|actionParams|activateAddons|activatedAddons|activateKey|add3DENConnection|add3DENEventHandler|add3DENLayer|addAction|addBackpack|addBackpackCargo|addBackpackCargoGlobal|addBackpackGlobal|addCamShake|addCuratorAddons|addCuratorCameraArea|addCuratorEditableObjects|addCuratorEditingArea|addCuratorPoints|addEditorObject|addEventHandler|addForce|addForceGeneratorRTD|addGoggles|addGroupIcon|addHandgunItem|addHeadgear|addItem|addItemCargo|addItemCargoGlobal|addItemPool|addItemToBackpack|addItemToUniform|addItemToVest|addLiveStats|addMagazine|addMagazineAmmoCargo|addMagazineCargo|addMagazineCargoGlobal|addMagazineGlobal|addMagazinePool|addMagazines|addMagazineTurret|addMenu|addMenuItem|addMissionEventHandler|addMPEventHandler|addMusicEventHandler|addOwnedMine|addPlayerScores|addPrimaryWeaponItem|addPublicVariableEventHandler|addRating|addResources|addScore|addScoreSide|addSecondaryWeaponItem|addSwitchableUnit|addTeamMember|addToRemainsCollector|addTorque|addUniform|addVehicle|addVest|addWaypoint|addWeapon|addWeaponCargo|addWeaponCargoGlobal|addWeaponGlobal|addWeaponItem|addWeaponPool|addWeaponTurret|admin|agent|agents|AGLToASL|aimedAtTarget|aimPos|airDensityCurveRTD|airDensityRTD|airplaneThrottle|airportSide|AISFinishHeal|alive|all3DENEntities|allAirports|allControls|allCurators|allCutLayers|allDead|allDeadMen|allDisplays|allGroups|allMapMarkers|allMines|allMissionObjects|allow3DMode|allowCrewInImmobile|allowCuratorLogicIgnoreAreas|allowDamage|allowDammage|allowFileOperations|allowFleeing|allowGetIn|allowSprint|allPlayers|allSimpleObjects|allSites|allTurrets|allUnits|allUnitsUAV|allVariables|ammo|ammoOnPylon|animate|animateBay|animateDoor|animatePylon|animateSource|animationNames|animationPhase|animationSourcePhase|animationState|append|apply|armoryPoints|arrayIntersect|asin|ASLToAGL|ASLToATL|assert|assignAsCargo|assignAsCargoIndex|assignAsCommander|assignAsDriver|assignAsGunner|assignAsTurret|assignCurator|assignedCargo|assignedCommander|assignedDriver|assignedGunner|assignedItems|assignedTarget|assignedTeam|assignedVehicle|assignedVehicleRole|assignItem|assignTeam|assignToAirport|atan|atan2|atg|ATLToASL|attachedObject|attachedObjects|attachedTo|attachObject|attachTo|attackEnabled|backpack|backpackCargo|backpackContainer|backpackItems|backpackMagazines|backpackSpaceFor|behaviour|benchmark|binocular|blufor|boundingBox|boundingBoxReal|boundingCenter|briefingName|buildingExit|buildingPos|buldozer_EnableRoadDiag|buldozer_IsEnabledRoadDiag|buldozer_LoadNewRoads|buldozer_reloadOperMap|buttonAction|buttonSetAction|cadetMode|callExtension|camCommand|camCommit|camCommitPrepared|camCommitted|camConstuctionSetParams|camCreate|camDestroy|cameraEffect|cameraEffectEnableHUD|cameraInterest|cameraOn|cameraView|campaignConfigFile|camPreload|camPreloaded|camPrepareBank|camPrepareDir|camPrepareDive|camPrepareFocus|camPrepareFov|camPrepareFovRange|camPreparePos|camPrepareRelPos|camPrepareTarget|camSetBank|camSetDir|camSetDive|camSetFocus|camSetFov|camSetFovRange|camSetPos|camSetRelPos|camSetTarget|camTarget|camUseNVG|canAdd|canAddItemToBackpack|canAddItemToUniform|canAddItemToVest|cancelSimpleTaskDestination|canFire|canMove|canSlingLoad|canStand|canSuspend|canTriggerDynamicSimulation|canUnloadInCombat|canVehicleCargo|captive|captiveNum|cbChecked|cbSetChecked|ceil|channelEnabled|cheatsEnabled|checkAIFeature|checkVisibility|civilian|className|clear3DENAttribute|clear3DENInventory|clearAllItemsFromBackpack|clearBackpackCargo|clearBackpackCargoGlobal|clearForcesRTD|clearGroupIcons|clearItemCargo|clearItemCargoGlobal|clearItemPool|clearMagazineCargo|clearMagazineCargoGlobal|clearMagazinePool|clearOverlay|clearRadio|clearVehicleInit|clearWeaponCargo|clearWeaponCargoGlobal|clearWeaponPool|clientOwner|closeDialog|closeDisplay|closeOverlay|collapseObjectTree|collect3DENHistory|collectiveRTD|combatMode|commandArtilleryFire|commandChat|commander|commandFire|commandFollow|commandFSM|commandGetOut|commandingMenu|commandMove|commandRadio|commandStop|commandSuppressiveFire|commandTarget|commandWatch|comment|commitOverlay|compile|compileFinal|completedFSM|composeText|configClasses|configFile|configHierarchy|configName|configNull|configProperties|configSourceAddonList|configSourceMod|configSourceModList|confirmSensorTarget|connectTerminalToUAV|controlNull|controlsGroupCtrl|copyFromClipboard|copyToClipboard|copyWaypoints|cos|count|countEnemy|countFriendly|countSide|countType|countUnknown|create3DENComposition|create3DENEntity|createAgent|createCenter|createDialog|createDiaryLink|createDiaryRecord|createDiarySubject|createDisplay|createGearDialog|createGroup|createGuardedPoint|createLocation|createMarker|createMarkerLocal|createMenu|createMine|createMissionDisplay|createMPCampaignDisplay|createSimpleObject|createSimpleTask|createSite|createSoundSource|createTask|createTeam|createTrigger|createUnit|createVehicle|createVehicleCrew|createVehicleLocal|crew|ctAddHeader|ctAddRow|ctClear|ctCurSel|ctData|ctFindHeaderRows|ctFindRowHeader|ctHeaderControls|ctHeaderCount|ctRemoveHeaders|ctRemoveRows|ctrlActivate|ctrlAddEventHandler|ctrlAngle|ctrlAutoScrollDelay|ctrlAutoScrollRewind|ctrlAutoScrollSpeed|ctrlChecked|ctrlClassName|ctrlCommit|ctrlCommitted|ctrlCreate|ctrlDelete|ctrlEnable|ctrlEnabled|ctrlFade|ctrlHTMLLoaded|ctrlIDC|ctrlIDD|ctrlMapAnimAdd|ctrlMapAnimClear|ctrlMapAnimCommit|ctrlMapAnimDone|ctrlMapCursor|ctrlMapMouseOver|ctrlMapScale|ctrlMapScreenToWorld|ctrlMapWorldToScreen|ctrlModel|ctrlModelDirAndUp|ctrlModelScale|ctrlParent|ctrlParentControlsGroup|ctrlPosition|ctrlRemoveAllEventHandlers|ctrlRemoveEventHandler|ctrlScale|ctrlSetActiveColor|ctrlSetAngle|ctrlSetAutoScrollDelay|ctrlSetAutoScrollRewind|ctrlSetAutoScrollSpeed|ctrlSetBackgroundColor|ctrlSetChecked|ctrlSetDisabledColor|ctrlSetEventHandler|ctrlSetFade|ctrlSetFocus|ctrlSetFont|ctrlSetFontH1|ctrlSetFontH1B|ctrlSetFontH2|ctrlSetFontH2B|ctrlSetFontH3|ctrlSetFontH3B|ctrlSetFontH4|ctrlSetFontH4B|ctrlSetFontH5|ctrlSetFontH5B|ctrlSetFontH6|ctrlSetFontH6B|ctrlSetFontHeight|ctrlSetFontHeightH1|ctrlSetFontHeightH2|ctrlSetFontHeightH3|ctrlSetFontHeightH4|ctrlSetFontHeightH5|ctrlSetFontHeightH6|ctrlSetFontHeightSecondary|ctrlSetFontP|ctrlSetFontPB|ctrlSetFontSecondary|ctrlSetForegroundColor|ctrlSetModel|ctrlSetModelDirAndUp|ctrlSetModelScale|ctrlSetPixelPrecision|ctrlSetPosition|ctrlSetScale|ctrlSetStructuredText|ctrlSetText|ctrlSetTextColor|ctrlSetTextColorSecondary|ctrlSetTextSecondary|ctrlSetTooltip|ctrlSetTooltipColorBox|ctrlSetTooltipColorShade|ctrlSetTooltipColorText|ctrlShow|ctrlShown|ctrlText|ctrlTextHeight|ctrlTextSecondary|ctrlTextWidth|ctrlType|ctrlVisible|ctRowControls|ctRowCount|ctSetCurSel|ctSetData|ctSetHeaderTemplate|ctSetRowTemplate|ctSetValue|ctValue|curatorAddons|curatorCamera|curatorCameraArea|curatorCameraAreaCeiling|curatorCoef|curatorEditableObjects|curatorEditingArea|curatorEditingAreaType|curatorMouseOver|curatorPoints|curatorRegisteredObjects|curatorSelected|curatorWaypointCost|current3DENOperation|currentChannel|currentCommand|currentMagazine|currentMagazineDetail|currentMagazineDetailTurret|currentMagazineTurret|currentMuzzle|currentNamespace|currentTask|currentTasks|currentThrowable|currentVisionMode|currentWaypoint|currentWeapon|currentWeaponMode|currentWeaponTurret|currentZeroing|cursorObject|cursorTarget|customChat|customRadio|cutFadeOut|cutObj|cutRsc|cutText|damage|date|dateToNumber|daytime|deActivateKey|debriefingText|debugFSM|debugLog|deg|delete3DENEntities|deleteAt|deleteCenter|deleteCollection|deleteEditorObject|deleteGroup|deleteGroupWhenEmpty|deleteIdentity|deleteLocation|deleteMarker|deleteMarkerLocal|deleteRange|deleteResources|deleteSite|deleteStatus|deleteTeam|deleteVehicle|deleteVehicleCrew|deleteWaypoint|detach|detectedMines|diag_activeMissionFSMs|diag_activeScripts|diag_activeSQFScripts|diag_activeSQSScripts|diag_captureFrame|diag_captureFrameToFile|diag_captureSlowFrame|diag_codePerformance|diag_drawMode|diag_dynamicSimulationEnd|diag_enable|diag_enabled|diag_fps|diag_fpsMin|diag_frameNo|diag_lightNewLoad|diag_list|diag_log|diag_logSlowFrame|diag_mergeConfigFile|diag_recordTurretLimits|diag_setLightNew|diag_tickTime|diag_toggle|dialog|diarySubjectExists|didJIP|didJIPOwner|difficulty|difficultyEnabled|difficultyEnabledRTD|difficultyOption|direction|directSay|disableAI|disableCollisionWith|disableConversation|disableDebriefingStats|disableMapIndicators|disableNVGEquipment|disableRemoteSensors|disableSerialization|disableTIEquipment|disableUAVConnectability|disableUserInput|displayAddEventHandler|displayCtrl|displayNull|displayParent|displayRemoveAllEventHandlers|displayRemoveEventHandler|displaySetEventHandler|dissolveTeam|distance|distance2D|distanceSqr|distributionRegion|do3DENAction|doArtilleryFire|doFire|doFollow|doFSM|doGetOut|doMove|doorPhase|doStop|doSuppressiveFire|doTarget|doWatch|drawArrow|drawEllipse|drawIcon|drawIcon3D|drawLine|drawLine3D|drawLink|drawLocation|drawPolygon|drawRectangle|drawTriangle|driver|drop|dynamicSimulationDistance|dynamicSimulationDistanceCoef|dynamicSimulationEnabled|dynamicSimulationSystemEnabled|east|edit3DENMissionAttributes|editObject|editorSetEventHandler|effectiveCommander|emptyPositions|enableAI|enableAIFeature|enableAimPrecision|enableAttack|enableAudioFeature|enableAutoStartUpRTD|enableAutoTrimRTD|enableCamShake|enableCaustics|enableChannel|enableCollisionWith|enableCopilot|enableDebriefingStats|enableDiagLegend|enableDynamicSimulation|enableDynamicSimulationSystem|enableEndDialog|enableEngineArtillery|enableEnvironment|enableFatigue|enableGunLights|enableInfoPanelComponent|enableIRLasers|enableMimics|enablePersonTurret|enableRadio|enableReload|enableRopeAttach|enableSatNormalOnDetail|enableSaving|enableSentences|enableSimulation|enableSimulationGlobal|enableStamina|enableStressDamage|enableTeamSwitch|enableTraffic|enableUAVConnectability|enableUAVWaypoints|enableVehicleCargo|enableVehicleSensor|enableWeaponDisassembly|endl|endLoadingScreen|endMission|engineOn|enginesIsOnRTD|enginesPowerRTD|enginesRpmRTD|enginesTorqueRTD|entities|environmentEnabled|estimatedEndServerTime|estimatedTimeLeft|evalObjectArgument|everyBackpack|everyContainer|exec|execEditorScript|exp|expectedDestination|exportJIPMessages|eyeDirection|eyePos|face|faction|fadeMusic|fadeRadio|fadeSound|fadeSpeech|failMission|fillWeaponsFromPool|find|findCover|findDisplay|findEditorObject|findEmptyPosition|findEmptyPositionReady|findIf|findNearestEnemy|finishMissionInit|finite|fire|fireAtTarget|firstBackpack|flag|flagAnimationPhase|flagOwner|flagSide|flagTexture|fleeing|floor|flyInHeight|flyInHeightASL|fog|fogForecast|fogParams|forceAddUniform|forceAtPositionRTD|forcedMap|forceEnd|forceFlagTexture|forceFollowRoad|forceGeneratorRTD|forceMap|forceRespawn|forceSpeed|forceWalk|forceWeaponFire|forceWeatherChange|forgetTarget|format|formation|formationDirection|formationLeader|formationMembers|formationPosition|formationTask|formatText|formLeader|freeLook|fromEditor|fuel|fullCrew|gearIDCAmmoCount|gearSlotAmmoCount|gearSlotData|get3DENActionState|get3DENAttribute|get3DENCamera|get3DENConnections|get3DENEntity|get3DENEntityID|get3DENGrid|get3DENIconsVisible|get3DENLayerEntities|get3DENLinesVisible|get3DENMissionAttribute|get3DENMouseOver|get3DENSelected|getAimingCoef|getAllEnvSoundControllers|getAllHitPointsDamage|getAllOwnedMines|getAllSoundControllers|getAmmoCargo|getAnimAimPrecision|getAnimSpeedCoef|getArray|getArtilleryAmmo|getArtilleryComputerSettings|getArtilleryETA|getAssignedCuratorLogic|getAssignedCuratorUnit|getBackpackCargo|getBleedingRemaining|getBurningValue|getCameraViewDirection|getCargoIndex|getCenterOfMass|getClientState|getClientStateNumber|getCompatiblePylonMagazines|getConnectedUAV|getContainerMaxLoad|getCursorObjectParams|getCustomAimCoef|getDammage|getDescription|getDir|getDirVisual|getDLCAssetsUsage|getDLCAssetsUsageByName|getDLCs|getDLCUsageTime|getEditorCamera|getEditorMode|getEditorObjectScope|getElevationOffset|getEngineTargetRpmRTD|getEnvSoundController|getFatigue|getFieldManualStartPage|getForcedFlagTexture|getFriend|getFSMVariable|getFuelCargo|getGroupIcon|getGroupIconParams|getGroupIcons|getHideFrom|getHit|getHitIndex|getHitPointDamage|getItemCargo|getMagazineCargo|getMarkerColor|getMarkerPos|getMarkerSize|getMarkerType|getMass|getMissionConfig|getMissionConfigValue|getMissionDLCs|getMissionLayerEntities|getMissionLayers|getModelInfo|getMousePosition|getMusicPlayedTime|getNumber|getObjectArgument|getObjectChildren|getObjectDLC|getObjectMaterials|getObjectProxy|getObjectTextures|getObjectType|getObjectViewDistance|getOxygenRemaining|getPersonUsedDLCs|getPilotCameraDirection|getPilotCameraPosition|getPilotCameraRotation|getPilotCameraTarget|getPlateNumber|getPlayerChannel|getPlayerScores|getPlayerUID|getPlayerUIDOld|getPos|getPosASL|getPosASLVisual|getPosASLW|getPosATL|getPosATLVisual|getPosVisual|getPosWorld|getPylonMagazines|getRelDir|getRelPos|getRemoteSensorsDisabled|getRepairCargo|getResolution|getRotorBrakeRTD|getShadowDistance|getShotParents|getSlingLoad|getSoundController|getSoundControllerResult|getSpeed|getStamina|getStatValue|getSuppression|getTerrainGrid|getTerrainHeightASL|getText|getTotalDLCUsageTime|getTrimOffsetRTD|getUnitLoadout|getUnitTrait|getUserMFDText|getUserMFDValue|getVariable|getVehicleCargo|getWeaponCargo|getWeaponSway|getWingsOrientationRTD|getWingsPositionRTD|getWPPos|glanceAt|globalChat|globalRadio|goggles|group|groupChat|groupFromNetId|groupIconSelectable|groupIconsVisible|groupId|groupOwner|groupRadio|groupSelectedUnits|groupSelectUnit|grpNull|gunner|gusts|halt|handgunItems|handgunMagazine|handgunWeapon|handsHit|hasInterface|hasPilotCamera|hasWeapon|hcAllGroups|hcGroupParams|hcLeader|hcRemoveAllGroups|hcRemoveGroup|hcSelected|hcSelectGroup|hcSetGroup|hcShowBar|hcShownBar|headgear|hideBody|hideObject|hideObjectGlobal|hideSelection|hint|hintC|hintCadet|hintSilent|hmd|hostMission|htmlLoad|HUDMovementLevels|humidity|image|importAllGroups|importance|in|inArea|inAreaArray|incapacitatedState|independent|inflame|inflamed|infoPanel|infoPanelComponentEnabled|infoPanelComponents|infoPanels|inGameUISetEventHandler|inheritsFrom|initAmbientLife|inPolygon|inputAction|inRangeOfArtillery|insertEditorObject|intersect|is3DEN|is3DENMultiplayer|isAbleToBreathe|isAgent|isAimPrecisionEnabled|isArray|isAutoHoverOn|isAutonomous|isAutoStartUpEnabledRTD|isAutotest|isAutoTrimOnRTD|isBleeding|isBurning|isClass|isCollisionLightOn|isCopilotEnabled|isDamageAllowed|isDedicated|isDLCAvailable|isEngineOn|isEqualTo|isEqualType|isEqualTypeAll|isEqualTypeAny|isEqualTypeArray|isEqualTypeParams|isFilePatchingEnabled|isFlashlightOn|isFlatEmpty|isForcedWalk|isFormationLeader|isGroupDeletedWhenEmpty|isHidden|isInRemainsCollector|isInstructorFigureEnabled|isIRLaserOn|isKeyActive|isKindOf|isLaserOn|isLightOn|isLocalized|isManualFire|isMarkedForCollection|isMultiplayer|isMultiplayerSolo|isNil|isNull|isNumber|isObjectHidden|isObjectRTD|isOnRoad|isPipEnabled|isPlayer|isRealTime|isRemoteExecuted|isRemoteExecutedJIP|isServer|isShowing3DIcons|isSimpleObject|isSprintAllowed|isStaminaEnabled|isSteamMission|isStreamFriendlyUIEnabled|isStressDamageEnabled|isText|isTouchingGround|isTurnedOut|isTutHintsEnabled|isUAVConnectable|isUAVConnected|isUIContext|isUniformAllowed|isVehicleCargo|isVehicleRadarOn|isVehicleSensorEnabled|isWalking|isWeaponDeployed|isWeaponRested|itemCargo|items|itemsWithMagazines|join|joinAs|joinAsSilent|joinSilent|joinString|kbAddDatabase|kbAddDatabaseTargets|kbAddTopic|kbHasTopic|kbReact|kbRemoveTopic|kbTell|kbWasSaid|keyImage|keyName|knowsAbout|land|landAt|landResult|language|laserTarget|lbAdd|lbClear|lbColor|lbColorRight|lbCurSel|lbData|lbDelete|lbIsSelected|lbPicture|lbPictureRight|lbSelection|lbSetColor|lbSetColorRight|lbSetCurSel|lbSetData|lbSetPicture|lbSetPictureColor|lbSetPictureColorDisabled|lbSetPictureColorSelected|lbSetPictureRight|lbSetPictureRightColor|lbSetPictureRightColorDisabled|lbSetPictureRightColorSelected|lbSetSelectColor|lbSetSelectColorRight|lbSetSelected|lbSetText|lbSetTextRight|lbSetTooltip|lbSetValue|lbSize|lbSort|lbSortByValue|lbText|lbTextRight|lbValue|leader|leaderboardDeInit|leaderboardGetRows|leaderboardInit|leaderboardRequestRowsFriends|leaderboardRequestRowsGlobal|leaderboardRequestRowsGlobalAroundUser|leaderboardsRequestUploadScore|leaderboardsRequestUploadScoreKeepBest|leaderboardState|leaveVehicle|libraryCredits|libraryDisclaimers|lifeState|lightAttachObject|lightDetachObject|lightIsOn|lightnings|limitSpeed|linearConversion|lineBreak|lineIntersects|lineIntersectsObjs|lineIntersectsSurfaces|lineIntersectsWith|linkItem|list|listObjects|listRemoteTargets|listVehicleSensors|ln|lnbAddArray|lnbAddColumn|lnbAddRow|lnbClear|lnbColor|lnbColorRight|lnbCurSelRow|lnbData|lnbDeleteColumn|lnbDeleteRow|lnbGetColumnsPosition|lnbPicture|lnbPictureRight|lnbSetColor|lnbSetColorRight|lnbSetColumnsPos|lnbSetCurSelRow|lnbSetData|lnbSetPicture|lnbSetPictureColor|lnbSetPictureColorRight|lnbSetPictureColorSelected|lnbSetPictureColorSelectedRight|lnbSetPictureRight|lnbSetText|lnbSetTextRight|lnbSetValue|lnbSize|lnbSort|lnbSortByValue|lnbText|lnbTextRight|lnbValue|load|loadAbs|loadBackpack|loadFile|loadGame|loadIdentity|loadMagazine|loadOverlay|loadStatus|loadUniform|loadVest|local|localize|locationNull|locationPosition|lock|lockCameraTo|lockCargo|lockDriver|locked|lockedCargo|lockedDriver|lockedTurret|lockIdentity|lockTurret|lockWP|log|logEntities|logNetwork|logNetworkTerminate|lookAt|lookAtPos|magazineCargo|magazines|magazinesAllTurrets|magazinesAmmo|magazinesAmmoCargo|magazinesAmmoFull|magazinesDetail|magazinesDetailBackpack|magazinesDetailUniform|magazinesDetailVest|magazinesTurret|magazineTurretAmmo|mapAnimAdd|mapAnimClear|mapAnimCommit|mapAnimDone|mapCenterOnCamera|mapGridPosition|markAsFinishedOnSteam|markerAlpha|markerBrush|markerColor|markerDir|markerPos|markerShape|markerSize|markerText|markerType|max|members|menuAction|menuAdd|menuChecked|menuClear|menuCollapse|menuData|menuDelete|menuEnable|menuEnabled|menuExpand|menuHover|menuPicture|menuSetAction|menuSetCheck|menuSetData|menuSetPicture|menuSetValue|menuShortcut|menuShortcutText|menuSize|menuSort|menuText|menuURL|menuValue|min|mineActive|mineDetectedBy|missionConfigFile|missionDifficulty|missionName|missionNamespace|missionStart|missionVersion|modelToWorld|modelToWorldVisual|modelToWorldVisualWorld|modelToWorldWorld|modParams|moonIntensity|moonPhase|morale|move|move3DENCamera|moveInAny|moveInCargo|moveInCommander|moveInDriver|moveInGunner|moveInTurret|moveObjectToEnd|moveOut|moveTime|moveTo|moveToCompleted|moveToFailed|musicVolume|name|nameSound|nearEntities|nearestBuilding|nearestLocation|nearestLocations|nearestLocationWithDubbing|nearestObject|nearestObjects|nearestTerrainObjects|nearObjects|nearObjectsReady|nearRoads|nearSupplies|nearTargets|needReload|netId|netObjNull|newOverlay|nextMenuItemIndex|nextWeatherChange|nMenuItems|numberOfEnginesRTD|numberToDate|objectCurators|objectFromNetId|objectParent|objNull|objStatus|onBriefingGear|onBriefingGroup|onBriefingNotes|onBriefingPlan|onBriefingTeamSwitch|onCommandModeChanged|onDoubleClick|onEachFrame|onGroupIconClick|onGroupIconOverEnter|onGroupIconOverLeave|onHCGroupSelectionChanged|onMapSingleClick|onPlayerConnected|onPlayerDisconnected|onPreloadFinished|onPreloadStarted|onShowNewObject|onTeamSwitch|openCuratorInterface|openDLCPage|openDSInterface|openMap|openSteamApp|openYoutubeVideo|opfor|orderGetIn|overcast|overcastForecast|owner|param|params|parseNumber|parseSimpleArray|parseText|parsingNamespace|particlesQuality|pi|pickWeaponPool|pitch|pixelGrid|pixelGridBase|pixelGridNoUIScale|pixelH|pixelW|playableSlotsNumber|playableUnits|playAction|playActionNow|player|playerRespawnTime|playerSide|playersNumber|playGesture|playMission|playMove|playMoveNow|playMusic|playScriptedMission|playSound|playSound3D|position|positionCameraToWorld|posScreenToWorld|posWorldToScreen|ppEffectAdjust|ppEffectCommit|ppEffectCommitted|ppEffectCreate|ppEffectDestroy|ppEffectEnable|ppEffectEnabled|ppEffectForceInNVG|precision|preloadCamera|preloadObject|preloadSound|preloadTitleObj|preloadTitleRsc|primaryWeapon|primaryWeaponItems|primaryWeaponMagazine|priority|processDiaryLink|processInitCommands|productVersion|profileName|profileNamespace|profileNameSteam|progressLoadingScreen|progressPosition|progressSetPosition|publicVariable|publicVariableClient|publicVariableServer|pushBack|pushBackUnique|putWeaponPool|queryItemsPool|queryMagazinePool|queryWeaponPool|rad|radioChannelAdd|radioChannelCreate|radioChannelRemove|radioChannelSetCallSign|radioChannelSetLabel|radioVolume|rain|rainbow|random|rank|rankId|rating|rectangular|registeredTasks|registerTask|reload|reloadEnabled|remoteControl|remoteExec|remoteExecCall|remoteExecutedOwner|remove3DENConnection|remove3DENEventHandler|remove3DENLayer|removeAction|removeAll3DENEventHandlers|removeAllActions|removeAllAssignedItems|removeAllContainers|removeAllCuratorAddons|removeAllCuratorCameraAreas|removeAllCuratorEditingAreas|removeAllEventHandlers|removeAllHandgunItems|removeAllItems|removeAllItemsWithMagazines|removeAllMissionEventHandlers|removeAllMPEventHandlers|removeAllMusicEventHandlers|removeAllOwnedMines|removeAllPrimaryWeaponItems|removeAllWeapons|removeBackpack|removeBackpackGlobal|removeCuratorAddons|removeCuratorCameraArea|removeCuratorEditableObjects|removeCuratorEditingArea|removeDrawIcon|removeDrawLinks|removeEventHandler|removeFromRemainsCollector|removeGoggles|removeGroupIcon|removeHandgunItem|removeHeadgear|removeItem|removeItemFromBackpack|removeItemFromUniform|removeItemFromVest|removeItems|removeMagazine|removeMagazineGlobal|removeMagazines|removeMagazinesTurret|removeMagazineTurret|removeMenuItem|removeMissionEventHandler|removeMPEventHandler|removeMusicEventHandler|removeOwnedMine|removePrimaryWeaponItem|removeSecondaryWeaponItem|removeSimpleTask|removeSwitchableUnit|removeTeamMember|removeUniform|removeVest|removeWeapon|removeWeaponAttachmentCargo|removeWeaponCargo|removeWeaponGlobal|removeWeaponTurret|reportRemoteTarget|requiredVersion|resetCamShake|resetSubgroupDirection|resistance|resize|resources|respawnVehicle|restartEditorCamera|reveal|revealMine|reverse|reversedMouseY|roadAt|roadsConnectedTo|roleDescription|ropeAttachedObjects|ropeAttachedTo|ropeAttachEnabled|ropeAttachTo|ropeCreate|ropeCut|ropeDestroy|ropeDetach|ropeEndPosition|ropeLength|ropes|ropeUnwind|ropeUnwound|rotorsForcesRTD|rotorsRpmRTD|round|runInitScript|safeZoneH|safeZoneW|safeZoneWAbs|safeZoneX|safeZoneXAbs|safeZoneY|save3DENInventory|saveGame|saveIdentity|saveJoysticks|saveOverlay|saveProfileNamespace|saveStatus|saveVar|savingEnabled|say|say2D|say3D|score|scoreSide|screenshot|screenToWorld|scriptDone|scriptName|scriptNull|scudState|secondaryWeapon|secondaryWeaponItems|secondaryWeaponMagazine|select|selectBestPlaces|selectDiarySubject|selectedEditorObjects|selectEditorObject|selectionNames|selectionPosition|selectLeader|selectMax|selectMin|selectNoPlayer|selectPlayer|selectRandom|selectRandomWeighted|selectWeapon|selectWeaponTurret|sendAUMessage|sendSimpleCommand|sendTask|sendTaskResult|sendUDPMessage|serverCommand|serverCommandAvailable|serverCommandExecutable|serverName|serverTime|set|set3DENAttribute|set3DENAttributes|set3DENGrid|set3DENIconsVisible|set3DENLayer|set3DENLinesVisible|set3DENLogicType|set3DENMissionAttribute|set3DENMissionAttributes|set3DENModelsVisible|set3DENObjectType|set3DENSelected|setAccTime|setActualCollectiveRTD|setAirplaneThrottle|setAirportSide|setAmmo|setAmmoCargo|setAmmoOnPylon|setAnimSpeedCoef|setAperture|setApertureNew|setArmoryPoints|setAttributes|setAutonomous|setBehaviour|setBleedingRemaining|setBrakesRTD|setCameraInterest|setCamShakeDefParams|setCamShakeParams|setCamUseTI|setCaptive|setCenterOfMass|setCollisionLight|setCombatMode|setCompassOscillation|setConvoySeparation|setCuratorCameraAreaCeiling|setCuratorCoef|setCuratorEditingAreaType|setCuratorWaypointCost|setCurrentChannel|setCurrentTask|setCurrentWaypoint|setCustomAimCoef|setCustomWeightRTD|setDamage|setDammage|setDate|setDebriefingText|setDefaultCamera|setDestination|setDetailMapBlendPars|setDir|setDirection|setDrawIcon|setDriveOnPath|setDropInterval|setDynamicSimulationDistance|setDynamicSimulationDistanceCoef|setEditorMode|setEditorObjectScope|setEffectCondition|setEngineRpmRTD|setFace|setFaceAnimation|setFatigue|setFeatureType|setFlagAnimationPhase|setFlagOwner|setFlagSide|setFlagTexture|setFog|setForceGeneratorRTD|setFormation|setFormationTask|setFormDir|setFriend|setFromEditor|setFSMVariable|setFuel|setFuelCargo|setGroupIcon|setGroupIconParams|setGroupIconsSelectable|setGroupIconsVisible|setGroupId|setGroupIdGlobal|setGroupOwner|setGusts|setHideBehind|setHit|setHitIndex|setHitPointDamage|setHorizonParallaxCoef|setHUDMovementLevels|setIdentity|setImportance|setInfoPanel|setLeader|setLightAmbient|setLightAttenuation|setLightBrightness|setLightColor|setLightDayLight|setLightFlareMaxDistance|setLightFlareSize|setLightIntensity|setLightnings|setLightUseFlare|setLocalWindParams|setMagazineTurretAmmo|setMarkerAlpha|setMarkerAlphaLocal|setMarkerBrush|setMarkerBrushLocal|setMarkerColor|setMarkerColorLocal|setMarkerDir|setMarkerDirLocal|setMarkerPos|setMarkerPosLocal|setMarkerShape|setMarkerShapeLocal|setMarkerSize|setMarkerSizeLocal|setMarkerText|setMarkerTextLocal|setMarkerType|setMarkerTypeLocal|setMass|setMimic|setMousePosition|setMusicEffect|setMusicEventHandler|setName|setNameSound|setObjectArguments|setObjectMaterial|setObjectMaterialGlobal|setObjectProxy|setObjectTexture|setObjectTextureGlobal|setObjectViewDistance|setOvercast|setOwner|setOxygenRemaining|setParticleCircle|setParticleClass|setParticleFire|setParticleParams|setParticleRandom|setPilotCameraDirection|setPilotCameraRotation|setPilotCameraTarget|setPilotLight|setPiPEffect|setPitch|setPlateNumber|setPlayable|setPlayerRespawnTime|setPos|setPosASL|setPosASL2|setPosASLW|setPosATL|setPosition|setPosWorld|setPylonLoadOut|setPylonsPriority|setRadioMsg|setRain|setRainbow|setRandomLip|setRank|setRectangular|setRepairCargo|setRotorBrakeRTD|setShadowDistance|setShotParents|setSide|setSimpleTaskAlwaysVisible|setSimpleTaskCustomData|setSimpleTaskDescription|setSimpleTaskDestination|setSimpleTaskTarget|setSimpleTaskType|setSimulWeatherLayers|setSize|setSkill|setSlingLoad|setSoundEffect|setSpeaker|setSpeech|setSpeedMode|setStamina|setStaminaScheme|setStatValue|setSuppression|setSystemOfUnits|setTargetAge|setTaskMarkerOffset|setTaskResult|setTaskState|setTerrainGrid|setText|setTimeMultiplier|setTitleEffect|setToneMapping|setToneMappingParams|setTrafficDensity|setTrafficDistance|setTrafficGap|setTrafficSpeed|setTriggerActivation|setTriggerArea|setTriggerStatements|setTriggerText|setTriggerTimeout|setTriggerType|setType|setUnconscious|setUnitAbility|setUnitLoadout|setUnitPos|setUnitPosWeak|setUnitRank|setUnitRecoilCoefficient|setUnitTrait|setUnloadInCombat|setUserActionText|setUserMFDText|setUserMFDValue|setVariable|setVectorDir|setVectorDirAndUp|setVectorUp|setVehicleAmmo|setVehicleAmmoDef|setVehicleArmor|setVehicleCargo|setVehicleId|setVehicleInit|setVehicleLock|setVehiclePosition|setVehicleRadar|setVehicleReceiveRemoteTargets|setVehicleReportOwnPosition|setVehicleReportRemoteTargets|setVehicleTIPars|setVehicleVarName|setVelocity|setVelocityModelSpace|setVelocityTransformation|setViewDistance|setVisibleIfTreeCollapsed|setWantedRpmRTD|setWaves|setWaypointBehaviour|setWaypointCombatMode|setWaypointCompletionRadius|setWaypointDescription|setWaypointForceBehaviour|setWaypointFormation|setWaypointHousePosition|setWaypointLoiterRadius|setWaypointLoiterType|setWaypointName|setWaypointPosition|setWaypointScript|setWaypointSpeed|setWaypointStatements|setWaypointTimeout|setWaypointType|setWaypointVisible|setWeaponReloadingTime|setWind|setWindDir|setWindForce|setWindStr|setWingForceScaleRTD|setWPPos|show3DIcons|showChat|showCinemaBorder|showCommandingMenu|showCompass|showCuratorCompass|showGPS|showHUD|showLegend|showMap|shownArtilleryComputer|shownChat|shownCompass|shownCuratorCompass|showNewEditorObject|shownGPS|shownHUD|shownMap|shownPad|shownRadio|shownScoretable|shownUAVFeed|shownWarrant|shownWatch|showPad|showRadio|showScoretable|showSubtitles|showUAVFeed|showWarrant|showWatch|showWaypoint|showWaypoints|side|sideAmbientLife|sideChat|sideEmpty|sideEnemy|sideFriendly|sideLogic|sideRadio|sideUnknown|simpleTasks|simulationEnabled|simulCloudDensity|simulCloudOcclusion|simulInClouds|simulWeatherSync|sin|size|sizeOf|skill|skillFinal|skipTime|sleep|sliderPosition|sliderRange|sliderSetPosition|sliderSetRange|sliderSetSpeed|sliderSpeed|slingLoadAssistantShown|soldierMagazines|someAmmo|sort|soundVolume|speaker|speed|speedMode|splitString|sqrt|squadParams|stance|startLoadingScreen|stop|stopEngineRTD|stopped|str|sunOrMoon|supportInfo|suppressFor|surfaceIsWater|surfaceNormal|surfaceType|swimInDepth|switchableUnits|switchAction|switchCamera|switchGesture|switchLight|switchMove|synchronizedObjects|synchronizedTriggers|synchronizedWaypoints|synchronizeObjectsAdd|synchronizeObjectsRemove|synchronizeTrigger|synchronizeWaypoint|systemChat|systemOfUnits|tan|targetKnowledge|targets|targetsAggregate|targetsQuery|taskAlwaysVisible|taskChildren|taskCompleted|taskCustomData|taskDescription|taskDestination|taskHint|taskMarkerOffset|taskNull|taskParent|taskResult|taskState|taskType|teamMember|teamMemberNull|teamName|teams|teamSwitch|teamSwitchEnabled|teamType|terminate|terrainIntersect|terrainIntersectASL|terrainIntersectAtASL|text|textLog|textLogFormat|tg|time|timeMultiplier|titleCut|titleFadeOut|titleObj|titleRsc|titleText|toArray|toFixed|toLower|toString|toUpper|triggerActivated|triggerActivation|triggerArea|triggerAttachedVehicle|triggerAttachObject|triggerAttachVehicle|triggerDynamicSimulation|triggerStatements|triggerText|triggerTimeout|triggerTimeoutCurrent|triggerType|turretLocal|turretOwner|turretUnit|tvAdd|tvClear|tvCollapse|tvCollapseAll|tvCount|tvCurSel|tvData|tvDelete|tvExpand|tvExpandAll|tvPicture|tvPictureRight|tvSetColor|tvSetCurSel|tvSetData|tvSetPicture|tvSetPictureColor|tvSetPictureColorDisabled|tvSetPictureColorSelected|tvSetPictureRight|tvSetPictureRightColor|tvSetPictureRightColorDisabled|tvSetPictureRightColorSelected|tvSetSelectColor|tvSetText|tvSetTooltip|tvSetValue|tvSort|tvSortByValue|tvText|tvTooltip|tvValue|type|typeName|typeOf|UAVControl|uiNamespace|uiSleep|unassignCurator|unassignItem|unassignTeam|unassignVehicle|underwater|uniform|uniformContainer|uniformItems|uniformMagazines|unitAddons|unitAimPosition|unitAimPositionVisual|unitBackpack|unitIsUAV|unitPos|unitReady|unitRecoilCoefficient|units|unitsBelowHeight|unlinkItem|unlockAchievement|unregisterTask|updateDrawIcon|updateMenuItem|updateObjectTree|useAIOperMapObstructionTest|useAISteeringComponent|useAudioTimeForMoves|userInputDisabled|vectorAdd|vectorCos|vectorCrossProduct|vectorDiff|vectorDir|vectorDirVisual|vectorDistance|vectorDistanceSqr|vectorDotProduct|vectorFromTo|vectorMagnitude|vectorMagnitudeSqr|vectorModelToWorld|vectorModelToWorldVisual|vectorMultiply|vectorNormalized|vectorUp|vectorUpVisual|vectorWorldToModel|vectorWorldToModelVisual|vehicle|vehicleCargoEnabled|vehicleChat|vehicleRadio|vehicleReceiveRemoteTargets|vehicleReportOwnPosition|vehicleReportRemoteTargets|vehicles|vehicleVarName|velocity|velocityModelSpace|verifySignature|vest|vestContainer|vestItems|vestMagazines|viewDistance|visibleCompass|visibleGPS|visibleMap|visiblePosition|visiblePositionASL|visibleScoretable|visibleWatch|waitUntil|waves|waypointAttachedObject|waypointAttachedVehicle|waypointAttachObject|waypointAttachVehicle|waypointBehaviour|waypointCombatMode|waypointCompletionRadius|waypointDescription|waypointForceBehaviour|waypointFormation|waypointHousePosition|waypointLoiterRadius|waypointLoiterType|waypointName|waypointPosition|waypoints|waypointScript|waypointsEnabledUAV|waypointShow|waypointSpeed|waypointStatements|waypointTimeout|waypointTimeoutCurrent|waypointType|waypointVisible|weaponAccessories|weaponAccessoriesCargo|weaponCargo|weaponDirection|weaponInertia|weaponLowered|weapons|weaponsItems|weaponsItemsCargo|weaponState|weaponsTurret|weightRTD|west|WFSideText|wind|windDir|windRTD|windStr|wingsForcesRTD|worldName|worldSize|worldToModel|worldToModelVisual|worldToScreen)\b/i,number:/(?:\$|\b0x)[\da-f]+\b|(?:\B\.\d+|\b\d+(?:\.\d+)?)(?:e[+-]?\d+)?\b/i,operator:/##|>>|&&|\|\||[!=<>]=?|[-+*/%#^]|\b(?:and|mod|not|or)\b/i,"magic-variable":{pattern:/\b(?:this|thisList|thisTrigger|_exception|_fnc_scriptName|_fnc_scriptNameParent|_forEachIndex|_this|_thisEventHandler|_thisFSM|_thisScript|_x)\b/i,alias:"keyword"},constant:/\bDIK(?:_[a-z\d]+)+\b/i}),e.languages.insertBefore("sqf","string",{macro:{pattern:/(^[ \t]*)#[a-z](?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{directive:{pattern:/#[a-z]+\b/i,alias:"keyword"},comment:e.languages.sqf.comment}}}),delete e.languages.sqf["class-name"]}jo.displayName="squirrel";jo.aliases=[];function jo(e){e.register(W),e.languages.squirrel=e.languages.extend("clike",{comment:[e.languages.clike.comment[0],{pattern:/(^|[^\\:])(?:\/\/|#).*/,lookbehind:!0,greedy:!0}],string:{pattern:/(^|[^\\"'@])(?:@"(?:[^"]|"")*"(?!")|"(?:[^\\\r\n"]|\\.)*")/,lookbehind:!0,greedy:!0},"class-name":{pattern:/(\b(?:class|enum|extends|instanceof)\s+)\w+(?:\.\w+)*/,lookbehind:!0,inside:{punctuation:/\./}},keyword:/\b(?:__FILE__|__LINE__|base|break|case|catch|class|clone|const|constructor|continue|default|delete|else|enum|extends|for|foreach|function|if|in|instanceof|local|null|resume|return|static|switch|this|throw|try|typeof|while|yield)\b/,number:/\b(?:0x[0-9a-fA-F]+|\d+(?:\.(?:\d+|[eE][+-]?\d+))?)\b/,operator:/\+\+|--|<=>|<[-<]|>>>?|&&?|\|\|?|[-+*/%!=<>]=?|[~^]|::?/,punctuation:/[(){}\[\],;.]/}),e.languages.insertBefore("squirrel","string",{char:{pattern:/(^|[^\\"'])'(?:[^\\']|\\(?:[xuU][0-9a-fA-F]{0,8}|[\s\S]))'/,lookbehind:!0,greedy:!0}}),e.languages.insertBefore("squirrel","operator",{"attribute-punctuation":{pattern:/<\/|\/>/,alias:"important"},lambda:{pattern:/@(?=\()/,alias:"operator"}})}qo.displayName="stan";qo.aliases=[];function qo(e){(function(t){var n=/\b(?:algebra_solver|algebra_solver_newton|integrate_1d|integrate_ode|integrate_ode_bdf|integrate_ode_rk45|map_rect|ode_(?:adams|bdf|ckrk|rk45)(?:_tol)?|ode_adjoint_tol_ctl|reduce_sum|reduce_sum_static)\b/;t.languages.stan={comment:/\/\/.*|\/\*[\s\S]*?\*\/|#(?!include).*/,string:{pattern:/"[\x20\x21\x23-\x5B\x5D-\x7E]*"/,greedy:!0},directive:{pattern:/^([ \t]*)#include\b.*/m,lookbehind:!0,alias:"property"},"function-arg":{pattern:RegExp("("+n.source+/\s*\(\s*/.source+")"+/[a-zA-Z]\w*/.source),lookbehind:!0,alias:"function"},constraint:{pattern:/(\b(?:int|matrix|real|row_vector|vector)\s*)<[^<>]*>/,lookbehind:!0,inside:{expression:{pattern:/(=\s*)\S(?:\S|\s+(?!\s))*?(?=\s*(?:>$|,\s*\w+\s*=))/,lookbehind:!0,inside:null},property:/\b[a-z]\w*(?=\s*=)/i,operator:/=/,punctuation:/^<|>$|,/}},keyword:[{pattern:/\bdata(?=\s*\{)|\b(?:functions|generated|model|parameters|quantities|transformed)\b/,alias:"program-block"},/\b(?:array|break|cholesky_factor_corr|cholesky_factor_cov|complex|continue|corr_matrix|cov_matrix|data|else|for|if|in|increment_log_prob|int|matrix|ordered|positive_ordered|print|real|reject|return|row_vector|simplex|target|unit_vector|vector|void|while)\b/,n],function:/\b[a-z]\w*(?=\s*\()/i,number:/(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:E[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,boolean:/\b(?:false|true)\b/,operator:/<-|\.[*/]=?|\|\|?|&&|[!=<>+\-*/]=?|['^%~?:]/,punctuation:/[()\[\]{},;]/},t.languages.stan.constraint.inside.expression.inside=t.languages.stan})(e)}Yo.displayName="stata";Yo.aliases=[];function Yo(e){e.register(je),e.register(Mt),e.register(Pt),e.languages.stata={comment:[{pattern:/(^[ \t]*)\*.*/m,lookbehind:!0,greedy:!0},{pattern:/(^|\s)\/\/.*|\/\*[\s\S]*?\*\//,lookbehind:!0,greedy:!0}],"string-literal":{pattern:/"[^"\r\n]*"|[‘`']".*?"[’`']/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^{}]*\}|[‘`']\w[^’`'\r\n]*[’`']/,inside:{punctuation:/^\$\{|\}$/,expression:{pattern:/[\s\S]+/,inside:null}}},string:/[\s\S]+/}},mata:{pattern:/(^[ \t]*mata[ \t]*:)[\s\S]+?(?=^end\b)/m,lookbehind:!0,greedy:!0,alias:"language-mata",inside:e.languages.mata},java:{pattern:/(^[ \t]*java[ \t]*:)[\s\S]+?(?=^end\b)/m,lookbehind:!0,greedy:!0,alias:"language-java",inside:e.languages.java},python:{pattern:/(^[ \t]*python[ \t]*:)[\s\S]+?(?=^end\b)/m,lookbehind:!0,greedy:!0,alias:"language-python",inside:e.languages.python},command:{pattern:/(^[ \t]*(?:\.[ \t]+)?(?:(?:bayes|bootstrap|by|bysort|capture|collect|fmm|fp|frame|jackknife|mfp|mi|nestreg|noisily|permute|quietly|rolling|simulate|statsby|stepwise|svy|version|xi)\b[^:\r\n]*:[ \t]*|(?:capture|noisily|quietly|version)[ \t]+)?)[a-zA-Z]\w*/m,lookbehind:!0,greedy:!0,alias:"keyword"},variable:/\$\w+|[‘`']\w[^’`'\r\n]*[’`']/,keyword:/\b(?:bayes|bootstrap|by|bysort|capture|clear|collect|fmm|fp|frame|if|in|jackknife|mi[ \t]+estimate|mfp|nestreg|noisily|of|permute|quietly|rolling|simulate|sort|statsby|stepwise|svy|varlist|version|xi)\b/,boolean:/\b(?:off|on)\b/,number:/\b\d+(?:\.\d+)?\b|\B\.\d+/,function:/\b[a-z_]\w*(?=\()/i,operator:/\+\+|--|##?|[<>!=~]=?|[+\-*^&|/]/,punctuation:/[(){}[\],:]/},e.languages.stata["string-literal"].inside.interpolation.inside.expression.inside=e.languages.stata}Ko.displayName="iecst";Ko.aliases=[];function Ko(e){e.languages.iecst={comment:[{pattern:/(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\(\*[\s\S]*?(?:\*\)|$)|\{[\s\S]*?(?:\}|$))/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:[/\b(?:END_)?(?:PROGRAM|CONFIGURATION|INTERFACE|FUNCTION_BLOCK|FUNCTION|ACTION|TRANSITION|TYPE|STRUCT|(?:INITIAL_)?STEP|NAMESPACE|LIBRARY|CHANNEL|FOLDER|RESOURCE|VAR_(?:ACCESS|CONFIG|EXTERNAL|GLOBAL|INPUT|IN_OUT|OUTPUT|TEMP)|VAR|METHOD|PROPERTY)\b/i,/\b(?:AT|BY|(?:END_)?(?:CASE|FOR|IF|REPEAT|WHILE)|CONSTANT|CONTINUE|DO|ELSE|ELSIF|EXIT|EXTENDS|FROM|GET|GOTO|IMPLEMENTS|JMP|NON_RETAIN|OF|PRIVATE|PROTECTED|PUBLIC|RETAIN|RETURN|SET|TASK|THEN|TO|UNTIL|USING|WITH|__CATCH|__ENDTRY|__FINALLY|__TRY)\b/],"class-name":/\b(?:ANY|ARRAY|BOOL|BYTE|U?(?:D|L|S)?INT|(?:D|L)?WORD|DATE(?:_AND_TIME)?|DT|L?REAL|POINTER|STRING|TIME(?:_OF_DAY)?|TOD)\b/,address:{pattern:/%[IQM][XBWDL][\d.]*|%[IQ][\d.]*/,alias:"symbol"},number:/\b(?:16#[\da-f]+|2#[01_]+|0x[\da-f]+)\b|\b(?:D|DT|T|TOD)#[\d_shmd:]*|\b[A-Z]*#[\d.,_]*|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/,operator:/S?R?:?=>?|&&?|\*\*?|<[=>]?|>=?|[-:^/+#]|\b(?:AND|EQ|EXPT|GE|GT|LE|LT|MOD|NE|NOT|OR|XOR)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,punctuation:/[()[\].,;]/}}Xo.displayName="supercollider";Xo.aliases=["sclang"];function Xo(e){e.languages.supercollider={comment:{pattern:/\/\/.*|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//,greedy:!0},string:{pattern:/(^|[^\\])"(?:[^"\\]|\\[\s\S])*"/,lookbehind:!0,greedy:!0},char:{pattern:/\$(?:[^\\\r\n]|\\.)/,greedy:!0},symbol:{pattern:/(^|[^\\])'(?:[^'\\]|\\[\s\S])*'|\\\w+/,lookbehind:!0,greedy:!0},keyword:/\b(?:_|arg|classvar|const|nil|var|while)\b/,boolean:/\b(?:false|true)\b/,label:{pattern:/\b[a-z_]\w*(?=\s*:)/,alias:"property"},number:/\b(?:inf|pi|0x[0-9a-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(?:pi)?|\d+r[0-9a-zA-Z]+(?:\.[0-9a-zA-Z]+)?|\d+[sb]{1,4}\d*)\b/,"class-name":/\b[A-Z]\w*\b/,operator:/\.{2,3}|#(?![[{])|&&|[!=]==?|\+>>|\+{1,3}|-[->]|=>|>>|\?\?|@\|?@|\|(?:@|[!=]=)?\||!\?|<[!=>]|\*{1,2}|<{2,3}\*?|[-!%&/<>?@|=`]/,punctuation:/[{}()[\].:,;]|#[[{]/},e.languages.sclang=e.languages.supercollider}Zo.displayName="swift";Zo.aliases=[];function Zo(e){e.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+(/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+")+"|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},e.languages.swift["string-literal"].forEach(function(t){t.inside.interpolation.inside=e.languages.swift})}Qo.displayName="systemd";Qo.aliases=[];function Qo(e){(function(t){var n={pattern:/^[;#].*/m,greedy:!0},r=/"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source;t.languages.systemd={comment:n,section:{pattern:/^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,greedy:!0,inside:{punctuation:/^\[|\]$/,"section-name":{pattern:/[\s\S]+/,alias:"selector"}}},key:{pattern:/^[^\s=]+(?=[ \t]*=)/m,greedy:!0,alias:"attr-name"},value:{pattern:RegExp(/(=[ \t]*(?!\s))/.source+"(?:"+r+`|(?=[^"\r
]))(?:`+(/[^\s\\]/.source+'|[ 	]+(?:(?![ 	"])|'+r+")|"+/\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source)+")*"),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment:n,quoted:{pattern:RegExp(/(^|\s)/.source+r),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}})(e)}bt.displayName="t4-templating";bt.aliases=[];function bt(e){(function(t){function n(a,i,o){return{pattern:RegExp("<#"+a+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+a+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:i,alias:o}}}}function r(a){var i=t.languages[a],o="language-"+a;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:n("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:n("=",i,o),"class-feature":n("\\+",i,o),standard:n("",i,o)}}}}t.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:r})})(e)}Jo.displayName="t4-cs";Jo.aliases=["t4"];function Jo(e){e.register(We),e.register(bt),e.languages.t4=e.languages["t4-cs"]=e.languages["t4-templating"].createT4("csharp")}Ut.displayName="vbnet";Ut.aliases=[];function Ut(e){e.register(Dt),e.languages.vbnet=e.languages.extend("basic",{comment:[{pattern:/(?:!|REM\b).+/i,inside:{keyword:/^REM/i}},{pattern:/(^|[^\\:])'.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(^|[^"])"(?:""|[^"])*"(?!")/,lookbehind:!0,greedy:!0},keyword:/(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDBL|CDEC|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DEFAULT|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LET|LIB|LIKE|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPERATOR|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHELL|SHORT|SINGLE|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SWAP|SYNCLOCK|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,punctuation:/[,;:(){}]/})}es.displayName="t4-vb";es.aliases=[];function es(e){e.register(bt),e.register(Ut),e.languages["t4-vb"]=e.languages["t4-templating"].createT4("vbnet")}ts.displayName="tap";ts.aliases=[];function ts(e){e.register(xt),e.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\b\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,lookbehind:!0,inside:e.languages.yaml,alias:"language-yaml"}}}ns.displayName="tcl";ns.aliases=[];function ns(e){e.languages.tcl={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,greedy:!0},variable:[{pattern:/(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,lookbehind:!0},{pattern:/(\$)\{[^}]+\}/,lookbehind:!0},{pattern:/(^[\t ]*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,lookbehind:!0}],function:{pattern:/(^[\t ]*proc[ \t]+)\S+/m,lookbehind:!0},builtin:[{pattern:/(^[\t ]*)(?:break|class|continue|error|eval|exit|for|foreach|if|proc|return|switch|while)\b/m,lookbehind:!0},/\b(?:else|elseif)\b/],scope:{pattern:/(^[\t ]*)(?:global|upvar|variable)\b/m,lookbehind:!0,alias:"constant"},keyword:{pattern:/(^[\t ]*|\[)(?:Safe_Base|Tcl|after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|scan|seek|set|socket|source|split|string|subst|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|test|vars|wordBreak(?:After|Before))|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,lookbehind:!0},operator:/!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|in|ne|ni)\b/,punctuation:/[{}()\[\]]/}}rs.displayName="tt2";rs.aliases=[];function rs(e){e.register(W),e.register(oe),(function(t){t.languages.tt2=t.languages.extend("clike",{comment:/#.*|\[%#[\s\S]*?%\]/,keyword:/\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,punctuation:/[[\]{},()]/}),t.languages.insertBefore("tt2","number",{operator:/=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,variable:{pattern:/\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i}}),t.languages.insertBefore("tt2","keyword",{delimiter:{pattern:/^(?:\[%|%%)-?|-?%\]$/,alias:"punctuation"}}),t.languages.insertBefore("tt2","string",{"single-quoted-string":{pattern:/'[^\\']*(?:\\[\s\S][^\\']*)*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,greedy:!0,alias:"string",inside:{variable:{pattern:/\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i}}}}),delete t.languages.tt2.string,t.hooks.add("before-tokenize",function(n){var r=/\[%[\s\S]+?%\]/g;t.languages["markup-templating"].buildPlaceholders(n,"tt2",r)}),t.hooks.add("after-tokenize",function(n){t.languages["markup-templating"].tokenizePlaceholders(n,"tt2")})})(e)}as.displayName="toml";as.aliases=[];function as(e){(function(t){var n=/(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source;function r(a){return a.replace(/__/g,function(){return n})}t.languages.toml={comment:{pattern:/#.*/,greedy:!0},table:{pattern:RegExp(r(/(^[\t ]*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source),"m"),lookbehind:!0,greedy:!0,alias:"class-name"},key:{pattern:RegExp(r(/(^[\t ]*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source),"m"),lookbehind:!0,greedy:!0,alias:"property"},string:{pattern:/"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},date:[{pattern:/\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,alias:"number"},{pattern:/\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,alias:"number"}],number:/(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,boolean:/\b(?:false|true)\b/,punctuation:/[.,=[\]{}]/}})(e)}is.displayName="tremor";is.aliases=["trickle","troy"];function is(e){(function(t){t.languages.tremor={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},"interpolated-string":null,extractor:{pattern:/\b[a-z_]\w*\|(?:[^\r\n\\|]|\\(?:\r\n|[\s\S]))*\|/i,greedy:!0,inside:{regex:{pattern:/(^re)\|[\s\S]+/,lookbehind:!0},function:/^\w+/,value:/\|[\s\S]+/}},identifier:{pattern:/`[^`]*`/,greedy:!0},function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())\b/,keyword:/\b(?:args|as|by|case|config|connect|connector|const|copy|create|default|define|deploy|drop|each|emit|end|erase|event|flow|fn|for|from|group|having|insert|into|intrinsic|let|links|match|merge|mod|move|of|operator|patch|pipeline|recur|script|select|set|sliding|state|stream|to|tumbling|update|use|when|where|window|with)\b/,boolean:/\b(?:false|null|true)\b/i,number:/\b(?:0b[01_]*|0x[0-9a-fA-F_]*|\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee][+-]?[\d_]+)?)\b/,"pattern-punctuation":{pattern:/%(?=[({[])/,alias:"punctuation"},operator:/[-+*\/%~!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?>?=?|(?:absent|and|not|or|present|xor)\b/,punctuation:/::|[;\[\]()\{\},.:]/};var n=/#\{(?:[^"{}]|\{[^{}]*\}|"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*")*\}/.source;t.languages.tremor["interpolated-string"]={pattern:RegExp(/(^|[^\\])/.source+'(?:"""(?:'+/[^"\\#]|\\[\s\S]|"(?!"")|#(?!\{)/.source+"|"+n+')*"""|"(?:'+/[^"\\\r\n#]|\\(?:\r\n|[\s\S])|#(?!\{)/.source+"|"+n+')*")'),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:RegExp(n),inside:{punctuation:/^#\{|\}$/,expression:{pattern:/[\s\S]+/,inside:t.languages.tremor}}},string:/[\s\S]+/}},t.languages.troy=t.languages.tremor,t.languages.trickle=t.languages.tremor})(e)}os.displayName="typoscript";os.aliases=["tsconfig"];function os(e){(function(t){var n=/\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;t.languages.typoscript={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,lookbehind:!0,greedy:!0},{pattern:/(^|[^"'])#.*/,lookbehind:!0,greedy:!0}],function:[{pattern:/<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,inside:{string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,inside:{keyword:n}},keyword:{pattern:/INCLUDE_TYPOSCRIPT/}}},{pattern:/@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,inside:{string:/"[^"\r\n]*"|'[^'\r\n]*'/}}],string:{pattern:/^([^=]*=[< ]?)(?:(?!\]\n).)*/,lookbehind:!0,inside:{function:/\{\$.*\}/,keyword:n,number:/^\d+$/,punctuation:/[,|:]/}},keyword:n,number:{pattern:/\b\d+\s*[.{=]/,inside:{operator:/[.{=]/}},tag:{pattern:/\.?[-\w\\]+\.?/,inside:{punctuation:/\./}},punctuation:/[{}[\];(),.:|]/,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/},t.languages.tsconfig=t.languages.typoscript})(e)}ss.displayName="unrealscript";ss.aliases=["uc","uscript"];function ss(e){e.languages.unrealscript={comment:/\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},category:{pattern:/(\b(?:(?:autoexpand|hide|show)categories|var)\s*\()[^()]+(?=\))/,lookbehind:!0,greedy:!0,alias:"property"},metadata:{pattern:/(\w\s*)<\s*\w+\s*=[^<>|=\r\n]+(?:\|\s*\w+\s*=[^<>|=\r\n]+)*>/,lookbehind:!0,greedy:!0,inside:{property:/\b\w+(?=\s*=)/,operator:/=/,punctuation:/[<>|]/}},macro:{pattern:/`\w+/,alias:"property"},"class-name":{pattern:/(\b(?:class|enum|extends|interface|state(?:\(\))?|struct|within)\s+)\w+/,lookbehind:!0},keyword:/\b(?:abstract|actor|array|auto|autoexpandcategories|bool|break|byte|case|class|classgroup|client|coerce|collapsecategories|config|const|continue|default|defaultproperties|delegate|dependson|deprecated|do|dontcollapsecategories|editconst|editinlinenew|else|enum|event|exec|export|extends|final|float|for|forcescriptorder|foreach|function|goto|guid|hidecategories|hidedropdown|if|ignores|implements|inherits|input|int|interface|iterator|latent|local|material|name|native|nativereplication|noexport|nontransient|noteditinlinenew|notplaceable|operator|optional|out|pawn|perobjectconfig|perobjectlocalized|placeable|postoperator|preoperator|private|protected|reliable|replication|return|server|showcategories|simulated|singular|state|static|string|struct|structdefault|structdefaultproperties|switch|texture|transient|travel|unreliable|until|var|vector|while|within)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/>>|<<|--|\+\+|\*\*|[-+*/~!=<>$@]=?|&&?|\|\|?|\^\^?|[?:%]|\b(?:ClockwiseFrom|Cross|Dot)\b/,punctuation:/[()[\]{};,.]/},e.languages.uc=e.languages.uscript=e.languages.unrealscript}ls.displayName="uorazor";ls.aliases=[];function ls(e){e.languages.uorazor={"comment-hash":{pattern:/#.*/,alias:"comment",greedy:!0},"comment-slash":{pattern:/\/\/.*/,alias:"comment",greedy:!0},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/},greedy:!0},"source-layers":{pattern:/\b(?:arms|backpack|blue|bracelet|cancel|clear|cloak|criminal|earrings|enemy|facialhair|friend|friendly|gloves|gray|grey|ground|hair|head|innerlegs|innertorso|innocent|lefthand|middletorso|murderer|neck|nonfriendly|onehandedsecondary|outerlegs|outertorso|pants|red|righthand|ring|self|shirt|shoes|talisman|waist)\b/i,alias:"function"},"source-commands":{pattern:/\b(?:alliance|attack|cast|clearall|clearignore|clearjournal|clearlist|clearsysmsg|createlist|createtimer|dclick|dclicktype|dclickvar|dress|dressconfig|drop|droprelloc|emote|getlabel|guild|gumpclose|gumpresponse|hotkey|ignore|lasttarget|lift|lifttype|menu|menuresponse|msg|org|organize|organizer|overhead|pause|poplist|potion|promptresponse|pushlist|removelist|removetimer|rename|restock|say|scav|scavenger|script|setability|setlasttarget|setskill|settimer|setvar|sysmsg|target|targetloc|targetrelloc|targettype|undress|unignore|unsetvar|useobject|useonce|useskill|usetype|virtue|wait|waitforgump|waitformenu|waitforprompt|waitforstat|waitforsysmsg|waitfortarget|walk|wfsysmsg|wft|whisper|yell)\b/,alias:"function"},"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},function:/\b(?:atlist|close|closest|count|counter|counttype|dead|dex|diffhits|diffmana|diffstam|diffweight|find|findbuff|finddebuff|findlayer|findtype|findtypelist|followers|gumpexists|hidden|hits|hp|hue|human|humanoid|ingump|inlist|insysmessage|insysmsg|int|invul|lhandempty|list|listexists|mana|maxhits|maxhp|maxmana|maxstam|maxweight|monster|mounted|name|next|noto|paralyzed|poisoned|position|prev|previous|queued|rand|random|rhandempty|skill|stam|str|targetexists|timer|timerexists|varexist|warmode|weight)\b/,keyword:/\b(?:and|as|break|continue|else|elseif|endfor|endif|endwhile|for|if|loop|not|or|replay|stop|while)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/}}us.displayName="v";us.aliases=[];function us(e){e.register(W),(function(t){var n={pattern:/[\s\S]+/,inside:null};t.languages.v=t.languages.extend("clike",{string:{pattern:/r?(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,alias:"quoted-string",greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:\{[^{}]*\}|\w+(?:\.\w+(?:\([^\(\)]*\))?|\[[^\[\]]+\])*)/,lookbehind:!0,inside:{"interpolation-variable":{pattern:/^\$\w[\s\S]*$/,alias:"variable"},"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},"interpolation-expression":n}}}},"class-name":{pattern:/(\b(?:enum|interface|struct|type)\s+)(?:C\.)?\w+/,lookbehind:!0},keyword:/(?:\b(?:__global|as|asm|assert|atomic|break|chan|const|continue|defer|else|embed|enum|fn|for|go(?:to)?|if|import|in|interface|is|lock|match|module|mut|none|or|pub|return|rlock|select|shared|sizeof|static|struct|type(?:of)?|union|unsafe)|\$(?:else|for|if)|#(?:flag|include))\b/,number:/\b(?:0x[a-f\d]+(?:_[a-f\d]+)*|0b[01]+(?:_[01]+)*|0o[0-7]+(?:_[0-7]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?)\b/i,operator:/~|\?|[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\.?/,builtin:/\b(?:any(?:_float|_int)?|bool|byte(?:ptr)?|charptr|f(?:32|64)|i(?:8|16|64|128|nt)|rune|size_t|string|u(?:16|32|64|128)|voidptr)\b/}),n.inside=t.languages.v,t.languages.insertBefore("v","string",{char:{pattern:/`(?:\\`|\\?[^`]{1,2})`/,alias:"rune"}}),t.languages.insertBefore("v","operator",{attribute:{pattern:/(^[\t ]*)\[(?:deprecated|direct_array_access|flag|inline|live|ref_only|typedef|unsafe_fn|windows_stdcall)\]/m,lookbehind:!0,alias:"annotation",inside:{punctuation:/[\[\]]/,keyword:/\w+/}},generic:{pattern:/<\w+>(?=\s*[\)\{])/,inside:{punctuation:/[<>]/,"class-name":/\w+/}}}),t.languages.insertBefore("v","function",{"generic-function":{pattern:/\b\w+\s*<\w+>(?=\()/,inside:{function:/^\w+/,generic:{pattern:/<\w+>/,inside:t.languages.v.generic.inside}}}})})(e)}cs.displayName="vala";cs.aliases=[];function cs(e){e.register(W),e.languages.vala=e.languages.extend("clike",{"class-name":[{pattern:/\b[A-Z]\w*(?:\.\w+)*\b(?=(?:\?\s+|\*?\s+\*?)\w)/,inside:{punctuation:/\./}},{pattern:/(\[)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}},{pattern:/((?:\b(?:class|enum|interface|new|struct)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,lookbehind:!0,inside:{punctuation:/\./}}],keyword:/\b(?:abstract|as|assert|async|base|bool|break|case|catch|char|class|const|construct|continue|default|delegate|delete|do|double|dynamic|else|ensures|enum|errordomain|extern|finally|float|for|foreach|get|if|in|inline|int|int16|int32|int64|int8|interface|internal|is|lock|long|namespace|new|null|out|override|owned|params|private|protected|public|ref|requires|return|set|short|signal|sizeof|size_t|ssize_t|static|string|struct|switch|this|throw|throws|try|typeof|uchar|uint|uint16|uint32|uint64|uint8|ulong|unichar|unowned|ushort|using|value|var|virtual|void|volatile|weak|while|yield)\b/i,function:/\b\w+(?=\s*\()/,number:/(?:\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?:f|u?l?)?/i,operator:/\+\+|--|&&|\|\||<<=?|>>=?|=>|->|~|[+\-*\/%&^|=!<>]=?|\?\??|\.\.\./,punctuation:/[{}[\];(),.:]/,constant:/\b[A-Z0-9_]+\b/}),e.languages.insertBefore("vala","string",{"raw-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},"template-string":{pattern:/@"[\s\S]*?"/,greedy:!0,inside:{interpolation:{pattern:/\$(?:\([^)]*\)|[a-zA-Z]\w*)/,inside:{delimiter:{pattern:/^\$\(?|\)$/,alias:"punctuation"},rest:e.languages.vala}},string:/[\s\S]+/}}}),e.languages.insertBefore("vala","keyword",{regex:{pattern:/\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[imsx]{0,4}(?=\s*(?:$|[\r\n,.;})\]]))/,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\//,"regex-flags":/^[a-z]+$/}}})}ds.displayName="velocity";ds.aliases=[];function ds(e){e.register(re),(function(t){t.languages.velocity=t.languages.extend("markup",{});var n={variable:{pattern:/(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i,lookbehind:!0,inside:{}},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},number:/\b\d+\b/,boolean:/\b(?:false|true)\b/,operator:/[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,punctuation:/[(){}[\]:,.]/};n.variable.inside={string:n.string,function:{pattern:/([^\w-])[a-z][\w-]*(?=\()/,lookbehind:!0},number:n.number,boolean:n.boolean,punctuation:n.punctuation},t.languages.insertBefore("velocity","comment",{unparsed:{pattern:/(^|[^\\])#\[\[[\s\S]*?\]\]#/,lookbehind:!0,greedy:!0,inside:{punctuation:/^#\[\[|\]\]#$/}},"velocity-comment":[{pattern:/(^|[^\\])#\*[\s\S]*?\*#/,lookbehind:!0,greedy:!0,alias:"comment"},{pattern:/(^|[^\\])##.*/,lookbehind:!0,greedy:!0,alias:"comment"}],directive:{pattern:/(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,lookbehind:!0,inside:{keyword:{pattern:/^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/,inside:{punctuation:/[{}]/}},rest:n}},variable:n.variable}),t.languages.velocity.tag.inside["attr-value"].inside.rest=t.languages.velocity})(e)}ps.displayName="verilog";ps.aliases=[];function ps(e){e.languages.verilog={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"kernel-function":{pattern:/\B\$\w+\b/,alias:"property"},constant:/\B`\w+\b/,function:/\b\w+(?=\()/,keyword:/\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|case|casex|casez|cell|chandle|class|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endsequence|endspecify|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_ondetect|pulsestyle_onevent|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\b/,important:/\b(?:always|always_comb|always_ff|always_latch)\b(?: *@)?/,number:/\B##?\d+|(?:\b\d+)?'[odbh] ?[\da-fzx_?]+|\b(?:\d*[._])?\d+(?:e[-+]?\d+)?/i,operator:/[-+{}^~%*\/?=!<>&|]+/,punctuation:/[[\];(),.:]/}}gs.displayName="vhdl";gs.aliases=[];function gs(e){e.languages.vhdl={comment:/--.+/,"vhdl-vectors":{pattern:/\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,alias:"number"},"quoted-function":{pattern:/"\S+?"(?=\()/,alias:"function"},string:/"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,attribute:{pattern:/\b'\w+/,alias:"attr-name"},keyword:/\b(?:access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|private|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|view|wait|when|while|with)\b/i,boolean:/\b(?:false|true)\b/i,function:/\w+(?=\()/,number:/'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,operator:/[<>]=?|:=|[-+*/&=]|\b(?:abs|and|mod|nand|nor|not|or|rem|rol|ror|sla|sll|sra|srl|xnor|xor)\b/i,punctuation:/[{}[\];(),.:]/}}ms.displayName="vim";ms.aliases=[];function ms(e){e.languages.vim={string:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,comment:/".*/,function:/\b\w+(?=\()/,keyword:/\b(?:N|Next|P|Print|X|XMLent|XMLns|ab|abbreviate|abc|abclear|abo|aboveleft|al|all|ar|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|args|argu|argument|as|ascii|b|bN|bNext|ba|bad|badd|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bo|botright|bp|bprevious|br|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|brewind|bro|browse|bufdo|buffer|buffers|bun|bunload|bw|bwipeout|c|cN|cNext|cNfcNfile|ca|cabbrev|cabc|cabclear|cad|caddb|caddbuffer|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cg|cgetb|cgetbuffer|cgete|cgetexpr|cgetfile|change|changes|chd|chdir|che|checkpath|checkt|checktime|cl|cla|clast|clist|clo|close|cmapc|cmapclear|cn|cnew|cnewer|cnext|cnf|cnfile|cnorea|cnoreabbrev|co|col|colder|colo|colorscheme|comc|comclear|comp|compiler|con|conf|confirm|continue|cope|copen|copy|cp|cpf|cpfile|cprevious|cq|cquit|cr|crewind|cu|cuna|cunabbrev|cunmap|cw|cwindow|d|debugg|debuggreedy|delc|delcommand|delete|delf|delfunction|delm|delmarks|di|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|e|earlier|echoe|echoerr|echom|echomsg|echon|edit|el|else|elsei|elseif|em|emenu|en|endf|endfo|endfor|endfun|endfunction|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fin|fina|finally|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|foldd|folddoc|folddoclosed|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|h|ha|hardcopy|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iu|iuna|iunabbrev|iunmap|j|join|ju|jumps|k|kee|keepalt|keepj|keepjumps|keepmarks|l|lN|lNext|lNf|lNfile|la|lad|laddb|laddbuffer|laddexpr|laddf|laddfile|lan|language|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|left|lefta|leftabove|let|lex|lexpr|lf|lfile|lfir|lfirst|lg|lgetb|lgetbuffer|lgete|lgetexpr|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|list|ll|lla|llast|lli|llist|lm|lmak|lmake|lmap|lmapc|lmapclear|ln|lne|lnew|lnewer|lnext|lnf|lnfile|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lp|lpf|lpfile|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|m|ma|mak|make|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkv|mkvie|mkview|mkvimrc|mod|mode|move|mz|mzf|mzfile|mzscheme|n|nbkey|new|next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|o|omapc|omapclear|on|only|open|opt|options|ou|ounmap|p|pc|pclose|pe|ped|pedit|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|print|prof|profd|profdel|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|ptN|ptNext|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|py|pyf|pyfile|python|q|qa|qall|quit|quita|quitall|r|read|rec|recover|red|redi|redir|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|ru|rub|ruby|rubyd|rubydo|rubyf|rubyfile|runtime|rv|rviminfo|sN|sNext|sa|sal|sall|san|sandbox|sargument|sav|saveas|sb|sbN|sbNext|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbp|sbprevious|sbr|sbrewind|sbuffer|scrip|scripte|scriptencoding|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sl|sla|slast|sleep|sm|smagic|smap|smapc|smapclear|sme|smenu|sn|snext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|so|sor|sort|source|sp|spe|spelld|spelldump|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|split|spr|sprevious|sre|srewind|st|sta|stag|star|startg|startgreplace|startinsert|startr|startreplace|stj|stjump|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tN|tNext|ta|tab|tabN|tabNext|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabn|tabnew|tabnext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tmenu|tn|tnext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tunmenu|u|una|unabbreviate|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|ve|verb|verbose|version|vert|vertical|vi|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|w|wN|wNext|wa|wall|wh|while|win|winc|wincmd|windo|winp|winpos|winsize|wn|wnext|wp|wprevious|wq|wqa|wqall|write|ws|wsverb|wv|wviminfo|x|xa|xall|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,builtin:/\b(?:acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autocmd|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|t_AB|t_AF|t_AL|t_CS|t_CV|t_Ce|t_Co|t_Cs|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_IE|t_IS|t_K1|t_K3|t_K4|t_K5|t_K6|t_K7|t_K8|t_K9|t_KA|t_KB|t_KC|t_KD|t_KE|t_KF|t_KG|t_KH|t_KI|t_KJ|t_KK|t_KL|t_RI|t_RV|t_SI|t_Sb|t_Sf|t_WP|t_WS|t_ZH|t_ZR|t_al|t_bc|t_cd|t_ce|t_cl|t_cm|t_cs|t_da|t_db|t_dl|t_fs|t_k1|t_k2|t_k3|t_k4|t_k5|t_k6|t_k7|t_k8|t_k9|t_kB|t_kD|t_kI|t_kN|t_kP|t_kb|t_kd|t_ke|t_kh|t_kl|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_se|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_xs|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,operator:/\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,punctuation:/[{}[\](),;:]/}}fs.displayName="visual-basic";fs.aliases=["vb","vba"];function fs(e){e.languages["visual-basic"]={comment:{pattern:/(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,inside:{keyword:/^REM/i}},directive:{pattern:/#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:\b_[ \t]*(?:\r\n?|\n)|.)+/i,alias:"property",greedy:!0},string:{pattern:/\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,greedy:!0},date:{pattern:/#[ \t]*(?:\d+([/-])\d+\1\d+(?:[ \t]+(?:\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?))?|\d+[ \t]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[ \t]*(?:AM|PM))?)[ \t]*#/i,alias:"number"},number:/(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:[FRD]|U?[ILS])?/i,boolean:/\b(?:False|Nothing|True)\b/i,keyword:/\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Until|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,operator:/[+\-*/\\^<=>&#@$%!]|\b_(?=[ \t]*[\r\n])/,punctuation:/[{}().,:?]/},e.languages.vb=e.languages["visual-basic"],e.languages.vba=e.languages["visual-basic"]}bs.displayName="warpscript";bs.aliases=[];function bs(e){e.languages.warpscript={comment:/#.*|\/\/.*|\/\*[\s\S]*?\*\//,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,greedy:!0},variable:/\$\S+/,macro:{pattern:/@\S+/,alias:"property"},keyword:/\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,number:/[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,boolean:/\b(?:F|T|false|true)\b/,punctuation:/<%|%>|[{}[\]()]/,operator:/==|&&?|\|\|?|\*\*?|>>>?|<<|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/}}hs.displayName="wasm";hs.aliases=[];function hs(e){e.languages.wasm={comment:[/\(;[\s\S]*?;\)/,{pattern:/;;.*/,greedy:!0}],string:{pattern:/"(?:\\[\s\S]|[^"\\])*"/,greedy:!0},keyword:[{pattern:/\b(?:align|offset)=/,inside:{operator:/=/}},{pattern:/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,inside:{punctuation:/\./}},/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],variable:/\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,number:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,punctuation:/[()]/}}ys.displayName="web-idl";ys.aliases=["webidl"];function ys(e){(function(t){var n=/(?:\B-|\b_|\b)[A-Za-z][\w-]*(?![\w-])/.source,r="(?:"+/\b(?:unsigned\s+)?long\s+long(?![\w-])/.source+"|"+/\b(?:unrestricted|unsigned)\s+[a-z]+(?![\w-])/.source+"|"+/(?!(?:unrestricted|unsigned)\b)/.source+n+/(?:\s*<(?:[^<>]|<[^<>]*>)*>)?/.source+")"+/(?:\s*\?)?/.source,a={};t.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp(/(\bnamespace\s+)/.source+n),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:a},{pattern:RegExp(/(\b(?:attribute|const|deleter|getter|optional|setter)\s+)/.source+r),lookbehind:!0,inside:a},{pattern:RegExp("("+/\bcallback\s+/.source+n+/\s*=\s*/.source+")"+r),lookbehind:!0,inside:a},{pattern:RegExp(/(\btypedef\b\s*)/.source+r),lookbehind:!0,inside:a},{pattern:RegExp(/(\b(?:callback|dictionary|enum|interface(?:\s+mixin)?)\s+)(?!(?:interface|mixin)\b)/.source+n),lookbehind:!0},{pattern:RegExp(/(:\s*)/.source+n),lookbehind:!0},RegExp(n+/(?=\s+(?:implements|includes)\b)/.source),{pattern:RegExp(/(\b(?:implements|includes)\s+)/.source+n),lookbehind:!0},{pattern:RegExp(r+"(?="+/\s*(?:\.{3}\s*)?/.source+n+/\s*[(),;=]/.source+")"),inside:a}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/};for(var i in t.languages["web-idl"])i!=="class-name"&&(a[i]=t.languages["web-idl"][i]);t.languages.webidl=t.languages["web-idl"]})(e)}Ss.displayName="wgsl";Ss.aliases=[];function Ss(e){e.languages.wgsl={comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},"builtin-attribute":{pattern:/(@)builtin\(.*?\)/,lookbehind:!0,inside:{attribute:{pattern:/^builtin/,alias:"attr-name"},punctuation:/[(),]/,"built-in-values":{pattern:/\b(?:frag_depth|front_facing|global_invocation_id|instance_index|local_invocation_id|local_invocation_index|num_workgroups|position|sample_index|sample_mask|vertex_index|workgroup_id)\b/,alias:"attr-value"}}},attributes:{pattern:/(@)(?:align|binding|compute|const|fragment|group|id|interpolate|invariant|location|size|vertex|workgroup_size)/i,lookbehind:!0,alias:"attr-name"},functions:{pattern:/\b(fn\s+)[_a-zA-Z]\w*(?=[(<])/,lookbehind:!0,alias:"function"},keyword:/\b(?:bitcast|break|case|const|continue|continuing|default|discard|else|enable|fallthrough|fn|for|function|if|let|loop|private|return|storage|struct|switch|type|uniform|var|while|workgroup)\b/,builtin:/\b(?:abs|acos|acosh|all|any|array|asin|asinh|atan|atan2|atanh|atomic|atomicAdd|atomicAnd|atomicCompareExchangeWeak|atomicExchange|atomicLoad|atomicMax|atomicMin|atomicOr|atomicStore|atomicSub|atomicXor|bool|ceil|clamp|cos|cosh|countLeadingZeros|countOneBits|countTrailingZeros|cross|degrees|determinant|distance|dot|dpdx|dpdxCoarse|dpdxFine|dpdy|dpdyCoarse|dpdyFine|exp|exp2|extractBits|f32|f64|faceForward|firstLeadingBit|floor|fma|fract|frexp|fwidth|fwidthCoarse|fwidthFine|i32|i64|insertBits|inverseSqrt|ldexp|length|log|log2|mat[2-4]x[2-4]|max|min|mix|modf|normalize|override|pack2x16float|pack2x16snorm|pack2x16unorm|pack4x8snorm|pack4x8unorm|pow|ptr|quantizeToF16|radians|reflect|refract|reverseBits|round|sampler|sampler_comparison|select|shiftLeft|shiftRight|sign|sin|sinh|smoothstep|sqrt|staticAssert|step|storageBarrier|tan|tanh|textureDimensions|textureGather|textureGatherCompare|textureLoad|textureNumLayers|textureNumLevels|textureNumSamples|textureSample|textureSampleBias|textureSampleCompare|textureSampleCompareLevel|textureSampleGrad|textureSampleLevel|textureStore|texture_1d|texture_2d|texture_2d_array|texture_3d|texture_cube|texture_cube_array|texture_depth_2d|texture_depth_2d_array|texture_depth_cube|texture_depth_cube_array|texture_depth_multisampled_2d|texture_multisampled_2d|texture_storage_1d|texture_storage_2d|texture_storage_2d_array|texture_storage_3d|transpose|trunc|u32|u64|unpack2x16float|unpack2x16snorm|unpack2x16unorm|unpack4x8snorm|unpack4x8unorm|vec[2-4]|workgroupBarrier)\b/,"function-calls":{pattern:/\b[_a-z]\w*(?=\()/i,alias:"function"},"class-name":/\b(?:[A-Z][A-Za-z0-9]*)\b/,"bool-literal":{pattern:/\b(?:false|true)\b/,alias:"boolean"},"hex-int-literal":{pattern:/\b0[xX][0-9a-fA-F]+[iu]?\b(?![.pP])/,alias:"number"},"hex-float-literal":{pattern:/\b0[xX][0-9a-fA-F]*(?:\.[0-9a-fA-F]*)?(?:[pP][+-]?\d+[fh]?)?/,alias:"number"},"decimal-float-literal":[{pattern:/\d*\.\d+(?:[eE](?:\+|-)?\d+)?[fh]?/,alias:"number"},{pattern:/\d+\.\d*(?:[eE](?:\+|-)?\d+)?[fh]?/,alias:"number"},{pattern:/\d+[eE](?:\+|-)?\d+[fh]?/,alias:"number"},{pattern:/\b\d+[fh]\b/,alias:"number"}],"int-literal":{pattern:/\b\d+[iu]?\b/,alias:"number"},operator:[{pattern:/(?:\^|~|\|(?!\|)|\|\||&&|<<|>>|!)(?!=)/},{pattern:/&(?![&=])/},{pattern:/(?:\+=|-=|\*=|\/=|%=|\^=|&=|\|=|<<=|>>=)/},{pattern:/(^|[^<>=!])=(?![=>])/,lookbehind:!0},{pattern:/(?:==|!=|<=|\+\+|--|(^|[^=])>=)/,lookbehind:!0},{pattern:/(?:(?:[+%]|(?:\*(?!\w)))(?!=))|(?:-(?!>))|(?:\/(?!\/))/},{pattern:/->/}],punctuation:/[@(){}[\],;<>:.]/}}Es.displayName="wiki";Es.aliases=[];function Es(e){e.register(re),e.languages.wiki=e.languages.extend("markup",{"block-comment":{pattern:/(^|[^\\])\/\*[\s\S]*?\*\//,lookbehind:!0,alias:"comment"},heading:{pattern:/^(=+)[^=\r\n].*?\1/m,inside:{punctuation:/^=+|=+$/,important:/.+/}},emphasis:{pattern:/('{2,5}).+?\1/,inside:{"bold-italic":{pattern:/(''''').+?(?=\1)/,lookbehind:!0,alias:["bold","italic"]},bold:{pattern:/(''')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},italic:{pattern:/('')[^'](?:.*?[^'])?(?=\1)/,lookbehind:!0},punctuation:/^''+|''+$/}},hr:{pattern:/^-{4,}/m,alias:"punctuation"},url:[/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:PMID|RFC) +\d+/i,/\[\[.+?\]\]|\[.+?\]/],variable:[/__[A-Z]+__/,/\{{3}.+?\}{3}/,/\{\{.+?\}\}/],symbol:[/^#redirect/im,/~{3,5}/],"table-tag":{pattern:/((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,lookbehind:!0,inside:{"table-bar":{pattern:/\|$/,alias:"punctuation"},rest:e.languages.markup.tag.inside}},punctuation:/^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m}),e.languages.insertBefore("wiki","tag",{nowiki:{pattern:/<(nowiki|pre|source)\b[^>]*>[\s\S]*?<\/\1>/i,inside:{tag:{pattern:/<(?:nowiki|pre|source)\b[^>]*>|<\/(?:nowiki|pre|source)>/i,inside:e.languages.markup.tag.inside}}}})}As.displayName="wolfram";As.aliases=["mathematica","nb","wl"];function As(e){e.languages.wolfram={comment:/\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/,string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:Abs|AbsArg|Accuracy|Block|Do|For|Function|If|Manipulate|Module|Nest|NestList|None|Return|Switch|Table|Which|While)\b/,context:{pattern:/\b\w+`+\w*/,alias:"class-name"},blank:{pattern:/\b\w+_\b/,alias:"regex"},"global-variable":{pattern:/\$\w+/,alias:"variable"},boolean:/\b(?:False|True)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/\/\.|;|=\.|\^=|\^:=|:=|<<|>>|<\||\|>|:>|\|->|->|<-|@@@|@@|@|\/@|=!=|===|==|=|\+|-|\[\/-+%=\]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},e.languages.mathematica=e.languages.wolfram,e.languages.wl=e.languages.wolfram,e.languages.nb=e.languages.wolfram}Ts.displayName="wren";Ts.aliases=[];function Ts(e){e.languages.wren={comment:[{pattern:/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*))*\*\/)*\*\/)*\*\//,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},"string-literal":null,hashbang:{pattern:/^#!\/.+/,greedy:!0,alias:"comment"},attribute:{pattern:/#!?[ \t\u3000]*\w+/,alias:"keyword"},"class-name":[{pattern:/(\bclass\s+)\w+/,lookbehind:!0},/\b[A-Z][a-z\d_]*\b/],constant:/\b[A-Z][A-Z\d_]*\b/,null:{pattern:/\bnull\b/,alias:"keyword"},keyword:/\b(?:as|break|class|construct|continue|else|for|foreign|if|import|in|is|return|static|super|this|var|while)\b/,boolean:/\b(?:false|true)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,function:/\b[a-z_]\w*(?=\s*[({])/i,operator:/<<|>>|[=!<>]=?|&&|\|\||[-+*/%~^&|?:]|\.{2,3}/,punctuation:/[\[\](){}.,;]/},e.languages.wren["string-literal"]={pattern:/(^|[^\\"])"(?:[^\\"%]|\\[\s\S]|%(?!\()|%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\))*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\)/,lookbehind:!0,inside:{expression:{pattern:/^(%\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:e.languages.wren},"interpolation-punctuation":{pattern:/^%\(|\)$/,alias:"punctuation"}}},string:/[\s\S]+/}}}ws.displayName="xeora";ws.aliases=["xeoracube"];function ws(e){e.register(re),(function(t){t.languages.xeora=t.languages.extend("markup",{constant:{pattern:/\$(?:DomainContents|PageRenderDuration)\$/,inside:{punctuation:{pattern:/\$/}}},variable:{pattern:/\$@?(?:#+|[-+*~=^])?[\w.]+\$/,inside:{punctuation:{pattern:/[$.]/},operator:{pattern:/#+|[-+*~=^@]/}}},"function-inline":{pattern:/\$F:[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\$/,inside:{variable:{pattern:/(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,inside:{punctuation:{pattern:/[,.|]/},operator:{pattern:/#+|[-+*~=^@]/}}},punctuation:{pattern:/\$\w:|[$:?.,|]/}},alias:"function"},"function-block":{pattern:/\$XF:\{[-\w.]+\?[-\w.]+(?:,(?:(?:@[-#]*\w+\.[\w+.]\.*)*\|)*(?:(?:[\w+]|[-#*.~^]+[\w+]|=\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\w+\.[\w+.]\.*)+(?:(?:[\w+]|[-#*~^][-#*.~^]*[\w+]|=\S)(?:[^$=]|=+[^=])*=*)?)?)?\}:XF\$/,inside:{punctuation:{pattern:/[$:{}?.,|]/}},alias:"function"},"directive-inline":{pattern:/\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\/\w.]+\$/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}}},alias:"function"},"directive-block-open":{pattern:/\$\w+:\{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+\])?:[-\w.]+:\{(?:![A-Z]+)?/,inside:{punctuation:{pattern:/\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,inside:{tag:{pattern:/#\d/}}},attribute:{pattern:/![A-Z]+$/,inside:{punctuation:{pattern:/!/}},alias:"keyword"}},alias:"function"},"directive-block-separator":{pattern:/\}:[-\w.]+:\{/,inside:{punctuation:{pattern:/[:{}]/}},alias:"function"},"directive-block-close":{pattern:/\}:[-\w.]+\$/,inside:{punctuation:{pattern:/[:{}$]/}},alias:"function"}}),t.languages.insertBefore("inside","punctuation",{variable:t.languages.xeora["function-inline"].inside.variable},t.languages.xeora["function-block"]),t.languages.xeoracube=t.languages.xeora})(e)}Is.displayName="xml-doc";Is.aliases=[];function Is(e){e.register(re),(function(t){function n(o,s){t.languages[o]&&t.languages.insertBefore(o,"comment",{"doc-comment":s})}var r=t.languages.markup.tag,a={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:r}},i={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:r}};n("csharp",a),n("fsharp",a),n("vbnet",i)})(e)}vs.displayName="xojo";vs.aliases=[];function vs(e){e.languages.xojo={comment:{pattern:/(?:'|\/\/|Rem\b).+/i,greedy:!0},string:{pattern:/"(?:""|[^"])*"/,greedy:!0},number:[/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:E[+-]?\d+)?/i,/&[bchou][a-z\d]+/i],directive:{pattern:/#(?:Else|ElseIf|Endif|If|Pragma)\b/i,alias:"property"},keyword:/\b(?:AddHandler|App|Array|As(?:signs)?|Auto|Boolean|Break|By(?:Ref|Val)|Byte|Call|Case|Catch|CFStringRef|CGFloat|Class|Color|Const|Continue|CString|Currency|CurrentMethodName|Declare|Delegate|Dim|Do(?:uble|wnTo)?|Each|Else(?:If)?|End|Enumeration|Event|Exception|Exit|Extends|False|Finally|For|Function|Get|GetTypeInfo|Global|GOTO|If|Implements|In|Inherits|Int(?:8|16|32|64|eger|erface)?|Lib|Loop|Me|Module|Next|Nil|Object|Optional|OSType|ParamArray|Private|Property|Protected|PString|Ptr|Raise(?:Event)?|ReDim|RemoveHandler|Return|Select(?:or)?|Self|Set|Shared|Short|Single|Soft|Static|Step|String|Sub|Super|Text|Then|To|True|Try|Ubound|UInt(?:8|16|32|64|eger)?|Until|Using|Var(?:iant)?|Wend|While|WindowPtr|WString)\b/i,operator:/<[=>]?|>=?|[+\-*\/\\^=]|\b(?:AddressOf|And|Ctype|IsA?|Mod|New|Not|Or|WeakAddressOf|Xor)\b/i,punctuation:/[.,;:()]/}}ks.displayName="xquery";ks.aliases=[];function ks(e){e.register(re),(function(t){t.languages.xquery=t.languages.extend("markup",{"xquery-comment":{pattern:/\(:[\s\S]*?:\)/,greedy:!0,alias:"comment"},string:{pattern:/(["'])(?:\1\1|(?!\1)[\s\S])*\1/,greedy:!0},extension:{pattern:/\(#.+?#\)/,alias:"symbol"},variable:/\$[-\w:]+/,axis:{pattern:/(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,lookbehind:!0,alias:"operator"},"keyword-operator":{pattern:/(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,lookbehind:!0,alias:"operator"},keyword:{pattern:/(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,lookbehind:!0},function:/[\w-]+(?::[\w-]+)*(?=\s*\()/,"xquery-element":{pattern:/(element\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"tag"},"xquery-attribute":{pattern:/(attribute\s+)[\w-]+(?::[\w-]+)*/,lookbehind:!0,alias:"attr-name"},builtin:{pattern:/(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,lookbehind:!0},number:/\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,operator:[/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],punctuation:/[[\](){},;:/]/}),t.languages.xquery.tag.pattern=/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/,t.languages.xquery.tag.inside["attr-value"].pattern=/=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/,t.languages.xquery.tag.inside["attr-value"].inside.punctuation=/^="|"$/,t.languages.xquery.tag.inside["attr-value"].inside.expression={pattern:/\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,inside:t.languages.xquery,alias:"language-xquery"};var n=function(a){return typeof a=="string"?a:typeof a.content=="string"?a.content:a.content.map(n).join("")},r=function(a){for(var i=[],o=0;o<a.length;o++){var s=a[o],u=!1;if(typeof s!="string"&&(s.type==="tag"&&s.content[0]&&s.content[0].type==="tag"?s.content[0].content[0].content==="</"?i.length>0&&i[i.length-1].tagName===n(s.content[0].content[1])&&i.pop():s.content[s.content.length-1].content==="/>"||i.push({tagName:n(s.content[0].content[1]),openedBraces:0}):i.length>0&&s.type==="punctuation"&&s.content==="{"&&(!a[o+1]||a[o+1].type!=="punctuation"||a[o+1].content!=="{")&&(!a[o-1]||a[o-1].type!=="plain-text"||a[o-1].content!=="{")?i[i.length-1].openedBraces++:i.length>0&&i[i.length-1].openedBraces>0&&s.type==="punctuation"&&s.content==="}"?i[i.length-1].openedBraces--:s.type!=="comment"&&(u=!0)),(u||typeof s=="string")&&i.length>0&&i[i.length-1].openedBraces===0){var l=n(s);o<a.length-1&&(typeof a[o+1]=="string"||a[o+1].type==="plain-text")&&(l+=n(a[o+1]),a.splice(o+1,1)),o>0&&(typeof a[o-1]=="string"||a[o-1].type==="plain-text")&&(l=n(a[o-1])+l,a.splice(o-1,1),o--),/^\s+$/.test(l)?a[o]=l:a[o]=new t.Token("plain-text",l,null,l)}s.content&&typeof s.content!="string"&&r(s.content)}};t.hooks.add("after-tokenize",function(a){a.language==="xquery"&&r(a.tokens)})})(e)}Rs.displayName="yang";Rs.aliases=[];function Rs(e){e.languages.yang={comment:/\/\*[\s\S]*?\*\/|\/\/.*/,string:{pattern:/"(?:[^\\"]|\\.)*"|'[^']*'/,greedy:!0},keyword:{pattern:/(^|[{};\r\n][ \t]*)[a-z_][\w.-]*/i,lookbehind:!0},namespace:{pattern:/(\s)[a-z_][\w.-]*(?=:)/i,lookbehind:!0},boolean:/\b(?:false|true)\b/,operator:/\+/,punctuation:/[{};:]/}}Cs.displayName="zig";Cs.aliases=[];function Cs(e){(function(t){function n(l){return function(){return l}}var r=/\b(?:align|allowzero|and|anyframe|anytype|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|nosuspend|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/,a="\\b(?!"+r.source+")(?!\\d)\\w+\\b",i=/align\s*\((?:[^()]|\([^()]*\))*\)/.source,o=/(?:\?|\bpromise->|(?:\[[^[\]]*\]|\*(?!\*)|\*\*)(?:\s*<ALIGN>|\s*const\b|\s*volatile\b|\s*allowzero\b)*)/.source.replace(/<ALIGN>/g,n(i)),s=/(?:\bpromise\b|(?:\berror\.)?<ID>(?:\.<ID>)*(?!\s+<ID>))/.source.replace(/<ID>/g,n(a)),u="(?!\\s)(?:!?\\s*(?:"+o+"\\s*)*"+s+")+";t.languages.zig={comment:[{pattern:/\/\/[/!].*/,alias:"doc-comment"},/\/{2}.*/],string:[{pattern:/(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,lookbehind:!0,greedy:!0},{pattern:/([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,lookbehind:!0,greedy:!0}],char:{pattern:/(^|[^\\])'(?:[^'\\\r\n]|[\uD800-\uDFFF]{2}|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,lookbehind:!0,greedy:!0},builtin:/\B@(?!\d)\w+(?=\s*\()/,label:{pattern:/(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,lookbehind:!0},"class-name":[/\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/,{pattern:RegExp(/(:\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?[=;,)])|<TYPE>(?=\s*(?:<ALIGN>\s*)?\{)/.source.replace(/<TYPE>/g,n(u)).replace(/<ALIGN>/g,n(i))),lookbehind:!0,inside:null},{pattern:RegExp(/(\)\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?;)/.source.replace(/<TYPE>/g,n(u)).replace(/<ALIGN>/g,n(i))),lookbehind:!0,inside:null}],"builtin-type":{pattern:/\b(?:anyerror|bool|c_u?(?:int|long|longlong|short)|c_longdouble|c_void|comptime_(?:float|int)|f(?:16|32|64|128)|[iu](?:8|16|32|64|128|size)|noreturn|type|void)\b/,alias:"keyword"},keyword:r,function:/\b(?!\d)\w+(?=\s*\()/,number:/\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+(?:\.[a-fA-F\d]*)?(?:[pP][+-]?[a-fA-F\d]+)?|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/,boolean:/\b(?:false|true)\b/,operator:/\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,punctuation:/[.:,;(){}[\]]/},t.languages.zig["class-name"].forEach(function(l){l.inside===null&&(l.inside=t.languages.zig)})})(e)}g.register(re);g.register(De);g.register(W);g.register(Cn);g.register(ie);g.register(_n);g.register(Nn);g.register(On);g.register(xn);g.register(Dn);g.register(Ln);g.register(Mn);g.register(Pn);g.register(dt);g.register(Fn);g.register(Bn);g.register(Un);g.register(Gn);g.register(Ae);g.register(ze);g.register(Hn);g.register($n);g.register(zn);g.register(Ot);g.register(xt);g.register(Wn);g.register(Vn);g.register(jn);g.register(We);g.register(qn);g.register(Yn);g.register(Kn);g.register(Xn);g.register(Zn);g.register(Qn);g.register(Jn);g.register(er);g.register(Dt);g.register(tr);g.register(nr);g.register(rr);g.register(ar);g.register(ir);g.register(or);g.register(sr);g.register(lr);g.register(ur);g.register(cr);g.register(dr);g.register(pr);g.register(gr);g.register(mr);g.register(fr);g.register(br);g.register(hr);g.register(yr);g.register(Sr);g.register(Er);g.register(Ar);g.register(Tr);g.register(wr);g.register(Ir);g.register(vr);g.register(Ve);g.register(kr);g.register(Rr);g.register(Cr);g.register(_r);g.register(Nr);g.register(Or);g.register(xr);g.register(Dr);g.register(Lr);g.register(Mr);g.register(Pr);g.register(oe);g.register(Fr);g.register(Br);g.register(Ur);g.register(Gr);g.register(Hr);g.register($r);g.register(zr);g.register(Wr);g.register(Vr);g.register(jr);g.register(Lt);g.register(qr);g.register(Yr);g.register(Kr);g.register(Xr);g.register(Zr);g.register(Qr);g.register(Jr);g.register(ea);g.register(ta);g.register(na);g.register(ra);g.register(aa);g.register(ia);g.register(oa);g.register(sa);g.register(la);g.register(ua);g.register(ca);g.register(da);g.register(pa);g.register(ga);g.register(ma);g.register(fa);g.register(ba);g.register(ha);g.register(ya);g.register(Sa);g.register(Ea);g.register(Aa);g.register(Ta);g.register(wa);g.register(Ia);g.register(pt);g.register(va);g.register(ka);g.register(Ra);g.register(Ca);g.register(_a);g.register(Na);g.register(gt);g.register(Oa);g.register(xa);g.register(Da);g.register(La);g.register(Ma);g.register(Pa);g.register(Fa);g.register(Ba);g.register(Ua);g.register(Ga);g.register(Ha);g.register(je);g.register(qe);g.register(Ye);g.register($a);g.register(za);g.register(Wa);g.register(Va);g.register(ja);g.register(qa);g.register(Ya);g.register(mt);g.register(Ka);g.register(Xa);g.register(Za);g.register(Qa);g.register(Ja);g.register(ei);g.register(ti);g.register(ni);g.register(ri);g.register(ai);g.register(ii);g.register(oi);g.register(si);g.register(li);g.register(ft);g.register(ui);g.register(ci);g.register(di);g.register(pi);g.register(gi);g.register(mi);g.register(fi);g.register(bi);g.register(hi);g.register(Mt);g.register(yi);g.register(Si);g.register(Ei);g.register(Ai);g.register(Ti);g.register(wi);g.register(Ii);g.register(vi);g.register(ki);g.register(Ri);g.register(Ci);g.register(_i);g.register(Ni);g.register(Oi);g.register(xi);g.register(Di);g.register(Li);g.register(Mi);g.register(Pi);g.register(Fi);g.register(Bi);g.register(Ui);g.register(Gi);g.register(Hi);g.register($i);g.register(zi);g.register(Wi);g.register(Vi);g.register(ji);g.register(qi);g.register(Yi);g.register(Ki);g.register(Xi);g.register(Zi);g.register(Qi);g.register(Ji);g.register(eo);g.register(to);g.register(no);g.register(ro);g.register(ao);g.register(io);g.register(oo);g.register(so);g.register(lo);g.register(uo);g.register(co);g.register(po);g.register(go);g.register(mo);g.register(fo);g.register(Pt);g.register(bo);g.register(ho);g.register(yo);g.register(So);g.register(Eo);g.register(Ao);g.register(To);g.register(Ft);g.register(wo);g.register(Io);g.register(vo);g.register(ko);g.register(Ro);g.register(Co);g.register(_o);g.register(No);g.register(Oo);g.register(xo);g.register(Do);g.register(Lo);g.register(Mo);g.register(Po);g.register(Fo);g.register(Bo);g.register(Uo);g.register(Go);g.register(Ho);g.register($o);g.register(Bt);g.register(zo);g.register(Wo);g.register(Vo);g.register(jo);g.register(qo);g.register(Yo);g.register(Ko);g.register(Xo);g.register(Zo);g.register(Qo);g.register(bt);g.register(Jo);g.register(Ut);g.register(es);g.register(ts);g.register(ns);g.register(rs);g.register(as);g.register(is);g.register(os);g.register(ss);g.register(ls);g.register(us);g.register(cs);g.register(ds);g.register(ps);g.register(gs);g.register(ms);g.register(fs);g.register(bs);g.register(hs);g.register(ys);g.register(Ss);g.register(Es);g.register(As);g.register(Ts);g.register(ws);g.register(Is);g.register(vs);g.register(ks);g.register(Rs);g.register(Cs);var vu=Bm(g,pf);vu.supportedLanguages=Um;const gf={'pre[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",background:"#1e1e1e"},'code[class*="language-"]':{color:"#d4d4d4",fontSize:"13px",textShadow:"none",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace',direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"]::selection':{textShadow:"none",background:"#264F78"},'pre[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},'code[class*="language-"] *::selection':{textShadow:"none",background:"#264F78"},':not(pre) > code[class*="language-"]':{padding:".1em .3em",borderRadius:".3em",color:"#db4c69",background:"#1e1e1e"},".namespace":{Opacity:".7"},"doctype.doctype-tag":{color:"#569CD6"},"doctype.name":{color:"#9cdcfe"},comment:{color:"#6a9955"},prolog:{color:"#6a9955"},punctuation:{color:"#d4d4d4"},".language-html .language-css .token.punctuation":{color:"#d4d4d4"},".language-html .language-javascript .token.punctuation":{color:"#d4d4d4"},property:{color:"#9cdcfe"},tag:{color:"#569cd6"},boolean:{color:"#569cd6"},number:{color:"#b5cea8"},constant:{color:"#9cdcfe"},symbol:{color:"#b5cea8"},inserted:{color:"#b5cea8"},unit:{color:"#b5cea8"},selector:{color:"#d7ba7d"},"attr-name":{color:"#9cdcfe"},string:{color:"#ce9178"},char:{color:"#ce9178"},builtin:{color:"#ce9178"},deleted:{color:"#ce9178"},".language-css .token.string.url":{textDecoration:"underline"},operator:{color:"#d4d4d4"},entity:{color:"#569cd6"},"operator.arrow":{color:"#569CD6"},atrule:{color:"#ce9178"},"atrule.rule":{color:"#c586c0"},"atrule.url":{color:"#9cdcfe"},"atrule.url.function":{color:"#dcdcaa"},"atrule.url.punctuation":{color:"#d4d4d4"},keyword:{color:"#569CD6"},"keyword.module":{color:"#c586c0"},"keyword.control-flow":{color:"#c586c0"},function:{color:"#dcdcaa"},"function.maybe-class-name":{color:"#dcdcaa"},regex:{color:"#d16969"},important:{color:"#569cd6"},italic:{fontStyle:"italic"},"class-name":{color:"#4ec9b0"},"maybe-class-name":{color:"#4ec9b0"},console:{color:"#9cdcfe"},parameter:{color:"#9cdcfe"},interpolation:{color:"#9cdcfe"},"punctuation.interpolation-punctuation":{color:"#569cd6"},variable:{color:"#9cdcfe"},"imports.maybe-class-name":{color:"#9cdcfe"},"exports.maybe-class-name":{color:"#9cdcfe"},escape:{color:"#d7ba7d"},"tag.punctuation":{color:"#808080"},cdata:{color:"#808080"},"attr-value":{color:"#ce9178"},"attr-value.punctuation":{color:"#ce9178"},"attr-value.punctuation.attr-equals":{color:"#d4d4d4"},namespace:{color:"#4ec9b0"},'pre[class*="language-javascript"]':{color:"#9cdcfe"},'code[class*="language-javascript"]':{color:"#9cdcfe"},'pre[class*="language-jsx"]':{color:"#9cdcfe"},'code[class*="language-jsx"]':{color:"#9cdcfe"},'pre[class*="language-typescript"]':{color:"#9cdcfe"},'code[class*="language-typescript"]':{color:"#9cdcfe"},'pre[class*="language-tsx"]':{color:"#9cdcfe"},'code[class*="language-tsx"]':{color:"#9cdcfe"},'pre[class*="language-css"]':{color:"#ce9178"},'code[class*="language-css"]':{color:"#ce9178"},'pre[class*="language-html"]':{color:"#d4d4d4"},'code[class*="language-html"]':{color:"#d4d4d4"},".language-regex .token.anchor":{color:"#dcdcaa"},".language-html .token.punctuation":{color:"#808080"},'pre[class*="language-"] > code[class*="language-"]':{position:"relative",zIndex:"1"},".line-highlight.line-highlight":{background:"#f7ebc6",boxShadow:"inset 5px 0 0 #f7d87c",zIndex:"0"}};function mf({content:e,onBack:t}){const[n,r]=en.useState(0);return!e||!e.sections?x.jsxs("div",{style:{padding:"4rem 2rem",textAlign:"center"},children:[x.jsx("h2",{children:"Content not available"}),x.jsx("button",{onClick:t,style:{marginTop:"2rem",padding:"1rem 2rem",borderRadius:"1rem",background:"var(--primary)",color:"white",border:"none",cursor:"pointer"},children:"Go Back"})]}):x.jsx("section",{className:"section-mesh bg-dots",style:{padding:"2rem 1rem",minHeight:"100vh"},children:x.jsxs("div",{className:"container",style:{maxWidth:"1200px"},children:[x.jsxs("div",{style:{marginBottom:"3rem"},children:[x.jsxs("button",{onClick:t,style:{display:"flex",alignItems:"center",gap:"0.5rem",background:"var(--surface)",border:"1px solid var(--border)",padding:"0.75rem 1.5rem",borderRadius:"1rem",cursor:"pointer",color:"var(--text)",fontWeight:"700",marginBottom:"2rem",transition:"all 0.3s ease"},onMouseEnter:a=>a.currentTarget.style.transform="translateX(-4px)",onMouseLeave:a=>a.currentTarget.style.transform="translateX(0)",children:[x.jsx(Yu,{size:20}),"Back to Mastery Hub"]}),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"},children:[x.jsx("div",{style:{width:"50px",height:"50px",borderRadius:"12px",background:"rgba(var(--primary-rgb), 0.1)",border:"1px solid var(--primary)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)"},children:x.jsx(Nl,{size:24})}),x.jsxs("div",{children:[x.jsx("h1",{style:{fontSize:"2.5rem",fontWeight:"900",marginBottom:"0.5rem"},children:e.title}),x.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.1rem"},children:e.subtitle})]})]})]}),x.jsxs("div",{className:"mastery-guide-layout",style:{display:"grid",gridTemplateColumns:"280px 1fr",gap:"3rem"},children:[x.jsxs("div",{className:"mastery-sidebar",style:{position:"sticky",top:"100px",height:"fit-content"},children:[x.jsx("h3",{style:{fontSize:"0.9rem",fontWeight:"900",color:"var(--text-muted)",marginBottom:"1rem",letterSpacing:"0.05em"},children:"TABLE OF CONTENTS"}),x.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:e.sections.map((a,i)=>x.jsxs("button",{onClick:()=>r(i),style:{padding:"1rem",borderRadius:"1rem",background:n===i?"var(--primary)":"var(--surface)",color:n===i?"white":"var(--text)",border:"1px solid var(--border)",cursor:"pointer",textAlign:"left",fontWeight:n===i?"800":"600",fontSize:"0.9rem",transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[x.jsx("span",{children:a.title}),n===i&&x.jsx(Ku,{size:16})]},a.id))})]}),x.jsxs(At.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},className:"glass-plus",style:{padding:"3rem",borderRadius:"2rem",background:"var(--surface)",border:"1px solid var(--border)",minHeight:"600px"},children:[x.jsx("h2",{style:{fontSize:"2rem",fontWeight:"900",marginBottom:"2rem"},children:e.sections[n].title}),x.jsx("div",{className:"markdown-content",style:{lineHeight:"1.8",color:"var(--text)"},children:x.jsx(dm,{components:{code({node:a,inline:i,className:o,children:s,...u}){const l=/language-(\w+)/.exec(o||"");return!i&&l?x.jsx(vu,{style:gf,language:l[1],PreTag:"div",customStyle:{borderRadius:"1rem",padding:"1.5rem",marginTop:"1rem",marginBottom:"1rem",fontSize:"0.9rem"},...u,children:String(s).replace(/\n$/,"")}):x.jsx("code",{style:{background:"rgba(var(--primary-rgb), 0.1)",padding:"0.2rem 0.5rem",borderRadius:"0.4rem",fontSize:"0.9em",fontFamily:"monospace",color:"var(--primary)"},...u,children:s})},h2:({children:a})=>x.jsx("h2",{style:{fontSize:"1.8rem",fontWeight:"800",marginTop:"2.5rem",marginBottom:"1rem",color:"var(--text)"},children:a}),h3:({children:a})=>x.jsx("h3",{style:{fontSize:"1.4rem",fontWeight:"700",marginTop:"2rem",marginBottom:"0.75rem",color:"var(--text)"},children:a}),p:({children:a})=>x.jsx("p",{style:{marginBottom:"1rem",fontSize:"1.05rem"},children:a}),ul:({children:a})=>x.jsx("ul",{style:{marginLeft:"1.5rem",marginBottom:"1rem"},children:a}),ol:({children:a})=>x.jsx("ol",{style:{marginLeft:"1.5rem",marginBottom:"1rem"},children:a}),li:({children:a})=>x.jsx("li",{style:{marginBottom:"0.5rem",fontSize:"1.05rem"},children:a}),table:({children:a})=>x.jsx("div",{style:{overflowX:"auto",marginTop:"1.5rem",marginBottom:"1.5rem",WebkitOverflowScrolling:"touch",border:"1px solid var(--border)",borderRadius:"0.5rem"},children:x.jsx("table",{style:{width:"100%",minWidth:"500px",borderCollapse:"collapse"},children:a})}),thead:({children:a})=>x.jsx("thead",{style:{background:"rgba(var(--primary-rgb), 0.1)"},children:a}),th:({children:a})=>x.jsx("th",{style:{padding:"0.75rem",textAlign:"left",borderBottom:"2px solid var(--border)",fontWeight:"800",fontSize:"0.9rem",whiteSpace:"nowrap"},children:a}),td:({children:a})=>x.jsx("td",{style:{padding:"0.75rem",borderBottom:"1px solid var(--border)",fontSize:"0.95rem",lineHeight:"1.5"},children:a}),blockquote:({children:a})=>x.jsx("blockquote",{style:{borderLeft:"4px solid var(--primary)",paddingLeft:"1.5rem",marginLeft:0,marginTop:"1.5rem",marginBottom:"1.5rem",fontStyle:"italic",color:"var(--text-muted)"},children:a}),hr:()=>x.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border)",margin:"2rem 0"}})},children:e.sections[n].content})}),x.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"3rem",paddingTop:"2rem",borderTop:"1px solid var(--border)"},children:[x.jsx("button",{onClick:()=>r(Math.max(0,n-1)),disabled:n===0,style:{padding:"1rem 2rem",borderRadius:"1rem",background:n===0?"var(--surface)":"var(--primary)",color:n===0?"var(--text-muted)":"white",border:"1px solid var(--border)",cursor:n===0?"not-allowed":"pointer",fontWeight:"700",opacity:n===0?.5:1},children:"← Previous"}),x.jsx("button",{onClick:()=>r(Math.min(e.sections.length-1,n+1)),disabled:n===e.sections.length-1,style:{padding:"1rem 2rem",borderRadius:"1rem",background:n===e.sections.length-1?"var(--surface)":"var(--primary)",color:n===e.sections.length-1?"var(--text-muted)":"white",border:"1px solid var(--border)",cursor:n===e.sections.length-1?"not-allowed":"pointer",fontWeight:"700",opacity:n===e.sections.length-1?.5:1},children:"Next →"})]})]},n)]})]})})}const ff={id:"troubleshooting",title:"Troubleshooting & Debugging",subtitle:"Master the art of fixing broken circuits and firmware errors",sections:[{id:"hardware-debugging",title:"🔧 Hardware Debugging Essentials",content:`
## The Systematic Approach

When your circuit doesn't work, **don't panic**. Follow this proven debugging workflow:

### 1. Visual Inspection First
- Check for **loose connections** on breadboard
- Verify **component orientation** (LEDs, ICs, capacitors)
- Look for **short circuits** (wire bridges)
- Confirm **power rails** are connected correctly

### 2. Power Supply Verification
\`\`\`
✓ Measure voltage at VCC pin: Should be 3.3V or 5V (±5%)
✓ Check GND continuity: 0Ω between all ground points
✓ Verify current draw: Compare with datasheet specs
\`\`\`

### 3. Component-Level Testing
Use your multimeter in **continuity mode** to trace connections:
- Beep = Good connection (< 50Ω)
- No beep = Open circuit or bad connection

## Common Hardware Issues

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Nothing works | No power / reversed polarity | Check power supply, verify connections |
| Intermittent behavior | Loose wire / cold solder joint | Re-seat connections, re-solder |
| Component gets hot | Short circuit / wrong voltage | Remove power immediately, check schematic |
| Sensor reads garbage | Missing pull-up resistors | Add 4.7kΩ resistors to SDA/SCL |
            `},{id:"multimeter-mastery",title:"📊 Multimeter Usage Guide",content:`
## Essential Measurements

### Voltage Measurement (DC)
\`\`\`
1. Set multimeter to DC Voltage (V⎓)
2. Black probe → GND
3. Red probe → Test point
4. Read value on display
\`\`\`

**Pro Tip**: Always measure voltage **relative to ground** for consistent readings.

### Continuity Testing
Perfect for finding:
- Broken wires
- Bad solder joints
- PCB trace damage

\`\`\`
Mode: Continuity (🔊 symbol)
Expected: Beep + ~0Ω reading
If no beep: Connection is broken
\`\`\`

### Current Measurement
**⚠️ CRITICAL**: Never measure current in parallel!

\`\`\`
1. Break the circuit
2. Insert multimeter IN SERIES
3. Set to appropriate range (mA or A)
4. Measure current flow
\`\`\`

## Debugging with Serial Monitor

### Basic Serial Debugging
\`\`\`cpp
void setup() {
    Serial.begin(115200);  // High baud rate for faster debugging
    Serial.println("=== System Boot ===");
}

void loop() {
    int sensorValue = analogRead(A0);
    
    // Debug print with labels
    Serial.print("Sensor: ");
    Serial.print(sensorValue);
    Serial.print(" | Voltage: ");
    Serial.println(sensorValue * (5.0 / 1023.0));
    
    delay(500);
}
\`\`\`

### Advanced: Conditional Debug Messages
\`\`\`cpp
#define DEBUG 1  // Set to 0 to disable all debug prints

#if DEBUG
    #define DEBUG_PRINT(x) Serial.print(x)
    #define DEBUG_PRINTLN(x) Serial.println(x)
#else
    #define DEBUG_PRINT(x)
    #define DEBUG_PRINTLN(x)
#endif

void loop() {
    DEBUG_PRINTLN("Loop started");
    // Your code here
}
\`\`\`
            `},{id:"firmware-debugging",title:"💻 Firmware Debugging Strategies",content:`
## Common Code Issues & Fixes

### Issue 1: Code Uploads But Nothing Happens
**Diagnosis Steps:**
1. Check if \`setup()\` is being called
2. Verify pin modes are set correctly
3. Add LED blink in \`setup()\` to confirm execution

\`\`\`cpp
void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
    
    // Blink 3 times to show setup() ran
    for(int i = 0; i < 3; i++) {
        digitalWrite(LED_BUILTIN, HIGH);
        delay(200);
        digitalWrite(LED_BUILTIN, LOW);
        delay(200);
    }
}
\`\`\`

### Issue 2: Sensor Reads 0 or Max Value
**Likely causes:**
- Sensor not powered
- Wrong pin number in code
- Missing pull-up/pull-down resistors

\`\`\`cpp
// Add this to verify pin configuration
void setup() {
    Serial.begin(115200);
    pinMode(A0, INPUT);  // Explicitly set mode
    
    Serial.print("Pin A0 reads: ");
    Serial.println(analogRead(A0));  // Should be ~512 if floating
}
\`\`\`

### Issue 3: Code Freezes or Crashes
**Debug with Watchdog Timer:**
\`\`\`cpp
#include <avr/wdt.h>

void setup() {
    wdt_enable(WDTO_2S);  // 2 second watchdog
    Serial.begin(115200);
}

void loop() {
    wdt_reset();  // Pet the watchdog
    
    // Your code here
    // If code hangs, watchdog will reset the board
}
\`\`\`

## The "Binary Search" Debug Method

When you have a large codebase and don't know where the issue is:

\`\`\`cpp
void loop() {
    Serial.println("Point A");
    functionOne();
    
    Serial.println("Point B");
    functionTwo();
    
    Serial.println("Point C");
    functionThree();
}
\`\`\`

**If you see "Point A" and "Point B" but not "Point C":**
→ The bug is in \`functionTwo()\`

## Memory Issues

### Symptom: Random crashes, weird behavior
**Cause**: Running out of RAM

\`\`\`cpp
// Check available RAM
int freeRam() {
    extern int __heap_start, *__brkval;
    int v;
    return (int) &v - (__brkval == 0 ? (int) &__heap_start : (int) __brkval);
}

void setup() {
    Serial.begin(115200);
    Serial.print("Free RAM: ");
    Serial.println(freeRam());  // Should be > 500 bytes for stability
}
\`\`\`

**Fix**: Move strings to PROGMEM
\`\`\`cpp
// Bad (uses RAM)
Serial.println("This is a long error message");

// Good (uses Flash)
Serial.println(F("This is a long error message"));
\`\`\`
            `},{id:"quick-fixes",title:"⚡ Quick Fixes Cheat Sheet",content:`
## Top 10 Instant Fixes

### 1. LED Not Lighting
\`\`\`
✓ Check polarity (long leg = +)
✓ Add resistor (220Ω minimum)
✓ Verify pin is set to OUTPUT
\`\`\`

### 2. Button Not Working
\`\`\`cpp
// Enable internal pull-up
pinMode(BUTTON_PIN, INPUT_PULLUP);

// Read inverted logic (pressed = LOW)
if(digitalRead(BUTTON_PIN) == LOW) {
    // Button pressed
}
\`\`\`

### 3. I2C Device Not Found
\`\`\`cpp
// Scan for I2C devices
#include <Wire.h>

void setup() {
    Serial.begin(115200);
    Wire.begin();
    
    for(byte addr = 1; addr < 127; addr++) {
        Wire.beginTransmission(addr);
        if(Wire.endTransmission() == 0) {
            Serial.print("Device found at 0x");
            Serial.println(addr, HEX);
        }
    }
}
\`\`\`

### 4. Serial Monitor Shows Garbage
**Fix**: Match baud rates!
\`\`\`cpp
Serial.begin(115200);  // Code
// Serial Monitor must also be set to 115200
\`\`\`

### 5. ESP32/ESP8266 Won't Upload
1. Hold BOOT button during upload
2. Check USB cable (must support data)
3. Install correct drivers (CP2102/CH340)

### 6. Sensor Values Jumping Around
\`\`\`cpp
// Add simple averaging
const int numReadings = 10;
int total = 0;

for(int i = 0; i < numReadings; i++) {
    total += analogRead(A0);
    delay(10);
}
int average = total / numReadings;
\`\`\`

### 7. Power Supply Issues
\`\`\`
USB Power: Max 500mA
→ Use external 5V supply for motors/servos

3.3V Pin: Max 50mA
→ Don't power sensors from this pin
\`\`\`

### 8. Code Works on USB, Fails on Battery
**Cause**: Voltage drop under load
**Fix**: Use proper voltage regulator (LM7805 or buck converter)

### 9. Bluetooth/WiFi Won't Connect
\`\`\`cpp
// Add connection timeout
unsigned long startTime = millis();
while(WiFi.status() != WL_CONNECTED) {
    if(millis() - startTime > 10000) {
        Serial.println("Connection timeout!");
        break;
    }
    delay(500);
}
\`\`\`

### 10. "Sketch Too Big" Error
**Solutions:**
- Remove unused libraries
- Use \`F()\` macro for strings
- Disable debug code
- Use smaller bootloader (OptiB oot)

## Emergency Reset Procedure

If your board is completely unresponsive:

\`\`\`
1. Disconnect all external components
2. Upload minimal blink sketch
3. If that works, reconnect components one by one
4. Find the culprit component
\`\`\`

## Pro Debugging Tools

### Logic Analyzer
- Capture digital signals
- Decode I2C, SPI, UART
- ~$10 on Amazon (8-channel)

### Oscilloscope
- See actual waveforms
- Measure signal timing
- Essential for advanced debugging

### USB-to-Serial Adapter
- Debug without Arduino IDE
- Use PuTTY or screen
- Monitor multiple devices
            `}]},bf={id:"mini-projects",title:"Mini Projects / Quick Builds",subtitle:"Hands-on simple builds to develop muscle memory",sections:[{id:"led-basics",title:"💡 LED Control Projects",content:`
## Project 1: Smart LED Blink

### Circuit
\`\`\`
Arduino Pin 13 → 220Ω Resistor → LED (+) → LED (-) → GND
\`\`\`

### Code
\`\`\`cpp
const int LED_PIN = 13;

void setup() {
    pinMode(LED_PIN, OUTPUT);
}

void loop() {
    digitalWrite(LED_PIN, HIGH);
    delay(1000);
    digitalWrite(LED_PIN, LOW);
    delay(1000);
}
\`\`\`

### Challenge Upgrades
1. **SOS Pattern**: Blink S-O-S in Morse code
2. **Breathing Effect**: Use PWM for smooth fade
3. **Random Blink**: Random delays between blinks

---

## Project 2: RGB LED Color Mixer

### Components
- 1× Common Cathode RGB LED
- 3× 220Ω Resistors
- Arduino

### Circuit
\`\`\`
Pin 9 (PWM)  → 220Ω → Red LED pin
Pin 10 (PWM) → 220Ω → Green LED pin
Pin 11 (PWM) → 220Ω → Blue LED pin
Common Cathode → GND
\`\`\`

### Code
\`\`\`cpp
const int RED = 9;
const int GREEN = 10;
const int BLUE = 11;

void setColor(int r, int g, int b) {
    analogWrite(RED, r);
    analogWrite(GREEN, g);
    analogWrite(BLUE, b);
}

void setup() {
    pinMode(RED, OUTPUT);
    pinMode(GREEN, OUTPUT);
    pinMode(BLUE, OUTPUT);
}

void loop() {
    // Cycle through colors
    setColor(255, 0, 0);    // Red
    delay(1000);
    setColor(0, 255, 0);    // Green
    delay(1000);
    setColor(0, 0, 255);    // Blue
    delay(1000);
    setColor(255, 255, 0);  // Yellow
    delay(1000);
}
\`\`\`

### Learn More
- **PWM Basics**: How \`analogWrite()\` creates colors
- **Color Theory**: Mixing RGB values
- **Power Consumption**: Measuring LED current
            `},{id:"sensor-projects",title:"🌡️ Sensor Integration Projects",content:`
## Project 3: Temperature Monitor

### Components
- DHT11 or DHT22 sensor
- Arduino
- (Optional) OLED display

### Wiring
\`\`\`
DHT11 Pin 1 (VCC) → 5V
DHT11 Pin 2 (Data) → Pin 2 + 10kΩ pull-up to 5V
DHT11 Pin 4 (GND) → GND
\`\`\`

### Code
\`\`\`cpp
#include <DHT.h>

#define DHTPIN 2
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
    Serial.begin(115200);
    dht.begin();
    Serial.println("Temperature Monitor Started");
}

void loop() {
    float temp = dht.readTemperature();
    float humidity = dht.readHumidity();
    
    if (isnan(temp) || isnan(humidity)) {
        Serial.println("Failed to read from DHT sensor!");
        return;
    }
    
    Serial.print("Temperature: ");
    Serial.print(temp);
    Serial.print("°C | Humidity: ");
    Serial.print(humidity);
    Serial.println("%");
    
    delay(2000);  // DHT11 needs 2s between readings
}
\`\`\`

### Enhancements
1. **Alert System**: Buzzer when temp > threshold
2. **Data Logging**: Save to SD card
3. **Web Dashboard**: ESP32 + WiFi display

---

## Project 4: Ultrasonic Distance Sensor

### Components
- HC-SR04 Ultrasonic Sensor
- Arduino
- LED (optional for visual feedback)

### Circuit
\`\`\`
HC-SR04 VCC → 5V
HC-SR04 Trig → Pin 9
HC-SR04 Echo → Pin 10
HC-SR04 GND → GND
\`\`\`

### Code
\`\`\`cpp
const int TRIG_PIN = 9;
const int ECHO_PIN = 10;

void setup() {
    Serial.begin(115200);
    pinMode(TRIG_PIN, OUTPUT);
    pinMode(ECHO_PIN, INPUT);
}

float getDistance() {
    // Send 10μs pulse
    digitalWrite(TRIG_PIN, LOW);
    delayMicroseconds(2);
    digitalWrite(TRIG_PIN, HIGH);
    delayMicroseconds(10);
    digitalWrite(TRIG_PIN, LOW);
    
    // Measure echo time
    long duration = pulseIn(ECHO_PIN, HIGH);
    
    // Calculate distance (cm)
    float distance = duration * 0.034 / 2;
    return distance;
}

void loop() {
    float dist = getDistance();
    
    Serial.print("Distance: ");
    Serial.print(dist);
    Serial.println(" cm");
    
    delay(500);
}
\`\`\`

### Applications
- **Parking Sensor**: Beep faster as object gets closer
- **Liquid Level**: Measure tank depth
- **Obstacle Avoidance**: Robot navigation
            `},{id:"automation-projects",title:"🤖 Simple Automation Projects",content:`
## Project 5: Light-Activated Night Light

### Components
- LDR (Light Dependent Resistor)
- 10kΩ Resistor
- LED + 220Ω Resistor
- Arduino

### Circuit
\`\`\`
5V → LDR → A0 → 10kΩ → GND
Pin 13 → 220Ω → LED → GND
\`\`\`

### Code
\`\`\`cpp
const int LDR_PIN = A0;
const int LED_PIN = 13;
const int THRESHOLD = 500;  // Adjust based on your room

void setup() {
    pinMode(LED_PIN, OUTPUT);
    Serial.begin(115200);
}

void loop() {
    int lightLevel = analogRead(LDR_PIN);
    
    Serial.print("Light Level: ");
    Serial.println(lightLevel);
    
    if (lightLevel < THRESHOLD) {
        digitalWrite(LED_PIN, HIGH);  // Dark → LED ON
    } else {
        digitalWrite(LED_PIN, LOW);   // Bright → LED OFF
    }
    
    delay(100);
}
\`\`\`

### Calibration Tips
1. Read LDR value in daylight → Set threshold below this
2. Read LDR value in darkness → Verify threshold above this
3. Add hysteresis to prevent flickering

---

## Project 6: Button-Controlled Counter

### Components
- Push button
- 10kΩ Resistor (or use internal pull-up)
- Arduino

### Circuit
\`\`\`
Button Pin 1 → 5V
Button Pin 2 → Pin 2 + 10kΩ to GND
\`\`\`

### Code with Debouncing
\`\`\`cpp
const int BUTTON_PIN = 2;
int counter = 0;
int lastButtonState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long DEBOUNCE_DELAY = 50;

void setup() {
    pinMode(BUTTON_PIN, INPUT_PULLUP);
    Serial.begin(115200);
    Serial.println("Counter: 0");
}

void loop() {
    int reading = digitalRead(BUTTON_PIN);
    
    if (reading != lastButtonState) {
        lastDebounceTime = millis();
    }
    
    if ((millis() - lastDebounceTime) > DEBOUNCE_DELAY) {
        if (reading == LOW) {  // Button pressed
            counter++;
            Serial.print("Counter: ");
            Serial.println(counter);
            
            while(digitalRead(BUTTON_PIN) == LOW);  // Wait for release
        }
    }
    
    lastButtonState = reading;
}
\`\`\`

### Key Concepts
- **Debouncing**: Preventing multiple counts from one press
- **Pull-up Resistors**: Why buttons need them
- **State Machines**: Tracking button state changes

---

## Project 7: Servo Motor Control

### Components
- SG90 Servo Motor
- Arduino
- External 5V power supply (recommended)

### Circuit
\`\`\`
Servo Brown Wire → GND
Servo Red Wire → 5V (external supply)
Servo Orange Wire → Pin 9
\`\`\`

### Code
\`\`\`cpp
#include <Servo.h>

Servo myServo;
const int SERVO_PIN = 9;

void setup() {
    myServo.attach(SERVO_PIN);
    Serial.begin(115200);
}

void loop() {
    // Sweep from 0° to 180°
    for (int angle = 0; angle <= 180; angle++) {
        myServo.write(angle);
        Serial.println(angle);
        delay(15);
    }
    
    delay(1000);
    
    // Sweep back
    for (int angle = 180; angle >= 0; angle--) {
        myServo.write(angle);
        delay(15);
    }
    
    delay(1000);
}
\`\`\`

### Applications
- **Pan-Tilt Camera**: 2 servos for X-Y movement
- **Robotic Arm**: Multiple servos for joints
- **Automated Door**: Servo-controlled lock
            `},{id:"communication-projects",title:"📡 Communication Projects",content:`
## Project 8: Serial Command Interface

### Code
\`\`\`cpp
void setup() {
    Serial.begin(115200);
    pinMode(LED_BUILTIN, OUTPUT);
    
    Serial.println("=== Command Interface ===");
    Serial.println("Commands:");
    Serial.println("  ON  - Turn LED on");
    Serial.println("  OFF - Turn LED off");
    Serial.println("  STATUS - Show LED state");
}

void loop() {
    if (Serial.available() > 0) {
        String command = Serial.readStringUntil('\\n');
        command.trim();
        command.toUpperCase();
        
        if (command == "ON") {
            digitalWrite(LED_BUILTIN, HIGH);
            Serial.println("LED is ON");
        }
        else if (command == "OFF") {
            digitalWrite(LED_BUILTIN, LOW);
            Serial.println("LED is OFF");
        }
        else if (command == "STATUS") {
            Serial.print("LED is ");
            Serial.println(digitalRead(LED_BUILTIN) ? "ON" : "OFF");
        }
        else {
            Serial.println("Unknown command!");
        }
    }
}
\`\`\`

### Use Cases
- **Remote Control**: Control via Bluetooth terminal
- **Debugging**: Test functions without re-uploading
- **Configuration**: Change settings at runtime

---

## Project 9: Two Arduino Communication

### Master Arduino
\`\`\`cpp
void setup() {
    Serial.begin(9600);
}

void loop() {
    Serial.println("PING");
    delay(1000);
}
\`\`\`

### Slave Arduino
\`\`\`cpp
void setup() {
    Serial.begin(9600);
    pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
    if (Serial.available() > 0) {
        String msg = Serial.readStringUntil('\\n');
        if (msg == "PING") {
            digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
        }
    }
}
\`\`\`

### Wiring
\`\`\`
Master TX → Slave RX
Master RX → Slave TX
Master GND → Slave GND
\`\`\`

## Quick Build Tips

### 1. Start Simple
- Get one component working first
- Add complexity gradually
- Test after each addition

### 2. Use Libraries
- Don't reinvent the wheel
- Check Arduino Library Manager
- Read examples in library folder

### 3. Comment Your Code
\`\`\`cpp
// Good comments explain WHY, not WHAT
int threshold = 500;  // Calibrated for room lighting

// Bad comment (obvious)
int x = 5;  // Set x to 5
\`\`\`

### 4. Version Control
- Save working versions
- Name files with dates: \`project_2024_01_06.ino\`
- Keep a changelog in comments
            `}]},hf={id:"protocols",title:"Protocols Explained",subtitle:"UART, I2C, SPI - simplified for real-world use",sections:[{id:"uart-serial",title:"📟 UART / Serial Communication",content:`
## What is UART?

**UART** (Universal Asynchronous Receiver-Transmitter) is the simplest communication protocol:
- **2 wires**: TX (transmit) and RX (receive)
- **Asynchronous**: No shared clock signal
- **Point-to-point**: One device to one device

### How It Works

\`\`\`
Device A                    Device B
  TX  ─────────────────────→  RX
  RX  ←─────────────────────  TX
 GND  ─────────────────────  GND
\`\`\`

**Key Concept**: TX of one device connects to RX of the other!

### Baud Rate

The **speed** of communication (bits per second):

| Baud Rate | Use Case |
|-----------|----------|
| 9600 | Old devices, slow sensors |
| 115200 | **Most common** for debugging |
| 230400 | High-speed data transfer |
| 921600 | Maximum for most Arduinos |

**⚠️ CRITICAL**: Both devices must use the **same baud rate**!

### Basic UART Code

\`\`\`cpp
void setup() {
    Serial.begin(115200);  // Initialize at 115200 baud
    Serial.println("UART Ready!");
}

void loop() {
    // Send data
    Serial.print("Sensor Value: ");
    Serial.println(analogRead(A0));
    
    // Receive data
    if (Serial.available() > 0) {
        char received = Serial.read();
        Serial.print("Received: ");
        Serial.println(received);
    }
    
    delay(1000);
}
\`\`\`

### Advanced: Sending Structured Data

\`\`\`cpp
// Sending multiple values
void sendData(int temp, int humidity, int light) {
    Serial.print(temp);
    Serial.print(",");
    Serial.print(humidity);
    Serial.print(",");
    Serial.println(light);
}

// Receiving and parsing
void loop() {
    if (Serial.available() > 0) {
        String data = Serial.readStringUntil('\\n');
        
        // Parse CSV format
        int comma1 = data.indexOf(',');
        int comma2 = data.indexOf(',', comma1 + 1);
        
        int temp = data.substring(0, comma1).toInt();
        int humidity = data.substring(comma1 + 1, comma2).toInt();
        int light = data.substring(comma2 + 1).toInt();
    }
}
\`\`\`

### Common Issues

**Problem**: Garbage characters in Serial Monitor
**Solution**: Check baud rate matches in code and monitor

**Problem**: No data received
**Solution**: 
1. Verify TX→RX and RX→TX crossover
2. Check GND connection
3. Confirm both devices powered

### Use Cases
- ✅ Arduino ↔ Computer debugging
- ✅ GPS modules
- ✅ Bluetooth modules (HC-05, HC-06)
- ✅ ESP32 ↔ Arduino communication
- ❌ Multiple devices (use I2C or SPI instead)
            `},{id:"i2c-protocol",title:"🔗 I2C Communication",content:`
## What is I2C?

**I2C** (Inter-Integrated Circuit) allows multiple devices on 2 wires:
- **SDA**: Serial Data (bidirectional)
- **SCL**: Serial Clock (master controls timing)
- **Multi-device**: Up to 127 devices on same bus!

### I2C Bus Structure

\`\`\`
        Master (Arduino)
           |
    ┌──────┴──────┐
   SDA          SCL
    │            │
    ├────────────┤ (Pull-up resistors: 4.7kΩ)
    │            │
    ├─Device 1───┤ (Address: 0x3C)
    │            │
    ├─Device 2───┤ (Address: 0x68)
    │            │
    └─Device 3───┘ (Address: 0x76)
\`\`\`

### Arduino I2C Pins

| Board | SDA | SCL |
|-------|-----|-----|
| Arduino Uno | A4 | A5 |
| Arduino Mega | 20 | 21 |
| ESP32 | 21 | 22 |
| ESP8266 | GPIO4 | GPIO5 |

### I2C Addressing

Each device has a **unique 7-bit address** (0x00 to 0x7F):

| Device | Typical Address |
|--------|----------------|
| OLED Display | 0x3C or 0x3D |
| MPU6050 (Gyro) | 0x68 or 0x69 |
| BMP280 (Pressure) | 0x76 or 0x77 |
| PCF8574 (I/O Expander) | 0x20 to 0x27 |

### I2C Scanner Code

**Essential tool** to find device addresses:

\`\`\`cpp
#include <Wire.h>

void setup() {
    Serial.begin(115200);
    Wire.begin();
    
    Serial.println("\\nI2C Scanner");
    Serial.println("Scanning...");
    
    byte count = 0;
    for (byte addr = 1; addr < 127; addr++) {
        Wire.beginTransmission(addr);
        byte error = Wire.endTransmission();
        
        if (error == 0) {
            Serial.print("Device found at 0x");
            if (addr < 16) Serial.print("0");
            Serial.println(addr, HEX);
            count++;
        }
    }
    
    Serial.print("\\nFound ");
    Serial.print(count);
    Serial.println(" device(s)");
}

void loop() {}
\`\`\`

### Reading from I2C Device

\`\`\`cpp
#include <Wire.h>

#define DEVICE_ADDR 0x68  // MPU6050 address

void setup() {
    Serial.begin(115200);
    Wire.begin();
}

void loop() {
    Wire.beginTransmission(DEVICE_ADDR);
    Wire.write(0x3B);  // Register to read from
    Wire.endTransmission(false);  // Keep connection alive
    
    Wire.requestFrom(DEVICE_ADDR, 2);  // Request 2 bytes
    
    if (Wire.available() >= 2) {
        byte highByte = Wire.read();
        byte lowByte = Wire.read();
        int16_t value = (highByte << 8) | lowByte;
        
        Serial.print("Value: ");
        Serial.println(value);
    }
    
    delay(100);
}
\`\`\`

### Writing to I2C Device

\`\`\`cpp
void writeRegister(byte addr, byte reg, byte value) {
    Wire.beginTransmission(addr);
    Wire.write(reg);     // Register address
    Wire.write(value);   // Data to write
    Wire.endTransmission();
}

// Example: Configure MPU6050
void setup() {
    Wire.begin();
    writeRegister(0x68, 0x6B, 0x00);  // Wake up MPU6050
}
\`\`\`

### Pull-up Resistors

**CRITICAL**: I2C requires pull-up resistors on SDA and SCL!

\`\`\`
5V ─┬─ 4.7kΩ ─┬─ SDA (to all devices)
    │          │
    └─ 4.7kΩ ─┴─ SCL (to all devices)
\`\`\`

**Why?**
- I2C uses open-drain outputs
- Pull-ups ensure signals return to HIGH
- Without them: communication fails!

**Note**: Some modules have built-in pull-ups (check before adding more)

### Common Issues

**Problem**: I2C scanner finds no devices
**Solutions**:
1. Check pull-up resistors (4.7kΩ)
2. Verify SDA/SCL connections
3. Check device power (3.3V vs 5V)
4. Try different addresses

**Problem**: Works with one device, fails with multiple
**Solutions**:
1. Ensure unique addresses
2. Add stronger pull-ups (2.2kΩ)
3. Shorten wire lengths

**Problem**: Random freezes
**Solutions**:
1. Add timeout to Wire operations
2. Check for bus conflicts
3. Verify power supply stability

### Use Cases
- ✅ OLED/LCD displays
- ✅ Sensor modules (temp, pressure, gyro)
- ✅ Real-time clocks (RTC)
- ✅ I/O expanders
- ❌ High-speed data (use SPI)
- ❌ Long distances (use UART or CAN)
            `},{id:"spi-protocol",title:"⚡ SPI Communication",content:`
## What is SPI?

**SPI** (Serial Peripheral Interface) is the **fastest** common protocol:
- **4 wires** minimum
- **Synchronous**: Master provides clock
- **Full-duplex**: Send and receive simultaneously
- **Speed**: Up to 10+ MHz

### SPI Bus Structure

\`\`\`
Master (Arduino)
    │
    ├─ MOSI (Master Out, Slave In)
    ├─ MISO (Master In, Slave Out)
    ├─ SCK  (Serial Clock)
    │
    ├─ CS1 (Chip Select for Device 1)
    ├─ CS2 (Chip Select for Device 2)
    └─ CS3 (Chip Select for Device 3)
\`\`\`

**Key Difference from I2C**: Each device needs its own CS (Chip Select) pin!

### Arduino SPI Pins

| Board | MOSI | MISO | SCK | SS/CS |
|-------|------|------|-----|-------|
| Uno/Nano | 11 | 12 | 13 | 10 |
| Mega | 51 | 50 | 52 | 53 |
| ESP32 | 23 | 19 | 18 | 5 |

### Basic SPI Code

\`\`\`cpp
#include <SPI.h>

const int CS_PIN = 10;

void setup() {
    pinMode(CS_PIN, OUTPUT);
    digitalWrite(CS_PIN, HIGH);  // Deselect device
    
    SPI.begin();
    SPI.setClockDivider(SPI_CLOCK_DIV16);  // 1 MHz
}

void loop() {
    digitalWrite(CS_PIN, LOW);   // Select device
    
    byte response = SPI.transfer(0xAB);  // Send 0xAB, receive response
    
    digitalWrite(CS_PIN, HIGH);  // Deselect device
    
    delay(100);
}
\`\`\`

### SPI Modes

SPI has 4 modes based on **clock polarity** and **phase**:

| Mode | CPOL | CPHA | When to Use |
|------|------|------|-------------|
| 0 | 0 | 0 | **Most common** (SD cards, displays) |
| 1 | 0 | 1 | Some sensors |
| 2 | 1 | 0 | Rare |
| 3 | 1 | 1 | Some ADCs |

\`\`\`cpp
// Set SPI mode
SPI.beginTransaction(SPISettings(1000000, MSBFIRST, SPI_MODE0));
// ... transfer data ...
SPI.endTransaction();
\`\`\`

### Reading from SPI Device

\`\`\`cpp
byte readRegister(byte reg) {
    digitalWrite(CS_PIN, LOW);
    
    SPI.transfer(reg | 0x80);  // Set read bit
    byte value = SPI.transfer(0x00);  // Dummy byte to receive data
    
    digitalWrite(CS_PIN, HIGH);
    return value;
}
\`\`\`

### Writing to SPI Device

\`\`\`cpp
void writeRegister(byte reg, byte value) {
    digitalWrite(CS_PIN, LOW);
    
    SPI.transfer(reg & 0x7F);  // Clear write bit
    SPI.transfer(value);
    
    digitalWrite(CS_PIN, HIGH);
}
\`\`\`

### Multiple SPI Devices

\`\`\`cpp
const int CS_DISPLAY = 10;
const int CS_SD_CARD = 9;
const int CS_SENSOR = 8;

void setup() {
    pinMode(CS_DISPLAY, OUTPUT);
    pinMode(CS_SD_CARD, OUTPUT);
    pinMode(CS_SENSOR, OUTPUT);
    
    // Deselect all
    digitalWrite(CS_DISPLAY, HIGH);
    digitalWrite(CS_SD_CARD, HIGH);
    digitalWrite(CS_SENSOR, HIGH);
    
    SPI.begin();
}

void readSensor() {
    digitalWrite(CS_SENSOR, LOW);
    byte data = SPI.transfer(0x00);
    digitalWrite(CS_SENSOR, HIGH);
}
\`\`\`

### SPI vs I2C Comparison

| Feature | SPI | I2C |
|---------|-----|-----|
| **Speed** | Very fast (10+ MHz) | Moderate (400 kHz) |
| **Wires** | 4+ (MOSI, MISO, SCK, CS) | 2 (SDA, SCL) |
| **Devices** | Limited by CS pins | 127 devices |
| **Complexity** | Simple protocol | More complex |
| **Distance** | Short (< 1m) | Short (< 1m) |

**Use SPI when**: Speed is critical (displays, SD cards, high-speed ADCs)
**Use I2C when**: Multiple devices, limited pins

### Common Issues

**Problem**: No response from device
**Solutions**:
1. Check CS pin is correct
2. Verify MOSI/MISO not swapped
3. Try different SPI modes
4. Check clock speed (some devices have max speed)

**Problem**: Data corruption
**Solutions**:
1. Reduce SPI clock speed
2. Shorten wires
3. Add decoupling capacitors (0.1μF near device)

**Problem**: Works alone, fails with multiple devices
**Solutions**:
1. Ensure CS pins are independent
2. Deselect all devices in setup()
3. Check for bus conflicts

### Advanced: DMA Transfer

For high-speed continuous data:

\`\`\`cpp
// ESP32 example
#include <driver/spi_master.h>

spi_device_handle_t spi;

void setup() {
    spi_bus_config_t buscfg = {
        .mosi_io_num = 23,
        .miso_io_num = 19,
        .sclk_io_num = 18,
        .quadwp_io_num = -1,
        .quadhd_io_num = -1,
        .max_transfer_sz = 4096
    };
    
    spi_bus_initialize(HSPI_HOST, &buscfg, 1);  // DMA channel 1
}
\`\`\`

### Use Cases
- ✅ TFT displays (fast refresh)
- ✅ SD cards (high-speed storage)
- ✅ High-speed ADCs/DACs
- ✅ NRF24L01 (wireless)
- ❌ Simple sensors (I2C is easier)
- ❌ Long distances (use UART or CAN)
            `},{id:"protocol-comparison",title:"📊 Protocol Selection Guide",content:`
## Quick Decision Tree

\`\`\`
Need to communicate with a device?
│
├─ Only 1 device, simple data?
│  └─ Use UART (2 wires, easy)
│
├─ Multiple devices, moderate speed?
│  └─ Use I2C (2 wires, 127 devices)
│
└─ High speed, lots of data?
   └─ Use SPI (4+ wires, very fast)
\`\`\`

## Real-World Examples

### Example 1: Weather Station
**Components**: DHT22, BMP280, OLED display

**Best Choice**: **I2C**
- BMP280 has I2C (address 0x76)
- OLED has I2C (address 0x3C)
- DHT22 uses digital pin (not a protocol)
- Only 2 wires needed for multiple devices

### Example 2: Data Logger
**Components**: SD card, RTC, sensors

**Best Choice**: **SPI for SD card** + **I2C for RTC**
- SD card needs speed → SPI
- RTC is slow, needs precision → I2C
- Mix protocols on same Arduino!

### Example 3: GPS Tracker
**Components**: GPS module, ESP32

**Best Choice**: **UART**
- GPS sends NMEA sentences via serial
- Simple point-to-point
- Standard 9600 baud

## Mixing Protocols

You can use **all three** on one Arduino!

\`\`\`cpp
#include <Wire.h>
#include <SPI.h>

void setup() {
    // UART
    Serial.begin(115200);
    
    // I2C
    Wire.begin();
    
    // SPI
    SPI.begin();
    pinMode(10, OUTPUT);  // CS pin
}
\`\`\`

## Troubleshooting Matrix

| Symptom | UART | I2C | SPI |
|---------|------|-----|-----|
| No response | Check baud rate | Run I2C scanner | Check CS pin |
| Garbage data | TX/RX swapped | Missing pull-ups | Wrong SPI mode |
| Works then stops | Buffer overflow | Bus conflict | CS not deselected |
| Slow performance | Lower baud rate | Clock stretching | Reduce SPI speed |

## Best Practices

### 1. Start with Examples
Every library has examples. **Use them first!**

\`\`\`cpp
// Arduino IDE → File → Examples → Wire → master_writer
\`\`\`

### 2. Use Libraries
Don't write raw protocol code unless necessary:
- **UART**: \`Serial\` (built-in)
- **I2C**: \`Wire\` (built-in)
- **SPI**: \`SPI\` (built-in)

### 3. Add Timeouts
Prevent infinite loops:

\`\`\`cpp
unsigned long startTime = millis();
while (!Serial.available()) {
    if (millis() - startTime > 5000) {
        Serial.println("Timeout!");
        break;
    }
}
\`\`\`

### 4. Document Your Connections
\`\`\`cpp
/* 
 * I2C Devices:
 * - OLED Display (0x3C) → SDA: A4, SCL: A5
 * - BMP280 (0x76) → SDA: A4, SCL: A5
 * 
 * SPI Devices:
 * - SD Card → CS: Pin 10, MOSI: 11, MISO: 12, SCK: 13
 */
\`\`\`

## Advanced Topics

### 1. Bus Arbitration (I2C)
- Master controls the bus
- Slaves can't initiate communication
- Clock stretching for slow devices

### 2. Daisy Chaining (SPI)
Some devices support daisy chaining:
\`\`\`
Master → Device 1 → Device 2 → Device 3 → Master
\`\`\`
Saves CS pins but adds complexity.

### 3. Interrupt-Driven Communication
For real-time systems:
\`\`\`cpp
volatile bool dataReady = false;

void setup() {
    attachInterrupt(digitalPinToInterrupt(2), dataReadyISR, RISING);
}

void dataReadyISR() {
    dataReady = true;
}
\`\`\`

## Resources

### Datasheets
**Always read the datasheet!** Look for:
- Communication protocol section
- Register map
- Timing diagrams
- Example code

### Logic Analyzer
**Best debugging tool** for protocols:
- See actual signals
- Decode I2C/SPI/UART
- Find timing issues
- ~$10 on Amazon

### Oscilloscope
For advanced debugging:
- Measure signal quality
- Check clock accuracy
- Find noise issues
            `}]},yf={id:"common-mistakes",title:"Common Mistakes in IoT",subtitle:"Learn from others' failures to save your hardware",sections:[{id:"power-mistakes",title:"⚡ Power Supply Mistakes",content:`
## The #1 Killer: Incorrect Voltage

### Mistake: Powering 3.3V Device with 5V

**What Happens**: Instant death or gradual damage
**Common Victims**: ESP32, ESP8266, nRF24L01

\`\`\`
❌ WRONG:
Arduino 5V → ESP32 VIN (if no regulator)
Arduino 5V → nRF24L01 VCC

✅ CORRECT:
Arduino 3.3V → ESP32 VIN
Use level shifter for 5V ↔ 3.3V communication
\`\`\`

**Real Example**:
\`\`\`cpp
// ESP32 connected to Arduino
// Arduino TX (5V) → ESP32 RX (expects 3.3V)
// Result: ESP32 damaged after a few hours

// Fix: Use voltage divider or level shifter
// 5V → 1kΩ → ESP32 RX → 2kΩ → GND
// Output: 3.3V
\`\`\`

### Mistake: Insufficient Current Supply

**Symptoms**:
- Random resets
- WiFi won't connect
- Servo jitters
- Brown-out detector triggers

**Common Scenario**:
\`\`\`
USB Port: 500mA max
ESP32 WiFi: 250mA peak
Servo: 500mA stall current
Total: 750mA → INSUFFICIENT!
\`\`\`

**Solution**:
\`\`\`
Use external 5V power supply (2A minimum)
Add bulk capacitor (1000μF) near power input
Separate power for motors/servos
\`\`\`

### Mistake: No Decoupling Capacitors

**Why It Matters**: Digital switching creates voltage spikes

**Proper Decoupling**:
\`\`\`
Every IC needs:
- 100nF ceramic capacitor (close to VCC/GND pins)
- 10μF electrolytic (power input)

ESP32/ESP8266 specifically need:
- 100nF ceramic
- 10μF tantalum
- 470μF electrolytic (bulk)
\`\`\`

**Placement**:
\`\`\`
❌ WRONG: Capacitor 5cm away from IC
✅ CORRECT: Capacitor within 5mm of VCC pin
\`\`\`

## Ground Loops and Noise

### Mistake: Multiple Ground Paths

**Problem**: Creates noise, interference, erratic behavior

\`\`\`
❌ WRONG:
Arduino GND → Sensor GND → Motor GND → Power Supply GND
(Multiple paths create loops)

✅ CORRECT:
Star ground topology:
All GNDs → Single common point → Power supply GND
\`\`\`

### Mistake: Long Ground Wires

**Issue**: Ground impedance causes voltage differences

\`\`\`
Rule of Thumb:
Ground wire should be SHORTER than signal wire
Use thick wire for ground (lower resistance)
\`\`\`

## Reverse Polarity Protection

### Mistake: No Protection Diode

**What Happens**: Instant component death when battery reversed

**Simple Protection**:
\`\`\`
Add 1N4007 diode in series with power:
Battery + → Diode Anode → Diode Cathode → Circuit +
Battery - → Circuit -

Voltage drop: ~0.7V (acceptable for most cases)
\`\`\`

**Better Protection** (no voltage drop):
\`\`\`
Use P-channel MOSFET:
- Gate to GND via 10kΩ
- Source to Battery +
- Drain to Circuit +
\`\`\`
            `},{id:"wiring-mistakes",title:"🔌 Wiring and Connection Mistakes",content:`
## Breadboard Blunders

### Mistake: Not Understanding Breadboard Layout

**Critical Knowledge**:
\`\`\`
Breadboard Rails:
+  +  +  +  +  (all connected horizontally)
-  -  -  -  -  (all connected horizontally)

Center Rows:
a b c d e | f g h i j
└─────┘   └─────┘
(a-e connected vertically, f-j connected vertically)
\`\`\`

**Common Error**:
\`\`\`
Placing IC across center gap:
Pin 1 (a1) connects to Pin 8 (e1) ← WRONG!

Correct: IC straddles the gap
Pin 1 (e1) | Pin 8 (f1)
\`\`\`

### Mistake: Loose Connections

**Signs**:
- Works when you touch it
- Intermittent failures
- Different behavior each time

**Fixes**:
\`\`\`
1. Use solid core wire (22-24 AWG)
2. Trim wire leads to proper length
3. Push components firmly into breadboard
4. Check for oxidized pins (clean with alcohol)
5. Replace worn breadboards
\`\`\`

### Mistake: Wire Spaghetti

**Problem**: Impossible to debug, prone to shorts

**Best Practices**:
\`\`\`
1. Use color coding:
   - Red: Power (+5V, +3.3V)
   - Black: Ground
   - Yellow: Signals
   - Green: I2C (SDA/SCL)
   - Blue: SPI

2. Route wires neatly:
   - Power rails on edges
   - Signals in middle
   - Keep wires flat

3. Label complex connections
\`\`\`

## Pull-up/Pull-down Resistor Mistakes

### Mistake: Forgetting Pull-ups on I2C

**Symptom**: I2C devices not detected

**Why**: I2C uses open-drain outputs (needs pull-ups!)

\`\`\`cpp
// I2C Scanner finds nothing
// Check: Do you have 4.7kΩ resistors?

SDA → 4.7kΩ → VCC
SCL → 4.7kΩ → VCC
\`\`\`

**Note**: Some modules have built-in pull-ups
- Check with multimeter: Measure resistance to VCC
- If ~4.7kΩ, pull-ups present
- If >100kΩ, need external pull-ups

### Mistake: Wrong Pull-up Value

**Too Strong** (< 1kΩ):
- Wastes power
- May damage outputs
- Slows rise time

**Too Weak** (> 10kΩ):
- Slow rise time
- Noise susceptibility
- Communication errors

**Sweet Spot**:
\`\`\`
I2C: 4.7kΩ (standard)
I2C (high speed): 2.2kΩ
Buttons: 10kΩ
Reset pins: 10kΩ
\`\`\`

### Mistake: Floating Inputs

**Problem**: Undefined logic level, random behavior

\`\`\`cpp
// Button without pull-up/pull-down
pinMode(BUTTON_PIN, INPUT);  // ❌ FLOATING!

if(digitalRead(BUTTON_PIN)) {
    // Triggers randomly due to noise
}

// Fix 1: Internal pull-up
pinMode(BUTTON_PIN, INPUT_PULLUP);  // ✅

// Fix 2: External pull-down
// BUTTON_PIN → 10kΩ → GND
\`\`\`

## Level Shifting Mistakes

### Mistake: Connecting 5V to 3.3V Directly

**Dangerous Combinations**:
\`\`\`
Arduino (5V) → ESP32 (3.3V)
Arduino (5V) → nRF24L01 (3.3V)
Raspberry Pi (3.3V) ← Arduino (5V)
\`\`\`

**Solutions**:

**1. Voltage Divider** (for one-way communication):
\`\`\`
5V → 1kΩ → Signal → 2kΩ → GND
Output: 3.3V
\`\`\`

**2. Level Shifter IC** (for bidirectional):
\`\`\`
Use TXS0108E or similar
- Supports multiple channels
- Bidirectional
- Fast switching
\`\`\`

**3. MOSFET Level Shifter** (I2C):
\`\`\`
Simple 2-transistor circuit
Works for I2C, open-drain signals
\`\`\`

## Pin Configuration Mistakes

### Mistake: Using Strapping Pins on ESP32

**ESP32 Boot Strapping Pins**:
\`\`\`
GPIO 0: Must be HIGH at boot (pulled up)
GPIO 2: Must be LOW at boot (floating/low)
GPIO 12: Must be LOW at boot (MTDI)
GPIO 15: Must be HIGH at boot (MTDO)
\`\`\`

**What Happens**:
\`\`\`
If GPIO 0 is LOW at boot → Enters flash mode
If GPIO 12 is HIGH at boot → Changes flash voltage
\`\`\`

**Safe Pins for ESP32**:
\`\`\`
Input/Output: 4, 5, 16, 17, 18, 19, 21, 22, 23
ADC: 32, 33, 34, 35, 36, 39
Avoid: 0, 2, 12, 15 (unless you know what you're doing)
\`\`\`

### Mistake: Exceeding Pin Current

**Arduino Pin Limits**:
\`\`\`
Per pin: 40mA maximum (20mA recommended)
Total all pins: 200mA maximum
\`\`\`

**Common Violation**:
\`\`\`cpp
// Driving LED directly
pinMode(13, OUTPUT);
digitalWrite(13, HIGH);  // LED + 220Ω resistor

Current = 5V / 220Ω = 22.7mA  // ✅ OK

// Driving motor directly
digitalWrite(9, HIGH);  // Motor draws 500mA
// ❌ PIN WILL DIE!

// Fix: Use transistor or MOSFET
\`\`\`
            `},{id:"code-mistakes",title:"💻 Programming Mistakes",content:`
## Timing and Delay Mistakes

### Mistake: Using delay() Everywhere

**Problem**: Blocks entire program

\`\`\`cpp
// ❌ BAD: Nothing else can happen during delay
void loop() {
    digitalWrite(LED, HIGH);
    delay(1000);
    digitalWrite(LED, LOW);
    delay(1000);
    // Can't read sensors, check buttons, etc.
}

// ✅ GOOD: Non-blocking timing
unsigned long previousMillis = 0;
const long interval = 1000;

void loop() {
    unsigned long currentMillis = millis();
    
    if (currentMillis - previousMillis >= interval) {
        previousMillis = currentMillis;
        digitalWrite(LED, !digitalRead(LED));
    }
    
    // Can do other things here!
    checkButtons();
    readSensors();
}
\`\`\`

### Mistake: Not Debouncing Buttons

**Problem**: One press registers as multiple

\`\`\`cpp
// ❌ BAD: Counts multiple times per press
int count = 0;
void loop() {
    if (digitalRead(BUTTON) == LOW) {
        count++;
        Serial.println(count);
    }
}

// ✅ GOOD: Software debouncing
int lastState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;

void loop() {
    int reading = digitalRead(BUTTON);
    
    if (reading != lastState) {
        lastDebounceTime = millis();
    }
    
    if ((millis() - lastDebounceTime) > debounceDelay) {
        if (reading == LOW) {
            count++;
            Serial.println(count);
            while(digitalRead(BUTTON) == LOW);  // Wait for release
        }
    }
    
    lastState = reading;
}
\`\`\`

## Memory Management Mistakes

### Mistake: String Concatenation in Loop

**Problem**: Heap fragmentation, memory leaks

\`\`\`cpp
// ❌ BAD: Creates new String objects constantly
void loop() {
    String message = "Sensor: ";
    message += String(analogRead(A0));
    message += " Value";
    Serial.println(message);
    delay(100);
}

// ✅ GOOD: Use char arrays or F() macro
void loop() {
    Serial.print(F("Sensor: "));
    Serial.print(analogRead(A0));
    Serial.println(F(" Value"));
    delay(100);
}
\`\`\`

### Mistake: Not Using PROGMEM for Constants

**Problem**: Wastes precious RAM

\`\`\`cpp
// ❌ BAD: Stores in RAM
const char* messages[] = {
    "System starting...",
    "Connecting to WiFi...",
    "Connection established"
};

// ✅ GOOD: Stores in Flash
const char msg1[] PROGMEM = "System starting...";
const char msg2[] PROGMEM = "Connecting to WiFi...";
const char msg3[] PROGMEM = "Connection established";

const char* const messages[] PROGMEM = {msg1, msg2, msg3};

// Reading from PROGMEM
char buffer[50];
strcpy_P(buffer, (char*)pgm_read_word(&(messages[0])));
Serial.println(buffer);
\`\`\`

## Sensor Reading Mistakes

### Mistake: Not Averaging Noisy Readings

**Problem**: Erratic sensor values

\`\`\`cpp
// ❌ BAD: Single reading
int value = analogRead(A0);

// ✅ GOOD: Moving average
const int numReadings = 10;
int readings[numReadings];
int readIndex = 0;
int total = 0;

void loop() {
    total = total - readings[readIndex];
    readings[readIndex] = analogRead(A0);
    total = total + readings[readIndex];
    readIndex = (readIndex + 1) % numReadings;
    
    int average = total / numReadings;
    Serial.println(average);
}
\`\`\`

### Mistake: Reading Sensors Too Fast

**Problem**: Sensor can't keep up, returns stale data

\`\`\`cpp
// DHT11 example
// ❌ BAD: Reading every 100ms
void loop() {
    float temp = dht.readTemperature();
    delay(100);  // DHT11 needs 2 seconds!
}

// ✅ GOOD: Respect sensor timing
unsigned long lastRead = 0;
void loop() {
    if (millis() - lastRead >= 2000) {
        float temp = dht.readTemperature();
        lastRead = millis();
    }
}
\`\`\`

## Communication Mistakes

### Mistake: Not Checking Serial.available()

**Problem**: Reading when no data, blocks program

\`\`\`cpp
// ❌ BAD: Blocks if no data
void loop() {
    char c = Serial.read();  // Returns -1 if no data
    processCommand(c);
}

// ✅ GOOD: Check first
void loop() {
    if (Serial.available() > 0) {
        char c = Serial.read();
        processCommand(c);
    }
}
\`\`\`

### Mistake: Buffer Overflow in Serial Reading

**Problem**: Crashes, memory corruption

\`\`\`cpp
// ❌ BAD: No bounds checking
char buffer[10];
int i = 0;
void loop() {
    if (Serial.available()) {
        buffer[i++] = Serial.read();  // Will overflow!
    }
}

// ✅ GOOD: Bounds checking
char buffer[10];
int i = 0;
void loop() {
    if (Serial.available() && i < 9) {
        buffer[i++] = Serial.read();
        buffer[i] = '\\0';  // Null terminate
    }
}
\`\`\`
            `},{id:"component-mistakes",title:"🔧 Component Selection Mistakes",content:`
## LED Mistakes

### Mistake: No Current Limiting Resistor

**What Happens**: LED burns out immediately or gradually

\`\`\`
❌ WRONG:
Pin → LED → GND

✅ CORRECT:
Pin → Resistor → LED → GND

Resistor calculation:
R = (Vsource - VLED) / ILED

For 5V Arduino, Red LED:
R = (5V - 2V) / 0.020A = 150Ω
Use 220Ω (standard value)
\`\`\`

### Mistake: Wrong LED Polarity

**Identification**:
\`\`\`
Anode (+): Longer leg, flat side of rim
Cathode (-): Shorter leg, flat edge on lens
\`\`\`

## Sensor Mistakes

### Mistake: Using Cheap DHT11 for Critical Applications

**DHT11 Limitations**:
- ±2°C accuracy (terrible!)
- 1 reading per 2 seconds
- Humidity range: 20-80% only

**Better Alternatives**:
\`\`\`
DHT22: ±0.5°C, 0-100% humidity
BME280: ±1°C, pressure sensor included
SHT31: ±0.3°C, industrial grade
\`\`\`

### Mistake: Not Calibrating Sensors

**Example: Soil Moisture Sensor**

\`\`\`cpp
// ❌ BAD: Using raw values
int moisture = analogRead(A0);
if (moisture < 500) {
    waterPlant();
}

// ✅ GOOD: Calibrated values
const int DRY = 850;    // Measured in air
const int WET = 400;    // Measured in water

int moisture = analogRead(A0);
int percent = map(moisture, WET, DRY, 100, 0);
percent = constrain(percent, 0, 100);

if (percent < 30) {
    waterPlant();
}
\`\`\`

## Motor and Actuator Mistakes

### Mistake: Driving Motor Directly from Arduino

**Problem**: Arduino can't supply enough current

\`\`\`
Arduino pin: 40mA max
Small DC motor: 100-500mA
Servo: 500-1000mA
\`\`\`

**Solution**: Use transistor or motor driver

\`\`\`
For DC Motor:
Arduino → 1kΩ → NPN Transistor Base
Motor + → Power Supply +
Motor - → Transistor Collector
Transistor Emitter → GND
Flyback diode across motor (1N4007)

For Servo:
Servo Signal → Arduino Pin
Servo Power → External 5V supply (not Arduino 5V pin!)
Servo GND → Common GND
\`\`\`

### Mistake: No Flyback Diode on Inductive Loads

**What Happens**: Voltage spike damages Arduino

**Inductive Loads**:
- Motors
- Relays
- Solenoids

**Protection**:
\`\`\`
1N4007 diode across load:
Cathode (stripe) → Positive side
Anode → Negative side
\`\`\`

## WiFi/Bluetooth Module Mistakes

### Mistake: Powering ESP32 from Arduino 3.3V Pin

**Problem**: 3.3V pin can only supply ~50mA

\`\`\`
ESP32 current draw:
- Idle: 40mA
- WiFi active: 120mA
- WiFi transmit: 250mA peak

❌ WRONG: Arduino 3.3V → ESP32
✅ CORRECT: External 3.3V regulator (1A) → ESP32
\`\`\`

### Mistake: Poor WiFi Antenna Placement

**Bad Practices**:
- ESP32 inside metal enclosure
- Antenna near large metal objects
- Antenna parallel to ground plane

**Good Practices**:
- Keep antenna clear of obstructions
- Use external antenna for metal enclosures
- Orient antenna perpendicular to ground

## Battery and Power Mistakes

### Mistake: Using Alkaline Batteries for High Current

**Problem**: Voltage sag, poor performance

\`\`\`
Alkaline AA: 1.5V nominal, 0.9V under load
NiMH AA: 1.2V nominal, 1.1V under load (better!)
Li-ion: 3.7V nominal, stable under load (best!)
\`\`\`

**For High Current** (motors, WiFi):
- Use NiMH or Li-ion
- Add bulk capacitor (1000μF)

### Mistake: No Low Battery Protection

**Problem**: Over-discharge damages Li-ion batteries

\`\`\`cpp
// Monitor battery voltage
const float LOW_BATTERY = 3.3;  // For single Li-ion

void loop() {
    float voltage = analogRead(A0) * (3.3 / 1023.0) * 2;  // Voltage divider
    
    if (voltage < LOW_BATTERY) {
        enterSleepMode();  // Protect battery
    }
}
\`\`\`

## PCB Design Mistakes (for advanced users)

### Mistake: Thin Power Traces

**Problem**: Voltage drop, heating

\`\`\`
Trace width for current:
100mA: 0.25mm (10mil)
500mA: 0.5mm (20mil)
1A: 1mm (40mil)
2A: 2mm (80mil)
\`\`\`

### Mistake: No Ground Plane

**Problem**: Noise, EMI, poor signal integrity

**Best Practice**:
- Top layer: Signals
- Bottom layer: Solid ground plane
- Vias to connect grounds

## The Ultimate Checklist

Before powering on ANY project:

\`\`\`
☐ Voltage levels correct (3.3V vs 5V)
☐ Polarity correct (no reversed connections)
☐ Current limits respected
☐ Decoupling capacitors in place
☐ Pull-up/pull-down resistors where needed
☐ No shorts between power and ground
☐ Flyback diodes on inductive loads
☐ Level shifters for voltage mismatch
☐ Power supply adequate for total current
☐ All connections secure
\`\`\`

**Pro Tip**: Test with multimeter BEFORE connecting power!
            `}]},Sf={id:"pin-selection",title:"Pin Selection Guide",subtitle:"Which pins to use and which to avoid for stability",sections:[{id:"arduino-pins",title:"🔵 Arduino Uno/Nano Pin Guide",content:`
## Digital Pins (D0-D13)

### D0 & D1 (RX/TX) - **AVOID**

**Why**: Used for Serial communication (USB)

\`\`\`
❌ DON'T USE for:
- General I/O while using Serial Monitor
- Sensors or buttons

✅ OK TO USE when:
- Not using Serial communication
- After uploading code (disconnect during upload)
\`\`\`

**Symptom if used**: Upload fails, garbage in Serial Monitor

### D2 & D3 - **EXCELLENT**

**Features**:
- External interrupts (INT0, INT1)
- PWM capable (Pin 3 only)

**Best for**:
\`\`\`cpp
// Rotary encoders
attachInterrupt(digitalPinToInterrupt(2), encoderISR, CHANGE);

// Frequency counting
// Button press detection (instant response)
\`\`\`

### D4-D7 - **GOOD**

**Features**: Standard digital I/O

**Best for**:
- Buttons
- LEDs
- Relay control
- Digital sensors

### D8-D12 - **GOOD**

**Features**: Standard digital I/O

**Note**: D10, D11, D12 used by SPI
\`\`\`
D10: SS (Slave Select)
D11: MOSI
D12: MISO
D13: SCK (also has built-in LED)
\`\`\`

### D13 - **USE WITH CAUTION**

**Issues**:
- Has built-in LED (loads the pin)
- Used for SPI SCK
- May cause issues with some sensors

\`\`\`
✅ OK for: Testing, debugging
❌ Avoid for: Sensitive inputs, precise timing
\`\`\`

## Analog Pins (A0-A5)

### A0-A3 - **EXCELLENT**

**Features**:
- 10-bit ADC (0-1023)
- Can also be used as digital I/O

\`\`\`cpp
// As analog input
int value = analogRead(A0);  // 0-1023

// As digital I/O
pinMode(A0, OUTPUT);
digitalWrite(A0, HIGH);
\`\`\`

**Best for**:
- Potentiometers
- Analog sensors (LDR, thermistor)
- Voltage monitoring

### A4 & A5 - **RESERVED FOR I2C**

\`\`\`
A4: SDA (I2C Data)
A5: SCL (I2C Clock)
\`\`\`

**Can use as digital I/O if not using I2C**, but not recommended

## PWM Pins (Marked with ~)

**Pins**: 3, 5, 6, 9, 10, 11

**Frequency**: ~490 Hz (pins 5, 6 at ~980 Hz)

\`\`\`cpp
analogWrite(9, 128);  // 50% duty cycle
\`\`\`

**Best for**:
- LED dimming
- Motor speed control
- Servo control (use Servo library)

**Note**: Using tone() disables PWM on pins 3 and 11

## Pin Current Limits

\`\`\`
Per pin: 40mA absolute maximum
Recommended: 20mA per pin
Total all pins: 200mA maximum
\`\`\`

**Safe LED Connection**:
\`\`\`
Pin → 220Ω → LED → GND
Current = (5V - 2V) / 220Ω = 13.6mA ✅
\`\`\`

## Arduino Pin Summary Table

| Pin | Type | Special Function | Best Use |
|-----|------|------------------|----------|
| D0 | Digital | RX (Serial) | Avoid |
| D1 | Digital | TX (Serial) | Avoid |
| D2 | Digital | INT0, PWM | Interrupts |
| D3 | Digital | INT1, PWM | Interrupts, PWM |
| D4-D7 | Digital | - | General I/O |
| D8-D9 | Digital | PWM (D9) | General I/O |
| D10 | Digital | SS, PWM | SPI or PWM |
| D11 | Digital | MOSI, PWM | SPI or PWM |
| D12 | Digital | MISO | SPI |
| D13 | Digital | SCK, LED | Avoid for inputs |
| A0-A3 | Analog | ADC | Analog sensors |
| A4 | Analog | SDA (I2C) | I2C or analog |
| A5 | Analog | SCL (I2C) | I2C or analog |
            `},{id:"esp32-pins",title:"📡 ESP32 Pin Guide",content:`
## Input-Only Pins

**Pins**: 34, 35, 36 (VP), 39 (VN)

\`\`\`
❌ CANNOT be used as outputs
✅ CAN be used for:
- Analog input (ADC1)
- Digital input
\`\`\`

**No internal pull-up/pull-down resistors!**

## Strapping Pins (Boot Configuration)

### GPIO 0 - **CRITICAL**

\`\`\`
Must be HIGH at boot for normal operation
If LOW at boot: Enters flash/download mode
\`\`\`

**Safe usage**:
\`\`\`cpp
// Add 10kΩ pull-up resistor
// Can use for button (active LOW)
pinMode(0, INPUT_PULLUP);
\`\`\`

### GPIO 2 - **CRITICAL**

\`\`\`
Must be LOW or floating at boot
Connected to on-board LED on many boards
\`\`\`

**Safe usage**: General I/O after boot

### GPIO 12 (MTDI) - **CAUTION**

\`\`\`
Boot fails if pulled HIGH
Controls flash voltage (3.3V vs 1.8V)
\`\`\`

**Recommendation**: Avoid or use with pull-down

### GPIO 15 (MTDO) - **CAUTION**

\`\`\`
Outputs PWM signal at boot
Must be HIGH for normal boot
\`\`\`

**Safe usage**: Add pull-up, avoid sensitive inputs

## ADC Pins

### ADC1 (WiFi Compatible)

**Pins**: 32, 33, 34, 35, 36, 39

\`\`\`cpp
// Use ADC1 when WiFi is active
int value = analogRead(36);  // 0-4095 (12-bit)
\`\`\`

### ADC2 (WiFi Conflicts!)

**Pins**: 0, 2, 4, 12, 13, 14, 15, 25, 26, 27

\`\`\`
❌ CANNOT use ADC2 when WiFi is active!
✅ OK for digital I/O with WiFi
\`\`\`

## Touch Pins

**Pins**: 0, 2, 4, 12, 13, 14, 15, 27, 32, 33

\`\`\`cpp
// Capacitive touch sensing
int touchValue = touchRead(4);
if (touchValue < 40) {
    // Touch detected
}
\`\`\`

## Safe Pins for General Use

**Best pins** (no boot issues, no conflicts):

\`\`\`
Digital I/O: 4, 5, 16, 17, 18, 19, 21, 22, 23, 25, 26, 27
ADC (with WiFi): 32, 33, 34, 35, 36, 39
I2C: 21 (SDA), 22 (SCL) - default
SPI: 23 (MOSI), 19 (MISO), 18 (SCK), 5 (SS)
\`\`\`

## Pins to AVOID

\`\`\`
GPIO 1 (TX): Serial output
GPIO 3 (RX): Serial input
GPIO 6-11: Connected to flash (DO NOT USE!)
GPIO 12: Boot fails if HIGH
GPIO 15: Outputs at boot
\`\`\`

## ESP32 Pin Mapping Example

\`\`\`cpp
// Safe pin assignments for common peripherals

// LEDs
const int LED1 = 2;   // Built-in LED
const int LED2 = 4;   // External LED

// Buttons (with internal pull-up)
const int BUTTON1 = 0;   // Boot button
const int BUTTON2 = 5;   // External button

// Sensors
const int TEMP_SENSOR = 34;  // ADC1 (analog)
const int PIR_SENSOR = 27;   // Digital

// I2C
const int SDA_PIN = 21;  // Default
const int SCL_PIN = 22;  // Default

// SPI
const int MOSI = 23;
const int MISO = 19;
const int SCK = 18;
const int CS = 5;

// PWM (any pin except input-only)
const int MOTOR_PWM = 25;
const int SERVO_PWM = 26;
\`\`\`

## ESP32 Current Limits

\`\`\`
Per pin: 40mA maximum (12mA recommended)
Total all pins: 1.2A maximum
3.3V regulator: 500mA typical
\`\`\`
            `},{id:"esp8266-pins",title:"📶 ESP8266 Pin Guide",content:`
## Available GPIO Pins

**Total usable pins**: Only 9-11 (depending on board)

\`\`\`
GPIO 0, 2, 4, 5, 12, 13, 14, 15, 16
\`\`\`

## Boot Mode Pins

### GPIO 0 - **CRITICAL**

\`\`\`
Must be HIGH at boot
If LOW: Flash mode
\`\`\`

**Usage**:
\`\`\`cpp
// Safe with pull-up resistor
pinMode(0, INPUT_PULLUP);
// Can use for button (active LOW)
\`\`\`

### GPIO 2 - **CRITICAL**

\`\`\`
Must be HIGH at boot
Usually has built-in LED
\`\`\`

### GPIO 15 - **CRITICAL**

\`\`\`
Must be LOW at boot
Add pull-down resistor (10kΩ to GND)
\`\`\`

## Safe Pins

**Best for general use**:

\`\`\`
GPIO 4 (D2): I2C SDA
GPIO 5 (D1): I2C SCL
GPIO 12 (D6): MISO
GPIO 13 (D7): MOSI
GPIO 14 (D5): SCK
\`\`\`

## Pins with Limitations

### GPIO 16 (D0) - **SPECIAL**

\`\`\`
✅ Can be used for: Deep sleep wake-up, LED
❌ Cannot be used for: I2C, interrupts, PWM
\`\`\`

\`\`\`cpp
// Wake from deep sleep
ESP.deepSleep(10e6);  // 10 seconds
// Connect GPIO 16 to RST
\`\`\`

### GPIO 1 & 3 (TX/RX) - **AVOID**

\`\`\`
Used for Serial communication
Avoid unless you don't need Serial
\`\`\`

## NodeMCU Pin Mapping

**Important**: NodeMCU labels ≠ GPIO numbers!

| NodeMCU | GPIO | Notes |
|---------|------|-------|
| D0 | GPIO 16 | No PWM/I2C |
| D1 | GPIO 5 | I2C SCL |
| D2 | GPIO 4 | I2C SDA |
| D3 | GPIO 0 | Boot mode |
| D4 | GPIO 2 | Boot mode, LED |
| D5 | GPIO 14 | SPI SCK |
| D6 | GPIO 12 | SPI MISO |
| D7 | GPIO 13 | SPI MOSI |
| D8 | GPIO 15 | Boot mode |
| RX | GPIO 3 | Serial RX |
| TX | GPIO 1 | Serial TX |

\`\`\`cpp
// Use GPIO numbers in code
pinMode(5, OUTPUT);  // GPIO 5 (D1 on NodeMCU)
digitalWrite(5, HIGH);
\`\`\`

## ESP8266 Example Pin Assignment

\`\`\`cpp
// Safe pin configuration

// I2C
#define SDA_PIN 4   // D2
#define SCL_PIN 5   // D1

// SPI
#define MOSI_PIN 13  // D7
#define MISO_PIN 12  // D6
#define SCK_PIN 14   // D5
#define CS_PIN 15    // D8 (with pull-down!)

// General I/O
#define LED_PIN 2    // D4 (built-in LED)
#define BUTTON_PIN 0 // D3 (with pull-up)

// Wake-up
#define WAKE_PIN 16  // D0
\`\`\`
            `},{id:"pin-best-practices",title:"✅ Pin Selection Best Practices",content:`
## General Rules

### 1. Read the Datasheet

**Always check**:
- Pin functions and limitations
- Boot requirements
- Current limits
- Voltage levels

### 2. Reserve Communication Pins

\`\`\`
I2C: Reserve SDA/SCL
SPI: Reserve MOSI/MISO/SCK/SS
UART: Reserve TX/RX (if using Serial)
\`\`\`

### 3. Plan for Expansion

\`\`\`
Leave some pins unused for:
- Future sensors
- Debugging
- Firmware updates
\`\`\`

## Pin Assignment Strategy

### Step 1: List Requirements

\`\`\`
Example project:
- 2× LEDs
- 1× Button
- 1× DHT22 sensor
- 1× OLED display (I2C)
- 1× SD card (SPI)
\`\`\`

### Step 2: Assign Critical Pins First

\`\`\`
I2C (OLED): A4 (SDA), A5 (SCL)
SPI (SD): D10 (SS), D11 (MOSI), D12 (MISO), D13 (SCK)
\`\`\`

### Step 3: Assign Remaining Pins

\`\`\`
LEDs: D4, D5 (any digital pin)
Button: D2 (interrupt capable for responsiveness)
DHT22: D7 (any digital pin)
\`\`\`

## Interrupt Pin Selection

**Use interrupt pins for**:
- Rotary encoders
- Frequency counting
- Critical button presses
- Wake from sleep

\`\`\`cpp
// Arduino Uno: D2, D3
attachInterrupt(digitalPinToInterrupt(2), ISR, RISING);

// ESP32: Any pin
attachInterrupt(digitalPinToInterrupt(4), ISR, FALLING);
\`\`\`

## PWM Pin Selection

**Considerations**:
- Frequency requirements
- Number of channels needed
- Conflicts with other functions

\`\`\`cpp
// Arduino: Pins 3, 5, 6, 9, 10, 11
analogWrite(9, 128);

// ESP32: Any output pin (16 channels)
ledcSetup(0, 5000, 8);  // Channel 0, 5kHz, 8-bit
ledcAttachPin(25, 0);
ledcWrite(0, 128);
\`\`\`

## Analog Pin Selection

### Arduino

\`\`\`
ADC resolution: 10-bit (0-1023)
Reference voltage: 5V (or 3.3V for 3.3V boards)

Pins: A0-A5 (Uno), A0-A15 (Mega)
\`\`\`

### ESP32

\`\`\`
ADC resolution: 12-bit (0-4095)
Reference voltage: 3.3V

Use ADC1 (pins 32-39) when WiFi active
Avoid ADC2 with WiFi
\`\`\`

## Pin Protection

### Input Protection

\`\`\`
For external signals:
- Add series resistor (1kΩ)
- Clamp with diodes to VCC/GND
- Use optocoupler for isolation
\`\`\`

### Output Protection

\`\`\`
For driving loads:
- Use transistor/MOSFET
- Add current limiting resistor
- Flyback diode for inductive loads
\`\`\`

## Common Pin Assignment Patterns

### Pattern 1: Sensor Array

\`\`\`cpp
// Multiple analog sensors
const int sensors[] = {A0, A1, A2, A3};

void readSensors() {
    for (int i = 0; i < 4; i++) {
        int value = analogRead(sensors[i]);
        processSensor(i, value);
    }
}
\`\`\`

### Pattern 2: LED Matrix

\`\`\`cpp
// 8 LEDs on consecutive pins
const int LED_START = 4;
const int LED_COUNT = 8;

void setup() {
    for (int i = 0; i < LED_COUNT; i++) {
        pinMode(LED_START + i, OUTPUT);
    }
}

void setLED(int num, bool state) {
    digitalWrite(LED_START + num, state);
}
\`\`\`

### Pattern 3: Motor Control

\`\`\`cpp
// H-bridge motor driver
const int MOTOR_A_IN1 = 5;
const int MOTOR_A_IN2 = 6;
const int MOTOR_A_PWM = 9;

void motorForward(int speed) {
    digitalWrite(MOTOR_A_IN1, HIGH);
    digitalWrite(MOTOR_A_IN2, LOW);
    analogWrite(MOTOR_A_PWM, speed);
}
\`\`\`

## Debugging Pin Issues

### Symptom: Pin not working

**Check**:
1. Correct pin number in code
2. pinMode() called
3. Not conflicting with other function
4. Not damaged (test with multimeter)

### Symptom: Erratic behavior

**Check**:
1. Pull-up/pull-down resistors
2. Decoupling capacitors
3. Wire length (keep short)
4. Interference from other signals

### Symptom: Won't boot

**Check**:
1. Strapping pins correct
2. No shorts to ground/VCC
3. Power supply stable
4. Flash mode pins

## Pin Documentation Template

\`\`\`cpp
/*
 * PIN CONFIGURATION
 * 
 * Power:
 * - VIN: 7-12V external supply
 * - 5V: Regulated 5V output
 * - 3.3V: Regulated 3.3V output (50mA max)
 * - GND: Ground
 * 
 * I2C (OLED Display):
 * - SDA: A4
 * - SCL: A5
 * 
 * SPI (SD Card):
 * - MOSI: D11
 * - MISO: D12
 * - SCK: D13
 * - CS: D10
 * 
 * Digital I/O:
 * - LED1: D4 (with 220Ω resistor)
 * - LED2: D5 (with 220Ω resistor)
 * - BUTTON: D2 (with internal pull-up)
 * - DHT22: D7 (data pin)
 * 
 * Analog:
 * - LDR: A0 (with 10kΩ pull-down)
 * - POT: A1 (potentiometer)
 * 
 * PWM:
 * - SERVO: D9 (5V external power required)
 * 
 * Reserved:
 * - D0, D1: Serial (USB communication)
 * - D3: Available for future use
 */
\`\`\`

## Quick Reference: Pin Selection Priority

**Priority 1** (Must have):
- Communication pins (I2C, SPI, UART)
- Strapping pins (correct boot configuration)

**Priority 2** (Important):
- Interrupt pins (for time-critical tasks)
- PWM pins (for analog output)
- ADC pins (for analog input)

**Priority 3** (Flexible):
- General digital I/O
- Extra pins for expansion

**Avoid**:
- Pins with boot requirements
- Pins shared with critical functions
- Damaged or unreliable pins
            `}]},Ef={id:"power-guide",title:"Power & Battery Guide",subtitle:"Powering your projects for days, months, or years",sections:[{id:"power-basics",title:"⚡ Power Supply Fundamentals",content:`
## Voltage vs Current

### Voltage (V)
**What it is**: Electrical "pressure"
**Analogy**: Water pressure in a pipe

\`\`\`
Common voltages in IoT:
- 1.5V: AA/AAA alkaline battery
- 3.3V: ESP32, ESP8266, many sensors
- 3.7V: Li-ion battery (nominal)
- 5V: Arduino Uno, USB power
- 9-12V: Arduino Uno VIN (gets regulated to 5V)
\`\`\`

### Current (A or mA)
**What it is**: Flow of electrons
**Analogy**: Water flow rate

\`\`\`
Typical current draw:
- LED: 20mA
- Arduino idle: 50mA
- ESP32 WiFi active: 120-250mA
- Servo motor: 100-1000mA
- DC motor: 500-2000mA
\`\`\`

### Power (W)
\`\`\`
Power = Voltage × Current
P = V × I

Example:
ESP32 at 3.3V drawing 200mA
P = 3.3V × 0.2A = 0.66W
\`\`\`

## Voltage Regulators

### Linear Regulators (LM7805, AMS1117)

**How they work**: Convert excess voltage to heat

\`\`\`
Input: 7-12V
Output: 5V (LM7805) or 3.3V (AMS1117-3.3)
Efficiency: ~50-60%
\`\`\`

**Pros**:
- Simple circuit
- Low noise
- Cheap ($0.50)

**Cons**:
- Wastes power as heat
- Needs heatsink for >500mA
- Poor battery life

**When to use**: Wall-powered projects, low current (<500mA)

### Switching Regulators (Buck Converters)

**How they work**: Efficiently "chop" voltage

\`\`\`
Input: 4-40V (typical)
Output: Adjustable (1.25-35V)
Efficiency: 85-95%
\`\`\`

**Pros**:
- Very efficient
- Minimal heat
- Great for battery projects

**Cons**:
- More complex
- Can introduce noise
- Slightly more expensive ($1-3)

**When to use**: Battery-powered projects, high current

### Boost Converters (Step-up)

**Use case**: Increase voltage

\`\`\`
Example:
3.7V Li-ion → 5V for Arduino
1.5V AA battery → 3.3V for ESP32
\`\`\`

**Efficiency**: 80-90%

## Power Supply Selection Guide

| Project Type | Best Power Source | Regulator |
|--------------|-------------------|-----------|
| USB-powered desk project | 5V USB adapter | None (already 5V) |
| Battery portable (3.3V) | Li-ion 3.7V | Buck to 3.3V |
| Battery portable (5V) | Li-ion 3.7V | Boost to 5V |
| Wall-powered (5V) | 9V adapter | LM7805 |
| Solar-powered | Solar + Li-ion | Charge controller + buck |
| High current (motors) | 12V adapter | Separate 5V buck for logic |

## Calculating Power Requirements

### Step 1: List All Components

\`\`\`
Example project:
- Arduino Uno: 50mA
- 2× LEDs: 40mA (20mA each)
- DHT22 sensor: 2.5mA
- OLED display: 20mA
- WiFi module: 200mA peak
\`\`\`

### Step 2: Add Up Current

\`\`\`
Total = 50 + 40 + 2.5 + 20 + 200 = 312.5mA
Add 20% safety margin: 312.5 × 1.2 = 375mA
\`\`\`

### Step 3: Choose Power Supply

\`\`\`
Need: 375mA at 5V
Choose: 500mA or 1A power supply
(Never use exactly the minimum!)
\`\`\`

## Decoupling Capacitors

### Why Needed

**Problem**: Digital circuits create voltage spikes

\`\`\`
When ESP32 transmits WiFi:
Current spikes from 40mA to 250mA in microseconds
Voltage dips without capacitors
System resets or crashes
\`\`\`

### Proper Decoupling

\`\`\`
Every IC needs:
1. 100nF ceramic (0.1μF) - High frequency noise
   Place within 5mm of VCC pin

2. 10μF electrolytic - Medium frequency
   Place near IC

3. 100-1000μF bulk - Low frequency, current spikes
   Place at power input
\`\`\`

### ESP32/ESP8266 Specific

\`\`\`
Minimum capacitors:
- 100nF ceramic (close to chip)
- 10μF tantalum (near chip)
- 470μF electrolytic (power input)

Better:
- 100nF + 10μF + 100μF + 1000μF
\`\`\`

## Ground and Power Distribution

### Star Ground Topology

\`\`\`
❌ WRONG (Daisy chain):
Power → Device 1 → Device 2 → Device 3

✅ CORRECT (Star):
        Power
          |
    ┌─────┼─────┐
    |     |     |
Device1 Device2 Device3
\`\`\`

### Power Trace Width

**For PCBs**:

| Current | Trace Width (1oz copper) |
|---------|--------------------------|
| 100mA | 0.25mm (10mil) |
| 500mA | 0.5mm (20mil) |
| 1A | 1mm (40mil) |
| 2A | 2mm (80mil) |

**For breadboard**: Use thick jumper wires for power
            `},{id:"battery-types",title:"🔋 Battery Types and Selection",content:`
## Alkaline Batteries (AA, AAA, 9V)

### Specifications

\`\`\`
Voltage: 1.5V per cell (fresh)
Capacity: 2000-3000mAh (AA)
Voltage under load: Drops to 0.9V
\`\`\`

### Pros & Cons

**Pros**:
- Cheap
- Available everywhere
- No charging needed

**Cons**:
- Voltage drops significantly under load
- Poor performance in cold
- Not rechargeable
- Heavy

**Best for**: Low-power sensors, remote controls

**Avoid for**: WiFi modules, motors, high-current devices

## NiMH Rechargeable (AA, AAA)

### Specifications

\`\`\`
Voltage: 1.2V per cell
Capacity: 2000-2500mAh (AA)
Voltage under load: Stable ~1.1V
Cycles: 500-1000 recharges
\`\`\`

### Pros & Cons

**Pros**:
- Rechargeable
- Better under load than alkaline
- Stable voltage
- Environmentally friendly

**Cons**:
- Lower voltage (1.2V vs 1.5V)
- Self-discharge (~20% per month)
- Needs charger

**Best for**: High-drain devices, frequent use

## Li-ion / Li-Po Batteries

### 18650 Li-ion

\`\`\`
Voltage: 3.7V nominal (3.0-4.2V range)
Capacity: 2000-3500mAh
Cycles: 300-500
\`\`\`

**Pros**:
- High energy density
- Stable voltage
- Rechargeable
- Low self-discharge

**Cons**:
- Needs protection circuit
- Fire risk if damaged
- Expensive

**Best for**: ESP32, portable projects, drones

### Li-Po (Lithium Polymer)

\`\`\`
Voltage: 3.7V per cell
Capacity: 100mAh - 10,000mAh+
Discharge rate: 1C - 50C
\`\`\`

**Pros**:
- Lightweight
- Flexible shapes
- High discharge rate

**Cons**:
- Fragile (puncture = fire)
- Swells when damaged
- Expensive

**Best for**: Drones, RC projects, wearables

## Battery Protection

### Li-ion/Li-Po Protection Circuit

**Critical**: Never discharge below 3.0V!

\`\`\`
Protection circuit prevents:
- Over-discharge (< 3.0V)
- Over-charge (> 4.2V)
- Over-current
- Short circuit
\`\`\`

**Always buy batteries with built-in protection!**

### Low Battery Detection

\`\`\`cpp
// Monitor battery voltage
const float LOW_BATTERY = 3.3;  // For Li-ion
const int BATTERY_PIN = A0;

void setup() {
    pinMode(BATTERY_PIN, INPUT);
}

void loop() {
    // Voltage divider: Battery → 10kΩ → A0 → 10kΩ → GND
    float voltage = analogRead(BATTERY_PIN) * (3.3 / 1023.0) * 2;
    
    if (voltage < LOW_BATTERY) {
        enterSleepMode();  // Protect battery
    }
}
\`\`\`

## Battery Life Calculation

### Formula

\`\`\`
Battery Life (hours) = Battery Capacity (mAh) / Current Draw (mA)
\`\`\`

### Example 1: LED Project

\`\`\`
Battery: 2000mAh AA
Current: 20mA (LED)
Life = 2000 / 20 = 100 hours
\`\`\`

### Example 2: ESP32 WiFi

\`\`\`
Battery: 2500mAh Li-ion
Current: 120mA average (WiFi active)
Life = 2500 / 120 = 20.8 hours
\`\`\`

### Example 3: Deep Sleep Mode

\`\`\`
Battery: 2500mAh Li-ion
Active: 120mA for 10 seconds every 10 minutes
Sleep: 10μA (0.01mA)

Active time per hour: 6 × 10s = 60s = 1 minute
Sleep time per hour: 59 minutes

Average current:
= (120mA × 1min + 0.01mA × 59min) / 60min
= (120 + 0.59) / 60
= 2.01mA

Battery life = 2500 / 2.01 = 1244 hours = 52 days!
\`\`\`

## Charging Circuits

### TP4056 Li-ion Charger

**Specifications**:
\`\`\`
Input: 5V USB
Output: 4.2V (charge voltage)
Current: 1A (adjustable)
Protection: Over-charge, over-discharge
\`\`\`

**Wiring**:
\`\`\`
USB 5V → TP4056 IN+
USB GND → TP4056 IN-
Battery + → TP4056 BAT+
Battery - → TP4056 BAT-
Load + → TP4056 OUT+
Load - → TP4056 OUT-
\`\`\`

### Solar Charging

\`\`\`
Solar Panel (6V, 1W)
    ↓
TP4056 Charger
    ↓
Li-ion Battery (3.7V, 2500mAh)
    ↓
Buck Converter (3.3V)
    ↓
ESP32 Project
\`\`\`

**Panel sizing**:
\`\`\`
Project uses: 120mA average
Daily consumption: 120mA × 24h = 2880mAh

Solar panel needs to provide:
2880mAh / 4 hours sun = 720mA
At 6V: 720mA × 6V = 4.32W

Choose: 5-6W panel (accounting for inefficiency)
\`\`\`
            `},{id:"power-optimization",title:"⚙️ Power Optimization Techniques",content:`
## Sleep Modes

### Arduino Sleep

\`\`\`cpp
#include <avr/sleep.h>
#include <avr/power.h>

void setup() {
    // Disable unused peripherals
    power_adc_disable();
    power_spi_disable();
    power_timer1_disable();
}

void enterSleep() {
    set_sleep_mode(SLEEP_MODE_PWR_DOWN);
    sleep_enable();
    sleep_mode();  // Sleep here
    sleep_disable();  // Wakes up here
}
\`\`\`

**Power consumption**:
\`\`\`
Active: 50mA
Sleep: 0.1mA (500× reduction!)
\`\`\`

### ESP32 Deep Sleep

\`\`\`cpp
void setup() {
    Serial.begin(115200);
    
    // Do work
    readSensors();
    sendData();
    
    // Sleep for 10 minutes
    esp_sleep_enable_timer_wakeup(10 * 60 * 1000000);  // μs
    esp_deep_sleep_start();
}

void loop() {
    // Never reaches here
}
\`\`\`

**Power consumption**:
\`\`\`
Active (WiFi): 120-250mA
Light sleep: 0.8mA
Deep sleep: 10μA (0.01mA)
\`\`\`

### Wake-up Sources

**Timer wake-up**:
\`\`\`cpp
esp_sleep_enable_timer_wakeup(TIME_IN_MICROSECONDS);
\`\`\`

**External wake-up** (button, sensor):
\`\`\`cpp
esp_sleep_enable_ext0_wakeup(GPIO_NUM_33, 1);  // Wake on HIGH
\`\`\`

**Touch wake-up**:
\`\`\`cpp
esp_sleep_enable_touchpad_wakeup();
\`\`\`

## Reducing Active Power

### 1. Lower Clock Speed

\`\`\`cpp
// ESP32: Reduce from 240MHz to 80MHz
setCpuFrequencyMhz(80);  // Saves ~30% power
\`\`\`

### 2. Disable WiFi When Not Needed

\`\`\`cpp
WiFi.disconnect(true);  // Disconnect and turn off radio
WiFi.mode(WIFI_OFF);

// Later, when needed
WiFi.mode(WIFI_STA);
WiFi.begin(ssid, password);
\`\`\`

### 3. Reduce LED Brightness

\`\`\`cpp
// Instead of full brightness
analogWrite(LED, 255);  // 20mA

// Use lower brightness
analogWrite(LED, 50);   // 4mA (still visible!)
\`\`\`

### 4. Use Efficient Code

\`\`\`cpp
// ❌ BAD: Busy waiting
while(digitalRead(BUTTON) == HIGH);

// ✅ GOOD: Sleep between checks
while(digitalRead(BUTTON) == HIGH) {
    delay(10);  // Allows CPU to sleep
}
\`\`\`

## Power Profiling

### Measuring Current Draw

**Tools needed**:
- Multimeter (μA range)
- Or INA219 current sensor

**Setup**:
\`\`\`
Battery + → Multimeter + → Project +
Battery - → Project -

Set multimeter to mA or μA range
\`\`\`

### Creating Power Budget

\`\`\`
Component Power Budget:

MCU (active): 50mA × 5% duty = 2.5mA avg
MCU (sleep): 0.01mA × 95% duty = 0.01mA avg
WiFi (transmit): 200mA × 1% duty = 2mA avg
Sensor: 5mA × 10% duty = 0.5mA avg
LED: 20mA × 5% duty = 1mA avg

Total average: 6.01mA

Battery: 2500mAh
Life: 2500 / 6.01 = 416 hours = 17 days
\`\`\`

## Ultra-Low Power Design

### Target: Years on Battery

**Strategies**:

1. **Maximize sleep time**
\`\`\`
Wake every 15 minutes for 5 seconds
Sleep: 99.4% of the time
\`\`\`

2. **Use efficient sensors**
\`\`\`
BME280: 3.6μA sleep, 714μA active
vs DHT22: 50μA sleep, 1mA active
\`\`\`

3. **Minimize transmissions**
\`\`\`
Buffer data locally
Transmit once per hour instead of every reading
\`\`\`

4. **Use low-power MCU**
\`\`\`
ATmega328P (Arduino): 0.1μA sleep
ESP32: 10μA sleep
STM32L: 0.3μA sleep (best!)
\`\`\`

### Example: 1-Year Battery Life

\`\`\`
Target: 365 days on 2500mAh battery
Required average: 2500mAh / (365×24h) = 0.285mA

Design:
- Sleep: 10μA (0.01mA) for 99.9% time
- Active: 50mA for 0.1% time

Average = 0.01×0.999 + 50×0.001 = 0.06mA ✅

Actual life: 2500 / 0.06 = 41,666 hours = 4.75 years!
\`\`\`

## Power Supply Troubleshooting

### Symptom: Random Resets

**Causes**:
1. Insufficient current
2. Missing decoupling capacitors
3. Voltage drop during WiFi transmission

**Fixes**:
\`\`\`
- Add 1000μF capacitor at power input
- Use thicker power wires
- Upgrade to higher current supply
\`\`\`

### Symptom: Won't Turn On

**Checks**:
1. Measure voltage at MCU pins
2. Check for shorts (continuity test)
3. Verify polarity
4. Test power supply separately

### Symptom: Battery Drains Fast

**Debug**:
\`\`\`cpp
// Measure current in different states
Serial.println("Active mode");
delay(5000);

Serial.println("Entering sleep");
enterSleep();
// Measure current now
\`\`\`

## Power Supply Checklist

Before deploying battery-powered project:

\`\`\`
☐ Measured actual current draw
☐ Calculated battery life
☐ Added decoupling capacitors
☐ Implemented sleep mode
☐ Added low battery protection
☐ Tested in real conditions (temperature, etc.)
☐ Verified charging circuit (if rechargeable)
☐ Documented power consumption
☐ Planned battery replacement/recharge schedule
\`\`\`
            `},{id:"power-examples",title:"📋 Real-World Power Examples",content:`
## Example 1: Weather Station (Solar)

### Requirements
- ESP32 with BME280 sensor
- Read every 10 minutes
- Send to cloud via WiFi
- Solar powered, outdoor

### Power Analysis

\`\`\`
Active (reading + WiFi): 200mA for 10 seconds
Deep sleep: 10μA (0.01mA)

Per hour:
- Active: 6 × 10s = 60s
- Sleep: 59 minutes

Average current:
= (200mA × 1min + 0.01mA × 59min) / 60
= 3.34mA

Daily consumption: 3.34mA × 24h = 80mAh
\`\`\`

### Component Selection

\`\`\`
Battery: 3000mAh Li-ion (3.7V)
Days without sun: 3000 / 80 = 37 days ✅

Solar panel: 6V, 2W
Sunny hours: 4 hours/day
Daily generation: (2W / 3.7V) × 4h = 2160mAh
Surplus: 2160 - 80 = 2080mAh (charges battery)
\`\`\`

### Code

\`\`\`cpp
#include <WiFi.h>
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;

void setup() {
    // Read sensor
    bme.begin();
    float temp = bme.readTemperature();
    float humidity = bme.readHumidity();
    
    // Connect WiFi
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) delay(100);
    
    // Send data
    sendToCloud(temp, humidity);
    
    // Disconnect
    WiFi.disconnect(true);
    WiFi.mode(WIFI_OFF);
    
    // Sleep 10 minutes
    esp_sleep_enable_timer_wakeup(10 * 60 * 1000000);
    esp_deep_sleep_start();
}

void loop() {}
\`\`\`

## Example 2: Door Sensor (Battery)

### Requirements
- Detect door open/close
- Send notification via WiFi
- Battery powered (2× AA)
- 1 year battery life

### Power Analysis

\`\`\`
Door opens: 10 times/day
Each event: 5 seconds WiFi
Sleep current: 10μA

Active per day: 10 × 5s = 50s
Sleep per day: 86,400s - 50s ≈ 86,350s

Average current:
= (200mA × 50s + 0.01mA × 86,350s) / 86,400s
= 0.126mA

Battery: 2× AA NiMH = 2500mAh
Life: 2500 / 0.126 = 19,841 hours = 827 days ✅
\`\`\`

### Circuit

\`\`\`
2× AA (3V) → Boost converter → 3.3V
Reed switch → GPIO (wake-up pin)
\`\`\`

### Code

\`\`\`cpp
void setup() {
    // Configure wake-up on door sensor
    esp_sleep_enable_ext0_wakeup(GPIO_NUM_33, 1);
    
    // Check if door opened
    if (digitalRead(33) == HIGH) {
        connectWiFi();
        sendNotification("Door opened!");
        disconnectWiFi();
    }
    
    // Go back to sleep
    esp_deep_sleep_start();
}
\`\`\`

## Example 3: USB-Powered Display

### Requirements
- OLED display always on
- Real-time clock
- USB powered

### Power Analysis

\`\`\`
Arduino: 50mA
OLED: 20mA
RTC: 1mA
Total: 71mA

USB can provide: 500mA
Margin: 500 - 71 = 429mA ✅
\`\`\`

### No optimization needed (wall powered)

## Example 4: RC Car (High Current)

### Requirements
- 2× DC motors
- Servo for steering
- ESP32 for control
- Li-Po battery

### Power Analysis

\`\`\`
Motors (stall): 2× 1A = 2A
Motors (running): 2× 500mA = 1A
Servo: 500mA peak
ESP32: 200mA
Total peak: 2.7A
\`\`\`

### Component Selection

\`\`\`
Battery: 2S Li-Po (7.4V, 2200mAh, 25C)
Max discharge: 2200mAh × 25 = 55A ✅

Buck converter: 7.4V → 5V, 3A
For ESP32: Separate 3.3V regulator
\`\`\`

### Circuit

\`\`\`
Li-Po 7.4V
    ├→ Motor driver (direct)
    └→ Buck 5V → Servo
        └→ LDO 3.3V → ESP32
\`\`\`

**Key**: Separate power for logic and motors!

## Example 5: Wearable (Tiny Battery)

### Requirements
- Heart rate sensor
- OLED display
- Bluetooth
- 100mAh Li-Po

### Power Analysis

\`\`\`
Target: 8 hours/day for 3 days = 24 hours
Required average: 100mAh / 24h = 4.17mA

Display on: 10% time, 15mA
Display off: 90% time, 0.5mA
Sensor: 1mA continuous
BLE: 10mA when transmitting (5% time)

Average:
= 15×0.1 + 0.5×0.9 + 1 + 10×0.05
= 1.5 + 0.45 + 1 + 0.5
= 3.45mA ✅
\`\`\`

### Optimization

\`\`\`cpp
// Turn off display when not needed
display.ssd1306_command(SSD1306_DISPLAYOFF);

// Reduce BLE advertising interval
BLEDevice::setAdvertisingInterval(1000);  // 1 second

// Lower CPU frequency
setCpuFrequencyMhz(80);
\`\`\`

## Power Design Workflow

1. **Define requirements**
   - How long should it run?
   - What's the duty cycle?
   - Environmental conditions?

2. **Calculate power budget**
   - List all components
   - Measure actual current
   - Calculate average

3. **Select battery**
   - Capacity needed
   - Voltage requirements
   - Form factor

4. **Design power circuit**
   - Regulators
   - Protection
   - Charging (if needed)

5. **Optimize**
   - Implement sleep modes
   - Reduce unnecessary operations
   - Test and measure

6. **Validate**
   - Real-world testing
   - Temperature effects
   - Aging considerations
            `}]},Af={id:"sensor-principles",title:"Sensor Working Principles",subtitle:"The physics and logic behind how sensors perceive the world",sections:[{id:"temperature-sensors",title:"🌡️ Temperature Sensors",content:`
## How Temperature Sensors Work

### Thermistors (NTC/PTC)

**Principle**: Resistance changes with temperature

**NTC (Negative Temperature Coefficient)**:
\`\`\`
Temperature ↑ → Resistance ↓
Typical: 10kΩ at 25°C
\`\`\`

**Reading a Thermistor**:
\`\`\`cpp
// Voltage divider circuit
// VCC → 10kΩ → A0 → Thermistor → GND

int raw = analogRead(A0);
float voltage = raw * (5.0 / 1023.0);
float resistance = (10000 * voltage) / (5.0 - voltage);

// Steinhart-Hart equation (simplified)
float tempK = 1 / (0.001129148 + (0.000234125 * log(resistance)) + 
                    (0.0000000876741 * pow(log(resistance), 3)));
float tempC = tempK - 273.15;
\`\`\`

### DHT11/DHT22 (Digital Humidity & Temperature)

**Principle**: Capacitive humidity sensor + NTC thermistor

**How it works**:
1. Humidity changes capacitance of polymer film
2. Capacitance measured by internal circuit
3. NTC measures temperature
4. Microcontroller converts to digital signal

**Communication Protocol**:
\`\`\`
1. MCU sends start signal (LOW for 18ms)
2. DHT responds with 40-bit data
3. Data format: [Humidity High][Humidity Low][Temp High][Temp Low][Checksum]
\`\`\`

**Why 2-second delay?**
- Sensor needs time to stabilize
- Capacitor charging/discharging
- Internal ADC conversion

### DS18B20 (Digital Temperature)

**Principle**: Silicon bandgap temperature sensor

**Advantages**:
- ±0.5°C accuracy
- 1-Wire protocol (one data pin for multiple sensors)
- Each sensor has unique 64-bit ID

**1-Wire Protocol**:
\`\`\`cpp
#include <OneWire.h>
#include <DallasTemperature.h>

OneWire oneWire(2);  // Data pin
DallasTemperature sensors(&oneWire);

void setup() {
    sensors.begin();
}

void loop() {
    sensors.requestTemperatures();
    float temp = sensors.getTempCByIndex(0);
    Serial.println(temp);
    delay(1000);
}
\`\`\`

## Thermocouple vs RTD vs Thermistor

| Type | Range | Accuracy | Cost | Use Case |
|------|-------|----------|------|----------|
| Thermistor | -50 to 150°C | ±0.1°C | $ | DIY projects |
| RTD (PT100) | -200 to 850°C | ±0.15°C | $$$ | Industrial |
| Thermocouple | -270 to 1800°C | ±1°C | $$ | High temp |
| DHT22 | -40 to 80°C | ±0.5°C | $ | Room monitoring |
| DS18B20 | -55 to 125°C | ±0.5°C | $$ | Precision |
            `},{id:"distance-sensors",title:"📏 Distance & Proximity Sensors",content:`
## Ultrasonic Sensors (HC-SR04)

### Working Principle

**Time-of-Flight Measurement**:
\`\`\`
1. Trigger pin sends 10μs pulse
2. Sensor emits 8× 40kHz ultrasonic bursts
3. Sound travels to object and reflects back
4. Echo pin goes HIGH for duration = travel time
5. Distance = (Time × Speed of Sound) / 2
\`\`\`

**Speed of Sound**: 343 m/s (at 20°C)

**Calculation**:
\`\`\`cpp
long duration = pulseIn(ECHO_PIN, HIGH);
// Duration in microseconds
// Speed: 0.0343 cm/μs
float distance = (duration * 0.0343) / 2;  // cm
\`\`\`

### Limitations

**Minimum Distance**: ~2cm (sensor blind spot)
**Maximum Distance**: ~400cm (signal too weak)
**Beam Angle**: 15° cone (not a laser!)
**Surface Issues**:
- Soft materials (foam, fabric) absorb sound
- Angled surfaces reflect away
- Small objects may be missed

### Improving Accuracy

\`\`\`cpp
// Average multiple readings
float getDistance() {
    const int samples = 5;
    float total = 0;
    
    for(int i = 0; i < samples; i++) {
        digitalWrite(TRIG_PIN, LOW);
        delayMicroseconds(2);
        digitalWrite(TRIG_PIN, HIGH);
        delayMicroseconds(10);
        digitalWrite(TRIG_PIN, LOW);
        
        long duration = pulseIn(ECHO_PIN, HIGH, 30000);  // 30ms timeout
        if(duration > 0) {
            total += (duration * 0.0343) / 2;
        }
        delay(50);  // Wait between measurements
    }
    
    return total / samples;
}
\`\`\`

## IR Proximity Sensors

### Sharp GP2Y0A21YK

**Principle**: Triangulation with IR LED and position-sensitive detector

**How it works**:
1. IR LED emits infrared light
2. Light reflects off object
3. PSD (Position Sensitive Detector) measures angle
4. Closer object = larger angle = higher voltage

**Not linear!** Requires lookup table or formula:
\`\`\`cpp
float getDistance(int raw) {
    float voltage = raw * (5.0 / 1023.0);
    // Empirical formula for GP2Y0A21YK
    float distance = 27.86 * pow(voltage, -1.15);  // cm
    return distance;
}
\`\`\`

**Advantages**:
- Works in any lighting
- Fast response (<40ms)
- Not affected by object color

**Disadvantages**:
- Affected by surface reflectivity
- Limited range (10-80cm)
- Non-linear output

## Time-of-Flight (VL53L0X)

**Principle**: Laser time-of-flight measurement

**How it works**:
1. Emits laser pulse
2. Measures time for reflection
3. Calculates distance with high precision

**Advantages**:
- Very accurate (±3mm)
- Long range (up to 2m)
- Small beam angle (25°)
- I2C interface

**Code Example**:
\`\`\`cpp
#include <Wire.h>
#include <VL53L0X.h>

VL53L0X sensor;

void setup() {
    Wire.begin();
    sensor.init();
    sensor.setTimeout(500);
    
    // High accuracy mode
    sensor.setMeasurementTimingBudget(200000);
}

void loop() {
    int distance = sensor.readRangeSingleMillimeters();
    if (sensor.timeoutOccurred()) {
        Serial.println("Timeout!");
    } else {
        Serial.print(distance);
        Serial.println(" mm");
    }
}
\`\`\`

## Capacitive Proximity

**Principle**: Detects changes in capacitance

**How it works**:
- Sensor creates electric field
- Conductive object changes capacitance
- Microcontroller measures capacitance

**Applications**:
- Touch sensors
- Liquid level detection
- Non-contact switches

**ESP32 Touch Example**:
\`\`\`cpp
const int threshold = 40;

void setup() {
    Serial.begin(115200);
}

void loop() {
    int touchValue = touchRead(T0);  // GPIO 4
    Serial.println(touchValue);
    
    if(touchValue < threshold) {
        Serial.println("Touched!");
    }
    delay(100);
}
\`\`\`
            `},{id:"light-sensors",title:"💡 Light & Color Sensors",content:`
## Photoresistors (LDR)

### Working Principle

**Photoconductivity**: Resistance decreases with light intensity

\`\`\`
Dark: 1MΩ - 10MΩ
Bright sunlight: 100Ω - 1kΩ
\`\`\`

### Voltage Divider Circuit

\`\`\`
VCC (5V)
    |
   10kΩ (fixed resistor)
    |
   A0 (measurement point)
    |
   LDR (light dependent)
    |
   GND
\`\`\`

**Reading**:
\`\`\`cpp
int lightLevel = analogRead(A0);
// 0 = dark, 1023 = bright

// Convert to lux (approximate)
float voltage = lightLevel * (5.0 / 1023.0);
float resistance = 10000 * (5.0 - voltage) / voltage;
float lux = 500 / (resistance / 1000);  // Rough estimate
\`\`\`

### Calibration

\`\`\`cpp
// Measure in your environment
const int DARK_VALUE = 50;    // Measured at night
const int BRIGHT_VALUE = 900;  // Measured in daylight

int raw = analogRead(A0);
int percent = map(raw, DARK_VALUE, BRIGHT_VALUE, 0, 100);
percent = constrain(percent, 0, 100);
\`\`\`

## Photodiodes & Phototransistors

### Photodiode

**Principle**: Light generates current in PN junction

**Modes**:
1. **Photovoltaic** (no bias): Generates voltage
2. **Photoconductive** (reverse bias): Faster response

**Advantages**:
- Fast response (nanoseconds)
- Linear output
- Wide spectral range

**Use cases**: Light meters, optical communication

### Phototransistor

**Principle**: Light controls base current, amplifies output

**Higher sensitivity** than photodiode but **slower response**

## BH1750 (Digital Light Sensor)

**Principle**: Photodiode + ADC + I2C interface

**Advantages**:
- Direct lux measurement
- 16-bit resolution (1-65535 lux)
- I2C communication
- No calibration needed

**Code Example**:
\`\`\`cpp
#include <Wire.h>
#include <BH1750.h>

BH1750 lightMeter;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    lightMeter.begin(BH1750::CONTINUOUS_HIGH_RES_MODE);
}

void loop() {
    float lux = lightMeter.readLightLevel();
    Serial.print("Light: ");
    Serial.print(lux);
    Serial.println(" lx");
    delay(1000);
}
\`\`\`

**Lux Reference**:
\`\`\`
0.0001 lx: Moonless night
0.25 lx: Full moon
50 lx: Living room
320-500 lx: Office lighting
1000 lx: Overcast day
10,000-25,000 lx: Full daylight
100,000 lx: Direct sunlight
\`\`\`

## Color Sensors (TCS34725)

### Working Principle

**RGB Filtering**: Separate photodiodes with color filters

**Components**:
- Red filter photodiode
- Green filter photodiode
- Blue filter photodiode
- Clear (no filter) photodiode

**How it works**:
1. White LED illuminates object
2. Reflected light passes through filters
3. Each photodiode measures intensity
4. Microcontroller reads RGBC values

**Code Example**:
\`\`\`cpp
#include <Wire.h>
#include <Adafruit_TCS34725.h>

Adafruit_TCS34725 tcs = Adafruit_TCS34725(TCS34725_INTEGRATIONTIME_50MS, 
                                           TCS34725_GAIN_4X);

void setup() {
    Serial.begin(115200);
    if (tcs.begin()) {
        Serial.println("Found sensor");
    }
}

void loop() {
    uint16_t r, g, b, c;
    tcs.getRawData(&r, &g, &b, &c);
    
    // Normalize to 0-255
    uint32_t sum = r + g + b;
    float red = (float)r / sum * 255;
    float green = (float)g / sum * 255;
    float blue = (float)b / sum * 255;
    
    Serial.print("R: "); Serial.print(red);
    Serial.print(" G: "); Serial.print(green);
    Serial.print(" B: "); Serial.println(blue);
    
    delay(500);
}
\`\`\`

### Color Detection

\`\`\`cpp
String detectColor(float r, float g, float b) {
    if (r > g && r > b) return "Red";
    if (g > r && g > b) return "Green";
    if (b > r && b > g) return "Blue";
    if (r > 200 && g > 200 && b > 200) return "White";
    if (r < 50 && g < 50 && b < 50) return "Black";
    return "Unknown";
}
\`\`\`

## UV Sensors

**Principle**: Photodiode sensitive to UV wavelengths

**GUVA-S12SD Example**:
- Analog output (0-1V)
- Responds to 240-370nm UV
- Used for UV index measurement

\`\`\`cpp
int raw = analogRead(A0);
float voltage = raw * (5.0 / 1023.0);
float uvIndex = voltage / 0.1;  // Approximate

Serial.print("UV Index: ");
Serial.println(uvIndex);
// 0-2: Low, 3-5: Moderate, 6-7: High, 8-10: Very High, 11+: Extreme
\`\`\`
            `},{id:"motion-sensors",title:"🏃 Motion & Acceleration Sensors",content:`
## PIR (Passive Infrared) Sensors

### Working Principle

**Detects infrared radiation from warm bodies**

**How it works**:
1. Pyroelectric sensor detects IR radiation
2. Fresnel lens focuses IR into two zones
3. Motion causes change between zones
4. Change triggers output

**Not detecting distance or temperature!**
- Detects **change** in IR pattern
- Stationary warm object = no trigger

**Code Example**:
\`\`\`cpp
const int PIR_PIN = 2;

void setup() {
    pinMode(PIR_PIN, INPUT);
    Serial.begin(115200);
    delay(60000);  // 1 minute calibration time
}

void loop() {
    if (digitalRead(PIR_PIN) == HIGH) {
        Serial.println("Motion detected!");
        delay(1000);  // Debounce
    }
}
\`\`\`

**Adjustments**:
- **Sensitivity**: Detection range (2-7m)
- **Time delay**: How long output stays HIGH (5s-5min)

**Limitations**:
- Can't count people
- Affected by temperature changes
- Pets can trigger it
- Needs warm-up time

## Accelerometers (ADXL345, MPU6050)

### Working Principle

**MEMS (Micro-Electro-Mechanical Systems)**

**How it works**:
1. Tiny proof mass suspended by springs
2. Acceleration moves the mass
3. Capacitance changes measured
4. Converted to acceleration value

**3-Axis Measurement**: X, Y, Z

**Units**: g (1g = 9.8 m/s²)

### MPU6050 (Accelerometer + Gyroscope)

\`\`\`cpp
#include <Wire.h>
#include <MPU6050.h>

MPU6050 mpu;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    mpu.initialize();
    
    if (mpu.testConnection()) {
        Serial.println("MPU6050 connected");
    }
}

void loop() {
    int16_t ax, ay, az;
    int16_t gx, gy, gz;
    
    mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
    
    // Convert to g (assuming ±2g range)
    float accelX = ax / 16384.0;
    float accelY = ay / 16384.0;
    float accelZ = az / 16384.0;
    
    Serial.print("Accel X: "); Serial.print(accelX);
    Serial.print(" Y: "); Serial.print(accelY);
    Serial.print(" Z: "); Serial.println(accelZ);
    
    delay(100);
}
\`\`\`

### Tilt Detection

\`\`\`cpp
float pitch = atan2(ay, sqrt(ax*ax + az*az)) * 180 / PI;
float roll = atan2(ax, sqrt(ay*ay + az*az)) * 180 / PI;

Serial.print("Pitch: "); Serial.print(pitch);
Serial.print(" Roll: "); Serial.println(roll);
\`\`\`

### Tap Detection

\`\`\`cpp
float magnitude = sqrt(ax*ax + ay*ay + az*az);
if (magnitude > 20000) {  // Threshold
    Serial.println("Tap detected!");
}
\`\`\`

## Gyroscopes

**Principle**: Measures angular velocity (rotation rate)

**Units**: degrees per second (°/s) or radians per second

**Coriolis Effect**: Vibrating mass deflects when rotated

**MPU6050 Gyro**:
\`\`\`cpp
// Convert to °/s (assuming ±250°/s range)
float gyroX = gx / 131.0;
float gyroY = gy / 131.0;
float gyroZ = gz / 131.0;

Serial.print("Gyro X: "); Serial.print(gyroX);
Serial.print(" Y: "); Serial.print(gyroY);
Serial.print(" Z: "); Serial.println(gyroZ);
\`\`\`

### Complementary Filter (Combining Accel + Gyro)

**Problem**: 
- Accelerometer: Accurate but noisy
- Gyroscope: Smooth but drifts

**Solution**: Combine both!

\`\`\`cpp
float alpha = 0.98;  // Filter coefficient
float pitch = 0, roll = 0;

void loop() {
    // Get sensor data
    int16_t ax, ay, az, gx, gy, gz;
    mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);
    
    // Accelerometer angle
    float accelPitch = atan2(ay, sqrt(ax*ax + az*az)) * 180 / PI;
    float accelRoll = atan2(ax, sqrt(ay*ay + az*az)) * 180 / PI;
    
    // Gyroscope rate (°/s)
    float gyroX = gx / 131.0;
    float gyroY = gy / 131.0;
    
    // Complementary filter
    float dt = 0.01;  // 10ms loop time
    pitch = alpha * (pitch + gyroX * dt) + (1 - alpha) * accelPitch;
    roll = alpha * (roll + gyroY * dt) + (1 - alpha) * accelRoll;
    
    Serial.print("Pitch: "); Serial.print(pitch);
    Serial.print(" Roll: "); Serial.println(roll);
    
    delay(10);
}
\`\`\`

## Magnetometers (Compass)

**Principle**: Measures magnetic field strength

**HMC5883L / QMC5883L**:
- 3-axis magnetometer
- Detects Earth's magnetic field
- Used for compass heading

\`\`\`cpp
#include <Wire.h>
#include <QMC5883LCompass.h>

QMC5883LCompass compass;

void setup() {
    Serial.begin(115200);
    Wire.begin();
    compass.init();
}

void loop() {
    compass.read();
    
    int heading = compass.getAzimuth();
    Serial.print("Heading: ");
    Serial.print(heading);
    Serial.println("°");
    
    delay(250);
}
\`\`\`

**Calibration Required!**
- Hard iron: Permanent magnets nearby
- Soft iron: Ferromagnetic materials

**Calibration Process**:
1. Rotate sensor in figure-8 pattern
2. Record min/max values for each axis
3. Apply offset and scale corrections
            `}]},Tf={id:"board-comparison",title:"Board Comparison Guide",subtitle:"Choosing the perfect MCU for your specific needs",sections:[{id:"arduino-family",title:"🔵 Arduino Family Comparison",content:`
## Arduino Board Comparison

| Board | MCU | Clock | Flash | RAM | Voltage | Price | Best For |
|-------|-----|-------|-------|-----|---------|-------|----------|
| **Uno R3** | ATmega328P | 16MHz | 32KB | 2KB | 5V | $25 | Learning, simple projects |
| **Nano** | ATmega328P | 16MHz | 32KB | 2KB | 5V | $5 | Breadboard projects |
| **Mega** | ATmega2560 | 16MHz | 256KB | 8KB | 5V | $40 | Many pins needed |
| **Pro Mini** | ATmega328P | 8/16MHz | 32KB | 2KB | 3.3/5V | $3 | Tiny, battery projects |
| **Leonardo** | ATmega32u4 | 16MHz | 32KB | 2.5KB | 5V | $20 | USB HID (keyboard/mouse) |
| **Due** | AT91SAM3X8E | 84MHz | 512KB | 96KB | 3.3V | $40 | High performance |

### Arduino Uno R3 - The Standard

**Pros**:
- Most tutorials and libraries
- 5V logic (compatible with most sensors)
- Stable and reliable
- Easy to use

**Cons**:
- Limited memory (2KB RAM!)
- Slow (16MHz)
- No WiFi/Bluetooth
- Large size

**When to use**:
- Learning Arduino
- Simple projects
- Lots of online support needed

**Avoid when**:
- Need WiFi/Bluetooth
- Complex code (runs out of RAM)
- Battery powered (power hungry)

### Arduino Nano - Compact Uno

**Identical to Uno** but:
- Breadboard-friendly
- Mini USB (or USB-C on newer versions)
- Cheaper ($5 vs $25)

**Perfect for**: Permanent installations, breadboard prototypes

### Arduino Mega - More of Everything

**When you need**:
- 54 digital pins (vs 14 on Uno)
- 16 analog inputs (vs 6 on Uno)
- 4 UARTs (vs 1 on Uno)
- 256KB flash (vs 32KB on Uno)

**Use cases**:
- 3D printers (RAMPS shield)
- CNC machines
- Many sensors/actuators
- Complex projects

**Drawback**: Still no WiFi, still 5V only

### Arduino Leonardo - USB Native

**Special feature**: ATmega32u4 has native USB

**Can act as**:
- Keyboard
- Mouse
- Game controller
- MIDI device

\`\`\`cpp
#include <Keyboard.h>

void setup() {
    Keyboard.begin();
}

void loop() {
    if (digitalRead(2) == LOW) {
        Keyboard.print("Hello!");
        delay(1000);
    }
}
\`\`\`

**Use cases**: Custom input devices, automation scripts

### Arduino Due - 32-bit Powerhouse

**Pros**:
- 84MHz (5× faster than Uno)
- 96KB RAM (48× more than Uno)
- 12-bit ADC (vs 10-bit)
- 2× DAC outputs

**Cons**:
- **3.3V ONLY** (can damage with 5V!)
- Fewer libraries
- More expensive

**When to use**: DSP, audio processing, fast calculations
            `},{id:"esp-family",title:"📡 ESP Family (WiFi/Bluetooth)",content:`
## ESP8266 vs ESP32 Comparison

| Feature | ESP8266 | ESP32 |
|---------|---------|-------|
| **CPU** | 80MHz (single core) | 240MHz (dual core) |
| **Flash** | 4MB typical | 4MB typical |
| **RAM** | 80KB | 520KB |
| **WiFi** | 802.11 b/g/n | 802.11 b/g/n |
| **Bluetooth** | ❌ No | ✅ BLE 4.2 |
| **GPIO** | 9-11 usable | 34 pins |
| **ADC** | 1× 10-bit | 18× 12-bit |
| **DAC** | ❌ No | 2× 8-bit |
| **Touch** | ❌ No | 10 pins |
| **Price** | $2-3 | $4-6 |

### ESP8266 (NodeMCU, Wemos D1)

**Pros**:
- Cheapest WiFi solution
- Low power in deep sleep (20μA)
- Mature ecosystem
- Arduino IDE support

**Cons**:
- Limited pins (only ~9 usable)
- No Bluetooth
- Single core (can't multitask well)
- Boot mode pins are tricky

**Best for**:
- Simple WiFi projects
- IoT sensors
- Home automation
- Budget projects

**Example Use Cases**:
- WiFi weather station
- Smart switch
- MQTT sensor node
- Web server (simple)

### ESP32 (DevKit, WROOM, WROVER)

**Pros**:
- Dual core (can run WiFi on one core, code on other)
- Bluetooth + WiFi simultaneously
- More pins, more ADCs
- Touch sensors built-in
- Faster and more RAM

**Cons**:
- Slightly more expensive
- Higher power consumption
- More complex (can be overkill)

**Best for**:
- Complex IoT projects
- BLE applications
- Audio processing
- Camera projects (ESP32-CAM)
- Multitasking needed

**Example Use Cases**:
- BLE beacon
- WiFi + Bluetooth gateway
- Audio streaming
- Image processing
- Web server (complex)

### ESP32 Variants

**ESP32-WROOM**: Standard, most common
**ESP32-WROVER**: Extra 4MB PSRAM (for camera, display)
**ESP32-C3**: RISC-V, single core, cheaper
**ESP32-S2**: No Bluetooth, USB OTG
**ESP32-S3**: Dual core, better AI/ML support

## When to Choose ESP over Arduino

**Choose ESP8266/ESP32 when**:
- Need WiFi or Bluetooth
- Battery powered (deep sleep)
- Need more processing power
- IoT/cloud connectivity

**Choose Arduino when**:
- Learning basics
- 5V sensors (easier compatibility)
- Don't need wireless
- Want maximum stability

## Power Consumption Comparison

| Board | Active | Deep Sleep |
|-------|--------|------------|
| Arduino Uno | 50mA | 0.1mA (with mods) |
| ESP8266 | 80mA | 20μA |
| ESP32 | 160mA (WiFi) | 10μA |
| ESP32 (BLE only) | 100mA | 10μA |

**Battery Life Example** (2500mAh battery):

**Arduino Uno** (always on): 50 hours
**ESP8266** (wake every 10 min for 10s):
- Active: 10s × 6/hour = 1 min/hour
- Sleep: 59 min/hour
- Average: (80mA × 1 + 0.02mA × 59) / 60 = 1.35mA
- **Life: 77 days**

**ESP32** (same pattern):
- Average: (160mA × 1 + 0.01mA × 59) / 60 = 2.68mA
- **Life: 39 days**
            `},{id:"other-boards",title:"🎯 Specialized Boards",content:`
## Raspberry Pi Pico (RP2040)

**Specs**:
- Dual-core ARM Cortex-M0+ @ 133MHz
- 264KB RAM
- 2MB Flash
- 26 GPIO pins
- 3× 12-bit ADC
- **Price**: $4

**Pros**:
- Very fast for the price
- Lots of RAM
- PIO (Programmable I/O) - unique feature
- C/C++ or MicroPython

**Cons**:
- No WiFi/Bluetooth (unless Pico W)
- 3.3V only
- Newer ecosystem

**Raspberry Pi Pico W**: Adds WiFi for $6

**Best for**:
- Fast processing
- Custom protocols (PIO)
- MicroPython projects
- USB device emulation

## STM32 (Blue Pill, Black Pill)

**Specs** (STM32F103):
- ARM Cortex-M3 @ 72MHz
- 20KB RAM
- 64KB Flash
- 3.3V
- **Price**: $2-3

**Pros**:
- Very cheap
- Fast
- Professional-grade MCU
- Low power

**Cons**:
- Harder to program (ST-Link needed)
- Fewer tutorials
- 3.3V only

**Best for**:
- Production projects
- Learning ARM
- Low-cost, high-performance

## Teensy (3.2, 4.0, 4.1)

**Specs** (Teensy 4.0):
- ARM Cortex-M7 @ 600MHz (!!)
- 1MB RAM
- 2MB Flash
- Arduino IDE compatible
- **Price**: $20-30

**Pros**:
- Extremely fast
- Excellent audio library
- USB native
- High-quality hardware

**Cons**:
- Expensive
- 3.3V only
- Overkill for simple projects

**Best for**:
- Audio synthesis
- DSP applications
- High-speed data acquisition
- Professional projects

## Micro:bit

**Specs**:
- ARM Cortex-M4 @ 64MHz
- 128KB RAM
- 512KB Flash
- Built-in: LED matrix, buttons, sensors
- **Price**: $15

**Pros**:
- All-in-one (sensors, display, buttons)
- Great for education
- MakeCode (visual programming)
- Bluetooth

**Cons**:
- Limited GPIO
- Not for production
- Bulky

**Best for**: Education, kids, quick prototypes

## Particle (Photon, Argon, Boron)

**Specs** (Photon):
- ARM Cortex-M3 @ 120MHz
- 128KB RAM
- 1MB Flash
- WiFi built-in
- Cloud integration
- **Price**: $19

**Pros**:
- Cloud-first design
- OTA updates
- Cellular option (Boron)
- Professional ecosystem

**Cons**:
- Requires cloud (can be offline)
- More expensive
- Subscription for cellular

**Best for**: Commercial IoT, fleet management

## Comparison Summary

### For Beginners
1. **Arduino Uno** - Best learning platform
2. **Arduino Nano** - Cheaper, same experience
3. **ESP8266** - If you need WiFi

### For IoT Projects
1. **ESP32** - WiFi + BLE, powerful
2. **ESP8266** - WiFi only, cheaper
3. **Particle** - Commercial/production

### For Speed/Performance
1. **Teensy 4.0** - 600MHz beast
2. **ESP32** - 240MHz, dual core
3. **Raspberry Pi Pico** - 133MHz, lots of RAM

### For Battery Life
1. **ESP32** - 10μA deep sleep
2. **ESP8266** - 20μA deep sleep
3. **STM32** - Very low power

### For Many Pins
1. **Arduino Mega** - 54 digital pins
2. **ESP32** - 34 GPIO
3. **Teensy 4.1** - 55 GPIO

### For USB HID
1. **Arduino Leonardo** - Native USB
2. **Teensy** - Excellent USB
3. **Raspberry Pi Pico** - USB device

## Decision Tree

\`\`\`
Need WiFi/Bluetooth?
├─ Yes → ESP32 (or ESP8266 if WiFi only)
└─ No → Continue

Need many pins (>20)?
├─ Yes → Arduino Mega or ESP32
└─ No → Continue

Need high speed (>100MHz)?
├─ Yes → Teensy 4.0 or ESP32
└─ No → Continue

Learning Arduino?
├─ Yes → Arduino Uno
└─ No → Continue

Budget < $5?
├─ Yes → Arduino Nano or ESP8266
└─ No → Continue

Need USB HID?
├─ Yes → Leonardo or Teensy
└─ No → Arduino Uno or Nano
\`\`\`
            `},{id:"selection-guide",title:"✅ Project-Based Selection",content:`
## Real-World Project Recommendations

### Home Automation Hub
**Best**: ESP32
- WiFi for connectivity
- Bluetooth for local control
- Enough power for web server
- Deep sleep for battery backup

**Alternative**: ESP8266 (if no BLE needed)

### Weather Station
**Best**: ESP8266 + Solar
- WiFi to send data
- Low power (deep sleep)
- Cheap enough to deploy multiple

**Alternative**: ESP32 (if adding more sensors)

### Robot Car
**Best**: Arduino Mega
- Many pins for motors, sensors
- 5V logic (easy motor drivers)
- Stable, no WiFi complexity

**Alternative**: ESP32 (if need remote control)

### Wearable Device
**Best**: Arduino Pro Mini (3.3V, 8MHz)
- Tiny size
- Low power
- Cheap

**Alternative**: ESP32 (if need BLE)

### Data Logger
**Best**: Arduino Uno + SD card
- Stable, reliable
- Easy to use
- No wireless complexity

**Alternative**: ESP32 (if need WiFi upload)

### LED Matrix Display
**Best**: ESP32
- Fast enough for animations
- WiFi for control
- Lots of pins

**Alternative**: Teensy (if very fast refresh needed)

### Audio Synthesizer
**Best**: Teensy 4.0
- Audio library
- Very fast
- DAC output

**Alternative**: ESP32 (basic audio)

### USB Keyboard/Mouse
**Best**: Arduino Leonardo
- Native USB HID
- Cheap
- Easy to program

**Alternative**: Teensy (more advanced features)

### Sensor Network (Multiple Nodes)
**Best**: ESP8266 (each node)
- WiFi mesh
- Cheap to deploy many
- Low power

**Alternative**: ESP32 (if need BLE mesh)

### Industrial Control
**Best**: STM32
- Reliable
- Professional-grade
- Low cost at scale

**Alternative**: Arduino Mega (easier to program)

## Common Mistakes in Board Selection

### Mistake 1: Using Arduino Uno for WiFi
**Problem**: Need external WiFi module (complex)
**Solution**: Use ESP8266/ESP32 directly

### Mistake 2: Using ESP32 for Simple LED Blink
**Problem**: Overkill, wastes power
**Solution**: Arduino Nano or Pro Mini

### Mistake 3: Using 5V Board with 3.3V Sensors
**Problem**: Need level shifters everywhere
**Solution**: Use 3.3V board (ESP32, Due, STM32)

### Mistake 4: Not Considering Power
**Problem**: Battery dies quickly
**Solution**: Calculate power, use deep sleep

### Mistake 5: Choosing Based on Price Alone
**Problem**: Cheap board can't do the job
**Solution**: Match board to requirements

## Upgrade Path

**Beginner**:
1. Start: Arduino Uno
2. Learn: Sensors, actuators, libraries
3. Next: Arduino Nano (same, but cheaper/smaller)

**Intermediate**:
4. Add WiFi: ESP8266
5. Learn: HTTP, MQTT, cloud
6. Next: ESP32 (more power, BLE)

**Advanced**:
7. Complex projects: Teensy or STM32
8. Production: Custom PCB with chosen MCU
9. Professional: Particle or commercial solutions

## Quick Reference Table

| Need | Recommended Board |
|------|-------------------|
| Learning | Arduino Uno |
| WiFi | ESP8266 or ESP32 |
| Bluetooth | ESP32 |
| Many pins | Arduino Mega or ESP32 |
| Battery powered | ESP32 or Pro Mini |
| USB HID | Leonardo or Teensy |
| Speed | Teensy 4.0 or ESP32 |
| Cheap | Arduino Nano or ESP8266 |
| Audio | Teensy |
| Production | STM32 or ESP32 |

## Final Advice

**Don't overthink it!**
- Arduino Uno: Can't go wrong for learning
- ESP32: Best all-rounder for IoT
- Arduino Nano: Cheap and cheerful

**Start simple, upgrade when needed**
- Begin with what you know
- Switch boards when you hit limitations
- Most projects work on multiple boards

**Consider the ecosystem**
- Arduino: Most tutorials
- ESP32: Best for IoT
- Teensy: Best for audio
- STM32: Best for production
            `}]},wf={id:"code-hub",title:"Code Explanation Hub",subtitle:"Breaking down complex firmware patterns into plain English",sections:[{id:"state-machines",title:"🔄 State Machines",content:`
## What is a State Machine?

**Definition**: A system that can be in one of several states and transitions between them based on events.

**Real-world example**: Traffic light
- States: Red, Yellow, Green
- Transitions: Timer expires → next state

## Simple State Machine Pattern

\`\`\`cpp
enum State {
    IDLE,
    RUNNING,
    PAUSED,
    STOPPED
};

State currentState = IDLE;

void loop() {
    switch(currentState) {
        case IDLE:
            // Wait for start button
            if(digitalRead(START_BUTTON) == LOW) {
                currentState = RUNNING;
                Serial.println("Started!");
            }
            break;
            
        case RUNNING:
            // Do work
            doWork();
            if(digitalRead(PAUSE_BUTTON) == LOW) {
                currentState = PAUSED;
            }
            if(digitalRead(STOP_BUTTON) == LOW) {
                currentState = STOPPED;
            }
            break;
            
        case PAUSED:
            // Wait for resume
            if(digitalRead(START_BUTTON) == LOW) {
                currentState = RUNNING;
            }
            break;
            
        case STOPPED:
            // Cleanup and return to idle
            cleanup();
            currentState = IDLE;
            break;
    }
}
\`\`\`

## Why Use State Machines?

**Without state machine** (messy):
\`\`\`cpp
bool isRunning = false;
bool isPaused = false;
bool isStopped = false;

void loop() {
    if(isRunning && !isPaused && !isStopped) {
        // Do work
    }
    // Confusing logic...
}
\`\`\`

**With state machine** (clean):
- Clear states
- Predictable transitions
- Easy to debug
- Easy to add features

## Real Example: LED Blink State Machine

\`\`\`cpp
enum BlinkState {
    LED_OFF,
    LED_ON
};

BlinkState state = LED_OFF;
unsigned long previousMillis = 0;
const long interval = 1000;

void loop() {
    unsigned long currentMillis = millis();
    
    switch(state) {
        case LED_OFF:
            if(currentMillis - previousMillis >= interval) {
                previousMillis = currentMillis;
                digitalWrite(LED_PIN, HIGH);
                state = LED_ON;
            }
            break;
            
        case LED_ON:
            if(currentMillis - previousMillis >= interval) {
                previousMillis = currentMillis;
                digitalWrite(LED_PIN, LOW);
                state = LED_OFF;
            }
            break;
    }
}
\`\`\`

## Complex Example: Washing Machine

\`\`\`cpp
enum WashState {
    IDLE,
    FILLING,
    WASHING,
    DRAINING,
    SPINNING,
    DONE
};

WashState state = IDLE;
unsigned long stateStartTime = 0;

void loop() {
    unsigned long elapsed = millis() - stateStartTime;
    
    switch(state) {
        case IDLE:
            if(startButtonPressed()) {
                state = FILLING;
                stateStartTime = millis();
                openWaterValve();
            }
            break;
            
        case FILLING:
            if(waterLevelFull()) {
                closeWaterValve();
                state = WASHING;
                stateStartTime = millis();
                startMotor(SLOW);
            }
            break;
            
        case WASHING:
            if(elapsed >= 5 * 60 * 1000) {  // 5 minutes
                stopMotor();
                state = DRAINING;
                stateStartTime = millis();
                openDrainValve();
            }
            break;
            
        case DRAINING:
            if(waterLevelEmpty()) {
                closeDrainValve();
                state = SPINNING;
                stateStartTime = millis();
                startMotor(FAST);
            }
            break;
            
        case SPINNING:
            if(elapsed >= 2 * 60 * 1000) {  // 2 minutes
                stopMotor();
                state = DONE;
                playDoneSound();
            }
            break;
            
        case DONE:
            if(doorOpened()) {
                state = IDLE;
            }
            break;
    }
}
\`\`\`
            `},{id:"non-blocking-code",title:"⏱️ Non-Blocking Code Patterns",content:`
## The Problem with delay()

\`\`\`cpp
// ❌ BAD: Blocks everything
void loop() {
    digitalWrite(LED, HIGH);
    delay(1000);  // Can't do ANYTHING for 1 second!
    digitalWrite(LED, LOW);
    delay(1000);
}
\`\`\`

**Problems**:
- Can't read sensors during delay
- Can't check buttons
- Can't respond to events
- Entire program frozen

## Solution: Blink Without Delay

\`\`\`cpp
// ✅ GOOD: Non-blocking
unsigned long previousMillis = 0;
const long interval = 1000;
bool ledState = LOW;

void loop() {
    unsigned long currentMillis = millis();
    
    if (currentMillis - previousMillis >= interval) {
        previousMillis = currentMillis;
        ledState = !ledState;
        digitalWrite(LED, ledState);
    }
    
    // Can do other things here!
    checkButton();
    readSensor();
}
\`\`\`

## Multiple Non-Blocking Timers

\`\`\`cpp
unsigned long led1Previous = 0;
unsigned long led2Previous = 0;
unsigned long sensorPrevious = 0;

const long led1Interval = 1000;   // 1 second
const long led2Interval = 500;    // 0.5 seconds
const long sensorInterval = 2000; // 2 seconds

void loop() {
    unsigned long current = millis();
    
    // LED 1: Blink every 1 second
    if (current - led1Previous >= led1Interval) {
        led1Previous = current;
        digitalWrite(LED1, !digitalRead(LED1));
    }
    
    // LED 2: Blink every 0.5 seconds
    if (current - led2Previous >= led2Interval) {
        led2Previous = current;
        digitalWrite(LED2, !digitalRead(LED2));
    }
    
    // Sensor: Read every 2 seconds
    if (current - sensorPrevious >= sensorInterval) {
        sensorPrevious = current;
        int value = analogRead(A0);
        Serial.println(value);
    }
}
\`\`\`

## Timer Class (Reusable)

\`\`\`cpp
class Timer {
private:
    unsigned long previousMillis;
    unsigned long interval;
    
public:
    Timer(unsigned long ms) : interval(ms), previousMillis(0) {}
    
    bool isReady() {
        unsigned long currentMillis = millis();
        if (currentMillis - previousMillis >= interval) {
            previousMillis = currentMillis;
            return true;
        }
        return false;
    }
    
    void reset() {
        previousMillis = millis();
    }
};

// Usage
Timer led1Timer(1000);
Timer led2Timer(500);
Timer sensorTimer(2000);

void loop() {
    if (led1Timer.isReady()) {
        digitalWrite(LED1, !digitalRead(LED1));
    }
    
    if (led2Timer.isReady()) {
        digitalWrite(LED2, !digitalRead(LED2));
    }
    
    if (sensorTimer.isReady()) {
        int value = analogRead(A0);
        Serial.println(value);
    }
}
\`\`\`

## Timeout Pattern

\`\`\`cpp
unsigned long startTime = millis();
const unsigned long timeout = 5000;  // 5 seconds

while (condition) {
    if (millis() - startTime > timeout) {
        Serial.println("Timeout!");
        break;
    }
    // Do work
}
\`\`\`

## Debouncing Without delay()

\`\`\`cpp
const int buttonPin = 2;
int lastButtonState = HIGH;
int buttonState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;

void loop() {
    int reading = digitalRead(buttonPin);
    
    if (reading != lastButtonState) {
        lastDebounceTime = millis();
    }
    
    if ((millis() - lastDebounceTime) > debounceDelay) {
        if (reading != buttonState) {
            buttonState = reading;
            
            if (buttonState == LOW) {
                Serial.println("Button pressed!");
            }
        }
    }
    
    lastButtonState = reading;
}
\`\`\`
            `},{id:"interrupts",title:"⚡ Interrupts Explained",content:`
## What are Interrupts?

**Definition**: Hardware mechanism to pause main code and run special function immediately

**Analogy**: You're reading a book (main code), phone rings (interrupt), you answer (ISR), then continue reading

## When to Use Interrupts

**Good use cases**:
- Button presses (instant response)
- Rotary encoder
- Frequency counting
- Wake from sleep
- Time-critical events

**Bad use cases**:
- Slow operations (Serial.print)
- Complex calculations
- Anything that takes >few microseconds

## Basic Interrupt Example

\`\`\`cpp
const int buttonPin = 2;  // Must be interrupt pin
volatile int counter = 0;  // MUST be volatile!

void setup() {
    Serial.begin(115200);
    pinMode(buttonPin, INPUT_PULLUP);
    
    // Attach interrupt
    attachInterrupt(digitalPinToInterrupt(buttonPin), buttonISR, FALLING);
}

void buttonISR() {
    // Interrupt Service Routine
    // Keep this FAST!
    counter++;
}

void loop() {
    Serial.println(counter);
    delay(1000);
}
\`\`\`

## Why volatile?

\`\`\`cpp
volatile int counter = 0;  // ✅ Correct
int counter = 0;           // ❌ Wrong!
\`\`\`

**Reason**: Tells compiler variable can change unexpectedly (by interrupt)

Without \`volatile\`:
- Compiler may optimize away variable
- Main code might not see changes from ISR

## Interrupt Modes

\`\`\`cpp
// RISING: LOW → HIGH
attachInterrupt(pin, ISR, RISING);

// FALLING: HIGH → LOW
attachInterrupt(pin, ISR, FALLING);

// CHANGE: Any change
attachInterrupt(pin, ISR, CHANGE);

// LOW: Continuously while LOW (avoid!)
attachInterrupt(pin, ISR, LOW);
\`\`\`

## Rotary Encoder with Interrupts

\`\`\`cpp
const int encoderPinA = 2;
const int encoderPinB = 3;
volatile int encoderPos = 0;

void setup() {
    pinMode(encoderPinA, INPUT_PULLUP);
    pinMode(encoderPinB, INPUT_PULLUP);
    
    attachInterrupt(digitalPinToInterrupt(encoderPinA), encoderISR, CHANGE);
    attachInterrupt(digitalPinToInterrupt(encoderPinB), encoderISR, CHANGE);
}

void encoderISR() {
    int a = digitalRead(encoderPinA);
    int b = digitalRead(encoderPinB);
    
    if (a == b) {
        encoderPos++;
    } else {
        encoderPos--;
    }
}

void loop() {
    Serial.println(encoderPos);
    delay(100);
}
\`\`\`

## ISR Best Practices

**DO**:
- Keep ISR short and fast
- Use \`volatile\` for shared variables
- Set flags, process in loop()
- Disable interrupts if modifying shared data

**DON'T**:
- Use Serial.print() in ISR
- Use delay() in ISR
- Do complex calculations
- Call functions that use interrupts

## Flag Pattern (Recommended)

\`\`\`cpp
volatile bool buttonPressed = false;

void buttonISR() {
    buttonPressed = true;  // Just set flag
}

void loop() {
    if (buttonPressed) {
        buttonPressed = false;
        
        // Do complex processing here
        Serial.println("Button was pressed!");
        doComplexStuff();
    }
}
\`\`\`

## Disabling Interrupts Temporarily

\`\`\`cpp
volatile int counter = 0;

void loop() {
    noInterrupts();  // Disable all interrupts
    int localCounter = counter;  // Safe copy
    interrupts();    // Re-enable interrupts
    
    Serial.println(localCounter);
}
\`\`\`

## Timer Interrupts

\`\`\`cpp
// Arduino Uno: Run function every 1ms
#include <TimerOne.h>

volatile int count = 0;

void setup() {
    Timer1.initialize(1000);  // 1000 microseconds = 1ms
    Timer1.attachInterrupt(timerISR);
}

void timerISR() {
    count++;
}

void loop() {
    // count increments every 1ms automatically
}
\`\`\`

## ESP32 Timer Interrupt

\`\`\`cpp
hw_timer_t *timer = NULL;
volatile int counter = 0;

void IRAM_ATTR onTimer() {
    counter++;
}

void setup() {
    // Timer 0, prescaler 80 (1MHz), count up
    timer = timerBegin(0, 80, true);
    timerAttachInterrupt(timer, &onTimer, true);
    timerAlarmWrite(timer, 1000000, true);  // 1 second
    timerAlarmEnable(timer);
}
\`\`\`
            `},{id:"advanced-patterns",title:"🎯 Advanced Code Patterns",content:`
## Circular Buffer (Ring Buffer)

**Use case**: Store last N sensor readings

\`\`\`cpp
const int BUFFER_SIZE = 10;
int buffer[BUFFER_SIZE];
int writeIndex = 0;

void addReading(int value) {
    buffer[writeIndex] = value;
    writeIndex = (writeIndex + 1) % BUFFER_SIZE;  // Wrap around
}

float getAverage() {
    long sum = 0;
    for (int i = 0; i < BUFFER_SIZE; i++) {
        sum += buffer[i];
    }
    return (float)sum / BUFFER_SIZE;
}

void loop() {
    int reading = analogRead(A0);
    addReading(reading);
    
    float avg = getAverage();
    Serial.println(avg);
    delay(100);
}
\`\`\`

## Moving Average Filter

\`\`\`cpp
class MovingAverage {
private:
    int *buffer;
    int size;
    int index;
    long sum;
    
public:
    MovingAverage(int windowSize) {
        size = windowSize;
        buffer = new int[size];
        index = 0;
        sum = 0;
        for (int i = 0; i < size; i++) {
            buffer[i] = 0;
        }
    }
    
    int add(int value) {
        sum -= buffer[index];
        buffer[index] = value;
        sum += value;
        index = (index + 1) % size;
        return sum / size;
    }
};

MovingAverage filter(10);

void loop() {
    int raw = analogRead(A0);
    int filtered = filter.add(raw);
    Serial.println(filtered);
    delay(10);
}
\`\`\`

## Finite State Machine with Timeouts

\`\`\`cpp
enum State {
    WAITING,
    ACTIVE,
    TIMEOUT,
    ERROR
};

State currentState = WAITING;
unsigned long stateStartTime = 0;
const unsigned long STATE_TIMEOUT = 5000;

void changeState(State newState) {
    currentState = newState;
    stateStartTime = millis();
}

void loop() {
    unsigned long elapsed = millis() - stateStartTime;
    
    // Check for timeout in any state
    if (elapsed > STATE_TIMEOUT && currentState != WAITING) {
        changeState(TIMEOUT);
    }
    
    switch (currentState) {
        case WAITING:
            if (buttonPressed()) {
                changeState(ACTIVE);
            }
            break;
            
        case ACTIVE:
            doWork();
            if (workComplete()) {
                changeState(WAITING);
            }
            break;
            
        case TIMEOUT:
            Serial.println("Operation timed out!");
            changeState(ERROR);
            break;
            
        case ERROR:
            handleError();
            changeState(WAITING);
            break;
    }
}
\`\`\`

## Event Queue

\`\`\`cpp
const int QUEUE_SIZE = 10;

struct Event {
    int type;
    int value;
};

Event eventQueue[QUEUE_SIZE];
int queueHead = 0;
int queueTail = 0;

bool addEvent(int type, int value) {
    int nextTail = (queueTail + 1) % QUEUE_SIZE;
    if (nextTail == queueHead) {
        return false;  // Queue full
    }
    
    eventQueue[queueTail].type = type;
    eventQueue[queueTail].value = value;
    queueTail = nextTail;
    return true;
}

bool getEvent(Event *event) {
    if (queueHead == queueTail) {
        return false;  // Queue empty
    }
    
    *event = eventQueue[queueHead];
    queueHead = (queueHead + 1) % QUEUE_SIZE;
    return true;
}

void loop() {
    // Add events
    if (buttonPressed()) {
        addEvent(EVENT_BUTTON, 1);
    }
    
    // Process events
    Event event;
    if (getEvent(&event)) {
        handleEvent(event);
    }
}
\`\`\`

## Callback Pattern

\`\`\`cpp
typedef void (*CallbackFunction)(int);

class Button {
private:
    int pin;
    CallbackFunction onPress;
    int lastState;
    
public:
    Button(int p, CallbackFunction callback) {
        pin = p;
        onPress = callback;
        pinMode(pin, INPUT_PULLUP);
        lastState = HIGH;
    }
    
    void update() {
        int state = digitalRead(pin);
        if (state == LOW && lastState == HIGH) {
            if (onPress != NULL) {
                onPress(pin);  // Call the callback
            }
        }
        lastState = state;
    }
};

void buttonPressed(int pin) {
    Serial.print("Button on pin ");
    Serial.print(pin);
    Serial.println(" pressed!");
}

Button button1(2, buttonPressed);
Button button2(3, buttonPressed);

void loop() {
    button1.update();
    button2.update();
}
\`\`\`

## Watchdog Timer Pattern

\`\`\`cpp
#include <avr/wdt.h>

void setup() {
    wdt_enable(WDTO_2S);  // 2 second watchdog
    Serial.begin(115200);
}

void loop() {
    wdt_reset();  // "Pet" the watchdog
    
    // Your code here
    doWork();
    
    // If code hangs, watchdog resets board
}
\`\`\`

## Singleton Pattern

\`\`\`cpp
class Logger {
private:
    static Logger* instance;
    Logger() {}  // Private constructor
    
public:
    static Logger* getInstance() {
        if (instance == NULL) {
            instance = new Logger();
        }
        return instance;
    }
    
    void log(String message) {
        Serial.println(message);
    }
};

Logger* Logger::instance = NULL;

void setup() {
    Serial.begin(115200);
    Logger::getInstance()->log("System started");
}
\`\`\`

## Command Pattern

\`\`\`cpp
class Command {
public:
    virtual void execute() = 0;
};

class LEDOnCommand : public Command {
public:
    void execute() {
        digitalWrite(LED_PIN, HIGH);
    }
};

class LEDOffCommand : public Command {
public:
    void execute() {
        digitalWrite(LED_PIN, LOW);
    }
};

Command* commands[10];
int commandCount = 0;

void addCommand(Command* cmd) {
    commands[commandCount++] = cmd;
}

void executeAll() {
    for (int i = 0; i < commandCount; i++) {
        commands[i]->execute();
    }
}
\`\`\`

## Best Practices Summary

1. **Use state machines** for complex logic
2. **Avoid delay()** - use millis() instead
3. **Keep ISRs short** - set flags, process in loop
4. **Use volatile** for interrupt-shared variables
5. **Modularize code** - classes and functions
6. **Comment complex logic** - future you will thank you
7. **Test incrementally** - don't write everything at once
8. **Use version control** - Git is your friend
            `}]},If={id:"project-selection",title:"Project Selection Guide",subtitle:"Which projects actually impress employers",sections:[{id:"what-employers-want",title:"🎯 What Employers Actually Look For",content:`
## The Reality Check

**Most student projects don't impress employers. Here's why:**

### Common Mistakes

❌ **"I made an LED blink"** - Too basic
❌ **"I followed a tutorial exactly"** - No creativity
❌ **"It works on my desk"** - Not practical
❌ **"I used every sensor I had"** - No focus
❌ **"It's almost done"** - Never finished

### What Actually Impresses

✅ **Solves a real problem** - Not just "because I can"
✅ **Complete and polished** - Finished, documented, working
✅ **Shows technical depth** - Complex enough to demonstrate skill
✅ **Has practical application** - Someone would actually use it
✅ **Well documented** - Code, circuit, explanation

## The Project Selection Framework

### 1. Problem-First Approach

**Bad**: "I want to use ESP32 and sensors"
**Good**: "Elderly people forget to take medicine → reminder system"

**Questions to ask**:
- Who has this problem?
- How do they currently solve it?
- Why is my solution better?
- Would someone pay for this?

### 2. Complexity Sweet Spot

**Too Simple**: LED blink, basic sensor reading
**Too Complex**: Full autonomous drone, AI robot
**Just Right**: Smart home device, data logger, automation system

**Rule of thumb**: Should take 2-4 weeks of focused work

### 3. Demonstrability

**Can you show it working in 2 minutes?**

Good examples:
- Video demonstration
- Live demo
- Before/after comparison
- Data visualization

Bad examples:
- "It works but battery is dead"
- "You need to install 10 libraries"
- "It only works in my room"

## Project Categories That Impress

### Tier 1: Highly Impressive

**IoT Solutions**:
- Smart agriculture system
- Industrial monitoring
- Energy management
- Predictive maintenance

**Why**: Shows cloud integration, data analysis, real-world application

**Automation**:
- Home automation hub
- Warehouse automation
- Quality control system

**Why**: Shows system thinking, multiple components

**Data Acquisition**:
- Environmental monitoring
- Vibration analysis
- Power quality analyzer

**Why**: Shows signal processing, data handling

### Tier 2: Good Projects

**Wearables**:
- Health monitoring
- Fitness tracker
- Safety device

**Robotics**:
- Line follower (with advanced features)
- Obstacle avoidance
- Pick and place

**Communication**:
- LoRa network
- Mesh network
- Protocol converter

### Tier 3: Avoid (Too Common)

- Basic LED patterns
- Simple temperature display
- Bluetooth car (unless exceptional)
- Basic home automation (light on/off)

## The "Wow Factor" Checklist

Your project should have at least 3 of these:

☐ **Wireless communication** (WiFi, BLE, LoRa)
☐ **Data logging/analysis** (SD card, cloud, graphs)
☐ **Mobile app integration** (Blynk, custom app)
☐ **Machine learning** (TinyML, edge AI)
☐ **Power optimization** (battery life > 1 month)
☐ **Professional enclosure** (3D printed, PCB)
☐ **Safety critical** (medical, industrial)
☐ **Scalable design** (can deploy multiple units)

## Red Flags to Avoid

### 1. Tutorial Clone

**Problem**: Exact copy of online tutorial
**Fix**: Add unique features, different sensors, custom functionality

### 2. Scope Creep

**Problem**: "It will have AI, ML, blockchain, IoT, cloud..."
**Fix**: Focus on ONE core feature done excellently

### 3. No Documentation

**Problem**: "The code explains itself"
**Fix**: README, comments, circuit diagram, demo video

### 4. Unreliable

**Problem**: "It works sometimes"
**Fix**: Test thoroughly, handle edge cases, error handling

### 5. No Real Use Case

**Problem**: "It's cool but useless"
**Fix**: Identify actual users, get feedback

## Industry-Specific Recommendations

### For Software Companies

**Focus on**:
- Clean code architecture
- API integration
- Data processing
- Cloud connectivity

**Example**: IoT sensor network with REST API and dashboard

### For Hardware Companies

**Focus on**:
- PCB design
- Power efficiency
- Sensor integration
- Signal processing

**Example**: Custom sensor board with low-power design

### For Startups

**Focus on**:
- Innovation
- Market need
- Scalability
- Cost optimization

**Example**: Affordable solution to expensive problem

### For Research Labs

**Focus on**:
- Novel approach
- Data analysis
- Publications
- Reproducibility

**Example**: New sensor fusion algorithm with benchmarks
            `},{id:"portfolio-building",title:"📁 Building Your Portfolio",content:`
## GitHub Portfolio Essentials

### Repository Structure

\`\`\`
project-name/
├── README.md           ← Most important file!
├── docs/
│   ├── circuit.png
│   ├── demo.gif
│   └── setup.md
├── src/
│   └── main.ino
├── hardware/
│   ├── schematic.pdf
│   └── pcb/
├── LICENSE
└── .gitignore
\`\`\`

### README Template

\`\`\`markdown
# Project Name

Brief one-line description

![Demo](docs/demo.gif)

## Problem Statement

What problem does this solve?

## Solution

How does your project solve it?

## Features

- ✅ Feature 1
- ✅ Feature 2
- ✅ Feature 3

## Hardware

- ESP32
- DHT22 sensor
- OLED display

## Circuit Diagram

![Circuit](docs/circuit.png)

## Setup

1. Install libraries: \`DHT\`, \`Adafruit_SSD1306\`
2. Upload code
3. Connect hardware

## Usage

How to use the project

## Demo

[Video Link](https://youtube.com/...)

## Future Improvements

- [ ] Add feature X
- [ ] Improve Y

## License

MIT
\`\`\`

### Commit Message Best Practices

**Bad**:
- "fixed bug"
- "update"
- "changes"

**Good**:
- "fix: sensor timeout issue"
- "feat: add WiFi reconnection"
- "docs: update circuit diagram"

## Documentation That Impresses

### 1. Video Demonstration

**Must have**:
- Problem introduction (30s)
- Solution overview (30s)
- Live demo (60s)
- Technical explanation (60s)

**Tools**: OBS Studio, phone camera, screen recording

### 2. Circuit Diagrams

**Tools**:
- Fritzing (beginner-friendly)
- KiCad (professional)
- EasyEDA (online)

**Include**:
- Clear component labels
- Wire colors
- Power ratings
- Pin connections

### 3. Code Documentation

\`\`\`cpp
/**
 * @brief Reads temperature and humidity from DHT22
 * @return true if reading successful, false otherwise
 * 
 * This function implements error handling for sensor timeouts
 * and validates data using checksum verification.
 */
bool readSensor() {
    // Implementation
}
\`\`\`

### 4. Project Report (For Academic)

**Structure**:
1. Abstract (200 words)
2. Introduction (problem, motivation)
3. Literature Review (existing solutions)
4. Methodology (your approach)
5. Implementation (hardware + software)
6. Results (data, graphs, analysis)
7. Conclusion (achievements, limitations)
8. References

## Presentation Skills

### The 2-Minute Pitch

**Structure**:
1. **Hook** (10s): "Did you know X problem costs $Y annually?"
2. **Problem** (20s): Explain the pain point
3. **Solution** (30s): Your project overview
4. **Demo** (60s): Show it working!
5. **Impact** (10s): Benefits, future potential

### Common Interview Questions

**"Tell me about your project"**

**Bad**: "I made a temperature sensor with Arduino..."
**Good**: "I built an industrial temperature monitoring system that alerts via SMS when thresholds are exceeded. It's been running in a local factory for 3 months..."

**"What challenges did you face?"**

**Bad**: "It was hard to code"
**Good**: "The ESP32 kept resetting due to power spikes. I solved it by adding a 1000μF capacitor and implementing brownout detection..."

**"How would you improve it?"**

**Bad**: "Add more features"
**Good**: "I'd implement OTA updates for remote firmware deployment and add edge ML for predictive failure detection..."

## Making Projects Stand Out

### 1. Add Professional Touch

**Before**: Breadboard with jumper wires
**After**: Custom PCB in 3D-printed enclosure

**Before**: Serial monitor output
**After**: Web dashboard with graphs

**Before**: Hardcoded values
**After**: Configuration via mobile app

### 2. Show Impact

**Metrics that matter**:
- "Reduced energy consumption by 30%"
- "Deployed in 5 locations"
- "Saved $500 in manual monitoring"
- "99.9% uptime over 6 months"

### 3. Open Source Contribution

**Bonus points**:
- Contribute to Arduino libraries
- Fix bugs in popular projects
- Create reusable components
- Write tutorials

## Project Showcase Platforms

### GitHub
- ⭐ Star your own projects
- 📝 Detailed README
- 🏷️ Use relevant tags
- 🔗 Link to demo video

### Hackster.io
- Step-by-step tutorials
- Large IoT community
- Contests and challenges
- Company visibility

### YouTube
- Demo videos
- Tutorial series
- Build logs
- Technical explanations

### LinkedIn
- Project posts
- Technical articles
- Skill endorsements
- Recruiter visibility

## Timeline for Portfolio Building

### 3 Months Plan

**Month 1**: Foundation Project
- Choose problem
- Build prototype
- Document thoroughly

**Month 2**: Advanced Project
- Add complexity
- Professional finish
- Create demo video

**Month 3**: Polish & Promote
- Clean up GitHub
- Write blog posts
- Share on platforms
- Apply for jobs

### Quality > Quantity

**Better to have**:
- 3 excellent projects
- Complete documentation
- Working demos
- Real-world testing

**Than**:
- 10 half-finished projects
- No documentation
- "It worked once"
- Never deployed
            `},{id:"project-execution",title:"🚀 Project Execution Strategy",content:`
## The Agile Approach for Solo Projects

### Week 1: Planning & Prototyping

**Day 1-2: Research**
- Study existing solutions
- Identify gaps
- Define requirements
- Sketch architecture

**Day 3-4: Proof of Concept**
- Test critical components
- Verify sensor accuracy
- Check communication
- Validate power budget

**Day 5-7: Basic Prototype**
- Breadboard circuit
- Basic code
- Core functionality
- First demo

### Week 2: Development

**Day 8-10: Feature Implementation**
- Add all planned features
- Error handling
- Edge cases
- Testing

**Day 11-12: Integration**
- Combine all components
- System testing
- Performance optimization
- Bug fixes

**Day 13-14: Documentation**
- Code comments
- Circuit diagram
- README file
- Demo video

### Week 3: Polish & Deploy

**Day 15-17: Professional Finish**
- PCB design (optional)
- Enclosure
- UI/UX improvements
- Final testing

**Day 18-19: Real-World Testing**
- Deploy in actual environment
- Collect data
- User feedback
- Refinements

**Day 20-21: Presentation**
- Create slides
- Practice demo
- Prepare for questions
- Upload to portfolio

## Risk Management

### Common Risks & Mitigation

**Risk**: Component doesn't work
**Mitigation**: Order spares, test early, have backup plan

**Risk**: Code too complex
**Mitigation**: Start simple, add features incrementally

**Risk**: Power issues
**Mitigation**: Calculate power budget, test with battery

**Risk**: Deadline pressure
**Mitigation**: MVP first, features later

**Risk**: Scope creep
**Mitigation**: Fixed feature list, "nice to have" separate

## Testing Strategy

### Unit Testing

\`\`\`cpp
// Test individual functions
void testSensorReading() {
    float temp = readTemperature();
    if (temp > -40 && temp < 125) {
        Serial.println("✓ Sensor test passed");
    } else {
        Serial.println("✗ Sensor test failed");
    }
}
\`\`\`

### Integration Testing

- Test all components together
- Verify communication between modules
- Check error handling
- Stress test (run for 24 hours)

### User Acceptance Testing

- Give to someone unfamiliar
- Watch them use it
- Note confusion points
- Improve based on feedback

## Common Pitfalls & Solutions

### Pitfall 1: Perfectionism

**Problem**: "It's not ready yet" (after 6 months)
**Solution**: Ship MVP, iterate based on feedback

### Pitfall 2: Feature Creep

**Problem**: Keep adding "just one more thing"
**Solution**: Version 1.0 → Ship → Version 2.0

### Pitfall 3: No Backup

**Problem**: Lost all code when laptop crashed
**Solution**: Git commit daily, push to GitHub

### Pitfall 4: Hardcoded Values

**Problem**: Need to recompile for every change
**Solution**: Configuration file, web interface, or app

### Pitfall 5: No Error Handling

**Problem**: Crashes on unexpected input
**Solution**: Validate inputs, try-catch, timeouts

## Collaboration & Teamwork

### If Working in Team

**Roles**:
- Hardware lead
- Software lead
- Documentation lead
- Testing lead

**Tools**:
- GitHub for code
- Trello for tasks
- Discord for communication
- Google Drive for documents

**Best Practices**:
- Daily standups (even 5 min)
- Code reviews
- Shared documentation
- Regular demos

## Budget Management

### Typical Project Budget

| Item | Cost | Priority |
|------|------|----------|
| Microcontroller | $5-10 | High |
| Sensors | $10-20 | High |
| Display | $5-15 | Medium |
| PCB | $5-20 | Low |
| Enclosure | $10-30 | Low |
| Misc (wires, resistors) | $10 | High |
| **Total** | **$45-105** | |

### Cost Optimization

**Expensive**:
- Custom PCB for prototype
- Premium sensors
- Branded components

**Smart**:
- Breadboard first
- Generic sensors (test quality)
- AliExpress for non-critical parts
- Reuse components from old projects

## Success Metrics

### Technical Metrics

- ✅ Uptime > 95%
- ✅ Response time < 1s
- ✅ Battery life meets target
- ✅ Accuracy within ±5%
- ✅ No crashes in 24h test

### Professional Metrics

- ✅ Complete documentation
- ✅ Demo video < 3 min
- ✅ GitHub stars > 10
- ✅ Positive feedback from 3+ people
- ✅ Mentioned in resume/portfolio

## Post-Project Actions

### 1. Write a Blog Post

**Title ideas**:
- "How I Built [Project] in 3 Weeks"
- "5 Lessons from Building [Project]"
- "[Project]: From Idea to Deployment"

**Platforms**: Medium, Dev.to, Hackster.io

### 2. Create Tutorial

- Step-by-step guide
- Troubleshooting section
- Common mistakes
- Help others learn

### 3. Enter Competitions

- Hackster.io contests
- Hackaday Prize
- University competitions
- Company challenges

### 4. Iterate

**Version 2.0 ideas**:
- User feedback implementation
- Performance improvements
- New features
- Better enclosure

## The Ultimate Project Checklist

Before calling it "done":

☐ **Functionality**: All features work reliably
☐ **Documentation**: README, circuit, code comments
☐ **Demo**: Video showing it working
☐ **Testing**: 24-hour stress test passed
☐ **Code**: Clean, commented, on GitHub
☐ **Hardware**: Neat wiring or PCB
☐ **Enclosure**: Protected from environment
☐ **Power**: Battery life measured
☐ **Error handling**: Doesn't crash on bad input
☐ **User feedback**: At least 3 people tested it
☐ **Portfolio**: Added to resume/LinkedIn/GitHub
☐ **Presentation**: Can explain in 2 minutes

**If you can check all boxes → You have a portfolio-worthy project!**
            `}]},vf={id:"mini-project-ideas",title:"Mini Project Ideas",subtitle:"Quick portfolio builders for resumes",sections:[{id:"beginner-projects",title:"🌱 Beginner Level (1-2 Days)",content:`
## 1. Smart Plant Watering System

**Components**: Soil moisture sensor, relay, water pump, Arduino
**Features**:
- Auto-water when soil is dry
- Manual override button
- LED status indicator

**Learning**: Analog sensors, relay control, thresholds

---

## 2. Room Occupancy Counter

**Components**: 2× IR sensors, Arduino, 7-segment display
**Features**:
- Count people entering/leaving
- Display current count
- Reset button

**Learning**: Interrupt handling, state logic, display control

---

## 3. Smart Dustbin

**Components**: Ultrasonic sensor, servo, Arduino
**Features**:
- Auto-open lid when hand detected
- Close after 5 seconds
- Battery powered

**Learning**: Distance sensing, servo control, timers

---

## 4. Temperature-Controlled Fan

**Components**: DHT11, DC fan, transistor, Arduino
**Features**:
- Auto fan speed based on temperature
- LCD display for temp
- Adjustable threshold

**Learning**: PWM, temperature sensing, PID basics

---

## 5. Light-Following Robot

**Components**: 2× LDR, 2× motors, L293D, Arduino
**Features**:
- Follows brightest light source
- Obstacle detection (optional)
- Speed control

**Learning**: Analog comparison, motor control, robotics basics
            `},{id:"intermediate-projects",title:"⚡ Intermediate Level (3-5 Days)",content:`
## 6. WiFi Weather Station

**Components**: ESP8266, DHT22, BMP180, OLED
**Features**:
- Temperature, humidity, pressure
- Web dashboard
- Data logging to cloud
- Historical graphs

**Learning**: WiFi, HTTP, APIs, data visualization

---

## 7. RFID Attendance System

**Components**: RFID reader, ESP32, SD card, RTC
**Features**:
- Scan card to mark attendance
- Store in SD card with timestamp
- Web interface to view records
- Export to CSV

**Learning**: RFID, file systems, real-time clock, web server

---

## 8. Bluetooth-Controlled Home Automation

**Components**: ESP32, 4-channel relay, mobile app
**Features**:
- Control 4 appliances via Bluetooth
- Voice commands (Google Assistant)
- Scheduling
- Power consumption monitoring

**Learning**: BLE, relay control, mobile app integration

---

## 9. Air Quality Monitor

**Components**: ESP32, MQ-135, DHT22, OLED
**Features**:
- Measure CO2, temperature, humidity
- Alert when air quality is poor
- Send data to cloud
- Mobile notifications

**Learning**: Gas sensors, calibration, cloud integration, alerts

---

## 10. Smart Door Lock

**Components**: ESP32, solenoid lock, keypad, RFID
**Features**:
- Unlock with PIN or RFID card
- Temporary access codes
- Log all access attempts
- Remote unlock via app

**Learning**: Security, authentication, actuators, logging
            `},{id:"advanced-projects",title:"🚀 Advanced Level (1-2 Weeks)",content:`
## 11. Energy Monitoring System

**Components**: ESP32, ACS712 current sensor, ZMPT101B voltage sensor
**Features**:
- Real-time power consumption
- Cost calculation
- Historical data with graphs
- Anomaly detection
- Mobile app dashboard

**Learning**: AC measurement, power calculations, data analytics

---

## 12. Gesture-Controlled Wheelchair

**Components**: Arduino Mega, MPU6050, motor drivers, joystick
**Features**:
- Control with hand gestures
- Obstacle avoidance
- Emergency stop
- Speed control
- Battery monitoring

**Learning**: IMU, sensor fusion, safety systems, motor control

---

## 13. Smart Parking System

**Components**: ESP32, IR sensors, servo, OLED
**Features**:
- Detect available slots
- Display on screen
- Auto barrier control
- Web dashboard for monitoring
- Booking system (optional)

**Learning**: Multi-sensor systems, web development, databases

---

## 14. Voice-Controlled Robot

**Components**: ESP32, motors, microphone module, speaker
**Features**:
- Voice commands for movement
- Object detection with camera
- Autonomous navigation
- Live video streaming

**Learning**: Speech recognition, computer vision, AI integration

---

## 15. Industrial Vibration Monitor

**Components**: ESP32, ADXL345 accelerometer, SD card
**Features**:
- Detect abnormal vibrations
- FFT analysis for fault detection
- Alert via SMS/email
- Predictive maintenance

**Learning**: Signal processing, FFT, machine learning basics
            `},{id:"iot-cloud-projects",title:"☁️ IoT & Cloud Projects",content:`
## 16. Smart Agriculture System

**Stack**: ESP32 + Blynk/ThingSpeak
**Sensors**: Soil moisture, DHT22, light sensor
**Features**:
- Remote monitoring via app
- Auto irrigation
- Weather forecast integration
- Data analytics

---

## 17. Fleet Tracking System

**Stack**: ESP32 + GPS + Firebase
**Features**:
- Real-time vehicle location
- Route history
- Geofencing alerts
- Speed monitoring
- Web dashboard

---

## 18. Smart Inventory Management

**Stack**: ESP32 + RFID + MySQL
**Features**:
- Track items with RFID tags
- Low stock alerts
- Web interface for management
- Reports and analytics

---

## 19. Patient Monitoring System

**Stack**: ESP32 + Heart rate sensor + Cloud
**Features**:
- Monitor heart rate, SpO2, temperature
- Alert on abnormal values
- Doctor dashboard
- Historical data

---

## 20. Smart Street Lighting

**Stack**: ESP32 + LDR + LoRa
**Features**:
- Auto on/off based on ambient light
- Dim when no motion detected
- Centralized control
- Energy consumption tracking

## Quick Project Ideas (< 1 Day)

21. **Clap Switch** - Turn light on/off with claps
22. **Laser Security System** - Alarm when laser beam broken
23. **Water Level Indicator** - 5 LEDs showing tank level
24. **Automatic Night Light** - LDR + LED
25. **Digital Dice** - Button press → random number on 7-segment
26. **Heartbeat Monitor** - Pulse sensor + LED
27. **Line Following Robot** - IR sensors + motors
28. **Obstacle Avoiding Car** - Ultrasonic + motors
29. **Fire Alarm** - Flame sensor + buzzer
30. **Intruder Alert** - PIR sensor + SMS

## Project Selection Tips

**For Resume**:
- Choose 2-3 projects from different categories
- At least one IoT/cloud project
- One hardware-focused project
- Document everything!

**For Learning**:
- Start with beginner
- Move to intermediate
- Attempt advanced only after mastering basics

**For Competitions**:
- Focus on innovation
- Solve real problems
- Professional finish
- Great presentation
            `}]},kf={id:"fyp-ideas",title:"Final Year Project Ideas",subtitle:"Complex, high-impact projects for graduation",sections:[{id:"iot-systems",title:"🌐 IoT & Smart Systems",content:`
## 1. Smart City Waste Management

**Problem**: Inefficient garbage collection, overflowing bins
**Solution**: IoT sensors in bins, optimized collection routes
**Tech Stack**: ESP32, ultrasonic sensors, GPS, cloud platform
**Complexity**: High
**Impact**: Environmental, cost savings

**Key Features**:
- Fill level monitoring
- Route optimization algorithm
- Real-time dashboard
- Predictive analytics
- Mobile app for workers

---

## 2. Industrial Predictive Maintenance

**Problem**: Unexpected machine failures, costly downtime
**Solution**: Vibration and temperature monitoring with ML
**Tech Stack**: ESP32, ADXL345, MLX90614, TensorFlow Lite
**Complexity**: Very High
**Impact**: Industrial, cost reduction

**Key Features**:
- Multi-sensor data fusion
- Anomaly detection
- Failure prediction
- Maintenance scheduling
- Historical analysis

---

## 3. Smart Agriculture with Drone Integration

**Problem**: Manual crop monitoring is time-consuming
**Solution**: Ground sensors + drone for aerial monitoring
**Tech Stack**: ESP32, multispectral camera, drone, AI
**Complexity**: Very High
**Impact**: Agriculture, food security

**Key Features**:
- Soil moisture mapping
- Crop health analysis
- Automated irrigation
- Pest detection
- Yield prediction

---

## 4. Healthcare Patient Monitoring System

**Problem**: Limited ICU beds, need remote monitoring
**Solution**: Wearable device with cloud dashboard
**Tech Stack**: ESP32, MAX30102, AD8232, Firebase
**Complexity**: High
**Impact**: Healthcare, life-saving

**Key Features**:
- Heart rate, SpO2, ECG
- Real-time alerts
- Doctor dashboard
- Historical trends
- Emergency protocols

---

## 5. Smart Grid Energy Management

**Problem**: Peak load management, energy wastage
**Solution**: Smart meter with load balancing
**Tech Stack**: ESP32, ACS712, ZMPT101B, MQTT
**Complexity**: High
**Impact**: Energy sector, sustainability

**Key Features**:
- Real-time consumption
- Load forecasting
- Demand response
- Renewable integration
- Cost optimization
            `},{id:"robotics-automation",title:"🤖 Robotics & Automation",content:`
## 6. Autonomous Warehouse Robot

**Problem**: Manual inventory management is slow
**Solution**: AGV with SLAM navigation
**Tech Stack**: Raspberry Pi, LIDAR, ROS, computer vision
**Complexity**: Very High
**Impact**: Logistics, efficiency

**Key Features**:
- SLAM mapping
- Path planning
- Obstacle avoidance
- QR code scanning
- Fleet management

---

## 7. Robotic Arm for Sorting

**Problem**: Manual sorting is labor-intensive
**Solution**: Vision-based robotic sorting system
**Tech Stack**: Arduino Mega, servos, OpenCV, Raspberry Pi
**Complexity**: High
**Impact**: Manufacturing, automation

**Key Features**:
- Object detection
- Color/shape recognition
- Pick and place
- Conveyor integration
- Quality control

---

## 8. Swarm Robotics for Search & Rescue

**Problem**: Single robot limited in disaster scenarios
**Solution**: Coordinated multi-robot system
**Tech Stack**: ESP32, LoRa, GPS, sensors
**Complexity**: Very High
**Impact**: Disaster management, life-saving

**Key Features**:
- Swarm coordination
- Area coverage
- Victim detection
- Communication mesh
- Autonomous navigation

---

## 9. Automated Guided Vehicle (AGV)

**Problem**: Material handling in factories
**Solution**: Line-following AGV with load management
**Tech Stack**: Arduino Mega, IR sensors, encoders, RFID
**Complexity**: Medium-High
**Impact**: Manufacturing, productivity

**Key Features**:
- Line following
- Station detection
- Load sensing
- Traffic management
- Battery monitoring

---

## 10. Drone-Based Delivery System

**Problem**: Last-mile delivery challenges
**Solution**: Autonomous drone with GPS navigation
**Tech Stack**: Flight controller, GPS, camera, Raspberry Pi
**Complexity**: Very High
**Impact**: Logistics, accessibility

**Key Features**:
- Waypoint navigation
- Obstacle detection
- Package release mechanism
- Return to home
- Weather adaptation
            `},{id:"ai-ml-projects",title:"🧠 AI/ML & Computer Vision",content:`
## 11. Smart Traffic Management

**Problem**: Traffic congestion, inefficient signals
**Solution**: AI-based adaptive traffic control
**Tech Stack**: Raspberry Pi, camera, YOLO, edge computing
**Complexity**: Very High
**Impact**: Urban planning, time savings

**Key Features**:
- Vehicle counting
- Density estimation
- Dynamic signal timing
- Emergency vehicle priority
- Analytics dashboard

---

## 12. Facial Recognition Attendance

**Problem**: Proxy attendance, time wastage
**Solution**: Face recognition with anti-spoofing
**Tech Stack**: Raspberry Pi, camera, OpenCV, deep learning
**Complexity**: High
**Impact**: Education, security

**Key Features**:
- Face detection & recognition
- Liveness detection
- Database management
- Reports generation
- Mobile notifications

---

## 13. Gesture-Controlled Devices

**Problem**: Accessibility for disabled individuals
**Solution**: Hand gesture recognition system
**Tech Stack**: ESP32-CAM, MediaPipe, TensorFlow Lite
**Complexity**: High
**Impact**: Accessibility, inclusion

**Key Features**:
- Real-time gesture recognition
- Custom gesture training
- Multi-device control
- Voice feedback
- Low latency

---

## 14. Smart Surveillance with Anomaly Detection

**Problem**: 24/7 monitoring is resource-intensive
**Solution**: AI-powered intelligent surveillance
**Tech Stack**: Raspberry Pi, camera, YOLO, alert system
**Complexity**: Very High
**Impact**: Security, safety

**Key Features**:
- Person/vehicle detection
- Unusual activity alerts
- Face recognition
- Crowd analysis
- Cloud storage

---

## 15. Plant Disease Detection

**Problem**: Crop diseases reduce yield
**Solution**: Mobile app with image recognition
**Tech Stack**: Smartphone, TensorFlow, cloud API
**Complexity**: High
**Impact**: Agriculture, food security

**Key Features**:
- Disease classification
- Treatment recommendations
- Offline capability
- Farmer dashboard
- Expert consultation
            `},{id:"selection-criteria",title:"✅ FYP Selection Criteria",content:`
## Evaluation Framework

### Academic Requirements

**Must Have**:
- Novel contribution (not just implementation)
- Literature review (20+ papers)
- Methodology clearly defined
- Results with data/graphs
- Comparison with existing solutions

**Good to Have**:
- Publication potential
- Patent possibility
- Industry collaboration
- Real-world deployment

### Technical Complexity

**Minimum Requirements**:
- Multiple subsystems
- Hardware + Software integration
- Data processing/analysis
- Communication protocols
- User interface

**Advanced Elements**:
- Machine learning
- Real-time processing
- Distributed systems
- Edge computing
- Security implementation

### Impact Assessment

**Questions to Ask**:
1. Who benefits from this?
2. What problem does it solve?
3. How much better than existing solutions?
4. Can it be commercialized?
5. Is it scalable?

### Timeline Planning

**Semester 1** (4 months):
- Literature review
- Requirement analysis
- System design
- Component procurement
- Proof of concept

**Semester 2** (4 months):
- Implementation
- Testing & validation
- Data collection
- Analysis
- Documentation
- Final presentation

## Red Flags to Avoid

❌ **Too Ambitious**: "AI-powered autonomous flying car"
❌ **Too Simple**: "Temperature display with Arduino"
❌ **No Innovation**: Exact copy of existing product
❌ **Unclear Scope**: "Smart city" (too broad)
❌ **No Feasibility**: Requires $10,000 budget

## Green Flags to Look For

✅ **Clear Problem**: Well-defined pain point
✅ **Measurable Impact**: Quantifiable improvements
✅ **Feasible**: Can complete in 8 months
✅ **Novel Approach**: Unique solution or improvement
✅ **Practical**: Real-world application

## Budget Considerations

**Typical FYP Budget**: $100-500

**Cost Breakdown**:
- Microcontrollers: $20-50
- Sensors: $30-100
- Actuators: $20-80
- PCB: $20-50
- Enclosure: $20-50
- Misc: $20-50

**Cost Optimization**:
- Use university lab equipment
- Borrow expensive tools
- 3D print instead of buying
- Open-source software
- Sponsor from companies

## Presentation Tips

### Thesis Defense

**Structure** (20 min):
1. Introduction (2 min)
2. Literature Review (3 min)
3. Methodology (5 min)
4. Implementation (5 min)
5. Results (3 min)
6. Conclusion (2 min)

**Demo** (5-10 min):
- Live demonstration
- Backup video
- Explain technical details
- Show results/data

### Common Questions

**"What is novel in your work?"**
→ Highlight unique approach, algorithm, or application

**"What were the challenges?"**
→ Technical problems and how you solved them

**"How does it compare to existing solutions?"**
→ Show comparison table with metrics

**"What are the limitations?"**
→ Be honest, suggest future improvements

**"Can this be commercialized?"**
→ Discuss market potential, cost analysis

## Success Stories

**Example 1**: Smart Irrigation
- Deployed in 5 farms
- 40% water savings
- Published in conference
- Won university competition

**Example 2**: Fall Detection for Elderly
- Tested with 20 participants
- 95% accuracy
- Collaboration with hospital
- Patent filed

**Example 3**: Traffic Monitoring
- Installed at 3 intersections
- Reduced congestion by 25%
- City council interest
- Startup potential

## Final Checklist

Before submission:

☐ Complete documentation (100+ pages)
☐ Working prototype
☐ Test results with data
☐ Comparison with existing work
☐ Future scope defined
☐ Code on GitHub
☐ Demo video
☐ Presentation slides
☐ Poster for exhibition
☐ Acknowledgments & references
            `}]},Rf={id:"interview-prep",title:"Interview Preparation",subtitle:"Top technical questions asked in IoT companies",sections:[{id:"technical-questions",title:"💻 Technical Questions",content:`
## Arduino & Microcontrollers

**Q1: What is the difference between digitalWrite() and analogWrite()?**

**Answer**: 
- \`digitalWrite()\` sets pin to HIGH (5V) or LOW (0V) - digital output
- \`analogWrite()\` uses PWM to simulate analog output (0-255) - only on PWM pins

**Follow-up**: "Which pins support PWM on Arduino Uno?"
→ Pins 3, 5, 6, 9, 10, 11

---

**Q2: Explain the difference between delay() and millis()**

**Answer**:
- \`delay()\` blocks entire program execution
- \`millis()\` returns time since program started, allows non-blocking code

**Example**:
\`\`\`cpp
// Non-blocking blink
unsigned long previousMillis = 0;
const long interval = 1000;

void loop() {
    if (millis() - previousMillis >= interval) {
        previousMillis = millis();
        digitalWrite(LED, !digitalRead(LED));
    }
    // Can do other things here
}
\`\`\`

---

**Q3: What is the purpose of pull-up/pull-down resistors?**

**Answer**:
- Prevents floating inputs (undefined state)
- Pull-up: Connects to VCC via resistor (default HIGH)
- Pull-down: Connects to GND via resistor (default LOW)

**Arduino has internal pull-ups**: \`pinMode(pin, INPUT_PULLUP)\`

---

**Q4: How do interrupts work? When would you use them?**

**Answer**:
- Hardware mechanism to pause main code and execute ISR
- Use for time-critical events: button presses, encoder, frequency counting
- Keep ISR short and fast
- Use \`volatile\` for variables shared with ISR

---

**Q5: What is PWM and how does it work?**

**Answer**:
- Pulse Width Modulation - rapidly switching between HIGH and LOW
- Duty cycle determines average voltage
- 50% duty cycle = 2.5V average on 5V system
- Used for LED dimming, motor speed control

## Communication Protocols

**Q6: Explain I2C protocol**

**Answer**:
- 2-wire protocol (SDA, SCL)
- Master-slave architecture
- Multiple devices on same bus (up to 127)
- Each device has unique 7-bit address
- Requires pull-up resistors (4.7kΩ)

**Common I2C addresses**:
- OLED: 0x3C
- MPU6050: 0x68
- BMP280: 0x76

---

**Q7: SPI vs I2C - when to use which?**

**Answer**:

| Feature | SPI | I2C |
|---------|-----|-----|
| Speed | Faster (10+ MHz) | Slower (400 kHz) |
| Wires | 4+ (MOSI, MISO, SCK, CS) | 2 (SDA, SCL) |
| Devices | Limited by CS pins | 127 devices |
| Use case | High-speed (displays, SD) | Multiple sensors |

---

**Q8: What is UART? How is it different from I2C/SPI?**

**Answer**:
- Universal Asynchronous Receiver-Transmitter
- Point-to-point (one-to-one)
- 2 wires: TX, RX (crossover connection)
- Asynchronous (no clock signal)
- Both devices must use same baud rate
- Used for: GPS, Bluetooth modules, serial debugging

## ESP32 & WiFi

**Q9: ESP32 vs ESP8266 - key differences?**

**Answer**:

| Feature | ESP8266 | ESP32 |
|---------|---------|-------|
| CPU | 80MHz single | 240MHz dual-core |
| RAM | 80KB | 520KB |
| Bluetooth | No | Yes (BLE) |
| GPIO | ~9 usable | 34 pins |
| ADC | 1× 10-bit | 18× 12-bit |

---

**Q10: How do you reduce power consumption in ESP32?**

**Answer**:
1. **Deep sleep**: \`esp_deep_sleep_start()\` → 10μA
2. **Lower CPU frequency**: \`setCpuFrequencyMhz(80)\`
3. **Disable WiFi when not needed**: \`WiFi.mode(WIFI_OFF)\`
4. **Use light sleep** for shorter intervals
5. **Optimize wake-up sources**: Timer, GPIO, touch

**Example**:
\`\`\`cpp
esp_sleep_enable_timer_wakeup(10 * 60 * 1000000); // 10 min
esp_deep_sleep_start();
\`\`\`

---

**Q11: Explain MQTT protocol**

**Answer**:
- Lightweight pub/sub messaging protocol
- Broker-based (mosquitto, HiveMQ)
- Topics for organizing messages
- QoS levels: 0 (at most once), 1 (at least once), 2 (exactly once)
- Used in IoT for device-to-cloud communication

**Example**:
\`\`\`cpp
client.publish("home/temperature", "25.5");
client.subscribe("home/commands");
\`\`\`
            `},{id:"coding-challenges",title:"⌨️ Coding Challenges",content:`
## Challenge 1: Debounce a Button

**Problem**: Write code to debounce a button press

\`\`\`cpp
const int BUTTON_PIN = 2;
int lastState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;

void loop() {
    int reading = digitalRead(BUTTON_PIN);
    
    if (reading != lastState) {
        lastDebounceTime = millis();
    }
    
    if ((millis() - lastDebounceTime) > debounceDelay) {
        if (reading == LOW) {
            Serial.println("Button pressed!");
            while(digitalRead(BUTTON_PIN) == LOW); // Wait for release
        }
    }
    
    lastState = reading;
}
\`\`\`

---

## Challenge 2: Moving Average Filter

**Problem**: Implement a moving average filter for sensor data

\`\`\`cpp
const int WINDOW_SIZE = 10;
int readings[WINDOW_SIZE];
int index = 0;
long sum = 0;

int addReading(int value) {
    sum -= readings[index];
    readings[index] = value;
    sum += value;
    index = (index + 1) % WINDOW_SIZE;
    return sum / WINDOW_SIZE;
}

void loop() {
    int raw = analogRead(A0);
    int filtered = addReading(raw);
    Serial.println(filtered);
    delay(10);
}
\`\`\`

---

## Challenge 3: State Machine

**Problem**: Implement a traffic light state machine

\`\`\`cpp
enum State { RED, YELLOW, GREEN };
State currentState = RED;
unsigned long stateStartTime = 0;

void loop() {
    unsigned long elapsed = millis() - stateStartTime;
    
    switch(currentState) {
        case RED:
            digitalWrite(RED_LED, HIGH);
            if (elapsed >= 5000) {
                digitalWrite(RED_LED, LOW);
                currentState = GREEN;
                stateStartTime = millis();
            }
            break;
            
        case GREEN:
            digitalWrite(GREEN_LED, HIGH);
            if (elapsed >= 5000) {
                digitalWrite(GREEN_LED, LOW);
                currentState = YELLOW;
                stateStartTime = millis();
            }
            break;
            
        case YELLOW:
            digitalWrite(YELLOW_LED, HIGH);
            if (elapsed >= 2000) {
                digitalWrite(YELLOW_LED, LOW);
                currentState = RED;
                stateStartTime = millis();
            }
            break;
    }
}
\`\`\`

---

## Challenge 4: Parse Serial Data

**Problem**: Parse comma-separated values from serial

\`\`\`cpp
void loop() {
    if (Serial.available() > 0) {
        String data = Serial.readStringUntil('\\n');
        
        int comma1 = data.indexOf(',');
        int comma2 = data.indexOf(',', comma1 + 1);
        
        String cmd = data.substring(0, comma1);
        int value1 = data.substring(comma1 + 1, comma2).toInt();
        int value2 = data.substring(comma2 + 1).toInt();
        
        Serial.print("Command: "); Serial.println(cmd);
        Serial.print("Value1: "); Serial.println(value1);
        Serial.print("Value2: "); Serial.println(value2);
    }
}
\`\`\`

---

## Challenge 5: Watchdog Timer

**Problem**: Implement a software watchdog

\`\`\`cpp
unsigned long lastPet = 0;
const unsigned long WATCHDOG_TIMEOUT = 5000;

void petWatchdog() {
    lastPet = millis();
}

void checkWatchdog() {
    if (millis() - lastPet > WATCHDOG_TIMEOUT) {
        Serial.println("Watchdog timeout! Resetting...");
        // Reset or take action
        ESP.restart();
    }
}

void loop() {
    doWork();
    petWatchdog();
    checkWatchdog();
}
\`\`\`
            `},{id:"behavioral-questions",title:"🗣️ Behavioral Questions",content:`
## Project-Based Questions

**Q: Tell me about your most challenging project**

**Structure** (STAR method):
- **Situation**: Describe the project and context
- **Task**: What was your role/goal?
- **Action**: What did you do?
- **Result**: What was the outcome?

**Example Answer**:
"I built an industrial vibration monitoring system for predictive maintenance. The challenge was achieving real-time FFT analysis on ESP32 with limited RAM. I optimized the algorithm by using fixed-point arithmetic and circular buffers, reducing memory usage by 60%. The system has been running in a factory for 6 months with 99% uptime."

---

**Q: Describe a time you debugged a difficult problem**

**Good Answer**:
"My ESP32 kept resetting randomly. I used systematic debugging:
1. Added serial logging to identify reset point
2. Measured power supply with oscilloscope
3. Found voltage dips during WiFi transmission
4. Added 1000μF capacitor and implemented brownout detection
5. Problem solved - no resets in 30-day test"

---

**Q: How do you stay updated with new technologies?**

**Good Answer**:
"I follow Arduino blog, Hackaday, and ESP32 forums. I experiment with new sensors and modules on weekends. Recently learned about TinyML and implemented a gesture recognition system on ESP32. I also contribute to open-source Arduino libraries."

---

**Q: Tell me about a project that failed**

**Good Answer**:
"I attempted to build a solar-powered weather station but underestimated power consumption. ESP32 drained battery in 2 days instead of planned 30 days. I learned to:
1. Calculate power budget before building
2. Measure actual consumption, not rely on datasheets
3. Implement deep sleep properly
Rebuilt it successfully with 45-day battery life."

## Technical Problem-Solving

**Q: How would you design a smart parking system?**

**Approach**:
1. **Clarify requirements**: How many slots? Indoor/outdoor? Budget?
2. **Propose architecture**: Sensors (IR/ultrasonic) → ESP32 → Cloud → App
3. **Discuss trade-offs**: Cost vs accuracy, power vs features
4. **Address challenges**: Weatherproofing, communication range, power
5. **Suggest improvements**: ML for prediction, mobile payments

---

**Q: Your IoT device keeps disconnecting from WiFi. How do you debug?**

**Systematic Approach**:
1. Check signal strength (RSSI)
2. Verify router settings (DHCP, MAC filtering)
3. Test with different networks
4. Add reconnection logic with exponential backoff
5. Implement watchdog timer
6. Log disconnect events for pattern analysis

---

**Q: How would you secure an IoT device?**

**Answer**:
1. **Communication**: Use HTTPS/TLS, not HTTP
2. **Authentication**: API keys, OAuth tokens
3. **OTA Updates**: Signed firmware, version checking
4. **Data**: Encrypt sensitive data
5. **Physical**: Disable debug ports in production
6. **Network**: Firewall rules, VPN for critical devices

## Salary & Career

**Q: What are your salary expectations?**

**Research first**:
- Glassdoor, PayScale for your location
- Entry-level IoT: $40k-60k (varies by location)
- 2-3 years experience: $60k-90k

**Answer**:
"Based on my research and skills in ESP32, cloud integration, and machine learning, I'm looking for $X-Y range. However, I'm flexible and more interested in learning opportunities."

---

**Q: Where do you see yourself in 5 years?**

**Good Answer**:
"I want to become an expert in IoT system architecture, leading projects from concept to deployment. I'm particularly interested in edge AI and want to contribute to making IoT devices more intelligent and efficient. I see myself as a senior IoT engineer or technical lead."

## Questions to Ask Interviewer

**Technical**:
- What IoT platforms/technologies does the team use?
- What's the typical project lifecycle?
- How do you handle firmware updates in production?

**Growth**:
- What learning opportunities are available?
- Do you support conference attendance or certifications?
- What's the career progression path?

**Culture**:
- How does the team collaborate?
- What's the work-life balance like?
- What's the most exciting project the team is working on?
            `},{id:"preparation-strategy",title:"📚 Preparation Strategy",content:`
## 30-Day Interview Prep Plan

### Week 1: Fundamentals Review

**Day 1-2**: Arduino basics
- Digital/analog I/O
- PWM, interrupts
- Serial communication

**Day 3-4**: Communication protocols
- I2C, SPI, UART
- Write sample code for each

**Day 5-7**: ESP32/ESP8266
- WiFi basics
- MQTT, HTTP
- Power management

### Week 2: Advanced Topics

**Day 8-10**: Sensors & Actuators
- How sensors work
- Calibration techniques
- Motor control

**Day 11-12**: Data Structures
- Arrays, linked lists
- Queues, stacks
- State machines

**Day 13-14**: Debugging & Testing
- Multimeter usage
- Logic analyzer
- Common issues

### Week 3: Project Review

**Day 15-17**: Document your projects
- Update GitHub READMEs
- Create demo videos
- Prepare explanations

**Day 18-19**: Practice explaining
- Record yourself
- 2-minute project pitch
- Technical deep-dive

**Day 20-21**: Mock interviews
- Practice with friend
- Record and review
- Improve answers

### Week 4: Final Prep

**Day 22-24**: Coding practice
- Implement common patterns
- Solve challenges
- Time yourself

**Day 25-26**: Company research
- Study their products
- Understand tech stack
- Prepare questions

**Day 27-28**: Behavioral prep
- STAR method practice
- Prepare stories
- Rehearse answers

**Day 29-30**: Final review
- Review notes
- Relax and rest
- Prepare materials

## Resources

### Online Platforms
- **LeetCode**: Coding challenges
- **HackerRank**: IoT-specific problems
- **Coursera**: IoT courses
- **YouTube**: Technical tutorials

### Books
- "Making Embedded Systems" by Elecia White
- "Designing Embedded Systems" by John Catsoulis
- "The Art of Electronics" by Horowitz & Hill

### Practice Projects
Build these before interviews:
1. Temperature monitoring system
2. MQTT-based home automation
3. Sensor data logger
4. BLE-controlled device

## Interview Day Checklist

**Materials**:
☐ Resume (3 copies)
☐ Project portfolio (printed)
☐ Laptop with projects
☐ Demo videos (offline backup)
☐ Notebook and pen

**Technical**:
☐ Charge laptop fully
☐ Test demo projects
☐ Backup code to USB
☐ Screenshots of working projects

**Personal**:
☐ Professional attire
☐ Arrive 15 minutes early
☐ Bring water
☐ Turn off phone
☐ Positive attitude!

## Common Mistakes to Avoid

❌ **Not preparing projects**: Can't explain your own work
❌ **Memorizing answers**: Sounds robotic
❌ **Badmouthing previous employer**: Unprofessional
❌ **Not asking questions**: Shows lack of interest
❌ **Lying about skills**: Will be caught in technical round
❌ **Being late**: First impression matters
❌ **Not following up**: Send thank-you email

## Success Metrics

**You're ready when**:
✅ Can explain all your projects in detail
✅ Comfortable with coding challenges
✅ Know communication protocols well
✅ Can debug common issues
✅ Researched the company
✅ Prepared thoughtful questions
✅ Practiced mock interviews
✅ Confident but humble

## Final Tips

1. **Be honest**: Don't know? Say "I don't know, but I'd approach it by..."
2. **Think aloud**: Show your problem-solving process
3. **Ask clarifying questions**: Shows thoughtfulness
4. **Stay calm**: Take a breath before answering
5. **Be enthusiastic**: Show genuine interest in IoT
6. **Follow up**: Send thank-you email within 24 hours

**Remember**: Interviews are conversations, not interrogations. Be yourself, show your passion for IoT, and demonstrate your willingness to learn!
            `}]},Cf={troubleshooting:ff,"mini-projects":bf,protocols:hf,"common-mistakes":yf,"pin-selection":Sf,"power-guide":Ef,"sensor-principles":Af,"board-comparison":Tf,"code-hub":wf,"project-selection":If,"mini-project-ideas":vf,"fyp-ideas":kf,"interview-prep":Rf};function Of(){const[e,t]=en.useState(Ls[0]),[n,r]=en.useState(null),a=i=>{const o=Cf[i];o&&r(o)};return n?x.jsx(mf,{content:n,onBack:()=>r(null)}):x.jsx("section",{className:"section-mesh bg-dots",style:{padding:"4rem 1rem"},children:x.jsxs("div",{className:"container",children:[x.jsxs("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[x.jsxs(At.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},style:{display:"inline-flex",alignItems:"center",gap:"0.6rem",background:"rgba(var(--primary-rgb), 0.1)",padding:"0.6rem 1.75rem",borderRadius:"2rem",marginBottom:"2rem",border:"1px solid var(--border)",color:"var(--primary)",fontWeight:"700"},children:[x.jsx(Xu,{size:18}),x.jsx("span",{style:{fontSize:"0.8rem",letterSpacing:"0.1em",textTransform:"uppercase"},children:"Learning Ecosystem"})]}),x.jsxs("h1",{style:{fontSize:"3.5rem",fontWeight:"900",marginBottom:"1.5rem",letterSpacing:"-0.03em"},children:["IoT ",x.jsx("span",{className:"text-gradient",children:"Mastery Hub"})]}),x.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.2rem",maxWidth:"700px",margin:"0 auto",lineHeight:"1.6"},children:"Accelerate your technical growth with our curated phase-by-phase learning resources."})]}),x.jsx("div",{style:{display:"flex",gap:"1rem",marginBottom:"4rem",justifyContent:"center",flexWrap:"wrap"},children:Ls.map(i=>x.jsxs("button",{onClick:()=>t(i),style:{padding:"1rem 2rem",borderRadius:"1.25rem",fontSize:"0.95rem",fontWeight:"800",cursor:"pointer",transition:"all 0.3s ease",background:e.id===i.id?i.color:"var(--surface)",color:e.id===i.id?"white":"var(--text-muted)",border:"1px solid var(--border)",boxShadow:e.id===i.id?`0 10px 20px ${i.color}40`:"none",whiteSpace:"nowrap"},children:["Phase ",i.id]},i.id))}),x.jsx(Mu,{mode:"wait",children:x.jsxs(At.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},transition:{duration:.3},style:{maxWidth:"1000px",margin:"0 auto"},children:[x.jsxs("div",{style:{marginBottom:"3rem",textAlign:"center"},children:[x.jsx("h2",{style:{fontSize:"2.5rem",fontWeight:"900",color:e.color},children:e.title}),x.jsx("p",{style:{color:"var(--text-muted)",fontSize:"1.1rem"},children:e.subtitle})]}),x.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:e.items.map((i,o)=>x.jsxs(At.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:o*.1},whileHover:{y:-8},className:"glass-plus",onClick:()=>a(i.id),style:{padding:"2.5rem",borderRadius:"2rem",background:"rgba(var(--primary-rgb), 0.02)",border:"1px solid var(--border)",position:"relative",overflow:"hidden",cursor:"pointer"},children:[x.jsx("div",{style:{position:"absolute",top:0,right:0,padding:"1rem",fontSize:"0.7rem",fontWeight:900,color:e.color,textTransform:"uppercase",letterSpacing:"0.05em"},children:i.level}),x.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"16px",background:`${e.color}15`,color:e.color,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.5rem",border:`1px solid ${e.color}30`},children:i.icon&&x.jsx(i.icon,{size:28})}),x.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800,marginBottom:"0.75rem"},children:i.title}),x.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.95rem",lineHeight:1.6,marginBottom:"2rem"},children:i.desc}),x.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:e.color,fontWeight:800,fontSize:"0.85rem"},children:["OPEN GUIDE ",x.jsx(Zu,{size:16})]})]},i.id))})]},e.id)})]})})}export{Of as default};
