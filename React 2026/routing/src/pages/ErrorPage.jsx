import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError(); // Object
  console.log(error)

    const navigate = useNavigate() // Funtion
    
    function handleGoBack(){
        navigate(-2)
    }

  return (
    <>
      <h1>{error.data}</h1>
      <h1>{error.status}</h1>
      <h2>{error.statusText}</h2>
      <button onClick={handleGoBack}>GO BACK</button>
    </>
  );
}

export default ErrorPage;
