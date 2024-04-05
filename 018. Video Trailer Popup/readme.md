# 018. Video Trailer Popup

이미지를 클릭하면 비디오 팝업이 뜨는 효과 

<img src="./018. Video Trailer Popup.gif">

## 학습 

### 1. video 전역 특성
autoplay|controls|loop|muted
---|---|---|---|
비디오 자동 재생|컨트롤러 제공|비디오 끝까지 재생했을 때 다시 처음으로 돌아가서 재생|비디오의 초기 상태를 음소서로 설정

### 2. video.currenttime
오디오/비디오 재생의 현재 위치(초)를 설정

### 3. css 애니메이션 만들기 
animation  속성과 이 속성의 하위 속성을 지정


**하위속성**   

animation-delay|animation-duration|animation-iteration-count|animation-name|animation-timing-function
---|---|---|---|---|
엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정|한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.|애니메이션이 몇 번 반복될지 지정합니다. infinite로 지정하여 무한히 반복할 수 있습니다.|이 애니메이션의 중간 상태를 지정합니다. 중간 상태는 @keyframes 규칙을 이용하여 기술|중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정



**키프레임을 이용하여 애니메이션의 중간상태 기술하기**   

@keyframes 규칙을 이용해서 두개 이상의 중간 상태를 기술합니다. 각 중간 상태는 특정 시점에 엘리먼트가 어떻게 보일지 나타냅니다.

CSS 스타일을 이용해 중간 상태에 어떻게 보일지 정의했다면 이 중간 상태가 전체 애니메이션에서 언제 등장할 지 `<percentage>` 를 이용해 지정합니다. 

0%는 애니메이션이 시작된 시점을 의미하고 100%는 애니메이션이 끝나는 시점을 의미합니다.

최소한 이 두 시점은 기술되어야 브라우저가 언제 애니메이션이 시작되고 끝나는지 알 수 있습니다. 0%와 100% 대신 from 과 to로 사용할 수도 있습니다.

시작 시점과 종료 시점 사이의 특정 시점에도 중간 상태를 지정할 수 있습니다.

## 출처 
**video**    
https://developer.mozilla.org/ko/docs/Web/HTML/Element/video     
https://ko.w3hmong.com/tags/av_prop_currenttime.htm    

+ video 관련 더 많은 속성과 이벤트 알기   
https://www.w3schools.com/tags/ref_av_dom.asp     


**animation**    
https://developer.mozilla.org/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations     
