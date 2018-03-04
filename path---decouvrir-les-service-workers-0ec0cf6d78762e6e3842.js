webpackJsonp([0xf1ac0620ed6c],{428:function(n,s){n.exports={data:{markdownRemark:{html:'<img class="responsive" src="/images/blog/serviceworkers/simple_schema-edited.jpg" alt="Image sourced by Google and modified by author." />\n<p>Il y a quelque temps, nous nous sommes confrontés à un nouveau besoin client : un mode d\'édition offline dans une application mobile. Si plusieurs solutions s\'offraient à nous, l’idée des service workers semblait prometteuse. Elle s\'apparente à un proxy : dans cette configuration, le mode offline est rendu possible par un script chargé indépendamment de l’application cliente elle-même, et capable de réagir aux requêtes réseau.</p>\n<p>L\'idée a été écartée en raison du rapport coût / bénéfice de ce mode développement pour le client, et d\'une autre raison que vous découvrirez à la fin de ce billet. Néanmoins, nous avons poursuivi l\'exploration lors de hack days, pour comprendre exactement les implications de cette nouvelle technologie.</p>\n<p>Ce billet est notre retour d\'expérience sur un prototype très simple, un gestionnaire de playlist, qui fonctionne en mode offline.</p>\n<p>Le code des exemples à suivre est <a href="https://github.com/marmelab/service-worker-demo">disponible sur Github</a>.</p>\n<h2>Première prise de contact</h2>\n<p>On commence avec une page statique très simple, comprenant deux fichiers CSS, deux images, un fichier de fonts et un fichier js.</p>\n<img class="medium" src="/images/blog/serviceworkers/appBootstraped-t00.png" />\n<p>Nous allons maintenant créer le fichier du service worker: <code>service-worker.js</code>,</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">\'01\'</span><span class="token punctuation">;</span>\n\nself<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'install\'</span><span class="token punctuation">,</span> event <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'First service worker log\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Pour l\'appeler dans notre page HTML, on rajoute:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">\'serviceWorker\'</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">\'service-worker.js\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> scope<span class="token punctuation">:</span> <span class="token string">\'/\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">mainMessage</span><span class="token punctuation">(</span><span class="token string">\'notify\'</span><span class="token punctuation">,</span> <span class="token string">\'Service worker is started\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">mainMessage</span><span class="token punctuation">(</span><span class="token string">\'alert\'</span><span class="token punctuation">,</span> <span class="token string">\'Service worker registration failed with \'</span> <span class="token operator">+</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token function">mainMessage</span><span class="token punctuation">(</span><span class="token string">\'alert\'</span><span class="token punctuation">,</span> <span class="token string">\'Your browser do not support Service Worker\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Dans cet exemple, la fonction <code>mainMessage</code> affiche le message passé en paramètre dans le gros cartouche gris-vert à côté du lapin. Ca permet de voir ce qui se passe !</p>\n<img class="medium" src="/images/blog/serviceworkers/started.png" />\n<p>Remarque: Il est indispensable de <strong>tester le support du service worker par le navigateur</strong> (<code>\'serviceWorker\' in navigator</code>). En effet, l\'un des problèmes, mais non des moindres, est que les services worker ne sont pas disponibles sur <a href="http://caniuse.com/#feat=serviceworkers">tous les navigateurs</a>. Pour faire court, on y a accès avec <code>Chrome</code>, <code>Firefox</code> et <code>Opera</code>, mais ni avec <code>IE</code> ni avec <code>Safari</code>. La bonne nouvelle, c\'est que ces navigateurs supportant les services workers implémentent également bien l\'ES2015.</p>\n<p>Attention: <strong>Le script s\'exécute dans un thread séparé et vit ensuite en tâche de fond, que l\'application soit ouverte ou pas</strong> ! On remarque ainsi lorsque l\'on recharge notre page que le <code>console.log(\'First service worker log\')</code> n\'affiche plus rien. Ce comportement s\'explique par le cycle de vie du service.</p>\n<p>Mais comment alors debugger ce service worker ? Les navigateurs offrent des outils dédiés pour cela:</p>\n<ul>\n<li>Firefox : <code>about:serviceworkers</code></li>\n<li>Chrome : <code>chrome://serviceworker-internals/</code></li>\n</ul>\n<img class="medium" src="/images/blog/serviceworkers/chromeDebug.png" />\n<h2>Le cycle de vie d\'un service worker</h2>\n<p>Mettons à jour le fichier <code>service-worker.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">\'02\'</span><span class="token punctuation">;</span>\n\nself<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'install\'</span><span class="token punctuation">,</span> event <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Log from event "INSTALL" in service worker version \'</span> <span class="token operator">+</span> version<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nself<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'fetch\'</span><span class="token punctuation">,</span> event <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Log from event "FETCH" in service worker version \'</span> <span class="token operator">+</span> version<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nself<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'activate\'</span><span class="token punctuation">,</span> event <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Log from event "ACTIVATE" in service worker version \'</span> <span class="token operator">+</span> version<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>L\'ordre d\'exécution des <code>console.log</code> illustre le cycle de vie du service worker :</p>\n<img class="medium" src="/images/blog/serviceworkers/sw-3events-t02.gif" />\n<p>On constate que les évènements <code>install</code> et <code>activate</code> ne sont exécutés qu\'une fois, contrairement au <code>fetch</code> qui est appelé de nombreuses fois (à chaque appel réseau en fait). Cela s\'explique très bien par le fonctionnement de notre service :</p>\n<ol>\n<li>\n<p>Le navigateur installe le service worker : c\'est l\'évènement <code>install</code>,</p>\n</li>\n<li>\n<p>le navigateur active ce nouveau service worker (s\'il le peut, comme nous allons le voir) : c\'est l\'évènement <code>activate</code>,</p>\n</li>\n<li>\n<p>une fois activé, le service worker va pouvoir intercepter toutes les requêtes réseau des instances de l\'application : c\'est l\'évènement <code>fetch</code>.</p>\n</li>\n</ol>\n<p>Si <code>install</code> et <code>fetch</code> sont simples à comprendre, <code>activate</code> m\'a semblé moins évident. Cet événement est lié au fait qu\'un service worker s\'exécute en arrière-plan pour toutes les instances de l\'application en cours, comme plusieurs onglets ouverts sur la même application. Le navigateur va pouvoir installer une nouvelle version du service worker dès qu\'il la reçoit, mais il ne l\'activera que lorsque <strong>aucune session de l\'application ne sera en cours d\'exécution</strong>.</p>\n<p>Par exemple, mettons à jour <code>service-worker.js</code> :</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"> <span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">\'03\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Le navigateur est capable d\'identifier tout changement au niveau du fichier du service worker, le mettant à jour en conséquence. Le navigateur va bien recevoir la nouvelle version et va l\'installer.</p>\n<p><strong>Conseil</strong> : Comme tout fichier js, un fichier de service worker peut être mis en cache par le navigateur. Pensez donc à vos en-têtes HTTP de cache si vous voulez une mise à jour immédiate de votre service worker.</p>\n<p>Par contre, cette nouvelle version ne sera <em>activée</em> que lorsque l\'on aura quitté toutes les instances de l\'application, pour ensuite la relancer.</p>\n <img class="responsive" src="/images/blog/serviceworkers/sw-3events-t03.gif" />\n<p>Ce comportement potentiellement troublant peut être court-circuité via les évènements <code>install</code> et  <code>activate</code> de la manière suivante :</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">\'04\'</span><span class="token punctuation">;</span>\n\nself<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'install\'</span><span class="token punctuation">,</span> event <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Log from event "INSTALL" in service worker version \'</span> <span class="token operator">+</span> version<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> self<span class="token punctuation">.</span><span class="token function">skipWaiting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nself<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'activate\'</span><span class="token punctuation">,</span> event <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Log from event "ACTIVATE" in service worker version \'</span> <span class="token operator">+</span> version<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> self<span class="token punctuation">.</span>clients<span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Premier bilan</h2>\n<p>Nous venons de voir plusieurs points fondamentaux si l\'on veut se lancer dans l\'utilisation des services workers:</p>\n<ul>\n<li>\n<p>la <strong>compatibilité</strong> : les services workers ne sont pas disponibles sur tous les navigateurs. On va donc difficilement pouvoir baser le fonctionnement d\'une application sur leur utilisation.</p>\n</li>\n<li>\n<p>le <strong>cycle de vie dans un thread séparé</strong>: un service worker va s\'installer puis s\'activer dans un processus indépendant. Ensuite, il pourra intercepter toutes les requêtes réseau effectuées par n\'importe quelle instance de l\'application au sein du navigateur.</p>\n</li>\n<li>\n<p>le fonctionnement <strong>asynchrone</strong> : ce point n\'a pas encore été mis en avant, même s’il est apparu dans la version 2 du service worker d\'exemple. Tout ce qui se passe au sein du service worker doit être asynchrone. En effet, il ne doit pas bloquer l\'exécution de l\'application.</p>\n</li>\n<li>\n<p>le <strong>https est obligatoire</strong> : toutes les requêtes réseau doivent être en https (sauf pour <code>localhost</code>, ce qui nous simplifie grandement le développement). Cela semble assez logique tant le pouvoir de nuisance d\'un service worker redirigeant vers un site malintentionné semble grand.</p>\n</li>\n</ul>\n<h2>Un site hors ligne</h2>\n<p>Il est maintenant temps de configurer notre service worker afin de permettre la consultation "offline" de notre application.</p>\n<h3>Phase \'install\'</h3>\n<p>Lors de cette phase d\'installation, vous allons pouvoir indiquer au service quels sont les éléments qui doivent être mis en cache. Pour faire simple au début, nous allons mettre en cache tous les fichiers de notre application, sauf le fichier de fonts.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">\'05\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> CACHE_NAME <span class="token operator">=</span> <span class="token string">\'sw-demo_1\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> urlsToCache <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">\'/index.html\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'/playlist.html\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'/css/normalize.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'/css/sw-demo.css\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'/images/catWorker.jpg\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'/images/logo.png\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'/covers/avecpasdcasque.jpg\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'/covers/ryleywalker.jpg\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'/covers/xeniaRubinos.jpg\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'/js/sw-demo.js\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nself<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'install\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>\n        caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>CACHE_NAME<span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>cache <span class="token operator">=></span> cache<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>urlsToCache<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> self<span class="token punctuation">.</span><span class="token function">skipWaiting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// to be continued</span>\n</code></pre>\n      </div>\n<p>Comme évoqué précédemment, tout est asynchrone:</p>\n<ul>\n<li><code>event.waitUntil</code> est une fonction qui attend la résolution d\'une promesse pour considérer l\'évènement comme terminé.</li>\n<li><code>caches.open</code> retourne un promesse lorsque le cache à utiliser est ouvert. En effet, le service worker va avoir accès à la méthode <code>caches</code> permettant de nommer plusieurs clés de cache au sein du service. On l\'utilisera ici pour versionner le cache.</li>\n<li><code>cache.addAll</code> va renvoyer une promesse lorsque l\'ajout de tous les éléments sera terminé.</li>\n</ul>\n<img class="responsive" src="/images/blog/serviceworkers/sw-cache-storage.png" />\n<h3>Phase \'activate\'</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'activate\'</span><span class="token punctuation">,</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span>\n        caches<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>keys <span class="token operator">=></span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>keys\n                    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>key <span class="token operator">=></span> key <span class="token operator">!==</span> CACHE_NAME<span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>key <span class="token operator">=></span> caches<span class="token punctuation">.</span><span class="token keyword">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>\n                <span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> self<span class="token punctuation">.</span>clients<span class="token punctuation">.</span><span class="token function">claim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// to be continued</span>\n</code></pre>\n      </div>\n<p>Nous profitons de l’existence de la phase d\'activation pour supprimer les éventuels caches créés par une précédente version du service worker.\nCe n\'est pas obligatoire, et ceci n\'est valable que parce que nous avons choisi de versionner ce cache...</p>\n<h3>Phase \'fetch\'</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js">self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'fetch\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span>\n        <span class="token function">fetch</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Maintenant que notre service worker est installé et activé, nous pouvons profiter de sa capacité à intercepter les requêtes réseau.</p>\n<p>Dans notre exemple, simplissime, nous allons juste répondre à l’événement <code>fetch</code> en retournant le résultat effectif de cette requête avec <code>fetch(event.request)</code>.</p>\n<p>Jusque là, le service worker ne modifie pas le comportement attendu de l\'application. Par contre, en ajoutant un <code>catch</code> pouvant correspondre à un retour en erreur du serveur - pour notre exemple on généralisera au cas "offline" - le service worker va pouvoir aller chercher dans son cache <code>caches.match(event.request)</code> si cette requête est présente. Si c\'est le cas, c\'est ce qui sera retourné au navigateur, rendant l’application disponible offline.</p>\n<p>Vous pouvez tester ce comportement en vous rendant sur <a href="https://sw.alexisjanvier.space/">l’application d\'exemple</a>, et en coupant votre connexion réseau.</p>\n<h2>Conclusion</h2>\n<p>Bien qu\'encore considérés comme expérimentaux, les services workers sont d’ores et déjà bien implémentés sur Chrome et Firefox. Leur non-prise en charge par IE ou Safari va sans doute limiter leur utilisation en production. Par exemple, l\'application de notre client citée en introduction visait principalement les utilisateurs iOS, d\'où l\'abandon de cette technologie.</p>\n<p>Leur relative simplicité laisse une grande liberté au développeur sur les comportements implémentés. Si l\'exemple présenté dans ce post est vraiment très simple, on peut facilement envisager des stratégies de cache beaucoup plus complexes : adapter les réponses en fonction des médias demandés, adopter une politique de <em>"cache first"</em> et de prérequêtes afin d\'accélérer l\'affichage d\'une application... Je pense même qu\'un des risques est de pouvoir y coder trop de logique métier.</p>\n<p>Son comportement transparent va également obliger à bien penser <a href="https://developers.google.com/web/fundamentals/instant-and-offline/offline-ux">l\'interface utilisateur</a> afin de ne pas rendre l\'application déroutante (statut online/offline, données à jour, données synchronisées, ...).</p>\n<p>Mais, et en évoquant d\'autres possibilités annoncées dans la spécification des service workers, comme le <a href="https://www.w3.org/TR/push-api/">Push API</a> ou le <a href="https://wicg.github.io/BackgroundSync/spec/">Web Background Synchronization</a>, c\'est sans aucun doute une technologie à tester et à suivre dès que l\'on s\'intéresse aux applications web, mobiles ou non.</p>',frontmatter:{title:"Découvrir les service workers",date:"2017-03-21",tags:["js","tutorial"],description:"Un outil de plus dans la panoplie des développeurs web ? Les services workers offrent bien plus que la simple possibilité de rendre une application disponible hors-ligne. Voyons ça en pratique."}}},pathContext:{slug:"decouvrir-les-service-workers"}}}});
//# sourceMappingURL=path---decouvrir-les-service-workers-0ec0cf6d78762e6e3842.js.map