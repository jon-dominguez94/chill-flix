json.extract! movie, :id, :title, :description
json.thumbnail url_for(mvoie.thumbnail)
json.url url_for(movie.video)