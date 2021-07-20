json.vendors do
  @vendors.each do |vendor|
    json.partial! 'api/v1/vendors/vendor', vendor: vendor
  end
end
