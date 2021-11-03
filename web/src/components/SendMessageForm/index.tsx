import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";
import styles from "./style.module.scss";

export function SendMessageForm() {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.sendMessageFormWrapper}>
      <button className={styles.signOutButton}>
        <VscSignOut size="32" />
      </button>
      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.usarName}>{user?.name}</strong>
        <span className={styles.userGithub}></span>
        <VscGithubInverted size="16"/>
        {user?.login}
      </header>

      <form className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea name="message" id="message" placeholder="Qual sua expectativa parao evento?" />
        <button type="submit">Enviar mensagem</button>
      </form>
    </div>
  );
}
