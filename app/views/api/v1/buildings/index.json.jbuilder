json.buildings do
  @buildings.each do |building|
    json.partial! 'api/v1/buildings/building', building: building
  end
end
