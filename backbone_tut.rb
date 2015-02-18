require 'camping'

Camping.goes :BackboneTut

module BackboneTut::Models
  class User < Base; end
  class Post < Base; belongs_to :user end
end

module BackboneTut::Controllers
  class Index < R '/'
    def get; render :index end
  end
end

module BackboneTut::Views
  def layout
    html { body { self << yield } }
  end
  def index
    div.page "Welcome! <%= Time.now %>"
  end
end
