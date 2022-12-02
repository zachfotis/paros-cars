import { createContext, useEffect, useState } from 'react';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import Loader from '../components/Loader';
import useFirebase from '../hooks/useFirebase';
import { toast } from 'react-toastify';

const FirebaseContext = createContext(null);

export default FirebaseContext;

function FirebaseProvider({ children }) {
  const { isFirebaseInitialized } = useFirebase();
  const [isAnonymousAccount, setIsAnonymousAccount] = useState(false);
  const [isNormalAccount, setIsNormalAccount] = useState(false);
  const [user, setUser] = useState(null);

  // SIGN IN ANONYMOUSLY
  useEffect(() => {
    const anonymousSignIn = async () => {
      try {
        const auth = getAuth();
        await signInAnonymously(auth);
      } catch (error) {
        toast.error(error?.message || 'Something went wrong');
      }
    };
    // Create an anonymous account if:
    // 1.firebase is initialized, 2.no user, 3.no normal account
    if (isFirebaseInitialized && !user && !isNormalAccount) {
      anonymousSignIn();
    }
  }, [isFirebaseInitialized, user, isNormalAccount]);

  // ADD LISTENER TO AUTH STATE
  useEffect(() => {
    const auth = getAuth();

    const listener = (newUser) => {
      if (newUser) {
        setUser(newUser);
        if (newUser.isAnonymous) {
          setIsAnonymousAccount(true);
          setIsNormalAccount(false);
          toast.info('You are browsing as a guest!');
        } else {
          setIsAnonymousAccount(false);
          setIsNormalAccount(true);
          toast.success('You have signed in successfully!');
        }
      } else {
        setUser(null);
        setIsAnonymousAccount(false);
        setIsNormalAccount(false);
      }
    };

    onAuthStateChanged(auth, listener);
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        isAnonymousAccount,
        isNormalAccount,
        user,
      }}
    >
      {isFirebaseInitialized ? children : <Loader />}
    </FirebaseContext.Provider>
  );
}

export { FirebaseProvider };
