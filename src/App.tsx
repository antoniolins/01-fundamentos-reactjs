import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css';

export function App(): JSX.Element {

  return (
    <div>
      <Header />
    <Post 
        author ="Antonio Lins"
        content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quae corporis commodi inventore cum temporibus. Totam vero quis cumque, earum, placeat numquam consequuntur, quasi tempore sit accusamus harum labore commodi."
      />   
      <Post 
        author ="Diego Fernandes"
        content = "Este é um post muito Legal "
      /> 
    </div>
  )

}

