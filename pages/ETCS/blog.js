import Link from "next/link";
import PageTemplate from "../../components/pageTemplate";
import styles from "../../styles/style.module.css";

export default function () {
  return (
    <PageTemplate title="Blog">
      <div id={styles.body}>
        <div id={styles.templatemo_container_wrapper1}>
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
                  <Link
                    id={styles.link}
                    href="/ETCS/blog"
                    className={styles.current}
                  >
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
              <br />
              <br />
              <div className={styles.templatemo_postbody}>
                <Link id={styles.link} href="#">
                  <h1 id={styles.h1}>
                    Could tinfoil hats be the solution to fear around alien mind
                    control signals?
                  </h1>
                </Link>
                <div className={styles.publish_info}>
                  Post Date: 19-10-2020 · Tags:{" "}
                  <Link id={styles.link} href="#">
                    Science
                  </Link>{" "}
                  ·{" "}
                  <Link id={styles.link} href="#">
                    Biology
                  </Link>{" "}
                  ·{" "}
                  <Link id={styles.link} href="#">
                    Radiology
                  </Link>
                </div>

                <div id={styles.p}>
                  <img
                    id={styles.img}
                    src="../photos/ETCS/blog posts/tinfoilhat.jpg"
                    alt=""
                  />
                  Many of our site visitors have contacted us with questions
                  regarding the intended uses of tin foil hats. ETCS has no
                  position to give conclusive answers about tin foil hats, but
                  we can certainly explain radio signals.
                  <br />
                  <br />
                  Aluminum exposure is believed to have the potential to
                  adversely affect human health, including the induction of
                  neurodegenerative diseases associated with cognitive
                  dysfunction. Other routes of exposure, e.g. dermal uptake of
                  aluminum from cosmetics, may also play a relevant role.
                  <br />
                  <br />
                  But can tin foil hats block unwanted alien radio waves into
                  the brains of earth's citizens? Well, radio waves are defined
                  like this by NASA:
                  <br />
                  <br />
                  A radio wave is generated by a transmitter and then detected
                  by a receiver. An antenna allows a radio transmitter to send
                  energy into space and a receiver to pick up energy from space.
                  Transmitters and receivers are typically designed to operate
                  over a limited range of frequencies.
                  <br />
                  <br />
                  So, metal is known to block waves from the transmitter to the
                  receiver. Think about putting a ball of tinfoil in a
                  microwave, the metal would react badly (i.e. exploding in your
                  microwave)
                  <br />
                  <br />
                  In 2005, a tongue-in-cheek experimental study by a group of
                  MIT students found that tin foil hats do shield their wearers
                  from radio waves over most of the tested spectrum, but
                  amplified certain frequencies, around 2.6 GHz and 1.2 GHz.
                  <br />
                  <br />
                  So if you're looking to block some waves but risk amplifying
                  some other from space, you may want to risk wearing a tinfoil
                  hat.
                </div>

                <div className={styles.comment}>
                  <Link id={styles.link} href="#">
                    {" "}
                    Read Comment - 6
                  </Link>
                </div>
              </div>

              <div className={styles.templatemo_postbody}>
                <Link id={styles.link} href="#">
                  <h1 id={styles.h1}>
                    ETCS Radio Equipment: Interview with Mike Ross
                  </h1>
                </Link>
                <div className={styles.publish_info}>
                  Post Date: 19-10-2020 · Tags:{" "}
                  <Link id={styles.link} href="#">
                    Science
                  </Link>{" "}
                  ·{" "}
                  <Link id={styles.link} href="#">
                    Biology
                  </Link>{" "}
                  ·{" "}
                  <Link id={styles.link} href="#">
                    Radiology
                  </Link>
                </div>
                <div className={styles.templatemo_postbody}>
                  <div className={styles.blog_text}>
                    <div id={styles.p}>
                      {" "}
                      <img
                        id={styles.img}
                        src="../photos/ETCS/blog posts/interview.jpg"
                        alt=""
                      />
                      This blog is a special addition, where we'll be
                      interviewing out radio technician Mike Ross.
                      <br />
                      <br />
                      <h3>Question 1: Tell us about yourself!</h3>
                      <br />
                      <br />
                      “Hello everyone, my name is Micheal Ross, or Mike. I'm a
                      radio technician that graduated from the university of
                      Michigan a few years back. I'm passionate about contacting
                      alien life and I have a fantastic small cocker spaniel at
                      home.
                      <br />
                      <br />
                      <h3>Question 2: Do you think alien life is out there?</h3>
                      <br />
                      “One hundred percent I do. With the universe as vast as it
                      is, there's a high probability aliens are out there with
                      the same level of intelligence we possess. ETCS sending
                      and receiving radio transmissions is a huge step forward.”
                      <br />
                      <br />
                      <h3>Question 3: Could you tell us about your work?</h3>
                      <br />
                      <br />
                      “Certainly. As a radio technician I calibrate the machines
                      and satellite dishes for atmospheric levels. I then take
                      the data we receive and interpret into readable letters.
                      I'm the first point of contact for incoming signals. I
                      also spend many hours at night at the headset, listening
                      to possible audio that we receive.”
                      <br />
                      <br />
                      Great! Thank you, Mike, for your input today. Make sure to
                      follow ETCS on our research and other blog posts on our
                      website.
                    </div>
                  </div>
                </div>

                <div className={styles.comment}>
                  <Link id={styles.link} href="#">
                    {" "}
                    Read Comment - 0
                  </Link>
                </div>
              </div>

              <div className={styles.templatemo_postbody}>
                <Link id={styles.link} href="#">
                  <h1 id={styles.h1}>6</h1>
                </Link>
                <div className={styles.publish_info}>
                  Post Date: 19-10-2020 · Tags:{" "}
                  <Link id={styles.link} href="#">
                    Science
                  </Link>{" "}
                  ·{" "}
                  <Link id={styles.link} href="#">
                    Biology
                  </Link>{" "}
                  ·{" "}
                  <Link id={styles.link} href="#">
                    Radiology
                  </Link>
                </div>
                <div>
                  <div id={styles.p}>
                    {" "}
                    <img
                      id={styles.img}
                      src="../photos/ETCS/blog posts/66.jpg"
                      alt=""
                    />
                    URGENT NEWS! Last month, our team of radio technicians
                    interpreted a signal from what we believe to be alien life.
                    The signal appears to read “We are here. We see you.”
                    [REDACTED] █ ██ █ ████ ███████████ ████ ████ █ ██████ ████
                    ██ ██████████ ██ ███ ████████ ███████ ██ █ ████ ████ ███████
                    ██ ███ ███████ ███ █████ ██ █████ █████ █████ ██ ████ ██ ███
                    █ ████████████ ██████ ████████████ ██ ████████ ██ ███████ ██
                    █████ ████████ █████ ███████ ██████ ██████ ██ ████ ████
                    ████████ ████████ ████ ███████ ██████████ ████████ ███ ███
                    ████ ███████ ███ ███ █████ █████ ██ █████ ███████ █████
                    █████ ███ █ ██████ ███ ██████ ██████ ████ ███████ ████ ███
                    █████ █████ ██ █████ ████████ ███████ ████████ ████ ███████
                    ████ ███ ██████ █████████ ██ █████████ █████████ ██ ███████
                    █████████ ██████
                  </div>
                </div>

                <div className={styles.comment}>
                  <Link id={styles.link} href="#">
                    {" "}
                    Read Comment - 0
                  </Link>
                </div>
              </div>

              <div className={styles.templatemo_postbody}>
                <Link id={styles.link} href="#">
                  <h1 id={styles.h1}>Talk to us.</h1>
                </Link>
                <div className={styles.publish_info}>
                  Post Date: 19-10-2020 · Tags:{" "}
                  <Link id={styles.link} href="#">
                    Science
                  </Link>{" "}
                  ·{" "}
                  <Link id={styles.link} href="#">
                    Biology
                  </Link>{" "}
                  ·{" "}
                  <Link id={styles.link} href="#">
                    Radiology
                  </Link>
                </div>
                <div>
                  <div id={styles.p}>
                    {" "}
                    <img
                      id={styles.img}
                      src="../photos/ETCS/blog posts/we are here.jpg"
                      alt=""
                    />
                    We are here.
                    <br />
                    <br />
                    We are here.
                    <br />
                    <br />
                    We are here.
                    <br />
                    <br />
                    We are here.
                    <br />
                    <br />
                    We are here.
                    <br />
                    <br />
                    We are here.
                    <br />
                    <br />
                    We are here.
                    <br />
                    <br />
                    We are here.
                    <br />
                    <br />
                    We are here.
                    <br />
                    <br />
                    We are here.
                    <br />
                    <br />
                    We are here.
                    <br />
                    <br />
                  </div>
                </div>

                <div className={styles.comment}>
                  <Link id={styles.link} href="#">
                    {" "}
                    Read Comment - 00000
                  </Link>
                </div>
              </div>

              <div className={styles.templatemo_postbody}>
                <Link id={styles.link} href="#">
                  <h1 id={styles.h1}>Government Relations</h1>
                </Link>
                <div className={styles.publish_info}>
                  Post Date: 19-10-2020 · Tags:{" "}
                  <Link id={styles.link} href="#">
                    Science
                  </Link>{" "}
                  ·{" "}
                  <Link id={styles.link} href="#">
                    Biology
                  </Link>{" "}
                  ·{" "}
                  <Link id={styles.link} href="#">
                    Radiology
                  </Link>
                </div>
                <div>
                  <div id={styles.p}>
                    {" "}
                    <img
                      id={styles.img}
                      src="../photos/ETCS/blog posts/men.jpg"
                      alt=""
                    />
                    Kayla here. Usually Terry writes our blog posts, but he
                    hasn't shown up to work in a while. This may be our last
                    blog post for a while. A branch of the government has
                    contacted us with a “cease and desist” and has hit ETCS with
                    mandatory interviews out of state. Their email was quite
                    aggressive if you had to ask me. One of their
                    representatives was at the HQ earlier and confiscated a lot
                    of equipment. We'll provide updates soon.
                  </div>
                </div>

                <div className={styles.comment}>
                  <Link id={styles.link} href="#">
                    {" "}
                    Read Comment - 0
                  </Link>
                </div>
              </div>
              <div id={styles.templatemo_container_wrapper2}>
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
      </div>
    </PageTemplate>
  );
}