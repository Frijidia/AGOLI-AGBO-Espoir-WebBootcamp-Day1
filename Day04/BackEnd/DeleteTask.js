exports.delete_some_tasks = function(res, id){
    db.execute('DELETE FROM todo WHERE id = ?', [id], function(err, results, fields) {
        res.status(200).json({"msg":`succesfully deleted record number: ${id}`});
    });
    console.log("Task deleted in a whip !");
}
