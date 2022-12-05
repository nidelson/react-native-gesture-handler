"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[6071],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,f=u["".concat(c,".").concat(p)]||u[p]||h[p]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85595:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(83117),o=(n(67294),n(3905));const i={id:"how-does-it-work",title:"How does it work?",sidebar_label:"How does it work?"},a=void 0,s={unversionedId:"under-the-hood/how-does-it-work",id:"version-2.6.0/under-the-hood/how-does-it-work",title:"How does it work?",description:"Units",source:"@site/versioned_docs/version-2.6.0/under-the-hood/how-does-it-work.md",sourceDirName:"under-the-hood",slug:"/under-the-hood/how-does-it-work",permalink:"/react-native-gesture-handler/docs/under-the-hood/how-does-it-work",draft:!1,tags:[],version:"2.6.0",frontMatter:{id:"how-does-it-work",title:"How does it work?",sidebar_label:"How does it work?"},sidebar:"docs",previous:{title:"Testing",permalink:"/react-native-gesture-handler/docs/api/test-api"}},c={},l=[{value:"Units",id:"units",level:3},{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2}],d={toc:l};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"units"},"Units"),(0,o.kt)("p",null,'All handler component properties and event attributes that represent onscreen dimensions are expressed in screen density independent units we refer to as "points".\nThese are the units commonly used in React Native ecosystem (e.g. in the ',(0,o.kt)("a",{parentName:"p",href:"http://facebook.github.io/react-native/docs/flexbox.html"},"layout system"),").\nThey do not map directly to physical pixels but instead to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/content/documentation/2DDrawing/Conceptual/DrawingPrintingiOS/GraphicsDrawingOverview/GraphicsDrawingOverview.html#//apple_ref/doc/uid/TP40010156-CH14-SW7"},"iOS's points")," and to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/resources/more-resources#Dimension"},"dp")," units on Android."),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("p",null,"All gestures are implemented using ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uigesturerecognizer?language=objc"},"UIGestureRecognizers"),", some of them have been slightly modified to allow for more customization and to conform to the state flow of RNGH. When you assign a gesture configuration to the ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureDetector"),", it creates all the required recognizers and assigns them to the child view of the detector. From this point most of the heavy lifting is handled by the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit?language=objc"},"UIKit")," (with our help to correctly implement interactions between gestures)."),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("p",null,"Unfortunately, Android doesn't provide an easy way of handling gestures hence most of them were implemented from scratch, including a system for managing how the gestures should interact with each other. Here's a quick overview of how it works:\nWhen you wrap a component with ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," it allows for the RNGH to intercept all touch events on that component and process them, deciding whether they should be handled by one of the gesture handlers or passed to the underlying view. Gesture handlers are created when you assign a gesture configuration to the ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureDetector"),", it initializes all of the necessary handlers natively. Every ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView")," also has a specific handler to decide whether to pass the touch events or to consume them. It can never activate, only begin, end or be cancelled. When this handler is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"UNDETERMINED")," state it means that there is no touch in progress, however when the touch starts it transitions to the ",(0,o.kt)("inlineCode",{parentName:"p"},"BEGAN")," state. As long as it stays in that state, no touch event is consumed, but as soon as it gets cancelled (meaning that some handler has activated) all incoming touch events get consumed, preventing underlying view from receiving them."),(0,o.kt)("p",null,"When a pointer touches the screen the view tree is traversed in order to extract all handlers attached to the views below the finger (including the one attached to the ",(0,o.kt)("inlineCode",{parentName:"p"},"GestureHandlerRootView"),") and all extracted handlers transition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"BEGAN")," state, signalling that the gesture may heve began. The touch events continue to be delivered to all extracted handlers until one of them recognizes the gesture and tries to activate. At this point the orchestrator checks whether this gesture should wait for any other of the extracted gestures to fail. If it does, it's put to the waiting list, if it doesn't, it gets activated and all other gestures (that are not simultaneous with it) get cancelled. When a gesture handlers transitions to a finished state (the gesture recognized by it stops, it fails or gets cancelled) the orchestrator check the waiting handlers. Every one of them that waited for the gesture that just failed tries to activate again (and again the orchestrator checks if it should wait for any of the extracted gestures...)."))}h.isMDXComponent=!0}}]);