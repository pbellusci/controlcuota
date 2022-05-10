class CreateTarjeta < ActiveRecord::Migration[6.1]
  def change
    create_table :tarjeta do |t|
      t.string :tipo
      t.string :banco
      t.string :descripcion
      t.timestamps
    end
  end
end
