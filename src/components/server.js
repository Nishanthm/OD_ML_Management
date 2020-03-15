const express = require('express');
var cors = require('cors');
const app = express();
const port = 8000;
const nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
	  user: "80cfbd6356739a",
	  pass: "3573621c27a984"
	}
  });
var htmlpass='<h1>You Pass has been accepted!</h1><p>Happy journey!!</p>';
var htmlfail='<h1>You Pass has been cancelled!</h1><p>contact class advisor!!</p>';
  var message = {
    from: 'elonmusk@tesla.com', // Sender address
    to: 'to@email.com',         // List of recipients
    subject: 'Regarding PASS request', // Subject line
    html: '<h1>You Pass has been accepted!</h1><p>Happy journey!!</p>'
};





const mysql = require('mysql');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
var mysqlConnection = mysql.createConnection({
	host: 'software.cbesvpot2wyw.us-east-1.rds.amazonaws.com',
	user: 'admin',
	password: 'password',
	database: 'software'
});

mysqlConnection.connect((err) => {
	if (!err) console.log('Connection succeeded.');
	else console.log('Unsuccessful \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.post("/login", cors(), (req, res) => {
	
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.set('Content-Type', 'text/html');
    
    var uname = req.body.uname;
    var pwd = req.body.pwd;
    
    if (uname && pwd) {
        
        if(uname.startsWith('cb.en.u4'))
        {
            mysqlConnection.query('SELECT studusername as su FROM studlogin WHERE studusername = ? AND AES_DECRYPT(STUDPSWD,"software") = ?', [uname, pwd], function(error, results, fields) {
                console.log(results);
                if (results.length > 0) {
                    // req.session.loggedin = true;
					// req.session.uname = uname;
					//var status='success';
					console.log("hi1");
					console.log(results[0].su);
					res.send(results);
					res.end();
                    //res.redirect('http://localhost:3000/studash');
                    // res.end();
                } else {
					//status='fail';
					
					mysqlConnection.query('select "fail" as su from dual',function (error, results, fields) {
						console.log("hi2");
						console.log(results[0].su);
						res.send(results);
						res.end();
					});
                   
                }			
            });
        }
        else if(uname.startsWith('cb.en.t'))
        {
			mysqlConnection.query('SELECT facusername as su FROM faclogin WHERE facusername = ? AND AES_DECRYPT(facpswd, "software") = ?',
			 [uname, pwd],
			  function(error, tresults, fields) {
                
                if (tresults.length > 0) {
                    // req.session.loggedin = true;
					// req.session.uname = uname;
					//var status='success';
					console.log(tresults[0].su)
					res.send(tresults);
					//res.redirect('http://localhost:3000/facdash');
					//res.send(status+uname)
					//console.log(status+uname)
                    res.end()
                } else {
					//status='fail'
					//res.send(status+uname)
					//res.send('Incorrect Username and/or Password!');
					// console.log("Fail")
					mysqlConnection.query('select "fail" as su from dual',function (error, results, fields) {
						console.log(results)
						res.send(results);
						res.end()
					});
                  
                }			
            });
        }
        else {
            mysqlConnection.query('select "fail" as su from dual',function (error, results, fields) {
				console.log("GERE")
				res.send(results[0].su);
			
				res.end();
			});
        }
    }

	});
	
app.post("/studetails", function(req, res) {
	var user = req.body.uname;
	mysqlConnection.query(
		'select studemail as semail, studentid as sid,stuentname as sname,class as sc,sec as ss,dob as sdob,mobno as smobno,address as sadd,highschool as shs,gender as sg,hsperc as shp,currentsem as scs,cgpa as scgpa from studentdetail,studlogin where studentid=? and studlogin.studusername=?',
		[user,user],
		function(err, result, fields) {
			console.log(result);
			res.send(result);
			res.end();
		});
	});

app.post("/facdetails", function(req, res) {
	var user = req.body.uname;
	mysqlConnection.query(
		'select  facultyid as fid,facultyname as fn,dept as fd,classofadv as fc,dob as fdob,mobno as fno,gender as fg,quali as fq,address as fa,facemail as fenail from faclogin,facultydetail where faclogin.facusername=? and facultyid=?',
		[user,user],
		function(err, result, fields) {
			console.log(result);
			res.send(result);
			res.end();
		});
	});

app.post("/passapply", function(req, res) {

	var sname = req.body.uname;
	var ptype = req.body.type;
	var sdate = req.body.sdate;
	var edate = req.body.edate;
	var slink = req.body.ulink;
	var desc = req.body.desc;
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var ress=sdate.split("-");
	var ans=parseInt(ress[1])-1;
	var reqmonth=months[ans];

	console.log(ress);
	console.log(ans);
	console.log(reqmonth);
	
	mysqlConnection.query(
		'select stuentname as sn from studentdetail where studentid=?',
		[sname],
		function(err, result, fields) {
			console.log(sname);
			console.log(result);
			mysqlConnection.query('insert into pass(studid,studname,passtype,passfrom,passto,passmonth,passdec,passlink) values(?,?,?,?,?,?,?,?)',
			[sname,result[0].sn,ptype,sdate,edate,reqmonth,desc,slink],
			function(err, sresult, fields) {
				console.log("enter");
				mysqlConnection.query('select "success" as su from dual',function (error, tresults, fields) {
					res.send(tresults);
				});
			
			});
		});
	});

app.post("/passhistory", function(req, res) {
	console.log("hi");
	var user = req.body.uname;
	mysqlConnection.query(
		'select passid as spp,studid as sid,studname as sn,passtype as stype,passfrom as sf,passto as st,passmonth as sm,passdec as sd,passlink as sl,passstatus as sps from pass where studid=?',
		[user],
		function(err, result, fields) {
			console.log(result);
			res.send(result);
			res.end();
		});
	});

	app.post("/studachi", function(req, res) {
		console.log("hi");
		var user = req.body.uname;
		mysqlConnection.query(
			'select achid as aid,studid as sid,studname as sname,achtype as atyp,achdesc as adesc,link as alink,achdate as adate from achievement where studid=?',
			[user],
			function(err, result, fields) {
				console.log(result);
				res.send(result);
				res.end();
			});
		});

		app.post("/achi", function(req, res) {
			console.log("hi");
			
			mysqlConnection.query(
				'select achid as aid,studid as sid,studname as sname,achtype as atyp,achdesc as adesc,link as alink,achdate as adate from achievement ',
				
				function(err, result, fields) {
					console.log(result);
					res.send(result);
					res.end();
				});
			});


app.post("/facpasshistory", function(req, res) {
	console.log("hi");
	var user = req.body.uname;
	console.log(user);
	mysqlConnection.query(
		'select passid as spp,facultyid as fid,facultyname as fname ,studid as sid,studname as sn,passtype as stype,passfrom as sf,passto as st,passmonth as sm,passdec as sd,passlink as sl,passstatus as sps from passwithfacid where facultyid=?',
		[user],
		function(err, result, fields) {
			console.log(result);
			res.send(result);
			res.end();
		});
	});

app.post("/updatepass", function(req, res) {
	console.log("hi");
	var psd = req.body.pid;
	var stat = req.body.pstat;
	console.log(psd);
	console.log(stat);
	// transport.sendMail(message, function(err, info) {
	// 	if (err) {
	// 	  console.log(err)
	// 	} else {
	// 	  console.log(info);
	// 	}
	// });

	mysqlConnection.query('select passwithfacid.passfrom as pf,faclogin.facemail as pfm,studlogin.studemail as psm from passwithfacid,faclogin,studlogin where passwithfacid.facultyid=faclogin.facusername and passwithfacid.studid=studlogin.studusername and passwithfacid.passid=?',
			[psd],
			function(err, sresult, fields) {
				console.log("enter1");
				message["from"]=sresult[0].pfm;
				message["to"]=sresult[0].psm;
				message["subject"]=sresult[0].pf;
				if(stat>0)
				{
				message["html"]=htmlpass;}
				else
				{message["html"]=htmlfail;}
				transport.sendMail(message, function(err, info) {
					if (err) {
					  console.log(err)
					} else {
					  console.log(info);
					}
				});



				mysqlConnection.query(
					'UPDATE pass SET passstatus = ? WHERE passid=?',
					[stat,psd],
					function(err, result, fields) {
						res.end();
					});
			
			});


	// mysqlConnection.query(
	// 	'UPDATE pass SET passstatus = ? WHERE passid=?',
	// 	[stat,psd],
	// 	function(err, result, fields) {
	// 		res.end();
	// 	});
	});


app.listen(port, () => console.log(`Example app listening on port port!`));
