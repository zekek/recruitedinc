class CreateColleges < ActiveRecord::Migration
  def change
    create_table :colleges do |t|
      t.string :name
      t.string :zip_code
      t.string :state
      t.string :classification
      t.string :school_website
      t.string :athletic_website

      t.timestamps
    end
  end
end
