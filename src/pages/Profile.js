import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Grid } from "@mui/material";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  // const {id} = useParams();
  // const item = new URLSearchParams(useLocation().search)
  return (
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-center">
        <h1>{currentUser?.displayName}</h1>
      </div>

      <div class="d-flex justify-content-center">
        <h2>{currentUser?.email}</h2>
      </div>
    </div>
  );
};

export default Profile;
