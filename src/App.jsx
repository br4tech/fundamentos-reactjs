import { Post }  from './Post'
import { Header } from './components/Header'

import './style.css'

function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Guilherme" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
      />

      <Post 
        author="Guilherme" 
        content="Novo post." 
      />
    </div>
  )
}

export default App
