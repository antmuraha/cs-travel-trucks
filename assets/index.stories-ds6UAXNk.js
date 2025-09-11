import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-DcEkMy9q.js";import{I as b}from"./index-vzN5qvz5.js";import"./preload-helper-D9Z9MdNV.js";const q="_squareButton_lhw9j_1",k="_active_lhw9j_33",s={squareButton:q,active:k},u=({name:c,type:l,label:m,value:d,onClick:p,icon:g,iconSize:v=32,active:y,checked:h})=>{const e=x.useRef(null),o=i=>{if(l==="radio"&&e.current?.checked){const f=i;if(i.type==="keydown"&&f.key!=="Spacebar")return;setTimeout(()=>{e.current&&(e.current.checked=!1)},100);return}};return a.jsxs("label",{className:`${s.squareButton} ${y?s.active:""}`,onMouseDown:o,onKeyUp:o,children:[a.jsx(b,{name:g,size:v}),a.jsx("span",{children:m}),a.jsx("input",{ref:e,type:l,name:c,value:d,defaultChecked:h,onChange:p})]})};u.__docgenInfo={description:"",methods:[],displayName:"SquareButton",props:{name:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:"'checkbox' | 'radio'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio'"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},icon:{required:!0,tsType:{name:"union",raw:"keyof typeof icons",elements:[{name:"literal",value:"logo"},{name:"literal",value:"cupHot"},{name:"literal",value:"diagram"},{name:"literal",value:"engine"},{name:"literal",value:"refrigerator"},{name:"literal",value:"gas"},{name:"literal",value:"grid1x2"},{name:"literal",value:"grid2x2"},{name:"literal",value:"grid3x3"},{name:"literal",value:"heart"},{name:"literal",value:"map"},{name:"literal",value:"microwave"},{name:"literal",value:"radio"},{name:"literal",value:"shower"},{name:"literal",value:"star"},{name:"literal",value:"transmission"},{name:"literal",value:"tv"},{name:"literal",value:"water"},{name:"literal",value:"wind"}]},description:""},iconSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const{fn:T}=__STORYBOOK_MODULE_TEST__,w={title:"Example/SquareButton",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:T()}},t={args:{type:"checkbox",name:"equipment",value:"fullyIntegrated",label:"Fully Integrated",icon:"grid2x2"}},r={args:{type:"checkbox",name:"equipment",value:"fullyIntegrated",label:"Short",icon:"grid2x2"}},n={args:{type:"checkbox",name:"equipment",value:"fullyIntegrated",label:"Short",icon:"grid2x2",active:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    name: 'equipment',
    value: 'fullyIntegrated',
    label: 'Fully Integrated',
    icon: 'grid2x2'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    name: 'equipment',
    value: 'fullyIntegrated',
    label: 'Short',
    icon: 'grid2x2'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'checkbox',
    name: 'equipment',
    value: 'fullyIntegrated',
    label: 'Short',
    icon: 'grid2x2',
    active: true
  }
}`,...n.parameters?.docs?.source}}};const L=["LongLabel","ShortLabel","Active"];export{n as Active,t as LongLabel,r as ShortLabel,L as __namedExportsOrder,w as default};
