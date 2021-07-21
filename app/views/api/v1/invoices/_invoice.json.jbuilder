json.set! invoice.id do
  json.extract! invoice, :id, :invoice_date, :invoice_number, :bill_to, :ship_to, :customer_number, :customer_order_number, :release_number, :ordered_by, :salesperson, :csr, :ship_via, :terms, :ship_date, :order_date, :created_at, :updated_at
end
