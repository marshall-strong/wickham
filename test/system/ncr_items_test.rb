require "application_system_test_case"

class NcrItemsTest < ApplicationSystemTestCase
  setup do
    @ncr_item = ncr_items(:one)
  end

  test "visiting the index" do
    visit ncr_items_url
    assert_selector "h1", text: "Ncr Items"
  end

  test "creating a Ncr item" do
    visit ncr_items_url
    click_on "New Ncr Item"

    fill_in "Category", with: @ncr_item.category_id
    fill_in "Description", with: @ncr_item.description
    check "Is active at pos" if @ncr_item.is_active_at_pos
    check "Is active online" if @ncr_item.is_active_online
    fill_in "Item name", with: @ncr_item.item_name
    fill_in "Sales price", with: @ncr_item.sales_price
    click_on "Create Ncr item"

    assert_text "Ncr item was successfully created"
    click_on "Back"
  end

  test "updating a Ncr item" do
    visit ncr_items_url
    click_on "Edit", match: :first

    fill_in "Category", with: @ncr_item.category_id
    fill_in "Description", with: @ncr_item.description
    check "Is active at pos" if @ncr_item.is_active_at_pos
    check "Is active online" if @ncr_item.is_active_online
    fill_in "Item name", with: @ncr_item.item_name
    fill_in "Sales price", with: @ncr_item.sales_price
    click_on "Update Ncr item"

    assert_text "Ncr item was successfully updated"
    click_on "Back"
  end

  test "destroying a Ncr item" do
    visit ncr_items_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ncr item was successfully destroyed"
  end
end
