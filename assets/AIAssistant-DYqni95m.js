import{t as T,v as j,r as c,j as e,A as S,m as y,d as v,X as w,s as E}from"./index-BeAjU3K1.js";import{S as A}from"./send-DawG5N5C.js";import{M as C}from"./message-square-Bh4tmiZ0.js";const N=s=>{const a=s.toLowerCase().trim(),n=Object.values(T).find(o=>a.includes(o.name.toLowerCase())||a.includes(o.id.toLowerCase())||o.specs?.MCU&&a.includes(o.specs.MCU.toLowerCase()));if(n)return`
HARDWARE DATA: ${n.name}
Description: ${n.description}
MCU: ${n.specs?.MCU||"N/A"}
Voltage: ${n.specs?.Operating_Voltage||"N/A"}
Pins Summary: ${n.pins?.length||0} pins available.
Guidelines: ${n.guidelines?.voltage||n.description}
        `.trim();const i=j.find(o=>a.includes(o.name.toLowerCase())||a.includes(o.description.toLowerCase()));return i?`
SENSOR DATA: ${i.name}
Technical Spec: ${i.description}
Pin Configuration: ${i.pins}
Category: ${i.category}
Buy Link: ${i.buyLink}
        `.trim():"This information is not available on iotnext.store."},R=async(s,a)=>{console.log("[AI] Using Local Knowledge Engine (Refined Context)..."),await new Promise(p=>setTimeout(p,600));let n=s;s.includes("USER QUESTION:")&&(n=s.split("USER QUESTION:")[1].trim().toLowerCase());const i=n;if(["hi","hello","hey","greetings","help","hi!","hello!"].includes(i))return"Hello! I am Nexus AI, your Senior IoT Architect. How can I help you with hardware specifications or technical guidelines today?";if(s.includes("WEBSITE CONTENT:")){const d=s.split("WEBSITE CONTENT:")[1].split("USER QUESTION:")[0].split(`
`).find(h=>{const u=h.toLowerCase();return u.includes("catalog:")||u.includes("boards:")?!1:i.split(" ").some(x=>x.length>2&&u.includes(x))});if(d&&d.trim().startsWith("-"))return d.replace(/^- /,"").trim()}const m=N(i);return m!=="This information is not available on iotnext.store."?m:"This information is not available on iotnext.store."},z=()=>{const[s,a]=c.useState(!1),[n,i]=c.useState([{role:"bot",text:"How can I help you today? I have access to all the technical specs of iotnext.store."}]),[o,m]=c.useState(""),[p,g]=c.useState(!1),[d,h]=c.useState(!1),[u,x]=c.useState([]);c.useEffect(()=>{(async()=>{try{const{data:l}=await E.from("sensors").select("name, description, pins");l&&x(l)}catch{console.warn("[AI] Failed to fetch live sensor data, using internal fallback.")}})()},[]),c.useEffect(()=>{if(s)return;const t=setTimeout(()=>{g(!0)},3e3),l=setTimeout(()=>{g(!1)},1e4);return()=>{clearTimeout(t),clearTimeout(l)}},[s]);const b=async()=>{if(!o.trim()||d)return;const t=o,l={role:"user",text:t};i(r=>[...r,l]),m(""),h(!0);const I=`
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
${`
SENSORS CATALOG:
${u.map(r=>`- ${r.name}: ${r.description} (Pins: ${r.pins})`).join(`
`)}

HARDWARE BOARDS:
${Object.values(T).map(r=>`- ${r.name}: ${r.description} (Architecture: ${r.specs?.Architecture}, Power: ${r.specs?.Operating_Voltage})`).join(`
`)}
        `.trim()}

USER QUESTION:
${t}
`;try{const r=await R(I,"Nexus AI Technical Engine");i(f=>[...f,{role:"bot",text:r}])}catch(r){console.error("Nexus AI Error:",r),i(f=>[...f,{role:"bot",text:"I encountered a signal interference while processing your request. Please ensure your project parameters are correct or try again in a moment. (Error: "+r.message+")"}])}finally{h(!1)}};return e.jsxs("div",{className:"ai-assistant-wrapper",style:{position:"fixed",bottom:"2rem",right:"2rem",zIndex:1e3},children:[e.jsx(S,{children:s&&e.jsxs(y.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.95},className:"glass-plus",style:{width:"380px",height:"600px",borderRadius:"2rem",display:"flex",flexDirection:"column",marginBottom:"1.5rem",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"1.75rem",background:"var(--primary-gradient)",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("div",{style:{background:"rgba(255,255,255,0.2)",padding:"0.6rem",borderRadius:"14px"},children:e.jsx(v,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:800,fontSize:"1.1rem",letterSpacing:"-0.02em"},children:"Nexus AI"}),e.jsx("div",{style:{fontSize:"0.75rem",opacity:.9,fontWeight:500},children:"Senior IoT Architect"})]})]}),e.jsx(w,{size:20,style:{cursor:"pointer",opacity:.8},onClick:()=>a(!1)})]}),e.jsxs("div",{style:{flex:1,padding:"1.5rem",overflowY:"auto",display:"flex",flexDirection:"column",gap:"1.25rem",background:"rgba(var(--background-rgb), 0.3)"},children:[n.map((t,l)=>e.jsx("div",{style:{alignSelf:t.role==="user"?"flex-end":"flex-start",maxWidth:"85%",padding:"1rem 1.25rem",borderRadius:t.role==="user"?"1.5rem 1.5rem 0.25rem 1.5rem":"1.5rem 1.5rem 1.5rem 0.25rem",background:t.role==="user"?"var(--primary-gradient)":"var(--surface)",color:t.role==="user"?"white":"var(--text)",fontSize:"0.95rem",fontWeight:"500",lineHeight:"1.5",boxShadow:t.role==="bot"?"var(--shadow)":"0 10px 20px rgba(var(--primary-rgb), 0.2)",border:t.role==="bot"?"1px solid var(--border)":"none"},children:t.text},l)),d&&e.jsxs("div",{style:{alignSelf:"flex-start",padding:"1rem 1.25rem",borderRadius:"1.5rem 1.5rem 1.5rem 0.25rem",background:"var(--surface)",color:"var(--text-muted)",fontSize:"0.9rem",fontWeight:"600",display:"flex",gap:"0.5rem",alignItems:"center",border:"1px solid var(--border)",boxShadow:"var(--shadow)"},children:[e.jsx(v,{size:14,className:"spinning-ai"})," Nexus AI is thinking..."]})]}),e.jsxs("div",{style:{padding:"1.25rem",borderTop:"1px solid var(--border)",display:"flex",gap:"0.75rem",background:"var(--surface)"},children:[e.jsx("input",{value:o,onChange:t=>m(t.target.value),onKeyPress:t=>t.key==="Enter"&&b(),placeholder:"Consult the architect...",style:{flex:1,background:"var(--background)",border:"1px solid var(--border)",borderRadius:"1rem",padding:"0.8rem 1.25rem",color:"var(--text)",outline:"none",fontSize:"0.95rem",fontWeight:"500"}}),e.jsx("button",{onClick:b,className:"btn-primary btn-primary-shiny",style:{width:"48px",height:"48px",borderRadius:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(A,{size:20})})]})]})}),e.jsx(S,{children:p&&!s&&e.jsx(y.div,{initial:{opacity:0,x:20,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:20,scale:.8},className:"glass",style:{position:"absolute",bottom:"90px",right:"0",background:"var(--primary-gradient)",color:"white",padding:"1rem 1.5rem",borderRadius:"1.5rem 1.5rem 0.25rem 1.5rem",fontSize:"0.95rem",fontWeight:"700",whiteSpace:"nowrap",boxShadow:"var(--shadow-glow)",pointerEvents:"none",border:"none"},children:"Ready to innovate? 🚀"},"greeting-bubble")}),e.jsx(y.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>{a(!s),g(!1)},className:"btn-primary-shiny",style:{width:"72px",height:"72px",borderRadius:"24px",background:"var(--primary-gradient)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 15px 30px rgba(var(--primary-rgb), 0.4)",cursor:"pointer",border:"none",position:"relative",zIndex:2},children:s?e.jsx(w,{size:32}):e.jsx(C,{size:32})}),e.jsx("style",{children:`
                @keyframes ai-spin {
                    0% { transform: rotate(0deg) scale(1); }
                    50% { transform: rotate(180deg) scale(1.2); }
                    100% { transform: rotate(360deg) scale(1); }
                }
                .spinning-ai {
                    animation: ai-spin 2s linear infinite;
                    color: var(--primary);
                }
            `})]})};export{z as default};
