# 021. Random Emojis

이모지에 마우스오버를 하면 다른 이모지로 변하면서 흑백색이 컬러로 변화라는 효과 

<img src="./021. Random Emojis.gif" style="width: 500px">

## 학습 
### 1. vscode에서 이모지를 검색하는 방법 
<window + .>을 누르면 다양한 이모지가 등장 

### 2. transition
- CSS 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공합니다. 속성 변경이 즉시 영향을 미치게 하는 대신, 그 속성의 변화가 일정 기간에 걸쳐 일어나도록 할 수 있습니다.

프로퍼티|설명|기본값
---|---|---|
transition-property|트랜지션의 대상이 되는 CSS 프로퍼티를 지정한다	|all
transition-duration|트랜지션이 일어나는 지속시간(duration)을 초 단위(s) 또는 밀리 초 단위(ms)로 지정한다|0s
transition-timing-function|트랜지션 효과를 위한 수치 함수를 지정한다.	|ease
transition-delay|프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간을 초 단위(s) 또는 밀리 초 단위(ms)로 지정한다|0s
transition|모든 트랜지션 프로퍼티를 한번에 지정한다 (shorthand syntax)