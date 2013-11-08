require "test_helper"

feature "The site owner can sign in and change stuff" do

  scenario "The option to sign up is not present" do
    # Given that some malicious person finds my hidden login url
    visit new_admin_session_path

    # When they try to sign up

    # Then they can't
    page.wont_have_content "Register"
  end

end
