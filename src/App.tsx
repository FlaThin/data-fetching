import { useFetch } from "./hooks/useFetch";

type Repository = {
    full_name: string;
    description: string;
}

function App() {

    const { data: respositories, isFetching } = useFetch<Repository[]>("https://api.github.com/users/FlaThin/repos");
    
    return (
        <ul>
            { isFetching && <p>Carregando...</p>}
            {respositories?.map(repo => {
                return (
                    <li key={repo.full_name}>
                        <strong>{repo.full_name}</strong>
                        <p>{repo.description}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default App
