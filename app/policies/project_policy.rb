class ProjectPolicy
  attr_reader :admin, :project

  def initialize(admin, project)
    @admin = admin
    @project = project
  end

  def new?
    admin.present?
  end

  def create?
    admin.present?
  end

  def edit?
    admin.present?
  end

  def update?
    admin.present?
  end

  def destroy?
    admin.present?
  end
end
