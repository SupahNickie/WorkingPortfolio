class Photo < ActiveRecord::Base
  belongs_to :photoable, polymorphic: true
  has_attached_file :photo, :styles => { :full => "700x525>", :medium => "500x375>", :thumb => "300x225>" }

end
