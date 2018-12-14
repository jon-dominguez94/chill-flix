class Profile < ApplicationRecord

  validates :username, :user_id, presence: true
  validates :username, uniqueness: { scope: :user_id }

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    
end
