# == Schema Information
#
# Table name: ingredients
#
#  id           :bigint           not null, primary key
#  cook_temp    :float
#  name         :string
#  quantity     :string
#  storage_temp :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require "test_helper"

class IngredientTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
