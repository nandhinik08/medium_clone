import Image from "next/image";
import bannerImg from "../static/banner.png";

const styles = {
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
  content: "max-w-7xl flex-1 flex justify-between gap-10",
};
const Banner = () => {
  return (
    <div className={styles.content}>
      <div className="space-y-5">
        <h1 className="max-w-xl text-[6rem]">Stay Curious.</h1>;
        <h3 className="text-2xl">
          Discover stories, thinking, and expertise from wirters on any topic.
        </h3>
        <div className={styles.accentedButton}>Start Reading</div>
      </div>
      <div>
        <Image
          className={styles.logo}
          src={bannerImg}
          height={40}
          width={200}
        />
      </div>
    </div>
  );
};

export default Banner;
