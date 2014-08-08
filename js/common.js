/**
 * Created by ryan on 8/5/14.
 */
var Todo = can.Construct.extend({},{
    isSecret: function(){
        return false;
    },
    allowedToEdit:function(){
        return !this.isSecret();
    }
});

var paginate = new can.Observe({offset:0,limit:100,count:200})
$(function(){
    var todo = new Todo();
    todo.allowedToEdit();

    paginate.attr('limit',200)
    console.log(paginate.attr('limit'));

});