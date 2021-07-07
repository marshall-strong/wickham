class NcrItem < ApplicationRecord
  belongs_to :ncr_category, class_name: "ncr_category", foreign_key: "ncr_category_id"
end
