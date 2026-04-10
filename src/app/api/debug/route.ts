import { NextResponse } from "next/server";
import { getBooks } from "@/sanity/queries";

export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  let books = null;
  let error = null;
  try {
    books = await getBooks();
  } catch (e) {
    error = String(e);
  }

  return NextResponse.json({
    projectId: projectId ? `${projectId.slice(0, 4)}...` : "NOT SET",
    dataset: dataset ?? "NOT SET",
    booksCount: books?.length ?? null,
    error,
  });
}
