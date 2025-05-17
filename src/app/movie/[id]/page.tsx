import { fetchMovieDetails } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function MovieDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const movieId = parseInt(params.id);

  try {
    const movie = await fetchMovieDetails(movieId);

    return (
      <main className="p-6" dir="rtl">
        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded-xl w-full md:w-1/3 object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-600 mb-4">{movie.release_date}</p>
            <p className="mb-4">{movie.overview}</p>
            <p className="text-sm text-gray-700">
              امتیاز: {movie.vote_average} / 10
            </p>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
