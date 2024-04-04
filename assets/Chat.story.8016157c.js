import{C as x,S as y,U as j}from"./index.26ddfb38.js";import{V as g,M as m}from"./fixtures.79220d47.js";import{j as e}from"./jsx-runtime.0b93ee8d.js";import"./index.8d1ca303.js";import"./index.4cacae2c.js";import"./tag.fd6a5fd4.js";import"./animation.bbd4faf9.js";import"./index.469a98e3.js";import"./variants.c0a48271.js";import"./index.bf3bf256.js";import"./index.484a71f2.js";import"./index.4839bc12.js";import"./index.5d08ad5f.js";import"./top-caret.2fef3138.js";import"./index.f1b2953b.js";import"./functional.6d29e6f7.js";import"./index.38fdec20.js";import"./index.e3c1c7ee.js";import"./index.81afed78.js";import"./index.c47d7876.js";import"./index.7e0f6ca3.js";import"./_createSet.7d4a19da.js";import"./_baseToString.417eaa74.js";import"./is-plain-object.0608079a.js";import"./index.1d64a9c8.js";import"./index.62aee00c.js";import"./index.60d884f7.js";import"./index.5584b827.js";import"./index.4d347bbf.js";const J={title:"Templates/Chat",component:x,args:{isLoading:!1,actions:[],title:"Assistant Name",withWatermark:!0,image:g,description:"Voiceflow's virtual assistant is here to help.",startTime:Date.now(),hasEnded:!1}},s=({messages:t,...a})=>e.exports.jsx(y,{...a,messages:t,avatar:g,timestamp:Date.now()}),c=({message:t,...a})=>e.exports.jsx(j,{timestamp:Date.now(),message:t||"Lorem ipsum dolor",...a}),o={},r={render:t=>e.exports.jsxs(x,{...t,children:[e.exports.jsx(s,{messages:[{type:"text",text:"Lorem ipsum dolor"}]}),e.exports.jsx(s,{messages:[{type:"image",url:m}]}),e.exports.jsx(c,{}),e.exports.jsx(s,{messages:[{type:"text",text:"Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor consecteturaconsect turaconse lorem teturaconsecteturaconsecteturaconsectetura consectetura"}]}),e.exports.jsx(c,{message:"Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor consecteturaconsect turaconse lorem teturaconsecteturaconsecteturaconsectetura consecteturac onsecteturaconsecteturaconsecteturaco nsecteturaconsectetura"}),e.exports.jsx(s,{messages:[{type:"card",title:"Card Message",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:m}]})]})};var p,n,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <Chat {...args}>
        <SystemResponseTemplate messages={[{
        type: 'text',
        text: 'Lorem ipsum dolor'
      }]} />
        <SystemResponseTemplate messages={[{
        type: 'image',
        url: MOCK_IMAGE
      }]} />
        <UserResponseTemplate />
        <SystemResponseTemplate messages={[{
        type: 'text',
        text: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor consecteturaconsect turaconse lorem teturaconsecteturaconsecteturaconsectetura consectetura'
      }]} />
        <UserResponseTemplate message="Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor consecteturaconsect turaconse lorem teturaconsecteturaconsecteturaconsectetura consecteturac onsecteturaconsecteturaconsecteturaco nsecteturaconsectetura" />
        <SystemResponseTemplate messages={[{
        type: 'card',
        title: 'Card Message',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!',
        image: MOCK_IMAGE
      }]} />
      </Chat>;
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};export{o as Empty,r as Exhaustive,J as default};
