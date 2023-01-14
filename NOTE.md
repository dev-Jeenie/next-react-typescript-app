

1강


Pages의 index 파일에 넣은 것이 자동적으로 내 웹사이트의 홈(기본 루트)에서 보이고 있다.
Framework와 Library

Library : 개발자로서 내가 사용하는 것
내가 불러오고, 내가 사용해서 무언가를 한다
내가 원하는 대로 코드를 작성할 수 있고, 사용하고 싶을 때 사용할 수 있다

Framework : 내 코드를 불러온다
내 코드를 적절한 위치에 잘 적기만 하면 내 코드를 불러와서 모든 걸 동작하게 한다

# React의 경우
: Library

create-react-app으로 React 앱을 만들면 항상 index.tsx 파일에 아래 부분이 만들어져있고,

```js
ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById("root")
)
```

항상 App Component로 시작하는데 App은 텅 비어있어서 내가 원하는대로 만들 수 있음.
Components 폴더를 만들거나, Routes 폴더를 만든다. 내가 코드를 짜고, 내가 언제 React를 부를지,
어떤 폴더 구조로 만들지 정하는 것.
이름조차 Component와 Routes라고 할 필요도 없다.

React에서 라우팅을 다루는 방법은(페이지에서 페이지로 넘어가는 방법) 다 나에게 달렸다.

이처럼 Library를 사용할 때는 내가 원할 때 언제든, 어떤 방법으로든 부르면 된다.

# Next의 경우
: Framework

특정한 규칙을 따라서 특정한 것을 해야한다. 이걸 따랐을 때 모든 게 정상적으로 작동한다.


---

2강

#  React와 Next의 가장 큰 차이점

React에서는 ReactDOM.render가 있어서 React 앱이 만들어졌을 때의 모든 것을 볼 수 있다
하지만 Next에는 ReactDOM.render가 없기 때문에 그 과정을 커스텀할 수 있는 곳이 없음.
우리가 할 수 있는 유일한 것은 pages 안에서 뭔가를 만드는 것 뿐임.

Next.js의 깊은 구석에서 ReactDOM.render 과정을 처리하지만 우리가 거기로 접근하지 못한다.
이것이 곧 추상화(Abstraction)를 시킨 것. 이것이 바로 Framework.

Framework는 코드를 어떤 곳에 넣으면 Framework가 그 코드를 부르는 형태.
어떤 설정이나 router를 설치하지 않아도 내가 입력한 hi를 볼 수 있음!

React.js의 component를 export하고 있는 파일을 pages 폴더 안에 두기만 하면 된다.
그럼 Next.js가 파일의 이름을 가져다가 url의 이름으로 쓴다.
(그래서 파일 이름과 url이 일치한다면, 그 파일에서 내보내는 컴포넌트와 이름이 일치하지 않아도 해당 페이지로 갈 수 있는 것!)

하지만 그 페이지에서 export하고 있는 component는 반드시 export default여야 한다!

## 유일하게 기억해야할 것

유저에게 보여주고 싶은 게 있다면 pages 폴더에서 export default function을 해야한다.
함수의 이름은 중요하지 않고, 중요한 것은 파일명과 함수가 default로 export 여야하는 것.


jsx를 쓰고 있다면 import react from "react" 할 필요가 없다.
다만 useState, useEffect 등의 react lifecycle method를 써야 할 경우에는 꼭 import를 해줘야 한다.


---


3강

# Next.js의 가장 좋은 기능

1. 앱에 있는 페이지들이 미리 랜더링된다.

이것들이 정적(static)으로 생성된다.

## create-react-app
client-side render를 하는 앱을 만든다
- client-side rendering

# React의 경우

### client-side render
- 유저가 보는 UI를 브라우저가 만든다
- 유저가 보는 HTML 소스코드 안에 들어있지 않는다

_브라우저가 자바스크립트를 가져오고_
_클라이언트 사이드의 자바스크립트가 모든 UI를 만든다_

브라우저가 react.js를 다운받고 코드를 다운받았을 때
그때 react는 다른 모든 것들을 랜더링하고
유저는 UI를 보게 된다

#### 유저가 UI를 보기까지의 순서

