### React

- 선언형
- 컴포넌트 시스템
- 멀티플랫폼 지원

- 라우팅, 데이터관리는 처리하지 않음
- "Progressive" 하다. 일부만 React를 사용할 수 있다.
- HTML문서에 React를 추가하는 것은 별도 설치가 필요하지 않음.

#### 명령형 vs 선언형

Imperative vs Declarative

imperative : how
declarative : what

HTML, CSS, Javascript 를 하나로 묶어서 모듈화하였다.

#### CDD

Component Driven Development

Bottom-up 방식으로 하게됨
Atomic Design : 원자-분자-조직체-템플릿-페이지 로 빌드업 하는 방법

### React Element vs React Component

// HTMLDivElement vs. <div></div>
// React Component vs. React Element

### React Component: function vs class

(예전에는...)

- function: 상태가 없는 컴포넌트
  - 예전에는 a.k.a. state-less component
  - this를 사용할 수 없음
  - funciton body가 render에 해당됨. 다음번 rendering 할때 다시 function이 재호출됨.
- class: 상태가 있는 컴포넌트
  - 예전에는 a.k.a. state-full component
  - render() 함수에서
    - state에 변화가 생기면 다시 render 하게 됨

(지금은... with hooks)

- function
  - hooks에 memoization 해둘 수 있음 -> state관리가 가능함!

## Hook

### useState + useEffect

- useState를 이용하여 state를 업데이트하고,
- useEffect를 이용하여 watch하고있는 dependent state들이 변경될 시에 수행될 작업을 진행한다.

### 로직 공유하기: Hook

두 컴포넌트간에 로직을 공유할 때

- render props
- HOC \* N => compose

Higher-Order Function에서 Login template을 제공
이걸로 Component를 만들면 HOC(Higher-Order Component)가 생김
HOC 여러개면 wrapper hell이 발생...

이런 문제를 커버 하는것이 바로 'Hook'!

### Hook의 규칙

1. React 함수 컴포넌트에서만 사용가능 (클래스 컴포넌트에서는 사용 불가능)

- hook(use\*) 안에서만 사용가능하다.
- useState, useEffect + useCart(custom hook 등)

2. if문, 함수 컴포넌트 외의 함수, if문 아래(!!! 왜일까?) 등에서는 쓰면 안됨

사실 위의 규칙들은 eslint 가 알랴줌

### 장점

- 지연된 초기화: useState에 callback 함수를 넣어서 state값들을 지연된 초기화 시킬 수 있다
- localStorage에서 데이터를 읽어올 때도 사용 가능

### useEffect

```js
useEffect(() => {});
```

dependency list가 없을 때는 화면이 렌더링 될때마다 실행된다.

```js
useEffect(() => {}, []);
```

이처럼 dependency list가 비어있을 때는 단 한번 실행된다.

### Cleaner function

```js
useEffect(()=>{
  const setInterval(()=>{console.log();}, 1000);
  return cleanUp(){
    clearInterval(clearId);
  }
})
```

- 구독한 이벤트 취소하기

### useRef

가상 DOM을 가져와서 쓸 수 있게 해줌

### 속성 숨기기

        <SR_Only as="p" $focusable>

나중에 컴파일되었을 때 저 이름이 나오지 않음..!
