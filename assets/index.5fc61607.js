var t=Object.defineProperty,e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(e,r,n)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,o=(t,o)=>{for(var l in o||(o={}))r.call(o,l)&&c(t,l,o[l]);if(e)for(var l of e(o))n.call(o,l)&&c(t,l,o[l]);return t};const l=t=>/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(t)?t.slice(1).toLowerCase():t.replace(/[(?\.?)?]/g,"").replaceAll(",","-"),s=t=>{const{x:e,y:r}=t;return`${e} ${r}`},i=(t,e)=>{const r=document.createElement("svg");return r.setAttribute("width",String(t)),r.setAttribute("height",String(e)),r.setAttribute("xmlns","http://www.w3.org/2000/svg"),r},u=t=>{const e=document.createElement("defs"),{deg:r,rx:n,ry:c,rgr:l,data:i}=t,u=i.map((t=>(t=>{if("number"==typeof t)return t;if(/^\d{1,2}(\.\d{1,2})?%$/.test(t))return 100*Number(t.slice(0,-1))/1e4;return 0})(t.percent)));console.log(o({},u));const b=[{x:0,y:0}];console.log(o({},b));const m=((t,e)=>{const r=[];return t.forEach(((n,c)=>{const o=s(n),l=`${e} ${e}`,i=`M ${o} A ${l} 0 0 1 ${s(t[(c+1)%t.length])} L ${l} Z`;r.push(i)})),r})(b,n);return i.forEach(((t,r)=>{e.appendChild(a(t.color,l)),e.appendChild(p(t.color,m[r]))})),e.appendChild(d(n,c)),e},a=(t,e)=>{const r=document.createElement("radialGradient"),n=l(t);r.setAttribute("id",`rg-${n}`),r.setAttribute("r",e);const c=document.createElement("stop");c.setAttribute("offset","0"),c.setAttribute("stop-color",t);const o=document.createElement("stop");return o.setAttribute("offset","100%"),o.setAttribute("stop-color","white"),r.appendChild(c),r.appendChild(o),r},p=(t,e)=>{const r=document.createElement("clipPath"),n=l(t);r.setAttribute("id",`cut-${n}`);const c=document.createElement("path");return c.setAttribute("d",e),r.appendChild(c),r},d=(t,e)=>{const r=document.createElement("clipPath");r.setAttribute("id","cut-ellipse");const n=document.createElement("ellipse"),c=String(t);return n.setAttribute("cx",c),n.setAttribute("cy",c),n.setAttribute("rx",c),n.setAttribute("ry",String(e)),r.appendChild(n),r},b=(t,e,r)=>{const n=document.createElement("g");return n.setAttribute("clip-path","url(cut-ellipse)"),n.setAttribute("transform",`translate(0, -${r/2})`),t.forEach((t=>{n.appendChild(((t,e)=>{const r=document.createElement("circle"),n=l(t),c=String(e);return r.setAttribute("cx",c),r.setAttribute("cy",c),r.setAttribute("r",c),r.setAttribute("fill",`url(#rg-${n})`),r.setAttribute("clip-path",`url(#cut-${n})`),r})(t,e))})),n},m=(t=>{const{deg:e,rx:r,ry:n,rgr:c,data:o}=t,l=o.map((t=>t.color)),s=u(t),a=b(l,r,n),p=i(r,n);return p.appendChild(s),p.appendChild(a),p})({deg:0,rx:564,ry:253,rgr:"50%",data:[{color:"green",percent:.25},{color:"purple",percent:"37.5%"},{color:"green",percent:.225},{color:"#FF0000",percent:.15}]});document.getElementById("app").appendChild(m);
