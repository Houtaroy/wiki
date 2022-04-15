import{_ as n,c as s,o as a,a as p}from"./app.7004e06b.js";const m='{"title":"SpringBoot\u6574\u5408\u9489\u9489SDK","description":"","frontmatter":{},"headers":[{"level":2,"title":"1 \u524D\u8A00","slug":"_1-\u524D\u8A00"},{"level":2,"title":"2 DingTalk SDK","slug":"_2-dingtalk-sdk"},{"level":2,"title":"3 Spring Boot \u6574\u5408 Ding Talk SDK","slug":"_3-spring-boot-\u6574\u5408-ding-talk-sdk"},{"level":2,"title":"3 \u603B\u7ED3","slug":"_3-\u603B\u7ED3"}],"relativePath":"java/SpringBoot\u6574\u5408\u9489\u9489SDK.md"}',t={},o=p(`<h1 id="springboot\u6574\u5408\u9489\u9489sdk" tabindex="-1">SpringBoot\u6574\u5408\u9489\u9489SDK <a class="header-anchor" href="#springboot\u6574\u5408\u9489\u9489sdk" aria-hidden="true">#</a></h1><h2 id="_1-\u524D\u8A00" tabindex="-1">1 \u524D\u8A00 <a class="header-anchor" href="#_1-\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u9605\u8BFB\u672C\u7BC7\u6587\u7AE0\u60A8\u53EF\u4EE5\u4E86\u89E3\u5230\u5982\u4E0B\u5185\u5BB9:</p><ul><li>DingTalk SDK</li><li>Spring Boot \u6574\u5408 Ding Talk SDK</li></ul><p>\u5728\u6B64\u4E4B\u524D, \u5982\u679C\u60A8\u719F\u6089\u4EE5\u4E0B\u5185\u5BB9\u53EF\u66F4\u65B9\u4FBF\u7684\u8FDB\u884C\u7406\u89E3:</p><ul><li>DingTalk \u5B98\u65B9\u6587\u6863</li><li>\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F</li></ul><h2 id="_2-dingtalk-sdk" tabindex="-1">2 DingTalk SDK <a class="header-anchor" href="#_2-dingtalk-sdk" aria-hidden="true">#</a></h2><p>\u8EAB\u4E3AJava\u5F00\u53D1\u8005, \u80FD\u770B\u5230\u9489\u9489\u5B98\u65B9\u63D0\u4F9B\u7684SDK\u8FD8\u662F\u5341\u5206\u9AD8\u5174\u7684</p><p>\u9489\u9489\u5B98\u65B9\u670D\u52A1\u7AEF\u63A5\u53E3\u6709\u4E24\u4E2A\u7248\u672C: \u65E7\u7684\u548C\u65B0\u7684</p><p>\u4E8C\u8005\u7684\u533A\u522B\u53EF\u4EE5\u53C2\u8003\u5B98\u65B9\u6587\u6863<a href="https://open.dingtalk.com/document/orgapp-server/differences-between-server-apis-and-new-server-apis" target="_blank" rel="noopener noreferrer">\u9489\u9489\u5F00\u653E\u6587\u6863 (dingtalk.com)</a></p><p>\u7B80\u5355\u603B\u7ED3\u4E00\u4E0B:</p><ol><li>\u65E7\u63A5\u53E3\u4E0D\u4F1A\u518D\u53D1\u751F\u53D8\u52A8</li><li>\u65E7\u63A5\u53E3<strong>\u4E0D\u4F1A\u652F\u6301\u65B0API</strong></li><li>\u65B0\u63A5\u53E3\u4F1A\u652F\u6301\u65B0API</li><li>\u65B0\u63A5\u53E3<strong>\u4E0D\u652F\u6301\u90E8\u5206\u65E7API</strong>, \u672A\u6765\u4F1A\u5168\u90E8\u652F\u6301</li></ol><p>\u4ECB\u4E8E\u8FD9\u79CD\u60C5\u51B5, \u5F53\u4E0B\u6211\u4EEC\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D, <strong>\u53EF\u80FD\u9700\u8981\u540C\u65F6\u4F7F\u7528\u65B0\u65E7\u4E24\u7248SDK</strong></p><p>\u9489\u9489\u5B98\u65B9\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5F88\u597D\u7528\u7684\u63A5\u53E3\u5DE5\u5177: <a href="https://open-dev.dingtalk.com/apiExplorer?spm=ding_open_doc.document.0.0.702d722fEcr2Hb#/?devType=org&amp;api=oauth2_1.0%23CreateJsapiTicket" target="_blank" rel="noopener noreferrer">API Explorer (dingtalk.com)</a></p><p>\u7B14\u8005\u901A\u8FC7\u89C2\u5BDF\u53D1\u73B0, \u4E24\u7248SDK\u7684\u4F7F\u7528\u65B9\u5F0F\u5DEE\u522B\u8F83\u5927, \u4E14\u9700\u8981\u5F00\u53D1\u4EBA\u5458\u624B\u52A8\u7EF4\u62A4Token</p><p>\u4E3A\u4E86\u66F4\u5FEB\u7684\u65B9\u4FBF\u516C\u53F8\u5144\u5F1F\u4EEC\u4E0A\u624B, \u7B14\u8005\u501F\u9274\u4E86\u6A21\u677F\u65B9\u6CD5\u7684\u4E00\u70B9\u6280\u5DE7, \u7B80\u5355\u7684\u5BF9\u4E24\u4E2ASDK\u8FDB\u884C\u5305\u88C5</p><h2 id="_3-spring-boot-\u6574\u5408-ding-talk-sdk" tabindex="-1">3 Spring Boot \u6574\u5408 Ding Talk SDK <a class="header-anchor" href="#_3-spring-boot-\u6574\u5408-ding-talk-sdk" aria-hidden="true">#</a></h2><p>\u5728pom\u4E2D\u5F15\u5165SDK\u4F9D\u8D56:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>alibaba-dingtalk-service-sdk<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dingtalk<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u9996\u5148\u521B\u5EFA\u9489\u9489\u5F00\u53D1\u6240\u9700\u8981\u7684\u914D\u7F6E\u53C2\u6570\u7C7B<code>DingTalkProperties</code>:</p><div class="language-java"><pre><code><span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;ding-talk&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DingTalkProperties</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token class-name">Long</span> agentId<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> appKey<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> appSecret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u521B\u5EFA\u6A21\u677F\u65B9\u6CD5\u7C7B<code>DingTalkTemplate</code>:</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DingTalkTemplate</span> <span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Config</span> NEW_SDK_DEFAULT_CONFIG<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">DingTalkProperties</span> properties<span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token punctuation">{</span>
    <span class="token class-name">Config</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    config<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">;</span>
    config<span class="token punctuation">.</span>regionId <span class="token operator">=</span> <span class="token string">&quot;central&quot;</span><span class="token punctuation">;</span>
    NEW_SDK_DEFAULT_CONFIG <span class="token operator">=</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token class-name">DingTalkTemplate</span><span class="token punctuation">(</span><span class="token class-name">DingTalkProperties</span> properties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>properties <span class="token operator">=</span> properties<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u901A\u8FC7\u5206\u6790\u5B98\u7F51\u65B0\u7248\u7684SDK\u4EE3\u7801</p><p>\u53EF\u4EE5\u5F52\u7EB3\u5176\u6D41\u7A0B\u4E3A:</p><div class="language-mermaid"><pre><code><span class="token keyword">graph</span> LR
A<span class="token text string">(\u521B\u5EFAclient)</span> <span class="token arrow operator">--&gt;</span> \u6784\u9020\u8BF7\u6C42 <span class="token arrow operator">--&gt;</span> \u8C03\u7528client\u76F8\u5173\u65B9\u6CD5 <span class="token arrow operator">--&gt;</span> D<span class="token text string">(\u89E3\u6790\u54CD\u5E94\u7ED3\u679C)</span>
</code></pre></div><p>\u5176\u4E2D\u6240\u6709\u7684client\u90FD\u662F<code>com.aliyun.teaopenapi.Client</code>\u7684\u5B50\u7C7B</p><p>\u6240\u4EE5\u6211\u4EEC\u624B\u52A8\u8FDB\u884C\u7BA1\u7406:</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DingTalkTemplate</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...\u5176\u5B83\u4EE3\u7801</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Class</span><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Client</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">Client</span><span class="token punctuation">&gt;</span></span> newSdkClientMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u83B7\u53D6\u65B0SDK\u5BA2\u6237\u7AEF
   *
   * @param clientClass \u5BA2\u6237\u7AEF\u7C7B\u578B
   * @param &lt;T&gt;         \u5BA2\u6237\u7C7B\u578B
   * @return \u65B0SDK\u5BA2\u6237\u7AEF
   * @throws NoSuchClientException \u672A\u627E\u5230\u5BA2\u6237\u7AEF\u5F02\u5E38
   */</span>
  <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">Client</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getNewSdkClient</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clientClass<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchClientException</span> <span class="token punctuation">{</span>
    <span class="token class-name">T</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> newSdkClientMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>clientClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        result <span class="token operator">=</span> clientClass<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token class-name">Config</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span>NEW_SDK_DEFAULT_CONFIG<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NoSuchClientException</span><span class="token punctuation">(</span>clientClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      newSdkClientMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>clientClass<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53C2\u7167\u5B98\u7F51\u65B0\u7248\u7684SDK\u4EE3\u7801, \u6211\u4EEC\u5728\u5185\u5B58\u4E2D\u5BF9token\u8FDB\u884C\u7EF4\u62A4:</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DingTalkTemplate</span> <span class="token punctuation">{</span>

  <span class="token comment">// ...\u5176\u5B83\u4EE3\u7801</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> TOKEN_RESERVED_MINUTES <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> accessToken<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> accessTokenExpirationTime<span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u83B7\u53D6accessToken
   *
   * @throws Exception \u8BF7\u6C42\u5F02\u5E38
   */</span>
  <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">accessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">GetAccessTokenResponseBody</span> body <span class="token operator">=</span> <span class="token function">oauth2AccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    accessToken <span class="token operator">=</span> body<span class="token punctuation">.</span><span class="token function">getAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    accessTokenExpirationTime <span class="token operator">=</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">minusMinutes</span><span class="token punctuation">(</span>TOKEN_RESERVED_MINUTES<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">plusSeconds</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span><span class="token function">getExpireIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u83B7\u53D6accessToken
   *
   * @return token\u7ED3\u679C
   * @throws Exception \u8BF7\u6C42\u5F02\u5E38
   */</span>
  <span class="token keyword">public</span> <span class="token class-name">GetAccessTokenResponseBody</span> <span class="token function">oauth2AccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">oauth2AccessToken</span><span class="token punctuation">(</span>properties<span class="token punctuation">.</span><span class="token function">getAppKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> properties<span class="token punctuation">.</span><span class="token function">getAppSecret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u83B7\u53D6accessToken
   *
   * @param appKey    \u5E94\u7528key
   * @param appSecret \u5E94\u7528\u5BC6\u94A5
   * @return token\u7ED3\u679C
   * @throws Exception \u8BF7\u6C42\u5F02\u5E38
   */</span>
  <span class="token keyword">public</span> <span class="token class-name">GetAccessTokenResponseBody</span> <span class="token function">oauth2AccessToken</span><span class="token punctuation">(</span><span class="token class-name">String</span> appKey<span class="token punctuation">,</span> <span class="token class-name">String</span> appSecret<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>dingtalkoauth2_1_0<span class="token punctuation">.</span></span>Client</span> client <span class="token operator">=</span> <span class="token function">getNewSdkClient</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>dingtalkoauth2_1_0<span class="token punctuation">.</span></span>Client</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">GetAccessTokenRequest</span> getAccessTokenRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetAccessTokenRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAppKey</span><span class="token punctuation">(</span>appKey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAppSecret</span><span class="token punctuation">(</span>appSecret<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> client<span class="token punctuation">.</span><span class="token function">getAccessToken</span><span class="token punctuation">(</span>getAccessTokenRequest<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * token\u662F\u5426\u8FC7\u671F
   *
   * @return true \u662F false \u5426
   */</span>
  <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">isTokenExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> accessToken <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>accessToken<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isAfter</span><span class="token punctuation">(</span>accessTokenExpirationTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u89C2\u5BDF\u65E7\u7248SDK\u4EE3\u7801, \u5176\u6D41\u7A0B\u4E0E\u65B0\u7248\u76F8\u4F3C, \u53EA\u662F\u521B\u5EFA\u5BA2\u6237\u7AEF\u7684\u59FF\u52BF\u4E0D\u540C</p><p>\u6211\u4EEC\u53EF\u4EE5\u8FDB\u4E00\u6B65\u5305\u88C5:</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DingTalkTemplate</span> <span class="token punctuation">{</span>

  <span class="token comment">// ...\u5176\u5B83\u4EE3\u7801</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">DingTalkClient</span><span class="token punctuation">&gt;</span></span> clientMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/**
   * \u83B7\u53D6\u8BF7\u6C42\u5BA2\u6237\u7AEF
   *
   * @param uri \u8BF7\u6C42\u8D44\u6E90\u8DEF\u5F84
   * @return \u8BF7\u6C42\u5BA2\u6237\u7AEF
   */</span>
  <span class="token keyword">public</span> <span class="token class-name">DingTalkClient</span> <span class="token function">getClient</span><span class="token punctuation">(</span><span class="token class-name">String</span> uri<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> clientMap<span class="token punctuation">.</span><span class="token function">computeIfAbsent</span><span class="token punctuation">(</span>uri<span class="token punctuation">,</span> <span class="token class-name">DefaultDingTalkClient</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/**
   * \u65E7\u7248SDK\u6267\u884C\u8BF7\u6C42
   *
   * @param uri     \u8BF7\u6C42\u8D44\u6E90\u8DEF\u5F84
   * @param request \u8BF7\u6C42
   * @param &lt;T&gt;     \u54CD\u5E94\u7ED3\u679C\u7C7B\u578B
   * @return \u54CD\u5E94\u7ED3\u679C
   * @throws Exception \u8BF7\u6C42\u5F02\u5E38
   */</span>
  <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span> <span class="token keyword">extends</span> <span class="token class-name">TaobaoResponse</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">String</span> uri<span class="token punctuation">,</span> <span class="token class-name">TaobaoRequest</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> request<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isTokenExpired</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">accessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">getClient</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> accessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_3-\u603B\u7ED3" tabindex="-1">3 \u603B\u7ED3 <a class="header-anchor" href="#_3-\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u6709\u5B98\u65B9\u63D0\u4F9B\u7684SDK\u8FD8\u662F\u5F88\u9999\u7684</p><p>\u65B0\u7248SDK\u66F4\u65B0\u9891\u7387\u5F88\u9AD8(\u6BD5\u7ADF\u662F\u4F4E\u4EE3\u7801\u81EA\u52A8\u751F\u6210), \u5728\u4F7F\u7528\u65F6\u8BF7\u6301\u7EED\u5173\u6CE8</p>`,37),e=[o];function c(l,k,u,i,r,d){return a(),s("div",null,e)}var w=n(t,[["render",c]]);export{m as __pageData,w as default};
