# == Schema Information
#
# Table name: lists
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :list_items,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :ListItem
  
end
