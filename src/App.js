import React,  { useState, useEffect, useCallback, useMemo }  from 'react'
import './App.css'
import { StyledButton, StyledInput, StyledResult } from './AppStyled'

function App() {
  const [result, setResult] = useState(0)
  const [firstElement, setFirstElement] = useState('')
  const [secondElement, setSecondElement] = useState('')
   
  const onFirstChange = useCallback ( e => {
    setFirstElement(e.target.value)
    // console.log("first",e.target.value)
    // console.log(firstElement)
  },[setFirstElement]);
  
  const onSecondChange = useCallback ( e => {
    setSecondElement(e.target.value)
    // console.log("second",e.target.value)
    // console.log(secondElement)
  },[setSecondElement]);

  const plus = useCallback (() => {
    
    if(firstElement === '' || isNaN(firstElement)){
      alert("첫번째 인자를 확인하세요.")
    }
    else if(secondElement === '' || isNaN(secondElement)){
      alert("두번째 인자를 확인하세요.")
    }
    else {

      setResult(Number(firstElement) + Number(secondElement))
    }
  },[firstElement, secondElement, setResult])

  const minus = useCallback (() => {
    
    if(firstElement === '' || isNaN(firstElement)){
      alert("첫번째 인자를 확인하세요.")
    }
    else if(secondElement === '' || isNaN(secondElement)){
      alert("두번째 인자를 확인하세요.")
    }
    else {

      setResult(Number(firstElement) - Number(secondElement))
    }
  },[firstElement, secondElement, setResult])

  const multiple = useCallback (() => {
    
    if(firstElement === '' || isNaN(firstElement)){
      alert("첫번째 인자를 확인하세요.")
    }
    else if(secondElement === '' || isNaN(secondElement)){
      alert("두번째 인자를 확인하세요.")
    }
    else {

      setResult(Number(firstElement) * Number(secondElement))
    }
  },[firstElement, secondElement, setResult])


  const divide = useCallback (() => {
    
    if(firstElement === '' || isNaN(firstElement)){
      alert("첫번째 인자를 확인하세요.")
    }
    else if(secondElement === '' || isNaN(secondElement)){
      alert("두번째 인자를 확인하세요.")
    }
    else if(secondElement === '0') {
      alert("0으로 나눌 수 없습니다.")
    }
    else {

      setResult(Number(firstElement) / Number(secondElement))
    }
  },[firstElement, secondElement, setResult])

  return (
    <>
    <StyledInput onChange={onFirstChange}/>
    <div>
      <StyledButton onClick={plus}>+</StyledButton>
      <StyledButton onClick={minus}>-</StyledButton>
      <StyledButton onClick={multiple}>*</StyledButton>
      <StyledButton onClick={divide}>/</StyledButton>
    </div>
    <StyledInput onChange={onSecondChange}/>

    <StyledResult>result = {result}</StyledResult>
    </>
  );
}
export default App;