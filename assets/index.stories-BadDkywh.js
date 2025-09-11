import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as T,B as h}from"./chunk-PVWAREVJ-B5aJeDBu.js";import{B as _}from"./index-CtkFUtHP.js";import{F as v}from"./index-Dx9ie4u2.js";import{I as i}from"./index-vzN5qvz5.js";import{I}from"./index-HcaNge5K.js";import{F as y}from"./index-TfdgB-Cv.js";import"./iframe-DcEkMy9q.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BpVU9Rs-.js";const b="_cardTruck_1f9gd_1",x="_cardTruckImage_1f9gd_15",j="_cardTruckInfo_1f9gd_27",w="_cardTruckInfoHeader_1f9gd_38",q="_headerRight_1f9gd_47",N="_price_1f9gd_71",C="_favoriteIcon_1f9gd_75",V="_cardTruckInfoDetails_1f9gd_81",B="_iconStar_1f9gd_87",D="_iconMap_1f9gd_91",F="_cardTruckInfoDescription_1f9gd_96",M="_cardTruckInfoFeatures_1f9gd_113",R="_cardTruckInfoButton_1f9gd_116",r={cardTruck:b,cardTruckImage:x,cardTruckInfo:j,cardTruckInfoHeader:w,headerRight:q,price:N,favoriteIcon:C,cardTruckInfoDetails:V,iconStar:B,iconMap:D,cardTruckInfoDescription:F,cardTruckInfoFeatures:M,cardTruckInfoButton:R},A=a=>()=>{document.startViewTransition?document.startViewTransition(a):a()},S={home:()=>"/",catalog:()=>"/catalog",catalogItem:a=>`/catalog/${a}`},o=({id:a,to:s,title:t,image:c,price:u,description:d,features:m,location:p,rating:l,reviews:g})=>{const k=T(),f=A(()=>{k(S.catalogItem(a))});return e.jsxs("div",{className:r.cardTruck,children:[e.jsx(I,{className:r.cardTruckImage,alt:t,title:t,src:c}),e.jsxs("div",{className:r.cardTruckInfo,children:[e.jsxs("div",{className:r.cardTruckInfoHeader,children:[e.jsx("h2",{children:t}),e.jsx("div",{className:"flex"}),e.jsxs("div",{className:r.headerRight,children:[e.jsxs("div",{className:r.price,children:["€",u]}),e.jsx(y,{id:a,className:r.favoriteIcon})]})]}),e.jsxs("div",{className:r.cardTruckInfoDetails,children:[e.jsx(i,{className:r.iconStar,name:"star",size:16}),e.jsx("span",{children:`${l} (${g} Reviews)`}),e.jsx(i,{className:r.iconMap,name:"map",size:16}),e.jsx("span",{children:p})]}),e.jsx("p",{className:r.cardTruckInfoDescription,children:d}),e.jsx(v,{className:r.cardTruckInfoFeatures,options:m}),e.jsx(_,{className:r.cardTruckInfoButton,asNavLink:!0,to:s,onClick:f,children:"Show more"})]})]})};o.__docgenInfo={description:"",methods:[],displayName:"CardTruck",props:{id:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},to:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},image:{required:!0,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},rating:{required:!0,tsType:{name:"number"},description:""},reviews:{required:!0,tsType:{name:"number"},description:""},location:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},features:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}`,signature:{properties:[{key:"transmission",value:{name:"string",required:!0}},{key:"engine",value:{name:"string",required:!0}},{key:"AC",value:{name:"boolean",required:!0}},{key:"bathroom",value:{name:"boolean",required:!0}},{key:"kitchen",value:{name:"boolean",required:!0}},{key:"TV",value:{name:"boolean",required:!0}},{key:"radio",value:{name:"boolean",required:!0}},{key:"refrigerator",value:{name:"boolean",required:!0}},{key:"microwave",value:{name:"boolean",required:!0}},{key:"gas",value:{name:"boolean",required:!0}},{key:"water",value:{name:"boolean",required:!0}}]}},description:""}}};function E(a){return e.jsx(h,{children:e.jsx(o,{...a})})}const P={title:"Example/CardTruck",component:E,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},n={args:{id:1,to:"/trucks/mavericks",title:"Mavericks",description:"Embrace simplicity and freedom with the Mavericks panel truck. And enjoy the ride!",features:{transmission:"manual",engine:"V8",AC:!0,bathroom:!0,gas:!0,kitchen:!0,microwave:!0,radio:!0,refrigerator:!0,TV:!0,water:!0},image:"https://ftp.goit123.study/img/campers-test-task/1-1.webp",location:"Kyiv, Ukraine",price:8e3,rating:4.4,reviews:2}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 1,
    to: '/trucks/mavericks',
    title: 'Mavericks',
    description: 'Embrace simplicity and freedom with the Mavericks panel truck. And enjoy the ride!',
    features: {
      transmission: 'manual',
      engine: 'V8',
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
}`,...n.parameters?.docs?.source}}};const Q=["ChipWithIcon"];export{n as ChipWithIcon,Q as __namedExportsOrder,P as default};
