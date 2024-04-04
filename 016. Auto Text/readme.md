# 016. Auto Text
텍스트를 자동으로 타이핑 치는 효과 

<img src="./016. Auto Text.gif">

## 학습 
### 1. &nbsp   
줄바꿈을 일으키지 않고 공백

### 2. Node.textContent    
노드와 그 자손의 텍스트 콘텐츠를 표현     

* innerText와 구별하기     

  Node.textContent|HtmlElement.innerText
  ---|---|  
  script와 style 요소를 포함한 몹든 요소의 콘텐츠를 가져오기 | 사람이 읽을 수 있는 요소만 처리
  노드의 모든 요소를 반환|숨겨진 요소의 텍스트는 반환하지 않음

### 3. String.prototype.charAt()    
문자열에서 특정 인덱스에 위치하는 유니코드 단일 문자를 반환 

### 4. String.prototype.substring()   
string 객체의 시작 인데스로 부터 종료 인덱스 전까지 문자열의 부분 문자열을 반환 

### 5. DOMContentLoaded 이벤트    
브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생    
DOM이 준비된 것을 확인한 후 원하는 DOM노드를 찾아 핸들러를 등록해 인터페이스를 초기화 할 때 사용 

## 출처 

**&nbsp**   
https://www.daleseo.com/html-nbsp/

**Node.textContent**   
https://developer.mozilla.org/ko/docs/Web/API/Node/textContent

**String.prototype.charAt()**  
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charAt

**String.prototype.substring()**   
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring

**DOMContentLoaded 이벤트**   
https://ko.javascript.info/onload-ondomcontentloaded

