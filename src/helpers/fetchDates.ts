import { getRepoCommits } from "../api/apiClient";
import { v4 as uuidv4 } from 'uuid';

const REPO = "vite";
const OWNER = "vitejs";

type StyledData = {
  id: string;
  title: string;
  start: Date;
}[];

export async function fetchDates(reset?: boolean) {
  if (!localStorage.getItem("data")) {
    const commits = await getRepoCommits(OWNER, REPO);
    const acc: StyledData = [];

    commits.map((commit) => {
      const date = new Date(commit.commit.committer?.date!);
      const title = commit.commit?.message?.split(" ").slice(0, 3).join(" ");
      const id = uuidv4();

      if (
        !acc.some((obj) => obj.start.toDateString() === date.toDateString())
      ) {
        acc.push({
          id,
          title,
          start: date,
        });
      }
    });

    localStorage.setItem("data", JSON.stringify(acc));
    if (reset) window.location.href = "/";
  }
}
