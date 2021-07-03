require "application_system_test_case"

class FoodProductsTest < ApplicationSystemTestCase
  setup do
    @food_product = food_products(:one)
  end

  test "visiting the index" do
    visit food_products_url
    assert_selector "h1", text: "Food Products"
  end

  test "creating a Food product" do
    visit food_products_url
    click_on "New Food Product"

    fill_in "Name", with: @food_product.name
    click_on "Create Food product"

    assert_text "Food product was successfully created"
    click_on "Back"
  end

  test "updating a Food product" do
    visit food_products_url
    click_on "Edit", match: :first

    fill_in "Name", with: @food_product.name
    click_on "Update Food product"

    assert_text "Food product was successfully updated"
    click_on "Back"
  end

  test "destroying a Food product" do
    visit food_products_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Food product was successfully destroyed"
  end
end
