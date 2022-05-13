class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  #LOGGING IN

  def create
  
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password]) 
      session[:user_id] = user.id
      render json: user
    else 
      render json: { error: "Invalid Password or Username" }, status: :unauthorized
    end
  end

  # LOGGING OUT

  def destroy 
    session.delete :user_id 
    head :no_content
  end
end

# def show
#   user = User.find_by(username: params[:username])
#   if user&.authenticate(params[:password]) 
#     session[]
# end