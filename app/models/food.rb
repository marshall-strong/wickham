# == Schema Information
#
# Table name: foods
#
#  id         :bigint           not null, primary key
#  directions :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Food < ApplicationRecord
end
