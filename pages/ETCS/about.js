import Link from "next/link";
import PageTemplate from "../../components/pageTemplate";
import styles from "../../styles/style.module.css";

export default function () {
  return (
    <PageTemplate title="About Us">
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
                    <Link id={styles.link} href="/ETCS/gallery">
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
                      className={styles.current}
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
                <br></br>
                <br></br>
                <h1 id={styles.h1}> About ETCS </h1>
                <br></br>
                <p id={styles.p} className="text-[14px]">
                  ETCS is the brainchild of founder Darren McCrombie while he
                  was working at the university of Michigan. After moving to
                  several cities and gathering support, ETCS opened it's base of
                  operations in Reno, Nevada.
                  <br></br>
                  <br></br>
                  Several other scientists soon joined the ETCS initiative and
                  began their research. After their first major discovery in the
                  late 90s, they traveled across the united states and gained
                  recognition for their methods within the scientific community.
                  <br></br>
                  <br></br>
                  However, with increasing disbelief in alien life and backlash
                  on the methods of ETCS, we have since doubled our efforts in
                  reporting findings to the government regardless of what
                  non-believers write in the news.
                  <br></br>
                  <br></br>
                  Please read below to get to know our team of expert
                  scientists.
                </p>

                <br></br>
                <br></br>
                <div className={styles.row}>
                  <div className={styles.column}>
                    <div className={styles.card}>
                      <img
                        id={styles.img}
                        src="../photos/ETCS/about us/darren2.jpg"
                        className="w-[190px] flex absolute"
                      />
                      <img
                        id={styles.img}
                        src="../photos/ETCS/about us/darren.png"
                        className={`w-[85%] m-0 relative ${styles.hover_img}`}
                      />

                      <div className={styles.container}>
                        <h1 id={styles.h1}>Darren McCrombie</h1>
                        <p className={styles.title}>CEO &amp; Founder</p>
                        <p id={styles.p}>
                          Founder of the ETCS initiative and originally from
                          Detroit, Michigan.
                        </p>
                        <p id={styles.p}>d.crombie@ETCS.com</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.column}>
                    <div className={styles.card}>
                      <img
                        id={styles.img}
                        src="../photos/ETCS/about us/emily2.gif"
                        className="w-[190px] flex absolute"
                      />
                      <img
                        id={styles.img}
                        src="../photos/ETCS/about us/emily.png"
                        className={`w-[85%] m-0 relative ${styles.hover_img}`}
                      />
                      <div className={styles.container}>
                        <h1 id={styles.h1}>Emily Carlson</h1>
                        <p className={styles.title}>Planetary Scientist</p>
                        <p id={styles.p}>
                          Emily recently graduated from Berkley with a MA in
                          planet science.
                        </p>
                        <p id={styles.p}>emilycarlson@ETCS.com</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.column}>
                    <div className={styles.card}>
                      <img
                        id={styles.img}
                        src="../photos/ETCS/about us/terry3.jpg"
                        className="w-[190px] flex absolute"
                      />
                      <img
                        id={styles.img}
                        src="../photos/ETCS/about us/terry.png"
                        className={`w-[85%] m-0 relative ${styles.hover_img}`}
                      />
                      <div className={styles.container}>
                        <h1 id={styles.h1}>Terry Horn</h1>
                        <p className={styles.title}>Astrobiologist</p>
                        <p id={styles.p}>
                          Terry Terry Terry Terry Terry Terry Terry Terry Terry
                          Terry Terry{" "}
                        </p>
                        <p id={styles.p}>Horn.t@ETCS.com</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.column}>
                    <div className={styles.card}>
                      <img
                        id={styles.img}
                        src="../photos/ETCS/about us/mike2.gif"
                        className="w-[190px] flex absolute"
                      />
                      <img
                        id={styles.img}
                        src="../photos/ETCS/about us/mike.png"
                        className={`w-[85%] m-0 relative ${styles.hover_img}`}
                      />
                      <div className={styles.container}>
                        <h1 id={styles.h1}>Mike Ross</h1>
                        <p className={styles.title}>Radio Technician</p>
                        <p id={styles.p}>
                          Mike Ross has been a radio technician since graduating
                          in [REDACTED] from [REDACTED].{" "}
                        </p>
                        <p id={styles.p}>Mike_ross@ETCS.com</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.column}>
                    <div className={styles.card}>
                      <img
                        id={styles.img}
                        src="../photos/ETCS/about us/kayla3.jpg"
                        className="w-[190px] flex absolute"
                      />
                      <img
                        id={styles.img}
                        src="../photos/ETCS/about us/kayla.png"
                        className={`w-[85%] m-0 relative ${styles.hover_img}`}
                      />
                      <br></br>
                      <div className={styles.container}>
                        <h1 id={styles.h1}>Kayla Flowers</h1>
                        <p className={styles.title}>Supervisor</p>
                        <p id={styles.p}>
                          Kayla is our most recent addition to the team at ETCS.
                          She has become a dedicated supervisor to our many
                          interns.
                        </p>
                        <p id={styles.p}>kaylaflowers@ETCS.com</p>
                      </div>
                    </div>
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
