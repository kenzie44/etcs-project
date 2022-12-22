import Link from "next/link";
import PageTemplate from "../components/pageTemplate";
import styles from "../styles/style.module.css";

export default function () {
  //this function takes user input on the search bar and checks the value
  //this function is mostly to add the creepy text under the search bar,
  //rather than search the website.
  function onSearch(e) {
    if (document.getElementById("search").value) {
      document.getElementById("search2").style.display = "inline";
    }
  }

  return (
    <PageTemplate title="ETCS">
      <div id={styles.body}>
        <div id={styles.templatemo_container_wrapper1}>
          <div id={styles.templatemo_container_wrapper2}>
            <div id={styles.templatemo_container}>
              <div id={styles.templatemo_header}>
                <div>
                  <img
                    id={styles.img}
                    src="../photos/ETCS/site_logo.png"
                    className="w-[80px]"
                  />
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
                    <Link id={styles.link} href="/" className={styles.current}>
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
                    <Link id={styles.link} href="/ETCS/about">
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
                <div id={styles.templatemo_left_column}>
                  <div id={styles.templatemo_postbody}>
                    <h1 className="text-[#c7a619] text-[20px] font-bold">
                      Welcome to the Extra-Terrestrial Contact Society
                      Initiative
                    </h1>

                    <p id={styles.p}>
                      What is ETCS? The Extra-Territrial Contact Society is a
                      nonprofit research organization dedicated to discovering
                      alien life beyond our solar system.
                      <br></br>
                      <br></br>
                      From microbes to alien intelligence, the ETCS Initiative
                      is America's only organization wholly dedicated to
                      searching for life in the universe. With experts in radio
                      and signal interpretation we use top quality scientific
                      methods to discover proof that will change how we view the
                      universe forever.
                      <br></br>
                      <br></br>
                      ETCS works with state of the art radio signalling output
                      into the atmosphere using Gamma-AB waves.
                      <br></br>
                      <br></br>
                      You can read more about the equipment ETCS uses in our
                      blog.
                      <br></br>
                      <br></br>
                      Interesting in joining the team or supporting the
                      initiative to find proof of life? Please contact us
                      <br></br>
                      <br></br>
                    </p>
                  </div>

                  <Link href="/ETCS/blog">
                    <h1 className="text-[#c7a619] text-[20px] font-bold">
                      Popular Blog Posts
                    </h1>
                  </Link>
                  <br />
                  <br />

                  <div className={styles.templatemo_postbody}>
                    <Link href="/ETCS/blog">
                      <h1 id={styles.h1}>
                        Could tinfoil hats be the solution to fear around alien
                        mind control signals?
                      </h1>
                    </Link>
                    <div className={styles.publish_info}>
                      Post Date: 18-10-2020 · Tags: Science · Biology ·
                      Radiology
                    </div>
                    <p id={styles.p}>
                      Many of our site visitors have contacted us with questions
                      regarding the intended uses of tin foil hats. ETCS has no
                      position to give conclusive answers about tin foil hats,
                      but we can certainly explain radio signals.
                    </p>
                    <div className={styles.comment}>
                      <Link id={styles.link} href="#">
                        {" "}
                        Read Comment - 0
                      </Link>
                    </div>
                  </div>

                  <div className={styles.templatemo_postbody}>
                    <h1 id={styles.h1}>
                      ETCS Radio Equipment: Interview with Mike Ross
                    </h1>
                    <div className={styles.publish_info}>
                      Post Date: 17-10-2020 · Tags:{" "}
                      <Link href="#">Science</Link> ·{" "}
                      <Link href="#">Biology</Link> ·{" "}
                      <Link href="#">Radiology</Link>
                    </div>
                    <p id={styles.p}>
                      This blog is a special addition, where we'll be
                      interviewing our radio technician Mike Ross{" "}
                    </p>
                    <div className={styles.comment}>
                      <Link id={styles.link} href="#">
                        {" "}
                        Read Comment - 3
                      </Link>
                    </div>
                  </div>
                </div>

                <div id={styles.templatemo_right_column}>
                  <div className={styles.templatemo_section}>
                    <form id={styles.form} method="get" action="#">
                      <label id={styles.label} className={styles.search}>
                        S3arch
                      </label>{" "}
                      <input
                        className={styles.input}
                        name="search"
                        type="text"
                        id="search"
                      />{" "}
                      <br />
                      <h1 id="search2" className={styles.search2}>
                        we see you.
                      </h1>
                      <input
                        type="button"
                        value="search"
                        className={styles.button}
                        id="submit"
                        onClick={(event) => onSearch(event)}
                      />
                    </form>
                  </div>

                  <div className={styles.templatemo_section}>
                    <h2 id={styles.h2}>Categories</h2>
                    <ul>
                      <li>
                        <Link href="#">» ⎎⟒⎐⟒⍙⎐☌⍙⟒☌⏚⏃⟒⎐⏚⍙⏃</Link>
                      </li>
                      <li>
                        <Link href="#">» Cum sociis natoque penatibus</Link>
                      </li>
                      <li>
                        <Link href="#">» Lorem ipsum dolor sit amet</Link>
                      </li>
                      <li>
                        <Link href="#">» ⎎⟒⎐⟒⍙⎐☌⍙⟒☌⏚⏃⟒⎐⏚⍙⏃</Link>
                      </li>
                      <li>
                        <Link href="#">» External Link</Link>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.templatemo_section}>
                    <h2 id={styles.h2}>Archives</h2>
                    <ul>
                      <li>
                        <Link href="#">» Duis pulvinar scelerisque ante</Link>
                      </li>
                      <li>
                        <Link href="#">» Maecenas aliquam</Link>
                      </li>
                      <li>
                        <Link href="#">» Vestibulum quis pede</Link>
                      </li>
                      <li>
                        <Link href="#">» Suspendisse potenti</Link>
                      </li>
                      <li>
                        <Link href="#">» Aliquam tristique lacus</Link>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.templatemo_section}>
                    <h2 id={styles.h2}>Quick Links</h2>
                    <ul>
                      <li>
                        <Link href="https://apod.nasa.gov/apod/ap221113.html">
                          » Flying Saucer Crash Lands in Utah Desert
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.arcgis.com/apps/View/index.html?appid=6cd609921ebc44ff914a4e8059813b16">
                          » UFO Sightings Map
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.nationalgeographic.com/science/article/alien-hunters-detect-mysterious-radio-signal-from-nearby-star">
                          » Alien hunters detect mysterious radio signal from
                          nearby star
                        </Link>
                      </li>
                    </ul>
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
