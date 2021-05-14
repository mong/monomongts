import matter from "gray-matter";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { join } from "path";
import styles from "../styles/Home.module.css";
import fs from "fs";

interface Props {
  children: any;
  title?: string;
  page?: string;
}

export default function Layout({
  children,
  title = "SKDE - Helse Nord RHF",
  page,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content="Helse Nord RHF"></meta>
        <meta
          property="og:description"
          content="SKDE (Senter for klinisk dokumentasjon og evaluering)&nbsp;er et nasjonalt miljø innen arbeidet med opprettelse og drift av kliniske kvalitetsregistre. Senteret er lokalisert til Universitetssykehuset i Nord-Norge og eies av Helse Nord RHF."
        ></meta>
      </Head>
      <div className={styles.grid_wrapper}>
        <header className={styles.header_container}>
          <div className={styles.header_logo}>
            <Link href="/">
              <a rel="home">
                <Image
                  src="/img/logos/SKDE_sort.png"
                  alt="Hjem"
                  width={96}
                  height={39}
                />
              </a>
            </Link>
          </div>
          <div className={styles.header_links}>
            <Link href="#">
              <a>Kontakt</a>
            </Link>
            <div className={styles.fsz_helper}>
              Tekststørrelse A+
              <div className={styles.fsz_helper__container}>
                ENDRE SKRIFTSTØRRELSE
                <br />
                Hold Ctrl-tasten nede.
                <br />
                Trykk på + for å forstørre eller - for å forminske, eventuelt
                scroll med hjulet på musen.
              </div>
            </div>
          </div>
        </header>
        {page && (
          <div className={styles.breadcrumb}>
            <ol>
              <li>SKDE</li>
              <li>{page}</li>
            </ol>
          </div>
        )}
        {children}
        <footer className={`${styles.full_bleed} ${styles.footer_container}`}>
          <div className={styles.footer__top}>
            <div>
              <Image
                src="/img/logos/SKDE_hvit_lys.png"
                height="40"
                width="99"
                alt="SKDE logo"
              />
            </div>
            <div>
              <strong>Telefon: </strong>
              <a href="tel:77 75 58 00">77 75 58 00</a>
              <br />
              <strong>E-post: </strong>
              <Link href="mailto:servicemiljoet@skde.no">
                <a>servicemiljoet@skde.no</a>
              </Link>
              <br />
              <br />
              <strong>Webredaktør: </strong>
              <Link href="mailto:webmaster@skde.no">
                <a>webmaster@skde.no</a>
              </Link>
            </div>
            <div className={styles.footer__social}>
              <Link href="https://www.facebook.com/medisinskekvalitetsregistre">
                <a title="Link til kvalitetsregistre på facebook">
                  Følg oss på Facebook
                </a>
              </Link>
              <Link href="https://helse-nord.no/skde/kontakt-skde">
                <a title="Link til kontakt SKDE">Kontakt</a>
              </Link>
              <Link href="https://helse-nord.no/om-nettstedet/personvern">
                <a title="link til personvern">Personvern</a>
              </Link>
            </div>
          </div>
          <div className={styles.footer__bottom}>
            <div className={styles.footer__partner_l}>
              <Link href="http://www.helse-nord.no/">
                <a title="Link til Helse Nord">
                  <Image
                    src="/img/logos/hf_nord-white.svg"
                    height="40px"
                    width="180px"
                    alt="Helse Nord logo"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.footer__partner_m}>
              <Link href="https://www.kvalitetsregistre.no/">
                <a title="Link til Kvalitetsregistre">
                  <Image
                    src="/img/logos/NSM_logo_hvit.png"
                    height="40px"
                    width="359px"
                    alt="NSM logo"
                  />
                </a>
              </Link>
            </div>
            <div className={styles.footer_partner_r}>
              <Link href="https://helseatlas.no/">
                <a title="Link til Helseatlas">
                  <Image
                    src="/img/logos/Logo_atlas_hvit.png"
                    height="40px"
                    width="146px"
                    alt="Helseatlas logo"
                  />
                </a>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
