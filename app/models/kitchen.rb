class Kitchen < ApplicationRecord
  belongs_to :building, class_name: :Building, foreign_key: "building_id"
  has_many :foods, class_name: :Food, foreign_key: "kitchen_id"
end
