class AddSubheadingToBlog < ActiveRecord::Migration
  def change
    add_column :blogs, :subheading, :string
  end
end
