(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{135:function(e,t,r){"use strict";r.r(t);var n=r(142),a=r.n(n),i=r(0),o=r.n(i),c=r(181),s=r.n(c),u=r(143),l={borderRadius:"50%"};t.default=function(){return o.a.createElement(u.a,null,o.a.createElement("div",null,o.a.createElement(a.a,null,o.a.createElement("title",null,"alexisjanvier.net - about")),o.a.createElement("p",null,o.a.createElement(s.a,{style:l,email:"alexis@marmelab.com",size:100}),"Sensibilisé très tôt à l’informatique grâce au ZX81 de mon père, j’ai pourtant suivi des études de biologie et commencé à travailler dans la médiation scientifique. Mais j’ai découvert en 2002 mon terrain de jeu favori : le web."),o.a.createElement("p",null,"Après un passage par la case freelance, j’ai continué ma carrière comme programmeur Php au sein de plusieurs entreprises, puis comme directeur technique au sein d’une ",o.a.createElement("a",{href:"https://www.plemi.com/"},"startup"),", pour devenir Lead Dev Php en ",o.a.createElement("a",{href:"http://www.rapp.com/"},"agence"),"."),o.a.createElement("p",null,"Aujourd’hui, j’ai le grand plaisir d’exercer mon métier de développeur au sein de ",o.a.createElement("a",{href:"https://marmelab.com/"},"Marmelab"),", depuis Caen où quand ma famille, le travail, la mer et l’équitation me laissent du temps, je participe à l’organisation des ",o.a.createElement("a",{href:"https://www.caencamp.fr"},"CaenCamp"),".")))}},139:function(e,t,r){var n;e.exports=(n=r(145))&&n.default||n},141:function(e,t,r){"use strict";r.r(t),r.d(t,"graphql",function(){return f}),r.d(t,"StaticQueryContext",function(){return A}),r.d(t,"StaticQuery",function(){return p});var n=r(0),a=r.n(n),i=r(4),o=r.n(i),c=r(138),s=r.n(c);r.d(t,"Link",function(){return s.a}),r.d(t,"withPrefix",function(){return c.withPrefix}),r.d(t,"navigate",function(){return c.navigate}),r.d(t,"push",function(){return c.push}),r.d(t,"replace",function(){return c.replace}),r.d(t,"navigateTo",function(){return c.navigateTo});var u=r(139),l=r.n(u);r.d(t,"PageRenderer",function(){return l.a});var d=r(35);r.d(t,"parsePath",function(){return d.a});var A=a.a.createContext({}),p=function(e){return a.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,r){"use strict";r(34);var n=r(144),a=r(142),i=r.n(a),o=r(138),c=r.n(o),s=r(0),u=r.n(s),l=r(4),d=r.n(l),A=r(141),p=r(146),f=r.n(p),m=r(147),h=r.n(m);r(148),r(150);var g=function(e){return u.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},u.a.createElement(c.a,{to:e.to},e.children))},y=function(e){var t=e.children,r=e.data;return u.a.createElement("div",{style:{margin:"0 auto",maxWidth:1e3,padding:"1.25rem 1rem"}},u.a.createElement(i.a,null,u.a.createElement("title",null,"alexisjanvier.net"),u.a.createElement("meta",{name:"description",content:r.site.siteMetadata.title+" "+r.site.siteMetadata.subtitle}),u.a.createElement("meta",{name:"keywords",content:"blog,developpeur,caen,marmelab,javascript,ddd,devops,graphql"}),u.a.createElement("meta",{name:"author",content:r.site.siteMetadata.author})),u.a.createElement("header",{style:{marginBottom:"1.5rem"}},u.a.createElement(c.a,{to:"/"},u.a.createElement("h3",null,r.site.siteMetadata.title),u.a.createElement("h5",null,r.site.siteMetadata.subtitle)),u.a.createElement("ul",{style:{listStyle:"none",float:"right"}},u.a.createElement(g,{to:"/"},"Blog"),u.a.createElement(g,{to:"/about/"},"About"),u.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},u.a.createElement("a",{href:"https://twitter.com/"+r.site.siteMetadata.twitter},u.a.createElement("img",{src:f.a}))),u.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},u.a.createElement("a",{href:"https://github.com//"+r.site.siteMetadata.github},u.a.createElement("img",{src:h.a}))))),t)};y.propTypes={children:d.a.any};t.a=function(e){return u.a.createElement(A.StaticQuery,{query:"3374238697",render:function(t){return u.a.createElement("header",null,u.a.createElement(y,Object.assign({data:t},e)))},data:n})}},144:function(e){e.exports={data:{site:{siteMetadata:{title:"This is not 'Nam.",subtitle:"This is my blog. There are rules.",twitter:"alexisjanvier",github:"alexisjanvier",author:"Àlexis Janvier"}}}}},145:function(e,t,r){"use strict";r.r(t);r(34);var n=r(0),a=r.n(n),i=r(4),o=r.n(i),c=r(49),s=r(2),u=function(e){var t=e.location,r=s.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:r},r.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},146:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAjcAAAI3AfcGRMIAAAAHdElNRQfhCQEKGCQX757NAAACjElEQVRIx62VX0hTURzHP/e6NRkYLREcrLeCfFDBGL4UiWGJL+sP9FLkQ4FR7MGHhHTe251OqRBJX6qXIBDCelCQIAYS9CSVBCsHFT3EaIIxs8HYmnp72N28/zYn+Hs653fO93Pv7/x+5/wEFatNu9Y71QBNePECSZLEhXnPYjBn3SuYAWPevMQV6my4aWac4cFkBYBSS4h+3JS3DJOMyllbgNLIHO3sbkucl1ctgJHm7df4qpADJMSe4ZgBoDTyvmo5QAJ/4S9ELfa5PcnBx5xSWwIQqhj7Jo+Fy5wRBvgBQIy/QDshLYQxb/67dvKPOEWbSZ7inPyhMHxQl72lRnHzrpAR59HBpAh5qZS4Wbr4aALcLsphIC3d5w+XeAOAOy+BMOVKrZXK5oicmHalJAZwaJ4N2YOp1sIB9ZW2nj7cIK536qruJARz8pDYxlM2APhslo+cUGdL+Lr1TlEN6FZ7X9YADMfkPhqFs/SzYD7RbT8HdmZqwEGTbjUWv8GTwlDOEiVqk5MWw6zJgVc3fSEt71oBrYaZVzQAru8qF2g2A/TWp1ysrB89br7oIvr7XcNzZWK8oTxgK2JyJI0AyPDw7lo5udLNBSsgbnA08AzBXj7tYsrijIvCvMnVrSyH7yg2dzM1yDHLmc6LnkXSJm+r2oJo3qqEkCzMtGfREcwpM9wE4Be/WeELC/In477x+n8T9NpENRPMOcAZzl/DDRxklkn5p+nLh7jKPept5BlnWHvSlFGGNOcmUVaEb3xVt/Dh4zRdOMskJSKHioBa3lb1HuttiQ45u1+PKsirYg+J6uViT7EzlNI1HMPPUpU/7y92BfT5llfpIEKmojhDhI6dvrTfzbVoe2nv/wH5+trdc83aGwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wOS0wMVQxMDoyNDozNiswMjowMORVb1wAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDktMDFUMTA6MjQ6MzYrMDI6MDCVCNfgAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAA10RVh0VGl0bGUAVHdpdHRlcpMAsEgAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII="},147:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAjcAAAI3AfcGRMIAAAAHdElNRQfhCQEKFycJftO4AAAC2ElEQVRIx62VTUhUURTHf/c10/hJ+VH6wtqVWhi0qHEhItIiKhzbtCncRFSLWQhRJubrjTqLXAjZoqKPlVA7B0JXCUIIOqiLIkcNizRGEfxoBptpdF6LefPmOTM5Cp3NOx/3/7/3nHfPPUIjVXptq/Wag0pkZMCPnynhKRhyhlPXimQCtxxp5xr5aXgD9Fldrf4dCNQs2mgmh3/LBj10KqG0BGop/djZWZYpZoxGZTHukOJKRxVe7CyTi4O3bKTZ+zV25TAj2PF2VCWdQC3FSxkwrVQAPM7/7RRLzO2bs6yFiigWR7Vx5TuA+pIbwAJnY6ew6Ln3U2be7l4At2GsM8eYseO0BlBGv1qnhOIptGXMPSFR/WunTa+BW6bZCE9mwmuvmNfVZrcMEkTajR8XsrRkIlDWxANdzYm0g3hiW1k2rs0L5VbmHHptK8FY7QgUHpJW6023bj4zHJxhvuhq/mq9pDlMsbVdFtK4JZpDojLhF7m7JMgztEoJ2VThwj0TyBZkQCPICjMs7ZLgJ0EKKMGCHO+FLbKpoEE9kRmtXmCdTfbHLqF4NMNxU/QH9kSnpYWfY4Aiw5yV2P5AHGPCdWnH3T+Y4OC3MEWtbgQZ5DKy9l79iEcajM4qfwxglnQm6uAKySlOScKTqK0YphofUEN39DPXE+vEjegI91PgCI9UMEQgbmrd0pbUxCwAXuVNYqH2HF+ajAIFQ5IzTJ/hyI6+s36lDid3qEVTs0C9C2qOssl4GoI+Z9gCVlekyejHU+FnttstT3XrJBPkAdUM8SsFvmF1gQStfnpM7qvhb6pP9bluAqd1Xw0kEjWkp9Uff5E6GTUFDlBOuVYEokT3HOm1kTxARukEnUAJ0chCaoqaiGsrgqxtoQUaY9PBmAsdVdGBbQ/rOsMcZJDzTNJAIcVmuHTx4Sf9R+5xsMQOn26wgLJIHV1pRsq2ytNFnblb/u9wjctexvtf2qD0QeZRdFEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDktMDFUMTA6MjM6MzkrMDI6MDDwwQTMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA5LTAxVDEwOjIzOjM5KzAyOjAwgZy8cAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAMdEVYdFRpdGxlAEdpdEh1YlTKy1sAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII="},148:function(e,t,r){},157:function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},181:function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=l(r(0)),o=l(r(182)),c=l(r(185)),s=l(r(187)),u=l(r(4));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),a(t,[{key:"render",value:function(){var e=this.props.protocol+"www.gravatar.com/avatar/",t=c.default.stringify({s:this.props.size,r:this.props.rating,d:this.props.default}),r=c.default.stringify({s:2*this.props.size,r:this.props.rating,d:this.props.default}),a=(""+this.props.email).trim().toLowerCase(),u=void 0;if(this.props.md5)u=this.props.md5;else{if("string"!=typeof this.props.email)return console.warn('Gravatar image can not be fetched. Either the "email" or "md5" prop must be specified.'),i.default.createElement("script",null);u=(0,o.default)(a,{encoding:"binary"})}var l=""+e+u+"?"+t,d=""+e+u+"?"+r,A=!0;"undefined"!=typeof window&&(A="srcset"in document.createElement("img"));var p="react-gravatar";this.props.className&&(p=p+" "+this.props.className);var f=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(this.props,[]);return delete f.md5,delete f.email,delete f.protocol,delete f.rating,delete f.size,delete f.style,delete f.className,delete f.default,!A&&(0,s.default)()?i.default.createElement("img",n({alt:"Gravatar for "+a,style:this.props.style,src:d,height:this.props.size,width:this.props.size},f,{className:p})):i.default.createElement("img",n({alt:"Gravatar for "+a,style:this.props.style,src:l,srcSet:d+" 2x",height:this.props.size,width:this.props.size},f,{className:p}))}}]),t}();d.displayName="Gravatar",d.propTypes={email:u.default.string,md5:u.default.string,size:u.default.number,rating:u.default.string,default:u.default.string,className:u.default.string,protocol:u.default.string,style:u.default.object},d.defaultProps={size:50,rating:"g",default:"retro",protocol:"//"},e.exports=d},182:function(e,t,r){var n,a,i,o,c;n=r(183),a=r(157).utf8,i=r(184),o=r(157).bin,(c=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?o.stringToBytes(e):a.stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var r=n.bytesToWords(e),s=8*e.length,u=1732584193,l=-271733879,d=-1732584194,A=271733878,p=0;p<r.length;p++)r[p]=16711935&(r[p]<<8|r[p]>>>24)|4278255360&(r[p]<<24|r[p]>>>8);r[s>>>5]|=128<<s%32,r[14+(s+64>>>9<<4)]=s;var f=c._ff,m=c._gg,h=c._hh,g=c._ii;for(p=0;p<r.length;p+=16){var y=u,b=l,v=d,E=A;u=f(u,l,d,A,r[p+0],7,-680876936),A=f(A,u,l,d,r[p+1],12,-389564586),d=f(d,A,u,l,r[p+2],17,606105819),l=f(l,d,A,u,r[p+3],22,-1044525330),u=f(u,l,d,A,r[p+4],7,-176418897),A=f(A,u,l,d,r[p+5],12,1200080426),d=f(d,A,u,l,r[p+6],17,-1473231341),l=f(l,d,A,u,r[p+7],22,-45705983),u=f(u,l,d,A,r[p+8],7,1770035416),A=f(A,u,l,d,r[p+9],12,-1958414417),d=f(d,A,u,l,r[p+10],17,-42063),l=f(l,d,A,u,r[p+11],22,-1990404162),u=f(u,l,d,A,r[p+12],7,1804603682),A=f(A,u,l,d,r[p+13],12,-40341101),d=f(d,A,u,l,r[p+14],17,-1502002290),u=m(u,l=f(l,d,A,u,r[p+15],22,1236535329),d,A,r[p+1],5,-165796510),A=m(A,u,l,d,r[p+6],9,-1069501632),d=m(d,A,u,l,r[p+11],14,643717713),l=m(l,d,A,u,r[p+0],20,-373897302),u=m(u,l,d,A,r[p+5],5,-701558691),A=m(A,u,l,d,r[p+10],9,38016083),d=m(d,A,u,l,r[p+15],14,-660478335),l=m(l,d,A,u,r[p+4],20,-405537848),u=m(u,l,d,A,r[p+9],5,568446438),A=m(A,u,l,d,r[p+14],9,-1019803690),d=m(d,A,u,l,r[p+3],14,-187363961),l=m(l,d,A,u,r[p+8],20,1163531501),u=m(u,l,d,A,r[p+13],5,-1444681467),A=m(A,u,l,d,r[p+2],9,-51403784),d=m(d,A,u,l,r[p+7],14,1735328473),u=h(u,l=m(l,d,A,u,r[p+12],20,-1926607734),d,A,r[p+5],4,-378558),A=h(A,u,l,d,r[p+8],11,-2022574463),d=h(d,A,u,l,r[p+11],16,1839030562),l=h(l,d,A,u,r[p+14],23,-35309556),u=h(u,l,d,A,r[p+1],4,-1530992060),A=h(A,u,l,d,r[p+4],11,1272893353),d=h(d,A,u,l,r[p+7],16,-155497632),l=h(l,d,A,u,r[p+10],23,-1094730640),u=h(u,l,d,A,r[p+13],4,681279174),A=h(A,u,l,d,r[p+0],11,-358537222),d=h(d,A,u,l,r[p+3],16,-722521979),l=h(l,d,A,u,r[p+6],23,76029189),u=h(u,l,d,A,r[p+9],4,-640364487),A=h(A,u,l,d,r[p+12],11,-421815835),d=h(d,A,u,l,r[p+15],16,530742520),u=g(u,l=h(l,d,A,u,r[p+2],23,-995338651),d,A,r[p+0],6,-198630844),A=g(A,u,l,d,r[p+7],10,1126891415),d=g(d,A,u,l,r[p+14],15,-1416354905),l=g(l,d,A,u,r[p+5],21,-57434055),u=g(u,l,d,A,r[p+12],6,1700485571),A=g(A,u,l,d,r[p+3],10,-1894986606),d=g(d,A,u,l,r[p+10],15,-1051523),l=g(l,d,A,u,r[p+1],21,-2054922799),u=g(u,l,d,A,r[p+8],6,1873313359),A=g(A,u,l,d,r[p+15],10,-30611744),d=g(d,A,u,l,r[p+6],15,-1560198380),l=g(l,d,A,u,r[p+13],21,1309151649),u=g(u,l,d,A,r[p+4],6,-145523070),A=g(A,u,l,d,r[p+11],10,-1120210379),d=g(d,A,u,l,r[p+2],15,718787259),l=g(l,d,A,u,r[p+9],21,-343485551),u=u+y>>>0,l=l+b>>>0,d=d+v>>>0,A=A+E>>>0}return n.endian([u,l,d,A])})._ff=function(e,t,r,n,a,i,o){var c=e+(t&r|~t&n)+(a>>>0)+o;return(c<<i|c>>>32-i)+t},c._gg=function(e,t,r,n,a,i,o){var c=e+(t&n|r&~n)+(a>>>0)+o;return(c<<i|c>>>32-i)+t},c._hh=function(e,t,r,n,a,i,o){var c=e+(t^r^n)+(a>>>0)+o;return(c<<i|c>>>32-i)+t},c._ii=function(e,t,r,n,a,i,o){var c=e+(r^(t|~n))+(a>>>0)+o;return(c<<i|c>>>32-i)+t},c._blocksize=16,c._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var r=n.wordsToBytes(c(e,t));return t&&t.asBytes?r:t&&t.asString?o.bytesToString(r):n.bytesToHex(r)}},183:function(e,t){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var a=e[n]<<16|e[n+1]<<8|e[n+2],i=0;i<4;i++)8*n+6*i<=8*e.length?t.push(r.charAt(a>>>6*(3-i)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,a=0;n<e.length;a=++n%4)0!=a&&t.push((r.indexOf(e.charAt(n-1))&Math.pow(2,-2*a+8)-1)<<2*a|r.indexOf(e.charAt(n))>>>6-2*a);return t}},e.exports=n},184:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},185:function(e,t,r){"use strict";var n=r(186),a=r(48);function i(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=a({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),i=t.length>0?t.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),r(decodeURIComponent(a),i,n)}),Object.keys(n).sort().reduce(function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(r):e[t]=r,e},Object.create(null))):n},t.stringify=function(e,t){var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[i(t,e),"[",n,"]"].join(""):[i(t,e),"[",i(n,e),"]=",i(r,e)].join("")};case"bracket":return function(t,r){return null===r?i(t,e):[i(t,e),"[]=",i(r,e)].join("")};default:return function(t,r){return null===r?i(t,e):[i(t,e),"=",i(r,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map(function(n){var a=e[n];if(void 0===a)return"";if(null===a)return i(n,t);if(Array.isArray(a)){var o=[];return a.slice().forEach(function(e){void 0!==e&&o.push(r(n,e,o.length))}),o.join("&")}return i(n,t)+"="+i(a,t)}).filter(function(e){return e.length>0}).join("&"):""}},186:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},187:function(e,t){e.exports=function(){if("undefined"!=typeof window&&null!==window){if("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)",window.devicePixelRatio>1.25)return!0;if(window.matchMedia&&window.matchMedia("(-webkit-min-device-pixel-ratio: 1.25), (min--moz-device-pixel-ratio: 1.25), (-o-min-device-pixel-ratio: 5/4), (min-resolution: 1.25dppx)").matches)return!0}return!1}}}]);
//# sourceMappingURL=component---src-pages-about-js-447a6fc9c38234f48553.js.map