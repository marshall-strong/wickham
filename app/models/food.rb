class Food < ApplicationRecord
  belongs_to :kitchen, class_name: :Kitchen, foreign_key: "kitchen_id"
  has_many :paper_products, class_name: :Product, foreign_key: "paper_product_id"
  has_many :recipe_ingredients, class_name: :Ingredient
end
