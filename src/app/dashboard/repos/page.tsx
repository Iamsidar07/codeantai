import React from 'react'
import { Repositories } from './page-client'

interface Props {
  searchParams: Promise<{
    username?: string
    repo?: string
  }>
}
export interface Repository {
  id: string;
  name: string
  description: string
  updatedAt: string
  size: number
  language: string
  visibility: 'public' | 'private'
  url: string
}

export const metadata = {
  title: "All Repositories",
  description: "All Repositories",
}
async function fetchRepos(username: string) {
  try {
    if (!username) return []
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
    const data = await res.json()
    console.log("data", data)
    return data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      updatedAt: repo.updated_at,
      size: repo.size,
      language: repo.language,
      visibility: repo.visibility,
      url: repo.url,
    })) as Repository[]
  } catch (error) {
    console.log(error)
    return []

  }

}

export default async function AllRepos({ searchParams }: Props) {
  const { username = "", repo = "" } = await searchParams
  const repos = await fetchRepos(username)
  return (
    <Repositories data={repos.filter((r) => r.name.toLocaleLowerCase().includes(repo.toLowerCase()))} />
  )
}
