json.invoices do
  @invoices.each do |invoice|
    json.partial! 'api/v1/invoices/invoice', invoice: invoice
  end
end
