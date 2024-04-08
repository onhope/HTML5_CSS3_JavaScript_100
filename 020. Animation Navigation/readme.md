# 20. animated navvigation

nav 메뉴를 클릭을 하면 숨겨진 메뉴가 등장하는 효과 

<img src="./20. animated navvigation.gif">

## 학습
### 1. transform
- 요소에 회전, 크기 조절, 기울이기, 이동효과를 부여할 수 있다
- 변환함수를 프로퍼티값으로 쉼표없이 나열한다. 나열순서에 따라 차례대로 효과가 적용

transform function |	설명	| 단위
---|---|---
translate(x,y)|요소의 위치를 X축으로 x만큼, Y축으로 y만큼 이동시킨다.|	px, %, em 등
translateX(n)	|요소의 위치를 X축으로 n만큼 이동시킨다.|px, %, em 등
translateY(n)|요소의 위치를 Y축으로 n만큼 이동시킨다.|px, %, em 등
scale(x,y)|요소의 크기를 X축으로 x배, Y축으로 y배 확대 또는 축소 시킨다.	|0과 양수
scaleX(n)|요소의 크기를 X축으로 n배 확대 또는 축소 시킨다.	|0과 양수
scaleY(n)|요소의 크기를 Y축으로 n배 확대 또는 축소 시킨다.	|0과 양수
skew(x-angle,y-angle)|요소를 X축으로 x 각도만큼, Y축으로 y 각도만큼 기울인다.	|+/- 각도(deg)
skewX(x-angle)|요소를 X축으로 x 각도만큼 기울인다.|+/- 각도(deg)
skewY(y-angle)|요소를 Y축으로 y 각도만큼 기울인다.|+/- 각도(deg)
rotate(angle)|요소를 angle만큼 회전시킨다.|+/- 각도(deg)

### 2. transition
- CSS 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공합니다. 속성 변경이 즉시 영향을 미치게 하는 대신, 그 속성의 변화가 일정 기간에 걸쳐 일어나도록 할 수 있습니다.

프로퍼티|설명|기본값
---|---|---|
transition-property|트랜지션의 대상이 되는 CSS 프로퍼티를 지정한다	|all
transition-duration|트랜지션이 일어나는 지속시간(duration)을 초 단위(s) 또는 밀리 초 단위(ms)로 지정한다|0s
transition-timing-function|트랜지션 효과를 위한 수치 함수를 지정한다.	|ease
transition-delay|프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간을 초 단위(s) 또는 밀리 초 단위(ms)로 지정한다|0s
transition|모든 트랜지션 프로퍼티를 한번에 지정한다 (shorthand syntax)	 

## 출처 
**transform**     
https://poiemaweb.com/css3-transform    
https://developer.mozilla.org/ko/docs/Web/CSS/transform     

**transition**    
https://developer.mozilla.org/ko/docs/Web/CSS/CSS_transitions/Using_CSS_transitions
https://poiemaweb.com/css3-transition