1. 브라우저가 HTML을 가져올 때 비어있는 div로 가져온다 (<div id="root"></div> 유저는 이것만 보임)
2. 그 후 브라우저가 모든 자바스크립트를 요청하고
3. 브라우저가 그 자바스크립트와 react.js를 실행시키고
4. 그럼 react는 다른 모든 것들을 랜더링하고
5. 그 후에 UI가 만들어져서 앱이 유저에게 보인다.

> 이 때 유저가 자바스크립트 비활성화 상태였다면?
"You nee to enable JavaScript to run this app."을 보게된다

네트워크 탭에서 로딩을 일부러 느리게 설정하고 새로고침을 하면 하얀 화면이 보인다.
브라우저가 자바스크립트 코드를 요청하고 있고, 브라우저는 자바스크립트 코드가 왔을 때만 UI를 만들 수 있다.
그래서 하얀 화면이 보이는 것.

브라우저가 react.js 코드를 불러오고 있는 동안에 유저는 아무것도 볼 수 없다가,
react 코드가 왔을 때야 비로소 UI를 그린다니? 네트워크가 빠르지 않은 유저들은 진짜 별로일 거야.

로딩 중이라는 걸 보여주는 게 좋은데 그냥 하얀 화면만 보여준다니 이렇게 안좋을 수가......


# Next의 경우

### server-side render

next.js로 만든 웹사이트의 소스코드에는 react처럼 텅 빈 HTML이 아닌, 실제 HTML이 있다.
그래서 유저가 완전 느린 연결을 하고 있거나, JS가 완전히 비활성화 되어있어도 유저는 적어도 HTML은 볼 수 있다.

#### 유저가 UI를 보기까지의 순서


> 유저의 입장
- React의 경우
  - 유저는 **텅 빈 화면**을 보며 UI를 기다리고 api가 데이터를 가져오는 것을 기다린다
- Next의 경우
  - 유저는 **UI를 보며** api가 데이터를 가져오는 것만 기다린다



next.js는 앱 초기 상태를 활용해서 미리 랜더링을 한다.

이게 바로 `pre-rendering`.
next.js는 초기 상태로 `pre-rendering`을 한다.
그럼 그동안 유저는 초기 상태로 pre-rendering된 HTML을 보고 있다가,
react.js가 클라이언트로 전송이 되면 연결이 되어서 react.js 앱이 된다!

=> 이것을 hydration (react.js를 프론트엔드 안에서 실행한다)


Next.js는 react.js를 백엔드에서 동작 시켜서 이 페이지를 미리 만든다.
이게 component들을 render시킨다.
랜더링이 끝나면 그건 HTML이 되고
next.js는 그 HTML을 페이지 소스코드에 넣는다.

_그래서 유저가 자바스크립트와 react가 로딩되지 않았어도 콘텐츠를(UI를) 볼 수 있는 것!_




--- 4강

a태그로 넣고 다른 페이지로 이동하면 모든 페이지가 새로고침된다.
= 느림. 클라이언트 사이드 네비게이션이 없다는 의미.

NextJs에서 사용해야만 하는 Link 컴포넌트가 있다.
Link로 이동하면 훨씬 빨라짐

(a 태그와 Link 태그 이동 속도 비교 영상 있음)

Link 태그는,
NextJS 어플리케이션의 클라이언트 사이드 네비게이션을 제공해준다.

이 개념은 ReactJS와 동일.






--- #1.6 Custom App

NextJS는 _app.js를 먼저 확인하고
_app.js에 넣어둔 청사진을 기반으로 해서 index.js의 내용물을 랜더링

그래서 _app.js는?

- 어떻게 페이지가 있어야하는지
- 어떤 컴포넌트가 어떤 페이지에 있어야 하는지

프레임워크는 내 코드를 불러온다.
따라서 NextJS는 _app.js를 불러올 것이다.

NextJS는 _app.js를 불러오고, 그 안에있는 App 함수를 두가지 Prop과 함께 부른다.





NextJS가 About 페이지를 랜더링하길 원한다면?
NextJS는 내 about.js 파일로 가서,
그 컴포넌트를 가져다가 _app.js의 props 중 하나인 Component의 위치에 넣는다.
그리고 거기서 뭘 리턴하든지 그 컴포넌트와 함께 추가로 작성한 것을 리턴해준다.





