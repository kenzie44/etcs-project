import Link from "next/link";
import PageTemplate from "../../components/pageTemplate";
import styles from "../../styles/style.module.css";
import stylesContact from "../../styles/contact.module.css";

export default function () {
  return (
    <PageTemplate title="Contact Us">
      <div id={styles.body}>
      <div id={styles.templatemo_container_wrapper1}>
        <div id={styles.templatemo_container_wrapper2}>
          <div id={styles.templatemo_container}>
            <div id={styles.templatemo_header}>
              <div>
                {" "}
                <img id={styles.img} src="../photos/ETCS/site_logo.png" className="w-[80px]"/>{" "}
              </div>
              <div id={styles.templatemo_site_title}>E.T.C.S</div>
              <div id={styles.templatemo_site_slogan} className="text-[#c7a619]">
                Extra-Terrestrial Contact Society Initiative
              </div>
            </div>

            <div id={styles.templatemo_menu}>
              <ul>
                <li>
                  <Link id={styles.link} href="/">Home</Link>
                </li>
                <li>
                  <Link id={styles.link} href="/ETCS/blog">Blog</Link>
                </li>
                <li>
                  <Link id={styles.link} href="/ETCS/gallery">Gallery</Link>
                </li>
                <li>
                  <Link id={styles.link} href="/ETCS/password">Evidence</Link>
                </li>
                <li>
                  <Link id={styles.link} href="/ETCS/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link id={styles.link} href="/ETCS/contact" className={styles.current}>Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className={stylesContact.form_container}>
              <h1 id={styles.h1}>Contact Us</h1>
              <p id={styles.p}>Please contact us if you have any questions. </p>
              <form action="#" className={styles.form}>
                <div className={stylesContact.form_group}>
                  <label for="name" className={stylesContact.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    className={stylesContact.input}
                    id="name"
                    name="name"
                    placeholder="Type..."
                  />
                </div>

                <div className={stylesContact.form_group}>
                  <label for="subject" className={stylesContact.label}>
                    Subject
                  </label>
                  <input
                    type="text"
                    className={stylesContact.input}
                    id="subject"
                    name="subject"
                    placeholder="Type..."
                  />
                </div>

                <div className={stylesContact.form_group}>
                  <label for="email" className={stylesContact.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={stylesContact.input}
                    id="email"
                    name="email"
                    placeholder="...8..."
                  />
                </div>

                <div className={stylesContact.form_group}>
                  <label for="message" className="sr-only">
                    Message
                  </label>
                  <textarea className={stylesContact.textarea} id="message" rows="10"></textarea>
                </div>

                <div className={stylesContact.form_group}>
                  <button className={stylesContact.btn}>Submit</button>
                </div>
              </form>
            </div>

            <div id={styles.templatemo_footer}>
              <Link id={styles.link} href="/">Home</Link> |{" "}
              <Link id={styles.link} href="/ETCS/about">About Us</Link> |{" "}
              <Link id={styles.link} href="/ETCS/contact">Contact Us</Link>
              <br />
              Copyright © E.T.C.S
            </div>
          </div>
        </div>
      </div>
      </div>
    </PageTemplate>
  );
}
