import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as i}from"./index-BpVU9Rs-.js";function s(r){switch(r){case"AC":return"wind";case"bathroom":return"shower";case"kitchen":return"cupHot";case"TV":return"tv";case"radio":return"radio";case"refrigerator":return"refrigerator";case"microwave":return"microwave";case"gas":return"gas";case"water":return"water";case"transmission":return"transmission";case"engine":return"engine";default:return null}}const u="_features_8e8ka_1",l={features:u},c=["AC","bathroom","kitchen","TV","radio","refrigerator","microwave","gas","water","transmission","engine"],m=({className:r,options:a})=>n.jsx("ol",{className:`${l.features} ${r}`,children:c.map(e=>{if(!a[e])return null;const o=s(e);if(!o)return null;let t=e;return(e==="transmission"||e==="engine")&&(t=a[e]),n.jsx("li",{children:n.jsx(i,{icon:o,label:t})},e)})});m.__docgenInfo={description:"",methods:[],displayName:"Features",props:{className:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"transmission",value:{name:"string",required:!0}},{key:"engine",value:{name:"string",required:!0}},{key:"AC",value:{name:"boolean",required:!0}},{key:"bathroom",value:{name:"boolean",required:!0}},{key:"kitchen",value:{name:"boolean",required:!0}},{key:"TV",value:{name:"boolean",required:!0}},{key:"radio",value:{name:"boolean",required:!0}},{key:"refrigerator",value:{name:"boolean",required:!0}},{key:"microwave",value:{name:"boolean",required:!0}},{key:"gas",value:{name:"boolean",required:!0}},{key:"water",value:{name:"boolean",required:!0}}]}},description:""}}};export{m as F};
