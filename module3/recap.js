var i = 0;
while(i<=12){
    console.log(i);
    i++;
}

for(var i=0; i<4; i++){
    console.log(i);
}

var favoriteSinger = 'Atif Aslam'

var singerList = ['Atif Aslam', 'sanam', 'tanvir evan', 'tahosan', 'Arijit singh'];

var sanamIndex = singerList.indexOf('sanam');
singerList[3]= 'imran';
singerList.push('neha kakkar');
singerList.pop();


if(singerList[1]=='sanam'){
    console.log('I am  singing her song');
}
else{
    console.log('I am not singing her her song');
}