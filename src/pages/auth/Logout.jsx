import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../utils/firebase-config";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";

export default function Logiut() {
  let navigate = useNavigate();
  async function handleSignout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => console.log("// Sign-out successful."))
      .catch((error) => console.log("// An error happened."));
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/");
  });
  return (
    <Component>
      <div>Go Start Page</div>
      <div>Go Home Page</div>
      <div>Go Last Page</div>
      <div>
        <button onClick={() => handleSignout()}>Logout</button>
      </div>
    </Component>
  );
}

let Component = styled.div`
  color: white;
`;
