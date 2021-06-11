export interface Film {
  adult: Boolean,
  backdrop_path: String,
  genre_ids: Number[],
  id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number
}

export interface FilmDetails {
  adult: Boolean,
  backdrop_path: String,
  belongs_to_collection?: {
    backdrop_path?: String,
    id: Number,
    name?: String,
    poster_path?: String
  },
  budget?: Number,
  genres?: Genre[],
  homepage?: String,
  id: Number,
  imdb_id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  popularity?: Number,
  poster_path?: String,
  production_companies: ProductionCompanies[],
  production_countries: ProductionCountries[],
  release_date: String,
  revenue: Number,
  spoken_languages?: Array<any>,
  status?: String,
  tagline?: String,
  title: String,
  video: Boolean,
  vote_average?: Number,
  vote_count?: Number
}

export interface Genre {
  id: Number,
  name: String
}

export interface ProductionCompanies {
  id?: Number,
  logo_path?: String,
  name?: String,
  origin_country?: String
}

export interface ProductionCountries {
  iso_3166_1?: String,
  name?: String
}
