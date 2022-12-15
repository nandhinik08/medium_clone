import { signInWithPopup } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db, provider } from "../firebase";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUser] = useState([]);
  const [posts, setPost] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setUser(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: { ...doc.data() },
          };
        })
      );
    };
    getUser();
  }, []);

  useEffect(() => {
    const getPost = async () => {
      const querySnapshot = await getDocs(collection(db, "articles"));
      setPost(
        querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              body: doc.data().body,
              brief: doc.data().brief,
              category: doc.data().category,
              postLength: doc.data().postLength,
              bannerImage: doc.data().bannerImage,
              title: doc.data().title,
              postedOn: doc.data().postedOn,
              author: doc.data().author,
            },
          };
        })
      );
    };
    getPost();
  }, []);

  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    const user = userData.user;
    setCurrentUser(user);
    addUserToFirebase(user);
  };

  const addUserToFirebase = async (user) => {
    console.log(user.email);
    await setDoc(doc(db, "users", user.email), {
      email: user.email,
      name: user.displayName,
      imageurl: user.photoURL,
      followerCount: 90,
    });
  };

  return (
    <MediumContext.Provider
      value={{ posts, users, handleUserAuth, currentUser }}
    >
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
