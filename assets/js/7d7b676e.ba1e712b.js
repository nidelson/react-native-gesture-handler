"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[5540],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,h=p["".concat(o,".").concat(d)]||p[d]||g[d]||s;return r?n.createElement(h,u(u({ref:t},c),{},{components:r})):n.createElement(h,u({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,u=new Array(s);u[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var l=2;l<s;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1819:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l}});var n=r(83117),a=(r(67294),r(3905));const s={id:"gesture",title:"Gesture",sidebar_label:"Gesture"},u=void 0,i={unversionedId:"api/gestures/gesture",id:"version-2.4.0/api/gestures/gesture",title:"Gesture",description:"Gesture is the object that allows you to create and compose gestures.",source:"@site/versioned_docs/version-2.4.0/api/gestures/gesture.md",sourceDirName:"api/gestures",slug:"/api/gestures/gesture",permalink:"/react-native-gesture-handler/docs/2.4.0/api/gestures/gesture",draft:!1,tags:[],version:"2.4.0",frontMatter:{id:"gesture",title:"Gesture",sidebar_label:"Gesture"},sidebar:"version-2.4.0/docs",previous:{title:"Gesture detector",permalink:"/react-native-gesture-handler/docs/2.4.0/api/gestures/gesture-detector"},next:{title:"Pan gesture",permalink:"/react-native-gesture-handler/docs/2.4.0/api/gestures/pan-gesture"}},o={},l=[{value:"Gesture.Tap()",id:"gesturetap",level:3},{value:"Gesture.Pan()",id:"gesturepan",level:3},{value:"Gesture.LongPress()",id:"gesturelongpress",level:3},{value:"Gesture.Fling()",id:"gesturefling",level:3},{value:"Gesture.Pinch()",id:"gesturepinch",level:3},{value:"Gesture.Rotation()",id:"gesturerotation",level:3},{value:"Gesture.ForceTouch()",id:"gestureforcetouch",level:3},{value:"Gesture.Manual()",id:"gesturemanual",level:3},{value:"Gesture.Native()",id:"gesturenative",level:3},{value:"Gesture.Race(gesture1, gesture2, gesture3, ...): ComposedGesture",id:"gestureracegesture1-gesture2-gesture3--composedgesture",level:3},{value:"Gesture.Simultaneous(gesture1, gesture2, gesture3, ...): ComposedGesture",id:"gesturesimultaneousgesture1-gesture2-gesture3--composedgesture",level:3},{value:"Gesture.Exclusive(gesture1, gesture2, gesture3, ...): ComposedGesture",id:"gestureexclusivegesture1-gesture2-gesture3--composedgesture",level:3}],c={toc:l};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Gesture")," is the object that allows you to create and compose gestures."),(0,a.kt)("h3",{id:"gesturetap"},"Gesture.Tap()"),(0,a.kt)("p",null,"Creates a new instance of ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/tap-gesture"},(0,a.kt)("inlineCode",{parentName:"a"},"TapGesture"))," with its default config and no callbacks."),(0,a.kt)("h3",{id:"gesturepan"},"Gesture.Pan()"),(0,a.kt)("p",null,"Creates a new instance of ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/pan-gesture"},(0,a.kt)("inlineCode",{parentName:"a"},"PanGesture"))," with its default config and no callbacks."),(0,a.kt)("h3",{id:"gesturelongpress"},"Gesture.LongPress()"),(0,a.kt)("p",null,"Creates a new instance of ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/long-press-gesture"},(0,a.kt)("inlineCode",{parentName:"a"},"LongPressGesture"))," with its default config and no callbacks."),(0,a.kt)("h3",{id:"gesturefling"},"Gesture.Fling()"),(0,a.kt)("p",null,"Creates a new instance of ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/fling-gesture"},(0,a.kt)("inlineCode",{parentName:"a"},"FlingGesture"))," with its default config and no callbacks."),(0,a.kt)("h3",{id:"gesturepinch"},"Gesture.Pinch()"),(0,a.kt)("p",null,"Creates a new instance of ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/pinch-gesture"},(0,a.kt)("inlineCode",{parentName:"a"},"PinchGesture"))," with its default config and no callbacks."),(0,a.kt)("h3",{id:"gesturerotation"},"Gesture.Rotation()"),(0,a.kt)("p",null,"Creates a new instance of ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/rotation-gesture"},(0,a.kt)("inlineCode",{parentName:"a"},"RotationGesture"))," with its default config and no callbacks."),(0,a.kt)("h3",{id:"gestureforcetouch"},"Gesture.ForceTouch()"),(0,a.kt)("p",null,"Creates a new instance of ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/force-touch-gesture"},(0,a.kt)("inlineCode",{parentName:"a"},"ForceTouchGesture"))," with its default config and no callbacks."),(0,a.kt)("h3",{id:"gesturemanual"},"Gesture.Manual()"),(0,a.kt)("p",null,"Creates a new instance of ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/manual-gesture"},(0,a.kt)("inlineCode",{parentName:"a"},"ManualGesture"))," with its default config and no callbacks."),(0,a.kt)("h3",{id:"gesturenative"},"Gesture.Native()"),(0,a.kt)("p",null,"Creates a new instance of ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/2.4.0/api/gestures/native-gesture"},(0,a.kt)("inlineCode",{parentName:"a"},"NativeGesture"))," with its default config and no callbacks."),(0,a.kt)("h3",{id:"gestureracegesture1-gesture2-gesture3--composedgesture"},"Gesture.Race(gesture1, gesture2, gesture3, ...): ComposedGesture"),(0,a.kt)("p",null,"Creates a gesture composed of those provided as arguments. Only one of those can become active and there are no restrictions to the activation of the gesture. The first one to activate will cancel all the others."),(0,a.kt)("h3",{id:"gesturesimultaneousgesture1-gesture2-gesture3--composedgesture"},"Gesture.Simultaneous(gesture1, gesture2, gesture3, ...): ComposedGesture"),(0,a.kt)("p",null,"Creates a gesture composed of those provided as arguments. All of them can become active without cancelling the others."),(0,a.kt)("h3",{id:"gestureexclusivegesture1-gesture2-gesture3--composedgesture"},"Gesture.Exclusive(gesture1, gesture2, gesture3, ...): ComposedGesture"),(0,a.kt)("p",null,"Creates a gesture composed of those provided as arguments. Only one of them can become active, but the first one has a higher priority than the second one, the second one has a higher priority than the third one, and so on. When all gestures are in the ",(0,a.kt)("inlineCode",{parentName:"p"},"BEGAN")," state and the activation criteria for the second one is met, instead of activating it will wait until the first one fails (and only then it will activate) or until the first one activates (and then the second one will get cancelled). It is useful when you want to compose gestures with similar activation criteria (e.g. single and double tap at the same component, without Exclusive the single tap would activate every time user taps thus cancelling the double tap)."))}g.isMDXComponent=!0}}]);