NextJS가 About 페이지를 렌더링하려고 할 때,
해당 페이지 명과 일치하는 파일 명 안에서 export default 되는 컴포넌트를 가져다가
_app.js 파일 내에 있는 App 함수에 Component 프롭으로 전달한다.


Next로 앱을 만들 때는 global css파일을 import 할 수 없다

```Global CSS cannot be imported from files other than your Custom <App>.```

그래서 내 페이지, 컴포넌트 내에 css를 임포트하려면 반드시 module이여야만 한다.

단 커스텀 App 컴포넌트가 있는 _app 파일 내부의 App 컴포넌트에서는 모든 Global Styles를 import할 수 있다






---


#1.7 다시 정리해보기

### create-react-app

모든 것이 클라이언트 사이드 랜더링(CSR)
로딩 중에는 백지 화면이 보인다.
페이지의 초기 상태는 <div id="App"></div>로 텅 비어있음.
브라우저가 ReactJS 코드를 다운받고 모든 걸 앞에다 그려줘야만 하기 때문에.

### create-next-app

유저가 그 페이지로 가기도 전에 페이지들이 미리 만들어진다.
유저가 NextJS에 의해 만들어진 페이지에 갈 때,
컴포넌트의 초기 상태는 HTML로 자동적으로 렌더링된 상태가 된다.

그래서 페이지의 초기상태는 클래스명 등을 포함한 모든 HTML이 있다.

> `Rehydration`?
- NextJS가 백엔드상에서 ReactJS를 돌리고 있고,
- NextJS가 페이지를 `pre-generate(사전생성)`하고,
- 그건 HTML페이지가 된다.

그래서 유저는 HTML 화면을 보게 된다. (리엑트처럼 백지화면이나 로딩 스테이지를 보지 않음)

하지만 유저가 모든 자바스크립트를 다운로드하면 ReactJS가 다시 주도권을 가져와서
모든게 일반적인 ReactJS처럼 동작한다.

그때부터 useState 같은 평범한 ReactJS의 모든 것을 사용할 수 있다.

중요한 포인트!
NextJS가 페이지를 사전생성
그 후에 ReactJS가 프론트엔드에 나타나면 ReactJS가 주도권을 가진다


### CSS를 Next에 추가하는 방법
1. module 파일을 만드는 방법
컴포넌트 파일 안에서 import 할 수 있음

2. style 태그에 jsx prop을 넣는 방법
React 태그가 아닌 일반 HTML 태그.
global prop을 추가하면 해당 스타일을 모든 component에 적용시킬 수 있다
하지만 _NextJS를 쓸 때에는 반드시 하나의 큰 어플리케이션이 아닌, 각각의 나눠진 페이지를 생각해야한다._
그래서 About 페이지의 style jsx global로 적용해도, Home페이지일 때는 전혀 다른 페이지이기 때문에 당연하게도 global스타일이 적용되지 않는다.



그럼 글로벌 스타일을 복붙하지 않고 어떻게 적용할 수 있을까?
Custom App Component

NextJS가 랜더링할 때마다 Custom App Component를 사용함.
그래서 특정 페이지를 랜더링할 때마다
_app.js 내의 App 함수를 호출하고 Component prop 자리에 그 컴포넌트를 넣음.


이 _app.js 파일을 만들 필요는 없음.
NextJS가 내 페이지를 랜더링하기 위한 템플릿을 설정하길 원할 때 만드는 파일.

단 커스텀을 위해서는 반드시 _app.js라는 파일 안에 코드를 넣어야함.







---

#2.0

Layout을 만들어서 그걸로 _app을 감싸는 방법을 많이 사용한다.

Layout은 children prop을 가지고 있기 떄문에 헤더도, 푸터도 적용 가능.


_app.js에는 google analytics, 검색엔진 관련, 스크립트 분석 등등 global로 import 해야할 많은 것들이 있음!
그래서 _app.js가 너무 커지기를 바라지 않기 떄문에 이 방법을 사용한다.



nextJS에서는 Head와 같은 흔하게 쓰이는 패키지들을 제공한다.
create-react-app이었다면 앱의 head를 관리하기 위해서 react-helmet 등을 다운받아야함.
= 프로젝트와는 별개인 새로운 컴포넌트, 코드, 오류 등이 생길 수 있다

하지만 nextJS를 사용하면 모든 것이 next의 우산 아래에 있음!

