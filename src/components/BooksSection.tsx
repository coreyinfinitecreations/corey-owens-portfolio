import { getBooks } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import Image from "next/image";

type Book = {
  title: string;
  author: string;
  coverImage?: { asset: { _ref: string } };
  status: "reading" | "finished" | "want-to-read";
  review?: string;
  rating?: number;
};

const statusLabels: Record<string, string> = {
  reading: "Currently Reading",
  finished: "Finished",
  "want-to-read": "Want to Read",
};

const statusColors: Record<string, string> = {
  reading: "bg-green-500/20 text-green-400",
  finished: "bg-accent/20 text-accent",
  "want-to-read": "bg-yellow-500/20 text-yellow-400",
};

const fallbackBooks: Book[] = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    status: "finished",
    review: "A must-read for any developer. Changed how I think about writing maintainable code.",
    rating: 5,
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    status: "finished",
    review: "Full of practical advice that stands the test of time. Highly recommend.",
    rating: 5,
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    status: "reading",
    review: "Deep dive into distributed systems and data architecture. Dense but incredibly valuable.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    status: "finished",
    review: "Great framework for building better habits. Applies well to coding discipline too.",
    rating: 4,
  },
];

export default async function BooksSection() {
  let books: Book[] = [];
  try {
    books = await getBooks();
  } catch {
    /* Sanity not configured */
  }
  if (!books || books.length === 0) books = fallbackBooks;

  return (
    <section id="books" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Books
        </h2>
        <div className="mx-auto mb-8 h-1 w-16 rounded bg-accent" />
        <p className="mx-auto mb-10 max-w-xl text-center text-muted">
          What I&apos;m reading and books that have shaped my thinking as a developer.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.title}
              className="flex flex-col overflow-hidden rounded-xl border border-card-border bg-card-bg"
            >
              {/* Cover */}
              <div className="relative flex aspect-[2/3] items-center justify-center bg-background">
                {book.coverImage ? (
                  <Image
                    src={urlFor(book.coverImage).width(300).height(450).url()}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                    </svg>
                    <span className="text-xs text-muted">{book.title}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-4">
                <span
                  className={`mb-2 inline-block self-start rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[book.status] || ""}`}
                >
                  {statusLabels[book.status]}
                </span>
                <h3 className="mb-1 text-sm font-semibold leading-snug">{book.title}</h3>
                <p className="mb-2 text-xs text-muted">{book.author}</p>

                {book.rating && (
                  <div className="mb-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill={i < book.rating! ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        className={i < book.rating! ? "text-yellow-400" : "text-muted/40"}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                )}

                {book.review && (
                  <p className="text-xs leading-relaxed text-muted">{book.review}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
