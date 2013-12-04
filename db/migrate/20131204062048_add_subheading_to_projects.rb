class AddSubheadingToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :subheading, :string
  end
end
