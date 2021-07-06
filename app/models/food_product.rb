# == Schema Information
#
# Table name: food_products
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class FoodProduct < ApplicationRecord
  belongs_to :product, class_name: :Product, foreign_key: "product_id"
  belongs_to :recipe, class_name: :Recipe, foreign_key: "recipe_id"
end
