# == Schema Information
#
# Table name: kitchens
#
#  id          :bigint           not null, primary key
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  building_id :integer
#
class Kitchen < ApplicationRecord
  belongs_to :building, class_name: :Building, foreign_key: "building_id"
  has_many :recipes, class_name: :Recipe, foreign_key: "prep_kitchen_id"
end
