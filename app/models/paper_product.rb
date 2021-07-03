# == Schema Information
#
# Table name: paper_products
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PaperProduct < ApplicationRecord
end
