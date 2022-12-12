import Image from "next/image";
import bannerImg from "../static/banner.png";

const styles = {
  accentedButton: `bg-black text-white py-1 px-5 rounded-full`,
  content: `max-w-7xl flex-1 flex items-center justify-between`,
  wrapper: `h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black `,
};
const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-5 mb-4 px-10 flex-[3]">
          <h1 className="max-w-xl text-[6rem]">Stay Curious.</h1>
          <h3 className="text-2xl">
            Discover stories, thinking, and expertise from wirters on any topic.
          </h3>
          <div className={styles.accentedButton} style={{ width: "140px" }}>
            Start Reading
          </div>
        </div>
        <div>
          <Image
            alt="Banner"
            className="hidden h-32 md:inline-flex object-content flex-1"
            src={bannerImg}
            height={500}
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
