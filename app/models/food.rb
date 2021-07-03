# == Schema Information
#
# Table name: foods
#
#  id         :bigint           not null, primary key
#  directions :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Food < ApplicationRecord
  belongs_to :kitchen, class_name: :Kitchen, foreign_key: "kitchen_id"
  has_many :paper_products, class_name: :Product, foreign_key: "paper_product_id"
  has_many :recipe_ingredients, class_name: :Ingredient
end
