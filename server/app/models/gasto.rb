class Gasto < ApplicationRecord
  belongs_to :tarjetum
  belongs_to :category
end
