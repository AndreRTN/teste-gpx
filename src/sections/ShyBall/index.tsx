import React, { useEffect, useRef, useState } from 'react'
import './styles.css'

type TranslateAnim = {
  translateY: number,
  translateX: number
}
type Dimensions = {
  offSetWidth: number,
  offSetHeight: number,
}


const STATIC_EMOTE = "🙉"
const MOVE_EMOTE = "🙈"
const ANIMATION_TIME = 800
const ShyBall: React.FC = () => {
  
  useEffect(() => {

      //get dimensions to avoid ball out of screen, height must be divided by 2 in reason accept negative value
      const dimensions: Dimensions = {offSetHeight: Math.ceil(ref.current?.offsetHeight! / 2), offSetWidth: ref.current?.offsetWidth! / 2 }
      setDimensions(dimensions)
  }, [])


  const handleResize = () => {
    setTranslate({translateX: 0, translateY: 0})
    const dimensions: Dimensions = {offSetHeight: Math.ceil(ref.current?.offsetHeight! / 2), offSetWidth: ref.current?.offsetWidth! / 2 }
    setDimensions(dimensions)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false )
  }, [])
 
  const ref:React.RefObject<HTMLDivElement> = useRef(null) 
  const ballRef: React.RefObject<HTMLDivElement> = useRef(null)
  const [dimensions ,setDimensions] = useState<Dimensions>()
  const [translate,setTranslate] = useState<TranslateAnim>({translateX: 0, translateY:0})
  const [shadow,setShadow] = useState<number>(0)
  const [ballEmote, setBallEmote] = useState<string>(STATIC_EMOTE)

  useEffect(() => {
    
  }, [translate])
  const randomNumber = (max: number, min: number) => {
    if(translate.translateY < 0) min = 0
    else {
      max = -max
      min = 0
    }
    return Math.random() * (max) - (min) + min
  }
  const moveBall = () => {
    const newPosition: TranslateAnim = {...translate}
    const width: number = dimensions?.offSetWidth!
    const minWidth:number = - dimensions?.offSetWidth!
    const height:number = dimensions?.offSetHeight!
    pulseBall()
    newPosition.translateX = randomNumber(width, minWidth)
    newPosition.translateY = randomNumber(height, -height)
    setTranslate(newPosition)
  }

  const pulseBall = () => {
        setShadow(5);
        setBallEmote(MOVE_EMOTE)
        setTimeout(() => {
          setShadow(0);
          setBallEmote(STATIC_EMOTE)
          
        }, ANIMATION_TIME)
  }
  return (
    <div ref={ref} className='ball-container'>
        <div aftercontent-ball={ballEmote}  ref={ballRef} style={{transform: `translate(${translate.translateX}px, ${translate.translateY}px)`, boxShadow: `0 0 0 ${shadow}px #FF4F2A`,}} onMouseOver={() => moveBall()} className='ball'/>  
    </div>
  )
}

export default ShyBall