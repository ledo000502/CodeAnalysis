import{_ as n,r,o as d,c,a as s,b as l,w as o,F as t,e as a,d as e}from"./app.db22a830.js";const h={},p=a('<h1 id="\u672C\u5730\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5206\u6790" aria-hidden="true">#</a> \u672C\u5730\u5206\u6790</h1><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u573A\u666F</h2><ul><li><p>\u5E0C\u671B\u5728\u672C\u5730\u968F\u65F6\u5206\u6790\u3002</p></li><li><p>\u5982\u679C\u516C\u5171\u673A\u5668\u65E0\u6CD5\u6EE1\u8DB3\u7F16\u8BD1\u73AF\u5883\u7684\u60C5\u51B5\uFF0C\u590D\u7528\u672C\u5730\u7F16\u8BD1\u73AF\u5883\u3002</p></li><li><p>\u5982\u679C\u5BF9\u4EE3\u7801\u5B89\u5168\u6709\u8981\u6C42\u4E5F\u63A8\u8350\u4F7F\u7528\u672C\u5730\u5206\u6790\u3002</p></li></ul><h2 id="\u524D\u7F6E\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u6B65\u9AA4" aria-hidden="true">#</a> \u524D\u7F6E\u6B65\u9AA4</h2><p>\u672C\u5730\u5177\u5907\u5BA2\u6237\u7AEF\u3002</p>',5),u=e("\u5982\u679C\u662F\u5F00\u6E90\u7248\u5BA2\u6237\u7AEF\uFF0C\u9700\u8981\u914D\u7F6E\u76F8\u5173\u73AF\u5883\u548C\u4F9D\u8D56\uFF0C\u53EF\u67E5\u9605"),b=e("\u5F00\u6E90\u7248\u5BA2\u6237\u7AEF\u4F7F\u7528\u8BF4\u660E"),_=e("\u3002"),m=a(`<h2 id="\u5206\u6790\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u914D\u7F6E" aria-hidden="true">#</a> \u5206\u6790\u914D\u7F6E</h2><h3 id="\u914D\u7F6E\u5BA2\u6237\u7AEF-config-ini-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5BA2\u6237\u7AEF-config-ini-\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u5BA2\u6237\u7AEF <code>config.ini</code> \u6587\u4EF6</h3><p>\u5C06 <code>&lt;Server IP\u5730\u5740&gt;</code> \u66FF\u6362\u6210\u5B9E\u9645\u7684serve ip\uFF08\u53EF\u5305\u542B\u7AEF\u53E3\u53F7\uFF09</p><h3 id="\u914D\u7F6E\u5BA2\u6237\u7AEF-codedog-ini-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5BA2\u6237\u7AEF-codedog-ini-\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u5BA2\u6237\u7AEF <code>codedog.ini</code> \u6587\u4EF6</h3><ul><li><p><code>token</code>\uFF0C\u5FC5\u586B\u9879\u3002\u4ECETCA\u524D\u7AEF\u9875\u9762\u4E2D\u83B7\u53D6\uFF0C\u524D\u5F80 <strong>\u4E2A\u4EBA\u4E2D\u5FC3-\u4E2A\u4EBA\u4EE4\u724C-\u590D\u5236Token</strong></p></li><li><p><code>org_sid</code>\uFF0C\u56E2\u961F\u7F16\u53F7\uFF0C\u5FC5\u586B\u9879\u3002\u53EF\u4EE5\u4ECETCA\u524D\u7AEF\u9879\u76EE\u9875\u9762URL\u83B7\u53D6\u3002</p></li><li><p><code>team_name</code>\uFF0C\u9879\u76EE\u540D\u79F0\uFF0C\u5FC5\u586B\u9879\u3002\u53EF\u4EE5\u4ECETCA\u524D\u7AEF\u9879\u76EE\u9875\u9762URL\u83B7\u53D6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u5982
http://{\u57DF\u540D}/t/{org_sid}/p/{team_name}/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p><code>source_dir</code>\uFF0C\u672C\u5730\u4EE3\u7801\u76EE\u5F55\u8DEF\u5F84\uFF0C\u5FC5\u586B\u9879\u3002\u7EDD\u5BF9\u8DEF\u5F84\u3002</p></li><li><p>\u5176\u4ED6\u53C2\u6570</p><p>\u6309\u9700\u586B\u5199\u5176\u4ED6\u53EF\u9009\u9879\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u586B\uFF0C\u6309\u9ED8\u8BA4\u914D\u7F6E\u6267\u884C</p></li></ul><h2 id="\u542F\u52A8\u4EE3\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u4EE3\u7801\u5206\u6790" aria-hidden="true">#</a> \u542F\u52A8\u4EE3\u7801\u5206\u6790</h2><h3 id="\u6E90\u7801\u4E0B\u542F\u52A8\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u4E0B\u542F\u52A8\u5206\u6790" aria-hidden="true">#</a> \u6E90\u7801\u4E0B\u542F\u52A8\u5206\u6790</h3><ul><li><p>\u8FDB\u5165\u5230<code>client</code>\u76EE\u5F55\u4E0B</p></li><li><p>\u6267\u884C\u547D\u4EE4\uFF1A<code>python3 codepuppy.py localscan</code></p></li></ul><h3 id="docker\u4E0B\u542F\u52A8\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#docker\u4E0B\u542F\u52A8\u5206\u6790" aria-hidden="true">#</a> docker\u4E0B\u542F\u52A8\u5206\u6790</h3><h4 id="\u76F4\u63A5\u4F7F\u7528docker\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u4F7F\u7528docker\u8FD0\u884C" aria-hidden="true">#</a> \u76F4\u63A5\u4F7F\u7528docker\u8FD0\u884C</h4><ul><li>\u5728client\u76EE\u5F55\u4E0B\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</li><li>(\u6CE8\u610F\uFF1A\u6309\u7167\u5B9E\u9645\u60C5\u51B5\u586B\u5199<code>SOURCE_DIR</code>\u73AF\u5883\u53D8\u91CF\u503C)</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>export SOURCE_DIR=\u9700\u8981\u626B\u63CF\u7684\u4EE3\u7801\u76EE\u5F55\u7EDD\u5BF9\u8DEF\u5F84
docker run -it --rm  -v $PWD:/workspace/client -v $SOURCE_DIR:/workspace/src  --name tca-client tca-client
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u4F7F\u7528docker\u5185bash\u7EC8\u7AEF\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528docker\u5185bash\u7EC8\u7AEF\u8FD0\u884C" aria-hidden="true">#</a> \u4F7F\u7528docker\u5185bash\u7EC8\u7AEF\u8FD0\u884C</h4><ul><li>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\uFF0C\u8FDB\u5165\u5BB9\u5668\u5185\u7684bash\u7EC8\u7AEF\u540E\uFF0C\u901A\u8FC7\u547D\u4EE4\u884C\u542F\u52A8client\u4EE3\u7801\uFF1A</li><li>\u5728client\u76EE\u5F55\u4E0B\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</li><li>(\u6CE8\u610F\uFF1A\u6309\u7167\u5B9E\u9645\u60C5\u51B5\u586B\u5199<code>SOURCE_DIR</code>\u73AF\u5883\u53D8\u91CF\u503C)</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>export SOURCE_DIR=\u9700\u8981\u626B\u63CF\u7684\u4EE3\u7801\u76EE\u5F55\u7EDD\u5BF9\u8DEF\u5F84
docker run -it --rm  -v $PWD:/workspace/client -v $SOURCE_DIR:/workspace/src  --name tca-client tca-client bash
# \u8FDB\u5165\u5BB9\u5668\u5185\u7EC8\u7AEF\uFF0C\u901A\u8FC7\u547D\u4EE4\u884C\u6267\u884C\u626B\u63CF
python3 codepuppy.py localscan
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,15);function E(g,f){const i=r("RouterLink");return d(),c(t,null,[p,s("p",null,[u,l(i,{to:"/en/guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E.html#%E5%BC%80%E6%BA%90%E7%89%88%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E"},{default:o(()=>[b]),_:1}),_]),m],64)}var v=n(h,[["render",E],["__file","\u672C\u5730\u5206\u6790.html.vue"]]);export{v as default};
