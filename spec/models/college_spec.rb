require 'spec_helper'

describe College do
  it "can be instantiated" do
    College.new.should be_an_instance_of(College)
  end

  it "can be saved successfully" do
    College.create(name: "MyCollege").should be_persisted
  end
end
