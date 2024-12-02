/* eslint-disable react/prop-types */
import styles from './ModuleCSS/MessageBox.module.css'
export default function MessageBox({message}) {
  return (
    <div className={styles.messagebox}>
        <h1>{message}</h1>
    </div>
  )
}
