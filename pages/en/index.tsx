import path from "path";
import styles from "../../src/styles/Home.module.css";
import Layout from "../../src/components/Layout";
import { AtlasLink } from "../../src/components/Btns/AtlasLink";
import { GetStaticProps } from "next";
import { getMDInfo } from "../../src/helpers/functions/markdownHelpers";

interface HomeProps {
  atlasInfo: {
    article: string;
    frontMatter: {
      shortTitle: string;
    };
  }[];
}

const Home: React.FC<HomeProps> = ({ atlasInfo }) => {
  const Links = atlasInfo.map((atlas) => (
    <AtlasLink
      key={atlas.article}
      linkTo={`en/${atlas.article}`}
      style={{ height: "200px" }}
    >
      <div>{atlas.frontMatter.shortTitle} </div>
    </AtlasLink>
  ));

  return (
    <Layout lang="en">
      <div className={styles.full_bleed}>
        <div className={styles.banner_article}>
          <div className={styles.banner_article__content}>
            <h1>Equitable health services – regardless of where you live?</h1>
            <p>
              The Norwegian healthcare atlases compares the population&apos;s
              use of health services using interactive maps, reports and fact
              sheets.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.full_bleed} ${styles.buttons_container}`}>
        <div className={`${styles.buttons}`}>
          <div className={styles.block_buttons}>{Links}</div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const atlasDir = path.join(process.cwd(), "_posts/en/tidligere_atlas");
  const atlasInfo = getMDInfo(atlasDir);

  return {
    props: {
      atlasInfo,
    },
  };
};

export default Home;
