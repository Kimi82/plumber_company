import React, { useState, useRef, useCallback, useEffect } from 'react';
import './Realizations.css'
import { gsap, Power1 } from "gsap";

function Realizations() {

  const sliderData = [
    {
      title: "title1",
      description: "desc1",
      image: "https://images.adsttc.com/media/images/5ef1/1e6c/b357/658c/7f00/03bf/medium_jpg/131_ACME_005_Marsa_Plaza_Francisco_Nogueira.jpg?1592860233",
    },
    {
      title: "title2",
      description: "desc2",
      image: "zdjeciedodac",
    },
    {
      title: "title3",
      description: "desc3",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Big_Pine_landscape.jpg",
    },
  ]
  
  const pageConstants = {
    DEFAULT_INDEX: 0,
    ACTIVE_ZINDEX: '500',
    INACTIVE_TRANSLATE: '100%',
    POLYGON_INACTIVE: 'polygon(0 76%, 100% 89%, 100% 100%, 0% 100%)',
    POLYGON_ACTIVE: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
  };

const [list, setList] = useState([]);
const [lenght, setLenght] = useState(sliderData.length);
const [activeColorIndex, setActiveIndex] = useState(0);
const [disabled, setDisabled] = useState(false);

const collectionContainer = useRef(null);
const bgListContainer = useRef(null);

const tl = gsap.timeline();
const tl2 = gsap.timeline();

var selectedColor = function () { var _a; return (_a = list[activeColorIndex]) === null || _a === void 0 ? void 0 : _a.color; };

const listExists = () =>{
  return(
    (bgListContainer.current && 
    bgListContainer.current.children &&
    bgListContainer.current.children.lenght > 0) ||
    (collectionContainer.current &&
    collectionContainer.current.children &&
    collectionContainer.current.children.lenght > 0)
  )
}

const elementList = useCallback(()=>{
  if(listExists()){
    return Array.prototype.slice.call(bgListContainer.current?.children)
  }
}, [])

const collectionList = useCallback(()=>{
  if(listExists()){
    return Array.prototype.slice.call(collectionContainer.current?.children)
  }
},[])

const rednerBgList = () =>{
  return(
    sliderData.map((item) =>(
      <div className="realization__nextImage" ref={bgListContainer}><img src={item.image}/></div>
    )))
}

const rednerCollection = () =>{
  return(
  sliderData.map((item) =>(
    <div className="realization__currentImage" ref={collectionContainer}><img src={item.image}/></div>
  )))
}

const initElements =  useCallback(()=>{
  if(listExists()){
    elementList()[pageConstants.DEFAULT_INDEX].classList.add('active');
    elementList()[pageConstants.DEFAULT_INDE].style.zIndex = pageConstants.ACTIVE_ZINDEX;
    for(let i=pageConstants.DEFAULT_INDEX+1; i<lenght; i++){
      gsap.to(elementList()[i],{
        duration: 0,
        zIndex: -1,
        autoAlpha: 0,
        translateX: pageConstants.DEFAULT_INDEX
      })
    }
    collectionList()[pageConstants.DEFAULT_INDEX].classList.add('active');
    collectionList()[pageConstants.DEFAULT_INDEX].style.zIndex = pageConstants.ACTIVE_ZINDEX;
    for(let j = pageConstants.DEFAULT_INDEX+1; j<lenght;){
      gsap.to(collectionList()[j],{
        duration: 0,
        zIndex: -1,
        scale: 1.4,
        clipPath: pageConstants.POLYGON_INACTIVE,
        autoAlpha: 0,
        translateY: pageConstants.INACTIVE_TRANSLATE
      })
    }
  }
},[lenght, collectionList, elementList])

useEffect(() => {
  setLenght(sliderData.length)
  initElements()
}, [list, lenght, initElements()])

const buttonsValue =[">", "<"]
  return (
      <section className="realization"  id="realizations">
     
        <div className="realization__current">
          <div className="realization__currentText">
            <h1 className="realization__currentTextTitle">Robota numer1</h1>
            <h3 className="realization__currentTextBody">Tutaj opis tej roboty i tka dalej i tak dalej</h3>
          </div>
           <div className="realization__currentImageWrapper" ref={collectionContainer}>
            {rednerCollection()}
           </div> 
        </div>
        
        <div className="realization__next" style={{
          backgroundColor: selectedColor() && selectedColor(),
        }}>
          {/* <div className="realization__nextImage">THERE WILL BE NEXT IMAGE</div> */}
          <div className="realization__nextImageWrapper" ref={bgListContainer}>
          {rednerBgList()}
          </div>
          <div className="realization__nextText">
            <h3  className="realization__nextTextTitle">NEXT PROJECT</h3>
            <h3  className="realization__nextTextBody">Name Of the Project</h3>
          </div>
          <div className="realization__nextButtons">
            <div className="realization__nextButton realization__nextButton--next">
              <span className="realization__nextButtonArrow" >{buttonsValue[0]}</span></div>
            <div className="realization__nextButton realization__nextButton--prev">
              <span className="realization__nextButtonArrow">{buttonsValue[1]}</span></div>
          </div>
        </div>
     
     </section>
  );
}

export default Realizations;
