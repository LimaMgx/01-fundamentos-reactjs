import { useState } from 'react'
import { Post } from './Components/Post'
import { Header } from './Components/Header'


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
