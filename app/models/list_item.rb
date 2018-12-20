class ListItem < ApplicationRecord

  belongs_to :list,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :List

  belongs_to :movie,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :Movie

  
end
