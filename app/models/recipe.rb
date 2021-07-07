# == Schema Information
#
# Table name: recipes
#
#  id              :bigint           not null, primary key
#  directions      :string
#  name            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  prep_kitchen_id :integer
#
class Recipe < ApplicationRecord
  belongs_to :prep_kitchen, class_name: :Kitchen, foreign_key: "prep_kitchen_id"
  has_many :paper_products, class_name: :PaperProduct, foreign_key: "recipe_id"
  has_many :ingredients, class_name: :FoodProduct, foreign_key: "recipe_id"
end
