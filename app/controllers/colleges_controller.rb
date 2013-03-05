class CollegesController < ApplicationController
  load_and_authorize_resource

  def index
    @colleges = College.by_state(params[:state]) if params[:state].present?
    @colleges ||= College.all
  end

  def show
  end

  def new
    @college = College.new
  end

  def edit
  end

  def create
    @college = College.new(params[:college])

    if @college.save
      redirect_to @college, notice: 'College was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    if @college.update_attributes(params[:college])
      redirect_to @college, notice: 'College was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @college.destroy
    redirect_to colleges_url
  end
end
