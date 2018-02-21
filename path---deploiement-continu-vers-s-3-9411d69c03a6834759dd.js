webpackJsonp([0x5bb2a84073cf],{389:function(n,e){n.exports={data:{markdownRemark:{html:'<h1>Hébergement du site sur S3</h1>\n<p>L’un des objectifs du projet est de réaliser une application <strong>serverless</strong>. Pour <strong><em>Road to Caen</em></strong>, ce ne devrait pour l’instant pas être compliqué, l’application ne consistant qu’en une application JavaScript. Il suffira donc d’héberger les fichiers statiques sur un Bucket S3, configuré pour pouvoir servir ses fichiers en HTTP.</p>\n<p>La manipulation est très simple, et <a href="http://docs.aws.amazon.com/fr_fr/AmazonS3/latest/dev/WebsiteHosting.html">la documentation</a> permet de rapidement mettre en place notre « infrastructure »</p>\n<p>Je vais juste revenir sur les points qui me semblent les plus importants.</p>\n<h3>- Nommage du bucket</h3>\n<p>Il faut donner le même nom au bucket que l’url du site. Par exemple pour une url <strong>mon<em>site. mon</em>domaine.com</strong>, on nommera le bucket... <strong>mon<em>site. mon</em>domaine.com</strong></p>\n<h3>- Création d\'un utilisateur IAM, et d\'une <em>Policies</em> spécifique pour le bucket</h3>\n<p>Ensuite, il est <strong>obligatoire</strong> de créer un utilisateur IAM pour interagir avec notre bucket, afin d’être certain de ne jamais utiliser <strong>l’aws<em>access</em>key_id</strong> et <strong>l’aws<em>secret</em>access_key</strong> de l’utilisateur principal du compte AWS (le root en quelque sorte). Certains s’en sont mordu les doigts.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># Policies appliquée au user IAM\n {\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "Stmt1453976839000",\n            "Effect": "Allow",\n            "Action": [\n                "s3:PutObject",\n                "s3:PutObjectAcl",\n                "s3:DeleteObject",\n                "s3:AddObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::mon_site.mon_domaine.com/*"\n            ]\n        }\n    ]\n}</code></pre>\n      </div>\n<h3>- Ajout d\'une entrée CNAM au DNS de son domaine</h3>\n<p>Il faut ajouter une entrée CNAM dans les réglages DNS de son domaine.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mon_site CNAME mon_site.mon_domaine.com.s3-website-eu-west-1.amazonaws.com.</code></pre>\n      </div>\n<h1>Déploiement manuel</h1>\n<p>Avant de configurer le déploiement automatique, on va tout de même configurer de quoi déployer <em>à la main</em> notre code sur S3.\nPour cela, il faut tout d\'abord installer <a href="https://aws.amazon.com/fr/cli/">awscli</a>. Sur un Mac, on peut utiliser <a href="http://brew.sh/">brew</a> :</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>brew <span class="token function">install</span> awscli\n</code></pre>\n      </div>\n<p>Ensuite, on configure un profil spécifique au projet, avec les identifiants de l\'utilisateur IAM précédemment créé :</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># ~/.aws/config\n\n[default]\noutput = json\nregion = us-east-1\n\n[profile IAM_USER_PROFIL]\noutput = json\nregion = eu-west-1\naws_access_key_id = IAM_USER_ACCESS_KEY_ID\naws_secret_access_key = IAM_USER_SECRET_ACCESS_KEY</code></pre>\n      </div>\n<p>Ne reste plus qu\'à ajouter une nouvelle commande à notre fichier <code>makefile</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-makefile"><code><span class="token comment"># makefile</span>\n\n<span class="token symbol">deploy</span><span class="token punctuation">:</span> build\n    <span class="token operator">@</span> echo <span class="token string">\'* Deploy web app on S3 *\'</span>\n    aws s3 --profile<span class="token operator">=</span>IAM_USER_PROFIL --region<span class="token operator">=</span>eu-west-1 sync ./build/ s3<span class="token punctuation">:</span>//YOUR-BUCKET-NAME/ --delete\n</code></pre>\n      </div>\n<h1>Worflow de développement et intégration continue</h1>\n<p>Le worflow de développement sera très simple; c\'est d\'ailleurs celui que je trouve le meilleur, même sur les projets plus importants :</p>\n<ul>\n<li>une branche master qui contient le code envoyé sur S3,</li>\n<li>une nouvelle branche par feature développée.</li>\n</ul>\n<p>Une fois la feature terminée, elle est intégrée à la branche master via une pull request. C\'est à ce moment que l\'on va parler d\'intégration continue, car cette PR va être automatiquement testée sur <a href="https://travis-ci.org"><strong>Travis</strong></a>. Il suffit pour cela d\'ajouter le fichier <code>.travis.yml</code> à la racine du projet :</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># .travis.yml</span>\n\n<span class="token key atrule">language</span><span class="token punctuation">:</span> node_js\n\n<span class="token key atrule">node_js</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token string">"5.5"</span>\n\n<span class="token key atrule">env</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> CXX=g++<span class="token punctuation">-</span><span class="token number">4.8</span>\n\n<span class="token key atrule">sudo</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n\n<span class="token key atrule">addons</span><span class="token punctuation">:</span>\n    <span class="token key atrule">apt</span><span class="token punctuation">:</span>\n        <span class="token key atrule">sources</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> ubuntu<span class="token punctuation">-</span>toolchain<span class="token punctuation">-</span>r<span class="token punctuation">-</span>test\n        <span class="token key atrule">packages</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> gcc<span class="token punctuation">-</span><span class="token number">4.8</span>\n            <span class="token punctuation">-</span> g++<span class="token punctuation">-</span><span class="token number">4.8</span>\n\n<span class="token key atrule">cache</span><span class="token punctuation">:</span>\n    <span class="token key atrule">directories</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> node_modules\n\n<span class="token key atrule">before_script</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> cp <span class="token punctuation">-</span>n ./config/test.js.dist ./config/test.js <span class="token punctuation">|</span> true\n\n<span class="token comment"># xvfb va permettre de lancer firefox, utilisé pour les tests fonctionnels</span>\n<span class="token comment"># sans avoir à installer un serveur X</span>\n<span class="token key atrule">before_install</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token string">"export DISPLAY=:99.0"</span>\n    <span class="token punctuation">-</span> <span class="token string">"sh -e /etc/init.d/xvfb start"</span>\n\n<span class="token key atrule">install</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token string">"make --silent install"</span>\n</code></pre>\n      </div>\n<p>Pour un projet en node, Travis va lancer le script de test déclaré dans le <code>package.json</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n  <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"make test"</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>Il faut évidemment déclarer le dépôt git du projet sur le site de Travis, pour qu\'il puisse mettre en place les webhooks lui permettant de savoir quand une PR est réalisée. Travis est gratuit pour les dépôts publics.</p>\n<h1>Déploiement continu</h1>\n<p>Pour finir, on va automatiser le déploiement du code sur notre Bucket S3, lorsque la PR  (passée <em>au vert</em> sur Travis) est mergée sur la branche <strong>master</strong>. Pour cela, j\'utilise <a href="https://snap-ci.com"><strong>Snap CI</strong></a> (mais il en existe d\'autres), qui est tout comme Travis gratuit pour les dépôts git public. L\'interface est bien réalisée, et permet de monter un <strong><em>pipeline</em></strong> d\'étapes, dont une réalisant le déploiement sur S3. Une étape peut également consistée à lancer les tests une dernière fois avant de déployer, au cas où ...</p>\n<p><img src="/images/rtc_deployment/snapCiRTC.png" alt="Road to Caen Pipeline"></p>\n<h1>C\'est prêt !</h1>\n<p>Et voilà, on peut commencer à coder en ES6 sur une <strong>nouvelle branche</strong>. Une fois une feature terminée et <strong>testée</strong>, on propose le code via une <strong>PR sur Github</strong>. Si les tests passent tous sur <strong>Travis</strong>, on <strong>merge</strong> la PR, et <strong><em>tadam</em></strong>, le code est directement envoyé sur <strong>S3</strong> grâce à <strong>Snap CI</strong> et accessible à la terre entière.</p>',frontmatter:{title:"Déploiement continu vers S3",date:"2016-02-15",tags:["AWS","S3","Devops"],description:"L’application « Road to Caen » est maintenant bootstrappée. Avant de commencer le développement proprement, il reste à mettre en place le tunnel de déploiement continu, du code créé en local au bucket S3 d’hébergement, déploiement sécurisé par l’exécution automatique des tests unitaires et fonctionnels déjà mis en place."}}},pathContext:{slug:"deploiement-continu-vers-s3"}}}});
//# sourceMappingURL=path---deploiement-continu-vers-s-3-9411d69c03a6834759dd.js.map