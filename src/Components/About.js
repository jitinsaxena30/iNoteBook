import React,{ useContext, useEffect} from 'react'
import noteContext from './Context/notes/noteContext'

function About() {
    const a = useContext(noteContext)
    
    return (
    <div>This is about class</div>
  )
}

export default About