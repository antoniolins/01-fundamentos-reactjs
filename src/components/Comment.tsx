import { parseWithOptions } from 'date-fns/fp';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/antoniolins.png' />

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Antonio Lins</strong>
                            <time title='30 de Junhop às 15:58h' dateTime='22-06-30 15:58:50'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>

                    </header>
                    <p>
                       {content}  👋👋 
                    </p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>
    );
}
