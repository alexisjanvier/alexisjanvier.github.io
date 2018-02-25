webpackJsonp([1956946496716],{403:function(n,s){n.exports={data:{markdownRemark:{html:'<img src="/images/blog/go-by-practice.png">\n<p>Fraichement arrivé chez Marmelab, ma mission actuelle constiste à produire un applicatif par semaine, sur une techno inconnue, avec une bonne qualité de code (tests unitaires, réutilisabilité) et un produit fonctionnel à la fin. Il s\'agit de s\'accoutumer au mantra <em>« learn fast, fail fast, and recover fast. »</em> (voir <a href="http://marmelab.com/blog/2014/09/01/one-new-tech-per-project.html">One New Tech Per Project</a>). Si ma première semaine était plutôt <em>fail fast</em> (elle s\'est terminée sans produit fonctionnel), ma seconde semaine m\'a semblée plutôt <em>learn fast</em>. La mission consistait à réaliser un webservice lié à Github et aux Pull Requests, en Go. Cette première approche pratique d\'un langage typé et compilé fut un réel plaisir, tant Go semble respecter son engagement à rendre facile l\'écriture de programmes simples, fiables et efficaces. Voici quelques éléments de feedback.</p>\n<h2>Mise en place d\'un webservice</h2>\n<p>Les fonctionnalités du Go sont étendues via des packages, le langage étant livré de base avec une boite à outils conséquente (la « <a href="http://golang.org/pkg/">standard library</a> »). Même si google retourne très rapidement des résultats sur des packages destinés à la mise en place de serveurs web (<a href="http://www.gorillatoolkit.org/pkg/mux">mux</a>, <a href="http://martini.codegangsta.io/">Martini</a>), on trouve dans la librairie standard un excellent package dédié, le package <a href="http://golang.org/pkg/net/http/">http</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">package</span> main\n\n<span class="token keyword">import</span> <span class="token punctuation">(</span>\n    <span class="token string">"fmt"</span>\n    <span class="token string">"net/http"</span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">func</span> <span class="token function">handler</span><span class="token punctuation">(</span>response http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> request <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Fprintf</span><span class="token punctuation">(</span>response<span class="token punctuation">,</span> <span class="token string">"Hi there, I love %s!"</span><span class="token punctuation">,</span> request<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    http<span class="token punctuation">.</span><span class="token function">HandleFunc</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> handler<span class="token punctuation">)</span>\n    http<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token string">":8080"</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Avec 15 lignes de code (simple, fiable et efficace), on dispose d\'un serveur web qui, une fois compilé, pourra être exécuté sans dépendances (pas de node à installer) aussi bien sur Linux que sur Osx ou Windows. Pour quelqu\'un venant du Php, je trouve cela « magique ».</p>\n<p>Mieux encore, Go est fourni avec un package permettant d\'exécuter des tests (nativement) et même un package dédié aux tests http (le package <a href="http://golang.org/pkg/net/http/httptest/">httptest</a>). La côté fiable du langage est pris au sérieux.</p>\n<h2>Go Playground</h2>\n<p>Peut-être plus anecdotique, on dispose sur le site de Golang d\'une interface permettant d\'exécuter et de partager du code Go: le <a href="http://play.golang.org">Go Playground</a>. Certes, on trouve l\'équivalent pour d\'autres technologies sur des sites comme <a href="http://codepen.io">CodePen</a>, mais c\'est réjouissant de retrouver ce service pour Go, supporté directement par l\'équipe du langage. De plus, contrairement à du javascript, le Go est un langage compilé : la mise en place d\'un tel service était certainement moins évidente. Elle est rendue possible entre autres par la vitesse de compilation du langage : c\'est vraiment très, très rapide. Lors du développement cette phase que l\'on trolle si facilement sur du .NET est presque transparente.</p>\n<p>Pour conclure sur le Go Playground, c\'est un outil génial pour apprendre, mais également pour faire du code review ou du peer programming à distance.</p>\n<h2>Closures et structures de test et de boucle</h2>\n<p>Sans aborder ici la syntaxe spécifique du Go concernant les structures de test (<code>if</code> et <code>switch</code>) ou de boucle (<code>for</code> uniquement), un point m\'a déconcerté lors de l\'utilisation de ces structures : toutes les variables déclarées dans un <code>if</code> ou un <code>for</code> ne sont visibles qu\'en leur sein. On est dans une closure.</p>\n<p>L\'exemple suivant provoque une erreur</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> greeting <span class="token operator">:=</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">len</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">{</span>\n        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> say <span class="token builtin">string</span>\n    say <span class="token operator">=</span> <span class="token string">"Hello !"</span>\n\n    <span class="token keyword">return</span> say\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="http://play.golang.org/p/adulEdo8VS">http://play.golang.org/p/adulEdo8VS</a></p>\n<p>Pour que cela fonctionne, il faut faire :</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> greeting <span class="token builtin">string</span>\n    <span class="token keyword">if</span> greeting <span class="token operator">=</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">len</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token punctuation">{</span>\n        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> say <span class="token builtin">string</span>\n    say <span class="token operator">=</span> <span class="token string">"Hello !"</span>\n\n    <span class="token keyword">return</span> say\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="http://play.golang.org/p/i0m_Mrc7ca">http://play.golang.org/p/i0m_Mrc7ca</a></p>\n<p>L\'exemple ici est très simple, mais j\'ai été confronté à des cas un peu plus compliqués, du moins pour une première découverte du langage.</p>\n<p>Par exemple, le code suivant renvoie une erreur:</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">type</span> Tag <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n    Name <span class="token builtin">string</span>\n    Sha <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">type</span> Branch <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n    Name <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    testVar <span class="token operator">:=</span> <span class="token string">"tag"</span>\n    <span class="token keyword">if</span> testVar <span class="token operator">==</span> <span class="token string">"tag"</span> <span class="token punctuation">{</span>\n        base<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">fetchTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        base<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">fetchBranch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"error : %v\\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>base<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">fetchTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Tag<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    tag <span class="token operator">:=</span> Tag<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"v1"</span><span class="token punctuation">,</span> Sha<span class="token punctuation">:</span> <span class="token string">"2b55d21f91309cf5ca17bcb827a0ddbd1de81d18"</span><span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> tag<span class="token punctuation">,</span> <span class="token boolean">nil</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">func</span> <span class="token function">fetchBranch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Branch<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    branch <span class="token operator">:=</span> Branch<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"master"</span><span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> branch<span class="token punctuation">,</span> <span class="token boolean">nil</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="http://play.golang.org/p/FT32xqpp8t">http://play.golang.org/p/FT32xqpp8t</a></p>\n<p>Il faut plutôt faire:</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">type</span> Tag <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n    Name <span class="token builtin">string</span>\n    Sha <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">type</span> Branch <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n    Name <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    testVar <span class="token operator">:=</span> <span class="token string">"tag"</span>\n    <span class="token keyword">var</span> name <span class="token builtin">string</span>\n    <span class="token keyword">var</span> err <span class="token builtin">error</span>\n    <span class="token keyword">if</span> testVar <span class="token operator">==</span> <span class="token string">"tag"</span> <span class="token punctuation">{</span>\n        tag<span class="token punctuation">,</span> errTag <span class="token operator">:=</span> <span class="token function">fetchTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        name <span class="token operator">=</span> tag<span class="token punctuation">.</span>Name\n        err <span class="token operator">=</span> errTag\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        branch<span class="token punctuation">,</span> errBranch <span class="token operator">:=</span> <span class="token function">fetchBranch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        name <span class="token operator">=</span> branch<span class="token punctuation">.</span>Name\n        err <span class="token operator">=</span> errBranch\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>\n        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">"error : %v\\n"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">func</span> <span class="token function">fetchTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Tag<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    tag <span class="token operator">:=</span> Tag<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"v1"</span><span class="token punctuation">,</span> Sha<span class="token punctuation">:</span> <span class="token string">"2b55d21f91309cf5ca17bcb827a0ddbd1de81d18"</span><span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> tag<span class="token punctuation">,</span> <span class="token boolean">nil</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">func</span> <span class="token function">fetchBranch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>Branch<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    branch <span class="token operator">:=</span> Branch<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">"master"</span><span class="token punctuation">}</span>\n\n    <span class="token keyword">return</span> branch<span class="token punctuation">,</span> <span class="token boolean">nil</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="http://play.golang.org/p/KGNf-KAINg">http://play.golang.org/p/KGNf-KAINg</a></p>\n<p>Une autre solution consisterait à utiliser les interfaces du Go, très différentes de la notion d\'interface d\'un langage comme le PHP.</p>\n<h2>Persistance avec MongoDb</h2>\n<p>Le projet sur lequel je travaillais nécessitait du stockage et je me suis vite orienté vers du MongoDb (phase de découverte de techno oblige). Cette fois-ci, pas de package dans la librairie standard, mais un package apparaît très rapidement lors d\'une recherche web (et pas 20 packages différents) : <a href="https://labix.org/mgo">mgo</a>.</p>\n<p>Imaginons un objet <code>adress</code> qu\'il faut sauvegarder. Nous allons définir un type <code>Adress</code> et complèter la définition de ses différents attributs avec la syntaxe <code>bson:"nom_mongodb"</code>. Le <code>BSON</code> est le format binaire utilisé par MongoDb pour le stockage du <code>JSON</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">type</span> Adress <span class="token keyword">struct</span> <span class="token punctuation">{</span>\n    Street       <span class="token builtin">string</span>      <span class="token string">`bson:"street"`</span>\n    PostalCode   <span class="token builtin">string</span>      <span class="token string">`bson:"postal_code"`</span>\n    City         <span class="token builtin">string</span>      <span class="token string">`bson:"city"`</span>\n    DoorCode     <span class="token builtin">int</span>         <span class="token string">`bson:"-"`</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>De cette manière, le package mgo va pouvoir facilement transformer une variable de type <code>Adress</code> en objet bson sauvegardable dans MongoDb. Et inversemment, un objet bson requêté depuis MongoDb sera transformé en variable de type <code>Adress</code> dans le code Go.\nRapide, simple et efficace.</p>\n<div class="tips">\n<p>si l\'on ne veut pas qu\'un attribut soit transformé en bson pour être stocké, il suffit d\'indiquer <code>bson:"-"</code>.</p>\n</div>\n<h2>Une bonne documentation, parfois en manque d\'exemples</h2>\n<p>On trouve un utilitaire permettant de générer la documentation d\'un package depuis le code : <a href="https://godoc.org/code.google.com/p/go.tools/cmd/godoc">gocode</a>. La documentation peut être affichée sur la console, mais godoc peut également lancer un serveur web pour consulter cette documentation depuis un navigateur.</p>\n<p>En règle générale, tous les packages de la librairie standard sont très bien documentés, même s\'ils manquent parfois d\'exemples pratiques.\nJe pense ici au package <a href="http://golang.org/pkg/time/">time</a>, via lequel j\'avais besoin de soustraire 2 semaines à une date donnée. On trouve dans la documentation une fonction Add() et une fonction Truncate(), mais pas d\'exemples. Et bien pour retirer 2 semaines à une date il faut utiliser Add() avec une <code>duration</code> négative.</p>\n<div class="gatsby-highlight">\n      <pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>now<span class="token punctuation">)</span>\n    twoWeeksAgo <span class="token operator">:=</span> now<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">7</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Hour<span class="token punctuation">)</span>\n    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>twoWeeksAgo<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="http://play.golang.org/p/kkF7G7yLfF">http://play.golang.org/p/kkF7G7yLfF</a></p>\n<p>Merci <a href="https://twitter.com/manuquentin">@manuquentin</a>, parfois (souvent, toujours) les collègues sont la meilleure documentation du monde.</p>\n<h2>Tout ce que je n\'ai pas abordé en une semaine</h2>\n<p>Je suis très loin d\'avoir vu toutes les subtilités de Go lors de cette semaine : les tableaux de bits, les runes et les slices me réservent encore beaucoup d\'étonnement. Je m\'attends à être piègé par des pointeurs hasardeux. Je regrette de n\'avoir pas encore utilisé les <a href="http://golang.org/doc/effective_go.html#goroutines">Goroutines</a> qui constituent paraît-il l\'un des atouts du Go. Mais je suis positivement étonné par la rapidité avec laquelle on peut produire du code fiable, rapide, multitâches et  multi-environnements. Au point où je rajouterais bien sur mon pc un sticker de gopher à mon éléphant.</p>',frontmatter:{title:"Du PHP au Go: une semaine pour réaliser un produit fonctionnel",date:"2014-09-22",tags:["go"],description:"Du PHP au Go: une semaine pour réaliser un produit fonctionnel "}}},pathContext:{slug:"du-php-au-go-une-semaine-pour-realiser-un-produit-fonctionnel"}}}});
//# sourceMappingURL=path---du-php-au-go-une-semaine-pour-realiser-un-produit-fonctionnel-45d84a217218927f8b31.js.map