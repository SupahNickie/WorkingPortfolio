require 'simplecov'
SimpleCov.start

ENV["RAILS_ENV"] = "test"
require File.expand_path("../../config/environment", __FILE__)
require "rails/test_help"
require "minitest/rails"
require "minitest/rails/capybara"
require "minitest/focus"

# require "database_cleaner"
# require "capybara/webkit"
# Capybara.javascript_driver = :webkit

# Uncomment for awesome colorful output
# require "minitest/pride"

# DatabaseCleaner.strategy = :truncation
#
# class MiniTest::Spec
#   before :each do
#     DatabaseCleaner.start
#   end
#
#   after :each do
#     DatabaseCleaner.clean
#   end
# end


class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.(yml|csv) for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
end

class ActionController::TestCase
  include Devise::TestHelpers
end

class ActionDispatch::IntegrationTest
  include Rails.application.routes.url_helpers
 # include Capybara::RSpecMatchers
  include Capybara::DSL
end

def sign_in_user
  visit new_user_session_path
  fill_in "Email", with: users(:user1).email
  fill_in "Password", with: "password"
  click_on "Sign in"
end

Turn.config.format = :outline

