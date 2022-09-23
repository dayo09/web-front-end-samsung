###

### Webpack

- css loader: css module을 css로 바꿔줌
- style loader : css를 DOM에 넣어줌

###

#### CSS.module

- CSS의 고질적인 namespace 충돌 문제
  - 무조건 전역이기 때문에 !important 등을 이용하여 강제 덮어쓰면 그 뒷사람도 전부 !important를 쓰는 등의 문제..
- Block_Element--Modifier 방법으로 naming하는 것이 BEM 방법
- Block_Element--Modifier_hash 로 자동 네이밍해줌
- React css module은 class로 넣어줌
    <div class="Container__wrapper--DCkw"></div>
- View에서는 attribute로 넣어줌

```js
import styles from "./A.module.css

...  styles.XXX // 꺼내쓰기
```
