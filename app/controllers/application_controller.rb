class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize
rescue_from ActiveRecord::RecordNotFound,with: :render_not_found
rescue_from ActiveRecord::RecordInvalid,with: :render_invalid


private
def render_not_found
 render json:{
  error: "#{controller_name.classify} not found"
  },
  status: :not_found
 end
def  render_invalid(error_obj)
 render json:{
  errors: error_obj.record.errors.full_messages
  },
  status: :unprocessable_entity
 end

  def authorize
    render json: {message: "You are not authorized"}, status: :unauthorized unless User.find_by(id: session[:user_id])
  end

end
