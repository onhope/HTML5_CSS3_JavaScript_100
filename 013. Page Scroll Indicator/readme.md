# 013. Page Scroll Indicator

스크롤에 따른 스크롤 진행바 표현하기

<img src="./013. Page Scroll Indicator.gif">

## 학습
### 1. document
브라우저가 불러온 웹 페이지를 나타낸다. 
페이지의  URL을 얻거나 문서에 새로운 요소를 생성하는 등의 기능을 전역적으로 제공한다.

### 2. Document.documentElement 
읽기 전용 속성으로, 문서의 루트 요소를 나타내는 Element를 반환

### 3. Element.scrollHeight
요소에 들어있는 컨텐츠의 전체 높이로. 패딩과 테두리가 포함됩니다. 마진은 제외

### 4. Element.clientHeight
요소의 내부 높이

<img src="https://apost.dev/content/images/2023/12/scrollheight.jpg">

### 5. documentElement.scrollTop
요소 맨 상단에부터 현재 화면에 보이는 부분까지의 거리를 측정한 것

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBT8K3%2FbtrGhVK3Ogw%2FPZD3UkiyEUTBmju6hrtTmk%2Fimg.png">

## 출처 
**Element.scrollHeight, clientHeight, scrollTop**    
https://devbirdfeet.tistory.com/228     
https://apost.dev/706/    
