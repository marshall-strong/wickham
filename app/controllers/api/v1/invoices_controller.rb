class Api::V1::InvoicesController < ApiController
  # @route GET /api/v1/invoices
  def index
    @invoices = Invoice.all
    render 'api/v1/invoices/index'
  end

  # @route GET /api/v1/invoices/:invoice_id
  def show
    @invoice = Invoice.find(params[:invoice_id])
    render 'api/v1/invoices/show'
  end
end
