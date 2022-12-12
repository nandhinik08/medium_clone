import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUser] = useState([]);
  const [posts, setPost] = useState([]);

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

  return (
    <MediumContext.Provider value={{ posts, users }}>
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
