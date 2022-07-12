import React, { ChangeEvent, FormEvent, InvalidEvent } from 'react';
import  {  useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns'
import  { ptBR } from 'date-fns/locale';

import { Avatar } from './Avatar';
import  { Comment }  from './Comment';
import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface Content {
    type: 'paragraph' | 'link'
    content: string;
}

export function Post ({ author, publishedAt , content }: PostProps)  {

    const [ comments, setComments ] = useState([
        'Post muito Legal, hein?! '
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const [CustomValidity, setCustomValidity] = useState('')    

    const publishedDateFormatted = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDAteRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComent(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText ]);
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }


    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
               
                    <div className={styles.authorInfo}> 
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
    
            
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                     {publishedDAteRelativeToNow}
                 </time>
            </header>
            <div className={styles.content}>

                {content.map((line, index) => 
                   {
                        if (line.type === 'paragraph') {
                            return <p key={index}>{line.content}</p>;
                        } else if (line.type === 'link') {
                            return <p key={index}><a href="">{line.content}</a></p>;
                        }
                    }
                  )
                }

            </div>

            <form onSubmit={handleCreateNewComent} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong> 

                <textarea 
                    name='comment'           
                    placeholder="Deixe um comentário" 
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
              
            </form>

            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return (
                        <Comment 
                            key={index} 
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )

    }

