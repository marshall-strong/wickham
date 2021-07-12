json.extract! ncr_item, :id, :category_id, :item_name, :is_active_at_pos, :is_active_online, :description, :sales_price, :created_at, :updated_at
json.url ncr_item_url(ncr_item, format: :json)
