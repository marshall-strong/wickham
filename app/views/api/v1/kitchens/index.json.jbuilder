json.kitchens do
  @kitchens.each do |kitchen|
    json.set! kitchen.id do
      json.id kitchen.id
      json.name kitchen.name
      json.buildingId kitchen.building_id
    end
  end
end

# json.array! @kitchens, partial: "kitchens/kitchen", as: :kitchen
