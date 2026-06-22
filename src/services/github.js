export async function getRepos() {
  const res = await fetch('https://api.github.com/users/Christian0FS/repos?sort=updated&per_page=20')
  if (!res.ok) throw new Error('GitHub API error')
  return await res.json()
}

export async function getProfile() {
  const res = await fetch('https://api.github.com/users/Christian0FS')
  if (!res.ok) throw new Error('GitHub API error')
  return await res.json()
}
