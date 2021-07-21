json.buildings do
  json.partial! 'api/v1/buildings/building', building: @building
end
