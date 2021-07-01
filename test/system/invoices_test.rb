require "application_system_test_case"

class InvoicesTest < ApplicationSystemTestCase
  setup do
    @invoice = invoices(:one)
  end

  test "visiting the index" do
    visit invoices_url
    assert_selector "h1", text: "Invoices"
  end

  test "creating a Invoice" do
    visit invoices_url
    click_on "New Invoice"

    fill_in "Bill to", with: @invoice.bill_to
    fill_in "Csr", with: @invoice.csr
    fill_in "Customer number", with: @invoice.customer_number
    fill_in "Customer order number", with: @invoice.customer_order_number
    fill_in "Invoice date", with: @invoice.invoice_date
    fill_in "Invoice number", with: @invoice.invoice_number
    fill_in "Order date", with: @invoice.order_date
    fill_in "Ordered by", with: @invoice.ordered_by
    fill_in "Release number", with: @invoice.release_number
    fill_in "Salesperson", with: @invoice.salesperson
    fill_in "Ship date", with: @invoice.ship_date
    fill_in "Ship to", with: @invoice.ship_to
    fill_in "Ship via", with: @invoice.ship_via
    fill_in "Terms", with: @invoice.terms
    click_on "Create Invoice"

    assert_text "Invoice was successfully created"
    click_on "Back"
  end

  test "updating a Invoice" do
    visit invoices_url
    click_on "Edit", match: :first

    fill_in "Bill to", with: @invoice.bill_to
    fill_in "Csr", with: @invoice.csr
    fill_in "Customer number", with: @invoice.customer_number
    fill_in "Customer order number", with: @invoice.customer_order_number
    fill_in "Invoice date", with: @invoice.invoice_date
    fill_in "Invoice number", with: @invoice.invoice_number
    fill_in "Order date", with: @invoice.order_date
    fill_in "Ordered by", with: @invoice.ordered_by
    fill_in "Release number", with: @invoice.release_number
    fill_in "Salesperson", with: @invoice.salesperson
    fill_in "Ship date", with: @invoice.ship_date
    fill_in "Ship to", with: @invoice.ship_to
    fill_in "Ship via", with: @invoice.ship_via
    fill_in "Terms", with: @invoice.terms
    click_on "Update Invoice"

    assert_text "Invoice was successfully updated"
    click_on "Back"
  end

  test "destroying a Invoice" do
    visit invoices_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Invoice was successfully destroyed"
  end
end
