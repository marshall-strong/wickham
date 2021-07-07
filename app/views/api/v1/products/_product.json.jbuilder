json.extract! product, :id, :order_qty, :ship_qty, :description, :part_no, :tax, :unit_price, :ext_prc, :created_at, :updated_at
json.url product_url(product, format: :json)
