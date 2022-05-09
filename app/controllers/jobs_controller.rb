class JobsController < ApplicationController
    def index
        jobs = Job.all
        render json: jobs
    end

    def show
        job = Job.find(params[:id])
        render json: job 
    end

    def create 
        job = Job.create!(job_params)
    end

    def destroy
        job = Restaurant.find(params[:id])
        job.destroy
        head :no_content
    end

    private 

    def job_params
        params.permit(:title, :salary, :description, :link)
    end
end
