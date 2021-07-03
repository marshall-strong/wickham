# == Schema Information
#
# Table name: kitchens
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Kitchen < ApplicationRecord
  belongs_to :building, class_name: :Building, foreign_key: "building_id"
  has_many :prepared_foods, class_name: :Food, foreign_key: "prep_kitchen_id"
end
