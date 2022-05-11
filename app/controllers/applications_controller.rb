class ApplicationsController < ApplicationController
    skip_before_action :authorize, only: [:show, :create]
    def index
        applications = Application.all
        render json: applications
    end

    def show
        applications = Application.find(params[:id])
        render json: applications 
    end

    def create 
        application = Application.create(application_params)
        render json: application, status: :created
    end

    def destroy
        application = Application.find(params[:id])
        job.destroy
        head :no_content
    end

    private 

    def application_params
        params.permit(:user_id)
    end

end
