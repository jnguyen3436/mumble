function accum(s) {
	
let newString= "";
for(i = 0;i<s.length;i++){
newString = newString + s[i].toUpperCase();
for(j = 0;j<i;j++)
newString = newString + s[i].toLowerCase();
if(i<s.length-1)
newString = newString + "-"

}

return(newString);
}
