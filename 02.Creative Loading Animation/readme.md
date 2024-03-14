# 02.Creative Loading Animation
로딩 중인 화면을 애니메이션으로 구현
<img src="./assets/video.gif">

## Study
### 1. flex 속성 中 justify-content
메인축 방향으로 정렬하는 방법을 정의 
|속성값|의미|
|---|---|
|flex-start|기본, flex-direction : row 일때는 왼쪽, colume 일때는 위|
|flex-end|끝으로 정렬, flex-direction : row 일때는 오른쪽, colume 일때는 아래|
|center|가운데로 정렬|
|space-betwen|아이템들 사이에 균일한 간격을 만들기|
|space-around|아이템들 둘레에 균일한 간격을 만들기|
|space-evenly|아이엠들 사이와 양끝에 균일한 간격을 만들기, IE와 엣지에 지원 안됨|

### 2. @keyframes 애니메이션 이름
: css 애니메이션 시퀀스의 중간 단계를 제어  
: animation에 전달 할 수 있는 속성
|속성|의미|
|---|---|
|animation-name|애니메이션의 중간 상태를 지정하는 이름|
|animation-duration|한 싸이클의 애니메이션이 재생될 시간을 지정|
|animation-delay|애니메이션이 시작을 지연시킬 시간 지정|
|animation-direction|애니메이션 재생 방향을 지정|
|animation-iteration-count|애니메이션이 몇 번 반복될지 지정|
|animation-play-state|애니메이션 재생 상태, 멈추거나 다시 재생시킬 수 있음|
|animation-timing-funtion|중간 상태들의 전환을 어떤 시간간격으로 진행할 지 지정|
|animation-fill-mode|애니메이션이 재생 전후의 상태를 지정|

```
.loading {
  <!-- 애니메이션에 아래에 정의한 키프레임을 전달 load -->
  animation: load .8s ease infinite;
}

<!-- 키프레임 load으로 애니메이션 중간단계 정의 -->
@keyframes load {
  0% {
    width: 30px;
    height: 30px;
  }

  50% {
    width: 20px;
    height: 20px;
  }
}
```


### 출처
**css flex**  
https://studiomeal.com/archives/197

**keyframes**  
https://velog.io/@ye-ji/CSS-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98keyframes  


 