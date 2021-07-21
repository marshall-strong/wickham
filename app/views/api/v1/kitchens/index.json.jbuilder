json.kitchens do
  @kitchens.each do |kitchen|
    json.partial! 'api/v1/kitchens/kitchen', kitchen: kitchen
  end
end
