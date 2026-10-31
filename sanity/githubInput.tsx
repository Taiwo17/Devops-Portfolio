import { useState } from "react";
import { type StringInputProps, useClient, useFormValue } from "sanity";
// Adds a "Fill from GitHub" button under the repo URL. Fills only EMPTY fields, as a draft to review.
export function GithubInput(props: StringInputProps) {
  const client = useClient({ apiVersion: "2024-01-01" });
  const id = useFormValue(["_id"]) as string;
  const [msg, setMsg] = useState("");
  const run = async () => {
    const m = String(props.value ?? "").match(/github\.com\/([^/]+)\/([^/#?]+)/);
    if (!m) return setMsg("Paste a full github.com repository URL first.");
    const res = await fetch(`https://api.github.com/repos/${m[1]}/${m[2].replace(/\.git$/, "")}`);
    if (!res.ok) return setMsg("Repository not found, or it is private.");
    const d = await res.json();
    const tags = [...(d.topics ?? []), d.language].filter(Boolean);
    await client.createIfNotExists({ _id: id, _type: "project" });
    await client.patch(id).setIfMissing({ title: d.name, summary: d.description ?? "", tags }).commit();
    setMsg("Draft filled. Review it and add your highlights before publishing.");
  };
  return (<div>{props.renderDefault(props)}<button type="button" onClick={run} style={{ marginTop: 8 }}>Fill from GitHub</button><p>{msg}</p></div>);
}
