import React, { useEffect, useRef ,useState } from 'react'
import "./tabs.scss";

const Tabs = () => {
    const[hactive,setHactive] = useState(true);
    const[cactive,setCactive] = useState(false);
    const[jactive,setJactive] = useState(false);
    const htmlbuttonref = useRef(null);
    const cssbuttonref = useRef(null);
    const jsbuttonref = useRef(null);
    const htmltextref = useRef(null);
    const csstextref = useRef(null);
    const jstextref = useRef(null);

    const handelhtmlbuttonClick = ()=>{
        setHactive(true);
        setCactive(false);
        setJactive(false);

        csstextref.current.style.display = "none";
        jstextref.current.style.display="none";
        htmltextref.current.style.display = "revert";


    }
    const handelcssbuttonClick = ()=>{
      setHactive(false);
      setCactive(true);
      setJactive(false);
        csstextref.current.style.display = "revert";
        jstextref.current.style.display="none";
        htmltextref.current.style.display = "none";

    }
    const handeljsbuttonClick = ()=>{
      setHactive(false);
      setCactive(false);
      setJactive(true);
        csstextref.current.style.display = "none";
        jstextref.current.style.display="revert";
        htmltextref.current.style.display = "none";
    }

    useEffect(()=>{
    csstextref.current.style.display = "none";
    jstextref.current.style.display="none";
    
    },[])



  return (
    <div>
      <div className='buttons'>
        <button ref={htmlbuttonref} onClick={handelhtmlbuttonClick} className={hactive ? 'buttonActive' : 'buttonNotActive'}>HTML</button>
        <button ref={cssbuttonref} onClick={handelcssbuttonClick} className={cactive ? 'buttonActive' : 'buttonNotActive'}>CSS</button>
        <button ref={jsbuttonref} onClick={handeljsbuttonClick} className={jactive ? 'buttonActive' : 'buttonNotActive'}>JavaScript</button>
      </div>
      <div className='text'>
        <p ref={htmltextref} className='htmltext'>
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </p>
        <p ref={csstextref} className='csstext'>
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </p>
        <p ref={jstextref} className='jstext'>
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </p>
      </div>
    </div>
  )
}

export default Tabs