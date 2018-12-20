# == Schema Information
#
# Table name: movies
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Movie < ApplicationRecord

  validates :title, :description, presence: true
  validates :title, uniqueness: true

  has_one_attached :thumbnail
  has_one_attached :video

  has_many :listings,
    primary_key: :id,
    foreign_key: :movie_id,
    class_name: :ListItem

end
