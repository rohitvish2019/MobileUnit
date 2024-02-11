module.exports.homepage = function(req, res){
    return res.render('home');
}

module.exports.registration = function(req, res){
    return res.render('registration')
}

module.exports.teachers = function(req, res){
    return res.render('teachers');
}

module.exports.admissionApproval = function(req, res){
    return res.render('addmission_approval')
}

module.exports.classUpgrade = function(req, res){
    return res.render('annual_class_upgrade');
}

module.exports.addUser = function(req, res){
    return res.render('add_user');
}

module.exports.annualFees = function(req, res){
    return res.render('annual_fees');
}

module.exports.attendance = function(req, res){
    return res.render('attendance');
}

module.exports.discharge = function(req, res){
    return res.render('discharge')
}

module.exports.fees = function(req, res){
    return res.render('fees')
}

module.exports.notice = function(req, res){
    return res.render('notice')
}

module.exports.result = function(req, res){
    return res.render('result')
}

module.exports.studentList = function(req, res){
    return res.render('studentListByClass')
}