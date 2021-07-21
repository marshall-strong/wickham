json.invoices do
  json.partial! 'api/v1/invoices/invoice', invoice: @invoice
end