더 많은 prop을 넣어서 head component를 개인화할 수 있다.
Meta description이나 작성자 등과 같은 정보들을 별개로 관리할 수 있다.










### Next에 mui 설치하기
<!-- 강의에는 없는 추가적인 사항 -->
> https://kyounghwan01.github.io/blog/React/next/mui/#app-tsx 를 참조했습니다

nextjs는 서버사이드랜더링을 하기 때문에 react에서 mui를 사용하는 것 처럼 손쉽게 반영 되지 않는다.



1. node 버전을 요구하는대로 맞춰준다
참조 > https://velog.io/@zlemzlem5656/node-version-%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0

2. 필요한 dependancy를 설치한다

```yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material @mui/styles```

3. _document.tsx 파일 설정

ssr 지원을 위해 _dococument.tsx에 mui에 대한 사전 작업을 한다.
서버에서 받아온 HTML/CSS과 클라이언트가 렌더링한 HTML/CSS가 다르면 nextJS가 warning을 띄우기 때문.
그래서 서버단에서 mui를 지원하게 구현함으로서 서버와 클라이언트간의 간극을 맞춘다.

```js
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Head></Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => materialSheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>
  };
};
```

4. _app.tsx에 CssBaseline을 추가

nextjs에서 mui를 사용하는데 필수적으로 사용하는 것은 아니지만 웹을 정상적으로 구현하기 위해서 꼭 필요한 CssBaseline를 추가한다.
프로젝트를 처음 실행하면 브라우저마다 각기 다른 기본 css가 설정되어있다.
정상적인 구현을 위해 모든 브라우저가 일관적으로 보이도록 해야한다. 그래서 css를 전역에서 normalize 하기 위해 <CssBaseline />를 사용하는 것. <CssBaseline />는 앱의 최상단에 넣어주면 normalize 해준다. 마치 `reset.css`와 같은 역할

```jsx
import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps}></Component>
    </Layout>
  );
}

```






### Next에 StyledComponent 설치하기








---

# 2.1 & 2.2

next.js를 이용하면 public 파일을 쉽게 다룰 수 있다.
public 디렉토리 안에 있는 파일들을 단순 / 경로로 가져올 수 있다.

next.js는 Link, Header, Image 등의 컴포넌트를 제공한다.

### Next.js로 API Keys 숨기기

크롬 개발자도구의 네트워크 탭에서 request 헤더를 보면 내 api 키를 누구나 알 수 있다.

### redirect와 rewrite

Next.js에서는 이 request에 mask를 씌우는 것 같은 redirect와 rewrite이 가능하다.

`next.config.js`
API key를 숨기지 않는 redirect가 있다 (next가 redirection을 허용하기 떄문에).

#### redirect

배열을 리턴시켜서 리다이렉트를 시킬 수 있다.
source로 작성한 URL에서 destinetion으로 갈 때, 유저가 URL의 변화를 볼 수 있다.

```js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false
      }
    ]
  }
}
```
`nextConfig`을 위와 같이 변경한다.
변경사항을 저장하면 아래와 같은 메시지를 받음

> Found a change in next.config.js. Restart the server to see the changes in effect.

`/contact`로 주소창에 입력하면 자동으로 `/form`로 이동시켜버림!

이와같이 우리 웹사이드 내에서든, 바깥으로든 redirect할 수 있다!

- Pattern matching
next는 Pattern matching 또한 지원한다.

```js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects() {
    return [
      {
        source: "/old-blog/:path",
        destination: "/new-blog/:path",
        permanent: false
      }
    ]
  }
}
```
주소창에 `/old-blog/123123`을 치면, 해당 패턴을 자동으로 매칭시켜서 `/new-blog/123123`로 이동한다.

- Pattern matching "*" catch 가능

```js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        // source: "/contact",
        // destination: "/form",
        permanent: false
      }
    ]
  }
}
```
뒤에 *을 붙이면, 

/old-blog/121212/comments/53224
/new-blog/121212/comments/53224

뒤에 길게 따라온 path들을 catch해서 redirect 시킨다.

- next의 redirect
  - 한 페이지에서 다른 페이지로
  - 아예 다른 URL인 웹사이트
  - 특정 path



#### rewrites

- 개인적으로 next에서 제일제일 신기한 기능!

