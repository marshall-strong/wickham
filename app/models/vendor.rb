class Vendor < ApplicationRecord
  has_many :products, class_name: :Product, foreign_key: "vendor_id"
end
