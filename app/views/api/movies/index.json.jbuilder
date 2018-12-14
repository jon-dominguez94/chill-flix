@movies.each do |c_movie|
  json.set! c_movie.id do
    json.partial! "api/movie.json.jbuilder", movie: c_movie
  end
end