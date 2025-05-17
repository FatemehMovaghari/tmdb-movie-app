import { Movie, MovieListResponse } from "@/types/movie";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopularMovies(): Promise<Movie[]> {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  const data: MovieListResponse = await res.json();
  return data.results;
}

export async function fetchMovieDetails(id: number): Promise<Movie> {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const data: Movie = await res.json();
  return data;
}

export async function searchMovies(query: string): Promise<Movie[]> {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`
    );
    if (!res.ok) {
      throw new Error("Failed to search movies");
    }
    const data: MovieListResponse = await res.json();
    return data.results;
  }

  export interface Genre {
    id: number;
    name: string;
  }
  
  export async function fetchGenres(): Promise<Genre[]> {
    const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    if (!res.ok) {
      throw new Error("Failed to fetch genres");
    }
    const data = await res.json();
    return data.genres;
  }
  
