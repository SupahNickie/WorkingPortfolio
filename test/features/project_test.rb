require "test_helper"

# SAD PATH FOR VISITORS

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

# HAPPY PATH FOR THE ADMIN

  feature "a project can be CRUD'd by the site admin" do
    scenario "the admin can post a new project" do
      # Given the admin is signed in
      sign_in_user

      # When he visits the proper URL to create a new project and fills out valid data
      visit new_project_path
      fill_in "Title", with: "Test project name"
      fill_in "Technologies used", with: "Tech"
      fill_in "Body", with: "Test body"
      click_on "Create Project"

      # The new project should be listed
      page.must_have_content "Test project name"
      page.must_have_content "Tech"
      page.must_have_content "Test body"
    end

    scenario "the admin can edit an existing project" do
      # Given the admin is signed in
      sign_in_user

      # When he tries to edit an existing project
      visit edit_project_path(projects(:project1))
      fill_in "Title", with: "Changed title"
      fill_in "Technologies used", with: "Changed tech"
      fill_in "Body", with: "Changed body"
      click_on "Update Project"

      # Then the page should reflect that change
      page.must_have_content "Changed title"
      page.must_have_content "Changed tech"
      page.must_have_content "Changed body"
    end

    scenario "the admin can destroy an existing project" do
      # Given the admin is signed in
      sign_in_user

      # When he tries to delete an existing project
      visit projects_path
      page.find("tr#project_#{projects(:project1).id}").click_on "Destroy"

      # Then the project is deleted
      page.wont_have_content "Test project"
      page.wont_have_content "Tech stuff"
      page.wont_have_content "Test body"
    end
  end

