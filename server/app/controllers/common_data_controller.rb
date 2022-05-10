class CommonDataController < ApplicationController
  before_action :set_common_datum, only: [:show, :update, :destroy]

  # GET /common_data
  def index
    render json: { bancos: Banco::all, tipo_tarjeta: TipoTarjetum::all }
  end

  def bancos
    render json: Banco::all
  end

  def tipos_tarjeta
    render json: TipoTarjetum::all
  end

end
