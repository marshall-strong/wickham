json.ncrItems do
  @ncr_items.each do |ncr_item|
    json.partial! 'api/v1/ncr_items/ncr_item', ncr_item: ncr_item
  end
end
