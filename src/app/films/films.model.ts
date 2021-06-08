export interface Poster {
  height?: Number,
  width?: Number,
  url?: String,
  id?: String
}
export interface Character{
  character?: String,
  characterId?: String
}

export interface Principals {
  id?: String,
  legacyNameText?: String,
  name?: String,
  category?: String,
  characters?: String[],
  endYear?: Number,
  episodeCount?: Number,
  roles?: Character[],
  startYear?: Number,
  disambiguation?: String,
  billing?: Number
}

export interface Show {
  id: String,
  title: String,
  titleType: String,
  rank?: Number,
  actors?: String,
  image?: Poster,
  year?: Number,
  seriesEndYear?: Number,
  seriesStartYear?: Number,
  runningTimeInMinutes?: Number,
  numberOfEpisodes?: Number,
  nextEpisode?: String,
  principals?: Principals[]
}
