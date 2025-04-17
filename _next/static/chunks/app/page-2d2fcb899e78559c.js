(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1412:(e,s,i)=>{Promise.resolve().then(i.bind(i,3302))},3302:(e,s,i)=>{"use strict";i.r(s),i.d(s,{default:()=>b});var t=i(5155),l=i(2115),a=i(6766),n=i(6874),r=i.n(n),o=i(2138),d=i(1264),c=i(4516),m=i(2894),x=i(4624),h=i(2085),g=i(2596),u=i(9688);let p=(0,h.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),f=l.forwardRef((e,s)=>{let{className:i,variant:l,size:a,asChild:n=!1,...r}=e,o=n?x.DX:"button";return(0,t.jsx)(o,{className:function(){for(var e=arguments.length,s=Array(e),i=0;i<e;i++)s[i]=arguments[i];return(0,u.QP)((0,g.$)(s))}(p({variant:l,size:a,className:i})),ref:s,...r})});function b(){let[e,s]=(0,l.useState)({x:-100,y:-100}),[i,n]=(0,l.useState)("");(0,l.useEffect)(()=>{let e=e=>{s({x:e.clientX,y:e.clientY})};window.addEventListener("mousemove",e);let i=()=>{document.querySelectorAll("section[id]").forEach(e=>{let s=e.getBoundingClientRect().top,i=e.getAttribute("id")||"";s<100&&s>-300&&n(i)})};return window.addEventListener("scroll",i),i(),()=>{window.removeEventListener("mousemove",e),window.removeEventListener("scroll",i)}},[]);let x=e=>{let s=document.getElementById(e);s&&s.scrollIntoView({behavior:"smooth"})};return(0,t.jsxs)("div",{className:"relative min-h-screen bg-background",children:[(0,t.jsx)("div",{className:"fixed pointer-events-none z-50 h-8 w-8 rounded-full bg-blue-500/80 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out",style:{left:"".concat(e.x,"px"),top:"".concat(e.y,"px")}}),(0,t.jsx)("header",{className:"fixed top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm",children:(0,t.jsxs)("div",{className:"container flex h-16 items-center",children:[(0,t.jsx)(r(),{href:"/",className:"font-bold text-xl",children:"PORTFOLIO"}),(0,t.jsx)("nav",{className:"hidden md:flex gap-6 mx-auto justify-center",children:[{name:"About Me",id:"about"},{name:"Career",id:"career"},{name:"Education",id:"education"},{name:"Projects",id:"projects"},{name:"Skills",id:"skills"},{name:"Contact",id:"contact"}].map(e=>(0,t.jsx)("button",{onClick:()=>x(e.id),className:"text-sm font-medium transition-colors hover:text-blue-500 ".concat(i===e.id?"text-blue-500":""),children:e.name},e.id))}),(0,t.jsx)("div",{className:"ml-auto",children:(0,t.jsxs)(f,{variant:"outline",size:"icon",className:"md:hidden",children:[(0,t.jsx)("span",{className:"sr-only",children:"Toggle menu"}),(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6",children:[(0,t.jsx)("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),(0,t.jsx)("line",{x1:"4",x2:"20",y1:"6",y2:"6"}),(0,t.jsx)("line",{x1:"4",x2:"20",y1:"18",y2:"18"})]})]})})]})}),(0,t.jsxs)("main",{className:"flex-1 pt-16",children:[(0,t.jsx)("section",{id:"about",className:"w-full py-24 md:py-32",children:(0,t.jsx)("div",{className:"container px-4 md:px-6",children:(0,t.jsxs)("div",{className:"grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]",children:[(0,t.jsxs)("div",{className:"flex flex-col justify-center space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none",children:"Marcos Utrera Tierno"}),(0,t.jsx)("h2",{className:"text-xl font-semibold text-blue-500",children:"Digital Strategist"}),(0,t.jsx)("p",{className:"max-w-[600px] text-muted-foreground md:text-xl",children:"I focus on SEO and digital strategy to help brands grow organically and connect with their ideal audience. Every day, I’m committed to learning and developing new skills to stay ahead in the digital landscape."})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-2 min-[400px]:flex-row",children:[(0,t.jsxs)(f,{className:"group",onClick:()=>x("contact"),children:["Get in Touch",(0,t.jsx)(o.A,{className:"ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"})]}),(0,t.jsx)(f,{variant:"outline",onClick:()=>x("projects"),children:"View Projects"})]})]}),(0,t.jsx)("div",{className:"flex items-center justify-center",children:(0,t.jsx)("div",{className:"relative h-[400px] w-[300px] overflow-hidden rounded-lg border-4 border-blue-500/20",children:(0,t.jsx)(a.default,{src:"/profileimg.jpg",width:300,height:400,alt:"Profile",className:"object-cover",priority:!0})})})]})})}),(0,t.jsx)("section",{id:"career",className:"w-full py-12 md:py-24 bg-muted/30",children:(0,t.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,t.jsx)("div",{className:"flex flex-col items-start space-y-4",children:(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("div",{className:"inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500",children:"Career"}),(0,t.jsx)("h2",{className:"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl",children:"Professional Journey"}),(0,t.jsx)("p",{className:"max-w-[700px] text-muted-foreground md:text-xl/relaxed",children:"My professional path and experiences that have shaped my expertise."})]})}),(0,t.jsx)("div",{className:"mt-8 space-y-8",children:v.map((e,s)=>(0,t.jsx)("div",{className:"group relative overflow-hidden rounded-lg border p-6 transition-all hover:border-blue-500/50",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center gap-4",children:[(0,t.jsxs)("div",{className:"md:w-1/4",children:[(0,t.jsx)("span",{className:"text-sm text-muted-foreground",children:e.period}),(0,t.jsx)("h3",{className:"text-xl font-bold",children:e.company}),(0,t.jsx)("span",{className:"inline-block rounded-full bg-blue-500/10 px-2 py-0.5 text-xs text-blue-500",children:e.location})]}),(0,t.jsxs)("div",{className:"md:w-3/4",children:[(0,t.jsx)("h4",{className:"text-lg font-semibold",children:e.position}),(0,t.jsx)("p",{className:"mt-2 text-muted-foreground",children:e.description}),(0,t.jsx)("div",{className:"mt-3 flex flex-wrap gap-2",children:e.skills.map((e,s)=>(0,t.jsx)("span",{className:"inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium",children:e},s))})]})]})},s))})]})}),(0,t.jsx)("section",{id:"education",className:"w-full py-12 md:py-24",children:(0,t.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,t.jsx)("div",{className:"flex flex-col items-start space-y-4",children:(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("div",{className:"inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500",children:"Education"}),(0,t.jsx)("h2",{className:"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl",children:"Academic Background"}),(0,t.jsx)("p",{className:"max-w-[700px] text-muted-foreground md:text-xl/relaxed",children:"My educational journey and qualifications."})]})}),(0,t.jsx)("div",{className:"mt-8 space-y-8",children:j.map((e,s)=>(0,t.jsx)("div",{className:"group relative overflow-hidden rounded-lg border p-6 transition-all hover:border-blue-500/50",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row md:items-center gap-4",children:[(0,t.jsxs)("div",{className:"md:w-1/4",children:[(0,t.jsx)("span",{className:"text-sm text-muted-foreground",children:e.period}),(0,t.jsx)("h3",{className:"text-xl font-bold",children:e.institution}),(0,t.jsx)("span",{className:"inline-block rounded-full bg-blue-500/10 px-2 py-0.5 text-xs text-blue-500",children:e.location})]}),(0,t.jsxs)("div",{className:"md:w-3/4",children:[(0,t.jsx)("h4",{className:"text-lg font-semibold",children:e.degree}),(0,t.jsx)("p",{className:"mt-2 text-muted-foreground",children:e.description}),e.achievements&&(0,t.jsxs)("div",{className:"mt-3",children:[(0,t.jsx)("h5",{className:"text-sm font-medium",children:"Key Achievements:"}),(0,t.jsx)("ul",{className:"mt-1 list-disc pl-5 text-sm text-muted-foreground",children:e.achievements.map((e,s)=>(0,t.jsx)("li",{children:e},s))})]})]})]})},s))})]})}),(0,t.jsx)("section",{id:"projects",className:"w-full py-12 md:py-24 bg-muted/30",children:(0,t.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,t.jsx)("div",{className:"flex flex-col items-start space-y-4",children:(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("div",{className:"inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500",children:"Projects"}),(0,t.jsx)("h2",{className:"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl",children:"Featured Work"}),(0,t.jsx)("p",{className:"max-w-[700px] text-muted-foreground md:text-xl/relaxed",children:"A selection of my most significant projects and achievements."})]})}),(0,t.jsx)("div",{className:"grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3",children:N.map((e,s)=>(0,t.jsxs)("div",{className:"group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1",children:[(0,t.jsx)(a.default,{src:e.image||"/img/1.jpg",alt:e.title,width:400,height:400,className:"aspect-[4/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"}),(0,t.jsxs)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6",children:[(0,t.jsx)("h3",{className:"text-xl font-bold text-white",children:e.title}),(0,t.jsx)("p",{className:"mt-2 text-white/80",children:e.description}),(0,t.jsx)("div",{className:"mt-4 flex gap-2",children:e.technologies.map((e,s)=>(0,t.jsx)("span",{className:"inline-block rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-medium text-white",children:e},s))})]})]},s))})]})}),(0,t.jsx)("section",{id:"skills",className:"w-full py-12 md:py-24",children:(0,t.jsxs)("div",{className:"container px-4 md:px-6",children:[(0,t.jsx)("div",{className:"flex flex-col items-start space-y-4",children:(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("div",{className:"inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500",children:"Skills"}),(0,t.jsx)("h2",{className:"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl",children:"Technical Expertise"}),(0,t.jsx)("p",{className:"max-w-[700px] text-muted-foreground md:text-xl/relaxed",children:"Tools and technologies I specialize in."})]})}),(0,t.jsxs)("div",{className:"mt-8 space-y-10",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Web & Seo"}),(0,t.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6",children:y.map((e,s)=>(0,t.jsxs)("div",{className:"flex flex-col items-center group",children:[(0,t.jsx)("div",{className:"relative h-20 w-20 mb-2 rounded-lg overflow-hidden border border-muted p-4 flex items-center justify-center group-hover:border-blue-500 transition-colors",children:(0,t.jsx)(a.default,{src:e.logo||"/placeholder.svg?height=80&width=80",alt:e.name,width:80,height:80,className:"object-contain max-h-full"})}),(0,t.jsx)("span",{className:"text-sm font-medium text-center",children:e.name})]},s))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Design"}),(0,t.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6",children:w.map((e,s)=>(0,t.jsxs)("div",{className:"flex flex-col items-center group",children:[(0,t.jsx)("div",{className:"relative h-20 w-20 mb-2 rounded-lg overflow-hidden border border-muted p-4 flex items-center justify-center group-hover:border-blue-500 transition-colors",children:(0,t.jsx)(a.default,{src:e.logo||"/placeholder.svg?height=80&width=80",alt:e.name,width:80,height:80,className:"object-contain max-h-full"})}),(0,t.jsx)("span",{className:"text-sm font-medium text-center",children:e.name})]},s))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Other Tools"}),(0,t.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6",children:k.map((e,s)=>(0,t.jsxs)("div",{className:"flex flex-col items-center group",children:[(0,t.jsx)("div",{className:"relative h-20 w-20 mb-2 rounded-lg overflow-hidden border border-muted p-4 flex items-center justify-center group-hover:border-blue-500 transition-colors",children:(0,t.jsx)(a.default,{src:e.logo||"/placeholder.svg?height=80&width=80",alt:e.name,width:80,height:80,className:"object-contain max-h-full"})}),(0,t.jsx)("span",{className:"text-sm font-medium text-center",children:e.name})]},s))})]})]})]})}),(0,t.jsx)("section",{id:"contact",className:"w-full py-12 md:py-24 bg-muted/30",children:(0,t.jsx)("div",{className:"container px-4 md:px-6",children:(0,t.jsxs)("div",{className:"grid gap-6 lg:grid-cols-2 lg:gap-12",children:[(0,t.jsxs)("div",{className:"flex flex-col justify-center space-y-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("div",{className:"inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500",children:"Contact"}),(0,t.jsx)("h2",{className:"text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl",children:"Get In Touch"}),(0,t.jsx)("p",{className:"max-w-[600px] text-muted-foreground md:text-xl/relaxed",children:"Interested in working together? Feel free to reach out through any of these channels."})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(d.A,{className:"h-5 w-5 text-blue-500"}),(0,t.jsx)("span",{children:"m.utrerabusiness@gmail.com"})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(c.A,{className:"h-5 w-5 text-blue-500"}),(0,t.jsx)("span",{children:"Madrid, Spain"})]}),(0,t.jsx)("div",{className:"flex gap-4 pt-2",children:(0,t.jsxs)(r(),{href:"https://www.linkedin.com/in/marcos-utrera-tierno",target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-blue-500 transition-colors",children:[(0,t.jsx)(m.A,{className:"h-6 w-6"}),(0,t.jsx)("span",{className:"sr-only",children:"LinkedIn"})]})})]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"first-name",children:"First name"}),(0,t.jsx)("input",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",id:"first-name",placeholder:"Nombre"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"last-name",children:"Last name"}),(0,t.jsx)("input",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",id:"last-name",placeholder:"Apellido"})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"email",children:"Email"}),(0,t.jsx)("input",{className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",id:"email",placeholder:"email@example.com",type:"email"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("label",{className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"message",children:"Message"}),(0,t.jsx)("textarea",{className:"flex min-h-[120px] resize-none w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",id:"message",placeholder:"Your message here..."})]}),(0,t.jsx)(f,{className:"w-full bg-blue-500 hover:bg-blue-600",children:"Send Message"})]})]})})})]}),(0,t.jsx)("footer",{className:"w-full border-t py-6",children:(0,t.jsxs)("div",{className:"container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row",children:[(0,t.jsxs)("p",{className:"text-sm text-muted-foreground",children:["\xa9 ",new Date().getFullYear()," Marcos Utrera Tierno. All rights reserved."]}),(0,t.jsxs)("div",{className:"flex gap-4",children:[(0,t.jsx)(r(),{href:"#",className:"text-sm font-medium transition-colors hover:text-blue-500",children:"Terms"}),(0,t.jsx)(r(),{href:"#",className:"text-sm font-medium transition-colors hover:text-blue-500",children:"Privacy"})]})]})})]})}f.displayName="Button";let v=[{period:"03/2025 - Present",company:"Grupo Gestyde",location:"Madrid, Spain",position:"Marketing Intern",description:"As a Marketing and SEO Assistant, I support digital growth through keyword optimization, market research, and front-end website edits. I also manage social media content and contribute to digital strategies that enhance online visibility and engagement",skills:["Canva","Wordpress","Seranking","Chat-Gpt","Slack"]},{period:"03/2023 - 06/2023",company:"Atisa",location:"Madrid, Spain",position:"Human Resources Intern",description:"Responsible for managing payroll incidents, calculating salaries and settlements, and ensuring accuracy in transfers and tax submissions. I handle social security processes, update salary ",skills:["Exel","Siltra","Delt@","Microsoft Teams","Outlook"]}],j=[{period:"2023/2025",institution:"Ilerna",location:"Madrid, Spain",degree:"Higher Vocational Qualification in Marketing and Advertising",description:"In my Marketing and Advertising studies, I have gained skills in business management, market research, and fieldwork. I have worked on product launches, designing communication materials, and marketing policies, as well as selecting the appropriate media and channels. Additionally, I have developed expertise in customer service, digital marketing, public relations, and event organization. My education also includes English, career development, and a comprehensive marketing and advertising project.",achievements:["Received Honorable Mention for Exceptional Customer Service and Communication Skills"]},{period:"2023/2025",institution:"Ilerna",location:"Madrid, Spain",degree:"Higher Vocational Qualification in Business Administration and Finance",description:"In my Business Administration and Finance studies, I have developed skills in customer communication and service, English, and office software. I have gained expertise in the integrated commercial activity process, human resources, and corporate social responsibility. Additionally, I have experience in legal and business document management, logistics and commercial management, and business simulation. My education also covers career development, accounting and taxation, financial management, and a comprehensive business administration and finance project.",achievements:["Recognized for Creative Problem Solving"]}],N=[{title:"Digital Marketing Agency",description:"Currently developing a digital marketing agency project.",image:"/1.jpg?height=300&width=400",technologies:[]},{title:'Magazine Cover: "Watches for Gentlemen"',description:"",image:"/2.jpg?height=300&width=400",technologies:["Canva","Adobe"]},{title:"Poster Cover for Iberia",description:"",image:"/3.jpg?height=300&width=400",technologies:["Canva","Adobe"]},{title:'Press Release: "Friends" for McDonald\'s',description:"",image:"/4.jpg?height=300&width=400",technologies:["Canva","Adobe"]}],y=[{name:"WordPress",logo:"/icons/wordpress.png?height=80&width=80"},{name:"Elementor",logo:"/icons/elementor.png?height=80&width=80"},{name:"Seranking",logo:"/icons/0x0.png?height=80&width=80"},{name:"Semrush",logo:"/icons/semrush.jpg?height=80&width=80"},{name:"YoastSeo",logo:"/icons/yoastseo.png?height=80&width=80"},{name:"Google Analytics",logo:"/icons/googleanalytics.jpg?height=80&width=80"}],w=[{name:"Canva",logo:"/icons/canva.png?height=80&width=80"},{name:"Adobe",logo:"/icons/adobe.png?height=80&width=80"},{name:"Photoshop",logo:"/icons/photoshop.png?height=80&width=80"},{name:"Capcut",logo:"/icons/capcut.png?height=80&width=80"}],k=[{name:"Meta Ads",logo:"/icons/meta.jpg?height=80&width=80"},{name:"Slack",logo:"/icons/slack.png?height=80&width=80"},{name:"Discord",logo:"/icons/discord.png?height=80&width=80"},{name:"Chat-Gpt",logo:"/icons/chatgpt.png?height=80&width=80"},{name:"DeepSeek",logo:"/icons/deepseek.jpg?height=80&width=80"}]}},e=>{var s=s=>e(e.s=s);e.O(0,[915,441,684,358],()=>s(1412)),_N_E=e.O()}]);