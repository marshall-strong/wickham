# == Schema Information
#
# Table name: recipes
#
#  id         :bigint           not null, primary key
#  directions :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Recipe < ApplicationRecord
  belongs_to :prep_kitchen, class_name: :Kitchen, foreign_key: "prep_kitchen_id"
end
