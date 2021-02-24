import React, { useState, useEffect,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './App.css'
function App() {
  const [pin,setPin]=useState([0,0,0,0]);

   const inpref1=useRef();
   const inpref2=useRef();
   const inpref3 = useRef();
   const inpref4 = useRef(); 
   const arr=[inpref1,inpref2,inpref3,inpref4]
   const onChange = (val) => {
    let maxLen=1;   
    let {value,id}=val.target;  
     if(value.length>1){
       let x = 0;
        for(let i=+id;i<4;i++){
          arr[i].current.value=value.substr(x,1);
          setFocus(arr[i]);
          x++    
        }
     }
     if (val.keyCode===8 || val.keyCode===46 || val.keyCode===37){
         if(+id>0){
           setFocus(arr[+id - 1]);
         }
     }else{
       if (arr.length - 1 > +id) {
         setFocus(arr[+id + 1]);
       };
      }
   };
   const setFocus=(inp)=>{
     inp.current.focus();
   }

   const onSubmit=(evn)=>{
      evn.preventDefault();
     let res=[]
        arr.forEach((ele)=>{
            if(isNaN(ele.current.value)){
              ele.current.style.border='2px solid red';
              return ele.current.focus()
            }else{
              ele.current.style='';
              res.push(ele.current.value)
            }
        });
      console.log(res);  
   }

   
   useEffect(()=>{
     
     console.log(pin)
   
   },[pin])
  return (
    <Container className="container">
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <h2>
            <strong>Enter Pin</strong>
          </h2>
          <form onSubmit={onSubmit}>
            <fieldset>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="0"
                  ref={inpref1}
                  required
                  onKeyUp={onChange}
                />
                <input
                  type="text"
                  class="form-control"
                  id="1"
                  required
                  ref={inpref2}
                  onKeyUp={onChange}
                />
                <input
                  type="text"
                  class="form-control"
                  id="2"
                  ref={inpref3}
                  required
                  onKeyUp={onChange}
                />
                <input
                  type="text"
                  class="form-control"
                  id="3"
                  ref={inpref4}
                  required
                  onKeyUp={onChange}
                />  
              </div>
            </fieldset>
               <button
              type="submit"
              value="Login"
              class="btn btn-warning btn-block"
            >Submit</button>
          </form>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}

export default App;
