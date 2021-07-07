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
require "test_helper"

class RecipeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
