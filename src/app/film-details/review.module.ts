export interface ReviewModule {
  author: String,
  author_details: AuthorDetails,
  content: String,
  created_at: Date,
  id: Number,
  updated_at: String,
  url: String
}

export interface AuthorDetails {
  avatar_path?: String,
  name?: String,
  rating?: Number,
  username?: String
}
