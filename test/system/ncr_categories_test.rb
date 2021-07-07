require "application_system_test_case"

class NcrCategoriesTest < ApplicationSystemTestCase
  setup do
    @ncr_category = ncr_categories(:one)
  end

  test "visiting the index" do
    visit ncr_categories_url
    assert_selector "h1", text: "Ncr Categories"
  end

  test "creating a Ncr category" do
    visit ncr_categories_url
    click_on "New Ncr Category"

    fill_in "Department", with: @ncr_category.department_id
    fill_in "Name", with: @ncr_category.name
    click_on "Create Ncr category"

    assert_text "Ncr category was successfully created"
    click_on "Back"
  end

  test "updating a Ncr category" do
    visit ncr_categories_url
    click_on "Edit", match: :first

    fill_in "Department", with: @ncr_category.department_id
    fill_in "Name", with: @ncr_category.name
    click_on "Update Ncr category"

    assert_text "Ncr category was successfully updated"
    click_on "Back"
  end

  test "destroying a Ncr category" do
    visit ncr_categories_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ncr category was successfully destroyed"
  end
end
