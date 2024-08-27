import { IFooter } from "./Footer.interface";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiNotion } from "react-icons/si";
import styles from "./Footer.module.scss";
import Link from "next/link";
import PATH from "@/constants/path";

const VFooter: React.FC<IFooter.IVProps> = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <Link href={PATH.GITHUB} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <FiGithub size={17} />
          </a>
        </Link>
        <Link href={PATH.NOTION} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <SiNotion size={17} />
          </a>
        </Link>
        <Link href={PATH.LINKEDIN} passHref legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={17} />
          </a>
        </Link>
      </div>
      <p>Copyright © 2024 savinqkr</p>
    </footer>
  );
};

export default VFooter;
