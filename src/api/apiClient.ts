import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: `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`,
});

export const getRepoCommits = async (owner: string, repo: string) => {
  const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner,
    repo,
    per_page: 100,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return response.data;
};
