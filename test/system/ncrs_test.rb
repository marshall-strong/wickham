require "application_system_test_case"

class NcrsTest < ApplicationSystemTestCase
  setup do
    @ncr = ncrs(:one)
  end

  test "visiting the index" do
    visit ncrs_url
    assert_selector "h1", text: "Ncrs"
  end

  test "creating a Ncr" do
    visit ncrs_url
    click_on "New Ncr"

    fill_in "Name", with: @ncr.name
    click_on "Create Ncr"

    assert_text "Ncr was successfully created"
    click_on "Back"
  end

  test "updating a Ncr" do
    visit ncrs_url
    click_on "Edit", match: :first

    fill_in "Name", with: @ncr.name
    click_on "Update Ncr"

    assert_text "Ncr was successfully updated"
    click_on "Back"
  end

  test "destroying a Ncr" do
    visit ncrs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Ncr was successfully destroyed"
  end
end
