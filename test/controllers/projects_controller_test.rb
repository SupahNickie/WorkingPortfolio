require "test_helper"

describe ProjectsController do
  fixtures :projects

  it "rejects site visitors if they attempt to render the new blog command" do
    get :new
    assert_redirected_to({controller: "home", action: "home"})
  end

  it "rejects site visitors if they attempt to post a new blog" do
    post :create, project: {title: "test", technologies_used: "none", body: "testing"}
    assert_redirected_to({controller: "home", action: "home"})
  end

  it "rejects site visitors if they attempt to render the edit blog command" do
    get :edit, :id => projects(:project1)
    assert_redirected_to({controller: "home", action: "home"})
  end

  it "rejects site visitors if they attempt to update a blog" do
    put :update, :id => projects(:project1)
    assert_redirected_to({controller: "home", action: "home"})
  end

  it "rejects site visitors if they attempt to delete a blog" do
    delete :destroy, :id => projects(:project1)
    assert_redirected_to({controller: "home", action: "home"})
  end

end
