require "test_helper"

feature "a blog cannot be created by a non-user" do
  scenario "a site visitor doesn't see the controls to make a new post" do
    # Given that some malicious user goes to my site

    # When they try to change anything to my blogs listing
    visit blogs_path

    # Then they can't find the controls
    page.wont_have_content "Edit"
    page.wont_have_content "Destroy"
    page.wont_have_content "New Blog"

  end

  scenario "a site visitor gets rejected by Pundit if they try to hack around" do
    # Given that that malicious douchebag tries to hack to the proper URL

    # When they try to do anything

    # Then Pundit doesn't let them

  end

end
