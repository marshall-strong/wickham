class Api::V1::VendorsController < ApiController
  # @route GET /api/v1/vendors
  def index
    @vendors = Vendor.all
    render 'api/v1/vendors/index'
  end
end
