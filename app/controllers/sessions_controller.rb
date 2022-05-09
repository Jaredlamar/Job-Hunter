class SessionsController < ApplicationController


  #LOGGING IN

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password]) 
      session[user_id] = user.id
      render json: user
    else 
      render json: { errors: user.errors.full_messages }, status: :unauthorized
    end
  end

  # LOGGING OUT

  def destroy 
    sessions.delete :user_id
    head :no_content
  end
end
