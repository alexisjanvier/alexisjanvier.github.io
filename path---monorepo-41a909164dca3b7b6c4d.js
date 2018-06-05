webpackJsonp([28208346465457],{385:function(e,n){e.exports={data:{markdownRemark:{html:'<p>Si le terme <strong><em>monorepo</em></strong> fait très technique, il traduit parfaitement un concept simplissime : utiliser un seul repository pour plusieurs projets.</p>\n<p>J’ai vu passer pas mal de posts de blog ces derniers temps sur le sujet, provenant le plus souvent de grosses boites ayant d’innombrables projets et d’innombrables développeurs, et donc d’innombrables dépôts de code. Le passage en monorepo pour ce type d’environnement est certainement très intéressant, mais très éloigné de mon quotidien.</p>\n<p>Mais le principe de cette approche n’est pas une découverte : on utilise (chez Marmelab) depuis longtemps un unique repository pour gérer toutes les parties d’un même projet (une api back, une application cliente, une appli d’administration ...).</p>\n<p>C’est en participant à la nouvelle version d’admin-on-rest, renommée <a href="">react-admin</a> que j’ai découvert de nouveaux outils dédiés aux monorepos. </p>\n<h2>Le cas d\'un projet de librairie (JavaScript)</h2>\n<p>Dans le cadre d’un projet librairie, on essaye de découper le code en plusieurs petites parties pour en faciliter l’utilisation, par exemple en évitant à l’utilisateur final de charger une librairie énorme dont il n’utiliserait que quelques fonctionnalités. Mais qui dit plusieurs parties dit beaucoup d’interdépendance entre chaque partie (et l’enfer du <code class="language-text">npm link</code>) et plusieurs packages à distribuer (plusieurs repo ? :) ). </p>\n<p>Sont donc apparus dans le monde du JavaScript des outils comme les <a href="https://yarnpkg.com/en/docs/workspaces">workspaces Yarn</a> ou le projet <a href="https://lernajs.io/">Lerna</a>.<br>\nS\'ils sont d’un indéniable intérêt pour les projets de type librairie, peuvent-ils apporter quelque chose au quotidien de projets plus classiques orientés client ?</p>\n<h2>C\'est quoi un "projet plus classique orienté client" ?</h2>\n<p>C\'est pour ma part un projet qui va requérir : </p>\n<ul>\n<li>une api,</li>\n<li>une interface d\'administration,</li>\n<li>une application (web et/ou mobile) publique.</li>\n</ul>\n<p>En en ce moment, tout est en JavaScript. Ce qui donne peu ou prou :</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">.</span>\n├── public\n│   ├── admin\n│   ├── api\n│   └── client\n├── src\n│   ├── admin\n<span class="token operator">|</span>   <span class="token operator">|</span>   ├── node_modules\n<span class="token operator">|</span>   <span class="token operator">|</span>   ├── package.json\n<span class="token operator">|</span>   <span class="token operator">|</span>   └── index.js\n│   ├── api\n<span class="token operator">|</span>   <span class="token operator">|</span>   ├── node_modules\n<span class="token operator">|</span>   <span class="token operator">|</span>   ├── package.json\n<span class="token operator">|</span>   <span class="token operator">|</span>   └── index.js\n│   └── client\n<span class="token operator">|</span>       ├── node_modules\n<span class="token operator">|</span>       ├── package.json\n<span class="token operator">|</span>       └── index.js\n├── .gitignore\n├── README.md\n└── makefile</code></pre>\n      </div>\n<p>On a un répertoire <code class="language-text">public</code> pour les builds finaux, un répertoire <code class="language-text">src</code> dans lequel on retrouve les trois "projets", chacun gérant ses dépendances (parfois les mêmes). Un <code class="language-text">makefile</code> à la racine permet de lancer par exemple l\'installation des dépendances des trois projets.</p>\n<div class="gatsby-highlight" data-language="makefile">\n      <pre class="language-makefile"><code class="language-makefile">// in makefile\n\n<span class="token symbol">install-admin</span><span class="token punctuation">:</span>\n\tcd src/admin &amp;&amp; yarn install\n\n<span class="token symbol">install-api</span><span class="token punctuation">:</span>\n\tcd src/api &amp;&amp; yarn install\n\n<span class="token symbol">install-client</span><span class="token punctuation">:</span>\n\tcd src/client &amp;&amp; yarn install\n\n<span class="token symbol">install</span><span class="token punctuation">:</span> install-admin install-api install-client</code></pre>\n      </div>\n<br />\n<blockquote>\n<p>Du coup, les outils développés pour une approche monorepo peuvent-ils améliorer cette manière d\'organiser mon code ?</p>\n</blockquote>\n<h2>Yarn workspace</h2>\n<p>Les workspaces yarn sont disponibles depuis la version <code class="language-text">1.0</code>. L\'utilisation de ces workspaces va permettre de déclarer un <code class="language-text">package.json</code> <em>parent</em> dans lequel on va indiquer à yarn où sont nos <code class="language-text">package.json</code> <em>enfants</em> (ceux de nos trois projets). Yarn pourra ainsi se débrouiller depuis la racine du projet pour installer toutes les dépendances, et surtout mettre toutes celles communes dans un même répertoire node_modules à la racine du projet: c\'est de l\'espace disque et du temps d\'installation de gagnés.</p>\n<p>Voici à quoi ressemble le package.json à la racine du site :</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"private"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"workspaces"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"src/*"</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Les autres fichiers package.json n\'ont pas à être modifiés.</strong></p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">.</span>\n├── node_modules\n├── public\n│   ├── admin\n│   ├── api\n│   └── client\n├── src\n│   ├── admin\n<span class="token operator">|</span>   <span class="token operator">|</span>   ├── node_modules\n<span class="token operator">|</span>   <span class="token operator">|</span>   ├── package.json\n<span class="token operator">|</span>   <span class="token operator">|</span>   └── index.js\n│   ├── api\n<span class="token operator">|</span>   <span class="token operator">|</span>   ├── node_modules\n<span class="token operator">|</span>   <span class="token operator">|</span>   ├── package.json\n<span class="token operator">|</span>   <span class="token operator">|</span>   └── index.js\n│   └── client\n<span class="token operator">|</span>       ├── node_modules\n<span class="token operator">|</span>       ├── package.json\n<span class="token operator">|</span>       └── index.js\n├── .gitignore\n├── package.json\n├── README.md\n└── makefile</code></pre>\n      </div>\n<p>Pour reprendre mon exemple précédent, l\'installation du projet global prenait 333 Mo sur le disque. </p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">~/Code/sideprojects\n❯ <span class="token function">du</span> -hs seamanship\n333M    seamanship</code></pre>\n      </div>\n<p>Avec la mise en place des workspaces, le projet global ne prend plus que 186 Mo.</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">~/Code/sideprojects\n❯ <span class="token function">du</span> -hs seamanship\n186M    seamanship</code></pre>\n      </div>\n<p><strong><em>Remarque</em></strong>: <em>lors de mes tests, les parties <code class="language-text">admin</code> et <code class="language-text">client</code> étaient bootstrappées avec <code class="language-text">create-react-app</code>. Il a donc fallu que je crée mes deux répertoires avec un <code class="language-text">create-react-app admin</code> et <code class="language-text">create-react-app client</code> depuis <code class="language-text">src</code>, ensuite que je supprime le <code class="language-text">yarn.lock</code> et le répertoire <code class="language-text">node_modules</code> des deux parties, pour enfin relancer un <code class="language-text">yarn install</code> depuis la racine du projet afin de profiter des workspaces.</em></p>\n<p><strong><em>Tips</em></strong>: <em>Pour installer un nouveau composant dans un des workspaces, on peut lancer un <code class="language-text">yarn add</code> depuis le répertoire du workspace, ou alors plus pratique, depuis la racine du projet :</em></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">yarn workspace workspaceNameInPackageJson add componantName</code></pre>\n      </div>\n<h2>Code styling</h2>\n<p>Les workspace permettent de facilement mutualiser les dépendances entre les différentes parties d\'un projet. Mais peut-on les utiliser pour gérer d\'autres problématiques communes, comme la gestion du code styling ? </p>\n<p>Essayons d\'installer eslint à la racine du projet :</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">~/Code/sideprojects/seamanship master*\n❯ yarn add eslint\nyarn add v1.3.2\nerror Running this <span class="token function">command</span> will add the dependency to the workspace root rather than workspa\nce itself, <span class="token function">which</span> might not be what you want - <span class="token keyword">if</span> you really meant it, <span class="token function">make</span> it explicit by ru\nnning this <span class="token function">command</span> again with the -W flag <span class="token punctuation">(</span>or --ignore-workspace-root-check<span class="token punctuation">)</span>.\ninfo Visit https://yarnpkg.com/en/docs/cli/add <span class="token keyword">for</span> documentation about this command.</code></pre>\n      </div>\n<p>Comme c\'est vraiment ce que l\'on veut, lançons donc :</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">yarn add -DW eslint prettier eslint-plugin-prettier eslint-config-prettier</code></pre>\n      </div>\n<p>Et tout se déroule normalement \\o/.</p>\n<h2>Les tests</h2>\n<p>Il reste encore une problématique à aborder dans cette rapide exploration des outils liés aux monorepos : peut-on simplifier le lancement de l\'intégralité des <strong>tests</strong> du projet ?     </p>\n<p>Depuis sa version 20, Jest est capable de <a href="https://facebook.github.io/jest/docs/en/configuration.html#projects-array-string-projectconfig">lancer en parallèle les tests sur plusieurs projets</a> :</p>\n<p><img src="/images/monorepo/20-multi-runner.gif" alt="Jest Multi-Project-Runner"></p>\n<p>Pas de chance pour mon exploration qui se base sur deux applications <em>create-react-app</em>, <a href="https://github.com/facebook/create-react-app/issues/2461">elles ne sont pas compatible avec cette fonctionnalité</a> :( </p>\n<p>Il me faudra donc passer comme avant avant par un <code class="language-text">makefile</code></p>\n<div class="gatsby-highlight" data-language="makefile">\n      <pre class="language-makefile"><code class="language-makefile">// in makefile\n\n<span class="token symbol">test-admin</span><span class="token punctuation">:</span>\n\tcd services/administration &amp;&amp; NODE_ENV<span class="token operator">=</span><span class="token string">"test"</span> CI<span class="token operator">=</span>true yarn test\n\n<span class="token symbol">test-configurator</span><span class="token punctuation">:</span>\n\tcd services/configurator &amp;&amp; NODE_ENV<span class="token operator">=</span><span class="token string">"test"</span> CI<span class="token operator">=</span>true yarn test\n\n<span class="token symbol">test</span><span class="token punctuation">:</span> test-admin test-configurator</code></pre>\n      </div>\n<h3>Lerna</h3>\n<p>Avant de conclure, j\'ajouterais quelques mots sur un projet cité en introduction: <a href="https://lernajs.io/">Lerna</a>.<br>\nLerna est un outil qui permet principalement de <strong>partager</strong> du code au sein d\'un monorepo.   </p>\n<p>Imaginons une librairie que l\'on a divisé un plusieures parties, avec un <em>core</em> commun et des fonctionnalitées séparées en packages distincts. Chaque package va dépendre du <em>core</em>.</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json">// in packages/ra-core/package.json du projet react-admin\n<span class="token punctuation">{</span>\n    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"ra-core"</span><span class="token punctuation">,</span>\n    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"2.0.0-beta2"</span><span class="token punctuation">,</span>\n\t...\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json">// in packages/react-admin/package.json du projet react-admin\n<span class="token punctuation">{</span>\n    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"react-admin"</span><span class="token punctuation">,</span>\n    <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"2.0.0-beta2"</span><span class="token punctuation">,</span>\n    ...\n    <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"ra-language-english"</span><span class="token operator">:</span> <span class="token string">"^2.0.0-beta2"</span><span class="token punctuation">,</span>\n        <span class="token property">"ra-core"</span><span class="token operator">:</span> <span class="token string">"^2.0.0-beta2"</span><span class="token punctuation">,</span>\n        <span class="token property">"ra-ui-materialui"</span><span class="token operator">:</span> <span class="token string">"^2.0.0-beta2"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Maintenant, si l\'on modifie le <em>core</em>, il faudrait le publier pour pouvoir le tester au sein des autres packages !<br>\nLerna va permettre d\'utiliser le code du <em>core</em> présent dans le monorepo comme un package déja publié. C\'est ce que fait <code class="language-text">npm link</code> mais Lerna le fait mieux, et plus simplement.</p>\n<p>Dans notre cas - celui d\'un petit projet - on ne partage que des fonctionnalités entre nos différentes parties du dépôt, pas de code ! Lerna n\'a donc pas d\'intérêt (ou en tout cas, je ne l\'ai pas vu).   </p>\n<p>Par contre, dès lors que l\'on va avoir besoin d\'isoler du code commun entre plusieurs de ces parties du projet, par exemple un *style guide** utilisé par une appli web et une appli mobile, Lerna prendra tout son sens.</p>\n<h2>Conclusion</h2>\n<p>L’utilisation d’un monorepo pour gérer un projet client est une évidence quand bien même les différentes parties du projet (api, front, mobile) seraient sur des technos différentes.</p>\n<p>Dans ce cadre et si plus d’une des parties est basée sur JavaScript, l’utilisation des workspaces Yarn, sans apporter énormément, permet de gagner de l’espace disque et du temps d’installation. C’est déjà ça.<br>\nDes outils plus classiques (Eslint, Jest) se prêtent également bien à ce mode de gestion du code.</p>\n<p>Les monorepos ne sont pas une révolution donc, mais une évolution positive vers une meilleure gestion de notre quotidien de développeur.</p>',frontmatter:{title:"Un monorepo pour les petits projets",date:"2018-02-21",tags:["Git","Project"],description:"Plébiscitée sur les grosses bases de code, l’utilisation d’un monorepo sur un projet de librairies est un indéniable plus. Mais qu’en est-il sur les projets plus standards ?"}}},pathContext:{slug:"monorepo"}}}});
//# sourceMappingURL=path---monorepo-41a909164dca3b7b6c4d.js.map