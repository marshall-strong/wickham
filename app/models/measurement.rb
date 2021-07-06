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
class Measurement < ApplicationRecord
end
