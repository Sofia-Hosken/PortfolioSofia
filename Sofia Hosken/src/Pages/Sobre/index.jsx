
import styles from './Sobre.module.css'
import avatar from './images/avatar.svg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Sofia Hosken</span> <br />
                    <strong>Dev Full Stack</strong> </p>

                    <p>Olá! Meu nome é Sofia e sou estudante do Colégio Cotemig, onde estou cursando o técnico de Desenvolvimento Web Mobile. Sou apaixonada por tecnologia desde muito jovem e sempre fui curiosa sobre como as coisas funcionam no mundo digital.

Com o curso de Desenvolvimento Web Mobile, tenho a oportunidade de mergulhar no universo da criação de sites e aplicativos, aprendendo diversas linguagens de programação e frameworks relevantes para a construção de soluções modernas e interativas.

Minha jornada no desenvolvimento web tem sido emocionante e desafiadora. Ao longo do curso, tenho adquirido habilidades em HTML, CSS e JavaScript, além de explorar bibliotecas populares como React e Vue.js. Estou constantemente aprimorando meus conhecimentos e buscando estar atualizada com as tendências mais recentes do setor.

Além do aspecto técnico, também valorizo a importância da experiência do usuário e do design responsivo. Acredito que a combinação de funcionalidade e estética é essencial para criar soluções digitais impactantes e intuitivas.</p>

                    <p>Estou entusiasmada em construir meu portfólio, onde poderei compartilhar os projetos nos quais tenho trabalhado e demonstrar minhas habilidades de desenvolvimento web mobile. Seja bem-vindo(a) ao meu mundo digital!

Caso queira saber mais sobre meu trabalho ou entrar em contato, fique à vontade para explorar meu portfólio e me enviar uma mensagem. Estou aberta a oportunidades e colaborações empolgantes.

Vamos criar algo incrível juntos!</p>

                    
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>

        </section>
    )
}

export default Sobre

