class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [
      :name, :prefecture, :gender, :age, :profile,
      avatar_attributes: [
        :user_id, :face, :hair, :hair_color, :tops, :tops_color, :inner_color,
        :bottoms, :bottoms_color, :spats_color, :shoes, :shoes_color, :weekly_average_mileage
      ], works_attributes:[
        :user_id, :run
      ]])
  end
end
