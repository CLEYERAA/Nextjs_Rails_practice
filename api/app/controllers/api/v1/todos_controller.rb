module Api
  module V1
    class TodosController < ApplicationController     
      before_action :set_todo, only: [:show]

      def index
        todos = Todo.order(created_at: :desc)
        render json: { data: todos }   
      end

      def create 
        todo = Todo.new(todo_params)
        if todo.save
          render json: { status: 'SUCUCESS', data: todo}
        else
          render json: { status: 'FAILED', data: todo.error}  
        end
      end

      def show 
        render json: { status: 'SUCUCESS', data: @todo }
      end

    private

      def set_todo
        @todo = Todo.find(params[:id])
      end

      def todo_params
        params.require(:todo).permit(:title, :content)
      end

    

    end
  end
end


