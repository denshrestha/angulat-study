export interface Poster {
  height: Number,
  width: Number,
  imageUrl: String
}

export class Show {
  constructor(
    public id: String,
    public label: String,
    public type: String,
    public rank: Number,
    public actors: String,
    public year: Number,
    public years: String,
    public image: Poster
  ) {}
}
