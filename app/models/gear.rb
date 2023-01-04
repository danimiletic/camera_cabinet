class Gear < ApplicationRecord
  belongs_to :kit

  validates :name, :desc, :price, :model, :condition, :make, :image, :serial, :bought,   presence: true

end
