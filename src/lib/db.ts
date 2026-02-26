// src/lib/db.ts
import { ref, set, update, push, onValue, get, child } from "firebase/database";
import { database } from "./firebase";

// Helper to check database initialization
const checkDb = () => {
  if (!database) {
    throw new Error("Firebase Database is not initialized. Please check your configuration.");
  }
  return database;
};

// Write or replace user data
export const writeUserData = async (
  userId: string,
  name: string,
  email: string,
  imageUrl: string
): Promise<void> => {
  try {
    const db = checkDb();
    await set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl
    });
    console.log("Data written successfully!");
  } catch (error) {
    console.error("Write failed: ", error);
    throw error;
  }
};

// Update user email
export const updateEmail = async (userId: string, newEmail: string): Promise<void> => {
  try {
    const db = checkDb();
    const userRef = ref(db, 'users/' + userId);
    await update(userRef, {
      email: newEmail
    });
    console.log("User email updated successfully!");
  } catch (error) {
    console.error("Update failed: ", error);
    throw error;
  }
};

// Add a new post
export const writeNewPost = async (
  userId: string,
  username: string,
  title: string,
  body: string
): Promise<string | null> => {
  try {
    const db = checkDb();
    const postsRef = ref(db, 'posts');
    const newPostRef = push(postsRef); // Generate unique ID

    await set(newPostRef, {
      author: username,
      uid: userId,
      title: title,
      body: body,
      timestamp: Date.now()
    });

    console.log("New post created successfully! ID:", newPostRef.key);
    return newPostRef.key;
  } catch (error) {
    console.error("Post creation failed: ", error);
    throw error;
  }
};

// Listen for users data in real-time
export const listenForUsers = (callback: (data: any) => void): (() => void) => {
  try {
    const db = checkDb();
    const usersRef = ref(db, 'users');

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log("Realtime user data:", data);
        callback(data);
      } else {
        console.log("User data is empty.");
        callback(null);
      }
    }, (error) => {
      console.error("Read failed: ", error);
    });

    // Return unsubscribe function
    return () => unsubscribe();
  } catch (error) {
    console.error("Listener setup failed:", error);
    return () => {}; // Return no-op function
  }
};

// Read single user data once
export const readSingleUserData = async (userId: string): Promise<any> => {
  try {
    const db = checkDb();
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `users/${userId}`));

    if (snapshot.exists()) {
      console.log("Single user data:", snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Read failed: ", error);
    throw error;
  }
};
