class AddAttrsToBlog < ActiveRecord::Migration
  def change
    add_column :blogs, :title, :string
    add_column :blogs, :body, :string
  end
end
