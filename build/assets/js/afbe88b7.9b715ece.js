"use strict";(self.webpackChunkworldtool_docs=self.webpackChunkworldtool_docs||[]).push([[1991],{7989:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const l={sidebar_position:1},i="Usage",s={unversionedId:"shape-generation-tool/usage",id:"shape-generation-tool/usage",title:"Usage",description:"The Shape Generation Tool is used for generating 3D structures with one position as a base. Its menu can be opened by either dropping the tool or right-clicking on a block.",source:"@site/docs/shape-generation-tool/usage.md",sourceDirName:"shape-generation-tool",slug:"/shape-generation-tool/usage",permalink:"/worldtool-docs/docs/shape-generation-tool/usage",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Shape Generation Tool",permalink:"/worldtool-docs/docs/category/shape-generation-tool"},next:{title:"Options",permalink:"/worldtool-docs/docs/shape-generation-tool/options"}},r={},p=[{value:"Shape Options",id:"shape-options",level:2},{value:"Replace",id:"replace",level:2},{value:"Keep",id:"keep",level:2},{value:"Select Block",id:"select-block",level:2},{value:"Hollow",id:"hollow",level:2},{value:"Adjust Position",id:"adjust-position",level:2},{value:"Options",id:"options",level:2},{value:"Continuous Mode",id:"continuous-mode",level:2},{value:"Preview",id:"preview",level:2}],h=(d="MCFont",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const c={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The Shape Generation Tool is used for generating 3D structures with one position as a base. Its menu can be opened by either ",(0,a.kt)("strong",{parentName:"p"},"dropping the tool")," or ",(0,a.kt)("strong",{parentName:"p"},"right-clicking on a block"),"."),(0,a.kt)("h1",{id:""}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The default state of the main Shape Generation Tool menu",src:o(6929).Z,width:"1368",height:"615"})),(0,a.kt)("p",null,"The way it looks in the image above is the default state of the menu."),(0,a.kt)("h1",{id:"-1"}),(0,a.kt)("p",null,"To ",(0,a.kt)("strong",{parentName:"p"},"set a position"),", right-click with the tool on a block."),(0,a.kt)("h1",{id:"-2"}),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("a",{parentName:"p",href:"cylinder"},"Cylinder")," shape is selected. To change the selected shape, use the \xad",(0,a.kt)(h,{color:"green",mdxType:"MCFont"},"[Change...]")," button at the top of the menu."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"All set options and shapes are specific to that Shape Generation Tool item. This means you can make multiple tool items with the options and shapes you need. You can give yourself more shape generation tools with ",(0,a.kt)("inlineCode",{parentName:"p"},"/loot give @s loot worldtool:shape_tool"),", or you can use the ",(0,a.kt)("strong",{parentName:"p"},"middle mouse button")," on shape generation tools in the inventory to make copies of them (while in creative mode).")),(0,a.kt)("h2",{id:"shape-options"},"Shape Options"),(0,a.kt)("p",null,"What shape options are available depends on the selected shape."),(0,a.kt)("h1",{id:"-3"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xad",(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"Diameter")," - The diameter of the shape."),(0,a.kt)("li",{parentName:"ul"},"\xad",(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"Length")," - How long the shape is."),(0,a.kt)("li",{parentName:"ul"},"\xad",(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"Precision")," - How precisely to draw the shape. Shapes are drawn in lines, and this option specifies how tightly the lines are drawn. Higher precision is only useful for bigger shapes."),(0,a.kt)("li",{parentName:"ul"},"\xad",(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"Orientation")," - Which direction the shape faces."),(0,a.kt)("li",{parentName:"ul"},"\xad",(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"Degrees")," - How many degrees of a circle to draw."),(0,a.kt)("li",{parentName:"ul"},"\xad",(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"Secondary Degrees")," - How many degrees of another circle to draw."),(0,a.kt)("li",{parentName:"ul"},"\xad",(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"X Rotation")," - How many degrees to rotate this shape around the X axis. Whether this axis or the Z axis is an available option depends on the set Orientation."),(0,a.kt)("li",{parentName:"ul"},"\xad",(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"Y Rotation")," - How many degrees to rotate this shape around the Y axis."),(0,a.kt)("li",{parentName:"ul"},"\xad",(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"Z Rotation")," - How many degrees to rotate this shape around the Z axis. Whether this axis or the X axis is an available option depends on the set Orientation.")),(0,a.kt)("h2",{id:"replace"},"Replace"),(0,a.kt)("p",null,"Clicking the ",(0,a.kt)(h,{color:"#d20aff",mdxType:"MCFont"},"[Replace]")," option button opens a menu that allows you to select either a block to replace (",(0,a.kt)(h,{color:"green",mdxType:"MCFont"},"[Normal]"),") or a block to ",(0,a.kt)("em",{parentName:"p"},"not")," replace (",(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"[Exclude]"),"). Once Replace has been enabled, you can click the button to disable it again."),(0,a.kt)("h2",{id:"keep"},"Keep"),(0,a.kt)("p",null,"The ",(0,a.kt)(h,{color:"#0aad02",mdxType:"MCFont"},"[Keep]")," option allows toggling of whether to replace existing blocks. When this option is enabled, only blocks such as air and water will be replaced."),(0,a.kt)("h2",{id:"select-block"},"Select Block"),(0,a.kt)("p",null,"\xad",(0,a.kt)(h,{color:"green",mdxType:"MCFont"},"[Select New Block...]")," opens a menu whcih allows you to view the currently selected block, as well as select a new one with the ",(0,a.kt)("a",{parentName:"p",href:"../chat-menu-system#block-selection"},"block selection menu"),"."),(0,a.kt)("h2",{id:"hollow"},"Hollow"),(0,a.kt)("p",null,"The ",(0,a.kt)(h,{color:"yellow",mdxType:"MCFont"},"[Hollow]")," option toggles whether the inside of the shape should be left alone or not. If enabled, only the shell of a shape will be generated, which is generally much faster than a filled shape."),(0,a.kt)("h2",{id:"adjust-position"},"Adjust Position"),(0,a.kt)("p",null,"The Adjust Position menu allows you to nudge the set position.",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{alt:"The Adjust Position menu",src:o(3835).Z,width:"370",height:"344"})),(0,a.kt)("p",null,"At the top of the menu, the current position is displayed."),(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"[-X]"),(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"[+X]"),(0,a.kt)("br",null),(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"[-Y]"),(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"[+Y]"),(0,a.kt)("br",null),(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"[-Z]"),(0,a.kt)(h,{color:"gold",mdxType:"MCFont"},"[+Z]"),(0,a.kt)("br",null),"Using these buttons moves the position accordingly.",(0,a.kt)("p",null,"The ",(0,a.kt)(h,{color:"aqua",mdxType:"MCFont"},"<","Set Position",">")," button opens a menu prompt that allows you to manually set the position."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"Main page: ",(0,a.kt)("a",{parentName:"p",href:"options"},"Options"),"."),(0,a.kt)("h2",{id:"continuous-mode"},"Continuous Mode"),(0,a.kt)("p",null,"With the ",(0,a.kt)(h,{color:"light_purple",mdxType:"MCFont"},"[Continuous Mode]")," option at the very bottom of the menu, you can enable similar functionality to the ",(0,a.kt)("a",{parentName:"p",href:"../brush_tool/usage"},"Brush Tool"),", A.K.A generating a shape wherever you right-click with the tool."),(0,a.kt)("h2",{id:"preview"},"Preview"),(0,a.kt)("p",null,"While a position is selected (and ",(0,a.kt)("a",{parentName:"p",href:"options#preview-shape"},"particles are on"),"), particles are shown to help preview how the shape will be generated."),(0,a.kt)("h1",{id:"-4"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An example of a preview",src:o(1098).Z,width:"843",height:"642"})))}u.isMDXComponent=!0},3835:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/adjust_position_menu-1c8c87812eb5a6c560c8ee014b5efcf1.png"},6929:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/main_menu-7e8ea78298bc99114f4221736e36c6e2.png"},1098:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/preview_particles-6cd5258cece3f47085667dd23c02d4da.png"}}]);