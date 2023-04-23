import React from 'react'
import { FC } from 'react';


interface SkillContainerProps {
    svg: any
}

const SkillContainer:FC<SkillContainerProps> = ({svg}) => {
  return (
    <div className='skill'>
        <img src={svg} alt=""/>
    </div>
  )
}

export default SkillContainer