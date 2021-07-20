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

    fill_in "Available for sale on pos", with: @ncr_item.available_for_sale_on_pos
    fill_in "Available for sale online", with: @ncr_item.available_for_sale_online
    fill_in "Barcode", with: @ncr_item.barcode
    fill_in "Category", with: @ncr_item.category
    fill_in "Description", with: @ncr_item.description
    fill_in "External", with: @ncr_item.external_id
    fill_in "Item name", with: @ncr_item.item_name
    fill_in "Modified by 1", with: @ncr_item.modified_by_1
    fill_in "Modified by 2", with: @ncr_item.modified_by_2
    fill_in "Modified by 3", with: @ncr_item.modified_by_3
    fill_in "Modified by 4", with: @ncr_item.modified_by_4
    fill_in "Modified by 5", with: @ncr_item.modified_by_5
    fill_in "Modifier group 1 external", with: @ncr_item.modifier_group_1_external_id
    fill_in "Modifier group 2 external", with: @ncr_item.modifier_group_2_external_id
    fill_in "Modifier group 3 external", with: @ncr_item.modifier_group_3_external_id
    fill_in "Modifier group 4 external", with: @ncr_item.modifier_group_4_external_id
    fill_in "Modifier group 5 external", with: @ncr_item.modifier_group_5_external_id
    fill_in "Online item name", with: @ncr_item.online_item_name
    fill_in "Package cost", with: @ncr_item.package_cost
    fill_in "Price", with: @ncr_item.price
    fill_in "Primary vendor", with: @ncr_item.primary_vendor
    fill_in "Prompt for price", with: @ncr_item.prompt_for_price
    fill_in "Sold by weight measure", with: @ncr_item.sold_by_weight_measure
    fill_in "Tax category", with: @ncr_item.tax_category
    fill_in "Track inventory", with: @ncr_item.track_inventory
    fill_in "Unit cost", with: @ncr_item.unit_cost
    fill_in "Units on hand", with: @ncr_item.units_on_hand
    fill_in "Units per package", with: @ncr_item.units_per_package
    fill_in "Variation types", with: @ncr_item.variation_types
    fill_in "Variations", with: @ncr_item.variations
    click_on "Create Ncr item"

    assert_text "Ncr item was successfully created"
    click_on "Back"
  end

  test "updating a Ncr item" do
    visit ncr_items_url
    click_on "Edit", match: :first

    fill_in "Available for sale on pos", with: @ncr_item.available_for_sale_on_pos
    fill_in "Available for sale online", with: @ncr_item.available_for_sale_online
    fill_in "Barcode", with: @ncr_item.barcode
    fill_in "Category", with: @ncr_item.category
    fill_in "Description", with: @ncr_item.description
    fill_in "External", with: @ncr_item.external_id
    fill_in "Item name", with: @ncr_item.item_name
    fill_in "Modified by 1", with: @ncr_item.modified_by_1
    fill_in "Modified by 2", with: @ncr_item.modified_by_2
    fill_in "Modified by 3", with: @ncr_item.modified_by_3
    fill_in "Modified by 4", with: @ncr_item.modified_by_4
    fill_in "Modified by 5", with: @ncr_item.modified_by_5
    fill_in "Modifier group 1 external", with: @ncr_item.modifier_group_1_external_id
    fill_in "Modifier group 2 external", with: @ncr_item.modifier_group_2_external_id
    fill_in "Modifier group 3 external", with: @ncr_item.modifier_group_3_external_id
    fill_in "Modifier group 4 external", with: @ncr_item.modifier_group_4_external_id
    fill_in "Modifier group 5 external", with: @ncr_item.modifier_group_5_external_id
    fill_in "Online item name", with: @ncr_item.online_item_name
    fill_in "Package cost", with: @ncr_item.package_cost
    fill_in "Price", with: @ncr_item.price
    fill_in "Primary vendor", with: @ncr_item.primary_vendor
    fill_in "Prompt for price", with: @ncr_item.prompt_for_price
    fill_in "Sold by weight measure", with: @ncr_item.sold_by_weight_measure
    fill_in "Tax category", with: @ncr_item.tax_category
    fill_in "Track inventory", with: @ncr_item.track_inventory
    fill_in "Unit cost", with: @ncr_item.unit_cost
    fill_in "Units on hand", with: @ncr_item.units_on_hand
    fill_in "Units per package", with: @ncr_item.units_per_package
    fill_in "Variation types", with: @ncr_item.variation_types
    fill_in "Variations", with: @ncr_item.variations
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
