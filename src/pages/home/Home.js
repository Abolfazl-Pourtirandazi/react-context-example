import { useContext } from "react";
import { AuthContext } from "../../components/auth/AuthProvider";

const Home = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <>
          <div>{user.name}</div>
          <div>{user.family}</div>
        </>
      ) : (
        <div>You are not logged in</div>
      )}
      {user ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={login}>login</button>
      )}
    </>
  );
};

export default Home;
