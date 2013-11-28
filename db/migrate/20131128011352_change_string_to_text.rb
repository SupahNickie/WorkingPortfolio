class ChangeStringToText < ActiveRecord::Migration
  def change
    change_column :projects, :body, :text, :limit => nil
    change_column :projects, :technologies_used, :text, :limit => nil
    change_column :blogs, :body, :text, :limit => nil
    change_column :messages, :message, :text, :limit => nil
  end
end
