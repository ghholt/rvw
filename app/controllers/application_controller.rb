class ApplicationController < ActionController::Base
  protect_from_forgery

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_path, :alert => exception.message
  end

  def home
  end

  def wafel
  end

  def store
  end

  def wholesale
  end

  def about
  end

end
