class TarjetasController < ApplicationController
  before_action :set_tarjetum, only: [:show, :update, :destroy]

  # GET /tarjeta
  def index
    @tarjeta = Tarjetum.all

    render json: @tarjeta
  end

  # GET /tarjeta/1
  def show
    render json: @tarjetum
  end

  # POST /tarjeta
  def create
    @tarjetum = Tarjetum.new(tarjetum_params)

    if @tarjetum.save
      render json: @tarjetum, status: :created, location: @tarjetum
    else
      render json: @tarjetum.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tarjeta/1
  def update
    if @tarjetum.update(tarjetum_params)
      render json: @tarjetum
    else
      render json: @tarjetum.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tarjeta/1
  def destroy
    @tarjetum.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tarjetum
      @tarjetum = Tarjetum.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tarjetum_params
      params.fetch(:tarjetum, {})
    end
end
