import{t as w,v as E,r as c,j as e,A as b,m as f,d as S,X as v,s as I}from"./index-Bi_Kq3W9.js";import{S as A}from"./send-CrmQDn1k.js";import{M as C}from"./message-square-BODj2ma6.js";const N=r=>{const a=r.toLowerCase().trim(),o=Object.values(w).find(n=>a.includes(n.name.toLowerCase())||a.includes(n.id.toLowerCase())||n.specs?.MCU&&a.includes(n.specs.MCU.toLowerCase()));if(o)return`
HARDWARE DATA: ${o.name}
Description: ${o.description}
MCU: ${o.specs?.MCU||"N/A"}
Voltage: ${o.specs?.Operating_Voltage||"N/A"}
Pins Summary: ${o.pins?.length||0} pins available.
Guidelines: ${o.guidelines?.voltage||matchedBord.description}
        `.trim();const i=E.find(n=>a.includes(n.name.toLowerCase())||a.includes(n.description.toLowerCase()));return i?`
SENSOR DATA: ${i.name}
Technical Spec: ${i.description}
Pin Configuration: ${i.pins}
Category: ${i.category}
Buy Link: ${i.buyLink}
        `.trim():"This information is not available on iotnext.store."},R=async(r,a)=>{console.log("[AI] Using Local Knowledge Engine (Dynamic Content)..."),await new Promise(n=>setTimeout(n,600));const o=r.toLowerCase();if(r.includes("WEBSITE CONTENT:")){const m=r.split("WEBSITE CONTENT:")[1].split("USER QUESTION:")[0].split(`
`);let p=r;r.includes("USER QUESTION:")&&(p=r.split("USER QUESTION:")[1].trim().toLowerCase());const d=m.find(u=>{const g=u.toLowerCase();return p.split(" ").some(x=>x.length>3&&g.includes(x))});if(d)return d.replace(/^- /,"").trim()}const i=N(o);return i!=="This information is not available on iotnext.store."?i:"This information is not available on iotnext.store."},z=()=>{const[r,a]=c.useState(!1),[o,i]=c.useState([{role:"bot",text:"How can I help you today? I have access to all the technical specs of iotnext.store."}]),[n,m]=c.useState(""),[p,d]=c.useState(!1),[u,g]=c.useState(!1),[x,T]=c.useState([]);c.useEffect(()=>{(async()=>{try{const{data:l}=await I.from("sensors").select("name, description, pins");l&&T(l)}catch{console.warn("[AI] Failed to fetch live sensor data, using internal fallback.")}})()},[]),c.useEffect(()=>{if(r)return;const t=setTimeout(()=>{d(!0)},3e3),l=setTimeout(()=>{d(!1)},1e4);return()=>{clearTimeout(t),clearTimeout(l)}},[r]);const y=async()=>{if(!n.trim()||u)return;const t=n,l={role:"user",text:t};i(s=>[...s,l]),m(""),g(!0);const j=`
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
${x.map(s=>`- ${s.name}: ${s.description} (Pins: ${s.pins})`).join(`
`)}

HARDWARE BOARDS:
${Object.values(w).map(s=>`- ${s.name}: ${s.description} (Architecture: ${s.specs?.Architecture}, Power: ${s.specs?.Operating_Voltage})`).join(`
`)}
        `.trim()}

USER QUESTION:
${t}
`;try{const s=await R(j,"Nexus AI Technical Engine");i(h=>[...h,{role:"bot",text:s}])}catch(s){console.error("Nexus AI Error:",s),i(h=>[...h,{role:"bot",text:"I encountered a signal interference while processing your request. Please ensure your project parameters are correct or try again in a moment. (Error: "+s.message+")"}])}finally{g(!1)}};return e.jsxs("div",{className:"ai-assistant-wrapper",style:{position:"fixed",bottom:"2rem",right:"2rem",zIndex:1e3},children:[e.jsx(b,{children:r&&e.jsxs(f.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.95},className:"glass-plus",style:{width:"380px",height:"600px",borderRadius:"2rem",display:"flex",flexDirection:"column",marginBottom:"1.5rem",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"1.75rem",background:"var(--primary-gradient)",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[e.jsx("div",{style:{background:"rgba(255,255,255,0.2)",padding:"0.6rem",borderRadius:"14px"},children:e.jsx(S,{size:24})}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:800,fontSize:"1.1rem",letterSpacing:"-0.02em"},children:"Nexus AI"}),e.jsx("div",{style:{fontSize:"0.75rem",opacity:.9,fontWeight:500},children:"Senior IoT Architect"})]})]}),e.jsx(v,{size:20,style:{cursor:"pointer",opacity:.8},onClick:()=>a(!1)})]}),e.jsxs("div",{style:{flex:1,padding:"1.5rem",overflowY:"auto",display:"flex",flexDirection:"column",gap:"1.25rem",background:"rgba(var(--background-rgb), 0.3)"},children:[o.map((t,l)=>e.jsx("div",{style:{alignSelf:t.role==="user"?"flex-end":"flex-start",maxWidth:"85%",padding:"1rem 1.25rem",borderRadius:t.role==="user"?"1.5rem 1.5rem 0.25rem 1.5rem":"1.5rem 1.5rem 1.5rem 0.25rem",background:t.role==="user"?"var(--primary-gradient)":"var(--surface)",color:t.role==="user"?"white":"var(--text)",fontSize:"0.95rem",fontWeight:"500",lineHeight:"1.5",boxShadow:t.role==="bot"?"var(--shadow)":"0 10px 20px rgba(var(--primary-rgb), 0.2)",border:t.role==="bot"?"1px solid var(--border)":"none"},children:t.text},l)),u&&e.jsxs("div",{style:{alignSelf:"flex-start",padding:"1rem 1.25rem",borderRadius:"1.5rem 1.5rem 1.5rem 0.25rem",background:"var(--surface)",color:"var(--text-muted)",fontSize:"0.9rem",fontWeight:"600",display:"flex",gap:"0.5rem",alignItems:"center",border:"1px solid var(--border)",boxShadow:"var(--shadow)"},children:[e.jsx(S,{size:14,className:"spinning-ai"})," Nexus AI is thinking..."]})]}),e.jsxs("div",{style:{padding:"1.25rem",borderTop:"1px solid var(--border)",display:"flex",gap:"0.75rem",background:"var(--surface)"},children:[e.jsx("input",{value:n,onChange:t=>m(t.target.value),onKeyPress:t=>t.key==="Enter"&&y(),placeholder:"Consult the architect...",style:{flex:1,background:"var(--background)",border:"1px solid var(--border)",borderRadius:"1rem",padding:"0.8rem 1.25rem",color:"var(--text)",outline:"none",fontSize:"0.95rem",fontWeight:"500"}}),e.jsx("button",{onClick:y,className:"btn-primary btn-primary-shiny",style:{width:"48px",height:"48px",borderRadius:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(A,{size:20})})]})]})}),e.jsx(b,{children:p&&!r&&e.jsx(f.div,{initial:{opacity:0,x:20,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:20,scale:.8},className:"glass",style:{position:"absolute",bottom:"90px",right:"0",background:"var(--primary-gradient)",color:"white",padding:"1rem 1.5rem",borderRadius:"1.5rem 1.5rem 0.25rem 1.5rem",fontSize:"0.95rem",fontWeight:"700",whiteSpace:"nowrap",boxShadow:"var(--shadow-glow)",pointerEvents:"none",border:"none"},children:"Ready to innovate? 🚀"},"greeting-bubble")}),e.jsx(f.button,{whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>{a(!r),d(!1)},className:"btn-primary-shiny",style:{width:"72px",height:"72px",borderRadius:"24px",background:"var(--primary-gradient)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 15px 30px rgba(var(--primary-rgb), 0.4)",cursor:"pointer",border:"none",position:"relative",zIndex:2},children:r?e.jsx(v,{size:32}):e.jsx(C,{size:32})}),e.jsx("style",{children:`
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
