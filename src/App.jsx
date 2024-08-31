import { useState } from 'react'
import { Post } from './Components/Post'
import { Header } from './Components/Header'

import styles from './Components/App.module.css';

import './global.css';

function App() {
  return (
    
    <div>
        <Header 
          
        />
        <Post 
          author="Diego Fernandes" 
          content="Hello World"
        />
        <Post 
          author="Almirante Peralta"
          content="Blalalalakjhsdhdhg"
        />
        
      
      </div>  
      
  )
}

export default App
