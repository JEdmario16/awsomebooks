class BooksTestController < ApplicationController
  def index
    @books = TestBook.all

    render json: @books
  end
end
