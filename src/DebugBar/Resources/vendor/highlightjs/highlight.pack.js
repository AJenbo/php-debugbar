/*!
  Highlight.js v11.9.0 (git: b7ec4bfafc)
  (c) 2006-2023 undefined and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";function e(t){
        return t instanceof Map?t.clear=t.delete=t.set=()=>{
            throw Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=()=>{
            throw Error("set is read-only")
        }),Object.freeze(t),Object.getOwnPropertyNames(t).forEach((n=>{
            const i=t[n],s=typeof i;"object"!==s&&"function"!==s||Object.isFrozen(i)||e(i)
        })),t}class t{constructor(e){
        void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
        ignoreMatch(){this.isMatchIgnored=!0}}function n(e){
        return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
    }function i(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
    ;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const s=e=>!!e.scope
    ;class o{constructor(e,t){
        this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
        this.buffer+=n(e)}openNode(e){if(!s(e))return;const t=((e,{prefix:t})=>{
        if(e.startsWith("language:"))return e.replace("language:","language-")
            ;if(e.includes(".")){const n=e.split(".")
        ;return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")
        }return`${t}${e}`})(e.scope,{prefix:this.classPrefix});this.span(t)}
        closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
            this.buffer+=`<span class="${e}">`}}const r=(e={})=>{const t={children:[]}
    ;return Object.assign(t,e),t};class a{constructor(){
        this.rootNode=r(),this.stack=[this.rootNode]}get top(){
        return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
        this.top.children.push(e)}openNode(e){const t=r({scope:e})
    ;this.add(t),this.stack.push(t)}closeNode(){
        if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
        for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
        walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
            return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
                t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
            "string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
                a._collapse(e)})))}}class c extends a{constructor(e){super(),this.options=e}
        addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){
            this.closeNode()}__addSublanguage(e,t){const n=e.root
        ;t&&(n.scope="language:"+t),this.add(n)}toHTML(){
            return new o(this,this.options).value()}finalize(){
            return this.closeAllNodes(),!0}}function l(e){
        return e?"string"==typeof e?e:e.source:null}function g(e){return h("(?=",e,")")}
        function u(e){return h("(?:",e,")*")}function d(e){return h("(?:",e,")?")}
        function h(...e){return e.map((e=>l(e))).join("")}function f(...e){const t=(e=>{
            const t=e[e.length-1]
            ;return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}
        })(e);return"("+(t.capture?"":"?:")+e.map((e=>l(e))).join("|")+")"}
        function p(e){return RegExp(e.toString()+"|").exec("").length-1}
        const b=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
        ;function m(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n
        ;let i=l(e),s="";for(;i.length>0;){const e=b.exec(i);if(!e){s+=i;break}
            s+=i.substring(0,e.index),
                i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?s+="\\"+(Number(e[1])+t):(s+=e[0],
            "("===e[0]&&n++)}return s})).map((e=>`(${e})`)).join(t)}
        const E="[a-zA-Z]\\w*",x="[a-zA-Z_]\\w*",w="\\b\\d+(\\.\\d+)?",y="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",_="\\b(0b[01]+)",O={
            begin:"\\\\[\\s\\S]",relevance:0},v={scope:"string",begin:"'",end:"'",
            illegal:"\\n",contains:[O]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",
            contains:[O]},N=(e,t,n={})=>{const s=i({scope:"comment",begin:e,end:t,
            contains:[]},n);s.contains.push({scope:"doctag",
            begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
            end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
        ;const o=f("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
        ;return s.contains.push({begin:h(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),s
        },S=N("//","$"),M=N("/\\*","\\*/"),R=N("#","$");var j=Object.freeze({
            __proto__:null,APOS_STRING_MODE:v,BACKSLASH_ESCAPE:O,BINARY_NUMBER_MODE:{
                scope:"number",begin:_,relevance:0},BINARY_NUMBER_RE:_,COMMENT:N,
            C_BLOCK_COMMENT_MODE:M,C_LINE_COMMENT_MODE:S,C_NUMBER_MODE:{scope:"number",
                begin:y,relevance:0},C_NUMBER_RE:y,END_SAME_AS_BEGIN:e=>Object.assign(e,{
                "on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
                    t.data._beginMatch!==e[1]&&t.ignoreMatch()}}),HASH_COMMENT_MODE:R,IDENT_RE:E,
            MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:{begin:"\\.\\s*"+x,relevance:0},
            NUMBER_MODE:{scope:"number",begin:w,relevance:0},NUMBER_RE:w,
            PHRASAL_WORDS_MODE:{
                begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            },QUOTE_STRING_MODE:k,REGEXP_MODE:{scope:"regexp",begin:/\/(?=[^/\n]*\/)/,
                end:/\/[gimuy]*/,contains:[O,{begin:/\[/,end:/\]/,relevance:0,contains:[O]}]},
            RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
            SHEBANG:(e={})=>{const t=/^#![ ]*\//
            ;return e.binary&&(e.begin=h(t,/.*\b/,e.binary,/\b.*/)),i({scope:"meta",begin:t,
                end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},
            TITLE_MODE:{scope:"title",begin:E,relevance:0},UNDERSCORE_IDENT_RE:x,
            UNDERSCORE_TITLE_MODE:{scope:"title",begin:x,relevance:0}});function A(e,t){
            "."===e.input[e.index-1]&&t.ignoreMatch()}function I(e,t){
            void 0!==e.className&&(e.scope=e.className,delete e.className)}function T(e,t){
            t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
                e.__beforeBegin=A,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
            void 0===e.relevance&&(e.relevance=0))}function L(e,t){
            Array.isArray(e.illegal)&&(e.illegal=f(...e.illegal))}function B(e,t){
            if(e.match){
                if(e.begin||e.end)throw Error("begin & end are not supported with match")
                    ;e.begin=e.match,delete e.match}}function P(e,t){
            void 0===e.relevance&&(e.relevance=1)}const D=(e,t)=>{if(!e.beforeMatch)return
                ;if(e.starts)throw Error("beforeMatch cannot be used with starts")
                ;const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]
            })),e.keywords=n.keywords,e.begin=h(n.beforeMatch,g(n.begin)),e.starts={
                relevance:0,contains:[Object.assign(n,{endsParent:!0})]
            },e.relevance=0,delete n.beforeMatch
            },H=["of","and","for","in","not","or","if","then","parent","list","value"],C="keyword"
        ;function $(e,t,n=C){const i=Object.create(null)
        ;return"string"==typeof e?s(n,e.split(" ")):Array.isArray(e)?s(n,e):Object.keys(e).forEach((n=>{
            Object.assign(i,$(e[n],t,n))})),i;function s(e,n){
            t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
            ;i[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,t){
            return t?Number(t):(e=>H.includes(e.toLowerCase()))(e)?0:1}const z={},W=e=>{
            console.error(e)},X=(e,...t)=>{console.log("WARN: "+e,...t)},G=(e,t)=>{
            z[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),z[`${e}/${t}`]=!0)
        },K=Error();function F(e,t,{key:n}){let i=0;const s=e[n],o={},r={}
        ;for(let e=1;e<=t.length;e++)r[e+i]=s[e],o[e+i]=!0,i+=p(t[e-1])
        ;e[n]=r,e[n]._emit=o,e[n]._multi=!0}function Z(e){(e=>{
            e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
                delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
            _wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
        }),(e=>{if(Array.isArray(e.begin)){
            if(e.skip||e.excludeBegin||e.returnBegin)throw W("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
                K
                ;if("object"!=typeof e.beginScope||null===e.beginScope)throw W("beginScope must be object"),
                K;F(e,e.begin,{key:"beginScope"}),e.begin=m(e.begin,{joinWith:""})}})(e),(e=>{
            if(Array.isArray(e.end)){
                if(e.skip||e.excludeEnd||e.returnEnd)throw W("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
                    K
                    ;if("object"!=typeof e.endScope||null===e.endScope)throw W("endScope must be object"),
                    K;F(e,e.end,{key:"endScope"}),e.end=m(e.end,{joinWith:""})}})(e)}function V(e){
            function t(t,n){
                return RegExp(l(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))
            }class n{constructor(){
                this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
                addRule(e,t){
                    t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
                        this.matchAt+=p(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
                ;const e=this.regexes.map((e=>e[1]));this.matcherRe=t(m(e,{joinWith:"|"
                }),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
                ;const t=this.matcherRe.exec(e);if(!t)return null
                    ;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n]
                ;return t.splice(0,n),Object.assign(t,i)}}class s{constructor(){
                this.rules=[],this.multiRegexes=[],
                    this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
                if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n
                ;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
                    t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
                return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
                this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
                const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
                ;let n=t.exec(e)
                ;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
                    const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
                return n&&(this.regexIndex+=n.position+1,
                this.regexIndex===this.count&&this.considerAll()),n}}
            if(e.compilerExtensions||(e.compilerExtensions=[]),
            e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
                ;return e.classNameAliases=i(e.classNameAliases||{}),function n(o,r){const a=o
            ;if(o.isCompiled)return a
                ;[I,B,Z,D].forEach((e=>e(o,r))),e.compilerExtensions.forEach((e=>e(o,r))),
                o.__beforeBegin=null,[T,L,P].forEach((e=>e(o,r))),o.isCompiled=!0;let c=null
            ;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),
                c=o.keywords.$pattern,
                delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=$(o.keywords,e.case_insensitive)),
                a.keywordPatternRe=t(c,!0),
            r&&(o.begin||(o.begin=/\B|\b/),a.beginRe=t(a.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),
            o.end&&(a.endRe=t(a.end)),
                a.terminatorEnd=l(a.end)||"",o.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),
            o.illegal&&(a.illegalRe=t(o.illegal)),
            o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>i(e,{
                variants:null},t)))),e.cachedVariants?e.cachedVariants:q(e)?i(e,{
                starts:e.starts?i(e.starts):null
            }):Object.isFrozen(e)?i(e):e))("self"===e?o:e)))),o.contains.forEach((e=>{n(e,a)
            })),o.starts&&n(o.starts,r),a.matcher=(e=>{const t=new s
            ;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
            }))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
            }),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(a),a}(e)}function q(e){
            return!!e&&(e.endsWithParent||q(e.starts))}class J extends Error{
            constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}
        const Y=n,Q=i,ee=Symbol("nomatch"),te=n=>{
            const i=Object.create(null),s=Object.create(null),o=[];let r=!0
            ;const a="Could not find the language '{}', did you forget to load/include a language module?",l={
                disableAutodetect:!0,name:"Plain text",contains:[]};let p={
                ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
                languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
                cssSelector:"pre code",languages:null,__emitter:c};function b(e){
                return p.noHighlightRe.test(e)}function m(e,t,n){let i="",s=""
            ;"object"==typeof t?(i=e,
                n=t.ignoreIllegals,s=t.language):(G("10.7.0","highlight(lang, code, ...args) has been deprecated."),
                G("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
                s=e,i=t),void 0===n&&(n=!0);const o={code:i,language:s};N("before:highlight",o)
            ;const r=o.result?o.result:E(o.language,o.code,n)
            ;return r.code=o.code,N("after:highlight",r),r}function E(e,n,s,o){
                const c=Object.create(null);function l(){if(!N.keywords)return void M.addText(R)
                    ;let e=0;N.keywordPatternRe.lastIndex=0;let t=N.keywordPatternRe.exec(R),n=""
                ;for(;t;){n+=R.substring(e,t.index)
                ;const s=_.case_insensitive?t[0].toLowerCase():t[0],o=(i=s,N.keywords[i]);if(o){
                    const[e,i]=o
                    ;if(M.addText(n),n="",c[s]=(c[s]||0)+1,c[s]<=7&&(j+=i),e.startsWith("_"))n+=t[0];else{
                        const n=_.classNameAliases[e]||e;u(t[0],n)}}else n+=t[0]
                ;e=N.keywordPatternRe.lastIndex,t=N.keywordPatternRe.exec(R)}var i
                ;n+=R.substring(e),M.addText(n)}function g(){null!=N.subLanguage?(()=>{
                    if(""===R)return;let e=null;if("string"==typeof N.subLanguage){
                        if(!i[N.subLanguage])return void M.addText(R)
                            ;e=E(N.subLanguage,R,!0,S[N.subLanguage]),S[N.subLanguage]=e._top
                    }else e=x(R,N.subLanguage.length?N.subLanguage:null)
                    ;N.relevance>0&&(j+=e.relevance),M.__addSublanguage(e._emitter,e.language)
                })():l(),R=""}function u(e,t){
                    ""!==e&&(M.startScope(t),M.addText(e),M.endScope())}function d(e,t){let n=1
                ;const i=t.length-1;for(;n<=i;){if(!e._emit[n]){n++;continue}
                    const i=_.classNameAliases[e[n]]||e[n],s=t[n];i?u(s,i):(R=s,l(),R=""),n++}}
                function h(e,t){
                    return e.scope&&"string"==typeof e.scope&&M.openNode(_.classNameAliases[e.scope]||e.scope),
                    e.beginScope&&(e.beginScope._wrap?(u(R,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
                        R=""):e.beginScope._multi&&(d(e.beginScope,t),R="")),N=Object.create(e,{parent:{
                            value:N}}),N}function f(e,n,i){let s=((e,t)=>{const n=e&&e.exec(t)
                ;return n&&0===n.index})(e.endRe,i);if(s){if(e["on:end"]){const i=new t(e)
                ;e["on:end"](n,i),i.isMatchIgnored&&(s=!1)}if(s){
                    for(;e.endsParent&&e.parent;)e=e.parent;return e}}
                    if(e.endsWithParent)return f(e.parent,n,i)}function b(e){
                    return 0===N.matcher.regexIndex?(R+=e[0],1):(T=!0,0)}function m(e){
                    const t=e[0],i=n.substring(e.index),s=f(N,e,i);if(!s)return ee;const o=N
                    ;N.endScope&&N.endScope._wrap?(g(),
                        u(t,N.endScope._wrap)):N.endScope&&N.endScope._multi?(g(),
                        d(N.endScope,e)):o.skip?R+=t:(o.returnEnd||o.excludeEnd||(R+=t),
                        g(),o.excludeEnd&&(R=t));do{
                        N.scope&&M.closeNode(),N.skip||N.subLanguage||(j+=N.relevance),N=N.parent
                    }while(N!==s.parent);return s.starts&&h(s.starts,e),o.returnEnd?0:t.length}
                let w={};function y(i,o){const a=o&&o[0];if(R+=i,null==a)return g(),0
                    ;if("begin"===w.type&&"end"===o.type&&w.index===o.index&&""===a){
                    if(R+=n.slice(o.index,o.index+1),!r){const t=Error(`0 width match regex (${e})`)
                    ;throw t.languageName=e,t.badRule=w.rule,t}return 1}
                    if(w=o,"begin"===o.type)return(e=>{
                        const n=e[0],i=e.rule,s=new t(i),o=[i.__beforeBegin,i["on:begin"]]
                        ;for(const t of o)if(t&&(t(e,s),s.isMatchIgnored))return b(n)
                            ;return i.skip?R+=n:(i.excludeBegin&&(R+=n),
                            g(),i.returnBegin||i.excludeBegin||(R=n)),h(i,e),i.returnBegin?0:n.length})(o)
                        ;if("illegal"===o.type&&!s){
                        const e=Error('Illegal lexeme "'+a+'" for mode "'+(N.scope||"<unnamed>")+'"')
                        ;throw e.mode=N,e}if("end"===o.type){const e=m(o);if(e!==ee)return e}
                    if("illegal"===o.type&&""===a)return 1
                        ;if(I>1e5&&I>3*o.index)throw Error("potential infinite loop, way more iterations than matches")
                        ;return R+=a,a.length}const _=O(e)
                ;if(!_)throw W(a.replace("{}",e)),Error('Unknown language: "'+e+'"')
                    ;const v=V(_);let k="",N=o||v;const S={},M=new p.__emitter(p);(()=>{const e=[]
                ;for(let t=N;t!==_;t=t.parent)t.scope&&e.unshift(t.scope)
                ;e.forEach((e=>M.openNode(e)))})();let R="",j=0,A=0,I=0,T=!1;try{
                    if(_.__emitTokens)_.__emitTokens(n,M);else{for(N.matcher.considerAll();;){
                        I++,T?T=!1:N.matcher.considerAll(),N.matcher.lastIndex=A
                        ;const e=N.matcher.exec(n);if(!e)break;const t=y(n.substring(A,e.index),e)
                        ;A=e.index+t}y(n.substring(A))}return M.finalize(),k=M.toHTML(),{language:e,
                        value:k,relevance:j,illegal:!1,_emitter:M,_top:N}}catch(t){
                    if(t.message&&t.message.includes("Illegal"))return{language:e,value:Y(n),
                        illegal:!0,relevance:0,_illegalBy:{message:t.message,index:A,
                            context:n.slice(A-100,A+100),mode:t.mode,resultSoFar:k},_emitter:M};if(r)return{
                        language:e,value:Y(n),illegal:!1,relevance:0,errorRaised:t,_emitter:M,_top:N}
                        ;throw t}}function x(e,t){t=t||p.languages||Object.keys(i);const n=(e=>{
                const t={value:Y(e),illegal:!1,relevance:0,_top:l,_emitter:new p.__emitter(p)}
                ;return t._emitter.addText(e),t})(e),s=t.filter(O).filter(k).map((t=>E(t,e,!1)))
            ;s.unshift(n);const o=s.sort(((e,t)=>{
                if(e.relevance!==t.relevance)return t.relevance-e.relevance
                    ;if(e.language&&t.language){if(O(e.language).supersetOf===t.language)return 1
                    ;if(O(t.language).supersetOf===e.language)return-1}return 0})),[r,a]=o,c=r
            ;return c.secondBest=a,c}function w(e){let t=null;const n=(e=>{
                let t=e.className+" ";t+=e.parentNode?e.parentNode.className:""
                ;const n=p.languageDetectRe.exec(t);if(n){const t=O(n[1])
                ;return t||(X(a.replace("{}",n[1])),
                    X("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}
                return t.split(/\s+/).find((e=>b(e)||O(e)))})(e);if(b(n))return
                ;if(N("before:highlightElement",{el:e,language:n
            }),e.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e)
                ;if(e.children.length>0&&(p.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
                console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
                console.warn("The element with unescaped HTML:"),
                console.warn(e)),p.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML)
                ;t=e;const i=t.textContent,o=n?m(i,{language:n,ignoreIllegals:!0}):x(i)
            ;e.innerHTML=o.value,e.dataset.highlighted="yes",((e,t,n)=>{const i=t&&s[t]||n
            ;e.classList.add("hljs"),e.classList.add("language-"+i)
            })(e,n,o.language),e.result={language:o.language,re:o.relevance,
                relevance:o.relevance},o.secondBest&&(e.secondBest={
                language:o.secondBest.language,relevance:o.secondBest.relevance
            }),N("after:highlightElement",{el:e,result:o,text:i})}let y=!1;function _(){
                "loading"!==document.readyState?document.querySelectorAll(p.cssSelector).forEach(w):y=!0
            }function O(e){return e=(e||"").toLowerCase(),i[e]||i[s[e]]}
            function v(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
                s[e.toLowerCase()]=t}))}function k(e){const t=O(e)
            ;return t&&!t.disableAutodetect}function N(e,t){const n=e;o.forEach((e=>{
                e[n]&&e[n](t)}))}
            "undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
                y&&_()}),!1),Object.assign(n,{highlight:m,highlightAuto:x,highlightAll:_,
                highlightElement:w,
                highlightBlock:e=>(G("10.7.0","highlightBlock will be removed entirely in v12.0"),
                    G("10.7.0","Please use highlightElement now."),w(e)),configure:e=>{p=Q(p,e)},
                initHighlighting:()=>{
                    _(),G("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
                initHighlightingOnLoad:()=>{
                    _(),G("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
                },registerLanguage:(e,t)=>{let s=null;try{s=t(n)}catch(t){
                    if(W("Language definition for '{}' could not be registered.".replace("{}",e)),
                        !r)throw t;W(t),s=l}
                    s.name||(s.name=e),i[e]=s,s.rawDefinition=t.bind(null,n),s.aliases&&v(s.aliases,{
                        languageName:e})},unregisterLanguage:e=>{delete i[e]
                ;for(const t of Object.keys(s))s[t]===e&&delete s[t]},
                listLanguages:()=>Object.keys(i),getLanguage:O,registerAliases:v,
                autoDetection:k,inherit:Q,addPlugin:e=>{(e=>{
                    e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{
                        e["before:highlightBlock"](Object.assign({block:t.el},t))
                    }),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{
                        e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),o.push(e)},
                removePlugin:e=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}),n.debugMode=()=>{
                r=!1},n.safeMode=()=>{r=!0},n.versionString="11.9.0",n.regex={concat:h,
                lookahead:g,either:f,optional:d,anyNumberOfTimes:u}
            ;for(const t in j)"object"==typeof j[t]&&e(j[t]);return Object.assign(n,j),n
        },ne=te({});return ne.newInstance=()=>te({}),ne}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);/*! `javascript` grammar compiled for Highlight.js 11.9.0 */
(()=>{var e=(()=>{"use strict"
    ;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],i=[].concat(r,t,s)
    ;return o=>{const l=o.regex,b=e,d={begin:/<[A-Za-z0-9\\._:-]+/,
            end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
                const a=e[0].length+e.index,t=e.input[a]
                ;if("<"===t||","===t)return void n.ignoreMatch();let s
                ;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
                ;return-1!==e.input.indexOf(a,n)})(e,{after:a})||n.ignoreMatch())
                ;const r=e.input.substring(a)
                ;((s=r.match(/^\s*=/))||(s=r.match(/^\s+extends\s+/))&&0===s.index)&&n.ignoreMatch()
            }},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c
        },u="[0-9](_?[0-9])*",m=`\\.(${u})`,E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",A={
            className:"number",variants:[{
                begin:`(\\b(${E})((${m})|\\.)?|(${m}))[eE][+-]?(${u})\\b`},{
                begin:`\\b(${E})\\b((${m})\\b|\\.)?|(${m})\\b`},{
                begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
                begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
                begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
                begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",
            end:"\\}",keywords:g,contains:[]},h={begin:"html`",end:"",starts:{end:"`",
                returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},N={
            begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
                contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"css"}},_={begin:"gql`",end:"",
            starts:{end:"`",returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],
                subLanguage:"graphql"}},f={className:"string",begin:"`",end:"`",
            contains:[o.BACKSLASH_ESCAPE,y]},v={className:"comment",
            variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
                    begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
                        begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
                        excludeBegin:!0,relevance:0},{className:"variable",begin:b+"(?=\\s*(-)|$)",
                        endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
            }),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]
        },p=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,h,N,_,f,{match:/\$\d+/},A]
    ;y.contains=p.concat({begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(p)
    });const S=[].concat(v,y.contains),w=S.concat([{begin:/\(/,end:/\)/,keywords:g,
        contains:["self"].concat(S)}]),R={className:"params",begin:/\(/,end:/\)/,
        excludeBegin:!0,excludeEnd:!0,keywords:g,contains:w},O={variants:[{
            match:[/class/,/\s+/,b,/\s+/,/extends/,/\s+/,l.concat(b,"(",l.concat(/\./,b),")*")],
            scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
            match:[/class/,/\s+/,b],scope:{1:"keyword",3:"title.class"}}]},k={relevance:0,
        match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
        className:"title.class",keywords:{_:[...t,...s]}},I={variants:[{
            match:[/function/,/\s+/,b,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
        className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],
        illegal:/%/},x={
        match:l.concat(/\b/,(T=[...r,"super","import"],l.concat("(?!",T.join("|"),")")),b,l.lookahead(/\(/)),
        className:"title.function",relevance:0};var T;const C={
            begin:l.concat(/\./,l.lookahead(l.concat(b,/(?![0-9A-Za-z$_(])/))),end:b,
            excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},M={
            match:[/get|set/,/\s+/,b,/(?=\()/],className:{1:"keyword",3:"title.function"},
            contains:[{begin:/\(\)/},R]
        },B="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",$={
            match:[/const|var|let/,/\s+/,b,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(B)],
            keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]}
    ;return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{
            PARAMS_CONTAINS:w,CLASS_REFERENCE:k},illegal:/#(?![$_A-z])/,
        contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
            label:"use_strict",className:"meta",relevance:10,
            begin:/^\s*['"]use (strict|asm)['"]/
        },o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,h,N,_,f,v,{match:/\$\d+/},A,k,{
            className:"attr",begin:b+l.lookahead(":"),relevance:0},$,{
            begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
            keywords:"return throw case",relevance:0,contains:[v,o.REGEXP_MODE,{
                className:"function",begin:B,returnBegin:!0,end:"\\s*=>",contains:[{
                    className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{
                        className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
                        excludeEnd:!0,keywords:g,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,
                relevance:0},{variants:[{begin:"<>",end:"</>"},{
                    match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d.begin,
                    "on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{
                    begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},I,{
            beginKeywords:"while if switch catch for"},{
            begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
            returnBegin:!0,label:"func.def",contains:[R,o.inherit(o.TITLE_MODE,{begin:b,
                className:"title.function"})]},{match:/\.\.\./,relevance:0},C,{match:"\\$"+b,
            relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
            contains:[R]},x,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
            className:"variable.constant"},O,M,{match:/\$[(.]/}]}}})()
;hljs.registerLanguage("javascript",e)})();/*! `php` grammar compiled for Highlight.js 11.9.0 */
(()=>{var e=(()=>{"use strict";return e=>{
    const t=e.regex,a=/(?![A-Za-z0-9])(?![$])/,r=t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,a),n=t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,a),o={
        scope:"variable",match:"\\$+"+r},c={scope:"subst",variants:[{begin:/\$\w+/},{
            begin:/\{\$/,end:/\}/}]},i=e.inherit(e.APOS_STRING_MODE,{illegal:null
    }),s="[ \t\n]",l={scope:"string",variants:[e.inherit(e.QUOTE_STRING_MODE,{
            illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(c)}),i,{
            begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,
            contains:e.QUOTE_STRING_MODE.contains.concat(c),"on:begin":(e,t)=>{
                t.data._beginMatch=e[1]||e[2]},"on:end":(e,t)=>{
                t.data._beginMatch!==e[1]&&t.ignoreMatch()}},e.END_SAME_AS_BEGIN({
            begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/})]},d={scope:"number",variants:[{
            begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{
            begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{
            begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
        }],relevance:0
    },_=["false","null","true"],p=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],b=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],E={
        keyword:p,literal:(e=>{const t=[];return e.forEach((e=>{
            t.push(e),e.toLowerCase()===e?t.push(e.toUpperCase()):t.push(e.toLowerCase())
        })),t})(_),built_in:b},u=e=>e.map((e=>e.replace(/\|\d+$/,""))),g={variants:[{
            match:[/new/,t.concat(s,"+"),t.concat("(?!",u(b).join("\\b|"),"\\b)"),n],scope:{
                1:"keyword",4:"title.class"}}]},h=t.concat(r,"\\b(?!\\()"),m={variants:[{
            match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),h],scope:{2:"variable.constant"
            }},{match:[/::/,/class/],scope:{2:"variable.language"}},{
            match:[n,t.concat(/::/,t.lookahead(/(?!class\b)/)),h],scope:{1:"title.class",
                3:"variable.constant"}},{match:[n,t.concat("::",t.lookahead(/(?!class\b)/))],
            scope:{1:"title.class"}},{match:[n,/::/,/class/],scope:{1:"title.class",
                3:"variable.language"}}]},I={scope:"attr",
        match:t.concat(r,t.lookahead(":"),t.lookahead(/(?!::)/))},f={relevance:0,
        begin:/\(/,end:/\)/,keywords:E,contains:[I,o,m,e.C_BLOCK_COMMENT_MODE,l,d,g]
    },O={relevance:0,
        match:[/\b/,t.concat("(?!fn\\b|function\\b|",u(p).join("\\b|"),"|",u(b).join("\\b|"),"\\b)"),r,t.concat(s,"*"),t.lookahead(/(?=\()/)],
        scope:{3:"title.function.invoke"},contains:[f]};f.contains.push(O)
    ;const v=[I,m,e.C_BLOCK_COMMENT_MODE,l,d,g];return{case_insensitive:!1,
        keywords:E,contains:[{begin:t.concat(/#\[\s*/,n),beginScope:"meta",end:/]/,
            endScope:"meta",keywords:{literal:_,keyword:["new","array"]},contains:[{
                begin:/\[/,end:/]/,keywords:{literal:_,keyword:["new","array"]},
                contains:["self",...v]},...v,{scope:"meta",match:n}]
        },e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{
                scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,
            keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,
                contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{
                begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{
                begin:/\?>/}]},{scope:"variable.language",match:/\$this\b/},o,O,m,{
            match:[/const/,/\s/,r],scope:{1:"keyword",3:"variable.constant"}},g,{
            scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,
            excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"
            },e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",
                begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:E,
                contains:["self",o,m,e.C_BLOCK_COMMENT_MODE,l,d]}]},{scope:"class",variants:[{
                beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",
                illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{
                beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
            beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,
            contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{
            beginKeywords:"use",relevance:0,end:";",contains:[{
                match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},l,d]}
}})();hljs.registerLanguage("php",e)})();/*! `sql` grammar compiled for Highlight.js 11.9.0 */
(()=>{var e=(()=>{"use strict";return e=>{
    const r=e.regex,t=e.COMMENT("--","$"),n=["true","false","unknown"],a=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],i=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],s=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],o=i,c=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter((e=>!i.includes(e))),l={
        begin:r.concat(/\b/,r.either(...o),/\s*\(/),relevance:0,keywords:{built_in:o}}
    ;return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{
            $pattern:/\b[\w\.]+/,keyword:((e,{exceptions:r,when:t}={})=>{const n=t
            ;return r=r||[],e.map((e=>e.match(/\|\d+$/)||r.includes(e)?e:n(e)?e+"|0":e))
            })(c,{when:e=>e.length<3}),literal:n,type:a,
            built_in:["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"]
        },contains:[{begin:r.either(...s),relevance:0,keywords:{$pattern:/[\w\.]+/,
                keyword:c.concat(s),literal:n,type:a}},{className:"type",
            begin:r.either("double precision","large object","with timezone","without timezone")
        },l,{className:"variable",begin:/@[a-z0-9][a-z0-9_]*/},{className:"string",
            variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,
            contains:[{begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,{
            className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
            relevance:0}]}}})();hljs.registerLanguage("sql",e)})();
