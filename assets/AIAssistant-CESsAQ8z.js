import{r as i,j as e,A as y,m as u,d as f,X as b,v as S,t as j}from"./index-DDDYmDzN.js";import{S as I}from"./send-CnJFWfto.js";import{M as T}from"./message-square-DrmengtF.js";const A=async(r,l)=>{console.log("[AI] Using Platform Secure Proxy (Gemini)...");try{const s=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:r,systemInstruction:l})});if(s.status===404)throw new Error("Backend not found. If you are on GitHub, please use a Vercel deployment or enter your own API key in Settings.");if(!s.ok){let a="AI Service Unavailable";try{a=(await s.json()).error||a}catch{}throw new Error(a)}return(await s.json()).text}catch(s){throw console.error("[AI] Platform call failed:",s.message),s}},k=`
SENSORS CATALOG:
${S.map(r=>`- ${r.name}: ${r.description} (Pins: ${r.pins})`).join(`
`)}

HARDWARE BOARDS:
${Object.values(j).map(r=>`- ${r.name}: ${r.description} (Architecture: ${r.specs?.Architecture}, Power: ${r.specs?.Operating_Voltage})`).join(`
`)}
`,O=()=>{const[r,l]=i.useState(!1),[s,c]=i.useState([{role:"bot",text:"How can I help you today? I have access to all the technical specs of iotnext.store."}]),[a,d]=i.useState(""),[v,p]=i.useState(!1),[x,g]=i.useState(!1);i.useEffect(()=>{if(r)return;const t=setTimeout(()=>{p(!0)},3e3),n=setTimeout(()=>{p(!1)},1e4);return()=>{clearTimeout(t),clearTimeout(n)}},[r]);const h=async()=>{if(!a.trim()||x)return;const t=a,n={role:"user",text:t};c(o=>[...o,n]),d(""),g(!0);const w=`
You are an AI assistant for the website "iotnext.store".

STRICT RULES:
1. Answer ONLY using the content provided below.
2. Do NOT use any external or general knowledge.
3. Do NOT make assumptions or guesses.
4. If the answer is not found in the content, reply EXACTLY:
   "This information is not available on iotnext.store."

STYLE:
- Simple English
- Short and clear answers
- Beginner friendly

WEBSITE CONTENT:
${k}

USER QUESTION:
${t}
`;try{const o=await A(w,"You are a helpful assistant for iotnext.store. Follow strict rules provided in the prompt.");c(m=>[...m,{role:"bot",text:o}])}catch(o){console.error("Nexus AI Error:",o),c(m=>[...m,{role:"bot",text:"I encountered a signal interference while processing your request. Please ensure your project parameters are correct or try again in a moment. (Error: "+o.message+")"}])}finally{g(!1)}};return e.jsxs("div",{className:"ai-assistant-wrapper",style:{position:"fixed",bottom:"2rem",right:"2rem",zIndex:1e3},children:[e.jsx(y,{children:r&&e.jsxs(u.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.95},className:"glass-plus",style:{width:"380px",height:"600px",borderRadius:"2rem",display:"flex",flexDirection:"column",marginBottom:"1.5rem",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"1.75rem",background:"var(--primary-gradient)",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("div",{style:{background:"rgba(255,255,255,0.2)",padding:"0.6rem",borderRadius:"14px"},children:e.jsx(f,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:800,fontSize:"1.1rem",letterSpacing:"-0.02em"},children:"Nexus AI"}),e.jsx("div",{style:{fontSize:"0.75rem",opacity:.9,fontWeight:500},children:"Senior IoT Architect"})]})]}),e.jsx(b,{size:20,style:{cursor:"pointer",opacity:.8},onClick:()=>l(!1)})]}),e.jsxs("div",{style:{flex:1,padding:"1.5rem",overflowY:"auto",display:"flex",flexDirection:"column",gap:"1.25rem",background:"rgba(var(--background-rgb), 0.3)"},children:[s.map((t,n)=>e.jsx("div",{style:{alignSelf:t.role==="user"?"flex-end":"flex-start",maxWidth:"85%",padding:"1rem 1.25rem",borderRadius:t.role==="user"?"1.5rem 1.5rem 0.25rem 1.5rem":"1.5rem 1.5rem 1.5rem 0.25rem",background:t.role==="user"?"var(--primary-gradient)":"var(--surface)",color:t.role==="user"?"white":"var(--text)",fontSize:"0.95rem",fontWeight:"500",lineHeight:"1.5",boxShadow:t.role==="bot"?"var(--shadow)":"0 10px 20px rgba(var(--primary-rgb), 0.2)",border:t.role==="bot"?"1px solid var(--border)":"none"},children:t.text},n)),x&&e.jsxs("div",{style:{alignSelf:"flex-start",padding:"1rem 1.25rem",borderRadius:"1.5rem 1.5rem 1.5rem 0.25rem",background:"var(--surface)",color:"var(--text-muted)",fontSize:"0.9rem",fontWeight:"600",display:"flex",gap:"0.5rem",alignItems:"center",border:"1px solid var(--border)",boxShadow:"var(--shadow)"},children:[e.jsx(f,{size:14,className:"spinning-ai"})," Nexus AI is thinking..."]})]}),e.jsxs("div",{style:{padding:"1.25rem",borderTop:"1px solid var(--border)",display:"flex",gap:"0.75rem",background:"var(--surface)"},children:[e.jsx("input",{value:a,onChange:t=>d(t.target.value),onKeyPress:t=>t.key==="Enter"&&h(),placeholder:"Consult the architect...",style:{flex:1,background:"var(--background)",border:"1px solid var(--border)",borderRadius:"1rem",padding:"0.8rem 1.25rem",color:"var(--text)",outline:"none",fontSize:"0.95rem",fontWeight:"500"}}),e.jsx("button",{onClick:h,className:"btn-primary btn-primary-shiny",style:{width:"48px",height:"48px",borderRadius:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(I,{size:20})})]})]})}),e.jsx(y,{children:v&&!r&&e.jsx(u.div,{initial:{opacity:0,x:20,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:20,scale:.8},className:"glass",style:{position:"absolute",bottom:"90px",right:"0",background:"var(--primary-gradient)",color:"white",padding:"1rem 1.5rem",borderRadius:"1.5rem 1.5rem 0.25rem 1.5rem",fontSize:"0.95rem",fontWeight:"700",whiteSpace:"nowrap",boxShadow:"var(--shadow-glow)",pointerEvents:"none",border:"none"},children:"Ready to innovate? 🚀"},"greeting-bubble")}),e.jsx(u.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>{l(!r),p(!1)},className:"btn-primary-shiny",style:{width:"72px",height:"72px",borderRadius:"24px",background:"var(--primary-gradient)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 15px 30px rgba(var(--primary-rgb), 0.4)",cursor:"pointer",border:"none",position:"relative",zIndex:2},children:r?e.jsx(b,{size:32}):e.jsx(T,{size:32})}),e.jsx("style",{children:`
                @keyframes ai-spin {
                    0% { transform: rotate(0deg) scale(1); }
                    50% { transform: rotate(180deg) scale(1.2); }
                    100% { transform: rotate(360deg) scale(1); }
                }
                .spinning-ai {
                    animation: ai-spin 2s linear infinite;
                    color: var(--primary);
                }
            `})]})};export{O as default};
