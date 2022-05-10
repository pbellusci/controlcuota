class CreateGastos < ActiveRecord::Migration[6.1]
  def change
    create_table :gastos do |t|
      t.string :descripcion
      t.decimal :total, precision: 10, scale: 2
      t.integer :cantidad_cuotas
      t.decimal :valor_cuota, precision: 10, scale: 2
      t.belongs_to :tarjetum
      t.belongs_to :category
      t.timestamps
    end
  end
end
