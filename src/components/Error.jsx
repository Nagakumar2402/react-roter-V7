import { useNavigate, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error">
      <h2>error occurred</h2>
      <p>{error.message}</p>
      <button onClick={() => navigate("/")}>Home page</button>
    </div>
  );
};

export default Error;
