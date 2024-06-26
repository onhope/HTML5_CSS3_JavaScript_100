# 028. Show Hide Password

비밀번호를 아이콘 클릭하면 보이도록 하는 기능 

<img src="./Show Hide Password.gif">

## 학습
### 1. min-height와 min-width를 쓰는 이유    
DOM의 최소 width, height를 설정하는데, <u>div의 내용이 없거나 부실한 경우,</u> 해당 크기 만큼 잡히는데 이때, min-height와 min-width를 설정시 <u>'적어도 이 정도 만큼은 유지해'</u> 라고 조작을 할 수 있다.      

또한, <u>반응형에서 화면이 작아짐에 따라 DOM이 해당 사이즈에 맞춰 작아져도</u> min-height와 min-width 설정 통해 최소 길이, 높이 보증 가능하다.    

### 2. border와 outline의 차이 
속성값|border|outline
---|---|---|
공간차지|O|X
스타일링|O|X

### 3. input type : password
 일반적으로 각 문자를 별표("*") 또는 점("•")과 같은 기호로 대체하여 텍스트를 읽을 수 없도록 가려지는 한 줄의 일반 텍스트 편집기 컨트롤로 표시

### 4. 조건 (삼항) 연산자 (='물음표(question mark) 연산자’)
조건부 연산자는 물음표?로 표시합니다. 피연산자가 세 개이기 때문에 조건부 연산자를 '삼항(ternary) 연산자’라고 부르는 사람도 있습니다.

```
let result = condition ? value1 : value2;

// 평가 대상인 condition이 
truthy라면 value1이, 그렇지 않으면 value2가 반환
```

**물음표 연산자?를 여러 개 연결하면 복수의 조건을 처리 가능**

```
let age = prompt('나이를 입력해주세요.', 18);

let message = (age < 3) ? '아기야 안녕?' :
  (age < 18) ? '안녕!' :
  (age < 100) ? '환영합니다!' :
  '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';

alert( message );
```


## 출처
**input type="password"**      
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password


**조건(삼항)연산자**     
https://ko.javascript.info/ifelse    


 

  