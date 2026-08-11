import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setProjectsFromApi } from "../store/slices/projectsSlice";

function ApiTest() {

    const dispatch = useDispatch();

    const users = useSelector(
        (state) => state.projects.items
    );

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function getUsers() {

            try {

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();

                dispatch(setProjectsFromApi(data));

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);

            }
        }

        getUsers();

    }, [dispatch]);


    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    return (
        <div className="section">

            <h2>Users from API</h2>

            {users.map((user) => (

                <div key={user.id}>

                    <h3>{user.name}</h3>

                    <p>{user.email}</p>

                </div>

            ))}

        </div>
    );
}

export default ApiTest;