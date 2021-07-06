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
require "test_helper"

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
