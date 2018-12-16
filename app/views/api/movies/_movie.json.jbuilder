json.extract! movie, :id, :title, :description
json.thumbnail url_for(movie.thumbnail)
json.url url_for(movie.video)
