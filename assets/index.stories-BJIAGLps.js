import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as l}from"./index-vzN5qvz5.js";import"./iframe-DcEkMy9q.js";import"./preload-helper-D9Z9MdNV.js";const p=a=>a.charAt(0).toUpperCase(),v="_cardReview_p0jkf_1",u="_header_p0jkf_6",_="_avatar_p0jkf_11",w="_info_p0jkf_24",g="_rating_p0jkf_30",h="_star_p0jkf_34",f="_active_p0jkf_37",y="_comment_p0jkf_48",r={cardReview:v,header:u,avatar:_,info:w,rating:g,star:h,active:f,comment:y},m=({name:a,rating:t,comment:n})=>e.jsxs("section",{className:r.cardReview,"aria-label":`Review by ${a}`,children:[e.jsxs("header",{className:r.header,children:[e.jsx("div",{className:r.avatar,children:p(a)}),e.jsxs("div",{className:r.info,children:[e.jsx("h3",{children:a}),e.jsx("div",{className:r.rating,"aria-label":`Rating: ${t}`,children:Array.from({length:5},(o,c)=>e.jsx(l,{name:"star",className:`${r.star} ${c<t?r.active:""}`,"aria-hidden":"true",size:16},c))})]})]}),e.jsx("p",{className:r.comment,children:n})]});m.__docgenInfo={description:"",methods:[],displayName:"CardReview",props:{name:{required:!0,tsType:{name:"string"},description:""},rating:{required:!0,tsType:{name:"number"},description:""},comment:{required:!0,tsType:{name:"string"},description:""}}};const j="_reviewsBlock_pll1g_1",k={reviewsBlock:j},d=({className:a,reviews:t})=>e.jsx("div",{className:`${k.reviewsBlock} ${a}`,children:t.map((n,o)=>e.jsx(m,{name:n.reviewer_name,rating:n.reviewer_rating,comment:n.comment},o))});d.__docgenInfo={description:"",methods:[],displayName:"ReviewsBlock",props:{className:{required:!1,tsType:{name:"string"},description:""},reviews:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}`,signature:{properties:[{key:"reviewer_name",value:{name:"string",required:!0}},{key:"reviewer_rating",value:{name:"number",required:!0}},{key:"comment",value:{name:"string",required:!0}}]}}],raw:`{
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}[]`},description:""}}};const b={title:"Example/ReviewsBlock",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},s={args:{reviews:[{reviewer_name:"John D.",reviewer_rating:5,comment:"Amazing experience! The RV was spacious and comfortable, perfect for our family trip."},{reviewer_name:"Sarah K.",reviewer_rating:4,comment:"Great service and well-maintained vehicles. The staff was friendly and helpful throughout our journey."},{reviewer_name:"Mike T.",reviewer_rating:5,comment:"The RV had all the amenities we needed. It made our road trip so much more enjoyable and convenient."}]}},i={args:{reviews:[]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: [{
      reviewer_name: 'John D.',
      reviewer_rating: 5,
      comment: 'Amazing experience! The RV was spacious and comfortable, perfect for our family trip.'
    }, {
      reviewer_name: 'Sarah K.',
      reviewer_rating: 4,
      comment: 'Great service and well-maintained vehicles. The staff was friendly and helpful throughout our journey.'
    }, {
      reviewer_name: 'Mike T.',
      reviewer_rating: 5,
      comment: 'The RV had all the amenities we needed. It made our road trip so much more enjoyable and convenient.'
    }]
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: []
  }
}`,...i.parameters?.docs?.source}}};const q=["Default","NoReviews"];export{s as Default,i as NoReviews,q as __namedExportsOrder,b as default};
