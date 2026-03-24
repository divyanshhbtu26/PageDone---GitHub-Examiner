from fastapi import APIRouter
from models.repo_model import RepoRequest
from utils.parser import get_owner_repo

from services.repo_service import get_repo_info
from services.contributor_service import get_contributors
from services.commit_service import get_commits
from services.activity_service import get_commit_activity
from services.language_service import get_languages
from services.insight_service import get_insights

router = APIRouter()

@router.post("/analyze-repo")
def analyze_repo(data: RepoRequest):
    owner, repo = get_owner_repo(data.repo_url)

    repo_info = get_repo_info(owner, repo)
    contributors = get_contributors(owner, repo)
    commits = get_commits(owner, repo)
    activity = get_commit_activity(owner, repo)
    languages = get_languages(owner, repo)
    insights = get_insights(contributors, activity)

    return {
        **repo_info,
        "contributors": contributors,
        "commits": commits,
        "commit_activity": activity,
        "languages": languages,
        "insights": insights
    }