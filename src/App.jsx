import { useState } from 'react'
import { Post } from './Components/Post'
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar';

import styles from './Components/App.module.css';
import './global.css';


function App() {
  return (
    
    <div>
        <Header 
          
        />

        <div className={styles.wrapper}>
            <Sidebar>

            </Sidebar>
            <main>
                <Post 
                  author="Diego Fernandes" 
                  content="Hello World"
                />
                <Post 
                  author="Almirante Peralta"
                  content="Blalalalakjhsdhdhg"
                />
            </main>

        </div>
        
        
      
      </div>  
      
  )
}

export default App
