import styles from './Card.module.css'
import avatar from '../assets/avatar.jfif'

export function Card() {
    return (
        <main className={styles.card}>
      <div>
        <img className={styles.avatar} src={avatar} alt="Avatar" />
        <h1 className={styles.name}>Vinicius Almeida</h1>
        <p className={styles.location}>Maranhão, Brazil</p>
      </div>
      
      <p className={styles.description}>"Front-end developer and avid reader."</p>

      <div className={styles.socialLinks}>
        <a href="https://github.com/Vinicius-2a" target='_blank' className={styles.socialLink}>GitHub</a>
        <a href="https://www.frontendmentor.io/profile/Vinicius-2a" target='_blank' className={styles.socialLink}>Frontend Mentor</a>
        <a href="https://www.linkedin.com/in/vinicius2a/" target='_blank' className={styles.socialLink}>LinkedIn</a>
        <a href="#" className={styles.socialLink}>Twitter</a>
        <a href="#" className={styles.socialLink}>Instagram</a>
      </div>
    </main>
    )
}