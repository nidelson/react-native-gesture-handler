"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[7318],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),h=a,m=f["".concat(p,".").concat(h)]||f[h]||l[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64251:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(83117),a=(r(67294),r(3905));const o={id:"resources",title:"Learning Resources"},i=void 0,s={unversionedId:"resources",id:"version-2.1.1/resources",title:"Learning Resources",description:"Apps",source:"@site/versioned_docs/version-2.1.1/resources.md",sourceDirName:".",slug:"/resources",permalink:"/react-native-gesture-handler/docs/2.1.1/resources",draft:!1,tags:[],version:"2.1.1",frontMatter:{id:"resources",title:"Learning Resources"},sidebar:"version-2.1.1/docs",previous:{title:"Troubleshooting",permalink:"/react-native-gesture-handler/docs/2.1.1/troubleshooting"},next:{title:"Community",permalink:"/react-native-gesture-handler/docs/2.1.1/community"}},p={},c=[{value:"Apps",id:"apps",level:2},{value:"Talks and workshops",id:"talks-and-workshops",level:2}],u={toc:c};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"apps"},"Apps"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example"},"Gesture Handler Example App"),' \u2013 official gesture handler "showcase" app.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"},"Gesture Handler Example on Expo")," \u2013 the official app you can install and play with using ",(0,a.kt)("a",{parentName:"p",href:"https://expo.io"},"Expo"),"."),(0,a.kt)("h2",{id:"talks-and-workshops"},"Talks and workshops"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kdq4z2708VM"},"Declarative future of gestures and animations in React Native")," by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/kzzzf"},"Krzysztof Magiera")," - talk that explains motivation behind creating gesture handler library. It also presents ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"react-native-reanimated")," and how and when it can be used with gesture handler."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/JSIoE_ReeDk?t=41m49s"},"React Native workshop with Expo team @ReactEurope 2018")," by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/notbrent"},"Brent Vetne")," \u2013\xa0great workshop explaining gesture handler in details and presenting a few exercises that will help get you started."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=-Izgons3mec"},"Living in an async world of React Native")," by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/kzzzf"},"Krzysztof Magiera")," \u2013\xa0talk which highlights some issue with the React Native's touch system Gesture Handler aims to address. Also the motivation for building this library is explained."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=V8maYc4R2G0"},"React Native Touch & Gesture")," by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/kzzzf"},"Krzysztof Magiera")," - talk explaining JS responder system limitations and points out some of the core features of Gesture Handler."))}l.isMDXComponent=!0}}]);