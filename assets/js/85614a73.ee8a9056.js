"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[9387],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),v=a,h=d["".concat(s,".").concat(v)]||d[v]||u[v]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98550:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(83117),a=(r(67294),r(3905));const i={id:"nativeview-gh",title:"NativeViewGestureHandler",sidebar_label:"NativeView"},o=void 0,l={unversionedId:"api/gesture-handlers/nativeview-gh",id:"version-1.10.3/api/gesture-handlers/nativeview-gh",title:"NativeViewGestureHandler",description:"A gesture handler that allows other touch handling components to participate in",source:"@site/versioned_docs/version-1.10.3/api/gesture-handlers/nativeview-gh.md",sourceDirName:"api/gesture-handlers",slug:"/api/gesture-handlers/nativeview-gh",permalink:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/nativeview-gh",draft:!1,tags:[],version:"1.10.3",frontMatter:{id:"nativeview-gh",title:"NativeViewGestureHandler",sidebar_label:"NativeView"},sidebar:"version-1.10.3/docs",previous:{title:"Force touch",permalink:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/force-gh"},next:{title:"createNativeWrapper()",permalink:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/create-native-wrapper"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>shouldActivateOnStart</code> (<strong>Android only</strong>)",id:"shouldactivateonstart-android-only",level:3},{value:"<code>disallowInterruption</code>",id:"disallowinterruption",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A gesture handler that allows other touch handling components to participate in\nRNGH's gesture system."),(0,a.kt)("p",null,"Used by ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/create-native-wrapper"},(0,a.kt)("inlineCode",{parentName:"a"},"createNativeWrapper()")),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/common-gh#properties"},"set of properties inherited from base handler class"),". Below is a list of properties specific to ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," component:"),(0,a.kt)("h3",{id:"shouldactivateonstart-android-only"},(0,a.kt)("inlineCode",{parentName:"h3"},"shouldActivateOnStart")," (",(0,a.kt)("strong",{parentName:"h3"},"Android only"),")"),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", underlying handler will activate unconditionally when in ",(0,a.kt)("inlineCode",{parentName:"p"},"BEGAN")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"UNDETERMINED")," state."),(0,a.kt)("h3",{id:"disallowinterruption"},(0,a.kt)("inlineCode",{parentName:"h3"},"disallowInterruption")),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", cancels all other gesture handlers when this ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeViewGestureHandler")," receives an ",(0,a.kt)("inlineCode",{parentName:"p"},"ACTIVE")," state event."))}u.isMDXComponent=!0}}]);