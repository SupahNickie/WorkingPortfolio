class ProjectPolicy
  attr_reader :user, :project

  def initialize(user, project)
    @user = user
    @project = project
  end

  def new?
    user.present?
  end

  def create?
    user.present?
  end

  def edit?
    user.present?
  end

  def update?
    user.present?
  end

  def destroy?
    user.present?
  end
end
