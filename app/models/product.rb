# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  description :string
#  ext_prc     :string
#  order_qty   :string
#  part_no     :string
#  ship_qty    :string
#  tax         :string
#  unit_price  :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
  belongs_to :food, class_name: "Food", foreign_key: "paper_product_id"
end
