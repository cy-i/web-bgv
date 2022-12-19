function $(o){ return document.getElementById(o); }
function uz(){
    var v = $("json_input").value;
	var r = v.match(/\\u[0-9a-fA-F]{4}/g);
	if(r == null) {
		$("json_input").value = v;
		return false;
	}
	for(var i = 0; i < r.length; i++){
		v = v.replace(r[i],unescape(r[i].replace("\\u","%u")));
	}
    $("json_input").value = v;
}
function zu(){
    var v = $("json_input").value.split("");
    var ascii = "";
    for (var i = 0; i < v.length; i++) {
        var code = Number(v[i].charCodeAt(0));
        if (!$("onlyzw").checked || code > 127) {
            var charAscii = code.toString(16);
            charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
            ascii += "\\u" + charAscii;
        } else {
            ascii += v[i];
        }
    }
    $("json_input").value = ascii;
}