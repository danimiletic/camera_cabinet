class Gear < ApplicationRecord
  belongs_to :kit

  has_many :documents, dependent: :destroy

  validates :name, :desc, :price, :make, :image, :bought,   presence: true

end
