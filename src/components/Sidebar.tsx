import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
                src='https://images.unsplash.com/photo-1656299882838-de57aede97e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50'

            />

            <div className={styles.profile}>
                <Avatar src='https://github.com/antoniolins.png' />

                <strong>Antonio Lins</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editear seu Perfil
                </a>
            </footer>
        </aside>
    );
}