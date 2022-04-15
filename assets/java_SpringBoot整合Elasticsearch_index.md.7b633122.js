import{_ as n,c as s,o as a,a as t}from"./app.7004e06b.js";var p="/wiki/assets/3-2-1.ae197e0a.png",o="/wiki/assets/4-2-1.08bee77a.png";const m='{"title":"SpringBoot\u6574\u5408Elasticsearch","description":"","frontmatter":{},"headers":[{"level":2,"title":"1 \u524D\u8A00","slug":"_1-\u524D\u8A00"},{"level":2,"title":"2 Spring Boot\u4F7F\u7528Spring Data Elasticsearch\u96C6\u6210Elasticsearch","slug":"_2-spring-boot\u4F7F\u7528spring-data-elasticsearch\u96C6\u6210elasticsearch"},{"level":3,"title":"2.1 \u5F15\u5165\u4F9D\u8D56","slug":"_2-1-\u5F15\u5165\u4F9D\u8D56"},{"level":3,"title":"2.2 \u914D\u7F6E\u6587\u4EF6","slug":"_2-2-\u914D\u7F6E\u6587\u4EF6"},{"level":2,"title":"3 \u7D22\u5F15\u5185\u5BB9\u7684\u589E\u5220\u6539\u67E5","slug":"_3-\u7D22\u5F15\u5185\u5BB9\u7684\u589E\u5220\u6539\u67E5"},{"level":3,"title":"3.1 \u521B\u5EFA\u5B9E\u4F53\u7C7B","slug":"_3-1-\u521B\u5EFA\u5B9E\u4F53\u7C7B"},{"level":3,"title":"3.2 \u521B\u5EFA\u5B58\u50A8\u5E93\u7C7B","slug":"_3-2-\u521B\u5EFA\u5B58\u50A8\u5E93\u7C7B"},{"level":3,"title":"3.3 \u521B\u5EFA\u670D\u52A1\u7C7B","slug":"_3-3-\u521B\u5EFA\u670D\u52A1\u7C7B"},{"level":3,"title":"3.4 \u521B\u5EFA\u63A5\u53E3","slug":"_3-4-\u521B\u5EFA\u63A5\u53E3"},{"level":3,"title":"3.5 \u6D4B\u8BD5","slug":"_3-5-\u6D4B\u8BD5"},{"level":2,"title":"4 \u5168\u6587\u68C0\u7D22","slug":"_4-\u5168\u6587\u68C0\u7D22"},{"level":3,"title":"4.1 \u5168\u6587\u68C0\u7D22\u65B9\u6CD5","slug":"_4-1-\u5168\u6587\u68C0\u7D22\u65B9\u6CD5"},{"level":3,"title":"4.2 \u9AD8\u4EAE","slug":"_4-2-\u9AD8\u4EAE"},{"level":3,"title":"4.3 \u6392\u5E8F","slug":"_4-3-\u6392\u5E8F"},{"level":3,"title":"4.4 \u4E2D\u6587\u5206\u8BCD\u5668","slug":"_4-4-\u4E2D\u6587\u5206\u8BCD\u5668"},{"level":2,"title":"5 \u5EFA\u8BAE\u5668","slug":"_5-\u5EFA\u8BAE\u5668"},{"level":3,"title":"5.1 \u8865\u9F50\u5EFA\u8BAE\u5668","slug":"_5-1-\u8865\u9F50\u5EFA\u8BAE\u5668"}],"relativePath":"java/SpringBoot\u6574\u5408Elasticsearch/index.md"}',e={},c=t(`<h1 id="springboot\u6574\u5408elasticsearch" tabindex="-1">SpringBoot\u6574\u5408Elasticsearch <a class="header-anchor" href="#springboot\u6574\u5408elasticsearch" aria-hidden="true">#</a></h1><h2 id="_1-\u524D\u8A00" tabindex="-1">1 \u524D\u8A00 <a class="header-anchor" href="#_1-\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u9605\u8BFB\u672C\u7BC7\u6587\u7AE0\u60A8\u53EF\u4EE5\u4E86\u89E3\u5230\u5982\u4E0B\u5185\u5BB9:</p><ul><li>[Spring Boot\u4F7F\u7528Spring Data Elasticsearch\u96C6\u6210Elasticsearch](#2 Spring Boot\u4F7F\u7528Spring Data Elasticsearch\u96C6\u6210Elasticsearch)</li><li>[\u7D22\u5F15\u5185\u5BB9\u7684\u589E\u5220\u6539\u67E5](#3 \u7D22\u5F15\u5185\u5BB9\u7684\u589E\u5220\u6539\u67E5)</li><li>[\u5168\u6587\u68C0\u7D22(\u6392\u5E8F/\u9AD8\u4EAE)](#4 \u5168\u6587\u68C0\u7D22)</li><li>[\u5EFA\u8BAE\u5668\u7684\u4F7F\u7528(\u81EA\u52A8\u8865\u9F50)](#5 \u5EFA\u8BAE\u5668)</li></ul><p>\u5728\u6B64\u4E4B\u524D, \u5982\u679C\u60A8\u719F\u6089\u4EE5\u4E0B\u5185\u5BB9\u53EF\u66F4\u65B9\u4FBF\u7684\u8FDB\u884C\u7406\u89E3:</p><ul><li>Spring Boot\u9879\u76EE\u6784\u5EFA</li><li>JPA</li><li>\u641C\u7D22\u5F15\u64CE\u76F8\u5173\u6982\u5FF5\u4E0E\u529F\u80FD</li></ul><p>\u9879\u76EE\u6280\u672F\u6808\u4E0E\u7248\u672C:</p><ul><li>Maven: 3.6.3</li><li>Spring Boot: 2.6.3</li><li>Spring Data Elasticsearch: 4.3.1</li><li>Elasticsearch: 7.15.2</li></ul><h2 id="_2-spring-boot\u4F7F\u7528spring-data-elasticsearch\u96C6\u6210elasticsearch" tabindex="-1">2 Spring Boot\u4F7F\u7528Spring Data Elasticsearch\u96C6\u6210Elasticsearch <a class="header-anchor" href="#_2-spring-boot\u4F7F\u7528spring-data-elasticsearch\u96C6\u6210elasticsearch" aria-hidden="true">#</a></h2><h3 id="_2-1-\u5F15\u5165\u4F9D\u8D56" tabindex="-1">2.1 \u5F15\u5165\u4F9D\u8D56 <a class="header-anchor" href="#_2-1-\u5F15\u5165\u4F9D\u8D56" aria-hidden="true">#</a></h3><p>\u521B\u5EFASpring Boot\u9879\u76EE\u540E, \u5728pom.xml\u6587\u4EF6\u4E2D\u5F15\u5165\u5982\u4E0B\u4F9D\u8D56:</p><div class="language-xml"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4E0D\u7528\u4E66\u5199version\u6807\u7B7E, \u4F1A\u81EA\u52A8\u6839\u636ESpring Boot\u7248\u672C\u53F7\u9009\u62E9</p><h3 id="_2-2-\u914D\u7F6E\u6587\u4EF6" tabindex="-1">2.2 \u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#_2-2-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u5728\u914D\u7F6E\u6587\u4EF6application.yml\u4E2D\u589E\u52A0\u5982\u4E0B\u914D\u7F6E:</p><div class="language-yaml"><pre><code><span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
    <span class="token key atrule">uris</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> http<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span><span class="token number">9200</span>
</code></pre></div><p>\u6CE8\u610F<code>uris</code>\u7C7B\u578B\u4E3A\u662F\u5B57\u7B26\u4E32\u6570\u7EC4</p><h2 id="_3-\u7D22\u5F15\u5185\u5BB9\u7684\u589E\u5220\u6539\u67E5" tabindex="-1">3 \u7D22\u5F15\u5185\u5BB9\u7684\u589E\u5220\u6539\u67E5 <a class="header-anchor" href="#_3-\u7D22\u5F15\u5185\u5BB9\u7684\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a></h2><h3 id="_3-1-\u521B\u5EFA\u5B9E\u4F53\u7C7B" tabindex="-1">3.1 \u521B\u5EFA\u5B9E\u4F53\u7C7B <a class="header-anchor" href="#_3-1-\u521B\u5EFA\u5B9E\u4F53\u7C7B" aria-hidden="true">#</a></h3><p>\u5047\u8BBE\u6211\u4EEC\u9700\u8981\u67E5\u8BE2\u7684\u5185\u5BB9\u4E3A\u6587\u7AE0, \u5176\u5185\u5BB9\u5305\u62EC: \u6807\u9898/\u4F5C\u8005/\u6B63\u6587/\u521B\u5EFA\u65F6\u95F4</p><p>\u53EF\u4EE5\u521B\u5EFA\u5982\u4E0B\u5B9E\u4F53\u7C7B:</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Document</span><span class="token punctuation">(</span>indexName <span class="token operator">=</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Article</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> content<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>@Document</code>\u6CE8\u89E3\u7684\u4F5C\u7528\u662F\u6807\u660E\u6B64\u7C7B\u4E3A\u4FDD\u5B58\u5728Elasticsearch\u7684\u5BF9\u8C61, \u5176\u4E2D\u6BD4\u8F83\u91CD\u8981\u7684\u4E24\u4E2A\u53C2\u6570\u662F<strong>\u7D22\u5F15\u540D\u79F0<code>indexName</code><strong>\u548C</strong>\u662F\u5426\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15<code>createIndex</code></strong></p><p><strong>\u6CE8\u610F: <code>createIndex</code>\u7684\u9ED8\u8BA4\u503C\u4E3A<code>true</code></strong></p><h3 id="_3-2-\u521B\u5EFA\u5B58\u50A8\u5E93\u7C7B" tabindex="-1">3.2 \u521B\u5EFA\u5B58\u50A8\u5E93\u7C7B <a class="header-anchor" href="#_3-2-\u521B\u5EFA\u5B58\u50A8\u5E93\u7C7B" aria-hidden="true">#</a></h3><p>\u5B8C\u6210\u5B9E\u4F53\u7C7B\u7684\u521B\u5EFA\u540E, \u548CJPA\u7C7B\u4F3C, \u9700\u8981\u521B\u5EFA\u5B58\u50A8\u5E93\u7C7B</p><p>Spring Data Elasticsearch\u63D0\u4F9B\u4E86<code>ElasticsearchRepository</code>, \u5305\u542B\u4E86\u5982\u4E0B\u56FE\u6240\u793A\u7684\u4E00\u4E9B\u5E38\u7528\u67E5\u8BE2\u65B9\u6CD5:</p><p><img src="`+p+`" alt=""></p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ArticleRepository</span> <span class="token keyword">extends</span> <span class="token class-name">ElasticsearchRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ArticleEntity</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><p>\u5982\u679C\u73B0\u6709\u65B9\u6CD5\u4E0D\u8DB3\u4EE5\u652F\u6491\u4E1A\u52A1, \u53EF\u4EE5\u6839\u636E\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49, \u5177\u4F53\u81EA\u5B9A\u4E49\u65B9\u5F0F\u53EF\u53C2\u8003<a href="https://docs.spring.io/spring-data/elasticsearch/docs/current/reference/html/#elasticsearch.query-methods" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></p><h3 id="_3-3-\u521B\u5EFA\u670D\u52A1\u7C7B" tabindex="-1">3.3 \u521B\u5EFA\u670D\u52A1\u7C7B <a class="header-anchor" href="#_3-3-\u521B\u5EFA\u670D\u52A1\u7C7B" aria-hidden="true">#</a></h3><p>\u57FA\u4E8E\u4E0A\u4E00\u5C0F\u8282\u4E2D\u521B\u5EFA\u7684\u5B58\u50A8\u5E93\u7C7B, \u521B\u5EFA\u670D\u52A1\u7C7B:</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArticleService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ArticleRepository</span> articleRepository<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">&gt;</span></span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> articleRepository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span>pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Article</span> <span class="token function">loadById</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> articleRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">orElse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Article</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Article</span> article<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        article<span class="token punctuation">.</span><span class="token function">setCreateTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> articleRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>article<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateById</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">,</span> <span class="token class-name">Article</span> article<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">&gt;</span></span> optionalDatabaseObject <span class="token operator">=</span> articleRepository<span class="token punctuation">.</span><span class="token function">findById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>optionalDatabaseObject<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E\u4E0D\u5B58\u5728&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Article</span> databaseObject <span class="token operator">=</span> optionalDatabaseObject<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BeanUtil</span><span class="token punctuation">.</span><span class="token function">copyProperties</span><span class="token punctuation">(</span>article<span class="token punctuation">,</span> databaseObject<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        articleRepository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>databaseObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteById</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        articleRepository<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-4-\u521B\u5EFA\u63A5\u53E3" tabindex="-1">3.4 \u521B\u5EFA\u63A5\u53E3 <a class="header-anchor" href="#_3-4-\u521B\u5EFA\u63A5\u53E3" aria-hidden="true">#</a></h3><p>\u57FA\u4E8E\u670D\u52A1\u7C7B\u521B\u5EFAREST\u63A5\u53E3:</p><div class="language-java"><pre><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;articles&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArticleApi</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ArticleService</span> articleService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">&gt;</span></span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> articleService<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span>pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Article</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> articleService<span class="token punctuation">.</span><span class="token function">loadById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PostMapping</span>
    <span class="token keyword">public</span> <span class="token class-name">Article</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Article</span> article<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        articleService<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>article<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> article<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@PutMapping</span><span class="token punctuation">(</span><span class="token string">&quot;{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> id<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Article</span> article<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        articleService<span class="token punctuation">.</span><span class="token function">updateById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> article<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;\u66F4\u65B0\u6210\u529F&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">&quot;{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        articleService<span class="token punctuation">.</span><span class="token function">deleteById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;\u5220\u9664\u6210\u529F&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-5-\u6D4B\u8BD5" tabindex="-1">3.5 \u6D4B\u8BD5 <a class="header-anchor" href="#_3-5-\u6D4B\u8BD5" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F7F\u7528IDEA\u7F16\u8F91\u5668, \u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684http\u6587\u4EF6\u8FDB\u884C\u6D4B\u8BD5:</p><div class="language-"><pre><code>### \u67E5\u8BE2
GET http://localhost:9999/articles
Content-Type: application/json

### \u6839\u636Eid\u67E5\u770B
GET http://localhost:9999/articles/1
Content-Type: application/json

### \u65B0\u589E\u6587\u7AE0
POST http://localhost:9999/articles
Content-Type: application/json

{
  &quot;id&quot;: &quot;1&quot;,
  &quot;title&quot;: &quot;\u6D4B\u8BD51&quot;,
  &quot;author&quot;: &quot;\u6D4B\u8BD51&quot;,
  &quot;content&quot;: &quot;\u6D4B\u8BD51&quot;
}

### \u66F4\u65B0\u6587\u7AE0
PUT http://localhost:9999/articles/1
Content-Type: application/json

{
  &quot;title&quot;: &quot;\u6D4B\u8BD51-\u66F4\u65B0&quot;,
  &quot;author&quot;: &quot;\u6D4B\u8BD51-\u66F4\u65B0&quot;,
  &quot;content&quot;: &quot;\u6D4B\u8BD51-\u66F4\u65B0&quot;
}

### \u5220\u9664\u6587\u7AE0
DELETE http://localhost:9999/articles/1
Content-Type: application/json
</code></pre></div><h2 id="_4-\u5168\u6587\u68C0\u7D22" tabindex="-1">4 \u5168\u6587\u68C0\u7D22 <a class="header-anchor" href="#_4-\u5168\u6587\u68C0\u7D22" aria-hidden="true">#</a></h2><h3 id="_4-1-\u5168\u6587\u68C0\u7D22\u65B9\u6CD5" tabindex="-1">4.1 \u5168\u6587\u68C0\u7D22\u65B9\u6CD5 <a class="header-anchor" href="#_4-1-\u5168\u6587\u68C0\u7D22\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u5047\u8BBE\u5168\u6587\u68C0\u7D22\u7684\u4E1A\u52A1\u9700\u6C42, \u8981\u5BF9\u6587\u7AE0\u7684\u6807\u9898/\u4F5C\u8005/\u6B63\u6587\u8FDB\u884C\u67E5\u8BE2, \u7B2C\u4E09\u7AE0\u4E2D\u7684\u65B9\u6CD5\u65E0\u6CD5\u6EE1\u8DB3</p><p>\u4FEE\u6539\u5B58\u50A8\u5E93\u7C7B, \u589E\u52A0\u5168\u6587\u68C0\u7D22\u65B9\u6CD5:</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ArticleRepository</span> <span class="token keyword">extends</span> <span class="token class-name">ElasticsearchRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByTitleOrAuthorOrContent</span><span class="token punctuation">(</span><span class="token class-name">String</span> title<span class="token punctuation">,</span> <span class="token class-name">String</span> author<span class="token punctuation">,</span> <span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4FEE\u6539\u670D\u52A1\u7C7B:</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArticleService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ArticleRepository</span> articleRepository<span class="token punctuation">;</span>

    <span class="token comment">// \u589E\u5220\u6539\u67E5\u65B9\u6CD5...</span>

    <span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">&gt;</span></span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> articleRepository<span class="token punctuation">.</span><span class="token function">findByTitleOrAuthorOrContent</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> key<span class="token punctuation">,</span> key<span class="token punctuation">,</span> pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u589E\u52A0\u5168\u6587\u68C0\u7D22\u63A5\u53E3:</p><div class="language-java"><pre><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;articles&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArticleApi</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ArticleService</span> articleService<span class="token punctuation">;</span>

    <span class="token comment">// \u589E\u5220\u6539\u67E5\u63A5\u53E3...</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;search/{key}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">&gt;</span></span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> articleService<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5F55\u5165\u6D4B\u8BD5\u6570\u636E\u540E, \u5229\u7528http\u6587\u4EF6\u8FDB\u884C\u6D4B\u8BD5:</p><div class="language-"><pre><code>### \u5168\u6587\u68C0\u7D22
GET http://localhost:9999/articles/search/2\u6708
Content-Type: application/json
</code></pre></div><p>\u5F97\u5230\u6D4B\u8BD5\u7ED3\u679C:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022\u5E742\u670814\u65E5\u5916\u4EA4\u90E8\u53D1\u8A00\u4EBA\u6C6A\u6587\u658C\u4E3B\u6301\u4F8B\u884C\u8BB0\u8005\u4F1A&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5916\u4EA4\u90E8&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u793E\u8BB0\u8005\uFF1A\u4ECA\u5929\u662F\u4E2D\u56FD\u548C\u58A8\u897F\u54E5\u5EFA\u4EA450\u5468\u5E74\u7EAA\u5FF5\u65E5\uFF0C\u4E2D\u65B9\u5982\u4F55\u8BC4\u4EF7\u8FC7\u53BB50\u5E74\u7684\u4E2D\u58A8\u5173\u7CFB\uFF1F\u4ECA\u5929\u5C06\u6709\u54EA\u4E9B\u5E86\u795D\u6D3B\u52A8\uFF1F\u65B0\u534E\u793E\u8BB0\u8005\uFF1A\u4ECA\u5929\u662F\u4E2D\u56FD\u548C\u58A8\u897F\u54E5\u5EFA\u4EA450\u5468\u5E74\u7EAA\u5FF5\u65E5\uFF0C\u4E2D\u65B9\u5982\u4F55\u8BC4\u4EF7\u8FC7\u53BB50\u5E74\u7684\u4E2D\u58A8\u5173\u7CFB\uFF1F\u4ECA\u5929\u5C06\u6709\u54EA\u4E9B\u5E86\u795D\u6D3B\u52A8\uFF1F\u4E3A\u7EAA\u5FF5\u8FD9\u4E00\u53CC\u8FB9\u5173\u7CFB\u53D1\u5C55\u7684\u91CD\u8981\u91CC\u7A0B\u7891\uFF0C\u4ECA\u5929\uFF0C\u738B\u6BC5\u56FD\u52A1\u59D4\u5458\u517C\u5916\u957F\u4E0E\u57C3\u5E03\u62C9\u5FB7\u5916\u957F\u5206\u522B\u5728\u5BF9\u65B9\u56FD\u5BB6\u4E3B\u6D41\u5A92\u4F53\u4E0A\u53D1\u8868\u7F72\u540D\u6587\u7AE0\u3002\u4E2D\u58A8\u4E24\u56FD\u90AE\u653F\u8054\u5408\u53D1\u884C\u300A\u4E2D\u58A8\u5EFA\u4EA4\u4E94\u5341\u5468\u5E74\u300B\u7EAA\u5FF5\u90AE\u7968\u5E76\u4E3E\u884C\u9996\u53D1\u4EEA\u5F0F\u3002\u4E24\u56FD15\u5BF9\u5177\u6709\u4EE3\u8868\u6027\u7684\u53CB\u597D\u7701\u5DDE\u548C\u57CE\u5E02\u8FD8\u5C06\u5728\u5730\u6807\u5EFA\u7B51\u9686\u91CD\u4E3E\u884C\u56FD\u65D7\u8272\u4EAE\u706F\u4EEA\u5F0F\u6216\u706F\u5149\u79C0\uFF0C\u5171\u540C\u5E86\u795D\u4E2D\u58A8\u5EFA\u4EA450\u5468\u5E74\uFF0C\u656C\u8BF7\u5927\u5BB6\u671F\u5F85\u3002&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915609088</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u7F51&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C2\u670814\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C2\u670814\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B4\u5929\u524D\uFF0C\u5F20\u5BB6\u53E3\u4E91\u9876\u6ED1\u96EA\u516C\u56ED\uFF0C31\u5C81\u7684\u5F90\u68A6\u6843\u5728\u5317\u4EAC\u51AC\u5965\u4F1A\u65B0\u589E\u9879\u76EE\u2014\u2014\u81EA\u7531\u5F0F\u6ED1\u96EA\u7A7A\u4E2D\u6280\u5DE7\u6DF7\u5408\u56E2\u4F53\u51B3\u8D5B\u4E2D\uFF0C\u548C\u961F\u53CB\u8D3E\u5B97\u6D0B\u3001\u9F50\u5E7F\u749E\u643A\u624B\u62FF\u4E0B\u94F6\u724C\u3002\u5BF9\u4E8E\u8FD9\u5757\u94F6\u724C\uFF0C\u5F90\u68A6\u6843\u5FC3\u6709\u4E0D\u7518\u3002\u201C\u540E\u9762\u7684\u4E2A\u4EBA\u8D5B\u89C1\u5427\uFF0C\u6211\u5C06\u4F1A\u7A81\u51FA\u91CD\u56F4\uFF0C\u4E3A\u4E2D\u56FD\u7A7A\u4E2D\u6280\u5DE7\u4E89\u593A\u8363\u8A89\u3002\u201D\u8D5B\u540E\uFF0C\u5F90\u68A6\u6843\u7684\u8BDD\u94FF\u9535\u6709\u529B\u3002&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915729196</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6C34\u5E86\u971E\u79F0\u5E0C\u671B\u6709\u4E2A\u4E00\u767E\u5E73\u7C73\u7684\u623F\u5B50 \u81EA\u66DD\u813E\u6C14\u66B4\u8E81&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u592E\u89C6\u65B0\u95FB&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2\u67086\u65E5\uFF0C\u519C\u5386\u65B0\u5E74\u521D\u516D\uFF0C\u4E2D\u56FD\u5973\u8DB3\u65F6\u969416\u5E74\u518D\u6B21\u95EE\u9F0E\u4E9A\u6D32\u676F\uFF0C\u8FD9\u573A\u80DC\u5229\u4E3A\u5979\u4EEC\u7684\u4E9A\u6D32\u676F\u4E4B\u65C5\u753B\u4E0A\u5B8C\u7F8E\u7684\u53E5\u53F7\uFF0C\u66F4\u6210\u4E3A\u5168\u4F53\u56FD\u6C11\u6536\u5230\u7684\u6700\u597D\u7684\u8282\u65E5\u793C\u7269\u3002\u4E09\u5929\u540E\uFF0C\u300A\u9762\u5BF9\u9762\u300B\u680F\u76EE\u548C\u6B63\u5728\u8FDB\u884C\u533B\u5B66\u9694\u79BB\u7684\u4E2D\u56FD\u5973\u8DB3\u56FD\u5BB6\u961F\u4E3B\u6559\u7EC3\u6C34\u5E86\u971E\u8FDB\u884C\u4E86\u8FDE\u7EBF\u4E13\u8BBF\u3002\u8BB0\u8005\uFF1A\u53BB\u5E7411\u670818\u65E5\u5BF9\u5916\u5BA3\u5E03\u60A8\u62C5\u4EFB\u4E3B\u6559\u7EC3\u4E4B\u524D\uFF0C\u60A8\u5C31\u66FE\u7ECF\u8868\u8FBE\u8FC7\uFF0C\u5982\u679C\u6709\u53EF\u80FD\uFF0C\u6211\u613F\u610F\u505A\u4E2D\u56FD\u5973\u8DB3\u7684\u6559\u7EC3\uFF0C\u4E3A\u4EC0\u4E48\uFF1F\u6C34\u5E86\u971E\uFF1A\u4ECE\u4E8B\u8FD9\u4E48\u591A\u5E74\u7684\u5973\u8DB3\u5DE5\u4F5C\uFF0C\u4ECE\u8FD0\u52A8\u5458\u5230\u6559\u7EC3\u5458\u6211\u89C9\u5F97\u5973\u8DB3\u7684\u60C5\u6000\u59CB\u7EC8\u624E\u6839\u5728\u5FC3\u4E2D\uFF0C\u6211\u89C9\u5F97\u6709\u673A\u4F1A\u7684\u8BDD\u8981\u5C1D\u8BD5\u4E00\u4E0B\u5427\u3002\u5BF9\u6C34\u5E86\u971E\u7684\u4E0A\u4EFB\uFF0C\u4E9A\u8DB3\u8054\u5B98\u7F51\u7ED9\u51FA\u8FD9\u6837\u7684\u8BC4\u4EF7\uFF1A\u5979\u66FE\u7ECF11\u5E745\u6B21\u4E3E\u8D77\u4E9A\u6D32\u676F\uFF0C\u662F\u9996\u4F4D\u51FA\u4EFB\u56FD\u5BB6\u961F\u4E3B\u6559\u7EC3\u7684\u9EC4\u91D1\u4E00\u4EE3\u7403\u5458\uFF0C\u5979\u6BD4\u4EFB\u4F55\u4EBA\u90FD\u66F4\u61C2\u5F97\u5982\u4F55\u8D62\u5F97\u5973\u8DB3\u4E9A\u6D32\u676F\u3002\u4F46\u5F53\u65F6\uFF0C\u7559\u7ED9\u65B0\u4EFB\u4E3B\u6559\u7EC3\u51C6\u5907\u51FA\u5F81\u7684\u65F6\u95F4\u5DF2\u7ECF\u4E0D\u8DB3\u4E09\u4E2A\u6708\u3002&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915672785</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pageable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;empty&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sorted&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;unsorted&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pageSize&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pageNumber&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unpaged&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;totalElements&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;last&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;totalPages&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;empty&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sorted&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unsorted&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;numberOfElements&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;empty&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-2-\u9AD8\u4EAE" tabindex="-1">4.2 \u9AD8\u4EAE <a class="header-anchor" href="#_4-2-\u9AD8\u4EAE" aria-hidden="true">#</a></h3><p>\u89C2\u5BDF\u4E0A\u4E00\u8282\u7684\u6D4B\u8BD5\u7ED3\u679C, \u518D\u89C2\u5BDF\u5E38\u7528\u7684\u641C\u7D22\u5F15\u64CE\u7ED3\u679C:</p><p><img src="`+o+`" alt=""></p><p>\u4E24\u8005\u5BF9\u6BD4\u5B58\u5728\u4E24\u4E2A\u8F83\u4E3A\u660E\u663E\u7684\u5DEE\u5F02:</p><ol><li>\u6D4B\u8BD5\u7ED3\u679C\u4E2D\u6CA1\u6709\u5BF9\u5339\u914D\u5185\u5BB9\u8FDB\u884C\u9AD8\u4EAE</li><li>\u6D4B\u8BD5\u7ED3\u679C\u4E2D\u8FD4\u56DE\u4E86\u6587\u7AE0\u6B63\u6587\u7684\u5168\u90E8\u5185\u5BB9, \u800C\u975E\u5339\u914D\u5185\u5BB9\u7684\u622A\u53D6</li></ol><p>\u4F7F\u7528\u6CE8\u89E3<code>@Highlight</code>\u4FEE\u6539\u5B58\u50A8\u5E93\u4E2D\u7684\u5168\u6587\u68C0\u7D22\u65B9\u6CD5\u53EF\u4EE5\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898:</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ArticleRepository</span> <span class="token keyword">extends</span> <span class="token class-name">ElasticsearchRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Highlight</span><span class="token punctuation">(</span>fields <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@HighlightField</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@HighlightField</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;author&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token annotation punctuation">@HighlightField</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token class-name">SearchPage</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByTitleOrAuthorOrContent</span><span class="token punctuation">(</span><span class="token class-name">String</span> title<span class="token punctuation">,</span> <span class="token class-name">String</span> author<span class="token punctuation">,</span> <span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F, \u9664\u4E86\u589E\u52A0\u6CE8\u89E3\u5916, <strong>\u65B9\u6CD5\u7684\u8FD4\u56DE\u7ED3\u6784\u4E5F\u9700\u8981\u4FEE\u6539\u4E3A<code>SearchPage&lt;T&gt;</code></strong>, <code>Page&lt;T&gt;</code>\u7684\u7ED3\u6784\u4E2D\u4E0D\u5305\u542B\u9AD8\u4EAE\u6570\u636E</p><p>\u4F9D\u6B21\u8C03\u6574\u670D\u52A1\u7C7B/\u63A5\u53E3\u7C7B, \u518D\u6B21\u8FDB\u884C\u6D4B\u8BD5\u5F97\u5230\u7684\u7ED3\u679C\u5982\u4E0B:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">1.0043064</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022\u5E742\u670814\u65E5\u5916\u4EA4\u90E8\u53D1\u8A00\u4EBA\u6C6A\u6587\u658C\u4E3B\u6301\u4F8B\u884C\u8BB0\u8005\u4F1A&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5916\u4EA4\u90E8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u793E\u8BB0\u8005\uFF1A\u4ECA\u5929\u662F\u4E2D\u56FD\u548C\u58A8\u897F\u54E5\u5EFA\u4EA450\u5468\u5E74\u7EAA\u5FF5\u65E5\uFF0C\u4E2D\u65B9\u5982\u4F55\u8BC4\u4EF7\u8FC7\u53BB50\u5E74\u7684\u4E2D\u58A8\u5173\u7CFB\uFF1F\u4ECA\u5929\u5C06\u6709\u54EA\u4E9B\u5E86\u795D\u6D3B\u52A8\uFF1F\u65B0\u534E\u793E\u8BB0\u8005\uFF1A\u4ECA\u5929\u662F\u4E2D\u56FD\u548C\u58A8\u897F\u54E5\u5EFA\u4EA450\u5468\u5E74\u7EAA\u5FF5\u65E5\uFF0C\u4E2D\u65B9\u5982\u4F55\u8BC4\u4EF7\u8FC7\u53BB50\u5E74\u7684\u4E2D\u58A8\u5173\u7CFB\uFF1F\u4ECA\u5929\u5C06\u6709\u54EA\u4E9B\u5E86\u795D\u6D3B\u52A8\uFF1F\u4E3A\u7EAA\u5FF5\u8FD9\u4E00\u53CC\u8FB9\u5173\u7CFB\u53D1\u5C55\u7684\u91CD\u8981\u91CC\u7A0B\u7891\uFF0C\u4ECA\u5929\uFF0C\u738B\u6BC5\u56FD\u52A1\u59D4\u5458\u517C\u5916\u957F\u4E0E\u57C3\u5E03\u62C9\u5FB7\u5916\u957F\u5206\u522B\u5728\u5BF9\u65B9\u56FD\u5BB6\u4E3B\u6D41\u5A92\u4F53\u4E0A\u53D1\u8868\u7F72\u540D\u6587\u7AE0\u3002\u4E2D\u58A8\u4E24\u56FD\u90AE\u653F\u8054\u5408\u53D1\u884C\u300A\u4E2D\u58A8\u5EFA\u4EA4\u4E94\u5341\u5468\u5E74\u300B\u7EAA\u5FF5\u90AE\u7968\u5E76\u4E3E\u884C\u9996\u53D1\u4EEA\u5F0F\u3002\u4E24\u56FD15\u5BF9\u5177\u6709\u4EE3\u8868\u6027\u7684\u53CB\u597D\u7701\u5DDE\u548C\u57CE\u5E02\u8FD8\u5C06\u5728\u5730\u6807\u5EFA\u7B51\u9686\u91CD\u4E3E\u884C\u56FD\u65D7\u8272\u4EAE\u706F\u4EEA\u5F0F\u6216\u706F\u5149\u79C0\uFF0C\u5171\u540C\u5E86\u795D\u4E2D\u58A8\u5EFA\u4EA450\u5468\u5E74\uFF0C\u656C\u8BF7\u5927\u5BB6\u671F\u5F85\u3002&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915609088</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;2022\u5E74&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u5916\u4EA4\u90E8\u53D1\u8A00\u4EBA\u6C6A\u6587\u658C\u4E3B\u6301\u4F8B\u884C\u8BB0\u8005\u4F1A&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">0.69008076</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u7F51&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C2\u670814\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C2\u670814\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B4\u5929\u524D\uFF0C\u5F20\u5BB6\u53E3\u4E91\u9876\u6ED1\u96EA\u516C\u56ED\uFF0C31\u5C81\u7684\u5F90\u68A6\u6843\u5728\u5317\u4EAC\u51AC\u5965\u4F1A\u65B0\u589E\u9879\u76EE\u2014\u2014\u81EA\u7531\u5F0F\u6ED1\u96EA\u7A7A\u4E2D\u6280\u5DE7\u6DF7\u5408\u56E2\u4F53\u51B3\u8D5B\u4E2D\uFF0C\u548C\u961F\u53CB\u8D3E\u5B97\u6D0B\u3001\u9F50\u5E7F\u749E\u643A\u624B\u62FF\u4E0B\u94F6\u724C\u3002\u5BF9\u4E8E\u8FD9\u5757\u94F6\u724C\uFF0C\u5F90\u68A6\u6843\u5FC3\u6709\u4E0D\u7518\u3002\u201C\u540E\u9762\u7684\u4E2A\u4EBA\u8D5B\u89C1\u5427\uFF0C\u6211\u5C06\u4F1A\u7A81\u51FA\u91CD\u56F4\uFF0C\u4E3A\u4E2D\u56FD\u7A7A\u4E2D\u6280\u5DE7\u4E89\u593A\u8363\u8A89\u3002\u201D\u8D5B\u540E\uFF0C\u5F90\u68A6\u6843\u7684\u8BDD\u94FF\u9535\u6709\u529B\u3002&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915729196</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B4\u5929\u524D\uFF0C\u5F20\u5BB6\u53E3\u4E91\u9876\u6ED1\u96EA\u516C\u56ED\uFF0C31\u5C81\u7684\u5F90\u68A6\u6843\u5728\u5317\u4EAC\u51AC\u5965\u4F1A\u65B0\u589E\u9879\u76EE&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">0.43025833</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6C34\u5E86\u971E\u79F0\u5E0C\u671B\u6709\u4E2A\u4E00\u767E\u5E73\u7C73\u7684\u623F\u5B50 \u81EA\u66DD\u813E\u6C14\u66B4\u8E81&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u592E\u89C6\u65B0\u95FB&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2\u67086\u65E5\uFF0C\u519C\u5386\u65B0\u5E74\u521D\u516D\uFF0C\u4E2D\u56FD\u5973\u8DB3\u65F6\u969416\u5E74\u518D\u6B21\u95EE\u9F0E\u4E9A\u6D32\u676F\uFF0C\u8FD9\u573A\u80DC\u5229\u4E3A\u5979\u4EEC\u7684\u4E9A\u6D32\u676F\u4E4B\u65C5\u753B\u4E0A\u5B8C\u7F8E\u7684\u53E5\u53F7\uFF0C\u66F4\u6210\u4E3A\u5168\u4F53\u56FD\u6C11\u6536\u5230\u7684\u6700\u597D\u7684\u8282\u65E5\u793C\u7269\u3002\u4E09\u5929\u540E\uFF0C\u300A\u9762\u5BF9\u9762\u300B\u680F\u76EE\u548C\u6B63\u5728\u8FDB\u884C\u533B\u5B66\u9694\u79BB\u7684\u4E2D\u56FD\u5973\u8DB3\u56FD\u5BB6\u961F\u4E3B\u6559\u7EC3\u6C34\u5E86\u971E\u8FDB\u884C\u4E86\u8FDE\u7EBF\u4E13\u8BBF\u3002\u8BB0\u8005\uFF1A\u53BB\u5E7411\u670818\u65E5\u5BF9\u5916\u5BA3\u5E03\u60A8\u62C5\u4EFB\u4E3B\u6559\u7EC3\u4E4B\u524D\uFF0C\u60A8\u5C31\u66FE\u7ECF\u8868\u8FBE\u8FC7\uFF0C\u5982\u679C\u6709\u53EF\u80FD\uFF0C\u6211\u613F\u610F\u505A\u4E2D\u56FD\u5973\u8DB3\u7684\u6559\u7EC3\uFF0C\u4E3A\u4EC0\u4E48\uFF1F\u6C34\u5E86\u971E\uFF1A\u4ECE\u4E8B\u8FD9\u4E48\u591A\u5E74\u7684\u5973\u8DB3\u5DE5\u4F5C\uFF0C\u4ECE\u8FD0\u52A8\u5458\u5230\u6559\u7EC3\u5458\u6211\u89C9\u5F97\u5973\u8DB3\u7684\u60C5\u6000\u59CB\u7EC8\u624E\u6839\u5728\u5FC3\u4E2D\uFF0C\u6211\u89C9\u5F97\u6709\u673A\u4F1A\u7684\u8BDD\u8981\u5C1D\u8BD5\u4E00\u4E0B\u5427\u3002\u5BF9\u6C34\u5E86\u971E\u7684\u4E0A\u4EFB\uFF0C\u4E9A\u8DB3\u8054\u5B98\u7F51\u7ED9\u51FA\u8FD9\u6837\u7684\u8BC4\u4EF7\uFF1A\u5979\u66FE\u7ECF11\u5E745\u6B21\u4E3E\u8D77\u4E9A\u6D32\u676F\uFF0C\u662F\u9996\u4F4D\u51FA\u4EFB\u56FD\u5BB6\u961F\u4E3B\u6559\u7EC3\u7684\u9EC4\u91D1\u4E00\u4EE3\u7403\u5458\uFF0C\u5979\u6BD4\u4EFB\u4F55\u4EBA\u90FD\u66F4\u61C2\u5F97\u5982\u4F55\u8D62\u5F97\u5973\u8DB3\u4E9A\u6D32\u676F\u3002\u4F46\u5F53\u65F6\uFF0C\u7559\u7ED9\u65B0\u4EFB\u4E3B\u6559\u7EC3\u51C6\u5907\u51FA\u5F81\u7684\u65F6\u95F4\u5DF2\u7ECF\u4E0D\u8DB3\u4E09\u4E2A\u6708\u3002&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915672785</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;&lt;em&gt;2\u6708&lt;/em&gt;6\u65E5\uFF0C\u519C\u5386\u65B0\u5E74\u521D\u516D\uFF0C\u4E2D\u56FD\u5973\u8DB3\u65F6\u969416\u5E74\u518D\u6B21\u95EE\u9F0E\u4E9A\u6D32\u676F\uFF0C\u8FD9\u573A\u80DC\u5229\u4E3A\u5979\u4EEC\u7684\u4E9A\u6D32\u676F\u4E4B\u65C5\u753B\u4E0A\u5B8C\u7F8E\u7684\u53E5\u53F7\uFF0C\u66F4\u6210\u4E3A\u5168\u4F53\u56FD\u6C11\u6536\u5230\u7684\u6700\u597D\u7684\u8282\u65E5\u793C\u7269\u3002&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pageable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;empty&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sorted&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;unsorted&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pageNumber&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pageSize&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unpaged&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;searchHits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;totalHits&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;totalHitsRelation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EQUAL_TO&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;maxScore&quot;</span><span class="token operator">:</span> <span class="token number">1.0043064</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchHits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">1.0043064</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022\u5E742\u670814\u65E5\u5916\u4EA4\u90E8\u53D1\u8A00\u4EBA\u6C6A\u6587\u658C\u4E3B\u6301\u4F8B\u884C\u8BB0\u8005\u4F1A&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5916\u4EA4\u90E8&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u793E\u8BB0\u8005\uFF1A\u4ECA\u5929\u662F\u4E2D\u56FD\u548C\u58A8\u897F\u54E5\u5EFA\u4EA450\u5468\u5E74\u7EAA\u5FF5\u65E5\uFF0C\u4E2D\u65B9\u5982\u4F55\u8BC4\u4EF7\u8FC7\u53BB50\u5E74\u7684\u4E2D\u58A8\u5173\u7CFB\uFF1F\u4ECA\u5929\u5C06\u6709\u54EA\u4E9B\u5E86\u795D\u6D3B\u52A8\uFF1F\u65B0\u534E\u793E\u8BB0\u8005\uFF1A\u4ECA\u5929\u662F\u4E2D\u56FD\u548C\u58A8\u897F\u54E5\u5EFA\u4EA450\u5468\u5E74\u7EAA\u5FF5\u65E5\uFF0C\u4E2D\u65B9\u5982\u4F55\u8BC4\u4EF7\u8FC7\u53BB50\u5E74\u7684\u4E2D\u58A8\u5173\u7CFB\uFF1F\u4ECA\u5929\u5C06\u6709\u54EA\u4E9B\u5E86\u795D\u6D3B\u52A8\uFF1F\u4E3A\u7EAA\u5FF5\u8FD9\u4E00\u53CC\u8FB9\u5173\u7CFB\u53D1\u5C55\u7684\u91CD\u8981\u91CC\u7A0B\u7891\uFF0C\u4ECA\u5929\uFF0C\u738B\u6BC5\u56FD\u52A1\u59D4\u5458\u517C\u5916\u957F\u4E0E\u57C3\u5E03\u62C9\u5FB7\u5916\u957F\u5206\u522B\u5728\u5BF9\u65B9\u56FD\u5BB6\u4E3B\u6D41\u5A92\u4F53\u4E0A\u53D1\u8868\u7F72\u540D\u6587\u7AE0\u3002\u4E2D\u58A8\u4E24\u56FD\u90AE\u653F\u8054\u5408\u53D1\u884C\u300A\u4E2D\u58A8\u5EFA\u4EA4\u4E94\u5341\u5468\u5E74\u300B\u7EAA\u5FF5\u90AE\u7968\u5E76\u4E3E\u884C\u9996\u53D1\u4EEA\u5F0F\u3002\u4E24\u56FD15\u5BF9\u5177\u6709\u4EE3\u8868\u6027\u7684\u53CB\u597D\u7701\u5DDE\u548C\u57CE\u5E02\u8FD8\u5C06\u5728\u5730\u6807\u5EFA\u7B51\u9686\u91CD\u4E3E\u884C\u56FD\u65D7\u8272\u4EAE\u706F\u4EEA\u5F0F\u6216\u706F\u5149\u79C0\uFF0C\u5171\u540C\u5E86\u795D\u4E2D\u58A8\u5EFA\u4EA450\u5468\u5E74\uFF0C\u656C\u8BF7\u5927\u5BB6\u671F\u5F85\u3002&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915609088</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;2022\u5E74&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u5916\u4EA4\u90E8\u53D1\u8A00\u4EBA\u6C6A\u6587\u658C\u4E3B\u6301\u4F8B\u884C\u8BB0\u8005\u4F1A&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">0.69008076</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u7F51&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C2\u670814\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C2\u670814\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B4\u5929\u524D\uFF0C\u5F20\u5BB6\u53E3\u4E91\u9876\u6ED1\u96EA\u516C\u56ED\uFF0C31\u5C81\u7684\u5F90\u68A6\u6843\u5728\u5317\u4EAC\u51AC\u5965\u4F1A\u65B0\u589E\u9879\u76EE\u2014\u2014\u81EA\u7531\u5F0F\u6ED1\u96EA\u7A7A\u4E2D\u6280\u5DE7\u6DF7\u5408\u56E2\u4F53\u51B3\u8D5B\u4E2D\uFF0C\u548C\u961F\u53CB\u8D3E\u5B97\u6D0B\u3001\u9F50\u5E7F\u749E\u643A\u624B\u62FF\u4E0B\u94F6\u724C\u3002\u5BF9\u4E8E\u8FD9\u5757\u94F6\u724C\uFF0C\u5F90\u68A6\u6843\u5FC3\u6709\u4E0D\u7518\u3002\u201C\u540E\u9762\u7684\u4E2A\u4EBA\u8D5B\u89C1\u5427\uFF0C\u6211\u5C06\u4F1A\u7A81\u51FA\u91CD\u56F4\uFF0C\u4E3A\u4E2D\u56FD\u7A7A\u4E2D\u6280\u5DE7\u4E89\u593A\u8363\u8A89\u3002\u201D\u8D5B\u540E\uFF0C\u5F90\u68A6\u6843\u7684\u8BDD\u94FF\u9535\u6709\u529B\u3002&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915729196</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B4\u5929\u524D\uFF0C\u5F20\u5BB6\u53E3\u4E91\u9876\u6ED1\u96EA\u516C\u56ED\uFF0C31\u5C81\u7684\u5F90\u68A6\u6843\u5728\u5317\u4EAC\u51AC\u5965\u4F1A\u65B0\u589E\u9879\u76EE&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">0.43025833</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6C34\u5E86\u971E\u79F0\u5E0C\u671B\u6709\u4E2A\u4E00\u767E\u5E73\u7C73\u7684\u623F\u5B50 \u81EA\u66DD\u813E\u6C14\u66B4\u8E81&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u592E\u89C6\u65B0\u95FB&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2\u67086\u65E5\uFF0C\u519C\u5386\u65B0\u5E74\u521D\u516D\uFF0C\u4E2D\u56FD\u5973\u8DB3\u65F6\u969416\u5E74\u518D\u6B21\u95EE\u9F0E\u4E9A\u6D32\u676F\uFF0C\u8FD9\u573A\u80DC\u5229\u4E3A\u5979\u4EEC\u7684\u4E9A\u6D32\u676F\u4E4B\u65C5\u753B\u4E0A\u5B8C\u7F8E\u7684\u53E5\u53F7\uFF0C\u66F4\u6210\u4E3A\u5168\u4F53\u56FD\u6C11\u6536\u5230\u7684\u6700\u597D\u7684\u8282\u65E5\u793C\u7269\u3002\u4E09\u5929\u540E\uFF0C\u300A\u9762\u5BF9\u9762\u300B\u680F\u76EE\u548C\u6B63\u5728\u8FDB\u884C\u533B\u5B66\u9694\u79BB\u7684\u4E2D\u56FD\u5973\u8DB3\u56FD\u5BB6\u961F\u4E3B\u6559\u7EC3\u6C34\u5E86\u971E\u8FDB\u884C\u4E86\u8FDE\u7EBF\u4E13\u8BBF\u3002\u8BB0\u8005\uFF1A\u53BB\u5E7411\u670818\u65E5\u5BF9\u5916\u5BA3\u5E03\u60A8\u62C5\u4EFB\u4E3B\u6559\u7EC3\u4E4B\u524D\uFF0C\u60A8\u5C31\u66FE\u7ECF\u8868\u8FBE\u8FC7\uFF0C\u5982\u679C\u6709\u53EF\u80FD\uFF0C\u6211\u613F\u610F\u505A\u4E2D\u56FD\u5973\u8DB3\u7684\u6559\u7EC3\uFF0C\u4E3A\u4EC0\u4E48\uFF1F\u6C34\u5E86\u971E\uFF1A\u4ECE\u4E8B\u8FD9\u4E48\u591A\u5E74\u7684\u5973\u8DB3\u5DE5\u4F5C\uFF0C\u4ECE\u8FD0\u52A8\u5458\u5230\u6559\u7EC3\u5458\u6211\u89C9\u5F97\u5973\u8DB3\u7684\u60C5\u6000\u59CB\u7EC8\u624E\u6839\u5728\u5FC3\u4E2D\uFF0C\u6211\u89C9\u5F97\u6709\u673A\u4F1A\u7684\u8BDD\u8981\u5C1D\u8BD5\u4E00\u4E0B\u5427\u3002\u5BF9\u6C34\u5E86\u971E\u7684\u4E0A\u4EFB\uFF0C\u4E9A\u8DB3\u8054\u5B98\u7F51\u7ED9\u51FA\u8FD9\u6837\u7684\u8BC4\u4EF7\uFF1A\u5979\u66FE\u7ECF11\u5E745\u6B21\u4E3E\u8D77\u4E9A\u6D32\u676F\uFF0C\u662F\u9996\u4F4D\u51FA\u4EFB\u56FD\u5BB6\u961F\u4E3B\u6559\u7EC3\u7684\u9EC4\u91D1\u4E00\u4EE3\u7403\u5458\uFF0C\u5979\u6BD4\u4EFB\u4F55\u4EBA\u90FD\u66F4\u61C2\u5F97\u5982\u4F55\u8D62\u5F97\u5973\u8DB3\u4E9A\u6D32\u676F\u3002\u4F46\u5F53\u65F6\uFF0C\u7559\u7ED9\u65B0\u4EFB\u4E3B\u6559\u7EC3\u51C6\u5907\u51FA\u5F81\u7684\u65F6\u95F4\u5DF2\u7ECF\u4E0D\u8DB3\u4E09\u4E2A\u6708\u3002&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915672785</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;em&gt;2\u6708&lt;/em&gt;6\u65E5\uFF0C\u519C\u5386\u65B0\u5E74\u521D\u516D\uFF0C\u4E2D\u56FD\u5973\u8DB3\u65F6\u969416\u5E74\u518D\u6B21\u95EE\u9F0E\u4E9A\u6D32\u676F\uFF0C\u8FD9\u573A\u80DC\u5229\u4E3A\u5979\u4EEC\u7684\u4E9A\u6D32\u676F\u4E4B\u65C5\u753B\u4E0A\u5B8C\u7F8E\u7684\u53E5\u53F7\uFF0C\u66F4\u6210\u4E3A\u5168\u4F53\u56FD\u6C11\u6536\u5230\u7684\u6700\u597D\u7684\u8282\u65E5\u793C\u7269\u3002&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;empty&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;totalElements&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;totalPages&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;empty&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sorted&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unsorted&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;numberOfElements&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;last&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;empty&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5176\u4E2D<code>highlightFields</code>\u5C5E\u6027\u4E2D\u7684\u5185\u5BB9\u5373\u4E3A\u6240\u9700\u5185\u5BB9, \u4E14\u5BF9\u6B63\u6587\u5185\u5BB9\u8FDB\u884C\u4E86\u622A\u53D6, \u53EA\u663E\u793A\u5339\u914D\u90E8\u5206</p><h3 id="_4-3-\u6392\u5E8F" tabindex="-1">4.3 \u6392\u5E8F <a class="header-anchor" href="#_4-3-\u6392\u5E8F" aria-hidden="true">#</a></h3><p>\u89C2\u5BDF\u4E0A\u4E00\u5C0F\u8282\u7684\u6D4B\u8BD5\u7ED3\u679C, \u53EF\u4EE5\u53D1\u73B0\u9ED8\u8BA4\u6392\u5E8F\u5B57\u6BB5\u662F<code>score</code></p><p>\u4F7F\u7528Spring Data\u5206\u9875\u67E5\u8BE2, \u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u5B9E\u73B0\u81EA\u5B9A\u4E49\u6392\u5E8F:</p><div class="language-"><pre><code>### \u641C\u7D22\u5E76\u81EA\u5B9A\u4E49\u6392\u5E8F
GET http://localhost:9999/articles/search/2\u6708?sort=score,desc
Content-Type: application/json
</code></pre></div><p>\u6267\u884C\u8BF7\u6C42\u540E, \u4F1A\u53D1\u73B0\u76F4\u63A5\u629B\u51FA\u5F02\u5E38<code>No mapping found for [score] in order to sort</code></p><p>\u8FD9\u91CC\u6709\u4E2A\u5C0F\u5751, \u9700\u8981\u63D0\u524D\u9605\u8BFB<a href="https://www.elastic.co/guide/en/elasticsearch/reference/7.15/sort-search-results.html" target="_blank" rel="noopener noreferrer">Elasticsearch\u6392\u5E8F\u76F8\u5173\u6587\u6863</a></p><p>\u5728Elasticsearch\u4E2D, \u6392\u5E8F\u5B57\u6BB5\u540D\u79F0\u4E3A<code>_score</code>, \u5E76\u975E\u521A\u624D\u8BF4\u7684<code>score</code></p><p>\u518D\u6B21\u4FEE\u6539\u8BF7\u6C42, \u5E76\u52A0\u5165\u6309\u521B\u5EFA\u65F6\u95F4\u5012\u5E8F\u7684\u81EA\u5B9A\u4E49\u6392\u5E8F:</p><div class="language-"><pre><code>### \u641C\u7D22\u5E76\u81EA\u5B9A\u4E49\u6392\u5E8F
GET http://localhost:9999/articles/search/2\u6708?sort=_score,desc&amp;sort=createTime,desc
Content-Type: application/json
</code></pre></div><p>\u6D4B\u8BD5\u7ED3\u679C:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">1.0043064</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sortValues&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">1.0043064</span><span class="token punctuation">,</span>
        <span class="token number">1644915609088</span><span class="token punctuation">,</span>
        <span class="token number">1.0043064</span><span class="token punctuation">,</span>
        <span class="token number">1644915609088</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022\u5E742\u670814\u65E5\u5916\u4EA4\u90E8\u53D1\u8A00\u4EBA\u6C6A\u6587\u658C\u4E3B\u6301\u4F8B\u884C\u8BB0\u8005\u4F1A&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5916\u4EA4\u90E8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u793E\u8BB0\u8005\uFF1A\u4ECA\u5929\u662F\u4E2D\u56FD\u548C\u58A8\u897F\u54E5\u5EFA\u4EA450\u5468\u5E74\u7EAA\u5FF5\u65E5\uFF0C\u4E2D\u65B9\u5982\u4F55\u8BC4\u4EF7\u8FC7\u53BB50\u5E74\u7684\u4E2D\u58A8\u5173\u7CFB\uFF1F\u4ECA\u5929\u5C06\u6709\u54EA\u4E9B\u5E86\u795D\u6D3B\u52A8\uFF1F\u65B0\u534E\u793E\u8BB0\u8005\uFF1A\u4ECA\u5929\u662F\u4E2D\u56FD\u548C\u58A8\u897F\u54E5\u5EFA\u4EA450\u5468\u5E74\u7EAA\u5FF5\u65E5\uFF0C\u4E2D\u65B9\u5982\u4F55\u8BC4\u4EF7\u8FC7\u53BB50\u5E74\u7684\u4E2D\u58A8\u5173\u7CFB\uFF1F\u4ECA\u5929\u5C06\u6709\u54EA\u4E9B\u5E86\u795D\u6D3B\u52A8\uFF1F\u4E3A\u7EAA\u5FF5\u8FD9\u4E00\u53CC\u8FB9\u5173\u7CFB\u53D1\u5C55\u7684\u91CD\u8981\u91CC\u7A0B\u7891\uFF0C\u4ECA\u5929\uFF0C\u738B\u6BC5\u56FD\u52A1\u59D4\u5458\u517C\u5916\u957F\u4E0E\u57C3\u5E03\u62C9\u5FB7\u5916\u957F\u5206\u522B\u5728\u5BF9\u65B9\u56FD\u5BB6\u4E3B\u6D41\u5A92\u4F53\u4E0A\u53D1\u8868\u7F72\u540D\u6587\u7AE0\u3002\u4E2D\u58A8\u4E24\u56FD\u90AE\u653F\u8054\u5408\u53D1\u884C\u300A\u4E2D\u58A8\u5EFA\u4EA4\u4E94\u5341\u5468\u5E74\u300B\u7EAA\u5FF5\u90AE\u7968\u5E76\u4E3E\u884C\u9996\u53D1\u4EEA\u5F0F\u3002\u4E24\u56FD15\u5BF9\u5177\u6709\u4EE3\u8868\u6027\u7684\u53CB\u597D\u7701\u5DDE\u548C\u57CE\u5E02\u8FD8\u5C06\u5728\u5730\u6807\u5EFA\u7B51\u9686\u91CD\u4E3E\u884C\u56FD\u65D7\u8272\u4EAE\u706F\u4EEA\u5F0F\u6216\u706F\u5149\u79C0\uFF0C\u5171\u540C\u5E86\u795D\u4E2D\u58A8\u5EFA\u4EA450\u5468\u5E74\uFF0C\u656C\u8BF7\u5927\u5BB6\u671F\u5F85\u3002&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915609088</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;2022\u5E74&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u5916\u4EA4\u90E8\u53D1\u8A00\u4EBA\u6C6A\u6587\u658C\u4E3B\u6301\u4F8B\u884C\u8BB0\u8005\u4F1A&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">0.69008076</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sortValues&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">0.69008076</span><span class="token punctuation">,</span>
        <span class="token number">1644915729196</span><span class="token punctuation">,</span>
        <span class="token number">0.69008076</span><span class="token punctuation">,</span>
        <span class="token number">1644915729196</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u7F51&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C2\u670814\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C2\u670814\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B4\u5929\u524D\uFF0C\u5F20\u5BB6\u53E3\u4E91\u9876\u6ED1\u96EA\u516C\u56ED\uFF0C31\u5C81\u7684\u5F90\u68A6\u6843\u5728\u5317\u4EAC\u51AC\u5965\u4F1A\u65B0\u589E\u9879\u76EE\u2014\u2014\u81EA\u7531\u5F0F\u6ED1\u96EA\u7A7A\u4E2D\u6280\u5DE7\u6DF7\u5408\u56E2\u4F53\u51B3\u8D5B\u4E2D\uFF0C\u548C\u961F\u53CB\u8D3E\u5B97\u6D0B\u3001\u9F50\u5E7F\u749E\u643A\u624B\u62FF\u4E0B\u94F6\u724C\u3002\u5BF9\u4E8E\u8FD9\u5757\u94F6\u724C\uFF0C\u5F90\u68A6\u6843\u5FC3\u6709\u4E0D\u7518\u3002\u201C\u540E\u9762\u7684\u4E2A\u4EBA\u8D5B\u89C1\u5427\uFF0C\u6211\u5C06\u4F1A\u7A81\u51FA\u91CD\u56F4\uFF0C\u4E3A\u4E2D\u56FD\u7A7A\u4E2D\u6280\u5DE7\u4E89\u593A\u8363\u8A89\u3002\u201D\u8D5B\u540E\uFF0C\u5F90\u68A6\u6843\u7684\u8BDD\u94FF\u9535\u6709\u529B\u3002&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915729196</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B4\u5929\u524D\uFF0C\u5F20\u5BB6\u53E3\u4E91\u9876\u6ED1\u96EA\u516C\u56ED\uFF0C31\u5C81\u7684\u5F90\u68A6\u6843\u5728\u5317\u4EAC\u51AC\u5965\u4F1A\u65B0\u589E\u9879\u76EE&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">0.43025833</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sortValues&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token number">0.43025833</span><span class="token punctuation">,</span>
        <span class="token number">1644915672785</span><span class="token punctuation">,</span>
        <span class="token number">0.43025833</span><span class="token punctuation">,</span>
        <span class="token number">1644915672785</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6C34\u5E86\u971E\u79F0\u5E0C\u671B\u6709\u4E2A\u4E00\u767E\u5E73\u7C73\u7684\u623F\u5B50 \u81EA\u66DD\u813E\u6C14\u66B4\u8E81&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u592E\u89C6\u65B0\u95FB&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2\u67086\u65E5\uFF0C\u519C\u5386\u65B0\u5E74\u521D\u516D\uFF0C\u4E2D\u56FD\u5973\u8DB3\u65F6\u969416\u5E74\u518D\u6B21\u95EE\u9F0E\u4E9A\u6D32\u676F\uFF0C\u8FD9\u573A\u80DC\u5229\u4E3A\u5979\u4EEC\u7684\u4E9A\u6D32\u676F\u4E4B\u65C5\u753B\u4E0A\u5B8C\u7F8E\u7684\u53E5\u53F7\uFF0C\u66F4\u6210\u4E3A\u5168\u4F53\u56FD\u6C11\u6536\u5230\u7684\u6700\u597D\u7684\u8282\u65E5\u793C\u7269\u3002\u4E09\u5929\u540E\uFF0C\u300A\u9762\u5BF9\u9762\u300B\u680F\u76EE\u548C\u6B63\u5728\u8FDB\u884C\u533B\u5B66\u9694\u79BB\u7684\u4E2D\u56FD\u5973\u8DB3\u56FD\u5BB6\u961F\u4E3B\u6559\u7EC3\u6C34\u5E86\u971E\u8FDB\u884C\u4E86\u8FDE\u7EBF\u4E13\u8BBF\u3002\u8BB0\u8005\uFF1A\u53BB\u5E7411\u670818\u65E5\u5BF9\u5916\u5BA3\u5E03\u60A8\u62C5\u4EFB\u4E3B\u6559\u7EC3\u4E4B\u524D\uFF0C\u60A8\u5C31\u66FE\u7ECF\u8868\u8FBE\u8FC7\uFF0C\u5982\u679C\u6709\u53EF\u80FD\uFF0C\u6211\u613F\u610F\u505A\u4E2D\u56FD\u5973\u8DB3\u7684\u6559\u7EC3\uFF0C\u4E3A\u4EC0\u4E48\uFF1F\u6C34\u5E86\u971E\uFF1A\u4ECE\u4E8B\u8FD9\u4E48\u591A\u5E74\u7684\u5973\u8DB3\u5DE5\u4F5C\uFF0C\u4ECE\u8FD0\u52A8\u5458\u5230\u6559\u7EC3\u5458\u6211\u89C9\u5F97\u5973\u8DB3\u7684\u60C5\u6000\u59CB\u7EC8\u624E\u6839\u5728\u5FC3\u4E2D\uFF0C\u6211\u89C9\u5F97\u6709\u673A\u4F1A\u7684\u8BDD\u8981\u5C1D\u8BD5\u4E00\u4E0B\u5427\u3002\u5BF9\u6C34\u5E86\u971E\u7684\u4E0A\u4EFB\uFF0C\u4E9A\u8DB3\u8054\u5B98\u7F51\u7ED9\u51FA\u8FD9\u6837\u7684\u8BC4\u4EF7\uFF1A\u5979\u66FE\u7ECF11\u5E745\u6B21\u4E3E\u8D77\u4E9A\u6D32\u676F\uFF0C\u662F\u9996\u4F4D\u51FA\u4EFB\u56FD\u5BB6\u961F\u4E3B\u6559\u7EC3\u7684\u9EC4\u91D1\u4E00\u4EE3\u7403\u5458\uFF0C\u5979\u6BD4\u4EFB\u4F55\u4EBA\u90FD\u66F4\u61C2\u5F97\u5982\u4F55\u8D62\u5F97\u5973\u8DB3\u4E9A\u6D32\u676F\u3002\u4F46\u5F53\u65F6\uFF0C\u7559\u7ED9\u65B0\u4EFB\u4E3B\u6559\u7EC3\u51C6\u5907\u51FA\u5F81\u7684\u65F6\u95F4\u5DF2\u7ECF\u4E0D\u8DB3\u4E09\u4E2A\u6708\u3002&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915672785</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;&lt;em&gt;2\u6708&lt;/em&gt;6\u65E5\uFF0C\u519C\u5386\u65B0\u5E74\u521D\u516D\uFF0C\u4E2D\u56FD\u5973\u8DB3\u65F6\u969416\u5E74\u518D\u6B21\u95EE\u9F0E\u4E9A\u6D32\u676F\uFF0C\u8FD9\u573A\u80DC\u5229\u4E3A\u5979\u4EEC\u7684\u4E9A\u6D32\u676F\u4E4B\u65C5\u753B\u4E0A\u5B8C\u7F8E\u7684\u53E5\u53F7\uFF0C\u66F4\u6210\u4E3A\u5168\u4F53\u56FD\u6C11\u6536\u5230\u7684\u6700\u597D\u7684\u8282\u65E5\u793C\u7269\u3002&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pageable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;empty&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sorted&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;unsorted&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pageNumber&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pageSize&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    <span class="token property">&quot;paged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unpaged&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;searchHits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;totalHits&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;totalHitsRelation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EQUAL_TO&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;maxScore&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NaN&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;searchHits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">1.0043064</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sortValues&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">1.0043064</span><span class="token punctuation">,</span>
          <span class="token number">1644915609088</span><span class="token punctuation">,</span>
          <span class="token number">1.0043064</span><span class="token punctuation">,</span>
          <span class="token number">1644915609088</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022\u5E742\u670814\u65E5\u5916\u4EA4\u90E8\u53D1\u8A00\u4EBA\u6C6A\u6587\u658C\u4E3B\u6301\u4F8B\u884C\u8BB0\u8005\u4F1A&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5916\u4EA4\u90E8&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u793E\u8BB0\u8005\uFF1A\u4ECA\u5929\u662F\u4E2D\u56FD\u548C\u58A8\u897F\u54E5\u5EFA\u4EA450\u5468\u5E74\u7EAA\u5FF5\u65E5\uFF0C\u4E2D\u65B9\u5982\u4F55\u8BC4\u4EF7\u8FC7\u53BB50\u5E74\u7684\u4E2D\u58A8\u5173\u7CFB\uFF1F\u4ECA\u5929\u5C06\u6709\u54EA\u4E9B\u5E86\u795D\u6D3B\u52A8\uFF1F\u65B0\u534E\u793E\u8BB0\u8005\uFF1A\u4ECA\u5929\u662F\u4E2D\u56FD\u548C\u58A8\u897F\u54E5\u5EFA\u4EA450\u5468\u5E74\u7EAA\u5FF5\u65E5\uFF0C\u4E2D\u65B9\u5982\u4F55\u8BC4\u4EF7\u8FC7\u53BB50\u5E74\u7684\u4E2D\u58A8\u5173\u7CFB\uFF1F\u4ECA\u5929\u5C06\u6709\u54EA\u4E9B\u5E86\u795D\u6D3B\u52A8\uFF1F\u4E3A\u7EAA\u5FF5\u8FD9\u4E00\u53CC\u8FB9\u5173\u7CFB\u53D1\u5C55\u7684\u91CD\u8981\u91CC\u7A0B\u7891\uFF0C\u4ECA\u5929\uFF0C\u738B\u6BC5\u56FD\u52A1\u59D4\u5458\u517C\u5916\u957F\u4E0E\u57C3\u5E03\u62C9\u5FB7\u5916\u957F\u5206\u522B\u5728\u5BF9\u65B9\u56FD\u5BB6\u4E3B\u6D41\u5A92\u4F53\u4E0A\u53D1\u8868\u7F72\u540D\u6587\u7AE0\u3002\u4E2D\u58A8\u4E24\u56FD\u90AE\u653F\u8054\u5408\u53D1\u884C\u300A\u4E2D\u58A8\u5EFA\u4EA4\u4E94\u5341\u5468\u5E74\u300B\u7EAA\u5FF5\u90AE\u7968\u5E76\u4E3E\u884C\u9996\u53D1\u4EEA\u5F0F\u3002\u4E24\u56FD15\u5BF9\u5177\u6709\u4EE3\u8868\u6027\u7684\u53CB\u597D\u7701\u5DDE\u548C\u57CE\u5E02\u8FD8\u5C06\u5728\u5730\u6807\u5EFA\u7B51\u9686\u91CD\u4E3E\u884C\u56FD\u65D7\u8272\u4EAE\u706F\u4EEA\u5F0F\u6216\u706F\u5149\u79C0\uFF0C\u5171\u540C\u5E86\u795D\u4E2D\u58A8\u5EFA\u4EA450\u5468\u5E74\uFF0C\u656C\u8BF7\u5927\u5BB6\u671F\u5F85\u3002&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915609088</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;2022\u5E74&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u5916\u4EA4\u90E8\u53D1\u8A00\u4EBA\u6C6A\u6587\u658C\u4E3B\u6301\u4F8B\u884C\u8BB0\u8005\u4F1A&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">0.69008076</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sortValues&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">0.69008076</span><span class="token punctuation">,</span>
          <span class="token number">1644915729196</span><span class="token punctuation">,</span>
          <span class="token number">0.69008076</span><span class="token punctuation">,</span>
          <span class="token number">1644915729196</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u7F51&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C2\u670814\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C2\u670814\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B4\u5929\u524D\uFF0C\u5F20\u5BB6\u53E3\u4E91\u9876\u6ED1\u96EA\u516C\u56ED\uFF0C31\u5C81\u7684\u5F90\u68A6\u6843\u5728\u5317\u4EAC\u51AC\u5965\u4F1A\u65B0\u589E\u9879\u76EE\u2014\u2014\u81EA\u7531\u5F0F\u6ED1\u96EA\u7A7A\u4E2D\u6280\u5DE7\u6DF7\u5408\u56E2\u4F53\u51B3\u8D5B\u4E2D\uFF0C\u548C\u961F\u53CB\u8D3E\u5B97\u6D0B\u3001\u9F50\u5E7F\u749E\u643A\u624B\u62FF\u4E0B\u94F6\u724C\u3002\u5BF9\u4E8E\u8FD9\u5757\u94F6\u724C\uFF0C\u5F90\u68A6\u6843\u5FC3\u6709\u4E0D\u7518\u3002\u201C\u540E\u9762\u7684\u4E2A\u4EBA\u8D5B\u89C1\u5427\uFF0C\u6211\u5C06\u4F1A\u7A81\u51FA\u91CD\u56F4\uFF0C\u4E3A\u4E2D\u56FD\u7A7A\u4E2D\u6280\u5DE7\u4E89\u593A\u8363\u8A89\u3002\u201D\u8D5B\u540E\uFF0C\u5F90\u68A6\u6843\u7684\u8BDD\u94FF\u9535\u6709\u529B\u3002&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915729196</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B\u65B0\u534E\u793E\u6CB3\u5317\u5D07\u793C&lt;em&gt;2\u6708&lt;/em&gt;14\u65E5\u7535\u3000\u9898\uFF1A16\u5E74\u7B49\u5F85\uFF0C\u7A7A\u4E2D\u6280\u5DE7\u201C\u738B\u724C\u4E4B\u5E08\u201D\u518D\u593A\u51AC\u5965\u51A0\u519B4\u5929\u524D\uFF0C\u5F20\u5BB6\u53E3\u4E91\u9876\u6ED1\u96EA\u516C\u56ED\uFF0C31\u5C81\u7684\u5F90\u68A6\u6843\u5728\u5317\u4EAC\u51AC\u5965\u4F1A\u65B0\u589E\u9879\u76EE&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">0.43025833</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sortValues&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">0.43025833</span><span class="token punctuation">,</span>
          <span class="token number">1644915672785</span><span class="token punctuation">,</span>
          <span class="token number">0.43025833</span><span class="token punctuation">,</span>
          <span class="token number">1644915672785</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6C34\u5E86\u971E\u79F0\u5E0C\u671B\u6709\u4E2A\u4E00\u767E\u5E73\u7C73\u7684\u623F\u5B50 \u81EA\u66DD\u813E\u6C14\u66B4\u8E81&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u592E\u89C6\u65B0\u95FB&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2\u67086\u65E5\uFF0C\u519C\u5386\u65B0\u5E74\u521D\u516D\uFF0C\u4E2D\u56FD\u5973\u8DB3\u65F6\u969416\u5E74\u518D\u6B21\u95EE\u9F0E\u4E9A\u6D32\u676F\uFF0C\u8FD9\u573A\u80DC\u5229\u4E3A\u5979\u4EEC\u7684\u4E9A\u6D32\u676F\u4E4B\u65C5\u753B\u4E0A\u5B8C\u7F8E\u7684\u53E5\u53F7\uFF0C\u66F4\u6210\u4E3A\u5168\u4F53\u56FD\u6C11\u6536\u5230\u7684\u6700\u597D\u7684\u8282\u65E5\u793C\u7269\u3002\u4E09\u5929\u540E\uFF0C\u300A\u9762\u5BF9\u9762\u300B\u680F\u76EE\u548C\u6B63\u5728\u8FDB\u884C\u533B\u5B66\u9694\u79BB\u7684\u4E2D\u56FD\u5973\u8DB3\u56FD\u5BB6\u961F\u4E3B\u6559\u7EC3\u6C34\u5E86\u971E\u8FDB\u884C\u4E86\u8FDE\u7EBF\u4E13\u8BBF\u3002\u8BB0\u8005\uFF1A\u53BB\u5E7411\u670818\u65E5\u5BF9\u5916\u5BA3\u5E03\u60A8\u62C5\u4EFB\u4E3B\u6559\u7EC3\u4E4B\u524D\uFF0C\u60A8\u5C31\u66FE\u7ECF\u8868\u8FBE\u8FC7\uFF0C\u5982\u679C\u6709\u53EF\u80FD\uFF0C\u6211\u613F\u610F\u505A\u4E2D\u56FD\u5973\u8DB3\u7684\u6559\u7EC3\uFF0C\u4E3A\u4EC0\u4E48\uFF1F\u6C34\u5E86\u971E\uFF1A\u4ECE\u4E8B\u8FD9\u4E48\u591A\u5E74\u7684\u5973\u8DB3\u5DE5\u4F5C\uFF0C\u4ECE\u8FD0\u52A8\u5458\u5230\u6559\u7EC3\u5458\u6211\u89C9\u5F97\u5973\u8DB3\u7684\u60C5\u6000\u59CB\u7EC8\u624E\u6839\u5728\u5FC3\u4E2D\uFF0C\u6211\u89C9\u5F97\u6709\u673A\u4F1A\u7684\u8BDD\u8981\u5C1D\u8BD5\u4E00\u4E0B\u5427\u3002\u5BF9\u6C34\u5E86\u971E\u7684\u4E0A\u4EFB\uFF0C\u4E9A\u8DB3\u8054\u5B98\u7F51\u7ED9\u51FA\u8FD9\u6837\u7684\u8BC4\u4EF7\uFF1A\u5979\u66FE\u7ECF11\u5E745\u6B21\u4E3E\u8D77\u4E9A\u6D32\u676F\uFF0C\u662F\u9996\u4F4D\u51FA\u4EFB\u56FD\u5BB6\u961F\u4E3B\u6559\u7EC3\u7684\u9EC4\u91D1\u4E00\u4EE3\u7403\u5458\uFF0C\u5979\u6BD4\u4EFB\u4F55\u4EBA\u90FD\u66F4\u61C2\u5F97\u5982\u4F55\u8D62\u5F97\u5973\u8DB3\u4E9A\u6D32\u676F\u3002\u4F46\u5F53\u65F6\uFF0C\u7559\u7ED9\u65B0\u4EFB\u4E3B\u6559\u7EC3\u51C6\u5907\u51FA\u5F81\u7684\u65F6\u95F4\u5DF2\u7ECF\u4E0D\u8DB3\u4E09\u4E2A\u6708\u3002&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token number">1644915672785</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlightFields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;&lt;em&gt;2\u6708&lt;/em&gt;6\u65E5\uFF0C\u519C\u5386\u65B0\u5E74\u521D\u516D\uFF0C\u4E2D\u56FD\u5973\u8DB3\u65F6\u969416\u5E74\u518D\u6B21\u95EE\u9F0E\u4E9A\u6D32\u676F\uFF0C\u8FD9\u573A\u80DC\u5229\u4E3A\u5979\u4EEC\u7684\u4E9A\u6D32\u676F\u4E4B\u65C5\u753B\u4E0A\u5B8C\u7F8E\u7684\u53E5\u53F7\uFF0C\u66F4\u6210\u4E3A\u5168\u4F53\u56FD\u6C11\u6536\u5230\u7684\u6700\u597D\u7684\u8282\u65E5\u793C\u7269\u3002&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;empty&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;totalElements&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;totalPages&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;empty&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sorted&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;unsorted&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;numberOfElements&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token property">&quot;first&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;last&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;empty&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7ED3\u679C\u4E2D\u65B0\u589E\u4E86\u4E00\u4E2A\u5C5E\u6027<code>sortValues</code>, \u6B63\u662F\u6839\u636E\u5B83\u5BF9\u6570\u636E\u8FDB\u884C\u7684\u6392\u5E8F</p><h3 id="_4-4-\u4E2D\u6587\u5206\u8BCD\u5668" tabindex="-1">4.4 \u4E2D\u6587\u5206\u8BCD\u5668 <a class="header-anchor" href="#_4-4-\u4E2D\u6587\u5206\u8BCD\u5668" aria-hidden="true">#</a></h3><p>Elasticsearch\u63D0\u4F9B\u4E86\u5206\u6790\u7684REST\u63A5\u53E3, \u5148\u6765\u89C2\u5BDF\u4E0B\u82F1\u6587\u7684\u5206\u8BCD\u7ED3\u679C:</p><div class="language-"><pre><code>GET http://10.10.10.127:9200/_analyze
Content-Type: application/json

{
  &quot;text&quot; : &quot;China No.1&quot;
}
</code></pre></div><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tokens&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;china&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;ALPHANUM&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;no&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;ALPHANUM&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;NUM&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7ED3\u679C\u4E3Achina/no/1, \u76F8\u5F53\u6B63\u786E</p><p>\u518D\u6765\u770B\u770B\u4E2D\u6587\u7684:</p><div class="language-"><pre><code>### \u5206\u6790
GET http://10.10.10.127:9200/_analyze
Content-Type: application/json

{
  &quot;text&quot; : &quot;\u4E2D\u56FD\u7B2C\u4E00&quot;
}
</code></pre></div><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tokens&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2D&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;IDEOGRAPHIC&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u56FD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;IDEOGRAPHIC&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7B2C&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;IDEOGRAPHIC&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;IDEOGRAPHIC&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7ADF\u7136\u4E00\u4E2A\u5B57\u4E00\u4E2A\u5B57\u7684\u62C6\u5206, \u8FD9\u7740\u5B9E\u6709\u70B9\u8822\u4E86, \u4F1A\u51FA\u73B0\u5404\u79CD\u5947\u8469\u9020\u53E5\u4E2D\u7684\u641C\u7D22\u7ED3\u679C, \u4F8B\u5982<strong>\u8FC7\u8282</strong>\u548C<strong>\u6768\u8FC7\u8282\u540E\u9A91\u7740\u96D5\u4E0A\u73ED</strong></p><p>\u6240\u4EE5, \u9009\u62E9\u4E00\u4E2A\u5408\u9002\u7684\u4E2D\u6587\u5206\u8BCD\u5668\u81F3\u5173\u91CD\u8981</p><p>\u5728\u5BF9\u6BD4\u8FC7\u51E0\u4E2A\u4E2D\u6587\u5206\u8BCD\u5668\u540E, \u7B14\u8005\u8BA4\u4E3A\u53EA\u6709\u4E00\u4E2A\u6700\u4F73\u9009\u62E9, \u90A3\u5C31\u662F<a href="https://github.com/medcl/elasticsearch-analysis-ik" target="_blank" rel="noopener noreferrer">IK\u5206\u8BCD\u5668</a></p><p>\u539F\u56E0\u6709\u5982\u4E0B\u4E24\u70B9:</p><ol><li>\u8D85\u9AD8\u7684star\u6570\u91CF\u4EE3\u8868\u7740\u7E41\u8363\u7684\u751F\u6001</li><li>\u652F\u6301\u5728\u7EBF\u70ED\u66F4\u65B0\u5B57\u5178</li></ol><p>\u5BF9\u4E8EIK\u5206\u8BCD\u5668\u4E0D\u518D\u8FDB\u884C\u8FC7\u591A\u8BB2\u8FF0, \u770B\u4E00\u4E0B\u5B83\u7684\u4E2D\u6587\u5206\u8BCD\u7ED3\u679C:</p><p>ik_smart:</p><div class="language-"><pre><code>### \u5206\u6790
GET http://10.10.10.127:9200/_analyze
Content-Type: application/json

{
  &quot;analyzer&quot; : &quot;ik_smart&quot;,
  &quot;text&quot; : &quot;\u4E2D\u56FD\u7B2C\u4E00&quot;
}
</code></pre></div><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tokens&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2D\u56FD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7B2C\u4E00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>ik_max_word:</p><div class="language-"><pre><code>### \u5206\u6790
GET http://10.10.10.127:9200/_analyze
Content-Type: application/json

{
  &quot;analyzer&quot; : &quot;ik_max_word&quot;,
  &quot;text&quot; : &quot;\u4E2D\u56FD\u7B2C\u4E00&quot;
}
</code></pre></div><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tokens&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E2D\u56FD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7B2C\u4E00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CN_WORD&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4E00&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;start_offset&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;end_offset&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TYPE_CNUM&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;position&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5206\u8BCD\u6548\u679C\u4E0D\u7528\u8BF4, \u9AD8\u4E0B\u7ACB\u5224</p><p>\u786E\u5B9A\u4E2D\u6587\u5206\u8BCD\u5668\u540E, \u9700\u8981\u914D\u7F6E\u7D22\u5F15\u9ED8\u8BA4\u5206\u8BCD\u5668\u4E3AIK:</p><p>\u5728resource\u4E0B\u521B\u5EFAelasticsearch/settings/default.json:</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;analysis&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;tokenizer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4FEE\u6539\u6587\u7AE0\u5B9E\u4F53\u7C7B, \u589E\u52A0\u6CE8\u89E3<code>@Setting</code>:</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Document</span><span class="token punctuation">(</span>indexName <span class="token operator">=</span> <span class="token string">&quot;articles&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Setting</span><span class="token punctuation">(</span>settingPath <span class="token operator">=</span> <span class="token string">&quot;elasticsearch/settings/default.json&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Article</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> content<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_5-\u5EFA\u8BAE\u5668" tabindex="-1">5 \u5EFA\u8BAE\u5668 <a class="header-anchor" href="#_5-\u5EFA\u8BAE\u5668" aria-hidden="true">#</a></h2><h3 id="_5-1-\u8865\u9F50\u5EFA\u8BAE\u5668" tabindex="-1">5.1 \u8865\u9F50\u5EFA\u8BAE\u5668 <a class="header-anchor" href="#_5-1-\u8865\u9F50\u5EFA\u8BAE\u5668" aria-hidden="true">#</a></h3><p>\u81EA\u52A8\u8865\u9F50\u7684\u5B9E\u73B0\u6709\u5F88\u591A\u79CD, \u7B14\u8005\u63A5\u89E6\u7684\u4E1A\u52A1\u903B\u8F91\u4E13\u4E1A\u6027\u8F83\u5F3A\u4E14\u8F83\u4E3A\u7B80\u5355, \u6240\u4EE5\u672C\u8282\u7684\u5185\u5BB9\u4EC5\u4F5C\u53C2\u8003</p><p>\u63CF\u8FF0\u4E0B\u4E1A\u52A1\u573A\u666F:</p><ol><li>\u81EA\u52A8\u8865\u9F50\u5185\u5BB9\u4E3A\u70ED\u95E8\u641C\u7D22\u8BCD\u6C47</li><li>\u6BCF\u5929\u4EA7\u751F\u7684\u641C\u7D22\u8BCD\u6570\u91CF\u6781\u5C11, \u5728100-200\u4E4B\u95F4</li><li>\u5DF2\u914D\u5907\u8FD0\u7EF4\u4EBA\u5458, \u4F1A\u4EBA\u5DE5\u5E72\u9884\u53C2\u4E0E\u641C\u7D22\u8BCD\u7684\u6743\u91CD\u8C03\u6574</li></ol><p>\u9488\u5BF9\u4E0A\u8FF0\u573A\u666F, \u51B3\u5B9A\u5B9E\u73B0\u65B9\u5F0F\u4E3A:</p><ol><li>\u6BCF\u5929\u5B9A\u65F6\u5C06\u641C\u7D22\u8BCD\u5168\u91CF\u5237\u65B0\u81F3Elasticsearch\u70ED\u8BCD\u7D22\u5F15\u5E93</li><li>\u7528\u6237\u8F93\u5165\u65F6\u5229\u7528\u8865\u9F50\u5EFA\u8BAE\u5668\u67E5\u8BE2\u7ED3\u679C</li></ol><p>\u521B\u5EFA\u70ED\u95E8\u641C\u7D22\u8BCD\u6C47\u5B9E\u4F53\u7C7B:</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Document</span><span class="token punctuation">(</span>indexName <span class="token operator">=</span> <span class="token string">&quot;trending&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Setting</span><span class="token punctuation">(</span>settingPath <span class="token operator">=</span> <span class="token string">&quot;elasticsearch/settings/default.json&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@FieldNameConstants</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Trending</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@CompletionField</span>
    <span class="token keyword">private</span> <span class="token class-name">Completion</span> suggest<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F7F\u7528\u6CE8\u89E3<code>@CompletionField</code>\u6807\u6CE8\u8865\u9F50\u5B57\u6BB5, \u4E14\u7C7B\u578B\u4E3A<code>Completion</code></p><p><strong>\u6CE8\u610F, \u5728\u8FD9\u91CC\u5B58\u5728\u5C0F\u5751</strong></p><p>\u4F7F\u7528Jackson\u8FDB\u884Cjson\u683C\u5F0F\u8F6C\u6362, \u6B64\u65F6\u7684<code>Completion</code>\u7C7B\u5E76\u6CA1\u6709\u65E0\u53C2\u6570\u6784\u9020\u51FD\u6570, \u63D0\u4EA4\u63A5\u53E3\u4F1A\u629B\u51FA\u5F02\u5E38</p><p>\u6240\u4EE5\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u7EE7\u627F\u7C7B<code>JsonCompletion</code>\u5BF9\u5176\u8FDB\u884C\u5904\u7406:</p><div class="language-java"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JsonCompletion</span> <span class="token keyword">extends</span> <span class="token class-name">Completion</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">JsonCompletion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5EFA\u8BAE\u5668\u7684\u67E5\u8BE2\u4E0D\u80FD\u4F7F\u7528<code>ElasticsearchRepository</code></p><p>\u9700\u8981\u5728\u670D\u52A1\u5C42\u5229\u7528<code>CompletionSuggestionBuilder</code>\u548C<code>ElasticsearchRestTemplate</code>:</p><div class="language-java"><pre><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TrendingService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ElasticsearchRestTemplate</span> elasticsearchRestTemplate<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">suggest</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CompletionSuggestionBuilder</span> builder <span class="token operator">=</span> <span class="token class-name">SuggestBuilders</span><span class="token punctuation">.</span><span class="token function">completionSuggestion</span><span class="token punctuation">(</span><span class="token class-name">Trending<span class="token punctuation">.</span>Fields</span><span class="token punctuation">.</span>suggest<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">prefix</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">skipDuplicates</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SuggestBuilder</span> suggestBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuggestBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        suggestBuilder<span class="token punctuation">.</span><span class="token function">addSuggestion</span><span class="token punctuation">(</span><span class="token string">&quot;trending-suggest&quot;</span><span class="token punctuation">,</span> builder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CompletionSuggestion</span> suggest <span class="token operator">=</span> elasticsearchRestTemplate<span class="token punctuation">.</span><span class="token function">suggest</span><span class="token punctuation">(</span>suggestBuilder<span class="token punctuation">,</span>
                        elasticsearchRestTemplate<span class="token punctuation">.</span><span class="token function">getIndexCoordinatesFor</span><span class="token punctuation">(</span><span class="token class-name">Trending</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSuggest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">getSuggestion</span><span class="token punctuation">(</span><span class="token string">&quot;trending-suggest&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">CompletionSuggestion<span class="token punctuation">.</span>Entry<span class="token punctuation">.</span>Option</span> option <span class="token operator">:</span> suggest<span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7F51\u4E0A\u90E8\u5206\u6559\u7A0B\u4F7F\u7528\u7684\u662F<code>HashSet&lt;String&gt;</code>\u4F5C\u4E3A\u8FD4\u56DE\u7ED3\u679C</p><p>\u7531\u4E8E\u7B14\u8005\u4E1A\u52A1\u9700\u6C42\u573A\u666F\u4E2D\u6709\u6743\u91CD\u6982\u5FF5, \u8FD4\u56DE\u7ED3\u679C\u5E94\u4E3A\u6709\u5E8F\u96C6, \u6545\u9009\u62E9<code>List&lt;String&gt;</code></p><p>\u521B\u5EFA\u63A5\u53E3:</p><div class="language-java"><pre><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;trending&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TrendingApi</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">TrendingService</span> trendingService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;suggest/{text}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">suggest</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span> <span class="token class-name">String</span> text<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> trendingService<span class="token punctuation">.</span><span class="token function">suggest</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u63D0\u524D\u5F55\u5165\u4E00\u4E9B\u6D4B\u8BD5\u6570\u636E:</p><div class="language-json"><pre><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;suggest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;suggest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u5F20\u516D&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">6</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;suggest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u5F20\u5341\u56DB&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">14</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;suggest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;input&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u5F20\u4E09-\u6CD5\u5916\u72C2\u5F92&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">999</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u8C03\u7528\u63A5\u53E3\u8FDB\u884C\u6D4B\u8BD5:</p><div class="language-"><pre><code>### \u5EFA\u8BAE
GET http://localhost:9999/trending/suggest/\u5F20
Content-Type: application/json
</code></pre></div><div class="language-json"><pre><code><span class="token punctuation">[</span>
  <span class="token string">&quot;\u5F20\u4E09-\u6CD5\u5916\u72C2\u5F92&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;\u5F20\u5341\u56DB&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;\u5F20\u516D&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;\u5F20\u4E09&quot;</span>
<span class="token punctuation">]</span>
</code></pre></div>`,127),u=[c];function l(r,k,i,q,d,g){return a(),s("div",null,u)}var h=n(e,[["render",l]]);export{m as __pageData,h as default};
