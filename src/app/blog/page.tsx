import { redirect } from "next/navigation";

export default function BlogHome() {
  redirect("/blog/pages/1");
  return null;
}
