import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>Oooppppss !!!!</h1>
            <h2>Something went wrong !!!</h2>

            <h3>
                🌋🌋  {err.status} : {err.statusText} 🌋🌋
            </h3>

            <h3>
                🥺🥺  {err.error.message}  🧞🧞🧞‍♂️
            </h3>
        </div>
    )
}

export default Error;