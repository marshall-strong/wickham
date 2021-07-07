# == Schema Information
#
# Table name: food_products
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :integer
#  recipe_id  :integer
#
require "test_helper"

class FoodProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
