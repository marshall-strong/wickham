json.buildings do
  @buildings.each do |building|
    json.set! building.id do
      json.id building.id
      json.name building.name
    end
  end
end

# json.array! @buildings, partial: "buildings/building", as: :building
