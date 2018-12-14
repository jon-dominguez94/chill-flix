class Movie < ApplicationRecord

  validates :title, :description, presence: true
  validates :title, uniqueness: true

  has_one_attached :thumbnail
  has_one_attached :video
end
