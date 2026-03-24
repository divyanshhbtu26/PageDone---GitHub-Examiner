import requests
from config.settings import headers

BASE_URL = "https://api.github.com"

def get_commit_details(owner, repo, sha):
    url = f"{BASE_URL}/repos/{owner}/{repo}/commits/{sha}"
    res = requests.get(url, headers=headers)
    data = res.json()

    return {
        "additions": data.get("stats", {}).get("additions", 0),
        "deletions": data.get("stats", {}).get("deletions", 0),
        "files_changed": len(data.get("files", []))
    }

def get_commits(owner, repo):
    url = f"{BASE_URL}/repos/{owner}/{repo}/commits"
    res = requests.get(url, headers=headers)
    data = res.json()

    result = []

    for c in data[:50]:  # limit for safety
        sha = c.get("sha")
        details = get_commit_details(owner, repo, sha)

        result.append({
            "message": c.get("commit", {}).get("message"),
            "author": c.get("commit", {}).get("author", {}).get("name"),
            "date": c.get("commit", {}).get("author", {}).get("date"),
            "additions": details["additions"],
            "deletions": details["deletions"],
            "files_changed": details["files_changed"]
        })

    return result