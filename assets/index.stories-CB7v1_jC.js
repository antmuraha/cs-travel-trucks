import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as l}from"./index-D4LZjqRr.js";import"./iframe-C6VTB0V1.js";import"./preload-helper-D9Z9MdNV.js";const v=a=>a.charAt(0).toUpperCase(),u="_cardReview_m0d3v_1",p="_header_m0d3v_6",_="_avatar_m0d3v_11",w="_info_m0d3v_25",g="_rating_m0d3v_31",h="_star_m0d3v_35",f="_active_m0d3v_38",y="_comment_m0d3v_49",r={cardReview:u,header:p,avatar:_,info:w,rating:g,star:h,active:f,comment:y},c=({name:a,rating:t,comment:n})=>e.jsxs("section",{className:r.cardReview,"aria-label":`Review by ${a}`,children:[e.jsxs("header",{className:r.header,children:[e.jsx("div",{className:r.avatar,children:v(a)}),e.jsxs("div",{className:r.info,children:[e.jsx("h3",{children:a}),e.jsx("div",{className:r.rating,"aria-label":`Rating: ${t}`,children:Array.from({length:5},(o,m)=>e.jsx(l,{name:"star",className:`${r.star} ${m<t?r.active:""}`,"aria-hidden":"true",size:16},m))})]})]}),e.jsx("p",{className:r.comment,children:n})]});c.__docgenInfo={description:"",methods:[],displayName:"CardReview",props:{name:{required:!0,tsType:{name:"string"},description:""},rating:{required:!0,tsType:{name:"number"},description:""},comment:{required:!0,tsType:{name:"string"},description:""}}};const R="_reviewsBlock_1b9gi_1",j={reviewsBlock:R},d=({className:a,reviews:t})=>e.jsx("div",{className:`${j.reviewsBlock} ${a}`,children:t.map((n,o)=>e.jsx(c,{name:n.reviewer_name,rating:n.reviewer_rating,comment:n.comment},o))});d.__docgenInfo={description:"",methods:[],displayName:"ReviewsBlock",props:{className:{required:!1,tsType:{name:"string"},description:""},reviews:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}`,signature:{properties:[{key:"reviewer_name",value:{name:"string",required:!0}},{key:"reviewer_rating",value:{name:"number",required:!0}},{key:"comment",value:{name:"string",required:!0}}]}}],raw:`{
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}[]`},description:""}}};const k={title:"Example/ReviewsBlock",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},s={args:{reviews:[{reviewer_name:"John D.",reviewer_rating:5,comment:"Amazing experience! The RV was spacious and comfortable, perfect for our family trip."},{reviewer_name:"Sarah K.",reviewer_rating:4,comment:"Great service and well-maintained vehicles. The staff was friendly and helpful throughout our journey."},{reviewer_name:"Mike T.",reviewer_rating:5,comment:"The RV had all the amenities we needed. It made our road trip so much more enjoyable and convenient."}]}},i={args:{reviews:[]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const q=["Default","NoReviews"];export{s as Default,i as NoReviews,q as __namedExportsOrder,k as default};