마찬가지로 배열을 리턴시켜서 리라이트를 시킬 수 있다

유저가 URL의 변화를 볼 수 있는 `redirect`와는 달리,
`rewrites`는 redirect는 시키지만 URL이 변하지 않는다.

현재 데이터를 요청하는 Request URL을 보면
<img src="next_data_request_as_is.png" />

API key가 그대로 노출되어있다. 데이터를 아래처럼 요청하고 있기 때문

```jsx

// 데이터를 요청하는 부분

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

```

next.config.js 파일의 redirect 아래에 rewrite를 아래처럼 추가한다

```js
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
```

그럼 이제 데이터를 요청하는 Request URL을 보면
<img src="next_data_request_to_be.png" />

API key가 서버 뒤에 mask 되었다.













https://www.themoviedb.org/settings/api

CRA를 하면 react를 import 해야하는데
Next.js는 react의 hook을 사용하기 전까지 react를 import 하지 않았다

> 6:54 ()() 를 작성하는 부분이 궁금해서 찾아봤는데, IIFE (즉시 실행 함수 표현, Immediately Invoked Function Expression) 이라고 찾았습니다. 첫번째 괄호는 익명함수를 감싸 실행 될 함수가 전역 스코프에 불필요한 변수를 추가하거나, IIFE 내부안으로 다른 변수들이 접근하는 것을 막을 수 있는 방법이라고 설명되어 있습니다. 두번째 괄호는 즉시 실행 함수를 생상하는 괄호이고, 이를 통해 자바스크립트 엔진은 함수를 즉시 해석해서 실행한다고 설명되어 있습니다.

next.config.js
Next.js에서 커스텀 설정을 하기 위해서는 프로젝트 디렉터리의 루트(package.json 옆)에 next.config.js 또는 next.config.mjs 파일을 만들 수 있습니다. next.config.js는 JSON 파일이 아닌 일반 Node.js 모듈입니다.
Next.js 서버 및 빌드 단계에서 사용되며 브라우저 빌드에는 포함되지 않습니다.
https://nextjs.org/docs/api-reference/next.config.js/introduction

Redirects (URL변경됨)
Redirect을 사용하면 들어오는 request 경로를 다른 destination 경로로 Redirect할 수 있습니다. Redirect을 사용하려면 next.config.js에서 redirects 키를 사용할 수 있습니다.

redirects은 source, destination 및 permanent 속성이 있는 객체를 포함하는 배열을 반환하는 비동기 함수입니다.
source: 들어오는 request 경로 패턴 (request 경로)
destination: 라우팅하려는 경로 (redirect할 경로)
permanent: true인 경우 클라이언트와 search 엔진에 redirect를 영구적으로 cache하도록 지시하는 308 status code를 사용하고, false인 경우 일시적이고 cache되지 않은 307 status code를 사용합니다.
https://nextjs.org/docs/api-reference/next.config.js/redirects

Rewrites (URL변경되지 않음)
Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑할 수 있습니다.
Rewrites은 URL 프록시 역할을 하고 destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 합니다. 반대로 redirects은 새 페이지로 reroute되고 URL 변경 사항을 표시합니다.
https://nextjs.org/docs/api-reference/next.config.js/rewrites

Movie Poster Path
https://image.tmdb.org/t/p/w500/${movie.poster_path}

주의! fetch할 때 /api/movies 또는 http://localhost:3000/api/movies 둘 다 가능하지만 http가 아닌 https로 fetch하게 되면 오류가 발생합니다.


혹시 파라미터 관련해서 저같은 문제를 겪을 지도 모르는 분을 위해 댓글 남겨봅니다.
fetch를 할 때 파라미터를 여러 개 붙여서 요청한다면 이런 식일 겁니다.
fetch(`/api/foo=bar&key=val`)
그리고 config에서 rewrite를 이렇게 해주죠.
{
source: "/api/:params",
destination: `https://some.api/items?key=${API_KEY}&:params`
}
그런데 무슨 문제가 생기냐면, destination에서 "&:" 부분을 그대로 인식하지 않고 "&__ESC_COLON_" 이라는 문자열로 바꿔버립니다.
그렇기 때문에 destination을 다음과 같이 바꿔주어야 합니다.
`https://some.api/items?key=${API_KEY}${encodeURIComponent("&")}:params`
이렇게 하면 :params로 넘어온 문자열이 &와 문제없이 결합합니다.


