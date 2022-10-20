import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos

const repository = {
    name: 'unform',
    description: 'forms in react',
    link: 'http://www.github.com'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )

}