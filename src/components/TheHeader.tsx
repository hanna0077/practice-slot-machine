import InfoBtnIcon from "@assets/icon_info.png";
import RankBtnIcon from "@assets/icon_rank.png";
import Ruby from "@assets/ruby.png";
import styles from "./components.module.scss";

const ruby = 1000;
export default function TheHeader() {
  return (
    <header>
      <div className={styles.rubyInventory}>
        <img src={Ruby} alt="ruby" />
        <h5>{ruby.toLocaleString()}</h5>
      </div>
      <div className="logo">PIXELS slot machine</div>
      <nav>
        <a href="/">
          <img src={RankBtnIcon} alt="Rank Icon" />
        </a>
        <a href="/info">
          <img src={InfoBtnIcon} alt="Info Icon" />
        </a>
      </nav>
    </header>
  );
}
