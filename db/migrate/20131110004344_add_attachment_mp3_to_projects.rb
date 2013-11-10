class AddAttachmentMp3ToProjects < ActiveRecord::Migration
  def self.up
    change_table :projects do |t|
      t.attachment :mp3
    end
  end

  def self.down
    drop_attached_file :projects, :mp3
  end
end
