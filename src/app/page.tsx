import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import GenreFilter from "@/components/GenreFilter";
import {
  fetchGenres,
  fetchPopularMovies,
  searchMovies,
  Genre,
} from "@/lib/api";
import { Movie } from "@/types/movie";

type PageProps = {
  searchParams?: {
    query?: string;
    genre?: string;
  };
};

type Props = {
  searchParams: { query?: string; genre?: string };
};

export default async function HomePage({ searchParams }: Props) {
  const genres = await fetchGenres();
  let movies: Movie[];

  if (searchParams.query) {
    movies = await searchMovies(searchParams.query);
  } else {
    movies = await fetchPopularMovies();
  }

  const genreId = searchParams.genre
    ? parseInt(searchParams.genre)
    : undefined;

  const filtered = genreId
    ? movies.filter((movie) =>
        movie.genre_ids?.includes(genreId)
      )
    : movies;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">🎬 TMDB Movie App</h1>
      <SearchBar />
      <GenreFilter genres={genres} />
      {filtered.length === 0 ? (
        <p className="text-gray-500">هیچ فیلمی یافت نشد.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
