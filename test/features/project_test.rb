require "test_helper"

feature "a project cannot be created by a non-user" do
  scenario "a site visitor doesn't see the controls to make a new post" do
    # Given that some malicious user goes to my site

    # When they try to change anything to my projects listing
    visit projects_path

    # Then they can't find the controls
    page.wont_have_content "Edit"
    page.wont_have_content "Destroy"
    page.wont_have_content "New Project"

  end

  scenario "a site visitor gets rejected by Pundit if they try to hack around" do
    # Given that that malicious douchebag tries to hack to the proper URL

    # When they try to do anything, then Pundit doesn't let them
    visit edit_project_path(projects(:project1))
    page.must_have_content "You are not authorized to perform this action."
    visit new_project_path
    page.must_have_content "You are not authorized to perform this action."

  end

end
