"use strict";(self.webpackChunkgatsby_starter_rocket_docs=self.webpackChunkgatsby_starter_rocket_docs||[]).push([[943],{78923:function(e,a,t){t.r(a),t.d(a,{default:function(){return o}});t(67294);var n=t(87462),r=t(63366),i=t(64983),l=["components"],d={_frontmatter:{}};function h(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"gatsby-を使ったドキュメントサイトの作成方法",style:{position:"relative"}},(0,i.mdx)("a",{parentName:"h1",href:"#gatsby-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E4%BD%9C%E6%88%90%E6%96%B9%E6%B3%95","aria-label":"gatsby を使ったドキュメントサイトの作成方法 permalink",className:"anchor before"},(0,i.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Gatsby を使ったドキュメントサイトの作成方法"),(0,i.mdx)("p",null,"Gatsby を使って GitHub Pages に Docs サイトを作成する方法"),(0,i.mdx)("h2",{id:"nodejs-が必要",style:{position:"relative"}},(0,i.mdx)("a",{parentName:"h2",href:"#nodejs-%E3%81%8C%E5%BF%85%E8%A6%81","aria-label":"nodejs が必要 permalink",className:"anchor before"},(0,i.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Node.js が必要"),(0,i.mdx)("p",null,"ローカルに Node.js がインストールされていない場合は、あらかじめインストールして npm コマンドが使えるようにしておく"),(0,i.mdx)("h2",{id:"ローカルにテンプレートをクローンする",style:{position:"relative"}},(0,i.mdx)("a",{parentName:"h2",href:"#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%AB%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%92%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%B3%E3%81%99%E3%82%8B","aria-label":"ローカルにテンプレートをクローンする permalink",className:"anchor before"},(0,i.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"ローカルにテンプレートをクローンする"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"npx gatsby new <プロジェクト名> https://github.com/rocketseat/gatsby-starter-rocket-docs\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"cd ./<プロジェクト名>\nyarn start\n")),(0,i.mdx)("p",null,"yarn develop を実行、 http://localhost:8000 にアクセスしてページが表示されることを確認する"),(0,i.mdx)("h2",{id:"ライブリロードの確認",style:{position:"relative"}},(0,i.mdx)("a",{parentName:"h2",href:"#%E3%83%A9%E3%82%A4%E3%83%96%E3%83%AA%E3%83%AD%E3%83%BC%E3%83%89%E3%81%AE%E7%A2%BA%E8%AA%8D","aria-label":"ライブリロードの確認 permalink",className:"anchor before"},(0,i.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"ライブリロードの確認"),(0,i.mdx)("p",null,"以下の mdx ファイルを編集して、サイトのトップページが編集内容で更新されることを確認する"),(0,i.mdx)("p",null,"src/@rocketseat/gatsby-theme-docs/text/index.mdx"),(0,i.mdx)("h2",{id:"github-にリポジトリの作成",style:{position:"relative"}},(0,i.mdx)("a",{parentName:"h2",href:"#github-%E3%81%AB%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%81%AE%E4%BD%9C%E6%88%90","aria-label":"github にリポジトリの作成 permalink",className:"anchor before"},(0,i.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"GitHub にリポジトリの作成"),(0,i.mdx)("p",null,"GitHub にリポジトリを作成しておく。"),(0,i.mdx)("h2",{id:"ローカルリポジトリ作成",style:{position:"relative"}},(0,i.mdx)("a",{parentName:"h2",href:"#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E4%BD%9C%E6%88%90","aria-label":"ローカルリポジトリ作成 permalink",className:"anchor before"},(0,i.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"ローカルリポジトリ作成"),(0,i.mdx)("p",null,"ローカルリポジトリを作成し、リモートにプッシュする"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"git init \ngit config --local user.name アカウント名\ngit config --local user.email メールアドレス\ngit add .\ngit commit -m 'First commit'\ngit remote add origin https://github.com/アカウント名/プロジェクト名.git\ngit push -u origin master\n")),(0,i.mdx)("h2",{id:"gh-pages-のインストール",style:{position:"relative"}},(0,i.mdx)("a",{parentName:"h2",href:"#gh-pages-%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB","aria-label":"gh pages のインストール permalink",className:"anchor before"},(0,i.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"gh-pages のインストール"),(0,i.mdx)("p",null,"Gatsby アプリを GitHub Pages にプッシュするには、gh-pages というパッケージを使う。"),(0,i.mdx)("p",null,"gh-pages",(0,i.mdx)("br",{parentName:"p"}),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/tschaub/gh-pages"},"https://github.com/tschaub/gh-pages")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"yarn add --dev gh-pages\n")),(0,i.mdx)("h2",{id:"github-pages-のパスへのデプロイ",style:{position:"relative"}},(0,i.mdx)("a",{parentName:"h2",href:"#github-pages-%E3%81%AE%E3%83%91%E3%82%B9%E3%81%B8%E3%81%AE%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4","aria-label":"github pages のパスへのデプロイ permalink",className:"anchor before"},(0,i.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"GitHub Pages のパスへのデプロイ"),(0,i.mdx)("p",null,"username.github.io/reponame/ のようなパスでデプロイされたサイトの場合、--prefix-paths フラグが使用される。gatsby-config.js のオプションとして/reponame パスのプレフィックスを追加する必要がある。"),(0,i.mdx)("p",null,"gatsby-config.js"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'module.exports = {\n  pathPrefix: "/reponame",\n}\n')),(0,i.mdx)("p",null,"そして、リポジトリのコードベースにある package.json にデプロイスクリプトを追加する。"),(0,i.mdx)("p",null,"package.json"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},'{\n  "scripts": {\n    "deploy": "gatsby build --prefix-paths && gh-pages -d public"\n  }\n}\n')),(0,i.mdx)("h2",{id:"デプロイ方法",style:{position:"relative"}},(0,i.mdx)("a",{parentName:"h2",href:"#%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4%E6%96%B9%E6%B3%95","aria-label":"デプロイ方法 permalink",className:"anchor before"},(0,i.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"デプロイ方法"),(0,i.mdx)("p",null,"yarn deploy を実行すると、public フォルダのすべての内容がリポジトリの gh-pages ブランチに移動する。リポジトリの設定で、デプロイ元として gh-pages ブランチが設定されていることを確認する。"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"yarn deploy\n")),(0,i.mdx)("p",null,"以下の URL にアクセルしてデプロイが成功したことを確認する"),(0,i.mdx)("p",null,"https://アカウント名.github.io/プロジェクト名/"))}h.isMDXComponent=!0;var s=t(44078),m=t(49035),c=t(23431);function p(){return(0,c.tZ)(s.Z,null,(0,c.tZ)(m.Z,null),(0,c.tZ)(h,null))}var o=function(){return(0,c.tZ)(p,null)}}}]);
//# sourceMappingURL=component---node-modules-rocketseat-gatsby-theme-docs-core-src-templates-homepage-query-js-7bdfa7bc34acc4970979.js.map