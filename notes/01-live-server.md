### index.html 실행하기

#### live-server로 열기
<dir>/index.html

npx live-server <directory name> --port=3000

- WSL2에서는 해당 port를 방화벽 예외등록을 하여 열어야 한다.
  https://www.nextofwindows.com/allow-server-running-inside-wsl-to-be-accessible-outside-windows-10-host

#### drag-and-drop하여 열기
index.html을 바로 열 수 있음

### npm script 등록
```
  "scripts": {
    "dev": "live-server example1 --host=localhost --port=3000 --no-brower"
  },
```