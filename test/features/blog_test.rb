require "test_helper"

# SAD PATH FOR VISITORS

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

    # When they try to do anything, then Pundit doesn't let them
    visit edit_blog_path(blogs(:blog1))
    page.must_have_content "You are not authorized to perform this action."
    visit new_blog_path
    page.must_have_content "You are not authorized to perform this action."
  end
end

# HAPPY PATH FOR THE ADMIN

feature "a blog post can be CRUD'd by the site admin" do
  scenario "the admin can create a new blog post", js: true do
    # Given the admin is signed in
    sign_in_user

    # When he visits the proper URL to create a new blog post and fills out valid data
    visit new_blog_path
    fill_in "Title", with: "Test title"
    fill_in "Body", with: "Test body"
    click_on "Create Blog"

    # Then the new blog post should be listed
    page.must_have_content "Test title"
    page.must_have_content "Test body"
  end

  scenario "the admin can edit an existing blog post" do
    # Given the admin is signed in
    sign_in_user

    # When he tries to edit an existing blog post
    visit edit_blog_path(blogs(:blog1))
    fill_in "Title", with: "Changed title"
    fill_in "Body", with: "Changed body"
    click_on "Update Blog"

    # Then the page should reflect that change
    page.must_have_content "Changed title"
    page.must_have_content "Changed body"
  end

  scenario "the admin can destroy an existing blog post" do
    # Given the admin is signed in
    sign_in_user

    # When he tries to delete an existing blog post
    visit blogs_path
    page.find("tr#blog_#{blogs(:blog1).id}").click_on "Destroy"

    # Then the project is deleted
    page.wont_have_content "Test blog"
    page.wont_have_content "Test post"
  end
end
