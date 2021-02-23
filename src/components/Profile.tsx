import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/55390286?s=460&u=cadd24b56ac02812055ae6c8745600954953c847&v=4" alt="Daniel Lucas"/>
    
      <div>
        <strong>Daniel Lucas</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}