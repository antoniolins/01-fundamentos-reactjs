import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.module.css'

import styles from './App.module.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/antoniolins.png',
      name: 'Antonio Lins',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 '},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', link: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2022-07-02 21:23:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋 ... Aqui é o Mayk Brito....'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', link: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date ('2022-07-04 20:00:00')
  }
]

export function App(): JSX.Element {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
            <main>
              {posts.map(post => {
                return (
                  <Post 
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}

                  />)
              })}

            </main>
        </div>

    </div>
  )

}

