class Building < ApplicationRecord
  has_many :kitchens, class_name: :Kitchen, foreign_key: "building_id"
  has_many :recipes, through: :kitchens, source: :recipes
  has_many :paper_products, through: :recipes, source: :paper_products
  has_many :food_products, through: :recipes, source: :ingredients
end
