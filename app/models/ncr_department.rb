class NcrDepartment < ApplicationRecord
  has_many :ncr_categories, class_name: :NcrCategory, foreign_key: "ncr_department_id"
end
