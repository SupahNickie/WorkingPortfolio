class BlogPolicy
  attr_reader :admin, :blog

  def initialize(admin, blog)
    @admin = admin
    @blog = blog
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
