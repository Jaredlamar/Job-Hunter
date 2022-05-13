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
        job = Job.find_or_create_by!(job_params)
        application = job.applications.create!(application_params)
        render json: application, status: :created
    end

    def destroy
        application = Application.find(params[:id])
        job.destroy
        head :no_content
    end

    private 

    def application_params
        
        params.require(:application).permit(:user_id)

    end

    def job_params
        params.require(:job).permit(:title, :company, :category, :logo, :description, :jobtype, :salary, :url)
    end

end
