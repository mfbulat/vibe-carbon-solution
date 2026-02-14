import { contactSection } from "@/data/sections";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section className={styles.section} id="contacts">
      <div className="container">
        <h2 className={styles.title}>{contactSection.title}</h2>

        <div className={styles.columns}>
          <div>
            <h3 className={styles.formTitle}>{contactSection.formTitle}</h3>
            <p className={styles.formSubtitle}>{contactSection.formSubtitle}</p>

            <form className={styles.form} action="#">
              <input type="text" placeholder="Ваше имя*" required />
              <input type="email" placeholder="Ваша почта*" required />
              <input type="tel" placeholder="+7 (000) 000-00-00" />
              <textarea placeholder="Ваш вопрос" rows={5} />
              <button className="btn-angled" type="submit">
                ОТПРАВИТЬ
              </button>
            </form>

            <p className={styles.agreement}>
              Нажимая на кнопку вы соглашаетесь с{" "}
              <a href={contactSection.website}>условиями передачи данных</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
