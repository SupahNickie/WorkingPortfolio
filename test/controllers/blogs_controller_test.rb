require "test_helper"

describe BlogsController do
  fixtures :blogs

  it "rejects site visitors if they attempt to render the new blog command" do
    get :new
    assert_redirected_to({controller: "home", action: "home"})
  end

  it "rejects site visitors if they attempt to post a new blog" do
    post :create, blog: {title: "test", body: "testing"}
    assert_redirected_to({controller: "home", action: "home"})
  end

  it "rejects site visitors if they attempt to render the edit blog command" do
    get :edit, :id => blogs(:blog1)
    assert_redirected_to({controller: "home", action: "home"})
  end

  it "rejects site visitors if they attempt to update a blog" do
    put :update, :id => blogs(:blog1)
    assert_redirected_to({controller: "home", action: "home"})
  end

  it "rejects site visitors if they attempt to delete a blog" do
    delete :destroy, :id => blogs(:blog1)
    assert_redirected_to({controller: "home", action: "home"})
  end

end
