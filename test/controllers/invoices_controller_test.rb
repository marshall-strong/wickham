require "test_helper"

class InvoicesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @invoice = invoices(:one)
  end

  test "should get index" do
    get invoices_url
    assert_response :success
  end

  test "should get new" do
    get new_invoice_url
    assert_response :success
  end

  test "should create invoice" do
    assert_difference('Invoice.count') do
      post invoices_url, params: { invoice: { bill_to: @invoice.bill_to, csr: @invoice.csr, customer_number: @invoice.customer_number, customer_order_number: @invoice.customer_order_number, invoice_date: @invoice.invoice_date, invoice_number: @invoice.invoice_number, order_date: @invoice.order_date, ordered_by: @invoice.ordered_by, release_number: @invoice.release_number, salesperson: @invoice.salesperson, ship_date: @invoice.ship_date, ship_to: @invoice.ship_to, ship_via: @invoice.ship_via, terms: @invoice.terms } }
    end

    assert_redirected_to invoice_url(Invoice.last)
  end

  test "should show invoice" do
    get invoice_url(@invoice)
    assert_response :success
  end

  test "should get edit" do
    get edit_invoice_url(@invoice)
    assert_response :success
  end

  test "should update invoice" do
    patch invoice_url(@invoice), params: { invoice: { bill_to: @invoice.bill_to, csr: @invoice.csr, customer_number: @invoice.customer_number, customer_order_number: @invoice.customer_order_number, invoice_date: @invoice.invoice_date, invoice_number: @invoice.invoice_number, order_date: @invoice.order_date, ordered_by: @invoice.ordered_by, release_number: @invoice.release_number, salesperson: @invoice.salesperson, ship_date: @invoice.ship_date, ship_to: @invoice.ship_to, ship_via: @invoice.ship_via, terms: @invoice.terms } }
    assert_redirected_to invoice_url(@invoice)
  end

  test "should destroy invoice" do
    assert_difference('Invoice.count', -1) do
      delete invoice_url(@invoice)
    end

    assert_redirected_to invoices_url
  end
end
