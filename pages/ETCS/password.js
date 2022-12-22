import Link from "next/link";
import PageTemplate from "../../components/pageTemplate";
import styles from "../../styles/style.module.css";
import stylesPassword from "../../styles/password.module.css";

export default function () {
    // Password code inspired by https://codepen.io/coder-aarush/pen/RwjRVvP

//this function takes user inputted password, checks against a value
//and returns if correct or not
function onSubmit(e) {

    if (document.getElementById('password').value == '362138') 
    {window.button2.style.display="inline"; }
    else{ alert('Access Denied, Please try again');}
}
  return (
    <PageTemplate title="Evidence">
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
                    <Link
                      id={styles.link}
                      href="/ETCS/password"
                      className={styles.current}
                    >
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

              <div className={stylesPassword.code}>
                <div className={stylesPassword.row_fluid}>
                  <h1 id={styles.h1}>ỷ̨̖̪̮̮̪̘͚͍͑̂ő̤̬͖̥͈̮́̚ü̡̳͈̲̓̓̄ ̶̮͈͉̤̹́̉̄n̢̩͎̱̙̼̻̮̍ͯ͂͛e̸͙̭͆͗e͙͉̬͙͂̾̃͝d̡̰͚̲ͨ ̖̥͍̠̫̦̍̀͢a̪͐̎̎̓͠ͅ ̢̳͓̠̣̯̮̾p̨̥͚̰̳͇̤͖̲ͤͭ͆a̵̱̣͇ͧ͆̄̊ś̶̯͖̯͖̱̊̏s̼̣͇̩̳̻͕̎͢w̺̯̄̔͋́͡oͯ͏̗̻̗͍͎r̬̺͐͌̀d̶̤̤̼̞̗ͧ̿̓ͫ ̧̞̰̼͚͔̘̠̤̑ṫ̯̝̗̻̰ͥ̚͢o̸̰̯̘̿ ̑ͯ҉͈̫̹̫̪̺̱̜ć̨͚̰̥̼͙̾̓ͣo̸̤̬̫̦ͨn͌ͩ҉̩͖̙̳͔͇ț͙̖̳̼̔̊ͥ̚͝i̹͉̩͕ͬ̕n̸̳͇͚̟̦̼͍͖̔̔u̺̮̳͎̻͉̼͆ͥ̚̕e̹̱̜̦͚͖͇͕̓̒͞</h1>
                  <br />
                  <br />

                  <input
                    type="password"
                    name="password"
                    maxlength="6"
                    className={stylesPassword.input}
                    id="password"
                    placeholder="01110100 01111001 01110000 01100101 "
                    required
                  />
                </div>

                <button className={`${stylesPassword.button1} ${styles.button}`} id="button1" onClick={(event) => onSubmit(event)}>
                  Submit
                </button>
                <br />
                <br />
                <br />

                <button className={stylesPassword.button2} id="button2">
                  <Link href="/a51-utsd" target="_blank">
                    Access Granted. Click to open
                  </Link>
                </button>
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
