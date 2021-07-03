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
end
