import { useState, useEffect,useContext } from "react";
import toastify from "../toastify/toastify";
import firebase from "./firebase";
import { AuthContext } from "../context/AuthContext";


// Blog Ekleme
export const addBlog = (info) => {
  const blogRef = firebase.database().ref("blogs");
  blogRef.push(info);
  toastify("Added Successfully")
};

// Firebasden blogları çekme
export const useFetch = () => {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const blogRef = firebase.database().ref("blogs");

    blogRef.on("value", (snapshot) => {
      const blogs = snapshot.val();

      const blogArray = [];
      for (let id in blogs) {
        blogArray.push({ id, ...blogs[id] });
      }

      setBlogList(blogArray);
      setIsLoading(false);
    });
   
  }, []);
  return { blogList, isLoading };
};


export const deleteHandler = (id) => {
    const blogRef = firebase.database().ref("blogs").child(id);
    blogRef.remove();
    toastify("Deeleted Successfully")
  };

  export const editHandler = (info) => {
    const blogRef = firebase.database().ref("blogs").child(info.id);

    blogRef.update(info);
    toastify("Edited Successfully")
  };


  //USER PROCESSES

  //Create User
  export const createUser = async (email, password, displayName) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          // var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // ..
        });
  
      const currentUser = firebase.auth().currentUser;
      await currentUser.updateProfile({ displayName });
      toastify("Registered Successfully")
      
    } catch (error) {
      alert(
        "There exists an account with this email. Please login with your password or continue with Google!"
      );
    };
    

  };

  //Sign In
  export const signIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        // var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        alert("The password is invalid or the user does not have a password!");
      });
      toastify("Login Successfully")
  };

  //SignOut
  export const signOut = () => {
    firebase.auth().signOut();
  };


  //User Observer
  export const userObserver = async (setCurrentUser) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });
  };

  //Google SignUp
  export const signUpProvider = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    firebase.auth().signInWithPopup(provider);
    toastify("Login Successfully")
  };

  //Forgot Password
  export const forgotPassword = (email) => {
  firebase.auth().sendPasswordResetEmail(email);

  alert("Please check your mail box!");
};
  