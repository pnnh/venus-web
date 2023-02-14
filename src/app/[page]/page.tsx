import React from "react";
import { LoadPictureList } from "../page";

export default async function Home({ params }: { params: { page: number } }) {
  console.debug("params22332", params)
  const page = Number(params.page)
  const piclist = await LoadPictureList(page)
  return <div>
    {piclist}
  </div>
}
