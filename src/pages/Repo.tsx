
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom"
import { Repository } from "./Repos";

export function Repo() {

    const params = useParams()

    const currentRepository = params['*'] as string;

    const queryClient = useQueryClient()



    async function handleChangeRepositoryDescription() {
        await queryClient.invalidateQueries(['repos'])

        const previewsRepos = queryClient.getQueryData<Repository[]>('repos')

        if (previewsRepos) {
            const nextRepos = previewsRepos.map(repo => {
                if (repo.full_name === currentRepository) {
                    return { ...repo, description: 'Testando' }
                }
                return repo
            })

            queryClient.setQueriesData('repos', nextRepos)
        }

        


    }


    return (<div>
        <h1>{currentRepository}</h1>
        <button onClick={handleChangeRepositoryDescription}>Alternar</button>
    </div>)
}