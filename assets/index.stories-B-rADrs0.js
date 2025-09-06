import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as g,B as I}from"./chunk-PVWAREVJ-Bcnq6rZQ.js";import{B as h}from"./index-BTbrZnGJ.js";import{F as v}from"./index-D0hbZziq.js";import{I as o}from"./index-D4LZjqRr.js";import{I as _}from"./index-B24mlH20.js";import{F as y}from"./index-Bw60nTbf.js";import"./iframe-C6VTB0V1.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DvjDt5GB.js";const b="_cardTruck_1cn5k_1",x="_cardTruckImage_1cn5k_10",j="_cardTruckInfo_1cn5k_18",w="_cardTruckInfoHeader_1cn5k_25",q="_cardTruckInfoDetails_1cn5k_35",N="_iconStar_1cn5k_41",C="_iconMap_1cn5k_45",B="_cardTruckInfoDescription_1cn5k_50",D="_cardTruckInfoFeatures_1cn5k_67",F="_cardTruckInfoButton_1cn5k_70",r={cardTruck:b,cardTruckImage:x,cardTruckInfo:j,cardTruckInfoHeader:w,cardTruckInfoDetails:q,iconStar:N,iconMap:C,cardTruckInfoDescription:B,cardTruckInfoFeatures:D,cardTruckInfoButton:F},M=a=>()=>{document.startViewTransition?document.startViewTransition(a):a()},V={home:()=>"/",catalog:()=>"/catalog",catalogItem:a=>`/catalog/${a}`},c=({id:a,to:s,title:n,image:i,price:u,description:d,features:m,location:p,rating:l,reviews:k})=>{const T=g(),f=M(()=>{T(V.catalogItem(a))});return e.jsxs("div",{className:r.cardTruck,children:[e.jsx(_,{className:r.cardTruckImage,alt:n,title:n,src:i}),e.jsxs("div",{className:r.cardTruckInfo,children:[e.jsxs("div",{className:r.cardTruckInfoHeader,children:[e.jsx("h2",{children:n}),e.jsx("div",{className:"flex"}),e.jsxs("div",{children:["€",u]}),e.jsx(y,{id:a})]}),e.jsxs("div",{className:r.cardTruckInfoDetails,children:[e.jsx(o,{className:r.iconStar,name:"star",size:16}),e.jsx("span",{children:`${l} (${k} Reviews)`}),e.jsx(o,{className:r.iconMap,name:"map",size:16}),e.jsx("span",{children:p})]}),e.jsx("p",{className:r.cardTruckInfoDescription,children:d}),e.jsx(v,{className:r.cardTruckInfoFeatures,options:m}),e.jsx(h,{className:r.cardTruckInfoButton,asNavLink:!0,to:s,onClick:f,children:"Show more"})]})]})};c.__docgenInfo={description:"",methods:[],displayName:"CardTruck",props:{id:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},to:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},image:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},rating:{required:!0,tsType:{name:"number"},description:""},reviews:{required:!0,tsType:{name:"number"},description:""},location:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},features:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}`,signature:{properties:[{key:"AC",value:{name:"boolean",required:!0}},{key:"bathroom",value:{name:"boolean",required:!0}},{key:"kitchen",value:{name:"boolean",required:!0}},{key:"TV",value:{name:"boolean",required:!0}},{key:"radio",value:{name:"boolean",required:!0}},{key:"refrigerator",value:{name:"boolean",required:!0}},{key:"microwave",value:{name:"boolean",required:!0}},{key:"gas",value:{name:"boolean",required:!0}},{key:"water",value:{name:"boolean",required:!0}}]}},description:""}}};function A(a){return e.jsx(I,{children:e.jsx(c,{...a})})}const O={title:"Example/CardTruck",component:A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},t={args:{id:1,to:"/trucks/mavericks",title:"Mavericks",description:"Embrace simplicity and freedom with the Mavericks panel truck. And enjoy the ride!",features:{AC:!0,bathroom:!0,gas:!0,kitchen:!0,microwave:!0,radio:!0,refrigerator:!0,TV:!0,water:!0},image:"https://ftp.goit123.study/img/campers-test-task/1-1.webp",location:"Kyiv, Ukraine",price:8e3,rating:4.4,reviews:2}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    id: 1,
    to: '/trucks/mavericks',
    title: 'Mavericks',
    description: 'Embrace simplicity and freedom with the Mavericks panel truck. And enjoy the ride!',
    features: {
      AC: true,
      bathroom: true,
      gas: true,
      kitchen: true,
      microwave: true,
      radio: true,
      refrigerator: true,
      TV: true,
      water: true
    },
    image: 'https://ftp.goit123.study/img/campers-test-task/1-1.webp',
    location: 'Kyiv, Ukraine',
    price: 8000.0,
    rating: 4.4,
    reviews: 2
  }
}`,...t.parameters?.docs?.source}}};const G=["ChipWithIcon"];export{t as ChipWithIcon,G as __namedExportsOrder,O as default};
