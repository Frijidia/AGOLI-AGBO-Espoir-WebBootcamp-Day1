exports.edit_tasks = function(res, id, title, description, duetime, userid, status){
    db.execute('UPDATE todo SET title = ?, description = ?, due_time = ?, user_id = ?, status = ?, WHERE id = ?', [title, description, duetime, userid, status, id], function(err, results, fields) {
        db.execute('SELECT id, title, description, due_time, user_id, status FROM todo WHERE id = ?', [id], function(err, results, fields) {
            res.status(200).json(results);
        });
    });
    console.log("User's info thoroughly edited !");
}
