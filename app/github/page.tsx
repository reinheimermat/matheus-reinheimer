'use client'

import {useGitHubAutomatedRepos} from "github-automated-repos";
import Image from "next/image";

export default function Github() {
    const data = useGitHubAutomatedRepos("reinheimermat", "deploy");
    const projectsRepotitories = data.filter((repo) => repo.name !== "reinheimermat");

    console.log(data);
    return (
        <div>
            {projectsRepotitories.map((repo) => (
                <div key={repo.id}>
                    <h1>{repo.name}</h1>
                    <p>{repo.description}</p>
                    <Image
                        src={repo.banner}
                        alt={repo.name}
                        className="w-auto h-auto"
                        width={100}
                        height={100}
                    />
                </div>
            ))}
        </div>
    )
}