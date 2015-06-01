require 'camping'
Camping.goes :BackboneTut

module BackboneTut
  set :views, File.dirname(__FILE__) #+ '/views'
end

module BackboneTut::Models;  class Donut < Base; end; end

module BackboneTut::Controllers
  class Index < R '/'
    def get 
      @t = Time.now
      #render :index 
      render 'views/index.html'
    end
  end
  
  class Javascript < R '/js/model_view_code.js'
    def get
      render 'views/js/model_view_code.js'
    end
  end
end

module BackboneTut::Views
  def layout
    html do
      head do
        title { "Nuts And GORP" }
      end
      body { self << yield }
    end
  end

end
