import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as v}from"./index-D4LZjqRr.js";import"./iframe-C6VTB0V1.js";import"./preload-helper-D9Z9MdNV.js";const y="_squareButton_13wdy_1",x="_active_13wdy_33",r={squareButton:y,active:x},l=({name:o,type:i,label:s,value:u,onClick:c,icon:m,iconSize:p=32,active:d,checked:g})=>e.jsxs("label",{className:`${r.squareButton} ${d?r.active:""}`,children:[e.jsx(v,{name:m,size:p}),e.jsx("span",{children:s}),e.jsx("input",{type:i,name:o,value:u,defaultChecked:g,onChange:c})]});l.__docgenInfo={description:"",methods:[],displayName:"SquareButton",props:{name:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'checkbox' | 'radio'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio'"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"union",raw:"keyof typeof icons",elements:[{name:"literal",value:"logo"},{name:"literal",value:"cupHot"},{name:"literal",value:"diagram"},{name:"literal",value:"grid1x2"},{name:"literal",value:"grid2x2"},{name:"literal",value:"grid3x3"},{name:"literal",value:"heart"},{name:"literal",value:"map"},{name:"literal",value:"shower"},{name:"literal",value:"star"},{name:"literal",value:"tv"},{name:"literal",value:"wind"}]},description:""},iconSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const{fn:h}=__STORYBOOK_MODULE_TEST__,_={title:"Example/SquareButton",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:h()}},a={args:{type:"checkbox",name:"equipment",value:"fullyIntegrated",label:"Fully Integrated",icon:"grid2x2"}},t={args:{type:"checkbox",name:"equipment",value:"fullyIntegrated",label:"Short",icon:"grid2x2"}},n={args:{type:"checkbox",name:"equipment",value:"fullyIntegrated",label:"Short",icon:"grid2x2",active:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    name: 'equipment',
    value: 'fullyIntegrated',
    label: 'Fully Integrated',
    icon: 'grid2x2'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    name: 'equipment',
    value: 'fullyIntegrated',
    label: 'Short',
    icon: 'grid2x2'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    name: 'equipment',
    value: 'fullyIntegrated',
    label: 'Short',
    icon: 'grid2x2',
    active: true
  }
}`,...n.parameters?.docs?.source}}};const S=["LongLabel","ShortLabel","Active"];export{n as Active,a as LongLabel,t as ShortLabel,S as __namedExportsOrder,_ as default};
