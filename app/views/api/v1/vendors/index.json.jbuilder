json.vendors do
  @vendors.each do |vendor|
    json.set! vendor.id do
      json.id vendor.id
      json.name vendor.name
    end
  end
end

# json.array! @vendors, partial: "vendors/vendor", as: :vendor
