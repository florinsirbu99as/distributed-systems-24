class Api::V1::ExamplesController < ApplicationController
    def index
      render json: { data: "List of examples" }, status: :ok
    end
  
    def show
      render json: { data: "Example details" }, status: :ok
    end
  
    def create
      render json: { message: "Example created" }, status: :created
    end
  
    def update
      render json: { message: "Example updated" }, status: :ok
    end
  
    def destroy
      render json: { message: "Example deleted" }, status: :ok
    end
  end
  