# 2.3

`getServerSideProps`
이름 바꿀 수 없음
이자리에 쓰는 코드는 클라이언트가 아닌 반드시 서버에서 돌아간다
백엔드에서만 돌아가기 때문에, API 키를 여기에 적으면 client에는 절대 보여지지 않음

리턴하는 object 안에는 props라는 key가 들어있다.
props key 안에는 원하는 데이터를 다 넣을 수 있다


getServerSideProps는 서버에서 실행
여기서 뭘 리턴하든지, props로써 page에게 전달한다 
  
  Home에 접속하면?
    next.js가 Home 컴포넌트를 받아서 render하기 위해 _app.js의 <Component> 자리에 넣는다
    그리고 getServerSideProps를 호출
      - API를 호출
      - props를 return
    그럼 next.js가 이 props를 _app.js의 <Component {...pageProps}> 자리에 넣는다
    결과적으로 index.js의 Home의 {results}로 나타나게 된다.
    
    이 작업을 하기 전에는 loading이 들어왔었는데, 이제는 react component의 render result가 들어옴.
    말그대로 HTML이 들어간 것. 그래서 이제 loading 처리를 할 필요가 없음.
    근데 그래서 API가 돌아올 때까지 백지가 나온다는 것.
    SSR을 하면?
    데이터가 유효할 때 화면이 보여짐.
    SSR을 안하면?
    로딩 화면을 보여준 다음에 데이터를 받는게 좋다면 선택하면 됨.

    SSR방식
      해당 페이지의 데이터가 들어오기 전 까진 아무것도 볼 수 없다가,
      해당 페이지의 데이터만 들어오면 전체를 다 볼 수 있다(다른 페이지 갈 때도 이 과정이 필요)
    CSR방식
      모든 JS파일들이 들어와야('loading...') 보여지는데,
      그대신 다른 페이지 갈 때는 이미 모든 JS파일을 받았으니 SSR 방식보다는 빠르게 화면을 볼 수 있다

      그래서 홈에서는 SSR방식을 쓴 것이고 About으로 갈 때는 CSR방식.
      SEO가 필요한 페이지에 SSR을 적용하면 되겠군.






# 2.5

react-router-dom을 사용할 때에는 movies/:id 이런식으로 URL을 특정한다.
router가 없기 때문에, 다른 방법을 사용해야한다.

단순히 about로 이동하면 된다면? 그냥 about라는 파일 생성.
그런데 about/contact, about/business등과 같은 URL을 만들어야한다면?

movies라는 폴더를 만들고 index.js와 all.js를 함께 넣는다.

그럼 movies 폴더 안에 있는 "index.js"가 "/movies"에 맵핑되고,
그럼 movies 폴더 안에 있는 "all.js"가 "/movies/all"에 맵핑된다.


## next.js에서 URL에 변수를 삽입하는 방법

`movies/[id].tsx`
파일을 생성

next.js에 이것이 변수를 포함하는 Dynamic URL이라는 걸 알려주는 유일한 방법은 파일명에 대괄호를 사용하는 것.

console에 router를 찍어보면?

```json
{
    "pathname": "/movies/[id]",
    "route": "/movies/[id]",
    "query": {
        "id": "123"
    },
    "asPath": "/movies/123",
    "components": {
        "/movies/[id]": {
            "initial": true,
            "props": {
                "pageProps": {}
            }
        },
        "/_app": {
            "styleSheets": []
        }
    },
    "isFallback": false,
    "basePath": "",
    "isReady": true,
    "isPreview": false,
    "isLocaleDomain": false,
    "events": {}
}
```

query의 프로퍼티 이름은, 파일명에 쓴 변수명과 동일하다

router.push를 하거나 Link를 쓰는 것 이외에도, URL에 정보를 숨겨보낼 수 있다.

리스트 페이지에서 영화를 클릭하면, 해당 아이디로 데이터를 다시 요청한다.
하지만 우리는 리스트페이지에서 이미 그 영화의 제목 데이터를 가지고 있음.
URL로 state를 넘길 수 있다. + 유저로부터 숨길 수 있다.

## URL로 state 넘기기

