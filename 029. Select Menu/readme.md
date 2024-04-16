# 029. Select Menu
메뉴를 토글하면 숨겨진 메뉴가 나오는 기능 

<img src="./Select Menu.gif" style="width: 400px">

## 학습 
### 1. padding 
> 요소의 **안쪽 여백 영역**은 콘텐츠와 테두리 사이의 공간

padding 속성은 한 개, 두 개, 세 개, 혹은 네 개의 값으로 지정할 수 있습니다. 각 값은 `<length>`, `<percentage>` 중 하나로, 음수 값은 유효하지 않습니다.

값|의미|
---|---|
한 개의 값| 모든 네 면의 여백을 설정합니다.
두 개의 값|첫 번째는 위와 아래, 두 번째는 왼쪽과 오른쪽 여백을 설정합니다.
세 개의 값|첫 번째는 위, 두 번째는 왼쪽과 오른쪽, 세 번째 값은 아래 여백을 설정합니다.
네 개의 값|각각 상, 우, 하, 좌 순서로 여백을 지정합니다. (시계방향)


### 2. toggle( ) 
> .toggle()은 **선택한 요소가 보이면 보이지 않게, 보이지 않으면 보이게 합니다.**

사라지게 하는 건 .fadeOut(), 나타나게 하는 건 .fadeIn()을 사용하는데 이 둘을 합친것이 toggle()   

```
  list.classList.toggle("hide");
  arrow.classList.toggle("rotate");
```
### 3. Element.innerHTML
**요소(element) 내에 포함 된 HTML 또는 XML 마크업을 가져오거나 설정**
```
const name = "John"; // assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case

```
### 4. Node.textContent
> 노드와 그 자손의 텍스트 콘텐츠를 표현   
```
<div id="divA">This is <span>some</span> text!</div>

let text = document.getElementById("divA").textContent;
// The text variable is now: 'This is some text!'

document.getElementById("divA").textContent = "This text is different!";
// The HTML for divA is now:
// <div id="divA">This text is different!</div>
```


> **innerHTML와의 차이점**     

|innerHTML|textContent|
|---|---|
 "사람이 읽을 수 있는" 요소만 처리|`<script>`와 `<style>` 요소를 포함한 모든 요소의 콘텐츠를 가져옵니다
 스타일링을 고려하며, "숨겨진" 요소의 텍스트는 반환하지 않습니다.|노드의 모든 요소를 반환


## 출처
**padding**   
https://developer.mozilla.org/ko/docs/Web/CSS/padding    

**toggle( )**   
https://www.codingfactory.net/10353   

**Element.innerHTML**   
https://developer.mozilla.org/ko/docs/Web/API/Element/innerHTML

**Node.textContent**   
https://developer.mozilla.org/ko/docs/Web/API/Node/textContent    







