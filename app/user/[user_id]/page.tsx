"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const router = useParams();
  return <p>User: {router.user_id}</p>;
}
