(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{131:function(e,t,n){"use strict";n.r(t);var r=n(138),a=n.n(r),i=n(0),o=n.n(i),c=n(178),l=n.n(c),s=n(139),u={borderRadius:"50%"};t.default=function(){return o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement(a.a,null,o.a.createElement("title",null,"alexisjanvier.net - about")),o.a.createElement("p",null,o.a.createElement(l.a,{style:u,email:"alexis@marmelab.com",size:100}),"Sensibilisé très tôt à l’informatique grâce au ZX81 de mon père, j’ai pourtant suivi des études de biologie et commencé à travailler dans la médiation scientifique. Mais j’ai découvert en 2002 mon terrain de jeu favori : le web."),o.a.createElement("p",null,"Après un passage par la case freelance, j’ai continué ma carrière comme programmeur Php au sein de plusieurs entreprises, puis comme directeur technique au sein d’une ",o.a.createElement("a",{href:"https://www.plemi.com/"},"startup"),", pour devenir Lead Dev Php en ",o.a.createElement("a",{href:"http://www.rapp.com/"},"agence"),"."),o.a.createElement("p",null,"Aujourd’hui, j’ai le grand plaisir d’exercer mon métier de développeur au sein de ",o.a.createElement("a",{href:"https://marmelab.com/"},"Marmelab"),", depuis Caen où quand ma famille, le travail, la mer et l’équitation me laissent du temps, je participe à l’organisation des ",o.a.createElement("a",{href:"https://www.caencamp.fr"},"CaenCamp"),".")))}},135:function(e,t,n){var r;e.exports=(r=n(141))&&r.default||r},137:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return A}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(134),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(135),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var p=n(29);n.d(t,"parsePath",function(){return p.a});var d=a.a.createContext({}),m=function(e){return a.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function A(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},139:function(e,t,n){"use strict";n(28);var r=n(140),a=n(138),i=n.n(a),o=n(134),c=n.n(o),l=n(0),s=n.n(l),u=n(4),p=n.n(u),d=n(137),m=n(142),A=n.n(m),f=n(143),h=n.n(f);n(144),n(146);var g=function(e){return s.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},s.a.createElement(c.a,{to:e.to},e.children))};g.propTypes={children:p.a.any,to:p.a.string};var y=function(e){var t=e.children,n=e.data,r="https://www.alexisjanvier.net/covers/ajnet.jpg",a=n.site.siteMetadata.title+" "+n.site.siteMetadata.subtitle,o="alexisjanvier.net";return s.a.createElement("div",{style:{margin:"0 auto",maxWidth:1e3,padding:"1.25rem 1rem"}},s.a.createElement(i.a,null,s.a.createElement("title",null,o),s.a.createElement("meta",{name:"description",content:a}),s.a.createElement("meta",{name:"keywords",content:"blog,developpeur,caen,marmelab"}),s.a.createElement("meta",{name:"author",content:n.site.siteMetadata.author}),s.a.createElement("meta",{itemProp:"name",content:o}),s.a.createElement("meta",{itemProp:"description",content:a}),s.a.createElement("meta",{itemProp:"image",content:r}),s.a.createElement("meta",{property:"og:title",content:o}),s.a.createElement("meta",{property:"og:description",content:a}),s.a.createElement("meta",{property:"og:image",content:r}),s.a.createElement("meta",{property:"og:url",content:"https://www.alexisjanvier.net"}),s.a.createElement("meta",{property:"og:site_name",content:"alexisjanvier.net"}),s.a.createElement("meta",{name:"twitter:title",content:o}),s.a.createElement("meta",{name:"twitter:description",content:a}),s.a.createElement("meta",{name:"twitter:image",content:r}),s.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{name:"twitter:image:alt",content:o}),s.a.createElement("meta",{name:"twitter:creator",content:"@alexisjanvier"}),s.a.createElement("meta",{name:"twitter:site",content:"@alexisjanvier"})),s.a.createElement("header",{style:{marginBottom:"1.5rem"}},s.a.createElement(c.a,{to:"/"},s.a.createElement("h3",null,n.site.siteMetadata.title),s.a.createElement("h5",null,n.site.siteMetadata.subtitle)),s.a.createElement("ul",{style:{listStyle:"none",float:"right"}},s.a.createElement(g,{to:"/"},"Blog"),s.a.createElement(g,{to:"/about/"},"About"),s.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},s.a.createElement("a",{href:"https://twitter.com/"+n.site.siteMetadata.twitter},s.a.createElement("img",{src:A.a}))),s.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},s.a.createElement("a",{href:"https://github.com//"+n.site.siteMetadata.github},s.a.createElement("img",{src:h.a}))))),t)};y.propTypes={children:p.a.any,data:p.a.any};t.a=function(e){return s.a.createElement(d.StaticQuery,{query:"3374238697",render:function(t){return s.a.createElement("header",null,s.a.createElement(y,Object.assign({data:t},e)))},data:r})}},140:function(e){e.exports={data:{site:{siteMetadata:{title:"This is not 'Nam.",subtitle:"This is web development. There are rules.",twitter:"alexisjanvier",github:"alexisjanvier",author:"Àlexis Janvier"}}}}},141:function(e,t,n){"use strict";n.r(t);n(28);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(48),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},142:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAjcAAAI3AfcGRMIAAAAHdElNRQfhCQEKGCQX757NAAACjElEQVRIx62VX0hTURzHP/e6NRkYLREcrLeCfFDBGL4UiWGJL+sP9FLkQ4FR7MGHhHTe251OqRBJX6qXIBDCelCQIAYS9CSVBCsHFT3EaIIxs8HYmnp72N28/zYn+Hs653fO93Pv7/x+5/wEFatNu9Y71QBNePECSZLEhXnPYjBn3SuYAWPevMQV6my4aWac4cFkBYBSS4h+3JS3DJOMyllbgNLIHO3sbkucl1ctgJHm7df4qpADJMSe4ZgBoDTyvmo5QAJ/4S9ELfa5PcnBx5xSWwIQqhj7Jo+Fy5wRBvgBQIy/QDshLYQxb/67dvKPOEWbSZ7inPyhMHxQl72lRnHzrpAR59HBpAh5qZS4Wbr4aALcLsphIC3d5w+XeAOAOy+BMOVKrZXK5oicmHalJAZwaJ4N2YOp1sIB9ZW2nj7cIK536qruJARz8pDYxlM2APhslo+cUGdL+Lr1TlEN6FZ7X9YADMfkPhqFs/SzYD7RbT8HdmZqwEGTbjUWv8GTwlDOEiVqk5MWw6zJgVc3fSEt71oBrYaZVzQAru8qF2g2A/TWp1ysrB89br7oIvr7XcNzZWK8oTxgK2JyJI0AyPDw7lo5udLNBSsgbnA08AzBXj7tYsrijIvCvMnVrSyH7yg2dzM1yDHLmc6LnkXSJm+r2oJo3qqEkCzMtGfREcwpM9wE4Be/WeELC/In477x+n8T9NpENRPMOcAZzl/DDRxklkn5p+nLh7jKPept5BlnWHvSlFGGNOcmUVaEb3xVt/Dh4zRdOMskJSKHioBa3lb1HuttiQ45u1+PKsirYg+J6uViT7EzlNI1HMPPUpU/7y92BfT5llfpIEKmojhDhI6dvrTfzbVoe2nv/wH5+trdc83aGwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wOS0wMVQxMDoyNDozNiswMjowMORVb1wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDktMDFUMTA6MjQ6MzYrMDI6MDCVCNfgAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAA10RVh0VGl0bGUAVHdpdHRlcpMAsEgAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII="},143:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAjcAAAI3AfcGRMIAAAAHdElNRQfhCQEKFycJftO4AAAC2ElEQVRIx62VTUhUURTHf/c10/hJ+VH6wtqVWhi0qHEhItIiKhzbtCncRFSLWQhRJubrjTqLXAjZoqKPlVA7B0JXCUIIOqiLIkcNizRGEfxoBptpdF6LefPmOTM5Cp3NOx/3/7/3nHfPPUIjVXptq/Wag0pkZMCPnynhKRhyhlPXimQCtxxp5xr5aXgD9Fldrf4dCNQs2mgmh3/LBj10KqG0BGop/djZWZYpZoxGZTHukOJKRxVe7CyTi4O3bKTZ+zV25TAj2PF2VCWdQC3FSxkwrVQAPM7/7RRLzO2bs6yFiigWR7Vx5TuA+pIbwAJnY6ew6Ln3U2be7l4At2GsM8eYseO0BlBGv1qnhOIptGXMPSFR/WunTa+BW6bZCE9mwmuvmNfVZrcMEkTajR8XsrRkIlDWxANdzYm0g3hiW1k2rs0L5VbmHHptK8FY7QgUHpJW6023bj4zHJxhvuhq/mq9pDlMsbVdFtK4JZpDojLhF7m7JMgztEoJ2VThwj0TyBZkQCPICjMs7ZLgJ0EKKMGCHO+FLbKpoEE9kRmtXmCdTfbHLqF4NMNxU/QH9kSnpYWfY4Aiw5yV2P5AHGPCdWnH3T+Y4OC3MEWtbgQZ5DKy9l79iEcajM4qfwxglnQm6uAKySlOScKTqK0YphofUEN39DPXE+vEjegI91PgCI9UMEQgbmrd0pbUxCwAXuVNYqH2HF+ajAIFQ5IzTJ/hyI6+s36lDid3qEVTs0C9C2qOssl4GoI+Z9gCVlekyejHU+FnttstT3XrJBPkAdUM8SsFvmF1gQStfnpM7qvhb6pP9bluAqd1Xw0kEjWkp9Uff5E6GTUFDlBOuVYEokT3HOm1kTxARukEnUAJ0chCaoqaiGsrgqxtoQUaY9PBmAsdVdGBbQ/rOsMcZJDzTNJAIcVmuHTx4Sf9R+5xsMQOn26wgLJIHV1pRsq2ytNFnblb/u9wjctexvtf2qD0QeZRdFEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDktMDFUMTA6MjM6MzkrMDI6MDDwwQTMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA5LTAxVDEwOjIzOjM5KzAyOjAwgZy8cAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAMdEVYdFRpdGxlAEdpdEh1YlTKy1sAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII="},144:function(e,t,n){},153:function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},178:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=u(n(0)),o=u(n(179)),c=u(n(182)),l=u(n(184)),s=u(n(4));function u(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"render",value:function(){var e=this.props.protocol+"www.gravatar.com/avatar/",t=c.default.stringify({s:this.props.size,r:this.props.rating,d:this.props.default}),n=c.default.stringify({s:2*this.props.size,r:this.props.rating,d:this.props.default}),a=(""+this.props.email).trim().toLowerCase(),s=void 0;if(this.props.md5)s=this.props.md5;else{if("string"!=typeof this.props.email)return console.warn('Gravatar image can not be fetched. Either the "email" or "md5" prop must be specified.'),i.default.createElement("script",null);s=(0,o.default)(a,{encoding:"binary"})}var u=""+e+s+"?"+t,p=""+e+s+"?"+n,d=!0;"undefined"!=typeof window&&(d="srcset"in document.createElement("img"));var m="react-gravatar";this.props.className&&(m=m+" "+this.props.className);var A=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(this.props,[]);return delete A.md5,delete A.email,delete A.protocol,delete A.rating,delete A.size,delete A.style,delete A.className,delete A.default,!d&&(0,l.default)()?i.default.createElement("img",r({alt:"Gravatar for "+a,style:this.props.style,src:p,height:this.props.size,width:this.props.size},A,{className:m})):i.default.createElement("img",r({alt:"Gravatar for "+a,style:this.props.style,src:u,srcSet:p+" 2x",height:this.props.size,width:this.props.size},A,{className:m}))}}]),t}();p.displayName="Gravatar",p.propTypes={email:s.default.string,md5:s.default.string,size:s.default.number,rating:s.default.string,default:s.default.string,className:s.default.string,protocol:s.default.string,style:s.default.object},p.defaultProps={size:50,rating:"g",default:"retro",protocol:"//"},e.exports=p},179:function(e,t,n){var r,a,i,o,c;r=n(180),a=n(153).utf8,i=n(181),o=n(153).bin,(c=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?o.stringToBytes(e):a.stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var n=r.bytesToWords(e),l=8*e.length,s=1732584193,u=-271733879,p=-1732584194,d=271733878,m=0;m<n.length;m++)n[m]=16711935&(n[m]<<8|n[m]>>>24)|4278255360&(n[m]<<24|n[m]>>>8);n[l>>>5]|=128<<l%32,n[14+(l+64>>>9<<4)]=l;var A=c._ff,f=c._gg,h=c._hh,g=c._ii;for(m=0;m<n.length;m+=16){var y=s,E=u,v=p,b=d;s=A(s,u,p,d,n[m+0],7,-680876936),d=A(d,s,u,p,n[m+1],12,-389564586),p=A(p,d,s,u,n[m+2],17,606105819),u=A(u,p,d,s,n[m+3],22,-1044525330),s=A(s,u,p,d,n[m+4],7,-176418897),d=A(d,s,u,p,n[m+5],12,1200080426),p=A(p,d,s,u,n[m+6],17,-1473231341),u=A(u,p,d,s,n[m+7],22,-45705983),s=A(s,u,p,d,n[m+8],7,1770035416),d=A(d,s,u,p,n[m+9],12,-1958414417),p=A(p,d,s,u,n[m+10],17,-42063),u=A(u,p,d,s,n[m+11],22,-1990404162),s=A(s,u,p,d,n[m+12],7,1804603682),d=A(d,s,u,p,n[m+13],12,-40341101),p=A(p,d,s,u,n[m+14],17,-1502002290),s=f(s,u=A(u,p,d,s,n[m+15],22,1236535329),p,d,n[m+1],5,-165796510),d=f(d,s,u,p,n[m+6],9,-1069501632),p=f(p,d,s,u,n[m+11],14,643717713),u=f(u,p,d,s,n[m+0],20,-373897302),s=f(s,u,p,d,n[m+5],5,-701558691),d=f(d,s,u,p,n[m+10],9,38016083),p=f(p,d,s,u,n[m+15],14,-660478335),u=f(u,p,d,s,n[m+4],20,-405537848),s=f(s,u,p,d,n[m+9],5,568446438),d=f(d,s,u,p,n[m+14],9,-1019803690),p=f(p,d,s,u,n[m+3],14,-187363961),u=f(u,p,d,s,n[m+8],20,1163531501),s=f(s,u,p,d,n[m+13],5,-1444681467),d=f(d,s,u,p,n[m+2],9,-51403784),p=f(p,d,s,u,n[m+7],14,1735328473),s=h(s,u=f(u,p,d,s,n[m+12],20,-1926607734),p,d,n[m+5],4,-378558),d=h(d,s,u,p,n[m+8],11,-2022574463),p=h(p,d,s,u,n[m+11],16,1839030562),u=h(u,p,d,s,n[m+14],23,-35309556),s=h(s,u,p,d,n[m+1],4,-1530992060),d=h(d,s,u,p,n[m+4],11,1272893353),p=h(p,d,s,u,n[m+7],16,-155497632),u=h(u,p,d,s,n[m+10],23,-1094730640),s=h(s,u,p,d,n[m+13],4,681279174),d=h(d,s,u,p,n[m+0],11,-358537222),p=h(p,d,s,u,n[m+3],16,-722521979),u=h(u,p,d,s,n[m+6],23,76029189),s=h(s,u,p,d,n[m+9],4,-640364487),d=h(d,s,u,p,n[m+12],11,-421815835),p=h(p,d,s,u,n[m+15],16,530742520),s=g(s,u=h(u,p,d,s,n[m+2],23,-995338651),p,d,n[m+0],6,-198630844),d=g(d,s,u,p,n[m+7],10,1126891415),p=g(p,d,s,u,n[m+14],15,-1416354905),u=g(u,p,d,s,n[m+5],21,-57434055),s=g(s,u,p,d,n[m+12],6,1700485571),d=g(d,s,u,p,n[m+3],10,-1894986606),p=g(p,d,s,u,n[m+10],15,-1051523),u=g(u,p,d,s,n[m+1],21,-2054922799),s=g(s,u,p,d,n[m+8],6,1873313359),d=g(d,s,u,p,n[m+15],10,-30611744),p=g(p,d,s,u,n[m+6],15,-1560198380),u=g(u,p,d,s,n[m+13],21,1309151649),s=g(s,u,p,d,n[m+4],6,-145523070),d=g(d,s,u,p,n[m+11],10,-1120210379),p=g(p,d,s,u,n[m+2],15,718787259),u=g(u,p,d,s,n[m+9],21,-343485551),s=s+y>>>0,u=u+E>>>0,p=p+v>>>0,d=d+b>>>0}return r.endian([s,u,p,d])})._ff=function(e,t,n,r,a,i,o){var c=e+(t&n|~t&r)+(a>>>0)+o;return(c<<i|c>>>32-i)+t},c._gg=function(e,t,n,r,a,i,o){var c=e+(t&r|n&~r)+(a>>>0)+o;return(c<<i|c>>>32-i)+t},c._hh=function(e,t,n,r,a,i,o){var c=e+(t^n^r)+(a>>>0)+o;return(c<<i|c>>>32-i)+t},c._ii=function(e,t,n,r,a,i,o){var c=e+(n^(t|~r))+(a>>>0)+o;return(c<<i|c>>>32-i)+t},c._blocksize=16,c._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(c(e,t));return t&&t.asBytes?n:t&&t.asString?o.bytesToString(n):r.bytesToHex(n)}},180:function(e,t){var n,r;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,r=0;n<e.length;n++,r+=8)t[r>>>5]|=e[n]<<24-r%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],r=0;r<e.length;r+=3)for(var a=e[r]<<16|e[r+1]<<8|e[r+2],i=0;i<4;i++)8*r+6*i<=8*e.length?t.push(n.charAt(a>>>6*(3-i)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],r=0,a=0;r<e.length;a=++r%4)0!=a&&t.push((n.indexOf(e.charAt(r-1))&Math.pow(2,-2*a+8)-1)<<2*a|n.indexOf(e.charAt(r))>>>6-2*a);return t}},e.exports=r},181:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},182:function(e,t,n){"use strict";var r=n(183),a=n(47);function i(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),n(decodeURIComponent(a),i,r)}),Object.keys(r).sort().reduce(function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(n):e[t]=n,e},Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[i(t,e),"[",r,"]"].join(""):[i(t,e),"[",i(r,e),"]=",i(n,e)].join("")};case"bracket":return function(t,n){return null===n?i(t,e):[i(t,e),"[]=",i(n,e)].join("")};default:return function(t,n){return null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map(function(r){var a=e[r];if(void 0===a)return"";if(null===a)return i(r,t);if(Array.isArray(a)){var o=[];return a.slice().forEach(function(e){void 0!==e&&o.push(n(r,e,o.length))}),o.join("&")}return i(r,t)+"="+i(a,t)}).filter(function(e){return e.length>0}).join("&"):""}},183:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},184:function(e,t){e.exports=function(){if("undefined"!=typeof window&&null!==window){if("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)",window.devicePixelRatio>1.25)return!0;if(window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)").matches)return!0}return!1}}}]);
//# sourceMappingURL=component---src-pages-about-js-0636d9226998007d528b.js.map