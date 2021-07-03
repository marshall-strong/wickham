# == Schema Information
#
# Table name: invoices
#
#  id                    :bigint           not null, primary key
#  bill_to               :string
#  csr                   :string
#  customer_number       :string
#  customer_order_number :string
#  invoice_date          :string
#  invoice_number        :string
#  order_date            :string
#  ordered_by            :string
#  release_number        :string
#  salesperson           :string
#  ship_date             :string
#  ship_to               :string
#  ship_via              :string
#  terms                 :string
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#
require "test_helper"

class InvoiceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
