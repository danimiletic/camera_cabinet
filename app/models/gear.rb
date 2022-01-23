class Gear < ApplicationRecord
  belongs_to :kit

  has_many :documents, dependent: :destroy

  validates :name, :desc, :price, :model, :condition, :make, :image, :serial, presence: true

end
