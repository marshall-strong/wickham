class Building < ApplicationRecord
  has_many :kitchens, class_name: :Kitchen, foreign_key: "building_id"
end
