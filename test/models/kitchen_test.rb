# == Schema Information
#
# Table name: kitchens
#
#  id          :bigint           not null, primary key
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  building_id :integer
#
require "test_helper"

class KitchenTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
