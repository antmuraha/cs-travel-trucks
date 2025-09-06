import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{C as t}from"./index-DvjDt5GB.js";function i(r){switch(r){case"AC":return"wind";case"bathroom":return"shower";case"kitchen":return"cupHot";case"TV":return"tv";case"microwave":return"diagram";default:return null}}const u="_features_8e8ka_1",s={features:u},l=["AC","bathroom","kitchen","TV","radio","refrigerator","microwave","gas","water"],c=({className:r,options:n})=>a.jsx("ol",{className:`${s.features} ${r}`,children:l.map(e=>{if(!n[e])return null;const o=i(e);return o?a.jsx("li",{children:a.jsx(t,{icon:o,label:e})},e):null})});c.__docgenInfo={description:"",methods:[],displayName:"Features",props:{className:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}`,signature:{properties:[{key:"AC",value:{name:"boolean",required:!0}},{key:"bathroom",value:{name:"boolean",required:!0}},{key:"kitchen",value:{name:"boolean",required:!0}},{key:"TV",value:{name:"boolean",required:!0}},{key:"radio",value:{name:"boolean",required:!0}},{key:"refrigerator",value:{name:"boolean",required:!0}},{key:"microwave",value:{name:"boolean",required:!0}},{key:"gas",value:{name:"boolean",required:!0}},{key:"water",value:{name:"boolean",required:!0}}]}},description:""}}};export{c as F};
