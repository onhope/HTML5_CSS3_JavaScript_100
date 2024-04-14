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

### 3. JS에서 HTML 태그 속성에 접근하기 
### 4. input type : password
값이 *** 으로 표시된다. 

### 5. 물음표 함수 
  