require "application_system_test_case"

class NcrDepartmentsTest < ApplicationSystemTestCase
  setup do
    @ncr_department = ncr_departments(:one)
  end

  test "visiting the index" do
    visit ncr_departments_url
    assert_selector "h1", text: "Ncr Departments"
  end

  test "creating a Ncr department" do
    visit ncr_departments_url
    click_on "New Ncr Department"

    fill_in "Name", with: @ncr_department.name
    click_on "Create Ncr department"

    assert_text "Ncr department was successfully created"
    click_on "Back"
  end

  test "updating a Ncr department" do
    visit ncr_departments_url
    click_on "Edit", match: :first

    fill_in "Name", with: @ncr_department.name
    click_on "Update Ncr department"

    assert_text "Ncr department was successfully updated"
    click_on "Back"
  end

  test "destroying a Ncr department" do
    visit ncr_departments_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ncr department was successfully destroyed"
  end
end
