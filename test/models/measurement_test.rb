# == Schema Information
#
# Table name: measurements
#
#  id         :bigint           not null, primary key
#  quantity   :float
#  unit       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require "test_helper"

class MeasurementTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
