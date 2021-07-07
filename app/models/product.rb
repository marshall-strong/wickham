# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  description :string
#  part_no     :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  vendor_id   :integer
#
class Product < ApplicationRecord
  belongs_to :vendor, class_name: :Vendor, foreign_key: "vendor_id"
  has_many :paper_products, class_name: :PaperProduct, foreign_key: "product_id"
  has_many :food_products, class_name: :FoodProduct, foreign_key: "product_id"
  has_many :paper_recipes, through: :paper_products, source: :recipe
  has_many :food_recipes, through: :food_products, source: :recipe
  def recipes
    self.paper_recipes + self.food_recipes
  end
end
