import Image from "next/image";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import Logo from "../static/logo.png";
import Modal from "react-modal";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import PostModal from "./PostModal";

Modal.setAppElement("#__next");

const customstyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%,-50%)",
    backgroundcolor: "#fff",
    padding: 0,
    border: "none",
  },
  overlay: { backgroundcolor: "rgba(10,11,13,0.75)" },
};

const styles = {
  wrapper: `flex justify-center gap-10 p-5 bg-[#FCC017]`,
  content: `max-w-7xl flex-1 flex justify-between gap-10`,
  logoContainer: `flex item-center flex-start`,
  logo: `cursor-pointer object-contain`,
  bannerNav: `flex cursor-pointer item-center space-x-5`,
  accentedButton: `bg-black text-white py-1 px-6 rounded-full`,
};

const Header = () => {
  const router = useRouter();

  const { currentUser, handleUserAuth } = useContext(MediumContext);
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
        {currentUser ? (
          <div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Memership</div>
            <Link href={"/?addNew=1"}>
              <div className={styles.accentedButton} style={{ height: "35px" }}>
                write
              </div>
            </Link>
            <div className={styles.accentedButton} style={{ height: "35px" }}>
              Get unlimited access
            </div>
          </div>
        ) : (
          <div className={styles.bannerNav}>
            <div>Our Story</div>
            <div>Memership</div>
            <div onClick={handleUserAuth}>Sign in</div>
            <div className={styles.accentedButton} style={{ height: "35px" }}>
              Get Started
            </div>
          </div>
        )}
      </div>
      <Modal
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() => router.push("/")}
        style={customstyle}
      >
        <PostModal />
      </Modal>
    </div>
  );
};

export default Header;
