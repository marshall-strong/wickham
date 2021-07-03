class Product < ApplicationRecord
  belongs_to :food, class_name: "Food", foreign_key: "paper_product_id"
end
