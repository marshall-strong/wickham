class CreateInvoices < ActiveRecord::Migration[6.1]
  def change
    create_table :invoices do |t|
      t.string :invoice_date
      t.string :invoice_number
      t.string :bill_to
      t.string :ship_to
      t.string :customer_number
      t.string :customer_order_number
      t.string :release_number
      t.string :ordered_by
      t.string :salesperson
      t.string :csr
      t.string :ship_via
      t.string :terms
      t.string :ship_date
      t.string :order_date

      t.timestamps
    end
  end
end
