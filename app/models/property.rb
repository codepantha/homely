class Property < ApplicationRecord
  validates :name, presence: true
  validates :headline, presence: true
  validates :description, presence: true
  validates :address_1, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :country, presence: true

  monetize :price_cents, allow_nil: true

  has_many_attached :images
  has_many :reviews, dependent: :destroy
  has_many :wishlists, dependent: :destroy
  has_many :wishlisted_users, through: :wishlists, source: :user, dependent: :destroy

  has_many :reservations, dependent: :destroy
  has_many :reserved_users, through: :reservations, source: :user, dependent: :destroy

  def update_average_rating
    avg_rating = reviews.average(:final_rating).to_f
    update_column(:average_final_rating, avg_rating)
  end

  def wishlisted_by?(user)
    wishlisted_users.include?(user)
  end
end
