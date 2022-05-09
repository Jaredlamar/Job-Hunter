class User < ApplicationRecord
    has_many :applications
    has_many :jobs, through: :applications
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
