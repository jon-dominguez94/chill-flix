# == Schema Information
#
# Table name: profiles
#
#  id         :bigint(8)        not null, primary key
#  username   :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Profile < ApplicationRecord

  validates :username, :user_id, presence: true
  validates :username, uniqueness: { scope: :user_id }

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    
end
