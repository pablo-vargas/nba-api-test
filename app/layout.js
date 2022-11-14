
import styles from '../styles/Home.module.css'
import '../styles/css/bootstrap.min.css'
import '../styles/css/style.css'

export default function RootLayout({ children }) {
  return (
      <html >
        <body className={styles.container}>
          {children}
        </body>
      </html>
      

  )
}
