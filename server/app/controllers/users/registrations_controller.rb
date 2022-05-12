class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private

  def sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :last_name, :email, :password])
    devise_parameter_sanitizer.sanitize(:sign_up)
  end
  
  def respond_with(resource, _opts = {})
    resource.persisted? ? register_success : register_failed
  end

  def register_success
    sign_in(@user)
    render json: { message: 'Signed up.', user: @user.slice(:name, :last_name, :email) }
  end

  def register_failed
    render json: { message: "Error: #{ @user.errors.full_messages.join(', ') }" }, status: :unprocessable_entity
  end
end