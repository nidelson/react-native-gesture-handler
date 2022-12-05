"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[2335],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var a=n(83117),r=(n(67294),n(3905));const i={id:"test-api",title:"Testing"},s=void 0,l={unversionedId:"api/test-api",id:"version-2.6.0/api/test-api",title:"Testing",description:"If you want to use fireGestureHandler and getByGestureTestId, you need to import them from react-native-gesture-handler/jest-utils package.",source:"@site/versioned_docs/version-2.6.0/api/test-api.md",sourceDirName:"api",slug:"/api/test-api",permalink:"/react-native-gesture-handler/docs/api/test-api",draft:!1,tags:[],version:"2.6.0",frontMatter:{id:"test-api",title:"Testing"},sidebar:"docs",previous:{title:"createNativeWrapper()",permalink:"/react-native-gesture-handler/docs/gesture-handlers/api/create-native-wrapper"},next:{title:"How does it work?",permalink:"/react-native-gesture-handler/docs/under-the-hood/how-does-it-work"}},o={},d=[{value:"fireGestureHandler(gestureOrHandler, eventList)",id:"firegesturehandlergestureorhandler-eventlist",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>gestureOrHandler</code>",id:"gestureorhandler",level:4},{value:"<code>eventList</code>",id:"eventlist",level:4},{value:"Example",id:"example",level:3},{value:"getByGestureTestId(testID)",id:"getbygesturetestidtestid",level:2},{value:"Arguments",id:"arguments-1",level:3},{value:"<code>testID</code>",id:"testid",level:4},{value:"Notes",id:"notes",level:3},{value:"Example",id:"example-1",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"fireGestureHandler")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getByGestureTestId"),", you need to import them from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler/jest-utils")," package.")),(0,r.kt)("h2",{id:"firegesturehandlergestureorhandler-eventlist"},"fireGestureHandler(gestureOrHandler, eventList)"),(0,r.kt)("p",null,"Simulates one event stream (i.e. event sequence starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"BEGIN")," state and ending\nwith one of ",(0,r.kt)("inlineCode",{parentName:"p"},"END"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"CANCEL")," states), calling appropriate callbacks associated with given gesture handler."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"gestureorhandler"},(0,r.kt)("inlineCode",{parentName:"h4"},"gestureOrHandler")),(0,r.kt)("p",null,"Represents either:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Gesture handler component found by Jest queries (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"getByTestId"),")"),(0,r.kt)("li",{parentName:"ol"},"Gesture found by ",(0,r.kt)("a",{parentName:"li",href:"#getbygestureidtestid"},(0,r.kt)("inlineCode",{parentName:"a"},"getByGestureTestId()")))),(0,r.kt)("h4",{id:"eventlist"},(0,r.kt)("inlineCode",{parentName:"h4"},"eventList")),(0,r.kt)("p",null,"Event data passed to appropriate callback. RNGH fills event list if required\ndata is missing using these rules:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"oldState")," is filled using state of the previous event. ",(0,r.kt)("inlineCode",{parentName:"li"},"BEGIN")," events use\n",(0,r.kt)("inlineCode",{parentName:"li"},"UNDETERMINED")," value as previous event."),(0,r.kt)("li",{parentName:"ol"},"Events after first ",(0,r.kt)("inlineCode",{parentName:"li"},"ACTIVE")," state can omit ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," field."),(0,r.kt)("li",{parentName:"ol"},"Handler specific data is filled (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"numberOfTouches"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," fields) with\ndefaults."),(0,r.kt)("li",{parentName:"ol"},"Missing ",(0,r.kt)("inlineCode",{parentName:"li"},"BEGIN")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"END")," events are added with data copied from first and last\npassed event, respectively."),(0,r.kt)("li",{parentName:"ol"},"If first event don't have ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," field, the ",(0,r.kt)("inlineCode",{parentName:"li"},"ACTIVE")," state is assumed.")),(0,r.kt)("p",null,"Some examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const oldStateFilled = [\n  { state: State.BEGAN },\n  { state: State.ACTIVE },\n  { state: State.END },\n]; // three events with specified state are fired.\n\nconst implicitActiveState = [\n  { state: State.BEGAN },\n  { state: State.ACTIVE },\n  { x: 5 },\n  { state: State.END },\n]; // 4 events, including two ACTIVE events (second one has overriden additional data).\n\nconst implicitBegin = [\n  { x: 1, y: 11 },\n  { x: 2, y: 12, state: State.FAILED },\n]; // 3 events, including implicit BEGAN, one ACTIVE, and one FAILED event with additional data.\n\nconst implicitBeginAndEnd = [\n  { x: 5, y: 15 },\n  { x: 6, y: 16 },\n  { x: 7, y: 17 },\n]; // 5 events, including 3 ACTIVE events and implicit BEGAN and END events. BEGAN uses first event's additional data, END uses last event's additional data.\n\nconst allImplicits = []; // 3 events, one BEGIN, one ACTIVE, one END with defaults.\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Extracted from RNGH tests, check ",(0,r.kt)("inlineCode",{parentName:"p"},"Events.test.tsx")," for full implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"it('sends events with additional data to handlers', () => {\n  const panHandlers = mockedEventHandlers();\n  render(<SingleHandler handlers={panHandlers} treatStartAsUpdate />);\n  fireGestureHandler<PanGesture>(getByGestureTestId('pan'), [\n    { state: State.BEGAN, translationX: 0 },\n    { state: State.ACTIVE, translationX: 10 },\n    { translationX: 20 },\n    { translationX: 20 },\n    { state: State.END, translationX: 30 },\n  ]);\n\n  expect(panHandlers.active).toBeCalledTimes(3);\n  expect(panHandlers.active).toHaveBeenLastCalledWith(\n    expect.objectContaining({ translationX: 20 })\n  );\n});\n")),(0,r.kt)("h2",{id:"getbygesturetestidtestid"},"getByGestureTestId(testID)"),(0,r.kt)("p",null,"Returns opaque data type associated with gesture. Gesture is found via ",(0,r.kt)("inlineCode",{parentName:"p"},"testID")," attribute in rendered\ncomponents (see ",(0,r.kt)("a",{parentName:"p",href:"/react-native-gesture-handler/docs/api/gestures/base-gesture-config#withrefref"},(0,r.kt)("inlineCode",{parentName:"a"},"withTestID")," method"),")."),(0,r.kt)("h3",{id:"arguments-1"},"Arguments"),(0,r.kt)("h4",{id:"testid"},(0,r.kt)("inlineCode",{parentName:"h4"},"testID")),(0,r.kt)("p",null,"String identifying gesture."),(0,r.kt)("h3",{id:"notes"},"Notes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"testID")," must be unique among components rendered in test."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"See above example for ",(0,r.kt)("inlineCode",{parentName:"p"},"fireGestureHandler"),"."))}u.isMDXComponent=!0}}]);