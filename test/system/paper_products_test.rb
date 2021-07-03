require "application_system_test_case"

class PaperProductsTest < ApplicationSystemTestCase
  setup do
    @paper_product = paper_products(:one)
  end

  test "visiting the index" do
    visit paper_products_url
    assert_selector "h1", text: "Paper Products"
  end

  test "creating a Paper product" do
    visit paper_products_url
    click_on "New Paper Product"

    fill_in "Name", with: @paper_product.name
    click_on "Create Paper product"

    assert_text "Paper product was successfully created"
    click_on "Back"
  end

  test "updating a Paper product" do
    visit paper_products_url
    click_on "Edit", match: :first

    fill_in "Name", with: @paper_product.name
    click_on "Update Paper product"

    assert_text "Paper product was successfully updated"
    click_on "Back"
  end

  test "destroying a Paper product" do
    visit paper_products_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Paper product was successfully destroyed"
  end
end
