class NcrCategory < ApplicationRecord
  has_many :ncr_items, class_name: "ncr_item", foreign_key: "ncr_category_id"
  belongs_to :ncr_department, class_name: "ncr_department", foreign_key: "ncr_department_id"
end
