# 024. Copy and Move

copy 버튼을 클릭하면 복사가 되고 move 버튼을 클릭하면 복사한 내용을 이동

## 학습 
### 1. HTMLInputElement.select()
`<textarea>`요소 안에 텍스트나 `<input>`의 텍스트 필드에 포함된 요소를 선택하는 메소드 

```
<input type="text" id="text-box" size="20" value="Hello world!" />
<button onclick="selectText()">Select text</button>
```
```
function selectText() {
  const input = document.getElementById("text-box");
  input.focus();
  input.select();
}

selectText(); // Hello world!
```


### 2. execCommand() 메서드 
클립보드 접근하여 문서 편집을 가능하도록 해준다. 
여기서는 클립보드에 데이터를 복사하기 위해 사용되었다. 

더이상 권장하지 않는 기술로, 대체 방법으로  Clipboard API를 추천

### 출처
**select()**      
https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select

**execCommand()**    
https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand