# 017. Cursor

마우스 따라다는 포인터 만들기 

<img src="./017. Cursor.gif">

## 학습 

### 1. screenXY, pageXY, clientXY, offsetXY

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrCXEA%2FbtqTENH2CxO%2F5kLO54ytpEhZis68uTdegK%2Fimg.png" style="width: 800px">

screenX, Y | pageX, Y | clientX, Y | offsetX, Y
---|---|---|---|
사용자 모니터 화면을 기준으로 한 좌표 표시 | 전체 문서를 기준으로 한 좌표를 표시 | 브라우저에서 사용자에세 웹페이지가 보여지는 영역을 기준으로 표시, 따라서 스크롤바가 움직이더라도 특정 지점의 clientX, Y의 값은 동일 | 좌표를 출력하도록 하는 이벤트가 걸려있는  DOM node를 기준으로 좌표를 표시
전체 모니터 스크린에서의 x, y좌표 위치를 반환| 브라우저 페이지에서의 x, y좌표 위치를 반환|브라우저 페이지에서의 x, y좌표 위치를 반환하나 스크롤은 무시하고 해당 페이지의 상단을 0으로 측정|이벤트 대상 객체에서의 상대적 마우스 x, y좌표 위치를 반환|


## 출처
**screenXY, pageXY, clientXY, offsetXY**  
https://hianna.tistory.com/493            
https://megaton111.cafe24.com/2016/11/29/clientx-offsetx-pagex-screenx%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90/   