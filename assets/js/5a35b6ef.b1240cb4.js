"use strict";(self.webpackChunknodegui=self.webpackChunknodegui||[]).push([[2692],{78199:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=s(74848),r=s(28453);const i={id:"eventwidget",title:"EventWidget",sidebar_label:"EventWidget"},d=void 0,l={id:"api/generated/classes/eventwidget",title:"EventWidget",description:"Abstract class that adds event handling support to all widgets.",source:"@site/docs/api/generated/classes/eventwidget.md",sourceDirName:"api/generated/classes",slug:"/api/generated/classes/eventwidget",permalink:"/docs/api/generated/classes/eventwidget",draft:!1,unlisted:!1,editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/api/generated/classes/eventwidget.md",tags:[],version:"current",frontMatter:{id:"eventwidget",title:"EventWidget",sidebar_label:"EventWidget"},sidebar:"api",previous:{title:"Component",permalink:"/docs/api/generated/classes/component"},next:{title:"FlexLayout",permalink:"/docs/api/generated/classes/flexlayout"}},c={},a=[{value:"Example",id:"example",level:3},{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Index",id:"index",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties-1",level:2},{value:"native",id:"native",level:3},{value:"Methods",id:"methods-1",level:2},{value:"addEventListener",id:"addeventlistener",level:3},{value:"eventProcessed",id:"eventprocessed",level:3},{value:"removeEventListener",id:"removeeventlistener",level:3},{value:"setEventProcessed",id:"seteventprocessed",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Abstract class that adds event handling support to all widgets."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"This class implements an event emitter and merges it with Qt's event and signal system. It allows us to register and unregister event and signal listener at will from javascript"}),"*"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"EventWidget"})," is an abstract class and hence no instances of the same should be created. It exists so that we can add event handling functionalities to all widget's easily. This is an internal class."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const { QWidget, QWidgetSignals, WidgetEventTypes } = require("@nodegui/nodegui");\n\nconst view = new QWidget();\n// You either listen for a widget\'s signal\nview.addEventListener(\'windowTitleChanged\', () => {\nconsole.log("window title changed");\n});\n\n// or you can listen for an event\n\nview.addEventListener(WidgetEventTypes.MouseMove, () => {\nconsole.log("mouse moved");\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"type-parameters",children:"Type parameters"}),"\n",(0,t.jsxs)(n.p,{children:["\u25aa ",(0,t.jsx)(n.strong,{children:"Signals"}),": ",(0,t.jsx)(n.em,{children:"unknown"})]}),"\n",(0,t.jsx)(n.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/component",children:"Component"})}),"\n",(0,t.jsxs)(n.p,{children:["\u21b3 ",(0,t.jsx)(n.strong,{children:"EventWidget"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u21b3 ",(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/qobject",children:"QObject"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"index",children:"Index"}),"\n",(0,t.jsx)(n.h3,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/eventwidget#constructor",children:"constructor"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/eventwidget#native",children:"native"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/eventwidget#addeventlistener",children:"addEventListener"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/eventwidget#eventprocessed",children:"eventProcessed"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/eventwidget#removeeventlistener",children:"removeEventListener"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/eventwidget#seteventprocessed",children:"setEventProcessed"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"constructors-1",children:"Constructors"}),"\n",(0,t.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,t.jsxs)(n.p,{children:["+ ",(0,t.jsx)(n.strong,{children:"new EventWidget"}),"(",(0,t.jsx)(n.code,{children:"native"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/generated/globals#nativeelement",children:"NativeElement"}),"): ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/eventwidget",children:"EventWidget"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Overrides ",(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/component",children:"Component"}),".",(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/component#constructor",children:"constructor"})]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"native"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/globals#nativeelement",children:"NativeElement"})})]})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/eventwidget",children:"EventWidget"})})]}),"\n",(0,t.jsx)(n.h2,{id:"properties-1",children:"Properties"}),"\n",(0,t.jsx)(n.h3,{id:"native",children:"native"}),"\n",(0,t.jsxs)(n.p,{children:["\u2022 ",(0,t.jsx)(n.strong,{children:"native"}),": ",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.a,{href:"/docs/api/generated/globals#nativeelement",children:"NativeElement"})," | null"]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Inherited from ",(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/component",children:"Component"}),".",(0,t.jsx)(n.a,{href:"/docs/api/generated/classes/component#native",children:"native"})]})}),"\n",(0,t.jsx)(n.h2,{id:"methods-1",children:"Methods"}),"\n",(0,t.jsx)(n.h3,{id:"addeventlistener",children:"addEventListener"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"addEventListener"}),"\u2039",(0,t.jsx)(n.strong,{children:"SignalType"}),"\u203a(",(0,t.jsx)(n.code,{children:"signalType"}),": SignalType, ",(0,t.jsx)(n.code,{children:"callback"}),": Signals[SignalType], ",(0,t.jsx)(n.code,{children:"options?"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/generated/interfaces/eventlisteneroptions",children:"EventListenerOptions"}),"): ",(0,t.jsx)(n.em,{children:"void"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Type parameters:"})}),"\n",(0,t.jsxs)(n.p,{children:["\u25aa ",(0,t.jsx)(n.strong,{children:"SignalType"}),": ",(0,t.jsx)(n.em,{children:"keyof Signals"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"signalType"})}),(0,t.jsx)(n.td,{children:"SignalType"}),(0,t.jsx)(n.td,{children:"SignalType is a signal from the widgets signals interface."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"callback"})}),(0,t.jsx)(n.td,{children:"Signals[SignalType]"}),(0,t.jsx)(n.td,{children:"Corresponding callback for the signal as mentioned in the widget's signal interface"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/interfaces/eventlisteneroptions",children:"EventListenerOptions"})}),(0,t.jsx)(n.td,{children:"Extra optional options controlling how this event listener is added."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," ",(0,t.jsx)(n.em,{children:"void"})]}),"\n",(0,t.jsx)(n.p,{children:"void"}),"\n",(0,t.jsx)(n.p,{children:"For example in the case of QPushButton:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const button = new QPushButton();\nbutton.addEventListener('clicked',(checked)=>console.log(\"clicked\"));\n// here clicked is a value from QPushButtonSignals interface\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"addEventListener"}),"(",(0,t.jsx)(n.code,{children:"eventType"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/generated/enums/widgeteventtypes",children:"WidgetEventTypes"}),", ",(0,t.jsx)(n.code,{children:"callback"}),": function, ",(0,t.jsx)(n.code,{children:"options?"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/generated/interfaces/eventlisteneroptions",children:"EventListenerOptions"}),"): ",(0,t.jsx)(n.em,{children:"void"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.p,{children:["\u25aa ",(0,t.jsx)(n.strong,{children:"eventType"}),": ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/enums/widgeteventtypes",children:"WidgetEventTypes"})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u25aa ",(0,t.jsx)(n.strong,{children:"callback"}),": ",(0,t.jsx)(n.em,{children:"function"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 (",(0,t.jsx)(n.code,{children:"event?"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/generated/globals#nativerawpointer",children:"NativeRawPointer"}),'\u2039"QEvent"\u203a): ',(0,t.jsx)(n.em,{children:"void"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"event?"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/api/generated/globals#nativerawpointer",children:"NativeRawPointer"}),'\u2039"QEvent"\u203a']})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u25aa",(0,t.jsx)(n.code,{children:"Optional"}),"  ",(0,t.jsx)(n.strong,{children:"options"}),": ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/interfaces/eventlisteneroptions",children:"EventListenerOptions"})})]}),"\n",(0,t.jsx)(n.p,{children:"Extra optional options controlling how this event listener is added."}),"\n",(0,t.jsx)(n.p,{children:"For example in the case of QPushButton:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const button = new QPushButton();\nbutton.addEventListener(WidgetEventTypes.HoverEnter,()=>console.log("hovered"));\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," ",(0,t.jsx)(n.em,{children:"void"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"eventprocessed",children:"eventProcessed"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"eventProcessed"}),"(): ",(0,t.jsx)(n.em,{children:"boolean"})]}),"\n",(0,t.jsx)(n.p,{children:"Get the state of the event processed flag"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.code,{children:"setEventProcessed()"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," ",(0,t.jsx)(n.em,{children:"boolean"})]}),"\n",(0,t.jsx)(n.p,{children:"boolean True if the current event is flagged as processed."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"removeeventlistener",children:"removeEventListener"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"removeEventListener"}),"\u2039",(0,t.jsx)(n.strong,{children:"SignalType"}),"\u203a(",(0,t.jsx)(n.code,{children:"signalType"}),": SignalType, ",(0,t.jsx)(n.code,{children:"callback"}),": Signals[SignalType], ",(0,t.jsx)(n.code,{children:"options?"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/generated/interfaces/eventlisteneroptions",children:"EventListenerOptions"}),"): ",(0,t.jsx)(n.em,{children:"void"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Type parameters:"})}),"\n",(0,t.jsxs)(n.p,{children:["\u25aa ",(0,t.jsx)(n.strong,{children:"SignalType"}),": ",(0,t.jsx)(n.em,{children:"keyof Signals"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"signalType"})}),(0,t.jsx)(n.td,{children:"SignalType"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"callback"})}),(0,t.jsx)(n.td,{children:"Signals[SignalType]"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"options?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/interfaces/eventlisteneroptions",children:"EventListenerOptions"})})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," ",(0,t.jsx)(n.em,{children:"void"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"removeEventListener"}),"(",(0,t.jsx)(n.code,{children:"eventType"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/generated/enums/widgeteventtypes",children:"WidgetEventTypes"}),", ",(0,t.jsx)(n.code,{children:"callback"}),": function, ",(0,t.jsx)(n.code,{children:"options?"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/generated/interfaces/eventlisteneroptions",children:"EventListenerOptions"}),"): ",(0,t.jsx)(n.em,{children:"void"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.p,{children:["\u25aa ",(0,t.jsx)(n.strong,{children:"eventType"}),": ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/enums/widgeteventtypes",children:"WidgetEventTypes"})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u25aa ",(0,t.jsx)(n.strong,{children:"callback"}),": ",(0,t.jsx)(n.em,{children:"function"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 (",(0,t.jsx)(n.code,{children:"event?"}),": ",(0,t.jsx)(n.a,{href:"/docs/api/generated/globals#nativerawpointer",children:"NativeRawPointer"}),'\u2039"QEvent"\u203a): ',(0,t.jsx)(n.em,{children:"void"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"event?"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/api/generated/globals#nativerawpointer",children:"NativeRawPointer"}),'\u2039"QEvent"\u203a']})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u25aa",(0,t.jsx)(n.code,{children:"Optional"}),"  ",(0,t.jsx)(n.strong,{children:"options"}),": ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/docs/api/generated/interfaces/eventlisteneroptions",children:"EventListenerOptions"})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," ",(0,t.jsx)(n.em,{children:"void"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"seteventprocessed",children:"setEventProcessed"}),"\n",(0,t.jsxs)(n.p,{children:["\u25b8 ",(0,t.jsx)(n.strong,{children:"setEventProcessed"}),"(",(0,t.jsx)(n.code,{children:"isProcessed"}),": boolean): ",(0,t.jsx)(n.em,{children:"void"})]}),"\n",(0,t.jsx)(n.p,{children:"Mark the current event as having been processed"}),"\n",(0,t.jsx)(n.p,{children:"This method is used to indicate that the currently dispatched event\nhas been processed and no further processing by superclasses is\nrequired. It only makes sense to call this method from an event\nhandler."}),"\n",(0,t.jsxs)(n.p,{children:["When set, this flag will cause NodeGui's ",(0,t.jsx)(n.code,{children:"QObject::event()"})," method to\nreturn true and not call the superclass ",(0,t.jsx)(n.code,{children:"event()"}),", effectively preventing\nany further processing on this event."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"isProcessed"})}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"true if the event has been processed."})]})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns:"})," ",(0,t.jsx)(n.em,{children:"void"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);