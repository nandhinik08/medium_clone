import Image from "next/image";
import { AiFillAlipayCircle } from "react-icons/ai";
import Qazi from "../static/qazi.jpg";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmark } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Banner from "../static/banner.png";

const styles = {
  wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
  content: `h-screen w-full p-[2rem]`,
  postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem]`,
  authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full oveflow-hidden`,
  column: `flex-1 flex flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem]`,
  image: `object-cover`,
  articleMainContainer: `flex flex-col gap-[1rem]`,
  bannerContainer: `h-[18rem] w-full grid center overflow-hidde mb-[2rem]`,
  title: `font-bold text-3xl`,
  subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929]`,
  articleText: `font-mediumSerif text-[1.4rem] text-[#292929]`,
};
const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                className={`object-Cover`}
                src={Qazi}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div>Nadhini</div>
              <div className={styles.postDetails}>
                <span>June 15 . 7 min read .</span>
                <sapn className={styles.listenButton}>
                  <AiFillAlipayCircle />
                  Listen
                </sapn>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmark />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={Banner}
              height={100}
              width={100}
            />
          </div>
          <h1 className={styles.title}>
            7 Free Tools That Will Make You More Productive In 2022
          </h1>
          <h4 className={styles.subtitle}>
            <div>Nandhini, June 15,2022</div>
            <div>Brief:Productivity is a skill that can be learned.</div>
          </h4>
          <div className={styles.articleText}>
            As I was thinking about the advice that I want to give, I realized
            that I don’t have much advice for college itself. My college
            experience was different than most people’s. I took a gap year after
            high school to do missionary work. Then I went to a traditional
            college for one year. After trying traditional school and hating it,
            I moved to Mexico. Then I did two more years at two different
            universities in Mexico. Finally, while working two jobs and being a
            brand new dad, I finished up my schooling online.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;