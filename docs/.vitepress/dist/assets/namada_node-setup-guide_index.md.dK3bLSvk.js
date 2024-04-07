import{_ as s,o as i,c as a,U as n,aI as t}from"./chunks/framework.FGl4sX9b.js";const y=JSON.parse('{"title":"Node Setup Guide","description":"","frontmatter":{},"headers":[],"relativePath":"namada/node-setup-guide/index.md","filePath":"namada/node-setup-guide/index.md"}'),e={name:"namada/node-setup-guide/index.md"},h=n('<h1 id="node-setup-guide" tabindex="-1">Node Setup Guide <a class="header-anchor" href="#node-setup-guide" aria-label="Permalink to &quot;Node Setup Guide&quot;">​</a></h1><p>Namada: Node Setup Guide</p><p><img src="'+t+`" alt="An image"></p><p>Welcome to our guide on setting up your node and participating in the <a href="https://docs.namada.net/networks/testnets" target="_blank" rel="noreferrer">Namada public testnet</a>. Follow these step-by-step instructions to get started.</p><p>The guide on how to run a <a href="https://hub.denodes.xyz/namada/the-node-guide" target="_blank" rel="noreferrer">Namada node</a> is also available in other languages, such as:</p><ul><li><a href="https://hub.denodes.xyz/namada/the-node-guide/russian" target="_blank" rel="noreferrer">Russian</a></li></ul><h2 id="hardware-requirements" tabindex="-1">Hardware Requirements <a class="header-anchor" href="#hardware-requirements" aria-label="Permalink to &quot;Hardware Requirements&quot;">​</a></h2><p>We recommend the following minimum hardware requirements for running the Namada Node:</p><ul><li>Machine: <strong>8 GB RAM, 6 Cores, 500 SSD</strong></li><li>OS: <strong>Ubuntu Linux 20.04 (LTS)</strong></li></ul><h2 id="setting-up-a-namada-node" tabindex="-1">Setting up a Namada node <a class="header-anchor" href="#setting-up-a-namada-node" aria-label="Permalink to &quot;Setting up a Namada node&quot;">​</a></h2><p>Update the system:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jq</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><p>Install CometBFT:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/cometbft</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/cometbft</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cometbft.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/cometbft/cometbft/releases/download/v0.37.2/cometbft_0.37.2_linux_amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cometbft.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cometbft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./cometbft</span></span></code></pre></div><p>Download the binary files Namada:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/namada</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/namada</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> namada.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://api.github.com/repos/anoma/namada/releases/latest&quot; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;browser_download_url&quot; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cut</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&quot;&#39; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Linux&quot;)&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xzvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> namada</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.tar.gz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --strip-components</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./namada</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./namada</span></span></code></pre></div><p>Set environment variables:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># In the following variables, we set the name of the validator, the name of the wallet and your email</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;export NAMADA_ALIAS=&quot;moniker&quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.bash_profile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;export NAMADA_WALLET=&quot;wallet&quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.bash_profile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;export EMAIL=&quot;mymail@mydomain.com&quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.bash_profile</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># This is left without changes</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;export PUBLIC_IP=$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -qO-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> eth0.me)&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.bash_profile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;export TM_HASH=&quot;v0.1.4-abciplus&quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.bash_profile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;export CHAIN_ID=&quot;public-testnet-14.5d79b6958580&quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.bash_profile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;export BASE_DIR=&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.local/share/namada&quot;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.bash_profile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.bash_profile</span></span></code></pre></div><p>Join the network:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">namada</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> utils</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> join-network</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --chain-id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $CHAIN_ID</span></span></code></pre></div><p>Create a service file:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/system/namadad.service</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /dev/null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Description=Namada</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">After=network-online.target</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">User=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$USER</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WorkingDirectory=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$BASE_DIR</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Environment=CMT_LOG_LEVEL=p2p:none,pex:error</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Environment=NAMADA_CMT_STDOUT=true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ExecStart=$(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">which</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> namada) node ledger run </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">StandardOutput=syslog</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">StandardError=syslog</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Restart=always</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RestartSec=10</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">LimitNOFILE=65535</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">WantedBy=multi-user.target</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span></code></pre></div><p>Enable and start the service:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> namadad</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> namadad</span></span></code></pre></div><p>Then, create a new wallet:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">namada</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wallet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NAMADA_WALLET</span></span></code></pre></div><p>Get some test tokens for your newly created wallet from this faucet: <a href="https://faucet.heliax.click/" target="_blank" rel="noreferrer">https://faucet.heliax.click/</a></p><p>After that, you need to wait for the node to fully synchronize. To do this, you need to check your wallet balance and synchronization status.</p><h4 id="check-balance" tabindex="-1">Check balance <a class="header-anchor" href="#check-balance" aria-label="Permalink to &quot;Check balance&quot;">​</a></h4><p>To check the wallet balance, please use the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">namada</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --owner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NAMADA_ALIAS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NAM</span></span></code></pre></div><h4 id="sync-status" tabindex="-1">Sync Status <a class="header-anchor" href="#sync-status" aria-label="Permalink to &quot;Sync Status&quot;">​</a></h4><p>To check the synchronization status, please use the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://127.0.0.1:26657/status</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jq</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .result.sync_info.catching_up</span></span></code></pre></div><h4 id="create-a-validator" tabindex="-1">Create a validator <a class="header-anchor" href="#create-a-validator" aria-label="Permalink to &quot;Create a validator&quot;">​</a></h4><p>When sync is completed and tokens are on the balance, proceed to the creation of a validator.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">namada</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init-validator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NAMADA_ALIAS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --account-keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NAMADA_WALLET </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --signing-keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NAMADA_WALLET </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --commission-rate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.05</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --max-commission-rate-change</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.01</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $EMAIL</span></span></code></pre></div><div class="language-note vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">note</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>The validator&#39;s fee can be set at your discretion. </span></span>
<span class="line"><span>In the example, the validator commission is 5% and can be changed to 1%</span></span></code></pre></div><p>Now you need to stake the available tokens into your validator:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">namada</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bond</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --validator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NAMADA_ALIAS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --amount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span></span></code></pre></div><p>Wait 2 epochs and check the stakes:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">namada</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bonds</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --owner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NAMADA_ALIAS</span></span></code></pre></div><p>The current epoch can be obtained with the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">namada</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> epoch</span></span></code></pre></div><h2 id="getting-out-of-jail" tabindex="-1">Getting out of Jail <a class="header-anchor" href="#getting-out-of-jail" aria-label="Permalink to &quot;Getting out of Jail&quot;">​</a></h2><p>In some cases, an active validator may be placed in &quot; Jail&quot; and does not participate in the consensus. For example, if a node has lost synchronization and has not signed blocks for a certain period of time.</p><p>After the problem with the node is resolved, to return to the active set you need to run the following command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">namada</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unjail-validator</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --validator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NAMADA_ALIAS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--signing-keys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NAMADA_WALLET</span></span></code></pre></div><h2 id="useful-commands" tabindex="-1">Useful Commands <a class="header-anchor" href="#useful-commands" aria-label="Permalink to &quot;Useful Commands&quot;">​</a></h2><p>The list of useful commands includes ways to manage and monitor your namada node:</p><ul><li>View the logs</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">journalctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> namada</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cat</span></span></code></pre></div><ul><li>List of all validators and amount of staked tokens (own and delegated)</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">namada</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bonded-stake</span></span></code></pre></div><ul><li>Delete your node</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> namadad</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> namadad</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/systemd/system/namadad.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/namada</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.local/share/namada</span></span></code></pre></div>`,56),l=[h];function p(k,d,r,F,o,g){return i(),a("div",null,l)}const C=s(e,[["render",p]]);export{y as __pageData,C as default};
