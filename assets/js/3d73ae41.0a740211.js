"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[9161],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47567:function(e,t,n){var a=n(67294);const r={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.Z=e=>{let{children:t}=e;return a.createElement("div",{style:r.container},a.Children.map(t,(e=>(0,a.cloneElement)(e,{...e.props.style,style:r.img}))))}},75823:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(83117),r=(n(67294),n(3905)),o=n(44996),l=n(47567);const p={id:"example",title:"Running Example App"},i=void 0,s={unversionedId:"example",id:"version-1.10.3/example",title:"Running Example App",description:"Example app code is located under Example/ folder in the repo.",source:"@site/versioned_docs/version-1.10.3/example.md",sourceDirName:".",slug:"/example",permalink:"/react-native-gesture-handler/docs/1.10.3/example",draft:!1,tags:[],version:"1.10.3",frontMatter:{id:"example",title:"Running Example App"},sidebar:"version-1.10.3/docs",previous:{title:"Cross handler interactions",permalink:"/react-native-gesture-handler/docs/1.10.3/interactions"},next:{title:"Common handler properties",permalink:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/common-gh"}},c={},u=[{value:"Running example app on Expo",id:"running-example-app-on-expo",level:2},{value:"Running example app locally",id:"running-example-app-locally",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Example app code is located under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/examples/Example"},(0,r.kt)("inlineCode",{parentName:"a"},"Example/"))," folder in the repo.\nIt showcases the majority of the Gesture Handler library features.\nThe app consist of the list of single screen examples presenting the capabilities of the library.\nEach example is located under a separate folder under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/examples/Example"},(0,r.kt)("inlineCode",{parentName:"a"},"Example/")),"."),(0,r.kt)(l.Z,{mdxType:"GifGallery"},(0,r.kt)("img",{src:(0,o.Z)("gifs/sampleapp.gif"),width:"180",height:"320"})),(0,r.kt)("h2",{id:"running-example-app-on-expo"},"Running example app on Expo"),(0,r.kt)("p",null,"You can run example app on ",(0,r.kt)("a",{parentName:"p",href:"https://expo.io"},"Expo"),". Follow instructions under ",(0,r.kt)("a",{parentName:"p",href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"},"this link")," to do so. Note that the app published to Expo is not the most up to date version. We publish updates whenever new version of Expo SDK is released. If you wish to try the most up to date version you will have to run example app locally. For that see below \ud83d\udc47"),(0,r.kt)("h2",{id:"running-example-app-locally"},"Running example app locally"),(0,r.kt)("p",null,"Before you begin you should follow ",(0,r.kt)("a",{parentName:"p",href:"http://facebook.github.io/react-native/docs/getting-started.html"},"React Native's setup steps")," to make sure you have all the tools necessary to build and run React Native apps installed.\nThe example app is a regular React Native app, so in case of problems or to learn about available commands you may want to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/README.md"},"check react-native cli documentation"),"."),(0,r.kt)("p",null,"In order to run example app you need to clone the repo first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:software-mansion/react-native-gesture-handler.git\n")),(0,r.kt)("p",null,"Then go to the library folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd react-native-gesture-handler/\n")),(0,r.kt)("p",null,"Install dependencies of library with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")),(0,r.kt)("p",null,"Then go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Example")," folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd Example\n")),(0,r.kt)("p",null,"Install dependencies of example with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")),(0,r.kt)("p",null,"Run development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,r.kt)("p",null,"Finally run one of the commands below in order to build, install and launch the app on Android:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"react-native run-android\n")),(0,r.kt)("p",null,"or on iOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"react-native run-ios\n")),(0,r.kt)("p",null,"You will need to have an Android or iOS device or emulator connected and ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-cli")," package installed globally."))}d.isMDXComponent=!0}}]);