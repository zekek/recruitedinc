class College < ActiveRecord::Base
  attr_accessible :athletic_website, :classification, :name, :school_website, :state, :zip_code

  validates :name, presence: true

  scope :by_state, lambda { |state| where("state = ?", state) }
  scope :by_division, lambda { |div| where("classification = ?", div) }
end