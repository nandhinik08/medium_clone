import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MediumContext } from "../context/MediumContext";
import { db } from "../firebase";

const styles = {
  wrapper: `w-[78rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] overflow-scroll`,
  title: `my-[2rem] font bold text-3xl`,
  smallField: `w-full flex justify-between gap-[1rem]`,
  fieldTitle: `flex-1 text-end`,
  inputContainer: `flex-[5] h-min border-2 border-#787878`,
  inputField: `w-full border-0 outline-none bg-transparent`,
  accentedButton: `bg-black text-white py-1 px-6 rounded-full`,
};

const PostModal = () => {
  const router = useRouter();
  const { currentUser } = useContext(MediumContext);
  const [title, setTitle] = useState("");
  const [brief, setbrief] = useState("");
  const [category, setCategory] = useState("");
  const [postLength, setPostLength] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [body, setBody] = useState("");

  const addPostToFirebase = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "articles"), {
      body: body,
      brief: brief,
      category: category,
      postLength: Number(postLength),
      bannerImage: bannerImage,
      title: title,
      postedOn: serverTimestamp(),
      author: currentUser.email,
    });
    router.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a New Post</div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={brief}
            onChange={(event) => setbrief(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image URL</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={bannerImage}
            onChange={(event) => setBannerImage(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Estimated Read Length(in minutes)
        </span>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            type="text"
            value={postLength}
            onChange={(event) => setPostLength(event.target.value)}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Article Text</span>
        <span className={styles.inputContainer}>
          <textarea
            className={styles.inputField}
            type="text"
            rows={12}
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </span>
      </div>
      <button onClick={addPostToFirebase} className={styles.accentedButton}>
        Submit
      </button>
    </div>
  );
};

export default PostModal;
