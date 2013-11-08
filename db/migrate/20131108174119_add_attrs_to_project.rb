class AddAttrsToProject < ActiveRecord::Migration
  def change
    add_column :projects, :title, :string
    add_column :projects, :technologies_used, :string
    add_column :projects, :body, :string
  end
end
