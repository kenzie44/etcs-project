import Link from "next/link";
import PageTemplate from "../../components/pageTemplate";
import styles from "../../styles/style.module.css";
import stylesGallery from "../../styles/gallery.module.css";

export default function () {
  return (
    <PageTemplate title="Gallery">
      <div id={styles.body}>
        <div id={styles.templatemo_container_wrapper1}>
          <div id={styles.templatemo_container_wrapper2}>
            <div id={styles.templatemo_container}>
              <div id={styles.templatemo_header}>
                <div>
                  {" "}
                  <img
                    id={styles.img}
                    src="../photos/ETCS/site_logo.png"
                    className="w-[80px]"
                  />{" "}
                </div>
                <div id={styles.templatemo_site_title}>E.T.C.S</div>
                <div
                  id={styles.templatemo_site_slogan}
                  className="text-[#c7a619]"
                >
                  Extra-Terrestrial Contact Society Initiative
                </div>
              </div>

              <div id={styles.templatemo_menu}>
                <ul>
                  <li>
                    <Link id={styles.link} href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link id={styles.link} href="/ETCS/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link id={styles.link} href="/ETCS/gallery" className={styles.current}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link id={styles.link} href="/ETCS/password">
                      Evidence
                    </Link>
                  </li>
                  <li>
                    <Link
                      id={styles.link}
                      href="/ETCS/about"
                      
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link id={styles.link} href="/ETCS/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div id={styles.templatemo_content}>
              <div>
                <br />
                <br />
                <h1 id={styles.h1} className="text-center"> Image Gallery </h1>
              </div>
              <div className={stylesGallery.card_container}>
                <div className={stylesGallery.card_gallery}>
                <p className={stylesGallery.card_text}></p>
                  <img className={styles.card_img} src="../photos/ETCS/gallery/astroid1.jpg" />
                </div>
                <div className={stylesGallery.card_gallery}>
                <p className={stylesGallery.card_text}></p>
                  <img
                    className={styles.card_img}
                    src="../photos/ETCS/gallery/cfGPUSWMu2ZrLecyhmfDXg-1200-80.jpg"
                  />
                </div>
                <div className={stylesGallery.card_gallery}>
                <p className={stylesGallery.card_text}></p>
                  <img
                    className={styles.card_img}
                    src="../photos/ETCS/gallery/home_background.jpg"
                  />
                </div>
                <div className={stylesGallery.card_gallery}>
                <p className={stylesGallery.card_text}></p>
                  <img
                    className={styles.card_img}
                    src="../photos/ETCS/gallery/Dimension4-Image.png"
                  />
                </div>
                <div className={stylesGallery.card_gallery}>
                  <p className={stylesGallery.card_text}>2</p>
                  <img
                    className={styles.card_img}
                    src="../photos/ETCS/gallery/41586_2020_2102_Fig1_HTML.png"
                  />
                </div>
                <div className={stylesGallery.card_gallery}>
                <p className={stylesGallery.card_text}></p>
                  <img className={styles.card_img} src="../photos/ETCS/gallery/ASYOM0921_01.jpg" />
                </div>
                <div className={stylesGallery.card_gallery}>
                <p className={stylesGallery.card_text}></p>
                  <img className={styles.card_img} src="../photos/ETCS/gallery/dish.jpg" />
                </div>
                <div className={stylesGallery.card_gallery}>
                <p className={stylesGallery.card_text}></p>
                  <img className={styles.card_img} src="../photos/ETCS/gallery/office1.jpg" />
                </div>
                <div className={stylesGallery.card_gallery}>
                <p className={stylesGallery.card_text}></p>
                  <img className={styles.card_img} src="../photos/ETCS/gallery/office2.jpg" />
                </div>
              </div>
            </div>

            <div id={styles.templatemo_footer}>
                <Link id={styles.link} href="/">
                  Home
                </Link>{" "}
                |{" "}
                <Link id={styles.link} href="/ETCS/about">
                  About Us
                </Link>{" "}
                |{" "}
                <Link id={styles.link} href="/ETCS/contact">
                  Contact Us
                </Link>
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
