let baseUrl = "https://api.themoviedb.org/3";

export const API = {
  trendingMovie:
    baseUrl + "/discover/movie?api_key=3d39d6bfe362592e6aa293f01fbcf9b9&page=",
  trendingTvShow:
    baseUrl + "/discover/tv?api_key=3d39d6bfe362592e6aa293f01fbcf9b9&page=",
  movieDetailed: baseUrl + "/movie"
};
// https://api.themoviedb.org/3/discover/movie?api_key=3d39d6bfe362592e6aa293f01fbcf9b9
// https://api.themoviedb.org/3/movie/603692?api_key=3d39d6bfe362592e6aa293f01fbcf9b9
