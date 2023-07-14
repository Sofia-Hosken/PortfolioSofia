
import styles from './Contato.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
            
                <section className={styles.contatos}>
                    <h2>Contatos</h2>

                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre</p>

                    <div className={styles.icones}>
                        
                        <a href='mailto:sofiahosken09@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://www.instagram.com/sofiahosken/' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>

                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsYoutube className={styles.icone} />
                        </a>

                        <a href='https://github.com/Sofia-Hosken/port' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>

                        <a href='https://www.linkedin.com/in/sofia-hosken-a69604231/?originalSubdomain=br' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                        </a>

                    </div>

                </section>
           
        </>
    )
}

export default Contatos
