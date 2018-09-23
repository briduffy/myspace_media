# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :added_friends, Array

  def self.added(ids)
    ids = ids.empty? ? [0] : ids
    Friend.where("id IN (?)", ids)
  end

  def self.new_friends(ids)
    ids = ids.empty? ? [0] : ids
    Friend.where("id not in (?)", ids).order("RANDOM()")
  end
end
