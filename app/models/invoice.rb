class Invoice < ApplicationRecord
  belongs_to :vendor, class_name: :Vendor, foreign_key: "vendor_id"
end
