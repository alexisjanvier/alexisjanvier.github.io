webpackJsonp([3093294421951],{380:function(n,s){n.exports={data:{markdownRemark:{html:'<h2>C\'est quoi un linter ?</h2>\n<blockquote>\n<p>Lint (logiciel) lint (en lettres minuscules ; de l\'anglais lint : « touffe hirsute » ) est une commande UNIX de préprocesseur permettant l\'analyse statique de code source en langage C.\n<em>Wikipedia</em></p>\n</blockquote>\n<p>Un linter est donc un outil qui va permettre d\'analyser du code et vérifier s’il respecte un certain nombre de règles de syntaxe et de qualité.</p>\n<p>En JavaScript, le linter le plus connu est certainement <a href="https://eslint.org">Eslint</a>, dont l\'un des points fort est sa configuration. Il est tellement configurable que j\'ai bien souvent copié/collé la conf. d\'un projet précédent sur le suivant, pour ensuite perdre du temps à installer des plug-ins manquants, rajouter des règles afin d\'activer ou désactiver des alertes intempestives...</p>\n<p>Pour se faciliter la vie, il vaut donc mieux reprendre les choses à zero, bien comprendre le fonctionnement, et n\'installer que le strict minimum, quitte à devoir rajouter des règles et autre plugins au fur et à mesure.</p>\n<h2>Installation et utilisation</h2>\n<p><code class="language-text">Eslint</code> peut être installé en global ou au niveau d\'un projet. Personnellement, et parce que chaque projet va requérir ses propres règles et souvent ses propres plugins, je préfère l\'installer au niveau du projet, voir de chaque partie du projet. </p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">yarn <span class="token punctuation">(</span>workspace workspacename<span class="token punctuation">)</span> add -D eslint</code></pre>\n      </div>\n<p>Une fois installé, on a accès à l\'utilitaire depuis la ligne de commande :</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">❯ node_modules/.bin/eslint index.js\n\n/home/alexis/Code/Sandbox/javascript-playground/services/express_server/index.js\n  6:3  error  Insert <span class="token variable"><span class="token variable">`</span>··<span class="token variable">`</span></span>  prettier/prettier\n\n✖ 1 problem <span class="token punctuation">(</span>1 error, 0 warnings<span class="token punctuation">)</span>\n  1 error, 0 warnings potentially fixable with the <span class="token variable"><span class="token variable">`</span>--fix<span class="token variable">`</span></span> option.</code></pre>\n      </div>\n<p>On voit donc les erreurs éventuelles présentes dans <code class="language-text">index.js</code>, ce qui est bien, mais certainement pas suffisant.</p>\n<p>On pourrait décider de lancer Eslint à chaque fois que l\'on ajoute du code au repository (<a href="https://prettier.io/docs/en/precommit.html">Pre-commit Hook</a>). Cela peut sûrement être utile, mais je n\'aime pas l\'idée d\'avoir du code ajouter au repo avec un formatage que je n\'aurais pas vu au préalable. Je préfère laisser mon editeur faire appel à ESLint pour corriger mon code en <em>live</em>.</p>\n<p>Et si vous êtes sous VSCode, c\'est très simple avec le plugin <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">VS Code ESLint extension</a>. Si vous utilisez un autre éditeur, il y a de forte chance que ESLint <a href="https://eslint.org/docs/user-guide/integrations">puisse aussi y être intégré</a>.</p>\n<p>Et toujours pour une affaire de goût, j\'aime activer le formatage automatique du code à la sauvegarde.</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json">// in $HOME/.config/Code/User/settings.json\n<span class="token property">"eslint.autoFixOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<h2>Configuration de base</h2>\n<p>Le linter est installé et l\'IDE configuré pour l\'utiliser. Il est maintenant temps de le configurer, via un fichier <code class="language-text">.eslintrc</code></p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json">// in .eslintrc\n<span class="token punctuation">{</span>\n    <span class="token property">"parser"</span><span class="token operator">:</span> <span class="token string">"Espree"</span><span class="token punctuation">,</span> // Le parser utiliser pour analyser le code\n    <span class="token property">"parserOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> // Les options éventuelles passées au parser\n    <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> // Déclaration d\'un environnement permettant de définir des variables globales préconfigurées\n    <span class="token property">"globals"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> // Déclaration de variables globales personnalisées\n    <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> // Déclaration et configuration des plugins\n    <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> // Déclaration d\'une pré-configuration complête d\'ESLint\n    <span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> // Surcharge des règles appliquées par défaut par ESLint ou par un plugin\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Sur un projet basique proche du standard Javascript supporté par le node ou le navigateur utilisé (donc pas de <a href="https://babeljs.io/">Babel</a>), la configuration par défault est presque suffisante : </p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"es6"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"node"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="/images/linter/simpleEslintConfig.png" alt="Linted !"></p>\n<p>Mais l\'application de le configuration <strong><em>recommandée</em></strong> par ESLint apporte quand même du mieux :</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"es6"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"node"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="/images/linter/recomandedEslintConfig.png" alt="Much better Linted !"></p>\n<h2>Une application CRA (create-react-app)</h2>\n<p>Pour pouvoir utiliser ESLint depuis VSCode sur un application CRA, il va falloir déclarer son propre fichier de configuration, sauf à vouloir passer par un <code class="language-text">create-react-app eject</code> pour acceder à la configuration mise en place par l\'équipe du projet. Et ce type de projet est beaucoup plus compliqué que celui évoqué précédemment : passage par un phase de transpilation avec <a href="https://babeljs.io/">Babel</a> (il faut donc changer de parser), présence de <code class="language-text">jsx</code> et son lot de <code class="language-text">rules</code> à définir ...</p>\n<p>Mais, et merci à eux, l\'équipe de Facebook met à disposition une configuration déjà toute prête : <a href="https://www.npmjs.com/package/eslint-config-react-app">eslint-config-react-app</a>. On doit certe installer pas mal de chose ...</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">yarn add -D eslint-config-react-app babel-eslint@^7.2.3 eslint@^4.1.1 eslint-plugin-flowtype@^2.34.1 eslint-plugin-import@^2.6.0 eslint-plugin-jsx-a11y@^5.1.1 eslint-plugin-react@^7.1.0</code></pre>\n      </div>\n<p>...mais cela fait, le configuration reste très simple grâce à <code class="language-text">extends</code> :</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json">// in .eslintrc\n<span class="token punctuation">{</span>\n    <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"es6"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"jest"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"react-app"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>On applique maintenant les mêmes règles de syntaxe dans VSCode que celles définies par CRA.</p>\n<p>Voyons par exemple le fichier App.js avec notre configuration précédente:</p>\n<p><img src="/images/linter/basicCRAConfig.png" alt="CRA basic config !"></p>\n<p>Maintenant avec</p>\n<p><img src="/images/linter/officialCRAConfig.png" alt="CRA with good config !"></p>\n<p>Les <code class="language-text">import</code> sont valides, et ceci parce que l\'on n\'utilise plus le parser <code class="language-text">Espree</code> mais <code class="language-text">babel-eslint</code> ! Comment on peut le savoir ? En regardant dans le code du plugin où l\'on va retrouver la configuration complète d\'ESLint. Et c\'est du serieux:</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// in node_modules/eslint-config-react-app/index.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  root<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n\n  parser<span class="token punctuation">:</span> <span class="token string">\'babel-eslint\'</span><span class="token punctuation">,</span>\n\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'import\'</span><span class="token punctuation">,</span> <span class="token string">\'flowtype\'</span><span class="token punctuation">,</span> <span class="token string">\'jsx-a11y\'</span><span class="token punctuation">,</span> <span class="token string">\'react\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n  env<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    browser<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    commonjs<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    es6<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    jest<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    node<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  parserOptions<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    ecmaVersion<span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span>\n    sourceType<span class="token punctuation">:</span> <span class="token string">\'module\'</span><span class="token punctuation">,</span>\n    ecmaFeatures<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      jsx<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      generators<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      experimentalObjectRestSpread<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  rules<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// http://eslint.org/docs/rules/</span>\n    <span class="token string">\'array-callback-return\'</span><span class="token punctuation">:</span> <span class="token string">\'warn\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'default-case\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'warn\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> commentPattern<span class="token punctuation">:</span> <span class="token string">\'^no default$\'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n    <span class="token operator">...</span>\n\n    <span class="token string">\'jsx-a11y/role-supports-aria-props\'</span><span class="token punctuation">:</span> <span class="token string">\'warn\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'jsx-a11y/scope\'</span><span class="token punctuation">:</span> <span class="token string">\'warn\'</span><span class="token punctuation">,</span>\n    <span class="token comment">// https://github.com/gajus/eslint-plugin-flowtype</span>\n    <span class="token string">\'flowtype/define-flow-type\'</span><span class="token punctuation">:</span> <span class="token string">\'warn\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'flowtype/require-valid-file-annotation\'</span><span class="token punctuation">:</span> <span class="token string">\'warn\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'flowtype/use-flow-type\'</span><span class="token punctuation">:</span> <span class="token string">\'warn\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2>Prettier</h2>\n<p>ESLint fait maintenant un super boulot, mais pèche un peu sur le formatage du code. Ce doit être améliorable en définissant des <code class="language-text">rules</code> spécifique, mais il existe un autre projet <a href="https://prettier.io/">Prettie`</a> justement spécialisé dans le formatage du code. Il est complètement indépendant d\'ESLint et utilise son propre parser et ses propres règles.<br>\nIl va donc falloir ajouter une deuxième configuration et appliquer un second outil sur le code ? Et ne risquent-ils pas de se marcher sur le pied ?<br>\nEt bien si, il pourrait effectivement se concurrencer. Mais comme le monde du JavaScript est un monde merveilleux <a href="https://prettier.io/docs/en/eslint.html">ESLint et Prettier peuvent fonctionner l\'un avec l\'autre</a>, ESLint étant capable de donner le relai à Prettier pour tout ce qui concerne le formatage du code, et uniquement cela. Encore une fois, on passe par une configuration <code class="language-text">extends</code> :</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">yarn add -D prettier eslint-plugin-prettier eslint-config-prettier</code></pre>\n      </div>\n<p>Et voici la configuration après quelques ajouts de règles pour avoir un formattage de code correspondant à mes habitudes :</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json">// in .eslintrc\n<span class="token punctuation">{</span>\n    <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"es6"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"node"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>\n        <span class="token string">"plugin:prettier/recommended"</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"prettier/prettier"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token property">"singleQuote"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token property">"tabWidth"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n            <span class="token property">"trailingComma"</span><span class="token operator">:</span> <span class="token string">"all"</span>\n        <span class="token punctuation">}</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>Encore plus ?</h2>\n<p>La configuration précédente est déjà très efficace ! Et bien qu\'il faille sans doute être raisonnable sur l\'ajout de plugins, je complèterais quand même ce set de configuration minimal d\'ESLint par un dernier plugin, <a href="https://www.npmjs.com/package/eslint-plugin-jest">eslint-plugin-jest</a> :</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"es6"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"node"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"jest"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>\n        <span class="token string">"plugin:prettier/recommended"</span><span class="token punctuation">,</span>\n        <span class="token string">"plugin:jest/recommended"</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"prettier/prettier"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token property">"singleQuote"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n            <span class="token property">"tabWidth"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n            <span class="token property">"trailingComma"</span><span class="token operator">:</span> <span class="token string">"all"</span>\n        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">"jest/consistent-test-it"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">"error"</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span><span class="token property">"fn"</span><span class="token operator">:</span> <span class="token string">"it"</span><span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>Conclusion</h2>\n<p>Les possibilités de configuration d\'ESLint sont conséquentes et il n\'est pas toujours facile de trouver les bonnes. A mon sens, et surtout en ce qui concerne les règles de formatages du code, les bonnes pratiques se définissent au sein de la communauté. C\'est pour cela que j\'aime bien me reposer sur les <code class="language-text">extends</code> de la configuration pour garder cette configuration la plus simple possible. Quitte à devoir me plier à des règles de qualité et de syntaxe qui ne seraient initialement pas les miennes. </p>\n<p>Sans compter qu\'il est ensuite très facile d\'étendre ou de désactiver ces règles en fonction du projet.</p>\n<h3>Veille sur le sujet</h3>\n<ul>\n<li><a href="https://twitter.com/geteslint">Twitter eslint</a></li>\n<li><a href="https://twitter.com/PrettierCode">Twitter prettier</a></li>\n</ul>',frontmatter:{title:"ESLint et Prettier",date:"2018-03-04",tags:["toolbox","eslint","prettier"],description:'Lorsque je lance un nouveau projet, les premières étapes sont souvent les mêmes : créer un repository, bootstraper les bases du projet (yarn add express, create-react-app webapp, ...), et ouvrir le projet dans VSCode, où l’indentation et autre "doubleQuote" me rappellent la prochaine étape : mettre en place les règles d\'ESLint.'}}},pathContext:{slug:"eslint-prettier"}}}});
//# sourceMappingURL=path---eslint-prettier-515c182e9aae46aba9aa.js.map