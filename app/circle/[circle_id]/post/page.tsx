"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const router = useParams();
  return <p>Circle: {router.circle_id}</p>;
}
