# == Schema Information
#
# Table name: buildings
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Building < ApplicationRecord
end
