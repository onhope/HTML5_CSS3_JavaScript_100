# 025. Progress Steps
진행 과정을 시각적으로 보여주는 효과.    
prev 버튼을 클릭하면 이전으로, next 버튼을 클릭하면 앞으로 나간다. 

<img src="./Progress Steps.gif">

## 학습
### 1. width와 max-width을 같이 쓰는 이유
브라우저의 창 사이즈가 작아져도 최소한의 여백을 확보하기 위한 것

### 2. inline-block 속성 
대표적으로 **button, input, select 태그**들을 들 수 있다. 

inline 엘리먼트처럼 전후 줄바꿈 없이 **한줄에 다른 엘리먼트들과 나란히 배치**되지만, block 엘리먼트처럼 **width와 height 속성 지정 및 margin과 padding 속성의 상하 간격 지정**이 가능합니다. 즉, 내부적으로는 block 엘리먼트의 규칙을 따르면서 외부적으로는 inline 엘리먼트의 규칙을 따른다. 

### 3. flex의 justify-content
가로축을 기준으로 정렬

속성값|의미
---|---|
flex-start (default)	|요소들을 컨테이너의 왼쪽으로 정렬
flex-end			|요소들을 컨테이너의 우측으로 정렬
center		| 요소들을 컨테이너의 중앙으로 정렬
space-between | 요소들 사이에 동일한 간격을 둡니다.
space-around | 요소들 주위에 동일한 간격을 둡니다.
space-evenly(FireFox Only) | 첫번째로 오는 정렬 대상 전에 두개 의 인접한 정렬 대상 사이의 간격과	 마지막 정렬 대상 이후의 간격이 같도록 항목이 분산 됩니다.

### 4. Array.prototype.forEach()
**배열을 순회해서 처리**하는 데 사용되는 메서드로, 배열의 각 요소에 대해 주어진 함수를 순서대로 한 번씩 실행

forEach() 함수를 사용하면 반복문을 통해 배열의 요소를 접근하지 않고도, 간편하게 배열 요소들을 처리할 수 있습니다. **각 요소의 값뿐만 아니라 인덱스와 배열 자체도 콜백 함수에서 사용할 수 있습니다.** 예를 들어, 배열의 요소들을 출력하거나 특정 동작을 수행할 수 있습니다.


**구조와 매개변수**    
```
arr.forEach(function(currentValue[, index[, array]]) {
    // 실행할 코드
}[, thisArg]);
```
구조와 매개변수 | 의미
---|---|
arr | forEach() 함수에 적용할 배열입니다.
function| arr 배열의 각 요소에 적용할 때 호출되는 콜백 함수입니다. 이 함수는 세 개의 매개변수를 가질 수 있습니다.
currentValue (필수 값)| 처리할 현재 요소. 이 매개변수를 통해 현재 요소에 접근할 수 있습니다.
index (선택 사항)| 처리할 현재 요소의 인덱스. 이 매개변수를 사용하여 현재 요소의 인덱스에 접근할 수 있습니다.
array (선택 사항)| forEach() 함수를 호출한 배열. 이 매개변수를 사용하여 원본 배열에 접근할 수 있습니다.
thisArg (선택 사항)| function을 실행할 때 this로 사용할 객체. 이 매개변수는 필요에 따라 사용됩니다.

### 5. Array.length
배열의 길이를 반환하며, 배열의 최대 인덱스보다 항상 큽니다.     
(즉, 배열의 총 개수를 의미하며, 인덱스는 Array.length - 1)

```
const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
// Expected output: 4

```




## 출처
**inline-block**    
https://www.daleseo.com/css-display-inline-block/

**flex**    
https://ipex.tistory.com/entry/CSS3-flex-Box-justifycontent-alignitems 

**Array.prototype.forEach()**       
https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-foreach-%ED%95%A8%EC%88%98/  

**Array.length**    
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/length