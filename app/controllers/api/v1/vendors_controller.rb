class Api::V1::VendorsController < ApiController
  # @route GET /api/v1/vendors
  def index
    @vendors = Vendor.all
    render 'api/v1/vendors/index'
  end

  # @route GET /api/v1/vendors/:vendor_id
  def show
    @vendor = Vendor.find(params[:vendor_id])
    render 'api/v1/vendors/show'
  end
end
