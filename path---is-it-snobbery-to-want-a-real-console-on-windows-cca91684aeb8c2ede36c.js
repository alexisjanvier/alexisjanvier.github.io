webpackJsonp([86129371359560],{383:function(t,e){t.exports={data:{markdownRemark:{html:'<p>I had to code on Windows because a client’s development environment could not be anything other than Windows 7 running in a VM (with admin’s rights, luckily), behind a non-cooperative firewall. The job consisted of a PHP Silex backend and a JavaScript frontend.</p>\n<h2>Why did I have to find an alternative to Windows installers?</h2>\n<p>First, I installed Atom, by habit, even if I had never used it for PHP development.\nApart from a small initial worry (installing Atom requires .Net framework 4.5 which may be too big for my VM disk space), the official installer worked fine.\nIf you are behind a firewall, just remember to add or edit the file <code class="language-text">.atom/.apmrc</code> if you want to add some plugins (atom-beautify, linter, linter-php,…).</p>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh"># $HOME/.atom/.apmrc\n\nhttp-proxy = &quot;http://LOGIN:PASSWORD@PROXY_URL:PROXY_PORT&quot;\nhttps-proxy = &quot;http://LOGIN:PASSWORD@PROXY_URL:PROXY_PORT&quot;\nproxy = &quot;http://LOGIN:PASSWORD@PROXY_URL:PROXY_PORT&quot;</code></pre>\n      </div>\n<p>Next I switched to the PHP environment. The VM was delivered with Xampp. After adding PHP in the user path, I had access to PHP from the terminal, sorry, the <strong>command prompt</strong>.</p>\n<p><img src="/images/blog/win_console_php_path.png" alt="Add Php to your path"></p>\n<p>That’s why I was self-confident when I tried the <strong>Composer</strong> Windows installer. Maybe too confident.</p>\n<p><img src="/images/blog/win_console_error_composer_exe.png" alt="Composer windows installer"></p>\n<p>So, I tried to launch the installation from the command prompt, but without success.</p>\n<p><img src="/images/blog/win_console_error_composer_cmd.png" alt="Composer install from cli"></p>\n<p>I decided to postpone <strong>Composer</strong>  to start the <strong>Git</strong> installation. Following my initial idea, I began with the official Github Tools. Although the installation worked fine, it was impossible to connect the Github servers. This was undoubtedly due to the Firewall.</p>\n<p>In short, the morning began rather badly, and good jokes about Windows came back to my mind quickly.</p>\n<h2>Babun</h2>\n<p>However, I seemed to remember a possible solution to my problem, a sort of nice Windows console promise that I had bookmarked somewhere… Thanks to <a href="https://raindrop.io">Raindrop</a>, I found this project: <a href="http://babun.github.io/">Babun</a>.</p>\n<p>This is the official description:</p>\n<blockquote>\n<p>Would you like to use a Linux-like console on a Windows host without a lot of fuzz? Try out a babun!</p>\n</blockquote>\n<p>Once the installation was completed without problems, I launched the <code class="language-text">babun check</code> command, which reminded me that I was behind a firewall.</p>\n<p><img src="/images/blog/win_console_babun_check.png" alt="Babun check fail"></p>\n<p>After a quick proxy configuration in the file <code class="language-text">~/.babunrc</code>, everything seemed to work.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">export http_proxy=http://LOGIN:PASSWORD@PROXY_URL:PROXY_PORT\nexport https_proxy=$http_proxy\nexport ftp_proxy=$http_proxy\nexport no_proxy=localhost</code></pre>\n      </div>\n<p><img src="/images/blog/win_console_babun_check_proxy.png" alt="Babun check success"></p>\n<p>So I continued with the PHP installation helped by Babun\'s package manager <strong>Pact</strong> (and by adding a file <code class="language-text">~/.wgetrc</code> for registering the proxy path to the <code class="language-text">wget</code> command, used sometimes by Pact), then Composer. Everything installed fine without any error.</p>\n<p>Thanks to <a href="https://twitter.com/tombujok">Tomek Bujok</a>, I now have a functional PHP environment and a beautiful console already customised (git, zsh, oh-my-zsh…). I even recovered some .dotfiles (that you must convert in ISO 8859-1), added <strong>tmux</strong>, and it almost felt like being on my Mac.</p>\n<p> <img src="/images/blog/win_console_tmux_make.png" alt="make under tmux"></p>\n<h2>Yes, but</h2>\n<p>It was finally time to start coding: I typed <code class="language-text">composer require silex</code>, and … <strong><em>ka-bun</em></strong>.</p>\n<p> <img src="/images/blog/win_console_badabun.png" alt="ka-bun"></p>\n<p>I won\'t give any details on research carried out on what this tricky error was, but the conclusion was that the Cygwin version used by babun, the 32-bit version, was incompatible with the 64-bit Symantec Endpoint Protection installed on Windows...\nIt was not a problem, I just had to switch to the Cygwin in 64-bit. Except that this version is not, and will never be supported by Babun.</p>\n<p>So, the only logical solution was to switch to a “standalone” <a href="https://www.cygwin.com/">Cygwin</a> 64-bit version and forget Babun.\nI did this, and in a short time I had a functional PHP environment, with composer, git, zsh, and tmux.</p>\n<p>Babun is actually just an overlay of utilities and configurations over Cygwin. No, Cygwin does not have a package manager (you\'ll have to restart the windows installer if you forgot some packages), and must be customised by hand (export proxy, git configuration, zsh by default, …) but it does the job very well.</p>\n<p><img src="/images/blog/win_console_cygwin.png" alt="Cygwin"></p>\n<h2>Conclusion</h2>\n<p>Nothing revolutionary in this blog post: Cygwin is already an old project. But it is certainly a tool to know, on a daily basis or not. Babun is a good project, which speeds up a beautiful console installation… as long as the cygwin 32-bit version is not a problem.</p>\n<p>What is the connection between all this and snobbery?  Well, it turns out that this was a question (it was more an affirmation in fact) I was asked during my quest for a functional console.\nThe obvious answer was that without Cygwin, I could not install Composer. So, yes, I could have installed Silex with its dependencies by hand. But we are in 2016, and I\'m not sure that my hourly rate is low enough to engage in such a waste of time. And more importantly, I have better things to do.</p>\n<p>But I would like to close this post by giving a much better answer, read at the end of chapter <strong>Orthogonality</strong> from the book <strong>The Pragmatic Programmer</strong> written by <strong>Andrew Hunt</strong> and <strong>David Thomas</strong> :</p>\n<blockquote>\n<p>Challenges : " Consider the difference between large GUI-oriented tools typically found on Windows systems and small but combinable command line utilities used at shell prompts. Which set is more orthogonal, and why? Which set is easier to combine with other tools to meet new challenges ? "</p>\n</blockquote>',frontmatter:{title:"Is it snobbery to want a real console on Windows?",date:"2016-02-22",tags:["tutorial"],description:"Sometimes you have to code on Windows: this can be because of a personal challenge, or because you lost a bet, or because you don't have a choice. And it can be a bit painful when you are used to a powerful terminal. But some good solutions exist, as we'll see."}}},pathContext:{slug:"is-it-snobbery-to-want-a-real-console-on-windows"}}}});
//# sourceMappingURL=path---is-it-snobbery-to-want-a-real-console-on-windows-cca91684aeb8c2ede36c.js.map