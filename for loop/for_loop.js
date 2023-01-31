var i,j,k;

for(i=1;i<=5;i++)
{
    for(k=1;k<=(5-i); k++) {
        console.log("&nbsp");
    }
    for(j=1;j<=i;j++) {
        console.log("*");
    }
    console.log("<br/>");
}