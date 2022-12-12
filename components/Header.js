import Image from "next/image";
import Logo from "../static/logo.png";

const styles = {
  wrapper: `flex justify-center gap-10 p-5 bg-[#FCC017]`,
  content: `max-w-7xl flex-1 flex justify-between gap-10`,
  logoContainer: `flex item-center flex-start`,
  logo: `cursor-pointer object-contain`,
  bannerNav: `flex cursor-pointer item-center space-x-5`,
  accentedButton: `bg-black text-white py-1 px-6 rounded-full`,
};

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            alt="Logo"
            className={styles.logo}
            src={Logo}
            height={10}
            width={200}
          />
        </div>
        <div className={styles.bannerNav}>
          <div>Our Story</div>
          <div>Memership</div>
          <div>Sign in</div>
          <div className={styles.accentedButton} style={{ height: "35px" }}>
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