router.push를 할 때 URL을 string으로 보낼 수도 있지만 객체로 보낼 수도 있음.

```
(method) push(url: Url, as?: Url | undefined, options?: TransitionOptions | undefined): Promise<boolean>
```

```js
  const onClick = (id: string) => {
    router.push(
      {
        pathname: `movies/${id}`,
        query: {
          // URL을 설정하고 정보를 얹어줌
          title: "potatos",
        },
      },
      `movies/${id}`
      // as: 브라우저에 보이는 부분을 마스킹
    );
  };
```

```js
export default function Detail() {
  const router = useRouter();
  console.log("router", router);
  return <Typography>{router.query.title || "Loading..."}</Typography>;
}
```

하지만 이 router.query.title은 유저가 URL을 입력해 상세페이지로 바로 들어갔을 때는 작동하지 않는다.
이걸 해결하기 위해서는?


# 2.7

## Catch All

리스트페이지에서 직접 클릭해서 상세페이지로 들어가지 않더라도 영화제목을 볼 수 있게 만들어보자.

`[...params].tsx`

기존의 [id].tsx 파일을 위와 같이 바꿔주고

```js
// index
  const onClick = (id: string, title: string) => {
    router.push(`movies/${title}/${id}`);
  };
```

```js
// Detail
  <Link href={`movies/${movie.original_title}/${movie.id}`}>
```


http://localhost:3000/movies/Violent%20Night/899112

그럼 URL은 위와 같이 나오고

```json
{
    "params": [
        "Violent Night",
        "899112"
    ]
}
```
router로 전달된 params도 배열형태로 나온다.


하지만 지금 상태에서 누군가 URL을 직접 쳐서 들어오면? 에러가 난다.
이 페이지는 백엔드에서 pre-render 되기 때문.
서버에서 미리 랜더링되는데, 서버에는 router.query.params가 존재하지 않아서 사용할 수 없음.

```js
// Detail
export async function getServerSideProps(ctx: any) {
  console.log("ctx", ctx);
  // const { results } = await (
  //   await fetch(`http://localhost:3000/api/movies`)
  // ).json();
  return {
    props: {
      // results,
    },
  };
}
```

next가 server-side context를 제공해준다.
그러니 만약 유저에게 절대 loading을 보여주고 싶지 않고,
검색이 정말 잘되게 하고 싶다면 `getServerSideProps`를 쓰면 된다.

---

이전에는 Detail 컴포넌트 내부에서 router를 사용했음.
하지만 컴포넌트 내부에 들어있는 router는 클라이언트 사이드에서만 실행된다.

만약 URL에 들어있는 영화제목을 사용해서 구글 SEO에 최적화하고,
유저가 접속하기 전에 탭 제목을 바꾸고 싶고,
이 페이지를 pre-render하고 싶다면?
server-side에서 정보를 얻기 위한 `getServerSideProps`를 실행하면 된다.


```js
export async function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}
```

이렇게 server-side에서 받아온 정보를 페이지로 넘겨주면,
페이지는 그 정보를 받아서 보여줌.
그럼 server-side에서 pre-render된 것과 같다.




>
혹시나 저처럼 왜 || [] 를 추가해주면 되는건지 궁금하신분들을 위해 남겨봅니다.
기본적으로 미리 렌더링이 되기때문에 먼저 html 파일이 내려온다는건 다들 아실겁니다. 이때 문제가 아직 js들이 다운로드가 안됐기 때문에 useRouter()로 정보를 제대로 가져오질 못하는 상태입니다. 그렇기 때문에 초기에는 빈 배열을 추가해줘서 오류가 발생하지 않도록 해주고, js가 내려가서 다시 렌더링하게되면 그 때는 빈 배열이 아닌 router.query.params에서 값을 가져와서 뿌려주는거죠.
정확하게 보고싶으신 분들은 검사 -> 네트워크 -> slow 3g 로 설정하신 후에 페이지 렌더링 확인하시면 먼저 html쪽 뜨고나서 js까지 모두 다운로드 된 후에야 title이 보이는걸 볼 수 있으실거예요.
추가로 위와 같은 이유로 console.log(router)를 찍으면 2번 보이는겁니다.
SSR 방식이기 때문인데 https://ayaan.oopy.io/ssr-vs-csr를 참고



