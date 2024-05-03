require("discourse/loader-shims");
require("discourse-i18n");


MessageFormat = {locale: {}};
I18n._compiledMFs = {"user.messages.read_more_group_pm_MF" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "HAS_UNREAD_AND_NEW";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"true" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "UNREAD";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "Há <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/group/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += "/unread'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " não lidas</a>";
return r;
},
"other" : function(d){
var r = "";
r += "Há <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/group/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += "/unread'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " não lidas</a>";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n    ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "NEW";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "e <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/group/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += "/new'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " uma nova</a> message restante, ou navegue por outras messages em ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupLink"];
return r;
},
"other" : function(d){
var r = "";
r += "e <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/group/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += "/new'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " novas</a> messages restantes, ou navegue por outras mensagens em ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupLink"];
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n  ";
return r;
},
"false" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "UNREAD";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "Há <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/group/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += "/unread'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " unread</a> message restante, ou navegue por outras messages em ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupLink"];
return r;
},
"other" : function(d){
var r = "";
r += "Há <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/group/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += "/unread'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " unread</a> messages restantes, ou navegue por outras mensagens em ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupLink"];
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n    ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "NEW";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "Há <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/group/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += "/new'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " uma nova</a> message restante, ou navegue por outras messages em ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupLink"];
return r;
},
"other" : function(d){
var r = "";
r += "Há <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/group/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += "/new'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " novas</a> messages restantes, ou navegue por outras mensagens em ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupLink"];
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n  ";
return r;
},
"other" : function(d){
var r = "";
return r;
}
};
r += (pf_0[ k_1 ] || pf_0[ "other" ])( d );
r += "\n";
return r;
}, "user.messages.read_more_personal_pm_MF" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "HAS_UNREAD_AND_NEW";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"true" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "UNREAD";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "Há <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/unread'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " mensagem não lida</a>";
return r;
},
"other" : function(d){
var r = "";
r += "Há <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/unread'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " mensagens não lidas</a>";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n    ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "NEW";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "e <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/new'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " nova</a> mensagem restante, ou navegue por outras <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages'>mensagens pessoais</a>";
return r;
},
"other" : function(d){
var r = "";
r += "e <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/new'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " novas</a> mensagens restantes, ou navegue por outras <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages'>mensagens pessoais</a>";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n  ";
return r;
},
"false" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "UNREAD";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "Resta <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/unread'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + "</a> mensagem não lida, ou navegue por outras <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages'>mensagens pessoais</a>";
return r;
},
"other" : function(d){
var r = "";
r += "Restam <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/unread'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + "</a> mensagens não lidas, ou navegue por outras <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages'>mensagens pessoais</a>";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n    ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "NEW";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "Resta <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/new'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " nova</a> mensagem, ou navegue por outras <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages'>mensagens pessoais</a>";
return r;
},
"other" : function(d){
var r = "";
r += "Restam <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages/new'>" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " novas</a> mensagens, ou navegue por outras <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/u/";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["username"];
r += "/messages'>mensagens pessoais</a>";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n  ";
return r;
},
"other" : function(d){
var r = "";
return r;
}
};
r += (pf_0[ k_1 ] || pf_0[ "other" ])( d );
r += "\n";
return r;
}, "logs_error_rate_notice.reached_hour_MF" : function(d){
var r = "";
r += "<b>";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["relativeAge"];
r += "</b> – <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["url"];
r += "' target='_blank'>a quantidade de ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "rate";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erro/hora";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erros/hora";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += "</a> alcançou o limite de configuração do site de ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "limit";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erro/hora";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erros/hora";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ".\n";
return r;
}, "logs_error_rate_notice.reached_minute_MF" : function(d){
var r = "";
r += "<b>";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["relativeAge"];
r += "</b> – <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["url"];
r += "' target='_blank'>a quantidade de ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "rate";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erro/minuto";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erros/minuto";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += "</a> alcançou o limite de configuração do site de ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "limit";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erro/minuto";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erros/minuto";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ".\n";
return r;
}, "logs_error_rate_notice.exceeded_hour_MF" : function(d){
var r = "";
r += "<b>";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["relativeAge"];
r += "</b> – <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["url"];
r += "' target='_blank'>a quantidade de ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "rate";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erro/hora";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erros/hora";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += "</a> ultrapassou o limite de configuração do site de ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "limit";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erro/hora";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erros/hora";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ".\n";
return r;
}, "logs_error_rate_notice.exceeded_minute_MF" : function(d){
var r = "";
r += "<b>";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["relativeAge"];
r += "</b> – <a href='";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["url"];
r += "' target='_blank'>";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "rate";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erro/minuto";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erros/minutos";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += "</a> ultrapassou o limite de configuração do site de ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "limit";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erro/minuto";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " erro/minutos";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ".\n";
return r;
}, "summary.description_time_MF" : function(d){
var r = "";
r += "Há ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "replyCount";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "<b>" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + "</b> resposta";
return r;
},
"other" : function(d){
var r = "";
r += "<b>" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + "</b> respostas";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += " com um tempo de leitura estimado de <b>";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "readingTime";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " minuto";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " minutos";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += "</b>.\n";
return r;
}, "topic.read_more_MF" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "HAS_UNREAD_AND_NEW";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"true" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "UNREAD";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "Há <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/unread\">" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " tópico não lido</a>";
return r;
},
"other" : function(d){
var r = "";
r += "Há <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/unread\">" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " tópicos não lidos</a>";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n    ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "NEW";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "e <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/new\">" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " novo</a> tópico restante,";
return r;
},
"other" : function(d){
var r = "";
r += "e <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/new\">" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " novos</a> tópicos restantes,";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n  ";
return r;
},
"false" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "UNREAD";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "Resta <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/unread\">" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " tópico não lido</a>,";
return r;
},
"other" : function(d){
var r = "";
r += "Restam <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/unread\">" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " tópicos não lidos</a>,";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n    ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "NEW";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"0" : function(d){
var r = "";
return r;
},
"one" : function(d){
var r = "";
r += "Resta <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/new\">" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " novo</a> tópico,";
return r;
},
"other" : function(d){
var r = "";
r += "Restam <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/new\">" + (function(){ var x = k_2 - off_1;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_2+"` isnt a number.");
}
return x;
})() + " novos</a> tópicos,";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n  ";
return r;
},
"other" : function(d){
var r = "";
return r;
}
};
r += (pf_0[ k_1 ] || pf_0[ "other" ])( d );
r += "\n";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "HAS_CATEGORY";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"true" : function(d){
var r = "";
r += "ou navegue por outros tópicos em ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["categoryLink"];
return r;
},
"false" : function(d){
var r = "";
r += "ou <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["basePath"];
r += "/latest\">veja os tópicos mais recentes</a>";
return r;
},
"other" : function(d){
var r = "";
return r;
}
};
r += (pf_0[ k_1 ] || pf_0[ "other" ])( d );
r += "\n";
return r;
}, "flagging.delete_confirm_MF" : function(d){
var r = "";
r += "Você está prestes a excluir ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "POSTS";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "<b>" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + "</b> postagem";
return r;
},
"other" : function(d){
var r = "";
r += "<b>" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + "</b> postagens";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += " e ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "TOPICS";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "<b>" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + "</b> tópico";
return r;
},
"other" : function(d){
var r = "";
r += "<b>" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + "</b> tópicos";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += " deste(a) usuário(a), remover sua conta, bloquear cadastros a partir do seu endereço IP <b>";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["ip_address"];
r += "</b> e adicionar seu endereço de e-mail <b>";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["email"];
r += "</b> a uma lista de bloqueio permanente. Você tem certeza que este(a) usuário(a) é realmente remetente de spam?\n";
return r;
}, "posts_likes_MF" : function(d){
var r = "";
r += "Este tópico tem ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "count";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " resposta";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " respostas";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += " ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "ratio";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"low" : function(d){
var r = "";
r += "com uma alta taxa de postagns para curtidas";
return r;
},
"med" : function(d){
var r = "";
r += "com uma alta muito alta de postagens para curtidas";
return r;
},
"high" : function(d){
var r = "";
r += "com uma taxa extremamente alta de taxa de postagens para curtidas";
return r;
},
"other" : function(d){
var r = "";
return r;
}
};
r += (pf_0[ k_1 ] || pf_0[ "other" ])( d );
r += "\n";
return r;
}, "chat.mention_warning.groups.too_many_members_MF" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "groupCount";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"1" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "isAdmin";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"true" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_3 = "notificationLimit";
var k_3=d[lastkey_3];
var off_2 = 0;
var pf_2 = { 
"one" : function(d){
var r = "";
r += "As menções de @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group1"];
r += " excedem o <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["siteSettingUrl"];
r += "\" target=\"_blank\">limite de notificações</a> de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuário(a).";
return r;
},
"other" : function(d){
var r = "";
r += "As menções de @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group1"];
r += " excedem o <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["siteSettingUrl"];
r += "\" target=\"_blank\">limite de notificações</a> de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuários(as).";
return r;
}
};
if ( pf_2[ k_3 + "" ] ) {
r += pf_2[ k_3 + "" ]( d ); 
}
else {
r += (pf_2[ MessageFormat.locale["pt_BR"]( k_3 - off_2 ) ] || pf_2[ "other" ] )( d );
}
r += "\n            ";
return r;
},
"false" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_3 = "notificationLimit";
var k_3=d[lastkey_3];
var off_2 = 0;
var pf_2 = { 
"one" : function(d){
var r = "";
r += "As menções de @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group1"];
r += " excedem o limite de notificações de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuário(a).";
return r;
},
"other" : function(d){
var r = "";
r += "As menções de @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group1"];
r += " excedem o limite de notificações de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuários(as).";
return r;
}
};
if ( pf_2[ k_3 + "" ] ) {
r += pf_2[ k_3 + "" ]( d ); 
}
else {
r += (pf_2[ MessageFormat.locale["pt_BR"]( k_3 - off_2 ) ] || pf_2[ "other" ] )( d );
}
r += "\n            ";
return r;
},
"other" : function(d){
var r = "";
return r;
}
};
r += (pf_1[ k_2 ] || pf_1[ "other" ])( d );
r += "\n        ";
return r;
},
"2" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "isAdmin";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"true" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_3 = "notificationLimit";
var k_3=d[lastkey_3];
var off_2 = 0;
var pf_2 = { 
"one" : function(d){
var r = "";
r += "As menções de @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group1"];
r += " e @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group2"];
r += " excedem o <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["siteSettingUrl"];
r += "\" target=\"_blank\">limite de notificações</a> de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuário(a).";
return r;
},
"other" : function(d){
var r = "";
r += "As menções de @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group1"];
r += " e @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group2"];
r += " excedem o <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["siteSettingUrl"];
r += "\" target=\"_blank\">limite de notificações</a> de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuários(as).";
return r;
}
};
if ( pf_2[ k_3 + "" ] ) {
r += pf_2[ k_3 + "" ]( d ); 
}
else {
r += (pf_2[ MessageFormat.locale["pt_BR"]( k_3 - off_2 ) ] || pf_2[ "other" ] )( d );
}
r += "\n            ";
return r;
},
"false" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_3 = "notificationLimit";
var k_3=d[lastkey_3];
var off_2 = 0;
var pf_2 = { 
"one" : function(d){
var r = "";
r += "As menções de @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group1"];
r += " e @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group2"];
r += " excedem o limite de notificações de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuário(a).";
return r;
},
"other" : function(d){
var r = "";
r += "As menções de @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group1"];
r += " e @";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["group2"];
r += " excedem o limite de notificações de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuários(as).";
return r;
}
};
if ( pf_2[ k_3 + "" ] ) {
r += pf_2[ k_3 + "" ]( d ); 
}
else {
r += (pf_2[ MessageFormat.locale["pt_BR"]( k_3 - off_2 ) ] || pf_2[ "other" ] )( d );
}
r += "\n            ";
return r;
},
"other" : function(d){
var r = "";
return r;
}
};
r += (pf_1[ k_2 ] || pf_1[ "other" ])( d );
r += "\n        ";
return r;
},
"other" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "isAdmin";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"true" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_3 = "notificationLimit";
var k_3=d[lastkey_3];
var off_2 = 0;
var pf_2 = { 
"one" : function(d){
var r = "";
r += "As menções destes ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupCount"];
r += " grupos excedem o <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["siteSettingUrl"];
r += "\" target=\"_blank\">limite de notificações</a> de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuário(a).";
return r;
},
"other" : function(d){
var r = "";
r += "As menções destes ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupCount"];
r += " grupos excedem o <a href=\"";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["siteSettingUrl"];
r += "\" target=\"_blank\">limite de notificações</a> de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuários(as).";
return r;
}
};
if ( pf_2[ k_3 + "" ] ) {
r += pf_2[ k_3 + "" ]( d ); 
}
else {
r += (pf_2[ MessageFormat.locale["pt_BR"]( k_3 - off_2 ) ] || pf_2[ "other" ] )( d );
}
r += "\n            ";
return r;
},
"false" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_3 = "notificationLimit";
var k_3=d[lastkey_3];
var off_2 = 0;
var pf_2 = { 
"one" : function(d){
var r = "";
r += "As menções destes ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupCount"];
r += " grupos excedem o limite de notificações de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuário(a).";
return r;
},
"other" : function(d){
var r = "";
r += "As menções destes ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupCount"];
r += " grupos excedem o limite de notificações de " + (function(){ var x = k_3 - off_2;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_3+"` isnt a number.");
}
return x;
})() + " usuários(as).";
return r;
}
};
if ( pf_2[ k_3 + "" ] ) {
r += pf_2[ k_3 + "" ]( d ); 
}
else {
r += (pf_2[ MessageFormat.locale["pt_BR"]( k_3 - off_2 ) ] || pf_2[ "other" ] )( d );
}
r += "\n            ";
return r;
},
"other" : function(d){
var r = "";
return r;
}
};
r += (pf_1[ k_2 ] || pf_1[ "other" ])( d );
r += "\n        ";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += "\n";
return r;
}, "chat.create_channel.auto_join_users.warning_multiple_groups_MF" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "groupCount";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "userCount";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"one" : function(d){
var r = "";
r += "Adicionar automaticamente ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["userCount"];
r += " usuário de ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += " e ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupCount"];
r += " outro grupo?";
return r;
},
"other" : function(d){
var r = "";
r += "Adicionar automaticamente ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["userCount"];
r += " usuários de ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += " e ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupCount"];
r += " outro grupo?";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n        ";
return r;
},
"other" : function(d){
var r = "";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_2 = "userCount";
var k_2=d[lastkey_2];
var off_1 = 0;
var pf_1 = { 
"one" : function(d){
var r = "";
r += "Adicionar automaticamente ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["userCount"];
r += " usuário de ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += " e ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupCount"];
r += " outros grupos?";
return r;
},
"other" : function(d){
var r = "";
r += "Adicionar automaticamente ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["userCount"];
r += " usuários de ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupName"];
r += " e ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
r += d["groupCount"];
r += " outros grupos?";
return r;
}
};
if ( pf_1[ k_2 + "" ] ) {
r += pf_1[ k_2 + "" ]( d ); 
}
else {
r += (pf_1[ MessageFormat.locale["pt_BR"]( k_2 - off_1 ) ] || pf_1[ "other" ] )( d );
}
r += "\n        ";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += "\n";
return r;
}, "admin.user.penalty_history_MF" : function(d){
var r = "";
r += "Nos últimos 6 meses este usuário foi suspenso <b>";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "SUSPENDED";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " vez";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " vezes";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += "</b> e <b>silenciado ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "SILENCED";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " vez";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " vezes";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += "</b>.";
return r;
}, "admin.user.delete_all_posts_confirm_MF" : function(d){
var r = "";
r += "Você está prestes a excluir ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "POSTS";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " postagem";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " postagens";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += " e ";
if(!d){
throw new Error("MessageFormat: No data passed to function.");
}
var lastkey_1 = "TOPICS";
var k_1=d[lastkey_1];
var off_0 = 0;
var pf_0 = { 
"one" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " tópico";
return r;
},
"other" : function(d){
var r = "";
r += "" + (function(){ var x = k_1 - off_0;
if( isNaN(x) ){
throw new Error("MessageFormat: `"+lastkey_1+"` isnt a number.");
}
return x;
})() + " tópicos";
return r;
}
};
if ( pf_0[ k_1 + "" ] ) {
r += pf_0[ k_1 + "" ]( d ); 
}
else {
r += (pf_0[ MessageFormat.locale["pt_BR"]( k_1 - off_0 ) ] || pf_0[ "other" ] )( d );
}
r += ". Deseja prosseguir?\n";
return r;
}};
MessageFormat.locale.pt_BR = function ( n ) {
  if ( n === 1 ) {
    return "one";
  }
  return "other";
};

MessageFormat.locale.en = function ( n ) {
  if ( n === 1 ) {
    return "one";
  }
  return "other";
};

(function () {
  I18n.messageFormat = function (key, options) {
    var fn = I18n._compiledMFs[key];
    if (fn) {
      try {
        return fn(options);
      } catch (err) {
        return err.message;
      }
    } else {
      return "Missing Key: " + key;
    }
  };
})();

I18n.translations = {"pt_BR":{"js":{"number":{"format":{"separator":",","delimiter":"."},"human":{"storage_units":{"format":"%n,%u","units":{"byte":{"one":"Byte","other":"Bytes"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"short":{"thousands":"%{number}k","millions":"%{number}M"}},"dates":{"time":"h:mm a","time_with_zone":"hh:mm a (z)","time_short_day":"ddd, HH:mm a","timeline_date":"MMM YYYY","long_no_year":"D MMM, HH:mm","long_no_year_no_time":"D MMM","full_no_year_no_time":"D [de] MMMM","long_with_year":"D MMM, YYYY H:mm","long_with_year_no_time":"D MMM, YYYY","full_with_year_no_time":"D [de] MMMM, YYYY","long_date_without_year":"D MMM, LT","long_date_with_year_without_time":"D MMM, YYYY","long_date_without_year_with_linebreak":"D MMM \u003cbr/\u003eLT","wrap_ago":"%{date} atrás","wrap_on":"em %{date}","tiny":{"half_a_minute":"\u003c 1 m","less_than_x_seconds":{"one":"\u003c %{count} s","other":"\u003c %{count} s"},"x_seconds":{"one":"%{count} s","other":"%{count} s"},"less_than_x_minutes":{"one":"\u003c %{count} m","other":"\u003c %{count} m"},"x_minutes":{"one":"%{count} m","other":"%{count} m"},"about_x_hours":{"one":"%{count} h","other":"%{count} h"},"x_days":{"one":"%{count} d","other":"%{count} d"},"x_months":{"one":"%{count} mês","other":"%{count} meses"},"about_x_years":{"one":"%{count} a","other":"%{count} a"},"over_x_years":{"one":"\u003e %{count} a","other":"\u003e %{count} a"},"almost_x_years":{"one":"%{count} a","other":"%{count} a"},"date_month":"D MMM","date_year":"MMM YYYY"},"medium":{"less_than_x_minutes":{"one":"menos de %{count} min","other":"menos de %{count} mins"},"x_minutes":{"one":"%{count} minuto","other":"%{count} minutos"},"x_hours":{"one":"%{count} hora","other":"%{count} horas"},"about_x_hours":{"one":"cerca de %{count} hora","other":"cerca de %{count} horas"},"x_days":{"one":"%{count} dia","other":"%{count} dias"},"x_months":{"one":"%{count} mês","other":"%{count} meses"},"about_x_years":{"one":"cerca de %{count} ano","other":"cerca de %{count} anos"},"over_x_years":{"one":"mais de %{count} ano","other":"mais de %{count} anos"},"almost_x_years":{"one":"há quase %{count} ano","other":"há quase %{count} anos"},"date_year":"D MMM, YYYY"},"medium_with_ago":{"x_minutes":{"one":"%{count} minuto atrás","other":"%{count} minutos atrás"},"x_hours":{"one":"%{count} hora atrás","other":"%{count} horas atrás"},"x_days":{"one":"%{count} dia atrás","other":"%{count} dias atrás"},"x_months":{"one":"%{count} mês atrás","other":"%{count} meses atrás"},"x_years":{"one":"%{count} ano atrás","other":"%{count} anos atrás"}},"later":{"x_days":{"one":"%{count} dia depois","other":"%{count} dias depois"},"x_months":{"one":"%{count} mês depois","other":"%{count} meses depois"},"x_years":{"one":"%{count} ano depois","other":"%{count} anos depois"}},"previous_month":"Mês anterior","next_month":"Próximo mês","placeholder":"data","from_placeholder":"a partir da data","to_placeholder":"até agora"},"share":{"topic_html":"Tópico: \u003cspan class=\"topic-title\"\u003e%{topicTitle}\u003c/span\u003e","post":"postagem #%{postNumber} de @%{username}","close":"fechar","twitter":"Compartilhar no Twitter","facebook":"Compartilhar no Facebook","email":"Enviar por e-mail","url":"Copiar e compartilhar a URL"},"word_connector":{"comma":", ","last_item":"e"},"action_codes":{"public_topic":"Tornou este tópico público %{when}","open_topic":"Converteu isto em um tópico %{when}","private_topic":"Tornou este tópico em uma mensagem pessoal %{when}","split_topic":"Dividiu este tópico %{when}","invited_user":"Convidou %{who} %{when}","invited_group":"Convidou %{who} %{when}","user_left":"%{who} se removeram desta mensagem %{when}","removed_user":"Removeu %{who} %{when}","removed_group":"Removeu %{who} %{when}","autobumped":"Automaticamente promovido %{when}","tags_changed":"Etiquetas atualizadas em %{when}","category_changed":"Categoria atualizada em %{when}","autoclosed":{"enabled":"Fechado %{when}","disabled":"Aberto %{when}"},"closed":{"enabled":"Fechado %{when}","disabled":"Aberto %{when}"},"archived":{"enabled":"Arquivado %{when}","disabled":"Desarquivado %{when}"},"pinned":{"enabled":"Fixado %{when}","disabled":"Desafixado %{when}"},"pinned_globally":{"enabled":"Fixado globalmente %{when}","disabled":"Desafixado %{when}"},"visible":{"enabled":"Listado %{when}","disabled":"Removeu da lista %{when} atrás"},"banner":{"enabled":"Transformado em banner %{when}. Ele será mostrado no topo de cada página até que seja descartado pelo(a) usuário(a).","disabled":"Removido este banner %{when}. Ele não irá mais aparecer no topo de cada página."},"forwarded":"Encaminhou o e-mail acima","chat":{"enabled":"%{who} ativou o \u003cbutton class=\"btn-link open-chat\"\u003echat\u003c/button\u003e %{when}","disabled":"%{who} fechou o chat %{when}"},"assigned":"Atribuiu a %{who} %{when}","assigned_group":"Atribuiu a %{who} %{when}","assigned_to_post":"Atribuiu %{who} à \u003ca href='%{path}'\u003epostagem\u003c/a\u003e %{when}","assigned_group_to_post":"Atribuiu %{who} à \u003ca href='%{path}'\u003epostagem\u003c/a\u003e %{when}","unassigned":"Cancelou atribuição de %{who} %{when}","unassigned_group":"Cancelou atribuição de %{who} %{when}","unassigned_from_post":"Cancelou atribuição de %{who} da \u003ca href='%{path}'\u003epostagem\u003c/a\u003e %{when}","unassigned_group_from_post":"Cancelou atribuição de %{who} da \u003ca href='%{path}'\u003epostagem\u003c/a\u003e %{when}","reassigned":"reatribuiu %{who} %{when}","reassigned_group":"reatribuiu %{who} %{when}","details_change":"Detalhes de atribuição alterados para %{who} %{when}","note_change":"Observação de atribuição alterada para %{who} %{when}","status_change":"Status de atribuição alterado para %{who} %{when}"},"topic_admin_menu":"ações de tópico","skip_to_main_content":"Ir para o conteúdo principal","skip_user_nav":"Pular para o conteúdo do perfil","emails_are_disabled":"Todos os envios de e-mail foram desabilitados globalmente por um administrador. Nenhuma notificação por e-mail de qualquer tipo será enviada.","emails_are_disabled_non_staff":"O e-mail de saída foi desabilitado para usuários que não são da equipe.","software_update_prompt":{"dismiss":"Descartar"},"bootstrap_mode":"Primeiros passos","back_button":"Voltar","themes":{"default_description":"Padrão","broken_theme_alert":"Seu site pode não funcionar porque o tema/componente tem erros.","error_caused_by":"Causado por '%{name}'. \u003ca target='blank' href='%{path}'\u003eClique aqui\u003c/a\u003e para atualizar, reconfigurar ou desabilitar.","only_admins":"(esta mensagem é mostrada somente aos administradores do site)"},"broken_decorator_alert":"As postagens podem não ser exibidas corretamente porque um dos decoradores de conteúdo de postagem em seu site gerou um erro.","broken_page_change_alert":"Houve um erro no identificador onPageChange. Confira as ferramentas de desenvolvedor do navegador para obter mais informações.","broken_plugin_alert":"Causado(a) pelo plugin \"%{name}\"","critical_deprecation":{"theme_source":"Tema identificado: \u003ca target='_blank' href='%{path}'\u003e\"%{name}\"\u003c/a\u003e.","plugin_source":"Plugin identificado: \"%{name}\""},"s3":{"regions":{"ap_northeast_1":"Ásia Pacífico (Tóquio)","ap_northeast_2":"Ásia Pacífico (Seul)","ap_east_1":"Ásia Pacífico (Hong Kong)","ap_south_1":"Ásia-Pacífico (Mumbai)","ap_southeast_1":"Ásia Pacífico (Singapura)","ap_southeast_2":"Ásia Pacífico (Sidney)","ca_central_1":"Canadá (Central)","cn_north_1":"China (Beijing)","cn_northwest_1":"China (Ningxia)","eu_central_1":"UE (Frankfurt)","eu_north_1":"UE (Estocolmo)","eu_south_1":"UE (Milão)","eu_west_1":"UE (Irlanda)","eu_west_2":"UE (Londres)","eu_west_3":"UE (Paris)","sa_east_1":"América do Sul (São Paulo)","us_east_1":"Leste do EUA (N. da Virgínia)","us_east_2":"Leste do EUA (Ohio)","us_gov_east_1":"AWS GovCloud (Leste dos EUA)","us_gov_west_1":"AWS GovCloud (Oeste dos EUA)","us_west_1":"Oeste dos EUA (N. da Califórnia)","us_west_2":"Oeste dos EUA (Oregon)"}},"clear_input":"Limpar entrada","edit":"Editar","edit_topic":"edite o título e a categoria deste tópico","expand":"Expandir","not_implemented":"Este recurso ainda não foi implementado, desculpe!","no_value":"Não","yes_value":"Sim","ok_value":"Ok","cancel_value":"Cancelar","submit":"Enviar","delete":"Excluir","generic_error":"Desculpe, ocorreu um erro.","generic_error_with_reason":"Ocorreu um erro: %{error}","multiple_errors":"Ocorreram vários erros; %{errors}","sign_up":"Cadastrar-se","log_in":"Entrar","age":"Idade","joined":"Ingressou","admin_title":"Administrador(a)","show_more":"exibir mais","show_help":"opções","links":"Links","links_lowercase":{"one":"link","other":"links"},"faq":"FAQ","guidelines":"Diretrizes","privacy_policy":"Política de Privacidade","privacy":"Privacidade","tos":"Termos de Serviço","rules":"Regras","conduct":"Código de Conduta","mobile_view":"VIsualização Móvel","desktop_view":"Visualização do Desktop","now":"agora","read_more":"leia mais","more":"Mais","x_more":{"one":"Mais %{count}","other":"Mais %{count}"},"never":"nunca","every_30_minutes":"a cada 30 minutos","every_hour":"a cada hora","daily":"a cada dia","weekly":"semanal","every_month":"a cada mês","every_six_months":"a cada seis meses","max_of_count":{"one":"máx de %{count}","other":"máx de %{count}"},"character_count":{"one":"%{count} carácter","other":"%{count} caracteres"},"period_chooser":{"aria_label":"Filtrar por período"},"related_messages":{"title":"Mensagens relacionadas","pill":"Mensagens relacionadas","see_all":"Ver \u003ca href=\"%{path}\"\u003etodas as mensagens\u003c/a\u003e de @ %{username}…"},"suggested_topics":{"title":"Tópicos novos e não lidos","pill":"Sugestões","pm_title":"Mensagens sugeridas"},"about":{"simple_title":"Sobre","title":"Sobre %{title}","stats":"Estatísticas do site","our_admins":"Nossos administradores","our_moderators":"Nossos moderadores","moderators":"Moderadores(as)","stat":{"all_time":"Desde o início","last_day":"24 horas","last_7_days":"Sete dias","last_30_days":"30 dias"},"like_count":"Curtidas","topic_count":"Tópicos","post_count":"Postagens","user_count":"Cadastros","active_user_count":"Usuários(as) ativos(as)","contact":"Fale conosco","contact_info":"Em caso de algum problema crítico ou assunto urgente relacionado a este site, fale conosco em %{contact_info}.","chat_messages_count":"Mensagens de chat","chat_channels_count":"Canais de chat","chat_users_count":"Usuários(as) do chat"},"bookmarked":{"title":"Favorito","edit_bookmark":"Editar favorito","clear_bookmarks":"Limpar favoritos","help":{"bookmark":"Clique para adicionar este tópico aos favoritos","edit_bookmark":"Clique para editar o favorito numa postagem deste tópico","edit_bookmark_for_topic":"Clique para editar o favorito para este tópico","unbookmark":"Clique para remover todos os favoritos neste tópico","unbookmark_with_reminder":"Clique para remover todos os favoritos e lembretes neste tópico"}},"bookmarks":{"created":"Você marcou esta postagem como favorita. %{name}","created_generic":"Você favoritou isso. %{name}","create":"Criar favorito","edit":"Editar favorito","not_bookmarked":"marcar postagem como favorita","remove_reminder_keep_bookmark":"Remover lembrete e manter favorito","created_with_reminder":"Você marcou esta postagem com um lembrete em %{date}. %{name}","created_with_reminder_generic":"Você marcou isso como lembrete em %{date}. %{name}","delete":"Excluir favorito","confirm_delete":"Tem certeza de que deseja excluir este favorito? O lembrete também será excluído.","confirm_clear":"Você tem certeza de que deseja apagar todos os seus favoritos deste tópico?","save":"Salvar","no_timezone":"Você ainda não definiu um fuso horário. Você não poderá definir lembretes. Configure um \u003ca href=\"%{basePath}/my/preferences/profile\"\u003eno seu perfil\u003c/a\u003e.","invalid_custom_datetime":"A data e a hora que você informou são inválidas, tente novamente.","list_permission_denied":"Você não tem permissão para visualizar os favoritos deste usuário(a).","no_user_bookmarks":"Você não tem postagens favoritas. Os favoritos permitem que você consulte rapidamente postagens específicas.","auto_delete_preference":{"label":"Após receber notificação","never":"Manter marcador","when_reminder_sent":"Excluir favorito","on_owner_reply":"Excluir marcador, após responder","clear_reminder":"Manter marcador e limpar lembretes"},"search_placeholder":"Pesquisar os favoritos por nome, título do tópico ou conteúdo da postagem","search":"Pesquisar","bookmark":"Marcador","reminders":{"today_with_time":"hoje à(s) %{time}","tomorrow_with_time":"amanhã à(s) %{time}","at_time":"em %{date_time}","existing_reminder":"Você tem um lembrete definido para este favorito que será enviado em %{at_date_time}"}},"copy_codeblock":{"copied":"copiado!","copy":"copiar código para a área de transferência","fullscreen":"exibir código em tela cheia","view_code":"Visualizar código"},"drafts":{"label":"Rascunhos","label_with_count":"Rascunhos (%{count})","resume":"Retomar","remove":"Remover","remove_confirmation":"Tem certeza de que deseja excluir este rascunho?","new_topic":"Novo rascunho de tópico","new_private_message":"Novo rascunho de mensagem","abandon":{"confirm":"Você já tem um rascunho em andamento. O que deseja fazer com ele?","yes_value":"Descartar","no_value":"Retomar a edição"}},"topic_count_all":{"one":"Veja %{count} novo tópico","other":"Veja %{count} novos tópicos"},"topic_count_categories":{"one":"Veja %{count} tópico novo ou atualizado","other":"Veja %{count} tópicos novos ou atualizados"},"topic_count_latest":{"one":"Veja %{count} tópico novo ou atualizado","other":"Veja %{count} tópicos novos ou atualizados"},"topic_count_unseen":{"one":"Veja %{count} tópico novo ou atualizado","other":"Veja %{count} tópicos novos ou atualizados"},"topic_count_unread":{"one":"Veja %{count} tópico não lido","other":"Veja %{count} tópicos não lidos"},"topic_count_new":{"one":"Veja %{count} novo tópico","other":"Veja %{count} novos tópicos"},"preview":"pré-visualizar","cancel":"cancelar","deleting":"Excluindo…","save":"Salvar alterações","saving":"Salvando…","saved":"Salvo!","upload":"Enviar","uploading":"Enviando…","processing":"Processando…","uploading_filename":"Enviando: %{filename}…","processing_filename":"Processando: %{filename}…","clipboard":"área de transferência","uploaded":"Enviado!","pasting":"Colando…","enable":"Ativar","disable":"Desativar","continue":"Continuar","switch_to_anon":"Entrar no Modo anônimo","switch_from_anon":"Sair do Modo anônimo","banner":{"close":"Descarte este banner","edit":"Editar"},"pwa":{"install_banner":"Você quer \u003ca href\u003einstalar %{title} no seu dispositivo?\u003c/a\u003e"},"choose_topic":{"none_found":"Nenhum tópico encontrado.","title":{"search":"Pesquisar um tópico","placeholder":"digite o título do tópico, URL ou ID aqui"}},"choose_message":{"none_found":"Nenhuma mensagem encontrada.","title":{"search":"Pesquisar mensagem","placeholder":"digite o título da mensagem, URL ou ID aqui"}},"review":{"show_more":"Exibir mais","show_less":"Exibir menos","order_by":"Ordenar por","date_filter":"Postado entre","in_reply_to":"em resposta a","explain":{"why":"explique por que este item foi colocado na fila","title":"Pontuação revisável","formula":"Fórmula","subtotal":"Subtotal","total":"Total","min_score_visibility":"Pontuação mínima para visibilidade","score_to_hide":"Pontuação para ocultar postagem","take_action_bonus":{"name":"tomou medidas","title":"Quando qualquer membro da equipe decide agir, o sinalizador recebe um bônus."},"user_accuracy_bonus":{"name":"precisão do(a) usuário(a)","title":"Os(as) usuários(as) com sinalizadores historicamente acordados recebem um bônus."},"trust_level_bonus":{"name":"nível de confiança","title":"Itens revisáveis criados por usuários(as) com nível de confiança mais alto têm uma pontuação maior."},"type_bonus":{"name":"bônus de tipo","title":"Certos tipos revisáveis podem receber um bônus da equipe para aumentar sua prioridade."}},"revise_and_reject_post":{"title":"Revisar","reason":"Motivo","send_pm":"Enviar MP","feedback":"Comentário","custom_reason":"Forneça uma descrição clara do motivo","other_reason":"Outro...","optional":"opcional"},"stale_help":"Este revisável foi encerrado por \u003cb\u003e%{username}\u003c/b\u003e.","claim_help":{"optional":"Você pode reivindicar este item para impedir que outras pessoas o revisem.","required":"Você precisa reivindicar itens antes de poder revisá-los.","claimed_by_you":"Você reivindicou este item e pode revisá-lo.","claimed_by_other":"Este item só pode ser revisado por \u003cb\u003e%{username}\u003c/b\u003e."},"claim":{"title":"reivindicar este tópico"},"unclaim":{"help":"remover esta reivindicação"},"awaiting_approval":"Aguardando aprovação","delete":"Excluir","settings":{"saved":"Salvo","save_changes":"Salvar alterações","title":"Configurações","priorities":{"title":"Prioridades revisáveis"}},"moderation_history":"Histórico de moderação","view_all":"Visualizar tudo","grouped_by_topic":"Agrupado por tópico","none":"Não há itens para revisar.","view_pending":"visualização pendente","topic_has_pending":{"one":"Este tópico tem \u003cb\u003e%{count}\u003c/b\u003e postagem com aprovação pendente","other":"Este tópico tem \u003cb\u003e%{count}\u003c/b\u003e postagens com aprovação pendente"},"title":"Revisar","topic":"Tópico:","filtered_topic":"Você filtrou para conteúdo revisável em um único tópico.","filtered_user":"Usuário(a)","filtered_reviewed_by":"Revisado por","show_all_topics":"exibir todos os tópicos","deleted_post":"(postagem excluída)","deleted_user":"(usuário(a) excluído(a))","user":{"bio":"Bio","website":"Site","username":"Nome do(a) usuário(a)","email":"E-mail","name":"Nome","fields":"Campos","reject_reason":"Motivo"},"user_percentage":{"summary":{"one":"%{agreed}, %{disagreed}, %{ignored} (do último sinalizador)","other":"%{agreed}, %{disagreed}, %{ignored} (dos últimos %{count} sinalizadores)"},"agreed":{"one":"%{count}% concorda","other":"%{count}% concordam"},"disagreed":{"one":"%{count}% discorda","other":"%{count}% discordam"},"ignored":{"one":"%{count}% ignora","other":"%{count}% ignoram"}},"topics":{"topic":"Tópico","reviewable_count":"Contagem","reported_by":"Relatado por","deleted":"[Tópico excluído]","original":"(tópico original)","details":"detalhes","unique_users":{"one":"%{count} usuário","other":"%{count} usuários"}},"replies":{"one":"%{count} resposta","other":"%{count} respostas"},"edit":"Editar","save":"Salvar","cancel":"Cancelar","new_topic":"A aprovação deste item criará um novo tópico","filters":{"all_categories":"(todas as categorias)","type":{"title":"Tipo","all":"(todos os tipos)"},"minimum_score":"Pontuação mínima:","refresh":"Atualizar","status":"Status","category":"Categoria","orders":{"score":"Pontuação","score_asc":"Pontuação (reversa)","created_at":"Criado em","created_at_asc":"Criado em (reverso)"},"priority":{"title":"Prioridade mínima","any":"(qualquer um)","low":"Baixa","medium":"Média","high":"Alta"}},"conversation":{"view_full":"visualizar conversa completa"},"scores":{"about":"Esta pontuação é calculada com base no nível de confiança do relator, na precisão de suas sinalizações anteriores e na prioridade do item que está sendo relatado.","score":"Pontuação","date":"Data do relatório","type":"Motivo","status":"Status","submitted_by":"Denunciado por","reviewed_by":"Revisado por","reviewed_timestamp":"Revisar data"},"statuses":{"pending":{"title":"Pendentes"},"approved":{"title":"Aprovado"},"approved_flag":{"title":"Etiqueta aprovada"},"approved_user":{"title":"Usuário(a) aprovado(a)"},"approved_post":{"title":"Postagem aprovada"},"rejected":{"title":"Rejeitado"},"rejected_flag":{"title":"Sinalização recusada"},"rejected_user":{"title":"Usuário(a) recusado(a)"},"rejected_post":{"title":"Postagem recusada"},"ignored":{"title":"Sinalizador ignorado"},"deleted":{"title":"Tópico ou postagem excluída"},"reviewed":{"title":"Tudo revisado"},"all":{"title":"Tudo"}},"context_question":{"is_this_post":"Este(a) %{reviewable_type} é %{reviewable_human_score_types}?","delimiter":"ou","something_else_wrong":"Há algo errado em %{reviewable_type}?"},"types":{"reviewable_flagged_post":{"title":"Postagem sinalizada","flagged_by":"Sinalizado por","noun":"postar"},"reviewable_queued_topic":{"title":"Tópico na fila","noun":"tópico"},"reviewable_queued_post":{"title":"Postagem na fila","noun":"postar"},"reviewable_user":{"title":"Usuário(a)","noun":"usuário(a)"},"reviewable_post":{"title":"Postagem","noun":"postar"},"chat_reviewable_message":{"title":"Mensagem de chat sinalizada"},"reviewable_chat_message":{"title":"Mensagem de chat sinalizada","noun":"mensagem de chat"},"reviewable_ai_post":{"title":"Postagem sinalizada com IA"},"reviewable_ai_chat_message":{"title":"Mensagem de chat sinalizada com IA"},"reviewable_akismet_post":{"title":"Postagem sinalizada por Akismet","noun":"postar"},"reviewable_akismet_user":{"title":"Usuário(a) sinalizado(a) por Akismet"},"reviewable_akismet_post_voting_comment":{"title":"Comentário na votação de postagem sinalizado pelo Akismet"},"reviewable_post_voting_comment":{"title":"Comentário de votação em postagem sinalizado"}},"approval":{"title":"A postagem precisa de aprovação","description":"Nós recebemos sua nova postagem, mas é necessário ter aprovação da moderação antes de ser exibida. Pedimos paciência.","pending_posts":{"one":"Você tem \u003cstrong\u003e%{count}\u003c/strong\u003e postagem pendente.","other":"Você tem postagens \u003cstrong\u003e%{count}\u003c/strong\u003e pendentes."},"ok":"Ok"},"example_username":"nome do(a) usuário(a)","reject_reason":{"title":"Por que você está rejeitando este(a) usuário(a)?","send_email":"Enviar e-mail de rejeição"},"transcript":{"view":"Ver transcrição de mensagens anteriores"}},"relative_time_picker":{"minutes":{"one":"minuto","other":"minutos"},"hours":{"one":"hora","other":"horas"},"days":{"one":"dia","other":"dias"},"months":{"one":"mês","other":"meses"},"years":{"one":"ano","other":"anos"},"relative":"Relativo"},"time_shortcut":{"now":"Agora","in_one_hour":"Em uma hora","in_two_hours":"Em duas horas","later_today":"Hoje mais tarde","two_days":"Dois dias","next_business_day":"Próximo dia útil","tomorrow":"Amanhã","post_local_date":"Data na postagem","later_this_week":"Mais tarde nesta semana","this_weekend":"Neste fim de semana","start_of_next_business_week":"Segunda-feira","start_of_next_business_week_alt":"Próxima segunda-feira","next_week":"Próxima semana","two_weeks":"Duas semanas","next_month":"Próximo mês","two_months":"Dois meses","three_months":"Três meses","four_months":"Quatro meses","six_months":"Seis meses","one_year":"Um ano","forever":"Para sempre","relative":"Tempo relativo","none":"Nenhum necessário","never":"Nunca","last_custom":"Última data personalizada","custom":"Data e hora personalizadas","custom_short":"Personalizado...","select_timeframe":"Selecione um intervalo de tempo"},"user_action":{"user_posted_topic":"\u003ca href='%{userUrl}'\u003e%{user}\u003c/a\u003e postou \u003ca href='%{topicUrl}'\u003eo tópico\u003c/a\u003e","you_posted_topic":"\u003ca href='%{userUrl}'\u003eVocê\u003c/a\u003e postou \u003ca href='%{topicUrl}'\u003eo tópico\u003c/a\u003e","user_replied_to_post":"\u003ca href='%{userUrl}'\u003e%{user}\u003c/a\u003e respondeu \u003ca href='%{postUrl}'\u003e%{post_number}\u003c/a\u003e","you_replied_to_post":"\u003ca href='%{userUrl}'\u003eVocê\u003c/a\u003e respondeu a \u003ca href='%{postUrl}'\u003e%{post_number}\u003c/a\u003e","user_replied_to_topic":"\u003ca href='%{userUrl}'\u003e%{user}\u003c/a\u003e respondeu ao \u003ca href='%{topicUrl}'\u003etópico\u003c/a\u003e","you_replied_to_topic":"\u003ca href='%{userUrl}'\u003eVocê\u003c/a\u003e respondeu ao \u003ca href='%{topicUrl}'\u003etópico\u003c/a\u003e","user_mentioned_user":"\u003ca href='%{user1Url}'\u003e%{user}\u003c/a\u003e mencionou \u003ca href='%{user2Url}'\u003e%{another_user}\u003c/a\u003e","user_mentioned_you":"\u003ca href='%{user2Url}'\u003eVocê\u003c/a\u003e foi mencionado(a) por \u003ca href='%{user1Url}'\u003e%{user}\u003c/a\u003e","you_mentioned_user":"\u003ca href='%{user1Url}'\u003eVocê\u003c/a\u003e mencionou \u003ca href='%{user2Url}'\u003e%{another_user}\u003c/a\u003e","posted_by_user":"Postado por \u003ca href='%{userUrl}'\u003e%{user}\u003c/a\u003e","posted_by_you":"Postado por \u003ca href='%{userUrl}'\u003evocê\u003c/a\u003e","sent_by_user":"Enviado por \u003ca href='%{userUrl}'\u003e%{user}\u003c/a\u003e","sent_by_you":"Enviado por \u003ca href='%{userUrl}'\u003evocê\u003c/a\u003e"},"directory":{"username":"Nome do(a) usuário(a)","filter_name":"Filtrar por nome do usuário(a)","title":"Usuários(as)","likes_given":"Dados","likes_received":"Recebidos","topics_entered":"Visualizados","topics_entered_long":"Tópicos visualizados","time_read":"Tempo lido","topic_count":"Tópicos","topic_count_long":"Tópicos criados","post_count":"Respostas","post_count_long":"Respostas postadas","days_visited":"Acessos","days_visited_long":"Dias acessados","posts_read":"Lidos","posts_read_long":"Postagens lidas","last_updated":"Última atualização:","total_rows":{"one":"%{count} usuário","other":"%{count} usuários"},"edit_columns":{"title":"Editar colunas do diretório","save":"Salvar","reset_to_default":"Restaurar para padrão"},"group":{"all":"todos os grupos"},"sort":{"label":"Classificar por %{criteria}"}},"group_histories":{"actions":{"change_group_setting":"Alterar configurações do grupo","add_user_to_group":"Adicionar usuário","remove_user_from_group":"Remover usuário","make_user_group_owner":"Tornar proprietário(a)","remove_user_as_group_owner":"Revogar proprietário"}},"groups":{"member_added":"Adicionado","member_requested":"Pedido em","add_members":{"title":"Adicionar usuários(a) a %{group_name}","description":"Insira uma lista de usuários(as) que você quer convidar para o grupo ou cole em uma lista separada por vírgulas:","usernames_placeholder":"nomes de usuário(a)","usernames_or_emails_placeholder":"nomes de usuário(a) ou e-maiis","notify_users":"Notificar usuários","set_owner":"Definir usuários(as) como proprietários(as) deste grupo"},"requests":{"title":"Pedidos","reason":"Motivo","accept":"Aceitar","accepted":"aceito","deny":"Negar","denied":"negado","undone":"Pedido desfeito","handle":"tratar pedido de associação","undo":"Desfazer"},"manage":{"title":"Gerenciar","name":"Nome","full_name":"Nome completo","add_members":"Adicionar usuários(as)","invite_members":"Convidar","delete_member_confirm":"Remover %{username} do %{group} grupo?","profile":{"title":"Perfil"},"interaction":{"title":"Interação","posting":"Postando","notification":"Notificação"},"email":{"title":"E-mail","status":"Sincronizado(s) %{old_emails}/%{total_emails} e-mail(s) via IMAP.","enable_smtp":"Ativar SMTP","enable_imap":"Ativar IMAP","test_settings":"Configurações de teste","save_settings":"Salvar configurações","last_updated":"Última atualização:","last_updated_by":"de","settings_required":"Todas as configurações são obrigatórias, preencha todos os campos antes de validar.","smtp_settings_valid":"Configurações de SMTP válidas.","smtp_title":"SMTP","smtp_instructions":"Quando você ativa o SMTP para o grupo, todos os e-mails enviados da caixa de entrada do grupo serão enviados pelas configurações de SMTP especificadas aqui, em vez do servidor de e-mail configurado para outros e-mails enviados pelo seu fórum.","imap_title":"IMAP","imap_additional_settings":"Configurações adicionais","imap_instructions":"Quando você ativa o IMAP para o grupo, os e-mails são sincronizados entre a caixa de entrada do grupo, o servidor IMAP e a caixa de mensagens fornecidos. O SMTP deve ser ativado com as credenciais válidas e testadas antes que o IMAP possa ser ativado. O nome do(a) usuário(a) e a senha de e-mail usados para o SMTP serão aplicados ao IMAP. Para obter mais informações, consulte \u003ca target=\"_blank\" href=\"https://meta.discourse.org/t/imap-support-for-group-inboxes/160588\"\u003eanúncio de recursos no Discourse Meta\u003c/a\u003e.","imap_alpha_warning":"Aviso: este recurso está no estágio alfa. Apenas o Gmail é oficialmente compatível. Use por sua conta e risco!","imap_settings_valid":"Configurações IMAP válidas.","smtp_disable_confirm":"Se você desativar o SMTP, todas as configurações de SMTP e IMAP serão redefinidas e os recursos correspondentes serão desativados. Tem certeza de que quer continuar?","imap_disable_confirm":"Se você desativar o IMAP, todas as configurações de IMAP serão redefinidas e os recursos correspondentes serão desativados. Tem certeza de que quer continuar?","imap_mailbox_not_selected":"Se você selecionar uma caixa de entrada para esta configuração IMAP ou nenhuma caixa postal será sincronizada!","prefill":{"title":"Preencher com configurações para:","gmail":"Gmail"},"credentials":{"title":"Credenciais","smtp_server":"Servidor SMTP","smtp_port":"Porta SMTP","smtp_ssl":"Usar SSL para SMTP","imap_server":"Servidor IMAP","imap_port":"Porta IMAP","imap_ssl":"Usar SSL para IMAP","username":"Nome do(a) usuário(a)","password":"Senha"},"settings":{"title":"Configurações","allow_unknown_sender_topic_replies":"Permita que remetentes desconhecidos respondam a tópicos.","allow_unknown_sender_topic_replies_hint":"Permite que remetentes desconhecidos(as) respondam a tópicos de grupo. Se não estiver ativado, será criado um novo tópico para respostas de endereços de e-mail de usuários(as) não convidados para o tópico.","from_alias":"De Alias","from_alias_hint":"Nome alternativo para ser utilizado como endereço de origem para enviar emails SMTP. Observe que isso pode não ser compatível com todos os provedores de email, consulte a documentação do seu provedor."},"mailboxes":{"synchronized":"Caixa de mensagens sincronizada","none_found":"Nenhuma caixa de mensagens foi encontrada nesta conta de e-mail.","disabled":"Desativado(a)"}},"membership":{"title":"Associação","access":"Acesso"},"categories":{"title":"Categorias","long_title":"Notificações padrão da categoria","description":"Quando usuários(as) são adicionados(as) a esse grupo, suas configurações de notificação de categoria serão definidas para estes padrões. Em seguida, poderão ser alteradas.","watched_categories_instructions":"Você acompanha todos os tópicos destas categorias automaticamente. Membros do grupo serão notificados de todas as postagens novas, e varias delas também serão exibidas perto do tópico.","tracked_categories_instructions":"Você monitora todos os tópicos nestas categorias automaticamente . Várias postagens novas serão exibidas ao lado do tópico.","watching_first_post_categories_instructions":"Usuários(as) serão notificados(as) sobre a primeira mensagem postada em cada tópico novo destas categorias.","regular_categories_instructions":"Se estas categorias forem silenciadas, elas não serão silenciadas para membros do grupo. Os(as) usuários(as) serão notificados em caso de menção ou resposta.","muted_categories_instructions":"Os(as) usuários(as) não serão notificados sobre novos tópicos nestas categorias nem aparecerão nas categorias ou nas páginas de tópicos mais recentes."},"tags":{"title":"Etiquetas","long_title":"Notificações padrão das etiquetas","description":"Quando usuários(as) são adicionados(as) a esse grupo, suas configurações de notificação de etiqueta serão definidas para estes padrões. Em seguida, poderão ser alteradas.","watched_tags_instructions":"Você acompanha todos os tópicos com estas etiquetas automaticamente. Membros do grupo serão notificados de todas as postagens novas, e varias delas também serão exibidas perto do tópico.","tracked_tags_instructions":"Monitore automaticamente todos os tópicos com estas etiquetas. Uma contagem de postagens novas será exibida ao lado do tópico.","watching_first_post_tags_instructions":"Os(as) usuários(as) receberão uma notificação sobre a primeira postagem em cada tópico novo com estas etiquetas.","regular_tags_instructions":"Se estas etiquetas forem silenciadas, elas não serão silenciadas para membros do grupo. Os(as) usuários(as) serão notificados em caso de menção ou resposta.","muted_tags_instructions":"Os(as) usuários(as) não receberão notificação sobre novos tópicos com estas etiquetas, e eles não serão exibidas nos mais recentes."},"logs":{"title":"Registros","when":"Quando","action":"Ação","acting_user":"Usuário agindo","target_user":"Usuário(a) de destino","subject":"Assunto","details":"Detalhes","from":"De","to":"Para"}},"permissions":{"title":"Permissões","none":"Não há categorias associadas a este grupo.","description":"Membros deste grupo podem acessar estas categorias"},"public_admission":"Permitir que os usuários entrem no grupo livremente (Requer grupo publicamente visível)","public_exit":"Permitir que os usuários saiam do grupo livremente","empty":{"posts":"Não há publicações de membros deste grupo.","members":"Não há membros neste grupo.","requests":"Não há pedidos de associação para este grupo.","mentions":"Não há menções a este grupo.","messages":"Não há mensagens para este grupo.","topics":"Não há tópicos de membros deste grupo.","logs":"Não há registros para este grupo."},"add":"Adicionar","join":"Ingressar","leave":"Sair","request":"Pedir","message":"Mensagem","confirm_leave":"Tem certeza de que deseja sair deste grupo?","allow_membership_requests":"Permitir que usuários(as) enviem pedidos de associação a proprietários(as) do grupo (requer grupo visível ao público)","membership_request_template":"Modelo personalizado para exibir aos usuários ao enviar um pedido de associação","membership_request":{"submit":"Enviar pedido","title":"Pedir para entrar no grupo @%{group_name}","reason":"Diga aos proprietários do grupo por que você pertence a este grupo"},"membership":"Associação","name":"Nome","group_name":"Nome do grupo","user_count":"Usuários(as)","bio":"Sobre o grupo","selector_placeholder":"insira o nome do(a) usuário(a)","owner":"proprietário(a)","index":{"title":"Grupos","all":"Todos os grupos","empty":"Não há grupos visíveis.","filter":"Filtrar por tipo de grupo","owner_groups":"Grupos que eu tenho","close_groups":"Grupos fechados","automatic_groups":"Grupos automáticos","automatic":"Automático","closed":"Fechado","public":"Público","private":"Privado","public_groups":"Grupos públicos","my_groups":"Meus grupos","group_type":"Tipo de grupo","is_group_user":"Membro","is_group_owner":"Proprietário(a)","search_results":"Os resultados da pesquisa serão exibidos abaixo."},"title":{"one":"Grupo","other":"Grupos"},"activity":"Atividade","members":{"title":"Membros","filter_placeholder_admin":"nome do(a) usuário(a) ou e-mail","filter_placeholder":"nome do(a) usuário(a)","remove_member":"Remover membro","remove_member_description":"Remover \u003cb\u003e%{username}\u003c/b\u003e deste grupo","make_owner":"Tornar proprietário(a)","make_owner_description":"Tornar \u003cb\u003e%{username}\u003c/b\u003e proprietário(a) deste grupo","remove_owner":"Remover como proprietário(a)","remove_owner_description":"Remover \u003cb\u003e%{username}\u003c/b\u003e como proprietário(a) deste grupo","make_primary":"Tornar primário","make_primary_description":"Tornar este grupo primário para \u003cb\u003e%{username}\u003c/b\u003e","remove_primary":"Remover como primário","remove_primary_description":"Remover este grupo como primário para \u003cb\u003e%{username}\u003c/b\u003e","remove_members":"Remover membros","remove_members_description":"Remover usuários(as) selecionados(as) deste grupo","make_owners":"Tornar proprietários(as)","make_owners_description":"Tornar usuários(as) selecionados(as) proprietários(as) deste grupo","remove_owners":"Remover proprietários(as)","remove_owners_description":"Remover usuários(as) selecionados(as) como proprietários(as) deste grupo","make_all_primary":"Tornar primário para todos","make_all_primary_description":"Tornar este grupo primário para todos os(as) usuários(as) selecionados(as)","remove_all_primary":"Remover como primário","remove_all_primary_description":"Remover este grupo como primário","status":"Status","owner":"Proprietário(a)","primary":"Primário","forbidden":"Você não tem permissão para visualizar membros.","no_filter_matches":"Nenhum membro corresponde a essa pesquisa."},"topics":"Tópicos","posts":"Postagens","aria_post_number":"%{title} - postagem #%{postNumber}","mentions":"Menções","messages":"Mensagens","notification_level":"Nível de notificação padrão para mensagens de grupo","alias_levels":{"mentionable":"Quem pode @mencionar este grupo?","messageable":"Quem pode enviar mensagens a este grupo?","nobody":"Ninguém","only_admins":"Somente administradores","mods_and_admins":"Somente moderadores e administradores","members_mods_and_admins":"Somente membros do grupo, moderadores e administradores","owners_mods_and_admins":"Somente proprietários do grupo, moderadores e administradores","everyone":"Todos(as)"},"notifications":{"watching":{"title":"Acompanhando","description":"Você será notificado sobre novas postagens em cada mensagem, e uma contagem de novas respostas será exibida."},"watching_first_post":{"title":"Acompanhando primeira postagem","description":"Você será notificado(a) sobre novas mensagens neste grupo, mas não sobre respostas."},"tracking":{"title":"Monitorando","description":"Você será notificado(a) se alguém mencionar seu @nome ou responder, e uma contagem de novas respostas será exibida."},"regular":{"title":"Normal","description":"Você será notificado(a) se alguém mencionar seu @nome ou responder."},"muted":{"title":"Silenciado","description":"Você não receberá nenhuma notificação sobre mensagens neste grupo."}},"flair_url":"Imagem de estilo de avatar","flair_upload_description":"Use imagens quadradas não menores do que 20px por 20px.","flair_bg_color":"Cor de fundo do estilo de avatar","flair_bg_color_placeholder":"(Opcional) Valor da cor em hexadecimal","flair_color":"Cor do estilo de avatar","flair_color_placeholder":"(Opcional) Valor da cor em hexadecimal","flair_preview_icon":"Pré-visualizar ícone","flair_preview_image":"Pré-visualizar imagem","flair_type":{"icon":"Selecione um ícone","image":"Enviar uma imagem"},"default_notifications":{"modal_title":"Notificações padrão do(a) usuário(a)","modal_yes":"Sim","modal_no":"Não, apenas aplique alterações daqui para frente"}},"user_action_groups":{"1":"Curtidas","2":"Curtidas","3":"Favoritos","4":"Tópicos","5":"Respostas","6":"Reações","7":"Menções","9":"Citações","11":"Edições","12":"Itens enviados","13":"Caixa de entrada","14":"Pendentes","15":"Rascunhos","17":"Links"},"categories":{"categories_label":"categorias","subcategories_label":"subcategorias","no_subcategories":"nenhuma subcategoria","remove_filter":"remover filtro","plus_more_count":{"one":"mais %{count}","other":"mais %{count}"},"view_all":"ver tudo","category":"Categoria","category_list":"Exibir lista de categorias","reorder":{"title":"Reordenar Categorias","title_long":"Reorganizar a lista de categorias","save":"Salvar ordem","apply_all":"Aplicar","position":"Posição"},"posts":"Postagens","topics":"Tópicos","latest":"Últimos","subcategories":"Subcategorias","muted":"Categorias silenciadas","topic_sentence":{"one":"%{count} tópico","other":"%{count} tópicos"},"topic_stat":{"one":"%{number}/%{unit}\n","other":"%{number}/%{unit}"},"topic_stat_unit":{"week":"semana","month":"mês"},"topic_stat_all_time":{"one":"%{number} no total","other":"%{number} no total"},"topic_stat_sentence_week":{"one":"%{count} novo tópico na última semana.","other":"%{count} novos tópicos na última semana."},"topic_stat_sentence_month":{"one":"%{count} novo tópico no último mês.","other":"%{count} novos tópicos no último mês."},"n_more":{"one":"Categorias (mais %{count})…","other":"Categorias (mais %{count})…"}},"ip_lookup":{"title":"Pesquisa de endereço IP","hostname":"Nome do host","location":"Localização","location_not_found":"(desconhecido)","organisation":"Organização","phone":"Telefone","other_accounts":"Outras contas com este endereço IP:","delete_other_accounts":{"one":"Excluir %{count}","other":"Excluir %{count}"},"username":"nome do(a) usuário(a)","trust_level":"NC","read_time":"tempo de leitura","topics_entered":"tópicos inseridos","post_count":"# postagens","confirm_delete_other_accounts":"Tem certeza de que deseja excluir estas contas?","powered_by":"usando \u003ca href='https://maxmind.com'\u003eMaxMindDB\u003c/a\u003e","copied":"copiado"},"user_fields":{"none":"(selecione uma opção)","required":"Digite um valor para \"%{name}\"","same_as_password":"Sua senha não deve ser repetida em outros campos."},"user":{"said":"%{username}:","profile":"Perfil","profile_possessive":"Perfil de %{username}","account_possessive":"Conta de %{name}","mute":"Silenciar","edit":"Editar preferências","download_archive":{"title":"Exportar seus dados","description":"Baixe um arquivo das atividades e preferências da sua conta.","button_text":"Solicitar arquivo","confirm":"Você deseja mesmo baixar um arquivo das atividades e preferências da sua conta?","success":"Começamos a coletar seu arquivo, você receberá uma mensagem quando o processo for concluído.","rate_limit_error":"Arquivos de conta podem ser baixados somente uma vez por dia, tente novamente amanhã."},"new_private_message":"Nova mensagem","private_message":"Mensagem","private_messages":"Mensagens","user_notifications":{"filters":{"filter_by":"Filtrar por","all":"Tudo","read":"Lidos(as)","unread":"Não lidos(as)","unseen":"Não vistos"},"ignore_duration_title":"Ignorar usuário(a)","ignore_duration_username":"Nome do(a) usuário(a)","ignore_duration_when":"Duração:","ignore_duration_save":"Ignorar","ignore_duration_note":"Observe que todas as ações ignorar serão removidas automaticamente após essa ação expirar.","ignore_duration_time_frame_required":"Selecione um intervalo de tempo","ignore_no_users":"Você não tem usuários(as) ignorados(as).","ignore_option":"Ignorado(a)","ignore_option_title":"Você não receberá notificações relacionadas a este(a) usuário(a), e todos os tópicos e respostas serão ocultos.","add_ignored_user":"Adicionar…","mute_option":"Silenciado(a)","mute_option_title":"Você não receberá notificações relacionadas a este(a) usuário(a).","normal_option":"Normal","normal_option_title":"Você receberá uma notificação se este(a) usuário(a) responder, citar ou mencionar."},"notification_schedule":{"title":"Agendamento de notificações","label":"Ativar agendamento de notificações personalizada","tip":"Fora desse horário, suas notificações serão pausadas.","midnight":"Meia-noite","none":"Nenhum","monday":"Segunda-feira","tuesday":"Terça-feira","wednesday":"Quarta-feira","thursday":"Quinta-feira","friday":"Sexta-feira","saturday":"Sábado","sunday":"Domingo","to":"para"},"activity_stream":"Atividade","read":"Lidos","read_help":"Tópicos lidos recentemente","preferences":"Preferências","feature_topic_on_profile":{"open_search":"Selecione um novo tópico","title":"Selecione um tópico","search_label":"Pesquisar tópico por título","save":"Salvar","clear":{"title":"Limpar","warning":"Tem certeza de que deseja remover o tópico em destaque?"}},"use_current_timezone":"Usar fuso horário atual","profile_hidden":"O perfil público deste(a) usuário(a) está oculto.","inactive_user":"Este usuário(a) não está mais ativo(a).","expand_profile":"Expandir","sr_expand_profile":"Expandir detalhes do perfil","collapse_profile":"Recolher","sr_collapse_profile":"Recolher detalhes do perfil","bookmarks":"Favoritos","bio":"Sobre mim","timezone":"Fuso horário","invited_by":"Convidado por","trust_level":"Nível de confiança","notifications":"Notificações","statistics":"Estatísticas","desktop_notifications":{"label":"Notificações ao vivo","not_supported":"Notificações não compatíveis com este navegador. Desculpe.","perm_default":"Ativar notificações","perm_denied_btn":"Permissão negada","perm_denied_expl":"Você negou permissão para notificações. Permita as notificações nas configurações do seu navegador.","disable":"Desativar notificações","enable":"Ativar notificações","each_browser_note":"Observação: é preciso alterar esta configuração em todos os navegadores que você usar. Todas as notificações serão desativadas se você pausar as notificações no menu do usuário, independentemente desta configuração.","consent_prompt":"Você quer notificações em tempo real quando as pessoas responderem às suas postagens?"},"dismiss":"Descartar","dismiss_notifications":"Descartar tudo","dismiss_notifications_tooltip":"Marcar todas as notificações não lidas como lidas","dismiss_bookmarks_tooltip":"Marcar todos os lembretes de favoritos não lidos como lidos","dismiss_messages_tooltip":"Marcar todas as notificações de mensagens pessoais não lidas como lidas","no_likes_title":"Você ainda não recebeu nenhuma curtida","no_likes_body":"Você receberá uma notificação aqui sempre que alguém curtir uma de suas postagens, para que possa saber o que os outros estão achando valioso. Outros também verão o mesmo quando você curtir as postagens deles! \u003cbr\u003e\u003cbr\u003e Notificações de curtidas nunca são enviadas para seu e-mail, mas você pode configurar a forma de receber notificações sobre curtidas no site ajustando suas \u003ca href='%{preferencesUrl}'\u003epreferências de notificação\u003c/a\u003e.\n","no_messages_title":"Você não tem mensagens","no_messages_body":"Precisa ter uma conversa pessoal direta, fora do fluxo de conversa normal? Envie uma mensagem ao selecionar o seu avatar e usar o botão de mensagem %{icon}.\u003cbr\u003e\u003cbr\u003e Se precisar de ajuda, envie uma \u003ca href='%{aboutUrl}'\u003emensagem a um membro da equipe\u003c/a\u003e.\n","no_bookmarks_title":"Você ainda não adicionou nada aos favoritos","no_bookmarks_body":"Comece a adicionar postagens aos favoritos com o botão %{icon}, eles serão listados aqui para consulta rápida. Você pode agendar um lembrete também!\n","no_bookmarks_search":"Nenhum favorito encontrado com a consulta de pesquisa fornecida.","no_notifications_title":"Você ainda não tem nenhuma notificação","no_notifications_body":"Neste painel, você receberá notificações sobre atividades relevantes, inclusive respostas aos seus tópicos e postagens, quando você for citado(a) ou mencionado(a) (\u003cb\u003e@mentions\u003c/b\u003e) por alguém e quando os tópicos que você estiver acompanhando receberem respostas. As notificações também serão enviadas por e-mail quando você passar algum tempo sem entrar com a conta. \u003cbr\u003e\u003cbr\u003e Procure por %{icon} para decidir sobre quais tópicos, categorias e etiquetas específicas você quer receber notificações. Para obter mais informações, verifique suas \u003ca href='%{preferencesUrl}'\u003epreferências de notificações\u003c/a\u003e.\n","no_other_notifications_title":"Você ainda não tem nenhuma notificação","no_other_notifications_body":"Você receberá notificação neste painel sobre outros tipos de atividade que podem ser relevantes para você - por exemplo, quando alguém vincular ou editar uma de suas postagens.\n","no_notifications_page_title":"Você ainda não tem nenhuma notificação","no_notifications_page_body":"Você receberá notificações sobre atividades relevantes, inclusive respostas aos seus tópicos e postagens, quando você for citado(a) ou mencionado(a) (\u003cb\u003e@mentions\u003c/b\u003e) por alguém e quando os tópicos que você estiver acompanhando receberem respostas. As notificações também serão enviadas por e-mail quando você passar algum tempo sem entrar com a conta. \u003cbr\u003e\u003cbr\u003e Procure por %{icon} para decidir sobre quais tópicos, categorias e etiquetas específicas você quer receber notificações. Para obter mais informações, verifique suas \u003ca href='%{preferencesUrl}'\u003epreferências de notificações\u003c/a\u003e.\n","dynamic_favicon":"Exibir contagens no ícone do navegador","skip_new_user_tips":{"description":"Pular emblemas e dicas de integração de novo(a) usuário(a)"},"reset_seen_user_tips":"Mostrar dicas do(a) usuário(a) novamente","theme_default_on_all_devices":"Definir este tema como padrão em todos os meus dispositivos","color_scheme":"Esquema de cores","color_schemes":{"default_description":"Tema padrão","disable_dark_scheme":"O mesmo que o normal","dark_instructions":"É possível pré-visualizar o esquema de cores do modo escuro ao ativar/desativar o modo escuro do seu dispositivo.","undo":"Redefinir","regular":"Normal","dark":"Modo escuro","default_dark_scheme":"(padrão do site)"},"dark_mode":"Modo escuro","dark_mode_enable":"Ativar o esquema de cores do modo escuro automaticamente","text_size_default_on_all_devices":"Definir este tamanho de texto como padrão em todos os meus dispositivos","allow_private_messages":"Permitir que outros(as) usuários(as) me enviem mensagens pessoais e mensagens diretas no chat","external_links_in_new_tab":"Abrir todos os links externos em uma nova aba","enable_quoting":"Ativar resposta citando o texto destacado","experimental_sidebar":{"enable":"Ativar barra lateral","options":"Opções","navigation_section":"Navegação","navigation_section_instruction":"Quando uma lista de tópicos no menu de navegação tem itens novos ou não lidos…","link_to_filtered_list_checkbox_description":"Link para a lista filtrada","show_count_new_items_checkbox_description":"Exibir a contagem dos novos itens"},"change":"alterar","featured_topic":"Tópico em destaque","moderator":"%{user} é moderador(a)","admin":"%{user} é administrador(a)","moderator_tooltip":"Este(a) usuário(a) é moderador(a)","admin_tooltip":"Este(a) usuário(a) é administrador(a)","silenced_tooltip":"Este(a) usuário(a) está silenciado(a)","suspended_notice":"Este(a) usuário(a) está suspenso(a) até %{date}.","suspended_permanently":"Este(a) usuário(a) está suspenso(a).","suspended_reason":"Motivo: ","github_profile":"GitHub","email_activity_summary":"Resumo de atividades","mailing_list_mode":{"label":"Modo lista de endereçamento","enabled":"Ativar modo lista de endereçamento","instructions":"Esta opção substitui o resumo de atividades.\u003cbr /\u003e\nTópicos e categorias silenciadas não são incluídas nestes e-mails.\n","individual":"Enviar um e-mail a cada postagem nova","individual_no_echo":"Enviar um e-mail a cada postagem nova, exceto as minhas","many_per_day":"Me envie um e-mail a cada postagem nova (aproximadamente %{dailyEmailEstimate} por dia)","few_per_day":"Me envie um e-mail a cada postagem nova (aproximadamente dois por dia)","warning":"Modo lista de endereçamento ativado. As configurações de notificação por e-mail serão substituídas."},"tag_settings":"Etiquetas","watched_tags":"Acompanhado(a)","watched_tags_instructions":"Você acompanhará automaticamente todos os tópicos com estas etiquetas. Você receberá notificação de todas as novas postagens e tópicos, e uma contagem de postagens novas também será exibida ao lado do tópico.","tracked_tags":"Monitorado(a)","tracked_tags_instructions":"Você irá monitorar automaticamente todos os tópicos com estas etiquetas. Uma contagem de postagens novas será exibida ao lado do tópico.","muted_tags":"Silenciados(as)","muted_tags_instructions":"Você não receberá notificação sobre novos tópicos com estas etiquetas, e eles não serão exibidas nos mais recentes.","watched_categories":"Acompanhado(a)","watched_categories_instructions":"Você acompanhará automaticamente todos os tópicos nestas categorias. Você receberá notificação de todas as novas postagens e tópicos, e uma contagem de postagens novas também será exibida ao lado do tópico.","tracked_categories":"Monitorado(a)","tracked_categories_instructions":"Você irá monitorar automaticamente todos os tópicos nestas categorias. Uma contagem de postagens novas será exibida ao lado do tópico.","watched_first_post_categories":"Acompanhando primeira postagem","watched_first_post_categories_instructions":"Você receberá uma notificação sobre a primeira postagem em cada tópico novo nestas categorias.","watched_first_post_tags":"Acompanhando primeira postagem","watched_first_post_tags_instructions":"Você receberá uma notificação sobre a primeira postagem em cada tópico novo com estas etiquetas.","watched_precedence_over_muted":"Quero receber notificações sobre tópicos em categorias ou etiquetas que estou acompanhando que também pertencem a alguém que eu silenciei","muted_categories":"Silenciados(as)","muted_categories_instructions":"Você receberá notificações sobre novos tópicos nestas categorias, e eles não serão exibidos nas categorias ou nas últimas páginas.","muted_categories_instructions_dont_hide":"Você não receberá notificações sobre novos tópicos nestas categorias.","regular_categories":"Normal","regular_categories_instructions":"Você verá estas categorias nas listas de tópicos “Recentes” e “Melhores”.","no_category_access":"Como moderador, você tem acesso limitado às categorias, não é possível salvar.","delete_account":"Excluir minha conta","delete_account_confirm":"Você tem certeza de que deseja excluir a sua conta permanentemente? Essa ação não pode ser desfeita!","deleted_yourself":"Sua conta foi excluída com êxito.","delete_yourself_not_allowed":"Entre em contato com um membro da equipe se você deseja que a sua conta seja excluída.","unread_message_count":"Mensagens","admin_delete":"Excluir","users":"Usuários(as)","muted_users":"Silenciados(as)","muted_users_instructions":"Suprimir todas as notificações, mensagens pessoais e mensagens diretas no chat desses(as) usuários(as).","allowed_pm_users":"Permitido(a)","allowed_pm_users_instructions":"Permitir apenas mensagens pessoais ou mensagens diretas no chat desses(as) usuários(as).","allow_private_messages_from_specific_users":"Permitir apenas que usuários(as) específicos(as) me enviem mensagens pessoais ou mensagens diretas no chat","ignored_users":"Ignorados(as)","ignored_users_instructions":"Suprimir todas as postagens, mensagens, notificações, mensagens pessoais e mensagens diretas no chat desses(as) usuários(as).","tracked_topics_link":"Exibir","automatically_unpin_topics":"Desafixar automaticamente os tópicos ao terminar de ler.","apps":"Aplicativos","revoke_access":"Revogar acesso","undo_revoke_access":"Desfazer revogação de acesso","api_approved":"Aprovada:","api_last_used_at":"Usada pela última vez em:","theme":"Tema","save_to_change_theme":"O tema será atualizado quando você clicar em \"%{save_text}\"","home":"Página inicial padrão","staged":"Encenado(a)","staff_counters":{"flags_given":{"one":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e etiqueta útil","other":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e etiquetas úteis"},"flagged_posts":{"one":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e postagem com sinalização","other":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e postagens com sinalização"},"deleted_posts":{"one":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e postagem excluída","other":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e postagens excluídas"},"suspensions":{"one":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e suspensão","other":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e suspensões"},"warnings_received":{"one":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e aviso","other":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e avisos"},"rejected_posts":{"one":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e postagem recusada","other":"\u003cspan class=\"%{className}\"\u003e%{count}\u003c/span\u003e postagens recusadas"}},"messages":{"all":"todas as caixas de entrada","inbox":"Caixa de entrada","personal":"Pessoal","latest":"Últimos","sent":"Enviadas","unread":"Não lidos(as)","unread_with_count":{"one":"Não lido (%{count})","other":"Não lidos (%{count})"},"new":"Novo","new_with_count":{"one":"Novo (%{count})","other":"Novos (%{count})"},"archive":"Arquivo","groups":"Meus grupos","move_to_inbox":"Mover para caixa de entrada","move_to_archive":"Arquivar","failed_to_move":"Falha ao mover as mensagens selecionadas (talvez você esteja sem conexão com a internet)","tags":"Etiquetas","all_tags":"Todas as etiquetas","warnings":"Avisos oficiais","read_more_in_group":"Quer ler mais? Veja outras mensagens em %{groupLink}.","read_more":"Quer ler mais? Veja outras mensagens em \u003ca href='%{basePath}/u/%{username}/messages'\u003emensagens pessoais\u003c/a\u003e.","assigned_title":"Atribuiu (%{count})","assigned":"Atribuiu"},"preferences_nav":{"account":"Conta","security":"Segurança","profile":"Perfil","emails":"E-mails","notifications":"Notificações","tracking":"Monitorando","categories":"Categorias","users":"Usuários(as)","tags":"Etiquetas","interface":"Interface","apps":"Aplicativos","navigation_menu":"Menu de Navegação"},"change_password":{"success":"(e-mail enviado)","in_progress":"(enviando e-mail)","error":"(erro)","action":"Enviar e-mail de redefinição de senha","set_password":"Definir senha","choose_new":"Escolha uma nova senha","choose":"Escolha uma senha"},"second_factor_backup":{"title":"Códigos de backup de dois fatores","regenerate":"Gerar novamente","disable":"Desativar","enable":"Criar códigos de backup","enable_long":"Adicionar códigos de backup","not_enabled":"Você ainda não criou nenhum código de backup.","manage":{"one":"Você tem \u003cstrong\u003e%{count}\u003c/strong\u003e código de backup restante.","other":"Você tem \u003cstrong\u003e%{count}\u003c/strong\u003e códigos de backup restantes."},"copy_to_clipboard":"Copiar para área de transferência","copy_to_clipboard_error":"Erro ao copiar dados para a área de transferência","copied_to_clipboard":"Copiou para a área de transferência","download_backup_codes":"Baixar códigos de backup","remaining_codes":{"one":"Você tem \u003cstrong\u003e%{count}\u003c/strong\u003e código de backup restante.","other":"Você tem \u003cstrong\u003e%{count}\u003c/strong\u003e códigos de backup restantes."},"use":"Usar um código de backup","enable_prerequisites":"Você deve ativar um método de dois fatores primários antes de gerar código de backup.","codes":{"title":"Códigos de backup gerados","description":"Cada um destes códigos de backup só pode ser usado uma vez. Mantenha-os em algum lugar seguro, mas acessível."}},"second_factor":{"title":"Autenticação de dois fatores","enable":"Gerenciar autenticação de dois fatores","disable_all":"Desativar tudo","name":"Nome","label":"Código","rate_limit":"Aguarde antes de tentar outro código de autenticação.","enable_description":"Digitalize este código QR em um aplicativo compatível (\u003ca href=\"https://www.google.com/search?q=authenticator+apps+for+android\" target=\"_blank\"\u003eAndroid\u003c/a\u003e - \u003ca href=\"https://www.google.com/search?q=authenticator+apps+for+ios\" target=\"_blank\"\u003eiOS\u003c/a\u003e) e digite seu código de autenticação.\n","disable_description":"Insira o código de autenticação do seu aplicativo","show_key_description":"Inserir manualmente","short_description":"Proteja sua conta com códigos de segurança avulsos ou chaves de segurança físicas\n","extended_description":"A autenticação de dois fatores adiciona segurança extra à sua conta, exigindo um token único além da sua senha. Tokens podem ser gerados em dispositivos \u003ca href=\"https://www.google.com/search?q=authenticator+apps+for+android\" target='_blank'\u003eAndroid\u003c/a\u003e e \u003ca href=\"https://www.google.com/search?q=authenticator+apps+for+ios\"\u003eiOS\u003c/a\u003e.\n","oauth_enabled_warning":"Observe que as entradas com rede social serão desativadas após a ativação da autenticação de dois fatores na sua conta.","use":"Usar app autenticador","enforced_notice":"Você precisa ativar a autenticação de dois fatores antes de acessar este site.","disable":"Desativar","disable_confirm":"Tem certeza de que deseja desativar a autenticação de dois fatores?","delete":"Excluir","delete_confirm_header":"Estes autenticadores baseados em token e chaves de segurança física serão excluídos:","delete_confirm_instruction":"Para confirmar, digite \u003cstrong\u003e%{confirm}\u003c/strong\u003e na caixa abaixo.","delete_single_confirm_title":"Excluindo um autenticador","delete_single_confirm_message":"Você está excluindo %{name}. Você não pode desfazer esta ação. Se mudar de ideia, terá de registar novamente este autenticador.","delete_backup_codes_confirm_title":"Excluindo códigos de backup","delete_backup_codes_confirm_message":"Você está excluindo códigos de backup. Você não pode desfazer esta ação. Se você mudar de ideia, terá que regenerar os códigos de backup.","save":"Salvar","edit":"Editar","edit_title":"Editar autenticador","edit_description":"Nome do autenticador","enable_security_key_description":"Quando sua \u003ca href=\"https://www.google.com/search?q=hardware+security+key\" target=\"_blank\"\u003echave de segurança de hardware\u003c/a\u003e ou dispositivo móvel compatível estiver preparado, pressione o botão Registrar abaixo.\n","totp":{"title":"Autenticadores baseados em token","add":"Adicionar autenticador","default_name":"Meu autenticador","name_and_code_required_error":"Você deve informar um nome e o código do seu aplicativo autenticador."},"security_key":{"register":"Cadastrar","title":"Chaves de Segurança Físicas","add":"Adicionar Chave de Segurança Física","default_name":"Chave de segurança principal","iphone_default_name":"iPhone","android_default_name":"Android","not_allowed_error":"O processo de registro da chave de segurança atingiu o tempo limite ou foi cancelado.","already_added_error":"Você já registrou esta chave de segurança.\nVocê não precisa registrá-la novamente.","edit":"Editar chaves de segurança física","save":"Salvar","edit_description":"Nome de chaves de segurança física","name_required_error":"Você deve informar um nome para sua chave de segurança."}},"passkeys":{"rename_passkey":"Renomear passkey","add_passkey":"Adicionar passkey","confirm_delete_passkey":"Tem certeza de que deseja excluir este passkey?","passkey_successfully_created":"Sucesso! Seu novo passkey foi criado.","rename_passkey_instructions":"Escolha um nome para o passkey ideal para você, por exemplo: o nome do seu gerenciador de senhas.","name":{"default":"Passkey principal"},"save":"Salvar","title":"Passkeys","short_description":"Passkeys são substitutos de senhas que validam sua identidade através de biometria (ex.: toque, ID facial) ou senha/PIN.","added_date":"Adicionou %{date}","never_used":"Nunca usou","not_allowed_error":"O processo de registro do passkey teve o tempo expirado ou foi cancelado, ou não obteve permissão.","already_added_error":"Você já registrou este passkey. Não precisa registrar novamente.","confirm_button":"ou usar um passkey"},"change_about":{"title":"Alterar Sobre mim","error":"Houve um erro ao alterar este valor."},"change_username":{"title":"Alterar nome do(a) usuário(a)","confirm":"Você tem certeza de que deseja alterar seu nome do(a) usuário(a)?","taken":"Desculpe, este nome do(a) usuário(a) já está sendo usado.","invalid":"Este nome do(a) usuário(a) é inválido. Deve conter apenas números e letras"},"add_email":{"title":"Adicione o e-mail","add":"adicionar"},"change_email":{"title":"Alterar e-mail","taken":"Desculpe, este e-mail não está disponível.","error":"Houve um erro ao alterar seu e-mail. Talvez aquele endereço já esteja sendo usado?","success":"Enviamos um e-mail para esse endereço. Siga as instruções para confirmar.","success_via_admin":"Enviamos um e-mail para esse endereço. O(a) usuário(a) precisará seguir as instruções de confirmação do e-mail.","success_staff":"Enviamos um e-mail para o seu endereço atual. Siga as instruções para confirmar.","back_to_preferences":"Voltar às preferências","confirm_success":"Seu e-mail foi atualizado.","confirm":"Confirmar","authorizing_new":{"description":"Confirme que gostaria de mudar seu endereço de e-mail para:","description_add":"Confirme que você gostaria de adicionar um endereço de e-mail alternativo:"},"authorizing_old":{"title":"Verifique o endereço de e-mail antigo","description":"Por favor, verifique o seu endereço de e-mail antigo para continuar a mudar o seu e-mail:","description_add":"Por favor, verifique o seu endereço de e-mail existente para continuar adicionando um endereço alternativo:","old_email":"E-mail antigo: %{email}","new_email":"Novo e-mail: %{email}","confirm_success":"Enviamos um e-mail para o seu novo endereço de e-mail para confirmar a alteração!"}},"change_avatar":{"title":"Alterar sua imagem de perfil","gravatar":"\u003ca href='//%{gravatarBaseUrl}%{gravatarLoginUrl}' target='_blank'\u003e%{gravatarName}\u003c/a\u003e, baseado em","gravatar_title":"Altere seu avatar no site de %{gravatarName}","gravatar_failed":"Não foi possível encontrar um %{gravatarName} com este endereço de e-mail.","refresh_gravatar_title":"Atualizar seu %{gravatarName}","letter_based":"Imagem de perfil atribuída pelo sistema","uploaded_avatar":"Imagem personalizada","uploaded_avatar_empty":"Adicionar uma imagem personalizada","upload_title":"Enviar sua imagem","image_is_not_a_square":"Aviso: cortamos a sua imagem. A largura e a altura não eram iguais.","logo_small":"Logotipo pequeno do site. Usado por padrão.","use_custom":"Ou envie um avatar personalizado:"},"change_profile_background":{"title":"Cabeçalho do perfil","instructions":"Os cabeçalhos do perfil serão centralizados e terão largura padrão de 1110px."},"change_card_background":{"title":"Plano de fundo do cartão do(a) usuário(a)","instructions":"Imagens de plano de fundo serão centralizadas e terão largura padrão de 590px."},"change_featured_topic":{"title":"Tópico em destaque","instructions":"Um link para este tópico estará no seu cartão do(a) usuário(a) e no seu perfil."},"email":{"title":"E-mail","primary":"E-mail primário","secondary":"E-mails secundários","primary_label":"primário","unconfirmed_label":"não confirmado","resend_label":"Enviar novamente e-mail de confirmação","resending_label":"enviando…","resent_label":"e-mail enviado","update_email":"Alterar e-mail","set_primary":"Definir e-mail primário","destroy":"Remover e-mail","add_email":"Adicionar e-mail alternativo","auth_override_instructions":"É possível atualizar o e-mail com o provedor de autenticação.","no_secondary":"Nenhum e-mail secundário","instructions":"Nunca visível publicamente.","admin_note":"Observação: se um usuário(a) administrador(a) alterar o e-mail de um(a) usuário(a) não administrador(a), esse usuário(a) perderá acesso à sua conta de e-mail original, de modo que um e-mail de redefinição de senha será enviado para o novo endereço. O e-mail do usuário não será alterado até que o processo de redefinição de senha seja concluído.","ok":"Enviaremos um e-mail para confirmar","required":"Digite um endereço de e-mail","invalid":"Insira um endereço de e-mail válido","authenticated":"Seu e-mail foi autenticado por %{provider}","invite_auth_email_invalid":"Seu e-mail de convite não é igual ao e-mail autenticado por %{provider}","authenticated_by_invite":"Seu e-mail foi autenticado pelo convite","frequency":{"one":"Enviaremos um e-mail apenas se você não tiver acessado no último minuto.","other":"Enviaremos um e-mail apenas se você não tiver acessado nos últimos %{count} minutos."}},"associated_accounts":{"title":"Contas associadas","connect":"Conectar","revoke":"Revogar","cancel":"Cancelar","not_connected":"(não conectou)","confirm_modal_title":"Conecte-se à conta %{provider}","confirm_description":{"disconnect":"Sua conta do %{provider}, \"%{account_description}\", será desconectada.","account_specific":"Sua conta %{provider} \"%{account_description}\" será usada para autenticação.","generic":"Sua conta %{provider} será usada para autenticação."}},"name":{"title":"Nome","instructions":"Seu nome completo (opcional).","instructions_required":"Seu nome completo.","required":"Digite um nome","too_short":"Seu nome é muito curto","ok":"Seu nome parece bom"},"username":{"title":"Nome do(a) usuário(a)","instructions":"Único, curto, sem espaços.","short_instructions":"Você pode ser mencioado(a) usando @%{username}.","available":"Seu nome do(a) usuário(a) está disponível","not_available":"Não está disponível. Tentar %{suggestion}?","not_available_no_suggestion":"Não disponível","too_short":"Seu nome do(a) usuário(a) é muito curto","too_long":"Seu nome do(a) usuário(a) é muito longo","checking":"Verificando disponibilidade do nome do(a) usuário(a)…","prefilled":"O e-mail corresponde a este nome do(a) usuário(a) cadastrado","required":"Digite um nome do(a) usuário(a)","edit":"Editar nome do(a) usuário(a)"},"locale":{"title":"Idioma da interface","instructions":"Idioma da interface do(a) usuário(a). Será alterado quando você atualizar a página.","default":"(padrão)","any":"qualquer"},"homepage":{"default":"(padrão)"},"password_confirmation":{"title":"Senha outra vez"},"invite_code":{"title":"Código de convite","instructions":"O cadastro da conta requer um código de convite"},"auth_tokens":{"title":"Dispositivos usados recentemente","short_description":"Lista de dispositivos que entraram com sua conta recentemente.","details":"Detalhes","log_out_all":"Sair de tudo","not_you":"Não é você?","show_all":"Exibir tudo (%{count})","show_few":"Exibir menos","was_this_you":"Foi você?","was_this_you_description":"Se tiver sido você, recomendamos alterar sua senha e sair de todos os dispositivos.","browser_and_device":"%{browser} em %{device}","secure_account":"Proteger minha conta","latest_post":"Você postou por último…","device_location":"\u003cspan class=\"auth-token-device\"\u003e%{device}\u003c/span\u003e \u0026ndash; \u003cspan title=\"IP: %{ip}\"\u003e%{location}\u003c/span\u003e","browser_active":"%{browser} | \u003cspan class=\"active\"\u003eativar agora\u003c/span\u003e","browser_last_seen":"%{browser}|%{date}"},"last_posted":"Última postagem","last_seen":"Visto(a)","created":"Ingressou","log_out":"Sair","location":"Localização","website":"Site","email_settings":"E-mail","hide_profile_and_presence":"Ocultar meu perfil público e recursos de presença","enable_physical_keyboard":"Ativar suporte para teclado físico no iPad","text_size":{"title":"Tamanho do texto","smallest":"Menor","smaller":"Menor","normal":"Normal","larger":"Grande","largest":"Maior"},"title_count_mode":{"title":"O plano de fundo do título da página exibe a contagem de:","notifications":"Novas notificações","contextual":"Novo conteúdo da página"},"bookmark_after_notification":{"title":"Depois que uma notificação de lembrete de marcador é enviada:"},"like_notification_frequency":{"title":"Notificar ao receber curtida","always":"Sempre","first_time_and_daily":"Primeira vez que uma postagem é curtida diariamente","first_time":"Primeira vez que uma postagem é curtida","never":"Nunca"},"email_previous_replies":{"title":"Incluir respostas anteriores ao final dos e-mails","unless_emailed":"exceto enviados anteriormente","always":"sempre","never":"nunca"},"email_digests":{"title":"Quando eu não acessar o site, envie um resumo por e-mail de tópicos e respostas mais acessadas","every_30_minutes":"a cada 30 minutos","every_hour":"a cada hora","daily":"a cada dia","weekly":"a cada semana","every_month":"a cada mês","every_six_months":"a cada seis meses"},"email_level":{"title":"Me enviar e-mail quando eu for citado(a), receber resposta, meu @username for mencionado, ou quando houver atividades novas nas categorias, etiquetas ou tópicos que acompanho.","always":"sempre","only_when_away":"somente quando estiver longe","never":"nunca"},"email_messages_level":"Me enviar e-mail quando eu receber uma mensagem pessoal","include_tl0_in_digests":"Incluir conteúdo de usuários novos no resumo de e-mail","email_in_reply_to":"Incluir um trecho das respostas à postagem nos e-mails","other_settings":"Outros(as)","categories_settings":"Categorias","topics_settings":"Tópicos","new_topic_duration":{"label":"Considerar novos os tópicos quando","not_viewed":"Eu ainda não tiver visualizado","last_here":"forem criados desde a última vez que estive aqui","after_1_day":"forem criados no último dia","after_2_days":"forem criados nos últimos dois dias","after_1_week":"forem criados na última semana","after_2_weeks":"forem criados nas últimas duas semanas"},"auto_track_topics":"Acompanhar automaticamente os tópicos em que eu entrar","auto_track_options":{"never":"nunca","immediately":"imediatamente","after_30_seconds":"após 30 segundos","after_1_minute":"após 1 minuto","after_2_minutes":"após 2 minutos","after_3_minutes":"após 3 minutos","after_4_minutes":"após 4 minutos","after_5_minutes":"após 5 minutos","after_10_minutes":"após 10 minutos"},"notification_level_when_replying":"Quando eu postar em um tópico, definir esse tópico como","invited":{"title":"Convites","pending_tab":"Pendentes","pending_tab_with_count":"Pendentes (%{count})","expired_tab":"Expirado(a)","expired_tab_with_count":"Expirado(a) (%{count})","redeemed_tab":"Resgatados(as)","redeemed_tab_with_count":"Resgatados (%{count})","invited_via":"Convite","invited_via_link":"vincular %{key} (%{count}/%{max} resgatado(s))","groups":"Grupos","topic":"Tópico","sent":"Criado/enviado por último","expires_at":"Expira","edit":"Editar","remove":"Remover","copy_link":"Obter link","reinvite":"Enviar e-mail novamente","reinvited":"Convite enviado novamente","removed":"Removido(a)","search":"digite para pesquisar convites…","user":"Usuário(a) convidado(a)","none":"Não há convites para exibir.","truncated":{"one":"Exibindo o primeiro convite.","other":"Exibindo os primeiros %{count} convites."},"redeemed":"Convites resgatados","redeemed_at":"Resgatados(as)","pending":"Convites pendentes","topics_entered":"Tópicos visualizados","posts_read_count":"Postagens lidas","expired":"Este convite expirou.","remove_all":"Remover convites expirados","removed_all":"Todos os convites expirados foram removidos!","remove_all_confirm":"Tem certeza de que deseja remover todos os convites expirados?","reinvite_all":"Reenviar todos os convites","reinvite_all_confirm":"Tem certeza de que deseja enviar novamente todos os convites?","reinvited_all":"Todos os convites foram enviados!","time_read":"Tempo de leitura","days_visited":"Dias acessados","account_age_days":"Idade da conta em dias","create":"Convidar","generate_link":"Criar link de convite","link_generated":"Confira o seu link de convite","valid_for":"O link do convite é válido apenas para este endereço de e-mail: %{email}","single_user":"Convidar por e-mail","multiple_user":"Convidar por link","invite_link":{"title":"Link de convite","success":"Link do convite gerado com sucesso!","error":"Ocorreu um erro ao gerar o link de convite"},"invite":{"new_title":"Criar convite","edit_title":"Editar convite","instructions":"Compartilhar este link para conceder acesso imediato ao site:","copy_link":"copiar link","expires_in_time":"Expira em %{time}","expired_at_time":"Expirou em %{time}","show_advanced":"Exibir opções avançadas","hide_advanced":"Ocultar opções avançadas","restrict":"Restringir a","restrict_email":"Restringir a e-mail","restrict_domain":"Restringir a domínio","email_or_domain_placeholder":"name@example.com ou example.com","max_redemptions_allowed":"Máximo de usos","add_to_groups":"Adicionar a grupos","invite_to_topic":"Chegar ao tópico","expires_at":"Expira após","custom_message":"Mensagem pessoal opcional","send_invite_email":"Salvar e enviar e-mail","send_invite_email_instructions":"Restringir convite a e-mail para enviar um e-mail de convite","save_invite":"Salvar convite","invite_saved":"Convite salvo"},"bulk_invite":{"none":"Nenhum convite para exibir nesta página.","text":"Convite em massa","instructions":"\u003cp\u003eConvide uma lista de usuários(as) para promover a sua comunidade rapidamente. Prepare um \u003ca href=\"https://en.wikipedia.org/wiki/Comma-separated_values\" target=\"_blank\"\u003earquivo CSV\u003c/a\u003e contendo pelo menos uma linha por endereço de e-mail dos usuários(as) que você quer convidar. As informações separadas por vírgula a seguir podem ser fornecidas se você quiser adicionar pessoas a grupos ou enviá-las para um tópico específico quando entrarem com a conta pela primeira vez.\u003c/p\u003e\n\u003cpre\u003ejohn@smith.com,first_group_name;second_group_name,topic_id\u003c/pre\u003e\n\u003cp\u003eTodos os endereços de e-mail no arquivo CSV enviado serão mandados como convite, e você poderá gerenciá-lo mais tarde.\u003c/p\u003e\n","progress":"%{progress}% enviado(s)…","success":"Arquivo enviado com sucesso, você será notificado(a) por mensagem quando o processo for concluído.","error":"Desculpe, o arquivo deve estar no formato CSV."}},"confirm_access":{"title":"Confirmar acesso","incorrect_password":"A senha inserida é incorreta.","incorrect_passkey":"O passkey é incorreto.","logged_in_as":"Você entrou como: ","instructions":"Confirme sua identidade para concluir esta ação.","fine_print":"Solicitamos que você confirme sua identidade porque provavelmente esta é uma ação confidencial. Após a autenticação, será solicitado que você autentique novamente após algumas horas de inatividade."},"password":{"title":"Senha","too_short":"A sua senha é muito curta.","common":"A senha é muito comum.","same_as_username":"A sua senha é igual ao seu nome do(a) usuário(a).","same_as_email":"A sua senha é igual ao seu e-mail.","ok":"A sua senha parece boa.","required":"Digite uma senha","confirm":"Confirmar","incorrect_password":"A senha inserida é incorreta."},"summary":{"title":"Resumo","stats":"Estatísticas","time_read":"tempo de leitura","time_read_title":"%{duration} (todo o período)","recent_time_read":"tempo de leitura recente","recent_time_read_title":"%{duration} (nos últimos 60 dias)","topic_count":{"one":"tópico criado","other":"tópicos criados"},"post_count":{"one":"postagem criada","other":"postagens criadas"},"likes_given":{"one":"dado","other":"dados"},"likes_received":{"one":"recebido","other":"recebidos"},"days_visited":{"one":"dia acessado","other":"dias acessados"},"topics_entered":{"one":"tópico visualizado","other":"tópicos visualizados"},"posts_read":{"one":"postagem lida","other":"postagens lidas"},"bookmark_count":{"one":"favorito","other":"favoritos"},"top_replies":"Melhores respostas","no_replies":"Nenhuma resposta ainda.","more_replies":"Mais respostas","top_topics":"Melhores tópicos","no_topics":"Nenhum tópico ainda.","more_topics":"Mais tópicos","top_badges":"Melhores emblemas","no_badges":"Nenhum emblema ainda.","more_badges":"Mais emblemas","top_links":"Melhores links","no_links":"Nenhum link ainda.","most_liked_by":"Mais curtido por","most_liked_users":"Com mais curtidas","most_replied_to_users":"Mais respondidos(as)","no_likes":"Nenhuma curtida ainda.","top_categories":"Melhores categorias","topics":"Tópicos","replies":"Respostas"},"ip_address":{"title":"Último endereço IP"},"registration_ip_address":{"title":"Endereço IP do cadastro"},"avatar":{"title":"Imagem do perfil","header_title":"perfil, mensagens, favoritos e preferências","name_and_description":"%{name} - %{description}","edit":"Editar imagem do perfil"},"title":{"title":"Título","none":"(nenhum)","instructions":"aparece depois do seu nome de usuário(a)"},"flair":{"title":"Estilo","none":"(nenhum)","instructions":"ícone exibido perto da imagem do seu perfil"},"status":{"title":"Status personalizado","not_set":"Não configurado"},"primary_group":{"title":"Grupo primário","none":"(nenhum)"},"filters":{"all":"Tudo"},"stream":{"posted_by":"Postado por","sent_by":"Enviado por","private_message":"mensagem","the_topic":"o tópico"},"no_assignments_title":"Você não tem atribuições ainda","no_assignments_body":"Seus tópicos e mensagens atribuídas serão listados aqui. Você receberá uma notificação periódica de lembrete das suas atribuições, que você pode ajustar em suas \u003ca href='%{preferencesUrl}'\u003epreferências de usuário(a)/a\u003e. \u003cbr\u003e\u003cbr\u003e Para atribuir uma mensagem ou tópico a si ou a outra pessoa, procure o botão de atribuir %{icon} na parte inferior.\n","dismiss_assigned_tooltip":"Marcar todas as notificações atribuídas não lidas como lidas","assigned_to_group":{"post":"postagem atribuída a %{group_name}","topic":"tópico atribuído a %{group_name}"},"assigned_to_you":{"post":"postagem atribuída a você","topic":"tópico atribuído a você"},"assignment_description":{"post":"%{topic_title} (#%{post_number})","topic":"%{topic_title}"},"date_of_birth":{"user_title":"Hoje é o seu aniversário!","title":"Hoje é o meu aniversário!","label":"Data de nascimento"},"anniversary":{"user_title":"Hoje é a comemoração do dia em que você entrou na nossa comunidade!","title":"Hoje é a comemoração do dia em que eu entrei nesta comunidade!"}},"user_status":{"save":"Salvar","set_custom_status":"Definir status personalizados","what_are_you_doing":"O que você está fazendo?","pause_notifications":"Pausar notificações","remove_status":"Remover status"},"user_tips":{"button":"Entendi!","first_notification":{"title":"Sua primeira notificação!","content":"As notificações são usadas para que você se atualize sobre o que está acontecendo na comunidade."},"topic_timeline":{"title":"Linha do tempo do tópico"},"post_menu":{"title":"Menu de postagem","content":"Mostre mais maneiras de interagir com a postagem ao clicar nos três pontos!"},"topic_notification_levels":{"title":"Agora você está seguindo este tópico","content":"Procure por este sino para ajustar suas preferências de notificação para tópicos específicos ou categorias inteiras."},"suggested_topics":{"title":"Continue lendo!","content":"Confira alguns tópicos que achamos que você possa gostar de ler em seguida."}},"loading":"Carregando…","errors":{"prev_page":"ao tentar carregar","reasons":{"network":"Erro de rede","server":"Erro de servidor","forbidden":"Acesso negado","unknown":"Erro","not_found":"Página não encontrada"},"desc":{"network":"Verifique sua conexão.","network_fixed":"Parece que voltou.","server":"Código do erro: %{status}","forbidden":"Você não tem permissão para ver isto.","not_found":"Ops, o aplicativo tentou carregar uma URL que não existe.","unknown":"Algo deu errado."},"buttons":{"back":"Voltar","again":"Tentar novamente","fixed":"Carregar página"},"explorer":{"no_semicolons":"Remover os pontos e vírgulas da consulta.","dirty":"Você precisa salvar a consulta antes de executar."}},"modal":{"close":"fechar","dismiss_error":"Descartar erro"},"close":"Fechar","logout":"Você foi desconectado(a).","refresh":"Atualizar","home":"Início","read_only_mode":{"enabled":"Este site está em modo somente leitura. Continue a navegar, mas as respostas, curtidas e outras ações estão desativadas por enquanto.","login_disabled":"Não é possível entrar enquanto o site estiver em modo somente leitura. Esse recurso está desativado.","logout_disabled":"Não é possível sair enquanto o site estiver em modo somente leitura. Esse recurso está desativado."},"staff_writes_only_mode":{"enabled":"Este site está no modo apenas para funcionários. Continue navegando, mas as respostas, curtidas e outras ações são limitadas apenas aos membros da equipe."},"logs_error_rate_notice":{},"learn_more":"Saiba mais…","mute":"Silenciar","unmute":"Remover silêncio","last_post":"Postado","local_time":"Horário local","time_read":"Lido","time_read_recently":"%{time_read} recentemente","time_read_tooltip":"%{time_read} tempo total lido","time_read_recently_tooltip":"%{time_read} tempo total lido (%{recent_time_read} nos últimos 60 dias)","last_reply_lowercase":"última resposta","replies_lowercase":{"one":"resposta","other":"respostas"},"signup_cta":{"sign_up":"Cadastrar-se","hide_session":"Talvez mais tarde","hide_forever":"não, obrigado(a)","hidden_for_session":"Ok, vamos perguntar amanhã. Você sempre pode usar \"Entrar\" para criar uma conta também.","intro":"Olá! Parece que você está gostando da discussão, mas ainda não cadastou uma conta.","value_prop":"Cansou de ver as mesmas postagens? Ao criar uma conta, você sempre volta de onde parou. Com uma conta, você também pode receber notificações de novas respostas, salvar favoritos e usar curtidas para agradecer aos outros. Todos nós podemos trabalhar juntos para tornar esta comunidade excelente. :heart:"},"offline_indicator":{"no_internet":"Sem conexão à internet.","refresh_page":"Atualizar página"},"summary":{"in_progress":"Resumindo tópico usando IA","summarized_on":"Resumo feito com a IA em %{date}","model_used":"IA usada: %{model}","outdated":"O resumo está desatualizado","outdated_posts":{"one":"(%{count} postagem faltando)","other":"(%{count} postagens faltando)"},"enabled_description":"Você está vendo as melhores respostas deste tópico: as postagens mais interessantes segundo a comunidade.","description":{"one":"Existe \u003cb\u003e%{count}\u003c/b\u003e resposta.","other":"Existem \u003cb\u003e%{count}\u003c/b\u003e respostas."},"buttons":{"hide":"Ocultar o resumo","generate":"Resumir com IA","regenerate":"Gerar resumo novamente"},"enable":"Exibir as melhores respostas","disable":"Exibir todas as postagens","short_label":"Melhores respostas","short_title":"Mostrar as melhores respostas deste tópico: as postagens mais interessantes segundo a comunidade"},"deleted_filter":{"enabled_description":"Este tópico contém postagens excluídas, que foram ocultadas.","disabled_description":"As postagens excluídas deste tópico estão sendo exibidas.","enable":"Ocultar postagens excluídas","disable":"Exibir postagens excluídas"},"private_message_info":{"title":"Mensagem","invite":"Convidar outros(as)…","edit":"Adicionar ou remover…","remove":"Remover…","add":"Adicionar…","leave_message":"Tem certeza de que quer sair desta mensagem?","remove_allowed_user":"Tem certeza de que quer remover %{name} desta mensagem?","remove_allowed_group":"Tem certeza de que quer remover %{name} desta mensagem?","leave":"Sair","remove_group":"Remover grupo","remove_user":"Remover usuário"},"email":"E-mail","username":"Nome do(a) usuário(a)","last_seen":"Visto(a)","created":"Criado(a)","created_lowercase":"criado(a)","trust_level":"Nível de confiança","search_hint":"nome do(a) usuário(a), e-mail ou endereço IP","create_account":{"header_title":"Boas-vindas!","subheader_title":"Vamos criar a sua conta","disclaimer":"Ao se cadastrar, você concorda com a \u003ca href='%{privacy_link}' target='blank'\u003epolítica de privacidade\u003c/a\u003e e os \u003ca href='%{tos_link}' target='blank'\u003etermos de serviço\u003c/a\u003e.","title":"Criar sua conta","failed":"Algo deu errado, talvez este e-mail já esteja cadastrado, tente usar o link de senha esquecida.","associate":"Já tem uma conta? \u003ca href='%{associate_link}'\u003eEntre\u003c/a\u003e para vincular sua conta do %{provider}.","activation_title":"Ativar sua conta"},"forgot_password":{"title":"Redefinição de senha","action":"Esqueci minha senha","invite":"Digite o seu nome do(a) usuário(a) ou endereço de e-mail, e enviaremos um e-mail para redefinir sua senha.","invite_no_username":"Digite o seu endereço de e-mail, e enviaremos um e-mail para redefinir sua senha.","email-username":"E-mail ou nome do(a) usuário(a)","reset":"Redefinir senha","complete_username":"Se uma conta corresponder ao nome do(a) usuário(a) \u003cb\u003e%{username}\u003c/b\u003e, você deverá receber um e-mail com instruções de como redefinir sua senha rapidamente.","complete_email":"Se uma conta corresponder a \u003cb\u003e%{email}\u003c/b\u003e, você deverá receber um e-mail com instruções de como redefinir sua senha rapidamente.","complete_username_found":"Encontramos uma conta que corresponde ao nome do(a) usuário(a) \u003cb\u003e%{username}\u003c/b\u003e. Você deverá receber um e-mail com instruções sobre como redefinir sua senha em breve.","complete_email_found":"Encontramos uma conta que corresponde a \u003cb\u003e%{email}\u003c/b\u003e. Você deverá receber um e-mail com instruções de como redefinir sua senha em breve.","complete_username_not_found":"Nenhuma conta corresponde ao nome de usuário(a) \u003cb\u003e%{username}\u003c/b\u003e","complete_email_not_found":"Nenhuma conta corresponde a \u003cb\u003e%{email}\u003c/b\u003e","help":"O e-mail não chegou? Verifique sua pasta de spam primeiro.\u003cp\u003eNão tem certeza de qual endereço de e-mail você usou? Digite um endereço de e-mail e informaremos se existe aqui.\u003c/p\u003e\u003cp\u003eSe você não tiver mais acesso ao endereço de e-mail da sua conta, entre em contato com \u003ca href='%{basePath}/about'\u003enossa equipe, que está sempre disposta a ajudar.\u003c/a\u003e\u003c/p\u003e","button_ok":"Ok","button_help":"Ajuda"},"email_login":{"link_label":"Envie por e-mail um link para entrar","button_label":"com e-mail","login_link":"Pular a senha, enviar um link por e-mail para entrar com a conta","complete_username":"Se uma conta corresponder ao nome de usuário(a) \u003cb\u003e%{username}\u003c/b\u003e, em breve você deverá receber um e-mail com um link para entrar.","complete_email":"Se uma conta corresponder à \u003cb\u003e%{email}\u003c/b\u003e, em breve você deverá receber um e-mail com um link para entrar.","complete_username_found":"Encontramos uma conta que corresponde ao nome de usuário(a) \u003cb\u003e%{username}\u003c/b\u003e, em breve você deverá receber um e-mail com um link para entrar.","complete_email_found":"Encontramos uma conta que corresponde a \u003cb\u003e%{email}\u003c/b\u003e, em breve você deverá receber um e-mail com um link para entrar.","complete_username_not_found":"Nenhuma conta corresponde ao nome de usuário(a) \u003cb\u003e%{username}\u003c/b\u003e","complete_email_not_found":"Nenhuma conta corresponde a \u003cb\u003e%{email}\u003c/b\u003e","confirm_title":"Continuar para %{site_name}","logging_in_as":"Entrando como %{email}","confirm_button":"Terminar de entrar"},"login":{"header_title":"Boas-vindas outra vez","subheader_title":"Entrar com a sua conta","title":"Entrar","username":"Usuário(a)","password":"Senha","show_password":"Exibir","hide_password":"Ocultar","show_password_title":"Mostrar senha","hide_password_title":"Ocultar senha","second_factor_title":"Autenticação de dois fatores","second_factor_description":"Digite o código de autenticação do seu aplicativo:","second_factor_backup":"Entrar usando um código de backup","second_factor_backup_title":"Backup de dois fatores","second_factor_backup_description":"Insira um dos seus códigos de backup:","second_factor":"Fazer login usando um aplicativo de autenticação","security_key_description":"Quando você tiver sua chave física de segurança ou dispositivo móvel compatível preparado, pressione o botão Autenticar com Chave de Segurança abaixo.","security_key_alternative":"Tentar de outra maneira","security_key_authenticate":"Autenticar com chave de segurança","security_key_not_allowed_error":"O processo de autenticação com chave de segurança atingiu o limite de tempo ou foi cancelado.","security_key_no_matching_credential_error":"Nenhuma credencial correspondente pôde ser encontrada na chave de segurança informada.","security_key_support_missing_error":"Seu dispositivo ou navegador atual não são compatíveis com o uso de chaves de segurança. Use um método diferente.","security_key_invalid_response_error":"Ocorreu uma falha no processo de autenticação da chave de segurança devido a uma resposta inválida.","passkey_security_error":"Ocorreu um erro de segurança: %{message}","email_placeholder":"E-mail/nome do(a) usuário(a)","caps_lock_warning":"Caps Lock está ativado","error":"Erro desconhecido","cookies_error":"Pelo visto, os cookies do seu navegador estão desativados. Talvez você não consiga entrar em ativá-los antes.","rate_limit":"Aguarde antes de tentar entrar novamente.","blank_username":"Digite seu e-mail ou nome do(a) usuário(a).","blank_username_or_password":"Digite seu e-mail ou nome do(a) usuário(a) e a senha.","reset_password":"Redefinir senha","logging_in":"Entrando…","previous_sign_up":"Já tem uma conta?","or":"Ou","authenticating":"Autenticando…","awaiting_activation":"Sua conta está aguardando ativação, utilize o link \"Esqueci a senha\" para enviar um novo e-mail de ativação.","awaiting_approval":"Sua conta ainda não foi aprovada por um membro da equipe. Você receberá um e-mail quando isso acontecer.","requires_invite":"Desculpe, o acesso a este fórum é permitido somente pelo convite de outro membro.","not_activated":"Você não pode entrar ainda. Nós enviamos um e-mail de ativação antes para o endereço \u003cb\u003e%{sentTo}\u003c/b\u003e. Siga as instruções deste e-mail para ativar a sua conta.","not_allowed_from_ip_address":"Você não pode entrar com este endereço IP.","admin_not_allowed_from_ip_address":"Você não pode entrar como administrador(a) com este endereço IP.","resend_activation_email":"Clique aqui para enviar o e-mail de ativação novamente.","omniauth_disallow_totp":"Sua conta tem autenticação dois fatores ativada. Entre com sua senha.","resend_title":"Enviar novamente e-mail de ativação","change_email":"Alterar endereço de e-mail","provide_new_email":"Informe um novo endereço de e-mail e enviaremos novamente o seu e-mail de confirmação.","submit_new_email":"Atualizar endereço de e-mail","sent_activation_email_again":"Enviamos mais um e-mail de ativação para o endereço \u003cb\u003e%{currentEmail}\u003c/b\u003e. Pode ser que demore alguns minutos para chegar, verifique sempre sua caixa de spam.","sent_activation_email_again_generic":"Enviamos mais um e-mail de ativação. Pode ser que demore alguns minutos para chegar, verifique sua caixa de spam.","to_continue":"Entre com sua conta","preferences":"Você precisa entrar para mudar suas preferências de usuário(a).","not_approved":"Sua conta ainda não foi aprovada. Você será notificado(a) por e-mail quando tudo estiver pronto para entrar.","google_oauth2":{"name":"Google","title":"Conectar com o Google","sr_title":"Conectar com o Google"},"twitter":{"name":"Twitter","title":"Conectar com o Twitter","sr_title":"Conectar com o Twitter"},"instagram":{"name":"Instagram","title":"Entrar com o Instagram","sr_title":"Entrar com o Instagram"},"facebook":{"name":"Facebook","title":"Entrar com o Facebook","sr_title":"Entrar com o Facebook"},"github":{"name":"GitHub","title":"Entrar com o GitHub","sr_title":"Entrar com o GitHub"},"discord":{"name":"Discord","title":"Entrar com o Discord","sr_title":"Entrar com o Discord"},"passkey":{"name":"Entrar com passkey"},"second_factor_toggle":{"totp":"Use um aplicativo autenticador","backup_code":"Use um código de backup","security_key":"Em vez disso, utilizar uma chave de segurança"},"no_login_methods":{"title":"Nenhum método de entrada","description":"Nenhum método de entrada foi configurado. Os(as) administradores(as) podem acessar \u003ca href='%{adminLoginPath}' target='_blank'\u003e%{adminLoginPath}\u003c/a\u003e para reconfigurar o site."},"linkedin":{"name":"LinkedIn","title":"Entrar com o LinkedIn"},"amazon":{"name":"Amazon","title":"Entrar com a Amazon","message":"Autenticaçao com login da Amazon (verifique se bloqueadores de pop-up não estão ativos)"},"lti":{"name":"LTI","title":"com LTI"},"microsoft_office365":{"name":"Microsoft","title":"Entrar com Microsoft"},"oauth2_basic":{"name":"OAuth 2"},"oidc":{"name":"OpenID Connect","title":"com OpenID Connect","message":"Autenticação com OpenID Connect"},"patreon":{"name":"Patreon","title":"Entrar com o Patreon"}},"invites":{"accept_title":"Convite","welcome_to":"Boas-vindas ao %{site_name}!","invited_by":"Você foi convidado(a) por:","social_login_available":"Você também poderá entrar com qualquer rede social usando este e-mail.","your_email":"O endereço de e-mail da sua conta é \u003cb\u003e%{email}\u003c/b\u003e.","accept_invite":"Aceitar convite","success":"Sua conta foi criada e você já entrou.","name_label":"Nome","password_label":"Senha","existing_user_can_redeem":"Resgate seu convite para um tópico ou grupo."},"password_reset":{"continue":"Continuar para %{site_name}"},"emoji_set":{"apple_international":"Apple/Internacional","google":"Google","twitter":"Twitter","win10":"Win10","google_classic":"Google Classic","facebook_messenger":"Facebook Messenger"},"category_page_style":{"categories_only":"Apenas categorias","categories_with_featured_topics":"Categorias com tópicos em destaque","categories_and_latest_topics":"Categorias e últimos tópicos","categories_and_latest_topics_created_date":"Categorias e Tópicos Mais Recentes (ordenar por data de criação do tópico)","categories_and_top_topics":"Categorias e melhores tópicos","categories_boxes":"Caixas de seleção com subcategorias","categories_boxes_with_topics":"Caixas de seleção com tópicos em destaque","subcategories_with_featured_topics":"Subcategorias com Tópicos em Destaque"},"shortcut_modifier_key":{"shift":"Shift","ctrl":"Ctrl","alt":"Alt","enter":"Enter"},"conditional_loading_section":{"loading":"Carregando…"},"category_row":{"subcategory_count":{"one":"+%{count} subcategoria","other":"+%{count} subcategorias"},"topic_count":{"one":"%{count} tópico nesta categoria","other":"%{count} tópicos nesta categoria"}},"select_kit":{"delete_item":"Excluir %{name}","filter_by":"Filtrar por: %{name}","select_to_filter":"Selecione um valor para filtrar","default_header_text":"Selecionar…","no_content":"Nenhuma correspondência encontrada","results_count":{"one":"%{count} resultado","other":"%{count} resultados"},"filter_placeholder":"Pesquisar…","filter_placeholder_with_any":"Pesquisar ou criar…","create":"Criar: \"%{content}\"","max_content_reached":{"one":"Você só pode selecionar %{count} item.","other":"Você só pode selecionar %{count} itens."},"min_content_not_reached":{"one":"Selecione pelo menos %{count} item.","other":"Selecione pelo menos %{count} itens."},"components":{"filter_for_more":"Filtre para ver mais…","categories_admin_dropdown":{"title":"Gerenciar categorias"},"bulk_select_topics_dropdown":{"title":"Ações em massa"}}},"date_time_picker":{"from":"De","to":"Para"},"file_size_input":{"error":{"size_too_large":"%{provided_file_size} é maior do que o máximo permitido de %{max_file_size}"}},"emoji_picker":{"filter_placeholder":"Pesquisar por emoji","smileys_\u0026_emotion":"Carinhas e emotion","people_\u0026_body":"Pessoas e corpo","animals_\u0026_nature":"Animais e natureza","food_\u0026_drink":"Comida e bebida","travel_\u0026_places":"Viagens e lLugares","activities":"Atividades","objects":"Objetos","symbols":"Símbolos","flags":"Sinalizadores","recent":"Usados recentemente","default_tone":"Sem tom de pele","light_tone":"Tom de pele claro","medium_light_tone":"Tom de pele médio-claro","medium_tone":"Tom de pele médio","medium_dark_tone":"Tom de pele médio-escuro","dark_tone":"Tom de pele escuro","default":"Emojis personalizados"},"shared_drafts":{"title":"Rascunhos compartilhados","notice":"Este tópico está visível apenas para quem puder publicar rascunhos compartilhados.","destination_category":"Categoria de destino","publish":"Publicar rascunho compartilhado","confirm_publish":"Você tem certeza de que deseja publicar este rascunho?","publishing":"Publicando tópico…"},"composer":{"emoji":"Emoji :)","more_emoji":"mais…","options":"Opções","whisper":"sussuro","unlist":"não listado(a)","add_warning":"Esta é uma advertência oficial.","toggle_whisper":"Alternar sussuro","toggle_unlisted":"Alternar não listado","insert_table":"Inserir tabela","posting_not_on_topic":"Qual tópico você gostaria de responder?","saved_local_draft_tip":"salvo em modo local","similar_topics":"Seu tópico é parecido com…","drafts_offline":"rascunhos off-line","edit_conflict":"editar conflito","esc":"esc","esc_label":"Descartar mensagem","ok_proceed":"Ok, prossiga","group_mentioned_limit":{"one":"\u003cb\u003eAviso!\u003c/b\u003e Você menciou \u003ca href='%{group_link}'\u003e%{group}\u003c/a\u003e, mas este grupo tem mais membros do que o limite de menções configurado pelo(a) administrador(a) de %{count} usuário(a). Ninguém será notificado(a).","other":"\u003cb\u003eAviso!\u003c/b\u003e Você menciou \u003ca href='%{group_link}'\u003e%{group}\u003c/a\u003e, mas este grupo tem mais membros do que o limite de menções configurado pelo(a) administrador(a) de %{count} usuários(as). Ninguém será notificado(a)."},"group_mentioned":{"one":"Mencionar %{group} irá notificar \u003ca href='%{group_link}'\u003e%{count} pessoa\u003c/a\u003e.","other":"Mencionar %{group} irá notificar \u003ca href='%{group_link}'\u003e%{count} pessoas\u003c/a\u003e."},"cannot_see_mention":{"category":"Você mencionou @%{username}, mas ele(a) não será notificado(a), pois não tem acesso a esta categoria. Você precisará adicioná-lo(a) ao grupo que tem acesso à categoria.","private":"Você mencionou @%{username}, mas ele(a) não será notificado(a), pois não pode ver esta mensagem pessoal. Você precisará convidá-lo(a) para esta mensagem pessoal.","muted_topic":"Você mencionou @%{username}, ele(a) não receberá notificação porque este tópico foi silenciado.","not_allowed":"Você mencionou @%{username}, ele(a) não receberá notificação porque não recebeu convite para este tópico."},"cannot_see_group_mention":{"not_mentionable":"Você não pode mencionar o grupo @%{group}.","some_not_allowed":{"one":"Você mencionou @%{group} , mas apenas %{count} membro será notificado porque os outros membros não podem ver esta mensagem pessoal. Você precisará convidá-los para esta mensagem pessoal.","other":"Você mencionou @%{group} , mas apenas %{count} membros serão notificados porque os outros membros não podem ver esta mensagem pessoal. Você precisará convidá-los para esta mensagem pessoal."},"not_allowed":"Você mencionou @%{group}, mas nenhum dos seus membros será notificado(a), pois não poderá ver esta mensagem pessoal. Você precisará convidá-lo(a) para esta mensagem pessoal."},"here_mention":{"one":"Ao mencionar \u003cb\u003e@%{here}\u003c/b\u003e, você está prestes a notificar o(a) usuário(a) %{count}. Tem certeza?","other":"Ao mencionar \u003cb\u003e@%{here}\u003c/b\u003e, você está prestes a notificar os(as) usuário(as) %{count}. Tem certeza?"},"duplicate_link":"Parece que o seu link de \u003cb\u003e%{domain}\u003c/b\u003e já foi postado neste tópico por \u003cb\u003e@%{username}\u003c/b\u003e em \u003ca href='%{post_url}'\u003euma resposta em %{ago}\u003c/a\u003e. Tem certeza de que deseja postar novamente?","duplicate_link_same_user":"Parece que você já postou um link para \u003cb\u003e%{domain}\u003c/b\u003e neste tópico em \u003ca href='%{post_url}'\u003euma resposta em %{ago}\u003c/a\u003e. Tem certeza de que deseja postá-lo novamente?","reference_topic_title":"RE: %{title}","error":{"title_missing":"O título é obrigatório","title_too_short":{"one":"O título deve ter pelo menos %{count} caracter","other":"Título precisa ter no mínimo %{count} caracteres"},"title_too_long":{"one":"O título não pode ter mais do que %{count} caracter","other":"O título não pode ter mais do que %{count} caracteres"},"post_missing":"A postagem não pode estar vazia","post_length":{"one":"A postagem deve ter pelo menos %{count} caracter","other":"A postagem deve ter pelo menos %{count} caracteres"},"try_like":"Você já tentou o botão %{heart}?","category_missing":"Você precisa escolher uma categoria","tags_missing":{"one":"É preciso escolher pelo menos %{count} etiqueta","other":"É preciso escolher pelo menos %{count} etiquetas"},"topic_template_not_modified":"Adicione detalhes e especificações ao seu tópico editando o modelo do tópico."},"save_edit":"Salvar edição","overwrite_edit":"Sobrescrever edição","reply":"Responder","cancel":"Cancelar","create_topic":"Criar tópico","create_whisper":"Sussuro","create_shared_draft":"Criar rascunho compartilhado","edit_shared_draft":"Editar rascunho compartilhado","title":"Ou aperte %{modifier}Enter","users_placeholder":"Adicionar usuários ou grupos","title_placeholder":"Em algumas palavras, sobre o que é esta discussão?","title_or_link_placeholder":"Digite um título, ou cole um link aqui","edit_reason_placeholder":"por que você está editando?","topic_featured_link_placeholder":"Inserir link mostrado no título.","remove_featured_link":"Remover link do tópico.","reply_placeholder":"Digite aqui. Use Markdown, BBCode, ou HTML para formatar. Arraste ou cole imagens.","reply_placeholder_no_images":"Digite aqui. Use Markdown, BBCode, ou HTML para formatar.","reply_placeholder_choose_category":"Selecione uma categoria antes de digitar aqui.","view_new_post":"Veja a sua nova postagem.","saving":"Salvando","saved":"Salvo!","saved_draft":"Rascunho de postagem em andamento. Toque para retomar.","uploading":"Enviando…","show_preview":"exibir pré-visualização","hide_preview":"ocultar pré-visualização","quote_post_title":"Citar postagem inteira","bold_label":"N","bold_title":"Negrito","bold_text":"texto em negrito","italic_label":"I","italic_title":"Realce","italic_text":"texto realçado","link_title":"Hiperlink","link_description":"digite a descrição do link aqui","link_dialog_title":"Inserir hiperlink","link_optional_text":"título opcional","link_url_placeholder":"Cole uma URL ou digite para pesquisar tópicos","blockquote_title":"Citação em bloco","blockquote_text":"Bloco de Citação","code_title":"Texto pré-formatado","code_text":"recuar o texto pré-formatado em quatro espaços","paste_code_text":"digite ou cole o código aqui","upload_title":"Enviar","upload_description":"digite aqui a descrição do arquivo enviado","olist_title":"Lista numerada","ulist_title":"Lista com marcadores","list_item":"Item da lista","toggle_direction":"Alternar direção","help":"Ajuda de edição de redução","collapse":"minimizar o painel do compositor","open":"abrir o painel do compositor","abandon":"fechar compositor e descartar rascunho","enter_fullscreen":"entrar no compositor em tela cheia","exit_fullscreen":"sair do compositor em tela cheia","exit_fullscreen_prompt":"Pressione \u003ckbd\u003eESC\u003c/kbd\u003e para sair da tela cheia","show_toolbar":"exibir barra de ferramentas do compositor","hide_toolbar":"ocultar barra de ferramentas do compositor","modal_ok":"Ok","modal_cancel":"Cancelar","cant_send_pm":"Desculpe, você não pode enviar uma mensagem para %{username}.","yourself_confirm":{"title":"Você se esqueceu de adicionar destinatários?","body":"Por enquanto, esta mensagem está sendo enviada apenas para você mesmo(a)!"},"slow_mode":{"error":"Este tópico está no modo lento. Você já postou recentemente. É possível postar outra vez em %{timeLeft}."},"user_not_seen_in_a_while":{"single":"A pessoa para quem você está enviando mensagens, \u003cb\u003e%{usernames}\u003c/b\u003e, não é vista aqui há muito tempo – %{time_ago}. Elas podem não receber sua mensagem. Você pode procurar métodos alternativos de contato %{usernames}.","multiple":"As seguintes pessoas para quem você está enviando mensagens: \u003cb\u003e%{usernames}\u003c/b\u003e, não são vistas aqui há muito tempo – %{time_ago}. Elas podem não receber sua mensagem. Você pode procurar métodos alternativos de contatá-las."},"admin_options_title":"Configurações opcionais da equipe para este tópico","composer_actions":{"reply":"Responder","draft":"Rascunho","edit":"Editar","reply_to_post":{"label":"Responder a uma postagem de %{postUsername}","desc":"Responder a uma postagem específica"},"reply_as_new_topic":{"label":"Responder como um tópico vinculado","desc":"Criar um novo tópico relacionado a este tópico","confirm":"Você tem um novo rascunho de tópico salvo, que será substituído ao criar um tópico vinculado."},"reply_as_new_group_message":{"label":"Responder como nova mensagem de grupo","desc":"Crie uma nova mensagem começando com os mesmos destinatários"},"reply_to_topic":{"label":"Responder ao tópico","desc":"Responder ao tópico, não a uma postagem específica"},"toggle_whisper":{"label":"Alternar sussurro","desc":"Sussurros são visíveis apenas para membros da equipe"},"create_topic":{"label":"Novo tópico","desc":"Criar um novo tópico"},"shared_draft":{"label":"Rascunho compartilhado","desc":"Fazer rascunho do tópico visívei apenas para usuários(as) com permissão"},"toggle_topic_bump":{"label":"Alternar promoção de tópico","desc":"Responder sem alterar a data da última resposta"},"create_as_post_voting":{"label":"Alterar votação de publicação","desc":"O tópico será criado com publicações para votar"},"remove_as_post_voting":{"label":"Remover votação de publicação","desc":"O tópico será criado no formato regular"}},"reload":"Recarregar","ignore":"Ignorar","image_alt_text":{"aria_label":"Texto alternativo para imagem"},"delete_image_button":"Excluir Imagem","toggle_image_grid":"Alternar para grade de imagem","details_title":"Resumo","details_text":"Este texto ficará oculto.","create_post_voting":{"label":"Criar tópico de votação de publicação"},"spoiler_text":"Este texto será desfocado"},"notifications":{"tooltip":{"regular":{"one":"%{count} notificação não visualizada","other":"%{count} notificações não visualizadas"},"message":{"one":"%{count} mensagem não lida","other":"%{count} mensagens não lidas"},"high_priority":{"one":"%{count} notificação não lida de alta prioridade","other":"%{count} notificações não lidas de alta prioridade"},"new_message_notification":{"one":"%{count} notificação de nova mensagem","other":"%{count} notificações de novas mensagens"},"new_reviewable":{"one":"%{count} novo para revisar","other":"%{count} novos para revisar"}},"title":"notificações de menção de @nome, respostas às suas postagens, tópicos, mensagens, etc","none":"Não foi possível carregar notificações no momento.","empty":"Nenhuma notificação foi encontrada.","post_approved":"Sua postagem foi aprovada","reviewable_items":"itens que exigem revisão","watching_first_post_label":"Novo tópico","user_moved_post":"%{username} se moveu","mentioned":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","group_mentioned":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","quoted":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","bookmark_reminder":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","replied":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","posted":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","watching_category_or_tag":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","edited":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","liked":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","liked_2":"\u003cspan class='double-user'\u003e%{username}, %{username2}\u003c/span\u003e %{description}","liked_many":{"one":"\u003cspan class='multi-user'\u003e%{username} e mais %{count}\u003c/span\u003e %{description}","other":"\u003cspan class='multi-user'\u003e%{username} e mais %{count}\u003c/span\u003e %{description}"},"liked_by_2_users":"%{username}, %{username2}","liked_by_multiple_users":{"one":"%{username} e mais %{count}","other":"%{username} e mais %{count}"},"liked_consolidated_description":{"one":"curtiu %{count} de suas postagens","other":"curtiu %{count} de suas postagens"},"liked_consolidated":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","linked_consolidated":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","private_message":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","invited_to_private_message":"\u003cp\u003e\u003cspan\u003e%{username}\u003c/span\u003e %{description}","invited_to_topic":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","invitee_accepted":"\u003cspan\u003e%{username}\u003c/span\u003e aceitou o seu convite","invitee_accepted_your_invitation":"aceitou seu convite","moved_post":"\u003cspan\u003e%{username}\u003c/span\u003e moveu %{description}","linked":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","granted_badge":"Ganhou \"%{description}'","topic_reminder":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","watching_first_post":"\u003cspan\u003eNovo tópico\u003c/span\u003e %{description}","membership_request_accepted":"Associação aceita em '%{group_name}'","membership_request_consolidated":{"one":"%{count} solicitação de associação aberta para \"%{group_name}\"","other":"%{count} pedidos de associação abertas para \"%{group_name}\""},"reaction":{"single":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","multiple":"\u003cspan\u003e%{username}\u003c/span\u003e reagiu a %{count} de suas postagens"},"reaction_2":"\u003cspan class='double-user'\u003e%{username}, %{username2}\u003c/span\u003e %{description}","votes_released":"%{description} - concluído(a)","new_features":"Novos recursos disponíveis!","admin_problems":"Nova recomendação no painel de controle do seu site","dismiss_confirmation":{"body":{"default":{"one":"Tem certeza? Você tem %{count} notificação importante.","other":"Tem certeza? Você tem %{count} notificações importantes."},"bookmarks":{"one":"Tem certeza? Você tem %{count} lembrete de favoritos não lido.","other":"Tem certeza? Você tem %{count} lembretes de favoritos não lidos."},"messages":{"one":"Tem certeza? Você tem %{count} mensagem pessoal não lida.","other":"Tem certeza? Você tem %{count} mensagens pessoais não lidas."},"assigns":{"one":"Tem certeza? Você tem %{count} notificação atribuída não lida.","other":"Tem certeza? Você tem %{count} notificações atribuídas não lidas."}},"dismiss":"Descartar","cancel":"Cancelar"},"group_message_summary":{"one":"%{count} mensagem na caixa de entrada de %{group_name}","other":"%{count} mensagens na caixa de entrada de %{group_name}"},"popup":{"mentioned":"Você foi mencionado(a) por %{username} em \"%{topic}\" - %{site_title}","group_mentioned":"Você foi mencionado(a) por %{username} em \"%{topic}\" - %{site_title}","quoted":"Você foi citado(a) por %{username} em \"%{topic}\" - %{site_title}","replied":"%{username} respondeu em \"%{topic}\" - %{site_title}","posted":"%{username} postou em \"%{topic}\" - %{site_title}","private_message":"%{username} enviou uma mensagem pessoal em \"%{topic}\" - %{site_title}","linked":"%{username} vinculou sua postagem em \"%{topic}\" - %{site_title}","watching_first_post":"%{username} criou um novo tópico \"%{topic}\" - %{site_title}","watching_category_or_tag":"%{username} postou em \"%{topic}\" - %{site_title}","confirm_title":"Notificações ativadas - %{site_title}","confirm_body":"Sucesso! As notificações foram ativadas.","custom":"Notificação de %{username} em %{site_title}","chat_mention":{"direct":"mencionou você em \"%{channel}\"","direct_html":"\u003cspan\u003e%{username}\u003c/span\u003e \u003cspan\u003econvidou você em \"%{channel}\"\u003c/span\u003e","other_plain":"mencionou %{identifier} em \"%{channel}\"","other_html":"\u003cspan\u003e%{username}\u003c/span\u003e \u003cspan\u003emencionou %{identifier} em \"%{channel}\"\u003c/span\u003e"},"direct_message_chat_mention":{"direct":"mencionei você no chat pessoal","direct_html":"\u003cspan\u003e%{username}\u003c/span\u003e \u003cspan\u003emencionou você no chat pessoal\u003c/span\u003e","other_plain":"mencionou %{identifier} no chat pessoal","other_html":"\u003cspan\u003e%{username}\u003c/span\u003e \u003cspan\u003emencionou %{identifier} no chat pessoal\u003c/span\u003e"},"chat_message":"Nova mensagem de chat","chat_quoted":"%{username} citou sua mensagem do chat","assigned":"%{username} atribuiu a você","event_reminder":"Lembrete de evento","question_answer_user_commented":"%{username} comentou em \"%{topic}\" - %{site_title}"},"titles":{"mentioned":"mencionado(a)","replied":"nova resposta","quoted":"citados(as)","edited":"editado(a)","liked":"nova curtida","private_message":"nova mensagem privada","invited_to_private_message":"convidado(a) para mensagem privada","invitee_accepted":"convite aceito","posted":"nova postagem","watching_category_or_tag":"nova postagem","moved_post":"postagem movida","linked":"vinculado(a)","bookmark_reminder":"lembrete de favorito","bookmark_reminder_with_name":"lembrete de favorito - %{name}","granted_badge":"emblema concedido","invited_to_topic":"convidado(a) para o tópico","group_mentioned":"grupo mencionado","group_message_summary":"novas mensagens de grupo","watching_first_post":"novo tópico","topic_reminder":"lembrete de tópico","liked_consolidated":"novas curtidas","post_approved":"postagem aprovada","membership_request_consolidated":"novos pedidos de associação","reaction":"nova reação","votes_released":"Voto emitido","new_features":"novos recursos do Discourse foram lançados!","admin_problems":"nova recomendação no painel de controle do seu site","chat_mention":"Menção no chat","chat_invitation":"Convite para chat","chat_quoted":"Chat citado","assigned":"Atribuiu","event_reminder":"lembrete de evento","event_invitation":"convite do evento","question_answer_user_commented":"novo comentário"},"chat_invitation":"convidou você para participar de um canal de chat","chat_invitation_html":"\u003cspan\u003e%{username}\u003c/span\u003e \u003cspan\u003e convidou você para entrar em um canal de chat\u003c/span\u003e","chat_quoted":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","assigned":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","question_answer_user_commented":"\u003cspan\u003e%{username}\u003c/span\u003e %{description}","reaction_1_user_multiple_posts":{"one":"reagiu a %{count} da sua postagem","other":"reagiu a %{count} das suas postagens"},"reaction_2_users":"%{username}, %{username2}","reaction_multiple_users":{"one":"%{username} e %{count} outro","other":"%{username} e %{count} outros(as)"},"reaction_many":{"one":"\u003cspan class='multi-user'\u003e%{username} e mais %{count}\u003c/span\u003e %{description}","other":"\u003cspan class='multi-user'\u003e%{username} e mais %{count}\u003c/span\u003e %{description}"},"alt":{"solved":{"accepted_notification":"aceito"}}},"upload_selector":{"uploading":"Enviando","processing":"Processando envio","select_file":"Selecionar arquivo","default_image_alt_text":"imagem"},"search":{"sort_by":"Ordenar por","relevance":"Relevância","latest_post":"Última postagem","latest_topic":"Último tópico","most_viewed":"Mais visto(a)","most_liked":"Mais curtido(a)","select_all":"Selecionar tudo","clear_all":"Limpar tudo","too_short":"Seu termo de pesquisa é muito curto.","open_advanced":"Abrir pesquisa avançada","clear_search":"Limpar pesquisa","sort_or_bulk_actions":"Classifique ou selecione em massa os resultados","result_count":{"one":"\u003cspan\u003e%{count} resultado para\u003c/span\u003e\u003cspan class='term'\u003e%{term}\u003c/span\u003e","other":"\u003cspan\u003e%{count}%{plus} resultados para\u003c/span\u003e\u003cspan class='term'\u003e%{term}\u003c/span\u003e"},"title":"Pesquisar","full_page_title":"Pesquisar","results":"resultados","no_results":"Nenhum resultado encontrado.","no_more_results":"Nenhum outro resultado encontrado.","post_format":"#%{post_number} de %{username}","results_page":"Pesquisar resultados para \"%{term}\"","more_results":"Existem mais resultados. Restrinja os seus critérios de pesquisa.","cant_find":"Não consegue encontrar o que está procurando?","start_new_topic":"Que tal começar um novo tópico?","or_search_google":"Ou tente pesquisar com o Google:","search_google":"Tente pesquisar com o Google:","search_google_button":"Google","search_button":"Pesquisar","search_term_label":"insira a palavra-chave de pesquisa","categories":"Categorias","tags":"Etiquetas","in":"em","in_this_topic":"neste tópico","in_this_topic_tooltip":"mudar para pesquisa de todos os tópicos","in_messages":"nas mensagens","in_messages_tooltip":"mudar para pesquisa de tópicos regulares","in_topics_posts":"em todos os tópicos e postagens","enter_hint":"ou pressione Enter","in_posts_by":"em postagens por %{username}","browser_tip":"%{modifier} + f","browser_tip_description":"usar novamente pesquisa de navegador","recent":"Pesquisas recentes","clear_recent":"Remover pesquisas recentes","type":{"default":"Tópicos/postagens","users":"Usuários(as)","categories":"Categorias","categories_and_tags":"Categorias/etiquetas"},"context":{"user":"Pesquisar postagens de @%{username}","category":"Pesquisar a categoria #%{category}","tag":"Pesquisar a etiqueta #%{tag}","topic":"Pesquisar este tópico","private_messages":"Pesquisar mensagens"},"tips":{"category_tag":"filtros por categoria ou etiqueta","author":"filtros por autor(a) de postagem","in":"filtros por metadados (por exemplo: in:title, in:personal, in:pinned)","status":"filtros por status de tópico","full_search":"inicia pesquisa de pa'gina inteira","full_search_key":"%{modifier} + Enter","me":"mostrar apenas suas publicações"},"advanced":{"title":"Filtros avançados","posted_by":{"label":"Postado por","aria_label":"Filtro por autor(a) de postagem"},"in_category":{"label":"Categorizado"},"in_group":{"label":"Em grupo"},"with_badge":{"label":"Com emblema"},"with_tags":{"label":"Com etiqueta","aria_label":"Filtro usando etiquetas"},"filters":{"label":"Retornar somente tópicos/postagens…","title":"Correspondência somente no título","likes":"Curti","posted":"Postei em","created":"Criei","watching":"Estou acompanhando","tracking":"Estou monitorando","private":"Nas minhas mensagens","bookmarks":"Marquei como favorito","first":"são exatamente a primeira postagem","pinned":"estão fixados","seen":"Li","unseen":"Não li","wiki":"são wiki","all_tags":"Todas as etiquetas acima"},"statuses":{"label":"Em que os tópicos","open":"estão abertos","closed":"estão fechados","public":"são públicos","archived":"estão arquivados","noreplies":"não possuem respostas","single_user":"contêm um único usuário","solved":"foram solucionados","unsolved":"não foram solucionados"},"post":{"count":{"label":"Postagens"},"min":{"placeholder":"mínimo","aria_label":"filtrar por número mínimo de postagens"},"max":{"placeholder":"máximo","aria_label":"filtrar por número máximo de postagens"},"time":{"label":"Postado","aria_label":"Filtrar por data de postagem","before":"antes","after":"depois"}},"views":{"label":"Visualizações"},"min_views":{"placeholder":"mínimo","aria_label":"filtrar por visualizações mínimas"},"max_views":{"placeholder":"máximo","aria_label":"filtrar por visualizações máximas"},"additional_options":{"label":"Filtrar por contagem de postagens e visualizações de tópico"},"in":{"assigned":"foram atribuídos","unassigned":"tiveram atribuição removida"},"assigned":{"label":"Atribuiu a"},"vote":{"count":{"label":"Contagem mínima de votos"}}},"most_votes":"Mais votados"},"hamburger_menu":"menu","new_item":"novo","go_back":"voltar","not_logged_in_user":"página do(a) usuário(a) com resumo de atividades e preferências atuais","current_user":"ir para a sua página do(a) usuário(a)","view_all":"exibir tudo %{tab}","user_menu":{"generic_no_items":"Não há itens nesta lista.","sr_menu_tabs":"Abas do menu de usuário","view_all_notifications":"ver todas as notificações","view_all_bookmarks":"ver todos os favoritos","view_all_messages":"ver todas as mensagens pessoais","tabs":{"all_notifications":"Todas as notificações","replies":"Respostas","replies_with_unread":{"one":"Respostas - %{count} resposta não lida","other":"Respostas - %{count} respostas não lidas"},"mentions":"Menções","mentions_with_unread":{"one":"Menções - %{count} menção não lida","other":"Menções - %{count} menções não lidas"},"likes":"Curtidas","likes_with_unread":{"one":"Curtidas - %{count} curtida não lida","other":"Curtidas - %{count} curtidas não lidas"},"watching":"Tópicos acompanhados","watching_with_unread":{"one":"Tópicos acompanhados - %{count} tópico acompanhado não lido","other":"Tópicos acompanhados - %{count} tópicos assistidos não lidos"},"messages":"Mensagens pessoais","messages_with_unread":{"one":"Mensagens pessoais - %{count} mensagem não lida","other":"Mensagens pessoais - %{count} mensagens não lidas"},"bookmarks":"Favoritos","bookmarks_with_unread":{"one":"Marcadores - %{count} marcador não lido","other":"Marcadores - %{count} marcadores não lidos"},"review_queue":"Fila de revisão","review_queue_with_unread":{"one":"Fila de revisão - %{count} item precisa de revisão","other":"Fila de revisão - %{count} itens precisam de revisão"},"other_notifications":"Outras notificações","other_notifications_with_unread":{"one":"Outras notificações - %{count} notificação não lida","other":"Outras notificações - %{count} notificações não lidas"},"profile":"Perfil","chat_notifications":"Notificações do chat","chat_notifications_with_unread":{"one":"Notificações do chat - %{count} notificação não lida","other":"Notificações do chat - %{count} notificações não lidas"},"assign_list":"Lista de atribuições","assign_list_with_unread":{"one":"Lista de atribuições - %{count} atribuição não lida","other":"Lista de atribuições - %{count} atribuições não lidas"}},"reviewable":{"view_all":"ver todos os itens de revisão","queue":"Fila","deleted_user":"(usuário excluído)","deleted_post":"(postagem excluída)","post_number_with_topic_title":"postagem #%{post_number} - %{title}","new_post_in_topic":"nova postagem em %{title}","user_requires_approval":"%{username} requer aprovação","default_item":"item revisável #%{reviewable_id}"},"no_chat_notifications_title":"Você ainda não tem notificações no chat","no_chat_notifications_body":"Você receberá uma notificação neste painel quando alguém enviar uma mensagem ou \u003cb\u003e@mencionar\u003c/b\u003e você no chat. As notificações também serão enviadas para o seu e-mail quando você não fizer login por um tempo. \u003cbr\u003e\u003cbr\u003e Clique no título na parte superior de qualquer canal de chat para configurar quais notificações você recebe nesse canal. Para saber mais, consulte suas \u003ca href='%{preferencesUrl}'\u003epreferências de notificação\u003c/a\u003e.\n","view_all_assigned":"ver todos os atribuídos"},"topics":{"new_messages_marker":"último acesso","bulk":{"confirm":"Confirmar","select_all":"Selecionar tudo","clear_all":"Limpar tudo","unlist_topics":"Remover tópicos da lista","relist_topics":"Reinserir tópicos na lista","reset_bump_dates":"Redefinir datas de promoção","delete":"Excluir tópicos","dismiss":"Descartar","dismiss_read":"Descartar todos os não lidos","dismiss_read_with_selected":{"one":"Descartar %{count} não lida","other":"Descartar %{count} não lidos(as)"},"dismiss_button":"Descartar...","dismiss_button_with_selected":{"one":"Descartar (%{count})…","other":"Descartar (%{count})…"},"dismiss_tooltip":"Descartar apenas postagens novas ou parar de monitorar tópicos","also_dismiss_topics":"Parar de monitorar estes tópicos para que eles deixem de aparecer como não lidos para mim","dismiss_new":"Descartar novos","dismiss_new_modal":{"title":"Descartar novos","topics":"Descartar novos tópicos","posts":"Descartar novas respostas","topics_with_count":{"one":"Descartar %{count} tópico novo","other":"Descartar %{count} novos tópicos"},"replies_with_count":{"one":"Descartar %{count} resposta nova","other":"Descartar %{count} respostas novas"},"replies":"Descartar novas respostas","untrack":"Parar de seguir esses tópicos para que parem de aparecer em minha nova lista"},"dismiss_new_with_selected":{"one":"Descartar novo(a) (%{count})","other":"Descartar novos(as) (%{count})"},"toggle":"alternar seleção de tópicos em massa","actions":"Ações em massa","change_category":"Definir categoria…","close_topics":"Fechar tópicos","archive_topics":"Arquivar tópicos","move_messages_to_inbox":"Mover para caixa de entrada","notification_level":"Notificações…","change_notification_level":"Alterar nível de notificação","choose_new_category":"Escolha a nova categoria para os tópicos:","selected":{"one":"Você selecionou \u003cb\u003e%{count}\u003c/b\u003e tópico.","other":"Você selecionou \u003cb\u003e%{count}\u003c/b\u003e tópicos."},"selected_count":{"one":"Selecionou %{count}","other":"Selecionou %{count}"},"change_tags":"Substituir etiquetas","append_tags":"Adicionar etiquetas","choose_new_tags":"Escolha novas etiquetas para estes tópicos:","choose_append_tags":"Escolha novas etiquetas para adicionar a estes tópicos:","changed_tags":"As etiquetas destes tópicos foram alteradas.","remove_tags":"Remover todas as etiquetas","confirm_remove_tags":{"one":"Todas as etiquetas serão removidas deste tópico. Deseja prosseguir?","other":"Todas as etiquetas serão removidas de \u003cb\u003e%{count}\u003c/b\u003e tópicos. Deseja prosseguir?"},"progress":{"one":"Progresso: \u003cstrong\u003e%{count}\u003c/strong\u003e tópico","other":"Progresso: \u003cstrong\u003e%{count}\u003c/strong\u003e tópicos"},"silent":"Realizar esta ação silenciosamente.","unassign":"Remover atribuição de tópicos","assign":"Atribuir tópicos"},"none":{"unread":"Você não tem tópicos não lidos.","unseen":"Você não tem tópicos não vistos.","new":"Você não tem novos tópicos.","read":"Você ainda não leu nenhum tópico.","posted":"Você ainda não postou em nenhum tópico.","latest":"Não tem mais novidades!","bookmarks":"Você ainda não tem nenhum tópico favorito.","category":"Não há tópicos na categoria %{category}.","top":"Não há melhores tópicos.","hot":"Não há tópicos principais.","filter":"Não existem tópicos.","educate":{"new":"\u003cp\u003eSeus novos tópicos serão exibidos aqui. Por padrão, os tópicos serão considerados novos e exibirão um \u003cspan class=\"badge new-topic badge-notification\" style=\"vertical-align:middle;line-height:inherit;\"\u003e\u003c/span\u003e indicador se tiverem tido criados nos últimos dois dias.\u003c/p\u003e\u003cp\u003eAcesse suas \u003ca href=\"%{userPrefsUrl}\"\u003epreferências\u003c/a\u003e para alterar essa configuração.\u003c/p\u003e","unread":"\u003cp\u003eSeus tópicos não lidos são exibidos aqui.\u003c/p\u003e\u003cp\u003ePor padrão, os tópicos são considerados como não lidos e exibirão contadores \u003cspan class=\"badge unread-posts badge-notification\"\u003e1\u003c/span\u003e se você tiver:\u003c/p\u003e\u003cul\u003e\u003cli\u003ecriado o tópico\u003c/li\u003e\u003cli\u003erespondido ao tópico\u003c/li\u003e\u003cli\u003elido o tópico por mais de 5 minutos\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eou marcado o tópico como Monitorado ou Acompanhado no 🔔 em cada tópico.\u003c/p\u003e\u003cp\u003eAcesse suas \u003ca href=\"%{userPrefsUrl}\"\u003epreferências\u003c/a\u003e para alterar essa configuração.\u003c/p\u003e","new_new":"\u003cp\u003eSeus novos tópicos aparecerão aqui e seus tópicos não lidos também serão exibidos. Por padrão, os tópicos são considerados novos e mostrarão um indicador \u003cspan class=\"badge new-topic badge-notification\" style=\"vertical-align:middle;line-height:inherit;\"\u003e\u003c/span\u003e se tiverem sido criados nos últimos 2 dias. Tópicos não lidos mostrarão contagens não lidas \u003cspan class=\"badge unread-posts badge-notification\"\u003e1\u003c/span\u003e se você: tiver criado o tópico, respondido ao tópico, lido o tópico por mais de 5 minutos ou se você tiver definido explicitamente o tópico como Monitorado ou Acompanhado através do 🔔 em cada tópico.\u003c/p\u003e\u003cp\u003eAcesse suas \u003ca href=\"%{userPrefsUrl}\"\u003epreferências\u003c/a\u003e para alterar isso.\u003c/p\u003e"}},"bottom":{"latest":"Não há mais últimos tópicos.","posted":"Não há mais tópicos postados.","read":"Não há mais tópicos lidos.","new":"Não há mais tópicos novos.","unread":"Não há mais tópicos não lidos.","unseen":"Não há mais tópicos não vistos.","category":"Não há mais tópicos na categoria %{category}.","tag":"Não há mais tópicos na categoria %{tag}.","top":"Não há mais melhores tópicos.","hot":"Não há mais tópicos principais.","bookmarks":"Não há mais tópicos favoritos.","filter":"Não existem mais tópicos."}},"topic_bulk_actions":{"close_topics":{"name":"Fechar tópicos","optional":"(opcional)"},"archive_topics":{"name":"Arquivar tópicos"},"unlist_topics":{"name":"Remover tópicos da lista"},"relist_topics":{"name":"Reinserir tópicos na lista"},"append_tags":{"name":"Adicionar etiquetas"},"replace_tags":{"name":"Substituir etiquetas"},"delete_topics":{"name":"Excluir tópicos"},"update_category":{"name":"Atualizar Categoria","description":"Escolha a nova categoria para os tópicos selecionados"}},"topic":{"filter_to":{"one":"%{count} postagem no tópico","other":"%{count} postagens no tópico"},"create":"Novo tópico","create_disabled_category":"Você não possui permissão para criar tópicos nesta categoria","create_long":"Criar um novo tópico","open_draft":"Abrir rascunho","private_message":"Iniciar uma mensagem","archive_message":{"help":"Mover mensagem para o seu arquivo","title":"Arquivar"},"move_to_inbox":{"title":"Mover para caixa de entrada","help":"Mover mensagem de volta para caixa de entrada"},"list":"Tópicos","new":"novo tópico","unread":"não lido","new_topics":{"one":"%{count} tópico novo","other":"%{count} tópicos novos"},"unread_topics":{"one":"%{count} tópico não lido","other":"%{count} tópicos não lidos"},"title":"Tópico","invalid_access":{"title":"Tópico é privado","description":"Desculpe, você não tem acesso a esse tópico!","login_required":"Você precisa entrar para ver esse tópico."},"server_error":{"title":"Falha ao carregar tópico","description":"Desculpe, não foi possível este tópico, possivelmente devido a um problema na conexão. Tente novamente. Se o problema persistir, entre em contato conosco."},"not_found":{"title":"Tópico não encontrado","description":"Desculpe, não foi possível encontrar esse tópico. Talvez tenha sido removido pela moderação."},"unread_posts":{"one":"você tem %{count} postagem não lida neste tópico","other":"você tem %{count} postagens não lidas neste tópico"},"likes":{"one":"há %{count} curtida neste tópico","other":"há %{count} curtidas neste tópico"},"back_to_list":"Voltar para a lista de tópicos","options":"Opções de tópico","show_links":"exibir links neste tópico","collapse_details":"recolher detalhes do tópico","expand_details":"expandir detalhes do tópico","read_more_in_category":"Quer ler mais? Navegue por outros tópicos em %{categoryLink} ou \u003ca href='%{latestLink}'\u003eveja os tópicos mais recentes\u003c/a\u003e.","read_more":"Quer ler mais? \u003ca href='%{categoryLink}'\u003eNavegue por todas as categorias\u003c/a\u003e ou \u003ca href='%{latestLink}'\u003eveja os tópicos mais recentes\u003c/a\u003e.","unread_indicator":"Nenhum membro leu a última postagem deste tópico ainda.","participant_groups":"Grupos de participantes","created_at":"Criação: %{date}","bumped_at":"Mais recentes: %{date}","browse_all_categories_latest":"\u003ca href='%{basePath}/categories'\u003eNavegue por todas as categorias\u003c/a\u003e ou \u003ca href='%{basePath}/latest'\u003eveja os tópicos mais recentes\u003c/a\u003e.","browse_all_categories_latest_or_top":"\u003ca href='%{basePath}/categories'\u003eNavegue por todas as categorias\u003c/a\u003e, \u003ca href='%{basePath}/latest'\u003eveja os tópicos mais recentes\u003c/a\u003e ou veja os principais:","browse_all_tags_or_latest":"\u003ca href='%{basePath}/tags'\u003eNavegue por todas as etiquetas\u003c/a\u003e ou \u003ca href='%{basePath}/latest'\u003evisualize os tópicos mais recentes\u003c/a\u003e.","suggest_create_topic":"Tudo pronto para \u003ca href\u003ecomeçar uma nova conversa?\u003c/a\u003e","jump_reply":"Ir para o local da postagem original","jump_reply_aria":"Ir para a postagem de @%{username} em sua localização original","deleted":"Este tópico foi excluído","slow_mode_update":{"title":"Modo lento","select":"Os(as) usuários(as) podem postar neste tópico apenas a cada:","description":"Para promover um diálogo saudável em discussões dinâmicas e acirradas, os(as) usuários(as) devem aguardar antes de postar neste tópico outra vez.","enable":"Ativar","update":"Atualizar","enabled_until":"Ativado(a) até:","remove":"Desativar","hours":"Horas:","minutes":"Minutos:","seconds":"Segundos:","durations":{"10_minutes":"10 minutos","15_minutes":"15 minutos","30_minutes":"30 minutos","45_minutes":"45 minutos","1_hour":"1 hora","2_hours":"2 horas","4_hours":"4 horas","8_hours":"8 horas","12_hours":"12 horas","24_hours":"24 horas","custom":"Duração personalizada"}},"slow_mode_notice":{"duration":"Aguarde %{duration} entre as postagens neste tópico"},"topic_status_update":{"title":"Timer de tópico","save":"Definir timer","num_of_hours":"Quantidade de horas:","num_of_days":"Quantidade de dias:","remove":"Remover timer","publish_to":"Publicar em:","when":"Quando:","time_frame_required":"Selecione um intervalo de tempo","min_duration":"A duração deve ser maior do que 0","max_duration":"A duração deve ser menor do que 20 anos","duration":"Duração"},"publish_to_category":{"title":"Agendar postagem"},"temp_open":{"title":"Abrir temporariamente"},"auto_reopen":{"title":"Abrir tópico automaticamente"},"temp_close":{"title":"Fechar temporariamente"},"auto_close":{"title":"Fechar tópico automaticamente","label":"Fechar tópico automaticamente após:","error":"Digite um valor válido.","based_on_last_post":"Não fechaeaté que a última postagem do tópico tenha pelo menos esta duração."},"auto_close_after_last_post":{"title":"Fechar tópico automaticamente após a última postagem"},"auto_delete":{"title":"Excluir tópico automaticamente"},"auto_bump":{"title":"Promover tópico automaticamente"},"reminder":{"title":"Lembrar"},"auto_delete_replies":{"title":"Excluir respostas automaticamente"},"status_update_notice":{"auto_open":"Este tópico abrirá automaticamente em %{timeLeft}.","auto_close":"Este tópico fechará automaticamente em %{timeLeft}.","auto_publish_to_category":"Este tópico será publicado em \u003ca href=%{categoryUrl}\u003e#%{categoryName}\u003c/a\u003e %{timeLeft}.","auto_close_after_last_post":"Este tópico fechará %{duration} após a última resposta.","auto_delete":"Este tópico será automaticamente excluído em %{timeLeft}.","auto_bump":"Este tópico será automaticamente promovido em %{timeLeft}.","auto_reminder":"Você será lembrado sobre este tópico em %{timeLeft}.","auto_delete_replies":"As respostas deste tópico são excluídas automaticamente após %{duration}."},"auto_close_title":"Configurações de fechamento automático","auto_close_immediate":{"one":"A última postagem no tópico foi feita há %{count} hora, portanto o tópico será fechado imediatamente.","other":"A última postagem no tópico já foi feita há %{count} horas, portanto o tópico será fechado imediatamente."},"auto_close_momentarily":{"one":"A última postagem no tópico foi feita há %{count} hora, portanto o tópico será fechado momentaneamente.","other":"A última postagem no tópico foi feita há %{count} horas, portanto o tópico será fechado momentaneamente."},"timeline":{"back":"Voltar","back_description":"Voltar para a sua última postagem não lida","replies_short":"%{current}/%{total}"},"progress":{"title":"progresso do tópico","jump_prompt":"pular para…","jump_prompt_of":{"one":"de %{count} postagem","other":"de %{count} postagens"},"jump_prompt_long":"Pular para…","jump_prompt_to_date":"até agora","jump_prompt_or":"ou"},"notifications":{"title":"altere a frequência de notificações sobre este tópico","reasons":{"mailing_list_mode":"Você está com o modo lista de endereçamento ativado, por isso receberá por e-mail notificações sobre as respostas.","3_10":"Você receberá notificações porque está acompanhando uma etiqueta neste tópico.","3_10_stale":"Você receberá notificações porque estava acompanhando uma etiqueta neste tópico.","3_6":"Você receberá notificações porque você está acompanhando esta categoria.","3_6_stale":"Você receberá notificações porque estava acompanhando esta categoria.","3_5":"Você receberá notificações porque começou a acompanhar este tópico automaticamente.","3_2":"Você receberá notificações porque está acompanhando este tópico.","3_1":"Você receberá notificações porque criou este tópico.","3":"Você receberá notificações porque você está acompanhando este tópico.","2_8":"Você verá uma contagem de respostas novas porque está monitorando esta categoria.","2_8_stale":"Você verá uma contagem de respostas novas porque você estava monitorando esta categoria.","2_4":"Você verá uma contagem de respostas novas porque postou uma resposta a este tópico.","2_2":"Você verá uma contagem de respostas novas porque está monitorando este tópico.","2":"Você verá uma contagem de respostas novas porque \u003ca href=\"%{basePath}/u/%{username}/preferences/notifications\"\u003eleu este tópico\u003c/a\u003e.","1_2":"Você será notificado(a) se alguém mencionar seu @nome ou responder às suas mensagens.","1":"Você será notificado(a) se alguém mencionar seu @nome ou responder às suas mensagens.","0_7":"Você está ignorando todas as notificações nesta categoria.","0_2":"Você está ignorando todas as notificações deste tópico.","0":"Você está ignorando todas as notificações deste tópico."},"watching_pm":{"title":"Acompanhando","description":"Você será notificado(a) sobre cada resposta nova nesta mensagem. Um contador de respostas novas será exibido."},"watching":{"title":"Acompanhando","description":"Você será notificado(a) sobre cada resposta nova neste tópico. Um contador de respostas novas será exibido."},"tracking_pm":{"title":"Monitorando","description":"Um contador de respostas novas será exibido para esta mensagem. Você será notificado(a) se alguém mencionar seu @nome ou responder às suas mensagens."},"tracking":{"title":"Monitorando","description":"Um contador de respostas novas será exibido para este tópico. Você será notificado(a) se alguém mencionar seu @nome ou responder às suas mensagens."},"regular":{"title":"Normal","description":"Você será notificado(a) se alguém mencionar seu @nome ou responder às suas mensagens."},"regular_pm":{"title":"Normal","description":"Você será notificado(a) se alguém mencionar seu @nome ou responder às suas mensagens."},"muted_pm":{"title":"Silenciado(a)","description":"Você nunca receberá nenhuma notificação sobre esta mensagem."},"muted":{"title":"Silenciados(as)","description":"Você nunca receberá nenhuma notificação sobre este tópico, e ele não aparecerá nos mais recentes."}},"actions":{"title":"Ações","recover":"Restaurar tópico","delete":"Excluir tópico","open":"Abrir tópico","close":"Fechar tópico","multi_select":"Selecionar postagens...","slow_mode":"Ver modo lento…","timed_update":"Definir timer do tópico…","pin":"Fixar tópico...","unpin":"Desafixar tópico...","unarchive":"Desarquivar tópico","archive":"Arquivar tópico","invisible":"Tópico removido da lista","visible":"Tópico na lista","reset_read":"Redefinir data de leitura","make_public":"Tornar tópico público…","make_private":"Crie uma mensagem pessoal","reset_bump_date":"Redefinir data de promoção"},"feature":{"pin":"Fixar tópico","unpin":"Desafixar tópico","pin_globally":"Fixar tópico globalmente","make_banner":"Criar tópico de banner","remove_banner":"Remover tópico de banner"},"reply":{"title":"Responder","help":"começar a escrever uma resposta para este tópico"},"share":{"title":"Compartilhar tópico","extended_title":"Compartilhar um link","help":"compartilhar um link deste tópico","instructions":"Compartilhar um link para este tópico:","copied":"Link do tópico copiado.","restricted_groups":{"one":"Visível apenas para membros do grupo: %{groupNames}","other":"Visível apenas para membros dos grupos: %{groupNames}"},"invite_users":"Convite"},"print":{"title":"Imprimir","help":"Abrir uma versão imprimível deste tópico"},"flag_topic":{"title":"Sinalizar","help":"sinalize este tópico de forma privada para chamar atenção ou notificar sobre isto","success_message":"Você sinalizou com êxito este tópico."},"make_public":{"title":"Converter para o tópico público","choose_category":"Escolha uma categoria para o tópico público:"},"feature_topic":{"title":"Destacar este tópico","pin":"Fazer que este tópico apareça no topo da categoria %{categoryLink} até","unpin":"Remover este tópico do inicio da categoria %{categoryLink}.","unpin_until":"Remover este tópico do topo da categoria %{categoryLink} ou esperar até \u003cstrong\u003e%{until}\u003c/strong\u003e.","pin_note":"Usuários(as) podem desafixar o tópico individualmente para si.","pin_validation":"Uma data é necessária para fixar este tópico.","not_pinned":"Não existem tópicos fixados em %{categoryLink}.","already_pinned":{"one":"Tópicos fixados em %{categoryLink}: \u003cstrong class='badge badge-notification unread'\u003e%{count}\u003c/strong\u003e","other":"Tópicos fixados em %{categoryLink}: \u003cstrong class='badge badge-notification unread'\u003e%{count}\u003c/strong\u003e"},"pin_globally":"Fazer com que este tópico apareça no topo de todas listas de tópicos até","confirm_pin_globally":{"one":"Você já tem %{count} tópico ficado globalmente. Uma grande quantidade de tópicos fixados pode atrapalhar usuários(as) novos(as) e anônimos(as). Tem certeza de que quer fixar outro tópico globalmente?","other":"Você já tem %{count} tópicos ficados globalmente. Uma grande quantidade de tópicos fixados pode atrapalhar usuários(as) novos(as) e anônimos(as). Tem certeza de que quer fixar outro tópico globalmente?"},"unpin_globally":"Remover este tópico do inicio de todas as listas de tópicos.","unpin_globally_until":"Remover este tópico do topo de todas listagens de tópicos ou esperar até \u003cstrong\u003e%{until}\u003c/strong\u003e.","global_pin_note":"Usuários(as) podem desafixar o tópico individualmente para si.","not_pinned_globally":"Não existem tópicos fixados globalmente.","already_pinned_globally":{"one":"Tópicos atuais fixados globalmente: \u003cstrong class='badge badge-notification unread'\u003e%{count}\u003c/strong\u003e.","other":"Tópicos atuais fixados globalmente: \u003cstrong class='badge badge-notification unread'\u003e%{count}\u003c/strong\u003e"},"make_banner":"Tornar este tópico um banner que é exibido no inicio de todas as páginas.","remove_banner":"Remover o banner que é exibido no topo de todas as páginas.","banner_note":"Usuários(as) podem descartar o banner ao fechar. Apenas um tópico pode ser colocado como banner em um momento.","no_banner_exists":"Não existe tópico de banner.","banner_exists":"\u003cstrong class='badge badge-notification unread'\u003eExiste\u003c/strong\u003e um tópico de banner."},"inviting":"Convidando…","automatically_add_to_groups":"Este convite também inclui acesso a estes grupos:","invite_private":{"title":"Convidar para conversa privada","email_or_username":"E-mail ou nome do(a) usuário(a) do(a) convidado(a)","email_or_username_placeholder":"e-mail ou nome do(a) usuário(a)","action":"Convite","success":"Convidamos esse usuário(a) para participar desta mensagem privada.","success_group":"Convidamos esse grupo para participar desta mensagem.","error":"Desculpe, houve um erro ao convidar este(a) usuário(a).","not_allowed":"Desculpe, não é possível convidar este(a) usuário(a).","group_name":"nome do grupo"},"controls":"Controles do tópico","invite_reply":{"title":"Convite","username_placeholder":"nome do(a) usuário(a)","action":"Enviar convite","help":"Convidar outras pessoas para este tópico por e-mail ou notificação","to_forum":"Enviaremos um e-mail breve que permite que seu(sua) amigo(a) ingresse imediatamente ao clicar no link.","discourse_connect_enabled":"Digite o nome do(a) usuário(a) da pessoa que você gostaria de convidar para este tópico.","to_topic_blank":"Digite o nome do(a) usuário(a) ou endereço de e-mail da pessoa que você gostaria de convidar para este tópico.","to_topic_email":"Você digitou um endereço de e-mail. Enviaremos por e-mail um convite que permite que seu(sua) amigo(a) responda imediatamente a este tópico.","to_topic_username":"Você digitou um nome do(a) usuário(a). Enviaremos uma notificação com um link convidando para este tópico.","to_username":"Você digitou o nome do(a) usuário(a) da pessoa que gostaria de convidar. Enviaremos uma notificação com um link convidando para este tópico.","email_placeholder":"nome@exemplo.com","success_email":"Enviamos por e-mail um convite para \u003cb\u003e%{invitee}\u003c/b\u003e. Você será notificado(a) quando o convite for resgatado. Verifique a aba de convites na sua página de usuário(a) para monitorar seus convites.","success_username":"Convidamos o(a) usuário(a) para participar neste tópico.","error":"Desculpe, não foi possível convidar essa pessoa. Talvez já tenha sido convidada. (os convites são limitados)","success_existing_email":"Já existe um(a) usuário(a) com o e-mail \u003cb\u003e%{emailOrUsername}\u003c/b\u003e. Convidamos esse(a) usuário(a) para participar deste tópico."},"login_reply":"Entrar para responder","filters":{"n_posts":{"one":"%{count} postagem","other":"%{count} postagens"},"cancel":"Remover filtro"},"move_to":{"title":"Mover para","action":"mover para","error":"Ocorreu um erro ao mover postagens."},"split_topic":{"title":"Mover para novo tópico","action":"mover para novo tópico","topic_name":"Título do novo tópico","radio_label":"Novo tópico","error":"Houve um erro ao mover postagens para o novo tópico.","instructions":{"one":"Você está prestes a criar um novo tópico e preenchê-lo com a postagem selecionada.","other":"Você está prestes a criar um novo tópico e preenchê-lo com as \u003cb\u003e%{count}\u003c/b\u003e postagens selecionadas."}},"merge_topic":{"title":"Mover para tópico existente","action":"mover para tópico existente","error":"Ocorreu um erro ao mover as postagens para esse tópico.","radio_label":"Tópico existente","instructions":{"one":"Selecione o tópico para o qual você gostaria de mover esta postagem.","other":"Selecione o tópico para o qual você gostaria de mover estas \u003cb\u003e%{count}\u003c/b\u003e postagens."},"chronological_order":"preservar a ordem cronológica após a mesclagem"},"move_to_new_message":{"title":"Mover para nova mensagem","action":"mover para nova mensagem","message_title":"Título da nova mensagem","radio_label":"Nova mensagem","participants":"Participantes","instructions":{"one":"Você está prestes a criar uma nova mensagem e preenchê-la com a postagem selecionada.","other":"Você está prestes a criar uma nova mensagem e preenchê-la com as \u003cb\u003e%{count}\u003c/b\u003e postagens selecionadas."}},"move_to_existing_message":{"title":"Mover para mensagem existente","action":"mover para mensagem existente","radio_label":"Mensagem existente","participants":"Participantes","instructions":{"one":"Escolha a mensagem para a qual você gostaria de mover a postagem.","other":"Escolha a mensagem para a qual você gostaria de mover as \u003cb\u003e%{count}\u003c/b\u003e postagens."}},"merge_posts":{"title":"Mesclar as postagens selecionadas","action":"mesclar as postagens selecionadas","error":"Houve um erro ao mesclar as postagens selecionadas."},"publish_page":{"title":"Postagem de páginas","publish":"Publicar","description":"Quando um tópico for publicado como uma página, sua URL pode ser compartilhada e será exibida com um estilo personalizado.","slug":"Slug","public":"Público(a)","public_description":"As pessoas podem visualizar a página se o tópico associado for privado.","publish_url":"Sua página foi publicada em:","topic_published":"Seu tópico foi publicado em:","preview_url":"Sua página será publicada em:","invalid_slug":"Desculpe, você não pode publicar esta página.","unpublish":"Cancelar postagem","unpublished":"A publicação da sua página foi cancelada e ela não está mais acessível.","publishing_settings":"Configurações de publicação"},"change_owner":{"title":"Trocar autor(a)","action":"trocar propriedade","error":"Houve um erro ao alterar o(a) autor(a) destas publicações.","placeholder":"nome do(a) usuário(a) do(a) novo(a) proprietário(a)","instructions":{"one":"Escolha um(a) novo(a) proprietário(a) para a postagem de \u003cb\u003e@%{old_user}\u003c/b\u003e","other":"Escolha um(a) novo(a) proprietário(a) para as %{count} postagens de \u003cb\u003e@%{old_user}\u003c/b\u003e"},"instructions_without_old_user":{"one":"Escolha um(a) novo(a) proprietário(a) para a postagem","other":"Escolha um(a) novo(a) proprietário(a) para as %{count} postagens"}},"change_timestamp":{"title":"Alterar carimbo de data/hora…","action":"alterar carimbo de data/hora","invalid_timestamp":"O carimbo de data/hora não pode ser posterior ao atual.","error":"Ocorreu um erro ao alterar o carimbo de data/hora do tópico.","instructions":"Selecione um novo carimbo de data/hora para o tópico. As publicações do tópico serão atualizadas para terem a mesma diferença de tempo."},"multi_select":{"select":"selecionar","selected":"(%{count}) selecionados(as)","select_post":{"label":"selecionar","title":"Adicionar postagem à seleção"},"selected_post":{"label":"selecionado(a)","title":"Clique para remover a postagem da seleção"},"select_replies":{"label":"selecionar +respostas","title":"Adicionar postagem e todas as suas respostas à seleção"},"select_below":{"label":"selecionar +abaixo","title":"Adicionar a postagem e todo o conteúdo abaixo à seleção"},"delete":"Excluir selecionados(as)","cancel":"cancelar seleção","select_all":"selecionar tudo","deselect_all":"cancelar todas as seleções","description":{"one":"\u003cb\u003e%{count}\u003c/b\u003e resposta selecionada.","other":"\u003cb\u003e%{count}\u003c/b\u003e respostas selecionadas."}},"deleted_by_author_simple":"(tópico excluído pelo(a) autor(a))","create_zendesk_issue":"Criar tíquete da Zendesk","view_zendesk_issue":"Ver na Zendesk"},"post":{"confirm_delete":"Tem certeza de que deseja excluir esta postagem?","quote_reply":"Citação","quote_reply_shortcut":"Citar (ou apertar e)","quote_edit":"Editar","quote_edit_shortcut":"Editar (ou apertar e)","quote_copy":"Copiar citação","quote_copied_to_clibboard":"Citação copiada para área de transferência","quote_share":"Compartilhar","edit_reason":"Motivo:","post_number":"postagem %{number}","ignored":"Conteúdo ignorado","wiki_last_edited_on":"última edição do wiki em %{dateTime}","last_edited_on":"última edição da postagem em %{dateTime}","edit_history":"histórico de edição da postagem","reply_as_new_topic":"Responder como um tópico vinculado","reply_as_new_private_message":"Responder como nova mensagem aos mesmos destinatários","continue_discussion":"Continuando a discussão de %{postLink}:","follow_quote":"ir para a resposta citada","show_full":"Exibir postagem completa","show_hidden":"Ver o conteúdo ignorado.","deleted_by_author_simple":"(postagem excluída pelo(a) autor(a))","collapse":"recolher","sr_collapse_replies":"Recolher respostas incorporadas","sr_date":"Data da postagem","sr_expand_replies":{"one":"Esta publicação tem %{count} resposta","other":"Esta postagem tem %{count} respostas"},"expand_collapse":"expandir/recolher","sr_below_embedded_posts_description":"poste #%{post_number} respostas","sr_embedded_reply_description":"resposta por @%{username} à postagem #%{post_number}","locked":"um membro da equipe bloqueou esta publicação para edição","gap":{"one":"ver %{count} resposta oculta","other":"ver %{count} respostas ocultas"},"sr_reply_to":"Resposta à postagem %{post_number} por %{username}","notice":{"new_user":"Esta é a primeira vez que %{user} postou. Vamos dar boas-vindas à nossa comunidade","returning_user":"Faz tempo que não vemos %{user}. Sua última postagem foi em %{time}."},"unread":"A postagem não foi lida","has_replies":{"one":"%{count} resposta","other":"%{count} respostas"},"has_replies_count":"%{count}","unknown_user":"(usuário desconhecido/excluído)","has_likes_title":{"one":"%{count} pessoa curtiu esta postagem","other":"%{count} pessoas curtiram esta postagem"},"has_likes_title_only_you":"você curtiu esta postagem","has_likes_title_you":{"one":"você e mais %{count} pessoa curtiram esta postagem","other":"você e mais %{count} outras pessoas curtiram esta postagem"},"sr_post_like_count_button":{"one":"%{count} pessoa curtiu esta postagem. Clique para visualizar","other":"%{count} pessoas curtiram esta postagem. Clique para visualizar"},"sr_post_read_count_button":{"one":"%{count} pessoa leu esta postagem. Clique para visualizar","other":"%{count} pessoas leram esta postagem. Clique para visualizar"},"filtered_replies_hint":{"one":"Exibir esta postagem e a resposta","other":"Exibir esta postagem e as %{count} respostas"},"filtered_replies_viewing":{"one":"Exibindo %{count} resposta a","other":"Exibindo %{count} respostas a"},"in_reply_to":"Carregar postagem pai","view_all_posts":"visualizar todas as postagens","errors":{"create":"Desculpe, houve um erro ao criar sua postagem. Tente outra vez.","edit":"Desculpe, houve um erro ao editar sua postagem. Tente outra vez.","upload":"Desculpe, houve um erro ao enviar %{file_name}. Tente novamente.","backup_too_large":"Desculpe, o arquivo de backup é grande demais.","file_too_large":"Desculpe, este arquivo é muito grande (o tamanho máximo é de %{max_size_kb} KB). Que tal enviar o arquivo grande para um serviço de nuvem e compartilhar o link?","file_size_zero":"Desculpe, parece que algo deu errado, o arquivo que você está tentando enviar tem 0 bytes. Tente novamente.","file_too_large_humanized":"Desculpe, este arquivo é muito grande (o tamanho máximo é de %{max_size}). Que tal enviar o arquivo grande para um serviço de nuvem e compartilhar o link?","too_many_uploads":"Desculpe, você pode enviar apenas um arquivo por vez.","too_many_dragged_and_dropped_files":{"one":"Desculpe, é possível carregar apenas %{count} arquivo por vez.","other":"Desculpe, é possível carregar apenas %{count} arquivos por vez."},"upload_not_authorized":"Desculpe, o arquivo que você está tentando enviar não é permitido (extensões permitidas: %{authorized_extensions}).","no_uploads_authorized":"Desculpe, nenhum arquivo está autorizado a ser carregado.","image_upload_not_allowed_for_new_user":"Desculpe, usuários(as) novos(as) não podem enviar imagens.","attachment_upload_not_allowed_for_new_user":"Desculpe, usuários(as) novos(as) não podem enviar anexos.","attachment_download_requires_login":"Desculpe, você precisa entrar para baixar arquivos anexos."},"cancel_composer":{"confirm":"O que gostaria de fazer com sua postagem?","discard":"Descartar","save_draft":"Salvar rascunho para mais tarde","keep_editing":"Continuar editando"},"via_email":"postagem recebida via e-mail","via_auto_generated_email":"esta mensagem chegou por um e-mail gerado automaticamente","whisper":"esta mensagem é um sussuro privado para a moderação","whisper_groups":"esta postagem é um sussurro privado visível apenas para %{groupNames}","wiki":{"about":"esta postagem é uma wiki"},"few_likes_left":"Obrigado por compartilhar o amor! Restam apenas algumas curtidas sobrando para você usar hoje.","controls":{"reply":"começar a escrever uma resposta para esta postagem","like":"curtir esta postagem","has_liked":"você curtiu esta postagem","read_indicator":"membros que leram esta postagem","undo_like":"desfazer curtida","edit":"editar esta postagem","edit_action":"Editar","edit_anonymous":"Você precisa estar conectado(a) para editar esta postagem.","flag":"sinalize esta postagem de forma privada para chamar atenção ou notificar sobre isto","delete":"excluir esta postagem","undelete":"recuperar esta postagem","share":"compartilhar o link desta postagem","copy_title":"copiar um link desta postagem para a área de transferência","link_copied":"Link copiado!","more":"Mais","delete_replies":{"confirm":"Você também deseja excluir as respostas desta postagem?","direct_replies":{"one":"Sim e %{count} resposta direta","other":"Sim e %{count} respostas diretas"},"all_replies":{"one":"Sim, e %{count} resposta","other":"Sim, e todas as %{count} respostas"},"just_the_post":"Não, apenas esta postagem"},"admin":"ações administrativas da postagem","permanently_delete":"Excluir permanentemente","permanently_delete_confirmation":"Tem certeza de que deseja excluir permanentemente esta postagem? Não será possível recuperá-la.","wiki":"Tornar Wiki","unwiki":"Remover Wiki","convert_to_moderator":"Adicionar cor da equipe","revert_to_regular":"Remover cor da equipe","rebake":"Reconstruir HTML","publish_page":"Publicação de página","unhide":"Revelar","change_owner":"Trocar propriedade…","grant_badge":"Conceder emblema…","lock_post":"Bloquear postagem","lock_post_description":"impedir que o(a) autor(a) edite esta postagem","unlock_post":"Desbloquear postagem","unlock_post_description":"permitir que o(a) autor(a) edite esta postagem","delete_topic_disallowed_modal":"Você não tem permissão para apagar este tópico. Se realmente quiser que seja excluído, envie um sinalizador para alertar a moderação, além dos argumentos.","delete_topic_disallowed":"você não tem permissão para excluir este tópico","delete_topic_confirm_modal":{"one":"Atualmente este tópico tem mais de %{count} visualização e pode ser um destino de busca muito acessado. Tem certeza de que deseja excluir todo o tópico em vez de editar para melhorá-lo?","other":"Atualmente este tópico tem mais de %{count} visualizações e pode ser um destino de busca muito acessado. Tem certeza de que deseja excluir todo o tópico em vez de editar para melhorá-lo?"},"delete_topic_confirm_modal_yes":"Sim, excluir este tópico","delete_topic_confirm_modal_no":"Não, manter este tópico","delete_topic_error":"Ocorreu um erro ao excluir este tópico","delete_topic":"excluir tópico","add_post_notice":"Adicionar aviso da equipe…","change_post_notice":"Alterar aviso da equipe…","delete_post_notice":"Excluir aviso da equipe","remove_timer":"remover timer","edit_timer":"editar timer"},"actions":{"people":{"like":{"one":"curtiu isto","other":"curtiram isto"},"read":{"one":"leu isto","other":"Leram isto"},"like_capped":{"one":"e %{count} outro(a) curtiu","other":"e %{count} outros(as) curtiram"},"read_capped":{"one":"e %{count} outro(a) leu isto","other":"e %{count} outros(as) leram isto"},"sr_post_likers_list_description":"usuários curtiram esta postagem","sr_post_readers_list_description":"usuários que leram esta postagem"},"by_you":{"off_topic":"Você sinalizou isto como desvio de tópico","spam":"Você sinalizou isto como spam","inappropriate":"Você sinalizou isto como inapropriado","notify_moderators":"Você sinalizou isto para a moderação","notify_user":"Você enviou uma mensagem particular para este(a) usuário(a)"}},"delete":{"confirm":{"one":"Tem certeza de que deseja excluir esta postagem?","other":"Tem certeza de que deseja excluir estas %{count} postagens?"}},"merge":{"confirm":{"one":"Tem certeza de que deseja mesclar estas postagens?","other":"Tem certeza de que deseja mesclar estas %{count} postagens?"}},"revisions":{"controls":{"first":"Primeira revisão","previous":"Revisão anterior","next":"Próxima revisão","last":"Última revisão","hide":"Ocultar revisão","show":"Exibir revisão","destroy":"Excluir revisões","destroy_confirm":"Tem certeza de que deseja excluir todas as revisões desta postagem? Essa ação é permanente.","revert":"Reverter para a revisão %{revision}","edit_wiki":"Editar wiki","edit_post":"Editar postagem","comparing_previous_to_current_out_of_total":"\u003cstrong\u003e%{previous}\u003c/strong\u003e %{icon} \u003cstrong\u003e%{current}\u003c/strong\u003e/%{total}"},"displays":{"inline":{"title":"Exibir a saída renderizada com adições e remoções em linha","button":"HTML"},"side_by_side":{"title":"Exibir diferenças de saídas renderizadas lado a lado","button":"HTML"},"side_by_side_markdown":{"title":"Exibir diferenças de fontes não processadas lado a lado","button":"Não processado"}}},"raw_email":{"displays":{"raw":{"title":"Exibir e-mail não processado","button":"Não processado"},"text_part":{"title":"Exibir parte do texto do e-mail","button":"Texto"},"html_part":{"title":"Exibir parte em html do e-mail","button":"HTML"}}},"bookmarks":{"create":"Criar favorito","create_for_topic":"Criar favorito para o tópico","edit":"Editar favorito","edit_for_topic":"Editar favorito para o tópico","updated":"Atualizado","name":"Nome","name_placeholder":"Para que serve este favorito?","name_input_label":"Adicionar nome aos favoritos","set_reminder":"Lembrar","options":"Opções","actions":{"delete_bookmark":{"name":"Excluir favorito","description":"Remove o favorito do seu perfil e interrompe todos os lembretes do favorito"},"edit_bookmark":{"name":"Editar favorito","description":"Editar o nome do favorito ou alterar a data e hora do lembrete"},"clear_bookmark_reminder":{"name":"Limpar lembrete","description":"Limpar a data e hora do lembrete"},"pin_bookmark":{"name":"Fixar favoritos","description":"Fixe o favorito. Isso fará que seja exibido no topo da sua lista de favoritos."},"unpin_bookmark":{"name":"Desafixar favoritos","description":"Desafixe o favorito. Ele não será mais exibido no topo da sua lista de favoritos."}}},"filtered_replies":{"viewing_posts_by":"Vendo %{post_count} postagens de","viewing_subset":"Algumas respostas foram recolhidas","viewing_summary":"Visualizar as melhores respostas deste tópico","post_number":"%{username}, postagem #%{post_number}","show_all":"Exibir tudo"},"share":{"title":"Compartilhar Publicação #%{post_number}","instructions":"Compartilhar o link desta publicação:"}},"category":{"none":"(sem categoria)","all":"Todas as categorias","choose":"categoria\u0026hellip;","edit":"Editar","edit_title":"Editar esta categoria","edit_dialog_title":"Editar: %{categoryName}","view":"Visualizar tópicos na categoria","back":"Voltar para a categoria","general":"Geral","settings":"Configurações","topic_template":"Modelo","tags":"Etiquetas","tags_allowed_tags":"Restringir estas etiquetas a esta categoria:","tags_allowed_tag_groups":"Restringir estes grupos de etiquetas a esta categoria:","tags_placeholder":"(Opcional) lista de etiquetas permitidas","tags_tab_description":"As etiquetas e grupos de etiquetas especificadas acima estarão disponíveis apenas nesta categoria e nas outras categorias que também as especificarem, sendo que não estarão disponíveis para uso em outras categorias.","tag_groups_placeholder":"(Opcional) lista de grupos de etiquetas permitidos","manage_tag_groups_link":"Gerenciar grupos de etiquetas","allow_global_tags_label":"Permitir também outras etiquetas","required_tag_group":{"description":"Exigir que novos tópicos tenham etiquetas de grupos de etiquetas:","delete":"Excluir","add":"Adicionar grupo de tags necessário","placeholder":"selecionar grupo de etiquetas…"},"topic_featured_link_allowed":"Permitir links em destaque nesta categoria","delete":"Excluir categoria","create":"Nova categoria","create_long":"Criar uma nova categoria","save":"Salvar categoria","slug":"Slug da categoria","slug_placeholder":"(Opcional) palavras hifenizadas para url","creation_error":"Houve um erro durante a criação da categoria.","save_error":"Houve um erro ao salvar a categoria.","name":"Nome da categoria","description":"Descrição","logo":"Imagem do logotipo da categoria","logo_dark":"Imagem do logotipo da categoria Modo Escuro","background_image":"Imagem de fundo da categoria","background_image_dark":"Imagem escura de fundo da categoria","badge_colors":"Cores do emblema","background_color":"Cor de fundo","foreground_color":"Cor de primeiro plano","name_placeholder":"máximo de uma ou duas palavras","color_placeholder":"Qualquer cor da web","delete_confirm":"Tem certeza que quer excluir esta categoria?","delete_error":"Houve um erro ao excluir a categoria.","list":"Categorias da lista","no_description":"Adicione uma descrição para esta categoria.","change_in_category_topic":"Editar descrição","already_used":"Esta cor já foi usada para outra categoria","security":"Segurança","security_add_group":"Adicionar a um grupo","permissions":{"group":"Grupo","see":"Ver","reply":"Responder","create":"Criar","no_groups_selected":"Nenhum grupo recebeu acesso, esta categoria será visível apenas para a equipe.","everyone_has_access":"Esta categoria é pública, todos(as) podem ver, responder e criar postagens. Para restringir permissões, remova uma ou mais permissões concedidas para o grupo \"todos(as)\".","toggle_reply":"Alternar permissão de resposta","toggle_full":"Alternar criação de permissão","inherited":"Esta permissão é herdada de \"todos(as)\""},"special_warning":"Atenção: esta categoria é uma categoria pré-propagada, e as configurações de segurança não podem ser editadas. Se você não quer usar esta categoria, exclua em vez de reaproveitar.","uncategorized_security_warning":"Esta categoria é especial. É destinada para tópicos que não têm categoria e não pode ter configurações de segurança.","uncategorized_general_warning":"Esta categoria é especial. Ela é usada como a categoria padrão para novos tópicos que não têm uma categoria selecionada. Se quiser evitar este comportamento e forçar a seleção da categoria, \u003ca href=\"%{settingLink}\"\u003edesative a configuração aqui\u003c/a\u003e. Se você quiser alterar o nome ou a descrição, vá para \u003ca href=\"%{customizeLink}\"\u003ePersonalização/Conteúdo de texto\u003c/a\u003e.","pending_permission_change_alert":"Você não adicionou %{group} a esta categoria. Clique neste botão para adicionar.","images":"Imagens","email_in":"Endereço de e-mail de entrada personalizado:","email_in_tooltip":"Você pode separar múltiplos endereços de e-mail com o caractere |.","email_in_allow_strangers":"Aceitar e-mails de usuários anônimos sem contas","email_in_disabled":"A postagem de novos tópicos por e-mail está desativada. Para ativar a postagem de novos tópicos por e-mail, ative a configuração \u003ca href='%{setting_url}'\u003e'email in'\u003c/a\u003e.","mailinglist_mirror":"A categoria espelha uma lista de endereçamento","show_subcategory_list":"Exibir lista de subcategorias acima dos tópicos nesta categoria.","read_only_banner":"Texto do banner quando um usuário não pode criar um tópico nesta categoria:","num_featured_topics":"Quantidade de tópicos exibidos na página de categorias:","subcategory_num_featured_topics":"Quantidade de tópicos em destaque na página da categoria pai:","all_topics_wiki":"Criar novos tópicos wikis por padrão","allow_unlimited_owner_edits_on_first_post":"Permitir edições ilimitadas na primeira postagem","subcategory_list_style":"Estilo da lista de subcategorias","sort_order":"Classificar lista de tópicos por:","default_view":"Lista de tópicos padrão:","default_top_period":"Período superior padrão:","default_list_filter":"Filtro de lista padrão:","allow_badges_label":"Permitir a concessão de emblemas nesta categoria","edit_permissions":"Editar permissões","reviewable_by_group":"Além da equipe, o conteúdo desta categoria também pode ser revisado por:","review_group_name":"nome do grupo","require_topic_approval":"Requer aprovação dos moderadores(as) de todos os novos tópicos","require_reply_approval":"Requer aprovação dos moderadores(as) de todas as novas respostas","this_year":"este ano","position":"Posição na página de categorias:","default_position":"Posição padrão","position_disabled":"As categorias serão exibidas em ordem de atividade. Para controlar a ordem das categorias nas listas, ative a configuração de \u003ca href='%{url}'\u003e\"posições de categorias fixas\"\u003c/a\u003e","minimum_required_tags":"Número mínimo de etiquetas exigidas em um tópico:","default_slow_mode":"Ative o \"Modo lento\" para obter novos tópicos nesta categoria.","parent":"Categoria principal","num_auto_bump_daily":"Número de tópicos em aberto para promover automaticamente:","auto_bump_cooldown_days":"Mínimo de dias antes de subir o mesmo tópico novamente:","navigate_to_first_post_after_read":"Navegue até a primeira postagem depois que os tópicos forem lidos","notifications":{"title":"alterar nível de notificação para esta categoria","watching":{"title":"Acompanhando","description":"Você acompanhará automaticamente todos os tópicos nesta categoria. Você será notificado(a) de todas as novas postagens em todos os tópicos. Além disso, uma contagem de novas respostas será exibida."},"watching_first_post":{"title":"Acompanhando a primeira postagem","description":"Você será notificado(a) sobre novos tópicos nesta categoria, mas não sobre respostas dos tópicos."},"tracking":{"title":"Monitorando","description":"Você vai monitorar automaticamente todos os tópicos nesta categoria. Você será notificado(a) se alguém mencionar o seu @nome ou responder para você. Além disso, uma contagem de novas respostas será exibida."},"regular":{"title":"Normal","description":"Você será notificado(a) se alguém mencionar o seu @nome ou responder às suas mensagens."},"muted":{"title":"Silenciados(as)","description":"Você nunca será notificado(a) sobre novos tópicos nesta categoria e eles não aparecerão nos mais recentes."}},"search_priority":{"label":"Prioridade de pesquisa","options":{"normal":"Normal","ignore":"Ignorar","very_low":"Muito baixa","low":"Baixa","high":"Alta","very_high":"Muito alta"}},"sort_options":{"default":"padrão","likes":"Curtidas","op_likes":"Curtidas da publicação original","views":"Visualizações","posts":"Postagens","activity":"Atividade","posters":"Autores","category":"Categoria","created":"Criado","votes":"Votos"},"sort_ascending":"Ordem crescente","sort_descending":"Ordem decrescente","subcategory_list_styles":{"rows":"Linhas","rows_with_featured_topics":"Linhas com tópicos em destaque","boxes":"Caixas de seleção","boxes_with_featured_topics":"Caixas de seleção com tópicos em destaque"},"settings_sections":{"general":"Geral","moderation":"Moderação","appearance":"Aparência","email":"E-mail","event_sorting":"Classificação de eventos"},"list_filters":{"all":"todos os tópicos","none":"nenhuma subcategoria"},"colors_disabled":"Não é possível selecionar cores porque você tem um, ou não tem nenhum, estilo de categoria.","sort_topics_by_event_start_date":"Classifique os tópicos por data de início do evento.","disable_topic_resorting":"Desativar reclassificação de tópico.","post_voting_settings_heading":"Votação de publicação","create_as_post_voting_default":"Novos tópicos padrão para tópicos de \"Votação de publicação\" nesta categoria.","only_post_voting_in_this_category":"Novos tópicos podem ser apenas tópicos de \"votação em postagem\" nesta categoria"},"flagging":{"title":"Obrigado por ajudar a tornar a nossa comunidade um ambiente saudável!","action":"Sinalizar resposta","take_action":"Tomar medida…","take_action_options":{"default":{"title":"Ocultar postagem","details":"Atinja o limite de sinalizadores imediatamente, oculte a postagem e aceite todos os sinalizadores pendentes"},"suspend":{"title":"Suspender usuário(a)","details":"Alcance o limite de sinalizadores e suspenda o(a) usuário(a)"},"silence":{"title":"Silenciar usuário(a)","details":"Alcance o limite de sinalizadores e silencie o(a) usuário(a)"}},"notify_action":"Mensagem","official_warning":"Aviso oficial","delete_spammer":"Excluir remetente de spam","flag_for_review":"Fila para revisão","yes_delete_spammer":"Sim, excluir remetente de spam","ip_address_missing":"(N/D)","hidden_email_address":"(oculto)","submit_tooltip":"Enviar um sinalizador privado","take_action_tooltip":"Atinja o limite de sinalizadores imediatamente, oculte a postagem e aceite todos os sinalizadores pendentes","cant":"Desculpe, não é possível colocar um sinalizador neste momento.","notify_staff":"Avisar a equipe de forma privada","formatted_name":{"off_topic":"É um desvio de tópico","inappropriate":"Isto não é apropriado","spam":"É spam"},"custom_placeholder_notify_user":"Seja objetivo(a), positivo(a) e sempre gentil.","notify_user_textarea_label":"Mensagem para o(a) usuário(a)","custom_placeholder_notify_moderators":"Diga-nos o motivo da sua preocupação e envie links e eventos relevantes sempre que for possível.","notify_moderators_textarea_label":"Mensagem para os(as) moderadores(as)","custom_message":{"at_least":{"one":"insira pelo menos %{count} carácter","other":"insira pelo menos %{count} caracteres"},"more":{"one":"Falta %{count}…","other":"Faltam %{count}…"},"left":{"one":"%{count} restante","other":"%{count} restantes"}}},"flagging_topic":{"title":"Obrigado por ajudar a tornar a nossa comunidade um ambiente saudável!","action":"Sinalizar tópico","notify_action":"Mensagem"},"topic_map":{"title":"Resumo do tópico","participants_title":"Autores frequentes","links_title":"Links mais acessados","links_shown":"exibir mais links…","clicks":{"one":"%{count} clique","other":"%{count} cliques"}},"post_links":{"about":"expandir mais links para esta mensagem","title":{"one":"mais %{count}","other":"mais %{count}"}},"topic_statuses":{"warning":{"help":"Este é um aviso oficial."},"bookmarked":{"help":"Você adicionou este tópico aos favoritos"},"locked":{"help":"Este tópico está fechado. Não serão aceitas respostas novas"},"archived":{"help":"Este tópico foi arquivado. Está congelado e não pode ser alterado"},"locked_and_archived":{"help":"Este tópico está fechado e foi arquivado. Não é permitido enviar respostas nem alterar."},"unpinned":{"title":"Desafixado","help":"Este tópico foi desfixado para você. Será mostrado em ordem normal"},"pinned_globally":{"title":"Fixado globalmente","help":"Este tópico está fixado globalmente. Será exibido no topo da aba dos mais recentes e da sua categoria"},"pinned":{"title":"Fixado","help":"Este tópico está fixado para você. Será exibido no topo de sua categoria"},"unlisted":{"help":"Este tópico não está listado. Não será exibido nas listas de tópicos e só poderá ser acessado por meio de um link direto"},"personal_message":{"title":"Este tópico é uma mensagem pessoal","help":"Este tópico é uma mensagem pessoal"},"chat":{"help":"O chat está ativado para este tópico"},"solved":{"help":"Este tópico tem uma solução"}},"posts":"Postagens","pending_posts":{"label":"Pendentes","label_with_count":"Pendentes (%{count})"},"latest_poster_link":"perfil de %{username}, autor(a) da postagem mais recente","original_post":"Postagem original","views":"Visualizações","sr_views":"Classificar por visualizações","views_lowercase":{"one":"visualização","other":"visualizações"},"replies":"Respostas","sr_replies":"Classificar por respostas","views_long":{"one":"este tópico foi visto %{count} vez","other":"este tópico foi visto %{number} vezes"},"activity":"Atividade","sr_activity":"Classificar por atividade","likes":"Curtidas","sr_likes":"Classificar por curtidas","sr_op_likes":"Classificar por curtidas da postagem original","likes_lowercase":{"one":"curtida","other":"curtidas"},"users":"Usuários(as)","users_lowercase":{"one":"usuário(a)","other":"usuários(as)"},"category_title":"Categoria","history_capped_revisions":"Histórico, últimas 100 revisões","history":"Histórico","raw_email":{"title":"E-mails recebidos","not_available":"Não disponível!"},"categories_list":"Lista de categorias","filters":{"with_topics":"%{filter} tópicos","with_category":"%{filter} %{category} tópicos","filter":{"title":"Filtro","button":{"label":"Filtro"}},"latest":{"title":"Recentes","title_with_count":{"one":"Recente (%{count})","other":"Recentes (%{count})"},"help":"tópicos com postagens recentes"},"read":{"title":"Lidos","help":"tópicos que você leu em ordem de leitura a partir do mais recente"},"categories":{"title":"Categorias","title_in":"Categoria - %{categoryName}","help":"todos os tópicos agrupados por categoria"},"unread":{"title":"Não lidos","title_with_count":{"one":"Não lido (%{count})","other":"Não lidos (%{count})"},"help":"tópicos que você está acompanhando ou monitorando com postagens não lidas","lower_title_with_count":{"one":"%{count} não lido","other":"%{count} não lidos"}},"unseen":{"title":"Não vistos","lower_title":"não vistos","help":"novos tópicos e tópicos que você está acompanhando ou monitorando com postagens não lidas"},"hot":{"title":"Quente","lower_title":"quente","help":"Principais tópicos recentes"},"new":{"lower_title_with_count":{"one":"%{count} nova","other":"%{count} novas"},"lower_title":"nova","title":"Novo","title_with_count":{"one":"Novo (%{count})","other":"Novos (%{count})"},"help":"tópicos criados nos últimos dias","all":"Tudo","all_with_count":"Tudo (%{count})","topics":"Tópicos","topics_with_count":"Tópicos (%{count})","replies":"Respostas","replies_with_count":"Respostas (%{count})"},"posted":{"title":"Minhas postagens","help":"tópicos nos quais você postou"},"bookmarks":{"title":"Favoritos","help":"tópicos que você adicionou aos favoritos"},"category":{"title":"%{categoryName}","title_with_count":{"one":"%{categoryName} (%{count})","other":"%{categoryName} (%{count})"},"help":"tópicos recentes na categoria %{categoryName}"},"top":{"title":"Melhores","help":"os tópicos mais ativos no último ano, mês, semana ou dia","all":{"title":"Desde o início"},"yearly":{"title":"Todo ano"},"quarterly":{"title":"Todo semestre"},"monthly":{"title":"Todo mês"},"weekly":{"title":"A cada semana"},"daily":{"title":"A cada dia"},"all_time":"Desde o início","this_year":"Ano","this_quarter":"Trimestre","this_month":"Mês","this_week":"Semana","today":"Hoje"},"unassigned":{"title":"Não atribuído","help":"Tópicos que não têm atribuição"},"docs":{"help":"navegar nos tópicos dos documentos"},"subscribe":{"help":"Apoie este site assinando"},"votes":{"title":"Votos","help":"tópicos com a maioria dos votos"},"my_votes":{"title":"Meus votos","help":"tópicos em que você votou"}},"browser_update":"Infelizmente, \u003ca href=\"https://www.discourse.org/faq/#browser\"\u003eseu navegador não é compatível\u003c/a\u003e. \u003ca href=\"https://browsehappy.com\"\u003eUse um navegador compatível\u003c/a\u003e para visualizar um conteúdo interessante, entrar com a conta e responder.","permission_types":{"full":"Criar/Responder/Ver","create_post":"Responder/Ver","readonly":"Ver"},"preloader_text":"Carregando","lightbox":{"download":"download","open":"imagem original","previous":"Anterior (seta para a esquerda)","next":"Próximo (seta para a direita)","counter":"%curr% de %total%","close":"Fechar (Esc)","content_load_error":"\u003ca href=\"%url%\"\u003eO conteúdo\u003c/a\u003e não pôde ser carregado.","image_load_error":"\u003ca href=\"%url%\"\u003eA imagem\u003c/a\u003e não pôde ser carregada."},"experimental_lightbox":{"image_load_error":"Não foi possível carregar a imagem.","screen_reader_image_title":"Imagem %{current} de %{total}: %{title}","buttons":{"next":"Próximo (seta para a direita ou para baixo)","previous":"Anterior (seta esquerda ou para cima)","close":"Fechar (Esc)","download":"Baixar imagem","newtab":"Abrir imagem em uma nova aba","zoom":"Ampliar/reduzir a imagem (tecla Z)","rotate":"Girar imagem (tecla R)","fullscreen":"Alternar para o modo de tela cheia do navegador (tecla M)","carousel":"Exibir todas as imagens em um carrossel (tecla A)","retry":"Tente carregar a imagem novamente"}},"cannot_render_video":"Este vídeo não pode ser renderizado porque o seu navegador não é compatível com o codec.","keyboard_shortcuts_help":{"shortcut_key_delimiter_comma":",","shortcut_key_delimiter_plus":"+","shortcut_delimiter_or":"%{shortcut1} ou %{shortcut2}","shortcut_delimiter_slash":"%{shortcut1}/%{shortcut2}","shortcut_delimiter_space":"%{shortcut1} %{shortcut2}","title":"Atalhos do teclado","short_title":"Atalhos","jump_to":{"title":"Pular para","home":"%{shortcut} Início","latest":"%{shortcut} Mais recentes","new":"%{shortcut} Novos","unread":"%{shortcut} Não lidos","categories":"%{shortcut} Categorias","top":"%{shortcut} Melhores","bookmarks":"%{shortcut} Favoritos","profile":"%{shortcut} Perfil","messages":"%{shortcut} Mensagens","drafts":"%{shortcut} Rascunhos","next":"%{shortcut} próximo tópico","previous":"%{shortcut} tópico anterior"},"navigation":{"title":"Navegação","jump":"%{shortcut} Ir para a postagem #","back":"%{shortcut} Voltar","up_down":"%{shortcut} Move seleção \u0026uarr; \u0026darr;","open":"%{shortcut} Abrir tópico selecionado","next_prev":"%{shortcut} Pŕoxima seção/seção anterior","go_to_unread_post":"%{shortcut} Ir para a primeira postagem não lida"},"application":{"title":"Solicitação","create":"%{shortcut} Criar um tópico novo","notifications":"%{shortcut} Abrir notificações","hamburger_menu":"%{shortcut} Abrir menu de hambúrguer","user_profile_menu":"%{shortcut} Abrir menu do usuário","show_incoming_updated_topics":"%{shortcut} Exibir tópicos atualizados","search":"%{shortcut} Procurar","help":"%{shortcut} Abrir ajuda de teclado","log_out":"%{shortcut} Sair"},"composing":{"title":"Criação","return":"%{shortcut} Retornar ao compositor","fullscreen":"%{shortcut} Compositor em tela cheia","insert_current_time":"%{shortcut} Inserir hora atual"},"bookmarks":{"title":"Favoritos","enter":"%{shortcut} Salvar e fechar","later_today":"%{shortcut} Mais tarde hoje","later_this_week":"%{shortcut} No final desta semana","tomorrow":"%{shortcut} Amanhã","next_week":"%{shortcut} Próxima semana","next_month":"%{shortcut} Próximo mês","next_business_week":"%{shortcut} Início da próxima semana","next_business_day":"%{shortcut} Próximo dia útil","custom":"%{shortcut} Data e hora personalizadas","none":"%{shortcut} Sem lembrete","delete":"%{shortcut} Excluir favorito"},"actions":{"title":"Ações","bookmark_topic":"%{shortcut} Adicionar/remover tópico dos favoritos ","pin_unpin_topic":"%{shortcut} Fixar/desafixar tópico","share_topic":"%{shortcut} Compartilhar tópico","share_post":"%{shortcut} Compartilhar postagem","reply_as_new_topic":"%{shortcut} Responder como tópico vinculado","reply_topic":"%{shortcut} Responder ao tópico","reply_post":"%{shortcut} Responder à postagem","quote_post":"%{shortcut} Citar postagem","like":"%{shortcut} Curtir a postagem","flag":"%{shortcut} Sinalizar postagem","bookmark":"%{shortcut} Adicionar postagem aos favoritos","edit":"%{shortcut} Editar postagem","delete":"%{shortcut} Excluir postagem","mark_muted":"%{shortcut} Silenciar tópico","mark_regular":"%{shortcut} Tópico normal (padrão)","mark_tracking":"%{shortcut} Monitorar tópico","mark_watching":"%{shortcut} Acompanhar tópico","print":"%{shortcut} Imprimir tópico","topic_admin_actions":"%{shortcut} Abrir ações de administração de tópico","archive_private_message":"%{shortcut} Alternar mensagem privada de arquivo"},"search_menu":{"title":"Menu de pesquisa","prev_next":"%{shortcut} Mover seleção para cima e para baixo","insert_url":"%{shortcut} Inserir seleção no compositor aberto","full_page_search":"%{shortcut} inicia pesquisa de página inteira"},"chat":{"title":"Chat","keyboard_shortcuts":{"switch_channel_arrows":"%{shortcut} Mudar de canal","open_quick_channel_selector":"%{shortcut} Abrir o seletor rápido de canais","open_insert_link_modal":"%{shortcut} Inserir hiperlink (somente compositor)","composer_bold":"%{shortcut} Negrito (somente compositor)","composer_italic":"%{shortcut} Itálico (somente compositor)","composer_code":"%{shortcut} Código (somente compositor)","drawer_open":"%{shortcut} Abrir a gaveta do chat","drawer_close":"%{shortcut} Fechar a gaveta do chat","mark_all_channels_read":"%{shortcut} Marcar todos os canais como lidos"}},"templates":{"title":"Modelos (dentro de uma área de texto)","insert_template":"%{shortcut} Inserir modelo"}},"badges":{"earned_n_times":{"one":"Emblema obtido %{count} vez","other":"Emblema obtido %{count} vezes"},"granted_on":"Concedido em %{date}","others_count":{"one":"Concedido a outros %{count} vez","other":"Concedido a outros %{count} vezes"},"title":"Emblemas","allow_title":"Você pode usar este emblema como um título","multiple_grant":"Você pode ganhar isto várias vezes","badge_count":{"one":"%{count} Emblema","other":"%{count} Emblemas"},"more_badges":{"one":"Mais %{count}","other":"Mais %{count}"},"awarded":{"one":"%{number} concedido(a)","other":"%{number} concedidos(as)"},"select_badge_for_title":"Selecione um emblema para usar como o seu título","none":"(nenhum)","successfully_granted":"%{badge} concedido com êxito para %{username}","badge_grouping":{"getting_started":{"name":"Primeiros passos"},"community":{"name":"Comunidade"},"trust_level":{"name":"Nível de confiança"},"other":{"name":"Outros(as)"},"posting":{"name":"Postando"}},"favorite_max_reached":"Não é possível adicionar mais emblemas aos favoritos.","favorite_max_not_reached":"Marcar este emblema com o favorito","favorite_count":"%{count}/%{max} emblemas marcados como favoritos"},"download_calendar":{"title":"Baixar calendário","save_ics":"Baixar arquivo .ics","save_google":"Adicionar ao Google calendar","remember":"Não perguntar novamente","remember_explanation":"(você pode alterar esta preferência nas suas preferências de usuário(a))","download":"Download","default_calendar":"Calendário padrão","default_calendar_instruction":"Determine qual calendário deve ser usado ao salvar datas","add_to_calendar":"Adicionar ao calendário","google":"Google Calendar","ics":"ICS"},"tagging":{"all_tags":"Todas as etiquetas","other_tags":"Outras etiquetas","selector_tags":"etiquetas","selector_all_tags":"todas as etiquetas","selector_no_tags":"sem etiquetas","selector_remove_filter":"remover filtro","tags":"Etiquetas","choose_for_topic":"etiquetas opcionais","choose_for_topic_required":{"one":"selecione pelo menos %{count} etiqueta…","other":"selecione pelo menos %{count} etiquetas…"},"choose_for_topic_required_group":{"one":"selecione %{count} etiqueta de \"%{name}\"…","other":"selecione %{count} etiquetas de \"%{name}\"…"},"info":"Informações","default_info":"Esta etiqueta não está restrita a nenhuma categorias e não possui sinônimos.","staff_info":"Para adicionar restrições, coloque esta etiqueta em um \u003ca href=%{basePath}/tag_groups\u003egrupo de etiquetas\u003c/a\u003e.","category_restricted":"Essa tag é restrita a categorias que você não tem permissão para acessar.","synonyms":"Sinônimos","synonyms_description":"Quando as seguintes etiquetas forem usadas, serão substituídas por \u003cb\u003e%{base_tag_name}\u003c/b\u003e.","save":"Salvar nome e descrição da etiqueta","tag_groups_info":{"one":"Esta etiqueta pertence ao grupo: %{tag_groups}.","other":"Esta etiqueta pertence aos grupos: %{tag_groups}."},"category_restrictions":{"one":"Pode ser usada apenas nesta categoria:","other":"Pode ser usada apenas nestas categorias:"},"edit_synonyms":"Editar sinônimos","add_synonyms_label":"Adicionar sinônimos:","add_synonyms":"Adicionar","add_synonyms_explanation":{"one":"Qualquer local que atualmente use essa tag será alterado para usar \u003cb\u003e%{tag_name}\u003c/b\u003e . Tem certeza de que deseja fazer essa alteração?","other":"Locais que usam estas etiquetas serão alterados para \u003cb\u003e%{tag_name}\u003c/b\u003e. Tem certeza de que deseja fazer essa alteração?"},"add_synonyms_failed":"As etiquetas a seguir não podem ser adicionadas como sinônimos: \u003cb\u003e%{tag_names}\u003c/b\u003e. Verifique se elas não têm sinônimos nem sejam sinônimos de outras etiquetas.","remove_synonym":"Remover sinônimo","delete_synonym_confirm":"Você tem certeza que deseja excluir o sinônimo \"%{tag_name}\"?","delete_tag":"Excluir etiqueta","delete_confirm":{"one":"Tem certeza de que deseja excluir esta etiqueta e removê-la de %{count} tópico para o qual ela está atribuída?","other":"Tem certeza de que deseja excluir esta etiqueta e removê-la dos %{count} tópicos aos quais ela está atribuída?"},"delete_confirm_no_topics":"Tem certeza de que deseja excluir esta etiqueta?","delete_confirm_synonyms":{"one":"Seu sinônimo também será excluído.","other":"Seus %{count} sinônimos também serão excluídos."},"edit_tag":"Edite o nome e descrição da etiqueta","description":"Descrição (máximo de 1000 caracteres)","sort_by":"Ordenar por","sort_by_count":"contagem","sort_by_name":"nome","manage_groups":"Gerenciar grupos de etiquetas","manage_groups_description":"Definir grupos para organizar etiquetas","upload":"Enviar etiquetas","upload_description":"Enviar um arquivo csv para criar etiquetas em massa","upload_instructions":"Uma por linha, opcionalmente com um grupo de etiquetas no formato \"nome_etiqueta,grupo_etiqueta\".","upload_successful":"Etiquetas enviadas com êxito","delete_unused_confirmation":{"one":"%{count} etiqueta será excluída: %{tags}","other":"%{count} etiquetas serão excluídas: %{tags}"},"delete_unused_confirmation_more_tags":{"one":"%{tags} e mais %{count}","other":"%{tags} e mais %{count}"},"delete_no_unused_tags":"Não há etiquetas não usadas.","tag_list_joiner":", ","delete_unused":"Excluir etiquetas não usadas","delete_unused_description":"Excluir todas as etiquetas que não foram anexadas a nenhum tópico ou mensagens pessoais","filters":{"without_category":"%{filter} %{tag} tópicos","with_category":"%{filter} %{tag} tópicos em %{category}","untagged_without_category":"%{filter} tópicos não etiquetados","untagged_with_category":"%{filter} tópicos não etiquetados em %{category}"},"notifications":{"watching":{"title":"Acompanhando","description":"Você acompanhará automaticamente todos os tópicos com esta etiqueta e será notificado(a) sobre todas as novas postagens e tópicos. Além disso, a contagem das postagens novas e não lidas também será exibida ao lado do tópico."},"watching_first_post":{"title":"Acompanhando a primeira postagem","description":"Você será notificado(a) sobre novos tópicos com esta etiqueta, mas não sobre as respostas dos tópicos."},"tracking":{"title":"Monitorando","description":"Você irá monitorar automaticamente todos os tópicos com esta etiqueta. Uma contagem de postagens novas e não lidas será exibida ao lado do tópico."},"regular":{"title":"Normal","description":"Você será notificado(a) se alguém mencionar o seu @nome ou responder à sua postagem."},"muted":{"title":"Silenciados(as)","description":"Você não receberá nenhuma notificação sobre novos tópicos com esta etiqueta, e eles não serão exibidos na aba de não lidos."}},"groups":{"back_btn":"Voltar para todas as etiquetas","title":"Grupos de etiquetas","about_heading":"Selecione um grupo de etiquetas ou crie uma nova","about_heading_empty":"Crie um novo grupo de etiquetas para começar","about_description":"Grupos de etiquetas ajudam a gerenciar permissões de várias etiquetas em um lugar.","new":"Novo grupo","new_title":"Criar novo grupo","edit_title":"Editar grupo de etiquetas","tags_label":"Etiquetas neste grupo","parent_tag_label":"Etiqueta pai","parent_tag_description":"As etiquetas deste grupo podem ser usadas apenas se a etiqueta pai estiver presente.","one_per_topic_label":"Limite de uma etiqueta por tópico deste grupo","new_name":"Novo grupo de etiquetas","name_placeholder":"Nome","save":"Salvar","delete":"Excluir","confirm_delete":"Tem certeza de que deseja excluir este grupo de etiquetas?","everyone_can_use":"Etiquetas podem ser usadas por todos(as)","usable_only_by_groups":"Etiquetas são visíveis para todos(as), mas somente os seguintes grupos podem usá-las","visible_only_to_groups":"As etiquetas são visíveis somente para os seguintes grupos","cannot_save":"Não é possível salvar grupo de etiquetas. Verifique se há pelo menos uma etiqueta presente, o nome do grupo de etiquetas não está vazio e um grupo foi selecionado para permissão de etiquetas.","tags_placeholder":"Pesquisar ou criar etiquetas","parent_tag_placeholder":"Opcional","select_groups_placeholder":"Selecionar grupos…","disabled":"A marcação com etiqueta está desativada. "},"topics":{"none":{"unread":"Você não tem tópicos não lidos.","unseen":"Você não tem tópicos não vistos.","new":"Você não tem tópicos novos.","read":"Você ainda não leu nenhum tópico.","posted":"Você ainda não postou em nenhum tópico.","latest":"Não há tópicos mais recentes.","bookmarks":"Você ainda não adicionou tópicos aos favoritos.","top":"Não há tópicos principais."}}},"invite":{"custom_message":"Torne o seu convite um pouco mais pessoal escrevendo uma \u003ca href\u003emensagem personalizada\u003c/a\u003e.","custom_message_placeholder":"Digite a sua mensagem personalizada","approval_not_required":"O(a) usuário(a) será aprovado(a) automaticamente assim que aceitar este convite.","custom_message_template_forum":"Ei, você tem que entrar neste fórum!","custom_message_template_topic":"Ei, acho que você vai gostar deste tópico!"},"forced_anonymous":"Devido à quantidade de acessos, o conteúdo está sendo exibido temporariamente para todos(as) como se fossem um(a) usuário(a) que não entrou com a conta.","forced_anonymous_login_required":"O site está congestionado e não pode ser carregado neste momento, tente novamente em alguns minutos.","footer_nav":{"back":"Voltar","forward":"Avançar","share":"Compartilhar","dismiss":"Descartar"},"safe_mode":{"enabled":"O modo seguro está ativado. Para sair do modo seguro, feche a janela do navegador"},"image_removed":"(imagem removida)","pause_notifications":{"title":"Pausar notificações para…","label":"Pausar notificações","options":{"half_hour":"30 minutos","one_hour":"1 hora","two_hours":"2 horas","tomorrow":"Até amanhã"},"set_schedule":"Definir agendamento de notificação"},"trust_levels":{"names":{"newuser":"usuário(a) novo(a)","basic":"usuário(a) básico(a)","member":"membro","regular":"regular","leader":"líder"},"detailed_name":"%{level}: %{name}"},"pick_files_button":{"unsupported_file_picked":"Você escolheu um arquivo incompatível. Tipos de arquivos compatíveis: %{types}."},"user_activity":{"no_activity_title":"Nenhuma atividade ainda.","no_activity_body":"Boas-vindas à nossa comunidade! É a sua primeira vez aqui, e você ainda não contribuiu para nenhuma discussão. Para começar, acesse \u003ca href='%{topUrl}'\u003eMelhores\u003c/a\u003e ou \u003ca href='%{categoriesUrl}'\u003eCategorias\u003c/a\u003e e comece a ler! Selecione %{heartIcon} nas postagens de que você curtir ou quiser saber mais a respeito. Se ainda não tiver feito isso, ajude os outros a conhecê-lo(a) ao adicionar uma imagem e biografia nas suas preferências de usuário\u003c/a\u003e.","no_replies_title":"Você ainda não respondeu a nenhum tópico.","no_replies_title_others":"%{username} ainda não respondeu a nenhum tópico","no_replies_body":"Quando você \u003ca href='%{searchUrl}'\u003edescobrir\u003c/a\u003e uma conversa interessante com a qual deseja contribuir, pressione o botão \u003ckbd\u003eResponder\u003c/kbd\u003e diretamente abaixo de qualquer postagem para começar a responder a essa postagem específica. Ou, se você preferir responder ao tópico geral em vez de qualquer postagem ou pessoa individual, procure o botão \u003ckbd\u003eResponder\u003c/kbd\u003e na parte inferior do tópico ou abaixo da linha do tempo do tópico.","no_drafts_title":"Você ainda não iniciou nenhum rascunho","no_drafts_body":"Ainda não está pronto(a) para postar? Salvaremos automaticamente um novo rascunho e o listaremos aqui sempre que você começar a escrever um tópico, resposta ou mensagem pessoal. Selecione o botão de cancelamento para descartar ou salvar seu rascunho para continuar mais tarde.","no_likes_title":"Você ainda não curtiu nenhum tópico","no_likes_title_others":"%{username} ainda não respondeu a nenhum tópico","no_likes_body":"Uma ótima maneira de participar e começar a contribuir é iniciar a leitura das conversas que já aconteceram e selecionar %{heartIcon} nas postagens de que você gostou!","no_topics_title":"Você ainda não iniciou nenhum tópico","no_topics_body":"É sempre melhor \u003ca href='%{searchUrl}'\u003epesquisar\u003c/a\u003e por tópicos de conversa existentes antes de iniciar um novo, mas, se você tiver certeza de que o tópico que deseja ainda não está disponível, vá em frente e crie um novo tópico próprio. Procure o botão \u003ckbd\u003e+ Novo Tópico\u003c/kbd\u003e no canto superior direito da lista de tópicos, categoria ou etiqueta para começar a criar um novo tópico nessa área.","no_topics_title_others":"%{username} ainda não respondeu a nenhum tópico","no_read_topics_title":"Você ainda não leu nenhum tópico","no_read_topics_body":"Quando começar a ler as discussões, uma lista será exibida aqui. Para começar a ler, procure tópicos do seu interesse em \u003ca href='%{topUrl}'\u003eMelhores\u003c/a\u003e ou \u003ca href='%{categoriesUrl}'\u003eCategorias\u003c/a\u003e, ou pesquise por palavra-chave %{searchIcon}"},"no_group_messages_title":"Nenhuma mensagem de grupo encontrada","topic_entrance":{"sr_jump_top_button":"Pular para a primeira postagem","sr_jump_bottom_button":"Pular para a última postagem"},"fullscreen_table":{"expand_btn":"Expandir tabela","view_table":"Visualizar tabela"},"second_factor_auth":{"redirect_after_success":"A autenticação de segundo fator foi bem-sucedida. Redirecionando para a página anterior…"},"sidebar":{"title":"Barra lateral","unread_count":{"one":"%{count} não lido","other":"%{count} não lidos"},"new_count":{"one":"%{count} nova","other":"%{count} novas"},"toggle_section":"Alternar seção","more":"Mais","all_categories":"Todas as categorias","all_tags":"Todas as etiquetas","categories_form_modal":{"title":"Editar navegação por categorias","subtitle":{"text":"e mostraremos automaticamente as categorias mais populares deste site"},"filter_placeholder":"Filtrar categorias","no_categories":"Não há categorias correspondentes ao termo fornecido."},"tags_form_modal":{"title":"Editar navegação por etiquetas","filter_placeholder":"Filtrar etiquetas","no_tags":"Não há etiquetas que correspondam ao termo fornecido.","subtitle":{"text":"e mostraremos automaticamente as principais etiquetas deste site"}},"edit_navigation_modal_form":{"deselect_button_text":"Cancelar todas seleções","reset_to_defaults":"Redefinir para padrão","filter_dropdown":{"all":"Tudo","selected":"Selecionado(a)","unselected":"Não selecionado"}},"sections":{"custom":{"add":"Adicionar seção personalizada","edit":"Editar seção personalizada","save":"Salvar","delete":"Excluir","delete_confirm":"Tem certeza de que deseja excluir essa seção?","reset_confirm":"Tem certeza de que deseja redefinir esta seção para o padrão?","public":"Visível para todos(as)","always_public":"O conteúdo nesta seção é sempre público","more_menu":"Menu Mais","links":{"add":"Adicionar outro link","delete":"Excluir link","reset":"Redefinir para padrão","icon":{"label":"Ícone","validation":{"blank":"O ícone não pode estar em branco"}},"name":{"label":"Nome","validation":{"blank":"O nome não pode ficar em branco"}},"value":{"label":"Link","validation":{"blank":"O link não pode ficar em branco","invalid":"O formato é inválido"}}},"title":{"label":"Título da seção","validation":{"blank":"O título não pode ficar em branco"}}},"about":{"header_link_text":"Sobre"},"messages":{"header_link_text":"Mensagens","header_action_title":"Criar uma mensagem pessoal","links":{"inbox":"Caixa de entrada","sent":"Enviadas","new":"Novo","new_with_count":"Novos(s) (%{count})","unread":"Não lidos(as)","unread_with_count":"Não lido(s) (%{count})","archive":"Arquivo"}},"tags":{"none":"Você não adicionou nenhuma etiqueta.","click_to_get_started":"Clique aqui para começar.","header_link_text":"Etiquetas","header_action_title":"Editar suas etiquetas da barra lateral","configure_defaults":"Configurar padrões"},"categories":{"none":"Você não adicionou nenhuma categoria.","click_to_get_started":"Clique aqui para começar.","header_link_text":"Categorias","header_action_title":"Editar suas categorias de barra lateral","configure_defaults":"Configurar padrões"},"community":{"edit_section":{"sidebar":"Personalize esta seção","header_dropdown":"Personalizar"},"links":{"about":{"content":"Sobre","title":"Mais detalhes sobre este site"},"admin":{"content":"Administrador(a)","title":"Configurações e relatórios do site"},"badges":{"content":"Emblemas","title":"Todos os emblemas disponíveis para ganhar"},"topics":{"content":"Tópicos","title":"Todos os tópicos"},"faq":{"content":"FAQ","title":"Diretrizes para usar este site"},"groups":{"content":"Grupos","title":"Lista de grupos de usuários disponíveis"},"users":{"content":"Usuários(as)","title":"Lista de todos os usuários"},"my_posts":{"content":"Minhas postagens","content_drafts":"Meus Rascunhos","title":"Minha atividade de tópico recente","title_drafts":"Meus rascunhos não publicados","draft_count":{"one":"%{count} rascunho","other":"%{count} rascunhos"}},"review":{"content":"Revisar","title":"Publicações sinalizadas e outros itens na fila","pending_count":{"one":"%{count} pendente","other":"%{count} pendente"}}}},"global_section":"Seção global, visível para todos"},"panels":{"forum":{"label":"Fórum"},"chat":{"label":"Chat"}},"filter":"Filtro","no_results":{"title":"Nenhum resultado"},"docs_link_title":"Explorar tópicos de documentação","docs_link_text":"Docs"},"welcome_topic_banner":{"title":"Crie seu Tópico de Boas-Vindas","description":"Seu tópico de boas-vindas é a primeira coisa que os novos membros vão ler. Pense nisso como seu “argumento de elevador” ou “declaração de missão”. Informe a todos sobre quem é o público desta comunidade, o que eles podem esperar encontrar aqui e o que você gostaria que eles fizessem primeiro.","button_title":"Começar a Editar"},"until":"Até:","char_counter":{"exceeded":"O número máximo de caracteres permitido foi excedido."},"form_template_chooser":{"select_template":"Selecione modelos de formulário"},"form_templates":{"upload_field":{"upload":"Enviar","uploading":"Enviando"},"errors":{"value_missing":{"default":"Preencha este campo.","select_one":"Selecione um item da lista.","select_multiple":"Selecione pelo menos um item da lista.","checkbox":"Marque esta caixa se quiser continuar."},"type_mismatch":{"default":"Digite um valor válido.","color":"Insira uma cor.","date":"Insira uma data.","email":"Insira um endereço de e-mail válido.","number":"Insira um número.","password":"Insira uma senha válida.","tel":"Insira um número de telefone válido.","text":"Insira um valor de texto.","url":"Insira um URL válido."},"too_short":{"one":"A entrada deve conter %{count} caractere ou mais.","other":"A entrada deve conter %{count} caracteres ou mais."},"too_long":{"one":"A entrada deve ter menos de %{count} caractere.","other":"A entrada deve ser inferior a %{count} caracteres."},"range_overflow":{"one":"A entrada deve ser menor que %{count}.","other":"A entrada deve ser menor que %{count}."},"range_underflow":{"one":"A entrada deve ser maior que %{count}.","other":"A entrada deve ser maior que %{count}."},"pattern_mismatch":"Corresponda ao formato solicitado.","bad_input":"Insira uma entrada válida."}},"table_builder":{"title":"Construtor de tabela","modal":{"title":"Construtor de tabela","create":"Construir tabela","help":{"title":"Usando editor de planilha","enter_key":"Enter","tab_key":"Tab","new_row":"no final de uma linha para inserir uma nova linha.","new_col":"no final de uma coluna para inserir uma nova coluna.","options":"Clique com o botão direito nas células para acessar mais opções no menu suspenso."},"confirm_close":"Tem certeza de que deseja fechar o construtor de tabelas? Todas as alterações não salvas serão perdidas."},"edit":{"btn_edit":"Editar tabela","modal":{"title":"Editar tabela","cancel":"cancelar","create":"Salvar","reason":"por que você está editando?","trigger_reason":"Adicione o motivo para a edição"},"default_edit_reason":"Atualizar tabela com o editor de tabelas"},"default_header":{"col_1":"Coluna 1","col_2":"Coluna 2","col_3":"Coluna 3","col_4":"Coluna 4"},"spreadsheet":{"no_records_found":"Nenhum registro encontrado","show":"Exibir","entries":"entradas","about":"Sobre","prompts":{"delete_selected_rows":"Tem certeza de que deseja excluir as linhas selecionadas?","delete_selected_cols":"Tem certeza de que deseja excluir as colunas selecionadas?","will_destroy_merged_cells":"Esta ação irá desfazer as células mescladas existentes. Tem certeza?","will_clear_search_results":"Esta ação irá desfazer as células mescladas existentes. Tem certeza?","conflicts_with_merged_cells":"Há um conflito com outra célula mesclada"},"invalid_merge_props":"Propriedades mescladas inválidas","cells_already_merged":"Células já mescladas","no_cells_selected":"Nenhuma célula selecionada","context_menu":{"row":{"before":"Inserir nova linha antes","after":"Inserir nova linha depois","delete":"Excluir linhas selecionadas"},"col":{"before":"Inserir nova coluna antes","after":"Inserir nova coluna depois","delete":"Excluir colunas selecionadas","rename":"Renomear esta coluna"},"order":{"ascending":"Ordem crescente","descending":"Ordem decrescente"},"copy":"Copiar...","paste":"Colar...","save":"Salvar como..."}}},"discourse_automation":{"title":"Automação","create":"Criar","update":"Atualizar","select_script":"Selecione um script","select_trigger":"Selecione um acionador","confirm_automation_reset":"Esta ação redefinirá as opções de script e de acionamento, o novo estado será salvo, deseja continuar?","confirm_automation_trigger":"Esta ação acionará a automação, deseja continuar?","no_automation_yet":"Você ainda não criou nenhuma automação.","edit_automation":{"trigger_section":{"forced":"Este acionador é forçado por script.","next_pending_automation":"A próxima automação será acionada em: %{date}","trigger_now":"Acionar agora","title":"Quando/O quê..."},"fields_section":{"title":"Opções de script"}},"destroy_automation":{"confirm":"Tem certeza de que deseja excluir `%{name}`?"},"fields":{"key_value":{"label_without_count":"Configurar","label_with_count":{"one":"Editar configurações (%{count})","other":"Editar configurações (%{count})"}},"user":{"label":"Usuário(a)"},"pm":{"title":{"label":"Título"},"raw":{"label":"Corpo"}},"pms":{"confirm_remove_pm":"Tem certeza de que deseja excluir esta PM?","placeholder_title":"Título da PM","add_pm":"Adicionar PM","no_pm_created":"Você ainda não criou nenhuma MP. PMs serão enviadas assim que sua automação for acionada.","title":{"label":"Título"},"raw":{"label":"Corpo"},"delay":{"label":"Atraso (minutos)"},"prefers_encrypt":{"label":"Criptografa PM, se disponível"}},"group":{"label":"Grupo"},"text":{"label":"Texto"}},"triggerables":{"not_found":"Não foi possível encontrar o acionador `%{trigger}` para automação `%{automation}`, verifique se o plugin associado está instalado","user_badge_granted":{"fields":{"badge":{"label":"Emblema"},"only_first_grant":{"label":"Somente na primeira concessão"}}},"stalled_topic":{"durations":{"PT1H":"Uma hora","P1D":"Um dia","P1W":"Uma semana","P2W":"Duas semanas","P1M":"Um mês","P3M":"Três meses","P6M":"Seis meses","P1Y":"Um ano"},"fields":{"categories":{"label":"Limitado a categorias"},"tags":{"label":"Limitado a tags"},"stalled_after":{"label":"Parado depois"}}},"recurring":{"every":"Cada","frequencies":{"minute":"minuto","hour":"hora","day":"dia","weekday":"dia da semana","week":"semana","month":"mês","year":"ano"},"fields":{"recurrence":{"label":"Recorrência"},"start_date":{"label":"Data de início"}}},"stalled_wiki":{"durations":{"PT1H":"Uma hora","P1D":"Um dia","P1W":"Uma semana","P2W":"Duas semanas","P1M":"Um mês","P3M":"Três meses","P6M":"Seis meses","P1Y":"Um ano"},"fields":{"restricted_category":{"label":"Restrito(a) à categoria"},"stalled_after":{"label":"Atraso do acionador","description":"Define o atraso entre a última edição do wiki e o acionador da automação"},"retriggered_after":{"label":"Atraso do reacionador","description":"Define o atraso entre o primeiro acionador e o próximo acionador, se o wiki ainda não foi editado após o primeiro acionador"}}},"user_added_to_group":{"fields":{"joined_group":{"label":"Grupo rastreado"}}},"user_removed_from_group":{"fields":{"left_group":{"label":"Grupo rastreado"}}},"user_promoted":{"fields":{"restricted_group":{"label":"Restringir ao grupo"},"trust_level_transition":{"label":"Transição do nível de confiança"}},"trust_levels":{"ALL":"Todos os níveis de confiança","TL01":"TL0 a TL1","TL12":"TL1 a TL2","TL23":"TL2 a TL3","TL34":"TL3 a TL4"}},"point_in_time":{"fields":{"execute_at":{"label":"Executar em"}}},"topic":{"fields":{"restricted_topic":{"label":"ID do tópico"}}},"post_created_edited":{"fields":{"action_type":{"label":"Tipo de ação","description":"Opcional, acionamento de limite apenas para eventos criados ou editados"},"valid_trust_levels":{"label":"Níveis de confiança válidos","description":"Será acionado apenas se a postagem for criada pelo(a) usuário(a) nesses níveis de confiança, o padrão é qualquer nível de confiança"},"restricted_category":{"label":"Categoria","description":"Opcional, ativa apenas se o tópico da postagem estiver nesta categoria"},"restricted_group":{"label":"Grupo","description":"Opcional, será ativado apenas se o tópico da postagem for uma mensagem privada na caixa de mensagens deste grupo"},"ignore_group_members":{"label":"Ignorar membros de grupo","description":"Ignorar o gatilho se o remetente for um mebro do Grupo especificado acima"},"ignore_automated":{"label":"Ignorar automatizado","description":"Ignore o gatilho se o remetente tiver um e-mail sem resposta ou for de uma fonte automatizada. Aplica-se apenas a postagens criadas por e-mail."},"first_post_only":{"label":"Apenas primeira postagem","description":"Ativa apenas se a postagem for a primeira postagem criada pelo(a) usuário(a)"},"first_topic_only":{"label":"Apenas primeiro tópico","description":"Ativa apenas se o tópico for o primeiro tópico criado pelo(a) usuário(a)"}},"created":"Criado(a)","edited":"Editado(a)"},"category_created_edited":{"fields":{"restricted_category":{"label":"Categoria principal","description":"Opcional, permite limitar a execução do acionador a esta categoria"}}},"pm_created":{"fields":{"restricted_user":{"label":"Usuários(as)","description":"Ativa apenas para MPs enviadas a este(a) usuário(a)"},"restricted_group":{"label":"Grupo","description":"Ativa apenas para MPs enviadas a este grupo"},"ignore_staff":{"label":"Ignorar equipe","description":"Ignore o acionador se o remetente for um usuário da equipe"},"ignore_group_members":{"label":"Ignorar membros de grupo","description":"Ignorar o gatilho se o remetente for um mebro do Grupo especificado acima"},"ignore_automated":{"label":"Ignorar automatizado","description":"Ignore o gatilho se o remetente tiver um e-mail sem resposta ou for de uma fonte automatizada. Aplica-se apenas a MPs criadas por e-mail."},"valid_trust_levels":{"label":"Níveis de confiança válidos","description":"Será acionado apenas se a postagem for criada pelo(a) usuário(a) nesses níveis de confiança, o padrão é qualquer nível de confiança"}}},"after_post_cook":{"fields":{"valid_trust_levels":{"label":"Níveis de confiança válidos","description":"Será acionado apenas se a postagem for criada pelo(a) usuário(a) nesses níveis de confiança, o padrão é qualquer nível de confiança"},"restricted_category":{"label":"Categoria","description":"Opcional, ativa apenas se o tópico da postagem estiver nesta categoria"},"restricted_tags":{"label":"Etiquetas","description":"Opcional, ativa apenas se a postagem tiver alguma destas etiquetas"}}},"event_started":{"title":"Evento iniciado","fields":{"topic_id":{"label":"ID do tópico"}}},"first_accepted_solution":{"max_trust_level":{"tl1":"\u003c TL1","tl2":"\u003c TL2","tl3":"\u003c TL3","tl4":"\u003c TL4","any":"Qualquer"},"fields":{"maximum_trust_level":{"label":"Nível de confiança","description":"Os(as) usuários(as) com este nível de confiança ativarão esta automação"}}}},"scriptables":{"not_found":"Não foi possível encontrar o script `%{script}` para automação `%{automation}`, verifique se o plugin associado está instalado","zapier_webhook":{"fields":{"webhook_url":{"label":"URL do webhook","description":"Espera uma URL de webhook válido do Zapier, por exemplo: https://hooks.zapier.com/hooks/catch/xxx/yyy/"}}},"auto_responder":{"fields":{"once":{"label":"Uma vez","description":"Responde apenas uma vez por tópico"},"word_answer_list":{"label":"Lista de pares palavra/resposta"},"answering_user":{"label":"Respondendo ao usuário","description":"Padrões para o usuário do Sistema"}}},"auto_tag_topic":{"fields":{"tags":{"label":"Etiquetas","description":"Lista de tags para adicionar ao tópico."}}},"post":{"fields":{"creator":{"label":"Criador"},"topic":{"label":"ID do tópico"},"post":{"label":"Publicar conteúdo"}}},"group_category_notification_default":{"fields":{"group":{"label":"Grupo"},"notification_level":{"label":"Nível de notificação"},"update_existing_members":{"label":"Atualizar membros existentes","description":"Atualiza o nível de notificação para membros de grupos existentes"}}},"user_global_notice":{"fields":{"level":{"label":"Nível"},"notice":{"label":"Aviso","description":"Aceita HTML, não preencha isso com entrada não confiável!"}},"levels":{"warning":"Atenção","info":"Informações","success":"Sucesso","error":"Erro"}},"user_group_membership_through_badge":{"fields":{"badge_name":{"label":"Nome do emblema"},"group":{"label":"Grupo","description":"Grupo de destino. Os(as) usuários(as) com o emblema especificado serão adicionados(as) a este grupo"},"update_user_title_and_flair":{"label":"Atualizar estilo e título do(a) usuário(a)","description":"Opcional, atualizar estilo e título do(a) usuário(a)"},"remove_members_without_badge":{"label":"Remover membros existentes sem emblema","description":"Opcional, remover membros do grupo existentes sem o emblema especificado"},"badge":{"label":"Emblema","description":"Selecionar emblema"}}},"suspend_user_by_email":{"fields":{"suspend_until":{"label":"Suspender até (padrão)"},"reason":{"label":"Motivo (padrão)"},"actor":{"label":"Usuário(a)","description":"O usuário responsável pela suspensão (padrão: sistema)"}}},"pin_topic":{"fields":{"pinnable_topic":{"label":"ID do tópico"},"pinned_globally":{"label":"Fixado globalmente"},"pinned_until":{"label":"Fixado até"}}},"banner_topic":{"fields":{"topic_id":{"label":"ID do tópico"},"banner_until":{"label":"Criar banner até"},"user":{"label":"Usuário(a)","description":"O usuário que cria o banner (padrão: sistema)"}}},"flag_post_on_words":{"fields":{"words":{"label":"Palavras verificadas"}}},"topic_required_words":{"fields":{"words":{"label":"Lista de palavras obrigatórias"}}},"gift_exchange":{"fields":{"gift_exchangers_group":{"label":"Nome do grupo de participantes"},"giftee_assignment_messages":{"label":"Mensagens enviadas ao presenteador"}}},"send_pms":{"add_a_pm_btn":{"label":"Adicionar uma PM"},"fields":{"receiver":{"label":"Receptor da PM"},"sendable_pms":{"label":"PMs"},"sender":{"label":"Remetente de PMs"}}},"close_topic":{"fields":{"topic":{"label":"ID do tópico"},"message":{"label":"Mensagem de encerramento","description":"Mensagem opcional para ser exibida no registro Tópico Fechado"},"user":{"label":"Usuário(a)","description":"O usuário que fecha o tópico (padrão: sistema)"}}},"add_user_to_group_through_custom_field":{"fields":{"custom_field_name":{"label":"Nome do campo personalizado do usuário"}}},"send_chat_message":{"title":"Enviar mensagem de chat","fields":{"chat_channel_id":{"label":"ID do canal de chat"},"message":{"label":"Mensagem"},"sender":{"label":"Remetente","description":"Padrões do sistema"}}},"llm_report":{"fields":{"sender":{"label":"Remetente","description":"O(a) usuário(a) enviará o relatório"},"receivers":{"label":"Destinatários(as)","description":"Os(as) usuários(as) que receberão o relatório (os e-mails serão enviados diretamente por e-mail, e os nomes de usuário(a) por MP)"},"topic_id":{"label":"ID do tópico","description":"O id do tópico no qual postar o relatório"},"title":{"label":"Título","description":"O título do relatório"},"days":{"label":"Dias","description":"O tempo de duração do relatório"},"offset":{"label":"Deslocamento","description":"Durante o teste, você pode querer executar o relatório com base no histórico, use o deslocamento para iniciar o relatório numa data anterior"},"instructions":{"label":"Instruções","description":"As instruções fonrecidas ao modelo de linguagem grande"},"sample_size":{"label":"Tamanho da amostra","description":"A quantidade de postagens para fazer amostragem para o relatório"},"tokens_per_post":{"label":"Tokens por postagem","description":"A quantidade de tokens de llm para usar por postagem"},"model":{"label":"Modelo","description":"O LLM para usar na geração de relatórios"},"categories":{"label":"Categorias","description":"Filtrar tópicos apenas para estas categorias"},"tags":{"label":"Etiquetas","description":"Filtrar tópicos apenas para estas etiquetas"},"allow_secure_categories":{"label":"Permitir categorias seguras","description":"Permitir que o relatório seja gerado para tópicos em categorias seguras"},"debug_mode":{"label":"Modo de depuração","description":"Ativar o modo de depuração para ver as entradas e saídas não processadas do LLM"},"priority_group":{"label":"Grupo de prioridade","description":"Priorizar o conteúdo deste grupo no relatório"}}},"llm_triage":{"fields":{"system_prompt":{"label":"Prompt do sistema","description":"O prompt que será usado para triagem, verifique se responderá com uma única palavra que pode ser usada para acionar a ação"},"search_for_text":{"label":"Pesquisar texto","description":"Se o texto a seguir aparecer na resposta do LLM, aplicar estas ações"},"category":{"label":"Categoria","description":"Categoria para aplicar no tópico"},"tags":{"label":"Etiquetas","description":"Etiquetas para aplicar no tópico"},"canned_reply":{"label":"Responder","description":"Texto não processado de resposta pré-preparado para postar no tópico"},"canned_reply_user":{"label":"Usuário(a) de resposta","description":"O nome de usuário(a) para postar a resposta pré-preparada"},"hide_topic":{"label":"Ocultar tópico","description":"Ocultar visibilidade do tópico para o público se for ativado"},"model":{"label":"Modelo","description":"Gpt-4, gpt-3-5-turbo ou claude-2"}}},"random_assign":{"fields":{"post_template":{"label":"Modelo de postagem","description":"Se preenchida, uma postagem com este modelo será criada e um usuário será atribuído a ela em vez do tópico."},"assignees_group":{"label":"Grupo de destinatários"},"minimum_time_between_assignments":{"label":"Horas mínimas entre atribuições"},"min_recently_assigned_days":{"label":"Dias mínimos atribuídos recentemente","description":"O padrão é de 14 dias."},"skip_new_users_for_days":{"label":"Ignorar novos usuários por dias","description":"O padrão é 0 dias (os usuários podem ser atribuídos imediatamente após a inscrição)."},"max_recently_assigned_days":{"label":"Dias máximos atribuídos recentemente","description":"Primeira tentativa de excluir usuários(as) atribuídos(as) nos últimos \"n\" dias. Se não restar usuários(as), é revertido para \"min_recently_assigned_days\". O padrão é de 180 dias."},"assigned_topic":{"label":"ID de tópico atribuído"},"in_working_hours":{"label":"Usuários(as) em horário de trabalho"}}},"send_slack_message":{"title":"Enviar uma mensagem do Slack","fields":{"message":{"label":"Mensagem"},"url":{"label":"URL"},"channel":{"label":"Canal"}}},"recurring_data_explorer_result_pm":{"fields":{"recipients":{"label":"Enviar ao(à) usuário(a), grupo ou e-mail"},"query_id":{"label":"Consulta do explorador de dados"},"query_params":{"label":"Parâmetros da consulta do explorador de dados"}}}},"models":{"script":{"name":{"label":"Script"}},"trigger":{"name":{"label":"Gatilho"}},"automation":{"name":{"label":"Nome"},"trigger":{"label":"Gatilho"},"script":{"label":"Script"},"version":{"label":"Versão"},"enabled":{"label":"Ativada"},"disabled":{"label":"Desativada"},"placeholders":{"label":"Espaços reservados"},"last_updated_at":{"label":"Última atualização"},"last_updated_by":{"label":"Atualizado por"}}},"ai_models":{"gpt_4_turbo":"GPT 4 Turbo","gpt_4":"GPT 4","gpt_3_5_turbo":"GPT 3.5 Turbo","claude_2":"Claude 2","gemini_pro":"Gemini Pro"}},"admin":{"site_settings":{"chat_separate_sidebar_mode":{"always":"Sempre","fullscreen":"Quando o chat estiver em tela cheia","never":"Nunca"}},"logs":{"staff_actions":{"actions":{"chat_channel_status_change":"Status do canal de chat alterado","chat_channel_delete":"Canal de chat excluído","chat_auto_remove_membership":"Assinaturas removidas automaticamente dos canais","confirmed_ham":"Não é spam","confirmed_spam":"Confirmar spam","confirmed_spam_deleted":"Confirmar spam e excluir usuário(a)","ignored":"Ignorar spam"}}},"api":{"scopes":{"descriptions":{"chat":{"create_message":"Crie uma mensagem de chat em um canal especificado."},"discourse_data_explorer":{"run_queries":"Execute consultas do Explorador de Dados. Restrinja a chave de API a um conjunto de consultas ao especificar suas IDs."},"solved":{"answer":"Aceitar/não aceitar uma solução."}}}},"web_hooks":{"chat_event":{"group_name":"Eventos de chat","chat_message_created":"Mensagem criada","chat_message_edited":"Mensagem editada","chat_message_trashed":"Mensagem descartada","chat_message_restored":"Mensagem restaurada"},"assign_event":{"group_name":"Eventos de atribuição","assigned":"Quando um(a) usuário(a) atribuir um tópico","unassigned":"Quando um(a) usuário(a) cancelar a atribuição de um tópico"},"solved_event":{"group_name":"Evento solucionado","accepted_solution":"Quando um(a) usuário(a) marca uma postagem como resposta aceita","unaccepted_solution":"Quando um(a) usuário(a) marca uma postagem como resposta não aceita"},"voting_event":{"group_name":"Evento de votação no tópico","topic_upvote":"Quando um(a) usuário(a) votar em um tópico","topic_unvote":"Quando um(a) usuário(a) cancelar o voto em um tópico"}},"akismet_api_error":"Erro da API Akismet:"},"chat":{"text_copied":"Texto copiado para área de transferência","link_copied":"Link copiado para área de transferência","back_to_forum":"Fórum","deleted_chat_username":"excluído(a)","dates":{"yesterday":"Ontem","time_tiny":"h:mm"},"all_loaded":"Mostrando todas as mensagens","already_enabled":"O chat já foi ativado neste tópico. Atualize.","disabled_for_topic":"O chat está desativado neste tópico.","bot":"robô","create":"Criar","cancel":"Cancelar","cancel_reply":"Cancelar resposta","chat_channels":"Canais","browse_all_channels":"Navegar por todos os canais","move_to_channel":{"title":"Mover mensagens para o canal","instructions":{"one":"Você está movendo \u003cstrong\u003e%{count}\u003c/strong\u003e mensagem. Selecione o canal de destino. Uma mensagem de espaço reservado será criada no canal \u003cstrong\u003e%{channelTitle}\u003c/strong\u003e para indicar que esta mensagem foi movida. Note que as respostas não serão movidas junto para o novo canal, e mensagens no antigo canal não serão mais exibidas como respostas às mensagens movidas.","other":"Você está movendo \u003cstrong\u003e%{count}\u003c/strong\u003e mensagens. Selecione o canal de destino. Uma mensagem de espaço reservado será criada no canal \u003cstrong\u003e%{channelTitle}\u003c/strong\u003e para indicar que estas mensagens foram movidas. Note que as respostas não serão movidas junto para o novo canal, e mensagens no antigo canal não serão mais exibidas como respostas às mensagens movidas."},"confirm_move":"Mover mensagens"},"channel_settings":{"title":"Configurações do canal","edit":"Editar","add":"Adicionar","close_channel":"Fechar canal","open_channel":"Abrir canal","archive_channel":"Arquivar canal","delete_channel":"Excluir canal","join_channel":"Entrar no canal","leave_channel":"Sair do canal","leave_groupchat_info":"Ao sair do chat em grupo, você não terá mais acesso a ele nem receberá as notificações relacionadas. Para entrar novamente, você precisa ser convidado(a) novamente por um membro do chat em grupo.","join":"Participar","leave":"Sair","save_label":{"mute_channel":"Preferência de canal silenciado salva","desktop_notification":"Preferência de notificação de desktop salva","mobile_notification":"Preferência de notificação por push móvel"}},"channel_archive":{"title":"Arquivar canal","instructions":"\u003cp\u003eO arquivamento de um canal coloca em modo somente leitura e move todas as mensagens do canal para um tópico novo ou existente. Nenhuma mensagem nova pode ser enviada e nenhuma mensagem existente pode ser editada ou excluída.\u003c/p\u003e\u003cp\u003eTem certeza de que deseja arquivar o canal \u003cstrong\u003e%{channelTitle}\u003c/strong\u003e?\u003c/p\u003e","process_started":"O processo de arquivamento foi iniciado. Este modal será encerrado em breve e você receberá uma mensagem pessoal quando o processo de arquivamento for concluído.","retry":"Tentar novamente"},"channel_open":{"title":"Abrir canal","instructions":"Reabre o canal, todos(as) os(as) usuários(as) poderão enviar mensagens e editar suas mensagens existentes."},"channel_close":{"title":"Fechar canal","instructions":"Fechar o canal impede que usuários(as) não funcionários(as) enviem novas mensagens ou editem mensagens existentes. Tem certeza de que deseja fechar este canal?"},"channel_delete":{"title":"Excluir canal","instructions":"\u003cp\u003eExclui o canal e histórico de chat de \u003cstrong\u003e%{name}\u003c/strong\u003e . Todas as mensagens e dados relacionados, como as reações e uploads, serão permanentemente excluídos. Se você deseja preservar o histórico do canal e apenas desativá-lo, talvez seja melhor arquivá-lo\u003c/p\u003e\u003cp\u003eTem certeza que quer \u003cstrong\u003eexcluir permanentemente\u003c/strong\u003e o canal? Para confirmar, escreva o nome do canal no campo abaixo.\u003c/p\u003e","confirm":"Eu entendo as consequências, exclua o canal","confirm_channel_name":"Digite o nome do canal","process_started":"O processo para excluir o canal foi iniciado. Este modal será fechado em breve, você não verá mais o canal excluído em lugar algum."},"channels_list_popup":{"browse":"Navegar por canais","create":"Novo canal"},"click_to_join":"Clique aqui para visualizar os canais disponíveis.","close":"Fechar","remove":"Remover","collapse":"Recolher gaveta de chat","expand":"Expandir Chat","confirm_flag":"Tem certeza de que deseja sinalizar a mensagem de %{username}?","deleted":{"one":"Uma mensagem foi excluída. [view]","other":"%{count} mensagens foram excluídas. [ver todas]"},"hidden":"Uma mensagem foi ocultada. [visualizar]","delete":"Excluir","edited":"editou","muted":"silenciado(a)","joined":"entrou","empty_state":{"direct_message_cta":"Inicie um chat pessoal","direct_message":"Você também pode iniciar um chat pessoal com um(as) ou mais usuários(as).","title":"Nenhum canal encontrado","my_threads":"Você ainda não tem nenhum tópico. Tópicos em que você participa serão exibidos aqui."},"email_frequency":{"description":"Só enviaremos um e-mail mediante ausência nos últimos 15 minutos.","never":"Nunca","title":"Notificações por e-mail","when_away":"Só quando estiver ausente"},"header_indicator_preference":{"title":"Mostrar indicador de atividade no cabeçalho","all_new":"Todas as Novas Mensagens","dm_and_mentions":"Mensagens Diretas e Menções","only_mentions":"Apenas menções","never":"Nunca"},"separate_sidebar_mode":{"title":"Mostrar modos de barra lateral separados para o fórum e o chat"},"enable":"Ativar chat","flag":"Sinalizar","emoji":"Inserir emoji","flagged":"Esta mensagem foi sinalizada para revisão","invalid_access":"Você não tem acesso para ver este canal de chat","invitation_notification":"\u003cspan\u003e%{username}\u003c/span\u003e \u003cspan\u003e convidou você para entrar em um canal de chat\u003c/span\u003e","in_reply_to":"Em resposta a","heading":"Chat","join":"Participar","last_visit":"último acesso","summarization":{"title":"Resumir mensagens","description":"Selecione uma opção abaixo para resumir a conversa enviada durante o período desejado.","summarize":"Resumir","since":{"one":"Última hora","other":"Últimas %{count} horas"}},"mention_warning":{"invitations_sent":{"one":"Convite enviado","other":"Convites enviados"},"invite":"convidar para canal","channel_wide_mentions_disallowed":"As menções @here e @all foram desabilitadas neste canal.","groups":{"header":{"some":"Alguns usuários não serão notificados","all":"Ninguém será notificado"},"unreachable_1":"@%{group} não permite menções.","unreachable_2":"@%{group1} e @%{group2} não permitem menções","unreachable_multiple":{"one":"@%{group} e %{count} outro grupo não permitem menções","other":"@%{group} e %{count} outros grupos não permitem menções"}},"too_many_mentions":{"one":"Esta mensagem excete o limite de notificações de %{count} menção.","other":"Esta mensagem excede o limite de notificações de %{count} menções."},"too_many_mentions_admin":{"one":"Esta mensagem excede o \u003ca href=\"%{siteSettingUrl}\" target=\"_blank\"\u003elimite de notificações\u003c/a\u003e de %{count} menção.","other":"Esta mensagem excede o \u003ca href=\"%{siteSettingUrl}\" target=\"_blank\"\u003elimite de notificações\u003c/a\u003e de %{count} menções."}},"aria_roles":{"header":"Cabeçalho do chat","composer":"Compositor de chat","channels_list":"Lista de canais de chat"},"no_direct_message_channels":"Você não entrou em nenhum canal de mensagem direta.","no_public_channels":"Você não entrou em nenhum canal.","kicked_from_channel":"Você não pode mais acessar este canal.","only_chat_push_notifications":{"title":"Enviar apenas notificações por push","description":"Bloquear envio de todas as notificações por push não relacionadas a chat"},"ignore_channel_wide_mention":{"title":"Ignorar menções em todo o canal","description":"Não envie notificações para menções em todo o canal (@aqui e @todos)"},"open":"Abrir chat","open_full_page":"Abrir chat em tela cheia","close_full_page":"Fechar chat em tela cheia","open_message":"Abrir mensagem no chat","placeholder_self":"Anotar algo","placeholder_channel":"Converse em %{channelName}","placeholder_thread":"Conversar na linha de discussão","placeholder_users":"Conversar com %{commaSeparatedNames}","placeholder_new_message_disallowed":{"archived":"Canal arquivado, não é possível enviar novas mensagens no momento.","closed":"Canal fechado, não é possível enviar novas mensagens no momento.","read_only":"Canal somente para leitura, não é possível enviar novas mensagens no momento."},"placeholder_silenced":"Você não pode enviar mensagens neste momento.","remove_upload":"Remover arquivo","react":"Reagir com emoji","reply":"Responder","edit":"Editar","copy_link":"Copiar link","copy_text":"Copiar texto","rebake_message":"Reconstruir HTML","retry_staged_message":{"title":"Erro de rede","action":"Enviar novamente?"},"unreliable_network":"A rede não é confiável, enviar mensagens e salvar rascunho pode não funcionar","bookmark_message":"Marcador","bookmark_message_edit":"Editar marcador","restore":"Restaurar mensagem excluída","save":"Salvar","select":"Selecionar","return_to_list":"Retornar para lista de canais","return_to_channel":"Voltar para o canal","return_to_threads_list":"Voltar para a lista de linhas de discussão","unread_threads_count":{"one":"Você tem %{count} linha de discussão não lida","other":"Você tem %{count} linhas de discussão não lidas"},"scroll_to_bottom":"Rolar para a parte inferior","scroll_to_new_messages":"Ver novas mensagens","sound":{"title":"Som de notificação do chat no desktop"},"sounds":{"none":"Nenhum","bell":"Sino","ding":"Ding"},"title":"chat","title_capitalized":"Chat","upload":"Anexar arquivo","upload_to_channel":"Enviar para %{title}","upload_to_thread":"Enviar para linha de discussão","uploaded_files":{"one":"%{count} arquivo","other":"%{count} arquivos"},"you_flagged":"Você sinalizou esta mensagem","exit":"voltar","channel_status":{"read_only_header":"O canal é somente para leitura","read_only":"Somente leitura","archived_header":"O canal está arquivado","archived":"Arquivados","archive_failed":"Falha no canal de arquivamento. %{completed}/%{total} mensagens foram arquivadas. \u003ca target=\"_blank\" href=\"%{topic_url}\"\u003eO tópico de destino\u003c/a\u003e foi criado. Pressione repetir para tentar concluir o arquivo.","archive_failed_no_topic":"Falha no canal de arquivamento. %{completed}/%{total} mensagens foram arquivadas. O tópico de destino não foi criado. Pressione repetir para tentar concluir o arquivo.","archive_completed":"Veja \u003ca target=\"_blank\" href=\"%{topic_url}\"\u003eo tópico de arquivo\u003c/a\u003e","closed_header":"Canal fechado","closed":"Fechados","open_header":"Canal aberto","open":"Aberto"},"browse":{"back":"Voltar","title":"Canais","filter_all":"Tudo","filter_open":"Aberto","filter_closed":"Fechados","filter_archived":"Arquivados","filter_input_placeholder":"Pesquisar canal por nome"},"chat_message_separator":{"today":"Hoje","yesterday":"Ontem"},"members_view":{"filter_placeholder":"Encontrar membros","add_member":"Adicionar membro","back_to_settings":"Voltar para as configurações"},"about_view":{"associated_topic":"Tópico vinculado","associated_category":"Categoria vinculada","title":"Título","name":"Nome","description":"Descrição"},"channel_info":{"back_to_all_channels":"Todos os canais","back_to_channel":"Voltar","tabs":{"members":"Membros","settings":"Configurações"}},"new_message_modal":{"title":"Enviar mensagem","add_user_long":"\u003ckbd\u003eshift + clique\u003c/kbd\u003e ou \u003ckbd\u003eshift + enter\u003c/kbd\u003e\u003cspan\u003eAdicionar @%{username}\u003c/span\u003e","add_user_short":"\u003cspan\u003eAdicionar usuário(a)\u003c/span\u003e","open_channel":"\u003cspan\u003eAbrir canal\u003c/span\u003e","default_search_placeholder":"#a-channel, @alguém ou alguma coisa","default_channel_search_placeholder":"#a-channel","default_user_search_placeholder":"@alguém","user_search_placeholder":"... incluir mais membros","disabled_user":"desativou o chat","no_items":"Nenhum item","create_group_placeholder":"Nome do chat em grupo (opcional)","participants_counter":"%{selection_count}/%{max} participantes","new_group_chat":"Novo chat em grupo","filter":"Filtro","cant_add_more_members":"Número máximo de membros alcançado","create_new_group_chat":"Criar chat em grupo","group_with_too_many_members":"tem membros demais (%{membersCount})"},"channel_edit_name_slug_modal":{"title":"Editar canal","input_placeholder":"Adicionar um nome","slug_description":"Um slug de canal é usado na URL em vez do nome do canal","name":"Nome do canal","slug":"Slug do canal (opcional)"},"channel_edit_description_modal":{"title":"Editar descrição","input_placeholder":"Adicione uma descrição","description":"Diga às pessoas do que se trata este canal"},"direct_message_creator":{"add_to_channel":"Adicionar ao canal","title":"Novas mensagens","prefix":"Para:","no_results":"Nenhum resultado","selected_user_title":"Desmarcar %{username}","group_name":"Nome do chat em grupo (opcional)","members_counter":{"one":"%{count}/%{max} membro","other":"%{count}/%{max} membros"}},"channel":{"no_memberships":"Este canal não tem membros","no_memberships_found":"Nenhum membro encontrado","memberships_count":{"one":"%{count} membro","other":"%{count} membros"}},"create_channel":{"threading":{"label":"Ativar linha de discussão"},"auto_join_users":{"public_category_warning":"%{category} é uma categoria pública. Deseja adicionar automaticamente todos os(as) usuários(as) recentemente ativos(as) a este canal?","warning_1_group":{"one":"Adicionar automaticamente %{count} usuário(a) de %{group}?","other":"Adicionar automaticamente %{count} usuários(as) de %{group}?"},"warning_2_groups":{"one":"Adicionar automaticamente %{count} usuário(a) de %{group1} e %{group2}?","other":"Adicionar automaticamente %{count} usuários(as) de %{group1} e %{group2}?"}},"choose_category":{"label":"Escolha uma categoria","none":"selecionar um...","default_hint":"Gerencie o acesso ao acessar as \u003ca href=%{link} target=\"_blank\"\u003e%{category} configurações de segurança\u003c/a\u003e","hint_1_group":"Os(as) usuários(as) em %{group} terão acesso a este canal de acordo com as \u003ca href=%{settingLink} target=\"_blank\"\u003econfigurações de segurança\u003c/a\u003e","hint_2_groups":"Os(as) usuários(as) em %{group1} e %{group2} terão acesso a este canal de acordo com as \u003ca href=%{settingLink} target=\"_blank\"\u003econfigurações de segurança\u003c/a\u003e","hint_multiple_groups":{"one":"Os(as) usuários(as) em %{group} e %{count} outro grupo terão acesso a este canal de acordo com as \u003ca href=\"%{settingLink}\" target=\"_blank\"\u003econfigurações de segurança\u003c/a\u003e","other":"Os(as) usuários(as) em %{group} e %{count} outros grupos terão acesso a este canal de acordo com as \u003ca href=\"%{settingLink}\" target=\"_blank\"\u003econfigurações de segurança\u003c/a\u003e"}},"create":"Criar canal","description":"Descrição (opcional)","name":"Nome do canal","slug":"Slug do canal (opcional)","title":"Novo canal","type":"Tipo","types":{"category":"Categoria","topic":"Tópico"}},"reviewable":{"type":"Mensagem de chat"},"reactions":{"only_you":"\u003cspan\u003eVocê reagiu com \u003c/span\u003e:%{emoji}:","you_and_single_user":"\u003cspan\u003eVocê e %{username} reagiram com \u003c/span\u003e:%{emoji}:","you_and_multiple_users":"\u003cspan\u003eVocê, %{commaSeparatedUsernames} e %{username} reagiram com \u003c/span\u003e:%{emoji}:","you_multiple_users_and_more":{"one":"\u003cspan\u003eVocê, %{commaSeparatedUsernames} e mais %{count} reagiram com \u003c/span\u003e:%{emoji}:","other":"\u003cspan\u003eVocê, %{commaSeparatedUsernames} e mais %{count} reagiram com \u003c/span\u003e:%{emoji}:"},"single_user":"\u003cspan\u003e%{username} reagiu com \u003c/span\u003e:%{emoji}:","multiple_users":"\u003cspan\u003e%{commaSeparatedUsernames} e %{username} reagiram com \u003c/span\u003e:%{emoji}:","multiple_users_and_more":{"one":"\u003cspan\u003e%{commaSeparatedUsernames} e mais %{count} reagiram com \u003c/span\u003e:%{emoji}:","other":"\u003cspan\u003e%{commaSeparatedUsernames} e mais %{count} reagiram com \u003c/span\u003e:%{emoji}:"}},"composer":{"toggle_toolbar":"Ativar/desativar barra de ferramentas","italic_text":"texto enfatizado","bold_text":"texto forte","code_text":"texto do código","send":"Enviar"},"quote":{"original_channel":"Originalmente enviado em \u003ca href=\"%{channelLink}\"\u003e%{channel}\u003c/a\u003e","copy_success":"Citação do chat copiada para área de transferência","default_thread_title":"Linha de discussão"},"notification_levels":{"never":"Nunca","mention":"Apenas para menções","always":"Para todas as atividades"},"settings":{"channel_wide_mentions_label":"Permitir menções @all e @here","channel_wide_mentions_description":"Permitir que os usuários notifiquem todos os membros de #%{channel} com @all ou apenas aqueles que estão ativos no momento com @here","channel_threading_label":"Criar linha de discussão","channel_threading_description":"Ao ativar a criação da linha de discussão, as respostas a uma mensagem de chat criarão uma conversa separada, que existirá junto com o canal principal.","auto_join_users_label":"Adicionar usuários(as) automaticamente","auto_join_users_info":"Verifique a cada hora quais usuários(as) estiveram ativos(as) nos últimos três meses. Adicione-os(as) a este canal se tiverem acesso à categoria %{category}.","auto_join_users_info_no_category":"Verifique a cada hora quais usuários(as) estiveram ativos(as) nos últimos três meses. Adicione-os(as) a este canal se tiverem acesso à categoria selecionada.","auto_join_users_warning":"Todos(as) os(as) usuários(as) que não são membros deste canal e têm acesso à categoria %{category} participarão. Tem certeza?","desktop_notification_level":"Notificações do desktop","follow":"Participar","followed":"Entrou","mobile_notification_level":"Notificações por push em dispositivos móveis","mute":"Silenciar canal","threading_enabled":"Ativada","threading_disabled":"Desativada","muted_on":"Ligado","muted_off":"Desligado","notifications":"Notificações","preview":"Pré-visualizar","save":"Salvar","saved":"Salvou","unfollow":"Sair","admin_title":"Administrador(a)","settings_title":"Configurações","info_title":"Informações do canal","category_label":"Categoria","history_label":"Histórico","members_label":"Membros"},"admin":{"title":"Chat","export_messages":{"title":"Exportar mensagens do chat","description":"As mensagens de todos os canais são exportadas.","create_export":"Criar exportação","export_has_started":"A exportação foi iniciada. Você receberá uma MP quando estiver pronta."}},"my_threads":{"title":"Meus tópicos","aria_label":"Mudar para minha lista de tópicos"},"direct_messages":{"title":"PV","aria_label":"Mudar para mensagens diretas","new":"Criar um chat pessoal","create":"Ir","leave":"Sair deste chat pessoal","close":"Fechar este chat pessoal","cannot_create":"Desculpe, você não pode enviar mensagens diretas."},"channel_list":{"title":"Canais","aria_label":"Mudar para lista de canais"},"incoming_webhooks":{"back":"Voltar","channel_placeholder":"Selecione um canal","confirm_destroy":"Tem certeza de que deseja excluir este webhook recebido? Isso não pode ser desfeito.","current_emoji":"Emoji atual","description":"Descrição","delete":"Excluir","emoji":"Emoji","emoji_instructions":"O avatar do sistema será usado se o emoji for deixado em branco.","name":"Nome","name_placeholder":"nome...","new":"Novo webhook recebido","none":"Nenhum webhook recebido existente foi criado.","no_emoji":"Nenhum emoji selecionado","post_to":"Postar para","reset_emoji":"Redefinir emoji","save":"Salvar","edit":"Editar","select_emoji":"Escolher emoji","system":"sistema","title":"Webhooks recebidos","url":"URL","url_instructions":"Esta URL contém um valor secreto - mantenha-o seguro.","username":"Nome de usuário(a)","username_instructions":"Nome de usuário(a) de robô que posta no canal. Padrão para \"sistema\" quando deixado em branco.","instructions":"Os webhooks de entrada podem ser usados por sistemas externos para postar mensagens em um canal de chat designado como um usuário de bot por meio do endpoint \u003ccode\u003e/hooks/:key\u003c/code\u003e . A carga útil consiste em um único parâmetro \u003ccode\u003etext\u003c/code\u003e , limitado a 2.000 caracteres.\u003cbr\u003e\u003cbr\u003eTambém oferecemos suporte limitado a parâmetros \u003ccode\u003etext\u003c/code\u003e formatados pelo Slack, extraindo links e menções com base no formato em \u003ca href=\"https://api.slack.com/reference/surfaces/formatting\"\u003ehttps://api.slack.com/reference/surfaces/formatting\u003c/a\u003e, mas \u003ccode\u003e/hooks/:key/ O endpoint do slack\u003c/code\u003e deve ser usado para isso."},"selection":{"cancel":"Cancelar","quote_selection":"Citar no tópico","copy":"Copiar","move_selection_to_channel":"Mover para o canal","error":"Houve um erro ao mover as mensagens de chat","title":"Mover chat para tópico","new_topic":{"title":"Mover para novo tópico","instructions":{"one":"Você está prestes a criar um novo tópico e preenchê-lo com a mensagem de chat selecionada.","other":"Você está prestes a criar um novo tópico e preenchê-lo com as %{count} mensagens de chat selecionadas."},"instructions_channel_archive":"Você está prestes a criar um novo tópico e arquivar as mensagens do canal nele."},"existing_topic":{"title":"Mover para tópico existente","instructions":{"one":"Escolha o tópico para o qual você gostaria de mover a mensagem de chat.","other":"Escolha o tópico para o qual você gostaria de mover as %{count} mensagens de chat."},"instructions_channel_archive":"Escolha o tópico para o qual você gostaria de arquivar as mensagens de canal."},"new_message":{"title":"Mover para nova mensagem","instructions":{"one":"Você está prestes a criar uma nova mensagem e preenchê-la com a mensagem de chat selecionada.","other":"Você está prestes a criar uma nova mensagem e preenchê-la com as %{count} mensagens de chat selecionadas."}}},"replying_indicator":{"single_user":"%{username} está digitando","multiple_users":"%{commaSeparatedUsernames} e %{lastUsername} estão digitando","many_users":{"one":"%{commaSeparatedUsernames} e mais %{count} estão digitando","other":"%{commaSeparatedUsernames} e mais %{count} estão digitando"}},"retention_reminders":{"indefinitely_short":"indefinidamente","indefinitely_long":"As configurações do chat foram definidas para manter as mensagens do canal indefinidamente.","short":{"one":"%{count} dia","other":"%{count} dias"},"long":{"one":"As configurações do chat foram definidas para manter as mensagens do canal durante %{count} dia.","other":"As configurações do chat foram definidas para manter as mensagens do canal durante %{count} dias."}},"flags":{"off_topic":"Esta mensagem não é relevante para a discussão atual, conforme definido pelo título do canal, e provavelmente deve ser movida para outro lugar.","inappropriate":"Esta mensagem contém conteúdo que uma pessoa razoável consideraria ofensivo, abusivo ou uma violação de \u003ca href=\"%{basePath}/guidelines\"\u003enossas diretrizes da comunidade\u003c/a\u003e.","spam":"Esta mensagem é uma propaganda, ou vandalismo. Não é útil ou relevante para o canal atual.","notify_user":"Quero falar com essa pessoa diretamente sobre sua mensagem.","notify_moderators":"Esta mensagem requer atenção da equipe por outro motivo não listado acima."},"flagging":{"action":"Sinalizar mensagem"},"emoji_picker":{"favorites":"Usado frequentemente","smileys_\u0026_emotion":"Smileys e emoticons","objects":"Objetos","people_\u0026_body":"Pessoas e corpo","travel_\u0026_places":"Viagens e lugares","animals_\u0026_nature":"Animais e natureza","food_\u0026_drink":"Comida e bebida","activities":"Atividades","flags":"Sinalizações","symbols":"Símbolos","search_placeholder":"Pesquisar por nome de emoji e codinomes...","no_results":"Nenhum resultado"},"thread":{"title":"Título","view_thread":"Visualizar linha de discussão","replies":{"one":"%{count} resposta","other":"%{count} respostas"},"label":"Linha de discussão","close":"Fechar linha de discussão","original_message":{"started_by":"Iniciado por"},"settings":"Definições","last_reply":"última resposta","notifications":{"regular":{"title":"Normal","description":"Você receberá notificação se alguém mencionar seu @nome nesta linha de discussão."},"tracking":{"title":"Monitorando","description":"Uma contagem de novas respostas para esta linha de discussão será mostrada na lista de linhas de discussão e no canal. Você receberá uma notificação se algúem mencionar seu @nome aqui."}},"participants_other_count":{"one":"+%{count}","other":"+%{count}"}},"threads":{"open":"Linha de discussão aberta","list":"Linhas de discussão","none":"Você não está participando de nenhuma linha de discussão neste canal."},"draft_channel_screen":{"header":"Novas mensagens","cancel":"Cancelar"}},"styleguide":{"sections":{"chat":{"title":"Chat"},"bem":{"title":"BEM"},"typography":{"title":"Tipografia","example":"Boas-vindas ao Discourse","paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},"date_time_inputs":{"title":"Entradas de data/hora"},"menus":{"title":"Menus"},"toasts":{"title":"Barra de notificação"},"font_scale":{"title":"Sistema da fonte"},"colors":{"title":"Cores"},"icons":{"title":"Ícones","full_list":"Exibir a lista completa de ícones incríveis de fonte"},"input_fields":{"title":"Campos de entrada"},"buttons":{"title":"Botões"},"dropdowns":{"title":"Menus suspensos"},"categories":{"title":"Categorias"},"bread_crumbs":{"title":"Navegação estrutural"},"navigation":{"title":"Navegação"},"navigation_bar":{"title":"Barra de navegação"},"navigation_stacked":{"title":"Navegação empilhada"},"categories_list":{"title":"Lista de categorias"},"topic_link":{"title":"Link de tópico"},"topic_list_item":{"title":"Item de lista de tópicos"},"topic_statuses":{"title":"Status do tópico"},"topic_list":{"title":"Lista de tópicos"},"basic_topic_list":{"title":"Lista de tópicos básicos"},"footer_message":{"title":"Mensagem de rodapé"},"signup_cta":{"title":"CTA de cadastro"},"topic_timer_info":{"title":"Timers de tópico"},"topic_footer_buttons":{"title":"Botões no rodapé do tópico"},"topic_notifications":{"title":"Notificações de tópico"},"post":{"title":"Postagem"},"topic_map":{"title":"Mapa do tópico"},"site_header":{"title":"Cabeçalho do site"},"suggested_topics":{"title":"Tópicos sugeridos"},"post_menu":{"title":"Menu de postagem"},"modal":{"title":"Modal","header":"Título do modal","footer":"Rodapé do modal"},"user_about":{"title":"Caixa Sobre do(a) usuário(a)"},"header_icons":{"title":"Ícones no cabeçalho"},"spinners":{"title":"Controle giratório"},"empty_state":{"title":"Estado vazio"},"tooltips":{"title":"Dicas de ferramenta","description":"Descrição","header":"Cabeçalho","hover_to_see":"Passe o mouse para ver uma dica"},"char_counter":{"title":"Contador de Caracteres","placeholder":"Insira seu texto aqui..."}},"title":"Guia de estilo","welcome":"Para começar, escolha uma seção no menu à esquerda.","categories":{"syntax":"Sintaxe","atoms":"Átomos","molecules":"Moléculas","organisms":"Organismos"}},"checklist":{"edit_reason":"mudança de lista de verificação"},"adplugin":{"advertisement_label":"PUBLICIDADE"},"discourse_ai":{"title":"IA","modals":{"select_option":"Selecione uma opção..."},"ai_persona":{"back":"Voltar","name":"Nome","edit":"Editar","description":"Descrição","user":"Usuário(a)","system_prompt":"Prompt do sistema","save":"Salvar","saved":"Persona de IA salva","enabled":"Ativado(a)?","commands":"Comandos ativados","allowed_groups":"Grupos permitidos","confirm_delete":"Você tem certeza de que deseja excluir esta persona?","title":"Personas de IA","delete":"Excluir","priority":"Prioridade","priority_help":"Personas de prioridade são exibidas aos(às) usuários(as) no topo da lista de personas. Se várias personas tiverem prioridade, serão escolhidas em ordem alfabética.","command_options":"Opções de comando","uploads":{"title":"Envios","uploading":"Enviando..."}},"related_topics":{"title":"Tópicos relacionados","pill":"Relacionado(a)"},"ai_helper":{"title":"Sugerir alterações com IA","description":"Escolha uma das opções abaixo, e a IA irá sugerir uma nova versão do texto.","selection_hint":"Dica: antes de abrir o ajudante, você pode selecionar uma parte do texto para reescrever apenas ela.","suggest":"Sugestão com IA","missing_content":"Insira conteúdo para gerar sugestões.","context_menu":{"back":"Voltar","trigger":"IA","undo":"Desfazer","loading":"A IA está gerando","cancel":"Cancelar","regen":"Tentar novamente","view_changes":"Visualizar alterações","confirm":"Confirmar","revert":"Reverter","changes":"Alterações","custom_prompt":{"title":"Prompt personalizado","placeholder":"Insira um prompt personalizado...","submit":"Enviar prompt"}},"post_options_menu":{"trigger":"Perguntar à IA","title":"Perguntar à IA","loading":"A IA está gerando","close":"Fechar","copy":"Copiar","copied":"Copiou!","cancel":"Cancelar"},"fast_edit":{"suggest_button":"Sugerir edição"},"thumbnail_suggestions":{"title":"Miniaturas sugeridas","select":"Selecionar","selected":"Selecionado(a)"},"image_caption":{"save_caption":"Salvar"}},"reviewables":{"model_used":"Modelo usado:","accuracy":"Precisão:"},"embeddings":{"semantic_search":"Tópicos (semântica)","semantic_search_loading":"Pesquisando mais resultados usando IA","semantic_search_disabled_sort":"Pesquisa com IA desativada para esta ordem de classificação, classifique por Relevância para ativar.","semantic_search_results":{"toggle":"Mostrando %{count} resultados encontrados usando IA","toggle_hidden":"Ocultando %{count} resultados encontrados usando IA","none":"Desculpe, nossa Pesquisa com IA não achou tópicos correspondentes.","new":"Aperte \"Pesquisar\"' para começar a procurar resultados novos com a IA"},"ai_generated_result":"Resultado de pesquisa encontrado usando IA"},"ai_bot":{"pm_warning":"Todas as mensagens do chatbot de IA são monitoradas regularmente por moderadores(as).","cancel_streaming":"Parar resposta","default_pm_prefix":"[MP de bot de IA não identificado]","shortcut_title":"Iniciar uma MP com bot de IA","share":"Compartilhar conversação com IA","conversation_shared":"Conversação copiada","ai_label":"IA","ai_title":"Conversação com IA","share_modal":{"copy":"Copiar","context":"Interações para compartilhar:"},"bot_names":{"gpt-4":"GPT-4","gpt-4-turbo":"GPT-4 Turbo","gpt-3":{"5-turbo":"GPT-3.5"},"claude-2":"Claude 2","gemini-1":{"5-pro":"Gemini"},"mixtral-8x7B-Instruct-V0":{"1":"Mixtral-8x7B V0.1"}}},"sentiments":{"dashboard":{"title":"Sentimento"}}},"akismet":{"title":"Akismet","confirm_spam":"Excluir postagem","confirm_spam_description":"Concorde com a sinalização, exclua a postagem e envie comentários para Akismet.","not_spam":"Não","confirm_delete":"Confirmar spam e excluir usuário(a)","confirm_suspend":"Suspender usuário(a)","confirm_suspend_description":"Concorde com a sinalização e suspenda o(a) usuário(a).","dismiss":"Descartar","ignore":"Ignorar","reviewable_delete_prompt":"Você tem certeza de que deseja excluir este(a) usuário(a)? Isto removerá todas as suas postagens e bloqueará seu e-mail e endereço IP.","topic_deleted":"Nosso filtro de spam automático, Akismet, ocultou este tópico temporariamente.","user_state":{"pending":"Akismet ainda não verificou este(a) usuário(a).","skipped":"Este(a) usuário(a) ainda não foi verificado(a) por Akismet.","confirmed_ham":"Akismet decidiu que este(a) usuário(a) não é spam.","confirmed_spam":"Akismet decidiu que este(a) usuário(a) é spam."},"post_state":{"pending":"Akismet ainda não verificou esta postagem.","skipped":"Esta postagem ainda não foi verificada por Akismet.","confirmed_ham":"Esta postagem foi marcada como não spam por Akismet.","confirmed_spam":"Esta postagem foi marcada como spam por Akismet."}},"discourse_algolia":{"search_box_placeholder":"Pesquisar no fórum...","advanced_search":"pesquisa avançada","powered_by":"Da plataforma do plugin de pesquisa discourse-algolia","user_likes":"Quantidade de curtidas recebidas pelo(a) usuário(a)","topic_tags":"Quantidade de tópicos com esta etiqueta","topic_views":"Quantidade de vezes que este tópico foi visualizado","no_posts":"Nenhuma postagem correspondente."},"discourse_assign":{"add_unassigned_filter":"Adicionar o filtro \"não atribuído\" à categoria","cant_act":"Você não pode agir em sinalizações que foram atribuídas a outros(as) usuários(as)","cant_act_unclaimed":"Você precisa reivindicar este tópico antes de agir em sinalizações.","topic_search_placeholder":"Procurar tópicos por título ou conteúdo da postagem","sidebar_name_filter_placeholder":"Nome/nome de usuário(a)","assigned":"Atribuiu","group_everyone":"Todos","assigned_to":"Atribuiu a","assigned_topic_to":"Tópico atribuído a \u003ca href='%{path}'\u003e%{username}\u003c/a\u003e","assign_post_to":"Atribuiu #%{post_number} a %{username}","assign_post_to_multiple":"#%{post_number} para %{username}","assigned_to_w_ellipsis":"Atribuiu a...","unassign":{"title":"Remover atribuição","title_w_ellipsis":"Remover atribuição...","help":"Remover atribuição de %{username} do tópico"},"assign":{"title":"Atribuir","help":"Atribuir tópico a usuário(a)"},"assign_post":{"title":"Atribuir postagem"},"unassign_post":{"title":"Remover atribuição da postagem","help":"Remover atribuição de %{username} da postagem"},"reassign":{"title":"Editar","title_w_ellipsis":"Editar atribuição...","to_self":"Reatribuir a mim","to_self_help":"Reatribuir tópico a mim","help":"Editar detalhes da atribuição"},"reassign_modal":{"title":"Reatribuir tópico"},"topic_level_menu":{"unassign_with_ellipsis":"Remover atribuição..."},"assign_modal":{"title":"Atribuir tópico","reassign_title":"Reatribuir tópico","assign":"Atribuir","assignee_label":"Destinatário(a)","choose_assignee":"Escolha um(a) usuário(a) para atribuir.","note_label":"Observação","optional_label":"(opcional)","status_label":"Status","suggestions":"sugestões"},"assign_post_modal":{"title":"Atribuir postagem"},"claim":{"title":"reivindicar","help":"Atribuir tópico a si"},"assign_mailer":{"never":"Nunca","different_users":"Apenas se o(a) atribuidor(a) e destinatário(a) forem usuários(as) diferentes","always":"Sempre"},"reminders_frequency":{"description":"Freqüência para receber lembretes de tópicos designados","never":"Nunca","daily":"Diariamente","weekly":"Semanalmente","monthly":"Mensalmente","quarterly":"Trimestralmente"},"admin":{"groups":{"manage":{"interaction":{"assign":"Atribuir","assignable_levels":{"title":"Quem pode atribuir este grupo"}}}}}},"notification_reason":{"user":"Você verá uma contagem de novas respostas porque este tópico foi atribuído a você."},"edit_assignments_modal":{"topic":"Tópico","post":"Postar"},"cakeday":{"title":"Dia de Bolo","today":"Hoje","tomorrow":"Amanhã","upcoming":"Próximos","all":"Todos"},"birthdays":{"title":"Aniversários","month":{"title":"Aniversários no mês de","empty":"Não há usuários(as) comemorando seu aniversário neste mês."},"upcoming":{"title":"Aniversários para %{start_date} - %{end_date}","empty":"Não há usuários(as) comemorando seu aniversário nos próximos sete dias."},"today":{"title":"Aniversários para %{date}","empty":"Não há usuários(as) comemorando seu aniversário hoje."},"tomorrow":{"empty":"Não há usuários(as) comemorando seu aniversário amanhã."}},"anniversaries":{"title":"Comemorações da comunidade","month":{"title":"Comemorações no mês de","empty":"Não há usuários(as) com comemorações neste mês."},"upcoming":{"title":"Aniversários para %{start_date} - %{end_date}","empty":"Não há usuários(as) com comemorações nos próximos sete dias."},"today":{"title":"Comemorações para %{date}","empty":"Não há usuários(as) com comemorações hoje."},"tomorrow":{"empty":"Não há usuários(as) com comemorações amanhã."}},"discourse_calendar":{"invite_user_notification":"%{username} convidou para participar de %{description}","on_holiday":"No feriado","disable_holiday":"Desativar","enable_holiday":"Ativar","holiday":"Feriado","holidays":{"header_title":"Feriados","pick_region_description":"Escolha uma região para ver os feriados dessa região.","disabled_holidays_description":"Feriados desativados serão excluídos do calendário de férias da equipe."},"date":"Data","add_to_calendar":"Adicionar ao Google Calendar","toggle_timezone_offset_title":"Alternar deslocamento de fuso horário","region":{"title":"Região","none":"Nenhum","use_current_region":"Usar região atual","names":{"ar":"Argentina","at":"Áustria","au_act":"Austrália (au_act)","au_nsw":"Austrália (au_nsw)","au_nt":"Austrália (au_nt)","au_qld_brisbane":"Austrália (au_qld_brisbane)","au_qld_cairns":"Austrália (au_qld_cairns)","au_qld":"Austrália (au_qld)","au_sa":"Austrália (au_sa)","au_tas_north":"Austrália (au_tas_north)","au_tas_south":"Austrália (au_tas_south)","au_tas":"Austrália (au_tas)","au_vic_melbourne":"Austrália (au_vic_melbourne)","au_vic":"Austrália (au_vic)","au_wa":"Austrália (au_wa)","au":"Austrália","be_fr":"Bélgica (be_fr)","be_nl":"Bélgica (be_nl)","bg_bg":"Bulgária (bg_bg)","bg_en":"Bulgária (bg_en)","br":"Brasil","br_sp":"Brasil (br_sp)","br_spcapital":"Brasil (br_spcapital)","ca_ab":"Canadá (ca_ab)","ca_bc":"Canadá (ca_bc)","ca_mb":"Canadá (ca_mb)","ca_nb":"Canadá (ca_nb)","ca_nl":"Canadá (ca_nl)","ca_ns":"Canadá (ca_ns)","ca_nt":"Canadá (ca_nt)","ca_nu":"Canadá (ca_nu)","ca_on":"Canadá (ca_on)","ca_pe":"Canadá (ca_pe)","ca_qc":"Canadá (ca_qc)","ca_sk":"Canadá (ca_sk)","ca_yt":"Canadá (ca_yt)","ca":"Canadá","ch_ag":"Suíça (ch_ag)","ch_ai":"Suíça (ch_ai)","ch_ar":"Suíça (ch_ar)","ch_be":"Suíça (ch_be)","ch_bl":"Suíça (ch_bl)","ch_bs":"Suíça (ch_bs)","ch_fr":"Suíça (ch_fr)","ch_ge":"Suíça (ch_ge)","ch_gl":"Suíça (ch_gl)","ch_gr":"Suíça (ch_gr)","ch_ju":"Suíça (ch_ju)","ch_lu":"Suíça (ch_lu)","ch_ne":"Suíça (ch_ne)","ch_nw":"Suíça (ch_nw)","ch_ow":"Suíça (ch_ow)","ch_sg":"Suíça (ch_sg)","ch_sh":"Suíça (ch_sh)","ch_so":"Suíça (ch_so)","ch_sz":"Suíça (ch_sz)","ch_tg":"Suíça (ch_tg)","ch_ti":"Suíça (ch_ti)","ch_ur":"Suíça (ch_ur)","ch_vd":"Suíça (ch_vd)","ch_vs":"Suíça (ch_vs)","ch_zg":"Suíça (ch_zg)","ch_zh":"Suíça (ch_zh)","ch":"Suíça","cl":"Chile","co":"Colômbia","cr":"Costa Rica","cz":"República Tcheca","de_bb":"Alemanha (de_bb)","de_be":"Alemanha (de_be)","de_bw":"Alemanha (de_bw)","de_by_augsburg":"Alemanha (de_by_augsburg)","de_by_cath":"Alemanha (de_by_cath)","de_by":"Alemanha (de_by)","de_hb":"Alemanha (de_hb)","de_he":"Alemanha (de_he)","de_hh":"Alemanha (de_hh)","de_mv":"Alemanha (de_mv)","de_ni":"Alemanha (de_ni)","de_nw":"Alemanha (de_nw)","de_rp":"Alemanha (de_rp)","de_sh":"Alemanha (de_sh)","de_sl":"Alemanha (de_sl)","de_sn_sorbian":"Alemanha (de_sn_sorbian)","de_sn":"Alemanha (de_sn)","de_st":"Alemanha (de_st)","de_th_cath":"Alemanha (de_th_cath)","de_th":"Alemanha (de_th)","de":"Alemanha","dk":"Dinamarca","ee":"Estônia","el":"Grécia","es_an":"Espanha (es_an)","es_ar":"Espanha (es_ar)","es_ce":"Espanha (es_ce)","es_cl":"Espanha (es_cl)","es_cm":"Espanha (es_cm)","es_cn":"Espanha (es_cn)","es_ct":"Espanha (es_ct)","es_ex":"Espanha (es_ex)","es_ga":"Espanha (es_ga)","es_ib":"Espanha (es_ib)","es_lo":"Espanha (es_lo)","es_m":"Espanha (es_m)","es_mu":"Espanha (es_mu)","es_na":"Espanha (es_na)","es_o":"Espanha (es_o)","es_pv":"Espanha (es_pv)","es_v":"Espanha (es_v)","es_vc":"Espanha (es_vc)","es":"Espanha","fi":"Finlândia","fr_a":"França (fr_a)","fr_m":"França (fr_m)","fr":"França","gb_con":"Reino Unido (gb_con)","gb_eaw":"Reino Unido (gb_eaw)","gb_eng":"Reino Unido (gb_eng)","gb_gsy":"Reino Unido (gb_gsy)","gb_iom":"Reino Unido (gb_iom)","gb_jsy":"Reino Unido (gb_jsy)","gb_nir":"Reino Unido (gb_nir)","gb_sct":"Reino Unido (gb_sct)","gb_wls":"Reino Unido (gb_wls)","gb":"Reino Unido","ge":"Geórgia","gg":"Guernsey","gh":"Gana","hk":"Hong Kong","hr":"Croácia","hu":"Hungria","id":"Indonésia","ie":"Irlanda","im":"Ilha de Man","in":"Índia","in_gj":"Índia (in_gj)","in_mh":"Índia (in_mh)","in_rj":"Índia (in_rj)","in_tn":"Índia (in_tn)","is":"Islândia","it_bl":"Itália (it_bl)","it_fi":"Itália (it_fi)","it_ge":"Itália (it_ge)","it_pd":"Itália (it_pd)","it_rm":"Itália (it_rm)","it_ro":"Itália (it_ro)","it_to":"Itália (it_to)","it_tv":"Itália (it_tv)","it_ve":"Itália (it_ve)","it_vi":"Itália (it_vi)","it_vr":"Itália (it_vr)","it":"Itália","je":"Jersey","jp":"Japão","ke":"Quênia","kr":"Coreia do Norte","kz":"Cazaquistão (República do)","li":"Liechtenstein","lt":"Lituânia","lu":"Luxemburgo","lv":"Letônia","ma":"Marrocos","mt_en":"Malta (mt_en)","mt_mt":"Malta (mt_mt)","mx_pue":"México (mx_pue)","mx":"México","my":"Malásia","ng":"Nigéria","nl":"Países Baixos","no":"Noruega","nz_ak":"Nova Zelândia (nz_ak)","nz_ca":"Nova Zelândia (nz_ca)","nz_ch":"Nova Zelândia (nz_ch)","nz_hb":"Nova Zelândia (nz_hb)","nz_mb":"Nova Zelândia (nz_mb)","nz_ne":"Nova Zelândia (nz_ne)","nz_nl":"Nova Zelândia (nz_nl)","nz_ot":"Nova Zelândia (nz_ot)","nz_sc":"Nova Zelândia (nz_sc)","nz_sl":"Nova Zelândia (nz_sl)","nz_ta":"Nova Zelândia (nz_ta)","nz_we":"Nova Zelândia (nz_we)","nz_wl":"Nova Zelândia (nz_wl)","nz":"Nova Zelândia","pe":"Peru","ph":"Filipinas","pl":"Polônia","pt_li":"Portugal (pt_li)","pt_po":"Portugal (pt_po)","pt":"Portugal","ro":"Romênia","rs_cyrl":"Sérvia (rs_cyrl)","rs_la":"Sérvia (rs_la)","ru":"Federação Russa","se":"Suécia","sa":"Arábia Saudita","sg":"Cingapura","si":"Eslovênia","sk":"Eslováquia","th":"Tailândia","tn":"Tunísia","tr":"Turquia","ua":"Ucrânia","us_ak":"Estados Unidos (us_ak)","us_al":"Estados Unidos (us_al)","us_ar":"Estados Unidos (us_ar)","us_az":"Estados Unidos (us_az)","us_ca":"Estados Unidos (us_ca)","us_co":"Estados Unidos (us_co)","us_ct":"Estados Unidos (us_ct)","us_dc":"Estados Unidos (us_dc)","us_de":"Estados Unidos (us_de)","us_fl":"Estados Unidos (us_fl)","us_ga":"Estados Unidos (us_ga)","us_gu":"Estados Unidos (us_gu)","us_hi":"Estados Unidos (us_hi)","us_ia":"Estados Unidos (us_ia)","us_id":"Estados Unidos (us_id)","us_il":"Estados Unidos (us_il)","us_in":"Estados Unidos (us_in)","us_ks":"Estados Unidos (us_ks)","us_ky":"Estados Unidos (us_ky)","us_la":"Estados Unidos (us_la)","us_ma":"Estados Unidos (us_ma)","us_md":"Estados Unidos (us_md)","us_me":"Estados Unidos (us_me)","us_mi":"Estados Unidos (us_mi)","us_mn":"Estados Unidos (us_mn)","us_mo":"Estados Unidos (us_mo)","us_ms":"Estados Unidos (us_ms)","us_mt":"Estados Unidos (us_mt)","us_nc":"Estados Unidos (us_nc)","us_nd":"Estados Unidos (us_nd)","us_ne":"Estados Unidos (us_ne)","us_nh":"Estados Unidos (us_nh)","us_nj":"Estados Unidos (us_nj)","us_nm":"Estados Unidos (us_nm)","us_nv":"Estados Unidos (us_nv)","us_ny":"Estados Unidos (us_ny)","us_oh":"Estados Unidos (us_oh)","us_ok":"Estados Unidos (us_ok)","us_or":"Estados Unidos (us_or)","us_pa":"Estados Unidos (us_pa)","us_pr":"Estados Unidos (us_pr)","us_ri":"Estados Unidos (us_ri)","us_sc":"Estados Unidos (us_sc)","us_sd":"Estados Unidos (us_sd)","us_tn":"Estados Unidos (us_tn)","us_tx":"Estados Unidos (us_tx)","us_ut":"Estados Unidos (us_ut)","us_va":"Estados Unidos (us_va)","us_vi":"Estados Unidos (us_vi)","us_vt":"Estados Unidos (us_vt)","us_wa":"Estados Unidos (us_wa)","us_wi":"Estados Unidos (us_wi)","us_wv":"Estados Unidos (us_wv)","us_wy":"Estados Unidos (us_wy)","us":"Estados Unidos","ve":"Venezuela","vi":"Ilhas Virgens (E.U.A)","za":"África do Sul"}},"toolbar_button":{"today":"Hoje","month":"Mês","week":"Semana","day":"Dia","list":"Lista"},"discourse_post_event":{"notifications":{"invite_user_predefined_attendance_notification":"%{username} definiu automaticamente sua presença e convidou para","before_event_reminder":"Um evento está prestes a começar","after_event_reminder":"Um evento foi encerrado","ongoing_event_reminder":"Um evento está em andamento","invite_user_notification":"%{username} %{description}","invite_user_predefined_attendance_notification_html":"%{username} definiu automaticamente sua presença e convidou para %{description}","before_event_reminder_html":"Um evento está prestes a começar %{description}","after_event_reminder_html":"Um evento terminou %{description}","ongoing_event_reminder_html":"Um evento está em andamento  %{description}"},"preview":{"more_than_one_event":"Você não pode ter mais de um evento."},"edit_reason":"Evento atualizado","topic_title":{"starts_at":"O evento terá início: %{date}","ended_at":"O evento terminou: %{date}","ends_in_duration":"Termina em %{duration}"},"models":{"invitee":{"no_users":"Não há usuários(as) deste tipo.","status":{"unknown":"Não tenho interesse","going":"Indo para","not_going":"Não vou","interested":"Interessado"}},"event":{"expired":"Expirou","status":{"standalone":{"title":"Independente","description":"Não é possível entrar em um evento independente."},"public":{"title":"Público","description":"Qualquer pessoa pode participar de um evento público."},"private":{"title":"Privado","description":"Um evento privado só pode ter a participação de usuários(as) convidados(as)."}}}},"event_ui":{"show_all":"Exibir tudo","participants":{"one":"%{count} usuário(a) participou.","other":"%{count} usuários(as) participaram."},"invite":"Notificar usuário(a)","add_to_calendar":"Adicionar ao calendário","send_pm_to_creator":"Enviar MP para %{username}","leave":"Sair do evento","edit_event":"Editar evento","export_event":"Exportar evento","created_by":"Criador(a):","bulk_invite":"Convite em massa","close_event":"Encerrar evento"},"invitees_modal":{"title_invited":"Lista de usuários(as) RSVPed","title_participated":"Lista de usuários(as) que participaram","filter_placeholder":"Filtrar usuários(as)"},"bulk_invite_modal":{"confirm":"confirmar","text":"Carregar arquivo CSV","title":"Convite em massa","success":"Arquivo enviado com sucesso, você será notificado(a) por mensagem quando o processo estiver completo.","error":"Desculpe, o arquivo deve estar no formato CSV.","confirmation_message":"Você está prestes a enviar convites por e-mail para todos(as) no arquivo enviado.","description_public":"Eventos públicos só aceitam nomes de usuários(as) para convites em massa.","description_private":"Eventos públicos só aceitam nomes de usuários(as) para convites em massa.","download_sample_csv":"Faça o download de um arquivo CSV de exemplo","send_bulk_invites":"Enviar convites","group_selector_placeholder":"Fechar grupo...","user_selector_placeholder":"Escolha o(a) usuário(a)...","inline_title":"Convite em massa embutido","csv_title":"Convite em massa CSV"},"builder_modal":{"custom_fields":{"label":"Campos personalizados","placeholder":"Opcional","description":"Os campos personalizados permitidos são definidos nas configurações do site. Os campos personalizados são usados para transmitir dados para outros plugins."},"create_event_title":"Criar evento","update_event_title":"Editar evento","confirm_delete":"Você tem certeza de que quer excluir este evento?","confirm_close":"Você tem certeza de que deseja fechar este evento?","create":"Criar","update":"Salvar","attach":"Criar evento","add_reminder":"Adicionar lembrete","timezone":{"label":"Fuso horário","remove_timezone":"Sem fuso horário (UTC)"},"reminders":{"label":"Lembretes","types":{"bump_topic":"impulsionar tópico automaticamente","notification":"notificar participantes"},"units":{"minutes":"minutos","hours":"horas","days":"dias","weeks":"semanas"},"periods":{"before":"antes","after":"depois"}},"recurrence":{"label":"Recorrência","none":"Sem recorrência","every_day":"Todos os dias","every_month":"Todo mês, neste dia da semana","every_weekday":"Todos os dias da semana","every_week":"Todo mês, neste dia da semana","every_two_weeks":"Todo mês, neste dia da semana","every_four_weeks":"A cada quatro semanas, neste dia da semana"},"minimal":{"label":"evento mínimo","checkbox_label":"Ocultar botões Vou/Não vou e status dos(as) convidados(as)"},"url":{"label":"URL","placeholder":"Opcional"},"name":{"label":"Nome do evento","placeholder":"Opcional, o padrão é o título do tópico"},"invitees":{"label":"Grupos convidados"},"status":{"label":"Status"}},"invite_user_or_group":{"title":"Notificar usuário(s) ou grupo(s)","invite":"Enviar"},"upcoming_events":{"title":"Próximos eventos","creator":"Criador","status":"Status","starts_at":"Começa"},"upcoming_events_list":{"title":"Próximos eventos","empty":"Nenhum evento próximo","all_day":"O dia todo","error":"Falha ao recuperar eventos","try_again":"Tentar novamente","view_all":"Visualizar tudo"}}},"group_timezones":{"search":"Pesquisar...","group_availability":"disponibilidade de %{group}"},"discourse_post_event":{"notifications":{"invite_user_predefined_attendance_notification":"%{username} definiu automaticamente sua presença e te convidou para","before_event_reminder":"Um evento está prestes a começar","after_event_reminder":"Um evento foi encerrado","ongoing_event_reminder":"Um evento está em andamento","invite_user_notification":"%{username} %{description}","invite_user_predefined_attendance_notification_html":"%{username} definiu automaticamente sua presença e te convidou para %{description}","before_event_reminder_html":"Um evento está prestes a começar %{description}","after_event_reminder_html":"Um evento terminou %{description}","ongoing_event_reminder_html":"Um evento está em andamento  %{description}"},"preview":{"more_than_one_event":"Você não pode ter mais de um evento."},"edit_reason":"Evento atualizado","topic_title":{"starts_at":"O evento terá início: %{date}","ended_at":"O evento terminou: %{date}","ends_in_duration":"Termina em %{duration}"},"models":{"invitee":{"no_users":"Não há usuários(as) deste tipo.","status":{"unknown":"Não tenho interesse","going":"Indo para","not_going":"Não vou","interested":"Interessado"}},"event":{"expired":"Expirou","status":{"standalone":{"title":"Independente","description":"Não é possível entrar em um evento independente."},"public":{"title":"Público","description":"Qualquer pessoa pode participar de um evento público."},"private":{"title":"Privado","description":"Um evento privado só pode ter a participação de usuários(as) convidados(as)."}}}},"event_ui":{"show_all":"Exibir tudo","participants":{"one":"%{count} usuário(a) participou.","other":"%{count} usuários(as) participaram."},"invite":"Notificar usuário(a)","add_to_calendar":"Adicionar ao calendário","upcoming_events":"Próximos eventos","send_pm_to_creator":"Enviar MP para %{username}","leave":"Sair do evento","edit_event":"Editar evento","export_event":"Exportar evento","created_by":"Criador(a):","bulk_invite":"Convite em massa","close_event":"Encerrar evento"},"invitees_modal":{"title_invited":"Lista de usuários(as) RSVPed","title_participated":"Lista de usuários(as) que participaram","filter_placeholder":"Filtrar usuários(as)"},"bulk_invite_modal":{"confirm":"confirmar","text":"Carregar arquivo CSV","title":"Convite em massa","success":"Arquivo enviado com sucesso, você será notificado(a) por mensagem quando o processo estiver completo.","error":"Desculpe, o arquivo deve estar no formato CSV.","confirmation_message":"Você está prestes a enviar convites por e-mail para todos no arquivo enviado.","description_public":"Eventos públicos só aceitam nomes de usuários(as) para convites em massa.","description_private":"Eventos públicos só aceitam nomes de usuários(as) para convites em massa.","download_sample_csv":"Faça o download de um arquivo CSV de exemplo","send_bulk_invites":"Enviar convites","group_selector_placeholder":"Fechar grupo...","user_selector_placeholder":"Escolha o(a) usuário(a)...","inline_title":"Convite em massa embutido","csv_title":"Convite em massa CSV"},"builder_modal":{"custom_fields":{"label":"Campos personalizados","placeholder":"Opcional","description":"Os campos personalizados permitidos são definidos nas configurações do site. Os campos personalizados são usados para transmitir dados para outros plugins."},"create_event_title":"Criar evento","update_event_title":"Editar evento","confirm_delete":"Você tem certeza de que quer excluir este evento?","confirm_close":"Você tem certeza de que deseja fechar este evento?","create":"Criar","update":"Salvar","attach":"Criar evento","add_reminder":"Adicionar lembrete","timezone":{"label":"Fuso horário","remove_timezone":"Sem fuso horário (UTC)"},"reminders":{"label":"Lembretes","types":{"bump_topic":"impulsionar tópico automaticamente","notification":"notificar participantes"},"units":{"minutes":"minutos","hours":"horas","days":"dias","weeks":"semanas"},"periods":{"before":"antes","after":"depois"}},"recurrence":{"label":"Recorrência","none":"Sem recorrência","every_day":"Todos os dias","every_month":"Todo mês, neste dia da semana","every_weekday":"Todos os dias da semana","every_week":"Todo mês, neste dia da semana","every_two_weeks":"Todo mês, neste dia da semana","every_four_weeks":"A cada quatro semanas, neste dia da semana"},"minimal":{"label":"evento mínimo","checkbox_label":"Ocultar botões Vou/Não vou e status dos(as) convidados(as)"},"url":{"label":"URL","placeholder":"Opcional"},"name":{"label":"Nome do evento","placeholder":"Opcional, o padrão é o título do tópico"},"invitees":{"label":"Grupos convidados"},"status":{"label":"Status"}},"invite_user_or_group":{"title":"Notificar usuário(s) ou grupo(s)","invite":"Enviar"},"upcoming_events":{"title":"Próximos eventos","creator":"Criador","status":"Status","starts_at":"Começa"},"upcoming_events_list":{"title":"Próximos eventos","empty":"Nenhum evento próximo","all_day":"O dia todo","error":"Falha ao recuperar eventos","try_again":"Tentar novamente"}},"chat_integration":{"menu_title":"Integrações de bate-papo","settings":"Configurações","no_providers":"Você precisa habilitar alguns provedores nas configurações do plugin","channels_with_errors":"Alguns canais deste provedor falharam na última vez em que as mensagens foram enviadas. Clique no(s) ícone(s) de erro para saber mais.","channel_exception":"Um erro desconhecido ocorreu na última vez que uma mensagem foi enviada para este canal.","group_mention_template":"Menções de: @%{name}","group_message_template":"Mensagens para: @%{name}","choose_group":"(escolha um grupo)","all_categories":"(todas as categorias)","all_tags":"(todas as etiquetas)","create_rule":"Criar Regra","create_channel":"Criar Canal","delete_channel":"Excluir","test_channel":"Testar","edit_channel":"Editar","channel_delete_confirm":"Você tem certeza de que deseja excluir este canal? Todas as regras associadas serão excluídas.","test_modal":{"title":"Enviar uma mensagem de teste","topic":"Tópico","send":"Enviar Mensagem de Teste","close":"Fechar","error":"Um erro desconhecido ocorreu durante o envio da mensagem. Verifique os logs do site para mais informações.","success":"Mensagem enviada com sucesso"},"type":{"normal":"Normal","group_message":"Mensagem de Grupo","group_mention":"Menção de Grupo"},"filter":{"mute":"Silenciar","follow":"Somente a primeira postagem","watch":"Todas as postagens e respostas","tag_added":"Etiqueta adicionada ao tópico","thread":"Todas as postagens encadeadas"},"rule_table":{"filter":"Filtro","category":"Categoria","tags":"Etiquetas","edit_rule":"Editar","delete_rule":"Excluir"},"edit_channel_modal":{"title":"Editar Canal","save":"Salvar Canal","cancel":"Cancelar","provider":"Provedor","channel_validation":{"ok":"Válido","fail":"Formato inválido"}},"edit_rule_modal":{"title":"Editar Regra","save":"Salvar Regra","cancel":"Cancelar","provider":"Provedor","type":"Tipo","channel":"Canal","filter":"Filtro","category":"Categoria","group":"Grupo","tags":"Etiquetas","instructions":{"type":"Alterar o tipo para acionar notificações para mensagens de grupo ou menções","filter":"Nível de notificação. Silenciar sobrescreve outras regras correspondentes","category":"Esta regra será aplicada apenas a tópicos na categoria especificada","group":"Esta regra será aplicada a postagens que referenciem este grupo","tags":"Se especificado, esta regra será aplicada apenas a tópicos que possuem pelo menos uma destas etiquetas"}},"provider":{"slack":{"title":"Slack","param":{"identifier":{"title":"Canal","help":"ex.: #canal, @username."}},"errors":{"action_prohibited":"Este robô não tem permissão para postar naquele canal","channel_not_found":"O canal especificado não existe no Slack"}},"telegram":{"title":"Telegram","param":{"name":{"title":"Nome","help":"Um nome para descrever o canal. Não é usado para a conexão ao Telegram."},"chat_id":{"title":"ID do Bate-Papo","help":"Um número dado a você pelo robô, ou um identificador do canal de transmissão no formato @nome_do_canal"}},"errors":{"channel_not_found":"O canal especificado não existe no Telegram","forbidden":"O robô não tem permissão para postar neste canal"}},"discord":{"title":"Discord","param":{"name":{"title":"Nome","help":"Um nome para descrever o canal. Não é usado para a conexão ao Discord."},"webhook_url":{"title":"URL do Webhook","help":"A URL do webhook criada nas configurações do seu servidor Discord"}}},"guilded":{"title":"Guilded","param":{"name":{"title":"Nome","help":"Um nome para descrever o canal. Não é usado para a conexão ao Guilded"},"webhook_url":{"title":"URL do Webhook","help":"A URL do webhook criada nas configurações do seu servidor Guilded"}}},"mattermost":{"title":"Mattermost","param":{"identifier":{"title":"Canal","help":"ex.: #canal, @username."}},"errors":{"channel_not_found":"O canal especificado não existe no Mattermost"}},"matrix":{"title":"Matrix","param":{"name":{"title":"Nome","help":"Um nome para descrever o canal. Não é usado para a conexão com o Matrix."},"room_id":{"title":"ID da Sala","help":"O \"identificador privado\" para a sala. Precisa ser algo como !abcdefg:matrix.org"}},"errors":{"unknown_token":"O token de acesso é inválido","unknown_room":"O ID da sala é inválido"}},"zulip":{"title":"Zulip","param":{"stream":{"title":"Transmissão","help":"O nome da transmissão do Zulip para a qual a mensagem deve ser enviada. ex.: \"geral'"},"subject":{"title":"Assunto","help":"O assunto com que estas mensagens enviadas pelo robô devem ser dadas"}},"errors":{"does_not_exist":"Esta transmissão não existe no Zulip"}},"rocketchat":{"title":"Rocket.Chat","param":{"identifier":{"title":"Canal","help":"ex.: #canal, @username."}},"errors":{"invalid_channel":"Este canal não existe no Rocket Chat"}},"gitter":{"title":"Gitter","param":{"name":{"title":"Nome","help":"O nome de uma sala Gitter, ex.: gitterHQ/services."},"webhook_url":{"title":"URL do Webhook","help":"A URL fornecida quando você cria uma nova integração em uma sala Gitter."}}},"flowdock":{"title":"Flowdock","param":{"flow_token":{"title":"Token de Fluxo","help":"O token de fluxo fornecido depois de criar uma fonte para um fluxo no qual você deseja enviar mensagens."}}},"groupme":{"title":"GroupMe","param":{"groupme_instance_name":{"title":"Nome da instância GroupMe","help":"o nome da instância GroupMe como listado nas configurações do site. Use \"todas\" para enviar a todas as instâncias"}},"errors":{"not_found":"O caminho para qual você tentou publicar sua mensagem não foi encontrado. Verifique o ID de Robô nas Configurações do Site.","instance_names_issue":"Nomes de instância formatados incorretamente ou não fornecidos"}},"teams":{"title":"Microsoft Teams","param":{"name":{"title":"Nome","help":"Um nome de canal do Teams, por exemplo: discourse"},"webhook_url":{"title":"Webhook URL","help":"A URL fornecida ao criar um novo webhook de entrada"}},"errors":{"invalid_channel":"Este canal não existe no Microsoft Teams"}},"webex":{"title":"Webex Teams","param":{"name":{"title":"Nome","help":"Um nome de espaço do Webex, exemplo: discourse"},"webhook_url":{"title":"URL do Webhook","help":"A URL fornecida ao criar um novo webhook de entrada"}},"errors":{"invalid_channel":"Este canal não existe no Webex"}},"google":{"title":"Bate-papo do Google","param":{"name":{"title":"Nome","help":"Um nome para o canal (exibido apenas na interface de administração do Discourse)"},"webhook_url":{"title":"URL do Webhook","help":"A URL fornecida quando você cria um novo webhook de entrada"}}}}},"explorer":{"or":"ou","admins_only":"O explorador de dados só está disponível para administradores.","allow_groups":"Permitir que grupos acessem esta consulta","title":"Explorador de Dados","create":"Criar Nova","create_placeholder":"Nome da consulta…","description_placeholder":"Insira uma descrição aqui","import":{"label":"Importar","modal":"Importar Uma Consulta","unparseable_json":"Arquivo JSON não analisável","wrong_json":"Arquivo JSON incorreto. Um arquivo JSON deve conter um objeto \"consulta\", que deve ter pelo menos a propriedade \"sql\""},"help":{"label":"Ajuda","modal_title":"Ajuda do Explorador de Dados","auto_resolution":"\u003ch2\u003eResolução de entidade automática\u003c/h2\u003e \u003cp\u003eQuando a sua consulta retorna uma id de entidade, o Explorador de Dados pode substituí-la automaticamente pelo nome da entidade e outras informações úteis nos resultados da consulta. A resolução automática está disponível para \u003ci\u003e\u003cb\u003euser_id\u003c/b\u003e\u003c/i\u003e, \u003ci\u003e\u003cb\u003egroup_id\u003c/b\u003e\u003c/i\u003e, \u003ci\u003e\u003cb\u003etopic_id\u003c/b\u003e\u003c/i\u003e, \u003ci\u003e\u003cb\u003ecategory_id\u003c/b\u003e\u003c/i\u003e e \u003ci\u003e\u003cb\u003ebadge_id\u003c/b\u003e\u003c/i\u003e. Para tentar isso, execute esta consulta:\u003c/p\u003e \u003cpre\u003e\u003ccode\u003eSELECT user_id\nFROM posts\u003c/code\u003e\u003c/pre\u003e","custom_params":"\u003ch2\u003eCriação de parâmetros personalizados/h2\u003e \u003cp\u003ePara criar parâmetros personalizados para suas consultas, insira isto no topo da sua consulta e siga o formato:\u003c/p\u003e \u003cpre\u003e\u003ccode\u003e-- [params]\n-- int :num = 1\n\nSELECT :num\u003c/code\u003e\u003c/pre\u003e \u003cp\u003e\u003ci\u003eObservação: a primeira linha com [params] é necessária, junto com dois traços antes dela e de cada parâmetro personalizado que você deseja criar.\u003c/i\u003e\u003c/p\u003e","default_values":"\u003ch3\u003eValores padrão\u003c/h3\u003e \u003cp\u003eVocê pode declarar parâmetros com ou sem valores padrão. Valores padrão serão exibidos em um campo de texto abaixo do editor de consultas, que pode ser editado conforme necessário. Parâmetros declarados sem valores padrão ainda irão gerar um campo de texto, mas estarão vazios e destacados em vermelho.\u003c/p\u003e \u003cpre\u003e\u003ccode\u003e-- [params]\n-- text :username = my_username\n-- int :age\u003c/code\u003e\u003c/pre\u003e","data_types":"\u003ch3\u003eTipos de dados\u003c/h3\u003e \u003cp\u003eEstes são os tipos de dados comuns que você pode usar:\u003c/p\u003e \u003cul\u003e \u003cli\u003e\u003cb\u003einteger\u003c/b\u003e - Integer assinado de quatro bytes\u003c/li\u003e \u003cli\u003e\u003cb\u003etext\u003c/b\u003e - cadeia de caracteres de tamanho variado\u003c/li\u003e \u003cli\u003e\u003cb\u003eboolean\u003c/b\u003e – verdadeiro/falso\u003c/li\u003e \u003cli\u003e\u003cb\u003edata\u003c/b\u003e - data do calendário (ano, mês, dia)\u003c/li\u003e \u003c/ul\u003e \u003cp\u003ePara mais informações sobre tipos de dados, acesse \u003ca href='http://www.postgresql.org/docs/9.3/static/datatype.html#DATATYPE-TABLE' target='_blank'\u003eeste site\u003c/a\u003e.\u003c/p\u003e"},"schema":{"title":"Esquema de Banco de Dados","filter":"Pesquisar…","sensitive":"O conteúdo desta coluna pode conter informações particularmente sensíveis ou privadas. Por favor, tenha cuidado ao usar o conteúdo desta coluna."},"types":{"bool":{"true":"Sim","false":"Não","null_":"Nulo"}},"export":"Exportar","view_json":"Visualizar JSON","save":"Salvar Mudanças","saverun":"Salvar Mudanças e Executar","run":"Executar","undo":"Descartar Mudanças","edit":"Editar","delete":"Apagar","recover":"Desfazer Exclusão da Consulta","download_json":"JSON","download_csv":"CSV","show_table":"Tabela","show_graph":"Gráfico","others_dirty":"Uma consulta tem alterações não salvas que serão perdidas se você sair desta página.","run_time":"Consulta concluída em %{value} ms.","result_count":{"one":"%{count} resultado.","other":"%{count} resultados."},"max_result_count":{"one":"Mostrando melhor %{count} resultado.","other":"Mostrando melhores %{count} resultados."},"query_name":"Consulta","query_groups":"Grupos","link":"Link para","report_name":"Reportar","query_description":"Descrição","query_time":"Última execução","query_user":"Criado por","column":"Coluna %{number}","explain_label":"Incluir plano de consulta?","save_params":"Definir Padrões","reset_params":"Redefinir","search_placeholder":"Pesquisar...","no_search_results":"Desculpe, não conseguimos encontrar nenhum resultado contendo o seu texto."},"group":{"reports":"Relatórios"},"details":{"title":"Ocultar detalhes"},"docs":{"title":"Documentos","column_titles":{"topic":"Tópico","activity":"Atividade"},"no_docs":{"title":"Nenhum tópico do Docs ainda","body":"O Docs fornece uma ótima maneira de manter uma coleção de documentação para referência compartilhada.","to_include_topic_in_docs":"Para incluir um tópico no Docs, use uma etiqueta ou categoria especial","setup_the_plugin":"Para começar a usar o Docs, \u003ca href='%{settingsUrl}'\u003edefina marcadores e categorias de documentos\u003c/a\u003e."},"categories":"Categorias","categories_filter_placeholder":"Filtrar categorias","tags_filter_placeholder":"Filtrar etiquetas","tags":"Etiquetas","search":{"results":{"one":"%{count} resultado encontrado","other":"%{count} resultados encontrados"},"placeholder":"Pesquisar por tópicos","clear":"Limpar","tip_description":"Pesquisar em documentos"},"topic":{"back":"Voltar","navigate_to_topic":"Veja a discussão neste tópico"},"filter_button":"Filtros","filter_solved":"Tópico resolvido?"},"gamification_score":"Saudações","gamification":{"score":"Saudações","you":"Você","leaderboard":{"title":"Tabelas de classificação","info":"Como isso funciona?","link_to_settings":"Definições","refresh":"Atualizar","modal":{"title":"Como funciona a tabela de classificação?","text":"Os pontos são concedidos por se envolver com a comunidade, como visitar, curtir e postar. Sua pontuação é atualizada dentro de poucos minutos. Então, seja útil, ativo(a) e solidário(a), e suba na hierarquia!"},"name":"Nome","name_placeholder":"nome...","new":"Adicionar novo","cta":"Faça sua primeira tabela de classificação","none":"Nenhuma tabela de classificação foi criada ainda.","confirm_destroy":"Tem certeza de que deseja excluir essa tabela de classificação?","date":{"range":"Intervalo de datas De / Até","helper":"Se as datas forem deixadas em branco, a tabela de classificação mostrará as pontuações obtidas sem restrições de tempo."},"visible_to_groups":"Visível para grupos","visible_to_groups_help":"Apenas os usuários desses grupos poderão visualizar a tabela de classificação. Deixe vazio para permitir que todos visualizem.","included_groups":"Grupos incluídos","included_groups_help":"Apenas os usuários desses grupos serão incluídos na tabela de classificação. Deixe vazio para listar todos.","excluded_groups":"Grupos excluídos","excluded_groups_help":"Impeça que os usuários desses grupos sejam incluídos na tabela de classificação. Deixe em branco para listar todos.","default_period":"Período padrão","default_period_help":"Defina o período de tempo padrão a ser exibido para este placar.","period":{"all_time":"Desde o início","yearly":"Todo ano","quarterly":"Todo semestre","monthly":"Todo mês","weekly":"A cada semana","daily":"A cada dia"},"rank":"Classificação"},"create":"Criar","cancel":"Cancelar","close":"Fechar","delete":"Excluir","edit":"Editar","back":"Voltar","save":"Salvar","apply":"Aplicar","recalculate":"Recalcular pontuação","recalculating":"Recalculando pontuação...","completed":"Pronto! A pontuação foi recalculada com êxito.","update_scores_help":"Atualizar a pontuação de todos os placares","update_range":{"last_10_days":"Últimos 10 dias","last_30_days":"Últimos 30 dias","last_90_days":"Últimos 90 dias","last_year":"Ano passado","all_time":"Desde o início","custom_date_range":"Intervalo personalizado"},"custom_range_from":"De","daily_update_scores_availability":{"one":"%{count} recálculo diário restante","other":"%{count} recálculo(s) diário(s) restante(s)"},"admin":{"title":"Gamificação","name":"Nome","period":"Período"}},"discourse_local_dates":{"relative_dates":{"today":"Hoje %{time}","tomorrow":"Amanhã %{time}","yesterday":"Ontem %{time}","countdown":{"passed":"a data já passou"}},"title":"Inserir data/hora","create":{"form":{"insert":"Inserir","advanced_mode":"Modo avançado","simple_mode":"Modo simples","format_description":"Formato usado para exibir a dada ao(à) usuário(a). Use Z para exibir o resultado e zz para o nome do fuso horário.","timezones_title":"Fusos horários para exibir","timezones_description":"Os fusos horários serão usados ​​para exibir datas na pré-visualização e no fallback.","recurring_title":"Recorrência","recurring_description":"Defina a recorrência de um evento. Você também pode editar manualmente a opção recorrente gerada pelo formulário e usar uma das seguintes chaves em inglês: years, quarters, months, weeks, days, hours, minutes, seconds, milliseconds.","recurring_none":"Sem recorrência","invalid_date":"Data inválida, verifique se a data e a hora estão corretas","date_title":"Data","time_title":"Hora","format_title":"Formato de data","timezone":"Fuso horário","until":"Até…","current_timezone":"Fuso horário atual:","recurring":{"every_day":"Todos os dias","every_week":"Todas as semanas","every_two_weeks":"A cada duas semanas","every_month":"A cada mês","every_two_months":"A cada dois meses","every_three_months":"A cada tres meses","every_six_months":"A cada seis meses","every_year":"Todos os anos"}}},"default_title":"Evento %{site_name}"},"discourse_narrative_bot":{"welcome_post_type":{"new_user_track":"Iniciar o tutorial de novo(a) usuário(a) para todos(as) os(as) usuários(as) novos(as)","welcome_message":"Enviar uma mensagem de boas-vindas com um guia de início rápido para todos os(as) usuários(as) novos(as)"}},"patreon":{"title":"Patreon","header":{"rules":"Filtros"},"group":"Grupo","rewards":"Recompensas","filter":"Filtro","help_text":"Você pode sincronizar um grupo do Discourse com um ou mais níveis de recompensa do Patreon.","last_synced":"Último Sincronizado","edit":"Editar","delete":"Excluir","save":"Salvar","update_data":"Atualizar dados do Patreon e sincronizar grupos","refresh_page":"Novos dados foram baixados da API do Patreon. Atualize a página.","select_group":"Selecione um grupo","field":{"id":"Id","email":"E-mail","amount_cents":"Valor (em centavos)","rewards":"Recompensas","declined_since":"Compromisso Recusado Desde","more_details":{"label":"Pagamentos e mais detalhes","help_text":{"email_available":"Vá para o canto inferior direito da página para ver este histórico de compromissos do Patreon.","email_not_available":"Selecione o membro Patreon e vá para o canto inferior direito da página para ver o histórico de compromissos."}}},"donation_prompt":{"body":"\u003ch1\u003eOlá, leitor!\u003c/h1\u003e\n\n\u003cp\u003eVocê gosta do nosso site? Gostaria de contribuir para uma boa causa?\u003c/p\u003e\n\n\u003cp\u003e\n  Se achar nosso site útil e gosta da comunidade que criamos, nós adoraríamos que fizesse uma doação para nosso site.\n  Doações mantêm nossos serviços funcionando sem problemas e garantem que nossa comunidade estará operacional por muitos anos.\n  Cada dólar conta e será bem utilizado.\n\u003c/p\u003e\n\n\u003cp\u003eObrigado pelo seu apoio!\u003cp\u003e\n\n\u003cp\u003e\n  \u003ca class=\"btn btn-large btn-danger\" href=\"%{campaignUrl}\"\u003eTorne-se um(a) Patrono(a)\u003c/a\u003e\n\u003c/p\u003e\n"}},"discourse_policy":{"title":"Política","accepted_tooltip":"Usuários(as) que aceitaram esta política","not_accepted_tooltip":"Usuários(as) que não aceitaram esta política","accept_policy":"Aceitar política","revoke_policy":"Revogar política","edit_reason":"Configurações de política foram modificadas","no_possible_users":"Esta política não tem usuários possíveis","accept_policy_template":"Aceito esta política","builder":{"title":"Política","attach":"Criar política","save":"Salvar alterações","insert":"Inserir","errors":{"group":"O grupo é obrigatório","version":"A versão é obrigatória"},"groups":{"label":"Grupos","description":"Os grupos associados a esta política"},"version":{"label":"Versão","description":"A versão da política, promover a versão obrigará as pessoas a aceitá-la novamente"},"renew":{"label":"Renovar","description":"Renovar a política a cada x dias"},"renew-start":{"label":"Início da renovação","description":"Quando a política deve ser renovada"},"reminder":{"label":"Lembrete","description":"Frequência com que a notificação de lembrete para aceitar a política deve ser enviada"},"accept":{"label":"Aceitar","description":"Texto usado no botão de aceitar"},"revoke":{"label":"Revogar","description":"Texto usado no botão de revogar"},"private":{"label":"Privado?","description":"Manter o status da política privado para administradores(as)"},"send-email":{"label":"Enviar e-mail?","description":"Notifique os usuários da nova política por e-mail"}},"preferences":{"title":"Políticas","policy_emails":{"always_description":"Só enviaremos um e-mail se você também tiver optado por receber novos e-mails de atividades.","away_description":"Só enviaremos um e-mail se não o tivermos visto nos últimos 10 minutos quando o status da política for alterado e somente se você também tiver optado por receber novos e-mails de atividades.","label":"Envie um e-mail para mim quando uma política precisar da minha revisão","email_frequency_options":{"never":"nunca","when_away":"somente quando estiver longe","always":"sempre"}}}},"vote":{"already_voted":"Você só pode votar uma vez por pergunta.","user_over_limit":"Você não pode exceder o número de votos para seu nível de confiança.","one_vote_per_post":"Você só pode votar uma vez em cada postagem."},"last_answer_lowercase":"última resposta","answer_lowercase":{"one":"resposta","other":"respostas"},"post_voting":{"post":{"post_voting_comment":{"composer":{"too_short":{"one":"Insira pelo menos %{count} caractere","other":"Insira pelo menos %{count} caracteres"},"length_ok":{"one":"%{count} caractere restante...","other":"%{count} caracteres restantes..."},"too_long":{"one":"O comentário não pode ter mais do que %{count} caractere","other":"O comentário não pode ter mais do que %{count} caracteres"}},"submit":"Adicione um comentário","edit":"editar","cancel":"cancelar","add":"Adicione um comentário","show":{"one":"Mostrar mais %{count} comentário","other":"Mostrar mais %{count} comentários"},"delete":{"confirm":"Tem certeza de que deseja excluir este comentário?"},"user":{"deleted":"(usuário(a) excluído(a))"},"reviewables":{"comment_already_handled":"Agradecemos, mas já analisamos este comentário e determinamos que não precisa ser sinalizado novamente.","actions":{"agree":{"title":"Concordo..."},"agree_and_keep_comment":{"title":"Manter comentário","description":"Concorde com o sinalizador e mantenha o comentário inalterado."},"agree_and_keep_deleted":{"title":"Manter comentário excluído","description":"Concorde com o sinalizador e mantenha o comentário excluído."},"agree_and_suspend":{"title":"Suspender usuário(s)","description":"Concorde com o sinalizador e suspenda o(a) usuário(a)."},"agree_and_silence":{"title":"Silenciar usuário(a)","description":"Concorde com o sinalizador e silencie o(a) usuário(a)."},"agree_and_restore":{"title":"Restaurar comentário","description":"Restaure o comentário para que os(as) usuários(as) possam ver."},"agree_and_delete":{"title":"Excluir comentário","description":"Exclua o comentário para que os(as) usuários(as) não possam ver."},"delete_and_agree":{"title":"Ignorar sinalizador e excluir comentário","description":"Ignore o sinalizador ao removê-lo da fila e exclua o comentário."},"disagree_and_restore":{"title":"Discordar e restaurar comentário","description":"Restaure o comentário para que todos(as) usuários(as) possam ver."},"disagree":{"title":"Discordar"},"ignore":{"title":"Não fazer nada","description":"Ignore o sinalizador ao removê-lo da fila sem realizar nenhuma ação."}},"transcript":{"view":"Ver transcrição de comentários anteriores"}}}},"topic":{"answer":{"label":"Resposta","help":"começar a escrever uma resposta"},"sort_by":"Ordenar por","votes":"Votos","activity":"Atividade","answer_count":{"one":"%{count} resposta","other":"%{count} respostas"}}},"presence":{"replying":{"one":"respondendo","other":"respondendo"},"editing":{"one":"editando","other":"editando"},"replying_to_topic":{"one":"respondendo","other":"respondendo"}},"discourse_reactions":{"reactions_title":"Reações","state_panel":{"more_users":"e mais %{count}..."},"reaction":{"forbidden":"Essa reação foi criada há muito tempo. Ela não pode mais ser modificada ou removida."},"picker":{"react_with":"Reaja a esta postagem com: %{reaction}","cant_remove_reaction":"Você não pode mais remover sua reação","remove_reaction":"Remova esta %{reaction} reação"},"main_reaction":{"add":"Curta esta postagem","remove":"Remova essa curtida","cant_remove":"Você não pode mais remover sua curtida","unauthenticated":"Cadastre-se ou faça login para curtir esta postagem"}},"solutions":"Soluções","solved":{"title":"Resolvido","allow_accepted_answers":"Permitir que o(a) proprietário(a) do tópico e a equipe marquem uma resposta como a solução","solved_topics_auto_close_hours":"Fechar tópico automaticamente (n) horas após a última resposta quando o tópico tiver sido marcado como resolvido.","accept_answer":"Selecione se esta resposta resolve o problema","accepted_description":"Esta é a solução aceita para este tópico","has_no_accepted_answer":"Este tópico não tem solução","unaccept_answer":"Desmarque se esta resposta não resolve mais o problema","accepted_answer":"Solução","solution":"Solução","solution_summary":{"one":"solução","other":"soluções"},"accepted_html":"%{icon} resolvido \u003cspan class='by'\u003epor \u003ca href data-user-card='%{username_lower}'\u003e%{username}\u003c/a\u003e\u003c/span\u003e em \u003ca href='%{post_path}' class='back'\u003epostagem #%{post_number}\u003c/a\u003e","accepted_notification":"\u003cp\u003e\u003cspan\u003e%{username}\u003c/span\u003e %{description}\u003c/p\u003e","topic_status_filter":{"all":"tudo","solved":"solucionados","unsolved":"não solucionados"},"no_solved_topics_title":"Você ainda não solucionou nenhum tópico","no_solved_topics_title_others":"%{username} ainda não respondeu a nenhum tópico","no_solved_topics_body":"Quando você fornecer uma resposta útil a um tópico, ela poderá ser selecionada como uma solução pelo(a) proprietário(a) ou equipe do tópico.","no_answer":{"title":"Sua pergunta foi respondida?","description":"Destaque a resposta e ajude as outras pessoas ao usar o botão de solução abaixo para responder corretamente."},"notification":{"title":"sua postagem foi marcada como uma solução"}},"discourse_subscriptions":{"title":"Assinaturas do Discourse","admin_navigation":"Assinaturas","optional":"Opcional","navigation":{"billing":"Cobrança","payments":"Pagamentos","subscriptions":"Assinaturas","subscribe":"Assinar","user_activity":{"payments":"Pagamentos"}},"campaign":{"title":"Apoie-nos","body":"Precisamos da sua ajuda para manter esta comunidade no ar!","success_title":"Sucesso!","success_body":"Obrigado por ajudar a manter esta comunidade no ar!","subscribers":"Assinantes","goal_comparison":"\u003cstrong\u003e%{current}\u003c/strong\u003e de \u003cstrong\u003e%{goal}\u003c/strong\u003e","raised":"Recebido(s)","button":"Apoio","recent_contributors":"Contribuidores(as) recentes","goal":"Atingimos a nossa meta","one_click_campaign":"Criar automaticamente campanha de apoio","refresh_campaign":"Renovar dados da campanha","refresh_page":"Agora os dados da campanha estão sendo sincronizados com o Stripe em segundo plano. Aguarde um pouco e atualize a página para carregar as informações mais recentes.","supporter":"Apoiador(a)","supporters":"Apoiadores(as)","confirm_creation_title":"Deseja criar automaticamente uma campanha para sua comunidade?","confirm_creation":"\u003cp\u003eAo, continuar, você criará:\u003c/p\u003e\n\n\u003cul\u003e\n\u003cli\u003eUm grupo para recompensar seus apoiadores com um título personalizado e um estilo de avatar\u003c/li\u003e\n\u003cli\u003eUm produto Stripe com preços predefinidos (mensal e anual) que seus usuários podem comprar para ter compatibilidade com o seu site.\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003eDeseja continuar?\u003c/p\u003e","created":"Sua campanha de um clique foi criada e já está pronta! Redirecionando para configurações da campanha."},"one_time_payment":"Pagamento Único","plans":{"purchase":"Adquirir uma assinatura","select":"Selecione um plano de assinatura","interval":{"adverb":{"day":"Diário","week":"Semanalmente","month":"Mensalmente","year":"Anualmente"}},"payment_button":"Assinar","success":"Obrigado! Sua assinatura foi criada.","incomplete":"O pagamento está incompleto. Sua assinatura será atualizada quando o pagamento for aceito.","validate":{"payment_options":{"required":"Por favor selecione um plano de assinatura."}}},"user":{"payments":{"id":"ID do Pagamento","amount":"Quantia","created_at":"Criado"},"payments_help":"Não existem pagamentos","plans":{"rate":"Taxa","product":"Nome"},"subscriptions_help":"Você não possui assinaturas ativas.","subscriptions":{"id":"ID da Assinatura","status":"Status","discounted":"Descontado","renews":"Renovada","update_card":{"heading":"Atualizar Cartão para assinatura: %{sub_id}","single":"Atualizar"},"created_at":"Criada","cancel":"cancelar","cancelled":"cancelado","operations":{"destroy":{"confirm":"Tem certeza que deseja cancelar essa assinatura?"}}}},"subscribe":{"title":"Assinar","view_past":"Ver compras anteriores","no_products":"No momento não existem produtos disponíveis.","unauthenticated":"Entre ou crie uma conta para se inscrever.","invalid_coupon":"Você inseriu um código de cupom inválido. Tente novamente.","invalid_cardholder_name":"Requer o nome do(a) titular do cartão.","invalid_cardholder_country":"Requer o país.","invalid_cardholder_state":"Requer o estado.","invalid_cardholder_province":"Requer a província.","card":{"title":"Pagamento"},"customer":{"title":"Informações do(a) consumidor(a)"},"promo_code":"Cupom","buttons":{"subscribe":"Fazer assinatura"},"purchased":"Comprado","go_to_billing":"Vá para o Faturamento","already_purchased":"Muito obrigado por ter comprado este produto!","cardholder_name":"Nome do(a) titular do cartão","cardholder_address":{"line1":"Endereço da rua","city":"Cidade","state":"Estado","province":"Província","country":"País","postal_code":"Código postal"},"countries":{"AF":"Afeganistão","AX":"Ilhas Aland","AL":"Albânia","DZ":"Argélia","AS":"Samoa Americana","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antártica","AG":"Antigua e Barbuda","AR":"Argentina","AM":"Armênia","AW":"Aruba","AU":"Austrália","AT":"Áustria","AZ":"Azerbaijão","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Bielorrússia","BE":"Bélgica","BZ":"Belize","BJ":"Benin","BM":"Bermudas","BT":"Butão","BO":"Bolívia","BQ":"Bonaire, Sint Eustatius e Saba","BA":"Bósnia e Herzegovina","BW":"Botswana","BV":"Ilha Bouvet","BR":"Brasil","IO":"Território Britânico do Oceano Índico","BN":"Brunei Darussalam","BG":"Bulgária","BF":"Burkina Faso","BI":"Burundi","KH":"Camboja","CM":"Camarões","CA":"Canadá","CV":"Cabo Verde","KY":"Ilhas Cayman","CF":"República Centro-Africana","TD":"Chad","CL":"Chile","CN":"China","CX":"Ilhas do Natal","CC":"Ilhas Cocos (Keeling)","CO":"Colômbia","KM":"Comores","CG":"Congo","CD":"República Democrática do Congo","CK":"Ilhas Cook","CR":"Costa Rica","CI":"Costa do Marfim","HR":"Croácia","CU":"Cuba","CW":"Curaçao","CY":"Chipre","CZ":"República Tcheca","DK":"Dinamarca","DJ":"Djibuti","DM":"Dominica","DO":"República Dominicana","EC":"Equador","EG":"Egito","SV":"El Salvador","GQ":"Guiné Equatorial","ER":"Eritreia","EE":"Estônia","ET":"Etiópia","FK":"Ilhas Falkland (Malvinas)","FO":"Ilhas Faroé","FJ":"Fiji","FI":"Finlândia","FR":"França","GF":"Guiana Francesa","PF":"Polinésia Francesa","TF":"Territórios Franceses do Sul","GA":"Gabão","GM":"Gâmbia","GE":"Geórgia","DE":"Alemanha","GH":"Gana","GI":"Gibraltar","GR":"Grécia","GL":"Groelândia","GD":"Granada","GP":"Guadalupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guiné","GW":"Guiné-Bissau","GY":"Guiana","HT":"Haiti","HM":"Ilha Heard e Ilhas McDonald","VA":"Santa Sé (Estado da Cidade do Vaticano)","HN":"Honduras","HK":"Hong Kong","HU":"Hungria","IS":"Islândia","IN":"Índia","ID":"Indonésia","IR":"República Islâmica do Irã","IQ":"Iraque","IE":"Irlanda","IM":"Ilha de Man","IL":"Israel","IT":"Itália","JM":"Jamaica","JP":"Japão","JE":"Jérsei","JO":"Jordânia","KZ":"Cazaquistão","KE":"Quênia","KI":"Kiribati","KP":"República Popular Democrática da Coreia","KR":"República da Coreia","KW":"Kuwait","KG":"Quirguistão","LA":"República Democrática Popular do Laos","LV":"Letônia","LB":"Líbano","LS":"Lesoto","LR":"Libéria","LY":"Líbia","LI":"Liechtenstein","LT":"Lituânia","LU":"Luxemburgo","MO":"Macau","MK":"Antiga República Iugoslava da Macedônia","MG":"Madagascar","MW":"Malawi","MY":"Malásia","MV":"Maldivas","ML":"Mali","MT":"Malta","MH":"Ilhas Marshall","MQ":"Martinica","MR":"Mauritânia","MU":"Maurícia","YT":"Mayotte","MX":"México","FM":"Estados Federados da Micronésia","MD":"República da Moldávia","MC":"Mônaco","MN":"Mongólia","ME":"Montenegro","MS":"Montserrat","MA":"Marrocos","MZ":"Moçambique","MM":"Mianmar","NA":"Namíbia","NR":"Nauru","NP":"Nepal","NL":"Holanda","NC":"Nova Caledônia","NZ":"Nova Zelândia","NI":"Nicarágua","NE":"Níger","NG":"Nigéria","NU":"Niue","NF":"Ilha Norfolk","MP":"Ilhas Marianas do Norte","NO":"Noruega","OM":"Omã","PK":"Paquistão","PW":"Palau","PS":"Território Palestino","PA":"Panamá","PG":"Papua Nova Guiné","PY":"Paraguai","PE":"Perú","PH":"Filipinas","PN":"Pitcairn","PL":"Polônia","PT":"Portugal","PR":"Porto Rico","QA":"Catar","RE":"Reunião","RO":"Romênia","RU":"Federação Russa","RW":"Ruanda","BL":"São Bartolomeu","SH":"Santa Helena, Ascensão e Tristão da Cunha","KN":"São Cristóvão e Nevis","LC":"Santa Lúcia","MF":"Saint Martin (parte francesa)","PM":"Saint Pierre e Miquelon","VC":"São Vicente e Granadinas","WS":"Samoa","SM":"San Marino","ST":"São Tomé e Príncipe","SA":"Arábia Saudita","SN":"Senegal","RS":"Sérvia","SC":"Seicheles","SL":"Serra Leoa","SG":"Cingapura","SX":"São Martinho (parte holandesa)","SK":"Eslováquia","SI":"Eslovênia","SB":"Ilhas Salomão","SO":"Somália","ZA":"África do Sul","GS":"Ilhas Geórgia do Sul e Sandwich do Sul","SS":"Sudão do Sul","ES":"Espanha","LK":"Sri Lanka","SD":"Sudão","SR":"Suriname","SJ":"Svalbard e Jan Mayen","SZ":"Suazilândia","SE":"Suécia","CH":"Suíça","SY":"República Árabe da Síria","TW":"Província da China de Taiwan","TJ":"Tajiquistão","TZ":"República Unida da Tanzânia","TH":"Tailândia","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Reino de Tonga","TT":"Trinidad e Tobago","TN":"Tunísia","TR":"Turquia","TM":"Turquemenistão","TC":"Ilhas Turks e Caicos","TV":"Tuvalu","UG":"Uganda","UA":"Ucrânia","AE":"Emirados Árabes Unidos","GB":"Reino Unido","US":"Estados Unidos","UM":"Ilhas Menores Distantes dos Estados Unidos","UY":"Uruguai","UZ":"Uzbequistão","VU":"Vanuatu","VE":"República Bolivariana da Venezuela","VN":"Vietnã","VG":"Ilhas Virgens Britânicas","VI":"Ilhas Virgens, EUA","WF":"Wallis e Futuna","EH":"Saara Ocidental","YE":"Iémen","ZM":"Zâmbia","ZW":"Zimbábue"}},"billing":{"name":"Nome completo","email":"E-mail","phone":"Número de telefone"},"confirmation":{"amount":"Quantia","last4":"Número do cartão"},"buttons":{"make_payment":"Fazer o pagamento","confirm_payment":"Confirmar pagamento","success":"Voltar"},"admin":{"unconfigured":"O Stripe não está configurado corretamente. Acesse o Meta do Discourse para mais informações.","on_meta":"Assinaturas do Discourse no Meta","dashboard":{"title":"Painel de Controle","table":{"head":{"user":"Usuário(a)","payment_intent":"ID do Pagamento","receipt_email":"E-mail do Recibo","amount":"Quantia"}}},"products":{"title":"Produtos","operations":{"create":"Criar Novo Produto","update":"Atualizar Produto","new":"Novo Produto","destroy":{"confirm":"Você tem certeza que deseja eliminar este produto?"}},"product":{"product_id":"ID do Produto","name":"Nome do Produto","statement_descriptor":"Descrição da Declaração","statement_descriptor_help":"Informação adicional sobre o produto que aparecerá no extrato do cartão de crédito do(a) cliente.","plan_help":"Crie um plano de preços para os(as) clientes assinarem este produto.","description":"Descrição","description_help":"Isso descreve o seu produto de assinatura.","repurchaseable":"É possível comprar novamente?","repurchase_help":"Permitir que produtos e planos associados sejam comprados várias vezes","active":"Ativos","active_help":"Desative isso até que seu produto esteja pronto para os(as) consumidores(as).","created_at":"Criado","updated_at":"Atualizado"},"product_help":"Antes que os(as) clientes possam fazer assinatura no seu site, é preciso criar pelo menos um produto e um plano associado."},"plans":{"title":"Preços dos planos","operations":{"add":"Adicionar Novo Plano","create":"Criar Plano","update":"Atualizar Plano","create_help":"Após criar os preços dos planos, é possível atualizar apenas seu apelido, período de teste e grupo de usuários(as).","new":"Novo Plano","destroy":{"confirm":"Tem certeza que deseja excluir este plano?"}},"plan":{"nickname":"Apelido do plano","nickname_help":"Isso não será visível para os(as) clientes, porém ajudará a encontrar esse plano depois.","plan_id":"ID do Plano","product":"Produto","interval":"Período de Cobrança","amount":"Quantia","trial":"Período (em dias) da avaliação","trial_help":"As assinaturas para esse plano iniciarão automaticamente com a avaliação gratuita com essa duração.","group":"Grupo de Usuários(as)","group_help":"Esse é o grupo de usuários(as) em que o cliente será adicionado ao criar a assinatura.","active":"Ativos","created_at":"Criado","recurring":"Plano recorrente?"}},"coupons":{"title":"Cupons","code":"Código promocional","discount":"Desconto","times_redeemed":"Vezes Resgatadas","active":"Ativo?","actions":"Ações","create":"Criar cupom","promo_code":"Código promocional (não diferencia maiúsculas de minúsculas)"},"subscriptions":{"title":"Assinaturas","subscription":{"user":"Usuário(a)","subscription_id":"ID de Assinatura","customer":"Consumidor(a)","product":"Produto","plan":"Plano","status":"Status","created_at":"Criado"}},"ask_refund":"Reembolsar o último pagamento efetuado pelo(a) cliente?","canceled":"A assinatura foi cancelada."}},"templates":{"filter_hint":"Filtrar pelo título...","insert_template":"Inserir modelo","close_templates":"Fechar o seletor de modelos","copy":"Copiar modelo","new_topic":"Novo tópico do modelo"},"topic_voting":{"title":"Votação do tópico","reached_limit":"Você está sem votos, remova um voto existente!","list_votes":"Mostrar seus votos","votes_nav_help":"tópicos com a maioria dos votos","voted":"Você votou neste tópico","allow_topic_voting":"Permitir que usuários(as) votem em tópicos desta categoria","vote_title":"Votar","vote_title_plural":"Votos","voted_title":"Votou","voting_closed_title":"Fechado","voting_limit":"Limite","votes_left":{"one":"Você tem %{count} voto restante, veja \u003ca href='%{path}'\u003eseus votos\u003c/a\u003e.","other":"Você tem %{count} votos restantes, veja \u003ca href='%{path}'\u003eseus votos\u003c/a\u003e."},"votes_left_button_title":{"one":"Você tem %{count} voto restante.","other":"Você tem %{count} votos restantes."},"votes":{"one":"%{count} voto","other":"%{count} votos"},"anonymous_button":{"one":"Votar","other":"Votos"},"remove_vote":"Remover voto","no_votes_title_self":"Você ainda não votou em nenhum tópico","no_votes_title_others":"%{username} ainda não votou em nenhum tópico"},"translator":{"view_translation":"Exibir tradução","hide_translation":"Ocultar tradução","translated_from":"Tradução de %{language} feita por %{translator}"},"user_notes":{"title":"Anotações de usuário(a)","attach":"Adicionar anotação de usuário(a)","remove":"Remover anotação de usuário(a)","show":"Anotações de usuário(a) (%{count})","delete_confirm":"Tem certeza de que deseja excluir esta anotação de usuário(a)?","show_post":"Mostrar Postagem"},"zendesk":{"credentials_not_setup":"Você não configurou suas credenciais da Zendesk.","url_not_set":"Sua URL da Zendesk ainda não foi configurada.","general_error":"Algo deu errado."},"poll":{"voters":{"one":"votante","other":"votantes"},"total_votes":{"one":"voto no total","other":"votos no total"},"average_rating":"Classificação média: \u003cstrong\u003e%{average}\u003c/strong\u003e.","public":{"title":"Votos são \u003cstrong\u003epúblicos\u003c/strong\u003e."},"results":{"groups":{"title":"Você precisa ser membro de %{groups} para votar nesta enquete."},"vote":{"title":"Resultados serão mostrados ao \u003cstrong\u003evotar\u003c/strong\u003e."},"closed":{"title":"Resultados serão mostrados quando a votação \u003cstrong\u003eterminar\u003c/strong\u003e."},"staff":{"title":"Resultados são mostrados apenas para membros da \u003cstrong\u003eequipe\u003c/strong\u003e."}},"multiple":{"help":{"at_least_min_options":{"one":"Escolha pelo menos \u003cstrong\u003e%{count} opção\u003c/strong\u003e.","other":"Escolha pelo menos \u003cstrong\u003e%{count} opções\u003c/strong\u003e."},"up_to_max_options":{"one":"Escolha até \u003cstrong\u003e%{count} opção\u003c/strong\u003e.","other":"Escolha até \u003cstrong\u003e%{count} opções\u003c/strong\u003e."},"x_options":{"one":"Escolha \u003cstrong\u003e%{count} opção\u003c/strong\u003e.","other":"Escolha \u003cstrong\u003e%{count} opções\u003c/strong\u003e."},"between_min_and_max_options":"Escolha entre \u003cstrong\u003e%{min} e %{max} opções\u003c/strong\u003e."}},"cast-votes":{"title":"Participe da enquete","label":"Votar agora!"},"show-results":{"title":"Mostrar o resultado da enquete","label":"Resultados"},"remove-vote":{"title":"Remover seu voto","label":"Desfazer votação"},"hide-results":{"title":"Voltar para os seus votos","label":"Votar"},"group-results":{"title":"Agrupar votos por campo de usuário(a)","label":"Mostrar divisão"},"export-results":{"title":"Exportar os resultados da enquete","label":"Exportar"},"open":{"title":"Abrir a enquete","label":"Abrir","confirm":"Você tem certeza de que deseja abrir esta enquete?"},"close":{"title":"Fechar enquete","label":"Fechar","confirm":"Você tem certeza de que deseja fechar esta enquete?"},"automatic_close":{"closes_in":"Fecha em \u003cstrong\u003e%{timeLeft}\u003c/strong\u003e.","age":"Fechou \u003cstrong\u003e%{age}\u003c/strong\u003e"},"breakdown":{"title":"Resultados da enquete","votes":"%{count} votos","breakdown":"Divisão","percentage":"Porcentagem","count":"Contagem"},"options":{"label":"Opções"},"error_while_toggling_status":"Desculpe, houve um erro ao mudar o status desta enquete.","error_while_casting_votes":"Desculpe, houve um erro ao registrar os seus votos.","error_while_fetching_voters":"Desculpe, houve um erro ao exibir os votantes.","error_while_exporting_results":"Desculpe, houve um erro ao exportar os resultados da pesquisa.","ui_builder":{"title":"Criar enquete","insert":"Inserir enquete","help":{"options_min_count":"Insira pelo menos uma opção.","options_max_count":"Insira no máximo %{count} opções.","invalid_min_value":"O valor mínimo deve ser pelo menos 1.","invalid_max_value":"O valor máximo deve ser pelo menos 1, mas menor ou igual ao número de opções.","invalid_values":"O valor mínimo precisa ser menor do que o valor máximo.","min_step_value":"O valor mínimo de intervalo é 1"},"poll_type":{"label":"Tipo","regular":"Única escolha","multiple":"Múltipla escolha","number":"Classificação numérica"},"poll_result":{"label":"Exibir resultados","always":"Sempre visível","vote":"Apenas após a votação","closed":"Quando a enquete for encerrada","staff":"Somente equipe"},"poll_groups":{"label":"Limitar votação a estes grupos"},"poll_chart_type":{"label":"Gráfico de resultados","bar":"Barras","pie":"Pizza"},"poll_config":{"max":"Escolhas máx.","min":"Escolhas mínimas","step":"Intervalo"},"poll_public":{"label":"Exibir quem votou"},"poll_title":{"label":"Título (opcional)"},"poll_options":{"label":"Opções (uma por linha)","add":"Adicionar opção"},"automatic_close":{"label":"Fechar automaticamente a enquete"},"show_advanced":"Exibir opções avançadas","hide_advanced":"Ocultar opções avançadas"}},"spoiler":{"title":"Dificuldador de desfoque","label":{"show":"Exibir conteúdo oculto"}}}},"en":{"js":{"dates":{"long_date_with_year":"MMM D, YYYY LT","long_date_with_year_with_linebreak":"MMM D, YYYY \u003cbr/\u003eLT"},"software_update_prompt":{"message":"We've updated this site, \u003cspan\u003eplease refresh\u003c/span\u003e to keep things working smoothly."},"critical_deprecation":{"notice":"\u003cb\u003e[Admin Notice]\u003c/b\u003e One of your themes or plugins needs updating for compatibility with upcoming Discourse core changes.","id":"(id:\u003cem\u003e%{id}\u003c/em\u003e)","linked_id":"(id:\u003ca href='%{url}' target='_blank'\u003e\u003cem\u003e%{id}\u003c/em\u003e\u003c/a\u003e)"},"bookmarks":{"also_set_reminder":"Also set a reminder?","bookmarked_success":"Bookmarked!","deleted_bookmark_success":"Bookmark deleted!","reminder_set_success":"Reminder set!","auto_delete_preference":{"after_reminder_label":"After reminding you we should...","after_reminder_checkbox":"Set this as default for all future bookmark reminders"}},"review":{"types":{"reviewable_akismet_user":{"noun":"user profile"},"reviewable_akismet_post_voting_comment":{"noun":"post voting comment"}}},"time_shortcut":{"three_days":"In three days"},"directory":{"no_results":{"body":"A list of community members showing their activity will be shown here. For now the list is empty because your community is still brand new!","extra_body":"Admins and moderators can see and manage users in \u003ca href='%{basePath}/admin/users/'\u003eUser Admin\u003c/a\u003e."}},"groups":{"default_notifications":{"modal_description":{"one":"Would you like to apply this change historically? This will change preferences for %{count} existing user.","other":"Would you like to apply this change historically? This will change preferences for %{count} existing users."}}},"categories":{"all_subcategories":"all subcategories"},"user":{"login_to_view_profile":"You must log in to view user profiles","color_scheme_default_on_all_devices":"Set default color scheme on all my devices","enable_defer":"Enable mark topics as unread","passkeys":{"last_used_date":"Last Used %{date}"},"topics_unread_when_closed":"Consider topics unread when they are closed","confirm_access":{"forgot_password":"Forgot your password?","password_reset_email_sent":"Password reset email sent.","cannot_send_password_reset_email":"Could not send password reset email."},"password":{"instructions":{"one":"At least %{count} character.","other":"At least %{count} characters."}}},"user_tips":{"skip":"Skip tips","topic_timeline":{"content":"Scroll quickly through long topics using the topic timeline."}},"assets_changed_confirm":"This site just received a software update. Get the latest version now?","login":{"linkedin_oidc":{"name":"LinkedIn","title":"Log in with LinkedIn","sr_title":"Log in with LinkedIn"},"apple":{"name":"Apple","title":"Sign in with Apple","sr_title":"Sign in with Apple","message":"Authenticating with Apple"}},"composer":{"larger_group_mentioned":{"one":"Mentioning %{group} will notify \u003ca href='%{group_link}'\u003e%{count} person\u003c/a\u003e. Are you sure?","other":"Mentioning %{group} will notify \u003ca href='%{group_link}'\u003e%{count} people\u003c/a\u003e. Are you sure?"},"create_pm":"Send Message","image_alt_text":{"title":"Add image description"},"image_scale_button":"Scale image to %{percent}%"},"notifications":{"linked_consolidated_description":{"one":"linked %{count} of your posts","other":"linked %{count} of your posts"},"titles":{"linked_consolidated":"new links"}},"search":{"advanced":{"filters":{"images":"include images"}}},"topics":{"bulk":{"defer":"Mark unread","selected_sole_category":{"one":"You have selected \u003cb\u003e%{count}\u003c/b\u003e topic from category:","other":"You have selected \u003cb\u003e%{count}\u003c/b\u003e topics from category:"},"performing":"Performing bulk operations, please wait…","completed":"Bulk operations completed successfully!"}},"topic_bulk_actions":{"close_topics":{"note":"Note"},"remove_tags":{"name":"Remove Tags"},"reset_bump_dates":{"name":"Reset Bump Dates","description":"Reset the topic bump date to the last created post date, which affects ordering in the topic list"},"defer":{"name":"Mark Unread","description":"Mark topics as unread"},"update_notifications":{"name":"Update Notifications","description":"Change notification level to Watching, Tracking, Normal, or Muted"}},"topic":{"defer":{"help":"Mark topic as unread","title":"Mark unread"}},"post":{"actions":{"by_you":{"illegal":"You flagged this as illegal"}}},"flagging":{"formatted_name":{"illegal":"It's Illegal"},"custom_placeholder_illegal":"Let us know specifically why you believe this content is illegal, and provide relevant links and examples where possible.","confirmation_illegal":"What I’ve written above is accurate and complete."},"custom_homepage":{"admin_message":"One of your themes has enabled the \"custom_homepage\" modifier but it does not output anything in the [custom-homepage] connector. (This message is only shown to site administrators.)"},"keyboard_shortcuts_help":{"application":{"filter_sidebar":"%{shortcut} Filter sidebar","toggle_bulk_select":"%{shortcut} Toggle bulk select","dismiss":"%{shortcut} Dismiss selected topics","x":"%{shortcut} Toggle selection (in bulk select mode)"},"actions":{"defer":"%{shortcut} Mark topic as unread"}},"sidebar":{"sections":{"custom":{"delete_public_confirm":"This section is \u003cstrong\u003evisible to everyone\u003c/strong\u003e, are you sure you want to delete it?","update_public_confirm":"Changes will be \u003cstrong\u003evisible to everyone\u003c/strong\u003e on this site. Are you sure?","mark_as_private_confirm":"This section is \u003cstrong\u003evisible to everyone\u003c/strong\u003e. After the update, it will be \u003cstrong\u003evisible only to you\u003c/strong\u003e. Are you sure?","links":{"icon":{"validation":{"maximum":{"one":"Icon must be shorter than %{count} character","other":"Icon must be shorter than %{count} characters"}}},"name":{"validation":{"maximum":{"one":"Name must be shorter than %{count} character","other":"Name must be shorter than %{count} characters"}}},"value":{"validation":{"maximum":{"one":"Link must be shorter than %{count} character","other":"Link must be shorter than %{count} characters"}}}},"title":{"validation":{"maximum":{"one":"Title must be shorter than %{count} character","other":"Title must be shorter than %{count} characters"}}}}},"clear_filter":"Clear filter","no_results":{"description":"We couldn’t find anything matching ‘%{filter}’.\u003cbr\u003e\u003cbr\u003eDid you want to \u003ca class=\"sidebar-additional-filter-settings\" href=\"%{settings_filter_url}\"\u003esearch site settings\u003c/a\u003e or the \u003ca class=\"sidebar-additional-filter-users\" href=\"%{user_list_filter_url}\"\u003eadmin user list?\u003c/a\u003e"}},"powered_by_discourse":"Powered by Discourse","discourse_automation":{"triggerables":{"user_updated":{"fields":{"user_profile":{"label":"User profile fields","description":"Will trigger only if the user has filled all these fields"},"custom_fields":{"label":"User custom fields","description":"Will trigger only if the user has filled all these fields"},"once_per_user":{"label":"Once per user","description":"Will trigger only once per user"},"new_users_only":{"label":"New users only","description":"Will trigger only for new users that join after this automation is enabled"}}}},"scriptables":{"auto_responder":{"fields":{"word_answer_list":{"description":"Defines a list of key/value groups, where the `key` is the searched term, and `value` the text of the reply. The `key` can be left blank to respond to all triggers, regardless of content. Note that `value` accepts `{{key}}` as a placeholder to be replaced by the value of `key` in the reply. Note that `key` will be evaluated as a regex, and special chars like `.` should be escaped if you actually mean a dot, eg: `\\.`"}}},"post":{"fields":{"creator":{"post_creator_context":"The creator of the post","updated_user_context":"The updated user"}}},"topic":{"fields":{"creator":{"label":"Creator","updated_user_context":"The updated user"},"body":{"label":"Topic body"},"title":{"label":"Topic title"},"category":{"label":"Topic category"},"tags":{"label":"Topic tags"}}},"llm_report":{"fields":{"exclude_tags":{"label":"Exclude Tags","description":"Exclude topics with these tags"},"exclude_categories":{"label":"Exclude Categories","description":"Exclude topics with these categories"},"suppress_notifications":{"label":"Suppress Notifications","description":"Suppress notifications the report may generate by transforming to content. This will remap mentions and internal links."},"temperature":{"label":"Temperature","description":"Temperature to use for the LLM, increase to increase randomness (0 to use model default)"},"top_p":{"label":"Top P","description":"Top P to use for the LLM, increase to increase randomness (0 to use model default)"}}},"llm_triage":{"fields":{"flag_post":{"label":"Send to review","description":"Puts the post into the review queue if triggered, for moderators to triage"}}},"recurring_data_explorer_result_pm":{"fields":{"skip_empty":{"label":"Skip sending PM if there are no results"}}}},"ai_models":{"gemini_1_5_pro":"Gemini 1.5 Pro","claude_3_opus":"Claude 3 Opus","claude_3_sonnet":"Claude 3 Sonnet","claude_3_haiku":"Claude 3 Haiku","mixtral_8x7b_instruct_v0_1":"Mixtral 8x7B Instruct V0.1","mistral_7b_instruct_v0_2":"Mistral 7B Instruct V0.2","command_r":"Cohere Command R","command_r_plus":"Cohere Command R+"}},"admin":{"rss_polling":{"feed":"Feed Settings","discourse":"Discourse Settings","author":"Author","feed_url":"URL","discourse_category":"Category","discourse_tags":"Tags","feed_category_filter":"Category Filter","documentation":"RSS Polling configuration documentation"},"customize":{"theme":{"remote_theme_edits":"Editing of remote themes is disabled in Discourse. Please \u003ca href='mailto:team@discourse.org'\u003econtact us\u003c/a\u003e if you need assistance transitioning customized remote themes to a local theme."}}},"chat":{"see_in":"See in","flags":{"illegal":"This post requires staff attention because I believe it contains content that is illegal."}},"discourse_ai":{"ai_persona":{"no_llm_selected":"No language model selected","max_context_posts":"Max Context Posts","max_context_posts_help":"The maximum number of posts to use as context for the AI when responding to a user. (empty for default)","vision_enabled":"Vision Enabled","vision_enabled_help":"If enabled, the AI will attempt to understand images users post in the topic, depends on the model being used supporting vision. Anthropic Claude 3 models support vision.","vision_max_pixels":"Supported image size","vision_max_pixel_sizes":{"low":"Low Quality - cheapest (256x256)","medium":"Medium Quality (512x512)","high":"High Quality - slowest (1024x1024)"},"mentionable":"Mentionable","mentionable_help":"If enabled, users in allowed groups can mention this user in posts and messages, the AI will respond as this persona.","create_user":"Create User","create_user_help":"You can optionally attach a user to this persona. If you do, the AI will use this user to respond to requests.","default_llm":"Default Language Model","default_llm_help":"The default language model to use for this persona. Required if you wish to mention persona on public posts.","show_indexing_options":"Show Indexing Options","hide_indexing_options":"Hide Indexing Options","new":"New Persona","short_title":"Personas","temperature":"Temperature","temperature_help":"Temperature to use for the LLM, increase to increase creativity (leave empty to use model default, generally a value from 0.0 to 2.0)","top_p":"Top P","top_p_help":"Top P to use for the LLM, increase to increase randomness (leave empty to use model default, generally a value from 0.0 to 1.0)","rag_chunk_tokens":"Upload Chunk Tokens","rag_chunk_tokens_help":"The number of tokens to use for each chunk in the RAG model. Increase to increase the amount of context the AI can use. (changing will re-index all uploads)","rag_chunk_overlap_tokens":"Upload Chunk Overlap Tokens","rag_chunk_overlap_tokens_help":"The number of tokens to overlap between chunks in the RAG model. (changing will re-index all uploads)","rag_conversation_chunks":"Search Conversation Chunks","rag_conversation_chunks_help":"The number of chunks to use for the RAG model searches. Increase to increase the amount of context the AI can use.","what_are_personas":"What are AI Personas?","no_persona_selected":"AI Personas are a powerful feature that allows you to customize the behavior of the AI engine in your Discourse forum. They act as a 'system message' that guides the AI's responses and interactions, helping to create a more personalized and engaging user experience.\n\n#### Why use AI Personas?\n\nWith AI Personas, you can tailor the AI's behavior to better fit the context and tone of your forum. Whether you want the AI to be more formal for a professional setting, more casual for a community forum, or even embody a specific character for a role-playing game, AI Personas give you the flexibility to do so.\n\n#### Group-Specific Access to AI Personas\n\nMoreover, you can set it up so that certain user groups have access to specific personas. This means you can have different AI behaviors for different sections of your forum, further enhancing the diversity and richness of your community's interactions.\n","uploads":{"description":"Your AI persona will be able to search and reference the content of included files. Uploaded files must be formatted as plaintext (.txt)","hint":"To control where the file's content gets placed within the system prompt, include the {uploads} placeholder in the system prompt above.","button":"Add Files","filter":"Filter uploads","indexed":"Indexed","indexing":"Indexing","uploaded":"Ready to be indexed","remove":"Remove upload"}},"ai_helper":{"image_caption":{"button_label":"Caption with AI","generating":"Generating caption...","credits":"Captioned by AI"}},"embeddings":{"quick_search":{"suffix":"in all topics and posts with AI"}},"ai_bot":{"debug_ai":"View raw AI request and response","debug_ai_modal":{"title":"View AI interaction","copy_request":"Copy request","copy_response":"Copy response","request_tokens":"Request tokens:","response_tokens":"Response tokens:"},"share_full_topic_modal":{"title":"Share Conversation Publicly","share":"Share and Copy Link","update":"Update and Copy Link","delete":"Delete Share"},"share_ai_conversation":{"name":"Share AI Conversation","title":"Share this AI conversation publicly"},"share_modal":{"title":"Copy AI conversation","share_tip":"Alternatively, you can share the entire conversation."},"bot_names":{"fake":"Fake Test Bot","claude-3-opus":"Claude 3 Opus","claude-3-sonnet":"Claude 3 Sonnet","claude-3-haiku":"Claude 3 Haiku","cohere-command-r-plus":"Cohere Command R Plus"}}},"discourse_assign":{"topic_level_menu":{"edit_assignments":"Edit assignments...","reassign_topic_to_me":"Reassign topic to me","unassign_from_post":"Unassign @%{assignee} from #%{post_number}","unassign_from_post_help":"Unassign @%{assignee} from post #%{post_number}","unassign_from_topic":"Unassign @%{username} from topic"},"assign_modal":{"assignment_label":"Assignment","edit_assignments_title":"Edit Assignments"}},"edit_assignments_modal":{"title":"Edit assignments"},"cakeday":{"none":" "},"discourse_calendar":{"region":{"names":{"in_ka":"India (in_ka)"}}},"rss_polling":{"title":"RSS Polling"},"templates":{"source":"Source"},"yearly_review":{"admin_notice":"The Yearly Review topic will be created soon on %{to_be_created_date}. Please \u003ca href='%{settings_url}'\u003ereview the settings now\u003c/a\u003e and be sure to set the yearly review publish category to the staff or other private category so you can view it before making it public, and maybe add a celebratory note! :partying_face: \u003ca target='_blank' rel='noopener noreferrer' href='https://meta.discourse.org/t/discourse-yearly-review/105713'\u003eMore details…\u003c/a\u003e"},"hosted_site":{"domain_placeholder":"forum.example.com","view_invoice":"View invoice","backup_note":"Off-site backups for disaster recovery are created every 12 hours. To download a backup manually, see \u003ca href=\"https://meta.discourse.org/t/122710\"\u003eour documentation\u003c/a\u003e. If you encounter an emergency and need to roll back your site to earlier version, please \u003ca href=\"mailto:team@discourse.org\"\u003econtact us\u003c/a\u003e.\n","remaining_users":{"one":"Your subscription allows 1 more user. \u003ca href='/admin'\u003eManage your user limit from your admin dashboard.\u003c/a\u003e","other":"Your subscription allows %{count} more users. \u003ca href='/admin'\u003eManage your user limit from your admin dashboard.\u003c/a\u003e"},"manage_user_limit_invoiced":"To change your user limit, please contact us at \u003ca href='mailto:team@discourse.org'\u003eteam@discourse.org\u003c/a\u003e.","billing":"Billing","change_invoice_details":"Billing Details","update_invoice_details":"Update Billing Details","change_po_number":"PO Number","po_number":{"title":"Purchase Order Number","description":"Please enter your purchase order number here, to be displayed on future invoices.","purchase_order_heading":"Purchase Order","purchase_order_number":"Purchase Order Number","success":"Your purchase order number has been successfully updated.","po_number_unknown_error":"We were unable to update your purchase order number.","save":"Save","line1":"Address line 1","line2":"Address line 2","city":"City","postal_code":"Postal Code","state":"State","country":"Country"},"invoice_details":{"province_select":"Province (Required)","state_select":"State (Required)","tax_type_none":"None"},"datacenter_notice":"You're hosted in our \u003cb\u003e%{datacenter}\u003c/b\u003e datacenter.","cancel":{"shut_down_paid":"Service will end at the end of the current billing period.","shut_down_unpaid":"Your site will be shut down tomorrow."},"admin_backup_upload_warning":"This is for database backups only. Uploads will \u003cstrong\u003enot\u003c/strong\u003e be included, meaning all images and other file uploads will be missing if the backup is restored to another hosting setup. Please contact \u003ca href=\"mailto:team@discourse.org\"\u003eteam@discourse.org\u003c/a\u003e if you require a full backup.","admin_yes_backup":"Yes, download backup without uploads","customize":{"theme":{"upgrade_to_access_title":"Upgrade to our Standard plan to unlock themes!","upgrade_to_access_description":"Customize the appearance of your site with themes and components on our Standard hosting plan.","browse_themes":"Browse themes","browse_components":"Browse components","upgrade_button":"Upgrade to Standard","upgrade_instructions":"Please contact our team at \u003ca href='mailto:team@discourse.org'\u003eteam@discourse.org\u003c/a\u003e to request an upgrade to the Standard plan.","learn_more":"Learn more about our hosting plans"}}},"discourse_internet_explorer":{"deprecation_warning":"This site will remove support for Internet Explorer 11 in June 2020 - please upgrade your browser"},"admin_invite":{"save":"Continue","title":"Admin invite","your_email":"As the administrator of this Discourse, remember that with great power comes great responsibility! Your account email address is \u003cb\u003e%{email}\u003c/b\u003e."},"basic_plan":{"tooltip":{"headline":"Cannot be changed on the basic plan","description":"You can upgrade at any time from your admin dashboard."}}}}};
I18n.locale = 'pt_BR';
I18n.pluralizationRules.pt_BR = MessageFormat.locale.pt_BR;
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i,
            arrLen = arr.length;
        for (i = 0; i < arrLen; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        var flags = null,
            parsedParts = false,
            isNowValid = m._d && !isNaN(m._d.getTime());
        if (isNowValid) {
            flags = getParsingFlags(m);
            parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            isNowValid =
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidEra &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));
            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }
        }
        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        } else {
            return isNowValid;
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i,
            prop,
            val,
            momentPropertiesLen = momentProperties.length;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentPropertiesLen > 0) {
            for (i = 0; i < momentPropertiesLen; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key,
                    argLen = arguments.length;
                for (i = 0; i < argLen; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {
        D: 'date',
        dates: 'date',
        date: 'date',
        d: 'day',
        days: 'day',
        day: 'day',
        e: 'weekday',
        weekdays: 'weekday',
        weekday: 'weekday',
        E: 'isoWeekday',
        isoweekdays: 'isoWeekday',
        isoweekday: 'isoWeekday',
        DDD: 'dayOfYear',
        dayofyears: 'dayOfYear',
        dayofyear: 'dayOfYear',
        h: 'hour',
        hours: 'hour',
        hour: 'hour',
        ms: 'millisecond',
        milliseconds: 'millisecond',
        millisecond: 'millisecond',
        m: 'minute',
        minutes: 'minute',
        minute: 'minute',
        M: 'month',
        months: 'month',
        month: 'month',
        Q: 'quarter',
        quarters: 'quarter',
        quarter: 'quarter',
        s: 'second',
        seconds: 'second',
        second: 'second',
        gg: 'weekYear',
        weekyears: 'weekYear',
        weekyear: 'weekYear',
        GG: 'isoWeekYear',
        isoweekyears: 'isoWeekYear',
        isoweekyear: 'isoWeekYear',
        w: 'week',
        weeks: 'week',
        week: 'week',
        W: 'isoWeek',
        isoweeks: 'isoWeek',
        isoweek: 'isoWeek',
        y: 'year',
        years: 'year',
        year: 'year',
    };

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1,
    };

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        match1to2NoLeadingZero = /^[1-9]\d?/, //         1-99
        match1to2HasZero = /^([1-9]\d|\d)/, //           0-99
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(
                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                    function (matched, p1, p2, p3, p4) {
                        return p1 || p2 || p3 || p4;
                    }
                )
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback,
            tokenLen;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        tokenLen = token.length;
        for (i = 0; i < tokenLen; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        if (!mom.isValid()) {
            return NaN;
        }

        var d = mom._d,
            isUTC = mom._isUTC;

        switch (unit) {
            case 'Milliseconds':
                return isUTC ? d.getUTCMilliseconds() : d.getMilliseconds();
            case 'Seconds':
                return isUTC ? d.getUTCSeconds() : d.getSeconds();
            case 'Minutes':
                return isUTC ? d.getUTCMinutes() : d.getMinutes();
            case 'Hours':
                return isUTC ? d.getUTCHours() : d.getHours();
            case 'Date':
                return isUTC ? d.getUTCDate() : d.getDate();
            case 'Day':
                return isUTC ? d.getUTCDay() : d.getDay();
            case 'Month':
                return isUTC ? d.getUTCMonth() : d.getMonth();
            case 'FullYear':
                return isUTC ? d.getUTCFullYear() : d.getFullYear();
            default:
                return NaN; // Just in case
        }
    }

    function set$1(mom, unit, value) {
        var d, isUTC, year, month, date;

        if (!mom.isValid() || isNaN(value)) {
            return;
        }

        d = mom._d;
        isUTC = mom._isUTC;

        switch (unit) {
            case 'Milliseconds':
                return void (isUTC
                    ? d.setUTCMilliseconds(value)
                    : d.setMilliseconds(value));
            case 'Seconds':
                return void (isUTC ? d.setUTCSeconds(value) : d.setSeconds(value));
            case 'Minutes':
                return void (isUTC ? d.setUTCMinutes(value) : d.setMinutes(value));
            case 'Hours':
                return void (isUTC ? d.setUTCHours(value) : d.setHours(value));
            case 'Date':
                return void (isUTC ? d.setUTCDate(value) : d.setDate(value));
            // case 'Day': // Not real
            //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
            // case 'Month': // Not used because we need to pass two variables
            //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
            case 'FullYear':
                break; // See below ...
            default:
                return; // Just in case
        }

        year = value;
        month = mom.month();
        date = mom.date();
        date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
        void (isUTC
            ? d.setUTCFullYear(year, month, date)
            : d.setFullYear(year, month, date));
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i,
                prioritizedLen = prioritized.length;
            for (i = 0; i < prioritizedLen; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // PARSING

    addRegexToken('M', match1to2, match1to2NoLeadingZero);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths =
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
            ),
        defaultLocaleMonthsShort =
            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        var month = value,
            date = mom.date();

        date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
        void (mom._isUTC
            ? mom._d.setUTCMonth(month, date)
            : mom._d.setMonth(month, date));
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            shortP,
            longP;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortP = regexEscape(this.monthsShort(mom, ''));
            longP = regexEscape(this.months(mom, ''));
            shortPieces.push(shortP);
            longPieces.push(longP);
            mixedPieces.push(longP);
            mixedPieces.push(shortP);
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // PARSING

    addRegexToken('w', match1to2, match1to2NoLeadingZero);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2, match1to2NoLeadingZero);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(
        ['w', 'ww', 'W', 'WW'],
        function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
        }
    );

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays =
            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
              ? weekdays[m.day()]
              : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
              ? this._weekdaysShort[m.day()]
              : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
              ? this._weekdaysMin[m.day()]
              : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        var day = get(this, 'Day');
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2, match1to2HasZero);
    addRegexToken('h', match1to2, match1to2NoLeadingZero);
    addRegexToken('k', match1to2, match1to2NoLeadingZero);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function isLocaleNameSane(name) {
        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
        // Ensure name is available and function returns boolean
        return !!(name && name.match('^[^/\\\\]*$'));
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            typeof module !== 'undefined' &&
            module &&
            module.exports &&
            isLocaleNameSane(name)
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                      ? DATE
                      : a[HOUR] < 0 ||
                          a[HOUR] > 24 ||
                          (a[HOUR] === 24 &&
                              (a[MINUTE] !== 0 ||
                                  a[SECOND] !== 0 ||
                                  a[MILLISECOND] !== 0))
                        ? HOUR
                        : a[MINUTE] < 0 || a[MINUTE] > 59
                          ? MINUTE
                          : a[SECOND] < 0 || a[SECOND] > 59
                            ? SECOND
                            : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                              ? MILLISECOND
                              : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat,
            isoDatesLen = isoDates.length,
            isoTimesLen = isoTimes.length;

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDatesLen; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimesLen; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^()]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era,
            tokenLen;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens.length;
        for (i = 0; i < tokenLen; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false,
            configfLen = config._f.length;

        if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < configfLen; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i,
            orderLen = ordering.length;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < orderLen; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property,
            propertyLen = properties.length;

        for (i = 0; i < propertyLen; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
              ? 'lastWeek'
              : diff < 0
                ? 'lastDay'
                : diff < 1
                  ? 'sameDay'
                  : diff < 2
                    ? 'nextDay'
                    : diff < 7
                      ? 'nextWeek'
                      : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(
        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
        function (input, array, config, token) {
            var era = config._locale.erasParse(input, token, config._strict);
            if (era) {
                getParsingFlags(config).era = era;
            } else {
                getParsingFlags(config).invalidEra = input;
            }
        }
    );

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            erasName,
            erasAbbr,
            erasNarrow,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            erasName = regexEscape(eras[i].name);
            erasAbbr = regexEscape(eras[i].abbr);
            erasNarrow = regexEscape(eras[i].narrow);

            namePieces.push(erasName);
            abbrPieces.push(erasAbbr);
            narrowPieces.push(erasNarrow);
            mixedPieces.push(erasName);
            mixedPieces.push(erasAbbr);
            mixedPieces.push(erasNarrow);
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(
        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
        function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
        }
    );

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday() + this.localeData()._week.dow,
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // PARSING

    addRegexToken('D', match1to2, match1to2NoLeadingZero);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // PARSING

    addRegexToken('m', match1to2, match1to2HasZero);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // PARSING

    addRegexToken('s', match1to2, match1to2HasZero);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                          ? 'st'
                          : b === 2
                            ? 'nd'
                            : b === 3
                              ? 'rd'
                              : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y'),
        valueOf$1 = asMilliseconds;

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.30.1';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));
//! moment-timezone.js
//! version : 0.5.45
//! Copyright (c) JS Foundation and other contributors
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
	"use strict";

	/*global define*/
	if (typeof module === 'object' && module.exports) {
		module.exports = factory(require('moment')); // Node
	} else if (typeof define === 'function' && define.amd) {
		define(['moment'], factory);                 // AMD
	} else {
		factory(root.moment);                        // Browser
	}
}(this, function (moment) {
	"use strict";

	// Resolves es6 module loading issue
	if (moment.version === undefined && moment.default) {
		moment = moment.default;
	}

	// Do not load moment-timezone a second time.
	// if (moment.tz !== undefined) {
	// 	logError('Moment Timezone ' + moment.tz.version + ' was already loaded ' + (moment.tz.dataVersion ? 'with data from ' : 'without any data') + moment.tz.dataVersion);
	// 	return moment;
	// }

	var VERSION = "0.5.45",
		zones = {},
		links = {},
		countries = {},
		names = {},
		guesses = {},
		cachedGuess;

	if (!moment || typeof moment.version !== 'string') {
		logError('Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/');
	}

	var momentVersion = moment.version.split('.'),
		major = +momentVersion[0],
		minor = +momentVersion[1];

	// Moment.js version check
	if (major < 2 || (major === 2 && minor < 6)) {
		logError('Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' + moment.version + '. See momentjs.com');
	}

	/************************************
		Unpacking
	************************************/

	function charCodeToInt(charCode) {
		if (charCode > 96) {
			return charCode - 87;
		} else if (charCode > 64) {
			return charCode - 29;
		}
		return charCode - 48;
	}

	function unpackBase60(string) {
		var i = 0,
			parts = string.split('.'),
			whole = parts[0],
			fractional = parts[1] || '',
			multiplier = 1,
			num,
			out = 0,
			sign = 1;

		// handle negative numbers
		if (string.charCodeAt(0) === 45) {
			i = 1;
			sign = -1;
		}

		// handle digits before the decimal
		for (i; i < whole.length; i++) {
			num = charCodeToInt(whole.charCodeAt(i));
			out = 60 * out + num;
		}

		// handle digits after the decimal
		for (i = 0; i < fractional.length; i++) {
			multiplier = multiplier / 60;
			num = charCodeToInt(fractional.charCodeAt(i));
			out += num * multiplier;
		}

		return out * sign;
	}

	function arrayToInt (array) {
		for (var i = 0; i < array.length; i++) {
			array[i] = unpackBase60(array[i]);
		}
	}

	function intToUntil (array, length) {
		for (var i = 0; i < length; i++) {
			array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000)); // minutes to milliseconds
		}

		array[length - 1] = Infinity;
	}

	function mapIndices (source, indices) {
		var out = [], i;

		for (i = 0; i < indices.length; i++) {
			out[i] = source[indices[i]];
		}

		return out;
	}

	function unpack (string) {
		var data = string.split('|'),
			offsets = data[2].split(' '),
			indices = data[3].split(''),
			untils  = data[4].split(' ');

		arrayToInt(offsets);
		arrayToInt(indices);
		arrayToInt(untils);

		intToUntil(untils, indices.length);

		return {
			name       : data[0],
			abbrs      : mapIndices(data[1].split(' '), indices),
			offsets    : mapIndices(offsets, indices),
			untils     : untils,
			population : data[5] | 0
		};
	}

	/************************************
		Zone object
	************************************/

	function Zone (packedString) {
		if (packedString) {
			this._set(unpack(packedString));
		}
	}

	function closest (num, arr) {
		var len = arr.length;
		if (num < arr[0]) {
			return 0;
		} else if (len > 1 && arr[len - 1] === Infinity && num >= arr[len - 2]) {
			return len - 1;
		} else if (num >= arr[len - 1]) {
			return -1;
		}

		var mid;
		var lo = 0;
		var hi = len - 1;
		while (hi - lo > 1) {
			mid = Math.floor((lo + hi) / 2);
			if (arr[mid] <= num) {
				lo = mid;
			} else {
				hi = mid;
			}
		}
		return hi;
	}

	Zone.prototype = {
		_set : function (unpacked) {
			this.name       = unpacked.name;
			this.abbrs      = unpacked.abbrs;
			this.untils     = unpacked.untils;
			this.offsets    = unpacked.offsets;
			this.population = unpacked.population;
		},

		_index : function (timestamp) {
			var target = +timestamp,
				untils = this.untils,
				i;

			i = closest(target, untils);
			if (i >= 0) {
				return i;
			}
		},

		countries : function () {
			var zone_name = this.name;
			return Object.keys(countries).filter(function (country_code) {
				return countries[country_code].zones.indexOf(zone_name) !== -1;
			});
		},

		parse : function (timestamp) {
			var target  = +timestamp,
				offsets = this.offsets,
				untils  = this.untils,
				max     = untils.length - 1,
				offset, offsetNext, offsetPrev, i;

			for (i = 0; i < max; i++) {
				offset     = offsets[i];
				offsetNext = offsets[i + 1];
				offsetPrev = offsets[i ? i - 1 : i];

				if (offset < offsetNext && tz.moveAmbiguousForward) {
					offset = offsetNext;
				} else if (offset > offsetPrev && tz.moveInvalidForward) {
					offset = offsetPrev;
				}

				if (target < untils[i] - (offset * 60000)) {
					return offsets[i];
				}
			}

			return offsets[max];
		},

		abbr : function (mom) {
			return this.abbrs[this._index(mom)];
		},

		offset : function (mom) {
			logError("zone.offset has been deprecated in favor of zone.utcOffset");
			return this.offsets[this._index(mom)];
		},

		utcOffset : function (mom) {
			return this.offsets[this._index(mom)];
		}
	};

	/************************************
		Country object
	************************************/

	function Country (country_name, zone_names) {
		this.name = country_name;
		this.zones = zone_names;
	}

	/************************************
		Current Timezone
	************************************/

	function OffsetAt(at) {
		var timeString = at.toTimeString();
		var abbr = timeString.match(/\([a-z ]+\)/i);
		if (abbr && abbr[0]) {
			// 17:56:31 GMT-0600 (CST)
			// 17:56:31 GMT-0600 (Central Standard Time)
			abbr = abbr[0].match(/[A-Z]/g);
			abbr = abbr ? abbr.join('') : undefined;
		} else {
			// 17:56:31 CST
			// 17:56:31 GMT+0800 (台北標準時間)
			abbr = timeString.match(/[A-Z]{3,5}/g);
			abbr = abbr ? abbr[0] : undefined;
		}

		if (abbr === 'GMT') {
			abbr = undefined;
		}

		this.at = +at;
		this.abbr = abbr;
		this.offset = at.getTimezoneOffset();
	}

	function ZoneScore(zone) {
		this.zone = zone;
		this.offsetScore = 0;
		this.abbrScore = 0;
	}

	ZoneScore.prototype.scoreOffsetAt = function (offsetAt) {
		this.offsetScore += Math.abs(this.zone.utcOffset(offsetAt.at) - offsetAt.offset);
		if (this.zone.abbr(offsetAt.at).replace(/[^A-Z]/g, '') !== offsetAt.abbr) {
			this.abbrScore++;
		}
	};

	function findChange(low, high) {
		var mid, diff;

		while ((diff = ((high.at - low.at) / 12e4 | 0) * 6e4)) {
			mid = new OffsetAt(new Date(low.at + diff));
			if (mid.offset === low.offset) {
				low = mid;
			} else {
				high = mid;
			}
		}

		return low;
	}

	function userOffsets() {
		var startYear = new Date().getFullYear() - 2,
			last = new OffsetAt(new Date(startYear, 0, 1)),
			lastOffset = last.offset,
			offsets = [last],
			change, next, nextOffset, i;

		for (i = 1; i < 48; i++) {
			nextOffset = new Date(startYear, i, 1).getTimezoneOffset();
			if (nextOffset !== lastOffset) {
				// Create OffsetAt here to avoid unnecessary abbr parsing before checking offsets
				next = new OffsetAt(new Date(startYear, i, 1));
				change = findChange(last, next);
				offsets.push(change);
				offsets.push(new OffsetAt(new Date(change.at + 6e4)));
				last = next;
				lastOffset = nextOffset;
			}
		}

		for (i = 0; i < 4; i++) {
			offsets.push(new OffsetAt(new Date(startYear + i, 0, 1)));
			offsets.push(new OffsetAt(new Date(startYear + i, 6, 1)));
		}

		return offsets;
	}

	function sortZoneScores (a, b) {
		if (a.offsetScore !== b.offsetScore) {
			return a.offsetScore - b.offsetScore;
		}
		if (a.abbrScore !== b.abbrScore) {
			return a.abbrScore - b.abbrScore;
		}
		if (a.zone.population !== b.zone.population) {
			return b.zone.population - a.zone.population;
		}
		return b.zone.name.localeCompare(a.zone.name);
	}

	function addToGuesses (name, offsets) {
		var i, offset;
		arrayToInt(offsets);
		for (i = 0; i < offsets.length; i++) {
			offset = offsets[i];
			guesses[offset] = guesses[offset] || {};
			guesses[offset][name] = true;
		}
	}

	function guessesForUserOffsets (offsets) {
		var offsetsLength = offsets.length,
			filteredGuesses = {},
			out = [],
			checkedOffsets = {},
			i, j, offset, guessesOffset;

		for (i = 0; i < offsetsLength; i++) {
			offset = offsets[i].offset;
			if (checkedOffsets.hasOwnProperty(offset)) {
				continue;
			}
			guessesOffset = guesses[offset] || {};
			for (j in guessesOffset) {
				if (guessesOffset.hasOwnProperty(j)) {
					filteredGuesses[j] = true;
				}
			}
			checkedOffsets[offset] = true;
		}

		for (i in filteredGuesses) {
			if (filteredGuesses.hasOwnProperty(i)) {
				out.push(names[i]);
			}
		}

		return out;
	}

	function rebuildGuess () {

		// use Intl API when available and returning valid time zone
		try {
			var intlName = Intl.DateTimeFormat().resolvedOptions().timeZone;
			if (intlName && intlName.length > 3) {
				var name = names[normalizeName(intlName)];
				if (name) {
					return name;
				}
				logError("Moment Timezone found " + intlName + " from the Intl api, but did not have that data loaded.");
			}
		} catch (e) {
			// Intl unavailable, fall back to manual guessing.
		}

		var offsets = userOffsets(),
			offsetsLength = offsets.length,
			guesses = guessesForUserOffsets(offsets),
			zoneScores = [],
			zoneScore, i, j;

		for (i = 0; i < guesses.length; i++) {
			zoneScore = new ZoneScore(getZone(guesses[i]), offsetsLength);
			for (j = 0; j < offsetsLength; j++) {
				zoneScore.scoreOffsetAt(offsets[j]);
			}
			zoneScores.push(zoneScore);
		}

		zoneScores.sort(sortZoneScores);

		return zoneScores.length > 0 ? zoneScores[0].zone.name : undefined;
	}

	function guess (ignoreCache) {
		if (!cachedGuess || ignoreCache) {
			cachedGuess = rebuildGuess();
		}
		return cachedGuess;
	}

	/************************************
		Global Methods
	************************************/

	function normalizeName (name) {
		return (name || '').toLowerCase().replace(/\//g, '_');
	}

	function addZone (packed) {
		var i, name, split, normalized;

		if (typeof packed === "string") {
			packed = [packed];
		}

		for (i = 0; i < packed.length; i++) {
			split = packed[i].split('|');
			name = split[0];
			normalized = normalizeName(name);
			zones[normalized] = packed[i];
			names[normalized] = name;
			addToGuesses(normalized, split[2].split(' '));
		}
	}

	function getZone (name, caller) {

		name = normalizeName(name);

		var zone = zones[name];
		var link;

		if (zone instanceof Zone) {
			return zone;
		}

		if (typeof zone === 'string') {
			zone = new Zone(zone);
			zones[name] = zone;
			return zone;
		}

		// Pass getZone to prevent recursion more than 1 level deep
		if (links[name] && caller !== getZone && (link = getZone(links[name], getZone))) {
			zone = zones[name] = new Zone();
			zone._set(link);
			zone.name = names[name];
			return zone;
		}

		return null;
	}

	function getNames () {
		var i, out = [];

		for (i in names) {
			if (names.hasOwnProperty(i) && (zones[i] || zones[links[i]]) && names[i]) {
				out.push(names[i]);
			}
		}

		return out.sort();
	}

	function getCountryNames () {
		return Object.keys(countries);
	}

	function addLink (aliases) {
		var i, alias, normal0, normal1;

		if (typeof aliases === "string") {
			aliases = [aliases];
		}

		for (i = 0; i < aliases.length; i++) {
			alias = aliases[i].split('|');

			normal0 = normalizeName(alias[0]);
			normal1 = normalizeName(alias[1]);

			links[normal0] = normal1;
			names[normal0] = alias[0];

			links[normal1] = normal0;
			names[normal1] = alias[1];
		}
	}

	function addCountries (data) {
		var i, country_code, country_zones, split;
		if (!data || !data.length) return;
		for (i = 0; i < data.length; i++) {
			split = data[i].split('|');
			country_code = split[0].toUpperCase();
			country_zones = split[1].split(' ');
			countries[country_code] = new Country(
				country_code,
				country_zones
			);
		}
	}

	function getCountry (name) {
		name = name.toUpperCase();
		return countries[name] || null;
	}

	function zonesForCountry(country, with_offset) {
		country = getCountry(country);

		if (!country) return null;

		var zones = country.zones.sort();

		if (with_offset) {
			return zones.map(function (zone_name) {
				var zone = getZone(zone_name);
				return {
					name: zone_name,
					offset: zone.utcOffset(new Date())
				};
			});
		}

		return zones;
	}

	function loadData (data) {
		addZone(data.zones);
		addLink(data.links);
		addCountries(data.countries);
		tz.dataVersion = data.version;
	}

	function zoneExists (name) {
		if (!zoneExists.didShowError) {
			zoneExists.didShowError = true;
				logError("moment.tz.zoneExists('" + name + "') has been deprecated in favor of !moment.tz.zone('" + name + "')");
		}
		return !!getZone(name);
	}

	function needsOffset (m) {
		var isUnixTimestamp = (m._f === 'X' || m._f === 'x');
		return !!(m._a && (m._tzm === undefined) && !isUnixTimestamp);
	}

	function logError (message) {
		if (typeof console !== 'undefined' && typeof console.error === 'function') {
			console.error(message);
		}
	}

	/************************************
		moment.tz namespace
	************************************/

	function tz (input) {
		var args = Array.prototype.slice.call(arguments, 0, -1),
			name = arguments[arguments.length - 1],
			out  = moment.utc.apply(null, args),
			zone;

		if (!moment.isMoment(input) && needsOffset(out) && (zone = getZone(name))) {
			out.add(zone.parse(out), 'minutes');
		}

		out.tz(name);

		return out;
	}

	tz.version      = VERSION;
	tz.dataVersion  = '';
	tz._zones       = zones;
	tz._links       = links;
	tz._names       = names;
	tz._countries	= countries;
	tz.add          = addZone;
	tz.link         = addLink;
	tz.load         = loadData;
	tz.zone         = getZone;
	tz.zoneExists   = zoneExists; // deprecated in 0.1.0
	tz.guess        = guess;
	tz.names        = getNames;
	tz.Zone         = Zone;
	tz.unpack       = unpack;
	tz.unpackBase60 = unpackBase60;
	tz.needsOffset  = needsOffset;
	tz.moveInvalidForward   = true;
	tz.moveAmbiguousForward = false;
	tz.countries    = getCountryNames;
	tz.zonesForCountry = zonesForCountry;

	/************************************
		Interface with Moment.js
	************************************/

	var fn = moment.fn;

	moment.tz = tz;

	moment.defaultZone = null;

	moment.updateOffset = function (mom, keepTime) {
		var zone = moment.defaultZone,
			offset;

		if (mom._z === undefined) {
			if (zone && needsOffset(mom) && !mom._isUTC && mom.isValid()) {
				mom._d = moment.utc(mom._a)._d;
				mom.utc().add(zone.parse(mom), 'minutes');
			}
			mom._z = zone;
		}
		if (mom._z) {
			offset = mom._z.utcOffset(mom);
			if (Math.abs(offset) < 16) {
				offset = offset / 60;
			}
			if (mom.utcOffset !== undefined) {
				var z = mom._z;
				mom.utcOffset(-offset, keepTime);
				mom._z = z;
			} else {
				mom.zone(offset, keepTime);
			}
		}
	};

	fn.tz = function (name, keepTime) {
		if (name) {
			if (typeof name !== 'string') {
				throw new Error('Time zone name must be a string, got ' + name + ' [' + typeof name + ']');
			}
			this._z = getZone(name);
			if (this._z) {
				moment.updateOffset(this, keepTime);
			} else {
				logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
			}
			return this;
		}
		if (this._z) { return this._z.name; }
	};

	function abbrWrap (old) {
		return function () {
			if (this._z) { return this._z.abbr(this); }
			return old.call(this);
		};
	}

	function resetZoneWrap (old) {
		return function () {
			this._z = null;
			return old.apply(this, arguments);
		};
	}

	function resetZoneWrap2 (old) {
		return function () {
			if (arguments.length > 0) this._z = null;
			return old.apply(this, arguments);
		};
	}

	fn.zoneName  = abbrWrap(fn.zoneName);
	fn.zoneAbbr  = abbrWrap(fn.zoneAbbr);
	fn.utc       = resetZoneWrap(fn.utc);
	fn.local     = resetZoneWrap(fn.local);
	fn.utcOffset = resetZoneWrap2(fn.utcOffset);

	moment.tz.setDefault = function(name) {
		if (major < 2 || (major === 2 && minor < 9)) {
			logError('Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ' + moment.version + '.');
		}
		moment.defaultZone = name ? getZone(name) : null;
		return moment;
	};

	// Cloning a moment should include the _z property.
	var momentProperties = moment.momentProperties;
	if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
		// moment 2.8.1+
		momentProperties.push('_z');
		momentProperties.push('_a');
	} else if (momentProperties) {
		// moment 2.7.0
		momentProperties._z = null;
	}

	loadData({
		"version": "2024a",
		"zones": [
			"Africa/Abidjan|GMT|0|0||48e5",
			"Africa/Nairobi|EAT|-30|0||47e5",
			"Africa/Algiers|CET|-10|0||26e5",
			"Africa/Lagos|WAT|-10|0||17e6",
			"Africa/Khartoum|CAT|-20|0||51e5",
			"Africa/Cairo|EET EEST|-20 -30|010101010101010|29NW0 1cL0 1cN0 1fz0 1a10 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0|15e6",
			"Africa/Casablanca|+01 +00|-10 0|010101010101010101010101|208q0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600|32e5",
			"Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1XSp0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0|11e6",
			"Africa/Johannesburg|SAST|-20|0||84e5",
			"Africa/Juba|EAT CAT|-30 -20|01|24nx0|",
			"Africa/Sao_Tome|WAT GMT|-10 0|01|1XiN0|",
			"Africa/Tripoli|EET|-20|0||11e5",
			"America/Adak|HST HDT|a0 90|01010101010101010101010|1XKc0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|326",
			"America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1XKb0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|30e4",
			"America/Santo_Domingo|AST|40|0||29e5",
			"America/Fortaleza|-03|30|0||34e5",
			"America/Asuncion|-03 -04|30 40|01010101010101010101010|1XPD0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0|28e5",
			"America/Panama|EST|50|0||15e5",
			"America/Mexico_City|CST CDT|60 50|010101010|1XVk0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|20e6",
			"America/Managua|CST|60|0||22e5",
			"America/Caracas|-04|40|0||29e5",
			"America/Lima|-05|50|0||11e6",
			"America/Denver|MST MDT|70 60|01010101010101010101010|1XK90 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|26e5",
			"America/Campo_Grande|-03 -04|30 40|01|1XBD0|77e4",
			"America/Chicago|CST CDT|60 50|01010101010101010101010|1XK80 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|92e5",
			"America/Chihuahua|MST MDT CST|70 60 60|010101012|1XVl0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|81e4",
			"America/Ciudad_Juarez|MST MDT CST|70 60 60|010101012010101010101010|1XK90 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1wn0 cm0 EP0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|",
			"America/Phoenix|MST|70|0||42e5",
			"America/Whitehorse|PST PDT MST|80 70 70|01012|1XKa0 1zb0 Op0 1z90|23e3",
			"America/New_York|EST EDT|50 40|01010101010101010101010|1XK70 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|21e6",
			"America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1XKa0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|15e6",
			"America/Halifax|AST ADT|40 30|01010101010101010101010|1XK60 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|39e4",
			"America/Godthab|-03 -02 -01|30 20 10|0101010101212121212121|1XSp0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 2so0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0|17e3",
			"America/Havana|CST CDT|50 40|01010101010101010101010|1XK50 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5",
			"America/Mazatlan|MST MDT|70 60|010101010|1XVl0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|44e4",
			"America/Metlakatla|PST AKST AKDT|80 90 80|012121212121212121212121|1Xqy0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|14e2",
			"America/Miquelon|-03 -02|30 20|01010101010101010101010|1XK50 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|61e2",
			"America/Noronha|-02|20|0||30e2",
			"America/Ojinaga|MST MDT CST CDT|70 60 60 50|01010101232323232323232|1XK90 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1wn0 Rc0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|23e3",
			"America/Santiago|-03 -04|30 40|01010101010101010101010|1XVf0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|62e5",
			"America/Sao_Paulo|-02 -03|20 30|01|1XBC0|20e6",
			"America/Scoresbysund|-01 +00 -02|10 0 20|0101010101020202020202|1XSp0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 2pA0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0|452",
			"America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1XK5u 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0|11e4",
			"Antarctica/Casey|+11 +08|-b0 -80|0101010101|1XME0 1kr0 12l0 1o01 14kX 1lf1 14kX 1lf1 13bX|10",
			"Asia/Bangkok|+07|-70|0||15e6",
			"Asia/Vladivostok|+10|-a0|0||60e4",
			"Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1XV40 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0|40e5",
			"Asia/Tashkent|+05|-50|0||23e5",
			"Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1XV20 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0|14e5",
			"Europe/Istanbul|+03|-30|0||13e6",
			"Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1XSp0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0|40",
			"Antarctica/Vostok|+07 +05|-70 -50|01|2bnv0|25",
			"Asia/Almaty|+06 +05|-60 -50|01|2bR60|15e5",
			"Asia/Amman|EET EEST +03|-20 -30 -30|010101012|1XRy0 1o00 11A0 1qM0 WM0 1qM0 LA0 1C00|25e5",
			"Asia/Kamchatka|+12|-c0|0||18e4",
			"Asia/Dubai|+04|-40|0||39e5",
			"Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1XSm0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|22e5",
			"Asia/Dhaka|+06|-60|0||16e6",
			"Asia/Kuala_Lumpur|+08|-80|0||71e5",
			"Asia/Kolkata|IST|-5u|0||15e6",
			"Asia/Chita|+09|-90|0||33e4",
			"Asia/Shanghai|CST|-80|0||23e6",
			"Asia/Colombo|+0530|-5u|0||22e5",
			"Asia/Damascus|EET EEST +03|-20 -30 -30|010101012|1XRy0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|26e5",
			"Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1XSp0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0|35e5",
			"Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1XRy0 1on0 11B0 1o00 11A0 1qo0 XA0 1qp0 1cN0 1cL0 1a10 1fz0 17d0 1in0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|18e5",
			"Asia/Hong_Kong|HKT|-80|0||73e5",
			"Asia/Jakarta|WIB|-70|0||31e6",
			"Asia/Jayapura|WIT|-90|0||26e4",
			"Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1XRA0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0|81e4",
			"Asia/Kabul|+0430|-4u|0||46e5",
			"Asia/Karachi|PKT|-50|0||24e6",
			"Asia/Kathmandu|+0545|-5J|0||12e5",
			"Asia/Sakhalin|+11|-b0|0||58e4",
			"Asia/Makassar|WITA|-80|0||15e5",
			"Asia/Manila|PST|-80|0||24e6",
			"Asia/Seoul|KST|-90|0||23e6",
			"Asia/Rangoon|+0630|-6u|0||48e5",
			"Asia/Tehran|+0330 +0430|-3u -4u|010101010|1XOIu 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0|14e6",
			"Asia/Tokyo|JST|-90|0||38e6",
			"Atlantic/Azores|-01 +00|10 0|01010101010101010101010|1XSp0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0|25e4",
			"Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1XSp0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0|27e5",
			"Atlantic/Cape_Verde|-01|10|0||50e4",
			"Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1XV4u 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0|11e5",
			"Australia/Brisbane|AEST|-a0|0||20e5",
			"Australia/Darwin|ACST|-9u|0||12e4",
			"Australia/Eucla|+0845|-8J|0||368",
			"Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|1XV30 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu|347",
			"Australia/Perth|AWST|-80|0||18e5",
			"Pacific/Easter|-05 -06|50 60|01010101010101010101010|1XVf0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|30e2",
			"Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1XSp0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0|12e5",
			"Etc/GMT-1|+01|-10|0||",
			"Pacific/Tongatapu|+13|-d0|0||75e3",
			"Pacific/Kiritimati|+14|-e0|0||51e2",
			"Etc/GMT-2|+02|-20|0||",
			"Pacific/Tahiti|-10|a0|0||18e4",
			"Pacific/Niue|-11|b0|0||12e2",
			"Etc/GMT+12|-12|c0|0||",
			"Pacific/Galapagos|-06|60|0||25e3",
			"Etc/GMT+7|-07|70|0||",
			"Pacific/Pitcairn|-08|80|0||56",
			"Pacific/Gambier|-09|90|0||125",
			"Etc/UTC|UTC|0|0||",
			"Europe/London|GMT BST|0 -10|01010101010101010101010|1XSp0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0|10e6",
			"Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1XSo0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0|67e4",
			"Europe/Moscow|MSK|-30|0||16e6",
			"Europe/Volgograd|+04 MSK|-40 -30|01|249a0|10e5",
			"Pacific/Honolulu|HST|a0|0||37e4",
			"MET|MET MEST|-10 -20|01010101010101010101010|1XSp0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0|",
			"Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|1XV20 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0|600",
			"Pacific/Apia|+14 +13|-e0 -d0|010101|1XV20 1a00 1fA0 1a00 1fA0|37e3",
			"Pacific/Fiji|+13 +12|-d0 -c0|010101|1Xnq0 20o0 pc0 2hc0 bc0|88e4",
			"Pacific/Guam|ChST|-a0|0||17e4",
			"Pacific/Marquesas|-0930|9u|0||86e2",
			"Pacific/Pago_Pago|SST|b0|0||37e2",
			"Pacific/Norfolk|+11 +12|-b0 -c0|0101010101010101010101|219P0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0|25e4"
		],
		"links": [
			"Africa/Abidjan|Africa/Accra",
			"Africa/Abidjan|Africa/Bamako",
			"Africa/Abidjan|Africa/Banjul",
			"Africa/Abidjan|Africa/Bissau",
			"Africa/Abidjan|Africa/Conakry",
			"Africa/Abidjan|Africa/Dakar",
			"Africa/Abidjan|Africa/Freetown",
			"Africa/Abidjan|Africa/Lome",
			"Africa/Abidjan|Africa/Monrovia",
			"Africa/Abidjan|Africa/Nouakchott",
			"Africa/Abidjan|Africa/Ouagadougou",
			"Africa/Abidjan|Africa/Timbuktu",
			"Africa/Abidjan|America/Danmarkshavn",
			"Africa/Abidjan|Atlantic/Reykjavik",
			"Africa/Abidjan|Atlantic/St_Helena",
			"Africa/Abidjan|Etc/GMT",
			"Africa/Abidjan|Etc/GMT+0",
			"Africa/Abidjan|Etc/GMT-0",
			"Africa/Abidjan|Etc/GMT0",
			"Africa/Abidjan|Etc/Greenwich",
			"Africa/Abidjan|GMT",
			"Africa/Abidjan|GMT+0",
			"Africa/Abidjan|GMT-0",
			"Africa/Abidjan|GMT0",
			"Africa/Abidjan|Greenwich",
			"Africa/Abidjan|Iceland",
			"Africa/Algiers|Africa/Tunis",
			"Africa/Cairo|Egypt",
			"Africa/Casablanca|Africa/El_Aaiun",
			"Africa/Johannesburg|Africa/Maseru",
			"Africa/Johannesburg|Africa/Mbabane",
			"Africa/Khartoum|Africa/Blantyre",
			"Africa/Khartoum|Africa/Bujumbura",
			"Africa/Khartoum|Africa/Gaborone",
			"Africa/Khartoum|Africa/Harare",
			"Africa/Khartoum|Africa/Kigali",
			"Africa/Khartoum|Africa/Lubumbashi",
			"Africa/Khartoum|Africa/Lusaka",
			"Africa/Khartoum|Africa/Maputo",
			"Africa/Khartoum|Africa/Windhoek",
			"Africa/Lagos|Africa/Bangui",
			"Africa/Lagos|Africa/Brazzaville",
			"Africa/Lagos|Africa/Douala",
			"Africa/Lagos|Africa/Kinshasa",
			"Africa/Lagos|Africa/Libreville",
			"Africa/Lagos|Africa/Luanda",
			"Africa/Lagos|Africa/Malabo",
			"Africa/Lagos|Africa/Ndjamena",
			"Africa/Lagos|Africa/Niamey",
			"Africa/Lagos|Africa/Porto-Novo",
			"Africa/Nairobi|Africa/Addis_Ababa",
			"Africa/Nairobi|Africa/Asmara",
			"Africa/Nairobi|Africa/Asmera",
			"Africa/Nairobi|Africa/Dar_es_Salaam",
			"Africa/Nairobi|Africa/Djibouti",
			"Africa/Nairobi|Africa/Kampala",
			"Africa/Nairobi|Africa/Mogadishu",
			"Africa/Nairobi|Indian/Antananarivo",
			"Africa/Nairobi|Indian/Comoro",
			"Africa/Nairobi|Indian/Mayotte",
			"Africa/Tripoli|Europe/Kaliningrad",
			"Africa/Tripoli|Libya",
			"America/Adak|America/Atka",
			"America/Adak|US/Aleutian",
			"America/Anchorage|America/Juneau",
			"America/Anchorage|America/Nome",
			"America/Anchorage|America/Sitka",
			"America/Anchorage|America/Yakutat",
			"America/Anchorage|US/Alaska",
			"America/Campo_Grande|America/Cuiaba",
			"America/Caracas|America/Boa_Vista",
			"America/Caracas|America/Guyana",
			"America/Caracas|America/La_Paz",
			"America/Caracas|America/Manaus",
			"America/Caracas|America/Porto_Velho",
			"America/Caracas|Brazil/West",
			"America/Caracas|Etc/GMT+4",
			"America/Chicago|America/Indiana/Knox",
			"America/Chicago|America/Indiana/Tell_City",
			"America/Chicago|America/Knox_IN",
			"America/Chicago|America/Matamoros",
			"America/Chicago|America/Menominee",
			"America/Chicago|America/North_Dakota/Beulah",
			"America/Chicago|America/North_Dakota/Center",
			"America/Chicago|America/North_Dakota/New_Salem",
			"America/Chicago|America/Rainy_River",
			"America/Chicago|America/Rankin_Inlet",
			"America/Chicago|America/Resolute",
			"America/Chicago|America/Winnipeg",
			"America/Chicago|CST6CDT",
			"America/Chicago|Canada/Central",
			"America/Chicago|US/Central",
			"America/Chicago|US/Indiana-Starke",
			"America/Denver|America/Boise",
			"America/Denver|America/Cambridge_Bay",
			"America/Denver|America/Edmonton",
			"America/Denver|America/Inuvik",
			"America/Denver|America/Shiprock",
			"America/Denver|America/Yellowknife",
			"America/Denver|Canada/Mountain",
			"America/Denver|MST7MDT",
			"America/Denver|Navajo",
			"America/Denver|US/Mountain",
			"America/Fortaleza|America/Araguaina",
			"America/Fortaleza|America/Argentina/Buenos_Aires",
			"America/Fortaleza|America/Argentina/Catamarca",
			"America/Fortaleza|America/Argentina/ComodRivadavia",
			"America/Fortaleza|America/Argentina/Cordoba",
			"America/Fortaleza|America/Argentina/Jujuy",
			"America/Fortaleza|America/Argentina/La_Rioja",
			"America/Fortaleza|America/Argentina/Mendoza",
			"America/Fortaleza|America/Argentina/Rio_Gallegos",
			"America/Fortaleza|America/Argentina/Salta",
			"America/Fortaleza|America/Argentina/San_Juan",
			"America/Fortaleza|America/Argentina/San_Luis",
			"America/Fortaleza|America/Argentina/Tucuman",
			"America/Fortaleza|America/Argentina/Ushuaia",
			"America/Fortaleza|America/Bahia",
			"America/Fortaleza|America/Belem",
			"America/Fortaleza|America/Buenos_Aires",
			"America/Fortaleza|America/Catamarca",
			"America/Fortaleza|America/Cayenne",
			"America/Fortaleza|America/Cordoba",
			"America/Fortaleza|America/Jujuy",
			"America/Fortaleza|America/Maceio",
			"America/Fortaleza|America/Mendoza",
			"America/Fortaleza|America/Montevideo",
			"America/Fortaleza|America/Paramaribo",
			"America/Fortaleza|America/Punta_Arenas",
			"America/Fortaleza|America/Recife",
			"America/Fortaleza|America/Rosario",
			"America/Fortaleza|America/Santarem",
			"America/Fortaleza|Antarctica/Palmer",
			"America/Fortaleza|Antarctica/Rothera",
			"America/Fortaleza|Atlantic/Stanley",
			"America/Fortaleza|Etc/GMT+3",
			"America/Godthab|America/Nuuk",
			"America/Halifax|America/Glace_Bay",
			"America/Halifax|America/Goose_Bay",
			"America/Halifax|America/Moncton",
			"America/Halifax|America/Thule",
			"America/Halifax|Atlantic/Bermuda",
			"America/Halifax|Canada/Atlantic",
			"America/Havana|Cuba",
			"America/Lima|America/Bogota",
			"America/Lima|America/Eirunepe",
			"America/Lima|America/Guayaquil",
			"America/Lima|America/Porto_Acre",
			"America/Lima|America/Rio_Branco",
			"America/Lima|Brazil/Acre",
			"America/Lima|Etc/GMT+5",
			"America/Los_Angeles|America/Ensenada",
			"America/Los_Angeles|America/Santa_Isabel",
			"America/Los_Angeles|America/Tijuana",
			"America/Los_Angeles|America/Vancouver",
			"America/Los_Angeles|Canada/Pacific",
			"America/Los_Angeles|Mexico/BajaNorte",
			"America/Los_Angeles|PST8PDT",
			"America/Los_Angeles|US/Pacific",
			"America/Managua|America/Belize",
			"America/Managua|America/Costa_Rica",
			"America/Managua|America/El_Salvador",
			"America/Managua|America/Guatemala",
			"America/Managua|America/Regina",
			"America/Managua|America/Swift_Current",
			"America/Managua|America/Tegucigalpa",
			"America/Managua|Canada/Saskatchewan",
			"America/Mazatlan|Mexico/BajaSur",
			"America/Mexico_City|America/Bahia_Banderas",
			"America/Mexico_City|America/Merida",
			"America/Mexico_City|America/Monterrey",
			"America/Mexico_City|Mexico/General",
			"America/New_York|America/Detroit",
			"America/New_York|America/Fort_Wayne",
			"America/New_York|America/Grand_Turk",
			"America/New_York|America/Indiana/Indianapolis",
			"America/New_York|America/Indiana/Marengo",
			"America/New_York|America/Indiana/Petersburg",
			"America/New_York|America/Indiana/Vevay",
			"America/New_York|America/Indiana/Vincennes",
			"America/New_York|America/Indiana/Winamac",
			"America/New_York|America/Indianapolis",
			"America/New_York|America/Iqaluit",
			"America/New_York|America/Kentucky/Louisville",
			"America/New_York|America/Kentucky/Monticello",
			"America/New_York|America/Louisville",
			"America/New_York|America/Montreal",
			"America/New_York|America/Nassau",
			"America/New_York|America/Nipigon",
			"America/New_York|America/Pangnirtung",
			"America/New_York|America/Port-au-Prince",
			"America/New_York|America/Thunder_Bay",
			"America/New_York|America/Toronto",
			"America/New_York|Canada/Eastern",
			"America/New_York|EST5EDT",
			"America/New_York|US/East-Indiana",
			"America/New_York|US/Eastern",
			"America/New_York|US/Michigan",
			"America/Noronha|Atlantic/South_Georgia",
			"America/Noronha|Brazil/DeNoronha",
			"America/Noronha|Etc/GMT+2",
			"America/Panama|America/Atikokan",
			"America/Panama|America/Cancun",
			"America/Panama|America/Cayman",
			"America/Panama|America/Coral_Harbour",
			"America/Panama|America/Jamaica",
			"America/Panama|EST",
			"America/Panama|Jamaica",
			"America/Phoenix|America/Creston",
			"America/Phoenix|America/Dawson_Creek",
			"America/Phoenix|America/Fort_Nelson",
			"America/Phoenix|America/Hermosillo",
			"America/Phoenix|MST",
			"America/Phoenix|US/Arizona",
			"America/Santiago|Chile/Continental",
			"America/Santo_Domingo|America/Anguilla",
			"America/Santo_Domingo|America/Antigua",
			"America/Santo_Domingo|America/Aruba",
			"America/Santo_Domingo|America/Barbados",
			"America/Santo_Domingo|America/Blanc-Sablon",
			"America/Santo_Domingo|America/Curacao",
			"America/Santo_Domingo|America/Dominica",
			"America/Santo_Domingo|America/Grenada",
			"America/Santo_Domingo|America/Guadeloupe",
			"America/Santo_Domingo|America/Kralendijk",
			"America/Santo_Domingo|America/Lower_Princes",
			"America/Santo_Domingo|America/Marigot",
			"America/Santo_Domingo|America/Martinique",
			"America/Santo_Domingo|America/Montserrat",
			"America/Santo_Domingo|America/Port_of_Spain",
			"America/Santo_Domingo|America/Puerto_Rico",
			"America/Santo_Domingo|America/St_Barthelemy",
			"America/Santo_Domingo|America/St_Kitts",
			"America/Santo_Domingo|America/St_Lucia",
			"America/Santo_Domingo|America/St_Thomas",
			"America/Santo_Domingo|America/St_Vincent",
			"America/Santo_Domingo|America/Tortola",
			"America/Santo_Domingo|America/Virgin",
			"America/Sao_Paulo|Brazil/East",
			"America/St_Johns|Canada/Newfoundland",
			"America/Whitehorse|America/Dawson",
			"America/Whitehorse|Canada/Yukon",
			"Asia/Almaty|Asia/Qostanay",
			"Asia/Bangkok|Antarctica/Davis",
			"Asia/Bangkok|Asia/Barnaul",
			"Asia/Bangkok|Asia/Ho_Chi_Minh",
			"Asia/Bangkok|Asia/Hovd",
			"Asia/Bangkok|Asia/Krasnoyarsk",
			"Asia/Bangkok|Asia/Novokuznetsk",
			"Asia/Bangkok|Asia/Novosibirsk",
			"Asia/Bangkok|Asia/Phnom_Penh",
			"Asia/Bangkok|Asia/Saigon",
			"Asia/Bangkok|Asia/Tomsk",
			"Asia/Bangkok|Asia/Vientiane",
			"Asia/Bangkok|Etc/GMT-7",
			"Asia/Bangkok|Indian/Christmas",
			"Asia/Chita|Asia/Dili",
			"Asia/Chita|Asia/Khandyga",
			"Asia/Chita|Asia/Yakutsk",
			"Asia/Chita|Etc/GMT-9",
			"Asia/Chita|Pacific/Palau",
			"Asia/Dhaka|Asia/Bishkek",
			"Asia/Dhaka|Asia/Dacca",
			"Asia/Dhaka|Asia/Kashgar",
			"Asia/Dhaka|Asia/Omsk",
			"Asia/Dhaka|Asia/Thimbu",
			"Asia/Dhaka|Asia/Thimphu",
			"Asia/Dhaka|Asia/Urumqi",
			"Asia/Dhaka|Etc/GMT-6",
			"Asia/Dhaka|Indian/Chagos",
			"Asia/Dubai|Asia/Baku",
			"Asia/Dubai|Asia/Muscat",
			"Asia/Dubai|Asia/Tbilisi",
			"Asia/Dubai|Asia/Yerevan",
			"Asia/Dubai|Etc/GMT-4",
			"Asia/Dubai|Europe/Astrakhan",
			"Asia/Dubai|Europe/Samara",
			"Asia/Dubai|Europe/Saratov",
			"Asia/Dubai|Europe/Ulyanovsk",
			"Asia/Dubai|Indian/Mahe",
			"Asia/Dubai|Indian/Mauritius",
			"Asia/Dubai|Indian/Reunion",
			"Asia/Gaza|Asia/Hebron",
			"Asia/Hong_Kong|Hongkong",
			"Asia/Jakarta|Asia/Pontianak",
			"Asia/Jerusalem|Asia/Tel_Aviv",
			"Asia/Jerusalem|Israel",
			"Asia/Kamchatka|Asia/Anadyr",
			"Asia/Kamchatka|Etc/GMT-12",
			"Asia/Kamchatka|Kwajalein",
			"Asia/Kamchatka|Pacific/Funafuti",
			"Asia/Kamchatka|Pacific/Kwajalein",
			"Asia/Kamchatka|Pacific/Majuro",
			"Asia/Kamchatka|Pacific/Nauru",
			"Asia/Kamchatka|Pacific/Tarawa",
			"Asia/Kamchatka|Pacific/Wake",
			"Asia/Kamchatka|Pacific/Wallis",
			"Asia/Kathmandu|Asia/Katmandu",
			"Asia/Kolkata|Asia/Calcutta",
			"Asia/Kuala_Lumpur|Asia/Brunei",
			"Asia/Kuala_Lumpur|Asia/Choibalsan",
			"Asia/Kuala_Lumpur|Asia/Irkutsk",
			"Asia/Kuala_Lumpur|Asia/Kuching",
			"Asia/Kuala_Lumpur|Asia/Singapore",
			"Asia/Kuala_Lumpur|Asia/Ulaanbaatar",
			"Asia/Kuala_Lumpur|Asia/Ulan_Bator",
			"Asia/Kuala_Lumpur|Etc/GMT-8",
			"Asia/Kuala_Lumpur|Singapore",
			"Asia/Makassar|Asia/Ujung_Pandang",
			"Asia/Rangoon|Asia/Yangon",
			"Asia/Rangoon|Indian/Cocos",
			"Asia/Sakhalin|Asia/Magadan",
			"Asia/Sakhalin|Asia/Srednekolymsk",
			"Asia/Sakhalin|Etc/GMT-11",
			"Asia/Sakhalin|Pacific/Bougainville",
			"Asia/Sakhalin|Pacific/Efate",
			"Asia/Sakhalin|Pacific/Guadalcanal",
			"Asia/Sakhalin|Pacific/Kosrae",
			"Asia/Sakhalin|Pacific/Noumea",
			"Asia/Sakhalin|Pacific/Pohnpei",
			"Asia/Sakhalin|Pacific/Ponape",
			"Asia/Seoul|Asia/Pyongyang",
			"Asia/Seoul|ROK",
			"Asia/Shanghai|Asia/Chongqing",
			"Asia/Shanghai|Asia/Chungking",
			"Asia/Shanghai|Asia/Harbin",
			"Asia/Shanghai|Asia/Macao",
			"Asia/Shanghai|Asia/Macau",
			"Asia/Shanghai|Asia/Taipei",
			"Asia/Shanghai|PRC",
			"Asia/Shanghai|ROC",
			"Asia/Tashkent|Antarctica/Mawson",
			"Asia/Tashkent|Asia/Aqtau",
			"Asia/Tashkent|Asia/Aqtobe",
			"Asia/Tashkent|Asia/Ashgabat",
			"Asia/Tashkent|Asia/Ashkhabad",
			"Asia/Tashkent|Asia/Atyrau",
			"Asia/Tashkent|Asia/Dushanbe",
			"Asia/Tashkent|Asia/Oral",
			"Asia/Tashkent|Asia/Qyzylorda",
			"Asia/Tashkent|Asia/Samarkand",
			"Asia/Tashkent|Asia/Yekaterinburg",
			"Asia/Tashkent|Etc/GMT-5",
			"Asia/Tashkent|Indian/Kerguelen",
			"Asia/Tashkent|Indian/Maldives",
			"Asia/Tehran|Iran",
			"Asia/Tokyo|Japan",
			"Asia/Vladivostok|Antarctica/DumontDUrville",
			"Asia/Vladivostok|Asia/Ust-Nera",
			"Asia/Vladivostok|Etc/GMT-10",
			"Asia/Vladivostok|Pacific/Chuuk",
			"Asia/Vladivostok|Pacific/Port_Moresby",
			"Asia/Vladivostok|Pacific/Truk",
			"Asia/Vladivostok|Pacific/Yap",
			"Atlantic/Cape_Verde|Etc/GMT+1",
			"Australia/Adelaide|Australia/Broken_Hill",
			"Australia/Adelaide|Australia/South",
			"Australia/Adelaide|Australia/Yancowinna",
			"Australia/Brisbane|Australia/Lindeman",
			"Australia/Brisbane|Australia/Queensland",
			"Australia/Darwin|Australia/North",
			"Australia/Lord_Howe|Australia/LHI",
			"Australia/Perth|Australia/West",
			"Australia/Sydney|Antarctica/Macquarie",
			"Australia/Sydney|Australia/ACT",
			"Australia/Sydney|Australia/Canberra",
			"Australia/Sydney|Australia/Currie",
			"Australia/Sydney|Australia/Hobart",
			"Australia/Sydney|Australia/Melbourne",
			"Australia/Sydney|Australia/NSW",
			"Australia/Sydney|Australia/Tasmania",
			"Australia/Sydney|Australia/Victoria",
			"Etc/UTC|Etc/UCT",
			"Etc/UTC|Etc/Universal",
			"Etc/UTC|Etc/Zulu",
			"Etc/UTC|UCT",
			"Etc/UTC|UTC",
			"Etc/UTC|Universal",
			"Etc/UTC|Zulu",
			"Europe/Athens|Asia/Famagusta",
			"Europe/Athens|Asia/Nicosia",
			"Europe/Athens|EET",
			"Europe/Athens|Europe/Bucharest",
			"Europe/Athens|Europe/Helsinki",
			"Europe/Athens|Europe/Kiev",
			"Europe/Athens|Europe/Kyiv",
			"Europe/Athens|Europe/Mariehamn",
			"Europe/Athens|Europe/Nicosia",
			"Europe/Athens|Europe/Riga",
			"Europe/Athens|Europe/Sofia",
			"Europe/Athens|Europe/Tallinn",
			"Europe/Athens|Europe/Uzhgorod",
			"Europe/Athens|Europe/Vilnius",
			"Europe/Athens|Europe/Zaporozhye",
			"Europe/Chisinau|Europe/Tiraspol",
			"Europe/Dublin|Eire",
			"Europe/Istanbul|Antarctica/Syowa",
			"Europe/Istanbul|Asia/Aden",
			"Europe/Istanbul|Asia/Baghdad",
			"Europe/Istanbul|Asia/Bahrain",
			"Europe/Istanbul|Asia/Istanbul",
			"Europe/Istanbul|Asia/Kuwait",
			"Europe/Istanbul|Asia/Qatar",
			"Europe/Istanbul|Asia/Riyadh",
			"Europe/Istanbul|Etc/GMT-3",
			"Europe/Istanbul|Europe/Minsk",
			"Europe/Istanbul|Turkey",
			"Europe/Lisbon|Atlantic/Canary",
			"Europe/Lisbon|Atlantic/Faeroe",
			"Europe/Lisbon|Atlantic/Faroe",
			"Europe/Lisbon|Atlantic/Madeira",
			"Europe/Lisbon|Portugal",
			"Europe/Lisbon|WET",
			"Europe/London|Europe/Belfast",
			"Europe/London|Europe/Guernsey",
			"Europe/London|Europe/Isle_of_Man",
			"Europe/London|Europe/Jersey",
			"Europe/London|GB",
			"Europe/London|GB-Eire",
			"Europe/Moscow|Europe/Kirov",
			"Europe/Moscow|Europe/Simferopol",
			"Europe/Moscow|W-SU",
			"Europe/Paris|Africa/Ceuta",
			"Europe/Paris|Arctic/Longyearbyen",
			"Europe/Paris|Atlantic/Jan_Mayen",
			"Europe/Paris|CET",
			"Europe/Paris|Europe/Amsterdam",
			"Europe/Paris|Europe/Andorra",
			"Europe/Paris|Europe/Belgrade",
			"Europe/Paris|Europe/Berlin",
			"Europe/Paris|Europe/Bratislava",
			"Europe/Paris|Europe/Brussels",
			"Europe/Paris|Europe/Budapest",
			"Europe/Paris|Europe/Busingen",
			"Europe/Paris|Europe/Copenhagen",
			"Europe/Paris|Europe/Gibraltar",
			"Europe/Paris|Europe/Ljubljana",
			"Europe/Paris|Europe/Luxembourg",
			"Europe/Paris|Europe/Madrid",
			"Europe/Paris|Europe/Malta",
			"Europe/Paris|Europe/Monaco",
			"Europe/Paris|Europe/Oslo",
			"Europe/Paris|Europe/Podgorica",
			"Europe/Paris|Europe/Prague",
			"Europe/Paris|Europe/Rome",
			"Europe/Paris|Europe/San_Marino",
			"Europe/Paris|Europe/Sarajevo",
			"Europe/Paris|Europe/Skopje",
			"Europe/Paris|Europe/Stockholm",
			"Europe/Paris|Europe/Tirane",
			"Europe/Paris|Europe/Vaduz",
			"Europe/Paris|Europe/Vatican",
			"Europe/Paris|Europe/Vienna",
			"Europe/Paris|Europe/Warsaw",
			"Europe/Paris|Europe/Zagreb",
			"Europe/Paris|Europe/Zurich",
			"Europe/Paris|Poland",
			"Pacific/Auckland|Antarctica/McMurdo",
			"Pacific/Auckland|Antarctica/South_Pole",
			"Pacific/Auckland|NZ",
			"Pacific/Chatham|NZ-CHAT",
			"Pacific/Easter|Chile/EasterIsland",
			"Pacific/Galapagos|Etc/GMT+6",
			"Pacific/Gambier|Etc/GMT+9",
			"Pacific/Guam|Pacific/Saipan",
			"Pacific/Honolulu|HST",
			"Pacific/Honolulu|Pacific/Johnston",
			"Pacific/Honolulu|US/Hawaii",
			"Pacific/Kiritimati|Etc/GMT-14",
			"Pacific/Niue|Etc/GMT+11",
			"Pacific/Pago_Pago|Pacific/Midway",
			"Pacific/Pago_Pago|Pacific/Samoa",
			"Pacific/Pago_Pago|US/Samoa",
			"Pacific/Pitcairn|Etc/GMT+8",
			"Pacific/Tahiti|Etc/GMT+10",
			"Pacific/Tahiti|Pacific/Rarotonga",
			"Pacific/Tongatapu|Etc/GMT-13",
			"Pacific/Tongatapu|Pacific/Enderbury",
			"Pacific/Tongatapu|Pacific/Fakaofo",
			"Pacific/Tongatapu|Pacific/Kanton"
		],
		"countries": [
			"AD|Europe/Andorra",
			"AE|Asia/Dubai",
			"AF|Asia/Kabul",
			"AG|America/Puerto_Rico America/Antigua",
			"AI|America/Puerto_Rico America/Anguilla",
			"AL|Europe/Tirane",
			"AM|Asia/Yerevan",
			"AO|Africa/Lagos Africa/Luanda",
			"AQ|Antarctica/Casey Antarctica/Davis Antarctica/Mawson Antarctica/Palmer Antarctica/Rothera Antarctica/Troll Antarctica/Vostok Pacific/Auckland Pacific/Port_Moresby Asia/Riyadh Antarctica/McMurdo Antarctica/DumontDUrville Antarctica/Syowa",
			"AR|America/Argentina/Buenos_Aires America/Argentina/Cordoba America/Argentina/Salta America/Argentina/Jujuy America/Argentina/Tucuman America/Argentina/Catamarca America/Argentina/La_Rioja America/Argentina/San_Juan America/Argentina/Mendoza America/Argentina/San_Luis America/Argentina/Rio_Gallegos America/Argentina/Ushuaia",
			"AS|Pacific/Pago_Pago",
			"AT|Europe/Vienna",
			"AU|Australia/Lord_Howe Antarctica/Macquarie Australia/Hobart Australia/Melbourne Australia/Sydney Australia/Broken_Hill Australia/Brisbane Australia/Lindeman Australia/Adelaide Australia/Darwin Australia/Perth Australia/Eucla",
			"AW|America/Puerto_Rico America/Aruba",
			"AX|Europe/Helsinki Europe/Mariehamn",
			"AZ|Asia/Baku",
			"BA|Europe/Belgrade Europe/Sarajevo",
			"BB|America/Barbados",
			"BD|Asia/Dhaka",
			"BE|Europe/Brussels",
			"BF|Africa/Abidjan Africa/Ouagadougou",
			"BG|Europe/Sofia",
			"BH|Asia/Qatar Asia/Bahrain",
			"BI|Africa/Maputo Africa/Bujumbura",
			"BJ|Africa/Lagos Africa/Porto-Novo",
			"BL|America/Puerto_Rico America/St_Barthelemy",
			"BM|Atlantic/Bermuda",
			"BN|Asia/Kuching Asia/Brunei",
			"BO|America/La_Paz",
			"BQ|America/Puerto_Rico America/Kralendijk",
			"BR|America/Noronha America/Belem America/Fortaleza America/Recife America/Araguaina America/Maceio America/Bahia America/Sao_Paulo America/Campo_Grande America/Cuiaba America/Santarem America/Porto_Velho America/Boa_Vista America/Manaus America/Eirunepe America/Rio_Branco",
			"BS|America/Toronto America/Nassau",
			"BT|Asia/Thimphu",
			"BW|Africa/Maputo Africa/Gaborone",
			"BY|Europe/Minsk",
			"BZ|America/Belize",
			"CA|America/St_Johns America/Halifax America/Glace_Bay America/Moncton America/Goose_Bay America/Toronto America/Iqaluit America/Winnipeg America/Resolute America/Rankin_Inlet America/Regina America/Swift_Current America/Edmonton America/Cambridge_Bay America/Inuvik America/Dawson_Creek America/Fort_Nelson America/Whitehorse America/Dawson America/Vancouver America/Panama America/Puerto_Rico America/Phoenix America/Blanc-Sablon America/Atikokan America/Creston",
			"CC|Asia/Yangon Indian/Cocos",
			"CD|Africa/Maputo Africa/Lagos Africa/Kinshasa Africa/Lubumbashi",
			"CF|Africa/Lagos Africa/Bangui",
			"CG|Africa/Lagos Africa/Brazzaville",
			"CH|Europe/Zurich",
			"CI|Africa/Abidjan",
			"CK|Pacific/Rarotonga",
			"CL|America/Santiago America/Punta_Arenas Pacific/Easter",
			"CM|Africa/Lagos Africa/Douala",
			"CN|Asia/Shanghai Asia/Urumqi",
			"CO|America/Bogota",
			"CR|America/Costa_Rica",
			"CU|America/Havana",
			"CV|Atlantic/Cape_Verde",
			"CW|America/Puerto_Rico America/Curacao",
			"CX|Asia/Bangkok Indian/Christmas",
			"CY|Asia/Nicosia Asia/Famagusta",
			"CZ|Europe/Prague",
			"DE|Europe/Zurich Europe/Berlin Europe/Busingen",
			"DJ|Africa/Nairobi Africa/Djibouti",
			"DK|Europe/Berlin Europe/Copenhagen",
			"DM|America/Puerto_Rico America/Dominica",
			"DO|America/Santo_Domingo",
			"DZ|Africa/Algiers",
			"EC|America/Guayaquil Pacific/Galapagos",
			"EE|Europe/Tallinn",
			"EG|Africa/Cairo",
			"EH|Africa/El_Aaiun",
			"ER|Africa/Nairobi Africa/Asmara",
			"ES|Europe/Madrid Africa/Ceuta Atlantic/Canary",
			"ET|Africa/Nairobi Africa/Addis_Ababa",
			"FI|Europe/Helsinki",
			"FJ|Pacific/Fiji",
			"FK|Atlantic/Stanley",
			"FM|Pacific/Kosrae Pacific/Port_Moresby Pacific/Guadalcanal Pacific/Chuuk Pacific/Pohnpei",
			"FO|Atlantic/Faroe",
			"FR|Europe/Paris",
			"GA|Africa/Lagos Africa/Libreville",
			"GB|Europe/London",
			"GD|America/Puerto_Rico America/Grenada",
			"GE|Asia/Tbilisi",
			"GF|America/Cayenne",
			"GG|Europe/London Europe/Guernsey",
			"GH|Africa/Abidjan Africa/Accra",
			"GI|Europe/Gibraltar",
			"GL|America/Nuuk America/Danmarkshavn America/Scoresbysund America/Thule",
			"GM|Africa/Abidjan Africa/Banjul",
			"GN|Africa/Abidjan Africa/Conakry",
			"GP|America/Puerto_Rico America/Guadeloupe",
			"GQ|Africa/Lagos Africa/Malabo",
			"GR|Europe/Athens",
			"GS|Atlantic/South_Georgia",
			"GT|America/Guatemala",
			"GU|Pacific/Guam",
			"GW|Africa/Bissau",
			"GY|America/Guyana",
			"HK|Asia/Hong_Kong",
			"HN|America/Tegucigalpa",
			"HR|Europe/Belgrade Europe/Zagreb",
			"HT|America/Port-au-Prince",
			"HU|Europe/Budapest",
			"ID|Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Jayapura",
			"IE|Europe/Dublin",
			"IL|Asia/Jerusalem",
			"IM|Europe/London Europe/Isle_of_Man",
			"IN|Asia/Kolkata",
			"IO|Indian/Chagos",
			"IQ|Asia/Baghdad",
			"IR|Asia/Tehran",
			"IS|Africa/Abidjan Atlantic/Reykjavik",
			"IT|Europe/Rome",
			"JE|Europe/London Europe/Jersey",
			"JM|America/Jamaica",
			"JO|Asia/Amman",
			"JP|Asia/Tokyo",
			"KE|Africa/Nairobi",
			"KG|Asia/Bishkek",
			"KH|Asia/Bangkok Asia/Phnom_Penh",
			"KI|Pacific/Tarawa Pacific/Kanton Pacific/Kiritimati",
			"KM|Africa/Nairobi Indian/Comoro",
			"KN|America/Puerto_Rico America/St_Kitts",
			"KP|Asia/Pyongyang",
			"KR|Asia/Seoul",
			"KW|Asia/Riyadh Asia/Kuwait",
			"KY|America/Panama America/Cayman",
			"KZ|Asia/Almaty Asia/Qyzylorda Asia/Qostanay Asia/Aqtobe Asia/Aqtau Asia/Atyrau Asia/Oral",
			"LA|Asia/Bangkok Asia/Vientiane",
			"LB|Asia/Beirut",
			"LC|America/Puerto_Rico America/St_Lucia",
			"LI|Europe/Zurich Europe/Vaduz",
			"LK|Asia/Colombo",
			"LR|Africa/Monrovia",
			"LS|Africa/Johannesburg Africa/Maseru",
			"LT|Europe/Vilnius",
			"LU|Europe/Brussels Europe/Luxembourg",
			"LV|Europe/Riga",
			"LY|Africa/Tripoli",
			"MA|Africa/Casablanca",
			"MC|Europe/Paris Europe/Monaco",
			"MD|Europe/Chisinau",
			"ME|Europe/Belgrade Europe/Podgorica",
			"MF|America/Puerto_Rico America/Marigot",
			"MG|Africa/Nairobi Indian/Antananarivo",
			"MH|Pacific/Tarawa Pacific/Kwajalein Pacific/Majuro",
			"MK|Europe/Belgrade Europe/Skopje",
			"ML|Africa/Abidjan Africa/Bamako",
			"MM|Asia/Yangon",
			"MN|Asia/Ulaanbaatar Asia/Hovd Asia/Choibalsan",
			"MO|Asia/Macau",
			"MP|Pacific/Guam Pacific/Saipan",
			"MQ|America/Martinique",
			"MR|Africa/Abidjan Africa/Nouakchott",
			"MS|America/Puerto_Rico America/Montserrat",
			"MT|Europe/Malta",
			"MU|Indian/Mauritius",
			"MV|Indian/Maldives",
			"MW|Africa/Maputo Africa/Blantyre",
			"MX|America/Mexico_City America/Cancun America/Merida America/Monterrey America/Matamoros America/Chihuahua America/Ciudad_Juarez America/Ojinaga America/Mazatlan America/Bahia_Banderas America/Hermosillo America/Tijuana",
			"MY|Asia/Kuching Asia/Singapore Asia/Kuala_Lumpur",
			"MZ|Africa/Maputo",
			"NA|Africa/Windhoek",
			"NC|Pacific/Noumea",
			"NE|Africa/Lagos Africa/Niamey",
			"NF|Pacific/Norfolk",
			"NG|Africa/Lagos",
			"NI|America/Managua",
			"NL|Europe/Brussels Europe/Amsterdam",
			"NO|Europe/Berlin Europe/Oslo",
			"NP|Asia/Kathmandu",
			"NR|Pacific/Nauru",
			"NU|Pacific/Niue",
			"NZ|Pacific/Auckland Pacific/Chatham",
			"OM|Asia/Dubai Asia/Muscat",
			"PA|America/Panama",
			"PE|America/Lima",
			"PF|Pacific/Tahiti Pacific/Marquesas Pacific/Gambier",
			"PG|Pacific/Port_Moresby Pacific/Bougainville",
			"PH|Asia/Manila",
			"PK|Asia/Karachi",
			"PL|Europe/Warsaw",
			"PM|America/Miquelon",
			"PN|Pacific/Pitcairn",
			"PR|America/Puerto_Rico",
			"PS|Asia/Gaza Asia/Hebron",
			"PT|Europe/Lisbon Atlantic/Madeira Atlantic/Azores",
			"PW|Pacific/Palau",
			"PY|America/Asuncion",
			"QA|Asia/Qatar",
			"RE|Asia/Dubai Indian/Reunion",
			"RO|Europe/Bucharest",
			"RS|Europe/Belgrade",
			"RU|Europe/Kaliningrad Europe/Moscow Europe/Simferopol Europe/Kirov Europe/Volgograd Europe/Astrakhan Europe/Saratov Europe/Ulyanovsk Europe/Samara Asia/Yekaterinburg Asia/Omsk Asia/Novosibirsk Asia/Barnaul Asia/Tomsk Asia/Novokuznetsk Asia/Krasnoyarsk Asia/Irkutsk Asia/Chita Asia/Yakutsk Asia/Khandyga Asia/Vladivostok Asia/Ust-Nera Asia/Magadan Asia/Sakhalin Asia/Srednekolymsk Asia/Kamchatka Asia/Anadyr",
			"RW|Africa/Maputo Africa/Kigali",
			"SA|Asia/Riyadh",
			"SB|Pacific/Guadalcanal",
			"SC|Asia/Dubai Indian/Mahe",
			"SD|Africa/Khartoum",
			"SE|Europe/Berlin Europe/Stockholm",
			"SG|Asia/Singapore",
			"SH|Africa/Abidjan Atlantic/St_Helena",
			"SI|Europe/Belgrade Europe/Ljubljana",
			"SJ|Europe/Berlin Arctic/Longyearbyen",
			"SK|Europe/Prague Europe/Bratislava",
			"SL|Africa/Abidjan Africa/Freetown",
			"SM|Europe/Rome Europe/San_Marino",
			"SN|Africa/Abidjan Africa/Dakar",
			"SO|Africa/Nairobi Africa/Mogadishu",
			"SR|America/Paramaribo",
			"SS|Africa/Juba",
			"ST|Africa/Sao_Tome",
			"SV|America/El_Salvador",
			"SX|America/Puerto_Rico America/Lower_Princes",
			"SY|Asia/Damascus",
			"SZ|Africa/Johannesburg Africa/Mbabane",
			"TC|America/Grand_Turk",
			"TD|Africa/Ndjamena",
			"TF|Asia/Dubai Indian/Maldives Indian/Kerguelen",
			"TG|Africa/Abidjan Africa/Lome",
			"TH|Asia/Bangkok",
			"TJ|Asia/Dushanbe",
			"TK|Pacific/Fakaofo",
			"TL|Asia/Dili",
			"TM|Asia/Ashgabat",
			"TN|Africa/Tunis",
			"TO|Pacific/Tongatapu",
			"TR|Europe/Istanbul",
			"TT|America/Puerto_Rico America/Port_of_Spain",
			"TV|Pacific/Tarawa Pacific/Funafuti",
			"TW|Asia/Taipei",
			"TZ|Africa/Nairobi Africa/Dar_es_Salaam",
			"UA|Europe/Simferopol Europe/Kyiv",
			"UG|Africa/Nairobi Africa/Kampala",
			"UM|Pacific/Pago_Pago Pacific/Tarawa Pacific/Midway Pacific/Wake",
			"US|America/New_York America/Detroit America/Kentucky/Louisville America/Kentucky/Monticello America/Indiana/Indianapolis America/Indiana/Vincennes America/Indiana/Winamac America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Vevay America/Chicago America/Indiana/Tell_City America/Indiana/Knox America/Menominee America/North_Dakota/Center America/North_Dakota/New_Salem America/North_Dakota/Beulah America/Denver America/Boise America/Phoenix America/Los_Angeles America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak Pacific/Honolulu",
			"UY|America/Montevideo",
			"UZ|Asia/Samarkand Asia/Tashkent",
			"VA|Europe/Rome Europe/Vatican",
			"VC|America/Puerto_Rico America/St_Vincent",
			"VE|America/Caracas",
			"VG|America/Puerto_Rico America/Tortola",
			"VI|America/Puerto_Rico America/St_Thomas",
			"VN|Asia/Bangkok Asia/Ho_Chi_Minh",
			"VU|Pacific/Efate",
			"WF|Pacific/Tarawa Pacific/Wallis",
			"WS|Pacific/Apia",
			"YE|Asia/Riyadh Asia/Aden",
			"YT|Africa/Nairobi Indian/Mayotte",
			"ZA|Africa/Johannesburg",
			"ZM|Africa/Maputo Africa/Lusaka",
			"ZW|Africa/Maputo Africa/Harare"
		]
	});


	return moment;
}));
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';

    //! moment.js locale configuration

    var ptBr = moment.defineLocale('pt-br', {
        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split(
            '_'
        ),
        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays:
            'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split(
                '_'
            ),
        weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
        weekdaysMin: 'do_2ª_3ª_4ª_5ª_6ª_sá'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm',
        },
        calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return this.day() === 0 || this.day() === 6
                    ? '[Último] dddd [às] LT' // Saturday + Sunday
                    : '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L',
        },
        relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'poucos segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos',
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        invalidDate: 'Data inválida',
    });

    return ptBr;

})));

// moment-timezone-localization for lang code: pt

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';


moment.tz.localizedNames = function() {
  return [{"value":"Africa/Abidjan","name":"Abidjan","id":"Africa/Abidjan"},{"value":"Africa/Accra","name":"Acra","id":"Africa/Accra"},{"value":"Africa/Addis_Ababa","name":"Adis Abeba","id":"Africa/Addis_Ababa"},{"value":"Africa/Algiers","name":"Argel","id":"Africa/Algiers"},{"value":"Africa/Asmera","name":"Asmara","id":"Africa/Asmera"},{"value":"Africa/Bamako","name":"Bamako","id":"Africa/Bamako"},{"value":"Africa/Bangui","name":"Bangui","id":"Africa/Bangui"},{"value":"Africa/Banjul","name":"Banjul","id":"Africa/Banjul"},{"value":"Africa/Bissau","name":"Bissau","id":"Africa/Bissau"},{"value":"Africa/Blantyre","name":"Blantyre","id":"Africa/Blantyre"},{"value":"Africa/Brazzaville","name":"Brazzaville","id":"Africa/Brazzaville"},{"value":"Africa/Bujumbura","name":"Bujumbura","id":"Africa/Bujumbura"},{"value":"Africa/Cairo","name":"Cairo","id":"Africa/Cairo"},{"value":"Africa/Casablanca","name":"Casablanca","id":"Africa/Casablanca"},{"value":"Africa/Conakry","name":"Conacri","id":"Africa/Conakry"},{"value":"Africa/Dakar","name":"Dakar","id":"Africa/Dakar"},{"value":"Africa/Dar_es_Salaam","name":"Dar es Salaam","id":"Africa/Dar_es_Salaam"},{"value":"Africa/Djibouti","name":"Djibuti","id":"Africa/Djibouti"},{"value":"Africa/Douala","name":"Douala","id":"Africa/Douala"},{"value":"Africa/El_Aaiun","name":"El Aaiún","id":"Africa/El_Aaiun"},{"value":"Africa/Freetown","name":"Freetown","id":"Africa/Freetown"},{"value":"Africa/Gaborone","name":"Gaborone","id":"Africa/Gaborone"},{"value":"Africa/Harare","name":"Harare","id":"Africa/Harare"},{"value":"Africa/Johannesburg","name":"Joanesburgo","id":"Africa/Johannesburg"},{"value":"Africa/Juba","name":"Juba","id":"Africa/Juba"},{"value":"Africa/Kampala","name":"Kampala","id":"Africa/Kampala"},{"value":"Africa/Khartoum","name":"Cartum","id":"Africa/Khartoum"},{"value":"Africa/Kigali","name":"Kigali","id":"Africa/Kigali"},{"value":"Africa/Kinshasa","name":"Kinshasa","id":"Africa/Kinshasa"},{"value":"Africa/Lagos","name":"Lagos","id":"Africa/Lagos"},{"value":"Africa/Libreville","name":"Libreville","id":"Africa/Libreville"},{"value":"Africa/Lome","name":"Lomé","id":"Africa/Lome"},{"value":"Africa/Luanda","name":"Luanda","id":"Africa/Luanda"},{"value":"Africa/Lubumbashi","name":"Lubumbashi","id":"Africa/Lubumbashi"},{"value":"Africa/Lusaka","name":"Lusaka","id":"Africa/Lusaka"},{"value":"Africa/Malabo","name":"Malabo","id":"Africa/Malabo"},{"value":"Africa/Maputo","name":"Maputo","id":"Africa/Maputo"},{"value":"Africa/Maseru","name":"Maseru","id":"Africa/Maseru"},{"value":"Africa/Mbabane","name":"Mbabane","id":"Africa/Mbabane"},{"value":"Africa/Mogadishu","name":"Mogadíscio","id":"Africa/Mogadishu"},{"value":"Africa/Monrovia","name":"Monróvia","id":"Africa/Monrovia"},{"value":"Africa/Nairobi","name":"Nairóbi","id":"Africa/Nairobi"},{"value":"Africa/Ndjamena","name":"N’Djamena","id":"Africa/Ndjamena"},{"value":"Africa/Niamey","name":"Niamey","id":"Africa/Niamey"},{"value":"Africa/Nouakchott","name":"Nouakchott","id":"Africa/Nouakchott"},{"value":"Africa/Ouagadougou","name":"Ouagadougou","id":"Africa/Ouagadougou"},{"value":"Africa/Porto-Novo","name":"Porto Novo","id":"Africa/Porto-Novo"},{"value":"Africa/Sao_Tome","name":"São Tomé","id":"Africa/Sao_Tome"},{"value":"Africa/Tripoli","name":"Trípoli","id":"Africa/Tripoli"},{"value":"Africa/Tunis","name":"Túnis","id":"Africa/Tunis"},{"value":"Africa/Windhoek","name":"Windhoek","id":"Africa/Windhoek"},{"value":"America/Adak","name":"Adak","id":"America/Adak"},{"value":"America/Anchorage","name":"Anchorage","id":"America/Anchorage"},{"value":"America/Antigua","name":"Antígua","id":"America/Antigua"},{"value":"America/Araguaina","name":"Araguaína","id":"America/Araguaina"},{"value":"America/Argentina/La_Rioja","name":"La Rioja","id":"America/Argentina/La_Rioja"},{"value":"America/Argentina/Rio_Gallegos","name":"Rio Gallegos","id":"America/Argentina/Rio_Gallegos"},{"value":"America/Argentina/Salta","name":"Salta","id":"America/Argentina/Salta"},{"value":"America/Argentina/San_Juan","name":"San Juan","id":"America/Argentina/San_Juan"},{"value":"America/Argentina/San_Luis","name":"San Luis","id":"America/Argentina/San_Luis"},{"value":"America/Argentina/Tucuman","name":"Tucumã","id":"America/Argentina/Tucuman"},{"value":"America/Argentina/Ushuaia","name":"Ushuaia","id":"America/Argentina/Ushuaia"},{"value":"America/Aruba","name":"Aruba","id":"America/Aruba"},{"value":"America/Asuncion","name":"Assunção","id":"America/Asuncion"},{"value":"America/Bahia","name":"Bahia","id":"America/Bahia"},{"value":"America/Bahia_Banderas","name":"Bahia de Banderas","id":"America/Bahia_Banderas"},{"value":"America/Barbados","name":"Barbados","id":"America/Barbados"},{"value":"America/Belem","name":"Belém","id":"America/Belem"},{"value":"America/Belize","name":"Belize","id":"America/Belize"},{"value":"America/Blanc-Sablon","name":"Blanc-Sablon","id":"America/Blanc-Sablon"},{"value":"America/Boa_Vista","name":"Boa Vista","id":"America/Boa_Vista"},{"value":"America/Bogota","name":"Bogotá","id":"America/Bogota"},{"value":"America/Boise","name":"Boise","id":"America/Boise"},{"value":"America/Buenos_Aires","name":"Buenos Aires","id":"America/Buenos_Aires"},{"value":"America/Cambridge_Bay","name":"Cambridge Bay","id":"America/Cambridge_Bay"},{"value":"America/Campo_Grande","name":"Campo Grande","id":"America/Campo_Grande"},{"value":"America/Cancun","name":"Cancún","id":"America/Cancun"},{"value":"America/Caracas","name":"Caracas","id":"America/Caracas"},{"value":"America/Catamarca","name":"Catamarca","id":"America/Catamarca"},{"value":"America/Cayenne","name":"Caiena","id":"America/Cayenne"},{"value":"America/Cayman","name":"Cayman","id":"America/Cayman"},{"value":"America/Chicago","name":"Chicago","id":"America/Chicago"},{"value":"America/Chihuahua","name":"Chihuahua","id":"America/Chihuahua"},{"value":"America/Coral_Harbour","name":"Atikokan","id":"America/Coral_Harbour"},{"value":"America/Cordoba","name":"Córdoba","id":"America/Cordoba"},{"value":"America/Costa_Rica","name":"Costa Rica","id":"America/Costa_Rica"},{"value":"America/Creston","name":"Creston","id":"America/Creston"},{"value":"America/Cuiaba","name":"Cuiabá","id":"America/Cuiaba"},{"value":"America/Curacao","name":"Curaçao","id":"America/Curacao"},{"value":"America/Danmarkshavn","name":"Danmarkshavn","id":"America/Danmarkshavn"},{"value":"America/Dawson","name":"Dawson","id":"America/Dawson"},{"value":"America/Dawson_Creek","name":"Dawson Creek","id":"America/Dawson_Creek"},{"value":"America/Denver","name":"Denver","id":"America/Denver"},{"value":"America/Detroit","name":"Detroit","id":"America/Detroit"},{"value":"America/Dominica","name":"Dominica","id":"America/Dominica"},{"value":"America/Edmonton","name":"Edmonton","id":"America/Edmonton"},{"value":"America/Eirunepe","name":"Eirunepé","id":"America/Eirunepe"},{"value":"America/El_Salvador","name":"El Salvador","id":"America/El_Salvador"},{"value":"America/Fort_Nelson","name":"Fort Nelson","id":"America/Fort_Nelson"},{"value":"America/Fortaleza","name":"Fortaleza","id":"America/Fortaleza"},{"value":"America/Glace_Bay","name":"Glace Bay","id":"America/Glace_Bay"},{"value":"America/Godthab","name":"Nuuk","id":"America/Godthab"},{"value":"America/Goose_Bay","name":"Goose Bay","id":"America/Goose_Bay"},{"value":"America/Grand_Turk","name":"Grand Turk","id":"America/Grand_Turk"},{"value":"America/Grenada","name":"Granada","id":"America/Grenada"},{"value":"America/Guadeloupe","name":"Guadalupe","id":"America/Guadeloupe"},{"value":"America/Guatemala","name":"Guatemala","id":"America/Guatemala"},{"value":"America/Guayaquil","name":"Guaiaquil","id":"America/Guayaquil"},{"value":"America/Guyana","name":"Guiana","id":"America/Guyana"},{"value":"America/Halifax","name":"Halifax","id":"America/Halifax"},{"value":"America/Havana","name":"Havana","id":"America/Havana"},{"value":"America/Hermosillo","name":"Hermosillo","id":"America/Hermosillo"},{"value":"America/Indiana/Knox","name":"Knox, Indiana","id":"America/Indiana/Knox"},{"value":"America/Indiana/Marengo","name":"Marengo, Indiana","id":"America/Indiana/Marengo"},{"value":"America/Indiana/Petersburg","name":"Petersburg, Indiana","id":"America/Indiana/Petersburg"},{"value":"America/Indiana/Tell_City","name":"Tell City, Indiana","id":"America/Indiana/Tell_City"},{"value":"America/Indiana/Vevay","name":"Vevay, Indiana","id":"America/Indiana/Vevay"},{"value":"America/Indiana/Vincennes","name":"Vincennes, Indiana","id":"America/Indiana/Vincennes"},{"value":"America/Indiana/Winamac","name":"Winamac, Indiana","id":"America/Indiana/Winamac"},{"value":"America/Indianapolis","name":"Indianápolis","id":"America/Indianapolis"},{"value":"America/Inuvik","name":"Inuvik","id":"America/Inuvik"},{"value":"America/Iqaluit","name":"Iqaluit","id":"America/Iqaluit"},{"value":"America/Jamaica","name":"Jamaica","id":"America/Jamaica"},{"value":"America/Jujuy","name":"Jujuy","id":"America/Jujuy"},{"value":"America/Juneau","name":"Juneau","id":"America/Juneau"},{"value":"America/Kentucky/Monticello","name":"Monticello, Kentucky","id":"America/Kentucky/Monticello"},{"value":"America/Kralendijk","name":"Kralendijk","id":"America/Kralendijk"},{"value":"America/La_Paz","name":"La Paz","id":"America/La_Paz"},{"value":"America/Lima","name":"Lima","id":"America/Lima"},{"value":"America/Los_Angeles","name":"Los Angeles","id":"America/Los_Angeles"},{"value":"America/Louisville","name":"Louisville","id":"America/Louisville"},{"value":"America/Lower_Princes","name":"Lower Prince’s Quarter","id":"America/Lower_Princes"},{"value":"America/Maceio","name":"Maceió","id":"America/Maceio"},{"value":"America/Managua","name":"Manágua","id":"America/Managua"},{"value":"America/Manaus","name":"Manaus","id":"America/Manaus"},{"value":"America/Marigot","name":"Marigot","id":"America/Marigot"},{"value":"America/Martinique","name":"Martinica","id":"America/Martinique"},{"value":"America/Matamoros","name":"Matamoros","id":"America/Matamoros"},{"value":"America/Mazatlan","name":"Mazatlan","id":"America/Mazatlan"},{"value":"America/Mendoza","name":"Mendoza","id":"America/Mendoza"},{"value":"America/Menominee","name":"Menominee","id":"America/Menominee"},{"value":"America/Merida","name":"Mérida","id":"America/Merida"},{"value":"America/Metlakatla","name":"Metlakatla","id":"America/Metlakatla"},{"value":"America/Mexico_City","name":"Cidade do México","id":"America/Mexico_City"},{"value":"America/Miquelon","name":"Miquelon","id":"America/Miquelon"},{"value":"America/Moncton","name":"Moncton","id":"America/Moncton"},{"value":"America/Monterrey","name":"Monterrey","id":"America/Monterrey"},{"value":"America/Montevideo","name":"Montevidéu","id":"America/Montevideo"},{"value":"America/Montserrat","name":"Montserrat","id":"America/Montserrat"},{"value":"America/Nassau","name":"Nassau","id":"America/Nassau"},{"value":"America/New_York","name":"Nova York","id":"America/New_York"},{"value":"America/Nipigon","name":"Nipigon","id":"America/Nipigon"},{"value":"America/Nome","name":"Nome","id":"America/Nome"},{"value":"America/Noronha","name":"Fernando de Noronha","id":"America/Noronha"},{"value":"America/North_Dakota/Beulah","name":"Beulah, Dakota do Norte","id":"America/North_Dakota/Beulah"},{"value":"America/North_Dakota/Center","name":"Center, Dakota do Norte","id":"America/North_Dakota/Center"},{"value":"America/North_Dakota/New_Salem","name":"New Salen, Dakota do Norte","id":"America/North_Dakota/New_Salem"},{"value":"America/Ojinaga","name":"Ojinaga","id":"America/Ojinaga"},{"value":"America/Panama","name":"Panamá","id":"America/Panama"},{"value":"America/Pangnirtung","name":"Pangnirtung","id":"America/Pangnirtung"},{"value":"America/Paramaribo","name":"Paramaribo","id":"America/Paramaribo"},{"value":"America/Phoenix","name":"Phoenix","id":"America/Phoenix"},{"value":"America/Port-au-Prince","name":"Porto Príncipe","id":"America/Port-au-Prince"},{"value":"America/Port_of_Spain","name":"Port of Spain","id":"America/Port_of_Spain"},{"value":"America/Porto_Velho","name":"Porto Velho","id":"America/Porto_Velho"},{"value":"America/Puerto_Rico","name":"Porto Rico","id":"America/Puerto_Rico"},{"value":"America/Punta_Arenas","name":"Punta Arenas","id":"America/Punta_Arenas"},{"value":"America/Rainy_River","name":"Rainy River","id":"America/Rainy_River"},{"value":"America/Rankin_Inlet","name":"Rankin Inlet","id":"America/Rankin_Inlet"},{"value":"America/Recife","name":"Recife","id":"America/Recife"},{"value":"America/Regina","name":"Regina","id":"America/Regina"},{"value":"America/Resolute","name":"Resolute","id":"America/Resolute"},{"value":"America/Rio_Branco","name":"Rio Branco","id":"America/Rio_Branco"},{"value":"America/Santa_Isabel","name":"Santa Isabel","id":"America/Santa_Isabel"},{"value":"America/Santarem","name":"Santarém","id":"America/Santarem"},{"value":"America/Santiago","name":"Santiago","id":"America/Santiago"},{"value":"America/Santo_Domingo","name":"Santo Domingo","id":"America/Santo_Domingo"},{"value":"America/Sao_Paulo","name":"São Paulo","id":"America/Sao_Paulo"},{"value":"America/Scoresbysund","name":"Ittoqqortoormiit","id":"America/Scoresbysund"},{"value":"America/Sitka","name":"Sitka","id":"America/Sitka"},{"value":"America/St_Barthelemy","name":"São Bartolomeu","id":"America/St_Barthelemy"},{"value":"America/St_Johns","name":"Saint John’s","id":"America/St_Johns"},{"value":"America/St_Kitts","name":"São Cristóvão","id":"America/St_Kitts"},{"value":"America/St_Lucia","name":"Santa Lúcia","id":"America/St_Lucia"},{"value":"America/St_Thomas","name":"Saint Thomas","id":"America/St_Thomas"},{"value":"America/St_Vincent","name":"São Vicente","id":"America/St_Vincent"},{"value":"America/Swift_Current","name":"Swift Current","id":"America/Swift_Current"},{"value":"America/Tegucigalpa","name":"Tegucigalpa","id":"America/Tegucigalpa"},{"value":"America/Thule","name":"Thule","id":"America/Thule"},{"value":"America/Thunder_Bay","name":"Thunder Bay","id":"America/Thunder_Bay"},{"value":"America/Tijuana","name":"Tijuana","id":"America/Tijuana"},{"value":"America/Toronto","name":"Toronto","id":"America/Toronto"},{"value":"America/Tortola","name":"Tortola","id":"America/Tortola"},{"value":"America/Vancouver","name":"Vancouver","id":"America/Vancouver"},{"value":"America/Whitehorse","name":"Whitehorse","id":"America/Whitehorse"},{"value":"America/Winnipeg","name":"Winnipeg","id":"America/Winnipeg"},{"value":"America/Yakutat","name":"Yakutat","id":"America/Yakutat"},{"value":"America/Yellowknife","name":"Yellowknife","id":"America/Yellowknife"},{"value":"Antarctica/Syowa","name":"Showa","id":"Antarctica/Syowa"},{"value":"Asia/Aden","name":"Adem","id":"Asia/Aden"},{"value":"Asia/Amman","name":"Amã","id":"Asia/Amman"},{"value":"Asia/Aqtobe","name":"Aqtöbe","id":"Asia/Aqtobe"},{"value":"Asia/Ashgabat","name":"Asgabate","id":"Asia/Ashgabat"},{"value":"Asia/Baghdad","name":"Bagdá","id":"Asia/Baghdad"},{"value":"Asia/Bahrain","name":"Bahrein","id":"Asia/Bahrain"},{"value":"Asia/Beirut","name":"Beirute","id":"Asia/Beirut"},{"value":"Asia/Damascus","name":"Damasco","id":"Asia/Damascus"},{"value":"Asia/Dhaka","name":"Dacca","id":"Asia/Dhaka"},{"value":"Asia/Dushanbe","name":"Duchambe","id":"Asia/Dushanbe"},{"value":"Asia/Hebron","name":"Hebrom","id":"Asia/Hebron"},{"value":"Asia/Jakarta","name":"Jacarta","id":"Asia/Jakarta"},{"value":"Asia/Jerusalem","name":"Jerusalém","id":"Asia/Jerusalem"},{"value":"Asia/Karachi","name":"Carachi","id":"Asia/Karachi"},{"value":"Asia/Katmandu","name":"Catmandu","id":"Asia/Katmandu"},{"value":"Asia/Kuala_Lumpur","name":"Kuala Lampur","id":"Asia/Kuala_Lumpur"},{"value":"Asia/Macau","name":"Macau","id":"Asia/Macau"},{"value":"Asia/Makassar","name":"Macáçar","id":"Asia/Makassar"},{"value":"Asia/Muscat","name":"Mascate","id":"Asia/Muscat"},{"value":"Asia/Nicosia","name":"Nicósia","id":"Asia/Nicosia"},{"value":"Asia/Riyadh","name":"Riade","id":"Asia/Riyadh"},{"value":"Asia/Sakhalin","name":"Sacalina","id":"Asia/Sakhalin"},{"value":"Asia/Samarkand","name":"Samarcanda","id":"Asia/Samarkand"},{"value":"Asia/Seoul","name":"Seul","id":"Asia/Seoul"},{"value":"Asia/Shanghai","name":"Xangai","id":"Asia/Shanghai"},{"value":"Asia/Singapore","name":"Cingapura","id":"Asia/Singapore"},{"value":"Asia/Tehran","name":"Teerã","id":"Asia/Tehran"},{"value":"Asia/Thimphu","name":"Timphu","id":"Asia/Thimphu"},{"value":"Asia/Tokyo","name":"Tóquio","id":"Asia/Tokyo"},{"value":"Asia/Ulaanbaatar","name":"Ulan Bator","id":"Asia/Ulaanbaatar"},{"value":"Asia/Yekaterinburg","name":"Ecaterimburgo","id":"Asia/Yekaterinburg"},{"value":"Atlantic/Azores","name":"Açores","id":"Atlantic/Azores"},{"value":"Atlantic/Bermuda","name":"Bermudas","id":"Atlantic/Bermuda"},{"value":"Atlantic/Canary","name":"Canárias","id":"Atlantic/Canary"},{"value":"Atlantic/Cape_Verde","name":"Cabo Verde","id":"Atlantic/Cape_Verde"},{"value":"Atlantic/Faeroe","name":"Ilhas Faroe","id":"Atlantic/Faeroe"},{"value":"Atlantic/Madeira","name":"Madeira","id":"Atlantic/Madeira"},{"value":"Atlantic/Reykjavik","name":"Reykjavík","id":"Atlantic/Reykjavik"},{"value":"Atlantic/South_Georgia","name":"Geórgia do Sul","id":"Atlantic/South_Georgia"},{"value":"Atlantic/St_Helena","name":"Santa Helena","id":"Atlantic/St_Helena"},{"value":"Atlantic/Stanley","name":"Stanley","id":"Atlantic/Stanley"},{"value":"Etc/UTC","name":"Horário Universal Coordenado","id":"Etc/UTC"},{"value":"Europe/Amsterdam","name":"Amsterdã","id":"Europe/Amsterdam"},{"value":"Europe/Astrakhan","name":"Astracã","id":"Europe/Astrakhan"},{"value":"Europe/Athens","name":"Atenas","id":"Europe/Athens"},{"value":"Europe/Belgrade","name":"Belgrado","id":"Europe/Belgrade"},{"value":"Europe/Berlin","name":"Berlim","id":"Europe/Berlin"},{"value":"Europe/Brussels","name":"Bruxelas","id":"Europe/Brussels"},{"value":"Europe/Bucharest","name":"Bucareste","id":"Europe/Bucharest"},{"value":"Europe/Budapest","name":"Budapeste","id":"Europe/Budapest"},{"value":"Europe/Busingen","name":"Büsingen","id":"Europe/Busingen"},{"value":"Europe/Copenhagen","name":"Copenhague","id":"Europe/Copenhagen"},{"value":"Europe/Dublin","name":"Horário Padrão da IrlandaDublin","id":"Europe/Dublin"},{"value":"Europe/Gibraltar","name":"Gibraltar","id":"Europe/Gibraltar"},{"value":"Europe/Guernsey","name":"Guernsey","id":"Europe/Guernsey"},{"value":"Europe/Helsinki","name":"Helsinque","id":"Europe/Helsinki"},{"value":"Europe/Isle_of_Man","name":"Ilha de Man","id":"Europe/Isle_of_Man"},{"value":"Europe/Istanbul","name":"Istambul","id":"Europe/Istanbul"},{"value":"Europe/Jersey","name":"Jersey","id":"Europe/Jersey"},{"value":"Europe/Kaliningrad","name":"Kaliningrado","id":"Europe/Kaliningrad"},{"value":"Europe/Kiev","name":"Kiev","id":"Europe/Kiev"},{"value":"Europe/Lisbon","name":"Lisboa","id":"Europe/Lisbon"},{"value":"Europe/Ljubljana","name":"Liubliana","id":"Europe/Ljubljana"},{"value":"Europe/London","name":"Horário de Verão BritânicoLondres","id":"Europe/London"},{"value":"Europe/Luxembourg","name":"Luxemburgo","id":"Europe/Luxembourg"},{"value":"Europe/Madrid","name":"Madri","id":"Europe/Madrid"},{"value":"Europe/Malta","name":"Malta","id":"Europe/Malta"},{"value":"Europe/Monaco","name":"Mônaco","id":"Europe/Monaco"},{"value":"Europe/Moscow","name":"Moscou","id":"Europe/Moscow"},{"value":"Europe/Oslo","name":"Oslo","id":"Europe/Oslo"},{"value":"Europe/Paris","name":"Paris","id":"Europe/Paris"},{"value":"Europe/Prague","name":"Praga","id":"Europe/Prague"},{"value":"Europe/Riga","name":"Riga","id":"Europe/Riga"},{"value":"Europe/Rome","name":"Roma","id":"Europe/Rome"},{"value":"Europe/Sarajevo","name":"Sarajevo","id":"Europe/Sarajevo"},{"value":"Europe/Sofia","name":"Sófia","id":"Europe/Sofia"},{"value":"Europe/Stockholm","name":"Estocolmo","id":"Europe/Stockholm"},{"value":"Europe/Tirane","name":"Tirana","id":"Europe/Tirane"},{"value":"Europe/Ulyanovsk","name":"Ulianovsk","id":"Europe/Ulyanovsk"},{"value":"Europe/Vatican","name":"Vaticano","id":"Europe/Vatican"},{"value":"Europe/Vienna","name":"Viena","id":"Europe/Vienna"},{"value":"Europe/Volgograd","name":"Volgogrado","id":"Europe/Volgograd"},{"value":"Europe/Warsaw","name":"Varsóvia","id":"Europe/Warsaw"},{"value":"Europe/Zagreb","name":"Zagreb","id":"Europe/Zagreb"},{"value":"Europe/Zaporozhye","name":"Zaporizhia","id":"Europe/Zaporozhye"},{"value":"Europe/Zurich","name":"Zurique","id":"Europe/Zurich"},{"value":"Indian/Antananarivo","name":"Antananarivo","id":"Indian/Antananarivo"},{"value":"Indian/Comoro","name":"Comores","id":"Indian/Comoro"},{"value":"Indian/Mahe","name":"Mahé","id":"Indian/Mahe"},{"value":"Indian/Maldives","name":"Maldivas","id":"Indian/Maldives"},{"value":"Indian/Mauritius","name":"Maurício","id":"Indian/Mauritius"},{"value":"Indian/Mayotte","name":"Mayotte","id":"Indian/Mayotte"},{"value":"Indian/Reunion","name":"Reunião","id":"Indian/Reunion"},{"value":"Pacific/Apia","name":"Ápia","id":"Pacific/Apia"},{"value":"Pacific/Easter","name":"Ilha de Páscoa","id":"Pacific/Easter"},{"value":"Pacific/Efate","name":"Éfaté","id":"Pacific/Efate"},{"value":"Pacific/Galapagos","name":"Galápagos","id":"Pacific/Galapagos"},{"value":"Pacific/Honolulu","name":"Honolulu","id":"Pacific/Honolulu"},{"value":"Pacific/Noumea","name":"Nouméa","id":"Pacific/Noumea"},{"value":"Pacific/Tahiti","name":"Taiti","id":"Pacific/Tahiti"},{"value":"Pacific/Tarawa","name":"Taraua","id":"Pacific/Tarawa"}];
};

return moment;
})));

moment.fn.shortDateNoYear = function(){ return this.format('D MMM'); };
moment.fn.shortDate = function(){ return this.format('D MMM, YYYY'); };
moment.fn.longDate = function(){ return this.format('MMMM D, YYYY h:mma'); };
moment.fn.relativeAge = function(opts){ return Discourse.Formatter.relativeAge(this.toDate(), opts)};
