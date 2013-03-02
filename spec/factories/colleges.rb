# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :college do
    name "MyString"
    zip_code "MyString"
    state "MyString"
    classification "MyString"
    school_website "MyString"
    athletic_website "MyString"
  end
end
